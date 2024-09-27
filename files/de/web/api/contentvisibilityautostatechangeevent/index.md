---
title: ContentVisibilityAutoStateChangeEvent
slug: Web/API/ContentVisibilityAutoStateChangeEvent
l10n:
  sourceCommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{APIRef("CSS Containment")}}

Die **`ContentVisibilityAutoStateChangeEvent`**-Schnittstelle ist das Ereignisobjekt für das [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)-Ereignis, das bei jedem Element mit {{cssxref("content-visibility", "content-visibility: auto")}} ausgelöst wird, wenn es beginnt oder aufhört, [für den Benutzer relevant zu sein](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#relevant_to_the_user) und [seine Inhalte zu überspringen](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents).

Während das Element nicht relevant ist (zwischen Start- und Endereignis), überspringt der Benutzeragent das Rendering eines Elements, einschließlich Layout und Malen. Dies kann die Geschwindigkeit des Seiten-Renderings erheblich verbessern. Das [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)-Ereignis bietet eine Möglichkeit für den Code einer App, auch die Rendering-Prozesse zu starten oder zu stoppen (z.B. Zeichnungen auf einem {{htmlelement("canvas")}}), wenn sie nicht benötigt werden, und somit Rechenleistung zu sparen.

Beachten Sie, dass auch wenn sie nicht sichtbar sind, die Inhalte der Elemente semantisch relevant bleiben (z.B. für Benutzer von unterstützenden Technologien). Dieses Signal sollte daher nicht verwendet werden, um bedeutende semantische DOM-Aktualisierungen zu überspringen.

{{InheritanceDiagram}}

## Konstruktor

- [`ContentVisibilityAutoStateChangeEvent()`](/de/docs/Web/API/ContentVisibilityAutoStateChangeEvent/ContentVisibilityAutoStateChangeEvent)
  - : Erstellt eine neue Instanz eines `ContentVisibilityAutoStateChangeEvent`-Objekts.

## Instanzeigenschaften

_Erbt Eigenschaften von seinem übergeordneten Element, [`Event`](/de/docs/Web/API/Event)._

- [`skipped`](/de/docs/Web/API/ContentVisibilityAutoStateChangeEvent/skipped) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn der Benutzeragent das Rendering des Elements überspringt, oder `false` andernfalls.

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
- Die {{cssxref("content-visibility")}}-Eigenschaft
- Die {{cssxref("contain")}}-Eigenschaft
