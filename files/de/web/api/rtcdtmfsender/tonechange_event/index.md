---
title: "RTCDTMFSender: tonechange-Ereignis"
short-title: tonechange
slug: Web/API/RTCDTMFSender/tonechange_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("WebRTC")}}

Das **`tonechange`**-Ereignis wird an einen [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender) von der [WebRTC API](/de/docs/Web/API/WebRTC_API) gesendet, um anzuzeigen, wann {{Glossary("DTMF", "DTMF")}}-Töne, die zuvor für das Senden in die Warteschlange gestellt wurden (durch Aufrufen von [`RTCDTMFSender.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF)), beginnen und enden.

Um festzustellen, welcher Ton zu spielen begonnen hat oder ob ein Ton aufgehört hat zu spielen, überprüfen Sie den Wert der [`tone`](/de/docs/Web/API/RTCDTMFToneChangeEvent/tone)-Eigenschaft des Ereignisses.

Dieses Ereignis ist nicht abbruchbar und tritt nicht in der Ereignisblase auf.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("tonechange", (event) => { })

ontonechange = (event) => { }
```

## Ereignistyp

Ein [`RTCDTMFToneChangeEvent`](/de/docs/Web/API/RTCDTMFToneChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCDTMFToneChangeEvent")}}

## Beispiele

Dieses Beispiel erstellt einen Handler für das `tonechange`-Ereignis, der ein Element aktualisiert, um den derzeit gespielten Ton in seinem Inhalt anzuzeigen, oder, wenn alle Töne gespielt wurden, die Zeichenkette "\<none>".

Dies kann mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) durchgeführt werden:

```js
dtmfSender.addEventListener("tonechange", (ev) => {
  let tone = ev.tone;
  if (tone === "") {
    tone = "&lt;none&gt;";
  }

  document.getElementById("playingTone").innerText = tone;
});
```

Sie können auch einfach die `ontonechange`-Ereignishandler-Eigenschaft direkt setzen:

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
