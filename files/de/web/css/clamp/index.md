---
title: clamp()
slug: Web/CSS/clamp
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

Die **`clamp()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) begrenzt einen Mittelwert innerhalb eines Bereichs von Werten zwischen einer definierten unteren und oberen Grenze. Die Funktion nimmt drei Parameter: einen Mindestwert, einen bevorzugten Wert und einen maximal zulässigen Wert.

{{EmbedInteractiveExample("pages/css/function-clamp.html")}}

Beachten Sie, dass die Verwendung von `clamp()` für Schriftgrößen, wie in diesen Beispielen, es Ihnen ermöglicht, eine Schriftgröße festzulegen, die mit der Größe des Ansichtsfensters wächst, jedoch nicht unter eine Mindestschriftgröße oder über eine Maximalschriftgröße hinausgeht. Es hat denselben Effekt wie der Code in [Flüssige Typografie](https://css-tricks.com/snippets/css/fluid-typography/), jedoch in einer Zeile und ohne Verwendung von Media Queries.

## Syntax

```css
/* Static values */
width: clamp(200px, 40%, 400px);
width: clamp(20rem, 30vw, 70rem);
width: clamp(10vw, 20em, 100vw);

/* Calculated values */
width: clamp(min(10vw, 20rem), 300px, max(90vw, 55rem));
width: clamp(100px, calc(30% / 2rem + 10px), 900px);
```

### Parameter

Die `clamp(min, val, max)` Funktion akzeptiert drei durch Kommas getrennte Ausdrücke als Parameter.

- `min`

  - : Der Mindestwert ist der kleinste (am negativsten) Wert. Dies ist die untere Grenze im Bereich der zulässigen Werte. Wenn der bevorzugte Wert kleiner als dieser Wert ist, wird der Mindestwert verwendet.

- `val`

  - : Der bevorzugte Wert ist der Ausdruck, dessen Wert verwendet wird, solange das Ergebnis zwischen dem Mindest- und Höchstwert liegt.

- `max`
  - : Der Maximalwert ist der größte (am positivsten) Ausdruckswert, dem der Wert der Eigenschaft zugewiesen wird, wenn der bevorzugte Wert größer als diese obere Grenze ist.

Die Ausdrücke können mathematische Funktionen sein (siehe {{CSSxRef("calc", "calc()")}} für weitere Informationen), literale Werte, andere Ausdrücke, die zu einem gültigen Argumenttyp auswerten (wie {{CSSxRef("&lt;length&gt;")}}), oder verschachtelte {{CSSxRef("min", "min()")}} und {{CSSxRef("max", "max()")}} Funktionen. Für mathematische Ausdrücke können Sie Addition, Subtraktion, Multiplikation und Division verwenden, ohne die `calc()` Funktion selbst zu verwenden. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnung bei Bedarf festzulegen.

Sie können in Ihren Ausdrücken unterschiedliche Einheiten für jeden Wert verwenden und unterschiedliche Einheiten in jeder mathematischen Funktion, die eines der Argumente bildet.

Beachten Sie beim Arbeiten mit der Funktion Folgendes:

- Mathematische Ausdrücke, die Prozentsätze für Breiten und Höhen auf Tabellenspalten, Tabellenspalten-Gruppen, Tabellenreihen, Tabellenreihen-Gruppen und Tabellenelemente in sowohl Auto- als auch festen Layout-Tabellen umfassen, _können_ so behandelt werden, als wäre `auto` angegeben.
- Es ist erlaubt, `max()` und `min()` Funktionen als Ausdruckswerte zu verschachteln. In diesem Fall werden die inneren wie einfache Klammern behandelt. Die Ausdrücke sind vollständige mathematische Ausdrücke, sodass Sie direkte Addition, Subtraktion, Multiplikation und Division verwenden können, ohne die calc() Funktion selbst zu verwenden.
- Der Ausdruck kann Werte sein, die die Operatoren Addition ( `+` ), Subtraktion ( `-` ), Multiplikation ( `*` ) und Division ( `/` ) kombinieren, unter Verwendung der Standardregeln für die Operatorrangfolge. Stellen Sie sicher, dass auf beiden Seiten der `+` und `-` Operanden ein Leerzeichen steht. Die Operanden im Ausdruck können beliebige {{CSSxRef("&lt;length&gt;")}} Syntaxwerte sein. Sie können verschiedene Einheiten für jeden Wert in Ihrem Ausdruck verwenden. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnungen bei Bedarf festzulegen.
- Oftmals möchten Sie {{CSSxRef("min", "min()")}} und {{CSSxRef("max", "max()")}} innerhalb einer `clamp()` Funktion verwenden.

### Rückgabewert

`clamp(MIN, VAL, MAX)` wird als `{{CSSxRef("max", "max")}}(MIN, {{CSSxRef("min", "min")}}(VAL, MAX))` aufgelöst.

Basierend auf den bereitgestellten Parametern gibt die Funktion {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}}, oder {{CSSxRef("&lt;integer&gt;")}} zurück.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich von min(), max() und clamp()

In diesem Beispiel haben wir eine Webseite, die {{CSSxRef("min", "min()")}}, {{CSSxRef("max", "max()")}}, und `clamp()` verwendet, um Größen reaktionsschnell festzulegen.

Das Beispiel passt die Größen von Seitenelementen auf drei Arten an:

- die Längen der Textzeilen
- die Schriftgröße des Absatztextes
- die Schriftgröße des Überschriftentextes

In allen drei Fällen verwendet die Seite eine Kombination aus ansichtsfenster-relativen Einheiten ([`vw`](/de/docs/Web/CSS/length#vw) und {{cssxref("percentage")}}), um eine Größe festzulegen, die mit der Ansichtsfensterbreite variiert, und einen Wert, der nicht ansichtsfenster-relativ ist ([`rem`](/de/docs/Web/CSS/length#rem) und [`px`](/de/docs/Web/CSS/length#px)), um Mindest- und/oder Höchstgrößen festzulegen.

Das Beispiel befindet sich auf <https://mdn.github.io/css-examples/min-max-clamp/>. Öffnen Sie es in einem neuen Fenster und versuchen Sie, die Fensterbreite anzupassen.

Die **Zeilenlänge** (gesteuert durch die [`width`](/de/docs/Web/CSS/width) des [`<body>`](/de/docs/Web/HTML/Element/body) Elements) wird größer, wenn die Fensterbreite zunimmt, jedoch nur bis zu einem bestimmten Punkt (`1000px`), und darüber hinaus wird sie nicht mehr größer. Wir verwenden `min()`, um eine **maximale Zeilenlänge** festzulegen: Sie kann unter `1000px` gehen, aber nicht darüber hinaus. Das ist hilfreich, weil lange Zeilen schwerer zu lesen sind, weshalb wir oft begrenzen möchten, wie lang eine Zeile sein kann. Um dies zu erreichen, verwenden wir `min(1000px, calc(70% + 100px))`: Wenn das Ergebnis der prozentualen Berechnung über `1000px` liegt, wechseln wir zum festen Wert von `1000px`.

Die **Größe des Absatztextes**, der durch die [`font-size`](/de/docs/Web/CSS/font-size) des [`<p>`](/de/docs/Web/HTML/Element/p) Elements gesteuert wird, wird kleiner, wenn das Fenster schmaler wird, jedoch nur bis zu einem bestimmten Punkt, und darüber hinaus (der Punkt, an dem `1.2vw` weniger als `1.2rem` ist) wird sie nicht kleiner: Sie bleibt bei `1.2rem`. Wir verwenden `max()`, um eine **Mindestschriftgröße** festzulegen: Die Schrift kann über `1.2rem` hinauswachsen, wird aber nie darunter fallen. Das ist hilfreich, weil wirklich kleine Schrift schwer zu lesen ist. Um dies zu erreichen, verwenden wir `max(1.2rem, 1.2vw)`. Das bedeutet, dass die `font-size` auf `1.2rem` gesetzt wird, es sei denn, der berechnete Wert von `1.2vw` ist größer als der von `1.2rem`, in diesem Fall wird sie auf `1.2vw` gesetzt.

Die **Größe des Überschriftentextes**, kontrolliert durch die [`font-size`](/de/docs/Web/CSS/font-size) des [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements) Elements, hat einen ansichtsfenster-relativen Wert mit sowohl einer maximalen als auch einer minimalen Schwelle. Um dies zu erreichen, verwenden wir `clamp(1.8rem, 2.5vw, 2.8rem)`. Der ansichtsfenster-relative Wert ist `2.5vw`, aber er wird zwischen `1.8rem` und `2.8rem` begrenzt, sodass:

- wenn der berechnete Wert von `2.5vw` weniger als `1.8rem` beträgt, dann wird `1.8rem` verwendet
- wenn der berechnete Wert von `2.5vw` größer als `2.8rem` ist, dann wird `2.8rem` verwendet.

Dies verhindert, dass der Überschriftentext in einem sehr schmalen Fenster zu klein oder in einem sehr breiten Fenster zu groß wird.

#### HTML

```html
<h1>Simple responsive test</h1>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci orci,
  eleifend id risus nec, mattis rutrum velit. Suspendisse fringilla egestas erat
  eu convallis. Phasellus eu velit ut magna dapibus elementum cursus at ligula.
  Ut tempus varius nibh, nec auctor sapien iaculis sit amet. Fusce iaculis,
  libero quis elementum viverra, nulla ante accumsan lectus, sit amet convallis
  lacus ipsum vel est. Curabitur et urna non est consectetur pulvinar vel id
  risus. Ut vestibulum, sem in semper aliquet, felis arcu euismod sapien, ac
  imperdiet massa nisl quis sem. Vestibulum ac elementum felis, in tempor velit.
  Pellentesque purus ex, mattis at ornare quis, porta condimentum mi. Donec
  vestibulum ligula vel nulla blandit, quis euismod nulla vestibulum.
  Suspendisse potenti. Nunc neque mauris, tempor sed facilisis at, ultrices eget
  nulla. Pellentesque convallis ante nec augue porttitor, id tempus ante luctus.
</p>

<p>
  Integer rutrum sollicitudin tellus, quis cursus nulla scelerisque nec. Nunc eu
  facilisis lorem. Maecenas faucibus sapien eleifend, semper tellus at, pharetra
  quam. Cras feugiat vulputate tortor at rhoncus. Class aptent taciti sociosqu
  ad litora torquent per conubia nostra, per inceptos himenaeos. Nam non felis
  quis sem lobortis sodales vel id libero. Phasellus sit amet placerat lorem.
</p>
```

#### CSS

```css
html {
  font-family: sans-serif;
}

body {
  margin: 0 auto;
  width: min(1000px, calc(70% + 100px));
}

h1 {
  letter-spacing: 2px;
  font-size: clamp(1.8rem, 2.5vw, 2.8rem);
}

p {
  line-height: 1.5;
  font-size: max(1.2rem, 1.2vw);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("calc", "calc()")}}
- {{CSSxRef("max", "max()")}}
- {{CSSxRef("min", "min()")}}
- [Lernen: CSS-Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
