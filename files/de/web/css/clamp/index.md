---
title: clamp()
slug: Web/CSS/clamp
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Die **`clamp()`**-[CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) begrenzt einen Wert innerhalb eines Wertebereichs zwischen einer definierten unteren und oberen Grenze. Die Funktion nimmt drei Parameter: einen minimalen Wert, einen bevorzugten Wert und einen maximal zulässigen Wert.

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

Beachten Sie, dass die Verwendung von `clamp()` für Schriftgrößen, wie in diesen Beispielen, es Ihnen ermöglicht, eine Schriftgröße festzulegen, die mit der Größe des Ansichtsfensters wächst, aber nicht unter eine minimale oder über eine maximale Schriftgröße geht. Es hat denselben Effekt wie der Code in [Fluid Typography](https://css-tricks.com/snippets/css/fluid-typography/), jedoch in einer Zeile und ohne die Verwendung von Media-Queries.

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

Die `clamp(min, val, max)`-Funktion akzeptiert drei durch Kommas getrennte Ausdrücke als Parameter.

- `min`
  - : Der minimale Wert ist der kleinste (am meisten negative) Wert. Dies ist die untere Grenze im Bereich der zulässigen Werte. Wenn der bevorzugte Wert kleiner als dieser ist, wird der minimale Wert verwendet.

- `val`
  - : Der bevorzugte Wert ist der Ausdruck, dessen Wert verwendet wird, solange das Ergebnis zwischen den minimalen und maximalen Werten liegt.

- `max`
  - : Der maximale Wert ist der größte (am meisten positive) Ausdruckswert, dem der Wert der Eigenschaft zugewiesen wird, wenn der bevorzugte Wert größer als diese obere Grenze ist.

Die Ausdrücke können mathematische Funktionen sein (siehe {{CSSxRef("calc", "calc()")}} für mehr Informationen), Literale, andere Ausdrücke, die zu einem gültigen Argumenttyp auswerten (wie {{CSSxRef("&lt;length&gt;")}}), oder verschachtelte {{CSSxRef("min", "min()")}} und {{CSSxRef("max", "max()")}} Funktionen. Für mathematische Ausdrücke können Sie Addition, Subtraktion, Multiplikation und Division ohne Verwendung der `calc()`-Funktion selbst verwenden. Sie können auch Klammern benutzen, um die Reihenfolge der Berechnungen festzulegen, wenn nötig.

Sie können verschiedene Einheiten für jeden Wert in Ihren Ausdrücken und verschiedene Einheiten in jeder mathematischen Funktion verwenden, die eines der Argumente bildet.

Beachten Sie folgende Aspekte bei der Arbeit mit der Funktion:

- Mathematische Ausdrücke, die Prozentsätze für Breiten und Höhen bei Tabellenspalten, bei Gruppen von Tabellenspalten, bei Tabellenreihen, bei Gruppen von Tabellenreihen und bei Tabellenzellen in sowohl automatischen als auch festen Layout-Tabellen beinhalten, _könnten_ behandelt werden, als ob `auto` angegeben wurde.
- Es ist erlaubt, `max()` und `min()`-Funktionen als Ausdruckswerte zu verschachteln, wobei die inneren dann als grundlegende Klammern behandelt werden. Die Ausdrücke sind vollständige mathematische Ausdrücke, sodass Sie direkte Addition, Subtraktion, Multiplikation und Division ohne Verwendung der calc()-Funktion selbst verwenden können.
- Der Ausdruck kann Werte kombinierend mit den Operatoren Addition ( `+` ), Subtraktion ( `-` ), Multiplikation ( `*` ) und Division ( `/` ) sein, unter Anwendung der Standardregeln für Operatorpriorität. Achten Sie darauf, einen Abstand auf jeder Seite der `+` und `-` Operanden zu lassen. Die Operanden im Ausdruck können jeden {{CSSxRef("&lt;length&gt;")}}-Syntaxwert haben. Sie können unterschiedliche Einheiten für jeden Wert in Ihrem Ausdruck verwenden. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnungen festzulegen, wenn nötig.
- Oftmals möchten Sie {{CSSxRef("min", "min()")}} und {{CSSxRef("max", "max()")}} innerhalb einer `clamp()`-Funktion verwenden.

### Rückgabewert

`clamp(MIN, VAL, MAX)` wird aufgelöst als `max(MIN, min(VAL, MAX))`.

Basierend auf den angegebenen Parametern gibt die Funktion {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}} oder {{CSSxRef("&lt;integer&gt;")}} zurück.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### min(), max() und clamp() Vergleich

