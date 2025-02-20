---
title: Unäres Plus (+)
slug: Web/JavaScript/Reference/Operators/Unary_plus
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **unäre Plusoperator (`+`)** steht vor seinem Operanden und wertet zu seinem Operanden aus, versucht jedoch, [ihn in eine Zahl umzuwandeln](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), falls er es nicht bereits ist.

{{InteractiveExample("JavaScript Demo: Expressions - Unary plus operator", "taller")}}

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

Obwohl die unäre Negation (`-`) Nicht-Zahlen ebenfalls umwandeln kann, ist das unäre Plus der schnellste und bevorzugte Weg, etwas in eine Zahl umzuwandeln, da es keine weiteren Operationen auf der Zahl ausführt.

Das unäre Plus führt genau die gleichen Schritte wie die normale [Number-Konvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) durch, die von den meisten eingebauten Methoden erwartet wird, die Zahlen erfordern. Es kann sowohl String-Darstellungen von Ganzzahlen und Gleitkommazahlen als auch die Nicht-String-Werte `true`, `false` und `null` umwandeln. Ganzzahlen im dezimalen und hexadezimalen (`0x`-vorangestellten) Format werden unterstützt. Negative Zahlen werden unterstützt (außer im hexadezimalen Format). Kann ein bestimmter Wert nicht verarbeitet werden, wird er zu {{jsxref("NaN")}} ausgewertet. Im Gegensatz zu anderen arithmetischen Operatoren, die sowohl mit Zahlen als auch mit [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) arbeiten, wirft die Verwendung des `+`-Operators auf BigInt-Werten eine {{jsxref("TypeError")}} aus.

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
