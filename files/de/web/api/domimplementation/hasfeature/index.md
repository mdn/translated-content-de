---
title: "DOMImplementation: hasFeature()-Methode"
short-title: hasFeature()
slug: Web/API/DOMImplementation/hasFeature
l10n:
  sourceCommit: 6753e2b76ca411e526b1950eaa43272cfca682dc
---

{{ApiRef("DOM")}}{{Deprecated_Header}}

Die
**`DOMImplementation.hasFeature()`**-Methode gibt ein
boolesches Flag zurück, das anzeigt, ob eine bestimmte Funktion unterstützt wird. Sie ist veraltet und moderne Browser geben in allen Fällen `true` zurück.

Die verschiedenen Implementierungen wichen erheblich darin ab, welche Art von Funktionen berichtet wurden. Die neueste Version der Spezifikation hat festgelegt, dass diese Methode immer `true` zurückgeben soll, wo die Funktionalität genau und in Gebrauch war.

## Syntax

```js-nolint
hasFeature(feature, version)
```

### Parameter

- `feature`
  - : Ein String, der den Funktionsnamen repräsentiert.
- `version`
  - : Ein String, der die Versionsnummer der Spezifikation darstellt, die
    die Funktion definiert.

### Rückgabewert

Ein boolescher Wert von `true`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`DOMImplementation`](/de/docs/Web/API/DOMImplementation)-Schnittstelle, zu der sie gehört.
