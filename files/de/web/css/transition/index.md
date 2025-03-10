---
title: transition
slug: Web/CSS/transition
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`transition`** [CSS](/de/docs/Web/CSS) Eigenschaft ist eine [Kurzform-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) für {{ cssxref("transition-property") }}, {{ cssxref("transition-duration") }}, {{ cssxref("transition-timing-function") }}, {{ cssxref("transition-delay") }} und {{ cssxref("transition-behavior") }}.

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

Transitionen ermöglichen es Ihnen, den Übergang zwischen zwei Zuständen eines Elements zu definieren. Verschiedene Zustände können mithilfe von [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) wie {{cssxref(":hover")}} oder {{cssxref(":active")}} definiert oder dynamisch mit JavaScript gesetzt werden.

## Bestandeigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

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

- Der spezielle Wert `none`, der angibt, dass keine Transitionen bei diesem Element stattfinden werden. Dies ist der Standardwert.
- Eine oder mehrere Einzel-Eigenschafts-Transitionen, getrennt durch Kommas.

Jede Einzel-Eigenschafts-Transition beschreibt den Übergang, der auf eine einzelne Eigenschaft oder alle Eigenschaften angewendet werden soll. Sie enthält:

- null oder einen Wert, der die Eigenschaft(en) repräsentiert, auf die die Transition angewendet werden soll. Dies kann gesetzt werden als:
  - Ein {{cssxref("&lt;custom-ident&gt;")}}, das eine einzelne Eigenschaft repräsentiert.
  - Der spezielle Wert `all`, der angibt, dass die Transition auf alle Eigenschaften angewendet wird, die sich ändern, wenn das Element seinen Zustand ändert.
  - Kein Wert, in welchem Fall ein Wert von `all` hergeleitet wird, und die angegebene Transition wird dennoch auf alle sich ändernden Eigenschaften angewendet.
- null oder einen {{cssxref("&lt;easing-function&gt;")}} Wert, der die zu verwendende Wegfunktion repräsentiert
- null, ein oder zwei {{cssxref("&lt;time&gt;")}} Werte. Der erste Wert, der als Zeit geparst werden kann, wird der {{cssxref("transition-duration")}} zugewiesen, und der zweite Wert, der als Zeit geparst werden kann, wird der {{cssxref("transition-delay")}} zugewiesen.
- null oder einen Wert, der erklärt, ob Transitionen für Eigenschaften beginnen sollen, deren Animationsverhalten [diskret](/de/docs/Web/CSS/CSS_animated_properties#discrete) ist. Der Wert ist, falls vorhanden, entweder das Schlüsselwort `allow-discrete` oder das Schlüsselwort `normal`.

Wenn Sie `all` als die Transition-Eigenschaft für eine einzelne-Eigenschafts-Transition angeben, dann aber nachfolgende Einzel-Eigenschafts-Transitionen mit {{cssxref("&lt;custom-ident&gt;")}} Werten spezifizieren, werden diese nachfolgenden Transitionen die erste überschreiben. Zum Beispiel:

```css
transition:
  all 200ms,
  opacity 400ms;
```

In diesem Fall werden alle Eigenschaften, die sich ändern, während das Element seinen Zustand ändert, mit einer Dauer von 200ms übergehen, außer {{cssxref("opacity")}}, die 400ms benötigt, um zu übergehen.

Sehen Sie [wie es gehandhabt wird](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions#when_property_value_lists_are_of_different_lengths), wenn Listen von Eigenschaftswerten nicht die gleiche Länge haben. Kurz gesagt, zusätzliche Transition-Beschreibungen, die über die Anzahl der tatsächlich animierten Eigenschaften hinausgehen, werden ignoriert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel gibt es, wenn der Benutzer über das Element fährt, eine halbe Sekunde (`500ms`) Verzögerung, bevor eine zweisekündige `background-color` Transition auftritt.

#### HTML

```html
<a class="target">Hover over me</a>
```

#### CSS

Wir fügen zwei {{cssxref("time")}} Werte ein. In der `transition`-Kurzform ist der erste `<time>` Wert die `transition-duration`. Der zweite Zeitwert ist die `transition-delay`. Beide haben den Standardwert `0s`, wenn sie weggelassen werden.

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

- [CSS Transitionen](/de/docs/Web/CSS/CSS_transitions) Modul
- [Verwendung von CSS Transitionen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)
