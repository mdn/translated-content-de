---
title: CSS-Funktion `round()`
short-title: round()
slug: Web/CSS/Reference/Values/round
l10n:
  sourceCommit: a23122d0e86fb376234614beb5b350b217068054
---

Die [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) **`round()`** gibt eine gerundete Zahl basierend auf einer ausgewählten Rundungsstrategie zurück.

Autoren sollten für den Rundungswert, das Intervall oder beides eine [benutzerdefinierte CSS-Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) (z. B. `--my-property`) verwenden; die Verwendung der Funktion `round()` ist überflüssig, wenn diese bekannte Werte haben.

## Syntax

```css
width: round(var(--width), 50px);
width: round(up, 101px, var(--interval));
width: round(down, var(--height), var(--interval));
margin: round(to-zero, -105px, 10px);
```

### Parameter

Die Funktion `round(<rounding-strategy>, valueToRound, roundingInterval)` legt eine optionale Rundungsstrategie, einen zu rundenden Wert (oder mathematischen Ausdruck) und ein Rundungsintervall (oder einen mathematischen Ausdruck) fest.
`valueToRound` wird gemäß der Rundungsstrategie auf das nächste ganzzahlige Vielfache von `roundingInterval` gerundet.

- `<rounding-strategy>`
  - : Die Rundungsstrategie.
    Dies kann einer der folgenden Werte sein:
    - `up`
      - : Rundet `valueToRound` auf das nächste höhere ganzzahlige Vielfache von `roundingInterval` auf (ist der Wert negativ, wird er „positiver“). Dies entspricht der JavaScript-Methode [`Math.ceil()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil).
    - `down`
      - : Rundet `valueToRound` auf das nächste niedrigere ganzzahlige Vielfache von `roundingInterval` ab (ist der Wert negativ, wird er „negativer“). Dies entspricht der JavaScript-Methode [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor).
    - `nearest` (Standard)
      - : Rundet `valueToRound` auf das nächste ganzzahlige Vielfache von `roundingInterval`, das entweder über oder unter dem Wert liegen kann.
        Wenn `valueToRound` genau in der Mitte zwischen den Rundungszielen darüber und darunter liegt (keines von beiden ist „näher“), wird aufgerundet.
        Entspricht JavaScript [`Math.round()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round).
    - `to-zero`
      - : Rundet `valueToRound` auf das nächste ganzzahlige Vielfache von `roundingInterval`, das näher bei bzw. in Richtung null liegt (eine positive Zahl wird kleiner, während ein negativer Wert „weniger negativ“ wird). Dies entspricht der JavaScript-Methode [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc).

- `valueToRound`
  - : Der zu rundende Wert.
    Dies muss ein {{CSSxREF("&lt;number&gt;")}}, ein {{CSSxREF("&lt;dimension&gt;")}}, ein {{CSSxREF("&lt;percentage&gt;")}} oder ein mathematischer Ausdruck sein, der zu einem dieser Werte aufgelöst wird.

- `roundingInterval`
  - : Das Rundungsintervall.
    Dies ist ein {{CSSxREF("&lt;number&gt;")}}, ein {{CSSxREF("&lt;dimension&gt;")}}, ein {{CSSxREF("&lt;percentage&gt;")}} oder ein mathematischer Ausdruck, der zu einem dieser Werte aufgelöst wird. Wenn `valueToRound` ein {{CSSxREF("&lt;number&gt;")}} ist, kann `roundingInterval` weggelassen werden und hat dann standardmäßig den Wert `1`. Andernfalls führt das Weglassen zu einem ungültigen Ausdruck.

### Rückgabewert

Der Wert von `valueToRound`, auf das nächste niedrigere oder höhere ganzzahlige Vielfache von `roundingInterval` gerundet, abhängig von der `rounding strategy`.

