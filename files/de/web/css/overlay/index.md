---
title: overlay
slug: Web/CSS/overlay
l10n:
  sourceCommit: a3eec14af0580dad6eae65980686cee6cafc2c68
---

{{SeeCompatTable}}

Die **`overlay`**-[CSS](/de/docs/Web/CSS)-Eigenschaft gibt an, ob ein Element, das in der {{Glossary("Top_layer", "obersten Ebene")}} erscheint (zum Beispiel ein angezeigtes [Popover](/de/docs/Web/API/Popover_API) oder modales {{htmlelement("dialog")}}-Element), tatsächlich in der obersten Ebene gerendert wird. Diese Eigenschaft ist nur relevant innerhalb einer Liste von {{cssxref("transition-property")}}-Werten und nur, wenn `allow-discrete` als {{cssxref("transition-behavior")}} gesetzt ist.

Es ist wichtig zu beachten, dass `overlay` _nur_ vom Browser gesetzt werden kann — Autorenstile können den `overlay`-Wert eines Elements nicht ändern. Sie können jedoch `overlay` zur [Liste der Übergangseigenschaften](/de/docs/Web/CSS/transition-property) hinzufügen, die auf ein Element gesetzt sind. Dies bewirkt, dass seine Entfernung aus der obersten Ebene verzögert wird, sodass sie anstelle eines sofortigen Verschwindens animiert werden kann.

> [!NOTE]
> Beim Übergang von `overlay` müssen Sie [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) auf den Übergang setzen, damit er animiert wird. `overlay`-Animationen unterscheiden sich von normalen [diskreten Animationen](/de/docs/Web/CSS/CSS_animated_properties#discrete) darin, dass der sichtbare (d.h. `auto`) Zustand während der gesamten Dauer des Übergangs immer angezeigt wird, unabhängig davon, ob es sich um den Anfangs- oder Endzustand handelt.

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

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) animiert, während es vom versteckten zum angezeigten Zustand und zurück übergeht.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover mit dem [popover](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut deklariert ist, und ein {{htmlelement("button")}}-Element, das als Anzeige-Steuerung des Popovers mit seinem [popovertarget](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut bezeichnet ist.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die `overlay`-Eigenschaft ist nur in der Liste der zu übergehenden Eigenschaften vorhanden. Da `overlay` eine vom Benutzeragent kontrollierte Eigenschaft ist, wird sie nicht in den Vor- und Nach-Übergangszuständen angegeben.

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

Die beiden Eigenschaften, die wir animieren möchten, sind [`opacity`](/de/docs/Web/CSS/opacity) und [`transform`](/de/docs/Web/CSS/transform)): wir möchten, dass das Popover ein- und ausblendet, während es in horizontaler Richtung wächst und schrumpft. Wir setzen einen Anfangszustand für diese Eigenschaften im standardmäßig versteckten Zustand des Popover-Elements (ausgewählt über `[popover]`) und einen Endzustand im geöffneten Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/:popover-open)-Pseudoklasse). Wir setzen dann eine [`transition`](/de/docs/Web/CSS/transition)-Eigenschaft, um zwischen den beiden zu animieren.

Da das animierte Element beim Anzeigen in die {{Glossary("Top_layer", "oberste Ebene")}} befördert und beim Verbergen aus der obersten Ebene entfernt wird, wird `overlay` der Liste der zu übergehenden Elemente hinzugefügt. Dies stellt sicher, dass die Entfernung des Elements aus der obersten Ebene aufgeschoben wird, bis die Animation beendet ist. Dies macht keinen großen Unterschied bei grundlegenden Animationen wie dieser, aber in komplexeren Fällen kann das Fehlen dieser Einstellung dazu führen, dass das Element zu schnell aus dem Overlay entfernt wird, was bedeutet, dass die Animation nicht flüssig oder effektiv ist. Beachten Sie, dass auch der Wert [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) im Shorthand gesetzt ist, um diskrete Übergänge zu ermöglichen.

Die folgenden Schritte sind ebenfalls erforderlich, um die Animation in beide Richtungen funktionsfähig zu machen:

- Ein Anfangszustand für die Animation wird innerhalb der [`@starting-style`](/de/docs/Web/CSS/@starting-style)-At-Regel festgelegt. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden Übergänge nicht bei den ersten Stilaktualisierungen von Elementen ausgelöst oder wenn sich der `display`-Typ von `none` zu einem anderen Typ ändert. `@starting-style` ermöglicht es Ihnen, diese Standardeinstellung auf spezifische Weise zu überschreiben. Ohne dies würde die Eintrittsanimation nicht auftreten und das Popover würde einfach erscheinen.
- `display` wird auch zur Liste der zu übergehenden Elemente hinzugefügt, sodass das animierte Element während sowohl der Eingangs- als auch der Ausgangsanimation sichtbar ist (auf `display: block` gesetzt). Ohne dies wäre die Ausgangsanimation nicht sichtbar; tatsächlich würde das Popover einfach verschwinden. Auch hier ist `transition-behavior: allow-discrete` notwendig, damit die Animation stattfindet.

Sie werden feststellen, dass wir auch einen Übergang auf dem [`::backdrop`](/de/docs/Web/CSS/::backdrop) eingeschlossen haben, der hinter dem Popover erscheint, wenn es geöffnet wird, um eine angenehme Verdunkelungsanimation zu bieten. `[popover]:popover-open::backdrop` ist erforderlich, um das Backdrop auszuwählen, wenn das Popover geöffnet ist.

#### Ergebnis

Der Code wird wie folgt dargestellt:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers jedes Mal von `display: none` zu `display: block` wechseln, wenn sie angezeigt werden, wechselt das Popover bei jedem Auftreten des Eintrittsübergangs von seinen `@starting-style`-Stilen zu seinen `[popover]:popover-open`-Stilen. Wenn das Popover schließt, wechselt es von seinem `[popover]:popover-open`-Zustand zum Standardzustand `[popover]`.
>
> Es ist möglich, dass sich der Stilübergang beim Eintritt und Austritt in solchen Fällen unterscheidet. Siehe unser [Demonstration of when starting styles are used](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used)-Beispiel für einen Beweis dafür.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS transitions](/de/docs/Web/CSS/CSS_transitions) Modul
- [`@starting-style`](/de/docs/Web/CSS/@starting-style)
- [`transition-behavior`](/de/docs/Web/CSS/transition-behavior)
- [Vier neue CSS-Funktionen für sanfte Ein- und Ausstieganimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
