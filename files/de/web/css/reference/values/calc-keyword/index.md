---
title: "`<calc-keyword>`: CSS-Datentyp"
short-title: <calc-keyword>
slug: Web/CSS/Reference/Values/calc-keyword
l10n:
  sourceCommit: bc838d9946a95b501a9ce3e522929eebcce7a3e5
---

Der **`<calc-keyword>`**-[CSS](/de/docs/Web/CSS)-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert fest definierte Konstanten wie `e` und `pi`. Damit Sie nicht mehrere Ziffern dieser mathematischen Konstanten manuell eingeben oder die Werte selbst berechnen müssen, stellt CSS einige davon direkt zur Verfügung.

## Syntax

Der Typ `<calc-keyword>` definiert numerische Konstanten, die in [mathematischen CSS-Funktionen](/de/docs/Web/CSS/Reference/Values/Functions#math_functions) verwendet werden können.

### Werte

- `e`
  - : Die Basis des natürlichen Logarithmus, ungefähr `2.7182818284590452354`.

- `pi`
  - : Das Verhältnis des Umfangs eines Kreises zu seinem Durchmesser, ungefähr `3.1415926535897932`.

- `infinity` & `-infinity`
  - : Ein unendlicher Wert, der den größtmöglichen beziehungsweise kleinstmöglichen Wert angibt.

- `NaN`
  - : Ein Wert, der „Not a Number“ in der kanonischen Groß- und Kleinschreibung darstellt.

### Hinweise

Die Serialisierung der Argumente innerhalb von [`calc()`](/de/docs/Web/CSS/Reference/Values/calc) folgt dem IEEE-754-Standard für Gleitkommaarithmetik. Bei Konstanten wie `infinity` und `NaN` sind daher einige Fälle zu beachten:

- Eine Division durch null ergibt abhängig vom Vorzeichen des Zählers positives oder negatives `infinity`.
- Wird `infinity` zu einem beliebigen Wert addiert, davon subtrahiert oder damit multipliziert, ist das Ergebnis `infinity`, sofern die Operation nicht `NaN` ergibt (siehe unten).
- Jede Operation mit mindestens einem `NaN`-Argument ergibt `NaN`.
  Das bedeutet, dass `0 / 0`, `infinity / infinity`, `0 * infinity`, `infinity + (-infinity)` und `infinity - infinity` jeweils `NaN` ergeben.

- Positive und negative null sind mögliche Werte (`0⁺` und `0⁻`).
  Das hat folgende Auswirkungen:
  - Eine Multiplikation oder Division, die null ergibt und genau ein negatives Argument hat (`-5 * 0` oder `1 / (-infinity)`), ergibt `0⁻`. Das gilt auch für ein negatives Ergebnis aus Kombinationen in anderen mathematischen Funktionen.
  - `0⁻ + 0⁻` oder `0⁻ - 0` ergibt `0⁻`.
    Alle anderen Additionen oder Subtraktionen, die null ergeben, liefern `0⁺`.
  - Die Multiplikation oder Division von `0⁻` mit einer positiven Zahl (einschließlich `0⁺`) ergibt ein negatives Ergebnis (entweder `0⁻` oder `-infinity`). Mit einer negativen Zahl ergibt sie ein positives Ergebnis.

Beispiele für die Anwendung dieser Regeln finden Sie im Abschnitt [Unendlich, NaN und Division durch null](#infinity_nan_and_division_by_zero).

> [!NOTE]
> `infinity` wird nur selten als Argument in `calc()` benötigt. Es kann jedoch helfen, fest codierte „magische Zahlen“ zu vermeiden oder sicherzustellen, dass ein bestimmter Wert immer größer als ein anderer ist.
> Es kann auch nützlich sein, wenn Sie deutlich machen möchten, dass eine Eigenschaft den „größtmöglichen Wert“ für diesen Datentyp hat.

## Beschreibung

Mathematische Konstanten können nur innerhalb von [mathematischen CSS-Funktionen](/de/docs/Web/CSS/Reference/Values/Functions#math_functions) für Berechnungen verwendet werden. Mathematische Konstanten sind keine CSS-Schlüsselwörter. Werden sie außerhalb einer Berechnung verwendet, behandelt CSS sie jedoch wie andere Schlüsselwörter.
Beispiele:

- `animation-name: pi;` verweist auf eine Animation namens „pi“, nicht auf die numerische Konstante `pi`.
- `line-height: e;` ist ungültig, `line-height: calc(e);` dagegen gültig.
- `rotate(1rad * pi);` funktioniert nicht, weil {{CSSxRef("transform-function/rotate", "rotate()")}} keine mathematische Funktion ist. Verwenden Sie `rotate(calc(1rad * pi));`.

In mathematischen Funktionen werden `<calc-keyword>`-Werte als {{CSSxRef("number")}}-Werte ausgewertet. Daher fungieren `e` und `pi` als numerische Konstanten.

`infinity` und `NaN` unterscheiden sich davon etwas: Sie gelten als degenerierte numerische Konstanten.
Obwohl sie technisch gesehen keine Zahlen sind, verhalten sie sich wie {{CSSxRef("number")}}-Werte. Um beispielsweise einen unendlichen {{CSSxRef("length")}}-Wert zu erhalten, ist daher ein Ausdruck wie `calc(infinity * 1px)` erforderlich.

Die Werte `infinity` und `NaN` dienen hauptsächlich dazu, die Serialisierung einfacher und verständlicher zu machen. Sie können aber auch einen „größtmöglichen Wert“ angeben, da ein unendlicher Wert auf den zulässigen Bereich begrenzt wird.
Das ist nur selten sinnvoll. Wenn Sie jedoch einen unendlichen Wert verwenden möchten, ist dies deutlich einfacher, als eine sehr große Zahl in ein Stylesheet einzutragen oder magische Zahlen fest zu codieren.

Bei allen Konstanten außer `NaN` wird die Groß- und Kleinschreibung nicht berücksichtigt. Daher sind `calc(Pi)`, `calc(E)` und `calc(InFiNiTy)` gültig:

```plain example-good
e
-e
E
pi
-pi
Pi
infinity
-infinity
InFiNiTy
NaN
```

Die folgenden Beispiele sind alle ungültig:

```plain example-bad
nan
Nan
NAN
```

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### `e` und `pi` in `calc()` verwenden

Das folgende Beispiel zeigt, wie Sie `e` innerhalb von `calc()` verwenden, um ein Element um einen exponentiell zunehmenden Winkel zu drehen.
Das zweite Feld zeigt, wie Sie `pi` innerhalb einer [`sin()`](/de/docs/Web/CSS/Reference/Values/sin)-Funktion verwenden.

```css hidden
#wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 200px;
}
.container > div {
  width: 100px;
  height: 100px;
  margin: 10px;
}

span {
  font-family: monospace;
  font-size: 0.8em;
}

#e {
  background-color: blue;
}

#pi {
  background-color: blue;
}
```

```html
<div id="wrapper">
  <div class="container">
    <div id="e"></div>
    <input type="range" min="0" max="7" step="0.01" value="0" id="e-slider" />
    <label for="e-slider">e:</label>
    <span id="e-value"></span>
  </div>
  <div class="container">
    <div id="pi"></div>
    <input type="range" min="0" max="1" step="0.01" value="0" id="pi-slider" />
    <label for="pi-slider">pi:</label>
    <span id="pi-value"></span>
  </div>
</div>
```

```js
// sliders
const eInput = document.querySelector("#e-slider");
const piInput = document.querySelector("#pi-slider");
// spans for displaying values
const eValue = document.querySelector("#e-value");
const piValue = document.querySelector("#pi-value");

eInput.addEventListener("input", function () {
  e.style.transform = `rotate(calc(1deg * pow(${this.value}, e)))`;
  eValue.textContent = e.style.transform;
});

piInput.addEventListener("input", function () {
  pi.style.rotate = `calc(sin(${this.value} * pi) * 100deg)`;
  piValue.textContent = pi.style.rotate;
});
```

{{EmbedLiveSample('Using_e_and_pi_in_calc', 'auto', '200')}}

### Unendlich, NaN und Division durch null

Das folgende Beispiel zeigt den berechneten Wert der Eigenschaft `width` bei einer Division durch null. Anschließend zeigt es, wie Werte mit verschiedenen `calc()`-Konstanten bei der Ausgabe in der Konsole serialisiert werden:

```html
<div></div>
```

```css
div {
  height: 50px;
  background-color: red;
  width: calc(1px / 0);
}
```

```js
const div = document.querySelector("div");
console.log(div.offsetWidth); // 17895698 (infinity clamped to largest value for width)

function logSerializedWidth(value) {
  div.style.width = value;
  console.log(div.style.width);
}

logSerializedWidth("calc(1px / 0)"); // calc(infinity * 1px)
logSerializedWidth("calc(1px / -0)"); // calc(-infinity * 1px)

logSerializedWidth("calc(1px * -infinity * -infinity)"); // calc(infinity * 1px)
logSerializedWidth("calc(1px * -infinity * infinity)"); // calc(-infinity * 1px)

logSerializedWidth("calc(1px * (NaN + 1))"); // calc(NaN * 1px)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("&lt;calc-sum&gt;")}}
- {{CSSxRef("&lt;calc-product&gt;")}}
- {{CSSxRef("&lt;calc-value&gt;")}}
