---
title: counter-increment
slug: Web/CSS/Reference/Properties/counter-increment
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`counter-increment`**-Eigenschaft von [CSS](/de/docs/Web/CSS) kann verwendet werden, um den Wert der benannten [CSS-Counter](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) um die angegebenen Werte zu erhöhen oder zu verringern, oder um zu verhindern, dass alle oder einzelne Counter-Werte geändert werden.

Wenn ein in der Liste der durch Leerzeichen getrennten Counter und Werte benannter Counter nicht existiert, wird er erstellt. Wenn kein Wert für einen Counter in der Liste bereitgestellt wird, wird der Counter um `1` erhöht.

Der Wert des Counters kann mit der CSS-Eigenschaft {{cssxref("counter-reset")}} auf jeden ganzzahligen Wert zurückgesetzt werden.

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

Die `counter-increment`-Eigenschaft nimmt als Wert entweder eine Liste von durch Leerzeichen getrennten Counternamen, angegeben als `<custom-ident>` mit einem optionalen `<integer>`-Wert, oder das Schlüsselwort `none`. Es können so viele Counter erhöht werden, wie Sie möchten, wobei jeder Name oder Name-Nummer-Paar durch ein Leerzeichen getrennt ist.

- {{cssxref("&lt;custom-ident&gt;")}}
  - : Gibt den Namen des Counters an, der erhöht oder verringert werden soll.
- {{cssxref("&lt;integer&gt;")}}
  - : Gibt den Wert an, der zum Counter hinzugefügt werden soll. Wenn die Ganzzahl von einem `-`-Zeichen vorangestellt ist, wird der Wert vom Counter subtrahiert. Standardmäßig `1`, wenn kein Wert angegeben ist.
- `none`
  - : Gibt an, dass kein Counter erhöht oder verringert werden muss. Dieser Wert kann auch verwendet werden, um zu verhindern, dass alle Counter in spezifischeren Regeln erhöht oder verringert werden. Dies ist der Standardwert der Eigenschaft.

> [!NOTE]
> Die Verwendung des Wertes `none` verhindert, dass alle Counter bei den ausgewählten Elementen, auf die diese Regel zutrifft, erhöht oder verringert werden. Um das Erhöhen oder Verringern nur spezifischer Counter zu verhindern, setzen Sie den `integer`-Wert auf `0` für die betreffenden Counter.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Den Counter-Wert verringern

In diesem Beispiel zeigen wir eine Rückwärtszählung. Dazu verwenden wir einen Counter, um Zahlen anzuzeigen, die bei 100 beginnen und jedes Mal um 7 abnehmen.

#### HTML

```html
<div>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i> <i></i><i></i><i></i><i></i
  ><i></i><i></i><i></i> <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
</div>
```

#### CSS

Wir setzen den Anfangswert des Counters namens `sevens` auf `100` unter Verwendung von {{cssxref("counter-reset")}}. Dann verringern wir für jedes {{HTMLElement("i")}} den Counter um `7`.

Um die erste Zahl auf `100` einzustellen, zielen wir auf das erste `<i>`-Element, indem wir die Pseudoklasse {{cssxref(":first-of-type")}} verwenden und `counter-increment: none;` setzen. Zusätzlich wird die {{cssxref("content")}}-Eigenschaft im Pseudo-Element {{cssxref("::before")}} verwendet, um den Wert des Counters mit der [`counter()`](/de/docs/Web/CSS/Reference/Values/counter)-Funktion anzuzeigen.

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

Hätten wir `counter-reset` (oder {{cssxref("counter-set")}}) nicht verwendet, um den Counter zu erstellen und den Wert auf `100` zu setzen, wäre der `sevens`-Counter trotzdem erstellt worden, jedoch mit einem Anfangswert von `0`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Counter-Eigenschaften: {{cssxref("counter-set")}}, {{cssxref("counter-reset")}}
- Counter-Regel: {{cssxref("@counter-style")}}
- Counter-Funktionen: {{cssxref("counter", "counter()")}}, {{cssxref("counters", "counters()")}}
- [Verwendung von CSS-Countern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) Leitfaden
- [CSS-Listen und Counter](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS-Counter-Stile](/de/docs/Web/CSS/CSS_counter_styles) Modul
