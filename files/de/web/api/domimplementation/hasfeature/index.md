---
title: "DOMImplementation: hasFeature()-Methode"
short-title: hasFeature()
slug: Web/API/DOMImplementation/hasFeature
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{ApiRef("DOM")}}

Die **`DOMImplementation.hasFeature()`**-Methode gibt ein boolesches Flag zurück, das anzeigt, ob ein bestimmtes Feature unterstützt wird. Sie ist veraltet und in modernen Browsern gibt sie in allen Fällen `true` zurück.

Die verschiedenen Implementierungen unterschieden sich erheblich darin, welche Art von Features gemeldet wurden. Die neueste Version der Spezifikation hat festgelegt, dass diese Methode immer `true` zurückgibt, wenn die Funktionalität korrekt und in Gebrauch war.

## Syntax

```js-nolint
hasFeature(feature, version)
```

### Parameter

- `feature`
  - : Ein String, der den Namen des Features darstellt.
- `version`
  - : Ein String, der die Version der Spezifikation darstellt, die das Feature definiert.

### Rückgabewert

Ein boolescher Wert von `true`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`DOMImplementation`](/de/docs/Web/API/DOMImplementation)-Interface, zu dem es gehört.
