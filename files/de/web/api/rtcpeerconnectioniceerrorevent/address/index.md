---
title: "RTCPeerConnectionIceErrorEvent: address-Eigenschaft"
short-title: address
slug: Web/API/RTCPeerConnectionIceErrorEvent/address
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("WebRTC")}}

Die Eigenschaft **`address`** des [`RTCPeerConnectionIceErrorEvent`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent) ist ein String, der die lokale IP-Adresse angibt, die während der Verhandlungen zur Kommunikation mit dem [STUN](/de/docs/Glossary/STUN)- oder [TURN](/de/docs/Glossary/TURN)-Server verwendet wird. Der aufgetretene Fehler betraf diese Adresse.

## Wert

Ein String, der die lokale IP-Adresse der Netzwerkverbindung zum ICE-Server angibt, mit dem die Verhandlungen stattfanden, als der Fehler auftrat. Diese Adresse identifiziert die Netzwerkschnittstelle auf dem lokalen Gerät, die verwendet wird, um zu versuchen, die Verbindung zum entfernten Peer herzustellen.

Dies kann bei Systemen mit mehreren Netzwerken nützlich sein—Geräte mit mehr als einer Netzwerkverbindung—um zu bestimmen, welche Netzwerkschnittstelle verwendet wird. Zum Beispiel gibt es auf einem Mobiltelefon typischerweise mindestens zwei verfügbare Netzwerkschnittstellen: die Mobilfunkverbindung und eine Wi-Fi-Verbindung.

Wenn die lokale IP-Adresse nicht als Teil eines lokalen Kandidaten offengelegt wird, ist der Wert von `address` `null`.

## Beispiele

Dieses Beispiel erstellt einen Handler für `icecandidateerror`-Ereignisse, der menschenlesbare Nachrichten erstellt, die die lokale Netzwerkschnittstelle für die Verbindung sowie den ICE-Server beschreiben, der verwendet wurde, um die Verbindung zu öffnen, und ruft dann eine Funktion auf, um diese sowie den Inhalt der `errorText`-Eigenschaft des Ereignisses anzuzeigen.

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
