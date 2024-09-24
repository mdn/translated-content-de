---
title: "Element: contentvisibilityautostatechange-Ereignis"
short-title: contentvisibilityautostatechange
slug: Web/API/Element/contentvisibilityautostatechange_event
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("CSS Containment")}}

Das **`contentvisibilityautostatechange`**-Ereignis wird bei jedem Element ausgelöst, bei dem {{cssxref("content-visibility", "content-visibility: auto")}} eingestellt ist, wenn es beginnt oder aufhört, für den [Benutzer relevant zu sein](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#relevant_to_the_user) und [seine Inhalte überspringt](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents).

Während das Element nicht relevant ist (zwischen Start- und Endereignissen), überspringt der User-Agent das Rendering eines Elements, einschließlich Layout und Rendering, was die Geschwindigkeit des Seitenrenders erheblich verbessern kann. Das `contentvisibilityautostatechange`-Ereignis bietet eine Möglichkeit, auch Rendering-Prozesse einer App zu starten oder zu stoppen (z.B. Zeichnen auf einem {{htmlelement("canvas")}}), wenn sie nicht benötigt werden, und somit Rechenleistung zu sparen.

Beachten Sie, dass auch wenn Inhalte nicht sichtbar sind, diese semantisch relevant bleiben (z.B. für Benutzer von unterstützenden Technologien), sodass dieses Signal nicht verwendet werden sollte, um bedeutende semantische DOM-Aktualisierungen zu überspringen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("contentvisibilityautostatechange", (event) => {});
oncontentvisibilityautostatechange = (event) => {};
```

> [!NOTE]
> Das Ereignisobjekt ist vom Typ {{domxref("ContentVisibilityAutoStateChangeEvent")}}.

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

// Aufrufen, wenn die Canvas-Updates gestartet werden müssen.
function startCanvasUpdates(canvas) {
  // …
}

// Aufrufen, wenn die Canvas-Updates gestoppt werden müssen.
function stopCanvasUpdates(canvas) {
  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("ContentVisibilityAutoStateChangeEvent")}}
- [CSS Containment](/de/docs/Web/CSS/CSS_containment)
- Die Eigenschaft {{cssxref("content-visibility")}}
- Die Eigenschaft {{cssxref("contain")}}
