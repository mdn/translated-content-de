---
title: Math
slug: Web/JavaScript/Reference/Global_Objects/Math
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Das **`Math`** Namespace-Objekt enthält statische Eigenschaften und Methoden für mathematische Konstanten und Funktionen.

`Math` arbeitet mit dem {{jsxref("Number")}} Typ. Es funktioniert nicht mit {{jsxref("BigInt")}}.

## Beschreibung

Im Gegensatz zu den meisten globalen Objekten ist `Math` kein Konstruktor. Sie können es weder mit dem [`new` Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden noch das `Math` Objekt als Funktion aufrufen. Alle Eigenschaften und Methoden von `Math` sind statisch.

> [!NOTE]
> Viele `Math` Funktionen haben eine Präzision, die von der Implementierung abhängt.
>
> Das bedeutet, dass verschiedene Browser unterschiedliche Ergebnisse liefern können. Sogar die gleiche JavaScript-Engine kann auf einem anderen Betriebssystem oder einer anderen Architektur unterschiedliche Ergebnisse liefern!

## Statische Eigenschaften

- {{jsxref("Math.E")}}
  - : Die Eulersche Zahl und die Basis der natürlichen Logarithmen; ungefähr `2.718`.
- {{jsxref("Math.LN10")}}
  - : Natürlicher Logarithmus von `10`; ungefähr `2.303`.
- {{jsxref("Math.LN2")}}
  - : Natürlicher Logarithmus von `2`; ungefähr `0.693`.
- {{jsxref("Math.LOG10E")}}
  - : Zehner-Logarithmus von `E`; ungefähr `0.434`.
- {{jsxref("Math.LOG2E")}}
  - : Zweier-Logarithmus von `E`; ungefähr `1.443`.
- {{jsxref("Math.PI")}}
  - : Verhältnis des Umfangs eines Kreises zu seinem Durchmesser; ungefähr `3.14159`.
- {{jsxref("Math.SQRT1_2")}}
  - : Quadratwurzel von ½; ungefähr `0.707`.
- {{jsxref("Math.SQRT2")}}
  - : Quadratwurzel von `2`; ungefähr `1.414`.
- `Math[Symbol.toStringTag]`
  - : Der initiale Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Math"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Statische Methoden

- {{jsxref("Math.abs()")}}
  - : Gibt den Absolutwert des Eingabewerts zurück.
- {{jsxref("Math.acos()")}}
  - : Gibt den Arkuskosinus des Eingabewerts zurück.
- {{jsxref("Math.acosh()")}}
  - : Gibt den hyperbolischen Arkuskosinus des Eingabewerts zurück.
- {{jsxref("Math.asin()")}}
  - : Gibt den Arkussinus des Eingabewerts zurück.
- {{jsxref("Math.asinh()")}}
  - : Gibt den hyperbolischen Arkussinus einer Zahl zurück.
- {{jsxref("Math.atan()")}}
  - : Gibt den Arkustangens des Eingabewerts zurück.
- {{jsxref("Math.atan2()")}}
  - : Gibt den Arkustangens des Quotienten seiner Argumente zurück.
- {{jsxref("Math.atanh()")}}
  - : Gibt den hyperbolischen Arkustangens des Eingabewerts zurück.
- {{jsxref("Math.cbrt()")}}
  - : Gibt die Kubikwurzel des Eingabewerts zurück.
- {{jsxref("Math.ceil()")}}
  - : Gibt die kleinste ganze Zahl zurück, die größer oder gleich dem Eingabewert ist.
- {{jsxref("Math.clz32()")}}
  - : Gibt die Anzahl der führenden Null-Bits des 32-Bit-Integer-Eingabewerts zurück.
- {{jsxref("Math.cos()")}}
  - : Gibt den Kosinus des Eingabewerts zurück.
- {{jsxref("Math.cosh()")}}
  - : Gibt den hyperbolischen Kosinus des Eingabewerts zurück.
- {{jsxref("Math.exp()")}}
  - : Gibt e<sup>x</sup> zurück, wobei x das Argument ist und e die Eulersche Zahl (`2.718`… die Basis des natürlichen Logarithmus) ist.
- {{jsxref("Math.expm1()")}}
  - : Gibt das Ergebnis der Subtraktion von `1` von `exp(x)` zurück.
- {{jsxref("Math.floor()")}}
  - : Gibt die größte ganze Zahl zurück, die kleiner oder gleich dem Eingabewert ist.
- {{jsxref("Math.f16round()")}}
  - : Gibt die nächstliegende [Half-Precision](https://en.wikipedia.org/wiki/Half-precision_floating-point_format) Gleitkommadarstellung des Eingabewerts zurück.
- {{jsxref("Math.fround()")}}
  - : Gibt die nächstliegende [Single-Precision](https://en.wikipedia.org/wiki/Single-precision_floating-point_format) Gleitkommadarstellung des Eingabewerts zurück.
- {{jsxref("Math.hypot()")}}
  - : Gibt die Quadratwurzel der Summe der Quadrate seiner Argumente zurück.
- {{jsxref("Math.imul()")}}
  - : Gibt das Ergebnis der 32-Bit-Integer-Multiplikation der Eingabewerte zurück.
- {{jsxref("Math.log()")}}
  - : Gibt den natürlichen Logarithmus (㏒<sub>e</sub>; auch ㏑) des Eingabewerts zurück.
- {{jsxref("Math.log10()")}}
  - : Gibt den Zehner-Logarithmus des Eingabewerts zurück.
- {{jsxref("Math.log1p()")}}
  - : Gibt den natürlichen Logarithmus (㏒<sub>e</sub>; auch ㏑) von `1 + x` für die Zahl `x` zurück.
- {{jsxref("Math.log2()")}}
  - : Gibt den Zweier-Logarithmus des Eingabewerts zurück.
- {{jsxref("Math.max()")}}
  - : Gibt den größten von null oder mehr Zahlen zurück.
- {{jsxref("Math.min()")}}
  - : Gibt den kleinsten von null oder mehr Zahlen zurück.
- {{jsxref("Math.pow()")}}
  - : Gibt die Potenz `x` hoch `y` (das heißt, `x`<sup><code>y</code></sup>) zurück.
- {{jsxref("Math.random()")}}
  - : Gibt eine pseudozufällige Zahl zwischen `0` und `1` zurück.
- {{jsxref("Math.round()")}}
  - : Gibt den Wert des Eingabewerts gerundet auf die nächste ganze Zahl zurück.
- {{jsxref("Math.sign()")}}
  - : Gibt das Vorzeichen des Eingabewerts zurück, das angibt, ob es positiv, negativ oder null ist.
- {{jsxref("Math.sin()")}}
  - : Gibt den Sinus des Eingabewerts zurück.
- {{jsxref("Math.sinh()")}}
  - : Gibt den hyperbolischen Sinus des Eingabewerts zurück.
- {{jsxref("Math.sqrt()")}}
  - : Gibt die positive Quadratwurzel des Eingabewerts zurück.
- {{jsxref("Math.sumPrecise()")}}
  - : Gibt die Summe einer übergebenen Iteration von Zahlen zurück und vermeidet dabei den Genauigkeitsverlust von Gleitkommazahlen in Zwischenergebnissen.
- {{jsxref("Math.tan()")}}
  - : Gibt den Tangens des Eingabewerts zurück.
- {{jsxref("Math.tanh()")}}
  - : Gibt den hyperbolischen Tangens des Eingabewerts zurück.
- {{jsxref("Math.trunc()")}}
  - : Gibt den ganzzahligen Teil des Eingabewerts zurück, wobei alle Nachkommastellen entfernt werden.

## Beispiele

### Umrechnen zwischen Grad und Bogengrad

Die trigonometrischen Funktionen `sin()`, `cos()`, `tan()`, `asin()`, `acos()`, `atan()` und `atan2()` erwarten (und geben zurück) Winkel in _Bogenmaß_.

Da Menschen dazu neigen, in Grad zu denken, und einige Funktionen (wie CSS-Transformationen) Grad akzeptieren können, ist es eine gute Idee, Funktionen bereitzuhalten, die zwischen beiden umrechnen:

```js
function degToRad(degrees) {
  return degrees * (Math.PI / 180);
}

function radToDeg(rad) {
  return rad / (Math.PI / 180);
}
```

### Berechnung der Höhe eines gleichseitigen Dreiecks

Wenn wir die Höhe eines gleichseitigen Dreiecks berechnen möchten und wissen, dass seine Seitenlänge 100 ist, können wir die Formel verwenden: _Länge der Ankathete multipliziert mit dem Tangens des Winkels ist gleich der Gegenkathete._

![Ein gleichseitiges Dreieck, bei dem von einer Ecke die Höhe auf eine Seite gezogen wurde, wodurch ein rechtwinkliges Dreieck mit den Beschriftungen "Ankathete", "Gegenkathete" und "Hypotenuse" entsteht. Der Winkel zwischen der "Ankathete" und der "Hypotenuse" beträgt 60 Grad.](trigonometry.png)

In JavaScript können wir dies mit folgendem Code umsetzen:

```js
50 * Math.tan(degToRad(60));
```

Wir verwenden unsere `degToRad()` Funktion, um 60 Grad in Bogenmaß umzurechnen, da {{jsxref("Math.tan()")}} erwartet, dass der Eingabewert in Bogenmaß ist.

### Rückgabe einer zufälligen Ganzzahl zwischen zwei Grenzen

Dies kann mit einer Kombination aus {{jsxref("Math.random()")}} und {{jsxref("Math.floor()")}} erreicht werden:

```js
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

random(1, 10);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Number")}}
