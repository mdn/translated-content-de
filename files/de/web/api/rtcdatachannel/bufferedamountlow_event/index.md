---
title: "RTCDataChannel: bufferedamountlow-Ereignis"
short-title: bufferedamountlow
slug: Web/API/RTCDataChannel/bufferedamountlow_event
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("WebRTC")}}

Ein **`bufferedamountlow`** Ereignis wird an ein {{domxref("RTCDataChannel")}} gesendet, wenn die Anzahl der Bytes, die sich derzeit im ausgehenden Datentransfer-Puffer befinden, unter den im {{domxref("RTCDataChannel.bufferedAmountLowThreshold", "bufferedAmountLowThreshold")}} angegebenen Schwellenwert fällt. `bufferedamountlow`-Ereignisse werden nicht gesendet, wenn `bufferedAmountLowThreshold` 0 ist.

Dieses Ereignis ist nicht abgebrochen und blubbert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("bufferedamountlow", (event) => {});

onbufferedamountlow = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Dieses Beispiel richtet einen Handler für `bufferedamountlow` ein, um mehr Daten anzufordern, wenn der Puffer des Datenkanals unter die in {{domxref("RTCDataChannel.bufferedAmountLowThreshold", "bufferedAmountLowThreshold")}} angegebene Anzahl von Bytes fällt, die wir auf 65536 gesetzt haben. Mit anderen Worten, wir versuchen, mindestens 64 kB Daten im Puffer zu halten, indem wir jeweils 64 kB aus der Quelle lesen.

```js
let pc = new RTCPeerConnection();
let dc = pc.createDataChannel("SendFile");
// Quelldatenobjekt
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

Nach der Erstellung der `RTCPeerConnection` wird {{domxref("RTCPeerConnection.createDataChannel()")}} aufgerufen, um den Datenkanal zu erstellen. Anschließend wird ein Listener für `bufferedamountlow` eingerichtet, um den eingehenden Datenpuffer aufzufüllen, sobald dessen Inhalt unter 65536 Bytes fällt.

Sie können auch einen Listener für `bufferedamountlow` mithilfe der Event-Handler-Eigenschaft `onbufferedamountlow` einrichten:

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
- {{domxref("RTCDataChannel")}}
- {{domxref("RTCDataChannel.bufferedAmountLowThreshold")}}
