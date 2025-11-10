---
title: MathMLElement
slug: Web/API/MathMLElement
l10n:
  sourceCommit: 5f4ef6f614202ab1b748708d3e1d95e396f6ee63
---

{{APIRef("MathML")}}

Das **`MathMLElement`** Interface repräsentiert jedes [MathML](/de/docs/Web/MathML) Element.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elternteil, [`Element`](/de/docs/Web/API/Element)_.

- [`MathMLElement.attributeStyleMap`](/de/docs/Web/API/MathMLElement/attributeStyleMap) {{ReadOnlyInline}}
  - : Ein [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap), das die Deklarationen des `style` Attributs des Elements repräsentiert.
- [`MathMLElement.autofocus`](/de/docs/Web/API/MathMLElement/autofocus)
  - : Ob das Steuerelement fokussiert sein sollte, wenn die Seite geladen wird oder wenn ein {{htmlelement("dialog")}} oder [Popover](/de/docs/Web/HTML/Reference/Global_attributes/popover) angezeigt wird.
- [`MathMLElement.dataset`](/de/docs/Web/API/MathMLElement/dataset) {{ReadOnlyInline}}
  - : Ein [`DOMStringMap`](/de/docs/Web/API/DOMStringMap) Objekt, das eine Liste von Schlüssel/Wert-Paaren benannter Datenattribute bietet, die den [benutzerdefinierten Datenattributen](/de/docs/Web/HTML/How_to/Use_data_attributes) entsprechen, die dem Element angehängt sind. Diese entsprechen den globalen Attributen [`data-*`](/de/docs/Web/MathML/Reference/Global_attributes/data-*) von MathML.
- [`MathMLElement.style`](/de/docs/Web/API/MathMLElement/style)
  - : Eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration), die die Deklarationen des `style` Attributs des Elements repräsentiert.
- [`MathMLElement.tabIndex`](/de/docs/Web/API/MathMLElement/tabIndex)
  - : Die Position des Elements in der Tab-Reihenfolge.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von seinem Elternteil, [`Element`](/de/docs/Web/API/Element)_.

- [`MathMLElement.blur()`](/de/docs/Web/API/MathMLElement/blur)
  - : Entfernt den Tastaturfokus vom aktuell fokussierten Element.
- [`MathMLElement.focus()`](/de/docs/Web/API/MathMLElement/focus)
  - : Macht das Element zum aktuellen Tastaturfokus.

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
