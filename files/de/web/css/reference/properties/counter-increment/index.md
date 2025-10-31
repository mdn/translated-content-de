---
title: counter-increment
slug: Web/CSS/Reference/Properties/counter-increment
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`counter-increment`** [CSS](/de/docs/Web/CSS) Eigenschaft kann verwendet werden, um den Wert der benannten [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) um die angegebenen Werte zu erhöhen oder zu verringern, oder um zu verhindern, dass alle Zähler oder der Wert eines einzelnen Zählers geändert werden.

Wenn ein benannter Zähler in der Liste der leerzeichengetrennten Zähler und Werte nicht existiert, wird er erstellt. Wenn für einen Zähler in der Liste der Zähler kein Wert angegeben wird, wird der Zähler um `1` erhöht.

Der Wert des Zählers kann mit der {{cssxref("counter-reset")}} CSS-Eigenschaft auf jeden ganzzahligen Wert zurückgesetzt werden.

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

Die `counter-increment` Eigenschaft nimmt als Wert entweder eine Liste von leerzeichengetrennten Zählernamen, die als `<custom-ident>` mit einem optionalen `<integer>` Wert angegeben sind, oder das Schlüsselwort `none`. Sie können so viele Zähler zum Inkrementieren angeben, wie Sie möchten, wobei jeder Name oder Name-Wert-Paar durch ein Leerzeichen getrennt wird.

- {{cssxref("&lt;custom-ident&gt;")}}
  - : Gibt den Namen des Zählers an, der erhöht oder verringert werden soll.
- {{cssxref("&lt;integer&gt;")}}
  - : Gibt den Wert an, der zum Zähler addiert werden soll. Wenn der ganze Wert von einem `-` Zeichen gefolgt wird, wird der Wert vom Zähler subtrahiert. Standardmäßig `1`, wenn kein Wert angegeben ist.
- `none`
  - : Gibt an, dass kein Zähler erhöht oder verringert werden muss. Dieser Wert kann auch verwendet werden, um zu verhindern, dass alle Zähler in spezifischeren Regeln erhöht oder verringert werden. Dies ist der Standardwert der Eigenschaft.

> [!NOTE]
> Die Verwendung des Wertes `none` verhindert, dass alle Zähler für die ausgewählten Elemente, auf die diese Regel angewendet wird, erhöht oder verringert werden. Um nur spezifische Zähler daran zu hindern, erhöht oder verringert zu werden, setzen Sie den `integer` Wert auf `0` für die relevanten Zähler.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verringern des Zählerwertes

In diesem Beispiel zeigen wir eine Folge von Zahlen, die rückwärts zählen. Dazu verwenden wir einen Zähler, der Zahlen ab 100 anzeigt und jedes Mal um 7 verringert wird.

#### HTML

```html
<div>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i> <i></i><i></i><i></i><i></i
  ><i></i><i></i><i></i> <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
</div>
```

#### CSS

Wir setzen den Anfangswert des Zählers namens `sevens` auf `100` mit Hilfe von {{cssxref("counter-reset")}}. Dann verringern wir für jedes {{HTMLElement("i")}} den Zähler um `7`.

Um den ersten Zählwert bei `100` zu setzen, zielen wir auf das erste `<i>` Element, indem wir die {{cssxref(":first-of-type")}} Pseudo-Klasse verwenden und `counter-increment: none;` setzen. Zusätzlich wird die {{cssxref("content")}} Eigenschaft im {{cssxref("::before")}} Pseudo-Element verwendet, um den Wert des Zählers mit der [`counter()`](/de/docs/Web/CSS/counter) Funktion anzuzeigen.

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

Hätten wir `counter-reset` (oder {{cssxref("counter-set")}}) nicht verwendet, um den Zähler zu erstellen und den Wert auf `100` zu setzen, wäre der `sevens` Zähler trotzdem erstellt worden, jedoch mit einem Anfangswert von `0`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Zähleigenschaften: {{cssxref("counter-set")}}, {{cssxref("counter-reset")}}
- Zählerregel: {{cssxref("@counter-style")}}
- Zählerfunktionen: {{cssxref("counter", "counter()")}}, {{cssxref("counters", "counters()")}}
- [Verwendung von CSS-Zählern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) Leitfaden
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
