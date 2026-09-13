---
title: "CSSUnparsedValue: CSSUnparsedValue() Konstruktor"
short-title: CSSUnparsedValue()
slug: Web/API/CSSUnparsedValue/CSSUnparsedValue
l10n:
  sourceCommit: e03cdadd99259770aefef875de5a988aeda6aff0
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Der **`CSSUnparsedValue()`** Konstruktor erstellt ein neues [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue) Objekt, das einen Eigenschaftswert darstellt, der nicht in einen spezifischeren Typ geparst werden kann – typischerweise der Wert einer benutzerdefinierten Eigenschaft.

## Syntax

```js-nolint
new CSSUnparsedValue(members)
```

### Parameter

- `members`
  - : Ein Array, dessen Werte entweder ein String oder ein [`CSSVariableReferenceValue`](/de/docs/Web/API/CSSVariableReferenceValue) sein müssen.

## Beispiele

### Grundlegende Verwendung

```js
const value = new CSSUnparsedValue(["4deg"]);
const values = new CSSUnparsedValue(["1em", "#445566", "-45px"]);

console.log(value); // CSSUnparsedValue {0: "4deg", length: 1}
console.log(values); // CSSUnparsedValue {0: "1em", 1: "#445566", 2: "-45px", length: 3}
```

### `CSSUnparsedValue` mit einer Variablenreferenz

Ein Mitglied kann auch ein [`CSSVariableReferenceValue`](/de/docs/Web/API/CSSVariableReferenceValue) sein, das eine {{cssxref("var", "var()")}} Referenz darstellt, die im Wert eingebettet ist.
Dieses Beispiel erstellt ein `CSSUnparsedValue` für eine Deklaration, die `10px var(--bar, blue)` entspricht.

```js
const fallback = new CSSUnparsedValue(["blue"]);
const varRef = new CSSVariableReferenceValue("--bar", fallback);

const value = new CSSUnparsedValue(["10px ", varRef]);

console.log(value.length); // 2
console.log(value[0]); // "10px "
console.log(value[1].variable); // "--bar"
console.log(value[1].fallback[0]); // "blue"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSVariableReferenceValue`](/de/docs/Web/API/CSSVariableReferenceValue)
- [`CSSUnparsedValue.entries()`](/de/docs/Web/API/CSSUnparsedValue/entries)
- [`CSSUnparsedValue.forEach()`](/de/docs/Web/API/CSSUnparsedValue/forEach)
- [`CSSUnparsedValue.keys()`](/de/docs/Web/API/CSSUnparsedValue/keys)
- [`CSSUnparsedValue.length`](/de/docs/Web/API/CSSUnparsedValue/length)
- [`CSSUnparsedValue.values()`](/de/docs/Web/API/CSSUnparsedValue/values)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
