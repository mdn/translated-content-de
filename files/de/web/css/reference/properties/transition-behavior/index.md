---
title: transition-behavior
slug: Web/CSS/Reference/Properties/transition-behavior
l10n:
  sourceCommit: e316a03cc74a78004dbba837c9d5df297e2eb0aa
---

Die **`transition-behavior`**-[CSS](/de/docs/Web/CSS)-Eigenschaft gibt an, ob Übergänge für Eigenschaften gestartet werden, deren Animationsverhalten [diskret](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete) ist.

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

Die `transition-behavior`-Eigenschaft ist nur dann relevant, wenn sie in Verbindung mit anderen Übergangseigenschaften verwendet wird, insbesondere {{cssxref("transition-property")}} und {{cssxref("transition-duration")}}, da kein Übergang erfolgt, wenn keine Eigenschaften über eine von null verschiedene Dauer hinweg animiert werden.

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

Der `transition-behavior`-Wert kann als Teil einer Kurznotation {{cssxref("transition")}}-Deklaration enthalten sein. Wenn er in der Kurznotation enthalten ist, hat der `allow-discrete`-Wert keinen Einfluss auf reguläre animierbare Eigenschaften, wenn alle Eigenschaften verwendet oder auf diese zurückgegriffen wird. Das folgende CSS entspricht den oben genannten Langhanddeklarationen:

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

Im obigen Schnipsel inkludieren wir zweimal die `transition`-Eigenschaft. Die erste Instanz beinhaltet nicht den `allow-discrete`-Wert — dies bietet plattformübergreifende Unterstützung, um sicherzustellen, dass die anderen Eigenschaften der Karte auch in Browsern übergehen, die `transition-behavior` nicht unterstützen.

### Diskretes Animationsverhalten

Diskret animierte Eigenschaften wechseln normalerweise zwischen zwei Werten um 50 % des Animationsverlaufs zwischen den beiden.

Es gibt jedoch eine Ausnahme, nämlich wenn zu oder von `display: none` oder `content-visibility: hidden` animiert wird. In diesem Fall wechselt der Browser zwischen den beiden Werten, sodass der übergegangene Inhalt für die gesamte Dauer der Animation angezeigt wird.

Zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wechselt der Wert bei `0%` der Animationsdauer zu `block`, damit er sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wechselt der Wert bei `100%` der Animationsdauer zu `none`, damit er sichtbar ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Übergang eines Popovers

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) animiert, während es [übergeht](/de/docs/Web/CSS/Guides/Transitions) von versteckt zu sichtbar und wieder zurück.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover mit dem [popover](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut deklariert ist, sowie ein {{htmlelement("button")}}-Element, das als Steuerung für die Darstellung des Popovers durch sein [popovertarget](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut bezeichnet ist.

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

Die zwei Eigenschaften, die wir animieren möchten, sind [`opacity`](/de/docs/Web/CSS/Reference/Properties/opacity) und [`transform`](/de/docs/Web/CSS/Reference/Properties/transform): Wir wollen, dass der Popover ein- und ausgeblendet wird, während er in der horizontalen Richtung wächst und schrumpft. Wir setzen einen Startzustand für diese Eigenschaften im standardmäßig versteckten Zustand des Popover-Elements (ausgewählt über `[popover]`) und einen Endzustand im offenen Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/Reference/Selectors/:popover-open)-Pseudoklasse). Wir setzen dann eine [`transition`](/de/docs/Web/CSS/Reference/Properties/transition)-Eigenschaft, um zwischen den beiden zu animieren.

Da das animierte Element zum {{Glossary("Top_layer", "obersten Layer")}} aufgestiegen wird, wenn es angezeigt wird, und aus dem obersten Layer entfernt wird, wenn es versteckt wird — was auch bedeutet, dass sein versteckter Zustand [`display: none`](/de/docs/Web/CSS/Reference/Properties/display) aufweist — werden die folgenden Eigenschaften zur Liste der übergangenen Elemente hinzugefügt, damit die Animation in beide Richtungen funktioniert. In beiden Fällen wird `transition-behavior: allow-discrete` in der Kurznotation gesetzt, um diskrete Animation zu ermöglichen.

- `display`: Erforderlich, damit das animierte Element während sowohl des Eintritts als auch des Austritts der Animation sichtbar ist (auf `display: block` gesetzt). Ohne dies wäre die Austrittsanimation nicht sichtbar; effektiv würde der Popover einfach verschwinden.
- [`overlay`](/de/docs/Web/CSS/Reference/Properties/overlay): Erforderlich, um sicherzustellen, dass die Entfernung des Elements aus dem obersten Layer aufgeschoben wird, bis die Animation abgeschlossen ist. Dies macht keinen großen Unterschied für grundlegende Animationen wie diese, aber in komplexeren Fällen kann es dazu führen, dass das Element zu schnell aus dem Overlay entfernt wird, was bedeutet, dass die Animation nicht glatt oder effektiv ist.

Darüber hinaus wird ein Startzustand für die Animation innerhalb der [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style)-At-Rules gesetzt. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden Übergänge nicht bei den ersten Stilaktualisierungen von Elementen ausgelöst oder wenn sich der `display`-Typ von `none` in einen anderen Typ ändert. `@starting-style` erlaubt es Ihnen, diese Standardeinstellung auf spezifisch kontrollierte Weise zu überschreiben. Ohne dies würde die Eintrittsanimation nicht stattfinden und der Popover würde einfach erscheinen.

#### Ergebnis

Der Code wird wie folgt wiedergegeben:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popover jedes Mal von `display: none` zu `display: block` wechseln, wenn sie angezeigt werden, wechselt das Popover jedes Mal, wenn der Eintragstransition erfolgt, von seinen `@starting-style`-Stilen zu seinen `[popover]:popover-open`-Stilen. Wenn der Popover schließt, wechselt er von seinem `[popover]:popover-open`-Zustand zum Standard-`[popover]`-Zustand.
>
> Es ist möglich, dass sich der Stilübergang beim Ein- und Austritt in solchen Fällen unterscheidet. Sehen Sie sich unser [Demonstration of when starting styles are used](/de/docs/Web/CSS/Reference/At-rules/@starting-style#demonstration_of_when_starting_styles_are_used)-Beispiel für einen Beweis dafür an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`overlay`](/de/docs/Web/CSS/Reference/Properties/overlay)
- [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style)
- [CSS-Übergänge](/de/docs/Web/CSS/Guides/Transitions)-Modul
- [Vier neue CSS-Funktionen für fließende Ein- und Austrittsanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
