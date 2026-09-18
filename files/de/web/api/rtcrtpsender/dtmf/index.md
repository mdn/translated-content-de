---
title: "RTCRtpSender: dtmf-Eigenschaft"
short-title: dtmf
slug: Web/API/RTCRtpSender/dtmf
l10n:
  sourceCommit: 0fd1f93376bb12cf086a17c4537bbdc7e68dc331
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`dtmf`** des Interfaces [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) gibt einen [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender) zurück, mit dem Sie {{Glossary("DTMF", "DTMF")}}-Töne auf der Audiospur dieses Senders senden können.

## Wert

Ein [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender), wenn dies ein Audiosender ist, oder `null`, wenn nicht.

Jeder Audiosender erhält bei seiner Erstellung einen eigenen `RTCDTMFSender`, sodass eine Verbindung, die zwei Audiospuren sendet, zwei davon hat.
Sender für Videospuren geben `null` zurück.

Ein nicht-`null`-Wert für `dtmf` bedeutet nicht, dass Sie bereits Töne senden können.
Töne werden im RTP-Stream zusammen mit dem Audio übertragen. Daher muss der Sender verbunden sein und senden, und die beiden Peers müssen den Codec `audio/telephone-event` ausgehandelt haben.
Prüfen Sie hierfür [`canInsertDTMF`](/de/docs/Web/API/RTCDTMFSender/canInsertDTMF), oder behandeln Sie den `InvalidStateError`, den [`insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) auslöst.

## Beispiele

### Töne auf einer Audiospur senden

Dieses Beispiel fügt einer Verbindung eine Mikrofonspur hinzu und sendet anschließend eine Wählzeichenfolge, sobald die Verbindung hergestellt ist.
`addTrack()` gibt den `RTCRtpSender` für die Spur zurück, daher muss nicht danach gesucht werden.

```js
const pc = new RTCPeerConnection(configuration);

async function dial(tones) {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const [track] = stream.getAudioTracks();
  const sender = pc.addTrack(track, stream);

  // The track is an audio track, so the sender has a DTMF sender
  const dtmfSender = sender.dtmf;

  dtmfSender.addEventListener("tonechange", (event) => {
    if (event.tone == "") {
      console.log("Finished sending tones.");
    } else {
      console.log(`Sent tone: ${event.tone}`);
    }
  });

  pc.addEventListener("connectionstatechange", () => {
    if (pc.connectionState == "connected" && dtmfSender.canInsertDTMF) {
      dtmfSender.insertDTMF(tones);
    }
  });
}
```

### Die Audiosender einer Verbindung finden

Da nur Audiosender ein `dtmf`-Objekt haben, können Sie die Eigenschaft verwenden, um sie aus [`RTCPeerConnection.getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) herauszufiltern:

```js
const audioSenders = pc.getSenders().filter((sender) => sender.dtmf);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)
- [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [DTMF mit WebRTC verwenden](/de/docs/Web/API/WebRTC_API/Using_DTMF)
