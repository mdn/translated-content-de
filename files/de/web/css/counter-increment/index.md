---
title: counter-increment
slug: Web/CSS/counter-increment
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`counter-increment`** [CSS](/de/docs/Web/CSS)-Eigenschaft kann verwendet werden, um den Wert der benannten [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) um die angegebenen Werte zu erhöhen oder zu verringern, oder um zu verhindern, dass alle Zähler oder der Wert eines individuellen Zählers verändert werden.

Wenn ein benannter Zähler in der Liste der durch Leerzeichen getrennten Zähler und Werte nicht existiert, wird er erstellt. Wird für einen Zähler in der Liste der Zähler kein Wert angegeben, wird der Zähler um `1` erhöht.

Der Wert des Zählers kann mit der {{cssxref("counter-reset")}} CSS-Eigenschaft auf einen beliebigen Ganzzahlwert zurückgesetzt werden.

{{EmbedInteractiveExample("pages/css/counter-increment.html")}}

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

Die `counter-increment`-Eigenschaft nimmt als Wert entweder eine Liste von Leerzeichen getrennten Zählernamen, die als `<custom-ident>` mit einem optionalen `<integer>` Wert angegeben werden, oder das Schlüsselwort `none`. Sie können so viele Zähler spezifizieren, wie Sie möchten, wobei jedes Name- oder Name-Zahl-Paar durch ein Leerzeichen getrennt wird.

- {{cssxref("&lt;custom-ident&gt;")}}
  - : Gibt den Namen des Zählers an, der erhöht oder verringert werden soll.
- {{cssxref("&lt;integer&gt;")}}
  - : Gibt den Wert an, der dem Zähler hinzugefügt wird. Wenn der Ganzzahlwert durch ein `-`-Zeichen vorangestellt ist, wird der Wert vom Zähler subtrahiert. Standardmäßig auf `1` gesetzt, wenn kein Wert angegeben wird.
- `none`
  - : Gibt an, dass kein Zähler erhöht oder verringert werden muss. Dieser Wert kann auch verwendet werden, um alle Zähler daran zu hindern, in spezifischeren Regeln erhöht oder verringert zu werden. Dies ist der Standardwert der Eigenschaft.

> [!NOTE]
> Die Verwendung des Wertes `none` verhindert, dass alle Zähler für die ausgewählten Elemente, auf die diese Regel angewandt wird, erhöht oder verringert werden. Um nur spezifische Zähler daran zu hindern, erhöht oder verringert zu werden, setzen Sie den `integer` Wert auf `0` für die relevanten Zähler.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Den Zählerwert verringern

In diesem Beispiel zeigen wir eine Sequenz von Zahlen, die rückwärts zählen. Dazu verwenden wir einen Zähler, um Zahlen anzuzeigen, die bei 100 beginnen und jedes Mal um 7 verringert werden.

#### HTML

```html
<div>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i> <i></i><i></i><i></i><i></i
  ><i></i><i></i><i></i> <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
</div>
```

#### CSS

Wir setzen den Anfangswert des Zählers namens `sevens` auf `100` mithilfe von {{cssxref("counter-reset")}}. Dann verringern wir für jedes {{HTMLElement("i")}} den Zähler um `7`.

Um die erste Zählung auf `100` zu setzen, zielen wir auf das erste `<i>` Element mit der {{cssxref(":first-of-type")}} Pseudo-Klasse und setzen `counter-increment: none;`. Zusätzlich wird die {{cssxref("content")}}-Eigenschaft im {{cssxref("::before")}} Pseudo-Element verwendet, um den Wert des Zählers mit der [`counter()`](/de/docs/Web/CSS/counter) Funktion anzuzeigen.

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

Hätten wir `counter-reset` (oder {{cssxref("counter-set")}}) nicht verwendet, um den Zähler zu erstellen und den Wert auf `100` zu setzen, wäre der `sevens` Zähler trotzdem erstellt worden, aber mit einem Anfangswert von `0`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Zählereigenschaften: {{cssxref("counter-set")}}, {{cssxref("counter-reset")}}
- Zählerregel: {{cssxref("@counter-style")}}
- Zählerfunktionen: {{cssxref("counter", "counter()")}}, {{cssxref("counters", "counters()")}}
- [Verwendung von CSS-Zählern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) Leitfaden
- [CSS-Listen und -Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
