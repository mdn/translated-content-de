---
title: "RTCPeerConnectionIceErrorEvent: errorCode-Eigenschaft"
short-title: errorCode
slug: Web/API/RTCPeerConnectionIceErrorEvent/errorCode
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

{{APIRef("WebRTC")}}

Die **`errorCode`**-Eigenschaft des [`RTCPeerConnectionIceErrorEvent`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent)-Interface stellt den [STUN-Fehlercode](https://www.iana.org/assignments/stun-parameters#stun-parameters-6) dar, der vom {{Glossary("STUN", "STUN")}}- oder {{Glossary("TURN", "TURN")}}-Server zurückgegeben wird, wenn während der ICE-Aushandlung ein Fehler aufgetreten ist.

## Wert

Ein positiver ganzzahliger Wert, der den numerischen [STUN-Fehlercode](https://www.iana.org/assignments/stun-parameters#stun-parameters-6) angibt, der vom STUN- oder TURN-Server zurückgegeben wird.

Wenn kein Host-Kandidat den Server erreichen kann, wird diese Eigenschaft auf die Zahl 701 gesetzt, die außerhalb des Bereichs gültiger STUN-Fehlercodes liegt.
Dieser Wert wird nur einmal pro Server-URL und nur gemeldet, während [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) den Wert `gathering` hat.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel erstellt einen Handler für [`icecandidateerror`](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event)-Ereignisse, der menschenlesbare Meldungen erstellt, welche die lokale Netzwerkschnittstelle für die Verbindung und den ICE-Server beschreiben, der zum Versuch der Verbindungsherstellung verwendet wurde.
Anschließend ruft es eine Funktion auf, um diese Meldungen und den Wert der `errorCode`-Eigenschaft des Ereignisses anzuzeigen.

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
