---
title: transition
slug: Web/CSS/transition
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`transition`** [CSS](/de/docs/Web/CSS) Eigenschaft ist eine [Kurzschrift-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) für {{ cssxref("transition-property") }}, {{ cssxref("transition-duration") }}, {{ cssxref("transition-timing-function") }}, {{ cssxref("transition-delay") }}, und {{ cssxref("transition-behavior") }}.

{{EmbedInteractiveExample("pages/css/transition.html")}}

Mit Übergängen können Sie den Wechsel zwischen zwei Zuständen eines Elements definieren. Verschiedene Zustände können mithilfe von [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) wie {{cssxref(":hover")}} oder {{cssxref(":active")}} definiert oder dynamisch über JavaScript festgelegt werden.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzschrift für die folgenden CSS-Eigenschaften:

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

Der Wert der `transition`-Eigenschaft wird als einer der folgenden angegeben:

- Der spezielle Wert `none`, der angibt, dass keine Übergänge bei diesem Element auftreten. Dies ist der Standardwert.
- Eine oder mehrere Einzeln-Eigenschafts-Übergänge, getrennt durch Kommas.

Jeder Einzeln-Eigenschafts-Übergang beschreibt den Übergang, der auf eine einzelne Eigenschaft oder alle Eigenschaften angewendet werden soll. Er enthält:

- Null oder einen Wert, der die Eigenschaft(en) darstellt, auf die der Übergang angewendet werden soll. Dies kann eingestellt werden als:
  - Ein {{cssxref("&lt;custom-ident&gt;")}}, der eine einzelne Eigenschaft darstellt.
  - Der spezielle Wert `all`, der angibt, dass der Übergang auf alle Eigenschaften angewendet wird, die sich ändern, wenn das Element den Zustand ändert.
  - Kein Wert, in welchem Fall ein Wert von `all` angenommen wird und der angegebene Übergang wird trotzdem auf alle sich ändernden Eigenschaften angewendet.
- Null oder einen {{cssxref("&lt;easing-function&gt;")}}-Wert, der die zu verwendende Easing-Funktion darstellt.
- Null, einen oder zwei {{cssxref("&lt;time&gt;")}}-Werte. Der erste Wert, der als Zeit analysiert werden kann, wird der {{cssxref("transition-duration")}} zugewiesen, und der zweite, der als Zeit analysiert werden kann, wird der {{cssxref("transition-delay")}} zugewiesen.
- Null oder einen Wert, der erklärt, ob Übergänge für Eigenschaften gestartet werden sollen, deren Animationsverhalten [diskret](/de/docs/Web/CSS/CSS_animated_properties#discrete) ist. Der Wert, wenn vorhanden, ist entweder das Schlüsselwort `allow-discrete` oder das Schlüsselwort `normal`.

Wenn Sie `all` als Übergangseigenschaft für eine Einzeln-Eigenschafts-Übergang angeben, aber dann nachfolgende Einzeln-Eigenschafts-Übergänge mit {{cssxref("&lt;custom-ident&gt;")}}-Werten spezifizieren, überschreiben diese nachfolgenden Übergänge den ersten. Zum Beispiel:

```css
transition:
  all 200ms,
  opacity 400ms;
```

In diesem Fall wechseln alle Eigenschaften, die sich ändern, wenn das Element den Zustand ändert, mit einer Dauer von 200ms, außer {{cssxref("opacity")}}, das 400ms benötigt, um den Übergang zu vollziehen.

Siehe [wie die Dinge gehandhabt werden](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions#when_property_value_lists_are_of_different_lengths), wenn Listen von Eigenschaftswerten nicht die gleiche Länge haben. Kurz gesagt, zusätzliche Übergangsbeschreibungen, die über die Anzahl der tatsächlich animierten Eigenschaften hinausgehen, werden ignoriert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel gibt es, wenn der Benutzer über das Element fährt, eine halbe Sekunde (`500ms`) Verzögerung, bevor ein zwei Sekunden dauernder `background-color`-Übergang eintritt.

#### HTML

```html
<a class="target">Hover over me</a>
```

#### CSS

Wir nehmen zwei {{cssxref("time")}}-Werte auf. In der `transition`-Kurzschrift ist der erste `<time>`-Wert die `transition-duration`. Der zweite Zeitwert ist die `transition-delay`. Beide sind standardmäßig `0s`, wenn sie weggelassen werden.

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
- [Verwendung von CSS transitions](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)
