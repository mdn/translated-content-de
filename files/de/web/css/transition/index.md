---
title: transition
slug: Web/CSS/transition
l10n:
  sourceCommit: d869e21650056e1751c4b75ed602975ba8b4f562
---

{{CSSRef}}

Die **`transition`** [CSS](/de/docs/Web/CSS) Eigenschaft ist eine [Kurznotation](/de/docs/Web/CSS/Shorthand_properties) für {{ cssxref("transition-property") }}, {{ cssxref("transition-duration") }}, {{ cssxref("transition-timing-function") }}, {{ cssxref("transition-delay") }}, und {{ cssxref("transition-behavior") }}.

{{EmbedInteractiveExample("pages/css/transition.html")}}

Mit Übergängen können Sie den Übergang zwischen zwei Zuständen eines Elements definieren. Unterschiedliche Zustände können mithilfe von [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) wie {{cssxref(":hover")}} oder {{cssxref(":active")}} definiert oder dynamisch mit JavaScript gesetzt werden.

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurznotation für die folgenden CSS-Eigenschaften:

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

- Der spezielle Wert `none`, der angibt, dass bei diesem Element keine Übergänge stattfinden. Dies ist der Standardwert.
- Eine oder mehrere Einzel-Eigenschaftsübergänge, getrennt durch Kommas.

Jeder Einzel-Eigenschaftsübergang beschreibt den Übergang, der auf eine einzelne Eigenschaft oder alle Eigenschaften angewendet werden soll. Er beinhaltet:

- null oder einen Wert, der die Eigenschaft(en) angibt, auf die der Übergang angewendet werden soll. Dies kann gesetzt werden als:
  - Ein {{cssxref("&lt;custom-ident&gt;")}}, das eine einzelne Eigenschaft repräsentiert.
  - Der spezielle Wert `all`, welcher angibt, dass der Übergang auf alle Eigenschaften angewendet wird, die sich ändern, wenn das Element seinen Zustand ändert.
  - Kein Wert, in welchem Fall der Wert `all` angenommen wird, und der angegebene Übergang wird weiterhin auf alle sich ändernden Eigenschaften angewendet.
- null oder einen {{cssxref("&lt;easing-function&gt;")}}-Wert, der die zu verwendende Beschleunigungsfunktion repräsentiert
- null, einen oder zwei {{cssxref("&lt;time&gt;")}}-Werte. Der erste, der als Zeitwert analysiert werden kann, wird {{cssxref("transition-duration")}} zugewiesen, und der zweite wird {{cssxref("transition-delay")}} zugewiesen.
- null oder einen Wert, der angibt, ob Übergänge für Eigenschaften mit einem [diskreten](/de/docs/Web/CSS/CSS_animated_properties#discrete) Animationsverhalten gestartet werden sollen. Der Wert ist, falls vorhanden, entweder das Schlüsselwort `allow-discrete` oder das Schlüsselwort `normal`.

Wenn Sie `all` als Übergangseigenschaft für einen Einzel-Eigenschaftsübergang angeben, dann aber nachfolgende Einzel-Eigenschaftsübergänge mit {{cssxref("&lt;custom-ident&gt;")}}-Werten spezifizieren, werden diese nachfolgenden Übergänge den ersten überschreiben. Zum Beispiel:

```css
transition:
  all 200ms,
  opacity 400ms;
```

In diesem Fall werden alle Eigenschaften, die sich ändern, wenn das Element seinen Zustand ändert, mit einer Dauer von 200ms übergehen, außer {{cssxref("opacity")}}, das 400ms benötigt, um zu übergehen.

Siehe [wie Dinge gehandhabt werden](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions#when_property_value_lists_are_of_different_lengths), wenn Listen von Eigenschaftswerten nicht dieselbe Länge haben. Kurz gesagt, zusätzliche Übergangsbeschreibungen, die über die Anzahl der tatsächlich animierten Eigenschaften hinausgehen, werden ignoriert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Beispiel

In diesem Beispiel gibt es, wenn der Benutzer über das Element fährt, eine Verzögerung von einer halben Sekunde (`500ms`), bevor ein zweisekündiger `background-color` Übergang erfolgt.

#### HTML

```html
<a class="target">Hover over me</a>
```

#### CSS

Wir schließen zwei {{cssxref("time")}}-Werte ein. In der `transition` Kurznotation ist der erste `<time>` Wert die `transition-duration`. Der zweite Zeitwert ist die `transition-delay`. Beide haben den Standardwert `0s`, wenn sie nicht angegeben werden.

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
- [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)
