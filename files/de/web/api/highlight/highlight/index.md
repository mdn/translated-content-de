---
title: "Highlight: Konstruktor Highlight()"
short-title: Highlight()
slug: Web/API/Highlight/Highlight
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("CSS Custom Highlight API")}}

Der **`Highlight()`**-Konstruktor gibt ein neu erstelltes
{{domxref("Highlight")}}-Objekt zurück, das eine Sammlung von {{domxref("Range")}}-Objekten enthalten kann, die mit der {{domxref("css_custom_highlight_api", "CSS Custom Highlight API", "", "nocode")}} gestylt werden können.

## Syntax

```js-nolint
new Highlight()
new Highlight(range)
new Highlight(range1, range2, /* …, */ rangeN)
```

### Parameter

- `range1`, …, `rangeN` {{optional_inline}}
  - : Ein oder mehrere anfängliche {{domxref("Range")}}-Objekte, die im neuen Highlight hinzugefügt werden sollen.

### Rückgabewert

Ein neues `Highlight`-Objekt.

## Beispiele

Der folgende Code zeigt, wie man ein leeres Highlight-Objekt erstellt und dann Bereiche hinzufügt:

```js
const highlight = new Highlight();
highlight.add(range1);
highlight.add(range2);
```

Der folgende Code zeigt, wie man ein neues Highlight-Objekt erstellt und während der Instanziierung Bereiche hinzufügt:

```js
const highlight = new Highlight(range1, range2);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("css_custom_highlight_api", "Die CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
