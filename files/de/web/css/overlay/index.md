---
title: overlay
slug: Web/CSS/overlay
l10n:
  sourceCommit: 4ec412012be0b083ebcae4a56b425f49901143f2
---

{{SeeCompatTable}}

Die **`overlay`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob ein Element, das in der {{Glossary("Top_layer", "obersten Ebene")}} erscheint (zum Beispiel ein angezeigtes [Popover](/de/docs/Web/API/Popover_API) oder modales {{htmlelement("dialog")}} Element), tatsächlich in der obersten Ebene gerendert wird. Diese Eigenschaft ist nur innerhalb einer Liste von {{cssxref("transition-property")}} Werten relevant, und nur wenn `allow-discrete` als {{cssxref("transition-behavior")}} festgelegt ist.

Es ist wichtig zu beachten, dass `overlay` _nur_ vom Browser gesetzt werden kann — Autorenstile können den `overlay` Wert eines Elements nicht ändern. Sie können jedoch `overlay` zur [Liste der Übergangseigenschaften](/de/docs/Web/CSS/transition-property) hinzufügen, die auf ein Element angewendet werden. Dies bewirkt, dass seine Entfernung aus der obersten Ebene verzögert wird, sodass sie animiert werden kann, anstatt sofort zu verschwinden.

> [!NOTE]
> Beim Übergang von `overlay` müssen Sie [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) für den Übergang setzen, damit es animiert wird. `overlay`-Animationen unterscheiden sich von normalen [diskreten Animationen](/de/docs/Web/CSS/CSS_animated_properties#discrete) darin, dass der sichtbare (d.h. `auto`) Zustand während der gesamten Dauer des Übergangs immer gezeigt wird, unabhängig davon, ob es sich um den Anfangs- oder Endzustand handelt.

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
  - : Das Element wird in der obersten Ebene gerendert, wenn es in die oberste Ebene befördert wird.
- `none`
  - : Das Element wird nicht in der obersten Ebene gerendert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Übergang eines Popovers

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) animiert, während es von verborgen zu sichtbar übergeht und wieder zurück.

#### HTML

Das HTML enthält ein {{htmlelement("div")}} Element, das als Popover mittels des [popover](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attributs deklariert ist, und ein {{htmlelement("button")}} Element, das als Anzeige-Steuerung des Popovers über sein [popovertarget](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) Attribut festgelegt ist.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die `overlay` Eigenschaft ist nur in der Liste der animierten Eigenschaften vorhanden. Da `overlay` eine vom Benutzer-Agenten kontrollierte Eigenschaft ist, wird sie nicht in den Vor-Übergangs- oder Nach-Übergangszuständen deklariert.

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

Die beiden Eigenschaften, die wir animieren möchten, sind [`opacity`](/de/docs/Web/CSS/opacity) und [`transform`](/de/docs/Web/CSS/transform)): Wir möchten, dass das Popover aus- und einblendet, während es in horizontaler Richtung wächst und schrumpft. Wir setzen einen Anfangszustand für diese Eigenschaften auf den standardmäßig verborgenen Zustand des Popover-Elements (ausgewählt über `[popover]`) und einen Endzustand auf den offenen Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/:popover-open) Pseudoklasse). Wir setzen dann eine [`transition`](/de/docs/Web/CSS/transition) Eigenschaft, um zwischen den beiden zu animieren.

Da das animierte Element in die {{Glossary("Top_layer", "oberste Ebene")}} gefördert wird, wenn es angezeigt wird, und aus der obersten Ebene entfernt wird, wenn es verborgen ist, wird `overlay` zur Liste der animierten Elemente hinzugefügt. Dies stellt sicher, dass die Entfernung des Elements aus der obersten Ebene verschoben wird, bis die Animation abgeschlossen ist. Das macht bei grundlegenden Animationen wie dieser keinen großen Unterschied, aber in komplizierteren Fällen kann dies dazu führen, dass das Element zu schnell aus dem Overlay entfernt wird, was bedeutet, dass die Animation nicht flüssig oder effektiv ist. Beachten Sie, dass der Wert [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) ebenfalls im Shorthand gesetzt ist, um diskrete Übergänge zu ermöglichen.

Die folgenden Schritte sind ebenfalls erforderlich, um die Animation in beide Richtungen funktionsfähig zu machen:

- Ein Anfangszustand für die Animation ist innerhalb der [`@starting-style`](/de/docs/Web/CSS/@starting-style) at-rule festgelegt. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden Übergänge bei den ersten Stilaktualisierungen eines Elements oder wenn sich der `display`-Typ von `none` zu einem anderen Typ ändert, nicht ausgelöst. `@starting-style` ermöglicht es Ihnen, diesen Standard auf eine spezifische kontrollierte Weise zu überschreiben. Ohne dies würde die Eintrittsanimation nicht auftreten und das Popover würde einfach erscheinen.
- `display` wird auch zur Liste der animierten Elemente hinzugefügt, sodass das animierte Element während sowohl der Ein- als auch der Austrittsanimation sichtbar ist (auf `display: block` gesetzt). Ohne dies wäre die Austrittsanimation nicht sichtbar; tatsächlich würde das Popover einfach verschwinden. Auch hier ist `transition-behavior: allow-discrete` erforderlich, damit die Animation stattfinden kann.

Sie werden feststellen, dass wir auch einen Übergang auf dem [`::backdrop`](/de/docs/Web/CSS/::backdrop) hinzugefügt haben, der hinter dem Popover erscheint, wenn es geöffnet wird, um eine nette Verdunkelungsanimation zu bieten. `[popover]:popover-open::backdrop` ist erforderlich, um den Backdrop zu wählen, wenn das Popover geöffnet ist.

#### Ergebnis

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers jedes Mal von `display: none` zu `display: block` wechseln, wenn sie angezeigt werden, wechseln die Popovers von ihren `@starting-style` Stilen zu ihren `[popover]:popover-open` Stilen jedes Mal, wenn der Eintrittsübergang erfolgt. Wenn das Popover schließt, wechselt es von seinem `[popover]:popover-open` Zustand zu dem Standard `[popover]` Zustand.
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
- [Vier neue CSS-Funktionen für sanfte Ein- und Austrittsanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
