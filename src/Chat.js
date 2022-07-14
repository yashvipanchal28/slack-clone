import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import db from "./firebase.js";
import { doc, onSnapshot, orderBy, collection } from "firebase/firestore";
import Message from "./Message.js";
import ChatInput from "./ChatInput.js";

function Chat() {
	const { roomId } = useParams();
	const [roomDetails, setRoomDetails] = useState(null);
	const [roomMessages, setRoomMessages] = useState([]);

	useEffect(() => {
		if (roomId) {
			const forurl = onSnapshot(doc(db, "rooms", roomId), (snapshot) => setRoomDetails(snapshot.data()));
			const details = onSnapshot(collection(db, "rooms", roomId, "messages"), orderBy("timestamp", "asc"), (snapshot) => setRoomMessages(snapshot.docs.map((doc) => doc.data())));
		}
	}, [roomId]);

	console.log(roomDetails);
	console.log("MESSAGES >>>", roomMessages);

	return (
		<div className="chat">
			<div className="chat_header">
				<div className="chat_headerLeft">
					<h4 className="chat_channelName">
						<strong># {roomDetails?.name}</strong>
						<StarBorderIcon />
					</h4>
				</div>
				<div className="chat_headerRight">
					<p>
						<InfoOutlinedIcon /> Details
					</p>
				</div>
			</div>
			<div className="chat_messages">
				{roomMessages.map(({ message, timestamp, user, userImage }) => (
					<Message key={timestamp} message={message} timestamp={timestamp} user={user} userImage={userImage} />
				))}
			</div>
			<ChatInput channelName={roomDetails?.name} channelId={roomId} />
		</div>
	);
}

export default Chat;
