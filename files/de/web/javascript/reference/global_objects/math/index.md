---
title: Math
slug: Web/JavaScript/Reference/Global_Objects/Math
l10n:
  sourceCommit: 7cd2415e24a105ad4a457bb8eba32b0146dea211
---

{{JSRef}}

Das **`Math`**-Namensraumobjekt enthält statische Eigenschaften und Methoden für mathematische Konstanten und Funktionen.

`Math` arbeitet mit dem {{jsxref("Number")}}-Typ. Es funktioniert nicht mit {{jsxref("BigInt")}}.

## Beschreibung

Im Gegensatz zu den meisten globalen Objekten ist `Math` kein Konstruktor. Sie können es nicht mit dem [`new`-Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden oder das `Math`-Objekt als Funktion aufrufen. Alle Eigenschaften und Methoden von `Math` sind statisch.

> [!NOTE]
> Viele `Math`-Funktionen haben eine Präzision, die _implementierungsabhängig_ ist.
>
> Dies bedeutet, dass verschiedene Browser unterschiedliche Ergebnisse liefern können. Selbst die gleiche JavaScript-Engine auf einem anderen Betriebssystem oder einer anderen Architektur kann unterschiedliche Ergebnisse liefern!

## Statische Eigenschaften

- {{jsxref("Math.E")}}
  - : Eulersche Zahl und Basis der natürlichen Logarithmen; ungefähr `2.718`.
- {{jsxref("Math.LN10")}}
  - : Natürlicher Logarithmus von `10`; ungefähr `2.303`.
- {{jsxref("Math.LN2")}}
  - : Natürlicher Logarithmus von `2`; ungefähr `0.693`.
- {{jsxref("Math.LOG10E")}}
  - : Zehnerlogarithmus von `E`; ungefähr `0.434`.
- {{jsxref("Math.LOG2E")}}
  - : Zweierlogarithmus von `E`; ungefähr `1.443`.
- {{jsxref("Math.PI")}}
  - : Verhältnis des Umfangs eines Kreises zu seinem Durchmesser; ungefähr `3.14159`.
- {{jsxref("Math.SQRT1_2")}}
  - : Quadratwurzel von ½; ungefähr `0.707`.
- {{jsxref("Math.SQRT2")}}
  - : Quadratwurzel von `2`; ungefähr `1.414`.
- `Math[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Math"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Statische Methoden

- {{jsxref("Math.abs()")}}
  - : Gibt den absoluten Wert der Eingabe zurück.
- {{jsxref("Math.acos()")}}
  - : Gibt den Arkuskosinus der Eingabe zurück.
- {{jsxref("Math.acosh()")}}
  - : Gibt den hyperbolischen Arkuskosinus der Eingabe zurück.
- {{jsxref("Math.asin()")}}
  - : Gibt den Arkussinus der Eingabe zurück.
- {{jsxref("Math.asinh()")}}
  - : Gibt den hyperbolischen Arkussinus einer Zahl zurück.
- {{jsxref("Math.atan()")}}
  - : Gibt den Arkustangens der Eingabe zurück.
- {{jsxref("Math.atan2()")}}
  - : Gibt den Arkustangens des Quotienten seiner Argumente zurück.
- {{jsxref("Math.atanh()")}}
  - : Gibt den hyperbolischen Arkustangens der Eingabe zurück.
- {{jsxref("Math.cbrt()")}}
  - : Gibt die Kubikwurzel der Eingabe zurück.
- {{jsxref("Math.ceil()")}}
  - : Gibt die kleinste ganze Zahl zurück, die größer oder gleich der Eingabe ist.
- {{jsxref("Math.clz32()")}}
  - : Gibt die Anzahl der führenden Null-Bits der 32-Bit-Integer-Eingabe zurück.
- {{jsxref("Math.cos()")}}
  - : Gibt den Kosinus der Eingabe zurück.
- {{jsxref("Math.cosh()")}}
  - : Gibt den hyperbolischen Kosinus der Eingabe zurück.
- {{jsxref("Math.exp()")}}
  - : Gibt e<sup>x</sup> zurück, wobei x das Argument ist und e die Eulersche Zahl (`2.718`…, die Basis des natürlichen Logarithmus) ist.
- {{jsxref("Math.expm1()")}}
  - : Gibt `exp(x)` minus `1` zurück.
- {{jsxref("Math.floor()")}}
  - : Gibt die größte ganze Zahl zurück, die kleiner oder gleich der Eingabe ist.
- {{jsxref("Math.f16round()")}}
  - : Gibt die nächstgelegene [halbe Präzision](https://en.wikipedia.org/wiki/Half-precision_floating-point_format) der Float-Darstellung der Eingabe zurück.
- {{jsxref("Math.fround()")}}
  - : Gibt die nächstgelegene [einfache Präzision](https://en.wikipedia.org/wiki/Single-precision_floating-point_format) der Float-Darstellung der Eingabe zurück.
- {{jsxref("Math.hypot()")}}
  - : Gibt die Quadratwurzel der Summe der Quadrate seiner Argumente zurück.
- {{jsxref("Math.imul()")}}
  - : Gibt das Ergebnis der 32-Bit-Integer-Multiplikation der Eingaben zurück.
- {{jsxref("Math.log()")}}
  - : Gibt den natürlichen Logarithmus (㏒<sub>e</sub>; auch ㏑) der Eingabe zurück.
- {{jsxref("Math.log10()")}}
  - : Gibt den Zehnerlogarithmus der Eingabe zurück.
- {{jsxref("Math.log1p()")}}
  - : Gibt den natürlichen Logarithmus (㏒<sub>e</sub>; auch ㏑) von `1 + x` für die Zahl `x` zurück.
- {{jsxref("Math.log2()")}}
  - : Gibt den Zweierlogarithmus der Eingabe zurück.
- {{jsxref("Math.max()")}}
  - : Gibt die größte von null oder mehr Zahlen zurück.
- {{jsxref("Math.min()")}}
  - : Gibt die kleinste von null oder mehr Zahlen zurück.
- {{jsxref("Math.pow()")}}
  - : Gibt den Wert der Basis `x` potenziert mit dem Exponenten `y` zurück (d.h. `x`<sup><code>y</code></sup>).
- {{jsxref("Math.random()")}}
  - : Gibt eine pseudozufällige Zahl zwischen `0` und `1` zurück.
- {{jsxref("Math.round()")}}
  - : Gibt den Wert der Eingabe auf die nächste ganze Zahl gerundet zurück.
- {{jsxref("Math.sign()")}}
  - : Gibt das Vorzeichen der Eingabe zurück, welches anzeigt, ob es positiv, negativ oder null ist.
- {{jsxref("Math.sin()")}}
  - : Gibt den Sinus der Eingabe zurück.
- {{jsxref("Math.sinh()")}}
  - : Gibt den hyperbolischen Sinus der Eingabe zurück.
- {{jsxref("Math.sqrt()")}}
  - : Gibt die positive Quadratwurzel der Eingabe zurück.
- {{jsxref("Math.sumPrecise()")}}
  - : Gibt die Summe eines übergebenen iterierbaren Objekts von Zahlen zurück, um den Präzisionsverlust von Gleitkommazahlen in Zwischenergebnissen zu vermeiden.
- {{jsxref("Math.tan()")}}
  - : Gibt den Tangens der Eingabe zurück.
- {{jsxref("Math.tanh()")}}
  - : Gibt den hyperbolischen Tangens der Eingabe zurück.
- {{jsxref("Math.trunc()")}}
  - : Gibt den ganzzahligen Anteil der Eingabe zurück und entfernt alle Nachkommastellen.

## Beispiele

### Umrechnung zwischen Grad und Radianten

Die trigonometrischen Funktionen `sin()`, `cos()`, `tan()`, `asin()`, `acos()`, `atan()` und `atan2()` erwarten (und liefern) Winkel in _Radianten_.

Da Menschen dazu neigen, in Grad zu denken, und einige Funktionen (wie z.B. CSS-Transformationen) Grad akzeptieren können, ist es eine gute Idee, Funktionen griffbereit zu halten, die zwischen den beiden umrechnen:

```js
function degToRad(degrees) {
  return degrees * (Math.PI / 180);
}

function radToDeg(rad) {
  return rad / (Math.PI / 180);
}
```

### Berechnung der Höhe eines gleichseitigen Dreiecks

Wenn wir die Höhe eines gleichseitigen Dreiecks berechnen möchten und wissen, dass seine Seitenlänge 100 beträgt, können wir die Formeln verwenden, bei denen _die Länge der Ankathete multipliziert mit dem Tangens des Winkels gleich der Gegenkathete ist_.

![Ein gleichseitiges Dreieck, bei dem eine Senkrechte von einer Kante vom gegenüberliegenden Eckpunkt gezogen wird, die ein rechtwinkliges Dreieck mit drei Seiten bildet, die als "Ankathete", "Gegenkathete" und "Hypotenuse" gekennzeichnet sind. Der Winkel zwischen den Seiten "Ankathete" und "Hypotenuse" beträgt 60 Grad.](trigonometry.png)

In JavaScript können wir dies mit dem Folgenden tun:

```js
50 * Math.tan(degToRad(60));
```

Wir verwenden unsere `degToRad()`-Funktion, um 60 Grad in Radianten zu konvertieren, da {{jsxref("Math.tan()")}} einen Eingabewert in Radianten erwartet.

### Rückgabe eines zufälligen ganzzahligen Wertes zwischen zwei Grenzen

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
