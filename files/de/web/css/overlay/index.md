---
title: overlay
slug: Web/CSS/overlay
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}{{SeeCompatTable}}

Die **`overlay`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob ein Element, das in der {{Glossary("Top_layer", "obersten Ebene")}} erscheint (zum Beispiel ein angezeigtes [Popover](/de/docs/Web/API/Popover_API) oder ein modales {{htmlelement("dialog")}} Element), tatsächlich in der obersten Ebene gerendert wird. Diese Eigenschaft ist nur innerhalb einer Liste von {{cssxref("transition-property")}} Werten von Bedeutung, und nur wenn `allow-discrete` als {{cssxref("transition-behavior")}} festgelegt ist.

Es ist wichtig zu beachten, dass `overlay` _nur_ vom Browser festgelegt werden kann – Autorenstile können den `overlay`-Wert eines Elements nicht ändern. Sie können jedoch `overlay` zur [Liste der Transitionseigenschaften](/de/docs/Web/CSS/transition-property) hinzufügen, die auf ein Element gesetzt sind. Dies bewirkt, dass seine Entfernung aus der obersten Ebene verzögert wird, sodass es animiert werden kann, anstatt sofort zu verschwinden.

> [!NOTE]
> Beim Übergang von `overlay` müssen Sie [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) auf die Transition setzen, damit sie animiert wird. `overlay`-Animationen unterscheiden sich von normalen [diskreten Animationen](/de/docs/Web/CSS/CSS_animated_properties#discrete) dadurch, dass der sichtbare (d.h. `auto`) Zustand während der gesamten Dauer der Transition angezeigt wird, unabhängig davon, ob er der Anfangs- oder Endzustand ist.

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

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) animiert, während es [Übergänge](/de/docs/Web/CSS/CSS_transitions) vom versteckten zum angezeigten Zustand durchläuft und wieder zurück.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover mittels des [popover](/de/docs/Web/HTML/Global_attributes/popover) Attributs deklariert ist, und ein {{htmlelement("button")}}-Element, das als Anzeigesteuerung des Popovers über sein [popovertarget](/de/docs/Web/HTML/Element/button#popovertarget) Attribut festgelegt ist.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die `overlay` Eigenschaft ist nur in der Liste der Transitionseigenschaften vorhanden. Da `overlay` eine vom User-Agent gesteuerte Eigenschaft ist, wird sie nicht in den Zuständen vor oder nach der Transition deklariert.

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

Die beiden Eigenschaften, die wir animieren möchten, sind [`opacity`](/de/docs/Web/CSS/opacity) und [`transform`](/de/docs/Web/CSS/transform): wir möchten, dass das Popover ein- und ausblendet, während es in horizontaler Richtung wächst und schrumpft. Wir setzen einen Anfangszustand für diese Eigenschaften im Standard-verborgenen Zustand des Popover-Elements (ausgewählt über `[popover]`), und einen Endzustand im offenen Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/:popover-open) Pseudoklasse). Dann setzen wir eine [`transition`](/de/docs/Web/CSS/transition) Eigenschaft, um zwischen den beiden zu animieren.

Da das animierte Element in die {{Glossary("Top_layer", "oberste Ebene")}} befördert wird, wenn es angezeigt wird, und aus der obersten Ebene entfernt wird, wenn es verborgen wird, wird `overlay` zur Liste der Transitionselemente hinzugefügt. Dies stellt sicher, dass die Entfernung des Elements aus der obersten Ebene verzögert wird, bis die Animation beendet ist. Dies macht bei einfachen Animationen wie dieser keinen großen Unterschied, aber in komplexeren Fällen kann es dazu führen, dass das Element zu schnell aus dem Overlay entfernt wird, was bedeutet, dass die Animation nicht glatt oder effektiv ist. Beachten Sie, dass der Wert [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) auch im Shorthand gesetzt ist, um diskrete Übergänge zu ermöglichen.

Die folgenden Schritte sind ebenfalls erforderlich, um die Animation in beide Richtungen zum Laufen zu bringen:

- Ein Anfangszustand für die Animation wird innerhalb der [`@starting-style`](/de/docs/Web/CSS/@starting-style) At-Regel gesetzt. Dies ist nötig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden Transitionen nicht bei der ersten Stiländerung von Elementen ausgelöst oder wenn der `display`-Typ von `none` auf einen anderen Typ geändert wird. `@starting-style` ermöglicht es Ihnen, diesen Standard auf eine spezifische kontrollierte Weise zu überschreiben. Ohne dies würde die Eintrittsanimation nicht stattfinden und das Popover würde einfach erscheinen.
- `display` wird ebenfalls zur Liste der Transitionselemente hinzugefügt, damit das animierte Element während sowohl der Ein- als auch der Austrittsanimation sichtbar ist (auf `display: block` gesetzt). Ohne dies wäre die Austrittsanimation nicht sichtbar; in der Tat würde das Popover einfach verschwinden. Wiederum ist `transition-behavior: allow-discrete` in diesem Fall erforderlich, damit die Animation stattfinden kann.

Sie werden feststellen, dass wir auch eine Transition auf dem [`::backdrop`](/de/docs/Web/CSS/::backdrop) eingefügt haben, das hinter dem Popover erscheint, wenn es geöffnet wird, um eine angenehme Verdunkelungsanimation bereitzustellen. `[popover]:popover-open::backdrop` wird benötigt, um den Hintergrund auszuwählen, wenn das Popover geöffnet ist.

#### Ergebnis

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers von `display: none` zu `display: block` wechseln, wenn sie angezeigt werden, wechselt das Popover bei jedem Eintrittsübergang von seines `@starting-style` Stiles zu seinen `[popover]:popover-open` Stilen. Wenn das Popover schließt, wechselt es von seinem `[popover]:popover-open` Zustand zu dem Standard `[popover]` Zustand.
>
> Es ist möglich, dass der Stilübergang beim Eintritt und Austritt in solchen Fällen unterschiedlich ist. Sehen Sie sich unser [Demonstration of when starting styles are used](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) Beispiel an, um einen Beweis dafür zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Transitions](/de/docs/Web/CSS/CSS_transitions) Modul
- [`@starting-style`](/de/docs/Web/CSS/@starting-style)
- [`transition-behavior`](/de/docs/Web/CSS/transition-behavior)
- [Vier neue CSS-Funktionen für sanfte Ein- und Austrittsanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
