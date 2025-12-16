---
title: transition
slug: Web/CSS/Reference/Properties/transition
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`transition`** [CSS](/de/docs/Web/CSS) Eigenschaft ist eine [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) für {{ cssxref("transition-property") }}, {{ cssxref("transition-duration") }}, {{ cssxref("transition-timing-function") }}, {{ cssxref("transition-delay") }}, und {{ cssxref("transition-behavior") }}.

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

Transitions ermöglichen es Ihnen, den Übergang zwischen zwei Zuständen eines Elements zu definieren. Verschiedene Zustände können mit [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wie {{cssxref(":hover")}} oder {{cssxref(":active")}} definiert oder dynamisch mit JavaScript gesetzt werden.

## Zugehörige Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

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

Der Wert der `transition`-Eigenschaft wird wie folgt angegeben:

- Der spezielle Wert `none`, der angibt, dass auf diesem Element keine Übergänge stattfinden werden. Dies ist der Standardwert.
- Eine oder mehrere Einzelwartung Übergänge, getrennt durch Kommas.

Jede Einzelwartung beschreibt den Übergang, der auf eine einzelne Eigenschaft oder alle Eigenschaften angewendet werden soll. Sie umfasst:

- null oder einen Wert, der die Eigenschaft oder Eigenschaften darstellt, auf die der Übergang angewendet werden soll. Dies kann festgelegt werden als:
  - Ein {{cssxref("&lt;custom-ident&gt;")}}, das eine einzelne Eigenschaft darstellt.
  - Der spezielle Wert `all`, der festlegt, dass der Übergang auf alle Eigenschaften angewendet wird, die sich ändern, wenn das Element den Zustand ändert.
  - Kein Wert, in diesem Fall wird `all` angenommen und der spezifizierte Übergang wird weiterhin auf alle sich ändernden Eigenschaften angewandt.
- null oder einen {{cssxref("easing-function")}} Wert, der die zu verwendende Erleichterungsfunktion darstellt.
- null, einen oder zwei {{cssxref("&lt;time&gt;")}} Werte. Der erste Wert, der als Zeitwert geparst werden kann, wird der {{cssxref("transition-duration")}} zugeordnet, und der zweite Wert, der als Zeitwert geparst werden kann, wird der {{cssxref("transition-delay")}} zugeordnet.
- null oder einen Wert, der angibt, ob Übergänge für Eigenschaften gestartet werden sollen, deren Animationsverhalten [diskret](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete) ist. Der Wert, sofern vorhanden, ist entweder das Schlüsselwort `allow-discrete` oder das Schlüsselwort `normal`.

Wenn Sie `all` als Übergangseigenschaft für einen Einzelwartung-Übergang angeben, aber dann folgende Einzelwartung-Übergänge mit {{cssxref("&lt;custom-ident&gt;")}} Werten spezifizieren, werden diese folgenden Übergänge den ersten überschreiben. Zum Beispiel:

```css
transition:
  all 200ms,
  opacity 400ms;
```

In diesem Fall werden alle Eigenschaften, die sich ändern, wenn das Element den Zustand ändert, mit einer Dauer von 200ms übergehen, außer {{cssxref("opacity")}}, das 400ms für den Übergang benötigt.

Sehen Sie [wie Dinge gehandhabt werden](/de/docs/Web/CSS/Guides/Transitions/Using#when_property_value_lists_are_of_different_lengths), wenn Listen von Eigenschaftswerten nicht gleich lang sind. Kurz gesagt, zusätzliche Übergangsbeschreibungen über die Anzahl der tatsächlich animierten Eigenschaften hinaus werden ignoriert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel gibt es, wenn der Benutzer über das Element fährt, eine Verzögerung von einer halben Sekunde (`500ms`), bevor ein zweisekündiger `background-color`-Übergang erfolgt.

#### HTML

```html
<a class="target">Hover over me</a>
```

#### CSS

Wir schließen zwei {{cssxref("time")}} Werte ein. In der `transition`-Kurzschreibweise ist der erste `<time>` Wert die `transition-duration`. Der zweite Zeitwert ist die `transition-delay`. Beide stehen standardmäßig auf `0s`, wenn sie weggelassen werden.

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
- [CSS-Übergänge verwenden](/de/docs/Web/CSS/Guides/Transitions/Using)
- [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)
