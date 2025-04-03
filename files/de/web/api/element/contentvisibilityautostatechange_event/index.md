---
title: "Element: contentvisibilityautostatechange-Ereignis"
short-title: contentvisibilityautostatechange
slug: Web/API/Element/contentvisibilityautostatechange_event
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("CSS Containment")}}

Das **`contentvisibilityautostatechange`**-Ereignis wird bei jedem Element ausgelöst, das die Einstellung {{cssxref("content-visibility", "content-visibility: auto")}} besitzt, wenn es beginnt oder aufhört, [für den Benutzer relevant zu sein](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#relevant_to_the_user) und [seine Inhalte zu überspringen](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents).

Solange das Element nicht relevant ist (zwischen den Start- und Endereignissen), überspringt der Benutzeragent das Rendern eines Elements, einschließlich Layout und Malen, was die Rendergeschwindigkeit der Seite erheblich verbessern kann. Das `contentvisibilityautostatechange`-Ereignis bietet eine Möglichkeit, auch Rendering-Prozesse der Anwendung zu starten oder zu stoppen (zum Beispiel eine Zeichnung auf einem {{htmlelement("canvas")}}), wenn sie nicht benötigt werden, und so Rechenleistung zu sparen.

Beachten Sie, dass selbst wenn sie nicht sichtbar sind, die Inhalte des Elements semantisch relevant bleiben (z.B. für Nutzer assistierender Technologien), daher sollte dieses Signal nicht verwendet werden, um bedeutende semantische DOM-Updates zu überspringen.

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
- Die {{cssxref("content-visibility")}}-Eigenschaft
- Die {{cssxref("contain")}}-Eigenschaft
