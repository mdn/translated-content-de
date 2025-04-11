---
title: transition-behavior
slug: Web/CSS/transition-behavior
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Die **`transition-behavior`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, ob Übergänge für Eigenschaften gestartet werden, deren Animationsverhalten [diskret](/de/docs/Web/CSS/CSS_animated_properties#discrete) ist.

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
  - : Übergänge werden für diskret animierte Eigenschaften auf dem Element gestartet.
- `normal`
  - : Übergänge werden _nicht_ für diskret animierte Eigenschaften auf dem Element gestartet.

## Beschreibung

Die Eigenschaft `transition-behavior` ist nur relevant, wenn sie in Verbindung mit anderen Übergangseigenschaften verwendet wird, insbesondere {{cssxref("transition-property")}} und {{cssxref("transition-duration")}}, da kein Übergang stattfindet, wenn keine Eigenschaften über eine von null verschiedene Zeitdauer animiert werden.

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

Der Wert von `transition-behavior` kann als Teil einer Kurzschreibweise von {{cssxref("transition")}} Deklarationen enthalten sein. Wenn er in der Kurzschreibweise enthalten ist, hat der Wert `allow-discrete` beim Standardwert für alle Eigenschaften keinen Einfluss auf regulär animierbare Eigenschaften. Der folgende CSS-Code ist äquivalent zu den obigen Langschreibweisen:

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

Im obigen Code-Schnipsel ist die Eigenschaft `transition` zweimal enthalten. Die erste Instanz enthält nicht den Wert `allow-discrete` — dies gewährleistet Unterstützung in verschiedenen Browsern und stellt sicher, dass die anderen Eigenschaften der Karte in Browsern, die `transition-behavior` nicht unterstützen, dennoch übergehen.

### Diskretes Animationsverhalten

Diskret animierte Eigenschaften wechseln in der Regel 50% der Animationszeit zwischen zwei Werten.

Es gibt jedoch eine Ausnahme, wenn auf oder von `display: none` oder `content-visibility: hidden` animiert wird. In diesem Fall wechselt der Browser zwischen den beiden Werten, sodass der übergangene Inhalt für die gesamte Animationsdauer angezeigt wird.

Beispielsweise:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wechselt der Wert zu `block` bei `0%` der Animationsdauer, damit er durchgehend sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wechselt der Wert zu `none` bei `100%` der Animationsdauer, damit er durchgehend sichtbar ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Übergang für ein Popover

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) animiert, während es [übergangsweise](/de/docs/Web/CSS/CSS_transitions) von verborgen zu sichtbar und wieder zurück wechselt.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover mit dem [Popover](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attribut deklariert ist, und ein {{htmlelement("button")}}-Element, das als Anzeigesteuerung des Popovers mit seinem [popovertarget](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) Attribut festgelegt ist.

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

Die beiden Eigenschaften, die wir animieren möchten, sind [`opacity`](/de/docs/Web/CSS/opacity) und [`transform`](/de/docs/Web/CSS/transform): Das Popover soll ein- und ausblenden, während es sich in horizontaler Richtung vergrößert und verkleinert. Wir setzen einen Ausgangszustand für diese Eigenschaften im standardmäßig verborgenen Zustand des Popover-Elements (ausgewählt über `[popover]`) und einen Endzustand im offenen Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/:popover-open) Pseudoklasse). Wir setzen dann eine [`transition`](/de/docs/Web/CSS/transition)-Eigenschaft, um zwischen beiden zu animieren.

Da das animierte Element in die {{Glossary("Top_layer", "Top-Schicht")}} gehoben wird, wenn es angezeigt wird, und von der Top-Schicht entfernt wird, wenn es verborgen ist — was auch bedeutet, dass sein verborgener Zustand [`display: none`](/de/docs/Web/CSS/display) darauf hat — werden die folgenden Eigenschaften zur Liste der übergangenen Elemente hinzugefügt, um die Animation in beide Richtungen zum Funktionieren zu bringen. In beiden Fällen wird `transition-behavior: allow-discrete` in der Kurzform gesetzt, um diskrete Animationen zu aktivieren.

- `display`: Erforderlich, damit das animierte Element während sowohl des Eintritts- als auch des Austrittsanimation sichtbar ist (auf `display: block` gesetzt). Ohne diese würde die Austrittsanimation nicht sichtbar sein; das Popover würde einfach verschwinden.
- [`overlay`](/de/docs/Web/CSS/overlay): Erforderlich, um sicherzustellen, dass das Entfernen des Elements von der Top-Schicht aufgeschoben wird, bis die Animation abgeschlossen ist. Dies macht keinen großen Unterschied bei einfachen Animationen wie dieser, aber in komplexeren Fällen kann das Nichtmachen dazu führen, dass das Element zu schnell aus dem Overlay entfernt wird, was bedeutet, dass die Animation nicht flüssig oder effektiv ist.

Zusätzlich wird ein Ausgangszustand für die Animation innerhalb der [`@starting-style`](/de/docs/Web/CSS/@starting-style) at-rule gesetzt. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden Übergänge nicht bei den ersten Stilaktualisierungen von Elementen ausgelöst oder wenn der `display`-Typ von `none` zu einem anderen Typ wechselt. `@starting-style` ermöglicht es Ihnen, diesen Standard auf eine spezifisch kontrollierte Weise zu überschreiben. Ohne dies würde die Eintrittsanimation nicht stattfinden und das Popover würde einfach erscheinen.

#### Ergebnis

Der Code wird wie folgt dargestellt:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers bei jeder Anzeige von `display: none` zu `display: block` wechseln, wird das Popover bei jedem Auftreten des Eintrittsübergangs von seinen `@starting-style`-Stilen zu seinen `[popover]:popover-open`-Stilen übergehen. Wenn das Popover geschlossen wird, wechselt es von seinem `[popover]:popover-open`-Zustand zu dem Standard-`[popover]`-Zustand.
>
> Es ist möglich, dass sich der Stilübergang bei Eintritt und Austritt in solchen Fällen unterscheidet. Siehe unser [Demonstration of when starting styles are used](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) Beispiel für einen Beweis dafür.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`overlay`](/de/docs/Web/CSS/overlay)
- [`@starting-style`](/de/docs/Web/CSS/@starting-style)
- [CSS transitions](/de/docs/Web/CSS/CSS_transitions) Modul
- [Four new CSS features for smooth entry and exit animations](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
