---
title: "RTCDTMFSender: tonechange Ereignis"
short-title: tonechange
slug: Web/API/RTCDTMFSender/tonechange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebRTC")}}

Das **`tonechange`** Ereignis wird von der [WebRTC API](/de/docs/Web/API/WebRTC_API) an einen [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender) gesendet, um anzuzeigen, wann {{Glossary("DTMF", "DTMF")}}-Töne, die zuvor zur Übertragung in die Warteschlange gestellt wurden (durch Aufruf von [`RTCDTMFSender.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF)), beginnen und enden.

Um festzustellen, welcher Ton abgespielt wurde oder wenn ein Ton aufgehört hat zu spielen, überprüfen Sie den Wert der [`tone`](/de/docs/Web/API/RTCDTMFToneChangeEvent/tone)-Eigenschaft des Ereignisses.

Dieses Ereignis kann nicht abgebrochen werden und hat keine Bubbling-Phase.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandler-Eigenschaft.

```js-nolint
addEventListener("tonechange", (event) => { })

ontonechange = (event) => { }
```

## Ereignistyp

Ein [`RTCDTMFToneChangeEvent`](/de/docs/Web/API/RTCDTMFToneChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCDTMFToneChangeEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den Eigenschaften von [`Event`](/de/docs/Web/API/Event) bietet dieses Interface Folgendes:_

- [`RTCDTMFToneChangeEvent.tone`](/de/docs/Web/API/RTCDTMFToneChangeEvent/tone) {{ReadOnlyInline}}
  - : Ein Zeichenfolgenwert, der den Ton angibt, der zu spielen begonnen hat, oder eine leere Zeichenfolge (`""`), wenn der vorherige Ton das Spielen beendet hat.

## Beispiele

Dieses Beispiel richtet einen Handler für das `tonechange` Ereignis ein, der ein Element aktualisiert, um den aktuell abgespielten Ton in seinem Inhalt anzuzeigen, oder, wenn alle Töne abgespielt wurden, die Zeichenfolge "\<none>".

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

Sie können auch einfach die `ontonechange` Ereignisbehandler-Eigenschaft direkt setzen:

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
