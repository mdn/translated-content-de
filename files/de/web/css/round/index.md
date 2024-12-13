---
title: round()
slug: Web/CSS/round
l10n:
  sourceCommit: 59daeda497a668b5480d4f6921eca04d01668697
---

{{CSSRef}}

Die **`round()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) gibt eine gerundete Zahl basierend auf einer ausgewählten Rundungsstrategie zurück.

Autoren sollten eine [benutzerdefinierte CSS-Eigenschaft](/de/docs/Web/CSS/--*) (z. B. `--my-property`) für den Rundungswert, das Intervall oder beides verwenden; die Verwendung der `round()`-Funktion ist überflüssig, wenn diese Werte bekannt sind.

## Syntax

```css
width: round(var(--width), 50px);
width: round(up, 101px, var(--interval));
width: round(down, var(--height), var(--interval));
margin: round(to-zero, -105px, 10px);
```

### Parameter

Die Funktion `round(<rounding-strategy>, valueToRound, roundingInterval)` gibt eine optionale Rundungsstrategie an, einen Wert (oder einen mathematischen Ausdruck), der gerundet werden soll, und ein Rundungsintervall (oder einen mathematischen Ausdruck).
Der `valueToRound` wird gemäß der Rundungsstrategie auf das nächste ganzzahlige Vielfache von `roundingInterval` gerundet.

- `<rounding-strategy>`

  - : Die Rundungsstrategie.
    Dies kann einer der folgenden Werte sein:

    - `up`
      - : Rundet `valueToRound` auf das nächste ganzzahlige Vielfache von `roundingInterval` auf (wenn der Wert negativ ist, wird er "positiver"). Dies entspricht der JavaScript-Methode [`Math.ceil()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil).
    - `down`
      - : Rundet `valueToRound` auf das nächste ganzzahlige Vielfache von `roundingInterval` ab (wenn der Wert negativ ist, wird er "negativer"). Dies entspricht der JavaScript-Methode [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor).
    - `nearest` (Standard)
      - : Rundet `valueToRound` auf das nächstgelegene ganzzahlige Vielfache von `roundingInterval`, das entweder über oder unter dem Wert liegen kann.
        Wenn `valueToRound` genau zwischen den Rundungszielen oben und unten liegt (keines ist "näher"), wird aufgerundet.
        Entspricht JavaScript [`Math.round()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round).
    - `to-zero`
      - : Rundet `valueToRound` auf das nächstgelegene ganzzahlige Vielfache von `roundingInterval` näher zu/gegen null (eine positive Zahl wird kleiner, während ein negativer Wert "weniger negativ" wird). Dies entspricht der JavaScript-Methode [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc).

- `valueToRound`

  - : Der zu rundende Wert.
    Dies muss ein {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, oder {{CSSxREF("&lt;percentage&gt;")}}, oder ein mathematischer Ausdruck sein, der sich zu einem dieser Werte auflöst.

- `roundingInterval`
  - : Das Rundungsintervall.
    Dies ist ein {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, oder {{CSSxREF("&lt;percentage&gt;")}}, oder ein mathematischer Ausdruck, der sich zu einem dieser Werte auflöst.

### Rückgabewert

Der Wert von `valueToRound`, gerundet auf das nächstniedrigere oder nächsthöhere ganzzahlige Vielfache von `roundingInterval`, je nach `rounding strategy`.

- Wenn `roundingInterval` 0 ist, ist das Ergebnis `NaN`.
- Wenn `valueToRound` und `roundingInterval` beide unendlich sind, ist das Ergebnis `NaN`.
- Wenn `valueToRound` unendlich, aber `roundingInterval` endlich ist, ist das Ergebnis dasselbe wie das `infinity`.
- Wenn `valueToRound` endlich, aber `roundingInterval` unendlich ist, hängt das Ergebnis von der Rundungsstrategie und dem Vorzeichen von `A` ab:

  - `up` - Wenn `valueToRound` positiv (nicht null) ist, wird `+∞` zurückgegeben. Wenn `valueToRound` `0⁺` ist, wird `0⁺` zurückgegeben. Andernfalls wird `0⁻` zurückgegeben.
  - `down` - Wenn `valueToRound` negativ (nicht null) ist, wird `−∞` zurückgegeben. Wenn `valueToRound` `0⁻` ist, wird `0⁻` zurückgegeben. Andernfalls wird `0⁺` zurückgegeben.
  - `nearest`, `to-zero` - Wenn `valueToRound` positiv oder `0⁺` ist, wird `0⁺` zurückgegeben. Andernfalls wird `0⁻` zurückgegeben.

- Die Berechnungen der Argumente können zu {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, oder {{CSSxREF("&lt;percentage&gt;")}} führen, müssen jedoch vom gleichen Typ sein, andernfalls ist die Funktion ungültig; das Ergebnis hat denselben Typ wie die Argumente.
- Wenn `valueToRound` genau einem ganzzahligen Vielfachen von `roundingInterval` entspricht, löst sich `round()` genau zu `valueToRound` auf (unter Beibehaltung, ob `valueToRound` `0⁻` oder `0⁺` ist, falls relevant). Andernfalls gibt es zwei ganzzahlige Vielfache von `roundingInterval`, die potenziell "näher" an `valueToRound` sind, das niedrigere `roundingInterval`, das näher an `−∞` liegt, und das höhere `roundingInterval`, das näher an `+∞` liegt.

### Formale Syntax

{{CSSSyntax}}

## Beispiele

### Positive Werte runden

Dieses Beispiel zeigt, wie die Rundungsstrategien der `round()`-Funktion für positive Werte funktionieren.

Von den fünf untenstehenden Boxen wird die `round()`-Funktion verwendet, um die Höhe der letzten vier festzulegen.
Der zu rundende Wert liegt in jedem Fall zwischen 100 px und 125 px, und der Rundungswert beträgt 25px in allen Fällen.
Die Höhe der Boxen wird daher entweder auf 125 px aufgerundet oder auf 100 px abgerundet.

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

Das auf alle Boxen angewendete CSS wird unten gezeigt.
Beachten Sie, dass wir eine [benutzerdefinierte CSS-Eigenschaft](/de/docs/Web/CSS/--*) mit dem Namen `--rounding-interval` anwenden, die wir für das Rundungsintervall verwenden werden.

```css
div.box {
  width: 100px;
  height: 100px;
  background: lightblue;
  --rounding-interval: 25px;
}
```

Das erste `div` von links wird nicht mit spezifischen CSS-Regeln angesprochen, sodass es eine Standardhöhe von 100px hat.
Das CSS für `div` zwei, drei und vier wird unten gezeigt, das aufrundet, abrundet und zu-null rundet.

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

Die letzte Box wird gesetzt, ohne eine Rundungsstrategie anzugeben, und verwendet daher standardmäßig `nearest`.
In diesem Fall ist das näheste Intervall zu 117 px 125px, daher wird es aufgerundet.
Nur zum Kontrast haben wir hier fest kodierte Werte sowohl für den Rundungswert als auch für das Intervall angegeben.
Obwohl dies erlaubt ist, würde man dies normalerweise nicht tun, da es keinen Sinn macht, eine Zahl zu runden, wenn man bereits weiß, wie das Ergebnis sein muss.

```css
div.box-5 {
  height: round(117px, 25px);
}
```

#### Ergebnis

Wenn der Browser die CSS-`round()`-Funktion unterstützt, sollten Sie fünf Spalten mit Höhen sehen, die entsprechend dem enthaltenen Text gerundet sind.

{{EmbedLiveSample('Round positive values', '100%', '200px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("mod")}}
- {{CSSxRef("rem")}}
