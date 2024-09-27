---
title: overlay
slug: Web/CSS/overlay
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}{{SeeCompatTable}}

Die **`overlay`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt an, ob ein Element, das in der [obersten Ebene](/de/docs/Glossary/Top_layer) erscheint (zum Beispiel ein angezeigtes [Popover](/de/docs/Web/API/Popover_API) oder modales {{htmlelement("dialog")}}-Element), tatsächlich in der obersten Ebene gerendert wird. Diese Eigenschaft ist nur innerhalb einer Liste von {{cssxref("transition-property")}}-Werten relevant und nur, wenn `allow-discrete` als {{cssxref("transition-behavior")}} festgelegt ist.

Es ist wichtig zu beachten, dass `overlay` _nur_ vom Browser festgelegt werden kann — Autorenstile können den `overlay`-Wert eines Elements nicht ändern. Sie können jedoch `overlay` zur [Liste der Übergangseigenschaften](/de/docs/Web/CSS/transition-property) eines Elements hinzufügen. Dies führt dazu, dass die Entfernung aus der obersten Ebene verzögert wird, sodass sie animiert wird, anstatt sofort zu verschwinden.

> [!NOTE]
> Beim Übergang von `overlay` müssen Sie [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) auf den Übergang setzen, damit er animiert wird. `overlay`-Animationen unterscheiden sich von normalen [diskreten Animationen](/de/docs/Web/CSS/CSS_animated_properties#discrete), da der sichtbare (d. h. `auto`) Zustand während der gesamten Dauer des Übergangs immer angezeigt wird, unabhängig davon, ob es sich um den Start- oder Endzustand handelt.

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
  - : Das Element wird in der obersten Ebene gerendert, falls es in die oberste Ebene befördert wird.
- `none`
  - : Das Element wird nicht in der obersten Ebene gerendert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Übergang eines Popovers

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) animiert, während es vom versteckten Zustand in den angezeigten Zustand übergeht und wieder zurück.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das mithilfe des [popover](/de/docs/Web/HTML/Global_attributes/popover)-Attributs als Popover deklariert ist, und ein {{htmlelement("button")}}-Element, das als Anzeigesteuerung des Popovers über sein [popovertarget](/de/docs/Web/HTML/Element/button#popovertarget)-Attribut festgelegt ist.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die `overlay`-Eigenschaft ist nur in der Liste der übergehenden Eigenschaften vorhanden. Da `overlay` eine vom Benutzeragenten gesteuerte Eigenschaft ist, wird sie nicht in den Vor- oder Nachübergangszuständen deklariert.

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

Die beiden Eigenschaften, die wir animieren möchten, sind [`opacity`](/de/docs/Web/CSS/opacity) und [`transform`](/de/docs/Web/CSS/transform)): wir möchten, dass das Popover ein- und ausblendet, während es in horizontaler Richtung wächst und schrumpft. Wir setzen einen Anfangszustand für diese Eigenschaften auf den standardmäßig verborgenen Zustand des Popover-Elements (ausgewählt über `[popover]`) und einen Endzustand auf den offenen Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/:popover-open)-Pseudoklasse). Anschließend setzen wir eine [`transition`](/de/docs/Web/CSS/transition)-Eigenschaft, um zwischen den beiden zu animieren.

Weil das animierte Element in die [oberste Ebene](/de/docs/Glossary/Top_layer) befördert wird, wenn es angezeigt wird, und aus der obersten Ebene entfernt wird, wenn es verborgen ist, wird `overlay` zur Liste der übergehenden Elemente hinzugefügt. Dies stellt sicher, dass die Entfernung des Elements aus der obersten Ebene erst nach Beendigung der Animation erfolgt. Dies macht bei einfachen Animationen wie dieser nicht einen großen Unterschied, aber in komplexeren Fällen kann es passieren, dass das Element zu schnell aus dem Overlay entfernt wird, was bedeutet, dass die Animation nicht glatt oder effektiv ist. Beachten Sie, dass auch der Wert [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) im Kürzel gesetzt wird, um diskrete Übergänge zu ermöglichen.

Die folgenden Schritte sind ebenfalls erforderlich, damit die Animation in beide Richtungen funktioniert:

- Ein Anfangszustand für die Animation wird innerhalb der [`@starting-style`](/de/docs/Web/CSS/@starting-style)-At-Rule festgelegt. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden Übergänge nicht bei den ersten Stilaktualisierungen der Elemente ausgelöst oder wenn der `display`-Typ von `none` in einen anderen Typ wechselt. `@starting-style` ermöglicht es Ihnen, diesen Standard auf spezifische Weise zu überschreiben. Ohne diese würde die Eintrittsanimation nicht stattfinden und das Popover würde einfach erscheinen.
- `display` wird ebenfalls zur Liste der übergehenden Elemente hinzugefügt, damit das animierte Element während sowohl der Eintritts- als auch der Austrittsanimation sichtbar ist (auf `display: block` gesetzt). Ohne dies wäre die Austrittsanimation nicht sichtbar; tatsächlich würde das Popover einfach verschwinden. Auch hier ist `transition-behavior: allow-discrete` erforderlich, damit die Animation erfolgt.

Sie werden feststellen, dass wir auch einen Übergang auf dem [`::backdrop`](/de/docs/Web/CSS/::backdrop) hinzugefügt haben, der hinter dem Popover erscheint, wenn es sich öffnet, um eine schöne Abdunklungsanimation zu bieten. `[popover]:popover-open::backdrop` ist erforderlich, um das Backdrop auszuwählen, wenn das Popover geöffnet ist.

#### Ergebnis

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popover jedes Mal, wenn sie angezeigt werden, von `display: none` auf `display: block` wechseln, erfolgt der Übergang des Popover von seinen `@starting-style`-Stilen zu seinen `[popover]:popover-open`-Stilen bei jedem Eintrittsübergang. Wenn das Popover geschlossen wird, wechselt es von seinem `[popover]:popover-open`-Zustand zum Standard-`[popover]`-Zustand.
>
> Es ist möglich, dass sich der Stilübergang beim Eintritt und Austritt in solchen Fällen unterscheidet. Weitere Informationen finden Sie in unserem [Demonstration, wann Startstile verwendet werden](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used)-Beispiel als Nachweis dafür.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions)-Modul
- [`@starting-style`](/de/docs/Web/CSS/@starting-style)
- [`transition-behavior`](/de/docs/Web/CSS/transition-behavior)
- [Vier neue CSS-Funktionen für weiche Ein- und Austrittsanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
