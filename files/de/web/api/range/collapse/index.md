---
title: "Range: collapse() Methode"
short-title: collapse()
slug: Web/API/Range/collapse
l10n:
  sourceCommit: 2c0de98b0607ef262d9ef0877259ba41aaf53e6d
---

{{APIRef("DOM")}}

Die **`collapse()`** Methode des [`Range`](/de/docs/Web/API/Range) Schnittstelle reduziert den
[`Range`](/de/docs/Web/API/Range) auf einen seiner Grenzpunkte.

Ein kollabierter [`Range`](/de/docs/Web/API/Range) ist leer und enthält keinen Inhalt, sondern gibt einen Einzelpunkt in einem DOM-Baum an. Um festzustellen, ob ein [`Range`](/de/docs/Web/API/Range) bereits kollabiert ist, siehe die [`Range.collapsed`](/de/docs/Web/API/Range/collapsed) Eigenschaft.

## Syntax

```js-nolint
collapse()
collapse(toStart)
```

### Parameter

- `toStart` {{optional_inline}}
  - : Ein boolescher Wert: `true` kollabiert den [`Range`](/de/docs/Web/API/Range)
    zu seinem Anfang, `false` zu seinem Ende. Wenn weggelassen, ist der Standardwert
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

- [Das DOM-Schnittstellen-Index](/de/docs/Web/API/Document_Object_Model)
