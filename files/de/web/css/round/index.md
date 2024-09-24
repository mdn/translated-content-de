---
title: round()
slug: Web/CSS/round
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{CSSRef}}

Die **`round()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) gibt eine gerundete Zahl basierend auf einer gewählten Rundungsstrategie zurück.

Autoren sollten eine [benutzerdefinierte CSS-Eigenschaft](/de/docs/Web/CSS/--*) (z.B. `--my-property`) für den Rundungswert, das Intervall oder beides verwenden; die Verwendung der `round()` Funktion ist redundant, wenn diese bekannte Werte haben.

## Syntax

```css
width: round(var(--width), 50px);
width: round(up, 101px, var(--interval));
width: round(down, var(--height), var(--interval));
margin: round(to-zero, -105px, 10px);
```

### Parameter

Die `round(<rounding-strategy>, valueToRound, roundingInterval)` Funktion spezifiziert eine optionale Rundungsstrategie, einen Wert (oder mathematischen Ausdruck), der gerundet werden soll, und ein Rundungsintervall (oder mathematischen Ausdruck).
Der `valueToRound` wird entsprechend der Rundungsstrategie auf das nächstgelegene ganzzahlige Vielfache von `roundingInterval` gerundet.

- `<rounding-strategy>`

  - : Die Rundungsstrategie.
    Diese kann einen der folgenden Werte haben:

    - `up`
      - : Rundet `valueToRound` auf zum nächstgelegenen ganzzahligen Vielfachen von `roundingInterval` (wenn der Wert negativ ist, wird er "positiver"). Dies entspricht der JavaScript-Methode [`Math.ceil()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil).
    - `down`
      - : Rundet `valueToRound` ab zum nächstgelegenen ganzzahligen Vielfachen von `roundingInterval` (wenn der Wert negativ ist, wird er "negativer"). Dies entspricht der JavaScript-Methode [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor).
    - `nearest` (Standardwert)
      - : Rundet `valueToRound` auf das nächstgelegene ganzzahlige Vielfache von `roundingInterval`, das entweder oberhalb oder unterhalb des Wertes liegen kann.
        Wenn `valueToRound` genau zwischen den Rundungszielen oben und unten liegt (keines ist "nächstgelegen"), wird aufgerundet.
        Entspricht dem JavaScript [`Math.round()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round).
    - `to-zero`
      - : Rundet `valueToRound` auf das nächstgelegene ganzzahlige Vielfache von `roundingInterval` in Richtung null (eine positive Zahl wird verkleinert, während ein negativer Wert "weniger negativ" wird). Dies entspricht der JavaScript-Methode [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc).

- `valueToRound`

  - : Der zu rundende Wert.
    Dies muss eine {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, oder {{CSSxREF("&lt;percentage&gt;")}}, oder ein mathematischer Ausdruck, der sich zu einem dieser Werte auflöst, sein.

- `roundingInterval`
  - : Das Rundungsintervall.
    Dies ist eine {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, oder {{CSSxREF("&lt;percentage&gt;")}}, oder ein mathematischer Ausdruck, der sich zu einem dieser Werte auflöst.

### Rückgabewert

Der Wert von `valueToRound`, gerundet auf das nächsthöhere oder nächstniedrigere ganzzahlige Vielfache von `roundingInterval`, abhängig von der `rounding strategy`.

- Wenn `roundingInterval` 0 ist, ist das Ergebnis `NaN`.
- Wenn `valueToRound` und `roundingInterval` beide unendlich sind, ist das Ergebnis `NaN`.
- Wenn `valueToRound` unendlich ist, aber `roundingInterval` endlich, ist das Ergebnis die gleiche `Unendlichkeit`.
- Wenn `valueToRound` endlich ist, aber `roundingInterval` unendlich, hängt das Ergebnis von der Rundungsstrategie und dem Vorzeichen von `A` ab:

  - `up` - Wenn `valueToRound` positiv ist (nicht null), geben Sie `+∞` zurück. Wenn `valueToRound` `0⁺` ist, geben Sie `0⁺` zurück. Andernfalls geben Sie `0⁻` zurück.
  - `down` - Wenn `valueToRound` negativ ist (nicht null), geben Sie `−∞` zurück. Wenn `valueToRound` `0⁻` ist, geben Sie `0⁻` zurück. Andernfalls geben Sie `0⁺` zurück.
  - `nearest`, `to-zero` - Wenn `valueToRound` positiv oder `0⁺` ist, geben Sie `0⁺` zurück. Andernfalls geben Sie `0⁻` zurück.

- Die Argumentberechnungen können sich zu {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, oder {{CSSxREF("&lt;percentage&gt;")}} auflösen, müssen jedoch vom gleichen Typ sein, sonst ist die Funktion ungültig; das Ergebnis hat denselben Typ wie die Argumente.
- Wenn `valueToRound` genau gleich einem ganzzahligen Vielfachen von `roundingInterval` ist, löst `round()` sich genau zu `valueToRound` auf (unter Beibehaltung, ob `valueToRound` `0⁻` oder `0⁺` ist, falls relevant). Andernfalls gibt es zwei ganzzahlige Vielfache von `roundingInterval`, die potenziell "nächstgelegen" zu `valueToRound` sind, das niedrigere `roundingInterval`, das näher an `−∞` liegt, und das höhere `roundingInterval`, das näher an `+∞` liegt.

### Formale Syntax

{{CSSSyntax}}

## Beispiele

### Positive Werte runden

Dieses Beispiel zeigt, wie die Rundungsstrategien der `round()` Funktion für positive Werte funktionieren.

Von den fünf unteren Kästchen wird die `round()` Funktion verwendet, um die Höhe der letzten vier festzulegen.
Der zu rundende Wert liegt in jedem Fall zwischen 100 px und 125 px, und der Rundungswert beträgt in allen Fällen 25px.
Die Höhe der Kästchen wird daher entweder auf 125 px auf- oder auf 100 px abgerundet.

#### HTML

Das HTML definiert 5 `div`-Elemente, die durch CSS als Kästchen gerendert werden.
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

Das CSS, das auf alle Kästchen angewendet wird, wird unten gezeigt.
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
Das CSS für das zweite, dritte und vierte `div` wird unten gezeigt, das jeweils runden, auf-, ab- und auf null runden.

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

Das letzte Kästchen wird ohne Angabe einer Rundungsstrategie gesetzt und verwendet daher standardmäßig `nearest`.
In diesem Fall ist das nächstgelegene Intervall zu 117 px 125px, sodass es aufgerundet wird.
Nur zum Kontrast haben wir hier fest codierte Werte sowohl für den Rundungswert als auch für das Intervall angegeben.
Obwohl dies erlaubt ist, würden Sie dies normalerweise nicht tun, da es keinen Sinn macht, eine Zahl zu runden, wenn Sie bereits wissen, was das Ergebnis sein muss.

```css
div.box-5 {
  height: round(117px, 25px);
}
```

#### Ergebnis

Wenn der Browser die CSS-`round()` Funktion unterstützt, sollten Sie fünf Spalten mit Höhen sehen, die gemäß dem in ihrem Text angegebenen abgerundet sind.

{{EmbedLiveSample('Round positive values', '100%', '200px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("mod")}}
- {{CSSxRef("rem")}}
