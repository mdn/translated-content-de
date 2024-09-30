---
title: "Range: collapse() Methode"
short-title: collapse()
slug: Web/API/Range/collapse
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("DOM")}}

Die **`Range.collapse()`**-Methode kollabiert den
[`Range`](/de/docs/Web/API/Range) zu einem seiner Randpunkte.

Ein kollabierter [`Range`](/de/docs/Web/API/Range) ist leer und enthält keinen Inhalt, wobei er einen einzelnen Punkt in einem DOM-Baum angibt. Um festzustellen, ob ein [`Range`](/de/docs/Web/API/Range) bereits kollabiert ist,
sehen Sie sich die [`Range.collapsed`](/de/docs/Web/API/Range/collapsed) Eigenschaft an.

## Syntax

```js-nolint
collapse()
collapse(toStart)
```

### Parameter

- `toStart` {{optional_inline}}
  - : Ein boolescher Wert: `true` kollabiert den [`Range`](/de/docs/Web/API/Range)
    zu seinem Anfang, `false` zu seinem Ende. Wenn dieser Parameter weggelassen wird, ist er standardmäßig
    `false` {{experimental_inline}}.

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
