---
title: <calc-keyword>
slug: Web/CSS/calc-keyword
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

Der **`<calc-keyword>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert gut definierte Konstanten wie `e` und `pi`. Anstatt dass Autoren mehrere Ziffern dieser mathematischen Konstanten manuell eingeben oder berechnen müssen, stellt CSS einige von ihnen direkt zur Verfügung, um die Arbeit zu erleichtern.

## Syntax

Der `<calc-keyword>`-Typ definiert numerische Konstanten, die in [CSS-Mathematikfunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions) verwendet werden können.

### Werte

- `e`

  - : Die Basis des natürlichen Logarithmus, ungefähr gleich `2.7182818284590452354`.

- `pi`

  - : Das Verhältnis des Umfangs eines Kreises zu seinem Durchmesser, ungefähr gleich `3.1415926535897932`.

- `infinity` & `-infinity`

  - : Ein unendlicher Wert, der verwendet wird, um den größten/kleinsten möglichen Wert anzuzeigen.

- `NaN`

  - : Ein Wert, der "Not a Number" in kanonischer Schreibweise darstellt.

### Hinweise

Die Serialisierung der Argumente in [`calc()`](/de/docs/Web/CSS/calc) folgt dem IEEE-754-Standard für Gleitkomma-Mathematik, was bedeutet, dass es einige Fälle gibt, die in Bezug auf Konstanten wie `infinity` und `NaN` zu beachten sind:

- Eine Division durch Null gibt positive oder negative `infinity` zurück, abhängig vom Vorzeichen des Zählers.
- Das Addieren, Subtrahieren oder Multiplizieren von `infinity` mit irgendetwas gibt `infinity` zurück, es sei denn, es wird `NaN` erzeugt (siehe unten).
- Jede Operation mit mindestens einem `NaN`-Argument gibt `NaN` zurück.
  Das bedeutet, `0 / 0`, `infinity / infinity`, `0 * infinity`, `infinity + (-infinity)` und `infinity - infinity` geben alle `NaN` zurück.

- Positive und negative Null sind mögliche Werte (`0⁺` und `0⁻`).
  Dies hat folgende Auswirkungen:
  - Multiplikationen oder Divisionen, die Null mit genau einem negativen Argument (`-5 * 0` oder `1 / (-infinity)`) oder ein negatives Ergebnis aus anderen Mathematikfunktionen ergeben, geben `0⁻` zurück.
  - `0⁻ + 0⁻` oder `0⁻ - 0` geben `0⁻` zurück.
    Alle anderen Additionen oder Subtraktionen, die Null ergeben würden, geben `0⁺` zurück.
  - Das Multiplizieren oder Dividieren von `0⁻` mit einer positiven Zahl (einschließlich `0⁺`) gibt ein negatives Ergebnis zurück (entweder `0⁻` oder `-infinity`), während das Multiplizieren oder Dividieren von `0⁻` mit einer negativen Zahl ein positives Ergebnis ergibt.

Beispiele dafür, wie diese Regeln angewendet werden, finden Sie im Abschnitt [Infinity, NaN, und Division durch Null](#infinity_nan_and_division_by_zero).

> [!NOTE]
> Es ist selten, `infinity` als Argument in `calc()` zu verwenden, aber es kann nützlich sein, um harte "magische Zahlen" zu vermeiden oder sicherzustellen, dass ein bestimmter Wert immer größer als ein anderer ist.
> Es kann nützlich sein, wenn offensichtlicher sein soll, dass eine Eigenschaft "den größtmöglichen Wert" für diesen Datentyp hat.

### Formale Syntax

{{CSSSyntax}}

## Beschreibung

Mathematische Konstanten können nur innerhalb von [CSS-Mathematikfunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions) für Berechnungen verwendet werden. Mathematische Konstanten sind keine CSS-Schlüsselwörter, aber wenn sie außerhalb einer Berechnung verwendet werden, werden sie wie jedes andere Schlüsselwort behandelt.
Zum Beispiel:

- `animation-name: pi;` bezieht sich auf eine Animation mit dem Namen "pi", nicht auf die numerische Konstante `pi`.
- `line-height: e;` ist ungültig, aber `line-height: calc(e);` ist gültig.
- `rotate(1rad * pi);` funktioniert nicht, da {{CSSxRef("transform-function/rotate", "rotate()")}} keine Mathematikfunktion ist. Verwenden Sie `rotate(calc(1rad * pi));`.

In Mathematikfunktionen werden `<calc-keyword>`-Werte als {{CSSxRef("number")}}-Werte ausgewertet, daher verhalten sich `e` und `pi` als numerische Konstanten.

Sowohl `infinity` als auch `NaN` sind etwas anders, sie gelten als degenerierte numerische Konstanten.
Obwohl sie technisch keine Zahlen sind, verhalten sie sich wie {{CSSxRef("number")}}-Werte, daher erfordert das Erreichen einer unendlichen {{CSSxRef("length")}} beispielsweise einen Ausdruck wie `calc(infinity * 1px)`.

Die Werte `infinity` und `NaN` sind hauptsächlich enthalten, um die Serialisierung einfacher und offensichtlicher zu machen, können jedoch verwendet werden, um einen "größtmöglichen Wert" anzuzeigen, da ein unendlicher Wert auf den erlaubten Bereich begrenzt wird.
Es ist selten, dass dies vernünftig ist, aber bei der Verwendung von Infinity ist dies viel einfacher, als einfach eine enorm große Zahl in ein Stylesheet zu setzen oder magische Zahlen hart zu kodieren.

Alle Konstanten sind groß- und kleinschreibungsunempfindlich, außer `NaN`, was `calc(Pi)`, `calc(E)` und `calc(InFiNiTy)` gültig macht:

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

Das folgende Beispiel zeigt, wie `e` innerhalb von `calc()` verwendet wird, um ein Element mit einem exponentiell zunehmenden Winkel zu drehen.
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

### Infinity, NaN und Division durch Null

Das folgende Beispiel zeigt den berechneten Wert der `width`-Eigenschaft bei Division durch Null, gefolgt davon, wie die Serialisierung mit verschiedenen `calc()`-Konstanten aussieht, wenn sie in der Konsole betrachtet wird:

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
