---
title: "CSSNumericValue: Methode to()"
short-title: to()
slug: Web/API/CSSNumericValue/to
l10n:
  sourceCommit: 3e9a4ed4d90d0b1793999940290293df7feebba2
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die Methode **`to()`** der Schnittstelle [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) konvertiert den `CSSNumericValue` in einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit der angegebenen Einheit.

## Syntax

```js-nolint
to(unit)
```

### Parameter

- `unit`
  - : Eine Zeichenfolge, die die Einheit angibt, in die konvertiert werden soll, beispielsweise `"px"`, `"deg"` oder `"s"`.
    Verwenden Sie `"number"` für eine einfache Zahl und `"percent"` für einen Prozentwert.

### Rückgabewert

Ein neuer [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue), dessen Einheit `unit` ist.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `unit` keine gültige CSS-Einheit ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Der `CSSNumericValue` eine Berechnung ist, deren Terme nicht zu einem einzelnen Wert zusammengefasst werden können.
      Beispielsweise lassen sich die Terme von `calc(1px + 1em)` nicht zusammenfassen, da die Größe eines `em` von der Schriftgröße abhängt.
      Auch eine mit einer Länge multiplizierte Länge wie in `calc(1px * 2px)` lässt sich nicht zusammenfassen, da sie nicht in einer einzelnen Einheit ausgedrückt werden kann.
    - Der Wert nicht in `unit` konvertiert werden kann.
      Beispielsweise können Sie `px` nicht in `s` oder `px` nicht in `em` konvertieren.

## Beschreibung

Die Methode kann nur zwischen Einheiten konvertieren, die in einem festen Verhältnis zueinander stehen.
Dies sind:

- Absolute Längen: `px`, `cm`, `mm`, `Q`, `in`, `pt` und `pc`
- Winkel: `deg`, `rad`, `grad` und `turn`
- Zeiten: `s` und `ms`
- Frequenzen: `Hz` und `kHz`
- Auflösungen: `dpi`, `dpcm` und `dppx`

Relative Einheiten wie `em`, `vw` und `%` können nicht in andere Einheiten konvertiert werden, da ihre Größe von der Seite abhängt, beispielsweise von der Schriftgröße oder der Größe des Containers eines Elements.

Wenn der `CSSNumericValue` eine Berechnung ist, fasst die Methode zunächst deren Terme zusammen.
Dies funktioniert, wenn jeder Term in eine einzige Einheit konvertiert werden kann: Beispielsweise kann `calc(100px + 1in)` in `196px` und `max(1px, 1in)` in `96px` konvertiert werden.
Es schlägt fehl, wenn die Terme nicht zusammengefasst werden können, etwa `1px` und `1em`, oder wenn durch das Zusammenfassen miteinander multiplizierte Einheiten entstehen, etwa eine Länge multipliziert mit einer Länge.

## Beispiele

### Einen Wert in eine andere Einheit konvertieren

```js
console.log(CSS.in(1).to("px").toString()); // "96px"
console.log(CSS.turn(1).to("deg").toString()); // "360deg"
console.log(CSS.ms(500).to("s").toString()); // "0.5s"
```

### Eine Berechnung konvertieren

Wenn alle Terme einer Berechnung in dieselbe Einheit konvertiert werden können, fasst `to()` sie zu einem einzelnen Wert zusammen:

```js
const sum = CSS.px(100).add(CSS.in(1));
console.log(sum.toString()); // "calc(100px + 1in)"
console.log(sum.to("px").toString()); // "196px"
```

### Werte, die nicht konvertiert werden können

Das Konvertieren einer Summe, die eine relative Länge enthält, oder das Konvertieren einer Länge in eine Zeit löst einen `TypeError` aus:

```js
try {
  CSS.px(1).add(CSS.em(1)).to("px");
} catch (e) {
  console.log(e instanceof TypeError); // true
}

try {
  CSS.px(10).to("s");
} catch (e) {
  console.log(e instanceof TypeError); // true
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSNumericValue.toSum()`](/de/docs/Web/API/CSSNumericValue/toSum)
- [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue)
- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/Guides/Values_and_units)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
