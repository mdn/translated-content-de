---
title: "RTCDTMFSender: tonechange Ereignis"
short-title: tonechange
slug: Web/API/RTCDTMFSender/tonechange_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebRTC")}}

Das **`tonechange`**-Ereignis wird an einen {{domxref("RTCDTMFSender")}} durch die [WebRTC API](/de/docs/Web/API/WebRTC_API) gesendet, um anzuzeigen, wann {{Glossary("DTMF")}}-Töne, die zuvor zur Übertragung in die Warteschlange gestellt wurden (durch Aufrufen von {{domxref("RTCDTMFSender.insertDTMF()")}}), beginnen und enden.

Um zu bestimmen, welcher Ton zu spielen begonnen hat oder ob ein Ton das Spielen beendet hat, prüfen Sie den Wert der {{domxref("RTCDTMFToneChangeEvent.tone", "tone")}}-Eigenschaft des Ereignisses.

Dieses Ereignis kann nicht abgebrochen werden und löst keine Bubbling aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("tonechange", (event) => {});

ontonechange = (event) => {};
```

## Ereignistyp

Ein {{domxref("RTCDTMFToneChangeEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("RTCDTMFToneChangeEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den Eigenschaften von {{domxref("Event")}}, bietet diese Schnittstelle die folgenden:_

- {{domxref("RTCDTMFToneChangeEvent.tone")}} {{ReadOnlyInline}}
  - : Ein String, der den Ton angibt, der zu spielen begonnen hat, oder ein leerer String (`""`), wenn der vorherige Ton das Spielen beendet hat.

## Beispiele

Dieses Beispiel etabliert einen Handler für das `tonechange`-Ereignis, der ein Element aktualisiert, um den aktuell abgespielten Ton in seinem Inhalt anzuzeigen oder, wenn alle Töne abgespielt wurden, den String "\<none>".

Dies kann mit {{domxref("EventTarget.addEventListener", "addEventListener()")}} durchgeführt werden:

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

Sie können auch direkt die `ontonechange`-Ereignishandler-Eigenschaft setzen:

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
