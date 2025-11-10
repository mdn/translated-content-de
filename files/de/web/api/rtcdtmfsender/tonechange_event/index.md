---
title: "RTCDTMFSender: tonechange-Event"
short-title: tonechange
slug: Web/API/RTCDTMFSender/tonechange_event
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{APIRef("WebRTC")}}

Das **`tonechange`**-Event wird von der [WebRTC API](/de/docs/Web/API/WebRTC_API) an einen [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender) gesendet, um anzuzeigen, wann {{Glossary("DTMF", "DTMF")}}-Töne, die zuvor zur Übertragung in die Warteschlange gestellt wurden (durch Aufrufen von [`RTCDTMFSender.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF)), beginnen und enden.

Um festzustellen, welcher Ton abgespielt wurde oder ob ein Ton gestoppt wurde, überprüfen Sie den Wert der [`tone`](/de/docs/Web/API/RTCDTMFToneChangeEvent/tone)-Eigenschaft des Events.

Dieses Ereignis kann nicht abgebrochen werden und blubbert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("tonechange", (event) => { })

ontonechange = (event) => { }
```

## Ereignistyp

Ein [`RTCDTMFToneChangeEvent`](/de/docs/Web/API/RTCDTMFToneChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCDTMFToneChangeEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den Eigenschaften von [`Event`](/de/docs/Web/API/Event) bietet dieses Interface folgende:_

- [`RTCDTMFToneChangeEvent.tone`](/de/docs/Web/API/RTCDTMFToneChangeEvent/tone) {{ReadOnlyInline}}
  - : Ein String, der den Ton angibt, der begonnen hat zu spielen, oder ein leerer String (`""`), wenn der vorherige Ton aufgehört hat zu spielen.

## Beispiele

Dieses Beispiel richtet einen Handler für das `tonechange`-Event ein, der ein Element aktualisiert, um den aktuell abgespielten Ton in seinem Inhalt anzuzeigen, oder, wenn alle Töne abgespielt wurden, den String "\<none>".

Dies kann mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) erfolgen:

```js
dtmfSender.addEventListener("tonechange", (ev) => {
  let tone = ev.tone;
  if (tone === "") {
    tone = "&lt;none&gt;";
  }

  document.getElementById("playingTone").innerText = tone;
});
```

Sie können auch einfach die `ontonechange`-Ereignishandlereigenschaft direkt setzen:

```js
dtmfSender.ontonechange = (ev) => {
  let tone = ev.tone;
  if (tone === "") {
    tone = "&lt;none&gt;";
  }

  document.getElementById("playingTone").innerText = tone;
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
