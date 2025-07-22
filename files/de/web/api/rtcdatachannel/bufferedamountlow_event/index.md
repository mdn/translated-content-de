---
title: "RTCDataChannel: bufferedamountlow Ereignis"
short-title: bufferedamountlow
slug: Web/API/RTCDataChannel/bufferedamountlow_event
l10n:
  sourceCommit: 825fc09123fe2d2776774262c713b6f008ec62b7
---

{{APIRef("WebRTC")}}

Ein **`bufferedamountlow`** Ereignis wird an einen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) gesendet, wenn die Anzahl der Bytes im ausgehenden Datentransferpuffer ([`bufferedAmount`](/de/docs/Web/API/RTCDataChannel/bufferedAmount)) von über dem auf unter oder gleich dem in [`bufferedAmountLowThreshold`](/de/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold) angegebenen Schwellenwert fällt.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht hochgebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("bufferedamountlow", (event) => { })

onbufferedamountlow = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieses Beispiel richtet einen Handler für `bufferedamountlow` ein, um jedes Mal mehr Daten anzufordern, wenn der Puffer des Datenkanals unter die durch [`bufferedAmountLowThreshold`](/de/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold) angegebene Anzahl von Bytes fällt, die wir auf 65536 gesetzt haben. Mit anderen Worten, wir versuchen, mindestens 64 kB Daten im Puffer zu halten, indem wir jeweils 64 kB aus der Quelle lesen.

```js
let pc = new RTCPeerConnection();
let dc = pc.createDataChannel("SendFile");
// Replace with your own source object, such as a file handle
let source = null;
dc.bufferedAmountLowThreshold = 65536;

pc.addEventListener(
  "bufferedamountlow",
  (ev) => {
    if (source.position <= source.length) {
      dc.send(source.readFile(65536));
    }
  },
  false,
);
```

Nach der Erstellung der `RTCPeerConnection` wird [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) aufgerufen, um den Datenkanal zu erstellen. Dann wird ein Listener für `bufferedamountlow` eingerichtet, um den eingehenden Datenpuffer jedes Mal aufzufüllen, wenn sein Inhalt unter 65536 Bytes fällt.

Sie können auch einen Listener für `bufferedamountlow` über seine Event-Handler-Eigenschaft `onbufferedamountlow` einrichten:

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
