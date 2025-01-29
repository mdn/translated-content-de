---
title: "ShadowRoot: elementsFromPoint()-Methode"
short-title: elementsFromPoint()
slug: Web/API/ShadowRoot/elementsFromPoint
l10n:
  sourceCommit: a359b3bc073e23d88a582c4bf77b88b24705e7f5
---

{{APIRef("DOM")}}{{Non-standard_Header}}

Die **`elementsFromPoint()`**-Methode der [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Schnittstelle gibt ein Array aller im Schatten-Root befindlichen Elemente an den angegebenen Koordinaten (relativ zum Viewport) zurück. Die Elemente sind geordnet von dem obersten Element (höchste in der Darstellungs-Z-Reihenfolge) bis zu dem untersten Element.

Sie funktioniert ähnlich wie die [`ShadowRoot.elementFromPoint`](/de/docs/Web/API/ShadowRoot/elementFromPoint)-Methode. Einige Browser geben nur die im Schatten-Root vorhandenen Elemente an dieser Position zurück. Andere Browser schließen Elemente außerhalb des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) ein, vom Schatten-DOM-Element in der obersten Ebene bis zum Dokument-Root-Knoten, wie das {{htmlelement("html")}}- oder {{SVGElement("svg")}}-Root-Element. In diesen Browsern funktioniert sie ähnlich wie die [`Document.elementsFromPoint`](/de/docs/Web/API/Document/elementsFromPoint)-Methode, jedoch mit der Fähigkeit, die {{Glossary("Shadow_tree", "Schatten-Grenze")}} zu überschreiten.

## Syntax

```js-nolint
elementsFromPoint(x, y)
```

### Parameter

- `x`
  - : Die horizontale Koordinate eines Punktes, relativ zum linken Rand des aktuellen {{Glossary("viewport", "Viewports")}}.
- `y`
  - : Die vertikale Koordinate eines Punktes, relativ zum oberen Rand des aktuellen Viewports.

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

Falls `<my-custom-element>` nahe der oberen linken Ecke des Viewports ist und ein einzelnes `<div>` enthält, kann das obige je nach Browser-Implementierung eines der folgenden zurückgeben:

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
