---
title: "ShadowRoot: elementFromPoint()-Methode"
short-title: elementFromPoint()
slug: Web/API/ShadowRoot/elementFromPoint
l10n:
  sourceCommit: 730741c750cc299b85798f1adbaf7adbd6e2016d
---

{{APIRef("DOM")}}{{Non-standard_Header}}

Die **`elementFromPoint()`**-Methode, verfügbar auf dem [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekt, gibt das Element an der obersten Schicht des Shadow-Roots an den angegebenen Koordinaten relativ zum Viewport zurück (der oberste Shadow-Root in der Anzeigereihenfolge, der Zeigerereignisse empfangen kann). Shadow-Root-Elemente, bei denen {{cssxref("pointer-events")}} auf `none` gesetzt ist, werden ignoriert.

Wenn der angegebene Punkt außerhalb der Grenzen des Shadow-Roots liegt, ist das Ergebnis `undefined`.

## Syntax

```js-nolint
elementFromPoint(x, y)
```

### Parameter

- `x`
  - : Die horizontale Koordinate eines Punktes, relativ zur linken Kante des aktuellen {{Glossary("viewport", "Viewports")}}.
- `y`
  - : Die vertikale Koordinate eines Punktes, relativ zur oberen Kante des aktuellen Viewports.

### Rückgabewert

Ein [`Element`](/de/docs/Web/API/Element); das oberste Shadow-Root-Element, das an den angegebenen Koordinaten vorhanden ist, falls vorhanden.

## Beispiele

In diesem Beispiel definieren wir, vorausgesetzt es gibt ein {{htmlelement("template")}} im HTML, ein `<my-custom-element>`. Wenn das angehängte benutzerdefinierte Element an der oberen linken Ecke des Viewports angrenzt oder ein Teil davon diese Ecke überlappt, erhält das Element, das an diesem Punkt die oberste Schicht im benutzerdefinierten Element darstellt, einen dünnen, gestrichelten roten Rand.

```js
customElements.define(
  "my-custom-element",
  class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById("my-custom-element-template");
      const sRoot = this.attachShadow({ mode: "open" });
      sRoot.appendChild(document.importNode(template.content, true));
      // get the topmost element in the top left corner of the viewport
      const srElement = this.shadowRoot.elementFromPoint(0, 0);
      // apply a border to that element
      srElement.style.border = "1px dashed red";
    }
  },
);
```

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ShadowRoot.elementsFromPoint()`](/de/docs/Web/API/ShadowRoot/elementsFromPoint)
- [`Document.elementFromPoint()`](/de/docs/Web/API/Document/elementFromPoint)
