---
title: "RTCDataChannel: label-Eigenschaft"
short-title: label
slug: Web/API/RTCDataChannel/label
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die schreibgeschützte `RTCDataChannel`-Eigenschaft **`label`** gibt einen Zeichenfolgenwert zurück, der einen Namen beschreibt, der den Datenkanal kennzeichnet. Diese Bezeichnungen müssen nicht eindeutig sein.

Sie können die Bezeichnung nach Belieben verwenden: Sie könnten sie verwenden, um alle Kanäle zu identifizieren, die für denselben Zweck verwendet werden, indem Sie ihnen allen denselben Namen geben. Oder Sie könnten jedem Kanal eine eindeutige Bezeichnung zuweisen, um sie nachzuverfolgen. Dies liegt ganz in den Designentscheidungen, die beim Erstellen Ihrer Website oder App getroffen wurden.

Eine eindeutige ID finden Sie in der [`id`](/de/docs/Web/API/RTCDataChannel/id)-Eigenschaft.

> [!NOTE]
> Die Bezeichnung eines Datenkanals wird festgelegt, wenn der Kanal durch Aufruf von [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) erstellt wird. Sie kann danach nicht mehr geändert werden.

## Wert

Ein von der Website oder App zugewiesener Zeichenfolgen-Identifier, der beim Erstellen des Datenkanals festgelegt wurde, wie angegeben, als [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) aufgerufen wurde, um den Kanal zu erstellen.

## Beispiel

Dieses Beispiel erstellt einen Datenkanal auf einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) und setzt später den Inhalt eines UI-Elements, um den Namen des Kanals anzuzeigen.

```js
const pc = new RTCPeerConnection();
const dc = pc.createDataChannel("my channel");

// …

document.getElementById("channel-name").appendChild(
  Object.assign(document.createElement("span"), {
    className: "channelName",
    textContent: dc.label,
  }),
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)
- [`RTCDataChannel.id`](/de/docs/Web/API/RTCDataChannel/id)
- [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel)
