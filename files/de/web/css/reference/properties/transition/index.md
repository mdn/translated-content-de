---
title: CSS-Eigenschaft `transition`
short-title: transition
slug: Web/CSS/Reference/Properties/transition
l10n:
  sourceCommit: 3fb9ea0187429234b47cb0385a9515a69757fe63
---

Die [Kurzform](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)-CSS-Eigenschaft **`transition`** für {{ cssxref("transition-property") }}, {{ cssxref("transition-duration") }}, {{ cssxref("transition-timing-function") }}, {{ cssxref("transition-delay") }} und {{ cssxref("transition-behavior") }}.

Transitions ermöglichen es Ihnen, den Übergang zwischen zwei Zuständen eines Elements zu definieren. Unterschiedliche Zustände können mithilfe von [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wie {{cssxref(":hover")}} oder {{cssxref(":active")}} definiert oder dynamisch mit JavaScript festgelegt werden.

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

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("transition-behavior")}}
- {{cssxref("transition-delay")}}
- {{cssxref("transition-duration")}}
- {{cssxref("transition-property")}}
- {{cssxref("transition-timing-function")}}

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

Der Wert der Eigenschaft `transition` wird als einer der folgenden Werte angegeben:

- Der spezielle Wert `none`, der festlegt, dass für dieses Element keine Transitions stattfinden. Dies ist der Standardwert.
- Eine oder mehrere Transitions für einzelne Eigenschaften, durch Kommata getrennt.

Jede Transition für eine einzelne Eigenschaft beschreibt die Transition, die auf eine einzelne Eigenschaft oder auf alle Eigenschaften angewendet werden soll. Sie umfasst:

- null oder einen Wert, der die Eigenschaft oder Eigenschaften darstellt, auf die die Transition angewendet werden soll. Dieser kann wie folgt festgelegt werden:
  - Ein {{cssxref("&lt;custom-ident&gt;")}}, das eine einzelne Eigenschaft darstellt.
  - Der spezielle Wert `all`, der festlegt, dass die Transition auf alle Eigenschaften angewendet wird, die sich ändern, wenn das Element seinen Zustand ändert.
  - Keinen Wert; in diesem Fall wird ein Wert von `all` abgeleitet und die angegebene Transition wird weiterhin auf alle sich ändernden Eigenschaften angewendet.
- null oder einen {{cssxref("easing-function")}}-Wert, der die zu verwendende Easing-Funktion darstellt
- null, einen oder zwei {{cssxref("&lt;time&gt;")}}-Werte. Der erste Wert, der als Zeit interpretiert werden kann, wird {{cssxref("transition-duration")}} zugewiesen, und der zweite Wert, der als Zeit interpretiert werden kann, wird {{cssxref("transition-delay")}} zugewiesen.
- null oder einen Wert, der angibt, ob Transitions für Eigenschaften gestartet werden sollen, deren Animationsverhalten [diskret](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete) ist. Der Wert ist, falls vorhanden, entweder das Schlüsselwort `allow-discrete` oder das Schlüsselwort `normal`.

Wenn Sie `all` als Transition-Eigenschaft für eine Transition einer einzelnen Eigenschaft angeben, anschließend aber weitere Transitionen für einzelne Eigenschaften mit {{cssxref("&lt;custom-ident&gt;")}}-Werten angeben, überschreiben diese nachfolgenden Transitionen die erste. Zum Beispiel:

```css
transition:
  all 200ms,
  opacity 400ms;
```

In diesem Fall werden alle Eigenschaften, die sich ändern, wenn das Element seinen Zustand ändert, mit einer Dauer von 200ms überblendet, mit Ausnahme von {{cssxref("opacity")}}, deren Transition 400ms dauert.

Weitere Informationen dazu, [wie dies behandelt wird](/de/docs/Web/CSS/Guides/Transitions/Using#when_property_value_lists_are_of_different_lengths), wenn Listen von Eigenschaftswerten nicht dieselbe Länge haben. Kurz gesagt werden zusätzliche Transition-Beschreibungen, die über die Anzahl der tatsächlich animierten Eigenschaften hinausgehen, ignoriert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Beispiel

In diesem Beispiel gibt es, wenn der Benutzer den Mauszeiger über das Element bewegt, eine Verzögerung von einer halben Sekunde (`500ms`), bevor eine zweisekündige `background-color`-Transition erfolgt.

#### HTML

```html
<a class="target">Hover over me</a>
```

#### CSS

Wir schließen zwei {{cssxref("time")}}-Werte ein. In der Kurzform `transition` ist der erste `<time>`-Wert die `transition-duration`. Der zweite Zeitwert ist der `transition-delay`. Beide haben standardmäßig den Wert `0s`, wenn sie weggelassen werden.

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

- Modul [CSS-Transitions](/de/docs/Web/CSS/Guides/Transitions)
- [Verwendung von CSS-Transitions](/de/docs/Web/CSS/Guides/Transitions/Using)
- [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)
