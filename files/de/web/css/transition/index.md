---
title: transition
slug: Web/CSS/transition
l10n:
  sourceCommit: d869e21650056e1751c4b75ed602975ba8b4f562
---

{{CSSRef}}

Die **`transition`**-Eigenschaft von [CSS](/de/docs/Web/CSS) ist eine [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) für {{ cssxref("transition-property") }}, {{ cssxref("transition-duration") }}, {{ cssxref("transition-timing-function") }}, {{ cssxref("transition-delay") }} und {{ cssxref("transition-behavior") }}.

{{EmbedInteractiveExample("pages/css/transition.html")}}

Transitionen ermöglichen Ihnen, den Übergang zwischen zwei Zuständen eines Elements zu definieren. Unterschiedliche Zustände können mit [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) wie {{cssxref(":hover")}} oder {{cssxref(":active")}} definiert oder dynamisch mit JavaScript gesetzt werden.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`transition-behavior`](/de/docs/Web/CSS/transition-behavior)
- [`transition-delay`](/de/docs/Web/CSS/transition-delay)
- [`transition-duration`](/de/docs/Web/CSS/transition-duration)
- [`transition-property`](/de/docs/Web/CSS/transition-property)
- [`transition-timing-function`](/de/docs/Web/CSS/transition-timing-function)

## Syntax

```css
/* Apply to 1 property */
/* property name | duration */
transition: margin-right 4s;

/* property name | duration | delay */
transition: margin-right 4s 1s;

/* property name | duration | easing function */
transition: margin-right 4s ease-in-out;

/* property name | duration | easing function | delay */
transition: margin-right 4s ease-in-out 1s;

/* property name | duration | behavior */
transition: display 4s allow-discrete;

/* Apply to 2 properties */
transition:
  margin-right 4s,
  color 1s;

/* Apply to all changed properties */
transition: all 0.5s ease-out allow-discrete;
transition: 200ms linear 50ms;

/* Global values */
transition: inherit;
transition: initial;
transition: revert;
transition: revert-layer;
transition: unset;
```

Der Wert der `transition`-Eigenschaft wird wie folgt angegeben:

- Der spezielle Wert `none`, der angibt, dass keine Transitionen auf diesem Element stattfinden. Dies ist der Standardwert.
- Eine oder mehrere Transitionen für einzelne Eigenschaften, getrennt durch Kommas.

Jede Transition für eine einzelne Eigenschaft beschreibt die Transition, die auf eine einzelne Eigenschaft oder alle Eigenschaften angewendet werden soll. Dabei umfasst sie:

- null oder einen Wert, der die Eigenschaft(en) repräsentiert, auf die die Transition angewendet werden soll. Dies kann gesetzt werden als:
  - Ein {{cssxref("&lt;custom-ident&gt;")}} für eine einzelne Eigenschaft.
  - Der spezielle Wert `all`, welcher angibt, dass die Transition auf alle Eigenschaften angewendet wird, die sich beim Zustandswechsel des Elements ändern.
  - Kein Wert, in diesem Fall wird `all` angenommen und die spezifizierte Transition gilt dennoch für alle sich ändernden Eigenschaften.
- null oder einen {{cssxref("&lt;easing-function&gt;")}}-Wert, der die verwendete Übergangsfunktion repräsentiert.
- null, einen oder zwei {{cssxref("&lt;time&gt;")}}-Werte. Der erste Wert, der als Zeit analysiert wird, wird der {{cssxref("transition-duration")}} zugewiesen, und der zweite Wert, der als Zeit analysiert wird, der {{cssxref("transition-delay")}}.
- null oder einen Wert, der angibt, ob mit der Transition für Eigenschaften begonnen werden soll, deren Animationsverhalten [diskret](/de/docs/Web/CSS/CSS_animated_properties#discrete) ist. Der Wert, falls vorhanden, ist entweder das Schlüsselwort `allow-discrete` oder `normal`.

Wenn Sie `all` als Transition-Eigenschaft für eine Transition für eine einzelne Eigenschaft angeben, dann aber nachfolgende Transitionen mit {{cssxref("&lt;custom-ident&gt;")}}-Werten spezifizieren, überschreiben diese nachfolgenden Transitionen die erste. Zum Beispiel:

```css
transition:
  all 200ms,
  opacity 400ms;
```

In diesem Fall werden alle Eigenschaften, die sich beim Zustandswechsel des Elements ändern, mit einer Dauer von 200ms übergehen, außer {{cssxref("opacity")}}, das 400ms für die Transition benötigt.

Siehe [wie Dinge gehandhabt werden](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions#when_property_value_lists_are_of_different_lengths), wenn Listen von Eigenschaftswerten nicht die gleiche Länge haben. Kurz gesagt, zusätzliche Transition-Beschreibungen, die über die Anzahl der tatsächlich animierten Eigenschaften hinausgehen, werden ignoriert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel gibt es, wenn der Benutzer über das Element schwebt, eine Verzögerung von einer halben Sekunde (`500ms`), bevor eine zweisekündige `background-color`-Transition erfolgt.

#### HTML

```html
<a class="target">Hover over me</a>
```

#### CSS

Wir fügen zwei {{cssxref("time")}}-Werte ein. In der `transition`-Kurzschreibweise ist der erste `<time>`-Wert die `transition-duration`. Der zweite Zeitwert ist die `transition-delay`. Beide haben standardmäßig `0s`, wenn sie weggelassen werden.

```css
.target {
  font-size: 2rem;
  background-color: palegoldenrod;
  transition: background-color 2s 500ms;
}

.target:hover {
  background-color: darkorange;
}
```

{{EmbedLiveSample('Basic_example', 600, 100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS transitions](/de/docs/Web/CSS/CSS_transitions) Modul
- [Verwendung von CSS-Transitionen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)
