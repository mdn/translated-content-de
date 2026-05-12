---
title: "RTCPeerConnectionIceErrorEvent: url-Eigenschaft"
short-title: url
slug: Web/API/RTCPeerConnectionIceErrorEvent/url
l10n:
  sourceCommit: d0d8c5609668e502f63f49508abb483cead0753b
---

{{APIRef("WebRTC")}}

Die **`url`**-Eigenschaft des [`RTCPeerConnectionIceErrorEvent`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent)-Interfaces ist ein String, der die URL des {{Glossary("STUN", "STUN")}}- oder {{Glossary("TURN", "TURN")}}-Servers angibt, bei dem der Fehler aufgetreten ist.

## Wert

Ein String.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel erstellt einen Handler für [`icecandidateerror`](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event)-Ereignisse, der menschenlesbare Nachrichten erstellt, die die lokale Netzwerkschnittstelle für die Verbindung und den ICE-Server beschreiben, der verwendet wurde, um die Verbindung herzustellen.
Anschließend wird eine Funktion aufgerufen, um diese Nachrichten und den Wert der [`errorText`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/errorText)-Eigenschaft des Ereignisses anzuzeigen.

```js
pc.addEventListener("icecandidateerror", (event) => {
  const networkInfo = `[Local interface: ${event.address}:${event.port}]`;
  const iceServerInfo = `[ICE server: ${event.url}]`;

  showMessage(event.errorText, iceServerInfo, networkInfo);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
