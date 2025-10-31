---
title: round()
slug: Web/CSS/round
l10n:
  sourceCommit: 55326f330a6ae829494c7606b1bd47b2c0f9d888
---

Die **`round()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) gibt eine gerundete Zahl basierend auf einer ausgewählten Rundungsstrategie zurück.

Autoren sollten eine [benutzerdefinierte CSS-Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) (z.B. `--my-property`) für den Rundungswert, das Intervall oder beides verwenden; die Nutzung der `round()` Funktion ist überflüssig, wenn diese Werte bekannt sind.

## Syntax

```css
width: round(var(--width), 50px);
width: round(up, 101px, var(--interval));
width: round(down, var(--height), var(--interval));
margin: round(to-zero, -105px, 10px);
```

### Parameter

Die Funktion `round(<rounding-strategy>, valueToRound, roundingInterval)` spezifiziert eine optionale Rundungsstrategie, einen zu rundenden Wert (oder mathematischen Ausdruck) und ein Rundungsintervall (oder mathematischen Ausdruck).
Der `valueToRound` wird entsprechend der Rundungsstrategie auf das nächstgelegene ganzzahlige Vielfache von `roundingInterval` gerundet.

- `<rounding-strategy>`
  - : Die Rundungsstrategie.
    Dies kann einer der folgenden Werte sein:
    - `up`
      - : Rundet `valueToRound` auf das nächstgelegene ganzzahlige Vielfache von `roundingInterval` nach oben (wenn der Wert negativ ist, wird er "positiver"). Dies entspricht der JavaScript-Methode [`Math.ceil()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil).
    - `down`
      - : Rundet `valueToRound` auf das nächstgelegene ganzzahlige Vielfache von `roundingInterval` nach unten (wenn der Wert negativ ist, wird er "negativer"). Dies entspricht der JavaScript-Methode [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor).
    - `nearest` (Standard)
      - : Rundet `valueToRound` auf das nächstgelegene ganzzahlige Vielfache von `roundingInterval`, welches entweder über oder unter dem Wert liegen kann.
        Wenn `valueToRound` genau in der Mitte der Rundungsziele oberhalb und unterhalb liegt (keines ist "näher"), wird nach oben gerundet.
        Entspricht JavaScript [`Math.round()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round).
    - `to-zero`
      - : Rundet `valueToRound` auf das nächstgelegene ganzzahlige Vielfache von `roundingInterval`, das näher zu/nach Null liegt (eine positive Zahl wird kleiner, während ein negativer Wert "weniger negativ" wird). Dies entspricht der JavaScript-Methode [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc).

- `valueToRound`
  - : Der zu rundende Wert.
    Dies muss eine {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, oder {{CSSxREF("&lt;percentage&gt;")}} sein oder ein mathematischer Ausdruck, der sich zu einem dieser Werte auflöst.

- `roundingInterval`
  - : Das Rundungsintervall.
    Dies ist eine {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, oder {{CSSxREF("&lt;percentage&gt;")}} oder ein mathematischer Ausdruck, der sich zu einem dieser Werte auflöst. Wenn `valueToRound` eine {{CSSxREF("&lt;number&gt;")}} ist, kann `roundingInterval` weggelassen werden und standardmäßig auf `1` gesetzt werden. Andernfalls führt das Weglassen zu einem ungültigen Ausdruck.

### Rückgabewert

Der Wert von `valueToRound`, gerundet auf das nächstgelegene niedrigere oder höhere ganzzahlige Vielfache von `roundingInterval`, abhängig von der `rounding strategy`.

- Wenn `roundingInterval` 0 ist, ist das Ergebnis `NaN`.
- Wenn `valueToRound` und `roundingInterval` beide `unendlich` sind, ist das Ergebnis `NaN`.
- Wenn `valueToRound` unendlich ist, aber `roundingInterval` endlich, ist das Ergebnis dieselbe `unendlichkeit`.
- Wenn `valueToRound` endlich ist, aber `roundingInterval` unendlich, hängt das Ergebnis von der Rundungsstrategie und dem Vorzeichen von `A` ab:
  - `up` - Wenn `valueToRound` positiv (nicht null) ist, geben Sie `+∞` zurück. Wenn `valueToRound` `0⁺` ist, geben Sie `0⁺` zurück. Andernfalls geben Sie `0⁻` zurück.
  - `down` - Wenn `valueToRound` negativ (nicht null) ist, geben Sie `−∞` zurück. Wenn `valueToRound` `0⁻` ist, geben Sie `0⁻` zurück. Andernfalls geben Sie `0⁺` zurück.
  - `nearest`, `to-zero` - Wenn `valueToRound` positiv oder `0⁺` ist, geben Sie `0⁺` zurück. Andernfalls geben Sie `0⁻` zurück.

- Die Argumentberechnungen können zu {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, oder {{CSSxREF("&lt;percentage&gt;")}} führen, müssen jedoch denselben Typ haben, sonst ist die Funktion ungültig; das Ergebnis hat denselben Typ wie die Argumente.
- Wenn `valueToRound` genau gleich einem ganzzahligen Vielfachen von `roundingInterval` ist, löst sich `round()` genau zu `valueToRound` auf (unter Beibehaltung dessen, ob `valueToRound` `0⁻` oder `0⁺` ist, falls relevant). Andernfalls gibt es zwei ganzzahlige Vielfache von `roundingInterval`, die potenziell "am nächsten" zu `valueToRound` sind, das niedrigere `roundingInterval`, das näher an `−∞` liegt, und das obere `roundingInterval`, das näher an `+∞` liegt.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Positive Werte runden

Dieses Beispiel zeigt, wie die `round()` Funktion bei positiven Werten arbeitet.

Von den fünf Boxen unten wird die `round()` Funktion verwendet, um die Höhe der letzten vier festzulegen.
Der zu rundende Wert liegt in jedem Fall zwischen 100 px und 125 px, und der Rundungswert beträgt in allen Fällen 25 px.
Die Höhe der Boxen wird daher entweder auf 125 px aufgerundet oder auf 100 px abgerundet.

#### HTML

Das HTML definiert 5 `div`-Elemente, die durch das CSS als Boxen dargestellt werden.
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
Beachten Sie, dass wir eine [benutzerdefinierte CSS-Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) namens `--rounding-interval` anwenden, die wir für das Rundungsintervall verwenden werden.

```css
div.box {
  width: 100px;
  height: 100px;
  background: lightblue;
  --rounding-interval: 25px;
}
```

Die erste `div` von links wird nicht mit spezifischen CSS-Regeln adressiert, daher hat sie eine Standardhöhe von 100px.
Das CSS für die zweite, dritte und vierte `div` ist unten gezeigt und rundet auf, ab und zu-null, jeweils.

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

Die letzte Box wird ohne eine spezifische Rundungsstrategie gesetzt und verwendet daher standardmäßig `nearest`.
In diesem Fall ist das nächstgelegene Intervall zu 117 px 125 px, sodass aufgerundet wird.
Nur zum Kontrast haben wir hier fest codierte Werte für den Rundungswert und das Intervall angegeben.
Obwohl dies zulässig ist, würde man dies normalerweise nicht tun, da es keinen Sinn macht, eine Zahl zu runden, wenn man bereits weiß, welches Ergebnis erzielt werden muss.

```css
div.box-5 {
  height: round(117px, 25px);
}
```

#### Ergebnis

Wenn der Browser die CSS-Funktion `round()` unterstützt, sollten Sie fünf Spalten mit Höhen sehen, die entsprechend dem enthaltenen Text gerundet sind.

{{EmbedLiveSample('Round positive values', '100%', '200px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("mod")}}
- {{CSSxRef("rem")}}
