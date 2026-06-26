---
title: MathMLElement
slug: Web/API/MathMLElement
l10n:
  sourceCommit: bfec9e17373a24d6c70cc52fad82719b811e7985
---

{{APIRef("MathML")}}

Das **`MathMLElement`** Interface repräsentiert jedes [MathML](/de/docs/Web/MathML) Element.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elternteil, [`Element`](/de/docs/Web/API/Element)_.

- [`MathMLElement.attributeStyleMap`](/de/docs/Web/API/MathMLElement/attributeStyleMap) {{ReadOnlyInline}}
  - : Ein [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap), das die Deklarationen des `style` Attributs des Elements darstellt.
- [`MathMLElement.autofocus`](/de/docs/Web/API/MathMLElement/autofocus)
  - : Ob das Steuerelement fokussiert werden soll, wenn die Seite geladen wird, oder wenn ein {{htmlelement("dialog")}} oder [popover](/de/docs/Web/HTML/Reference/Global_attributes/popover) angezeigt wird.
- [`MathMLElement.dataset`](/de/docs/Web/API/MathMLElement/dataset) {{ReadOnlyInline}}
  - : Ein [`DOMStringMap`](/de/docs/Web/API/DOMStringMap) Objekt, das eine Liste von Schlüssel/Wert-Paaren von benannten Datenattributen bereitstellt, die zu den [benutzerdefinierten Datenattributen](/de/docs/Web/HTML/How_to/Use_data_attributes) gehören, die dem Element angefügt sind. Diese entsprechen den globalen MathML-Attributen [`data-*`](/de/docs/Web/MathML/Reference/Global_attributes/data-*).
- [`MathMLElement.nonce`](/de/docs/Web/API/MathMLElement/nonce)
  - : Gibt die einmalige kryptografische Nummer zurück, die von der Content Security Policy verwendet wird, um zu bestimmen, ob ein bestimmter Abruf durchgeführt werden darf.
- [`MathMLElement.style`](/de/docs/Web/API/MathMLElement/style)
  - : Ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration), das die Deklarationen des `style` Attributs des Elements darstellt.
- [`MathMLElement.tabIndex`](/de/docs/Web/API/MathMLElement/tabIndex)
  - : Die Position des Elements in der Tabulatorreihenfolge.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von seinem Elternteil, [`Element`](/de/docs/Web/API/Element)_.

- [`MathMLElement.blur()`](/de/docs/Web/API/MathMLElement/blur)
  - : Entfernt den Tastaturfokus vom aktuell fokussierten Element.
- [`MathMLElement.focus()`](/de/docs/Web/API/MathMLElement/focus)
  - : Setzt den Tastaturfokus auf das Element.

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
