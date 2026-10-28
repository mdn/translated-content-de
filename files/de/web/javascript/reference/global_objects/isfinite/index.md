---
title: isFinite()
slug: Web/JavaScript/Reference/Global_Objects/isFinite
l10n:
  sourceCommit: 52aca3c51ce0ff04036a13d4db471c9844d07b00
---

Die Funktion **`isFinite()`** prüft, ob ein Wert endlich ist. Falls nötig, wandelt sie den Wert zuvor in eine Zahl um. Eine endliche Zahl ist weder {{jsxref("NaN")}} noch ±{{jsxref("Infinity")}}. Da die Typumwandlung innerhalb von `isFinite()` [überraschend sein kann](/de/docs/Web/JavaScript/Reference/Global_Objects/isNaN#description), sollten Sie möglicherweise {{jsxref("Number.isFinite()")}} bevorzugen.

{{InteractiveExample("JavaScript Demo: isFinite()")}}

```js interactive-example
function div(x) {
  if (isFinite(1000 / x)) {
    return "Number is NOT Infinity.";
  }
  return "Number is Infinity!";
}

console.log(div(0));
// Expected output: "Number is Infinity!""

console.log(div(1));
// Expected output: "Number is NOT Infinity."
```

## Syntax

```js-nolint
isFinite(value)
```

### Parameter

- `value`
  - : Der zu prüfende Wert.

### Rückgabewert

`true`, es sei denn, der angegebene Wert ist nach der [Umwandlung in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) entweder {{jsxref("Infinity")}}, `-Infinity` oder {{jsxref("NaN")}}.

## Beschreibung

`isFinite()` ist eine Funktionseigenschaft des globalen Objekts.

Wenn das Argument der Funktion `isFinite()` nicht vom Typ [Number](/de/docs/Web/JavaScript/Guide/Data_structures#number_type) ist, wird der Wert zunächst in eine Zahl umgewandelt. Anschließend wird der resultierende Wert mit `NaN` und ±Infinity verglichen. Dieses Verhalten ist ebenso verwirrend wie das von {{jsxref("isNaN")}} – beispielsweise ergibt `isFinite("1")` den Wert `true`.

{{jsxref("Number.isFinite()")}} ist eine zuverlässigere Methode, um zu prüfen, ob ein Wert eine endliche Zahl ist, da die Funktion für jeden Wert, der keine Zahl ist, `false` zurückgibt.

## Beispiele

### isFinite() verwenden

```js
isFinite(Infinity); // false
isFinite(NaN); // false
isFinite(-Infinity); // false

isFinite(0); // true
isFinite(2e64); // true
isFinite(910); // true

// Following would've been false with the more robust Number.isFinite():

isFinite(null); // true, because null is converted to 0
isFinite(""); // true, because empty string is converted to 0
isFinite("123"); // true, because string can be parsed as a number
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Number.isFinite()")}}
- {{jsxref("Number.NaN")}}
- {{jsxref("Number.POSITIVE_INFINITY")}}
- {{jsxref("Number.NEGATIVE_INFINITY")}}
