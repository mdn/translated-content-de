---
title: transition-behavior
slug: Web/CSS/Reference/Properties/transition-behavior
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`transition-behavior`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt fest, ob Transitionen für Eigenschaften gestartet werden, deren Animationsverhalten [diskret](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete) ist.

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

Die `transition-behavior`-Eigenschaft ist nur relevant, wenn sie in Verbindung mit anderen Transition-Eigenschaften verwendet wird, insbesondere {{cssxref("transition-property")}} und {{cssxref("transition-duration")}}, da keine Transition stattfindet, wenn keine Eigenschaften über eine nicht-null Dauer hinweg animiert werden.

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

Der `transition-behavior`-Wert kann Teil einer Kurznotation für die Deklaration von {{cssxref("transition")}} sein. Wenn in der Kurznotation enthalten und bei der Verwendung oder als Standard auf alle Eigenschaften, hat der `allow-discrete`-Wert keinen Einfluss auf regulär animierbare Eigenschaften. Das folgende CSS entspricht den ausführlichen Deklarationen oben:

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

Im obigen Beispiel fügen wir die `transition`-Eigenschaft zweimal ein. Die erste Instanz enthält nicht den `allow-discrete`-Wert — dies bietet plattformübergreifende Unterstützung, um sicherzustellen, dass die anderen Eigenschaften der Karte auch in Browsern, die `transition-behavior` nicht unterstützen, noch eine Transition erfahren.

### Diskretes Animationsverhalten

Diskret animierte Eigenschaften wechseln im Allgemeinen zwischen zwei Werten bei 50% der Animation zwischen den beiden.

Es gibt jedoch eine Ausnahme, nämlich beim Animieren zu oder von `display: none` oder `content-visibility: hidden`. In diesem Fall wechselt der Browser zwischen den beiden Werten, sodass der übergangene Inhalt für die gesamte Animationsdauer angezeigt wird.

Zum Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wechselt der Wert zu `block` bei `0%` der Animationsdauer, sodass er die gesamte Zeit über sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` wechselt der Wert bei `100%` der Animationsdauer zu `none`, sodass er die gesamte Zeit über sichtbar ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Transition eines Popovers

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) animiert, wenn es [transitioniert](/de/docs/Web/CSS/Guides/Transitions) von versteckt zu angezeigt und wieder zurück.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover mit dem [popover](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut deklariert ist, und ein {{htmlelement("button")}}-Element, das als Steuerung für die Anzeige des Popovers über das [popovertarget](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut bestimmt ist.

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

Die beiden Eigenschaften, die wir animieren möchten, sind [`opacity`](/de/docs/Web/CSS/Reference/Properties/opacity) und [`transform`](/de/docs/Web/CSS/Reference/Properties/transform): Wir möchten, dass das Popover ein- und ausblendet, während es in der horizontalen Richtung wächst und schrumpft. Wir setzen einen Anfangszustand für diese Eigenschaften im Standard anderen Zustand des Popover-Elements (ausgewählt über `[popover]`) und einen Endzustand im offenen Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/Reference/Selectors/:popover-open) Pseudo-Klasse). Dann setzen wir eine [`transition`](/de/docs/Web/CSS/Reference/Properties/transition)-Eigenschaft, um zwischen den beiden zu animieren.

Da das animierte Element an die {{Glossary("Top_layer", "oberste Ebene")}} befördert wird, wenn es angezeigt wird, und aus der obersten Ebene entfernt wird, wenn es verborgen ist — was auch bedeutet, dass sein verborgener Zustand [`display: none`](/de/docs/Web/CSS/Reference/Properties/display) darauf gesetzt hat — werden die folgenden Eigenschaften zur Liste der übergangenen Elemente hinzugefügt, um die Animation in beide Richtungen zum Laufen zu bringen. In beiden Fällen wird `transition-behavior: allow-discrete` in der Kurznotation eingesetzt, um diskrete Animation zu ermöglichen.

- `display`: Notwendig, damit das animierte Element sichtbar bleibt (auf `display: block` gesetzt) während beider Ein- und Ausblendeanimationen. Ohne dies wäre die Ausblendanimation nicht sichtbar; im Effekt würde das Popover einfach verschwinden.
- [`overlay`](/de/docs/Web/CSS/Reference/Properties/overlay): Erforderlich, um sicherzustellen, dass das Entfernen des Elements aus der obersten Ebene zurückgestellt wird, bis die Animation abgeschlossen ist. Dies macht keinen großen Unterschied bei einfachen Animationen wie dieser, aber in komplexeren Fällen kann es zu einem zu schnellen Entfernen des Elements aus dem Overlay kommen, was bedeutet, dass die Animation nicht glatt oder effektiv ist.

Zusätzlich wird ein Anfangszustand für die Animation innerhalb der [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style)-At-Regel festgelegt. Dies ist nötig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden Transitionen nicht bei den ersten Stilaktualisierungen der Elemente ausgelöst oder wenn der `display`-Typ von `none` zu einem anderen Typ wechselt. `@starting-style` ermöglicht, dies auf eine spezifisch kontrollierte Weise zu überschreiben. Ohne dies würde die Eintrittsanimation nicht stattfinden, und das Popover würde einfach erscheinen.

#### Ergebnis

Der Code rendert wie folgt:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers jedes Mal von `display: none` zu `display: block` wechseln, wenn sie gezeigt werden, wird das Popover von seinen `@starting-style`-Stilen zu seinen `[popover]:popover-open`-Stilen jedes Mal transitioniert, wenn die Eintrittstransition stattfindet. Wenn das Popover geschlossen wird, transitioniert es von seinem `[popover]:popover-open`-Zustand zum Standard `[popover]`-Zustand.
>
> Es ist möglich, dass sich die Stiltransition beim Ein- und Austritt in solchen Fällen unterscheidet. Siehe unser [Beispiel für die Demonstration der Verwendung von Startstilen](/de/docs/Web/CSS/Reference/At-rules/@starting-style#demonstration_of_when_starting_styles_are_used) als Beweis dafür.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`overlay`](/de/docs/Web/CSS/Reference/Properties/overlay)
- [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style)
- [CSS-Übergänge](/de/docs/Web/CSS/Guides/Transitions) Modul
- [Vier neue CSS-Features für flüssige Ein- und Austrittsanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
