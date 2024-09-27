---
title: "Highlight: Werte() Methode"
short-title: values()
slug: Web/API/Highlight/values
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("CSS Custom Highlight API")}}

Die **`values()`** Methode der [`Highlight`](/de/docs/Web/API/Highlight) Schnittstelle liefert ein neues [Iterator](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) Objekt, das die Werte für jedes `Range` Objekt im `Highlight` Objekt in der Einfügereihenfolge enthält.

> [!NOTE]
> Die **`keys()`** Methode ist ein Alias für diese Methode. Sie verhält sich genau gleich und liefert **Werte** der `Highlight` Elemente.

`Highlight` ist ein {{jsxref("Set")}}-ähnliches Objekt, daher ist dies vergleichbar mit der Verwendung von {{jsxref("Set.values()")}}.

## Syntax

```js-nolint
values()
```

### Rückgabewert

Ein neues Iterator-Objekt, das jedes `Range` Objekt im gegebenen `Highlight` in der Einfügereihenfolge enthält.

## Beispiele

Der folgende Code zeigt, wie man ein neues `Highlight` Objekt mit drei `Range` Objekten erstellt und den vom `values()`-Methodeniterator zurückgegebenen Iterator verwendet, um die drei Bereiche zu protokollieren:

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

- [Die CSS Custom Highlight API](/de/docs/Web/API/Css_custom_highlight_api)
- [CSS Custom Highlight API: Die Zukunft des Markierens von Textbereichen im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
