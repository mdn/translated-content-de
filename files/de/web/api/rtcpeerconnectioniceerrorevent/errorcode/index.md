---
title: "RTCPeerConnectionIceErrorEvent: errorCode-Eigenschaft"
short-title: errorCode
slug: Web/API/RTCPeerConnectionIceErrorEvent/errorCode
l10n:
  sourceCommit: d0d8c5609668e502f63f49508abb483cead0753b
---

{{APIRef("WebRTC")}}

Die **`errorCode`**-Eigenschaft der Schnittstelle [`RTCPeerConnectionIceErrorEvent`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent) repräsentiert den [STUN-Fehlercode](https://www.iana.org/assignments/stun-parameters/stun-parameters.xhtml#stun-parameters-6), der vom {{Glossary("STUN", "STUN")}}- oder {{Glossary("TURN", "TURN")}}-Server zurückgegeben wird, wenn es während der ICE-Aushandlung zu einem Fehler gekommen ist.

## Wert

Ein positiver Ganzzahlenwert, der den numerischen [STUN-Fehlercode](https://www.iana.org/assignments/stun-parameters/stun-parameters.xhtml#stun-parameters-6) angibt, der vom STUN- oder TURN-Server zurückgegeben wurde.

Wenn kein Host-Kandidat den Server erreichen kann, wird diese Eigenschaft auf die Zahl 701 gesetzt, die außerhalb des Bereichs gültiger STUN-Fehlercodes liegt.
Dieser Wert wird nur einmal pro Server-URL gemeldet und nur während der [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) `gathering`.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel erstellt einen Handler für [`icecandidateerror`](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event)-Ereignisse, der menschenlesbare Meldungen beschreibt, die die lokale Netzwerkschnittstelle für die Verbindung und den ICE-Server, der versucht wurde, die Verbindung herzustellen.
Anschließend wird eine Funktion aufgerufen, um diese Meldungen und den Wert der [`errorCode`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/errorCode)-Eigenschaft des Ereignisses anzuzeigen.

```js
pc.addEventListener("icecandidateerror", (event) => {
  const networkInfo = `[Local interface: ${event.address}:${event.port}]`;
  const iceServerInfo = `[ICE server: ${event.url}]`;

  showMessage(event.errorCode, iceServerInfo, networkInfo);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
