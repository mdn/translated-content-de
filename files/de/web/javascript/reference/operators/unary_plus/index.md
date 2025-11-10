---
title: Unäres Plus (+)
slug: Web/JavaScript/Reference/Operators/Unary_plus
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **unäre Plus-Operator (`+`)** steht vor seinem Operanden und bewertet diesen Operanden, versucht jedoch, [ihn in eine Zahl umzuwandeln](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), falls er nicht bereits eine ist.

{{InteractiveExample("JavaScript Demo: Unäres Plus (+) Operator", "taller")}}

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

## Beschreibung

Obwohl unäre Negation (`-`) auch Nicht-Zahlen umwandeln kann, ist unäres Plus die schnellste und bevorzugte Methode, um etwas in eine Zahl umzuwandeln, da es keine weiteren Operationen an der Zahl durchführt.

Unäres Plus führt dieselben Schritte wie die normale [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) aus, die von den meisten eingebauten Methoden, die Zahlen erwarten, verwendet wird. Es kann Zeichenfolgenrepräsentationen von Ganzzahlen und Fließkommazahlen sowie die Nicht-Zeichenfolgenwerte `true`, `false` und `null` umwandeln. Ganzzahlen im Dezimal- und Hexadezimalformat (mit `0x`-Präfix) werden unterstützt. Negative Zahlen werden unterstützt (jedoch nicht für Hexadezimalzahlen). Falls ein bestimmter Wert nicht geparst werden kann, wird er zu {{jsxref("NaN")}} ausgewertet. Im Gegensatz zu anderen arithmetischen Operatoren, die sowohl mit Zahlen als auch mit [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) arbeiten, wirft die Verwendung des `+` Operators auf BigInt-Werten einen {{jsxref("TypeError")}}.

## Beispiele

### Nutzung mit Zahlen

```js
const x = 1;
const y = -1;

console.log(+x);
// 1
console.log(+y);
// -1
```

### Nutzung mit Nicht-Zahlen

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
- [Exponentiation (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Inkrement (`++`)](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Dekrement (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unäre Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
