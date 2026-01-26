---
title: overlay
slug: Web/CSS/Reference/Properties/overlay
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

{{SeeCompatTable}}

Die **`overlay`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, ob ein Element, das in der {{Glossary("Top_layer", "Top-Schicht")}} erscheint (zum Beispiel ein angezeigtes [Popover](/de/docs/Web/API/Popover_API) oder modales {{htmlelement("dialog")}} Element), tatsächlich in der Top-Schicht gerendert wird. Diese Eigenschaft ist nur innerhalb einer Liste von {{cssxref("transition-property")}} Werten relevant und nur dann, wenn `allow-discrete` als {{cssxref("transition-behavior")}} gesetzt ist.

Es ist wichtig zu beachten, dass `overlay` _nur_ vom Browser gesetzt werden kann — Autor-Stile können den `overlay` Wert eines Elements nicht ändern. Sie können jedoch `overlay` der [Liste der Übergangseigenschaften](/de/docs/Web/CSS/Reference/Properties/transition-property) hinzufügen, die auf ein Element angewendet wird. Dies bewirkt, dass die Entfernung aus der Top-Schicht verzögert wird, sodass es animiert werden kann, anstatt sofort zu verschwinden.

> [!NOTE]
> Beim Übergang von `overlay` müssen Sie [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) auf den Übergang setzen, damit er animiert wird. `overlay`-Animationen unterscheiden sich von normalen [diskreten Animationen](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete) darin, dass der sichtbare (d.h. `auto`) Zustand während der gesamten Dauer des Übergangs immer angezeigt wird, unabhängig davon, ob es sich um den Start- oder Endzustand handelt.

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
  - : Das Element wird in der Top-Schicht gerendert, wenn es in die Top-Schicht versetzt wird.
- `none`
  - : Das Element wird nicht in der Top-Schicht gerendert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Übergang eines Popovers

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) animiert, während es von unsichtbar zu sichtbar und wieder zurück wechselt.

#### HTML

Das HTML enthält ein {{htmlelement("div")}} Element, das als Popover mit dem [popover](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attribut deklariert wurde, und ein {{htmlelement("button")}} Element, das als Anzeige-Steuerung des Popovers mit seinem [popovertarget](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) Attribut bestimmt wurde.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die `overlay` Eigenschaft ist nur in der Liste der übergangenen Eigenschaften vorhanden. Da `overlay` eine vom Benutzeragenten kontrollierte Eigenschaft ist, wird sie nicht in den Vor- oder Nachübergangszuständen deklariert.

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

Die beiden Eigenschaften, die wir animieren möchten, sind {{cssxref("opacity")}} und {{cssxref("transform")}}: wir möchten, dass das Popover ein- und ausblendet, während es in horizontaler Richtung wächst und schrumpft. Wir setzen einen Anfangszustand für diese Eigenschaften auf den standardmäßig versteckten Zustand des Popover-Elements (ausgewählt über `[popover]`) und einen Endzustand auf den offenen Zustand des Popovers (ausgewählt über die {{cssxref(":popover-open")}} Pseudo-Klasse). Wir setzen dann eine {{cssxref("transition")}} Eigenschaft, um zwischen den beiden zu animieren.

Da das animierte Element beim Anzeigen in die {{Glossary("Top_layer", "Top-Schicht")}} aufgenommen und beim Verbergen aus der Top-Schicht entfernt wird, wird `overlay` der Liste der übergangenen Elemente hinzugefügt. Dies stellt sicher, dass die Entfernung des Elements aus der Top-Schicht verzögert wird, bis die Animation beendet ist. Dies macht keinen großen Unterschied bei einfachen Animationen wie dieser, aber in komplexeren Fällen kann es dazu führen, dass das Element zu schnell aus dem Overlay entfernt wird, was bedeutet, dass die Animation nicht glatt oder effektiv ist. Beachten Sie, dass der Wert [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) auch in der Kurzform gesetzt wird, um diskrete Übergänge zu ermöglichen.

Die folgenden Schritte sind ebenfalls erforderlich, um die Animation in beide Richtungen zum Laufen zu bringen:

- Ein Anfangszustand für die Animation wird innerhalb der {{cssxref("@starting-style")}} At-Regel gesetzt. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden Übergänge nicht bei den ersten Stilaktualisierungen von Elementen oder wenn sich der `display` Typ von `none` in einen anderen Typ ändert, ausgelöst. `@starting-style` ermöglicht es Ihnen, diesen Standard auf eine spezifische, kontrollierte Art zu überschreiben. Ohne dies würde die Eintrittsanimation nicht stattfinden und das Popover würde einfach erscheinen.
- `display` wird auch der Liste der übergangenen Elemente hinzugefügt, sodass das animierte Element während der Ein- und Austrittsanimation sichtbar ist (auf `display: block` gesetzt). Ohne dies wäre die Austrittsanimation nicht sichtbar; in der Praxis würde das Popover einfach verschwinden. Auch hier ist `transition-behavior: allow-discrete` erforderlich, damit die Animation stattfindet.

Sie werden feststellen, dass wir auch einen Übergang auf dem {{cssxref("::backdrop")}} enthalten haben, der hinter dem Popover erscheint, wenn es geöffnet wird, um eine schöne Verdunkelungsanimation zu bieten. `[popover]:popover-open::backdrop` wird benötigt, um das Backdrop auszuwählen, wenn das Popover geöffnet ist.

#### Ergebnis

Der Code wird wie folgt dargestellt:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popover sich von `display: none` zu `display: block` ändern, jedes Mal wenn sie angezeigt werden, wechselt das Popover bei jedem Eintrittsübergang von seinen `@starting-style` Stilen zu seinen `[popover]:popover-open` Stilen. Wenn das Popover geschlossen wird, wechselt es von seinem `[popover]:popover-open` Zustand zum Standardzustand `[popover]`.
>
> Es ist möglich, dass sich der Stilübergang beim Eintritt und Austritt in solchen Fällen unterscheidet. Sehen Sie sich unser [Demonstration of when starting styles are used](/de/docs/Web/CSS/Reference/At-rules/@starting-style#demonstration_of_when_starting_styles_are_used) Beispiel für einen Nachweis dafür an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Transitions](/de/docs/Web/CSS/Guides/Transitions) Modul
- {{cssxref("@starting-style")}}
- {{cssxref("transition-behavior")}}
- [Vier neue CSS-Features für sanfte Eintritts- und Austrittsanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