In diesem Beispiel haben wir eine Webseite, die {{CSSxRef("min", "min()")}}, {{CSSxRef("max", "max()")}} und `clamp()` verwendet, um Größen reaktionsfähig festzulegen.

Das Beispiel passt die Größen der Seitenelemente auf drei Weisen an:

- die Längen der Textzeilen
- die Schriftgröße des Absatztexts
- die Schriftgröße des Überschriftentexts

In allen drei Fällen verwendet die Seite eine Kombination von ansichtsfensterrelativen Einheiten ([`vw`](/de/docs/Web/CSS/length#vw) und {{cssxref("percentage")}}), um eine Größe festzulegen, die mit der Breite des Ansichtsfensters variiert, und einen Wert, der nicht ansichtsfensterrelativ ist ([`rem`](/de/docs/Web/CSS/length#rem) und [`px`](/de/docs/Web/CSS/length#px)), um minimale und/oder maximale Größen zu implementieren.

Das Beispiel ist verfügbar unter <https://mdn.github.io/css-examples/min-max-clamp/>. Öffnen Sie es in einem neuen Fenster und probieren Sie, die Fensterbreite anzupassen.

Die **Linienlänge** (gesteuert durch die [`width`](/de/docs/Web/CSS/width) des [`<body>`](/de/docs/Web/HTML/Reference/Elements/body)-Elements) wird größer, wenn die Fensterbreite zunimmt, aber nur bis zu einem bestimmten Punkt (`1000px`), und darüber hinaus wird sie nicht mehr weiter zunehmen. Wir verwenden `min()`, um eine **maximale Linienlänge** festzulegen: Sie kann unter `1000px` gehen, aber nicht darüber hinaus. Dies ist hilfreich, da lange Zeilen schwerer zu lesen sind, daher möchten wir oft begrenzen, wie lang eine Zeile sein kann. Um dies zu erreichen, verwenden wir `min(1000px, calc(70% + 100px))`: wenn das Ergebnis der prozentual basierten Berechnung über `1000px` geht, wechseln wir zum festen `1000px`-Wert.

Die **Größe des Absatztexts**, gesteuert durch die [`font-size`](/de/docs/Web/CSS/font-size) des [`<p>`](/de/docs/Web/HTML/Reference/Elements/p)-Elements, nimmt ab, wenn das Fenster schmaler wird, aber nur bis zu einem bestimmten Punkt, und darüber hinaus (der Punkt, an dem `1.2vw` kleiner als `1.2rem` ist) wird es nicht mehr kleiner: es bleibt bei `1.2rem`. Wir verwenden `max()`, um eine **minimale Schriftgröße** festzulegen: Die Schrift kann über `1.2rem` hinaus wachsen, wird aber niemals darunter gehen. Dies ist hilfreich, weil wirklich kleiner Text schwer zu lesen ist. Um dies zu erreichen, verwenden wir `max(1.2rem, 1.2vw)`. Das bedeutet, dass die `font-size` auf `1.2rem` festgelegt wird, es sei denn, der berechnete Wert von `1.2vw` ist größer als der von `1.2rem`, in diesem Fall wird sie stattdessen auf `1.2vw` gesetzt.

Die **Größe des Überschriftentexts**, gesteuert durch die [`font-size`](/de/docs/Web/CSS/font-size) des [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)-Elements, hat einen ansichtsfensterrelativen Wert mit sowohl einem maximalen als auch einem minimalen Schwellenwert. Um dies zu erreichen, verwenden wir `clamp(1.8rem, 2.5vw, 2.8rem)`. Der ansichtsfensterrelative Wert ist `2.5vw`, aber er wird zwischen `1.8rem` und `2.8rem` begrenzt, sodass:

- wenn der berechnete Wert von `2.5vw` kleiner als `1.8rem` ist, dann wird `1.8rem` verwendet
- wenn der berechnete Wert von `2.5vw` größer als `2.8rem` ist, dann wird `2.8rem` verwendet.

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
- [Lernen: CSS-Werte und -Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
