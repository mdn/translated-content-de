---
title: "`counter-increment` CSS property"
short-title: counter-increment
slug: Web/CSS/Reference/Properties/counter-increment
l10n:
  sourceCommit: fd30a91f7c0f5bc65445dd931ec9754806bbd5fb
---

Die **`counter-increment`** [CSS](/de/docs/Web/CSS)-Eigenschaft kann verwendet werden, um den Wert der benannten [CSS-Zähler](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters) um die angegebenen Werte zu erhöhen oder zu verringern oder um zu verhindern, dass der Wert aller Zähler oder eines einzelnen Zählers geändert wird.

Wenn ein benannter Zähler in der Liste der durch Leerzeichen getrennten Zähler und Werte nicht existiert, wird er erstellt. Wenn kein Wert für einen Zähler in der Liste der Zähler angegeben wird, wird der Zähler um `1` erhöht.

Der Wert des Zählers kann mit der {{cssxref("counter-reset")}} CSS-Eigenschaft auf einen beliebigen ganzzahligen Wert zurückgesetzt werden.

{{InteractiveExample("CSS Demo: counter-increment")}}

```css interactive-example-choice
counter-increment: chapter-count;
```

```css interactive-example-choice
counter-increment: chapter-count 0;
```

```css interactive-example-choice
counter-increment: chapter-count 5;
```

```css interactive-example-choice
counter-increment: chapter-count -5;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="chapters">
    <h1>Alice's Adventures in Wonderland</h1>
    <h2>Down the Rabbit-Hole</h2>
    <h2 id="example-element">The Pool of Tears</h2>
    <h2>A Caucus-Race and a Long Tale</h2>
    <h2>The Rabbit Sends in a Little Bill</h2>
  </div>
</section>
```

```css interactive-example
#default-example {
  text-align: left;
  counter-reset: chapter-count;
}

#example-element {
  background-color: lightblue;
  color: black;
}

h2 {
  counter-increment: chapter-count;
  font-size: 1em;
}

h2::before {
  content: "Chapter " counter(chapter-count) ": ";
}
```

## Syntax

```css
/* Increases "my-counter" by 1 */
counter-increment: my-counter;

/* Decreases "my-counter" by 1 */
counter-increment: my-counter -1;

/* Increases "counter1" by 1 and decreases "counter2" by 4 */
counter-increment: counter1 counter2 -4;

/* Increases "page" by 1, "section" by 2, while "chapter" doesn't change */
counter-increment: chapter 0 section 2 page;

/* Do not increment/decrement anything: used to override less specific rules */
counter-increment: none;

/* Global values */
counter-increment: inherit;
counter-increment: initial;
counter-increment: revert;
counter-increment: revert-layer;
counter-increment: unset;
```

### Werte

Diese Eigenschaft wird als eine durch Leerzeichen getrennte Liste von `<custom-ident>`-Werten angegeben, von denen jeder optional von einem `<integer>` gefolgt wird, oder dem Schlüsselwort `none`:

- {{cssxref("&lt;custom-ident&gt;")}}
  - : Gibt den Namen des Zählers an, der erhöht oder verringert werden soll.
- {{cssxref("&lt;integer&gt;")}}
  - : Gibt den Wert an, der dem Zähler hinzugefügt werden soll. Wenn die Ganzzahl von einem `-`-Zeichen vorangestellt wird, wird der Wert vom Zähler subtrahiert. Standardmäßig wird `1` verwendet, wenn kein Wert angegeben wird.
- `none`
  - : Gibt an, dass kein Zähler erhöht oder verringert werden darf. Dieser Wert kann auch verwendet werden, um zu verhindern, dass Zähler in spezifischeren Regeln erhöht oder verringert werden. Dies ist der Standardwert der Eigenschaft.

> [!NOTE]
> Die Verwendung des Wertes `none` verhindert, dass alle Zähler für die ausgewählten Elemente, auf die diese Regel angewendet wird, erhöht oder verringert werden. Um nur spezifische Zähler vom Erhöhen oder Verringern abzuhalten, setzen Sie den `integer`-Wert auf `0` für die relevanten Zähler.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Den Zählerwert verringern

In diesem Beispiel zeigen wir eine Nummernfolge, die rückwärts zählt. Dazu verwenden wir einen Zähler, um Nummern anzuzeigen, die bei 100 beginnen und sich jedes Mal um 7 verringern.

#### HTML

```html
<div>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i> <i></i><i></i><i></i><i></i
  ><i></i><i></i><i></i> <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
</div>
```

#### CSS

Wir setzen den anfänglichen Wert des Zählers namens `sevens` auf `100` mithilfe von {{cssxref("counter-reset")}}. Dann verringern wir für jedes {{HTMLElement("i")}} den Zähler um `7`.

Um den ersten Zähler bei `100` einzustellen, zielen wir mit der {{cssxref(":first-of-type")}} Pseudo-Klasse auf das erste `<i>`-Element und setzen `counter-increment: none;`. Zusätzlich wird die {{cssxref("content")}} Eigenschaft im {{cssxref("::before")}} Pseudo-Element verwendet, um den Wert des Zählers mithilfe der [`counter()`](/de/docs/Web/CSS/Reference/Values/counter) Funktion anzuzeigen.

```css
div {
  counter-reset: sevens 100;
}
i {
  counter-increment: sevens -7;
}
i:first-of-type {
  counter-increment: none;
}
i::before {
  content: counter(sevens);
}
```

```css hidden
div {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 300px;
  width: 200px;
}
i {
  flex: 0 0 2em;
}
```

#### Ergebnis

{{EmbedLiveSample("Decreasing the counter value", 140, 300)}}

Hätten wir `counter-reset` (oder {{cssxref("counter-set")}}) nicht verwendet, um den Zähler zu erstellen und den Wert auf `100` zu setzen, wäre der `sevens` Zähler dennoch erstellt worden, allerdings mit einem Anfangswert von `0`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Zählereigenschaften: {{cssxref("counter-set")}}, {{cssxref("counter-reset")}}
- Counter-At-Regel: {{cssxref("@counter-style")}}
- Zählerfunktionen: {{cssxref("counter()")}}, {{cssxref("counters()")}}
- [Verwendung von CSS-Zählern](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters) Leitfaden
- [CSS-Listen und Zähler](/de/docs/Web/CSS/Guides/Lists) Modul
- [CSS-Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles) Modul
