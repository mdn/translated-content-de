---
title: "`counter-increment` CSS property"
short-title: counter-increment
slug: Web/CSS/Reference/Properties/counter-increment
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`counter-increment`** [CSS](/de/docs/Web/CSS) Eigenschaft kann verwendet werden, um den Wert der benannten [CSS-Zähler](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters) um die angegebenen Werte zu erhöhen oder zu verringern oder um zu verhindern, dass alle oder einzelne Zählerwerte verändert werden.

Wenn ein benannter Zähler in der Liste der durch Leerzeichen getrennten Zähler und Werte nicht existiert, wird er erstellt. Wenn in der Liste der Zähler kein Wert für einen Zähler angegeben wird, wird der Zähler um `1` erhöht.

Der Wert des Zählers kann mit der {{cssxref("counter-reset")}} CSS-Eigenschaft auf einen beliebigen ganzzahligen Wert zurückgesetzt werden.

{{InteractiveExample("CSS Demo: counter-increment")}}

```css interactive-example-choice
counter-increment: example-counter;
```

```css interactive-example-choice
counter-increment: example-counter 0;
```

```css interactive-example-choice
counter-increment: example-counter 5;
```

```css interactive-example-choice
counter-increment: example-counter -5;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">Counter value:</div>
</section>
```

```css interactive-example
#default-example {
  text-align: left;
  counter-reset: example-counter;
}

#example-element::after {
  content: counter(example-counter);
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

Die `counter-increment`-Eigenschaft akzeptiert als Wert entweder eine Liste der durch Leerzeichen getrennten Zählernamen, angegeben als `<custom-ident>` mit einem optionalen `<integer>`-Wert, oder das Schlüsselwort `none`. Sie können so viele Zähler inkrementieren, wie Sie möchten, wobei jeder Name oder jedes Namens-Nummern-Paar durch ein Leerzeichen getrennt ist.

- {{cssxref("&lt;custom-ident&gt;")}}
  - : Gibt den Namen des Zählers an, der erhöht oder verringert werden soll.
- {{cssxref("&lt;integer&gt;")}}
  - : Gibt den Wert an, der zum Zähler hinzugefügt werden soll. Wenn die ganze Zahl von einem `-`-Zeichen vorangestellt wird, wird der Wert vom Zähler subtrahiert. Standardmäßig wird `1` angenommen, wenn kein Wert angegeben wird.
- `none`
  - : Gibt an, dass kein Zähler erhöht oder verringert werden darf. Dieser Wert kann auch verwendet werden, um alle Zähler in spezifischeren Regeln vor einer Erhöhung oder Verminderung zu bewahren. Dies ist der Standardwert der Eigenschaft.

> [!NOTE]
> Die Verwendung des Werts `none` verhindert, dass alle Zähler für die ausgewählten Elemente, für die diese Regel gilt, erhöht oder verringert werden. Um nur bestimmte Zähler nicht zu erhöhen oder zu verringern, setzen Sie den `integer`-Wert auf `0` bei den relevanten Zählern.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verringern des Zählerwerts

In diesem Beispiel zeigen wir eine Zahlenreihe an, die rückwärts zählt. Dazu verwenden wir einen Zähler, um Zahlen beginnend bei 100 anzuzeigen und jedes Mal um 7 zu verringern.

#### HTML

```html
<div>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i> <i></i><i></i><i></i><i></i
  ><i></i><i></i><i></i> <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
</div>
```

#### CSS

Wir setzen den Anfangswert des Zählers namens `sevens` auf `100` mit {{cssxref("counter-reset")}}. Dann verringern wir für jedes {{HTMLElement("i")}} den Zähler um `7`.

Um die erste Zählung auf `100` zu setzen, zielen wir auf das erste `<i>`-Element mit der {{cssxref(":first-of-type")}} Pseudo-Klasse und setzen `counter-increment: none;`. Zusätzlich wird die {{cssxref("content")}} Eigenschaft im {{cssxref("::before")}} Pseudo-Element verwendet, um den Wert des Zählers mit der [`counter()`](/de/docs/Web/CSS/Reference/Values/counter) Funktion anzuzeigen.

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

Hätten wir nicht `counter-reset` (oder {{cssxref("counter-set")}}) verwendet, um den Zähler zu erstellen und den Wert auf `100` zu setzen, wäre der `sevens`-Zähler trotzdem erstellt worden, aber mit einem Anfangswert `0`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Zählereigenschaften: {{cssxref("counter-set")}}, {{cssxref("counter-reset")}}
- Zählerregel: {{cssxref("@counter-style")}}
- Zählerfunktionen: {{cssxref("counter()")}}, {{cssxref("counters()")}}
- [Verwendung von CSS-Zählern](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters) Leitfaden
- [CSS-Listen und Zähler](/de/docs/Web/CSS/Guides/Lists) Modul
- [CSS-Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles) Modul
