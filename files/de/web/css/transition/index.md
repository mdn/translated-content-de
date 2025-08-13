---
title: transition
slug: Web/CSS/transition
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Die **`transition`** [CSS](/de/docs/Web/CSS) Eigenschaft ist eine [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) für {{ cssxref("transition-property") }}, {{ cssxref("transition-duration") }}, {{ cssxref("transition-timing-function") }}, {{ cssxref("transition-delay") }} und {{ cssxref("transition-behavior") }}.

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

Transitions ermöglichen es Ihnen, den Übergang zwischen zwei Zuständen eines Elements zu definieren. Unterschiedliche Zustände können durch [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) wie {{cssxref(":hover")}} oder {{cssxref(":active")}} definiert oder dynamisch mit JavaScript gesetzt werden.

## Bestandteileigenschaften

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

- Der spezielle Wert `none`, der spezifiziert, dass keine Übergänge bei diesem Element stattfinden werden. Dies ist der Standardwert.
- Eine oder mehrere Einzelattribute-Übergänge, getrennt durch Kommas.

Jeder Einzelattribute-Übergang beschreibt den Übergang, der auf ein einzelnes Attribut oder alle Attribute angewendet werden soll. Es beinhaltet:

- null oder einen Wert, der das Attribut oder die Attribute repräsentiert, auf die der Übergang angewendet werden soll. Dies kann festgelegt werden als:
  - Ein {{cssxref("&lt;custom-ident&gt;")}}, das ein einzelnes Attribut repräsentiert.
  - Der spezielle Wert `all`, der spezifiziert, dass der Übergang auf alle Attribute angewendet wird, die sich ändern, wenn das Element den Zustand ändert.
  - Kein Wert, in welchem Fall ein Wert von `all` angenommen wird, und der spezifizierte Übergang wird weiterhin auf alle sich ändernden Attribute angewendet.
- null oder ein {{cssxref("&lt;easing-function&gt;")}} Wert, der die zu verwendende Verzögerungsfunktion darstellt
- null, ein oder zwei {{cssxref("&lt;time&gt;")}} Werte. Der erste Wert, der als Zeitwert geparst werden kann, wird dem {{cssxref("transition-duration")}} zugewiesen, und der zweite Wert, der als Zeitwert geparst werden kann, wird dem {{cssxref("transition-delay")}} zugewiesen.
- null oder ein Wert, der erklärt, ob Übergänge für Attribute starten sollen, deren Animationsverhalten [diskret](/de/docs/Web/CSS/CSS_animated_properties#discrete) ist. Der Wert, falls vorhanden, ist entweder das Schlüsselwort `allow-discrete` oder das Schlüsselwort `normal`.

Wenn Sie `all` als Übergangseigenschaft für einen Einzelattribute-Übergang angeben, aber dann nachfolgende Einzelattribute-Übergänge mit {{cssxref("&lt;custom-ident&gt;")}} Werten angeben, überschreiben diese nachfolgenden Übergänge den ersten. Zum Beispiel:

```css
transition:
  all 200ms,
  opacity 400ms;
```

In diesem Fall werden alle Attribute, die sich ändern, wenn das Element den Zustand ändert, mit einer Dauer von 200ms übergehen, mit Ausnahme von {{cssxref("opacity")}}, das 400ms benötigt, um den Übergang durchzuführen.

Sehen Sie, [wie Dinge gehandhabt werden](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions#when_property_value_lists_are_of_different_lengths), wenn Listen von Attributwerten nicht die gleiche Länge haben. Kurz gesagt, zusätzliche Übergangsbeschreibungen, die über die Anzahl der tatsächlich animierten Attribute hinausgehen, werden ignoriert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel, wenn der Benutzer über das Element fährt, gibt es eine halbe Sekunde (`500ms`) Verzögerung, bevor ein zwei-Sekunden `background-color` Übergang stattfindet.

#### HTML

```html
<a class="target">Hover over me</a>
```

#### CSS

Wir fügen zwei {{cssxref("time")}} Werte ein. In der `transition`-Kurzform ist der erste `<time>` Wert der `transition-duration`. Der zweite Zeitwert ist die `transition-delay`. Beide haben, falls ausgelassen, den Standardwert `0s`.

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
- [Anwendung von CSS Übergängen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)
