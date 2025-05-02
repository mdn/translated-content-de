---
title: "RTCDataChannel: bufferedamountlow Ereignis"
short-title: bufferedamountlow
slug: Web/API/RTCDataChannel/bufferedamountlow_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebRTC")}}

Ein **`bufferedamountlow`** Ereignis wird an ein [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) gesendet, wenn die Anzahl der Bytes im ausgehenden Datentransferpuffer unter den im [`bufferedAmountLowThreshold`](/de/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold) angegebenen Schwellenwert fällt. `bufferedamountlow` Ereignisse werden nicht gesendet, wenn `bufferedAmountLowThreshold` 0 ist.

Dieses Ereignis ist nicht abbrechbar und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("bufferedamountlow", (event) => { })

onbufferedamountlow = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieses Beispiel richtet einen Handler für `bufferedamountlow` ein, um mehr Daten anzufordern, wenn der Puffer des Datenkanals unter die im [`bufferedAmountLowThreshold`](/de/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold) angegebene Byteanzahl fällt, die wir auf 65536 gesetzt haben. Mit anderen Worten, wir versuchen, mindestens 64 kB Daten im Puffer zu halten, indem wir jeweils 64 kB aus der Quelle lesen.

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

Nach der Erstellung des `RTCPeerConnection` ruft dies [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) auf, um den Datenkanal zu erstellen. Anschließend wird ein Listener für `bufferedamountlow` erstellt, um den eingehenden Datenpuffer aufzufüllen, sobald dessen Inhalt unter 65536 Bytes fällt.

Sie können auch einen Listener für `bufferedamountlow` über dessen Ereignis-Handler-Eigenschaft `onbufferedamountlow` einrichten:

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
