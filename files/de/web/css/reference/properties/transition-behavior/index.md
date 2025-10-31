---
title: transition-behavior
slug: Web/CSS/Reference/Properties/transition-behavior
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

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
  - : Übergänge werden für diskret animierte Eigenschaften des Elements gestartet.
- `normal`
  - : Übergänge werden _nicht_ für diskret animierte Eigenschaften des Elements gestartet.

## Beschreibung

Die `transition-behavior` Eigenschaft ist nur dann relevant, wenn sie in Verbindung mit anderen Übergangseigenschaften verwendet wird, insbesondere mit {{cssxref("transition-property")}} und {{cssxref("transition-duration")}}, da kein Übergang stattfindet, wenn keine Eigenschaften über eine von null verschiedene Dauer animiert werden.

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

Der `transition-behavior` Wert kann als Teil einer Kurzform {{cssxref("transition")}} Deklaration enthalten sein. Wenn sie in der Kurzform enthalten ist und auf alle Eigenschaften angewendet oder standardmäßig genommen wird, hat der `allow-discrete` Wert keinen Einfluss auf regulär animierbare Eigenschaften. Der folgende CSS-Code ist gleichwertig zu den obigen Langform-Deklarationen:

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

Im obigen Schnipsel haben wir die `transition` Eigenschaft zweimal einbezogen. Die erste Instanz schließt den `allow-discrete` Wert nicht ein — dies sorgt für plattformübergreifende Unterstützung und stellt sicher, dass die anderen Eigenschaften der Karte auch in Browsern übergehen, die `transition-behavior` nicht unterstützen.

### Diskretes Animationsverhalten

Diskrete animierte Eigenschaften wechseln in der Regel 50 % der Animationszeit zwischen zwei Werten.

Es gibt jedoch eine Ausnahme, wenn zu oder von `display: none` oder `content-visibility: hidden` animiert wird. In diesem Fall wechselt der Browser zwischen den beiden Werten, sodass der übergangene Inhalt während der gesamten Animationsdauer angezeigt wird.

Beispielsweise:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display` Wert) animiert wird, wechselt der Wert bei `0%` der Animationsdauer zu `block`, sodass er die ganze Zeit sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display` Wert) zu `none` animiert wird, wechselt der Wert bei `100%` der Animationsdauer zu `none`, sodass er die ganze Zeit sichtbar ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Übergang eines Popovers

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) animiert, während es [übergänge](/de/docs/Web/CSS/CSS_transitions) von versteckt zu gezeigt und wieder zurück.

#### HTML

Das HTML enthält ein {{htmlelement("div")}} Element, das mit dem [popover](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attribut als Popover deklariert ist, und ein {{htmlelement("button")}} Element, das mit seinem [popovertarget](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) Attribut als Anzeigesteuerung des Popovers festgelegt ist.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

```css hidden
html {
  font-family: "Helvetica", "Arial", sans-serif;
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

Die beiden Eigenschaften, die wir animieren möchten, sind [`opacity`](/de/docs/Web/CSS/Reference/Properties/opacity) und [`transform`](/de/docs/Web/CSS/Reference/Properties/transform): wir möchten, dass das Popover während des Ein- und Ausblendens in horizontaler Richtung wächst und schrumpft. Wir setzen einen Anfangszustand für diese Eigenschaften im standardmäßig versteckten Zustand des Popover-Elements (ausgewählt über `[popover]`) und einen Endzustand im offenen Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/:popover-open) Pseudoklasse). Dann setzen wir eine [`transition`](/de/docs/Web/CSS/Reference/Properties/transition) Eigenschaft, um zwischen den beiden zu animieren.

Da das animierte Element in die {{Glossary("Top_layer", "oberste Ebene")}} befördert wird, wenn es gezeigt wird, und aus der obersten Ebene entfernt wird, wenn es versteckt wird — was auch bedeutet, dass sein versteckter Zustand [`display: none`](/de/docs/Web/CSS/Reference/Properties/display) darauf gesetzt hat — werden die folgenden Eigenschaften der Liste der übergangenen Elemente hinzugefügt, um die Animation in beide Richtungen zu ermöglichen. In beiden Fällen wird `transition-behavior: allow-discrete` in der Kurzform gesetzt, um diskrete Animation zu ermöglichen.

- `display`: Notwendig, damit das animierte Element während des Ein- und Austritts sichtbar ist (auf `display: block` gesetzt). Ohne dies wäre die Austrittsanimation nicht sichtbar; in der Tat würde das Popover einfach verschwinden.
- [`overlay`](/de/docs/Web/CSS/Reference/Properties/overlay): Notwendig, um sicherzustellen, dass das Entfernen des Elements aus der obersten Ebene bis zum Abschluss der Animation verschoben wird. Dies macht keinen großen Unterschied bei grundlegenden Animationen wie dieser, aber in komplexeren Fällen kann das Fehlen dieses Mechanismus dazu führen, dass das Element zu schnell aus dem Overlay entfernt wird, was bedeutet, dass die Animation nicht glatt oder effektiv ist.

Darüber hinaus wird ein Anfangszustand für die Animation innerhalb der [`@starting-style`](/de/docs/Web/CSS/@starting-style) At-Regel gesetzt. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden Übergänge bei den ersten Stilaktualisierungen von Elementen nicht ausgelöst oder wenn der `display` Typ von `none` in einen anderen Typ geändert wird. `@starting-style` erlaubt Ihnen, diesen Standard auf eine spezifische, kontrollierte Weise zu überschreiben. Ohne dies würde die Eintrittsanimation nicht stattfinden und das Popover würde einfach erscheinen.

#### Ergebnis

Der Code rendert wie folgt:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers von `display: none` zu `display: block` wechseln, jedes Mal, wenn sie angezeigt werden, wechselt das Popover während jedes Eintrittsübergangs von seinen `@starting-style` Stilen zu seinen `[popover]:popover-open` Stilen. Wenn das Popover schließt, wechselt es von seinem `[popover]:popover-open` Zustand zum Standardzustand `[popover]`.
> 
> Es ist möglich, dass sich der Stilübergang beim Eintritt und Austritt in solchen Fällen unterscheidet. Siehe unser [Beispiel zur Demonstration, wann Anfangsstile verwendet werden](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) für einen Nachweis dafür.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`overlay`](/de/docs/Web/CSS/Reference/Properties/overlay)
- [`@starting-style`](/de/docs/Web/CSS/@starting-style)
- [CSS transitions](/de/docs/Web/CSS/CSS_transitions) Modul
- [Vier neue CSS-Features für sanfte Ein- und Austrittsanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
