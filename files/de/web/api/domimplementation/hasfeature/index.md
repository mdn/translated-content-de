---
title: "DOMImplementation: hasFeature() Methode"
short-title: hasFeature()
slug: Web/API/DOMImplementation/hasFeature
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ApiRef("DOM")}}{{Deprecated_Header}}

Die Methode **`DOMImplementation.hasFeature()`** gibt ein
boolesches Flag zurück, das anzeigt, ob ein bestimmtes Feature unterstützt wird. Sie ist
veraltet und moderne Browser geben in allen Fällen `true` zurück.

Die verschiedenen Implementierungen wichen beträchtlich darin ab, welche Arten von Features gemeldet wurden. Die neueste Version der Spezifikation entschied sich, diese Methode immer `true` zurückgeben zu lassen, wenn die Funktionalität korrekt und in Gebrauch war.

## Syntax

```js-nolint
hasFeature(feature, version)
```

### Parameter

- `feature`
  - : Ein String, der den Namen des Features repräsentiert.
- `version`
  - : Ein String, der die Version der Spezifikation darstellt, die
    das Feature definiert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`DOMImplementation`](/de/docs/Web/API/DOMImplementation) Schnittstelle, zu der sie gehört.
