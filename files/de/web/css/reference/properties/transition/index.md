---
title: transition
slug: Web/CSS/Reference/Properties/transition
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
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

Übergänge ermöglichen es Ihnen, den Übergang zwischen zwei Zuständen eines Elements zu definieren. Verschiedene Zustände können mithilfe von [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) wie {{cssxref(":hover")}} oder {{cssxref(":active")}} definiert oder dynamisch mit JavaScript gesetzt werden.

## Bestandteile der Eigenschaft

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

Der Wert der `transition`-Eigenschaft wird wie folgt angegeben:

- Der spezielle Wert `none`, der angibt, dass keine Übergänge auf diesem Element stattfinden. Dies ist der Standardwert.
- Eine oder mehrere Übergänge für eine einzelne Eigenschaft, getrennt durch Kommas.

Jeder Übergang für eine einzelne Eigenschaft beschreibt den Übergang, der auf eine einzelne Eigenschaft oder alle Eigenschaften angewendet werden soll. Er beinhaltet:

- null oder einen Wert, der die Eigenschaft oder Eigenschaften darstellt, auf die der Übergang angewendet werden soll. Dies kann gesetzt sein als:
  - Ein {{cssxref("&lt;custom-ident&gt;")}} der eine einzelne Eigenschaft repräsentiert.
  - Der spezielle Wert `all`, der angibt, dass der Übergang auf alle Eigenschaften, die sich bei Zustandsänderung des Elements ändern, angewendet wird.
  - Kein Wert, in welchem Fall `all` angenommen wird und der angegebene Übergang trotzdem auf alle sich ändernden Eigenschaften angewendet wird.
- null oder einen {{cssxref("&lt;easing-function&gt;")}}-Wert, der die zu verwendende Beschleunigungsfunktion darstellt
- null, ein oder zwei {{cssxref("&lt;time&gt;")}}-Werte. Der erste Wert, der als Zeit interpretierbar ist, wird der {{cssxref("transition-duration")}} zugewiesen, und der zweite Wert, der als Zeit interpretierbar ist, wird der {{cssxref("transition-delay")}} zugewiesen.
- null oder einen Wert, der erklärt, ob Übergänge für Eigenschaften gestartet werden sollen, deren Animationsverhalten [diskret](/de/docs/Web/CSS/CSS_animated_properties#discrete) ist. Der Wert ist, falls vorhanden, entweder das Schlüsselwort `allow-discrete` oder das Schlüsselwort `normal`.

Wenn Sie `all` als Übergangseigenschaft für einen Übergang angeben, dann aber nachfolgende Übergänge mit {{cssxref("&lt;custom-ident&gt;")}}-Werten spezifizieren, werden diese nachfolgenden Übergänge den ersten überschreiben. Zum Beispiel:

```css
transition:
  all 200ms,
  opacity 400ms;
```

In diesem Fall werden alle Eigenschaften, die sich ändern, während das Element seinen Zustand ändert, mit einer Dauer von 200ms übergehen, außer {{cssxref("opacity")}}, das 400ms für den Übergang benötigt.

Sehen Sie, [wie Dinge gehandhabt werden](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions#when_property_value_lists_are_of_different_lengths), wenn Listen von Eigenschaftswerten nicht die gleiche Länge haben. Kurz gesagt, zusätzliche Übergangsbeschreibungen über die Anzahl der tatsächlich animierten Eigenschaften hinaus werden ignoriert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel erfolgt eine halbe Sekunde (`500ms`) Verzögerung, bevor eine zweisekündige `background-color`-Übergang stattfindet, wenn der Benutzer über das Element fährt.

#### HTML

```html
<a class="target">Hover over me</a>
```

#### CSS

Wir schließen zwei {{cssxref("time")}}-Werte ein. In der `transition`-Kurzform ist der erste `<time>`-Wert die `transition-duration`. Der zweite Zeitwert ist die `transition-delay`. Beide sind bei Auslassung standardmäßig `0s`.

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

- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions)-Modul
- [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)
