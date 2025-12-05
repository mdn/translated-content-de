---
title: overlay
slug: Web/CSS/Reference/Properties/overlay
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

{{SeeCompatTable}}

Die **`overlay`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, ob ein Element, das in der {{Glossary("Top_layer", "obersten Schicht")}} erscheint (z.B. ein angezeigtes [Popover](/de/docs/Web/API/Popover_API) oder modales {{htmlelement("dialog")}}-Element), tatsächlich in der obersten Schicht gerendert wird. Diese Eigenschaft ist nur relevant innerhalb einer Liste von {{cssxref("transition-property")}} Werten und nur, wenn `allow-discrete` als {{cssxref("transition-behavior")}} gesetzt ist.

Es ist wichtig zu beachten, dass `overlay` _nur_ vom Browser gesetzt werden kann – Autorenstile können den `overlay`-Wert eines Elements nicht ändern. Sie können jedoch `overlay` zur [Liste der Übergangseigenschaften](/de/docs/Web/CSS/Reference/Properties/transition-property) hinzufügen, die auf ein Element gesetzt sind. Dies führt dazu, dass seine Entfernung aus der obersten Schicht verzögert wird, sodass es animiert werden kann, anstatt sofort zu verschwinden.

> [!NOTE]
> Wenn Sie `overlay` animieren, müssen Sie [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) auf dem Übergang setzen, damit er animiert wird. `overlay` Animationen unterscheiden sich von normalen [diskreten Animationen](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete) darin, dass der sichtbare (d.h. `auto`) Zustand während der gesamten Dauer des Übergangs immer angezeigt wird, unabhängig davon, ob es der Start- oder Endzustand ist.

## Syntax

```css
/* Keyword values */
overlay: auto;
overlay: none;

/* Global values */
overlay: inherit;
overlay: initial;
overlay: revert;
overlay: revert-layer;
overlay: unset;
```

### Werte

- `auto`
  - : Das Element wird in der obersten Schicht gerendert, wenn es in die oberste Schicht befördert wird.
- `none`
  - : Das Element wird nicht in der obersten Schicht gerendert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Übergang eines Popovers

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) animiert, wenn es von versteckt zu angezeigt wechselt und umgekehrt.

#### HTML

Das HTML enthält ein {{htmlelement("div")}} Element, das mit dem [popover](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attribut als Popover deklariert wurde, und ein {{htmlelement("button")}} Element, das mit seinem [popovertarget](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) Attribut als Anzeigekontrolle des Popovers bezeichnet wird.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die `overlay`-Eigenschaft ist nur in der Liste der übergangenen Eigenschaften vorhanden. Da `overlay` eine vom Benutzer-Agent gesteuerte Eigenschaft ist, wird sie nicht in den Vor-Übergangs- oder Nach-Übergangszuständen deklariert.

```css
html {
  font-family: "Helvetica", "Arial", sans-serif;
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
  background-color: transparent;
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
    background-color: transparent;
  }
}
```

Die beiden Eigenschaften, die wir animieren möchten, sind {{cssxref("opacity")}} und {{cssxref("transform")}}: Wir möchten, dass das Popover ein- und ausblendet, während es in horizontaler Richtung wächst und schrumpft. Wir setzen einen Anfangszustand für diese Eigenschaften im Standard-verborgenen Zustand des Popover-Elements (ausgewählt über `[popover]`) und einen Endzustand im offenen Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/Reference/Selectors/:popover-open) Pseudoklasse). Wir setzen dann eine {{cssxref("transition")}}-Eigenschaft, um zwischen den beiden zu animieren.

Da das animierte Element in die {{Glossary("Top_layer", "oberste Schicht")}} befördert wird, wenn es angezeigt wird, und aus der obersten Schicht entfernt wird, wenn es versteckt wird, wird `overlay` zur Liste der übergangenen Elemente hinzugefügt. Dies stellt sicher, dass die Entfernung des Elements aus der obersten Schicht verzögert wird, bis die Animation beendet ist. Dies macht keinen großen Unterschied für grundlegende Animationen wie diese, aber in komplexeren Fällen kann das Element zu schnell aus dem Overlay entfernt werden, was bedeutet, dass die Animation nicht glatt oder effektiv ist. Beachten Sie, dass der Wert [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) im Shorthand ebenfalls gesetzt ist, um diskrete Übergänge zu ermöglichen.

Folgende Schritte sind ebenfalls erforderlich, um die Animation in beiden Richtungen zum Laufen zu bringen:

- Ein Anfangszustand für die Animation wird innerhalb der [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style) At-Regel gesetzt. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden Übergänge nicht bei den ersten Stilaktualisierungen von Elementen ausgelöst oder wenn der `display`-Typ von `none` auf einen anderen Typ wechselt. `@starting-style` ermöglicht es Ihnen, diesen Standard auf spezifische kontrollierte Weise zu überschreiben. Ohne dies würde die Eintrittsanimation nicht auftreten und das Popover würde einfach erscheinen.
- `display` wird ebenfalls zur Liste der übergangenen Elemente hinzugefügt, damit das animierte Element während der Ein- und Austrittsanimation sichtbar ist (auf `display: block` gesetzt). Ohne dies würde die Austrittsanimation nicht sichtbar sein; in der Tat würde das Popover einfach verschwinden. Auch hier ist `transition-behavior: allow-discrete` in diesem Fall erforderlich, damit die Animation erfolgt.

Sie werden feststellen, dass wir auch einen Übergang auf dem [`::backdrop`](/de/docs/Web/CSS/Reference/Selectors/::backdrop) eingeschlossen haben, der hinter dem Popover erscheint, wenn es geöffnet wird, um eine angenehme Verdunklungsanimation bereitzustellen. `[popover]:popover-open::backdrop` wird benötigt, um das Backdrop zu wählen, wenn das Popover geöffnet ist.

#### Ergebnis

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers jedes Mal von `display: none` auf `display: block` wechseln, wenn sie angezeigt werden, wechselt das Popover jedes Mal von seinem `@starting-style`-Stilen zu seinen `[popover]:popover-open`-Stilen, wenn der Eintrittsübergang erfolgt. Wenn das Popover schließt, wechselt es von seinem `[popover]:popover-open` Zustand zum Standard `[popover]` Zustand.
>
> Es ist möglich, dass sich der Stilübergang bei Eintritt und Austritt in solchen Fällen unterscheidet. Sehen Sie unser Beispiel [Demonstration of when starting styles are used](/de/docs/Web/CSS/Reference/At-rules/@starting-style#demonstration_of_when_starting_styles_are_used) für einen Nachweis hierfür an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Übergänge](/de/docs/Web/CSS/Guides/Transitions) Modul
- [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style)
- {{cssxref("transition-behavior")}}
- [Vier neue CSS-Features für geschmeidige Ein- und Austrittsanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
