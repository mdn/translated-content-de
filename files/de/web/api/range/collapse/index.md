---
title: "Range: collapse()-Methode"
short-title: collapse()
slug: Web/API/Range/collapse
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("DOM")}}

Die **`Range.collapse()`**-Methode kollabiert den
{{domxref("Range")}} auf einen seiner Grenzpunkte.

Ein kollabierter {{domxref("Range")}} ist leer, enthält keinen Inhalt und gibt einen einzelnen Punkt in einem DOM-Baum an. Um zu bestimmen, ob ein {{domxref("Range")}} bereits kollabiert ist, sehen Sie die {{domxref("Range.collapsed")}}-Eigenschaft.

## Syntax

```js-nolint
collapse()
collapse(toStart)
```

### Parameter

- `toStart` {{optional_inline}}
  - : Ein boolescher Wert: `true` kollabiert den {{domxref("Range")}}
    zu seinem Anfang, `false` zu seinem Ende. Wenn weggelassen, ist der Standardwert
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

- [Das DOM-Interface-Index](/de/docs/Web/API/Document_Object_Model)
