---
title: round()
slug: Web/CSS/round
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`round()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) gibt eine gerundete Zahl basierend auf einer gewählten Rundungsstrategie zurück.

Autoren sollten eine [benutzerdefinierte CSS-Eigenschaft](/de/docs/Web/CSS/--*) (z.B. `--my-property`) für den Rundungswert, das Intervall oder beides verwenden; die Nutzung der `round()` Funktion ist überflüssig, wenn diese bekannte Werte haben.

## Syntax

```css
width: round(var(--width), 50px);
width: round(up, 101px, var(--interval));
width: round(down, var(--height), var(--interval));
margin: round(to-zero, -105px, 10px);
```

### Parameter

Die `round(<rounding-strategy>, valueToRound, roundingInterval)` Funktion spezifiziert eine optionale Rundungsstrategie, einen zu rundenden Wert (oder mathematischen Ausdruck) und ein Rundungsintervall (oder mathematischen Ausdruck).
Der `valueToRound` wird entsprechend der Rundungsstrategie auf das nächste ganzzahlige Vielfache von `roundingInterval` gerundet.

- `<rounding-strategy>`
  - : Die Rundungsstrategie.
    Dies kann einer der folgenden Werte sein:
    - `up`
      - : Rundet `valueToRound` auf das nächste ganzzahlige Vielfache von `roundingInterval` auf (wenn der Wert negativ ist, wird er "positiver"). Dies entspricht der JavaScript-Methode [`Math.ceil()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil).
    - `down`
      - : Rundet `valueToRound` auf das nächste ganzzahlige Vielfache von `roundingInterval` ab (wenn der Wert negativ ist, wird er "negativer"). Dies entspricht der JavaScript-Methode [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor).
    - `nearest` (Standard)
      - : Rundet `valueToRound` auf das nächstgelegene ganzzahlige Vielfache von `roundingInterval`, das entweder über oder unter dem Wert liegen kann.
        Wenn `valueToRound` genau zwischen den Rundungszielen oben und unten liegt (keines ist "näher"), wird es aufgerundet.
        Entspricht JavaScript [`Math.round()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round).
    - `to-zero`
      - : Rundet `valueToRound` auf das nächstgelegene ganzzahlige Vielfache von `roundingInterval` näher zur/zum null (eine positive Zahl verringert sich, während ein negativer Wert "weniger negativ" wird). Dies entspricht der JavaScript-Methode [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc).

- `valueToRound`
  - : Der zu rundende Wert.
    Dies muss eine {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, oder {{CSSxREF("&lt;percentage&gt;")}} sein, oder ein mathematischer Ausdruck, der zu einem dieser Werte führt.

- `roundingInterval`
  - : Das Rundungsintervall.
    Dies ist eine {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, oder {{CSSxREF("&lt;percentage&gt;")}} oder ein mathematischer Ausdruck, der zu einem dieser Werte führt. Wenn `valueToRound` eine {{CSSxREF("&lt;number&gt;")}} ist, kann `roundingInterval` weggelassen werden und standardmäßig auf `1` gesetzt werden. Andernfalls führt das Weglassen zu einem ungültigen Ausdruck.

### Rückgabewert

Der Wert von `valueToRound`, gerundet auf das nächste niedrigere oder höhere ganzzahlige Vielfache von `roundingInterval`, abhängig von der `rounding strategy`.

- Wenn `roundingInterval` 0 ist, ist das Ergebnis `NaN`.
- Wenn `valueToRound` und `roundingInterval` beide `unendlich` sind, ist das Ergebnis `NaN`.
- Wenn `valueToRound` unendlich ist, aber `roundingInterval` endlich ist, ist das Ergebnis dasselbe `unendlich`.
- Wenn `valueToRound` endlich ist, aber `roundingInterval` unendlich, hängt das Ergebnis von der Rundungsstrategie und dem Vorzeichen von `A` ab:
  - `up` - Wenn `valueToRound` positiv (nicht null) ist, geben Sie `+∞` zurück. Wenn `valueToRound` `0⁺` ist, geben Sie `0⁺` zurück. Andernfalls geben Sie `0⁻` zurück.
  - `down` - Wenn `valueToRound` negativ (nicht null) ist, geben Sie `−∞` zurück. Wenn `valueToRound` `0⁻` ist, geben Sie `0⁻` zurück. Andernfalls geben Sie `0⁺` zurück.
  - `nearest`, `to-zero` - Wenn `valueToRound` positiv oder `0⁺` ist, geben Sie `0⁺` zurück. Andernfalls geben Sie `0⁻` zurück.

- Die Berechnungen der Argumente können in {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, oder {{CSSxREF("&lt;percentage&gt;")}} aufgelöst werden, müssen jedoch denselben Typ haben, andernfalls ist die Funktion ungültig; das Ergebnis hat denselben Typ wie die Argumente.
- Wenn `valueToRound` genau einem ganzzahligen Vielfachen von `roundingInterval` entspricht, löst sich `round()` genau zu `valueToRound` auf (beibehaltend, ob `valueToRound` `0⁻` oder `0⁺` ist, falls relevant). Andernfalls gibt es zwei ganzzahlige Vielfache von `roundingInterval`, die potenziell "näher" an `valueToRound` liegen, niedriges `roundingInterval`, das näher an `−∞` ist, und hohes `roundingInterval`, das näher an `+∞` ist.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Runde positive Werte

Dieses Beispiel demonstriert, wie die Rundungsstrategien der `round()` Funktion für positive Werte funktionieren.

Von den fünf Boxen unten wird die `round()` Funktion verwendet, um die Höhe der letzten vier zu setzen.
Der zu rundende Wert liegt zwischen 100 px und 125 px in jedem Fall, und der Rundungswert ist 25px in allen Fällen.
Die Höhe der Boxen wird daher entweder auf 125 px aufgerundet oder auf 100 px abgerundet.

#### HTML

Das HTML definiert 5 `div` Elemente, die durch das CSS als Boxen gerendert werden.
Die Elemente enthalten Text, der die Rundungsstrategie, den Anfangswert und die erwartete endgültige Höhe der Box (in Klammern) angibt.

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

Das unten gezeigte CSS wird auf alle Boxen angewendet.
Beachten Sie, dass wir eine [benutzerdefinierte CSS-Eigenschaft](/de/docs/Web/CSS/--*) namens `--rounding-interval` anwenden, die wir für das Rundungsintervall verwenden werden.

```css
div.box {
  width: 100px;
  height: 100px;
  background: lightblue;
  --rounding-interval: 25px;
}
```

Die erste `div` von links wird nicht mit spezifischen CSS-Regeln angesprochen, daher hat sie standardmäßig eine Höhe von 100px.
Das CSS für `div` zwei, drei und vier wird unten gezeigt, das auf-, ab- und zu-null rundet.

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

Beachten Sie, wie oben das Rundungsintervall mit `var()` und der benutzerdefinierten CSS-Eigenschaft `--rounding-interval` angegeben wird.

Die letzte Box wird ohne Spezifikation einer Rundungsstrategie gesetzt und daher standardmäßig auf `nearest` gesetzt.
In diesem Fall ist das nächste Intervall zu 117 px 125px, also wird es aufgerundet.
Zum Kontrast haben wir hier feste Werte sowohl für den Rundungswert als auch das Intervall angegeben.
Obwohl dies erlaubt ist, würde man dies normalerweise nicht tun, da es keinen Sinn ergibt, eine Zahl zu runden, wenn Sie bereits wissen, was das Ergebnis sein muss.

```css
div.box-5 {
  height: round(117px, 25px);
}
```

#### Ergebnis

Wenn der Browser die CSS `round()` Funktion unterstützt, sollten Sie fünf Spalten mit Höhen sehen, die entsprechend dem enthaltenen Text gerundet sind.

{{EmbedLiveSample('Runde positive Werte', '100%', '200px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("mod")}}
- {{CSSxRef("rem")}}
