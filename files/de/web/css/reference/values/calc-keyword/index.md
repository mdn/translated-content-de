---
title: <calc-keyword>
slug: Web/CSS/Reference/Values/calc-keyword
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Der **`<calc-keyword>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert klar definierte Konstanten wie `e` und `pi`. Anstatt von Autoren zu verlangen, dass sie diese mathematischen Konstanten manuell mit mehreren Stellen eingeben oder berechnen, stellt CSS einige von ihnen direkt zur Verfügung, um den Komfort zu erhöhen.

## Syntax

Der `<calc-keyword>` Typ definiert numerische Konstanten, die in [CSS-Mathematikfunktionen](/de/docs/Web/CSS/Reference/Values/Functions#math_functions) verwendet werden können.

### Werte

- `e`
  - : Die Basis des natürlichen Logarithmus, ungefähr gleich `2.7182818284590452354`.

- `pi`
  - : Das Verhältnis des Umfangs eines Kreises zu seinem Durchmesser, ungefähr gleich `3.1415926535897932`.

- `infinity` & `-infinity`
  - : Ein unendlicher Wert, der verwendet wird, um den größtmöglichen bzw. kleinstmöglichen Wert anzuzeigen.

- `NaN`
  - : Ein Wert, der "Nicht eine Zahl" im kanonischen Fall darstellt.

### Anmerkungen

Das Serialisieren der Argumente innerhalb von [`calc()`](/de/docs/Web/CSS/Reference/Values/calc) folgt dem IEEE-754-Standard für Gleitkommazahlen, was bedeutet, dass es einige Fälle gibt, die im Hinblick auf Konstanten wie `infinity` und `NaN` zu beachten sind:

- Division durch null gibt je nach Vorzeichen des Zählers positive oder negative `infinity` zurück.
- Addition, Subtraktion oder Multiplikation von `infinity` mit allem ergibt `infinity`, es sei denn, es entsteht `NaN` (siehe unten).
- Jede Operation mit mindestens einem `NaN`-Argument ergibt `NaN`.
  Das bedeutet, dass `0 / 0`, `infinity / infinity`, `0 * infinity`, `infinity + (-infinity)`, und `infinity - infinity` alle `NaN` zurückgeben.

- Positive und negative Null sind mögliche Werte (`0⁺` und `0⁻`).
  Dies hat folgende Auswirkungen:
  - Multiplikation oder Division, die Null mit genau einem negativen Argument (`-5 * 0` oder `1 / (-infinity)`) oder negativem Ergebnis aus Kombinationen in den anderen mathematischen Funktionen ergibt, gibt `0⁻` zurück.
  - `0⁻ + 0⁻` oder `0⁻ - 0` geben `0⁻` zurück.
    Alle anderen Additionen oder Subtraktionen, die Null ergeben würden, geben `0⁺` zurück.
  - Multiplikation oder Division von `0⁻` mit einer positiven Zahl (einschließlich `0⁺`) ergibt ein negatives Ergebnis (entweder `0⁻` oder `-infinity`), während Multiplikation oder Division von `0⁻` mit einer negativen Zahl ein positives Ergebnis ergibt.

Beispiele dafür, wie diese Regeln angewendet werden, finden Sie im Abschnitt über [Infinity, NaN und Division durch null](#infinity_nan_and_division_by_zero).

> [!NOTE]
> Es ist selten, dass `infinity` als Argument in `calc()` verwendet werden muss, aber es kann verwendet werden, um festkodierte "magische Zahlen" zu vermeiden oder sicherzustellen, dass ein gewisser Wert immer größer als ein anderer Wert ist.
> Es kann nützlich sein, wenn Sie deutlich machen müssen, dass eine Eigenschaft den "größtmöglichen Wert" für diesen Datentyp hat.

### Formale Syntax

{{CSSSyntax}}

## Beschreibung

Mathematische Konstanten können nur innerhalb von [CSS-Mathematikfunktionen](/de/docs/Web/CSS/Reference/Values/Functions#math_functions) für Berechnungen verwendet werden. Mathematische Konstanten sind keine CSS-Schlüsselwörter, aber wenn sie außerhalb einer Berechnung verwendet werden, werden sie wie jedes andere Schlüsselwort behandelt.
Zum Beispiel:

- `animation-name: pi;` bezieht sich auf eine Animation namens "pi", nicht auf die numerische Konstante `pi`.
- `line-height: e;` ist ungültig, aber `line-height: calc(e);` ist gültig.
- `rotate(1rad * pi);` funktioniert nicht, weil {{CSSxRef("transform-function/rotate", "rotate()")}} keine mathematische Funktion ist. Verwenden Sie `rotate(calc(1rad * pi));`

In mathematischen Funktionen werden `<calc-keyword>`-Werte als {{CSSxRef("number")}}-Werte ausgewertet, daher verhalten sich `e` und `pi` wie numerische Konstanten.

Sowohl `infinity` als auch `NaN` sind leicht unterschiedlich; sie werden als degenerierte numerische Konstanten betrachtet.
Obwohl sie technisch gesehen keine Zahlen sind, verhalten sie sich wie {{CSSxRef("number")}}-Werte, sodass ein unendliches {{CSSxRef("length")}}, zum Beispiel, einen Ausdruck wie `calc(infinity * 1px)` erfordert.

Die Werte `infinity` und `NaN` sind hauptsächlich enthalten, um die Serialisierung einfacher und offensichtlicher zu machen, können aber verwendet werden, um einen "größtmöglichen Wert" anzuzeigen, da ein unendlicher Wert auf den erlaubten Bereich begrenzt wird.
Es ist selten, dass dies vernünftig ist, aber wenn man Unendlichkeit verwendet, ist es viel einfacher, als einfach eine riesige Zahl in ein Stylesheet zu schreiben oder magische Zahlen fest zu kodieren.

Alle Konstanten sind nicht zwischen Groß- und Kleinschreibung unterscheidend, außer `NaN`, was `calc(Pi)`, `calc(E)` und `calc(InFiNiTy)` gültig macht:

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

Die folgenden sind alle ungültig:

```plain example-bad
nan
Nan
NAN
```

## Beispiele

### Verwendung von e und pi in `calc()`

Das folgende Beispiel zeigt, wie `e` innerhalb von `calc()` verwendet wird, um ein Element mit einem exponentiell ansteigenden Winkel zu drehen.
Das zweite Feld zeigt, wie `pi` innerhalb einer [`sin()`](/de/docs/Web/CSS/Reference/Values/sin) Funktion verwendet wird.

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

### Infinity, NaN, und Division durch null

Das folgende Beispiel zeigt den berechneten Wert der `width` Eigenschaft bei der Division durch null, gefolgt davon, wie die Serialisierung mit verschiedenen `calc()` Konstanten aussieht, wenn sie in der Konsole betrachtet werden:

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
