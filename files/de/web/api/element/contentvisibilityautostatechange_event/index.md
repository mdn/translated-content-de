---
title: "Element: contentvisibilityautostatechange-Ereignis"
short-title: contentvisibilityautostatechange
slug: Web/API/Element/contentvisibilityautostatechange_event
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("CSS Containment")}}

Das **`contentvisibilityautostatechange`**-Ereignis wird bei jedem Element ausgelöst, das die Einstellung {{cssxref("content-visibility", "content-visibility: auto")}} hat, wenn es für den [Nutzer relevant](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#relevant_to_the_user) wird oder nicht mehr ist und [dessen Inhalt übersprungen wird](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents).

Während das Element nicht relevant ist (zwischen den Start- und Endereignissen), überspringt der Benutzeragent das Rendern eines Elements, einschließlich Layout und Malen, was die Geschwindigkeit des Seitenrenderings erheblich verbessern kann.
Das `contentvisibilityautostatechange`-Ereignis bietet eine Möglichkeit für den Code einer Anwendung, auch Renderprozesse zu starten oder zu stoppen (z.B. Zeichnen auf einem {{htmlelement("canvas")}}), wenn diese nicht benötigt werden, um Rechenleistung zu sparen.

Beachten Sie, dass auch wenn sie aus dem Blickfeld verborgen sind, die Inhalte von Elementen semantisch relevant bleiben (z.B. für Assistenztechnologie-Nutzer), daher sollte dieses Signal nicht dazu verwendet werden, bedeutende semantische DOM-Aktualisierungen zu überspringen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

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
- Die {{cssxref("content-visibility")}}-Eigenschaft
- Die {{cssxref("contain")}}-Eigenschaft
