---
title: overlay
slug: Web/CSS/overlay
l10n:
  sourceCommit: b17ca921175c0a92d21c6c4effbc7fa3dc348a8e
---

{{CSSRef}}{{SeeCompatTable}}

Die **`overlay`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob ein Element, das in der {{Glossary("Top_layer", "oberen Schicht")}} erscheint (zum Beispiel ein angezeigtes [Popover](/de/docs/Web/API/Popover_API) oder modales {{htmlelement("dialog")}} Element), tatsächlich in der oberen Schicht gerendert wird. Diese Eigenschaft ist nur innerhalb einer Liste von {{cssxref("transition-property")}} Werten relevant, und nur wenn `allow-discrete` als {{cssxref("transition-behavior")}} gesetzt ist.

Es ist wichtig zu beachten, dass `overlay` _nur_ vom Browser festgelegt werden kann — Autorenstile können den `overlay` Wert eines Elements nicht ändern. Sie können jedoch `overlay` zur [Liste der Übergangseigenschaften](/de/docs/Web/CSS/transition-property) hinzufügen, die auf ein Element gesetzt sind. Dies bewirkt, dass das Entfernen aus der oberen Schicht verzögert wird, sodass es animiert werden kann, anstatt sofort zu verschwinden.

> [!NOTE]
> Beim Übergang von `overlay` müssen Sie [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) auf dem Übergang setzen, damit es animiert wird. `overlay` Animationen unterscheiden sich von normalen [diskreten Animationen](/de/docs/Web/CSS/CSS_animated_properties#discrete) darin, dass der sichtbare (d.h. `auto`) Zustand während der gesamten Dauer des Übergangs angezeigt wird, unabhängig davon, ob es sich um den Start- oder Endzustand handelt.

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

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) animiert, während es vom versteckten zum angezeigten Zustand und wieder zurück wechselt.

#### HTML

Das HTML enthält ein {{htmlelement("div")}} Element, das als Popover mit dem [popover](/de/docs/Web/HTML/Global_attributes/popover) Attribut deklariert ist, und ein {{htmlelement("button")}} Element, das als Steuerung für die Anzeige des Popovers mit seinem [popovertarget](/de/docs/Web/HTML/Element/button#popovertarget) Attribut markiert ist.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die `overlay` Eigenschaft ist nur in der Liste der Übergangseigenschaften vorhanden. Da `overlay` eine vom User-Agent kontrollierte Eigenschaft ist, wird sie nicht im Vor- oder Nach-Übergangszustand deklariert.

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

Die zwei Eigenschaften, die wir animieren möchten, sind [`opacity`](/de/docs/Web/CSS/opacity) und [`transform`](/de/docs/Web/CSS/transform) ): wir möchten, dass das Popover ein- und ausblendet, während es in horizontaler Richtung wächst und schrumpft. Wir setzen einen Startzustand für diese Eigenschaften auf den standardmäßig verborgenen Zustand des Popover-Elements (ausgewählt über `[popover]`) und einen Endzustand auf den offenen Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/:popover-open) Pseudoklasse). Wir setzen dann eine [`transition`](/de/docs/Web/CSS/transition) Eigenschaft, um zwischen diesen beiden zu animieren.

Da das animierte Element beim Anzeigen in die {{Glossary("Top_layer", "obere Schicht")}} befördert und beim Verbergen aus der oberen Schicht entfernt wird, wird `overlay` der Liste der übergangenen Elemente hinzugefügt. Dies stellt sicher, dass das Entfernen des Elements aus der oberen Schicht so lange hinausgezögert wird, bis die Animation beendet ist. Dies macht keinen großen Unterschied für grundlegende Animationen wie diese, aber in komplexeren Fällen kann das Unterlassen dazu führen, dass das Element zu schnell aus dem Overlay entfernt wird, sodass die Animation nicht flüssig oder effektiv ist. Beachten Sie, dass der Wert [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) auch in der Kurzschreibweisensyntax gesetzt ist, um diskrete Übergänge zu ermöglichen.

Die folgenden Schritte sind ebenfalls erforderlich, um die Animation in beide Richtungen zu ermöglichen:

- Ein Startzustand für die Animation wird innerhalb der [`@starting-style`](/de/docs/Web/CSS/@starting-style) At-Regel festgelegt. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden Übergänge bei den ersten Stilaktualisierungen von Elementen nicht ausgelöst oder wenn der `display` Typ von `none` zu einem anderen Typ wechselt. `@starting-style` ermöglicht es Ihnen, diesen Standard in einer spezifischen kontrollierten Weise zu überschreiben. Ohne dies würde die Eintrittsanimation nicht auftreten, und das Popover würde einfach erscheinen.
- `display` wird ebenfalls der Liste der übergangenen Elemente hinzugefügt, sodass das animierte Element während sowohl der Ein- als auch der Austrittsanimation sichtbar ist (auf `display: block` gesetzt). Ohne dies wäre die Austrittsanimation nicht sichtbar; in der Tat würde das Popover einfach verschwinden. Auch hier ist für das Auftreten der Animation `transition-behavior: allow-discrete` erforderlich.

Sie werden bemerken, dass wir auch einen Übergang auf dem [`::backdrop`](/de/docs/Web/CSS/::backdrop) eingeschlossen haben, der erscheint, wenn das Popover geöffnet wird, um eine schöne Verdunkelungsanimation zu bieten. `[popover]:popover-open::backdrop` ist erforderlich, um das Backdrop auszuwählen, wenn das Popover geöffnet ist.

#### Resultat

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers jedes Mal von `display: none` zu `display: block` wechseln, wenn sie angezeigt werden, wechselt das Popover jedes Mal, wenn der Eintrittsübergang auftritt, von seinen `@starting-style` Stilen zu seinen `[popover]:popover-open` Stilen. Wenn das Popover schließt, wechselt es von seinem `[popover]:popover-open` Zustand zum Standardzustand `[popover]`.
>
> Es ist möglich, dass der Stilübergang beim Eintritt und Austritt in solchen Fällen unterschiedlich ist. Sehen Sie sich unser [Demonstration of when starting styles are used](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) Beispiel an, um einen Beweis dafür zu erhalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) Modul
- [`@starting-style`](/de/docs/Web/CSS/@starting-style)
- [`transition-behavior`](/de/docs/Web/CSS/transition-behavior)
- [Vier neue CSS-Funktionen für flüssige Ein- und Austrittsanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
