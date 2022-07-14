import React, { useState } from "react";
import "./ChatInput.css";
import db from "./firebase";
import { useStateValue } from "./StateProvider";
import Button from "@mui/material/Button";
import { addDoc } from 'firebase/firestore';
import { collection } from "firebase/firestore";

function ChatInput({ channelName, channelId }) {
	const [input, setInput] = useState('');
	const [{ user }] = useStateValue();

	const sendMessage = e => {
		e.preventDefault();
		console.log(typeof channelName);
        console.log(typeof channelId);
		if (channelId) {
			const ref1 = collection(db, "rooms",channelId,"messages");
			addDoc(ref1, {
				message: input, 
				// timestamp: firebase.firestore.FieldValue.serverTimestamp(), 
				user: user.displayName, 
				userImage: user.photoURL

			})
		}
	};

	return (
		<div className="chatInput">
			<form>
				<input value={input} onChange={(e) => setInput(e.target.value)} placeholder={`Message #${channelName?.toLowerCase()}`} />
				<Button type ='submit' onClick={sendMessage}>
					SEND
				</Button>
			</form>
		</div>
	);
}

export default ChatInput;
