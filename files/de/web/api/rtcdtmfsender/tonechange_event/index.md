---
title: "RTCDTMFSender: tonechange-Ereignis"
short-title: tonechange
slug: Web/API/RTCDTMFSender/tonechange_event
l10n:
  sourceCommit: 1c322acc575d927494ecff49c04159ba34aec781
---

{{APIRef("WebRTC")}}

Das **`tonechange`**-Ereignis wird von der [WebRTC API](/de/docs/Web/API/WebRTC_API) an einen [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender) gesendet. Es zeigt an, wann zuvor zum Senden eingereihte {{Glossary("DTMF", "DTMF")}}-Töne (durch Aufruf von [`RTCDTMFSender.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF)) beginnen und enden.

Prüfen Sie den Wert der [`tone`](/de/docs/Web/API/RTCDTMFToneChangeEvent/tone)-Eigenschaft des Ereignisses, um festzustellen, welcher Ton zu spielen begonnen hat oder ob ein Ton aufgehört hat zu spielen.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("tonechange", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
ontonechange = (event) => { }
```

## Ereignistyp

Ein [`RTCDTMFToneChangeEvent`](/de/docs/Web/API/RTCDTMFToneChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCDTMFToneChangeEvent")}}

## Beispiele

In diesem Beispiel wird ein Handler für das `tonechange`-Ereignis eingerichtet. Er aktualisiert den Inhalt eines Elements, sodass es den aktuell gespielten Ton anzeigt oder, wenn alle Töne abgespielt wurden, die Zeichenfolge „\<none>“.

Dies ist mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) möglich:

```js
dtmfSender.addEventListener("tonechange", (ev) => {
  let tone = ev.tone;
  if (tone === "") {
    tone = "<none>";
  }

  document.getElementById("playingTone").innerText = tone;
});
```

Sie können die Event-Handler-Eigenschaft `ontonechange` auch direkt setzen. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `ontonechange` hinzugefügte Event-Listener ersetzt werden:

```js
dtmfSender.ontonechange = (ev) => {
  let tone = ev.tone;
  if (tone === "") {
    tone = "<none>";
  }

  document.getElementById("playingTone").innerText = tone;
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
