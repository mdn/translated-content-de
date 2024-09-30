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

_Erbt auch Eigenschaften von seinem Elternteil, [`Element`](/de/docs/Web/API/Element)_.

- [`MathMLElement.attributeStyleMap`](/de/docs/Web/API/MathMLElement/attributeStyleMap) {{ReadOnlyInline}}
  - : Ein [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap), das die Deklarationen des `style`-Attributs des Elements darstellt.
- [`MathMLElement.style`](/de/docs/Web/API/MathMLElement/style)
  - : Eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration), die die Deklarationen des `style`-Attributs des Elements darstellt.

## Instanz-Methoden

_Diese Schnittstelle hat keine Methoden, erbt aber Methoden von ihrem Elternteil, [`Element`](/de/docs/Web/API/Element)_.

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
