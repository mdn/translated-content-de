---
title: "`transition` CSS-Eigenschaft"
short-title: transition
slug: Web/CSS/Reference/Properties/transition
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`transition`** [CSS](/de/docs/Web/CSS)-Eigenschaft ist eine [Shorthand-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) für {{ cssxref("transition-property") }}, {{ cssxref("transition-duration") }}, {{ cssxref("transition-timing-function") }}, {{ cssxref("transition-delay") }} und {{ cssxref("transition-behavior") }}.

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

Übergänge ermöglichen es Ihnen, den Übergang zwischen zwei Zuständen eines Elements zu definieren. Verschiedene Zustände können unter Verwendung von [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wie {{cssxref(":hover")}} oder {{cssxref(":active")}} definiert oder dynamisch mit JavaScript festgelegt werden.

## Bestandteile der Eigenschaften

Diese Eigenschaft ist eine Shorthand-Eigenschaft für folgende CSS-Eigenschaften:

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

Der Wert der `transition`-Eigenschaft wird als einer der folgenden angegeben:

- Der spezielle Wert `none`, der angibt, dass auf diesem Element keine Übergänge stattfinden. Dies ist der Standardwert.
- Eine oder mehrere Einzel-Eigenschafts-Übergänge, getrennt durch Kommas.

Jeder Einzel-Eigenschafts-Übergang beschreibt den Übergang, der auf eine einzelne Eigenschaft oder alle Eigenschaften angewendet werden soll. Er umfasst:

- Null oder einen Wert, der die Eigenschaft(en) darstellt, auf die der Übergang angewendet werden soll. Dies kann eingestellt werden als:
  - Ein {{cssxref("&lt;custom-ident&gt;")}}, der eine einzelne Eigenschaft repräsentiert.
  - Der spezielle Wert `all`, der angibt, dass der Übergang auf alle Eigenschaften angewendet wird, die sich ändern, während sich der Zustand des Elements ändert.
  - Kein Wert, in diesem Fall wird ein Wert von `all` angenommen und der angegebene Übergang wird trotzdem auf alle sich ändernden Eigenschaften angewendet.
- Null oder einen {{cssxref("easing-function")}}-Wert, der die zu verwendende Easing-Funktion repräsentiert
- Null, einen oder zwei {{cssxref("&lt;time&gt;")}}-Werte. Der erste Wert, der als Zeit geparst werden kann, wird der {{cssxref("transition-duration")}} zugewiesen, und der zweite Wert, der als Zeit geparst werden kann, wird der {{cssxref("transition-delay")}} zugewiesen.
- Null oder einen Wert, der angibt, ob Übergänge für Eigenschaften gestartet werden sollen, deren Animationsverhalten [diskret](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete) ist. Der Wert ist, falls vorhanden, entweder das Schlüsselwort `allow-discrete` oder das Schlüsselwort `normal`.

Wenn Sie `all` als Übergangseigenschaft für einen Einzel-Eigenschafts-Übergang angeben, dann aber nachfolgende Einzel-Eigenschafts-Übergänge mit {{cssxref("&lt;custom-ident&gt;")}}-Werten spezifizieren, überschreiben diese nachfolgenden Übergänge den ersten. Zum Beispiel:

```css
transition:
  all 200ms,
  opacity 400ms;
```

In diesem Fall werden alle Eigenschaften, die sich ändern, während sich der Zustand des Elements ändert, mit einer Dauer von 200 ms übergehen, außer {{cssxref("opacity")}}, das 400 ms benötigt, um überzugehen.

Siehe, [wie Dinge gehandhabt werden](/de/docs/Web/CSS/Guides/Transitions/Using#when_property_value_lists_are_of_different_lengths), wenn Listen von Eigenschaftswerten nicht die gleiche Länge haben. Kurz gesagt, zusätzliche Übergangsbeschreibungen, die über die Anzahl der tatsächlich animierten Eigenschaften hinausgehen, werden ignoriert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Beispiel

In diesem Beispiel gibt es, wenn der Benutzer über das Element fährt, eine halbe Sekunde (`500ms`) Verzögerung, bevor ein zweisekündiger `background-color` Übergang stattfindet.

#### HTML

```html
<a class="target">Hover over me</a>
```

#### CSS

Wir fügen zwei {{cssxref("time")}}-Werte ein. In der `transition`-Shorthand ist der erste `<time>`-Wert die `transition-duration`. Der zweite Zeitwert ist die `transition-delay`. Beide haben den Standardwert `0s`, wenn sie ausgelassen werden.

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

- [CSS-Übergänge](/de/docs/Web/CSS/Guides/Transitions) Modul
- [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions/Using)
- [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)
