---
title: transition-behavior
slug: Web/CSS/Reference/Properties/transition-behavior
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Die **`transition-behavior`**-Eigenschaft von [CSS](/de/docs/Web/CSS) gibt an, ob Übergänge für Eigenschaften gestartet werden, deren Animationsverhalten [diskret](/de/docs/Web/CSS/CSS_animated_properties#discrete) ist.

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

Die Eigenschaft `transition-behavior` ist nur relevant, wenn sie in Verbindung mit anderen Übergangseigenschaften verwendet wird, insbesondere {{cssxref("transition-property")}} und {{cssxref("transition-duration")}}, da kein Übergang stattfindet, wenn keine Eigenschaften über eine von Null abweichende Dauer hinweg animiert werden.

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

Der `transition-behavior`-Wert kann als Teil einer Kurzschriftdeklaration von {{cssxref("transition")}} enthalten sein. Wenn sie in der Kurzschrift enthalten ist und bei Verwendung oder Standard auf alle Eigenschaften, hat der `allow-discrete`-Wert keine Auswirkungen auf reguläre animierbare Eigenschaften. Das folgende CSS ist äquivalent zu den oben genannten Langschriftdarstellungen:

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

Im obigen Ausschnitt fügen wir die `transition`-Eigenschaft zweimal ein. Die erste Instanz enthält nicht den Wert `allow-discrete` — dies bietet Browser-übergreifende Unterstützung und stellt sicher, dass die anderen Eigenschaften der Karte auch in Browsern, die `transition-behavior` nicht unterstützen, übergehen.

### Diskretes Animationsverhalten

Diskret animierte Eigenschaften wechseln im Allgemeinen zwischen zwei Werten 50 % während der Animation zwischen beiden.

Es gibt jedoch eine Ausnahme, nämlich beim Animieren zu oder von `display: none` oder `content-visibility: hidden`. In diesem Fall wechselt der Browser zwischen den beiden Werten, sodass der übergangene Inhalt während der gesamten Animationsdauer angezeigt wird.

Zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wird der Wert bei `0%` der Animationsdauer zu `block`, damit er sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wird der Wert bei `100%` der Animationsdauer zu `none`, damit er die ganze Zeit sichtbar ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Übergang eines Popover

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) animiert, während es von verborgen zu sichtbar übergeht und umgekehrt.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover unter Verwendung des [popover](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attributs deklariert wurde, und ein {{htmlelement("button")}}-Element, das als Anzeige-Steuerelement des Popovers mithilfe seines [popovertarget](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attributs ausgewiesen ist.

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

Die beiden Eigenschaften, die wir animieren möchten, sind [`opacity`](/de/docs/Web/CSS/Reference/Properties/opacity) und [`transform`](/de/docs/Web/CSS/Reference/Properties/transform): Wir möchten, dass das Popover ein- und ausblendet, während es in horizontaler Richtung wächst und schrumpft. Wir setzen einen Ausgangszustand für diese Eigenschaften im standardmäßig verborgenen Zustand des Popover-Elements (ausgewählt über `[popover]`), und einen Endzustand im offenen Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/Reference/Selectors/:popover-open)-Pseudo-Klasse). Wir setzen dann eine [`transition`](/de/docs/Web/CSS/Reference/Properties/transition)-Eigenschaft, um zwischen den beiden zu animieren.

Da das animierte Element in die {{Glossary("Top_layer", "Top-Schicht")}} befördert wird, wenn es angezeigt wird, und aus der Top-Schicht entfernt wird, wenn es verborgen ist — was auch bedeutet, dass sein verborgener Zustand [`display: none`](/de/docs/Web/CSS/Reference/Properties/display) auf ihm gesetzt hat — werden die folgenden Eigenschaften zur Liste der übergangenen Elemente hinzugefügt, um die Animation in beiden Richtungen zum Laufen zu bringen. In beiden Fällen wird `transition-behavior: allow-discrete` in der Kurzschrift gesetzt, um diskrete Animation zu ermöglichen.

- `display`: Erforderlich, damit das animierte Element sichtbar ist (auf `display: block` gesetzt) während sowohl des Eintritts- als auch des Austrittsanimation. Ohne dies wäre die Austrittsanimation nicht sichtbar; im Effekt würde das Popover einfach verschwinden.
- [`overlay`](/de/docs/Web/CSS/Reference/Properties/overlay): Erforderlich, um sicherzustellen, dass die Entfernung des Elements aus der Top-Schicht verzögert wird, bis die Animation abgeschlossen ist. Dies macht bei grundlegenden Animationen wie dieser keinen großen Unterschied, aber in komplexeren Fällen kann es dazu führen, dass das Element zu schnell aus dem Overlay entfernt wird, was bedeutet, dass die Animation nicht glatt oder effektiv ist.

Zusätzlich wird ein Ausgangszustand für die Animation innerhalb der [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style)-At-Regel gesetzt. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden Übergänge nicht auf die ersten Stilaktualisierungen von Elementen oder wenn sich der `display`-Typ von `none` zu einem anderen Typ ändert, ausgelöst. `@starting-style` erlaubt es Ihnen, diesen Standard in einer spezifisch kontrollierten Weise zu überschreiben. Ohne dies würde die Eintrittsanimation nicht auftreten und das Popover würde einfach erscheinen.

#### Ergebnis

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popover jedes Mal von `display: none` zu `display: block` wechseln, wenn sie angezeigt werden, wechselt das Popover bei jedem Auftreten des Eintrittsübergangs von seinen `@starting-style`-Stilen zu seinen `[popover]:popover-open`-Stilen. Wenn das Popover schließt, wechselt es von seinem `[popover]:popover-open`-Zustand zum Standardzustand `[popover]`.
>
> Es ist möglich, dass sich der Stilübergang beim Eintritt und Austritt in solchen Fällen unterscheidet. Sehen Sie sich unser Beispiel [Demonstration of when starting styles are used](/de/docs/Web/CSS/Reference/At-rules/@starting-style#demonstration_of_when_starting_styles_are_used) für einen Beweis dafür an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`overlay`](/de/docs/Web/CSS/Reference/Properties/overlay)
- [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style)
- [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions)-Modul
- [Vier neue CSS-Funktionen für flüssige Ein- und Austrittsanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
