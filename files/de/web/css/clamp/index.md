---
title: clamp()
slug: Web/CSS/clamp
l10n:
  sourceCommit: 5332af37c3d94913bf15b6aed87aaed2693f19d5
---

{{CSSRef}}

Die **`clamp()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) begrenzt einen Zwischenwert innerhalb eines Wertebereichs zwischen einem definierten Mindest- und Höchstwert. Die Funktion nimmt drei Parameter an: einen Mindestwert, einen bevorzugten Wert und einen maximal erlaubten Wert.

{{EmbedInteractiveExample("pages/css/function-clamp.html")}}

Beachten Sie, dass die Verwendung von `clamp()` für Schriftgrößen, wie in diesen Beispielen, Ihnen ermöglicht, eine Schriftgröße festzulegen, die mit der Größe des Viewports wächst, aber nicht unter eine Mindestschriftgröße oder über eine Maximalschriftgröße hinausgeht. Es hat denselben Effekt wie der Code in [Fluid Typography](https://css-tricks.com/snippets/css/fluid-typography/), jedoch in einer Zeile und ohne die Verwendung von Media Queries.

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

Die Funktion `clamp(min, val, max)` akzeptiert drei durch Kommas getrennte Ausdrücke als Parameter.

- `min`

  - : Der Mindestwert ist der kleinste (negativste) Wert. Dies ist die Untergrenze im Bereich der zulässigen Werte. Wenn der bevorzugte Wert kleiner als dieser Wert ist, wird der Mindestwert verwendet.

- `val`

  - : Der bevorzugte Wert ist der Ausdruck, dessen Wert verwendet wird, solange das Ergebnis zwischen dem Mindest- und Höchstwert liegt.

- `max`
  - : Der Höchstwert ist der größte (positivste) Ausdruckswert, der zugewiesen wird, wenn der bevorzugte Wert diesen oberen Grenzwert überschreitet.

Die Ausdrücke können mathematische Funktionen sein (siehe {{CSSxRef("calc", "calc()")}} für weitere Informationen), literale Werte, andere Ausdrücke, die in einen gültigen Argumenttyp ausgewertet werden (wie {{CSSxRef("&lt;length&gt;")}}), oder verschachtelte {{CSSxRef("min", "min()")}} und {{CSSxRef("max", "max()")}} Funktionen. Für mathematische Ausdrücke können Sie Addition, Subtraktion, Multiplikation und Division verwenden, ohne die `calc()` Funktion selbst zu benutzen. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnungen festzulegen, wenn nötig.

Sie können unterschiedliche Einheiten für jeden Wert in Ihren Ausdrücken und unterschiedliche Einheiten in jeder mathematischen Funktion verwenden, die Teil der Argumente ist.

Beachten Sie die folgenden Aspekte bei der Arbeit mit der Funktion:

- Mathematische Ausdrücke, die Prozentsätze für Breiten und Höhen auf Tabellenspalten, Tabellenspalten-Gruppen, Tabellenzeilen, Tabellenzeilen-Gruppen und Tabellenzellen in sowohl auto als auch festen Layout-Tabellen beinhalten, können behandelt werden, als ob `auto` angegeben worden wäre.
- Es ist erlaubt, `max()` und `min()` Funktionen als Ausdruckswerte zu verschachteln, wobei die inneren wie einfache Klammern behandelt werden. Die Ausdrücke sind vollständige mathematische Ausdrücke, sodass Sie direkte Addition, Subtraktion, Multiplikation und Division verwenden können, ohne die calc() Funktion selbst zu verwenden.
- Der Ausdruck kann Werte enthalten, die die Operatoren Addition (`+`), Subtraktion (`-`), Multiplikation (`*`) und Division (`/`) kombinieren, unter Verwendung der allgemeinen Operator-Prioritätsregeln. Stellen Sie sicher, dass Sie ein Leerzeichen auf jeder Seite der `+` und `-` Operanden setzen. Die Operanden im Ausdruck können jeden {{CSSxRef("&lt;length&gt;")}} Syntaxwert sein. Sie können unterschiedliche Einheiten für jeden Wert in Ihrem Ausdruck verwenden. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnungen festzulegen, wenn nötig.
- Oftmals werden Sie {{CSSxRef("min", "min()")}} und {{CSSxRef("max", "max()")}} innerhalb einer `clamp()` Funktion verwenden wollen.

### Rückgabewert

`clamp(MIN, VAL, MAX)` wird als `{{CSSxRef("max", "max")}}(MIN, {{CSSxRef("min", "min")}}(VAL, MAX))` aufgelöst.

Basierend auf den bereitgestellten Parametern gibt die Funktion {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}}, oder {{CSSxRef("&lt;integer&gt;")}} zurück.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich von min(), max() und clamp()

In diesem Beispiel haben wir eine Webseite, die {{CSSxRef("min", "min()")}}, {{CSSxRef("max", "max()")}} und `clamp()` verwendet, um Größen responsiv festzulegen.

Das Beispiel passt die Größen von Seitenelementen auf drei Arten an:

- die Längen der Textzeilen
- die Schriftgröße von Absatztexten
- die Schriftgröße der Überschriftstexte

In allen drei Fällen verwendet die Seite eine Kombination von viewport-relativen Einheiten ([`vw`](/de/docs/Web/CSS/length#vw) und {{cssxref("percentage")}}), um eine Größe festzulegen, die mit der Viewport-Breite variiert, sowie einen Wert, der nicht viewport-relativ ist ([`rem`](/de/docs/Web/CSS/length#rem) und [`px`](/de/docs/Web/CSS/length#px)), um Mindest- und/oder Maximalgrößen zu implementieren.

Das Beispiel finden Sie unter <https://mdn.github.io/css-examples/min-max-clamp/>. Öffnen Sie es in einem neuen Fenster und versuchen Sie, die Fensterbreite anzupassen.

Die **Zeilenlänge** (gesteuert durch die [`width`](/de/docs/Web/CSS/width) des [`<body>`](/de/docs/Web/HTML/Element/body) Elements) wird zunehmen, wenn die Fensterbreite zunimmt, aber nur bis zu einem bestimmten Punkt (`1000px`), und darüber hinaus wird sie nicht weiter zunehmen. Wir verwenden `min()`, um eine **maximale Zeilenlänge** festzulegen: sie kann unter `1000px` bleiben, aber nicht darüber hinausgehen. Dies ist hilfreich, da lange Zeilen schwieriger zu lesen sind und wir daher oft die Länge einer Zeile begrenzen möchten. Um dies zu erreichen, verwenden wir `min(1000px, calc(70% + 100px))`: wenn das Ergebnis der prozentbasierten Berechnung über `1000px` liegt, wechseln wir zum festen Wert von `1000px`.

Die **Größe des Absatztextes**, gesteuert durch die [`font-size`](/de/docs/Web/CSS/font-size) des [`<p>`](/de/docs/Web/HTML/Element/p) Elements, nimmt ab, wenn das Fenster schmaler wird, aber nur bis zu einem bestimmten Punkt, und darüber hinaus (der Punkt, an dem `1.2vw` kleiner als `1.2rem` ist), wird sie nicht kleiner: sie bleibt bei `1.2rem`. Wir verwenden `max()`, um eine **minimale Schriftgröße** festzulegen: die Schrift kann über `1.2rem` hinaus wachsen, aber sie wird nie darunter gehen. Dies ist hilfreich, da wirklich kleiner Text schwer zu lesen ist. Um dies zu erreichen, verwenden wir `max(1.2rem, 1.2vw)`. Das bedeutet, dass die `font-size` auf `1.2rem` gesetzt wird, es sei denn, der berechnete Wert von `1.2vw` ist größer als der von `1.2rem`, in diesem Fall wird sie stattdessen auf `1.2vw` gesetzt.

Die **Größe des Überschriftstextes**, gesteuert durch die [`font-size`](/de/docs/Web/CSS/font-size) des [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements) Elements, hat einen viewport-relativen Wert mit sowohl einem maximalen als auch einem minimalen Schwellenwert. Um dies zu erreichen, verwenden wir `clamp(1.8rem, 2.5vw, 2.8rem)`. Der viewport-relative Wert ist `2.5vw`, aber er wird auf `1.8rem` und `2.8rem` begrenzt, also:

- wenn der berechnete Wert von `2.5vw` kleiner als `1.8rem` ist, wird `1.8rem` verwendet
- wenn der berechnete Wert von `2.5vw` größer als `2.8rem` ist, wird `2.8rem` verwendet.

Dies verhindert, dass der Überschriftstext in einem sehr schmalen Fenster zu klein oder in einem sehr breiten Fenster zu groß wird.

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
