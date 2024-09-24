---
title: "RTCPeerConnectionIceErrorEvent: Adress-Eigenschaft"
short-title: Adresse
slug: Web/API/RTCPeerConnectionIceErrorEvent/address
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("WebRTC")}}

Die Eigenschaft **`address`** des {{domxref("RTCPeerConnectionIceErrorEvent")}} ist ein String, der die lokale IP-Adresse angibt, die verwendet wird, um während der Verhandlungen mit dem {{Glossary("STUN")}}- oder {{Glossary("TURN")}}-Server zu kommunizieren. Der aufgetretene Fehler betraf diese Adresse.

## Wert

Ein String, der die lokale IP-Adresse der Netzwerkverbindung zum ICE-Server angibt, mit dem die Verhandlungen stattfanden, als der Fehler auftrat. Diese Adresse identifiziert die Netzwerkschnittstelle auf dem lokalen Gerät, die verwendet wird, um eine Verbindung zum entfernten Partner herzustellen.

Dies kann auf Systemen mit mehreren Netzwerken—Geräte mit mehr als einer Netzwerkverbindung—nützlich sein, um zu bestimmen, welche Netzwerkschnittstelle verwendet wird. Zum Beispiel gibt es auf einem Mobiltelefon in der Regel mindestens zwei verfügbare Netzwerkschnittstellen: die Mobilfunkverbindung und eine WLAN-Verbindung.

Wenn die lokale IP-Adresse nicht als Teil eines lokalen Kandidaten offenlegt wird, ist der Wert von `address` `null`.

## Beispiele

Dieses Beispiel erstellt einen Handler für {{domxref("RTCPeerConnection.icecandidateerror_event", "icecandidateerror")}}-Ereignisse, der menschlich lesbare Nachrichten erzeugt, die die lokale Netzwerkschnittstelle für die Verbindung sowie den ICE-Server beschreiben, der verwendet wurde, um die Verbindung zu öffnen. Anschließend wird eine Funktion aufgerufen, um diese sowie die Inhalte der Eigenschaft {{domxref("RTCPeerConnectionIceErrorEvent.errorText", "errorText")}} des Ereignisses anzuzeigen.

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
