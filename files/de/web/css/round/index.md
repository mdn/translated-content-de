---
title: round()
slug: Web/CSS/round
l10n:
  sourceCommit: 5af076670ab04354a191d3fd873507a1e7ef227e
---

{{CSSRef}}

Die **`round()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) gibt eine gerundete Zahl basierend auf einer ausgewählten Rundungsstrategie zurück.

Autoren sollten eine [benutzerdefinierte CSS-Eigenschaft](/de/docs/Web/CSS/--*) (z.B. `--my-property`) für den Rundungswert, das Intervall oder beides verwenden. Die Verwendung der `round()`-Funktion ist überflüssig, wenn diese bekannte Werte haben.

## Syntax

```css
width: round(var(--width), 50px);
width: round(up, 101px, var(--interval));
width: round(down, var(--height), var(--interval));
margin: round(to-zero, -105px, 10px);
```

### Parameter

Die `round(<rounding-strategy>, valueToRound, roundingInterval)` Funktion spezifiziert eine optionale Rundungsstrategie, einen zu rundenden Wert (oder mathematischen Ausdruck) und ein Rundungsintervall (oder mathematischen Ausdruck).
Der `valueToRound` wird gemäß der Rundungsstrategie auf das nächstgelegene ganzzahlige Vielfache von `roundingInterval` gerundet.

- `<rounding-strategy>`

  - : Die Rundungsstrategie.
    Diese kann einer der folgenden Werte sein:

    - `up`
      - : Rundet `valueToRound` auf das nächstgelegene ganzzahlige Vielfache von `roundingInterval` nach oben (wenn der Wert negativ ist, wird er "mehr positiv"). Dies entspricht der JavaScript-Methode [`Math.ceil()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil).
    - `down`
      - : Rundet `valueToRound` auf das nächstgelegene ganzzahlige Vielfache von `roundingInterval` nach unten (wenn der Wert negativ ist, wird er "mehr negativ"). Dies entspricht der JavaScript-Methode [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor).
    - `nearest` (Standard)
      - : Rundet `valueToRound` auf das nächstgelegene ganzzahlige Vielfache von `roundingInterval`, das entweder obendrauf oder darunter liegen kann.
        Ist `valueToRound` genau zwischen den Rundungszielen oben und unten, wird er nach oben gerundet.
        Entspricht JavaScript [`Math.round()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round).
    - `to-zero`
      - : Rundet `valueToRound` auf das nächstgelegene ganzzahlige Vielfache von `roundingInterval`, das näher an null liegt (eine positive Zahl wird kleiner, während ein negativer Wert "weniger negativ" wird). Dies entspricht der JavaScript-Methode [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc).

- `valueToRound`

  - : Der zu rundende Wert.
    Dies muss eine {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, oder {{CSSxREF("&lt;percentage&gt;")}} sein, oder ein mathematischer Ausdruck, der sich zu einem dieser Werte auflöst.

- `roundingInterval`
  - : Das Rundungsintervall.
    Dies ist eine {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, oder {{CSSxREF("&lt;percentage&gt;")}}, oder ein mathematischer Ausdruck, der sich zu einem dieser Werte auflöst. Wenn `valueToRound` eine {{CSSxREF("&lt;number&gt;")}} ist, kann `roundingInterval` weggelassen werden und standardmäßig auf `1` gesetzt werden. Ansonsten führt das Weglassen zu einem ungültigen Ausdruck.

### Rückgabewert

Der Wert von `valueToRound`, gerundet auf das nächstgelegene niedrigere oder höhere ganze Vielfache von `roundingInterval`, je nach Rundungsstrategie.

- Wenn `roundingInterval` 0 ist, ist das Ergebnis `NaN`.
- Wenn `valueToRound` und `roundingInterval` beide unendlich sind, ist das Ergebnis `NaN`.
- Wenn `valueToRound` unendlich ist, aber `roundingInterval` endlich, ist das Ergebnis das gleiche `Unendlich`.
- Wenn `valueToRound` endlich ist, aber `roundingInterval` unendlich, hängt das Ergebnis von der Rundungsstrategie und dem Vorzeichen von `A` ab:

  - `up` - Wenn `valueToRound` positiv ist (nicht null), wird `+∞` zurückgegeben. Wenn `valueToRound` `0⁺` ist, wird `0⁺` zurückgegeben. Andernfalls wird `0⁻` zurückgegeben.
  - `down` - Wenn `valueToRound` negativ ist (nicht null), wird `−∞` zurückgegeben. Wenn `valueToRound` `0⁻` ist, wird `0⁻` zurückgegeben. Andernfalls wird `0⁺` zurückgegeben.
  - `nearest`, `to-zero` - Wenn `valueToRound` positiv oder `0⁺` ist, wird `0⁺` zurückgegeben. Andernfalls wird `0⁻` zurückgegeben.

- Die Berechnungen der Argumente können sich zu {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, oder {{CSSxREF("&lt;percentage&gt;")}} auflösen, müssen jedoch denselben Typ haben, sonst ist die Funktion ungültig; das Ergebnis hat denselben Typ wie die Argumente.
- Wenn `valueToRound` genau einem ganzzahligen Vielfachen von `roundingInterval` entspricht, löst sich `round()` exakt zu `valueToRound` auf (unter Beibehaltung, ob `valueToRound` `0⁻` oder `0⁺` ist, falls relevant). Andernfalls gibt es zwei ganzzahlige Vielfache von `roundingInterval`, die potenziell "näher" an `valueToRound` liegen, ein niedrigeres `roundingInterval`, das näher bei `−∞` liegt, und ein höheres `roundingInterval`, das näher bei `+∞` liegt.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Positive Werte runden

Dieses Beispiel demonstriert, wie die Rundungsstrategien der `round()`-Funktion für positive Werte funktionieren.

Von den fünf Boxen unten wird die `round()`-Funktion verwendet, um die Höhe der letzten vier festzulegen.
Der zu rundende Wert liegt in jedem Fall zwischen 100 px und 125 px, und der Rundungswert beträgt in allen Fällen 25 px.
Die Höhe der Boxen wird daher entweder auf 125 px aufgerundet oder auf 100 px abgerundet.

#### HTML

Das HTML definiert 5 `div`-Elemente, die durch das CSS als Boxen dargestellt werden.
Die Elemente enthalten Text, der die Rundungsstrategie, den Anfangswert und die erwartete finale Höhe der Box (in Klammern) angibt.

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

Das CSS, das auf alle Boxen angewendet wird, ist unten dargestellt.
Beachten Sie, dass wir eine [benutzerdefinierte CSS-Eigenschaft](/de/docs/Web/CSS/--*) namens `--rounding-interval` anwenden, die wir für das Rundungsintervall verwenden werden.

```css
div.box {
  width: 100px;
  height: 100px;
  background: lightblue;
  --rounding-interval: 25px;
}
```

Das erste `div` von links wird nicht mit spezifischen CSS-Regeln angesprochen, sodass es eine Standardhöhe von 100px hat.
Das CSS für das zweite, dritte und vierte `div` wird unten gezeigt, welches jeweils nach oben, nach unten und auf null rundet.

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

Die letzte Box wird ohne Angabe einer Rundungsstrategie eingestellt und verwendet daher standardmäßig `nearest`.
In diesem Fall befindet sich das nächste Intervall zu 117 px bei 125 px, sodass aufgerundet wird.
Nur zum Kontrast sind hier fest codierte Werte sowohl für den Rundungswert als auch für das Intervall angegeben.
Obwohl dies zulässig ist, würden Sie dies normalerweise nicht tun, da es keinen Sinn ergibt, eine Zahl zu runden, wenn Sie das Ergebnis bereits kennen müssen.

```css
div.box-5 {
  height: round(117px, 25px);
}
```

#### Ergebnis

Wenn der Browser die CSS `round()`-Funktion unterstützt, sollten Sie fünf Spalten mit Höhen sehen, die wie im enthaltenen Text angegeben gerundet sind.

{{EmbedLiveSample('Runde positive Werte', '100%', '200px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("mod")}}
- {{CSSxRef("rem")}}
