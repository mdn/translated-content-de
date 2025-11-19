---
title: clamp()
slug: Web/CSS/Reference/Values/clamp
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

Die **`clamp()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) begrenzt einen Wert innerhalb eines Bereichs von Werten zwischen einer definierten unteren und einer oberen Grenze. Die Funktion nimmt drei Parameter: einen minimalen Wert, einen bevorzugten Wert und einen maximal zulässigen Wert.

{{InteractiveExample("CSS Demo: clamp()")}}

```css interactive-example-choice
font-size: clamp(1rem, 2.5vw, 2rem);
```

```css interactive-example-choice
font-size: clamp(1.5rem, 2.5vw, 4rem);
```

```css interactive-example-choice
font-size: clamp(1rem, 10vw, 2rem);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    The font-size of this text varies depending on the base font of the page,
    and the size of the viewport.
  </div>
</section>
```

Beachten Sie, dass die Verwendung von `clamp()` für Schriftgrößen, wie in diesen Beispielen, es Ihnen ermöglicht, eine Schriftgröße festzulegen, die mit der Größe des Ansichtsfensters wächst, aber nicht unter eine minimale Schriftgröße oder über eine maximale Schriftgröße hinausgeht. Dies hat denselben Effekt wie der Code in [Flüssige Typografie](https://css-tricks.com/snippets/css/fluid-typography/), jedoch in einer Zeile und ohne Verwendung von Media Queries.

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
  - : Der Mindestwert ist der kleinste (negativste) Wert. Dies ist die untere Grenze im Bereich der zulässigen Werte. Wenn der bevorzugte Wert kleiner als dieser Wert ist, wird der Mindestwert verwendet.

- `val`
  - : Der bevorzugte Wert ist der Ausdruck, dessen Wert verwendet wird, solange das Ergebnis zwischen den minimalen und maximalen Werten liegt.

- `max`
  - : Der Maximalwert ist der größte (positivste) Ausdruckswert, auf den der Wert der Eigenschaft gesetzt wird, wenn der bevorzugte Wert größer als diese obere Grenze ist.

Die Ausdrücke können mathematische Funktionen sein (siehe {{CSSxRef("calc", "calc()")}} für weitere Informationen), wörtliche Werte, andere Ausdrücke, die zu einem gültigen Argumenttyp ausgewertet werden (wie {{CSSxRef("&lt;length&gt;")}}), oder verschachtelte {{CSSxRef("min", "min()")}} und {{CSSxRef("max", "max()")}} Funktionen. Für mathematische Ausdrücke können Sie Addition, Subtraktion, Multiplikation und Division ohne Verwendung der `calc()` Funktion selbst verwenden. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnung festzulegen, wenn nötig.

Sie können unterschiedliche Einheiten für jeden Wert in Ihren Ausdrücken und unterschiedliche Einheiten in jeder mathematischen Funktion verwenden, die einen der Argumente bildet.

Beachten Sie die folgenden Aspekte bei der Arbeit mit der Funktion:

- Mathematische Ausdrücke, die Prozentsätze für Breiten und Höhen auf Tabellen-Spalten, Tabellen-Spaltengruppen, Tabellen-Zeilen, Tabellen-Zeilengruppen und Tabellen-Zellen in sowohl automatischen als auch festen Layout-Tabellen betreffen, _können_ so behandelt werden, als wäre `auto` angegeben worden.
- Es ist erlaubt, `max()` und `min()` Funktionen als Ausdruckswerte zu verschachteln, wobei die inneren als grundlegende Klammern behandelt werden. Die Ausdrücke sind vollständige mathematische Ausdrücke, sodass Sie direkte Addition, Subtraktion, Multiplikation und Division ohne Verwendung der `calc()` Funktion selbst verwenden können.
- Der Ausdruck kann Werte kombinieren, die die Operatoren Addition (`+`), Subtraktion (`-`), Multiplikation (`*`) und Division (`/`) verwenden, unter Verwendung der Standardregeln der Operatorenpräzedenz. Achten Sie darauf, auf jeder Seite der `+` und `-` Operanden ein Leerzeichen zu setzen. Die Operanden im Ausdruck können jeden {{CSSxRef("&lt;length&gt;")}} Syntax-Wert darstellen. Sie können für jeden Wert in Ihrem Ausdruck unterschiedliche Einheiten verwenden. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnung festzulegen, wenn nötig.
- Häufig werden Sie {{CSSxRef("min", "min()")}} und {{CSSxRef("max", "max()")}} innerhalb einer `clamp()` Funktion verwenden wollen.

### Rückgabewert

`clamp(MIN, VAL, MAX)` wird als `max(MIN, min(VAL, MAX))` aufgelöst.

Basierend auf den bereitgestellten Parametern gibt die Funktion {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}} oder {{CSSxRef("&lt;integer&gt;")}} zurück.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### min(), max() und clamp() Vergleich

In diesem Beispiel haben wir eine Webseite, die {{CSSxRef("min", "min()")}}, {{CSSxRef("max", "max()")}} und `clamp()` verwendet, um Größen responsiv festzulegen.

Das Beispiel passt die Größen der Seitenelemente auf drei Arten an:

- die Längen der Textzeilen
- die Schriftgröße des Absatztextes
- die Schriftgröße des Überschriftentextes

In allen drei Fällen verwendet die Seite eine Kombination aus ansichtsfensterabhängigen Einheiten ([`vw`](/de/docs/Web/CSS/Reference/Values/length#vw) und {{cssxref("percentage")}}), um eine Größe festzulegen, die mit der Breite des Ansichtsfensters variiert, sowie einen Wert, der nicht ansichtsfensterabhängig ist ([`rem`](/de/docs/Web/CSS/Reference/Values/length#rem) und [`px`](/de/docs/Web/CSS/Reference/Values/length#px)), um Mindest- und/oder Höchstgrößen zu implementieren.

Das Beispiel finden Sie unter <https://mdn.github.io/css-examples/min-max-clamp/>. Öffnen Sie es in einem neuen Fenster und versuchen Sie, die Fensterbreite anzupassen.

Die **Zeilenlänge** (gesteuert durch die [`width`](/de/docs/Web/CSS/Reference/Properties/width) des [`<body>`](/de/docs/Web/HTML/Reference/Elements/body) Elements) wird zunehmen, während die Fensterbreite zunimmt, jedoch nur bis zu einem bestimmten Punkt (`1000px`), und darüber hinaus wird sie nicht mehr zunehmen. Wir verwenden `min()`, um eine **maximale Zeilenlänge** festzulegen: sie kann unter `1000px` gehen, aber nicht darüber. Dies ist hilfreich, weil lange Zeilen schwer zu lesen sind, daher wollen wir oft begrenzen, wie lang eine Zeile werden kann. Um dies zu erreichen, verwenden wir `min(1000px, calc(70% + 100px))`: wenn das Ergebnis der prozentbasierten Berechnung über `1000px` geht, wechseln wir zum festen `1000px` Wert.

Die **Größe des Absatztextes**, gesteuert durch die [`font-size`](/de/docs/Web/CSS/Reference/Properties/font-size) des [`<p>`](/de/docs/Web/HTML/Reference/Elements/p) Elements, nimmt ab, wenn das Fenster schmaler wird, jedoch nur bis zu einem bestimmten Punkt, und über diesen Punkt hinaus (der Punkt, an dem `1.2vw` kleiner ist als `1.2rem`) wird sie nicht kleiner: sie bleibt bei `1.2rem`. Wir verwenden `max()`, um eine **minimale Schriftgröße** festzulegen: die Schrift kann über `1.2rem` wachsen, aber wird nie darunter fallen. Dies ist hilfreich, weil wirklich kleine Texte schwer zu lesen sind. Um dies zu erreichen, verwenden wir `max(1.2rem, 1.2vw)`. Das bedeutet, dass die `font-size` auf `1.2rem` gesetzt wird, es sei denn, der berechnete Wert von `1.2vw` ist größer als der von `1.2rem`, in diesem Fall wird sie auf `1.2vw` gesetzt.

Die **Größe des Überschriftentextes**, gesteuert durch die [`font-size`](/de/docs/Web/CSS/Reference/Properties/font-size) des [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) Elements, hat einen ansichtsfensterabhängigen Wert mit sowohl einer maximalen als auch einer minimalen Grenze. Um dies zu erreichen, verwenden wir `clamp(1.8rem, 2.5vw, 2.8rem)`. Der ansichtsfensterabhängige Wert ist `2.5vw`, aber er wird zwischen `1.8rem` und `2.8rem` begrenzt, also:

- wenn der berechnete Wert von `2.5vw` kleiner als `1.8rem` ist, wird `1.8rem` verwendet
- wenn der berechnete Wert von `2.5vw` größer als `2.8rem` ist, wird `2.8rem` verwendet.

Dies verhindert, dass der Überschriftentext in einem sehr schmalen Fenster zu klein oder in einem sehr breiten Fenster zu groß wird.

#### HTML

```html
<h1>Basic responsive test</h1>
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
