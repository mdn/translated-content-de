---
title: "RTCDTMFSender: tonechange-Ereignis"
short-title: tonechange
slug: Web/API/RTCDTMFSender/tonechange_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebRTC")}}

Das **`tonechange`**-Ereignis wird von der [WebRTC API](/de/docs/Web/API/WebRTC_API) an einen [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender) gesendet, um anzuzeigen, wann [DTMF](/de/docs/Glossary/DTMF)-Töne, die zuvor zum Senden in die Warteschlange gestellt wurden (durch Aufruf von [`RTCDTMFSender.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF)), beginnen und enden.

Um zu bestimmen, welcher Ton begonnen hat oder ob ein Ton aufgehört hat zu spielen, überprüfen Sie den Wert der [`tone`](/de/docs/Web/API/RTCDTMFToneChangeEvent/tone)-Eigenschaft des Ereignisses.

Dieses Ereignis ist nicht abbrüchbar und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlungseigenschaft.

```js
addEventListener("tonechange", (event) => {});

ontonechange = (event) => {};
```

## Ereignistyp

Ein [`RTCDTMFToneChangeEvent`](/de/docs/Web/API/RTCDTMFToneChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCDTMFToneChangeEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den Eigenschaften von [`Event`](/de/docs/Web/API/Event) bietet dieses Interface Folgendes:_

- [`RTCDTMFToneChangeEvent.tone`](/de/docs/Web/API/RTCDTMFToneChangeEvent/tone) {{ReadOnlyInline}}
  - : Ein String, der den Ton angibt, der zu spielen begonnen hat oder ein leerer String (`""`), wenn der vorherige Ton aufgehört hat zu spielen.

## Beispiele

Dieses Beispiel richtet einen Handler für das `tonechange`-Ereignis ein, das ein Element aktualisiert, um den derzeit gespielten Ton in seinem Inhalt anzuzeigen, oder, wenn alle Töne gespielt wurden, die Zeichenkette "\<none>".

Dies kann mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) erfolgen:

```js
dtmfSender.addEventListener(
  "tonechange",
  (ev) => {
    let tone = ev.tone;
    if (tone === "") {
      tone = "&lt;none&gt;";
    }

    document.getElementById("playingTone").innerText = tone;
  },
  false,
);
```

Sie können auch einfach die `ontonechange`-Ereignisbehandlungseigenschaft direkt setzen:

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
