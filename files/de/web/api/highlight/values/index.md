---
title: "Highlight: values() Methode"
short-title: values()
slug: Web/API/Highlight/values
l10n:
  sourceCommit: a2d0346638937e9c92c500dcb568803778e8354e
---

{{APIRef("CSS Custom Highlight API")}}

Die **`values()`**-Methode der [`Highlight`](/de/docs/Web/API/Highlight)-Schnittstelle gibt ein neues [Iterator](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)-Objekt zurück, das die Werte für jedes `AbstractRange`-Objekt im `Highlight`-Objekt in der Einfügereihenfolge enthält.

> [!NOTE]
> Die **`keys()`**-Methode ist ein Alias für diese Methode. Sie verhält sich genau gleich und gibt **Werte** von `Highlight`-Elementen zurück.

`Highlight` ist ein {{jsxref("Set")}}-ähnliches Objekt, daher ist dies ähnlich wie die Verwendung von {{jsxref("Set.values()")}}.

## Syntax

```js-nolint
values()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Iterator-Objekt, das jedes `AbstractRange`-Objekt im angegebenen `Highlight` in Einfügereihenfolge enthält.

## Beispiele

Der folgende Codeausschnitt zeigt, wie man ein neues `Highlight`-Objekt mit drei `AbstractRange`-Objekten erstellt und den Iterator, der von der `values()`-Methode zurückgegeben wird, verwendet, um die drei Bereiche zu protokollieren:

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
- [CSS Custom Highlight API: Die Zukunft des Hervorhebens von Textbereichen im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
