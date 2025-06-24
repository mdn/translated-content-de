---
title: clamp()
slug: Web/CSS/clamp
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`clamp()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) beschränkt einen mittleren Wert innerhalb eines Bereichs von Werten zwischen einer definierten unteren und oberen Grenze. Die Funktion nimmt drei Parameter: einen Minimalwert, einen bevorzugten Wert und einen maximal zulässigen Wert.

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

Beachten Sie, dass die Verwendung von `clamp()` für Schriftgrößen, wie in diesen Beispielen, es Ihnen ermöglicht, eine Schriftgröße festzulegen, die mit der Größe des Ansichtsfensters wächst, aber nicht unter eine minimale Schriftgröße oder über eine maximale Schriftgröße hinausgeht. Es hat denselben Effekt wie der Code in [Fluid Typography](https://css-tricks.com/snippets/css/fluid-typography/), jedoch in einer Zeile und ohne die Verwendung von Media Queries.

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

Die Funktion `clamp(min, val, max)` nimmt drei durch Kommas getrennte Ausdrücke als Parameter an.

- `min`

  - : Der Minimalwert ist der kleinste (negativste) Wert. Dies ist die untere Grenze im Bereich der zulässigen Werte. Wenn der bevorzugte Wert kleiner als dieser Wert ist, wird der Minimalwert verwendet.

- `val`

  - : Der bevorzugte Wert ist der Ausdruck, dessen Wert verwendet wird, solange das Ergebnis zwischen den Minimal- und Maximalwerten liegt.

- `max`
  - : Der Maximalwert ist der größte (positivste) Ausdruckswert, auf den der Wert der Eigenschaft gesetzt wird, wenn der bevorzugte Wert größer als diese obere Grenze ist.

Die Ausdrücke können mathematische Funktionen sein (siehe {{CSSxRef("calc", "calc()")}} für mehr Informationen), wörtliche Werte, andere Ausdrücke, die zu einem gültigen Argumenttyp auswerten (wie {{CSSxRef("&lt;length&gt;")}}), oder verschachtelte {{CSSxRef("min", "min()")}} und {{CSSxRef("max", "max()")}} Funktionen. Für mathematische Ausdrücke können Sie Addition, Subtraktion, Multiplikation und Division ohne Verwendung der `calc()` Funktion selbst nutzen. Sie dürfen auch Klammern verwenden, um die Reihenfolge der Berechnungen festzulegen, wenn nötig.

Sie können unterschiedliche Einheiten für jeden Wert in Ihren Ausdrücken und unterschiedliche Einheiten in jeder mathematischen Funktion, die einen der Argumente bildet, verwenden.

Beachten Sie die folgenden Aspekte bei der Arbeit mit der Funktion:

- Mathematische Ausdrücke, die Prozentsätze für Breiten und Höhen auf Tabellenspalten, Tabellenspalten-Gruppen, Tabellenzeilen, Tabellenzeilen-Gruppen und Tabellenzellen in sowohl automatischen als auch festen Layout-Tabellen beinhalten, _könnten_ so behandelt werden, als wäre `auto` angegeben worden.
- Es ist zulässig, `max()` und `min()` Funktionen als Ausdruckswerte zu verschachteln, wobei die inneren wie einfache Klammern behandelt werden. Die Ausdrücke sind vollständige mathematische Ausdrücke, daher können Sie direkte Addition, Subtraktion, Multiplikation und Division ohne die Verwendung der `calc()` Funktion selbst verwenden.
- Der Ausdruck kann Werte kombinieren, die die Operatoren Addition ( `+` ), Subtraktion ( `-` ), Multiplikation ( `*` ) und Division ( `/` ) verwenden, nach den Standardregeln der Operatorpräzedenz. Achten Sie darauf, auf jede Seite der Operanden `+` und `-` ein Leerzeichen zu setzen. Die Operanden im Ausdruck können jegliche {{CSSxRef("&lt;length&gt;")}} Syntaxwert sein. Sie können unterschiedliche Einheiten für jeden Wert in Ihrem Ausdruck verwenden. Sie dürfen auch Klammern verwenden, um die Reihenfolge der Berechnungen festzulegen, wenn nötig.
- Oftmals möchten Sie {{CSSxRef("min", "min()")}} und {{CSSxRef("max", "max()")}} innerhalb einer `clamp()` Funktion verwenden.

### Rückgabewert

`clamp(MIN, VAL, MAX)` wird aufgelöst als `max(MIN, min(VAL, MAX))`.

Basierend auf den bereitgestellten Parametern gibt die Funktion {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}}, oder {{CSSxRef("&lt;integer&gt;")}} zurück.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich von min(), max() und clamp()

In diesem Beispiel haben wir eine Webseite, die {{CSSxRef("min", "min()")}}, {{CSSxRef("max", "max()")}}, und `clamp()` verwendet, um Größen anpassungsfähig einzustellen.

Das Beispiel passt die Größen von Seitenelementen auf drei Arten an:

- die Längen der Textzeilen
- die Schriftgröße des Absatztexts
- die Schriftgröße des Überschriftentexts

In allen drei Fällen verwendet die Seite eine Kombination von viewport-relativen Einheiten ([`vw`](/de/docs/Web/CSS/length#vw) und {{cssxref("percentage")}}), um eine Größe zu setzen, die mit der Breite des Ansichtsfensters variiert, und einen Wert, der nicht viewport-relativ ist ([`rem`](/de/docs/Web/CSS/length#rem) und [`px`](/de/docs/Web/CSS/length#px)), um minimale und/oder maximale Größen zu implementieren.

Das Beispiel ist verfügbar unter <https://mdn.github.io/css-examples/min-max-clamp/>. Öffnen Sie es in einem neuen Fenster und versuchen Sie, die Fensterbreite anzupassen.

Die **Zeilenlänge** (gesteuert durch die [`width`](/de/docs/Web/CSS/width) des [`<body>`](/de/docs/Web/HTML/Reference/Elements/body) Elements) wird größer, wenn die Fensterbreite zunimmt, aber nur bis zu einem bestimmten Punkt (`1000px`), und darüber hinaus wird sie nicht mehr größer. Wir verwenden `min()`, um eine **maximale Zeilenlänge** einzustellen: sie kann unter `1000px` liegen, wird aber nicht darüber hinausgehen. Dies ist hilfreich, weil lange Zeilen schwerer zu lesen sind, daher möchten wir oft begrenzen, wie lang eine Zeile sein kann. Um dies zu erreichen, verwenden wir `min(1000px, calc(70% + 100px))`: wenn das Ergebnis der prozentualen Berechnung über `1000px` geht, wechseln wir zu dem festen Wert von `1000px`.

Die **Größe des Absatztextes**, gesteuert durch die [`font-size`](/de/docs/Web/CSS/font-size) des [`<p>`](/de/docs/Web/HTML/Reference/Elements/p) Elements, verringert sich, wenn das Fenster enger wird, aber nur bis zu einem bestimmten Punkt, und darüber hinaus (der Punkt, an dem `1.2vw` kleiner als `1.2rem` ist) wird es nicht kleiner: es bleibt bei `1.2rem`. Wir verwenden `max()`, um eine **minimale Schriftgröße** einzustellen: die Schrift kann über `1.2rem` wachsen, wird aber nie darunter gehen. Dies ist hilfreich, weil wirklich kleiner Text schwer zu lesen ist. Um dies zu erreichen, verwenden wir `max(1.2rem, 1.2vw)`. Das bedeutet, dass die `Schriftgröße` auf `1.2rem` gesetzt wird, es sei denn, der berechnete Wert von `1.2vw` ist größer als der von `1.2rem`, in welchem Fall sie auf `1.2vw` gesetzt wird.

Die **Größe des Überschriftentextes**, gesteuert durch die [`font-size`](/de/docs/Web/CSS/font-size) des [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) Elements, hat einen viewport-relativen Wert mit sowohl einem maximalen als auch einem minimalen Schwellenwert. Um dies zu erreichen, verwenden wir `clamp(1.8rem, 2.5vw, 2.8rem)`. Der viewport-relative Wert ist `2.5vw`, aber er wird zwischen `1.8rem` und `2.8rem` eingegrenzt, also:

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
- [Lernen: CSS Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
