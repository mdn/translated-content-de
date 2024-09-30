---
title: "DOMImplementation: hasFeature()-Methode"
short-title: hasFeature()
slug: Web/API/DOMImplementation/hasFeature
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ApiRef("DOM")}}{{Deprecated_Header}}

Die **`DOMImplementation.hasFeature()`**-Methode gibt ein boolesches Flag zurück, das anzeigt, ob eine bestimmte Funktion unterstützt wird. Sie ist veraltet, und moderne Browser geben in allen Fällen `true` zurück.

Die verschiedenen Implementierungen wichen stark darin ab, welche Art von Funktionen gemeldet wurden. Die neueste Version der Spezifikation legte fest, dass diese Methode immer `true` zurückgeben sollte, wo die Funktionalität genau und in Gebrauch war.

## Syntax

```js-nolint
hasFeature(feature, version)
```

### Parameter

- `feature`
  - : Ein String, der den Namen der Funktion darstellt.
- `version`
  - : Ein String, der die Version der Spezifikation darstellt, die die Funktion definiert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`DOMImplementation`](/de/docs/Web/API/DOMImplementation)-Interface, zu dem es gehört.
