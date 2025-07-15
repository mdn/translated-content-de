---
title: transition-behavior
slug: Web/CSS/transition-behavior
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`transition-behavior`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt an, ob Übergänge für Eigenschaften gestartet werden, deren Animationsverhalten [diskret](/de/docs/Web/CSS/CSS_animated_properties#discrete) ist.

## Syntax

```css
/* Keyword values */
transition-behavior: allow-discrete;
transition-behavior: normal;

/* Global values */
transition-behavior: inherit;
transition-behavior: initial;
transition-behavior: revert;
transition-behavior: revert-layer;
transition-behavior: unset;
```

### Werte

- `allow-discrete`
  - : Übergänge werden für diskrete animierte Eigenschaften auf dem Element gestartet.
- `normal`
  - : Übergänge werden _nicht_ für diskrete animierte Eigenschaften auf dem Element gestartet.

## Beschreibung

Die `transition-behavior`-Eigenschaft ist nur relevant, wenn sie in Verbindung mit anderen Transition-Eigenschaften verwendet wird, insbesondere {{cssxref("transition-property")}} und {{cssxref("transition-duration")}}, da kein Übergang stattfindet, wenn keine Eigenschaften über eine Dauer ungleich null animiert werden.

```css
.card {
  transition-property: opacity, display;
  transition-duration: 0.25s;
  transition-behavior: allow-discrete;
}

.card.fade-out {
  opacity: 0;
  display: none;
}
```

Der `transition-behavior`-Wert kann als Teil einer Kurzform-Erklärung von {{cssxref("transition")}} aufgenommen werden. Wenn bei der Kurzform aufgenommen, hat der `allow-discrete`-Wert keine Auswirkungen auf regulär animierbare Eigenschaften, wenn alle Eigenschaften verwendet oder standardmäßig einbezogen werden. Folgender CSS-Code ist gleichwertig zu den oben genannten Langform-Deklarationen:

```css
.card {
  transition: all 0.25s;
  transition: all 0.25s allow-discrete;
}

.card.fade-out {
  opacity: 0;
  display: none;
}
```

Im obigen Snippet haben wir die `transition`-Eigenschaft zweimal aufgenommen. Die erste Instanz enthält nicht den `allow-discrete`-Wert — dies bietet Browser-übergreifende Unterstützung und stellt sicher, dass die anderen Eigenschaften der Karte auch in Browsern mit `transition-behavior` noch übergangsweise behandelt werden.

### Diskretes Animationsverhalten

Diskret animierte Eigenschaften wechseln normalerweise zwischen zwei Werten zu 50% der Animation zwischen den beiden.

Es gibt jedoch eine Ausnahme, nämlich beim Animieren zu oder von `display: none` oder `content-visibility: hidden`. In diesem Fall wechselt der Browser zwischen den beiden Werten, sodass der animierte Inhalt während der gesamten Animationsdauer sichtbar ist.

Ein Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wechselt der Wert zu `block` bei `0%` der Animationsdauer, sodass er sichtbar bleibt.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` wechselt der Wert zu `none` bei `100%` der Animationsdauer, sodass er sichtbar bleibt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Übergang eines Popovers

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) animiert, während es [Übergänge](/de/docs/Web/CSS/CSS_transitions) durchläuft, um von verborgen nach sichtbar und wieder zurück zu wechseln.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover mit dem [Popover](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut deklariert ist, und ein {{htmlelement("button")}}-Element, das als Anzeige-Steuerung des Popovers mittels des [popovertarget](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attributs ausgewählt wurde.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

```css hidden
html {
  font-family: Arial, Helvetica, sans-serif;
}

[popover] {
  font-size: 1.2rem;
  padding: 10px;
}
```

```css
[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}

[popover] {
  /* Final state of the exit animation */
  opacity: 0;
  transform: scaleX(0);

  transition-property: opacity, transform, overlay, display;
  transition-duration: 0.7s;
  transition-behavior: allow-discrete;
  /* Using the shorthand transition property, we could write:
    transition: 
      opacity 0.7s,
      transform 0.7s,
      overlay 0.7s allow-discrete,
      display 0.7s allow-discrete;

    or even:
    transition: all 0.7s allow-discrete;
  */
}

/* Needs to be included after the previous [popover]:popover-open 
   rule to take effect, as the specificity is the same */
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}
```

Die beiden Eigenschaften, die wir animieren möchten, sind [`opacity`](/de/docs/Web/CSS/opacity) und [`transform`](/de/docs/Web/CSS/transform): Wir möchten, dass das Popover ein- und ausblendet, während es in horizontaler Richtung wächst und schrumpft. Wir setzen einen Startzustand für diese Eigenschaften im Standard-Verborgenen-Zustand des Popover-Elements (ausgewählt über `[popover]`), und einen Endzustand im offenen Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/:popover-open)-Pseudoklasse). Dann setzen wir eine [`transition`](/de/docs/Web/CSS/transition)-Eigenschaft, um zwischen den beiden zu animieren.

Da das animierte Element in die {{Glossary("Top_layer", "Top-Schicht")}} gehoben wird, wenn es sichtbar und aus der Top-Schicht entfernt wird, wenn es verborgen ist — was auch bedeutet, dass sein verborgener Zustand mit [`display: none`](/de/docs/Web/CSS/display) eingestellt ist —, werden die folgenden Eigenschaften der Liste der übergangsbezogenen Elemente hinzugefügt, um die Animation in beide Richtungen zu ermöglichen. In beiden Fällen wird `transition-behavior: allow-discrete` in der Kurzform gesetzt, um diskrete Animationen zu ermöglichen.

- `display`: Erforderlich, damit das animierte Element während sowohl des Eintritts als auch der Austrittsanimation sichtbar ist (eingestellt auf `display: block`). Ohne dies wäre die Austrittsanimation nicht sichtbar; das Popover würde in der Praxis einfach verschwinden.
- [`overlay`](/de/docs/Web/CSS/overlay): Erforderlich, um sicherzustellen, dass die Entfernung des Elements aus der Top-Schicht hinausgeschoben wird, bis die Animation abgeschlossen ist. Dies macht keinen großen Unterschied bei einfachen Animationen wie dieser hier, aber in komplexeren Fällen kann das Element zu schnell aus dem Overlay entfernt werden, was dazu führt, dass die Animation nicht glatt oder effektiv ist.

Zusätzlich wird ein Anfangszustand der Animation innerhalb der [`@starting-style`](/de/docs/Web/CSS/@starting-style) At-Regel festgelegt. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden Übergänge nicht bei den ersten Stilaktualisierungen von Elementen oder wenn der `display`-Typ von `none` zu einem anderen Typ wechselt, ausgelöst. `@starting-style` ermöglicht es Ihnen, diesen Standard auf eine spezifische, kontrollierte Weise zu überschreiben. Ohne dies würde die Eintrittsanimation nicht stattfinden und das Popover würde einfach erscheinen.

#### Ergebnis

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers bei jedem Auftreten von `display: none` zu `display: block` wechseln, wechselt das Popover bei jedem Auftreten des Eintrittsübergangs von seinen `@starting-style`-Stilen zu seinen `[popover]:popover-open`-Stilen. Wenn das Popover schließt, wechselt es von seinem `[popover]:popover-open`-Zustand zum Standard-`[popover]`-Zustand.
>
> Es ist möglich, dass sich der Stilübergang beim Eintritt und Austritt in solchen Fällen unterscheidet. Siehe unser [Demonstration of when starting styles are used](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) Beispiel für einen Nachweis dafür.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`overlay`](/de/docs/Web/CSS/overlay)
- [`@starting-style`](/de/docs/Web/CSS/@starting-style)
- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) Modul
- [Four new CSS features for smooth entry and exit animations](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
