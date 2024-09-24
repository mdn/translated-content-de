---
title: MathMLElement
slug: Web/API/MathMLElement
l10n:
  sourceCommit: 4f263d8dfb90fa2253e090ee339ae14d1907fa63
---

{{APIRef("MathML")}}

Die **`MathMLElement`**-Schnittstelle repräsentiert jedes [MathML](/de/docs/Web/MathML)-Element.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elternteil, {{DOMxRef("Element")}}_.

- {{DOMxRef("MathMLElement.attributeStyleMap")}} {{ReadOnlyInline}}
  - : Ein {{DOMxRef("StylePropertyMap")}}, das die Deklarationen des `style`-Attributs des Elements darstellt.
- {{DOMxRef("MathMLElement.style")}}
  - : Ein {{DOMxRef("CSSStyleDeclaration")}}, das die Deklarationen des `style`-Attributs des Elements darstellt.

## Instanz-Methoden

_Diese Schnittstelle hat keine Methoden, erbt jedoch Methoden von ihrem Elternteil, {{DOMxRef("Element")}}_.

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{DOMxRef("Element")}}
- {{DOMxRef("HTMLElement")}}
- {{DOMxRef("SVGElement")}}
