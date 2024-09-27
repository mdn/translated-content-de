---
title: round()
slug: Web/CSS/round
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{CSSRef}}

Die **`round()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) gibt eine gerundete Zahl basierend auf einer gewählten Rundungsstrategie zurück.

Autoren sollten eine [benutzerdefinierte CSS-Eigenschaft](/de/docs/Web/CSS/--*) (z. B. `--my-property`) für den Rundungswert, das Intervall oder beides verwenden; die Verwendung der `round()` Funktion ist überflüssig, wenn diese bekannte Werte haben.

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
    Dies kann einer der folgenden Werte sein:

    - `up`
      - : Rundet `valueToRound` auf das nächst höhere ganzzahlige Vielfache von `roundingInterval` (wenn der Wert negativ ist, wird er "positiver"). Dies entspricht der JavaScript-Methode [`Math.ceil()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil).
    - `down`
      - : Rundet `valueToRound` auf das nächst niedrigere ganzzahlige Vielfache von `roundingInterval` (wenn der Wert negativ ist, wird er "negativer"). Dies entspricht der JavaScript-Methode [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor).
    - `nearest` (Standard)
      - : Rundet `valueToRound` auf das am nächsten gelegene ganzzahlige Vielfache von `roundingInterval`, das möglicherweise über oder unter dem Wert liegt.
        Wenn `valueToRound` genau zwischen den Rundungszielen darüber und darunter liegt (keines ist "nächstgelegen"), wird es aufgerundet.
        Entspricht JavaScript [`Math.round()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round).
    - `to-zero`
      - : Rundet `valueToRound` auf das nächstgelegene ganzzahlige Vielfache von `roundingInterval`, das näher an/nach null gerichtet ist (ein positiver Wert wird geringer, während ein negativer Wert "weniger negativ" wird). Dies entspricht der JavaScript-Methode [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc).

- `valueToRound`

  - : Der zu rundende Wert.
    Muss ein {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, oder {{CSSxREF("&lt;percentage&gt;")}} sein, oder ein mathematischer Ausdruck, der zu einem dieser Werte aufgelöst wird.

- `roundingInterval`
  - : Das Rundungsintervall.
    Dies ist ein {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, oder {{CSSxREF("&lt;percentage&gt;")}}, oder ein mathematischer Ausdruck, der zu einem dieser Werte aufgelöst wird.

### Rückgabewert

Der Wert von `valueToRound`, gerundet auf das nächst niedrigere oder höhere ganzzahlige Vielfache von `roundingInterval`, abhängig von der `rounding strategy`.

- Wenn `roundingInterval` 0 ist, ist das Ergebnis `NaN`.
- Wenn `valueToRound` und `roundingInterval` beide `unendlich` sind, ist das Ergebnis `NaN`.
- Wenn `valueToRound` unendlich ist, aber `roundingInterval` endlich, ist das Ergebnis dasselbe `unendlich`.
- Wenn `valueToRound` endlich ist, aber `roundingInterval` unendlich, hängt das Ergebnis von der Rundungsstrategie und dem Vorzeichen von `A` ab:

  - `up` - Wenn `valueToRound` positiv (nicht null) ist, wird `+∞` zurückgegeben. Wenn `valueToRound` `0⁺` ist, wird `0⁺` zurückgegeben. Andernfalls wird `0⁻` zurückgegeben.
  - `down` - Wenn `valueToRound` negativ (nicht null) ist, wird `−∞` zurückgegeben. Wenn `valueToRound` `0⁻` ist, wird `0⁻` zurückgegeben. Andernfalls wird `0⁺` zurückgegeben.
  - `nearest`, `to-zero` - Wenn `valueToRound` positiv oder `0⁺` ist, wird `0⁺` zurückgegeben. Andernfalls wird `0⁻` zurückgegeben.

- Die Berechnungen der Argumente können zu {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, oder {{CSSxREF("&lt;percentage&gt;")}} aufgelöst werden, müssen aber denselben Typ haben, sonst ist die Funktion ungültig; das Ergebnis hat denselben Typ wie die Argumente.
- Wenn `valueToRound` exakt gleich einem ganzzahligen Vielfachen von `roundingInterval` ist, löst sich `round()` genau zu `valueToRound` auf (unter Beibehaltung, ob `valueToRound` `0⁻` oder `0⁺` ist, falls relevant). Andernfalls gibt es zwei ganzzahlige Vielfache von `roundingInterval`, die potenziell "am nächsten" zu `valueToRound` sind, niedrigere `roundingInterval`, die näher an `−∞` sind, und obere `roundingInterval`, die näher an `+∞` sind.

### Formale Syntax

{{CSSSyntax}}

## Beispiele

### Positive Werte runden

Dieses Beispiel zeigt, wie die Rundungsstrategien der `round()` Funktion für positive Werte funktionieren.

Von den fünf Kästchen unten wird die `round()` Funktion verwendet, um die Höhe der letzten vier zu setzen.
Der zu rundende Wert liegt in jedem Fall zwischen 100 px und 125 px, und der Rundungswert beträgt in allen Fällen 25px.
Die Höhe der Kästchen wird daher entweder auf 125 px aufgerundet oder auf 100 px abgerundet.

#### HTML

Das HTML definiert 5 `div` Elemente, die durch das CSS als Kästchen gerendert werden.
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

Das CSS, das auf alle Kästchen angewendet wird, ist unten gezeigt.
Beachten Sie, dass wir eine [benutzerdefinierte CSS-Eigenschaft](/de/docs/Web/CSS/--*) namens `--rounding-interval` anwenden, die wir für das Rundungsintervall verwenden werden.

```css
div.box {
  width: 100px;
  height: 100px;
  background: lightblue;
  padding: 5px;
  --rounding-interval: 25px;
}
```

Das erste `div` von links wird nicht mit spezifischen CSS-Regeln angesprochen, daher hat es eine Standardhöhe von 100px.
Das CSS für `div` zwei, drei und vier wird unten gezeigt, das jeweils auf, ab und zu null rundet.

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

Das letzte Kästchen wird ohne Angabe einer Rundungsstrategie festgelegt und wird daher standardmäßig auf `nearest` gesetzt.
In diesem Fall ist das nächstgelegene Intervall zu 117 px 125px, sodass es aufgerundet wird.
Nur zum Vergleich haben wir hier hart kodierte Werte für sowohl den Rundungswert als auch das Intervall angegeben.
Obwohl dies zulässig ist, würden Sie dies normalerweise nicht tun, da es keinen Sinn macht, eine Zahl zu runden, wenn Sie bereits wissen, was das Ergebnis sein muss.

```css
div.box-5 {
  height: round(117px, 25px);
}
```

#### Ergebnis

Wenn der Browser die CSS `round()` Funktion unterstützt, sollten fünf Spalten mit Höhen angezeigt werden, die wie durch ihren enthaltenen Text angegeben gerundet sind.

{{EmbedLiveSample('Round positive values', '100%', '200px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("mod")}}
- {{CSSxRef("rem")}}