- Wenn `roundingInterval` 0 ist, lautet das Ergebnis `NaN`.
- Wenn `valueToRound` und `roundingInterval` beide `infinite` sind, lautet das Ergebnis `NaN`.
- Wenn `valueToRound` unendlich, `roundingInterval` jedoch endlich ist, entspricht das Ergebnis derselben `infinity`.
- Wenn `valueToRound` endlich, `roundingInterval` jedoch unendlich ist, hängt das Ergebnis von der Rundungsstrategie und dem Vorzeichen von `A` ab:
  - `up` – Wenn `valueToRound` positiv (und nicht null) ist, geben Sie `+∞` zurück. Wenn `valueToRound` `0⁺` ist, geben Sie `0⁺` zurück. Andernfalls geben Sie `0⁻` zurück.
  - `down` – Wenn `valueToRound` negativ (und nicht null) ist, geben Sie `−∞` zurück. Wenn `valueToRound` `0⁻` ist, geben Sie `0⁻` zurück. Andernfalls geben Sie `0⁺` zurück.
  - `nearest`, `to-zero` – Wenn `valueToRound` positiv oder `0⁺` ist, geben Sie `0⁺` zurück. Andernfalls geben Sie `0⁻` zurück.

- Die Argumentberechnungen können zu {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}} oder {{CSSxREF("&lt;percentage&gt;")}} aufgelöst werden, müssen jedoch denselben Typ haben; andernfalls ist die Funktion ungültig. Das Ergebnis hat denselben Typ wie die Argumente.
- Wenn `valueToRound` exakt einem ganzzahligen Vielfachen von `roundingInterval` entspricht, wird `round()` exakt zu `valueToRound` aufgelöst (wobei gegebenenfalls erhalten bleibt, ob `valueToRound` `0⁻` oder `0⁺` ist). Andernfalls gibt es zwei ganzzahlige Vielfache von `roundingInterval`, die potenziell am „nächsten“ bei `valueToRound` liegen: das untere `roundingInterval`, das näher bei `−∞` liegt, und das obere `roundingInterval`, das näher bei `+∞` liegt.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Positive Werte runden

Dieses Beispiel zeigt, wie die Rundungsstrategien der Funktion `round()` bei positiven Werten funktionieren.

Von den fünf untenstehenden Kästen wird die Funktion `round()` verwendet, um die Höhe der letzten vier festzulegen.
Der zu rundende Wert liegt jeweils zwischen 100 px und 125 px, und der Rundungswert beträgt in allen Fällen 25px.
Die Höhe der Kästen wird daher entweder auf 125 px auf- oder auf 100 px abgerundet.

#### HTML

Das HTML definiert 5 `div`-Elemente, die durch das CSS als Kästen dargestellt werden.
Die Elemente enthalten Text, der die Rundungsstrategie, den Ausgangswert und die erwartete endgültige Höhe des Kastens angibt (in Klammern).

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

Das CSS, das auf alle Kästen angewendet wird, ist unten dargestellt.
Beachten Sie, dass wir eine [benutzerdefinierte CSS-Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) namens `--rounding-interval` anwenden, die wir für das Rundungsintervall verwenden werden.

```css
div.box {
  width: 100px;
  height: 100px;
  background: lightblue;
  --rounding-interval: 25px;
}
```

Das erste `div` von links wird nicht mit spezifischen CSS-Regeln angesprochen und hat daher eine Standardhöhe von 100px.
Das CSS für das zweite, dritte und vierte `div` ist unten dargestellt; diese werden jeweils auf-, ab- und in Richtung null gerundet.

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

Beachten Sie, dass wir oben das Rundungsintervall mithilfe von `var()` und der benutzerdefinierten CSS-Eigenschaft `--rounding-interval` angeben.

Für den letzten Kasten wird keine Rundungsstrategie angegeben und daher standardmäßig `nearest` verwendet.
In diesem Fall ist das nächste Intervall zu 117 px 125px, sodass aufgerundet wird.
Zum Vergleich haben wir hier sowohl für den Rundungswert als auch für das Intervall fest codierte Werte angegeben.
Obwohl dies zulässig ist, würden Sie dies normalerweise nicht tun, da es keinen Sinn ergibt, eine Zahl zu runden, wenn Sie bereits wissen, wie das Ergebnis lauten muss.

```css
div.box-5 {
  height: round(117px, 25px);
}
```

#### Ergebnis

Wenn der Browser die CSS-Funktion `round()` unterstützt, sollten Sie fünf Spalten sehen, deren Höhen wie durch den darin enthaltenen Text angegeben gerundet sind.

{{EmbedLiveSample('Round positive values', '100%', '200px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("mod")}}
- {{CSSxRef("rem")}}
