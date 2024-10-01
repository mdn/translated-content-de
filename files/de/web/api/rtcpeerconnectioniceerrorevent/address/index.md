---
title: "RTCPeerConnectionIceErrorEvent: address-Eigenschaft"
short-title: address
slug: Web/API/RTCPeerConnectionIceErrorEvent/address
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("WebRTC")}}

Die Eigenschaft **`address`** des [`RTCPeerConnectionIceErrorEvent`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent) ist ein String, der die lokale IP-Adresse angibt, die für die Kommunikation mit dem {{Glossary("STUN", "STUN")}}- oder {{Glossary("TURN", "TURN")}}-Server während der Verhandlungen verwendet wird. Der aufgetretene Fehler betraf diese Adresse.

## Wert

Ein String, der die lokale IP-Adresse der Netzwerkverbindung zum ICE-Server angibt, mit dem Verhandlungen geführt wurden, als der Fehler auftrat. Diese Adresse identifiziert die Netzwerkschnittstelle auf dem lokalen Gerät, die verwendet wird, um zu versuchen, die Verbindung zum entfernten Peer herzustellen.

Dies kann auf Systemen mit mehreren Home-Netzwerken—Geräten mit mehr als einer Netzwerkverbindung—nützlich sein, um festzustellen, welche Netzwerkschnittstelle verwendet wird. Auf einem Mobiltelefon gibt es zum Beispiel typischerweise mindestens zwei verfügbare Netzwerkschnittstellen: die Mobilfunkverbindung und eine Wi-Fi-Verbindung.

Wenn die lokale IP-Adresse nicht als Teil eines lokalen Kandidaten offengelegt wird, ist der Wert von `address` `null`.

## Beispiele

Dieses Beispiel erstellt einen Handler für
[`icecandidateerror`](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event)-Ereignisse, der menschenlesbare Nachrichten erstellt, die die lokale Netzwerkschnittstelle für die Verbindung sowie den ICE-Server beschreiben, der verwendet wurde, um die Verbindung zu öffnen, und ruft dann eine Funktion auf, um diese anzuzeigen, sowie den Inhalt der Eigenschaft [`errorText`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/errorText) des Ereignisses.

```js
pc.addEventListener("icecandidateerror", (event) => {
  let networkInfo = `[Local interface: ${event.address}:${event.port}`;
  let iceServerInfo = `[ICE server: ${event.url}`;

  showMessage(errorText, iceServerInfo, networkInfo);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
