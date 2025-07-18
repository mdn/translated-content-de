---
title: overlay
slug: Web/CSS/overlay
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{SeeCompatTable}}

Die **`overlay`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt an, ob ein Element, das in der {{Glossary("Top_layer", "Top-Schicht")}} erscheint (zum Beispiel ein angezeigtes [Popover](/de/docs/Web/API/Popover_API) oder modales {{htmlelement("dialog")}}-Element), tatsächlich in der oberen Schicht gerendert wird. Diese Eigenschaft ist nur innerhalb einer Liste von {{cssxref("transition-property")}}-Werten relevant und nur, wenn `allow-discrete` als {{cssxref("transition-behavior")}} festgelegt ist.

Es ist wichtig zu beachten, dass `overlay` _nur_ vom Browser festgelegt werden kann – Autorenstile können den `overlay`-Wert eines Elements nicht ändern. Sie können jedoch `overlay` zur [Liste der Übergangseigenschaften](/de/docs/Web/CSS/transition-property) eines Elements hinzufügen. Dies bewirkt, dass seine Entfernung aus der oberen Schicht verzögert wird, sodass es animiert statt sofort verschwunden ist.

> [!NOTE]
> Beim Übergang von `overlay` müssen Sie [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) auf dem Übergang setzen, damit er animiert wird. `overlay`-Animationen unterscheiden sich von normalen [diskreten Animationen](/de/docs/Web/CSS/CSS_animated_properties#discrete) darin, dass der sichtbare (d.h. `auto`) Zustand für die gesamte Dauer des Übergangs immer angezeigt wird, unabhängig davon, ob es der Start- oder Endzustand ist.

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
  - : Das Element wird in der oberen Schicht gerendert, wenn es in die obere Schicht befördert wird.
- `none`
  - : Das Element wird nicht in der oberen Schicht gerendert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Übergang eines Popovers

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) animiert, während es von verborgen zu angezeigt und wieder zurück wechselt.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover mit dem [popover](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut deklariert ist, und ein {{htmlelement("button")}}-Element, das als Anzeige-Steuerung des Popovers mit seinem [popovertarget](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut festgelegt ist.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die `overlay`-Eigenschaft ist nur in der Liste der übergangenen Eigenschaften vorhanden. Da `overlay` eine vom Benutzeragenten kontrollierte Eigenschaft ist, wird sie nicht in den Zuständen vor dem Übergang oder nach dem Übergang deklariert.

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

Die beiden Eigenschaften, die wir animieren möchten, sind [`opacity`](/de/docs/Web/CSS/opacity) und [`transform`](/de/docs/Web/CSS/transform): Wir möchten, dass das Popover ein- und ausblendet und dabei in horizontaler Richtung wächst und schrumpft. Wir setzen einen Startzustand für diese Eigenschaften im standardmäßig verborgenen Zustand des Popover-Elements (ausgewählt über `[popover]`) und einen Endzustand im geöffneten Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/:popover-open)-Pseudoklasse). Dann setzen wir eine [`transition`](/de/docs/Web/CSS/transition)-Eigenschaft, um zwischen den beiden zu animieren.

Da das animierte Element in die {{Glossary("Top_layer", "Top-Schicht")}} befördert wird, wenn es angezeigt wird, und aus der oberen Schicht entfernt wird, wenn es verborgen ist, wird `overlay` zur Liste der übergangenen Elemente hinzugefügt. Dies stellt sicher, dass die Entfernung des Elements aus der oberen Schicht bis zum Ende der Animation verzögert wird. Das macht keinen großen Unterschied bei einfachen Animationen wie dieser, aber in komplexeren Fällen kann das Element zu schnell aus dem Overlay entfernt werden, was bedeutet, dass die Animation nicht flüssig oder effektiv ist. Beachten Sie, dass der Wert [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) auch in der Kurzform gesetzt ist, um diskrete Übergänge zu ermöglichen.

Die folgenden Schritte sind ebenfalls erforderlich, um die Animation in beide Richtungen zum Laufen zu bringen:

- Ein Startzustand für die Animation wird innerhalb der [`@starting-style`](/de/docs/Web/CSS/@starting-style)-Regel festgelegt. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden Übergänge nicht bei den ersten Stilupdates von Elementen ausgelöst oder wenn der `display`-Typ von `none` in einen anderen Typ geändert wird. `@starting-style` erlaubt es, dieses Standardverhalten in einer bestimmten kontrollierten Weise zu überschreiben. Ohne dies würde die Eintrittsanimation nicht auftreten und das Popover würde einfach erscheinen.
- `display` wird ebenfalls zur Liste der übergangenen Elemente hinzugefügt, damit das animierte Element während der Eintritts- und Austrittsanimation sichtbar ist (auf `display: block` gesetzt). Ohne dies würde die Austrittsanimation nicht sichtbar sein; tatsächlich würde das Popover einfach verschwinden. Auch hier ist `transition-behavior: allow-discrete` erforderlich, damit die Animation stattfindet.

Sie werden feststellen, dass wir auch einen Übergang auf dem [`::backdrop`](/de/docs/Web/CSS/::backdrop) eingeschlossen haben, der hinter dem Popover erscheint, wenn es öffnet, um eine angenehme Abdunkelungsanimation zu bieten. `[popover]:popover-open::backdrop` ist erforderlich, um das Backdrop zu wählen, wenn das Popover geöffnet ist.

#### Ergebnis

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers bei jedem Anzeigen von `display: none` zu `display: block` wechseln, geht das Popover jedes Mal, wenn der Eintrittsübergang stattfindet, von seinen `@starting-style`-Stilen zu seinen `[popover]:popover-open`-Stilen über. Wenn das Popover schließt, wechselt es von seinem `[popover]:popover-open`-Zustand zum Standardzustand `[popover]`.
>
> Es ist möglich, dass der Stilübergang beim Eintritt und Austritt in solchen Fällen unterschiedlich ist. Sehen Sie sich unser Beispiel [Demonstration of when starting styles are used](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) als Beweis dafür an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions)-Modul
- [`@starting-style`](/de/docs/Web/CSS/@starting-style)
- [`transition-behavior`](/de/docs/Web/CSS/transition-behavior)
- [Vier neue CSS-Funktionen für flüssige Ein- und Austrittsanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
