---
title: transition
slug: Web/CSS/transition
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`transition`** [CSS](/de/docs/Web/CSS) Eigenschaft ist eine [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) für {{ cssxref("transition-property") }}, {{ cssxref("transition-duration") }}, {{ cssxref("transition-timing-function") }}, {{ cssxref("transition-delay") }}, und {{ cssxref("transition-behavior") }}.

{{InteractiveExample("CSS Demo: transition")}}

```css interactive-example-choice
transition: margin-right 2s;
```

```css interactive-example-choice
transition: margin-right 2s 0.5s;
```

```css interactive-example-choice
transition: margin-right 2s ease-in-out;
```

```css interactive-example-choice
transition: margin-right 2s ease-in-out 0.5s;
```

```css interactive-example-choice
transition:
  margin-right 2s,
  color 1s;
```

```css interactive-example-choice
transition: all 1s ease-out;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">Hover to see<br />the transition.</div>
</section>
```

```css interactive-example
#example-element {
  background-color: #e4f0f5;
  color: #000;
  padding: 1rem;
  border-radius: 0.5rem;
  font: 1em monospace;
  width: 100%;
  transition: margin-right 2s;
}

#default-example:hover > #example-element {
  background-color: #909;
  color: #fff;
  margin-right: 40%;
}
```

Transitions ermöglichen es Ihnen, den Übergang zwischen zwei Zuständen eines Elements zu definieren. Unterschiedliche Zustände können unter Verwendung von [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) wie {{cssxref(":hover")}} oder {{cssxref(":active")}} definiert oder dynamisch mit JavaScript festgelegt werden.

## Bestandteile der Eigenschaften

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

Der Wert der `transition`-Eigenschaft wird als einer der folgenden angegeben:

- Der spezielle Wert `none`, der angibt, dass keine Transitionen auf diesem Element stattfinden werden. Dies ist der Standardwert.
- Eine oder mehrere Einzel-Eigenschafts-Transitionen, getrennt durch Kommata.

Jede Einzel-Eigenschafts-Transition beschreibt die Transition, die auf eine einzelne Eigenschaft oder alle Eigenschaften angewendet werden soll. Sie umfasst:

- Null oder einen Wert, der die Eigenschaft oder Eigenschaften angibt, auf die die Transition angewendet werden soll. Dies kann gesetzt werden als:
  - Ein {{cssxref("&lt;custom-ident&gt;")}}, das eine einzelne Eigenschaft darstellt.
  - Der spezielle Wert `all`, der angibt, dass die Transition auf alle Eigenschaften angewendet wird, die sich ändern, wenn das Element den Zustand wechselt.
  - Kein Wert, in welchem Fall ein Wert von `all` angenommen wird und die angegebene Transition weiterhin auf alle sich ändernden Eigenschaften angewendet wird.
- Null oder einen {{cssxref("&lt;easing-function&gt;")}} Wert, der die zu verwendende Übergangsfunktion darstellt.
- Null, einen oder zwei {{cssxref("&lt;time&gt;")}} Werte. Der erste Wert, der als Zeit geparst werden kann, wird der {{cssxref("transition-duration")}} zugewiesen, und der zweite Wert, der als Zeit geparst werden kann, wird der {{cssxref("transition-delay")}} zugewiesen.
- Null oder einen Wert, der angibt, ob Transitionen für Eigenschaften mit [diskretem](/de/docs/Web/CSS/CSS_animated_properties#discrete) Animationsverhalten gestartet werden sollen. Der Wert ist, falls vorhanden, entweder das Schlüsselwort `allow-discrete` oder das Schlüsselwort `normal`.

Wenn Sie `all` als die Übergangseigenschaft für eine Einzel-Eigenschafts-Transition angeben, aber dann nachfolgende Einzel-Eigenschafts-Transitionen mit {{cssxref("&lt;custom-ident&gt;")}} Werten angeben, überschreiben diese nachfolgenden Transitionen die erste. Zum Beispiel:

```css
transition:
  all 200ms,
  opacity 400ms;
```

In diesem Fall werden alle Eigenschaften, die sich ändern, während das Element den Zustand wechselt, mit einer Dauer von 200 ms übergehen, außer {{cssxref("opacity")}}, die 400 ms für den Übergang benötigen wird.

Sehen Sie sich an, [wie Dinge gehandhabt werden](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions#when_property_value_lists_are_of_different_lengths), wenn Listen von Eigenschaftswerten nicht die gleiche Länge haben. Kurz gesagt, zusätzliche Transition-Beschreibungen über die Anzahl der tatsächlich animierten Eigenschaften hinaus werden ignoriert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel gibt es, wenn der Benutzer mit der Maus über das Element fährt, eine halbe Sekunde (`500ms`) Verzögerung, bevor ein zweisekündiger `background-color` Übergang erfolgt.

#### HTML

```html
<a class="target">Hover over me</a>
```

#### CSS

Wir fügen zwei {{cssxref("time")}} Werte ein. In der `transition` Kurzschreibweise ist der erste `<time>` Wert die `transition-duration`. Der zweite Zeitwert ist die `transition-delay`. Beide haben den Standardwert `0s`, wenn sie weggelassen werden.

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

- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) Modul
- [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)
