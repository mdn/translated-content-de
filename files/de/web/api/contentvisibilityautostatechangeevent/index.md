---
title: ContentVisibilityAutoStateChangeEvent
slug: Web/API/ContentVisibilityAutoStateChangeEvent
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("CSS Containment")}}

Die **`ContentVisibilityAutoStateChangeEvent`** Schnittstelle ist das Ereignisobjekt für das [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)-Ereignis, das bei jedem Element ausgelöst wird, welches {{cssxref("content-visibility", "content-visibility: auto")}} eingestellt hat, wenn es anfängt oder aufhört, für den [Benutzer relevant zu sein](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#relevant_to_the_user) und [dessen Inhalte zu überspringen](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents).

Während das Element nicht relevant ist (zwischen Start- und Endereignissen), überspringt der Benutzeragent das Rendern eines Elements, einschließlich Layout und Malen. Dies kann die Geschwindigkeit des Seiten-Renderings erheblich verbessern. Das [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)-Ereignis bietet eine Möglichkeit für den Code einer App, auch Renderprozesse zu starten oder zu stoppen (z. B. das Zeichnen auf einem {{htmlelement("canvas")}}), wenn sie nicht benötigt werden, um so Rechenleistung zu sparen.

Beachten Sie, dass selbst wenn sie aus der Ansicht ausgeblendet sind, die Inhalte eines Elements semantisch relevant bleiben (z. B. für Benutzer unterstützender Technologien), daher sollte dieses Signal nicht verwendet werden, um bedeutende semantische DOM-Aktualisierungen zu überspringen.

{{InheritanceDiagram}}

## Konstruktor

- [`ContentVisibilityAutoStateChangeEvent()`](/de/docs/Web/API/ContentVisibilityAutoStateChangeEvent/ContentVisibilityAutoStateChangeEvent)
  - : Erstellt eine neue Instanz des `ContentVisibilityAutoStateChangeEvent`-Objekts.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`skipped`](/de/docs/Web/API/ContentVisibilityAutoStateChangeEvent/skipped) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn der Benutzeragent das Rendern des Elements überspringt, andernfalls `false`.

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

- Das [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)-Ereignis
- [CSS Containment](/de/docs/Web/CSS/CSS_containment)
- Die {{cssxref("content-visibility")}} Eigenschaft
- Die {{cssxref("contain")}} Eigenschaft
