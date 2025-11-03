---
title: transition
slug: Web/CSS/Reference/Properties/transition
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Die **`transition`**-Eigenschaft von [CSS](/de/docs/Web/CSS) ist eine [Kurzform-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) für {{ cssxref("transition-property") }}, {{ cssxref("transition-duration") }}, {{ cssxref("transition-timing-function") }}, {{ cssxref("transition-delay") }} und {{ cssxref("transition-behavior") }}.

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

Übergänge ermöglichen es Ihnen, den Übergang zwischen zwei Zuständen eines Elements zu definieren. Verschiedene Zustände können mit [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wie {{cssxref(":hover")}} oder {{cssxref(":active")}} definiert oder dynamisch mit JavaScript festgelegt werden.

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

- Der spezielle Wert `none`, der angibt, dass keine Übergänge auf diesem Element stattfinden. Dies ist der Standardwert.
- Eine oder mehrere Einzelwerte-Eigenschaftsübergänge, getrennt durch Kommas.

Jeder Einzelwerte-Eigenschaftsübergang beschreibt den Übergang, der auf eine einzelne Eigenschaft oder alle Eigenschaften angewendet werden soll. Er umfasst:

- Null oder einen Wert, der die Eigenschaft oder die Eigenschaften repräsentiert, auf die der Übergang angewendet werden soll. Dies kann gesetzt werden als:
  - Ein {{cssxref("&lt;custom-ident&gt;")}}, das eine einzelne Eigenschaft repräsentiert.
  - Der spezielle Wert `all`, der angibt, dass der Übergang auf alle Eigenschaften angewendet wird, die sich ändern, während sich der Zustand des Elements ändert.
  - Kein Wert, in welchem Fall ein Wert von `all` angenommen wird und der spezifizierte Übergang immer noch auf alle sich ändernden Eigenschaften angewendet wird.
- Null oder einen {{cssxref("&lt;easing-function&gt;")}}-Wert, der die zu verwendende Abklingfunktion repräsentiert.
- Null, einen oder zwei {{cssxref("&lt;time&gt;")}}-Werte. Der erste Wert, der als Zeitwert analysiert werden kann, wird der {{cssxref("transition-duration")}} zugeordnet, und der zweite Wert, der als Zeitwert analysiert werden kann, wird der {{cssxref("transition-delay")}} zugeordnet.
- Null oder einen Wert, der angibt, ob Übergänge für Eigenschaften gestartet werden sollen, deren Animationsverhalten [diskret](/de/docs/Web/CSS/CSS_animated_properties#discrete) ist. Der Wert, falls vorhanden, ist entweder das Schlüsselwort `allow-discrete` oder das Schlüsselwort `normal`.

Wenn Sie `all` als Übergangseigenschaft für einen Einzelwerte-Eigenschaftsübergang angeben, dann aber nachfolgende Einzelwerte-Eigenschaftsübergänge mit {{cssxref("&lt;custom-ident&gt;")}}-Werten spezifizieren, werden diese nachfolgenden Übergänge den ersten überschreiben. Zum Beispiel:

```css
transition:
  all 200ms,
  opacity 400ms;
```

In diesem Fall werden alle Eigenschaften, die sich ändern, während sich der Zustand des Elements ändert, mit einer Dauer von 200ms übergehen, außer {{cssxref("opacity")}}, die 400ms benötigt, um zu übergehen.

Sehen Sie sich [an, wie es gehandhabt wird](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions#when_property_value_lists_are_of_different_lengths), wenn Listen von Eigenschaftswerten nicht die gleiche Länge haben. Kurz gesagt, zusätzliche Übergangsbeschreibungen, die über die Anzahl der tatsächlich animierten Eigenschaften hinausgehen, werden ignoriert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel gibt es beim Überfahren des Elements mit der Maus eine Verzögerung von einer halben Sekunde (`500ms`), bevor ein Übergang der `background-color`-Eigenschaft von zwei Sekunden erfolgt.

#### HTML

```html
<a class="target">Hover over me</a>
```

#### CSS

Wir fügen zwei {{cssxref("time")}}-Werte hinzu. In der Kurzform `transition` ist der erste `<time>`-Wert die `transition-duration`. Der zweite Zeitwert ist die `transition-delay`. Beide haben als Standardwert `0s`, falls nicht angegeben.

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
- [Using CSS transitions](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)
