---
title: clamp()
slug: Web/CSS/clamp
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{CSSRef}}

Die **`clamp()`**-Funktion in [CSS](/de/docs/Web/CSS) schränkt einen mittleren Wert innerhalb eines Bereichs von Werten zwischen einer definierten unteren und einer oberen Grenze ein. Die Funktion nimmt drei Parameter entgegen: einen Minimalwert, einen bevorzugten Wert und einen maximal zulässigen Wert.

{{EmbedInteractiveExample("pages/css/function-clamp.html")}}

Beachten Sie, dass die Verwendung von `clamp()` für Schriftgrößen, wie in diesen Beispielen, es Ihnen ermöglicht, eine Schriftgröße festzulegen, die mit der Größe des Viewports wächst, jedoch nicht kleiner als eine minimale Schriftgröße oder größer als eine maximale Schriftgröße wird. Es hat den gleichen Effekt wie der Code in [Fluid Typography](https://css-tricks.com/snippets/css/fluid-typography/), jedoch in einer Zeile und ohne die Verwendung von Media Queries.

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

Die Funktion `clamp(min, val, max)` akzeptiert drei kommagetrennte Ausdrücke als Parameter.

- `min`

  - : Der Minimalwert ist der kleinste (am stärksten negative) Wert. Dies ist die untere Grenze im Bereich der zulässigen Werte. Wenn der bevorzugte Wert kleiner als dieser Wert ist, wird der Minimalwert verwendet.

- `val`

  - : Der bevorzugte Wert ist der Ausdruck, dessen Wert verwendet wird, solange das Ergebnis zwischen den Minimal- und Maximalwerten liegt.

- `max`
  - : Der Maximalwert ist der größte (am stärksten positive) Ausdruckswert, dem der Wert der Eigenschaft zugewiesen wird, wenn der bevorzugte Wert größer als diese obere Grenze ist.

Die Ausdrücke können mathematische Funktionen sein (siehe {{CSSxRef("calc", "calc()")}} für mehr Informationen), literale Werte, andere Ausdrücke, die zu einem gültigen Argumenttyp auswerten (wie {{CSSxRef("&lt;length&gt;")}}), oder verschachtelte {{CSSxRef("min", "min()")}} und {{CSSxRef("max", "max()")}} Funktionen. Für mathematische Ausdrücke können Sie Addition, Subtraktion, Multiplikation und Division ohne die Verwendung der `calc()`-Funktion selbst verwenden. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnungen festzulegen, wenn nötig.

Sie können verschiedene Einheiten für jeden Wert in Ihren Ausdrücken und verschiedene Einheiten in jeder mathematischen Funktion verwenden, die eines der Argumente bildet.

Beachten Sie die folgenden Aspekte bei der Arbeit mit der Funktion:

- Mathematische Ausdrücke, die Prozentsätze für Breiten und Höhen in Tabellenspalten, Tabellenspalten-Gruppen, Tabellenzeilen, Tabellenzeilengruppen und Tabellenzellen in Auto- und Fest-Layout-Tabellen beinhalten, _könnten_ so behandelt werden, als ob `auto` angegeben worden wäre.
- Es ist erlaubt, `max()` und `min()` Funktionen als Ausdruckswerte zu verschachteln, wobei die inneren einfach als gewöhnliche Klammern behandelt werden. Die Ausdrücke sind vollständige mathematische Ausdrücke, sodass Sie direkte Addition, Subtraktion, Multiplikation und Division ohne die Verwendung der `calc()`-Funktion selbst verwenden können.
- Der Ausdruck kann Werte sein, die die Additions- ( `+` ), Subtraktions- ( `-` ), Multiplikations- ( `*` ) und Divisions- ( `/` ) Operatoren kombinieren, unter Verwendung der Standardoperatorrangreihenfolgeregeln. Achten Sie darauf, bei den Operanden `+` und `-` jeweils ein Leerzeichen zu setzen. Die Operanden im Ausdruck können jeden {{CSSxRef("&lt;length&gt;")}} Syntax-Wert sein. Sie können verschiedene Einheiten für jeden Wert in Ihrem Ausdruck verwenden. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnungen festzulegen, wenn nötig.
- Oftmals wird man {{CSSxRef("min", "min()")}} und {{CSSxRef("max", "max()")}} innerhalb einer `clamp()`-Funktion verwenden wollen.

### Rückgabewert

`clamp(MIN, VAL, MAX)` wird aufgelöst als `{{CSSxRef("max", "max")}}(MIN, {{CSSxRef("min", "min")}}(VAL, MAX))`.

Basierend auf den bereitgestellten Parametern gibt die Funktion {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}}, oder {{CSSxRef("&lt;integer&gt;")}} zurück.

