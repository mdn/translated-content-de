---
title: "`counter-increment` CSS property"
short-title: counter-increment
slug: Web/CSS/Reference/Properties/counter-increment
l10n:
  sourceCommit: 737b931225e92e0cba47e57a150878b1a78ee45a
---

Die **`counter-increment`** [CSS](/de/docs/Web/CSS) Eigenschaft kann verwendet werden, um den Wert der benannten [CSS-Zähler](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters) um die angegebenen Werte zu erhöhen oder zu verringern, oder um zu verhindern, dass der Wert aller Zähler oder eines einzelnen Zählers geändert wird.

Wenn ein benannter Zähler in der Liste der durch Leerzeichen getrennten Zähler und Werte nicht existiert, wird er erstellt. Wird kein Wert für einen Zähler in der Liste angegeben, wird der Zähler um `1` erhöht.

Der Wert des Zählers kann mit der {{cssxref("counter-reset")}} CSS-Eigenschaft auf einen beliebigen Ganzzahlwert zurückgesetzt werden.

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

Diese Eigenschaft wird als eine durch Leerzeichen getrennte Liste von `<custom-ident>`-Werten angegeben, die jeweils optional von einem `<integer>` gefolgt werden, oder dem Schlüsselwort `none`:

- {{cssxref("&lt;custom-ident&gt;")}}
  - : Gibt den Namen des Zählers an, der erhöht oder verringert werden soll.
- {{cssxref("&lt;integer&gt;")}}
  - : Gibt den Wert an, der dem Zähler hinzugefügt wird. Wenn der Ganzzahlwert einem `-` Zeichen vorausgeht, wird der Wert vom Zähler subtrahiert. Der Standardwert ist `1`, wenn kein Wert angegeben wird.
- `none`
  - : Gibt an, dass kein Zähler erhöht oder verringert werden muss. Dieser Wert kann auch verwendet werden, um alle Zähler von der Erhöhung oder Verringerung in spezifischeren Regeln auszuschließen. Dies ist der Standardwert der Eigenschaft.

> [!NOTE]
> Die Verwendung des Wertes `none` verhindert, dass alle Zähler für die ausgewählten Elemente, für die diese Regel gilt, erhöht oder verringert werden. Um nur bestimmte Zähler vom Erhöhen oder Verringern auszunehmen, setzen Sie den `integer`-Wert auf `0` für die entsprechenden Zähler.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Den Zählerwert verringern

In diesem Beispiel zeigen wir eine Zahlenfolge rückwärts zählend an. Dazu verwenden wir einen Zähler, um ab`100` zu beginnen und jedes Mal um `7` zu verringern.

#### HTML

```html
<div>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i> <i></i><i></i><i></i><i></i
  ><i></i><i></i><i></i> <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
</div>
```

#### CSS

Wir setzen den Anfangswert des Zählers namens `sevens` auf `100` mit der Verwendung von {{cssxref("counter-reset")}}. Dann verringern wir für jedes {{HTMLElement("i")}} den Zähler um `7`.

Um den ersten Zählwert auf `100` zu setzen, zielen wir auf das erste `<i>`-Element mit der Verwendung der {{cssxref(":first-of-type")}} Pseudo-Klasse und setzen `counter-increment: none;`. Zusätzlich wird die {{cssxref("content")}} Eigenschaft im {{cssxref("::before")}} Pseudo-Element verwendet, um den Wert des Zählers mit der [`counter()`](/de/docs/Web/CSS/Reference/Values/counter) Funktion anzuzeigen.

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

Hätten wir `counter-reset` (oder {{cssxref("counter-set")}}) nicht verwendet, um den Zähler zu erstellen und den Wert auf `100` zu setzen, wäre der `sevens` Zähler trotzdem erstellt worden, jedoch mit einem anfänglichen Wert von `0`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Zählereigenschaften: {{cssxref("counter-set")}}, {{cssxref("counter-reset")}}
- Counter-At-Regel: {{cssxref("@counter-style")}}
- Zählerfunktionen: {{cssxref("counter()")}}, {{cssxref("counters()")}}
- [Using CSS counters](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters) Leitfaden
- [CSS lists and counters](/de/docs/Web/CSS/Guides/Lists) Modul
- [CSS counter styles](/de/docs/Web/CSS/Guides/Counter_styles) Modul
