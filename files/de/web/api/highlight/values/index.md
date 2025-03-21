---
title: "Highlight: values() Methode"
short-title: values()
slug: Web/API/Highlight/values
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("CSS Custom Highlight API")}}

Die **`values()`**-Methode der [`Highlight`](/de/docs/Web/API/Highlight)-Schnittstelle gibt ein neues [Iterator](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)-Objekt zurück, das die Werte für jedes `Range`-Objekt im `Highlight`-Objekt in der Einfügereihenfolge enthält.

> [!NOTE]
> Die **`keys()`**-Methode ist ein Alias für diese Methode. Sie verhält sich exakt gleich und gibt **Werte** der `Highlight`-Elemente zurück.

`Highlight` ist ein {{jsxref("Set")}}-ähnliches Objekt, daher ist dies ähnlich wie die Verwendung von {{jsxref("Set.values()")}}.

## Syntax

```js-nolint
values()
```

### Rückgabewert

Ein neues Iterator-Objekt, das jedes `Range`-Objekt im angegebenen `Highlight` in Einfügereihenfolge enthält.

## Beispiele

Der folgende Codeausschnitt zeigt, wie ein neues `Highlight`-Objekt mit drei `Range`-Objekten erstellt wird und wie der Iterator verwendet wird, der von der `values()`-Methode zurückgegeben wird, um die drei Bereiche zu protokollieren:

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
