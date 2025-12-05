---
title: transition
slug: Web/CSS/Reference/Properties/transition
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`transition`** [CSS](/de/docs/Web/CSS)-Eigenschaft ist eine [Kurzform-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) für {{ cssxref("transition-property") }}, {{ cssxref("transition-duration") }}, {{ cssxref("transition-timing-function") }}, {{ cssxref("transition-delay") }} und {{ cssxref("transition-behavior") }}.

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

Übergänge ermöglichen es Ihnen, den Übergang zwischen zwei Zuständen eines Elements zu definieren. Unterschiedliche Zustände können durch [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wie {{cssxref(":hover")}} oder {{cssxref(":active")}} definiert oder dynamisch mit JavaScript gesetzt werden.

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

Der Wert der `transition`-Eigenschaft wird als einer der folgenden angegeben:

- Der spezielle Wert `none`, der festlegt, dass keine Übergänge auf diesem Element stattfinden. Dies ist der Standardwert.
- Eine oder mehrere Einzeleigenschaftsübergänge, getrennt durch Kommas.

Jeder Einzeleigenschaftsübergang beschreibt den Übergang, der auf eine einzelne Eigenschaft oder alle Eigenschaften angewendet werden soll. Er umfasst:

- Null oder einen Wert, der die Eigenschaft(en) angibt, auf die der Übergang angewendet werden soll. Dies kann gesetzt werden als:
  - Ein {{cssxref("&lt;custom-ident&gt;")}}, der eine einzelne Eigenschaft repräsentiert.
  - Der spezielle Wert `all`, der festlegt, dass der Übergang auf alle Eigenschaften angewendet wird, die sich ändern, während das Element den Zustand ändert.
  - Kein Wert, in diesem Fall wird ein Wert von `all` angenommen und der angegebene Übergang gilt dennoch für alle sich ändernden Eigenschaften.
- Null oder ein {{cssxref("&lt;easing-function&gt;")}}-Wert, der die zu verwendende Abklingfunktion repräsentiert.
- Null, ein oder zwei {{cssxref("&lt;time&gt;")}}-Werte. Der erste, der als Zeit analysiert werden kann, wird der {{cssxref("transition-duration")}} zugeordnet, und der zweite, der als Zeit analysiert werden kann, wird der {{cssxref("transition-delay")}} zugeordnet.
- Null oder ein Wert, der angibt, ob Übergänge für Eigenschaften gestartet werden sollen, deren Animationsverhalten [discrete](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete) ist. Der Wert, falls vorhanden, ist entweder das Schlüsselwort `allow-discrete` oder das Schlüsselwort `normal`.

Wenn Sie `all` als Übergangseigenschaft für einen Einzeleigenschaftsübergang angeben, aber dann nachfolgende Einzeleigenschaftsübergänge mit {{cssxref("&lt;custom-ident&gt;")}}-Werten spezifizieren, werden diese nachfolgenden Übergänge den ersten überschreiben. Beispiel:

```css
transition:
  all 200ms,
  opacity 400ms;
```

In diesem Fall ändern sich alle Eigenschaften, die sich ändern, während das Element den Zustand ändert, mit einer Dauer von 200ms, außer {{cssxref("opacity")}}, dessen Übergang 400ms dauert.

Sehen Sie sich [an, wie Dinge gehandhabt werden](/de/docs/Web/CSS/Guides/Transitions/Using#when_property_value_lists_are_of_different_lengths), wenn Listen von Eigenschaftswerten nicht gleich lang sind. Kurz gesagt, zusätzliche Übergangsbeschreibungen, die über die Anzahl der tatsächlich animierten Eigenschaften hinausgehen, werden ignoriert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Beispiel

In diesem Beispiel gibt es eine halbe Sekunde (`500ms`) Verzögerung, bevor beim Überfahren des Elements eine zweisekündige `background-color`-Transition auftritt.

#### HTML

```html
<a class="target">Hover over me</a>
```

#### CSS

Wir fügen zwei {{cssxref("time")}}-Werte ein. In der `transition`-Kurzform ist der erste `<time>`-Wert die `transition-duration`. Der zweite Zeitwert ist die `transition-delay`. Beide sind standardmäßig `0s`, falls nicht angegeben.

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

- [CSS transitions](/de/docs/Web/CSS/Guides/Transitions) Modul
- [CSS-Übergänge verwenden](/de/docs/Web/CSS/Guides/Transitions/Using)
- [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)
