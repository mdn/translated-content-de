---
title: CSS-Funktion `clamp()`
short-title: clamp()
slug: Web/CSS/Reference/Values/clamp
l10n:
  sourceCommit: 5cea7df435db1905b06d693b0192ef1e2166d6a7
---

Die **`clamp()`**-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) von [CSS](/de/docs/Web/CSS) begrenzt einen Wert auf einen Bereich zwischen einer festgelegten Untergrenze und einer Obergrenze. Die Funktion nimmt drei Parameter entgegen: einen Mindestwert, einen bevorzugten Wert und einen maximal zulässigen Wert.

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

Wenn Sie `clamp()` wie in diesen Beispielen für Schriftgrößen verwenden, können Sie eine Schriftgröße festlegen, die mit der Größe des Viewports wächst, aber weder unter eine Mindestschriftgröße fällt noch eine maximale Schriftgröße überschreitet. Das hat denselben Effekt wie der Code in [Fluid Typography](https://css-tricks.com/snippets/css/fluid-typography/), benötigt aber nur eine Zeile und keine Media Queries.

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
  - : Der Mindestwert ist der kleinste (am stärksten negative) Wert. Er bildet die Untergrenze des zulässigen Wertebereichs. Ist der bevorzugte Wert kleiner, wird der Mindestwert verwendet.

- `val`
  - : Der bevorzugte Wert ist der Ausdruck, dessen Wert verwendet wird, solange das Ergebnis zwischen dem Mindest- und dem Höchstwert liegt.

- `max`
  - : Der Höchstwert ist der größte (am stärksten positive) Ausdruckswert. Er wird der Eigenschaft zugewiesen, wenn der bevorzugte Wert diese Obergrenze überschreitet.

Die Ausdrücke können mathematische Funktionen (weitere Informationen finden Sie unter {{cssxref("calc()")}}), Literalwerte, andere Ausdrücke, die einen gültigen Argumenttyp ergeben (etwa {{CSSxRef("&lt;length&gt;")}}), oder verschachtelte Funktionen wie {{cssxref("min()")}} und {{cssxref("max()")}} sein. In mathematischen Ausdrücken können Sie Addition, Subtraktion, Multiplikation und Division verwenden, ohne die Funktion `calc()` selbst zu verwenden. Bei Bedarf können Sie mit Klammern die Reihenfolge der Berechnung festlegen.

Sie können für jeden Wert in Ihren Ausdrücken unterschiedliche Einheiten verwenden, auch innerhalb mathematischer Funktionen, aus denen sich die Argumente zusammensetzen.

Beachten Sie bei der Verwendung der Funktion Folgendes:

- Mathematische Ausdrücke mit Prozentwerten für Breiten und Höhen von Tabellenspalten, Tabellenspaltengruppen, Tabellenzeilen, Tabellenzeilengruppen und Tabellenzellen können sowohl bei Tabellen mit automatischem als auch mit festem Layout so behandelt werden, als wäre `auto` angegeben.
- Funktionen wie `max()` und `min()` dürfen als Ausdruckswerte verschachtelt werden. Die inneren Funktionen werden dabei wie einfache Klammern behandelt. Da es sich um vollständige mathematische Ausdrücke handelt, können Sie Addition, Subtraktion, Multiplikation und Division direkt verwenden, ohne die Funktion `calc()` selbst zu verwenden.
- Der Ausdruck kann Werte enthalten, die mit den Operatoren für Addition (`+`), Subtraktion (`-`), Multiplikation (`*`) und Division (`/`) verknüpft sind. Dabei gelten die üblichen Regeln für die Vorrangfolge der Operatoren. Achten Sie darauf, vor und nach den Operatoren `+` und `-` jeweils ein Leerzeichen einzufügen. Sie können für die einzelnen Werte unterschiedliche Einheiten verwenden und bei Bedarf mit Klammern die Reihenfolge der Berechnung festlegen.
- Häufig ist es sinnvoll, {{cssxref("min()")}} und {{cssxref("max()")}} innerhalb einer `clamp()`-Funktion zu verwenden.

### Rückgabewert

`clamp(MIN, VAL, MAX)` wird als `max(MIN, min(VAL, MAX))` ausgewertet.

Abhängig von den übergebenen Parametern gibt die Funktion einen Wert vom Typ {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{cssxref("angle")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}} oder {{CSSxRef("&lt;integer&gt;")}} zurück.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Wenn Sie `clamp()` zur Steuerung der Textgröße verwenden, achten Sie darauf, dass der maximal zulässige Wert eine [relative Längeneinheit](/de/docs/Web/CSS/Reference/Values/length#relative_length_units) verwendet und mindestens doppelt so groß wie der minimal zulässige Wert ist, zum Beispiel:

```css
font-size: clamp(1rem, 2.5vw, 2rem);
```

So lässt sich sicherstellen, dass der Text beim Zoomen der Seite auf mindestens 200 % vergrößert werden kann.

- [MDN: WCAG verstehen – Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erfolgskriterium 1.4.4 verstehen: Textgröße ändern | WAI | W3C](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)

## Beispiele

### Vergleich von min(), max() und clamp()

In diesem Beispiel verwendet eine Webseite {{cssxref("min()")}}, {{cssxref("max()")}} und `clamp()`, um Größen responsiv festzulegen.

Das Beispiel passt die Größen von Seitenelementen auf drei Arten an:

- die Länge der Textzeilen
- die Schriftgröße des Absatztexts
- die Schriftgröße des Überschriftentexts

In allen drei Fällen kombiniert die Seite Viewport-relative Einheiten ([`vw`](/de/docs/Web/CSS/Reference/Values/length#vw) und {{cssxref("percentage")}}), um eine von der Viewport-Breite abhängige Größe festzulegen, mit einem nicht Viewport-relativen Wert ([`rem`](/de/docs/Web/CSS/Reference/Values/length#rem) und [`px`](/de/docs/Web/CSS/Reference/Values/length#px)), um Mindest- und/oder Höchstgrößen festzulegen.

Das Beispiel finden Sie unter <https://mdn.github.io/css-examples/min-max-clamp/>. Öffnen Sie es in einem neuen Fenster und ändern Sie die Fensterbreite.

Die **Zeilenlänge** (gesteuert durch die Eigenschaft {{cssxref("width")}} des Elements [`<body>`](/de/docs/Web/HTML/Reference/Elements/body)) nimmt mit der Fensterbreite zu, jedoch nur bis zu einem bestimmten Wert (`1000px`). Darüber hinaus wächst sie nicht weiter. Mit `min()` legen wir eine **maximale Zeilenlänge** fest: Sie kann unter `1000px` liegen, überschreitet diesen Wert aber nicht. Das ist hilfreich, weil lange Zeilen schwerer zu lesen sind und wir ihre Länge daher oft begrenzen möchten. Dafür verwenden wir `min(1000px, calc(70% + 100px))`: Sobald das Ergebnis der prozentbasierten Berechnung `1000px` überschreitet, wird stattdessen der feste Wert `1000px` verwendet.

Die **Schriftgröße des Absatztexts**, gesteuert durch die Eigenschaft {{cssxref("font-size")}} des Elements [`<p>`](/de/docs/Web/HTML/Reference/Elements/p), nimmt ab, wenn das Fenster schmaler wird. Ab einem bestimmten Punkt – wenn `1.2vw` kleiner als `1.2rem` ist – wird sie jedoch nicht weiter verkleinert, sondern bleibt bei `1.2rem`. Mit `max()` legen wir eine **Mindestschriftgröße** fest: Die Schrift kann größer als `1.2rem` werden, aber nie kleiner. Das ist hilfreich, weil sehr kleiner Text schwer zu lesen ist. Dafür verwenden wir `max(1.2rem, 1.2vw)`. Das bedeutet, dass `font-size` auf `1.2rem` gesetzt wird, sofern der berechnete Wert von `1.2vw` nicht größer als `1.2rem` ist. In diesem Fall wird stattdessen `1.2vw` verwendet.

Die **Schriftgröße des Überschriftentexts**, gesteuert durch die Eigenschaft {{cssxref("font-size")}} des Elements [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), hat einen Viewport-relativen Wert mit einer Unter- und einer Obergrenze. Dafür verwenden wir `clamp(1.8rem, 2.5vw, 2.8rem)`. Der Viewport-relative Wert ist `2.5vw`, wird aber auf den Bereich zwischen `1.8rem` und `2.8rem` begrenzt:

- Ist der berechnete Wert von `2.5vw` kleiner als `1.8rem`, wird `1.8rem` verwendet.
- Ist der berechnete Wert von `2.5vw` größer als `2.8rem`, wird `2.8rem` verwendet.

So wird verhindert, dass der Überschriftentext in einem sehr schmalen Fenster zu klein oder in einem sehr breiten Fenster zu groß wird.

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

- {{cssxref("calc()")}}
- {{cssxref("max()")}}
- {{cssxref("min()")}}
- [Lernen: CSS-Werte und -Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
