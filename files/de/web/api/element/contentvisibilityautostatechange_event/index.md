---
title: "Element: contentvisibilityautostatechange-Ereignis"
short-title: contentvisibilityautostatechange
slug: Web/API/Element/contentvisibilityautostatechange_event
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSS Containment")}}

Das **`contentvisibilityautostatechange`**-Ereignis wird auf jedem Element ausgelöst, das {{cssxref("content-visibility", "content-visibility: auto")}} gesetzt hat, wenn es für den Nutzer [relevant wird oder nicht mehr relevant ist](/de/docs/Web/CSS/Guides/Containment/Using#relevant_to_the_user) und [seine Inhalte übersprungen werden](/de/docs/Web/CSS/Guides/Containment/Using#skips_its_contents).

Während das Element nicht relevant ist (zwischen den Start- und Endereignissen), überspringt der User-Agent das Rendern des Elements, einschließlich Layout und Malen, was die Geschwindigkeit des Seiten-Renders erheblich verbessern kann. Das `contentvisibilityautostatechange`-Ereignis bietet eine Möglichkeit für den Code einer App, ebenfalls Renderprozesse zu starten oder zu stoppen (z. B. das Zeichnen auf einem {{htmlelement("canvas")}}), wenn sie nicht benötigt werden, und dadurch Rechenleistung zu sparen.

Beachten Sie, dass selbst wenn sie aus der Sicht verborgen sind, die Inhalte eines Elements semantisch relevant bleiben (z. B. für Benutzer unterstützender Technologien), daher sollte dieses Signal nicht verwendet werden, um wesentliche semantische DOM-Updates zu überspringen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("contentvisibilityautostatechange", (event) => { })

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
- Die {{cssxref("content-visibility")}}-Eigenschaft
- Die {{cssxref("contain")}}-Eigenschaft
