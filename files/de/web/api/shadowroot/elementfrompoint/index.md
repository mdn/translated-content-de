---
title: "ShadowRoot: elementFromPoint() Methode"
short-title: elementFromPoint()
slug: Web/API/ShadowRoot/elementFromPoint
l10n:
  sourceCommit: 62a6f2dbd99b39212f4c4c12aa2a6d499e447f46
---

{{APIRef("DOM")}}{{Non-standard_Header}}

Die **`elementFromPoint()`**-Methode, die auf dem [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekt verfügbar ist, gibt das Element zurück, das sich in der obersten Schicht des Shadow-DOM an den angegebenen Koordinaten relativ zum Ansichtsfenster (dem Shadow-DOM-Element auf der höchsten Ebene der Anzeige-Z-Reihenfolge, das Zeigerereignisse empfangen kann) befindet. Shadow-DOM-Elemente, die {{cssxref("pointer-events")}} auf `none` gesetzt haben, werden ignoriert.

Wenn der angegebene Punkt außerhalb der Grenzen des Shadow-DOM liegt, ist das Ergebnis `undefined`.

## Syntax

```js-nolint
elementFromPoint(x, y)
```

### Parameter

- `x`
  - : Die horizontale Koordinate eines Punktes, relativ zum linken Rand des aktuellen {{Glossary("viewport", "Ansichtsfensters")}}.
- `y`
  - : Die vertikale Koordinate eines Punktes, relativ zum oberen Rand des aktuellen Ansichtsfensters.

### Rückgabewert

Ein [`Element`](/de/docs/Web/API/Element); das oberste Shadow-DOM-Element, das an den angegebenen Koordinaten gefunden wird, falls vorhanden.

## Beispiele

In diesem Beispiel definieren wir, vorausgesetzt, dass ein {{htmlelement("template")}} im HTML vorhanden ist, ein `<my-custom-element>`. Wenn das hinzugefügte benutzerdefinierte Element die obere linke Ecke des Ansichtsfensters berührt oder ein Teil davon diese Ecke überlappt, erhält das Element, das an diesem Punkt die oberste Schicht in dem benutzerdefinierten Element ist, einen dünnen, gestrichelten roten Rahmen.

```js
customElements.define(
  "my-custom-element",
  class extends HTMLElement {
    constructor() {
      super();
      const templateContent = document.getElementById(
        "my-custom-element-template",
      ).content;
      const sRoot = this.attachShadow({ mode: "open" });
      sRoot.appendChild(templateContent.cloneNode(true));

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
