---
title: MathMLElement
slug: Web/API/MathMLElement
l10n:
  sourceCommit: c486da8298cdfdba0556a190d8e3f92e9aa117bb
---

{{APIRef("MathML")}}

Das **`MathMLElement`** Interface repräsentiert ein beliebiges [MathML](/de/docs/Web/MathML)-Element.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten [`Element`](/de/docs/Web/API/Element)_.

- [`MathMLElement.attributeStyleMap`](/de/docs/Web/API/MathMLElement/attributeStyleMap) {{ReadOnlyInline}}
  - : Ein [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap), das die Deklarationen des `style`-Attributs des Elements darstellt.
- [`MathMLElement.autofocus`](/de/docs/Web/API/MathMLElement/autofocus)
  - : Gibt an, ob das Steuerelement fokussiert sein soll, wenn die Seite geladen wird oder wenn ein {{htmlelement("dialog")}} oder ein [Popover](/de/docs/Web/HTML/Reference/Global_attributes/popover) angezeigt wird.
- [`MathMLElement.dataset`](/de/docs/Web/API/MathMLElement/dataset) {{ReadOnlyInline}}
  - : Ein [`DOMStringMap`](/de/docs/Web/API/DOMStringMap)-Objekt, das eine Liste von Schlüssel/Wert-Paaren benannter Datenattribute bereitstellt, die den an das Element angehängten [benutzerdefinierten Datenattributen](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes) entsprechen. Dies funktioniert genauso wie die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft von HTML und das globale [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*)-Attribut von HTML.
- [`MathMLElement.style`](/de/docs/Web/API/MathMLElement/style)
  - : Ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration), das die Deklarationen des `style`-Attributs des Elements darstellt.
- [`MathMLElement.tabIndex`](/de/docs/Web/API/MathMLElement/tabIndex)
  - : Die Position des Elements in der Tabulatorreihenfolge.

## Instanzmethoden

_Diese Schnittstelle erbt auch Methoden von ihrem übergeordneten [`Element`](/de/docs/Web/API/Element)_.

- [`MathMLElement.blur()`](/de/docs/Web/API/MathMLElement/blur)
  - : Entfernt den Tastaturfokus von dem aktuell fokussierten Element.
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
