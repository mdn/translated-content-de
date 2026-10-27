---
title: "RTCDataChannel: bufferedamountlow-Ereignis"
short-title: bufferedamountlow
slug: Web/API/RTCDataChannel/bufferedamountlow_event
l10n:
  sourceCommit: ded0a8bc0b6622b4a95253e358c6a58a77ad2387
---

{{APIRef("WebRTC")}}

Ein **`bufferedamountlow`**-Ereignis wird an einen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) gesendet, wenn die Anzahl der Bytes im Puffer für ausgehende Datenübertragungen ([`bufferedAmount`](/de/docs/Web/API/RTCDataChannel/bufferedAmount)) von einem Wert oberhalb des in [`bufferedAmountLowThreshold`](/de/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold) festgelegten Schwellenwerts auf einen Wert fällt, der kleiner oder gleich diesem Schwellenwert ist.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht durch die DOM-Hierarchie weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("bufferedamountlow", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onbufferedamountlow = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieses Beispiel richtet einen Handler für `bufferedamountlow` ein, der weitere Daten anfordert, sobald der Puffer des Datenkanals unter die in [`bufferedAmountLowThreshold`](/de/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold) angegebene Anzahl von Bytes fällt. Dieser Wert ist hier auf 65536 gesetzt. Mit anderen Worten: Wir versuchen, mindestens 64 kB Daten im Puffer zu halten, indem wir jeweils 64 kB aus der Quelle lesen.

```js
let pc = new RTCPeerConnection();
let dc = pc.createDataChannel("SendFile");
// Replace with your own source object, such as a file handle
let source = null;
dc.bufferedAmountLowThreshold = 65536;

dc.addEventListener("bufferedamountlow", (ev) => {
  if (source.position < source.length) {
    dc.send(source.readFile(65536));
  }
});
```

Nach dem Erstellen der `RTCPeerConnection` wird mit [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) der Datenkanal erstellt. Anschließend wird ein Listener für `bufferedamountlow` eingerichtet, der den Puffer für ausgehende Daten wieder auffüllt, sobald dessen Inhalt unter 65536 Bytes fällt.

Sie können einen Listener für `bufferedamountlow` auch über die Event-Handler-Eigenschaft `onbufferedamountlow` einrichten. Beachten Sie jedoch, dass dadurch andere mit `onbufferedamountlow` hinzugefügte Event-Listener gegebenenfalls ersetzt werden:

```js
dc.onbufferedamountlow = (ev) => {
  if (source.position < source.length) {
    dc.send(source.readFile(65536));
  }
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)
- [`RTCDataChannel.bufferedAmountLowThreshold`](/de/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold)
