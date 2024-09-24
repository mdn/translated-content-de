---
title: ContentVisibilityAutoStateChangeEvent
slug: Web/API/ContentVisibilityAutoStateChangeEvent
l10n:
  sourceCommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{APIRef("CSS Containment")}}

Das **`ContentVisibilityAutoStateChangeEvent`**-Interface ist das Ereignisobjekt für das {{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}}-Ereignis, das bei jedem Element mit {{cssxref("content-visibility", "content-visibility: auto")}} ausgelöst wird, wenn es beginnt oder aufhört, für den [Benutzer relevant zu sein](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#relevant_to_the_user) und seine [Inhalte zu überspringen](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents).

Während das Element nicht relevant ist (zwischen den Start- und Endereignissen), überspringt der Benutzeragent das Rendering eines Elements, einschließlich Layout und Malen. Dies kann die Geschwindigkeit des Seiten-Renderings erheblich verbessern. Das {{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}}-Ereignis bietet eine Möglichkeit, dass der Code einer App auch Render-Prozesse starten oder stoppen kann (z.B. Zeichnen auf einem {{htmlelement("canvas")}}), wenn sie nicht benötigt werden, um so Rechenleistung zu sparen.

Beachten Sie, dass selbst wenn der Inhalt nicht sichtbar ist, er semantisch relevant bleibt (z.B. für Benutzer von unterstützender Technologie), sodass dieses Signal nicht verwendet werden sollte, um bedeutende semantische DOM-Updates zu überspringen.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("ContentVisibilityAutoStateChangeEvent.ContentVisibilityAutoStateChangeEvent", "ContentVisibilityAutoStateChangeEvent()")}}
  - : Erstellt eine neue Instanz des `ContentVisibilityAutoStateChangeEvent`-Objekts.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem übergeordneten Objekt, {{DOMxRef("Event")}}._

- {{domxref("ContentVisibilityAutoStateChangeEvent.skipped", "skipped")}} {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn der Benutzeragent das Rendern des Elements überspringt, oder `false`, wenn nicht.

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

- Das {{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}}-Ereignis
- [CSS Containment](/de/docs/Web/CSS/CSS_containment)
- Die {{cssxref("content-visibility")}}-Eigenschaft
- Die {{cssxref("contain")}}-Eigenschaft
