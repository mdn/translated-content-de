---
title: "RTCPeerConnectionIceErrorEvent: errorText-Eigenschaft"
short-title: errorText
slug: Web/API/RTCPeerConnectionIceErrorEvent/errorText
l10n:
  sourceCommit: d0d8c5609668e502f63f49508abb483cead0753b
---

{{APIRef("WebRTC")}}

Die **`errorText`**-Eigenschaft des [`RTCPeerConnectionIceErrorEvent`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent)-Interfaces repräsentiert den STUN-Fehlerbegründungstext, der vom {{Glossary("STUN", "STUN")}}- oder {{Glossary("TURN", "TURN")}}-Server zurückgegeben wird, wenn während der ICE-Verhandlung ein Fehler aufgetreten ist.

Falls die Kommunikation mit dem STUN- oder TURN-Server überhaupt nicht hergestellt werden konnte, wird dies ein browserspezifischer String sein, der den Fehler erklärt.

## Wert

Ein vom STUN- oder TURN-Server zurückgegebener String oder ein browserspezifischer String, der erklärt, warum die Kommunikation mit dem Server nicht hergestellt werden konnte.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel erstellt einen Handler für [`icecandidateerror`](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event)-Events, der lesbare Nachrichten erstellt, die die lokale Netzwerkschnittstelle für die Verbindung und den ICE-Server beschreiben, der zur Verbindungsherstellung verwendet wurde. Dann wird eine Funktion aufgerufen, um diese Nachrichten und den Wert der [`errorText`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/errorText)-Eigenschaft des Events anzuzeigen.

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
