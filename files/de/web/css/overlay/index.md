---
title: overlay
slug: Web/CSS/overlay
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}{{SeeCompatTable}}

Die **`overlay`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, ob ein Element, das in der {{Glossary("Top_layer", "Top-Ebene")}} erscheint (zum Beispiel ein angezeigtes [Popover](/de/docs/Web/API/Popover_API) oder ein modales {{htmlelement("dialog")}} Element), tatsächlich in der Top-Ebene gerendert wird. Diese Eigenschaft ist nur innerhalb einer Liste von {{cssxref("transition-property")}} Werten relevant und nur, wenn `allow-discrete` als {{cssxref("transition-behavior")}} festgelegt ist.

Es ist wichtig zu beachten, dass `overlay` _nur_ vom Browser gesetzt werden kann — Autorenstile können den `overlay`-Wert eines Elements nicht ändern. Sie können jedoch `overlay` zur [Liste der Transition-Eigenschaften](/de/docs/Web/CSS/transition-property), die auf ein Element angewendet werden, hinzufügen. Dadurch wird das Entfernen aus der Top-Ebene verzögert, sodass es animiert werden kann, anstatt sofort zu verschwinden.

> [!NOTE]
> Wenn Sie `overlay` überführen, müssen Sie [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) auf die Transition setzen, damit sie animiert wird. `overlay`-Animationen unterscheiden sich von normalen [diskreten Animationen](/de/docs/Web/CSS/CSS_animated_properties#discrete), da der sichtbare (d.h. `auto`) Zustand während der gesamten Dauer der Transition immer gezeigt wird, unabhängig davon, ob es sich um den Start- oder Endzustand handelt.

## Syntax

```css
/* Keyword values */
overlay: auto;
overlay: none;

/* Global values */
display: inherit;
display: initial;
display: revert;
display: revert-layer;
display: unset;
```

### Werte

- `auto`
  - : Das Element wird in der Top-Ebene gerendert, wenn es in die Top-Ebene befördert wird.
- `none`
  - : Das Element wird nicht in der Top-Ebene gerendert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Übergang eines Popovers

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) animiert, während es von "versteckt" zu "angezeigt" wechselt und wieder zurück.

#### HTML

Das HTML enthält ein {{htmlelement("div")}} Element, das als Popover deklariert ist, indem das [popover](/de/docs/Web/HTML/Global_attributes/popover) Attribut verwendet wird, und ein {{htmlelement("button")}} Element, das als Steuerung für die Anzeige des Popovers dient, indem es das [popovertarget](/de/docs/Web/HTML/Element/button#popovertarget) Attribut verwendet.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die `overlay`-Eigenschaft ist nur in der Liste der überführten Eigenschaften vorhanden. Da `overlay` eine vom Benutzer-Agent gesteuerte Eigenschaft ist, wird sie nicht im Vor- oder Nach-Übergangszustand deklariert.

```css
html {
  font-family: Arial, Helvetica, sans-serif;
}

[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}

[popover] {
  font-size: 1.2rem;
  padding: 10px;

  /* Final state of the exit animation */
  opacity: 0;
  transform: scaleX(0);

  transition:
    opacity 0.7s,
    transform 0.7s,
    overlay 0.7s allow-discrete,
    display 0.7s allow-discrete;
  /* Equivalent to
  transition: all 0.7s allow-discrete; */
}

/* Needs to be included after the previous [popover]:popover-open
   rule to take effect, as the specificity is the same */
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}

/* Transition for the popover's backdrop */

[popover]::backdrop {
  background-color: rgb(0 0 0 / 0%);
  transition:
    display 0.7s allow-discrete,
    overlay 0.7s allow-discrete,
    background-color 0.7s;
  /* Equivalent to
  transition: all 0.7s allow-discrete; */
}

[popover]:popover-open::backdrop {
  background-color: rgb(0 0 0 / 25%);
}

/* Nesting selectors (&) cannot represent pseudo-elements, so this 
   starting-style rule cannot be nested. */

@starting-style {
  [popover]:popover-open::backdrop {
    background-color: rgb(0 0 0 / 0%);
  }
}
```

Die beiden Eigenschaften, die wir animieren möchten, sind [`opacity`](/de/docs/Web/CSS/opacity) und [`transform`](/de/docs/Web/CSS/transform): Wir möchten, dass das Popover ein- und ausblendet und dabei in horizontaler Richtung wächst und schrumpft. Wir setzen einen Anfangszustand für diese Eigenschaften auf den standardmäßig versteckten Zustand des Popover-Elements (ausgewählt über `[popover]`) und einen Endzustand auf den geöffneten Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/:popover-open) Pseudo-Klasse). Dann setzen wir eine [`transition`](/de/docs/Web/CSS/transition) Eigenschaft, um zwischen den beiden zu animieren.

