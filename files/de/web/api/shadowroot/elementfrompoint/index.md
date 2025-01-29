---
title: "ShadowRoot: elementFromPoint()-Methode"
short-title: elementFromPoint()
slug: Web/API/ShadowRoot/elementFromPoint
l10n:
  sourceCommit: a359b3bc073e23d88a582c4bf77b88b24705e7f5
---

{{APIRef("DOM")}}{{Non-standard_Header}}

Die **`elementFromPoint()`**-Methode, verfügbar auf dem [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekt, gibt das Element auf der obersten Schattenwurzel-Ebene an den angegebenen Koordinaten relativ zum Ansichtsfenster zurück (die Schattenwurzel, die in der Anzeige Z-Ordnung am höchsten liegt und in der Lage ist, Zeigerereignisse zu empfangen). Schattenwurzel-Elemente, bei denen {{cssxref("pointer-events")}} auf `none` gesetzt ist, werden ignoriert.

Befindet sich der angegebene Punkt außerhalb der Begrenzungen der Schattenwurzel, ist das Ergebnis `undefined`.

## Syntax

```js-nolint
elementFromPoint(x, y)
```

### Parameter

- `x`
  - : Die horizontale Koordinate eines Punktes, relativ zur linken Kante des aktuellen {{Glossary("viewport", "Ansichtsfensters")}}.
- `y`
  - : Die vertikale Koordinate eines Punktes, relativ zur oberen Kante des aktuellen Ansichtsfensters.

### Rückgabewert

Ein [`Element`](/de/docs/Web/API/Element); das oberste Schattenwurzel-Element, das sich an den angegebenen Koordinaten befindet, falls vorhanden.

## Beispiele

In diesem Beispiel, unter der Annahme, dass ein {{htmlelement("template")}} im HTML existiert, definieren wir ein `<my-custom-element>`. Wenn das hinzugefügte benutzerdefinierte Element die obere linke Ecke des Ansichtsfensters berührt oder irgendein Teil davon diese Ecke überlappt, wird das Element, das die oberste Schicht an diesem Punkt im benutzerdefinierten Element ist, einen dünnen, gestrichelten roten Rand haben.

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
