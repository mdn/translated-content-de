---
title: "ProcessingInstruction: hasAttribute() Methode"
short-title: hasAttribute()
slug: Web/API/ProcessingInstruction/hasAttribute
l10n:
  sourceCommit: e316526e520d8163e9151dca8973eb777b5285e0
---

{{APIRef("DOM")}}{{SeeCompatTable}}

Die **`hasAttribute()`**-Methode der [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)-Schnittstelle gibt einen booleschen Wert zurück, der angibt, ob das angegebene Element das spezifizierte Attribut besitzt oder nicht.

## Syntax

```js-nolint
hasAttribute(name)
```

### Parameter

- `name`
  - : Ein String, der den Namen des Attributs darstellt.

### Rückgabewert

Ein boolescher Wert.

## Beispiele

### Grundlegende Verwendung

```js
const pi = document.createProcessingInstruction("start", 'name="placeholder"');

console.log(pi.hasAttribute("name"));
// logs:
// true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ProcessingInstruction.hasAttributes()`](/de/docs/Web/API/ProcessingInstruction/hasAttributes)
- [`ProcessingInstruction.getAttribute()`](/de/docs/Web/API/ProcessingInstruction/getAttribute)
- [`ProcessingInstruction.getAttributeNames()`](/de/docs/Web/API/ProcessingInstruction/getAttributeNames)
- [`ProcessingInstruction.setAttribute()`](/de/docs/Web/API/ProcessingInstruction/setAttribute)
- [`ProcessingInstruction.removeAttribute()`](/de/docs/Web/API/ProcessingInstruction/removeAttribute)
- [`ProcessingInstruction.toggleAttribute()`](/de/docs/Web/API/ProcessingInstruction/toggleAttribute)
