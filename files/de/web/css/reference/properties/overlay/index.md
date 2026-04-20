---
title: "`overlay` CSS property"
short-title: overlay
slug: Web/CSS/Reference/Properties/overlay
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{SeeCompatTable}}

Die **`overlay`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt an, ob ein Element, das in der {{Glossary("Top_layer", "obersten Schicht")}} erscheint (zum Beispiel ein angezeigtes [Popover](/de/docs/Web/API/Popover_API) oder modales {{htmlelement("dialog")}}-Element), tatsächlich in der obersten Schicht gerendert wird. Diese Eigenschaft ist nur innerhalb einer Liste von {{cssxref("transition-property")}}-Werten relevant, und nur wenn `allow-discrete` als {{cssxref("transition-behavior")}} gesetzt ist.

Es ist wichtig zu beachten, dass `overlay` _nur_ vom Browser gesetzt werden kann — Autorenstile können den `overlay`-Wert eines Elements nicht ändern. Sie können jedoch `overlay` zur [Liste der Übergangseigenschaften](/de/docs/Web/CSS/Reference/Properties/transition-property) hinzufügen, die auf ein Element angewendet werden. Dadurch wird das Entfernen aus der obersten Schicht verzögert, sodass es animiert werden kann, anstatt sofort zu verschwinden.

> [!NOTE]
> Beim Übergang von `overlay` müssen Sie [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) auf den Übergang setzen, damit er animiert wird. `overlay`-Animationen unterscheiden sich von normalen [diskreten Animationen](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete), da der sichtbare (d.h. `auto`) Zustand während der gesamten Dauer des Übergangs immer vollständig angezeigt wird, unabhängig davon, ob es sich um den Anfangs- oder Endzustand handelt.

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
  - : Das Element wird in der obersten Schicht gerendert, wenn es in die oberste Schicht befördert wird.
- `none`
  - : Das Element wird nicht in der obersten Schicht gerendert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Übergang eines Popovers

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) animiert, während es von versteckt zu angezeigt übergeht und umgekehrt.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover mit dem [popover](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut deklariert ist, und ein {{htmlelement("button")}}-Element, das als Anzeigsteuerelement des Popovers mit seinem [popovertarget](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut festgelegt ist.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die `overlay`-Eigenschaft ist nur in der Liste der übergangenen Eigenschaften vorhanden. Da `overlay` eine vom Benutzeragenten gesteuerte Eigenschaft ist, wird sie weder im Vorübergangs- noch im Nachübergangszustand deklariert.

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

Die beiden Eigenschaften, die wir animieren möchten, sind {{cssxref("opacity")}} und {{cssxref("transform")}}: wir möchten, dass das Popover ein- und ausgeblendet wird, während es sich in horizontaler Richtung vergrößert und verkleinert. Wir setzen einen Anfangszustand für diese Eigenschaften im Standard-verborgenen Zustand des Popover-Elements (ausgewählt über `[popover]`) und einen Endzustand im offenen Zustand des Popovers (ausgewählt über die {{cssxref(":popover-open")}} Pseudoklasse). Dann setzen wir eine {{cssxref("transition")}}-Eigenschaft, um zwischen den beiden zu animieren.

Da das animierte Element in die {{Glossary("Top_layer", "oberste Schicht")}} befördert wird, wenn es angezeigt wird, und aus der obersten Schicht entfernt wird, wenn es verborgen ist, wird `overlay` in die Liste der übergangenen Elemente aufgenommen. Dies stellt sicher, dass das Entfernen des Elements aus der obersten Schicht verzögert wird, bis die Animation beendet ist. Dies macht bei einfachen Animationen wie dieser nicht viel aus, aber in komplexeren Fällen kann es passieren, dass das Element ohne dieses schnell aus dem Overlay entfernt wird, was bedeutet, dass die Animation nicht reibungslos oder effektiv ist. Beachten Sie, dass der Wert [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) ebenfalls in der Kurzform gesetzt ist, um diskrete Übergänge zu ermöglichen.

Die folgenden Schritte sind ebenfalls erforderlich, um die Animation in beide Richtungen zum Laufen zu bringen:

- Ein Anfangszustand für die Animation wird innerhalb der {{cssxref("@starting-style")}}-Regel festgelegt. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden Übergänge bei den ersten Stilaktualisierungen von Elementen oder wenn sich der `display`-Typ von `none` zu einem anderen Typ ändert, nicht ausgelöst. `@starting-style` ermöglicht es Ihnen, diesen Standard in einer bestimmten kontrollierten Weise zu überschreiben. Ohne dies würde die Eintrittsanimation nicht stattfinden und das Popover einfach erscheinen.
- `display` wird ebenfalls zur Liste der übergangenen Elemente hinzugefügt, sodass das animierte Element während sowohl der Eintritts- als auch der Austrittsanimation sichtbar ist (auf `display: block` gesetzt). Ohne dies wäre die Austrittsanimation nicht sichtbar; in der Praxis würde das Popover einfach verschwinden. Auch hier ist `transition-behavior: allow-discrete` erforderlich, damit die Animation stattfindet.

Sie werden feststellen, dass wir auch einen Übergang auf dem {{cssxref("::backdrop")}}, das hinter dem Popover erscheint, wenn es geöffnet wird, für eine schöne Abdunklungsanimation enthalten haben. `[popover]:popover-open::backdrop` ist erforderlich, um das Backdrop zu wählen, wenn das Popover offen ist.

#### Ergebnis

Der Code wird wie folgt dargestellt:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers bei jeder Anzeige von `display: none` zu `display: block` wechseln, wechseln die Popovers von ihren `@starting-style`-Stilen zu ihren `[popover]:popover-open`-Stilen jedes Mal, wenn der Eintrittsübergang stattfindet. Wenn das Popover schließt, wechselt es von seinem `[popover]:popover-open`-Zustand zum Standardzustand `[popover]`.
>
> Es ist möglich, dass sich der Stilübergang beim Eintritt und Austritt in solchen Fällen unterscheiden kann. Sehen Sie sich unser Beispiel für eine [Demonstration, wann Startstile verwendet werden](/de/docs/Web/CSS/Reference/At-rules/@starting-style#demonstration_of_when_starting_styles_are_used) an, um einen Beweis dafür zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Übergänge](/de/docs/Web/CSS/Guides/Transitions)-Modul
- {{cssxref("@starting-style")}}
- {{cssxref("transition-behavior")}}
- [Vier neue CSS-Funktionen für glatte Ein- und Austrittsanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
