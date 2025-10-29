---
title: overlay
slug: Web/CSS/overlay
l10n:
  sourceCommit: 3e8ff5dea7426443add0c8f7cdc92c9589877f58
---

{{SeeCompatTable}}

Die **`overlay`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, ob ein Element, das in der {{Glossary("Top_layer", "obersten Schicht")}} erscheint (zum Beispiel ein angezeigtes [Popover](/de/docs/Web/API/Popover_API) oder modales {{htmlelement("dialog")}} Element), tatsächlich in der obersten Schicht gerendert wird. Diese Eigenschaft ist nur innerhalb einer Liste von {{cssxref("transition-property")}} Werten relevant und nur, wenn `allow-discrete` als {{cssxref("transition-behavior")}} gesetzt ist.

Es ist wichtig zu beachten, dass `overlay` _nur_ vom Browser gesetzt werden kann — Autorenstile können den `overlay`-Wert eines Elements nicht ändern. Sie können jedoch `overlay` zur [Liste der Übergangseigenschaften](/de/docs/Web/CSS/transition-property) hinzufügen, die auf ein Element angewendet werden. Dies bewirkt, dass die Entfernung von der obersten Schicht verzögert wird, damit es animiert werden kann, anstatt sofort zu verschwinden.

> [!NOTE]
> Beim Übergang von `overlay` müssen Sie [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) auf den Übergang setzen, damit er animiert wird. `overlay`-Animationen unterscheiden sich von normalen [diskreten Animationen](/de/docs/Web/CSS/CSS_animated_properties#discrete) darin, dass der sichtbare (d.h. `auto`) Zustand während der gesamten Dauer des Übergangs immer angezeigt wird, unabhängig davon, ob es sich um den Start- oder Endzustand handelt.

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
  - : Das Element wird in der obersten Schicht gerendert, wenn es in die oberste Schicht gefördert wird.
- `none`
  - : Das Element wird nicht in der obersten Schicht gerendert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Überblendung eines Popovers

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) animiert, während es von verborgen zu sichtbar übergeht und wieder zurück.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover mit dem [popover](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attribut deklariert ist, und ein {{htmlelement("button")}}-Element, das als Anzeige-Steuerung des Popovers durch sein [popovertarget](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) Attribut ausgewiesen ist.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die `overlay`-Eigenschaft ist nur in der Liste der übergangenen Eigenschaften vorhanden. Da `overlay` eine vom Benutzer-Agenten gesteuerte Eigenschaft ist, wird sie nicht in den Vor- oder Nach-Übergangszuständen deklariert.

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

Die beiden Eigenschaften, die wir animieren wollen, sind [`opacity`](/de/docs/Web/CSS/opacity) und [`transform`](/de/docs/Web/CSS/transform): wir möchten, dass das Popover ein- und ausgeblendet wird, während es in horizontaler Richtung wächst und schrumpft. Wir setzen einen Anfangszustand für diese Eigenschaften im Standard-verborgenen Zustand des Popover-Elements (ausgewählt über `[popover]`) und einen Endzustand im geöffneten Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/:popover-open) Pseudoklasse). Wir setzen dann eine [`transition`](/de/docs/Web/CSS/transition) Eigenschaft, um zwischen den beiden zu animieren.

Da das animierte Element beim Anzeigen in die {{Glossary("Top_layer", "oberste Schicht")}} gefördert und beim Verbergen aus der obersten Schicht entfernt wird, wird `overlay` zur Liste der übergangenen Elemente hinzugefügt. Dies stellt sicher, dass die Entfernung des Elements aus der obersten Schicht bis zum Ende der Animation aufgeschoben wird. Dies macht keinen großen Unterschied bei grundlegenden Animationen wie dieser, aber in komplexeren Fällen kann das Entfernen des Elements aus der Überlagerung zu schnell geschehen, wenn dies nicht getan wird, wodurch die Animation nicht glatt oder effektiv ist. Beachten Sie, dass auch der Wert [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) in der Kurzform gesetzt wird, um diskrete Übergänge zu ermöglichen.

Die folgenden Schritte sind ebenfalls erforderlich, um die Animation in beide Richtungen funktionieren zu lassen:

- Ein Anfangszustand für die Animation wird innerhalb der [`@starting-style`](/de/docs/Web/CSS/@starting-style) at-rule gesetzt. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden Übergänge bei den ersten Stilaktualisierungen von Elementen oder beim Wechsel des `display`-Typs von `none` zu einem anderen Typ nicht ausgelöst. `@starting-style` ermöglicht es Ihnen, diesen Standard auf eine spezifische kontrollierte Weise zu überschreiben. Ohne dies würde die Eintrittsanimation nicht erfolgen und das Popover würde einfach erscheinen.
- `display` wird auch zur Liste der übergangenen Elemente hinzugefügt, sodass das animierte Element während sowohl der Eintritts- als auch der Austrittsanimation sichtbar ist (auf `display: block` gesetzt). Ohne dies wäre die Austrittsanimation nicht sichtbar; effektiv würde das Popover einfach verschwinden. Auch hier ist `transition-behavior: allow-discrete` erforderlich, damit die Animation erfolgt.

Es wird bemerkt, dass wir auch einen Übergang auf dem [`::backdrop`](/de/docs/Web/CSS/::backdrop) enthalten haben, der hinter dem Popover erscheint, wenn es sich öffnet, um eine schöne Abdunklungsanimation zu bieten. `[popover]:popover-open::backdrop` ist notwendig, um das Backdrop auszuwählen, wenn das Popover geöffnet ist.

#### Ergebnis

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers jedes Mal von `display: none` zu `display: block` wechseln, wenn sie angezeigt werden, wechselt das Popover von seinen `@starting-style` Stilen zu seinen `[popover]:popover-open` Stilen jedes Mal, wenn der Einstiegstransition auftritt. Wenn das Popover geschlossen wird, wechselt es von seinem `[popover]:popover-open` Zustand zum Standard-`[popover]` Zustand.
>
> Es ist möglich, dass der Stilübergang beim Ein- und Austritt unterschiedlich ist in solchen Fällen. Siehe unser [Beispiel für eine Demonstration, wann Startstile verwendet werden](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) für einen Beweis dafür.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Transitions](/de/docs/Web/CSS/CSS_transitions) Modul
- [`@starting-style`](/de/docs/Web/CSS/@starting-style)
- [`transition-behavior`](/de/docs/Web/CSS/transition-behavior)
- [Vier neue CSS-Funktionen für sanfte Ein- und Austrittsanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
