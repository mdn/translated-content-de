---
title: clamp()
slug: Web/CSS/clamp
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`clamp()`**-Funktion in [CSS](/de/docs/Web/CSS) [clamp()](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) begrenzt einen Mittelwert innerhalb eines Wertebereichs zwischen einem definierten Mindest- und einem Maximalwert. Die Funktion benötigt drei Parameter: einen Mindestwert, einen bevorzugten Wert und einen maximal zulässigen Wert.

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

Beachten Sie, dass die Verwendung von `clamp()` für Schriftgrößen, wie in diesen Beispielen, es Ihnen ermöglicht, eine Schriftgröße festzulegen, die mit der Größe des Ansichtsfensters wächst, jedoch nie unter eine Mindestschriftgröße oder über eine Maximalschriftgröße hinausgeht. Es hat denselben Effekt wie der Code in [Fluid Typography](https://css-tricks.com/snippets/css/fluid-typography/), aber in einer Zeile und ohne Einsatz von Media Queries.

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

Die `clamp(min, val, max)`-Funktion akzeptiert drei durch Kommas getrennte Ausdrücke als ihre Parameter.

- `min`
  - : Der Mindestwert ist der kleinste (am negativsten) Wert. Dies ist die Untergrenze im Bereich der zulässigen Werte. Wenn der bevorzugte Wert kleiner als dieser Wert ist, wird der Mindestwert verwendet.

- `val`
  - : Der bevorzugte Wert ist der Ausdruck, dessen Wert solange verwendet wird, wie das Ergebnis zwischen den Mindest- und Maximalwerten liegt.

- `max`
  - : Der Maximalwert ist der größte (am positivsten) Ausdruckswert, dem das Wert der Eigenschaft zugewiesen wird, wenn der bevorzugte Wert größer ist als diese obere Grenze.

Die Ausdrücke können mathematische Funktionen sein (siehe {{CSSxRef("calc", "calc()")}} für weitere Informationen), literale Werte, andere Ausdrücke, die zu einem gültigen Argumenttyp ausgewertet werden (wie {{CSSxRef("&lt;length&gt;")}}), oder verschachtelte {{CSSxRef("min", "min()")}} und {{CSSxRef("max", "max()")}} Funktionen. Für mathematische Ausdrücke können Sie Addition, Subtraktion, Multiplikation und Division verwenden, ohne die `calc()`-Funktion selbst zu nutzen. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnungen festzulegen, wenn erforderlich.

Es ist möglich, verschiedene Einheiten für jeden Wert Ihrer Ausdrücke und verschiedene Einheiten in einer mathematischen Funktion zu verwenden, die eines der Argumente bildet.

Beachten Sie folgende Aspekte, während Sie mit der Funktion arbeiten:

- Mathematische Ausdrücke, die Prozentsätze für Breiten und Höhen von Tabellenspalten, Tabellen-Spaltengruppen, Tabellenzeilen, Tabellen-Zeilengruppen und Tabellenzellen in sowohl automatischen als auch festen Layout-Tabellen beinhalten, _können_ so behandelt werden, als ob `auto` angegeben wurde.
- Es ist erlaubt, `max()` und `min()` Funktionen als Ausdruckswerte zu verschachteln, wobei die inneren Funktionen dann als einfache Klammern behandelt werden. Die Ausdrücke sind vollständige mathematische Ausdrücke, sodass Sie direkte Addition, Subtraktion, Multiplikation und Division ohne Verwendung der `calc()`-Funktion selbst nutzen können.
- Der Ausdruck kann Werte kombinieren, die Additions- (`+`), Subtraktions- (`-`), Multiplikations- (`*`) und Division- (`/`) Operatoren verwenden, unter Anwendung der Standardpräzedenzregeln der Operatoren. Achten Sie darauf, ein Leerzeichen auf jeder Seite der `+` und `-` Operanden zu setzen. Die Operanden im Ausdruck können jeden {{CSSxRef("&lt;length&gt;")}} Syntax-Wert haben. Sie können verschiedene Einheiten für jeden Wert in Ihrem Ausdruck verwenden. Klammern dürfen ebenfalls verwendet werden, um die Reihenfolge der Berechnungen festzulegen, wenn erforderlich.
- Häufig werden Sie {{CSSxRef("min", "min()")}} und {{CSSxRef("max", "max()")}} innerhalb einer `clamp()`-Funktion verwenden wollen.

### Rückgabewert

`clamp(MIN, VAL, MAX)` wird aufgelöst als `max(MIN, min(VAL, MAX))`.

Basierend auf den bereitgestellten Parametern gibt die Funktion {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}} oder {{CSSxRef("&lt;integer&gt;")}} zurück.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich von min(), max() und clamp()

