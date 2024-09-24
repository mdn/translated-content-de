---
title: "RTCDataChannel: label-Eigenschaft"
short-title: label
slug: Web/API/RTCDataChannel/label
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die schreibgeschützte `RTCDataChannel`-Eigenschaft **`label`** gibt einen Zeichenfolgenwert zurück, der einen Namen zur Beschreibung des Datenkanals enthält. Diese Bezeichnungen müssen nicht eindeutig sein.

Sie können das Label nach Belieben verwenden; Sie könnten es nutzen, um alle Kanäle, die für denselben Zweck verwendet werden, zu identifizieren, indem Sie ihnen allen denselben Namen geben. Oder Sie könnten jedem Kanal ein einzigartiges Label zur Nachverfolgung geben. Es liegt ganz an den Designentscheidungen, die beim Aufbau Ihrer Website oder App getroffen werden.

Eine eindeutige ID finden Sie in der {{domxref("RTCDataChannel.id", "id")}}-Eigenschaft.

> [!NOTE]
> Das Label eines Datenkanals wird festgelegt, wenn der Kanal durch den Aufruf von {{domxref("RTCPeerConnection.createDataChannel()")}} erstellt wird. Es kann danach nicht mehr geändert werden.

## Wert

Ein durch die Website oder App zugewiesener Zeichenfolgen-Identifikator, der bei der Erstellung des Datenkanals festgelegt wurde, wie beim Aufruf von {{domxref("RTCPeerConnection.createDataChannel()")}} zur Erstellung des Kanals angegeben.

## Beispiel

Dieses Beispiel erstellt einen Datenkanal auf einer {{domxref("RTCPeerConnection")}}, und später wird der Inhalt eines UI-Elements gesetzt, um den Namen des Kanals anzuzeigen.

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
- {{domxref("RTCDataChannel")}}
- {{domxref("RTCDataChannel.id")}}
- {{domxref("RTCPeerConnection.createDataChannel()")}}
