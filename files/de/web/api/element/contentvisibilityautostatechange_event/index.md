---
title: "Element: contentvisibilityautostatechange-Ereignis"
short-title: contentvisibilityautostatechange
slug: Web/API/Element/contentvisibilityautostatechange_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef("CSS Containment")}}

Das **`contentvisibilityautostatechange`**-Ereignis wird für jedes Element ausgelöst, für das {{cssxref("content-visibility", "content-visibility: auto")}} festgelegt ist, wenn es beginnt oder aufhört, [für den Benutzer relevant zu sein](/de/docs/Web/CSS/Guides/Containment/Using#relevant_to_the_user), und seine Inhalte [übersprungen werden](/de/docs/Web/CSS/Guides/Containment/Using#skips_its_contents) beziehungsweise nicht mehr übersprungen werden.

Solange das Element nicht relevant ist (zwischen den Ereignissen für Beginn und Ende), überspringt der User Agent das Rendering des Elements, einschließlich Layout und Zeichnen. Dies kann die Rendering-Geschwindigkeit der Seite erheblich verbessern.
Das `contentvisibilityautostatechange`-Ereignis ermöglicht es dem Code einer Anwendung außerdem, Rendering-Prozesse (z. B. das Zeichnen auf einem {{htmlelement("canvas")}}) zu starten oder zu stoppen, wenn sie nicht benötigt werden, und so Rechenleistung zu sparen.

Beachten Sie, dass die Inhalte eines Elements auch dann semantisch relevant bleiben, wenn das Element nicht sichtbar ist (z. B. für Benutzer unterstützender Technologien). Dieses Signal sollte daher nicht verwendet werden, um wichtige semantische DOM-Aktualisierungen zu überspringen.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("contentvisibilityautostatechange", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
oncontentvisibilityautostatechange = (event) => { }
```

## Ereignistyp

Ein [`ContentVisibilityAutoStateChangeEvent`](/de/docs/Web/API/ContentVisibilityAutoStateChangeEvent).

## Beispiele

```js
const canvasElem = document.querySelector("canvas");

canvasElem.addEventListener("contentvisibilityautostatechange", stateChanged);
canvasElem.style.contentVisibility = "auto";

function stateChanged(event) {
  if (event.skipped) {
    stopCanvasUpdates(canvasElem);
  } else {
    startCanvasUpdates(canvasElem);
  }
}

// Call this when the canvas updates need to start.
function startCanvasUpdates(canvas) {
  // …
}

// Call this when the canvas updates need to stop.
function stopCanvasUpdates(canvas) {
  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ContentVisibilityAutoStateChangeEvent`](/de/docs/Web/API/ContentVisibilityAutoStateChangeEvent)
- [CSS Containment](/de/docs/Web/CSS/Guides/Containment)
- Die Eigenschaft {{cssxref("content-visibility")}}
- Die Eigenschaft {{cssxref("contain")}}
