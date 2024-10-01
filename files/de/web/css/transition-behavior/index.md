---
title: transition-behavior
slug: Web/CSS/transition-behavior
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`transition-behavior`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, ob Transitionen für Eigenschaften gestartet werden, deren Animationsverhalten [diskret](/de/docs/Web/CSS/CSS_animated_properties#discrete) ist.

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
  - : Transitionen werden für diskrete animierte Eigenschaften auf dem Element gestartet.
- `normal`
  - : Transitionen werden _nicht_ für diskrete animierte Eigenschaften auf dem Element gestartet.

## Beschreibung

Die `transition-behavior`-Eigenschaft ist nur relevant, wenn sie in Verbindung mit anderen Transitionseigenschaften verwendet wird, insbesondere {{cssxref("transition-property")}} und {{cssxref("transition-duration")}}, da keine Transition stattfindet, wenn keine Eigenschaften über eine nicht-null-zählige Dauer animiert werden.

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

Der Wert von `transition-behavior` kann als Teil einer Kurzschreibweise {{cssxref("transition")}}-Deklaration enthalten sein. Wenn er in der Kurzschreibweise enthalten ist, hat der `allow-discrete`-Wert keine Auswirkungen auf reguläre animierbare Eigenschaften, wenn man alle Eigenschaften verwendet oder auf sie zurückgreift. Das folgende CSS entspricht den Langform-Deklarationen oben:

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

Im obigen Ausschnitt wird die `transition`-Eigenschaft zweimal verwendet. Die erste Instanz enthält den `allow-discrete`-Wert nicht — dies gewährleistet die Unterstützung in verschiedenen Browsern, sodass die anderen Eigenschaften der Karte auch in Browsern, die `transition-behavior` nicht unterstützen, weiterhin Transitionen durchführen.

### Diskretes Animationsverhalten

Diskret-animierte Eigenschaften wechseln im Allgemeinen in der Mitte zwischen zwei Werten, also bei 50%, während sie zwischen den beiden animieren.

Es gibt jedoch eine Ausnahme, wenn zu oder von `display: none` oder `content-visibility: hidden` animiert wird. In diesem Fall wechselt der Browser zwischen den beiden Werten, sodass der übergangene Inhalt während der gesamten Animationsdauer angezeigt wird.

Zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wechselt der Wert bei `0%` der Animationsdauer zu `block`, damit er während der gesamten Zeit sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wechselt der Wert bei `100%` der Animationsdauer zu `none`, sodass er während der gesamten Zeit sichtbar ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Übergang eines Popovers

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) animiert, wenn es vom versteckten zum sichtbaren Zustand wechselt und umgekehrt.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover unter Verwendung des [popover](/de/docs/Web/HTML/Global_attributes/popover)-Attributs deklariert ist, und ein {{htmlelement("button")}}-Element, das als Anzeigesteuerung des Popovers mit Hilfe seines [popovertarget](/de/docs/Web/HTML/Element/button#popovertarget)-Attributs festgelegt ist.

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

Die beiden Eigenschaften, die wir animieren möchten, sind [`opacity`](/de/docs/Web/CSS/opacity) und [`transform`](/de/docs/Web/CSS/transform): wir möchten, dass das Popover ein- und ausgeblendet wird, während es in horizontaler Richtung wächst und schrumpft. Wir setzen einen Anfangszustand für diese Eigenschaften im standardmäßigen versteckten Zustand des Popover-Elements (ausgewählt über `[popover]`) und einen Endzustand im offenen Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/:popover-open)-Pseudoklasse). Wir setzen dann eine [`transition`](/de/docs/Web/CSS/transition)-Eigenschaft, um zwischen den beiden zu animieren.

Weil das animierte Element in die {{Glossary("Top_layer", "obere Ebene")}} verschoben wird, wenn es sichtbar gemacht wird, und aus der oberen Ebene entfernt wird, wenn es versteckt wird — was auch bedeutet, dass sein versteckter Zustand auf [`display: none`](/de/docs/Web/CSS/display) gesetzt ist — werden die folgenden Eigenschaften zur Liste der übergangenen Elemente hinzugefügt, damit die Animation in beiden Richtungen funktioniert. In beiden Fällen wird `transition-behavior: allow-discrete` in der Kurzschreibweise gesetzt, um diskrete Animation zu ermöglichen.

- `display`: Erforderlich, damit das animierte Element während beider Animationsphasen (Eintritt und Austritt) sichtbar ist (auf `display: block` gesetzt). Ohne dies wäre die Austrittsanimation nicht sichtbar; das Popover würde im Grunde einfach verschwinden.
- [`overlay`](/de/docs/Web/CSS/overlay): Erforderlich, um sicherzustellen, dass die Entfernung des Elements aus der oberen Ebene bis zum Abschluss der Animation verzögert wird. Dies macht bei einfachen Animationen wie dieser keinen großen Unterschied, aber in komplexeren Fällen kann es dazu führen, dass das Element zu schnell aus dem Overlay entfernt wird, wodurch die Animation nicht glatt oder effektiv ist.

Zusätzlich wird ein Startzustand für die Animation innerhalb der [`@starting-style`](/de/docs/Web/CSS/@starting-style)-At-Regel definiert. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden Transitionen nicht bei den ersten Stilaktualisierungen von Elementen ausgelöst, oder wenn sich der `display`-Typ von `none` in einen anderen Typ ändert. `@starting-style` ermöglicht es Ihnen, diesen Standard in einer spezifisch gesteuerten Weise zu überschreiben. Ohne dies würde die Eintrittsanimation nicht stattfinden und das Popover würde einfach erscheinen.

#### Ergebnis

Der Code wird wie folgt ausgeführt:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers von `display: none` zu `display: block` wechseln, jedes Mal wenn sie angezeigt werden, wechselt das Popover bei jedem Eintrittsübergang von seinen `@starting-style`-Stilen zu seinen `[popover]:popover-open`-Stilen. Wenn das Popover geschlossen wird, wechselt es von seinem `[popover]:popover-open`-Zustand zu seinem Standard-`[popover]`-Zustand.
>
> Es ist möglich, dass sich der Stilübergang beim Eintritt und Austritt in solchen Fällen unterscheidet. Siehe unser [Beispiel, wann Startstile verwendet werden](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) für einen Beweis dafür.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`overlay`](/de/docs/Web/CSS/overlay)
- [`@starting-style`](/de/docs/Web/CSS/@starting-style)
- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions)-Modul
- [Vier neue CSS-Funktionen für fließende Ein- und Ausgangsanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
