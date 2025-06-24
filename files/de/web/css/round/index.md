---
title: round()
slug: Web/CSS/round
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`round()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) gibt eine gerundete Zahl basierend auf einer ausgewählten Rundungsstrategie zurück.

Autoren sollten eine [benutzerdefinierte CSS-Eigenschaft](/de/docs/Web/CSS/--*) (z. B. `--my-property`) für den Rundungswert, das Intervall oder beides verwenden; die Verwendung der `round()` Funktion ist überflüssig, wenn diese bekannte Werte haben.

## Syntax

```css
width: round(var(--width), 50px);
width: round(up, 101px, var(--interval));
width: round(down, var(--height), var(--interval));
margin: round(to-zero, -105px, 10px);
```

### Parameter

Die Funktion `round(<rounding-strategy>, valueToRound, roundingInterval)` spezifiziert eine optionale Rundungsstrategie, einen Wert (oder mathematischen Ausdruck), der gerundet werden soll, und ein Rundungsintervall (oder mathematischen Ausdruck).
Der `valueToRound` wird nach der Rundungsstrategie auf das nächstliegende ganzzahlige Vielfache von `roundingInterval` gerundet.

- `<rounding-strategy>`

  - : Die Rundungsstrategie.
    Dies kann einer der folgenden Werte sein:
    - `up`
      - : Rundet `valueToRound` auf das nächstliegende ganzzahlige Vielfache von `roundingInterval` auf (wenn der Wert negativ ist, wird er "positiver"). Dies entspricht der JavaScript-Methode [`Math.ceil()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil).
    - `down`
      - : Rundet `valueToRound` auf das nächstliegende ganzzahlige Vielfache von `roundingInterval` ab (wenn der Wert negativ ist, wird er "negativer"). Dies entspricht der JavaScript-Methode [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor).
    - `nearest` (Standard)
      - : Rundet `valueToRound` auf das nächstliegende ganzzahlige Vielfache von `roundingInterval`, das entweder über oder unter dem Wert liegen kann.
        Wenn `valueToRound` genau zwischen den Rundungszielen oberhalb und unterhalb liegt (keines ist "nächstliegend"), wird aufgerundet.
        Entspricht der JavaScript-Methode [`Math.round()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round).
    - `to-zero`
      - : Rundet `valueToRound` auf das nächstliegende ganzzahlige Vielfache von `roundingInterval` näher zu/gegenüber null (eine positive Zahl wird kleiner, während ein negativer Wert "weniger negativ" wird). Dies entspricht der JavaScript-Methode [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc).

- `valueToRound`

  - : Der zu rundende Wert.
    Dies muss eine {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}} oder {{CSSxREF("&lt;percentage&gt;")}}, oder ein mathematischer Ausdruck sein, der sich in einen dieser Werte auflöst.

- `roundingInterval`
  - : Das Rundungsintervall.
    Dies ist eine {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}} oder {{CSSxREF("&lt;percentage&gt;")}}, oder ein mathematischer Ausdruck, der sich in einen dieser Werte auflöst. Wenn `valueToRound` eine {{CSSxREF("&lt;number&gt;")}} ist, kann `roundingInterval` weggelassen werden und es wird auf `1` gesetzt. Andernfalls führt das Weglassen zu einem ungültigen Ausdruck.

### Rückgabewert

Der Wert von `valueToRound`, gerundet auf das nächstliegende niedrigere oder höhere ganzzahlige Vielfache von `roundingInterval`, abhängig von der `rounding strategy`.

- Wenn `roundingInterval` 0 ist, ist das Ergebnis `NaN`.
- Wenn `valueToRound` und `roundingInterval` beide unendlich sind, ist das Ergebnis `NaN`.
- Wenn `valueToRound` unendlich ist, aber `roundingInterval` endlich, ist das Ergebnis das gleiche `Unendlichkeit`.
- Wenn `valueToRound` endlich ist, aber `roundingInterval` unendlich, hängt das Ergebnis von der Rundungsstrategie und dem Vorzeichen von `A` ab:

  - `up` - Wenn `valueToRound` positiv (nicht null) ist, geben Sie `+∞` zurück. Wenn `valueToRound` `0⁺` ist, geben Sie `0⁺` zurück. Andernfalls geben Sie `0⁻` zurück.
  - `down` - Wenn `valueToRound` negativ (nicht null) ist, geben Sie `−∞` zurück. Wenn `valueToRound` `0⁻` ist, geben Sie `0⁻` zurück. Andernfalls geben Sie `0⁺` zurück.
  - `nearest`, `to-zero` - Wenn `valueToRound` positiv oder `0⁺` ist, geben Sie `0⁺` zurück. Andernfalls geben Sie `0⁻` zurück.

- Die Berechnungen der Argumente können sich in {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}} oder {{CSSxREF("&lt;percentage&gt;")}} auflösen, müssen jedoch den gleichen Typ haben, andernfalls ist die Funktion ungültig; das Ergebnis wird den gleichen Typ wie die Argumente haben.
- Wenn `valueToRound` genau einem ganzzahligen Vielfachen von `roundingInterval` entspricht, löst `round()` sich genau in `valueToRound` auf (erhält dabei, ob `valueToRound` `0⁻` oder `0⁺` ist, falls relevant). Andernfalls gibt es zwei ganzzahlige Vielfache von `roundingInterval`, die potenziell "am nächsten" zu `valueToRound` liegen, das niedrigere `roundingInterval`, das näher an `−∞` ist, und das obere `roundingInterval`, das näher an `+∞` ist.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Positive Werte runden

Dieses Beispiel demonstriert, wie die Rundungsstrategien der `round()` Funktion für positive Werte funktionieren.

Von den fünf Kästchen unten wird die `round()` Funktion verwendet, um die Höhe der letzten vier festzulegen.
Der zu rundende Wert liegt in jedem Fall zwischen 100 px und 125 px, und der Rundungswert beträgt in allen Fällen 25px.
Die Höhe der Kästchen wird daher entweder auf 125 px aufgerundet oder auf 100 px abgerundet.

#### HTML

Das HTML definiert 5 `div`-Elemente, die durch das CSS als Boxen gerendert werden.
Die Elemente enthalten Text, der die Rundungsstrategie, den Ausgangswert und die erwartete endgültige Höhe der Box (in Klammern) angibt.

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

Das erste `div` von links wird nicht mit spezifischen CSS-Regeln angesprochen, daher wird es eine Standardhöhe von 100px haben.
Das CSS für die `div` zwei, drei und vier ist unten gezeigt, das jeweils rundet, auf- und abrundet und zu-null rundet.

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

Beachten Sie, wie wir oben das Rundungsintervall mit `var()` und der benutzerdefinierten CSS-Eigenschaft `--rounding-interval` angeben.

Die letzte Box wird ohne Angabe einer Rundungsstrategie eingestellt und verwendet daher standardmäßig `nearest`.
In diesem Fall ist das nächstliegende Intervall zu 117 px 125px, daher wird es aufgerundet.
Nur zum Vergleich haben wir hier feste Werte sowohl für den Rundungswert als auch das Intervall angegeben.
Obwohl dies zulässig ist, würden Sie dies normalerweise nicht tun, da es keinen Sinn ergibt, eine Zahl zu runden, wenn Sie bereits wissen, was das Ergebnis sein muss.

```css
div.box-5 {
  height: round(117px, 25px);
}
```

#### Ergebnis

Wenn der Browser die CSS `round()` Funktion unterstützt, sollten Sie fünf Spalten sehen, deren Höhen gemäß dem enthaltenen Text gerundet sind.

{{EmbedLiveSample('Round positive values', '100%', '200px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("mod")}}
- {{CSSxRef("rem")}}
