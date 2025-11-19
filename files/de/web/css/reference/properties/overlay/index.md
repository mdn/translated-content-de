---
title: overlay
slug: Web/CSS/Reference/Properties/overlay
l10n:
  sourceCommit: f28f4c26a3d95e41d01a505af3388881abd6e49c
---

{{SeeCompatTable}}

Die **`overlay`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, ob ein Element, das in der {{Glossary("Top_layer", "obersten Schicht")}} erscheint (zum Beispiel ein angezeigtes [Popover](/de/docs/Web/API/Popover_API) oder modales {{htmlelement("dialog")}}-Element), tatsächlich in der obersten Schicht gerendert wird. Diese Eigenschaft ist nur relevant innerhalb einer Liste von {{cssxref("transition-property")}} Werten und nur, wenn `allow-discrete` als {{cssxref("transition-behavior")}} gesetzt ist.

Es ist wichtig zu beachten, dass `overlay` _nur_ vom Browser gesetzt werden kann — Autorenstile können den `overlay`-Wert eines Elements nicht ändern. Sie können jedoch `overlay` zur [Liste der Übergangseigenschaften](/de/docs/Web/CSS/Reference/Properties/transition-property) hinzufügen, die auf ein Element angewendet werden. Dies bewirkt, dass das Entfernen aus der obersten Schicht verzögert wird, sodass es animiert werden kann, anstatt sofort zu verschwinden.

> [!NOTE]
> Beim Übergang von `overlay` müssen Sie [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) auf dem Übergang setzen, damit es animiert wird. `overlay`-Animationen unterscheiden sich von normalen [diskreten Animationen](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete) darin, dass der sichtbare (d.h. `auto`) Zustand für die gesamte Dauer des Übergangs angezeigt wird, unabhängig davon, ob es der Start- oder Endzustand ist.

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
  - : Das Element wird in der obersten Schicht gerendert, wenn es zu dieser befördert wird.
- `none`
  - : Das Element wird nicht in der obersten Schicht gerendert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Übergang eines Popovers

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) animiert, während es vom versteckten zum angezeigten Zustand und zurück wechselt.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover mit dem [popover](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut deklariert ist, und ein {{htmlelement("button")}}-Element, das als Anzeige-Steuerung des Popovers mit dem [popovertarget](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut bezeichnet ist.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die `overlay`-Eigenschaft ist nur in der Liste der Übergangseigenschaften vorhanden. Da `overlay` eine vom Benutzeragenten kontrollierte Eigenschaft ist, wird sie nicht in den Vor- oder Nachübergangszuständen deklariert.

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

Die beiden Eigenschaften, die wir animieren möchten, sind [`opacity`](/de/docs/Web/CSS/Reference/Properties/opacity) und [`transform`](/de/docs/Web/CSS/Reference/Properties/transform): wir möchten, dass das Popover ein- und ausblendet, während es in der horizontalen Richtung wächst und schrumpft. Wir setzen einen Ausgangszustand für diese Eigenschaften im Standardausblendezustand des Popovers (ausgewählt über `[popover]`) und einen Endzustand im geöffneten Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/Reference/Selectors/:popover-open) Pseudoklasse). Dann setzen wir eine [`transition`](/de/docs/Web/CSS/Reference/Properties/transition) Eigenschaft, um zwischen den beiden zu animieren.

Da das animierte Element beim Anzeigen in die {{Glossary("Top_layer", "oberste Schicht")}} befördert und beim Verbergen aus der obersten Schicht entfernt wird, wird `overlay` zur Liste der Übergangselemente hinzugefügt. Dies stellt sicher, dass das Entfernen des Elements aus der obersten Schicht aufgeschoben wird, bis die Animation beendet ist. Dies macht bei einfachen Animationen wie dieser nicht viel Unterschied, aber in komplexeren Fällen kann das Element zu schnell aus der Überlagerung entfernt werden, was bedeutet, dass die Animation nicht flüssig oder effektiv ist. Beachten Sie, dass der Wert [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) ebenfalls im shorthand gesetzt wird, um diskrete Übergänge zu ermöglichen.

Die folgenden Schritte sind ebenfalls erforderlich, um die Animation in beiden Richtungen zum Laufen zu bringen:

- Ein Ausgangszustand für die Animation wird innerhalb der [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style) @regel festgelegt. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden Übergänge bei den ersten Stilaktualisierungen eines Elements oder beim Ändern des `display`-Typs von `none` zu einem anderen Typ nicht ausgelöst. `@starting-style` erlaubt Ihnen, dieses Standardverhalten in kontrollierter Weise zu überschreiben. Ohne dies würde die Eintrittsanimation nicht stattfinden und das Popover würde einfach erscheinen.
- `display` wird ebenfalls zur Liste der Übergangselemente hinzugefügt, damit das animierte Element während der Ein- und Austrittsanimation sichtbar ist (`display: block`). Ohne dies wäre die Austrittsanimation nicht sichtbar; das Popover würde einfach verschwinden. Auch hier ist `transition-behavior: allow-discrete` erforderlich, damit die Animation stattfindet.

Sie werden feststellen, dass wir auch einen Übergang auf dem [`::backdrop`](/de/docs/Web/CSS/Reference/Selectors/::backdrop) enthalten haben, der hinter dem Popover erscheint, wenn es geöffnet wird, um eine schöne Verdunklungsanimation zu bieten. `[popover]:popover-open::backdrop` wird benötigt, um das Backdrop auszuwählen, wenn das Popover geöffnet ist.

#### Ergebnis

Der Code rendert wie folgt:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popover jedes Mal von `display: none` zu `display: block` wechseln, wenn sie angezeigt werden, wechselt das Popover von seinen `@starting-style`-Stilen zu seinen `[popover]:popover-open`-Stilen jedes Mal, wenn der Eintragungsübergang erfolgt. Wenn das Popover geschlossen wird, wechselt es von seinem `[popover]:popover-open`-Zustand zum Standard `[popover]`-Zustand.
>
> Es ist möglich, dass der Stilübergang beim Ein- und Austritt in solchen Fällen unterschiedlich ist. Siehe unser Beispiel [Demonstration of when starting styles are used](/de/docs/Web/CSS/Reference/At-rules/@starting-style#demonstration_of_when_starting_styles_are_used) für einen Beweis dafür.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Übergänge](/de/docs/Web/CSS/Guides/Transitions)
- [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style)
- [`transition-behavior`](/de/docs/Web/CSS/Reference/Properties/transition-behavior)
- [Vier neue CSS-Funktionen für reibungslose Ein- und Austrittsanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
