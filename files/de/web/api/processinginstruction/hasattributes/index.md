---
title: "ProcessingInstruction: hasAttributes() Methode"
short-title: hasAttributes()
slug: Web/API/ProcessingInstruction/hasAttributes
l10n:
  sourceCommit: b449f4c0a3d1a9cf33ac0c49c685cbf000cc829e
---

{{ApiRef("DOM")}}

Die **`hasAttributes()`** Methode des [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)-Interfaces gibt einen booleschen Wert zurück, der anzeigt, ob das aktuelle Element Attribute hat oder nicht.

## Syntax

```js-nolint
hasAttributes()
```

### Parameter

Keine.

### Rückgabewert

Ein boolescher Wert.

## Beispiele

### Grundlegende Verwendung

```js
const pi = document.createProcessingInstruction("start", 'name="placeholder"');

const pi2 = document.createProcessingInstruction("start", "");

console.log(pi.hasAttributes());
console.log(pi2.hasAttributes());
// logs:
// true
// false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ProcessingInstruction.hasAttribute()`](/de/docs/Web/API/ProcessingInstruction/hasAttribute)
- [`ProcessingInstruction.getAttribute()`](/de/docs/Web/API/ProcessingInstruction/getAttribute)
- [`ProcessingInstruction.getAttributeNames()`](/de/docs/Web/API/ProcessingInstruction/getAttributeNames)
- [`ProcessingInstruction.setAttribute()`](/de/docs/Web/API/ProcessingInstruction/setAttribute)
- [`ProcessingInstruction.removeAttribute()`](/de/docs/Web/API/ProcessingInstruction/removeAttribute)
- [`ProcessingInstruction.toggleAttribute()`](/de/docs/Web/API/ProcessingInstruction/toggleAttribute)
