---
title: Unäres Plus (+)
slug: Web/JavaScript/Reference/Operators/Unary_plus
l10n:
  sourceCommit: f616cb604af851f77f8cd59368e94ee3e43a8838
---

{{jsSidebar("Operators")}}

Der **unäre Plus (`+`)** Operator steht vor seinem Operanden und ergibt seinen
Operanden, versucht jedoch, [ihn in eine Zahl umzuwandeln](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), falls er nicht bereits eine ist.

{{EmbedInteractiveExample("pages/js/expressions-unary-plus.html", "taller")}}

## Syntax

```js-nolint
+x
```

## Beschreibung

Obwohl auch die unäre Negation (`-`) Nicht-Zahlen umwandeln kann, ist das unäre Plus der schnellste und bevorzugte Weg, etwas in eine Zahl umzuwandeln, da es keine weiteren Operationen auf der Zahl durchführt.

Das unäre Plus führt exakt die gleichen Schritte wie die normale [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) durch, die von den meisten eingebauten Methoden erwartet wird. Es kann Zeichenkettenrepräsentationen von Ganzzahlen und Fließkommazahlen sowie die Nicht-Zeichenkettenwerte `true`, `false` und `null` umwandeln. Ganzzahlen im dezimalen und hexadezimalen Format (mit `0x`-Präfix) werden unterstützt. Negative Zahlen werden unterstützt (jedoch nicht für Hexadezimalzahlen). Wenn ein bestimmter Wert nicht geparst werden kann, ergibt er {{jsxref("NaN")}}. Im Gegensatz zu anderen arithmetischen Operatoren, die sowohl mit Zahlen als auch mit [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) arbeiten, führt die Verwendung des `+` Operators bei BigInt-Werten zu einem {{jsxref("TypeError")}}.

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
- [Exponentialrechnung (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Inkrement (`++`)](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Dekrement (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unäre Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
