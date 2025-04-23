---
title: MathMLElement
slug: Web/API/MathMLElement
l10n:
  sourceCommit: cd701f10306c8b0b9690532ff808df826818a04f
---

{{APIRef("MathML")}}

Das **`MathMLElement`**-Interface repräsentiert jedes [MathML](/de/docs/Web/MathML) Element.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elternteil, [`Element`](/de/docs/Web/API/Element)_.

- [`MathMLElement.attributeStyleMap`](/de/docs/Web/API/MathMLElement/attributeStyleMap) {{ReadOnlyInline}}
  - : Ein [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap), das die Deklarationen des `style`-Attributs des Elements darstellt.
- [`MathMLElement.autofocus`](/de/docs/Web/API/MathMLElement/autofocus)
  - : Gibt an, ob das Steuerelement fokussiert sein soll, wenn die Seite geladen wird oder wenn ein {{htmlelement("dialog")}} oder [Popover](/de/docs/Web/HTML/Reference/Global_attributes/popover) angezeigt wird.
- [`MathMLElement.dataset`](/de/docs/Web/API/MathMLElement/dataset) {{ReadOnlyInline}}
  - : Ein [`DOMStringMap`](/de/docs/Web/API/DOMStringMap)-Objekt, das eine Liste von Schlüssel/Wert-Paaren von benannten Datenattributen bietet, die den [benutzerdefinierten Datenattributen](/de/docs/Web/HTML/How_to/Use_data_attributes) entsprechen, die dem Element zugeordnet sind. Dies funktioniert ähnlich wie die Eigenschaft [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) von HTML und das globale Attribut [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*).
- [`MathMLElement.style`](/de/docs/Web/API/MathMLElement/style)
  - : Eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration), die die Deklarationen des `style`-Attributs des Elements darstellt.
- [`MathMLElement.tabIndex`](/de/docs/Web/API/MathMLElement/tabIndex)
  - : Die Position des Elements in der Tabulatorreihenfolge.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von seinem Elternteil, [`Element`](/de/docs/Web/API/Element)_.

- [`MathMLElement.blur()`](/de/docs/Web/API/MathMLElement/blur)
  - : Entfernt den Tastaturfokus vom aktuell fokussierten Element.
- [`MathMLElement.focus()`](/de/docs/Web/API/MathMLElement/focus)
  - : Setzt das Element in den aktuellen Tastaturfokus.

## Beispiele

### MathML

```html
<math>
  <msqrt>
    <mi>x</mi>
  </msqrt>
</math>
```

### JavaScript

```js
document.querySelector("msqrt").constructor.name; // MathMLElement
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element`](/de/docs/Web/API/Element)
- [`HTMLElement`](/de/docs/Web/API/HTMLElement)
- [`SVGElement`](/de/docs/Web/API/SVGElement)
