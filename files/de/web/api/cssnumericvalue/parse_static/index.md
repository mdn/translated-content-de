---
title: "CSSNumericValue: Statische Methode parse()"
short-title: parse()
slug: Web/API/CSSNumericValue/parse_static
l10n:
  sourceCommit: 3e9a4ed4d90d0b1793999940290293df7feebba2
---

{{APIRef("CSS Typed Object Model API")}}

Die statische Methode **`parse()`** der Schnittstelle [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) erstellt einen `CSSNumericValue` aus einer Zeichenfolge mit einem CSS-Wert, beispielsweise `"42px"` oder `"calc(50% + 10px)"`.

> [!NOTE]
> Diese Methode ist nur in [`Window`](/de/docs/Web/API/Window)-Kontexten verfügbar, nicht in [`Worker`](/de/docs/Web/API/Worker)- oder [`Worklet`](/de/docs/Web/API/Worklet)-Kontexten.
> Alle anderen Methoden der Schnittstelle `CSSNumericValue` sind in Workern und Worklets verfügbar.

## Syntax

```js-nolint
CSSNumericValue.parse(cssText)
```

### Parameter

- `cssText`
  - : Eine Zeichenfolge, die eine einzelne CSS-Zahl, einen Prozentwert, eine Dimension (eine Zahl mit einer Einheit, beispielsweise `42px`) oder eine mathematische Funktion wie `calc()`, `min()`, `max()` oder `clamp()` enthält.

### Rückgabewert

Ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).
Bei einer Zahl, einem Prozentwert oder einer Dimension handelt es sich dabei um einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue), bei einer mathematischen Funktion um einen der Untertypen von [`CSSMathValue`](/de/docs/Web/API/CSSMathValue).

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `cssText` keine einzelne Zahl, kein einzelner Prozentwert, keine einzelne Dimension und keine einzelne mathematische Funktion ist (beispielsweise `"auto"`, `"10px 20px"` oder `"var(--size)"`), wenn eine unbekannte Einheit verwendet wird (beispielsweise `"10foo"`) oder wenn eine ungültige Berechnung enthalten ist (beispielsweise `"calc(1px + 1s)"`).

## Beschreibung

Die Zeichenfolge wird genauso geparst wie ein Wert in einem Stylesheet.
Leerzeichen und Kommentare um den Wert herum werden ignoriert, und bei Einheitennamen wird nicht zwischen Groß- und Kleinschreibung unterschieden. Daher liefert `" 10PX "` dasselbe Ergebnis wie `"10px"`.
Eine Zahl ohne Einheit, beispielsweise `"7"`, ergibt einen `CSSUnitValue`, dessen Einheit `"number"` ist.

Mathematische Funktionen werden ebenfalls genauso vereinfacht wie in einem Stylesheet: Terme, die zusammengefasst werden können, werden zusammengefasst.
Beispielsweise ergibt `"calc(1px + 2px)"` eine [`CSSMathSum`](/de/docs/Web/API/CSSMathSum) mit einem einzigen Term, `3px`.
Terme, die erst nach dem Layout der Seite zusammengefasst werden können, etwa `50%` und `10px`, bleiben getrennt.

## Beispiele

### Einzelne Werte parsen

Zahlen, Prozentwerte und Dimensionen werden als `CSSUnitValue` geparst:

```js
const length = CSSNumericValue.parse("42.0px");
console.log(length.constructor.name); // "CSSUnitValue"
console.log(length.value); // 42
console.log(length.unit); // "px"

const percentage = CSSNumericValue.parse("50%");
console.log(percentage.unit); // "percent"
```

### Eine Berechnung parsen

Eine mathematische Funktion wird als einer der Untertypen von `CSSMathValue` geparst.
Terme, die zusammengefasst werden können, werden zusammengefasst. Daher wird `calc(1px + 2px)` zu einer Summe mit einem einzigen Term vereinfacht:

```js
const sum = CSSNumericValue.parse("calc(50% + 10px)");
console.log(sum.constructor.name); // "CSSMathSum"
console.log(sum.toString()); // "calc(50% + 10px)"

const simplified = CSSNumericValue.parse("calc(1px + 2px)");
console.log(simplified.toString()); // "calc(3px)"
```

### Umgang mit einer Zeichenfolge, die kein numerischer Wert ist

```js
try {
  CSSNumericValue.parse("auto");
} catch (e) {
  console.log(e.name); // "SyntaxError"
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSStyleValue.parse()`](/de/docs/Web/API/CSSStyleValue/parse_static)
- [Numerische Factory-Funktionen](/de/docs/Web/API/CSS/factory_functions_static)
- [Das CSS Typed OM verwenden](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
