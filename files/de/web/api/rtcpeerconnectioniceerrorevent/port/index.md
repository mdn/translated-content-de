---
title: "RTCPeerConnectionIceErrorEvent: port-Eigenschaft"
short-title: port
slug: Web/API/RTCPeerConnectionIceErrorEvent/port
l10n:
  sourceCommit: d0d8c5609668e502f63f49508abb483cead0753b
---

{{APIRef("WebRTC")}}

Die **`port`**-Eigenschaft des [`RTCPeerConnectionIceErrorEvent`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent)-Interfaces stellt die Portnummer dar, über die die Kommunikation mit dem {{Glossary("STUN", "STUN")}}- oder {{Glossary("TURN", "TURN")}}-Server erfolgt.

Dies ist `null`, wenn die Verbindung nicht hergestellt wurde ([`address`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/address) ist `null`).

## Wert

Eine positive Ganzzahl.

`null`, wenn die Verbindung nicht hergestellt wurde (das heißt, wenn `address` `null` ist).

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel erstellt einen Handler für [`icecandidateerror`](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event)-Ereignisse, der menschenlesbare Nachrichten erstellt, die die lokale Netzwerkschnittstelle für die Verbindung und den ICE-Server beschreiben, der verwendet wurde, um die Verbindung zu versuchen. Anschließend wird eine Funktion aufgerufen, um diese Nachrichten und den Wert der [`errorText`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/errorText)-Eigenschaft des Ereignisses anzuzeigen.

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
