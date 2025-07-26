---
title: "DocumentType: remove() Methode"
short-title: remove()
slug: Web/API/DocumentType/remove
l10n:
  sourceCommit: 04abc9f51d485a5ad2c4c59bdd1511464d14e78f
---

{{APIRef("DOM")}}

Die **`DocumentType.remove()`**-Methode entfernt den `doctype` eines Dokuments. Wenn er bereits vom Dokument getrennt ist, hat der Aufruf von `remove()` keine Wirkung.

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
