---
title: "Highlight: values()-Methode"
short-title: values()
slug: Web/API/Highlight/values
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("CSS Custom Highlight API")}}

Die **`values()`**-Methode des {{domxref("Highlight")}}-Interfaces gibt ein neues [Iterator](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)-Objekt zurück, das die Werte für jedes `Range`-Objekt im `Highlight`-Objekt in Einfüge-Reihenfolge enthält.

> [!NOTE]
> Die **`keys()`**-Methode ist ein Alias für diese Methode. Sie verhält sich genau gleich und gibt **Werte** der `Highlight`-Elemente zurück.

`Highlight` ist ein {{jsxref("Set")}}-ähnliches Objekt, daher ist dies ähnlich wie die Verwendung von {{jsxref("Set.values()")}}.

## Syntax

```js-nolint
values()
```

### Rückgabewert

Ein neues Iterator-Objekt, das jedes `Range`-Objekt im angegebenen `Highlight` in Einfüge-Reihenfolge enthält.

## Beispiele

Der folgende Codeabschnitt zeigt, wie ein neues `Highlight`-Objekt mit drei `Range`-Objekten erstellt wird und wie der durch die `values()`-Methode zurückgegebene Iterator verwendet wird, um die drei Bereiche zu protokollieren:

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

- {{domxref("css_custom_highlight_api", "Die CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
