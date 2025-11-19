---
title: "Highlight: Methode values()"
short-title: values()
slug: Web/API/Highlight/values
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("CSS Custom Highlight API")}}

Die **`values()`**-Methode der [`Highlight`](/de/docs/Web/API/Highlight)-Schnittstelle gibt ein neues [Iterator](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)-Objekt zurück, das die Werte für jedes `Range`-Objekt im `Highlight`-Objekt in Einfügereihenfolge enthält.

> [!NOTE]
> Die **`keys()`**-Methode ist ein Alias für diese Methode. Sie verhält sich genau gleich und gibt **Werte** von `Highlight`-Elementen zurück.

`Highlight` ist ein {{jsxref("Set")}}-ähnliches Objekt, daher ähnelt dies der Verwendung von {{jsxref("Set.values()")}}.

## Syntax

```js-nolint
values()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Iterator-Objekt, das jedes `Range`-Objekt im gegebenen `Highlight` in Einfügereihenfolge enthält.

## Beispiele

Der folgende Code-Schnipsel zeigt, wie man ein neues `Highlight`-Objekt mit drei `Range`-Objekten erstellt und den Iterator verwendet, der von der `values()`-Methode zurückgegeben wird, um die drei Bereiche zu protokollieren:

```js
const myHighlight = new Highlight();
myHighlight.add(new Range());
myHighlight.add(new Range());
myHighlight.add(new Range());

const iter = myHighlight.values();

for (value of iter) {
  console.log(value); // Range
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
