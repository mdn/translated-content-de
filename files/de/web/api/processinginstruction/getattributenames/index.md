---
title: "ProcessingInstruction: Methode getAttributeNames()"
short-title: getAttributeNames()
slug: Web/API/ProcessingInstruction/getAttributeNames
l10n:
  sourceCommit: e316526e520d8163e9151dca8973eb777b5285e0
---

{{APIRef("DOM")}}{{SeeCompatTable}}

Die **`getAttributeNames()`**-Methode des [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)-Interfaces gibt die Attributnamen der Verarbeitungshinweise als ein {{jsxref("Array")}} von Strings zurück. Hat die Verarbeitungshinweise keine Attribute, wird ein leeres Array zurückgegeben.

## Syntax

```js-nolint
getAttributeNames()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Array")}} von Strings.

## Beschreibung

Die Verwendung von `getAttributeNames()` zusammen mit [`getAttribute()`](/de/docs/Web/API/ProcessingInstruction/getAttribute) ist eine speichereffiziente und performante Alternative zum Zugriff auf `ProcessingInstruction.data`.

Die von **`getAttributeNames()`** zurückgegebenen Namen sind _qualifizierte_ Attributnamen. Das bedeutet, dass Attribute mit einem Namespace-Präfix ihre Namen mit diesem Namespace-Präfix (nicht der tatsächliche Namespace), gefolgt von einem Doppelpunkt, gefolgt vom Attributnamen zurückgeben (zum Beispiel **`xlink:href`**). Attribute ohne Namespace-Präfix werden unverändert zurückgegeben (zum Beispiel **`href`**).

## Beispiele

### Grundlegende Nutzung

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
