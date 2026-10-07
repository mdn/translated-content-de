---
title: "`overlay` CSS property"
short-title: overlay
slug: Web/CSS/Reference/Properties/overlay
l10n:
  sourceCommit: d78544a841b0e266a6efc169c044573f5e0b4e7d
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`overlay`** gibt an, ob ein Element, das sich in der {{Glossary("Top_layer", "obersten Ebene")}} befindet (beispielsweise ein angezeigtes [Popover](/de/docs/Web/API/Popover_API) oder ein modales {{htmlelement("dialog")}}-Element), tatsächlich in der obersten Ebene gerendert wird. Diese Eigenschaft ist nur innerhalb einer Liste von {{cssxref("transition-property")}}-Werten relevant und nur dann, wenn für {{cssxref("transition-behavior")}} der Wert `allow-discrete` festgelegt ist.

Wichtig ist, dass `overlay` _nur_ vom Browser festgelegt werden kann – vom Autor definierte Styles können den `overlay`-Wert eines Elements nicht ändern. Sie können `overlay` jedoch zur [Liste der Transition-Eigenschaften](/de/docs/Web/CSS/Reference/Properties/transition-property) eines Elements hinzufügen. Dadurch wird das Entfernen des Elements aus der obersten Ebene verzögert, sodass es animiert werden kann, statt sofort zu verschwinden.

> [!NOTE]
> Wenn Sie `overlay` animieren möchten, müssen Sie für die Transition [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) festlegen. `overlay`-Animationen unterscheiden sich von normalen [diskreten Animationen](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete): Der sichtbare Zustand (also `auto`) wird immer für die gesamte Dauer der Transition angezeigt, unabhängig davon, ob er der Anfangs- oder Endzustand ist.

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

Für diese Eigenschaft wird einer der folgenden Schlüsselwortwerte angegeben:

- `auto`
  - : Das Element wird in der obersten Ebene gerendert, wenn es in die oberste Ebene verschoben wurde.
- `none`
  - : Das Element wird nicht in der obersten Ebene gerendert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Ein Popover mit einer Transition animieren

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) animiert, während es per [Transition](/de/docs/Web/CSS/Guides/Transitions) vom verborgenen in den sichtbaren Zustand und wieder zurück wechselt.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das mit dem Attribut [popover](/de/docs/Web/HTML/Reference/Global_attributes/popover) als Popover deklariert ist, sowie ein {{htmlelement("button")}}-Element, das über sein Attribut [popovertarget](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) als Steuerelement zum Anzeigen des Popovers festgelegt ist.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die Eigenschaft `overlay` steht nur in der Liste der Eigenschaften, für die eine Transition festgelegt ist. Da `overlay` vom Browser gesteuert wird, wird die Eigenschaft weder im Zustand vor noch im Zustand nach der Transition deklariert.

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

Die beiden Eigenschaften, die wir animieren möchten, sind {{cssxref("opacity")}} und {{cssxref("transform")}}: Das Popover soll ein- und ausgeblendet werden und sich dabei in horizontaler Richtung vergrößern beziehungsweise verkleinern. Für diese Eigenschaften legen wir einen Anfangszustand für das standardmäßig verborgene Popover-Element fest (ausgewählt über `[popover]`) und einen Endzustand für das geöffnete Popover (ausgewählt über die Pseudoklasse {{cssxref(":popover-open")}}). Anschließend legen wir eine {{cssxref("transition")}}-Eigenschaft fest, um den Wechsel zwischen den beiden Zuständen zu animieren.

Da das animierte Element beim Anzeigen in die {{Glossary("Top_layer", "oberste Ebene")}} verschoben und beim Verbergen daraus entfernt wird, wird `overlay` zur Liste der Eigenschaften hinzugefügt, für die eine Transition festgelegt ist. So wird das Entfernen des Elements aus der obersten Ebene bis zum Ende der Animation verzögert. Bei einfachen Animationen wie dieser macht das keinen großen Unterschied. In komplexeren Fällen kann das Element andernfalls jedoch zu früh aus der obersten Ebene entfernt werden, sodass die Animation nicht flüssig oder wirkungsvoll ist. Beachten Sie, dass auch der Wert [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) in der Kurzschreibweise festgelegt wird, um diskrete Transitionen zu ermöglichen.

Damit die Animation in beide Richtungen funktioniert, sind außerdem die folgenden Schritte erforderlich:

- Ein Anfangszustand für die Animation wird innerhalb der At-Regel {{cssxref("@starting-style")}} festgelegt. Dies ist nötig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden Transitionen weder bei der ersten Aktualisierung der Styles eines Elements noch dann ausgelöst, wenn sich der `display`-Typ von `none` zu einem anderen Typ ändert. Mit `@starting-style` können Sie dieses Standardverhalten gezielt überschreiben. Ohne diese At-Regel würde die Animation beim Einblenden nicht stattfinden und das Popover lediglich erscheinen.
- Auch `display` wird zur Liste der Eigenschaften hinzugefügt, für die eine Transition festgelegt ist. Dadurch bleibt das animierte Element während der gesamten Animation beim Ein- und Ausblenden sichtbar (mit `display: block`). Ohne diesen Schritt wäre die Animation beim Ausblenden nicht sichtbar; das Popover würde einfach verschwinden. Auch hier ist `transition-behavior: allow-discrete` erforderlich, damit die Animation stattfindet.

Sie werden feststellen, dass wir auch für {{cssxref("::backdrop")}}, das beim Öffnen hinter dem Popover erscheint, eine Transition hinzugefügt haben. So entsteht beim Abdunkeln eine ansprechende Animation. `[popover]:popover-open::backdrop` ist erforderlich, um das Backdrop auszuwählen, wenn das Popover geöffnet ist.

#### Ergebnis

Der Code wird wie folgt dargestellt:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popover bei jedem Anzeigen von `display: none` zu `display: block` wechseln, durchläuft das Popover bei jeder Animation zum Einblenden eine Transition von seinen `@starting-style`-Styles zu seinen `[popover]:popover-open`-Styles. Beim Schließen durchläuft es eine Transition vom Zustand `[popover]:popover-open` zum Standardzustand `[popover]`.
>
> In solchen Fällen können sich die Style-Transitionen beim Ein- und Ausblenden unterscheiden. Ein Beispiel dafür finden Sie unter [Demonstration, wann Anfangs-Styles verwendet werden](/de/docs/Web/CSS/Reference/At-rules/@starting-style#demonstration_of_when_starting_styles_are_used).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Modul [CSS-Transitionen](/de/docs/Web/CSS/Guides/Transitions)
- {{cssxref("@starting-style")}}
- {{cssxref("transition-behavior")}}
- [Vier neue CSS-Funktionen für flüssige Animationen beim Ein- und Ausblenden](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
