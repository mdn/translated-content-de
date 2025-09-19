---
title: "RTCDataChannel: bufferedamountlow-Ereignis"
short-title: bufferedamountlow
slug: Web/API/RTCDataChannel/bufferedamountlow_event
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{APIRef("WebRTC")}}

Ein **`bufferedamountlow`**-Ereignis wird an ein [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) gesendet, wenn die Anzahl der Bytes, die sich derzeit im ausgehenden Datenübertragungs-Puffer befinden ([`bufferedAmount`](/de/docs/Web/API/RTCDataChannel/bufferedAmount)), von über auf unter oder gleich dem in [`bufferedAmountLowThreshold`](/de/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold) angegebenen Schwellenwert fällt.

Dieses Ereignis kann nicht abgebrochen werden und bubblet nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("bufferedamountlow", (event) => { })

onbufferedamountlow = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

In diesem Beispiel wird ein Handler für `bufferedamountlow` eingerichtet, um mehr Daten anzufordern, sobald der Puffer des Datenkanals unter die Anzahl der Bytes fällt, die durch [`bufferedAmountLowThreshold`](/de/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold) angegeben sind, welche wir auf 65536 gesetzt haben. Mit anderen Worten, wir versuchen, mindestens 64 kB Daten im Puffer zu halten und lesen jeweils 64 kB aus der Quelle.

```js
let pc = new RTCPeerConnection();
let dc = pc.createDataChannel("SendFile");
// Replace with your own source object, such as a file handle
let source = null;
dc.bufferedAmountLowThreshold = 65536;

pc.addEventListener("bufferedamountlow", (ev) => {
  if (source.position <= source.length) {
    dc.send(source.readFile(65536));
  }
});
```

Nach der Erstellung der `RTCPeerConnection` wird [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) aufgerufen, um den Datenkanal zu erstellen. Dann wird ein Listener für `bufferedamountlow` erstellt, um den eingehenden Datenpuffer jedes Mal nachzufüllen, wenn sein Inhalt unter 65536 Bytes fällt.

Sie können auch einen Listener für `bufferedamountlow` über seine Ereignis-Handler-Eigenschaft `onbufferedamountlow` einrichten:

```js
pc.onbufferedamountlow = (ev) => {
  if (source.position <= source.length) {
    dc.send(source.readFile(65536));
  }
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)
- [`RTCDataChannel.bufferedAmountLowThreshold`](/de/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold)
