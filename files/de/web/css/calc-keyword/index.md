---
title: <calc-keyword>
slug: Web/CSS/calc-keyword
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Der **`<calc-keyword>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert wohldefinierte Konstanten wie `e` und `pi`. Anstatt von Autoren zu verlangen, mehrere Ziffern dieser mathematischen Konstanten manuell einzugeben oder sie zu berechnen, werden einige dieser Konstanten direkt von CSS zur Verfügung gestellt, um den Komfort zu erhöhen.

## Syntax

Der `<calc-keyword>`-Typ definiert numerische Konstanten, die in [CSS-Mathematikfunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions) verwendet werden können.

### Werte

- `e`

  - : Die Basis des natürlichen Logarithmus, ungefähr gleich `2.7182818284590452354`.

- `pi`

  - : Das Verhältnis des Umfangs eines Kreises zu seinem Durchmesser, ungefähr gleich `3.1415926535897932`.

- `infinity` & `-infinity`

  - : Ein unendlicher Wert, der verwendet wird, um den größtmöglichen/kleinstmöglichen Wert anzuzeigen.

- `NaN`
  - : Ein Wert, der "Not a Number" in kanonischer Groß- und Kleinschreibung repräsentiert.

### Hinweise

Die Serialisierung der Argumente innerhalb von [`calc()`](/de/docs/Web/CSS/calc) folgt dem IEEE-754-Standard für Gleitkomma-Arithmetik, was bedeutet, dass einige Fälle im Hinblick auf Konstanten wie `infinity` und `NaN` beachtet werden müssen:

- Eine Division durch null gibt positives oder negatives `infinity` zurück, abhängig von dem Vorzeichen des Zählers.
- Die Addition, Subtraktion oder Multiplikation von `infinity` mit irgendetwas gibt `infinity` zurück, es sei denn, es entsteht `NaN` (siehe unten).
- Jede Operation mit mindestens einem `NaN`-Argument gibt `NaN` zurück.
  Das bedeutet, dass `0 / 0`, `infinity / infinity`, `0 * infinity`, `infinity + (-infinity)` und `infinity - infinity` alle `NaN` zurückgeben werden.

- Positive und negative Null sind mögliche Werte (`0⁺` und `0⁻`).
  Dies hat folgende Auswirkungen:
  - Multiplikation oder Division, die Null mit genau einem negativen Argument (`-5 * 0` oder `1 / (-infinity)`) ergibt, oder negatives Ergebnis aus Kombinationen in den anderen mathematischen Funktionen, ergibt `0⁻`.
  - `0⁻ + 0⁻` oder `0⁻ - 0` ergibt `0⁻`.
    Alle anderen Additionen oder Subtraktionen, die eine Null ergeben würden, ergeben `0⁺`.
  - Die Multiplikation oder Division von `0⁻` mit einer positiven Zahl (einschließlich `0⁺`) ergibt ein negatives Ergebnis (entweder `0⁻` oder `-infinity`), während die Multiplikation oder Division von `0⁻` mit einer negativen Zahl ein positives Ergebnis ergibt.

Beispiele, wie diese Regeln angewendet werden, sind im Abschnitt [Infinity, NaN, und Division durch Null](#infinity_nan_and_division_by_zero) gezeigt.

> [!NOTE]
> Es ist selten notwendig, `infinity` als Argument in `calc()` zu verwenden, aber es kann verwendet werden, um fest codierte "magische Zahlen" zu vermeiden oder sicherzustellen, dass ein bestimmter Wert immer größer als ein anderer ist.
> Es kann nützlich sein, wenn Sie deutlich machen müssen, dass eine Eigenschaft den "größtmöglichen Wert" für diesen Datentyp hat.

### Offizielle Syntax

{{CSSSyntax}}

## Beschreibung

Mathematische Konstanten können nur innerhalb von [CSS-Mathematikfunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions) für Berechnungen verwendet werden. Mathematische Konstanten sind keine CSS-Schlüsselwörter, aber wenn sie außerhalb einer Berechnung verwendet werden, werden sie wie jedes andere Schlüsselwort behandelt.
Zum Beispiel:

- `animation-name: pi;` bezieht sich auf eine Animation namens "pi", nicht auf die numerische Konstante `pi`.
- `line-height: e;` ist ungültig, aber `line-height: calc(e);` ist gültig.
- `rotate(1rad * pi);` funktioniert nicht, weil {{CSSxRef("transform-function/rotate", "rotate()")}} keine mathematische Funktion ist. Verwenden Sie `rotate(calc(1rad * pi));`

In mathematischen Funktionen werden `<calc-keyword>`-Werte als {{CSSxRef("number")}}-Werte ausgewertet, daher verhalten sich `e` und `pi` als numerische Konstanten.

Sowohl `infinity` als auch `NaN` sind etwas anders, sie werden als degenerierte numerische Konstanten betrachtet.
Obwohl sie technisch keine Zahlen sind, verhalten sie sich wie {{CSSxRef("number")}}-Werte, um beispielsweise eine unendliche {{CSSxRef("length")}} zu erhalten, erfordert es einen Ausdruck wie `calc(infinity * 1px)`.

Die Werte `infinity` und `NaN` sind hauptsächlich dazu da, die Serialisierung einfacher und offensichtlicher zu machen, können aber verwendet werden, um einen "größtmöglichen Wert" anzuzeigen, da ein unendlicher Wert auf den zulässigen Bereich begrenzt wird.
Das ist selten sinnvoll, aber wenn Sie Infinity verwenden, ist es viel einfacher, als einfach eine enorme Zahl in einem Stylesheet festzulegen oder magische Zahlen hart zu kodieren.

Alle Konstanten sind nicht abhängig von der Groß- und Kleinschreibung, außer `NaN`, was `calc(Pi)`, `calc(E)` und `calc(InFiNiTy)` gültig macht:

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

Das folgende Beispiel zeigt, wie man `e` innerhalb von `calc()` verwendet, um ein Element mit einem exponentiell zunehmenden Winkel zu drehen.
Das zweite Feld zeigt, wie `pi` in einer [`sin()`](/de/docs/Web/CSS/sin)-Funktion verwendet wird.

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

### Infinity, NaN, und Division durch Null

Das folgende Beispiel zeigt den berechneten Wert der `width`-Eigenschaft bei der Division durch Null, gefolgt davon, wie die Serialisierung mit verschiedenen `calc()`-Konstanten aussieht, wenn sie in der Konsole betrachtet wird:

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
