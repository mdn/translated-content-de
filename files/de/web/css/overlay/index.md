---
title: overlay
slug: Web/CSS/overlay
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}{{SeeCompatTable}}

Die **`overlay`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert, ob ein Element, das in der [Top-Ebene](/de/docs/Glossary/Top_layer) erscheint (zum Beispiel ein angezeigtes [Popover](/de/docs/Web/API/Popover_API) oder modales {{htmlelement("dialog")}} Element), tatsächlich in der Top-Ebene gerendert wird. Diese Eigenschaft ist nur relevant innerhalb einer Liste von {{cssxref("transition-property")}} Werten und nur wenn `allow-discrete` als {{cssxref("transition-behavior")}} gesetzt ist.

Es ist wichtig zu beachten, dass `overlay` _nur_ vom Browser gesetzt werden kann – Autorenstile können den `overlay` Wert eines Elements nicht ändern. Sie können jedoch `overlay` zur [Liste der Transition-Eigenschaften](/de/docs/Web/CSS/transition-property) hinzufügen, die auf ein Element gesetzt sind. Dies bewirkt, dass seine Entfernung aus der Top-Ebene aufgeschoben wird, sodass es animiert werden kann, anstatt sofort zu verschwinden.

> [!NOTE]
> Beim Übergang von `overlay` müssen Sie [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) auf die Transition setzen, damit es animiert wird. `overlay` Animationen unterscheiden sich von normalen [diskreten Animationen](/de/docs/Web/CSS/CSS_animated_properties#discrete) darin, dass der sichtbare (d.h. `auto`) Zustand für die gesamte Dauer der Transition immer angezeigt wird, egal, ob es sich um den Anfangs- oder Endzustand handelt.

## Syntax

```css
/* Schlüsselwortwerte */
overlay: auto;
overlay: none;

/* Globale Werte */
display: inherit;
display: initial;
display: revert;
display: revert-layer;
display: unset;
```

### Werte

- `auto`
  - : Das Element wird in der Top-Ebene gerendert, wenn es in die Top-Ebene befördert wird.
- `none`
  - : Das Element wird nicht in der Top-Ebene gerendert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Übergang eines Popovers

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) animiert, während es von versteckt zu gezeigt und wieder zurück übergeht.

#### HTML

Das HTML enthält ein {{htmlelement("div")}} Element, das als Popover unter Verwendung des [popover](/de/docs/Web/HTML/Global_attributes/popover) Attributs deklariert ist, und ein {{htmlelement("button")}} Element, das als Anzeigesteuerung des Popovers über sein [popovertarget](/de/docs/Web/HTML/Element/button#popovertarget) Attribut gekennzeichnet ist.

```html
<button popovertarget="mypopover">Zeigen Sie das Popover</button>
<div popover="auto" id="mypopover">Ich bin ein Popover! Ich sollte animieren.</div>
```

#### CSS

Die `overlay` Eigenschaft ist nur in der Liste der Übergangseigenschaften vorhanden. Da `overlay` eine vom User-Agent gesteuerte Eigenschaft ist, wird sie nicht in den Vor-Übergangs- oder Nach-Übergangszuständen deklariert.

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

  /* Endzustand der Austrittsanimation */
  opacity: 0;
  transform: scaleX(0);

  transition:
    opacity 0.7s,
    transform 0.7s,
    overlay 0.7s allow-discrete,
    display 0.7s allow-discrete;
  /* Entspricht
  transition: all 0.7s allow-discrete; */
}

/* Muss nach der vorherigen [popover]:popover-open Regel enthalten sein, um wirksam zu werden, da die Spezifität gleich ist */
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}

/* Übergang für das Popover-Rückgrat */

[popover]::backdrop {
  background-color: rgb(0 0 0 / 0%);
  transition:
    display 0.7s allow-discrete,
    overlay 0.7s allow-discrete,
    background-color 0.7s;
  /* Entspricht
  transition: all 0.7s allow-discrete; */
}

[popover]:popover-open::backdrop {
  background-color: rgb(0 0 0 / 25%);
}

/* Verschachtelte Selektoren (&) können keine Pseudo-Elemente darstellen, sodass diese starting-style Regel nicht verschachtelt werden kann. */

