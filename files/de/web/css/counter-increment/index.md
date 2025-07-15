---
title: counter-increment
slug: Web/CSS/counter-increment
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`counter-increment`**-Eigenschaft von [CSS](/de/docs/Web/CSS) kann verwendet werden, um den Wert der benannten [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) um die angegebenen Werte zu erhöhen oder zu verringern oder um zu verhindern, dass alle Zähler oder der Wert eines einzelnen Zählers geändert werden.

Wenn ein benannter Zähler in der Liste der durch Leerzeichen getrennten Zähler und Werte nicht existiert, wird er erstellt. Wenn kein Wert für einen Zähler in der Liste der Zähler angegeben wird, wird der Zähler um `1` erhöht.

Der Wert des Zählers kann mit der {{cssxref("counter-reset")}}-CSS-Eigenschaft auf jeden ganzzahligen Wert zurückgesetzt werden.

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

Die `counter-increment`-Eigenschaft nimmt als Wert entweder eine Liste von durch Leerzeichen getrennten Zählernamen, spezifiziert als `<custom-ident>` mit einem optionalen `<integer>`-Wert, oder das Schlüsselwort `none`. Sie können so viele Zähler angeben, wie Sie möchten, wobei jedes Namen- oder Namen-Zahl-Paar durch ein Leerzeichen getrennt ist.

- {{cssxref("&lt;custom-ident&gt;")}}
  - : Gibt den Namen des zu erhöhenden oder zu vermindernden Zählers an.
- {{cssxref("&lt;integer&gt;")}}
  - : Gibt den Wert an, der dem Zähler hinzugefügt werden soll. Wenn der Integer-Wert durch ein `-`-Zeichen vorangestellt ist, wird der Wert vom Zähler abgezogen. Standardmäßig wird `1` verwendet, wenn kein Wert angegeben ist.
- `none`
  - : Gibt an, dass kein Zähler erhöht oder verringert werden muss. Dieser Wert kann auch verwendet werden, um zu verhindern, dass alle Zähler in spezifischeren Regeln erhöht oder verringert werden. Dies ist der Standardwert der Eigenschaft.

> [!NOTE]
> Die Verwendung des Wertes `none` verhindert, dass alle Zähler für die ausgewählten Elemente, auf die diese Regel angewendet wird, erhöht oder verringert werden. Um nur bestimmte Zähler daran zu hindern, erhöht oder verringert zu werden, setzen Sie den `integer`-Wert auf `0` für die betreffenden Zähler.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verringern des Zählerwertes

In diesem Beispiel zeigen wir eine Zahlenreihe, die rückwärts zählt. Dazu verwenden wir einen Zähler, um Zahlen ab 100 anzuzeigen, die jedes Mal um 7 verringert werden.

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

Um die erste Zahl bei `100` zu setzen, zielen wir auf das erste `<i>`-Element mit der {{cssxref(":first-of-type")}}-Pseudoklasse und setzen `counter-increment: none;`. Zusätzlich wird die {{cssxref("content")}}-Eigenschaft im {{cssxref("::before")}}-Pseudoelement verwendet, um den Wert des Zählers mit der [`counter()`](/de/docs/Web/CSS/counter)-Funktion anzuzeigen.

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

Hätten wir `counter-reset` (oder {{cssxref("counter-set")}}) nicht verwendet, um den Zähler zu erstellen und den Wert auf `100` zu setzen, wäre der `sevens`-Zähler trotzdem erstellt worden, aber mit einem Anfangswert von `0`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Zählereigenschaften: {{cssxref("counter-set")}}, {{cssxref("counter-reset")}}
- Zählerregel: {{cssxref("@counter-style")}}
- Zählerfunktionen: {{cssxref("counter", "counter()")}}, {{cssxref("counters", "counters()")}}
- [Verwendung von CSS-Zählern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) Leitfaden
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
