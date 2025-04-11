---
title: overlay
slug: Web/CSS/overlay
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}{{SeeCompatTable}}

Die **`overlay`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, ob ein Element, das in der {{Glossary("Top_layer", "obersten Schicht")}} erscheint (zum Beispiel ein angezeigtes [Popover](/de/docs/Web/API/Popover_API) oder modales {{htmlelement("dialog")}} Element), tatsächlich in der obersten Schicht gerendert wird. Diese Eigenschaft ist nur innerhalb einer Liste von {{cssxref("transition-property")}} Werten relevant, und nur wenn `allow-discrete` als {{cssxref("transition-behavior")}} festgelegt ist.

Es ist wichtig zu beachten, dass `overlay` _nur_ vom Browser gesetzt werden kann — Autorenstile können den `overlay`-Wert eines Elements nicht ändern. Sie können jedoch `overlay` zur [Liste der Übergangseigenschaften](/de/docs/Web/CSS/transition-property) eines Elements hinzufügen. Dies verzögert die Entfernung aus der obersten Schicht, sodass es animiert werden kann, anstatt sofort zu verschwinden.

> [!NOTE]
> Beim Übergang von `overlay` müssen Sie [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) auf dem Übergang setzen, damit es animiert wird. `overlay`-Animationen unterscheiden sich von normalen [diskreten Animationen](/de/docs/Web/CSS/CSS_animated_properties#discrete), da der sichtbare (d.h. `auto`) Zustand während der gesamten Dauer des Übergangs immer angezeigt wird, unabhängig davon, ob es der Anfangs- oder Endzustand ist.

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
  - : Das Element wird in der obersten Schicht gerendert, wenn es in die oberste Schicht gehoben wird.
- `none`
  - : Das Element wird nicht in der obersten Schicht gerendert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Transition eines Popovers

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) animiert, während es von verborgen zu angezeigt wechselt und umgekehrt.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover mit dem [popover](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attribut deklariert ist, und ein {{htmlelement("button")}}-Element, das als Anzeige-Steuerelement des Popovers mit seinem [popovertarget](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) Attribut angegeben ist.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die `overlay`-Eigenschaft ist nur in der Liste der übergegangenen Eigenschaften vorhanden. Da `overlay` eine von der Benutzeragentur kontrollierte Eigenschaft ist, wird sie nicht in den Pre-Transition- oder Post-Transition-Zuständen deklariert.

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

Die beiden Eigenschaften, die wir animieren möchten, sind [`opacity`](/de/docs/Web/CSS/opacity) und [`transform`](/de/docs/Web/CSS/transform)): wir möchten, dass das Popover ein- und ausgeblendet wird, während es sich in der horizontalen Richtung vergrößert und verkleinert. Wir setzen einen Ausgangszustand für diese Eigenschaften auf den standardmäßig verborgenen Zustand des Popover-Elements (ausgewählt über `[popover]`) und einen Endzustand auf den offenen Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/:popover-open) Pseudo-Klasse). Wir setzen dann eine [`transition`](/de/docs/Web/CSS/transition) Eigenschaft, um zwischen den beiden zu animieren.

Weil das animierte Element in die {{Glossary("Top_layer", "oberste Schicht")}} gehoben wird, wenn es angezeigt wird, und aus der obersten Schicht entfernt wird, wenn es verborgen ist, wird `overlay` zur Liste der übergegangenen Elemente hinzugefügt. Dies stellt sicher, dass die Entfernung des Elements aus der obersten Schicht aufgeschoben wird, bis die Animation beendet ist. Dies macht keinen großen Unterschied bei einfachen Animationen wie dieser, aber in komplexeren Fällen kann das Ergebnis sein, dass das Element aus der Überlagerung zu schnell entfernt wird, was bedeutet, dass die Animation nicht glatt oder effektiv ist. Beachten Sie, dass der Wert [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) auch im Shorthand gesetzt wird, um diskrete Übergänge zu ermöglichen.

Die folgenden Schritte sind ebenfalls erforderlich, um die Animation in beide Richtungen zum Laufen zu bringen:

- Ein Startzustand für die Animation wird innerhalb der [`@starting-style`](/de/docs/Web/CSS/@starting-style) At-Regel gesetzt. Das ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden Übergänge nicht bei den ersten Stil-Updates von Elementen ausgelöst oder wenn sich der `display`-Typ von `none` zu einem anderen Typ ändert. `@starting-style` erlaubt es Ihnen, diesen Standard auf eine bestimmte kontrollierte Weise zu überschreiben. Ohne dies würde die Eintrittsanimation nicht stattfinden und das Popover würde einfach erscheinen.
- `display` wird ebenfalls zur Liste der übergegangenen Elemente hinzugefügt, sodass das animierte Element während sowohl der Eintritts- als auch der Austrittsanimation sichtbar ist (auf `display: block` gesetzt). Ohne dies wäre die Austrittsanimation nicht sichtbar; in der Tat würde das Popover einfach verschwinden. Auch hier ist `transition-behavior: allow-discrete` erforderlich, damit die Animation stattfindet.

Sie werden bemerken, dass wir auch einen Übergang auf dem [`::backdrop`](/de/docs/Web/CSS/::backdrop) eingeschlossen haben, der hinter dem Popover erscheint, wenn es sich öffnet, um eine schöne Verdunkelungsanimation zu bieten. `[popover]:popover-open::backdrop` wird benötigt, um das Backdrop auszuwählen, wenn das Popover geöffnet ist.

#### Ergebnis

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popover jedes Mal von `display: none` zu `display: block` wechseln, wenn sie angezeigt werden, wechselt das Popover bei jedem Eintrittsübergang von seinen `@starting-style`-Stilen zu seinen `[popover]:popover-open`-Stilen. Wenn das Popover schließt, wechselt es von seinem `[popover]:popover-open` Zustand zum Standard `[popover]` Zustand.
>
> Es ist möglich, dass sich der Stilübergang bei Eintritt und Austritt in solchen Fällen unterscheidet. Sehen Sie unser [Demonstration of when starting styles are used](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) Beispiel für einen Nachweis dessen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) Modul
- [`@starting-style`](/de/docs/Web/CSS/@starting-style)
- [`transition-behavior`](/de/docs/Web/CSS/transition-behavior)
- [Vier neue CSS-Funktionen für sanfte Ein- und Austrittsanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
