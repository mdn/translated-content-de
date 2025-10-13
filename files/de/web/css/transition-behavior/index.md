---
title: transition-behavior
slug: Web/CSS/transition-behavior
l10n:
  sourceCommit: bb52c01c1534149f1e3e4755e2576ef7828ecc0f
---

Die **`transition-behavior`**-[CSS](/de/docs/Web/CSS) Eigenschaft gibt an, ob Übergänge für Eigenschaften gestartet werden, deren Animationsverhalten [diskret](/de/docs/Web/CSS/CSS_animated_properties#discrete) ist.

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

Die `transition-behavior`-Eigenschaft ist nur relevant, wenn sie in Verbindung mit anderen Übergangseigenschaften verwendet wird, insbesondere {{cssxref("transition-property")}} und {{cssxref("transition-duration")}}, da kein Übergang erfolgt, wenn keine Eigenschaften über eine Dauer ungleich null animiert werden.

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

Der `transition-behavior`-Wert kann als Teil einer Kurzschreibweise in einer {{cssxref("transition")}}-Deklaration enthalten sein. Wenn er in der Kurzschreibweise enthalten ist und alle Eigenschaften verwendet oder als Standard gesetzt werden, hat der Wert `allow-discrete` keinen Einfluss auf regulär animierbare Eigenschaften. Das folgende CSS ist gleichbedeutend mit den obigen Langschreibe-Deklarationen:

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

Im obigen Snippet inkludieren wir die `transition`-Eigenschaft zweimal. Die erste Instanz enthält nicht den `allow-discrete`-Wert — dies bietet plattformübergreifende Unterstützung und stellt sicher, dass die anderen Eigenschaften der Karte weiterhin in Browsern übergehen, die `transition-behavior` nicht unterstützen.

### Diskretes Animationsverhalten

Diskret animierte Eigenschaften wechseln im Allgemeinen zwischen zwei Werten nach 50 % des Animationsverlaufs.

Es gibt jedoch eine Ausnahme, wenn die Animation zu oder von `display: none` oder `content-visibility: hidden` erfolgt. In diesem Fall wechselt der Browser zwischen den beiden Werten, sodass der übergangene Inhalt für die gesamte Animationsdauer angezeigt wird.

Zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wechselt der Wert zu `block` bei `0%` der Animationsdauer, damit er die ganze Zeit sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wechselt der Wert zu `none` bei `100%` der Animationsdauer, damit er die ganze Zeit sichtbar ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Übergang eines Popovers

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) animiert, während es vom verborgenen in den sichtbaren Zustand übergeht und wieder zurück.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover mit dem [popover](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut deklariert ist, und ein {{htmlelement("button")}}-Element, das als Anzeige-Steuerung des Popovers mit seinem [popovertarget](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut bezeichnet ist.

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

Die zwei Eigenschaften, die wir animieren möchten, sind [`opacity`](/de/docs/Web/CSS/opacity) und [`transform`](/de/docs/Web/CSS/transform): wir möchten, dass das Popover ein- und ausfadet, während es in horizontaler Richtung wächst und schrumpft. Wir setzen einen Ausgangszustand für diese Eigenschaften im Standardzustand des verborgenen Popover-Elements (ausgewählt über `[popover]`) und einen Endzustand im geöffneten Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/:popover-open)-Pseudoklasse). Anschließend setzen wir eine [`transition`](/de/docs/Web/CSS/transition)-Eigenschaft, um zwischen beiden zu animieren.

Da das animierte Element in die {{Glossary("Top_layer", "oberste Schicht")}} befördert wird, wenn es sichtbar ist, und aus der obersten Schicht entfernt wird, wenn es verborgen ist — was auch bedeutet, dass sein verborgener Zustand mit [`display: none`](/de/docs/Web/CSS/display) gesetzt ist — werden die folgenden Eigenschaften zur Liste der übergangenen Elemente hinzugefügt, um die Animation in beide Richtungen zu ermöglichen. In beiden Fällen wird `transition-behavior: allow-discrete` in der Kurzschreibweise gesetzt, um diskrete Animation zu ermöglichen.

- `display`: Erforderlich, damit das animierte Element (auf `display: block` gesetzt) während beider Ein- und Austrittsanimationen sichtbar ist. Ohne dies wäre die Austrittsanimation nicht sichtbar; in der Tat würde das Popover einfach verschwinden.
- [`overlay`](/de/docs/Web/CSS/overlay): Erforderlich, um sicherzustellen, dass die Entfernung des Elements aus der obersten Schicht erst erfolgt, nachdem die Animation abgeschlossen ist. Dies macht zwar bei grundlegenden Animationen wie dieser nicht viel aus, aber in komplexeren Fällen kann das Nichtanwenden dazu führen, dass das Element zu schnell aus dem Overlay entfernt wird, was bedeutet, dass die Animation nicht flüssig oder effektiv ist.

Zusätzlich wird ein Anfangszustand für die Animation in der [`@starting-style`](/de/docs/Web/CSS/@starting-style)-Regel gesetzt. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden Übergänge nicht bei den ersten Stilaktualisierungen von Elementen ausgelöst, oder wenn der `display`-Typ von `none` zu einem anderen Typ verändert wird. `@starting-style` ermöglicht es, diesen Standard in spezifischer kontrollierter Weise zu überschreiben. Ohne dies würde die Eintrittsanimation nicht ablaufen und das Popover würde einfach erscheinen.

#### Ergebnis

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popover beim Anzeigen von `display: none` zu `display: block` wechseln, wechseln sie bei jeder Eintrittsanimation von ihren `@starting-style`-Stilen zu ihren `[popover]:popover-open`-Stilen. Wenn das Popover geschlossen wird, wechselt es von seinem `[popover]:popover-open`-Zustand zum Standardzustand `[popover]`.
>
> Es ist möglich, dass der Stilübergang beim Eintritt und Austritt in solchen Fällen unterschiedlich ist. Siehe unser [Demonstration of when starting styles are used](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) Beispiel als Beweis dafür.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`overlay`](/de/docs/Web/CSS/overlay)
- [`@starting-style`](/de/docs/Web/CSS/@starting-style)
- [CSS transitions](/de/docs/Web/CSS/CSS_transitions) Modul
- [Vier neue CSS-Funktionen für sanfte Ein- und Austrittsanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
