---
title: Unary Plus (+)
slug: Web/JavaScript/Reference/Operators/Unary_plus
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **unäre Plus-Operator (`+`)** steht vor seinem Operanden und wertet diesen
aus, versucht aber, [ihn in eine Zahl umzuwandeln](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), wenn er es nicht bereits ist.

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

## Beschreibung

Obwohl die unäre Negation (`-`) auch Nicht-Zahlen konvertieren kann, ist der unäre Plus-Operator die schnellste und bevorzugte Methode, etwas in eine Zahl zu konvertieren, da er keine weiteren Operationen an der Zahl durchführt.

Der unäre Plus-Operator führt exakt die gleichen Schritte durch wie die normale [Zahlumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), die von den meisten eingebauten Methoden, die Zahlen erwarten, verwendet wird. Er kann Zeichenfolgen, die Ganzzahlen und Fließkommazahlen repräsentieren, sowie die Nicht-String-Werte `true`, `false` und `null` konvertieren. Ganzzahlen im dezimalen und hexadezimalen (`0x`-präfixierten) Format werden unterstützt. Negative Zahlen werden unterstützt (nicht aber im Hexadezimalformat). Wenn ein bestimmter Wert nicht geparst werden kann, wird er zu {{jsxref("NaN")}} ausgewertet. Anders als andere arithmetische Operatoren, die sowohl mit Zahlen als auch mit [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) arbeiten, führt die Verwendung des `+` Operators bei BigInt-Werten zu einem {{jsxref("TypeError")}}.

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

### Verwendung mit Nicht-Zahlen

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
