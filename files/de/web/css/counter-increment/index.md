---
title: counter-increment
slug: Web/CSS/counter-increment
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`counter-increment`** [CSS](/de/docs/Web/CSS) Eigenschaft kann verwendet werden, um den Wert der benannten [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) um die angegebenen Werte zu erhöhen oder zu verringern oder um zu verhindern, dass der Wert aller Zähler oder eines einzelnen Zählers geändert wird.

Wenn ein benannter Zähler in der Liste der durch Leerzeichen getrennten Zähler und Werte nicht existiert, wird er erstellt. Wenn kein Wert für einen Zähler in der Liste der Zähler angegeben wird, wird der Zähler um `1` erhöht.

Der Wert des Zählers kann mit der CSS-Eigenschaft {{cssxref("counter-reset")}} auf jeden ganzzahligen Wert zurückgesetzt werden.

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

Die Eigenschaft `counter-increment` nimmt als Wert entweder eine Liste von durch Leerzeichen getrennten Zählernamen, die als `<custom-ident>` mit einem optionalen `<integer>`-Wert angegeben sind, oder das Schlüsselwort `none`. Sie können so viele Zähler angeben, wie Sie erhöhen möchten, wobei jedes Namen-Nummer-Paar durch ein Leerzeichen getrennt ist.

- {{cssxref("&lt;custom-ident&gt;")}}
  - : Gibt den Namen des Zählers an, der erhöht oder verringert werden soll.
- {{cssxref("&lt;integer&gt;")}}
  - : Gibt den Wert an, der zum Zähler hinzugefügt werden soll. Wenn der Ganzzahlwert von einem `-`-Zeichen vorangestellt wird, wird der Wert vom Zähler subtrahiert. Standardmäßig `1`, wenn kein Wert angegeben ist.
- `none`
  - : Gibt an, dass kein Zähler erhöht oder verringert werden muss. Dieser Wert kann auch verwendet werden, um zu verhindern, dass alle Zähler in spezifischeren Regeln erhöht oder verringert werden. Dies ist der Standardwert der Eigenschaft.

> [!NOTE]
> Die Verwendung des Werts `none` verhindert, dass alle Zähler für die ausgewählten Elemente, auf die diese Regel zutrifft, erhöht oder verringert werden. Um nur bestimmte Zähler von der Erhöhung oder Verringerung auszuschließen, setzen Sie den `integer`-Wert auf `0` bei den entsprechenden Zählern.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verringern des Zählerwerts

In diesem Beispiel zeigen wir eine Sequenz von Zahlen, die rückwärts zählt. Dazu verwenden wir einen Zähler, um Zahlen anzuzeigen, die bei 100 beginnen und jedes Mal um 7 verringert werden.

#### HTML

```html
<div>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i> <i></i><i></i><i></i><i></i
  ><i></i><i></i><i></i> <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
</div>
```

#### CSS

Wir setzen den Anfangswert des Zählers namens `sevens` auf `100` unter Verwendung von {{cssxref("counter-reset")}}. Dann verringern wir für jedes {{HTMLElement("i")}} den Zähler um `7`.

Um die erste Zahl auf `100` zu setzen, richten wir uns an das erste `<i>`-Element, indem wir die {{cssxref(":first-of-type")}} Pseudoklasse verwenden und `counter-increment: none;` setzen. Zusätzlich wird die {{cssxref("content")}} Eigenschaft im {{cssxref("::before")}} Pseudoelement verwendet, um den Wert des Zählers mit der [`counter()`](/de/docs/Web/CSS/counter) Funktion anzuzeigen.

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

Hätten wir `counter-reset` (oder {{cssxref("counter-set")}}) nicht benutzt, um den Zähler zu erstellen und den Wert auf `100` zu setzen, wäre der `sevens` Zähler dennoch erstellt worden, aber mit einem Anfangswert von `0`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Zählereigenschaften: {{cssxref("counter-set")}}, {{cssxref("counter-reset")}}
- Zähler-Regel: {{cssxref("@counter-style")}}
- Zähler-Funktionen: {{cssxref("counter", "counter()")}}, {{cssxref("counters", "counters()")}}
- [Verwendung von CSS-Zählern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) Leitfaden
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
