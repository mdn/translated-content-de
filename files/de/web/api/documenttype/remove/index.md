---
title: "DocumentType: remove()-Methode"
short-title: remove()
slug: Web/API/DocumentType/remove
l10n:
  sourceCommit: 83abbf83add0cd101b13f747bf52da0ff4b51bf8
---

{{APIRef("DOM")}}

Die Methode **`remove()`** der Schnittstelle [`DocumentType`](/de/docs/Web/API/DocumentType) entfernt den `DocumentType`-Knoten aus seinem übergeordneten Knoten. Wenn [`parentNode`](/de/docs/Web/API/Node/parentNode) `null` ist, geschieht nichts.

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
