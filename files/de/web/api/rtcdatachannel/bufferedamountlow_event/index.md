---
title: "RTCDataChannel: bufferedamountlow-Ereignis"
short-title: bufferedamountlow
slug: Web/API/RTCDataChannel/bufferedamountlow_event
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("WebRTC")}}

Ein **`bufferedamountlow`**-Ereignis wird an ein [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) gesendet, wenn die Anzahl der Bytes im aktuellen ausgehenden Datenübertragungs-Puffer unter die in [`bufferedAmountLowThreshold`](/de/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold) angegebene Schwelle fällt. `bufferedamountlow`-Ereignisse werden nicht gesendet, wenn `bufferedAmountLowThreshold` 0 ist.

Dieses Ereignis ist nicht abbrechbar und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("bufferedamountlow", (event) => {});

onbufferedamountlow = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieses Beispiel richtet einen Handler für `bufferedamountlow` ein, um mehr Daten anzufordern, jedes Mal wenn der Puffer des Datenkanals unter die in [`bufferedAmountLowThreshold`](/de/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold) angegebene Bytezahl fällt, die wir auf 65536 gesetzt haben. Mit anderen Worten, wir versuchen, mindestens 64 kB Daten im Puffer zu halten und lesen jeweils 64 kB aus der Quelle.

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

Nach der Erstellung der `RTCPeerConnection` ruft dies [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) auf, um den Datenkanal zu erstellen. Dann wird ein Listener für `bufferedamountlow` erstellt, um den eingehenden Datenpuffer jedes Mal aufzufüllen, wenn dessen Inhalte unter 65536 Bytes fallen.

Sie können auch einen Listener für `bufferedamountlow` einrichten, indem Sie seine Ereignis-Handler-Eigenschaft `onbufferedamountlow` verwenden:

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