@starting-style {
  [popover]:popover-open::backdrop {
    background-color: rgb(0 0 0 / 0%);
  }
}
```

Die zwei Eigenschaften, die wir animieren möchten, sind [`opacity`](/de/docs/Web/CSS/opacity) und [`transform`](/de/docs/Web/CSS/transform)): Wir möchten, dass das Popover ein- und ausblendet, während es in horizontaler Richtung wächst und schrumpft. Wir setzen einen Anfangszustand für diese Eigenschaften auf dem standardmäßig versteckten Zustand des Popover-Elements (ausgewählt über `[popover]`) und einen Endzustand auf dem offenen Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/:popover-open) Pseudoklassse). Dann setzen wir eine [`transition`](/de/docs/Web/CSS/transition) Eigenschaft, um zwischen den beiden zu animieren.

Da das animierte Element in die [Top-Ebene](/de/docs/Glossary/Top_layer) befördert wird, wenn es angezeigt wird, und aus der Top-Ebene entfernt wird, wenn es versteckt ist, wird `overlay` zur Liste der übergehenden Elemente hinzugefügt. Dies stellt sicher, dass die Entfernung des Elements aus der Top-Ebene aufgeschoben wird, bis die Animation endet. Dies macht keinen großen Unterschied bei einfachen Animationen wie diesem, aber in komplexeren Fällen kann es dazu führen, dass das Element zu schnell von der Überlagerung entfernt wird, was bedeutet, dass die Animation nicht flüssig oder effektiv ist. Beachten Sie, dass der Wert [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) ebenfalls im Shorthand gesetzt ist, um diskrete Übergänge zu ermöglichen.

Die folgenden Schritte sind ebenfalls erforderlich, um die Animation in beide Richtungen zum Laufen zu bringen:

- Ein Anfangszustand für die Animation wird innerhalb der [`@starting-style`](/de/docs/Web/CSS/@starting-style) At-Regel gesetzt. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden Übergänge nicht bei den ersten Stilupdates von Elementen ausgelöst oder wenn sich der `display` Typ von `none` zu einem anderen Typ ändert. `@starting-style` erlaubt es Ihnen, diese Standardeinstellung auf kontrollierte Weise zu überschreiben. Ohne dies würde die Eintrittsanimation nicht auftreten und das Popover würde einfach erscheinen.
- `display` wird ebenfalls zur Liste der übergehenden Elemente hinzugefügt, sodass das animierte Element während sowohl der Eintritts- als auch der Austrittsanimation sichtbar ist (auf `display: block` gesetzt). Ohne dies wäre die Austrittsanimation nicht sichtbar; tatsächlich würde das Popover einfach verschwinden. Wiederum ist `transition-behavior: allow-discrete` in diesem Fall erforderlich, um die Animation zu ermöglichen.

Sie werden feststellen, dass wir auch eine Transition auf dem [`::backdrop`](/de/docs/Web/CSS/::backdrop) aufgenommen haben, das erscheint, wenn das Popover geöffnet wird, um eine schöne Verdunkelungsanimation zu liefern. `[popover]:popover-open::backdrop` wird benötigt, um das Rückgrat beim geöffneten Popover auszuwählen.

#### Ergebnis

Der Code rendert wie folgt:

{{ EmbedLiveSample("Übergang eines Popovers", "100%", "200") }}

> [!NOTE]
> Da Popovers von `display: none` zu `display: block` wechseln, jedes Mal, wenn sie gezeigt werden, wechselt das Popover jedes Mal während der Eintrittstransition von seinen `@starting-style` Stilen zu seinen `[popover]:popover-open` Stilen. Wenn das Popover schließt, wird es von seinem `[popover]:popover-open` Zustand zum Standard `[popover]` Zustand übergehen.
>
> Es ist möglich, dass der Stilübergang beim Eintritt und Austritt in solchen Fällen unterschiedlich ist. Siehe unser [Demonstration der Verwendung von Startstilen](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) Beispiel für einen Beweis dafür.

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- [CSS Transitions](/de/docs/Web/CSS/CSS_transitions) Modul
- [`@starting-style`](/de/docs/Web/CSS/@starting-style)
- [`transition-behavior`](/de/docs/Web/CSS/transition-behavior)
- [Vier neue CSS-Features für flüssige Eintritts- und Austritts-Animationen](https://developer.chrome.com/blog/entry-exit-animations/) bei developer.chrome.com (2023)
