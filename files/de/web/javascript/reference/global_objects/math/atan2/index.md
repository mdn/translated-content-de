---
title: Math.atan2()
short-title: atan2()
slug: Web/JavaScript/Reference/Global_Objects/Math/atan2
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Methode **`Math.atan2()`** gibt den Winkel im zweidimensionalen Raum (in Radiant) zwischen der positiven x-Achse und der Linie vom Punkt (0, 0) zu dem Punkt (x, y) für `Math.atan2(y, x)` zurück.

{{InteractiveExample("JavaScript Demo: Math.atan2()")}}

```js interactive-example
function calcAngleDegrees(x, y) {
  return (Math.atan2(y, x) * 180) / Math.PI;
}

console.log(calcAngleDegrees(5, 5));
// Expected output: 45

console.log(calcAngleDegrees(10, 10));
// Expected output: 45

console.log(calcAngleDegrees(0, 10));
// Expected output: 90
```

## Syntax

```js-nolint
Math.atan2(y, x)
```

### Parameter

- `y`
  - : Die y-Koordinate des Punktes.
- `x`
  - : Die x-Koordinate des Punktes.

### Rückgabewert

Der Winkel in Radiant (zwischen -π und π, einschließlich) zwischen der positiven x-Achse und der Linie vom Punkt (0, 0) zu dem Punkt (x, y).

## Beschreibung

Die Methode `Math.atan2()` misst den gegen den Uhrzeigersinn gemessenen Winkel θ in Radiant zwischen der positiven x-Achse und dem Punkt `(x, y)`. Beachten Sie, dass die Argumente dieser Funktion zuerst die y-Koordinate und dann die x-Koordinate übergeben.

![Ein Diagramm zeigt den durch atan2(y, x) zurückgegebenen Winkel](atan2.png)

`Math.atan2()` wird mit getrennten `x`- und `y`-Argumenten aufgerufen, während [`Math.atan()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/atan) das Verhältnis dieser beiden Argumente erhält. `Math.atan2(y, x)` unterscheidet sich von `Math.atan(y / x)` in den folgenden Fällen:

| `x`                       | `y`         | `Math.atan2(y, x)` | `Math.atan(y / x)` |
| ------------------------- | ----------- | ------------------ | ------------------ |
| `Infinity`                | `Infinity`  | π / 4              | `NaN`              |
| `Infinity`                | `-Infinity` | -π / 4             | `NaN`              |
| `-Infinity`               | `Infinity`  | 3π / 4             | `NaN`              |
| `-Infinity`               | `-Infinity` | -3π / 4            | `NaN`              |
| 0                         | 0           | 0                  | `NaN`              |
| 0                         | -0          | -0                 | `NaN`              |
| < 0 (einschließlich `-0`) | 0           | π                  | 0                  |
| < 0 (einschließlich `-0`) | -0          | -π                 | 0                  |
| `-Infinity`               | > 0         | π                  | -0                 |
| -0                        | > 0         | π / 2              | -π / 2             |
| `-Infinity`               | < 0         | -π                 | 0                  |
| -0                        | < 0         | -π / 2             | π / 2              |

Zusätzlich würde `Math.atan2()` für Punkte im zweiten und dritten Quadranten (`x < 0`) einen Winkel zurückgeben, der kleiner ist als <math><semantics><mrow><mo>-</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><annotation encoding="TeX">-\frac{\pi}{2}</annotation></semantics></math> oder größer als <math><semantics><mfrac><mi>π</mi><mn>2</mn></mfrac><annotation encoding="TeX">\frac{\pi}{2}</annotation></semantics></math>.

Da `atan2()` eine statische Methode von `Math` ist, verwenden Sie diese immer als `Math.atan2()` und nicht als Methode eines erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.atan2()

```js
Math.atan2(90, 15); // 1.4056476493802699
Math.atan2(15, 90); // 0.16514867741462683
```

### Unterschied zwischen Math.atan2(y, x) und Math.atan(y / x)

Das folgende Skript gibt alle Eingaben aus, die einen Unterschied zwischen `Math.atan2(y, x)` und `Math.atan(y / x)` erzeugen.

```js
const formattedNumbers = new Map([
  [-Math.PI, "-π"],
  [(-3 * Math.PI) / 4, "-3π/4"],
  [-Math.PI / 2, "-π/2"],
  [-Math.PI / 4, "-π/4"],
  [Math.PI / 4, "π/4"],
  [Math.PI / 2, "π/2"],
  [(3 * Math.PI) / 4, "3π/4"],
  [Math.PI, "π"],
  [-Infinity, "-∞"],
  [Infinity, "∞"],
]);

function format(template, ...args) {
  return String.raw(
    { raw: template },
    ...args.map((num) =>
      (Object.is(num, -0)
        ? "-0"
        : (formattedNumbers.get(num) ?? String(num))
      ).padEnd(5),
    ),
  );
}

console.log(`| x     | y     | atan2 | atan  |
|-------|-------|-------|-------|`);

for (const x of [-Infinity, -1, -0, 0, 1, Infinity]) {
  for (const y of [-Infinity, -1, -0, 0, 1, Infinity]) {
    const atan2 = Math.atan2(y, x);
    const atan = Math.atan(y / x);
    if (!Object.is(atan2, atan)) {
      console.log(format`| ${x} | ${y} | ${atan2} | ${atan} |`);
    }
  }
}
```

Die Ausgabe ist:

```plain
| x     | y     | atan2 | atan  |
|-------|-------|-------|-------|
| -∞    | -∞    | -3π/4 | NaN   |
| -∞    | -1    | -π    | 0     |
| -∞    | -0    | -π    | 0     |
| -∞    | 0     | π     | -0    |
| -∞    | 1     | π     | -0    |
| -∞    | ∞     | 3π/4  | NaN   |
| -1    | -∞    | -π/2  | π/2   |
| -1    | -1    | -3π/4 | π/4   |
| -1    | -0    | -π    | 0     |
| -1    | 0     | π     | -0    |
| -1    | 1     | 3π/4  | -π/4  |
| -1    | ∞     | π/2   | -π/2  |
| -0    | -∞    | -π/2  | π/2   |
| -0    | -1    | -π/2  | π/2   |
| -0    | -0    | -π    | NaN   |
| -0    | 0     | π     | NaN   |
| -0    | 1     | π/2   | -π/2  |
| -0    | ∞     | π/2   | -π/2  |
| 0     | -0    | -0    | NaN   |
| 0     | 0     | 0     | NaN   |
| ∞     | -∞    | -π/4  | NaN   |
| ∞     | ∞     | π/4   | NaN   |
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