### Formaler Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich von min(), max() und clamp()

In diesem Beispiel haben wir eine Webseite, die {{CSSxRef("min", "min()")}}, {{CSSxRef("max", "max()")}}, und `clamp()` verwendet, um Größen reaktionsfähig einzustellen.

Das Beispiel passt die Größen von Seitenelementen auf drei Arten an:

- die Längen der Textzeilen
- die Schriftgröße des Absatztextes
- die Schriftgröße des Überschriftentextes

In allen drei Fällen verwendet die Seite eine Kombination von viewport-relativen Einheiten ([`vw`](/de/docs/Web/CSS/length#vw) und {{cssxref("percentage")}}), um eine Größe festzulegen, die mit der Bildschirmbreite variiert, und einen Wert, der nicht viewport-relativ ist ([`rem`](/de/docs/Web/CSS/length#rem) und [`px`](/de/docs/Web/CSS/length#px)), um minimale und/oder maximale Größen zu realisieren.

Das Beispiel befindet sich unter <https://mdn.github.io/css-examples/min-max-clamp/>. Öffnen Sie es in einem neuen Fenster und versuchen Sie, die Fensterbreite anzupassen.

Die **Zeilenlänge** (gesteuert durch die [`width`](/de/docs/Web/CSS/width) des [`<body>`](/de/docs/Web/HTML/Element/body)-Elements) wird größer, wenn die Fensterbreite zunimmt, aber nur bis zu einem bestimmten Punkt (`1000px`), darüber hinaus wird sie nicht mehr größer. Wir verwenden `min()`, um eine **maximale Zeilenlänge** festzulegen: sie kann unter `1000px` gehen, wird aber nicht darüber hinausgehen. Dies ist hilfreich, da lange Zeilen schwieriger zu lesen sind, daher möchten wir oft begrenzen, wie lang eine Zeile sein kann. Um dies zu erreichen, verwenden wir `min(1000px, calc(70% + 100px))`: wenn das Ergebnis der prozentbasierten Berechnung über `1000px` geht, wechseln wir zum festen Wert `1000px`.

Die **Größe des Absatztextes**, gesteuert durch die [`font-size`](/de/docs/Web/CSS/font-size) des [`<p>`](/de/docs/Web/HTML/Element/p)-Elements, nimmt ab, wenn das Fenster schmaler wird, aber nur bis zu einem bestimmten Punkt, und darüber hinaus (dem Punkt, an dem `1.2vw` kleiner ist als `1.2rem`) wird es nicht mehr kleiner: es bleibt bei `1.2rem`. Wir verwenden `max()`, um eine **minimale Schriftgröße** festzulegen: die Schrift kann größer als `1.2rem` werden, aber niemals darunter gehen. Das ist hilfreich, weil wirklich kleiner Text schwer zu lesen ist. Um dies zu erreichen, verwenden wir `max(1.2rem, 1.2vw)`. Das bedeutet, dass die `font-size` auf `1.2rem` gesetzt wird, es sei denn, der berechnete Wert von `1.2vw` ist größer als der von `1.2rem`, in diesem Fall wird er stattdessen auf `1.2vw` gesetzt.

Die **Größe des Überschrifttextes**, gesteuert durch die [`font-size`](/de/docs/Web/CSS/font-size) des [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements)-Elements, hat einen viewport-relativen Wert mit sowohl einer maximalen als auch einer minimalen Grenze. Um dies zu erreichen, verwenden wir `clamp(1.8rem, 2.5vw, 2.8rem)`. Der viewport-relative Wert ist `2.5vw`, aber er ist zwischen `1.8rem` und `2.8rem` eingeschränkt, so dass:

- wenn der berechnete Wert von `2.5vw` kleiner als `1.8rem` ist, dann wird `1.8rem` verwendet
- wenn der berechnete Wert von `2.5vw` größer als `2.8rem` ist, dann wird `2.8rem` verwendet.

Dies verhindert, dass der Überschrifttext in einem sehr schmalen Fenster zu klein oder in einem sehr breiten Fenster zu groß wird.

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
- [CSS-Werte](/de/docs/Learn/CSS/Building_blocks/Values_and_units)
