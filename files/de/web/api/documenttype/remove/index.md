---
title: "DocumentType: remove() Methode"
short-title: remove()
slug: Web/API/DocumentType/remove
l10n:
  sourceCommit: 8374946642c18a9cc4bf510de767011124e832a2
---

{{APIRef("DOM")}}

Die **`DocumentType.remove()`**-Methode entfernt den `doctype` eines Dokuments.

## Syntax

```js-nolint
remove()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Verwendung von `remove()`

```js
document.doctype; // "<!doctype html>'
document.doctype.remove();
document.doctype; // null
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.doctype`](/de/docs/Web/API/Document/doctype)
- [`CharacterData.remove()`](/de/docs/Web/API/CharacterData/remove)
- [`Element.remove()`](/de/docs/Web/API/Element/remove)
