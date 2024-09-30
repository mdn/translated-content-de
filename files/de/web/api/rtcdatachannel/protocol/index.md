---
title: "RTCDataChannel: protocol-Eigenschaft"
short-title: protocol
slug: Web/API/RTCDataChannel/protocol
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die schreibgeschützte `RTCDataChannel`-Eigenschaft
**`protocol`** gibt einen String zurück, der den Namen des verwendeten Subprotokolls enthält. Wenn bei der Erstellung des Datenkanals kein Protokoll angegeben wurde, ist der Wert dieser Eigenschaft der leere String (`""`).

> [!NOTE]
> Die erlaubten Werte dieser Eigenschaft werden von der Website oder App definiert, die den Datenkanal verwendet.

Die Möglichkeit, dass jeder Kanal ein definiertes Subprotokoll haben kann, ermöglicht es Ihrer App, zum Beispiel JSON-Objekte als Nachrichten auf einem Kanal zu verwenden, während ein anderer Kanal Klartext enthält und ein weiterer rohen Binärcode oder sogar ein anderes Format.

## Wert

Ein String, der das von der App definierte Subprotokoll identifiziert, das zum Datenaustausch auf dem Kanal verwendet wird. Wenn keines festgelegt wurde, ist dies ein leerer String ("").

## Beispiel

```js
const pc = new RTCPeerConnection();
const dc = pc.createDataChannel("my channel", {
  protocol: "json",
});

function handleChannelMessage(dataChannel, msg) {
  switch (dataChannel.protocol) {
    case "json":
      /* process JSON data */
      break;
    case "raw":
      /* process raw binary data */
      break;
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)
- [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel)