In diesem Beispiel haben wir eine Webseite, die {{CSSxRef("min", "min()")}}, {{CSSxRef("max", "max()")}} und `clamp()` verwendet, um Größen responsiv einzustellen.

Das Beispiel passt die Größen der Seitenelemente auf drei Arten an:

- die Länge der Textzeilen
- die Schriftgröße des Absatztextes
- die Schriftgröße des Überschriftentextes

In allen drei Fällen verwendet die Seite eine Kombination aus viewport-relativen Einheiten ([`vw`](/de/docs/Web/CSS/length#vw) und {{cssxref("percentage")}}), um eine Größe festzulegen, die mit der Breite des Ansichtsfensters variiert, sowie einen Wert, der nicht viewport-relativ ist ([`rem`](/de/docs/Web/CSS/length#rem) und [`px`](/de/docs/Web/CSS/length#px)), um Mindest- und/oder Maximalgrößen zu implementieren.

Das Beispiel befindet sich unter <https://mdn.github.io/css-examples/min-max-clamp/>. Öffnen Sie es in einem neuen Fenster und versuchen Sie, die Fensterbreite anzupassen.

Die **Zeilenlänge** (gesteuert durch die [`width`](/de/docs/Web/CSS/width) des [`<body>`](/de/docs/Web/HTML/Reference/Elements/body) Elements) wird größer, je breiter das Fenster wird, aber nur bis zu einem bestimmten Punkt (`1000px`), und darüber hinaus wird sie nicht größer. Wir verwenden `min()`, um eine **maximale Zeilenlänge** festzulegen: sie kann unter `1000px` gehen, aber nicht darüber hinaus. Dies ist hilfreich, weil lange Zeilen schwerer zu lesen sind, weshalb wir oft begrenzen wollen, wie lang eine Zeile sein kann. Um dies zu erreichen, verwenden wir `min(1000px, calc(70% + 100px))`: wenn das Ergebnis der prozentualen Berechnung über `1000px` hinausgeht, wechseln wir zum festen Wert von `1000px`.

Die **Größe des Absatztextes**, gesteuert durch die [`font-size`](/de/docs/Web/CSS/font-size) des [`<p>`](/de/docs/Web/HTML/Reference/Elements/p) Elements, verringert sich, je schmaler das Fenster wird, aber nur bis zu einem bestimmten Punkt, und darüber hinaus (wo `1.2vw` weniger als `1.2rem` ist) wird sie nicht kleiner: sie bleibt bei `1.2rem`. Wir verwenden `max()`, um eine **minimale Schriftgröße** festzulegen: Die Schrift kann über `1.2rem` hinauswachsen, aber niemals darunter sinken. Dies ist hilfreich, weil wirklich kleiner Text schwer zu lesen ist. Um dies zu erreichen, verwenden wir `max(1.2rem, 1.2vw)`. Dies bedeutet, dass die `font-size` auf `1.2rem` eingestellt wird, es sei denn, der berechnete Wert von `1.2vw` ist größer als der von `1.2rem`, in welchem Fall er stattdessen auf `1.2vw` eingestellt wird.

Die **Größe des Überschriftentextes**, gesteuert durch die [`font-size`](/de/docs/Web/CSS/font-size) des [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) Elements, hat einen viewport-relativen Wert mit sowohl einem maximalen als auch einem minimalen Schwellenwert. Um dies zu erreichen, verwenden wir `clamp(1.8rem, 2.5vw, 2.8rem)`. Der viewport-relative Wert ist `2.5vw`, aber er wird zwischen `1.8rem` und `2.8rem` eingegrenzt, also:

- wenn der berechnete Wert von `2.5vw` weniger als `1.8rem` ist, wird `1.8rem` verwendet
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
