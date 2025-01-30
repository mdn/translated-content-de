---
title: "ShadowRoot: elementsFromPoint()-Methode"
short-title: elementsFromPoint()
slug: Web/API/ShadowRoot/elementsFromPoint
l10n:
  sourceCommit: 62a6f2dbd99b39212f4c4c12aa2a6d499e447f46
---

{{APIRef("DOM")}}{{Non-standard_Header}}

Die **`elementsFromPoint()`**-Methode des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Interfaces gibt ein Array aller Shadow-Root-Elemente an den angegebenen Koordinaten (relativ zum Viewport) zurück. Die Elemente sind geordnet vom obersten Element (höchste in der Anzeige z-Ordnung) bis zum untersten Element.

Sie funktioniert ähnlich wie die [`ShadowRoot.elementFromPoint`](/de/docs/Web/API/ShadowRoot/elementFromPoint)-Methode. Einige Browser geben nur die Shadow-Root-Elemente zurück, die an diesem Ort vorhanden sind. Andere Browser enthalten Elemente außerhalb des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM), vom Shadow-DOM-Element in der obersten Schicht bis zum Dokument-Wurzelknoten, wie das {{htmlelement("html")}}- oder das {{SVGElement("svg")}}-Wurzelelement. In diesen Browsern funktioniert sie ähnlich wie die [`Document.elementsFromPoint`](/de/docs/Web/API/Document/elementsFromPoint)-Methode, jedoch mit der Fähigkeit, die {{Glossary("Shadow_tree", "Schatten-Grenze")}} zu überschreiten.

## Syntax

```js-nolint
elementsFromPoint(x, y)
```

### Parameter

- `x`
  - : Die horizontale Koordinate eines Punktes, relativ zur linken Kante des aktuellen {{Glossary("viewport", "Viewports")}}.
- `y`
  - : Die vertikale Koordinate eines Punktes, relativ zur oberen Kante des aktuellen Viewports.

### Rückgabewert

Ein Array von [`Element`](/de/docs/Web/API/Element)-Objekten.

## Beispiele

```js
const customElem = document.querySelector("my-custom-element");
const shadow = customElem.shadowRoot;
const elements = shadow.elementsFromPoint(20, 20);
const msg = elements.map((el) => el.localName).join(" < ");
if (msg) {
  console.log(msg);
} else {
  console.log("The custom element had no descendants at x: 20, y: 20.");
}
```

Wenn `<my-custom-element>` nahe der oberen linken Ecke des Viewports ist und ein einziges `<div>` enthält, kann das oben Genannte je nach Browser-Implementierung eines der folgenden zurückgeben:

```plain
div
div < my-custom-element < body < html
```

## Spezifikationen

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ShadowRoot.elementFromPoint()`](/de/docs/Web/API/ShadowRoot/elementFromPoint)
- [`Document.elementsFromPoint()`](/de/docs/Web/API/Document/elementsFromPoint)
