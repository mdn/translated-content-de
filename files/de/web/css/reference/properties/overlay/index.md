---
title: overlay
slug: Web/CSS/Reference/Properties/overlay
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{SeeCompatTable}}

Die **`overlay`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, ob ein Element, das in der {{Glossary("Top_layer", "oberen Ebene")}} erscheint (zum Beispiel ein angezeigtes [Popover](/de/docs/Web/API/Popover_API) oder modales {{htmlelement("dialog")}} Element), tatsächlich in der obersten Ebene gerendert wird. Diese Eigenschaft ist nur in einer Liste von {{cssxref("transition-property")}}-Werten relevant und nur, wenn `allow-discrete` als {{cssxref("transition-behavior")}} festgelegt ist.

Es ist wichtig zu beachten, dass `overlay` _nur_ vom Browser gesetzt werden kann — Autorenstile können den `overlay`-Wert eines Elements nicht ändern. Sie können jedoch `overlay` zur [Liste der Transition-Eigenschaften](/de/docs/Web/CSS/Reference/Properties/transition-property), die auf ein Element angewendet werden, hinzufügen. Dies führt dazu, dass das Entfernen aus der obersten Ebene verzögert wird, sodass es animiert werden kann, anstatt sofort zu verschwinden.

> [!NOTE]
> Wenn Sie `overlay` übergehen, müssen Sie [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) auf der Transition setzen, damit es animiert wird. `overlay`-Animationen unterscheiden sich von normalen [diskreten Animationen](/de/docs/Web/CSS/CSS_animated_properties#discrete) dadurch, dass der sichtbare (d.h. `auto`) Zustand während der gesamten Dauer der Transition gezeigt wird, unabhängig davon, ob es der Start- oder Endzustand ist.

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
  - : Das Element wird in der obersten Ebene gerendert, wenn es in die oberste Ebene befördert wird.
- `none`
  - : Das Element wird nicht in der obersten Ebene gerendert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Übergang eines Popovers

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) animiert, während es von verborgen zu angezeigt übergeht und wieder zurück.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover mit dem [popover](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut deklariert ist, und ein {{htmlelement("button")}}-Element, das als Anzeige-Steuerung des Popovers mittels seines [popovertarget](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attributs ausgewiesen ist.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die `overlay`-Eigenschaft ist nur in der Liste der übergangenen Eigenschaften enthalten. Da `overlay` eine vom Benutzer-Agent kontrollierte Eigenschaft ist, wird sie nicht in den Vor- oder Nach-Übergangszuständen deklariert.

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

Die zwei Eigenschaften, die wir animieren möchten, sind [`opacity`](/de/docs/Web/CSS/Reference/Properties/opacity) und [`transform`](/de/docs/Web/CSS/Reference/Properties/transform): Wir möchten, dass das Popover ein- und ausgeblendet wird, während es in horizontaler Richtung wächst und schrumpft. Wir setzen einen Anfangszustand für diese Eigenschaften im standardmäßig verborgenen Zustand des Popover-Elements (ausgewählt über `[popover]`) und einen Endzustand im offenen Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/Reference/Selectors/:popover-open)-Pseudo-Klasse). Dann setzen wir eine [`transition`](/de/docs/Web/CSS/Reference/Properties/transition) Eigenschaft, um zwischen den beiden zu animieren.

Da das animierte Element in die {{Glossary("Top_layer", "obere Ebene")}} befördert wird, wenn es angezeigt und aus der oberen Ebene entfernt wird, wenn es verborgen ist, wird `overlay` der Liste der übergangenen Elemente hinzugefügt. Dadurch wird sichergestellt, dass das Entfernen des Elements aus der obersten Ebene verzögert wird, bis die Animation beendet ist. Dies macht keinen großen Unterschied bei einfachen Animationen wie dieser, aber in komplexeren Fällen kann das Nicht-Tun dazu führen, dass das Element zu schnell aus dem Overlay entfernt wird, was bedeutet, dass die Animation nicht glatt oder effektiv ist. Beachten Sie, dass der Wert [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) auch in der Kurzschrift festgelegt ist, um diskrete Übergänge zu ermöglichen.

Die folgenden Schritte sind ebenfalls erforderlich, um die Animation in beide Richtungen zum Laufen zu bringen:

- Ein Anfangszustand für die Animation wird innerhalb der [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style) At-Regel gesetzt. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden Übergänge nicht bei den ersten Stilaktualisierungen von Elementen oder wenn sich der `display`-Typ von `none` zu einem anderen Typ ändert, ausgelöst. `@starting-style` ermöglicht es Ihnen, dieses Standardverhalten in einer bestimmten, kontrollierten Weise zu überschreiben. Ohne dies würde die Eingangsanimation nicht stattfinden und das Popover würde einfach erscheinen.
- `display` wird auch der Liste der übergangenen Elemente hinzugefügt, sodass das animierte Element während sowohl der Eingangs- als auch der Ausgangsanimation sichtbar ist (auf `display: block` gesetzt). Ohne dies wäre die Ausgangsanimation nicht sichtbar; in der Tat würde das Popover einfach verschwinden. Wiederum ist `transition-behavior: allow-discrete` in diesem Fall erforderlich, damit die Animation erfolgt.

Sie werden bemerken, dass wir auch eine Transition auf dem [`::backdrop`](/de/docs/Web/CSS/Reference/Selectors/::backdrop) eingefügt haben, die hinter dem Popover erscheint, wenn es sich öffnet, um eine nette Verdunklungsanimation zu bieten. `[popover]:popover-open::backdrop` wird benötigt, um das Backdrop zu selektieren, wenn das Popover geöffnet ist.

#### Ergebnis

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popover von `display: none` zu `display: block` wechseln, jedes Mal wenn sie angezeigt werden, durchlaufen die Popover ihre `@starting-style` Stile zu ihren `[popover]:popover-open` Stilen jedes Mal, wenn der Eingangsübergang erfolgt. Wenn das Popover schließt, wechselt es von seinem `[popover]:popover-open` Zustand zum Standardzustand `[popover]`.
>
> Es ist möglich, dass der Stilübergang beim Eintritt und Austritt unterschiedlich ist. Siehe unser [Demonstration der Verwendung von Startstilen](/de/docs/Web/CSS/Reference/At-rules/@starting-style#demonstration_of_when_starting_styles_are_used) Beispiel für einen Beweis dafür.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Transitions](/de/docs/Web/CSS/CSS_transitions) Modul
- [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style)
- [`transition-behavior`](/de/docs/Web/CSS/Reference/Properties/transition-behavior)
- [Vier neue CSS-Features für sanfte Ein- und Ausstiegsanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
