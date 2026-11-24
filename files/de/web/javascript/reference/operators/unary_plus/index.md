---
title: Unäres Plus (+)
slug: Web/JavaScript/Reference/Operators/Unary_plus
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der Operator **unäres Plus (`+`)** steht vor seinem Operanden und ergibt dessen Wert. Falls der Operand noch keine Zahl ist, versucht der Operator jedoch, ihn [in eine Zahl umzuwandeln](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion).

{{InteractiveExample("JavaScript Demo: Unary plus (+) operator", "taller")}}

```js interactive-example
const x = 1;
const y = -1;

console.log(+x);
// Expected output: 1

console.log(+y);
// Expected output: -1

console.log(+"");
// Expected output: 0

console.log(+true);
// Expected output: 1

console.log(+false);
// Expected output: 0

console.log(+"hello");
// Expected output: NaN
```

## Syntax

```js-nolint
+x
```

### Parameter

- `x`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von 14 (Präfixoperatoren) oder höher.

### Rückgabewert

Der Wert von `x`, [in eine Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion).

## Beschreibung

Auch die unäre Negation (`-`) kann Werte, die keine Zahlen sind, in Zahlen umwandeln. Das unäre Plus ist dafür jedoch der schnellste und bevorzugte Weg, da es keine weiteren Operationen an der Zahl ausführt.

Das unäre Plus führt genau dieselben Schritte aus wie die normale [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), die von den meisten integrierten Methoden verwendet wird, die Zahlen erwarten. Es kann Zeichenfolgen umwandeln, die Ganzzahlen oder Gleitkommazahlen darstellen, sowie die Werte `true`, `false` und `null`, die keine Zeichenfolgen sind. Ganzzahlen im Dezimal- und im Hexadezimalformat (mit dem Präfix `0x`) werden unterstützt. Negative Zahlen werden ebenfalls unterstützt, allerdings nicht im Hexadezimalformat. Wenn ein Wert nicht interpretiert werden kann, ergibt der Ausdruck {{jsxref("NaN")}}. Anders als andere arithmetische Operatoren, die sowohl mit Zahlen als auch mit [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) arbeiten, löst der Operator `+` bei BigInt-Werten einen {{jsxref("TypeError")}} aus.

## Beispiele

### Verwendung mit Zahlen

```js
const x = 1;
const y = -1;

console.log(+x);
// 1
console.log(+y);
// -1
```

### Verwendung mit Werten, die keine Zahlen sind

```js-nolint
+true  // 1
+false // 0
+null  // 0
+[]    // 0
+function (val) { return val; } // NaN
+1n    // throws TypeError: Cannot convert BigInt value to number
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Addition (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Addition)
- [Subtraktion (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Division (`/`)](/de/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplikation (`*`)](/de/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Rest (`%`)](/de/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Potenzierung (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Inkrement (`++`)](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Dekrement (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unäre Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
