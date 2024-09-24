---
title: counter-increment
slug: Web/CSS/counter-increment
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`counter-increment`** [CSS](/de/docs/Web/CSS) Eigenschaft kann verwendet werden, um den Wert der benannten [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) um die angegebenen Werte zu erhöhen oder zu verringern oder um zu verhindern, dass der Wert aller Zähler oder eines einzelnen Zählers geändert wird.

Wenn ein benannter Zähler in der Liste der durch Leerzeichen getrennten Zähler und Werte nicht existiert, wird er erstellt. Wird für einen Zähler in der Liste der Zähler kein Wert angegeben, wird der Zähler um `1` erhöht.

Der Wert des Zählers kann mit der {{cssxref("counter-reset")}} CSS-Eigenschaft auf jeden ganzzahligen Wert zurückgesetzt werden.

{{EmbedInteractiveExample("pages/css/counter-increment.html")}}

## Syntax

```css
/* Erhöht "my-counter" um 1 */
counter-increment: my-counter;

/* Verringert "my-counter" um 1 */
counter-increment: my-counter -1;

/* Erhöht "counter1" um 1 und verringert "counter2" um 4 */
counter-increment: counter1 counter2 -4;

/* Erhöht "page" um 1, "section" um 2, während "chapter" unverändert bleibt */
counter-increment: chapter 0 section 2 page;

/* Nichts erhöhen/verringern: wird verwendet, um weniger spezifische Regeln zu überschreiben */
counter-increment: none;

/* Globale Werte */
counter-increment: inherit;
counter-increment: initial;
counter-increment: revert;
counter-increment: revert-layer;
counter-increment: unset;
```

### Werte

Die `counter-increment` Eigenschaft nimmt als Wert entweder eine Liste von durch Leerzeichen getrennten Zählernamen an, die als `<custom-ident>` mit einem optionalen `<integer>` Wert angegeben werden, oder das Schlüsselwort `none`. Sie können so viele Zähler erhöhen, wie Sie möchten, wobei jeder Name oder jedes Name-Zahlen-Paar durch ein Leerzeichen getrennt wird.

- {{cssxref("&lt;custom-ident&gt;")}}
  - : Gibt den Namen des Zählers an, der erhöht oder verringert werden soll.
- {{cssxref("&lt;integer&gt;")}}
  - : Gibt den Wert an, der zum Zähler addiert werden soll. Wenn der Ganzzahlwert mit einem `-` Zeichen vorangestellt ist, wird der Wert vom Zähler subtrahiert. Standardmäßig `1`, wenn kein Wert angegeben ist.
- `none`
  - : Gibt an, dass kein Zähler erhöht oder verringert werden soll. Dieser Wert kann auch verwendet werden, um alle Zähler daran zu hindern, in spezifischeren Regeln erhöht oder verringert zu werden. Dies ist der Standardwert der Eigenschaft.

> [!NOTE]
> Die Verwendung des Wertes `none` verhindert, dass alle Zähler für die ausgewählten Elemente, auf die diese Regel angewendet wird, erhöht oder verringert werden. Um nur bestimmte Zähler daran zu hindern, erhöht oder verringert zu werden, setzen Sie den `integer` Wert auf `0` für die entsprechenden Zähler.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verringern des Zählerwerts

In diesem Beispiel zeigen wir eine Zahlenfolge, die rückwärts zählt. Um dies zu tun, verwenden wir einen Zähler, um Zahlen anzuzeigen, die bei 100 beginnen und sich bei jedem Mal um 7 verringern.

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

Um das erste Zählen bei `100` zu setzen, zielen wir auf das erste `<i>`-Element, indem wir die {{cssxref(":first-of-type")}} Pseudoklasse verwenden und `counter-increment: none;` setzen. Zusätzlich wird die {{cssxref("content")}} Eigenschaft im {{cssxref("::before")}} Pseudo-Element verwendet, um den Wert des Zählers mit der [`counter()`](/de/docs/Web/CSS/counter) Funktion anzuzeigen.

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

- Zählereigenschaften: {{cssxref("counter-set")}}, {{cssxref("counter-reset")}}
- Zählerregel: {{cssxref("@counter-style")}}
- Zählerfunktionen: {{cssxref("counter", "counter()")}}, {{cssxref("counters", "counters()")}}
- Anleitung zu [Verwendung von CSS-Zählern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)
- Modul [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists)
- Modul [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles)