Da das animierte Element zur {{Glossary("Top_layer", "Top-Ebene")}} befördert wird, wenn es angezeigt und entfernt wird, wenn es versteckt ist, wird `overlay` zur Liste der überführten Elemente hinzugefügt. Dies stellt sicher, dass das Entfernen des Elements aus der Top-Ebene verzögert wird, bis die Animation beendet ist. Dies macht zwar keinen großen Unterschied für grundlegende Animationen wie diese, aber in komplexeren Fällen kann es dazu führen, dass das Element zu schnell entfernt wird und die Animation nicht glatt oder effektiv ist. Beachten Sie, dass der Wert [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) ebenfalls in der Kurzform gesetzt ist, um diskrete Übergänge zu ermöglichen.

Die folgenden Schritte sind auch erforderlich, um die Animation in beiden Richtungen zum Laufen zu bringen:

- Ein Anfangszustand für die Animation wird innerhalb der [`@starting-style`](/de/docs/Web/CSS/@starting-style) At-Regel gesetzt. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden Übergänge bei ersten Stilaktualisierungen von Elementen nicht ausgelöst oder wenn der `display`-Typ von `none` in einen anderen Typ geändert wird. `@starting-style` ermöglicht es Ihnen, dieses Standardverhalten auf eine spezifische Weise zu überschreiben. Ohne dies würde die Eintrittsanimation nicht stattfinden und das Popover würde einfach erscheinen.
- `display` wird ebenfalls zur Liste der überführten Elemente hinzugefügt, sodass das animierte Element während sowohl der Eintritts- als auch der Austrittsanimation sichtbar ist (auf `display: block` gesetzt). Ohne dies wäre die Austrittsanimation nicht sichtbar; das Popover würde also einfach verschwinden. Auch hier ist `transition-behavior: allow-discrete` erforderlich, damit die Animation stattfindet.

Sie werden feststellen, dass wir auch eine Übergangsanimation auf dem [`::backdrop`](/de/docs/Web/CSS/::backdrop) hinzugefügt haben, das hinter dem Popover erscheint, wenn es geöffnet wird, um eine angenehme Verdunklungsanimation bereitzustellen. `[popover]:popover-open::backdrop` ist erforderlich, um den Backdrop zu selektieren, wenn das Popover geöffnet ist.

#### Ergebnis

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers jedes Mal von `display: none` zu `display: block` wechseln, wenn sie angezeigt werden, wechselt das Popover von seinen `@starting-style` Stil zu seinen `[popover]:popover-open` Stil jedes Mal, wenn der Eintrittsübergang stattfindet. Wenn das Popover geschlossen wird, wechselt es von seinem `[popover]:popover-open` Zustand zu dem standardmäßigen `[popover]` Zustand.
>
> Es ist möglich, dass der Stilübergang beim Eintritt und Austritt in solchen Fällen unterschiedlich ist. Siehe unser Beispiel [Demonstration of when starting styles are used](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) für einen Beweis dafür.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) Modul
- [`@starting-style`](/de/docs/Web/CSS/@starting-style)
- [`transition-behavior`](/de/docs/Web/CSS/transition-behavior)
- [Vier neue CSS-Features für sanfte Ein- und Austrittsanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
