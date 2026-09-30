---
title: "RTCRtpSender: Eigenschaft dtmf"
short-title: dtmf
slug: Web/API/RTCRtpSender/dtmf
l10n:
  sourceCommit: b60c5dad8cf10d8492f2aff491abb40bf1851b03
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`dtmf`** der Schnittstelle [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) gibt einen [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender) zurück, mit dem Sie {{Glossary("DTMF", "DTMF")}}-Töne über den Audiotrack dieses Senders senden können.

## Wert

Ein [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender), wenn es sich um einen Audiosender handelt, andernfalls `null`.

Jeder Audiosender erhält bei seiner Erstellung einen eigenen `RTCDTMFSender`. Eine Verbindung, die zwei Audiotracks sendet, verfügt daher über zwei davon. Sender für Videotracks geben `null` zurück.

Ein Wert von `dtmf`, der nicht `null` ist, bedeutet noch nicht, dass Sie Töne senden können. Die Töne werden zusammen mit dem Audio im RTP-Stream übertragen. Deshalb muss der Sender verbunden sein und Daten senden, und die beiden Kommunikationspartner müssen den Codec `audio/telephone-event` ausgehandelt haben. Prüfen Sie dazu [`canInsertDTMF`](/de/docs/Web/API/RTCDTMFSender/canInsertDTMF) oder behandeln Sie den `InvalidStateError`, den [`insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) auslöst.

## Beispiele

### Töne über einen Audiotrack senden

Dieses Beispiel fügt einer Verbindung einen Mikrofontrack hinzu und sendet eine Wählfolge, sobald die Verbindung hergestellt ist. `addTrack()` gibt den `RTCRtpSender` für den Track zurück, sodass Sie nicht danach suchen müssen.

```js
const pc = new RTCPeerConnection(configuration);

async function dial(tones) {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const [track] = stream.getAudioTracks();
  const sender = pc.addTrack(track, stream);

  // The track is an audio track, so the sender has a DTMF sender
  const dtmfSender = sender.dtmf;

  dtmfSender.addEventListener("tonechange", (event) => {
    if (event.tone === "") {
      console.log("Finished sending tones.");
    } else {
      console.log(`Sent tone: ${event.tone}`);
    }
  });

  pc.addEventListener("connectionstatechange", () => {
    if (pc.connectionState === "connected" && dtmfSender.canInsertDTMF) {
      dtmfSender.insertDTMF(tones);
    }
  });
}
```

### Audiosender einer Verbindung ermitteln

Da nur Audiosender über ein `dtmf`-Objekt verfügen, können Sie sie mithilfe dieser Eigenschaft aus dem Ergebnis von [`RTCPeerConnection.getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) auswählen:

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
- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [DTMF mit WebRTC verwenden](/de/docs/Web/API/WebRTC_API/Using_DTMF)
