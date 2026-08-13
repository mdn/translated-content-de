---
title: "ProcessingInstruction: getAttributeNames() Methode"
short-title: getAttributeNames()
slug: Web/API/ProcessingInstruction/getAttributeNames
l10n:
  sourceCommit: b449f4c0a3d1a9cf33ac0c49c685cbf000cc829e
---

{{APIRef("DOM")}}

Die **`getAttributeNames()`** Methode der [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) Schnittstelle gibt die Attributnamen der Verarbeitungshinweise als ein {{jsxref("Array")}} von Zeichenfolgen zurück. Wenn die Verarbeitungshinweise keine Attribute haben, gibt sie ein leeres Array zurück.

## Syntax

```js-nolint
getAttributeNames()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Array")}} von Zeichenfolgen.

## Beschreibung

Die Verwendung von `getAttributeNames()` zusammen mit [`getAttribute()`](/de/docs/Web/API/ProcessingInstruction/getAttribute) ist eine speichereffiziente und leistungsstarke Alternative zum Zugriff auf `ProcessingInstruction.data`.

Die von **`getAttributeNames()`** zurückgegebenen Namen sind _qualifizierte_ Attributnamen. Das bedeutet, dass Attribute mit einem Namespace-Präfix mit diesem Präfix zurückgegeben werden (jedoch _nicht_ der eigentliche Namespace), gefolgt von einem Doppelpunkt und dem Attributnamen (zum Beispiel **`xlink:href`**). Jegliche Attribute ohne Namespace-Präfix werden mit ihren Namen unverändert zurückgegeben (zum Beispiel **`href`**).

## Beispiele

### Grundlegende Verwendung

```js
const pi = document.createProcessingInstruction(
  "start",
  'name="placeholder" more="info"',
);

console.log(pi.getAttributeNames());
// logs:
// ['name', 'more']

// Iterate over processing instruction's attributes
for (const name of pi.getAttributeNames()) {
  const value = pi.getAttribute(name);
  console.log(name, value);
}
// logs:
// name placeholder
// more info
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ProcessingInstruction.hasAttribute()`](/de/docs/Web/API/ProcessingInstruction/hasAttribute)
- [`ProcessingInstruction.hasAttributes()`](/de/docs/Web/API/ProcessingInstruction/hasAttributes)
- [`ProcessingInstruction.getAttribute()`](/de/docs/Web/API/ProcessingInstruction/getAttribute)
- [`ProcessingInstruction.setAttribute()`](/de/docs/Web/API/ProcessingInstruction/setAttribute)
- [`ProcessingInstruction.removeAttribute()`](/de/docs/Web/API/ProcessingInstruction/removeAttribute)
- [`ProcessingInstruction.toggleAttribute()`](/de/docs/Web/API/ProcessingInstruction/toggleAttribute)
