---
title: Math
slug: Web/JavaScript/Reference/Global_Objects/Math
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Das **`Math`**-Namensraumobjekt enthält statische Eigenschaften und Methoden für mathematische Konstanten und Funktionen.

`Math` arbeitet mit dem {{jsxref("Number")}}-Typ. Es funktioniert nicht mit {{jsxref("BigInt")}}.

## Beschreibung

Im Gegensatz zu den meisten globalen Objekten ist `Math` kein Konstruktor. Sie können es nicht mit dem [`new`-Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden oder das `Math`-Objekt als Funktion aufrufen. Alle Eigenschaften und Methoden von `Math` sind statisch.

> [!NOTE]
> Viele `Math`-Funktionen haben eine Präzision, die _implementierungsabhängig_ ist.
>
> Dies bedeutet, dass verschiedene Browser unterschiedliche Ergebnisse liefern können. Sogar die gleiche JavaScript-Engine auf einem anderen Betriebssystem oder einer anderen Architektur kann unterschiedliche Ergebnisse liefern!

## Statische Eigenschaften

- {{jsxref("Math.E")}}
  - : Eulersche Zahl und Basis der natürlichen Logarithmen; ungefähr `2.718`.
- {{jsxref("Math.LN10")}}
  - : Natürlicher Logarithmus von `10`; ungefähr `2.303`.
- {{jsxref("Math.LN2")}}
  - : Natürlicher Logarithmus von `2`; ungefähr `0.693`.
- {{jsxref("Math.LOG10E")}}
  - : Logarithmus zur Basis 10 von `E`; ungefähr `0.434`.
- {{jsxref("Math.LOG2E")}}
  - : Logarithmus zur Basis 2 von `E`; ungefähr `1.443`.
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
  - : Gibt den Arkuscosinus der Eingabe zurück.
- {{jsxref("Math.acosh()")}}
  - : Gibt den hyperbolischen Arkuscosinus der Eingabe zurück.
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
  - : Gibt die Anzahl der führenden Nullen im 32-Bit-Ganzzahl-Input zurück.
- {{jsxref("Math.cos()")}}
  - : Gibt den Kosinus der Eingabe zurück.
- {{jsxref("Math.cosh()")}}
  - : Gibt den hyperbolischen Kosinus der Eingabe zurück.
- {{jsxref("Math.exp()")}}
  - : Gibt e<sup>x</sup> zurück, wobei x das Argument ist und e Eulersche Zahl (`2.718`…, die Basis des natürlichen Logarithmus).
- {{jsxref("Math.expm1()")}}
  - : Gibt `exp(x)` minus `1` zurück.
- {{jsxref("Math.floor()")}}
  - : Gibt die größte ganze Zahl zurück, die kleiner oder gleich der Eingabe ist.
- {{jsxref("Math.f16round()")}}
  - : Gibt die nächstgelegene [Halbpräzisions](https://en.wikipedia.org/wiki/Half-precision_floating-point_format)-Float-Darstellung der Eingabe zurück.
- {{jsxref("Math.fround()")}}
  - : Gibt die nächstgelegene [Einzelpräzisions](https://en.wikipedia.org/wiki/Single-precision_floating-point_format)-Float-Darstellung der Eingabe zurück.
- {{jsxref("Math.hypot()")}}
  - : Gibt die Quadratwurzel der Summe der Quadrate seiner Argumente zurück.
- {{jsxref("Math.imul()")}}
  - : Gibt das Ergebnis der 32-Bit-Ganzzahl-Multiplikation der Eingaben zurück.
- {{jsxref("Math.log()")}}
  - : Gibt den natürlichen Logarithmus (㏒<sub>e</sub>; auch ㏑) der Eingabe zurück.
- {{jsxref("Math.log10()")}}
  - : Gibt den Logarithmus zur Basis 10 der Eingabe zurück.
- {{jsxref("Math.log1p()")}}
  - : Gibt den natürlichen Logarithmus (㏒<sub>e</sub>; auch ㏑) von `1 + x` für die Zahl `x` zurück.
- {{jsxref("Math.log2()")}}
  - : Gibt den Logarithmus zur Basis 2 der Eingabe zurück.
- {{jsxref("Math.max()")}}
  - : Gibt die größte von null oder mehr Zahlen zurück.
- {{jsxref("Math.min()")}}
  - : Gibt die kleinste von null oder mehr Zahlen zurück.
- {{jsxref("Math.pow()")}}
  - : Gibt die Basis `x` zur Potenz `y` zurück (d.h., `x`<sup><code>y</code></sup>).
- {{jsxref("Math.random()")}}
  - : Gibt eine pseudorandomisierte Zahl zwischen `0` und `1` zurück.
- {{jsxref("Math.round()")}}
  - : Gibt den auf die nächste ganze Zahl gerundeten Wert der Eingabe zurück.
- {{jsxref("Math.sign()")}}
  - : Gibt das Vorzeichen der Eingabe zurück, das anzeigt, ob es positiv, negativ oder null ist.
- {{jsxref("Math.sin()")}}
  - : Gibt den Sinus der Eingabe zurück.
- {{jsxref("Math.sinh()")}}
  - : Gibt den hyperbolischen Sinus der Eingabe zurück.
- {{jsxref("Math.sqrt()")}}
  - : Gibt die positive Quadratwurzel der Eingabe zurück.
- {{jsxref("Math.tan()")}}
  - : Gibt den Tangens der Eingabe zurück.
- {{jsxref("Math.tanh()")}}
  - : Gibt den hyperbolischen Tangens der Eingabe zurück.
- {{jsxref("Math.trunc()")}}
  - : Gibt den Ganzzahlanteil der Eingabe zurück und entfernt alle Nachkommastellen.

## Beispiele

### Umwandlung zwischen Grad und Radianten

Die trigonometrischen Funktionen `sin()`, `cos()`, `tan()`, `asin()`, `acos()`, `atan()` und `atan2()` erwarten (und geben zurück) Winkel in _Radianten_.

Da Menschen dazu neigen, in Grad zu denken, und einige Funktionen (wie CSS-Transformationen) Grad akzeptieren können, ist es eine gute Idee, Funktionen zur Hand zu haben, die zwischen den beiden konvertieren:

```js
function degToRad(degrees) {
  return degrees * (Math.PI / 180);
}

function radToDeg(rad) {
  return rad / (Math.PI / 180);
}
```

### Berechnung der Höhe eines gleichseitigen Dreiecks

Wenn wir die Höhe eines gleichseitigen Dreiecks berechnen möchten und wir wissen, dass seine Seitenlänge 100 beträgt, können wir die Formeln verwenden: _Länge der anliegenden Seite multipliziert mit dem Tangens des Winkels ist gleich der gegenüberliegenden Seite._

![Ein gleichseitiges Dreieck, bei dem eine Senkrechte von einer Ecke zur gegenüberliegenden Kante gezogen wird und ein rechtwinkliges Dreieck mit drei als "anliegend", "gegenüberliegend" und "Hypotenuse" markierten Seiten entsteht. Der Winkel zwischen den anliegenden und Hypotenusen-Seiten beträgt 60 Grad.](trigonometry.png)

In JavaScript können wir dies wie folgt tun:

```js
50 * Math.tan(degToRad(60));
```

Wir verwenden unsere `degToRad()`-Funktion, um 60 Grad in Radianten umzuwandeln, da {{jsxref("Math.tan()")}} einen Eingabewert in Radianten erwartet.

### Rückgabe einer zufälligen ganzen Zahl zwischen zwei Grenzen

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
