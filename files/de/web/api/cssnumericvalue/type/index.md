---
title: "CSSNumericValue: Methode type()"
short-title: type()
slug: Web/API/CSSNumericValue/type
l10n:
  sourceCommit: 3e9a4ed4d90d0b1793999940290293df7feebba2
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die Methode **`type()`** der Schnittstelle [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) gibt ein `CSSNumericType`-Dictionary zurück, das den Typ des `CSSNumericValue` beschreibt, beispielsweise ob es sich um eine Länge, einen Winkel oder eine Zeit handelt.

## Syntax

```js-nolint
type()
```

### Parameter

Keine.

### Rückgabewert

Ein `CSSNumericType`-Dictionary (ein Objekt) mit den folgenden Eigenschaften.
Es enthält nur die Eigenschaften, die für den Wert zutreffen. Eine einfache Zahl hat daher den Typ `{}`.

- `length`, `angle`, `time`, `frequency`, `resolution`, `flex` und `percent`
  - : Ganzzahlen, die den Exponenten des jeweiligen Basistyps im Wert angeben. Sie sind nur enthalten, wenn sie nicht `0` sind.
    Eine Länge hat beispielsweise den Typ `{ length: 1 }`, und eine mit einer Länge multiplizierte Länge hat den Typ `{ length: 2 }`.
- `percentHint`
  - : Ein String, der den Basistyp angibt, zu dem Prozentangaben im Wert werden, beispielsweise `"length"`.
    Diese Eigenschaft ist nur enthalten, wenn der Wert eine Prozentangabe mit einem anderen Typ kombiniert.

### Ausnahmen

Keine.

## Beschreibung

Jeder numerische Wert hat einen Typ, der sich aus einem oder mehreren Basistypen zusammensetzt: Länge (beispielsweise `px` oder `em`), Winkel (beispielsweise `deg`), Zeit (`s` oder `ms`), Frequenz (`Hz` oder `kHz`), Auflösung (beispielsweise `dpi`), Flex (`fr`) und Prozent (`%`).
Die meisten Werte haben einen einzigen Basistyp mit dem Exponenten `1`.

Berechnungen verändern den Typ.
Beim Multiplizieren von Werten werden die Exponenten ihrer Basistypen addiert. Daher hat `10px * 2px` den Typ `{ length: 2 }`, der einer Fläche entspricht.
Beim Dividieren werden die Exponenten subtrahiert. Daher hat `100px / 2s` den Typ `{ length: 1, time: -1 }`, der einer Geschwindigkeit entspricht, und `10px / 2px` hat den Typ `{}`, der einer einfachen Zahl entspricht.

Wenn eine Prozentangabe zu einem Wert eines anderen Typs addiert wird, wie in `calc(50% + 10px)`, wird sie beim Layout der Seite zu diesem Typ, da 50 % einer Breite eine Länge sind.
Der Typ wird daher als `{ length: 1, percentHint: "length" }` angegeben: eine Länge mit dem Hinweis, dass sie eine Prozentangabe enthält.

## Beispiele

### Den Typ einzelner Werte ermitteln

```js
console.log(CSS.px(10).type()); // { length: 1 }
console.log(CSS.deg(45).type()); // { angle: 1 }
console.log(CSS.number(3).type()); // {}
```

### Den Typ von Berechnungen ermitteln

```js
console.log(CSS.px(2).mul(CSS.px(3)).type()); // { length: 2 }
console.log(CSS.px(100).div(CSS.s(2)).type()); // { length: 1, time: -1 }
console.log(CSS.px(10).div(CSS.px(2)).type()); // {}
```

### Den Typ eines Werts mit einer Prozentangabe ermitteln

```js
const width = CSS.percent(50).add(CSS.px(10));
console.log(width.type()); // { length: 1, percentHint: "length" }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSNumericValue.add()`](/de/docs/Web/API/CSSNumericValue/add)
- [`CSSNumericValue.mul()`](/de/docs/Web/API/CSSNumericValue/mul)
- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/Guides/Values_and_units)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
