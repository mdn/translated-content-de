---
title: <calc-keyword>
slug: Web/CSS/calc-keyword
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Der **`<calc-keyword>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert wohldefinierte Konstanten wie `e` und `pi`. Anstatt Autoren zu verlangen, mehrere Stellen dieser mathematischen Konstanten manuell einzugeben oder zu berechnen, werden einige davon direkt von CSS aus Bequemlichkeit bereitgestellt.

## Syntax

Der `<calc-keyword>`-Typ definiert numerische Konstanten, die in [CSS-Mathematikfunktionen](/de/docs/Web/CSS/CSS_Functions#math_functions) verwendet werden können.

### Werte

- `e`

  - : Die Basis des natürlichen Logarithmus, ungefähr gleich `2.7182818284590452354`.

- `pi`

  - : Das Verhältnis des Umfangs eines Kreises zu seinem Durchmesser, ungefähr gleich `3.1415926535897932`.

- `infinity` & `-infinity`

  - : Ein unendlicher Wert, der den größten/kleinsten möglichen Wert anzeigt.

- `NaN`

  - : Ein Wert, der "Not a Number" in kanonischer Schreibweise repräsentiert.

### Hinweise

Das Serialisieren der Argumente innerhalb von [`calc()`](/de/docs/Web/CSS/calc) erfolgt nach dem IEEE-754-Standard für Gleitkomma-Mathematik, was bedeutet, dass es einige Fälle gibt, die in Bezug auf Konstanten wie `infinity` und `NaN` zu beachten sind:

- Eine Division durch Null führt je nach Vorzeichen des Zählers zu positivem oder negativem `infinity`.
- Das Addieren, Subtrahieren oder Multiplizieren von `infinity` mit irgendetwas wird `infinity` zurückgeben, es sei denn, es erzeugt `NaN` (siehe unten).
- Jede Operation mit mindestens einem `NaN`-Argument wird `NaN` zurückgeben.
  Das bedeutet, dass `0 / 0`, `infinity / infinity`, `0 * infinity`, `infinity + (-infinity)` und `infinity - infinity` alle `NaN` zurückgeben werden.

- Positive und negative Null sind mögliche Werte (`0⁺` und `0⁻`).
  Dies hat folgende Auswirkungen:
  - Eine Multiplikation oder Division, die Null ergibt, mit genau einem negativen Argument (`-5 * 0` oder `1 / (-infinity)`) oder negativem Ergebnis aus Kombinationen in den anderen Mathematikfunktionen wird `0⁻` zurückgeben.
  - `0⁻ + 0⁻` oder `0⁻ - 0` wird `0⁻` zurückgeben.
    Alle anderen Additionen oder Subtraktionen, die zu einer Null führen würden, werden `0⁺` zurückgeben.
  - Die Multiplikation oder Division von `0⁻` mit einer positiven Zahl (einschließlich `0⁺`) wird ein negatives Ergebnis zurückgeben (entweder `0⁻` oder `-infinity`), während die Multiplikation oder Division von `0⁻` mit einer negativen Zahl ein positives Ergebnis zurückgeben wird.

Beispiele, wie diese Regeln angewendet werden, sind im Abschnitt [Unendlichkeit, NaN und Division durch Null](#infinity_nan_and_division_by_zero) zu sehen.

> [!NOTE]
> Es ist selten notwendig, `infinity` als Argument in `calc()` zu verwenden, aber es kann verwendet werden, um harte "magische Zahlen" zu vermeiden oder sicherzustellen, dass ein bestimmter Wert immer größer als ein anderer Wert ist.
> Es kann nützlich sein, wenn Sie deutlich machen müssen, dass eine Eigenschaft den "größtmöglichen Wert" für diesen Datentyp hat.

### Formale Syntax

{{CSSSyntax}}

## Beschreibung

Mathematische Konstanten können nur innerhalb von [CSS-Mathematikfunktionen](/de/docs/Web/CSS/CSS_Functions#math_functions) für Berechnungen verwendet werden. Mathematische Konstanten sind keine CSS-Schlüsselwörter, aber wenn sie außerhalb einer Berechnung verwendet werden, werden sie wie jedes andere Schlüsselwort behandelt.
Zum Beispiel:

- `animation-name: pi;` bezieht sich auf eine Animation mit dem Namen "pi", nicht auf die numerische Konstante `pi`.
- `line-height: e;` ist ungültig, aber `line-height: calc(e);` ist gültig.
- `rotate(1rad * pi);` funktioniert nicht, da {{CSSxRef("transform-function/rotate", "rotate()")}} keine Mathematikfunktion ist. Verwenden Sie `rotate(calc(1rad * pi));`

In Mathematikfunktionen werden `<calc-keyword>`-Werte als {{CSSxRef("number")}}-Werte ausgewertet, daher agieren `e` und `pi` als numerische Konstanten.

Sowohl `infinity` als auch `NaN` sind leicht unterschiedlich, sie werden als degenerierte numerische Konstanten betrachtet. 
Obwohl sie technisch gesehen keine Zahlen sind, verhalten sie sich wie {{CSSxRef("number")}}-Werte, so dass zum Beispiel, um eine unendliche {{CSSxRef("length")}} zu erhalten, ein Ausdruck wie `calc(infinity * 1px)` erforderlich ist.

Die Werte `infinity` und `NaN` sind hauptsächlich enthalten, um die Serialisierung einfacher und offensichtlicher zu machen, können aber verwendet werden, um einen "größtmöglichen Wert" anzugeben, da ein unendlicher Wert auf den erlaubten Bereich beschränkt ist.
Es ist selten, dass dies vernünftig ist, aber die Verwendung von Infinity ist viel einfacher als einfach eine riesige Zahl in ein Stylesheet zu setzen oder magische Zahlen hart zu kodieren.

Alle Konstanten sind nicht case-sensitiv, außer `NaN`, was `calc(Pi)`, `calc(E)` und `calc(InFiNiTy)` gültig macht:

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

Das folgende Beispiel zeigt, wie `e` in `calc()` verwendet wird, um ein Element mit einem exponentiell zunehmenden Winkel zu drehen.
Die zweite Box zeigt, wie `pi` innerhalb einer [`sin()`](/de/docs/Web/CSS/sin)-Funktion verwendet wird.

```css hidden
#wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: left;
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
  e.style.transform = "rotate(calc(1deg * pow(" + this.value + ", e)))";
  eValue.textContent = e.style.transform;
});

piInput.addEventListener("input", function () {
  pi.style.rotate = "calc(sin(" + this.value + " * pi) * 100deg)";
  piValue.textContent = pi.style.rotate;
});
```

{{EmbedLiveSample('Using_e_and_pi_in_calc', 'auto', '200')}}

### Unendlichkeit, NaN und Division durch Null

Das folgende Beispiel zeigt den berechneten Wert der `width`-Eigenschaft bei einer Division durch Null, gefolgt davon, wie die Serialisierung mit verschiedenen `calc()`-Konstanten aussieht, wenn sie in der Konsole angesehen werden:

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
