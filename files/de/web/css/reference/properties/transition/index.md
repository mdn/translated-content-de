---
title: transition
slug: Web/CSS/Reference/Properties/transition
l10n:
  sourceCommit: e316a03cc74a78004dbba837c9d5df297e2eb0aa
---

Die **`transition`**-Eigenschaft in [CSS](/de/docs/Web/CSS) ist eine [Kurzform-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) für {{ cssxref("transition-property") }}, {{ cssxref("transition-duration") }}, {{ cssxref("transition-timing-function") }}, {{ cssxref("transition-delay") }} und {{ cssxref("transition-behavior") }}.

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
  color: black;
  padding: 1rem;
  border-radius: 0.5rem;
  font: 1em monospace;
  width: 100%;
  transition: margin-right 2s;
}

#default-example:hover > #example-element {
  background-color: #990099;
  color: white;
  margin-right: 40%;
}
```

Transitionen ermöglichen es Ihnen, den Übergang zwischen zwei Zuständen eines Elements zu definieren. Verschiedene Zustände können mithilfe von [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wie {{cssxref(":hover")}} oder {{cssxref(":active")}} definiert werden oder dynamisch mit JavaScript gesetzt werden.

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`transition-behavior`](/de/docs/Web/CSS/Reference/Properties/transition-behavior)
- [`transition-delay`](/de/docs/Web/CSS/Reference/Properties/transition-delay)
- [`transition-duration`](/de/docs/Web/CSS/Reference/Properties/transition-duration)
- [`transition-property`](/de/docs/Web/CSS/Reference/Properties/transition-property)
- [`transition-timing-function`](/de/docs/Web/CSS/Reference/Properties/transition-timing-function)

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

- Der spezielle Wert `none`, der angibt, dass keine Transitionen auf diesem Element stattfinden. Dies ist der Standardwert.
- Eine oder mehrere Einzel-Eigenschafts-Transitionen, getrennt durch Kommas.

Jede Einzel-Eigenschafts-Transition beschreibt die Transition, die auf eine einzelne Eigenschaft oder alle Eigenschaften angewendet werden soll. Sie beinhaltet:

- null oder einen Wert, der die Eigenschaft(en) repräsentiert, auf die die Transition angewendet werden soll. Dies kann festgelegt werden als:
  - Ein {{cssxref("&lt;custom-ident&gt;")}}, das eine einzelne Eigenschaft repräsentiert.
  - Der spezielle Wert `all`, der angibt, dass die Transition auf alle Eigenschaften angewendet wird, die sich ändern, wenn das Element den Zustand wechselt.
  - Kein Wert, in welchem Fall ein Wert von `all` angenommen wird und die angegebene Transition trotzdem auf alle sich ändernden Eigenschaften angewendet wird.
- null oder eine {{cssxref("&lt;easing-function&gt;")}}-Wert, die die zu verwendende Beschleunigungsfunktion darstellt.
- null, einen oder zwei {{cssxref("&lt;time&gt;")}}-Werte. Der erste Wert, der als Zeitwert geparst werden kann, wird der {{cssxref("transition-duration")}} zugeordnet, und der zweite Zeitwert wird der {{cssxref("transition-delay")}} zugeordnet.
- null oder einen Wert, der angibt, ob Transitionen für Eigenschaften mit diskretem Animationsverhalten [diskret](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete) gestartet werden sollen. Der Wert ist, falls vorhanden, entweder das Schlüsselwort `allow-discrete` oder das Schlüsselwort `normal`.

Wenn Sie `all` als Übergangseigenschaft für eine Einzel-Eigenschafts-Transition angeben, aber dann nachfolgende Einzel-Eigenschafts-Transitionen mit {{cssxref("&lt;custom-ident&gt;")}}-Werten angeben, überschreiben diese nachfolgenden Transitionen die erste. Zum Beispiel:

```css
transition:
  all 200ms,
  opacity 400ms;
```

In diesem Fall werden alle Eigenschaften, die sich ändern, wenn das Element den Zustand wechselt, mit einer Dauer von 200ms übergehen, außer {{cssxref("opacity")}}, die 400ms für den Übergang benötigt.

Sehen Sie sich an, [wie Dinge gehandhabt werden](/de/docs/Web/CSS/Guides/Transitions/Using#when_property_value_lists_are_of_different_lengths), wenn Listen von Eigenschaftswerten nicht die gleiche Länge haben. Kurz gesagt, zusätzliche Übergangsbeschreibungen, die über die Anzahl der tatsächlich animierten Eigenschaften hinausgehen, werden ignoriert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel gibt es beim Überfahren des Elements mit der Maus eine halbe Sekunde (`500ms`) Verzögerung, bevor ein `background-color`-Übergang von zwei Sekunden erfolgt.

#### HTML

```html
<a class="target">Hover over me</a>
```

#### CSS

Wir geben zwei {{cssxref("time")}}-Werte an. In der `transition`-Kurzform ist der erste `<time>`-Wert die `transition-duration`. Der zweite Zeitwert ist die `transition-delay`. Beide haben den Standardwert `0s`, wenn sie weggelassen werden.

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

- [CSS-Transitions](/de/docs/Web/CSS/Guides/Transitions) Modul
- [Verwendung von CSS-Transitions](/de/docs/Web/CSS/Guides/Transitions/Using)
- [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)
