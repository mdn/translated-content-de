---
title: transition-behavior
slug: Web/CSS/transition-behavior
l10n:
  sourceCommit: 919d97a4bda8004f63f655d3f9576c27a82c8a2a
---

{{CSSRef}}

Die **`transition-behavior`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob Übergänge für Eigenschaften gestartet werden, deren Animationsverhalten [diskret](/de/docs/Web/CSS/CSS_animated_properties#discrete) ist.

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
  - : Übergänge werden für ununterbrochen animierte Eigenschaften des Elements gestartet.
- `normal`
  - : Übergänge werden _nicht_ für ununterbrochen animierte Eigenschaften des Elements gestartet.

## Beschreibung

Die `transition-behavior` Eigenschaft ist nur relevant, wenn sie in Verbindung mit anderen Übergangseigenschaften verwendet wird, insbesondere {{cssxref("transition-property")}} und {{cssxref("transition-duration")}}, da kein Übergang erfolgt, wenn keine Eigenschaften über einen Zeitraum ungleich Null animiert werden.

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

Der `transition-behavior` Wert kann als Teil einer {{cssxref("transition")}} Kurznotation enthalten sein. Wenn er in der Kurznotation enthalten ist, hat der `allow-discrete` Wert keine Auswirkung auf regulär animierbare Eigenschaften, wenn alle Eigenschaften genutzt oder als Standard gesetzt werden. Das folgende CSS ist äquivalent zu den oben gezeigten Langnotationen:

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

Im obigen Ausschnitt ist die `transition` Eigenschaft zweimal enthalten. Die erste Instanz schließt den `allow-discrete` Wert nicht ein – dies bietet einen plattformübergreifenden Browser-Support und stellt sicher, dass die anderen Eigenschaften der Karte weiterhin in Browsern übergehen, die `transition-behavior` nicht unterstützen.

### Diskretes Animationsverhalten

Diskret animierte Eigenschaften wechseln in der Regel 50 % der Animation zwischen zwei Werten.

Es gibt jedoch eine Ausnahme, nämlich beim animieren zu oder von `display: none` oder `content-visibility: hidden`. In diesem Fall wechselt der Browser zwischen den beiden Werten, sodass der animierte Inhalt während der gesamten Animationsdauer angezeigt wird.

Zum Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display` Wert) wechselt der Wert zu `block` bei `0%` der Animationsdauer, sodass er während der ganzen Zeit sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display` Wert) zu `none`, wechselt der Wert zu `none` bei `100%` der Animationsdauer, sodass er während der ganzen Zeit sichtbar ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Übergang eines Popovers

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) animiert, während es [übergänge](/de/docs/Web/CSS/CSS_transitions) von verborgen zu sichtbar und zurück vollzieht.

#### HTML

Das HTML enthält ein {{htmlelement("div")}} Element, das als Popover mit dem [popover](/de/docs/Web/HTML/Global_attributes/popover) Attribut deklariert ist, und ein {{htmlelement("button")}} Element, das als Anzeigeelement des Popovers mit seinem [popovertarget](/de/docs/Web/HTML/Element/button#popovertarget) Attribut gekennzeichnet ist.

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

Die beiden Eigenschaften, die wir animieren möchten, sind [`opacity`](/de/docs/Web/CSS/opacity) und [`transform`](/de/docs/Web/CSS/transform): Das Popover soll ein- und ausgeblendet werden, während es in horizontaler Richtung wächst und schrumpft. Wir setzen einen Startzustand für diese Eigenschaften im standardmäßig verborgenen Zustand des Popover-Elements (ausgewählt über `[popover]`) und einen Endzustand im offenen Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/:popover-open) Pseudoklasse). Anschließend setzen wir eine [`transition`](/de/docs/Web/CSS/transition) Eigenschaft, um zwischen den beiden zu animieren.

Da das animierte Element beim Anzeigen in die {{Glossary("Top_layer", "Top-Ebene")}} verschoben wird und beim Ausblenden von der Top-Ebene entfernt wird — was auch bedeutet, dass sein verborgener Zustand mit [`display: none`](/de/docs/Web/CSS/display) darauf gesetzt ist — werden die folgenden Eigenschaften zur Liste der übergangenen Elemente hinzugefügt, um die Animation in beide Richtungen zu realisieren. In beiden Fällen wird `transition-behavior: allow-discrete` in der Kurznotation gesetzt, um diskrete Animationen zu ermöglichen.

- `display`: Erforderlich, damit das animierte Element (auf `display: block` gesetzt) während der Ein- und Ausblendeanimation sichtbar ist. Ohne dies wäre die Ausblendanimation nicht sichtbar; effektiv würde das Popover einfach verschwinden.
- [`overlay`](/de/docs/Web/CSS/overlay): Erforderlich, um sicherzustellen, dass die Entfernung des Elements aus der Top-Ebene erst nach Abschluss der Animation durchgeführt wird. Dies macht in einfachen Animationen wie dieser keinen großen Unterschied, aber in komplexeren Fällen kann das Element zu schnell aus dem Overlay entfernt werden, was dazu führt, dass die Animation nicht fließend oder wirkungsvoll ist.

Zusätzlich wird ein Startzustand für die Animation innerhalb der [`@starting-style`](/de/docs/Web/CSS/@starting-style) At-Regel gesetzt. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden Übergänge nicht bei den ersten Stilaktualisierungen der Elemente ausgelöst, oder wenn sich der `display` Typ von `none` zu einem anderen Typ ändert. `@starting-style` ermöglicht es Ihnen, diesen Standard in kontrollierter Weise zu überschreiben. Ohne dies würde die Eintrittsanimation nicht erfolgen und das Popover würde einfach erscheinen.

#### Ergebnis

Der Code wird wie folgt dargestellt:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popover jedes Mal von `display: none` zu `display: block` wechseln, wenn sie angezeigt werden, wechselt das Popover von seinen `@starting-style` Stilen zu seinen `[popover]:popover-open` Stilen jedes Mal, wenn der Eintrittsübergang auftritt. Wenn das Popover schließt, wechselt es von seinem `[popover]:popover-open` Zustand zum Standardzustand `[popover]`.
>
> Es ist möglich, dass der Stilübergang beim Eintritt und Austritt unterschiedlich ist. Sehen Sie unser [Beispiel zu wann Startstile verwendet werden](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) für den Nachweis hierfür.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`overlay`](/de/docs/Web/CSS/overlay)
- [`@starting-style`](/de/docs/Web/CSS/@starting-style)
- [CSS Übergänge](/de/docs/Web/CSS/CSS_transitions) Modul
- [Vier neue CSS-Funktionen für sanfte Ein- und Austrittsanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
