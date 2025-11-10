---
title: ContentVisibilityAutoStateChangeEvent
slug: Web/API/ContentVisibilityAutoStateChangeEvent
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSS Containment")}}

Das **`ContentVisibilityAutoStateChangeEvent`** Interface ist das Ereignisobjekt für das [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event) Ereignis, das bei jedem Element mit {{cssxref("content-visibility", "content-visibility: auto")}} ausgelöst wird, wenn es beginnt oder aufhört, [für den Benutzer relevant zu sein](/de/docs/Web/CSS/Guides/Containment/Using#relevant_to_the_user) und seine [Inhalte überspringt](/de/docs/Web/CSS/Guides/Containment/Using#skips_its_contents).

Solange das Element nicht relevant ist (zwischen Start- und Endereignissen), überspringt der Benutzeragent das Rendering eines Elements, einschließlich Layout und Malen. Dies kann die Rendering-Geschwindigkeit der Seite erheblich verbessern. Das [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event) Ereignis bietet eine Möglichkeit für den Code einer App, auch Rendering-Prozesse (z. B. das Zeichnen auf einem {{htmlelement("canvas")}}) zu starten oder zu stoppen, wenn sie nicht benötigt werden, und so Rechenleistung zu sparen.

Beachten Sie, dass der Inhalt des Elements auch dann semantisch relevant bleibt (z. B. für Benutzer von unterstützender Technologie), wenn er nicht sichtbar ist. Dieses Signal sollte daher nicht verwendet werden, um wichtige semantische DOM-Updates zu überspringen.

{{InheritanceDiagram}}

## Konstruktor

- [`ContentVisibilityAutoStateChangeEvent()`](/de/docs/Web/API/ContentVisibilityAutoStateChangeEvent/ContentVisibilityAutoStateChangeEvent)
  - : Erstellt eine neue Instanz des `ContentVisibilityAutoStateChangeEvent` Objekts.

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`skipped`](/de/docs/Web/API/ContentVisibilityAutoStateChangeEvent/skipped) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn der Benutzeragent das Rendern des Elements überspringt, oder `false` andernfalls.

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

- Das [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event) Ereignis
- [CSS Containment](/de/docs/Web/CSS/Guides/Containment)
- Die {{cssxref("content-visibility")}} Eigenschaft
- Die {{cssxref("contain")}} Eigenschaft
