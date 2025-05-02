---
title: "Element: contentvisibilityautostatechange-Ereignis"
short-title: contentvisibilityautostatechange
slug: Web/API/Element/contentvisibilityautostatechange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("CSS Containment")}}

Das **`contentvisibilityautostatechange`**-Ereignis wird bei jedem Element ausgelöst, das die Eigenschaft {{cssxref("content-visibility", "content-visibility: auto")}} gesetzt hat, wenn es beginnt oder aufhört, [für den Benutzer relevant zu sein](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#relevant_to_the_user) und seine Inhalte [übersprungen werden](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents).

Während das Element nicht relevant ist (zwischen den Start- und Endereignissen), überspringt der Benutzeragent das Rendern des Elements, einschließlich Layout und Malen, was die Geschwindigkeit des Seitenrenderings erheblich verbessern kann. Das `contentvisibilityautostatechange`-Ereignis bietet eine Möglichkeit für den Code einer Anwendung, auch Renderprozesse zu starten oder zu stoppen (z. B. das Zeichnen auf einem {{htmlelement("canvas")}}), wenn sie nicht benötigt werden, wodurch Rechenleistung gespart wird.

Beachten Sie, dass auch wenn Inhalte ausgeblendet sind, die Elemente inhaltlich relevant bleiben (z. B. für Benutzer von unterstützender Technologie). Daher sollte dieses Signal nicht verwendet werden, um bedeutende semantische DOM-Updates zu überspringen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

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
- [CSS Containment](/de/docs/Web/CSS/CSS_containment)
- Die {{cssxref("content-visibility")}} Eigenschaft
- Die {{cssxref("contain")}} Eigenschaft
