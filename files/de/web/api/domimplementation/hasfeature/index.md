---
title: "DOMImplementation: hasFeature()-Methode"
short-title: hasFeature()
slug: Web/API/DOMImplementation/hasFeature
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ApiRef("DOM")}}{{Deprecated_Header}}

Die Methode **`DOMImplementation.hasFeature()`** gibt ein boolesches Flag zurück, das angibt, ob ein bestimmtes Feature unterstützt wird. Sie ist veraltet und moderne Browser geben in allen Fällen `true` zurück.

Die verschiedenen Implementierungen unterschieden sich erheblich darin, welche Arten von Features gemeldet wurden. Die neueste Version der Spezifikation hat entschieden, dass diese Methode immer `true` zurückgeben soll, wo die Funktionalität genau und in Gebrauch war.

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

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Das {{domxref("DOMImplementation")}} Interface, zu dem es gehört.
