---
title: overlay
slug: Web/CSS/Reference/Properties/overlay
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

Die **`overlay`**-[CSS](/de/docs/Web/CSS)-Eigenschaft gibt an, ob ein Element, das in der {{Glossary("Top_layer", "Top-Schicht")}} erscheint (zum Beispiel ein angezeigtes [Popover](/de/docs/Web/API/Popover_API) oder modales {{htmlelement("dialog")}}-Element), tatsächlich in der Top-Schicht gerendert wird. Diese Eigenschaft ist nur relevant innerhalb einer Liste von {{cssxref("transition-property")}}-Werten und nur, wenn `allow-discrete` als {{cssxref("transition-behavior")}} festgelegt ist.

Es ist wichtig zu beachten, dass `overlay` _nur_ vom Browser gesetzt werden kann — Autorenstile können den `overlay`-Wert eines Elements nicht ändern. Sie können jedoch `overlay` zur [Liste der Übergangseigenschaften](/de/docs/Web/CSS/Reference/Properties/transition-property) hinzufügen, die für ein Element festgelegt sind. Dies führt dazu, dass das Entfernen aus der Top-Schicht verzögert wird, sodass es animiert werden kann, anstatt sofort zu verschwinden.

> [!NOTE]
> Beim Übergang von `overlay` müssen Sie [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) auf den Übergang setzen, damit er animiert wird. `overlay`-Animationen unterscheiden sich von normalen [diskreten Animationen](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete), da der sichtbare (d.h. `auto`) Zustand immer für die gesamte Dauer des Übergangs angezeigt wird, unabhängig davon, ob es der Start- oder Endzustand ist.

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
  - : Das Element wird in der Top-Schicht gerendert, wenn es in die Top-Schicht befördert wird.
- `none`
  - : Das Element wird nicht in der Top-Schicht gerendert.

## Formaldefinition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Übergang eines Popovers

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) animiert, während es aus einem versteckten in einen angezeigten Zustand übergeht und wieder zurück.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover mit dem [popover](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut deklariert ist, und ein {{htmlelement("button")}}-Element, das als Steuerung für die Anzeige des Popovers über sein [popovertarget](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut festgelegt ist.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die `overlay`-Eigenschaft ist nur in der Liste der Übergangseigenschaften vorhanden. Da `overlay` eine benutzeragentengesteuerte Eigenschaft ist, wird sie nicht in den Vor-Übergangs- oder Nach-Übergangszuständen deklariert.

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

Die beiden Eigenschaften, die wir animieren möchten, sind [`opacity`](/de/docs/Web/CSS/Reference/Properties/opacity) und [`transform`](/de/docs/Web/CSS/Reference/Properties/transform): Wir möchten, dass das Popover ein- und ausblendet, während es in horizontaler Richtung wächst und schrumpft. Wir setzen einen Anfangszustand für diese Eigenschaften im Standard-versteckten Zustand des Popover-Elements (ausgewählt über `[popover]`), und einen Endzustand im offenen Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/Reference/Selectors/:popover-open) Pseudoklasse). Dann setzen wir eine [`transition`](/de/docs/Web/CSS/Reference/Properties/transition)-Eigenschaft, um zwischen den beiden zu animieren.

Da das animierte Element in die {{Glossary("Top_layer", "Top-Schicht")}} befördert wird, wenn es angezeigt wird, und aus der Top-Schicht entfernt wird, wenn es versteckt ist, wird `overlay` der Liste der Übergangselemente hinzugefügt. Das stellt sicher, dass das Entfernen des Elements aus der Top-Schicht verzögert wird, bis die Animation beendet ist. Dies macht bei einfachen Animationen wie dieser keinen großen Unterschied, aber in komplexeren Fällen kann es dazu führen, dass das Element zu schnell aus dem Overlay entfernt wird, was bedeutet, dass die Animation nicht flüssig oder effektiv ist. Beachten Sie, dass auch der Wert [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) im Kürzel gesetzt wird, um diskrete Übergänge zu ermöglichen.

Um die Animation in beide Richtungen zum Laufen zu bringen, sind die folgenden Schritte erforderlich:

- Ein Anfangszustand für die Animation wird innerhalb der [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style)-At-Regel gesetzt. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden Übergänge nicht bei den ersten Stilaktualisierungen von Elementen ausgelöst oder wenn sich der `display`-Typ von `none` auf einen anderen Typ ändert. `@starting-style` ermöglicht es Ihnen, diesen Standard auf eine spezifische kontrollierte Weise zu überschreiben. Ohne dies würde die Eintrittsanimation nicht stattfinden und das Popover würde einfach erscheinen.
- `display` wird ebenfalls der Liste der Übergangselemente hinzugefügt, damit das animierte Element während sowohl der Eintritts- als auch der Austrittsanimation sichtbar ist (auf `display: block` gesetzt). Ohne dies wäre die Austrittsanimation nicht sichtbar; tatsächlich würde das Popover einfach verschwinden. Auch hier ist `transition-behavior: allow-discrete` erforderlich, damit die Animation stattfindet.

Sie werden feststellen, dass wir auch einen Übergang auf dem [`::backdrop`](/de/docs/Web/CSS/Reference/Selectors/::backdrop) enthalten haben, der hinter dem Popover erscheint, wenn es sich öffnet, um eine schöne Verdunkelungsanimation zu liefern. `[popover]:popover-open::backdrop` ist erforderlich, um das Backdrop auszuwählen, wenn das Popover geöffnet ist.

#### Ergebnis

Der Code rendert sich wie folgt:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers jedes Mal von `display: none` auf `display: block` wechseln, wenn sie angezeigt werden, wechseln die Popovers jedes Mal bei Auftreten des Eintrittsübergangs von ihren `@starting-style`-Styles zu ihren `[popover]:popover-open`-Styles. Wenn das Popover schließt, wechselt es von seinem `[popover]:popover-open`-Zustand zum Standard-`[popover]`-Zustand.
>
> Es ist möglich, dass der Stilübergang beim Eintritt und Austritt in solchen Fällen unterschiedlich ist. Sehen Sie sich unser Beispiel [Demonstration of when starting styles are used](/de/docs/Web/CSS/Reference/At-rules/@starting-style#demonstration_of_when_starting_styles_are_used) an, um einen Beweis hierfür zu erhalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Übergänge](/de/docs/Web/CSS/Guides/Transitions) Modul
- [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style)
- [`transition-behavior`](/de/docs/Web/CSS/Reference/Properties/transition-behavior)
- [Vier neue CSS-Features für sanfte Ein- und Austrittsanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
