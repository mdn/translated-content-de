---
title: transition-behavior
slug: Web/CSS/transition-behavior
l10n:
  sourceCommit: cb25e0acbd9f0af27c4a99965cb962230d49a35d
---

{{CSSRef}}

Die **`transition-behavior`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob Transitionen für Eigenschaften gestartet werden, deren Animationsverhalten [diskret](/de/docs/Web/CSS/CSS_animated_properties#discrete) ist.

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
  - : Transitionen werden für diskret animierte Eigenschaften auf dem Element gestartet.
- `normal`
  - : Transitionen werden _nicht_ für diskret animierte Eigenschaften auf dem Element gestartet.

## Beschreibung

Die `transition-behavior` Eigenschaft ist nur relevant, wenn sie in Verbindung mit anderen Transitionseigenschaften verwendet wird, insbesondere {{cssxref("transition-property")}} und {{cssxref("transition-duration")}}, da keine Transition stattfindet, wenn keine Eigenschaften über eine ungleich null lange Zeitspanne animiert werden.

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

Der `transition-behavior` Wert kann als Teil einer abgekürzten {{cssxref("transition")}} Deklaration enthalten sein. Wenn sie in der Abkürzung enthalten ist und alle Eigenschaften verwendet oder als Standard verwendet werden, hat der `allow-discrete` Wert keinen Einfluss auf reguläre animierbare Eigenschaften. Der folgende CSS-Code ist gleichwertig zu den oben aufgeführten Langform-Deklarationen:

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

Im obigen Codebeispiel wird die `transition` Eigenschaft zweimal eingeschlossen. Die erste Instanz schließt den `allow-discrete` Wert nicht ein — dies bietet Unterstützung über verschiedene Browser hinweg und stellt sicher, dass die anderen Eigenschaften der Karte in Browsern, die `transition-behavior` nicht unterstützen, weiterhin übertragen werden.

### Diskretes Animationsverhalten

Diskret animierte Eigenschaften schalten im Allgemeinen zwischen zwei Werten 50% während der Animation zwischen diesen beiden hin und her.

Es gibt jedoch eine Ausnahme, und zwar beim Animieren zu oder von `display: none` oder `content-visibility: hidden`. In diesem Fall wird der Browser zwischen den beiden Werten umschalten, sodass der übertragene Inhalt für die gesamte Animationsdauer angezeigt wird.

Zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display` Wert) animiert wird, wird der Wert zu `block` bei `0%` der Animationsdauer umgeschaltet, sodass er während der gesamten Zeit sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display` Wert) zu `none` animiert wird, wird der Wert zu `none` bei `100%` der Animationsdauer umgeschaltet, sodass er während der gesamten Zeit sichtbar ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Transition eines Popover

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) animiert, während es [Transitionen](/de/docs/Web/CSS/CSS_transitions) von verborgen zu sichtbar und wieder zurück durchläuft.

#### HTML

Das HTML enthält ein {{htmlelement("div")}} Element, das als Popover mit dem [popover](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attribut deklariert ist, und ein {{htmlelement("button")}} Element, das als Steuerungselement für die Anzeige des Popovers mit dem [popovertarget](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) Attribut bestimmt ist.

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

Die zwei Eigenschaften, die wir animieren möchten, sind [`opacity`](/de/docs/Web/CSS/opacity) und [`transform`](/de/docs/Web/CSS/transform): wir möchten, dass das Popover verblasst und aufgehellt wird, während es in horizontaler Richtung wächst und schrumpft. Wir setzen einen Anfangszustand für diese Eigenschaften im standardmäßig verborgenen Zustand des Popover-Elements (ausgewählt über `[popover]`), und einen Endzustand im geöffneten Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/:popover-open) Pseudoklasse). Dann setzen wir eine [`transition`](/de/docs/Web/CSS/transition) Eigenschaft, um zwischen den beiden zu animieren.

Da das animierte Element in die {{Glossary("Top_layer", "Top-Schicht")}} verschoben wird, wenn es sichtbar ist und aus der Top-Schicht entfernt wird, wenn es verborgen ist — was auch bedeutet, dass dessen verborgener Zustand [`display: none`](/de/docs/Web/CSS/display) darauf gesetzt hat — werden die folgenden Eigenschaften zur Liste der überwachten Elemente hinzugefügt, um die Animation in beiden Richtungen zum Laufen zu bringen. In beiden Fällen wird `transition-behavior: allow-discrete` in der Abkürzung gesetzt, um diskrete Animationen zu ermöglichen.

- `display`: Erforderlich, damit das animierte Element während beider, der Eintritts- und Austrittsanimation, sichtbar ist (auf `display: block` gesetzt). Ohne dies wäre die Austrittsanimation nicht sichtbar; das Popover würde einfach verschwinden.
- [`overlay`](/de/docs/Web/CSS/overlay): Erforderlich, um sicherzustellen, dass die Entfernung des Elements aus der Top-Schicht verzögert wird, bis die Animation abgeschlossen ist. Dies hat keinen großen Effekt auf grundlegende Animationen wie diese, aber in komplexeren Fällen kann das Entfernen des Elements aus dem Overlay zu schnell erfolgen, was bedeutet, dass die Animation nicht reibungslos oder effektiv ist.

Zusätzlich wird ein Startzustand für die Animation innerhalb der [`@starting-style`](/de/docs/Web/CSS/@starting-style) At-Regel gesetzt. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden Transitionen nicht bei den ersten Stilaktualisierungen eines Elements ausgelöst oder wenn der `display` Typ von `none` zu einem anderen Typ wechselt. `@starting-style` ermöglicht es Ihnen, diesen Standard in einer spezifischen kontrollierten Weise zu überschreiben. Ohne dies würde die Eintrittsanimation nicht erfolgen und das Popover würde einfach erscheinen.

#### Ergebnis

Der Code rendert wie folgt:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da sich Popover von `display: none` zu `display: block` jedes Mal ändern, wenn sie angezeigt werden, wechselt das Popover jedes Mal beim Eintreten von seinen `@starting-style` Styles zu seinen `[popover]:popover-open` Styles. Wenn das Popover schließt, wechselt es von seinem `[popover]:popover-open` Zustand zum Standard `[popover]` Zustand.
>
> Es ist möglich, dass sich die Stil-Transition beim Eintreten und Austreten in solchen Fällen unterscheidet. Sehen Sie unser [Beispiel für eine Demonstration, wann Startstile verwendet werden](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) für einen Beweis.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`overlay`](/de/docs/Web/CSS/overlay)
- [`@starting-style`](/de/docs/Web/CSS/@starting-style)
- [CSS transitions](/de/docs/Web/CSS/CSS_transitions) Modul
- [Four new CSS features for smooth entry and exit animations](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
