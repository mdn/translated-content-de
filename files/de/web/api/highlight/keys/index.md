---
title: "Highlight: keys()-Methode"
short-title: keys()
slug: Web/API/Highlight/keys
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

Die **`keys()`**-Methode der {{domxref("Highlight")}}-Schnittstelle ist ein Alias für die {{domxref("Highlight.values()", "values()")}}-Methode.

`Highlight` ist ein {{jsxref("Set")}}-ähnliches Objekt, daher ist dies vergleichbar mit der Verwendung von {{jsxref("Set.keys()")}}.

## Syntax

```js-nolint
keys()
```

### Rückgabewert

Ein neues Iterator-Objekt, das jedes `Range`-Objekt in der gegebenen `Highlight` in der Einfügereihenfolge enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("css_custom_highlight_api", "Die CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
