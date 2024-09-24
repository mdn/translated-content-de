---
title: <calc-Schlüsselwort>
slug: Web/CSS/calc-keyword
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Der **`<calc-keyword>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert wohl definierte Konstanten wie `e` und `pi`. Anstatt dass Autoren mehrere Ziffern dieser mathematischen Konstanten manuell eingeben oder sie berechnen müssen, werden einige von ihnen direkt durch CSS zur Verfügung gestellt, um die Arbeit zu erleichtern.

## Syntax

Der `<calc-keyword>` Typ definiert numerische Konstanten, die in [CSS-Mathematische Funktionen](/de/docs/Web/CSS/CSS_Functions#math_functions) verwendet werden können.

### Werte

- `e`

  - : Die Basis des natürlichen Logarithmus, ungefähr gleich `2.7182818284590452354`.

- `pi`

  - : Das Verhältnis des Umfangs eines Kreises zu seinem Durchmesser, ungefähr gleich `3.1415926535897932`.

- `unendlich` & `-unendlich`

  - : Ein unendlicher Wert, der verwendet wird, um den größtmöglichen/kleinsten möglichen Wert anzuzeigen.

- `NaN`

  - : Ein Wert, der "Nicht eine Zahl" in kanonischer Schreibweise darstellt.

### Hinweise

Die Serialisierung der Argumente innerhalb von [`calc()`](/de/docs/Web/CSS/calc) folgt dem IEEE-754-Standard für Gleitkomma-Mathematik, was bedeutet, dass es einige Fälle im Zusammenhang mit Konstanten wie `unendlich` und `NaN` zu beachten gibt:

- Eine Division durch null wird je nach Vorzeichen des Zählers positive oder negative `unendlich` zurückgeben.
- Das Addieren, Subtrahieren oder Multiplizieren von `unendlich` mit allem führt zu `unendlich`, es sei denn, es ergibt `NaN` (siehe unten).
- Jede Operation mit mindestens einem `NaN`-Argument wird `NaN` zurückgeben.
  Das bedeutet, `0 / 0`, `unendlich / unendlich`, `0 * unendlich`, `unendlich + (-unendlich)` und `unendlich - unendlich` werden alle `NaN` zurückgeben.

- Positive und negative Null sind mögliche Werte (`0⁺` und `0⁻`).
  Dies hat folgende Auswirkungen:
  - Multiplikationen oder Divisionen, die null mit genau einem negativen Argument erzeugen (`-5 * 0` oder `1 / (-unendlich)`) oder negative Ergebnisse aus Kombinationen in den anderen mathematischen Funktionen erzeugen, ergeben `0⁻`.
  - `0⁻ + 0⁻` oder `0⁻ - 0` führen zu `0⁻`.
    Alle anderen Additionen oder Subtraktionen, die zu null führen würden, ergeben `0⁺`.
  - Die Multiplikation oder Division von `0⁻` mit einer positiven Zahl (einschließlich `0⁺`) ergibt ein negatives Ergebnis (entweder `0⁻` oder `-unendlich`), während die Multiplikation oder Division von `0⁻` mit einer negativen Zahl ein positives Ergebnis ergibt.

Beispiele dafür, wie diese Regeln angewendet werden, sind im Abschnitt [Unendlichkeit, NaN und Division durch null](#infinity_nan_and_division_by_zero) dargestellt.

> [!NOTE]
> Es ist selten notwendig, `unendlich` als Argument in `calc()` zu verwenden, aber es kann genutzt werden, um fest codierte "magische Zahlen" zu vermeiden oder sicherzustellen, dass ein bestimmter Wert immer größer als ein anderer ist.
> Es kann nützlich sein, wenn Sie klarstellen müssen, dass eine Eigenschaft den "größtmöglichen Wert" für diesen Datentyp hat.

### Formale Syntax

{{CSSSyntax}}

## Beschreibung

Mathematische Konstanten können nur innerhalb von [CSS-Mathematische Funktionen](/de/docs/Web/CSS/CSS_Functions#math_functions) für Berechnungen verwendet werden. Mathematische Konstanten sind keine CSS-Schlüsselwörter, aber wenn sie außerhalb einer Berechnung verwendet werden, werden sie wie jedes andere Schlüsselwort behandelt.
Zum Beispiel:

- `animation-name: pi;` bezieht sich auf eine Animation namens "pi", nicht auf die numerische Konstante `pi`.
- `line-height: e;` ist ungültig, aber `line-height: calc(e);` ist gültig.
- `rotate(1rad * pi);` funktioniert nicht, weil {{CSSxRef("transform-function/rotate", "rotate()")}} keine mathematische Funktion ist. Verwenden Sie `rotate(calc(1rad * pi));`

In mathematischen Funktionen werden `<calc-keyword>`-Werte als {{CSSxRef("number")}}-Werte ausgewertet, daher handeln `e` und `pi` als numerische Konstanten.

Sowohl `unendlich` als auch `NaN` sind leicht unterschiedlich, sie werden als degenerierte numerische Konstanten angesehen.
Obwohl sie technisch keine Zahlen sind, verhalten sie sich wie {{CSSxRef("number")}}-Werte, daher erfordert zum Beispiel das Erreichen einer unendlichen {{CSSxRef("length")}} einen Ausdruck wie `calc(infinity * 1px)`.

Die `unendlich` und `NaN` Werte sind hauptsächlich enthalten, um die Serialisierung einfacher und offensichtlicher zu machen, können aber verwendet werden, um einen "größtmöglichen Wert" anzuzeigen, da ein unendlicher Wert auf den zulässigen Bereich begrenzt wird.
Es ist selten, dass dies vernünftig ist, aber wenn man Unendlichkeit verwendet, ist es viel einfacher als eine enorme Zahl in einem Stylesheet zu schreiben oder magische Zahlen fest zu kodieren.

Alle Konstanten sind nicht case-sensitiv außer `NaN`, was `calc(Pi)`, `calc(E)` und `calc(InFiNiTy)` gültig macht:

```plain example-good
e
-e
E
pi
-pi
Pi
unendlich
-unendlich
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
Die zweite Box zeigt, wie `pi` innerhalb einer [`sin()`](/de/docs/Web/CSS/sin) Funktion verwendet wird.

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

Das folgende Beispiel zeigt den berechneten Wert der `width`-Eigenschaft bei einer Division durch Null, gefolgt davon, wie die Serialisierung mit verschiedenen `calc()`-Konstanten aussieht, wenn sie in der Konsole betrachtet wird:

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
console.log(div.offsetWidth); // 17895698 (unendlich, begrenzt auf den größten Wert für Breite)

function logSerializedWidth(value) {
  div.style.width = value;
  console.log(div.style.width);
}

logSerializedWidth("calc(1px / 0)"); // calc(unendlich * 1px)
logSerializedWidth("calc(1px / -0)"); // calc(-unendlich * 1px)

logSerializedWidth("calc(1px * -infinity * -infinity)"); // calc(unendlich * 1px)
logSerializedWidth("calc(1px * -infinity * infinity)"); // calc(-unendlich * 1px)

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
