---
title: "RTCPeerConnectionIceErrorEvent: address-Eigenschaft"
short-title: address
slug: Web/API/RTCPeerConnectionIceErrorEvent/address
l10n:
  sourceCommit: d0d8c5609668e502f63f49508abb483cead0753b
---

{{APIRef("WebRTC")}}

Die **`address`**-Eigenschaft des [`RTCPeerConnectionIceErrorEvent`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent)-Interfaces ist eine Zeichenkette, die die lokale IP-Adresse angibt, die zur Kommunikation mit dem {{Glossary("STUN", "STUN")}}- oder {{Glossary("TURN", "TURN")}}-Server verwendet wurde, als der Fehler auftrat.

## Wert

Eine Zeichenkette, die die lokale IP-Adresse der Netzwerkverbindung zum ICE-Server angibt, mit dem die Verhandlungen stattfanden, als der Fehler auftrat.
Diese Adresse identifiziert die Netzwerkschnittstelle auf dem lokalen Gerät, die verwendet wurde, um die Verbindung zum entfernten Peer zu versuchen.

Dies kann auf Systemen mit mehreren Netzanschlüssen nützlich sein—Geräte mit mehr als einer Netzwerkverbindung—um festzustellen, welche Netzwerkschnittstelle verwendet wird.
Zum Beispiel gibt es auf einem Mobiltelefon normalerweise mindestens zwei verfügbare Netzwerkschnittstellen: eine Mobilfunkverbindung und eine WLAN-Verbindung.

Wenn die lokale IP-Adresse nicht als Teil eines lokalen ICE-Kandidaten offengelegt wird, ist der Wert von `address` `null`.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel erstellt einen Handler für [`icecandidateerror`](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event)-Ereignisse, der menschenlesbare Nachrichten beschreibt, die die lokale Netzwerkschnittstelle für die Verbindung und den ICE-Server beschreiben, der versucht wurde, die Verbindung herzustellen.
Anschließend ruft es eine Funktion auf, um diese Nachrichten und den Wert der [`errorText`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/errorText)-Eigenschaft des Ereignisses anzuzeigen.

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
