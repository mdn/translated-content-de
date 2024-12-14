---
title: round()
slug: Web/CSS/round
l10n:
  sourceCommit: 802978f38824a4132b4f9b3d3c23fb6970beba74
---

{{CSSRef}}

Die **`round()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) gibt eine gerundete Zahl basierend auf einer ausgewählten Rundungsstrategie zurück.

Autoren sollten eine [benutzerdefinierte CSS-Eigenschaft](/de/docs/Web/CSS/--*) (z. B. `--my-property`) für den Rundungswert, das Intervall oder beides verwenden; die Nutzung der `round()` Funktion ist überflüssig, wenn diese Werte bekannt sind.

## Syntax

```css
width: round(var(--width), 50px);
width: round(up, 101px, var(--interval));
width: round(down, var(--height), var(--interval));
margin: round(to-zero, -105px, 10px);
```

### Parameter

Die Funktion `round(<rounding-strategy>, valueToRound, roundingInterval)` gibt eine optionale Rundungsstrategie an, einen zu rundenden Wert (oder mathematischen Ausdruck) und ein Rundungsintervall (oder mathematischen Ausdruck).
Der `valueToRound` wird gemäß der Rundungsstrategie zum nächsten ganzzahligen Vielfachen von `roundingInterval` gerundet.

- `<rounding-strategy>`

  - : Die Rundungsstrategie.
    Dies kann einer der folgenden Werte sein:

    - `up`
      - : Rundet `valueToRound` auf das nächsthöhere ganzzahlige Vielfache von `roundingInterval` (wenn der Wert negativ ist, wird er "positiver"). Dies entspricht der JavaScript-Methode [`Math.ceil()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil).
    - `down`
      - : Rundet `valueToRound` auf das nächstniedrigere ganzzahlige Vielfache von `roundingInterval` (wenn der Wert negativ ist, wird er "negativer"). Dies entspricht der JavaScript-Methode [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor).
    - `nearest` (Standard)
      - : Rundet `valueToRound` auf das nächstgelegene ganzzahlige Vielfache von `roundingInterval`, das entweder über oder unter dem Wert liegen kann.
        Wenn `valueToRound` genau zwischen den Rundungszielen oberhalb und unterhalb liegt (keines ist "näher"), wird aufgerundet.
        Entspricht JavaScript [`Math.round()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round).
    - `to-zero`
      - : Rundet `valueToRound` auf das nächstgelegene ganzzahlige Vielfache von `roundingInterval`, das näher zu/null geht (eine positive Zahl verringert sich, während ein negativer Wert "weniger negativ" wird). Dies entspricht der JavaScript-Methode [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc).

- `valueToRound`

  - : Der zu rundende Wert.
    Dies muss ein {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, oder {{CSSxREF("&lt;percentage&gt;")}}, oder ein mathematischer Ausdruck sein, der sich in einen dieser Werte auflöst.

- `roundingInterval`
  - : Das Rundungsintervall.
    Dies ist ein {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, oder {{CSSxREF("&lt;percentage&gt;")}}, oder ein mathematischer Ausdruck, der sich in einen dieser Werte auflöst.

### Rückgabewert

Der Wert von `valueToRound`, gerundet auf das nächste tiefere oder höhere ganzzahlige Vielfache von `roundingInterval`, abhängig von der `rounding strategy`.

- Wenn `roundingInterval` 0 ist, ist das Ergebnis `NaN`.
- Wenn `valueToRound` und `roundingInterval` beide `unendlich` sind, ist das Ergebnis `NaN`.
- Wenn `valueToRound` unendlich, aber `roundingInterval` endlich ist, ist das Ergebnis das gleiche `Unendlich`.
- Wenn `valueToRound` endlich, aber `roundingInterval` unendlich ist, hängt das Ergebnis von der Rundungsstrategie und dem Vorzeichen von `A` ab:

  - `up` - Wenn `valueToRound` positiv (nicht null) ist, geben Sie `+∞` zurück. Wenn `valueToRound` `0⁺` ist, geben Sie `0⁺` zurück. Andernfalls geben Sie `0⁻` zurück.
  - `down` - Wenn `valueToRound` negativ (nicht null) ist, geben Sie `−∞` zurück. Wenn `valueToRound` `0⁻` ist, geben Sie `0⁻` zurück. Andernfalls geben Sie `0⁺` zurück.
  - `nearest`, `to-zero` - Wenn `valueToRound` positiv oder `0⁺` ist, geben Sie `0⁺` zurück. Andernfalls geben Sie `0⁻` zurück.

- Die Argumentberechnungen können sich in {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, oder {{CSSxREF("&lt;percentage&gt;")}} auflösen, müssen jedoch denselben Typ haben, andernfalls ist die Funktion ungültig; das Ergebnis wird denselben Typ wie die Argumente haben.
- Wenn `valueToRound` genau einem ganzzahligen Vielfachen von `roundingInterval` entspricht, löst sich `round()` genau in `valueToRound` auf (wobei beibehalten wird, ob `valueToRound` `0⁻` oder `0⁺` ist, falls relevant). Andernfalls gibt es zwei ganzzahlige Vielfache von `roundingInterval`, die potenziell "am nächsten" zu `valueToRound` liegen, ein niedrigeres `roundingInterval`, das näher zu `−∞` ist, und ein höheres `roundingInterval`, das näher zu `+∞` ist.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Positive Werte runden

Dieses Beispiel demonstriert, wie die `round()` Funktion Rundungsstrategien für positive Werte anwendet.

Von den fünf Kästchen unten wird die `round()` Funktion verwendet, um die Höhe der letzten vier festzulegen.
Der zu rundende Wert liegt jeweils zwischen 100 px und 125 px, und der Rundungswert ist in allen Fällen 25px.
Die Höhe der Kästchen wird daher entweder auf 125 px aufgerundet oder auf 100 px abgerundet.

#### HTML

Das HTML definiert 5 `div` Elemente, die von der CSS als Kästchen gerendert werden.
Die Elemente enthalten Text, der die Rundungsstrategie, den Anfangswert und die erwartete endgültige Höhe des Kästchens (in Klammern) angibt.

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

Der CSS, der auf alle Kästchen angewendet wird, ist unten gezeigt.
Beachten Sie, dass wir eine [benutzerdefinierte CSS-Eigenschaft](/de/docs/Web/CSS/--*) namens `--rounding-interval` anwenden, die wir für das Rundungsintervall verwenden werden.

```css
div.box {
  width: 100px;
  height: 100px;
  background: lightblue;
  --rounding-interval: 25px;
}
```

Das erste `div` von links wird nicht mit spezifischen CSS-Regeln angesprochen, sodass es eine Standardhöhe von 100px haben wird.
Der CSS für `div` zwei, drei und vier wird unten gezeigt, die nach oben, unten und zur Null runden.

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

Das letzte Kästchen wird ohne eine Rundungsstrategie festgelegt und daher wird `nearest` als Standard verwendet.
In diesem Fall ist das nächstgelegene Intervall zu 117 px 125px, daher wird es aufgerundet.
Nur zum Kontrast haben wir hier harte Werte für sowohl den Rundungswert als auch das Intervall angegeben.
Während dies erlaubt ist, würden Sie dies normalerweise nicht tun, da es keinen Sinn ergibt, eine Zahl zu runden, wenn Sie bereits wissen, was das Ergebnis sein muss.

```css
div.box-5 {
  height: round(117px, 25px);
}
```

#### Ergebnis

Wenn der Browser die CSS `round()` Funktion unterstützt, sollten Sie fünf Spalten sehen mit Höhen, die entsprechend dem enthaltenen Text gerundet sind.

{{EmbedLiveSample('Round positive values', '100%', '200px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("mod")}}
- {{CSSxRef("rem")}}
