---
title: "Element: contentvisibilityautostatechange Ereignis"
short-title: contentvisibilityautostatechange
slug: Web/API/Element/contentvisibilityautostatechange_event
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("CSS Containment")}}

Das **`contentvisibilityautostatechange`**-Ereignis wird auf einem Element ausgelöst, das die Eigenschaft {{cssxref("content-visibility", "content-visibility: auto")}} gesetzt hat, wenn es beginnt oder aufhört, [für den Benutzer relevant zu sein](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#relevant_to_the_user) und [seine Inhalte überspringt](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents).

Während das Element nicht relevant ist (zwischen den Start- und Endereignissen), überspringt der Benutzeragent das Rendering des Elements, einschließlich Layout und Malen, was die Geschwindigkeit des Renderings der Seite erheblich verbessern kann. Das `contentvisibilityautostatechange`-Ereignis bietet eine Möglichkeit, dass der Code einer App auch Rendering-Prozesse starten oder stoppen kann (z. B. Zeichnen auf einem {{htmlelement("canvas")}}), wenn diese nicht benötigt werden, um Rechenleistung zu sparen.

Beachten Sie, dass selbst wenn die Inhalte aus der Sicht verborgen sind, sie semantisch relevant bleiben (z. B. für Benutzer von unterstützenden Technologien), sodass dieses Signal nicht verwendet werden sollte, um wesentliche semantische DOM-Updates zu überspringen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("contentvisibilityautostatechange", (event) => {});
oncontentvisibilityautostatechange = (event) => {};
```

> [!NOTE]
> Das Ereignisobjekt ist vom Typ [`ContentVisibilityAutoStateChangeEvent`](/de/docs/Web/API/ContentVisibilityAutoStateChangeEvent).

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
- [CSS Containment](/de/docs/Web/CSS/CSS_containment)
- Die Eigenschaft {{cssxref("content-visibility")}}
- Die Eigenschaft {{cssxref("contain")}}
