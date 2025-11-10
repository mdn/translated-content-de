---
title: round()
slug: Web/CSS/Reference/Values/round
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`round()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) gibt eine gerundete Zahl basierend auf einer ausgewählten Rundungsstrategie zurück.

Autoren sollten eine [benutzerdefinierte CSS-Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) (z. B. `--my-property`) für den Rundungswert, das Intervall oder beides verwenden; die Verwendung der `round()` Funktion ist redundant, wenn diese Werte bekannt sind.

## Syntax

```css
width: round(var(--width), 50px);
width: round(up, 101px, var(--interval));
width: round(down, var(--height), var(--interval));
margin: round(to-zero, -105px, 10px);
```

### Parameter

Die Funktion `round(<rounding-strategy>, valueToRound, roundingInterval)` spezifiziert eine optionale Rundungsstrategie, einen zu rundenden Wert (oder mathematischen Ausdruck) und ein Rundungsintervall (oder mathematischen Ausdruck).
Der `valueToRound` wird gemäß der Rundungsstrategie auf das nächste ganzzahlige Vielfache von `roundingInterval` gerundet.

- `<rounding-strategy>`
  - : Die Rundungsstrategie.
    Diese kann einen der folgenden Werte haben:
    - `up`
      - : Rundet `valueToRound` nach oben auf das nächste ganzzahlige Vielfache von `roundingInterval` (wenn der Wert negativ ist, wird er "positiver"). Dies entspricht der JavaScript-Methode [`Math.ceil()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil).
    - `down`
      - : Rundet `valueToRound` nach unten auf das nächste ganzzahlige Vielfache von `roundingInterval` (wenn der Wert negativ ist, wird er "negativer"). Dies entspricht der JavaScript-Methode [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor).
    - `nearest` (Standard)
      - : Rundet `valueToRound` auf das nächste ganzzahlige Vielfache von `roundingInterval`, das entweder oberhalb oder unterhalb des Wertes liegen kann.
        Wenn `valueToRound` genau zwischen den Rundungszielen oberhalb und unterhalb liegt (kein Ziel ist "näher"), wird nach oben gerundet.
        Entspricht JavaScripts [`Math.round()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round).
    - `to-zero`
      - : Rundet `valueToRound` auf das nächste ganzzahlige Vielfache von `roundingInterval`, das näher bei/nach null liegt (eine positive Zahl wird kleiner, während ein negativer Wert "weniger negativ" wird). Dies entspricht der JavaScript-Methode [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc).

- `valueToRound`
  - : Der zu rundende Wert.
    Dies muss eine {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, oder {{CSSxREF("&lt;percentage&gt;")}} sein, oder ein mathematischer Ausdruck, der sich zu einem dieser Werte auflöst.

- `roundingInterval`
  - : Das Rundungsintervall.
    Dies ist eine {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, oder {{CSSxREF("&lt;percentage&gt;")}}, oder ein mathematischer Ausdruck, der sich zu einem dieser Werte auflöst. Wenn `valueToRound` eine {{CSSxREF("&lt;number&gt;")}} ist, kann `roundingInterval` weggelassen werden und wird standardmäßig auf `1` gesetzt. Andernfalls führt das Weglassen zu einem ungültigen Ausdruck.

### Rückgabewert

Der Wert von `valueToRound`, gerundet auf das nächst tiefere oder höhere ganzzahlige Vielfache von `roundingInterval`, abhängig von der `Rundungsstrategie`.

- Wenn `roundingInterval` 0 ist, ist das Ergebnis `NaN`.
- Wenn `valueToRound` und `roundingInterval` beide `unendlich` sind, ist das Ergebnis `NaN`.
- Wenn `valueToRound` unendlich ist, aber `roundingInterval` endlich, ist das Ergebnis das gleiche `infinity`.
- Wenn `valueToRound` endlich ist, aber `roundingInterval` unendlich, hängt das Ergebnis von der Rundungsstrategie und dem Vorzeichen von `A` ab:
  - `up` - Wenn `valueToRound` positiv (nicht null) ist, geben Sie `+∞` zurück. Wenn `valueToRound` `0⁺` ist, geben Sie `0⁺` zurück. Andernfalls geben Sie `0⁻` zurück.
  - `down` - Wenn `valueToRound` negativ (nicht null) ist, geben Sie `−∞` zurück. Wenn `valueToRound` `0⁻` ist, geben Sie `0⁻` zurück. Andernfalls geben Sie `0⁺` zurück.
  - `nearest`, `to-zero` - Wenn `valueToRound` positiv oder `0⁺` ist, geben Sie `0⁺` zurück. Andernfalls geben Sie `0⁻` zurück.

- Die Argumentberechnungen können sich in {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, oder {{CSSxREF("&lt;percentage&gt;")}} auflösen, müssen jedoch denselben Typ haben, ansonsten ist die Funktion ungültig; das Ergebnis wird den gleichen Typ wie die Argumente haben.
- Wenn `valueToRound` genau einem ganzzahligen Vielfachen von `roundingInterval` entspricht, löst sich `round()` genau zu `valueToRound` auf (bewahrt dabei, ob `valueToRound` `0⁻` oder `0⁺` ist, falls relevant). Andernfalls gibt es zwei ganzzahlige Vielfache von `roundingInterval`, die potenziell "näher" an `valueToRound` sind, das tiefere `roundingInterval`, das näher bei `−∞` ist und das höhere `roundingInterval`, das näher bei `+∞` ist.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Positive Werte runden

Dieses Beispiel zeigt, wie die Rundungsstrategien der `round()` Funktion für positive Werte funktionieren.

Bei den fünf Kästchen unten wird die `round()` Funktion zum Setzen der Höhe der letzten vier verwendet.
Der zu rundende Wert liegt in jedem Fall zwischen 100 px und 125 px, und der Rundungswert beträgt in allen Fällen 25 px.
Die Höhe der Kästchen wird daher entweder auf 125 px aufgerundet oder auf 100 px abgerundet.

#### HTML

Das HTML definiert 5 `div` Elemente, die vom CSS als Kästchen dargestellt werden.
Die Elemente enthalten Text, der die Rundungsstrategie, den Ausgangswert und die erwartete endgültige Höhe des Kästchens (in Klammern) angibt.

```html
<div class="box box-1">height: 100px</div>
<div class="box box-2">up 101px (125px)</div>
<div class="box box-3">down 122px (100px)</div>
<div class="box box-4">to-zero 120px (100px)</div>
<div class="box box-5">nearest 117px (125px)</div>
```

#### CSS

```css hidden
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
}
```

Der auf alle Kästchen angewendete CSS wird unten angezeigt.
Beachten Sie, dass wir eine [benutzerdefinierte CSS-Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) mit dem Namen `--rounding-interval` anwenden, die wir für das Rundungsintervall verwenden werden.

```css
div.box {
  width: 100px;
  height: 100px;
  background: lightblue;
  --rounding-interval: 25px;
}
```

Das erste `div` von links wird nicht mit spezifischen CSS-Regeln angesprochen, sodass es eine Standardhöhe von 100px hat.
Der CSS für `div` zwei, drei und vier ist unten gezeigt, welche aufruft, auf, ab, und zu-null, jeweils.

```css
div.box-2 {
  height: round(up, 101px, var(--rounding-interval));
}
div.box-3 {
  height: round(down, 122px, var(--rounding-interval));
}
div.box-4 {
  height: round(to-zero, 120px, var(--rounding-interval));
}
```

Beachten Sie, wie oben das Rundungsintervall unter Verwendung von `var()` und der benutzerdefinierten CSS-Eigenschaft `--rounding-interval` angegeben wird.

Das letzte Kästchen wird ohne Angabe einer Rundungsstrategie gesetzt und daher auf `nearest` zurückgesetzt.
In diesem Fall ist das nächstliegende Intervall zu 117 px 125px, sodass es aufgerundet wird.
Nur zum Vergleich haben wir hier feste Werte sowohl für den Rundungswert als auch für das Intervall angegeben.
Obwohl dies erlaubt ist, würden Sie das normalerweise nicht tun, da es keinen Sinn macht, eine Zahl zu runden, wenn das Ergebnis bereits bekannt ist.

```css
div.box-5 {
  height: round(117px, 25px);
}
```

#### Ergebnis

Wenn der Browser die CSS `round()` Funktion unterstützt, sollten Sie fünf Spalten mit Höhen sehen, die entsprechend dem darin enthaltenen Text gerundet sind.

{{EmbedLiveSample('Round positive values', '100%', '200px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("mod")}}
- {{CSSxRef("rem")}}
