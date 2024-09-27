---
title: Unary plus (+)
slug: Web/JavaScript/Reference/Operators/Unary_plus
l10n:
  sourceCommit: f616cb604af851f77f8cd59368e94ee3e43a8838
---

{{jsSidebar("Operators")}}

Der **unäre Plus-Operator (`+`)** geht seinem Operanden voraus und wertet diesen aus, versucht jedoch, ihn [in eine Zahl zu konvertieren](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), falls er nicht bereits eine ist.

{{EmbedInteractiveExample("pages/js/expressions-unary-plus.html", "taller")}}

## Syntax

```js-nolint
+x
```

## Beschreibung

Obwohl die unäre Negation (`-`) auch Nicht-Zahlen konvertieren kann, ist das unäre Plus der schnellste und bevorzugte Weg, etwas in eine Zahl umzuwandeln, da es keine weiteren Operationen auf die Zahl ausführt.

Das unäre Plus führt die exakt gleichen Schritte wie die normale [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) durch, die von den meisten eingebauten Methoden erwartet wird. Es kann Zeichenfolgenrepräsentationen von Ganzzahlen und Fließkommazahlen sowie die Nicht-Zeichenfolgenwerte `true`, `false` und `null` konvertieren. Ganzzahlen sowohl im Dezimal- als auch im Hexadezimalformat (`0x`-präfix) werden unterstützt. Negative Zahlen werden unterstützt (jedoch nicht für Hexadezimale). Falls ein bestimmter Wert nicht geparst werden kann, wird er zu {{jsxref("NaN")}} ausgewertet. Im Gegensatz zu anderen arithmetischen Operatoren, die sowohl mit Zahlen als auch mit [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) arbeiten, führt die Verwendung des `+` Operators auf BigInt-Werten zu einem {{jsxref("TypeError")}}.

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
