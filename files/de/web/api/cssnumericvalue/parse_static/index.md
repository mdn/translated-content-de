---
title: "CSSNumericValue: parse() statische Methode"
short-title: parse()
slug: Web/API/CSSNumericValue/parse_static
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}}

Die statische Methode **`parse()`** der Schnittstelle [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) wandelt einen Wert in Form eines Strings in ein Objekt um, dessen Mitglieder den Wert und die Einheiten enthalten.

> [!NOTE]
> Diese Methode kann nicht in [`Worker`](/de/docs/Web/API/Worker)- oder [`Worklet`](/de/docs/Web/API/Worklet)-Kontexten aufgerufen werden — das Parsen von CSS-Text ist auf den Main-Thread beschränkt.
> Alle anderen Methoden in der `CSSNumericValue`-Schnittstelle sind in Workern und Worklets verfügbar.

## Syntax

```js-nolint
CSSNumericValue.parse(cssText)
```

### Parameter

- `cssText`
  - : ein String, der numerische Teile und Einheiten enthält.

### Rückgabewert

Ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : TBD

## Beispiele

### Grundlegende Verwendung

Der folgende Code gibt ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue)-Objekt mit einer `unit`-Eigenschaft, die den Wert `"px"` hat, und einer `value`-Eigenschaft, die den Wert `42` hat, zurück.

```js
let numValue = CSSNumericValue.parse("42.0px");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
