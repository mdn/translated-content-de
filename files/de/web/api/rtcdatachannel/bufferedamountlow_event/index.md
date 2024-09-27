---
title: "RTCDataChannel: bufferedamountlow-Ereignis"
short-title: bufferedamountlow
slug: Web/API/RTCDataChannel/bufferedamountlow_event
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("WebRTC")}}

Ein **`bufferedamountlow`**-Ereignis wird an einen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) gesendet, wenn die Anzahl der Bytes im ausgehenden Datentransferpuffer unter die im [`bufferedAmountLowThreshold`](/de/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold) festgelegte Schwelle fällt. `bufferedamountlow`-Ereignisse werden nicht gesendet, wenn `bufferedAmountLowThreshold` 0 ist.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht hochgebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("bufferedamountlow", (event) => {});

onbufferedamountlow = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

In diesem Beispiel wird ein Handler für `bufferedamountlow` eingerichtet, um mehr Daten anzufordern, wenn der Puffer des Datenkanals unter die im [`bufferedAmountLowThreshold`](/de/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold) festgelegte Anzahl von Bytes fällt, die wir auf 65536 eingestellt haben. Mit anderen Worten, wir versuchen, mindestens 64kB Daten im Puffer zu halten, indem wir 64kB pro Lesevorgang aus der Quelle lesen.

```js
let pc = new RTCPeerConnection();
let dc = pc.createDataChannel("SendFile");
// source data object
let source = (dc.bufferedAmountLowThreshold = 65536);

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

Nach der Erstellung der `RTCPeerConnection` wird [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) aufgerufen, um den Datenkanal zu erstellen. Dann wird ein Listener für `bufferedamountlow` erstellt, um den eingehenden Datenpuffer wieder aufzufüllen, wenn dessen Inhalt unter 65536 Bytes fällt.

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
