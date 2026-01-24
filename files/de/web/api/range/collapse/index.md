---
title: "Range: collapse() Methode"
short-title: collapse()
slug: Web/API/Range/collapse
l10n:
  sourceCommit: f314991b236fce81b712a6df59e4643de0f98449
---

{{APIRef("DOM")}}

Die **`collapse()`** Methode der [`Range`](/de/docs/Web/API/Range) Schnittstelle reduziert die
[`Range`](/de/docs/Web/API/Range) auf einen ihrer Begrenzungspunkte.

Eine reduzierte [`Range`](/de/docs/Web/API/Range) ist leer und enthält keinen Inhalt, sondern spezifiziert einen einzelnen Punkt in einem DOM-Baum. Um festzustellen, ob eine [`Range`](/de/docs/Web/API/Range) bereits reduziert ist, siehe die [`AbstractRange.collapsed`](/de/docs/Web/API/AbstractRange/collapsed) Eigenschaft.

## Syntax

```js-nolint
collapse()
collapse(toStart)
```

### Parameter

- `toStart` {{optional_inline}}
  - : Ein boolescher Wert: `true` reduziert die [`Range`](/de/docs/Web/API/Range) auf ihren Anfang, `false` auf ihr Ende. Falls weggelassen, ist der Standardwert
    `false`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const range = document.createRange();

const referenceNode = document.getElementsByTagName("div").item(0);
range.selectNode(referenceNode);
range.collapse(true);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Schnittstellenindex](/de/docs/Web/API/Document_Object_Model)
