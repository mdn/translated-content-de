---
title: "RTCPeerConnectionIceErrorEvent: errorText-Eigenschaft"
short-title: errorText
slug: Web/API/RTCPeerConnectionIceErrorEvent/errorText
l10n:
  sourceCommit: e81cf36acffe197d01b1ad282c3582ebd7b0b54d
---

{{APIRef("WebRTC")}}

Die **`errorText`**-Eigenschaft des [`RTCPeerConnectionIceErrorEvent`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent)-Interfaces stellt den STUN-Fehlerbegründungstext dar, der vom {{Glossary("STUN", "STUN")}}- oder {{Glossary("TURN", "TURN")}}-Server zurückgegeben wird, wenn während der ICE-Aushandlung ein Fehler aufgetreten ist.

Falls keine Kommunikation mit dem STUN- oder TURN-Server hergestellt werden konnte, ist dies ein browserspezifischer String, der den Fehler erklärt.

## Wert

Ein String, der vom STUN- oder TURN-Server zurückgegeben wird, oder ein browserspezifischer String, der erklärt, warum die Kommunikation mit dem Server nicht hergestellt werden konnte.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel erstellt einen Handler für [`icecandidateerror`](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event)-Ereignisse, der menschenlesbare Nachrichten erzeugt, die das lokale Netzwerkinterface für die Verbindung und den ICE-Server beschreiben, der zur Herstellung der Verbindung verwendet wurde.
Anschließend wird eine Funktion aufgerufen, um diese Nachrichten und den Wert der `errorText`-Eigenschaft des Ereignisses anzuzeigen.

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
