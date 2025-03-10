---
title: clamp()
slug: Web/CSS/clamp
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`clamp()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) begrenzt einen Mittelwert innerhalb eines Bereichs von Werten zwischen einer festgelegten unteren und oberen Grenze. Die Funktion nimmt drei Parameter: einen Minimalwert, einen bevorzugten Wert und einen maximal erlaubten Wert.

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

Beachten Sie, dass die Verwendung von `clamp()` für Schriftgrößen, wie in diesen Beispielen, es ermöglicht, eine Schriftgröße festzulegen, die mit der Größe des Ansichtsfensters wächst, aber nicht unter eine minimale Schriftgröße fällt oder über eine maximale hinausgeht. Es hat denselben Effekt wie der Code in [Fluid Typography](https://css-tricks.com/snippets/css/fluid-typography/), jedoch in einer Zeile, und ohne die Verwendung von Media Queries.

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

  - : Der Minimalwert ist der kleinste (negativste) Wert. Dies ist die untere Grenze im Bereich der zulässigen Werte. Wenn der bevorzugte Wert kleiner ist als dieser Wert, wird der Minimalwert verwendet.

- `val`

  - : Der bevorzugte Wert ist der Ausdruck, dessen Wert verwendet wird, solange das Ergebnis zwischen den Minimal- und Maximalwerten liegt.

- `max`
  - : Der Maximalwert ist der größte (positivste) Ausdruckswert, dem der Wert der Eigenschaft zugewiesen wird, wenn der bevorzugte Wert größer als diese obere Grenze ist.

Die Ausdrücke können mathematische Funktionen sein (siehe {{CSSxRef("calc", "calc()")}} für mehr Informationen), feste Werte, andere Ausdrücke, die zu einem gültigen Argumenttyp auswerten (wie {{CSSxRef("&lt;length&gt;")}}), oder verschachtelte {{CSSxRef("min", "min()")}} und {{CSSxRef("max", "max()")}} Funktionen. Für mathematische Ausdrücke können Sie Addition, Subtraktion, Multiplikation und Division ohne die Verwendung der `calc()` Funktion selbst verwenden. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnungen festzulegen.

Sie können unterschiedliche Einheiten für jeden Wert in Ihren Ausdrücken verwenden und unterschiedliche Einheiten in jeder der mathematischen Funktionen, die eines der Argumente bilden.

Beachten Sie die folgenden Aspekte während der Arbeit mit der Funktion:

- Mathematische Ausdrücke, die Prozentsätze für Breiten und Höhen von Tabellenspalten, Tabellenspalten-Gruppen, Tabellenzeilen, Tabellenzeilen-Gruppen und Tabellenzellen in sowohl Auto- als auch Fest-Layout-Tabellen beinhalten, _könnten_ behandelt werden, als ob `auto` angegeben worden wäre.
- Es ist erlaubt, `max()` und `min()` Funktionen als Ausdruckswerte zu verschachteln, wobei die inneren als einfache Klammern behandelt werden. Die Ausdrücke sind vollständige mathematische Ausdrücke, sodass Sie direkte Addition, Subtraktion, Multiplikation und Division ohne Verwendung der calc() Funktion selbst verwenden können.
- Der Ausdruck kann Werte umfassen, die die Operatoren Addition ( `+` ), Subtraktion ( `-` ), Multiplikation ( `*` ) und Division ( `/` ) verwenden, mit Anwendung der normalen Vorrangregeln der Operatoren. Stellen Sie sicher, dass auf jeder Seite der `+` und `-` Operanden ein Leerzeichen ist. Die Operanden im Ausdruck können beliebige {{CSSxRef("&lt;length&gt;")}} Syntaxwerte sein. Sie können unterschiedliche Einheiten für jeden Wert in Ihrem Ausdruck verwenden. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnungen festzulegen, falls erforderlich.
- Oftmals wollen Sie {{CSSxRef("min", "min()")}} und {{CSSxRef("max", "max()")}} innerhalb einer `clamp()` Funktion verwenden.

### Rückgabewert

`clamp(MIN, VAL, MAX)` wird als `{{CSSxRef("max", "max")}}(MIN, {{CSSxRef("min", "min")}}(VAL, MAX))` aufgelöst.

Basierend auf den bereitgestellten Parametern gibt die Funktion {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}}, oder {{CSSxRef("&lt;integer&gt;")}} zurück.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich von min(), max() und clamp()

In diesem Beispiel haben wir eine Webseite, die {{CSSxRef("min", "min()")}}, {{CSSxRef("max", "max()")}}, und `clamp()` verwendet, um Größen responsiv festzulegen.

Das Beispiel passt die Größen der Seitenelemente auf drei Arten an:

- die Länge der Textzeilen
- die Schriftgröße des Absatztextes
- die Schriftgröße des Überschriftstextes

In allen drei Fällen verwendet die Seite eine Kombination von ansichtsfensterrelativen Einheiten ([`vw`](/de/docs/Web/CSS/length#vw) und {{cssxref("percentage")}}), um eine Größe festzulegen, die mit der Breite des Ansichtsfensters variiert, und einen Wert, der nicht ansichtsfensterrelativ ist ([`rem`](/de/docs/Web/CSS/length#rem) und [`px`](/de/docs/Web/CSS/length#px)), um minimale und/oder maximale Größen zu implementieren.

Das Beispiel ist unter <https://mdn.github.io/css-examples/min-max-clamp/> verfügbar. Öffnen Sie es in einem neuen Fenster und probieren Sie, die Fensterbreite anzupassen.

Die **Zeilenlänge** (gesteuert durch die [`width`](/de/docs/Web/CSS/width) des [`<body>`](/de/docs/Web/HTML/Element/body) Elements) wird mit zunehmender Fensterbreite größer, aber nur bis zu einem bestimmten Punkt (`1000px`), und darüber hinaus wird sie nicht mehr größer. Wir verwenden `min()`, um eine **maximale Zeilenlänge** festzulegen: Sie kann unter `1000px` gehen, aber nicht darüber hinaus. Dies ist hilfreich, da lange Zeilen schwieriger zu lesen sind, also möchten wir oft begrenzen, wie lang eine Zeile sein kann. Um dies zu erreichen, verwenden wir `min(1000px, calc(70% + 100px))`: Wenn das Ergebnis der prozentsatzbasierten Berechnung über `1000px` geht, wechseln wir zu dem festen Wert von `1000px`.

Die **Größe des Absatztextes**, gesteuert durch die [`font-size`](/de/docs/Web/CSS/font-size) des [`<p>`](/de/docs/Web/HTML/Element/p) Elements, wird kleiner, wenn das Fenster schmaler wird, aber nur bis zu einem bestimmten Punkt. Darüber hinaus (der Punkt, an dem `1.2vw` kleiner ist als `1.2rem`) wird sie nicht kleiner: Sie bleibt bei `1.2rem`. Wir verwenden `max()`, um eine **minimale Schriftgröße** festzulegen: Die Schrift kann über `1.2rem` hinaus wachsen, wird aber nie darunter fallen. Dies ist hilfreich, da wirklich kleiner Text schwer zu lesen ist. Um dies zu erreichen, verwenden wir `max(1.2rem, 1.2vw)`. Dies bedeutet, dass die `font-size` auf `1.2rem` gesetzt wird, es sei denn, der berechnete Wert von `1.2vw` ist größer als der von `1.2rem`, in diesem Fall wird er stattdessen auf `1.2vw` gesetzt.

Die **Größe des Überschriftstextes**, gesteuert durch die [`font-size`](/de/docs/Web/CSS/font-size) des [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements) Elements, hat einen ansichtsfensterrelativen Wert mit sowohl einer maximalen als auch einer minimalen Grenze. Um dies zu erreichen, verwenden wir `clamp(1.8rem, 2.5vw, 2.8rem)`. Der ansichtsfensterrelative Wert ist `2.5vw`, aber er wird zwischen `1.8rem` und `2.8rem` begrenzt, also:

- Wenn der berechnete Wert von `2.5vw` kleiner ist als `1.8rem`, dann wird `1.8rem` verwendet.
- Wenn der berechnete Wert von `2.5vw` größer ist als `2.8rem`, dann wird `2.8rem` verwendet.

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
- [Lernen: CSS-Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
