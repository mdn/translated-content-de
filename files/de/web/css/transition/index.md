---
title: Übergang
slug: Web/CSS/transition
l10n:
  sourceCommit: d869e21650056e1751c4b75ed602975ba8b4f562
---

{{CSSRef}}

Die **`transition`** [CSS](/de/docs/Web/CSS) Eigenschaft ist eine [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) für {{ cssxref("transition-property") }}, {{ cssxref("transition-duration") }}, {{ cssxref("transition-timing-function") }}, {{ cssxref("transition-delay") }}, und {{ cssxref("transition-behavior") }}.

{{EmbedInteractiveExample("pages/css/transition.html")}}

Übergänge ermöglichen es Ihnen, den Übergang zwischen zwei Zuständen eines Elements zu definieren. Unterschiedliche Zustände können mit [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) wie {{cssxref(":hover")}} oder {{cssxref(":active")}} definiert oder dynamisch mit JavaScript gesetzt werden.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`transition-behavior`](/de/docs/Web/CSS/transition-behavior)
- [`transition-delay`](/de/docs/Web/CSS/transition-delay)
- [`transition-duration`](/de/docs/Web/CSS/transition-duration)
- [`transition-property`](/de/docs/Web/CSS/transition-property)
- [`transition-timing-function`](/de/docs/Web/CSS/transition-timing-function)

## Syntax

```css
/* Anwendung auf 1 Eigenschaft */
/* Eigenschaftsname | Dauer */
transition: margin-right 4s;

/* Eigenschaftsname | Dauer | Verzögerung */
transition: margin-right 4s 1s;

/* Eigenschaftsname | Dauer | Beschleunigungsfunktion */
transition: margin-right 4s ease-in-out;

/* Eigenschaftsname | Dauer | Beschleunigungsfunktion | Verzögerung */
transition: margin-right 4s ease-in-out 1s;

/* Eigenschaftsname | Dauer | Verhalten */
transition: display 4s allow-discrete;

/* Anwendung auf 2 Eigenschaften */
transition:
  margin-right 4s,
  color 1s;

/* Anwendung auf alle geänderten Eigenschaften */
transition: all 0.5s ease-out allow-discrete;
transition: 200ms linear 50ms;

/* Globale Werte */
transition: inherit;
transition: initial;
transition: revert;
transition: revert-layer;
transition: unset;
```

Der Wert der `transition` Eigenschaft wird als einer der folgenden spezifiziert:

- Der spezielle Wert `none`, der angibt, dass keine Übergänge auf diesem Element stattfinden werden. Dies ist der Standardwert.
- Ein oder mehrere Übergänge für einzelne Eigenschaften, getrennt durch Kommas.

Jeder Übergang für eine einzelne Eigenschaft beschreibt den Übergang, der auf eine einzelne Eigenschaft oder alle Eigenschaften angewendet werden soll. Er enthält:

- null oder einen Wert, der die Eigenschaft oder Eigenschaften angibt, auf die der Übergang angewendet werden soll. Dies kann gesetzt werden als:
  - Ein {{cssxref("&lt;custom-ident&gt;")}} repräsentiert eine einzelne Eigenschaft.
  - Der spezielle Wert `all`, der angibt, dass der Übergang auf alle sich ändernden Eigenschaften angewendet wird, wenn das Element den Zustand ändert.
  - Kein Wert, in diesem Fall wird ein Wert von `all` angenommen, und der spezifizierte Übergang wird trotzdem auf alle sich ändernden Eigenschaften angewendet.
- null oder einen {{cssxref("&lt;easing-function&gt;")}} Wert, der die zu verwendende Beschleunigungsfunktion angibt
- null, einen oder zwei {{cssxref("&lt;time&gt;")}} Werte. Der erste Wert, der als Zeit geparst werden kann, wird der {{cssxref("transition-duration")}} zugewiesen, und der zweite Wert, der als Zeit geparst werden kann, wird der {{cssxref("transition-delay")}} zugewiesen.
- null oder einen Wert, der angibt, ob Übergänge für Eigenschaften gestartet werden sollen, deren Animationsverhalten [diskret](/de/docs/Web/CSS/CSS_animated_properties#discrete) ist. Der Wert ist, falls vorhanden, entweder das Schlüsselwort `allow-discrete` oder das Schlüsselwort `normal`.

Wenn Sie `all` als Übergangseigenschaft für einen Übergang für eine einzelne Eigenschaft spezifizieren, dann aber nachfolgende Übergänge für einzelne Eigenschaften mit {{cssxref("&lt;custom-ident&gt;")}} Werten spezifizieren, werden diese nachfolgenden Übergänge den ersten übersteuern. Zum Beispiel:

```css
transition:
  all 200ms,
  opacity 400ms;
```

In diesem Fall werden alle Eigenschaften, die sich ändern, wenn das Element den Zustand ändert, mit einer Dauer von 200ms übergehen, außer {{cssxref("opacity")}}, das 400ms benötigen wird, um zu übergehen.

Sehen Sie sich [an, wie Dinge gehandhabt werden](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions#when_property_value_lists_are_of_different_lengths), wenn Listen von Eigenschaftswerten nicht gleich lang sind. Kurz gesagt, zusätzliche Übergangsbeschreibungen, die über die Anzahl der tatsächlich animierten Eigenschaften hinausgehen, werden ignoriert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel gibt es beim Überfahren des Elements mit der Maus eine Verzögerung von einer halben Sekunde (`500ms`), bevor ein zwei Sekunden dauernder `background-color` Übergang stattfindet.

#### HTML

```html
<a class="target">Hover over me</a>
```

#### CSS

Wir schließen zwei {{cssxref("time")}} Werte ein. In der `transition` Kurzschreibweise ist der erste `<time>` Wert die `transition-duration`. Der zweite Zeitwert ist die `transition-delay`. Beide haben den Standardwert `0s`, wenn sie weggelassen werden.

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

- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) Modul
- [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- {{ domxref("TransitionEvent") }}
