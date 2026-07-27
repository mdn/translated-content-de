---
title: "`overlay` CSS property"
short-title: overlay
slug: Web/CSS/Reference/Properties/overlay
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

{{SeeCompatTable}}

Die **`overlay`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt an, ob ein Element, das in der {{Glossary("Top_layer", "Top-Schicht")}} (zum Beispiel ein angezeigtes [Popover](/de/docs/Web/API/Popover_API) oder modales {{htmlelement("dialog")}}-Element) erscheint, tatsächlich in der Top-Schicht gerendert wird. Diese Eigenschaft ist nur in einer Liste von {{cssxref("transition-property")}}-Werten relevant und nur, wenn `allow-discrete` als {{cssxref("transition-behavior")}} gesetzt ist.

Es ist wichtig zu beachten, dass `overlay` _nur_ vom Browser gesetzt werden kann — Autorstile können den `overlay`-Wert eines Elements nicht ändern. Sie können jedoch `overlay` zur [Liste der Übergangseigenschaften](/de/docs/Web/CSS/Reference/Properties/transition-property) eines Elements hinzufügen. Dies bewirkt, dass die Entfernung von der Top-Schicht verzögert wird, damit es animiert werden kann, anstatt sofort zu verschwinden.

> [!NOTE]
> Wenn Sie `overlay` übergangsweise verwenden, müssen Sie [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) auf den Übergang setzen, damit es animiert wird. `overlay`-Animationen unterscheiden sich von normalen [diskreten Animationen](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete), da der sichtbare (d.h. `auto`) Zustand für die gesamte Dauer des Übergangs immer angezeigt wird, unabhängig davon, ob es der Start- oder Endzustand ist.

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

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `auto`
  - : Das Element wird in der Top-Schicht gerendert, wenn es in die Top-Schicht befördert wird.
- `none`
  - : Das Element wird nicht in der Top-Schicht gerendert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Übergang eines Popovers

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) animiert, während es von versteckt zu sichtbar übergeht und wieder zurück.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das mithilfe des [popover](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attributs als Popover deklariert ist, und ein {{htmlelement("button")}}-Element, das durch das [popovertarget](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut als Steuerung für die Popover-Anzeige festgelegt ist.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die `overlay`-Eigenschaft ist nur in der Liste der übergangenen Eigenschaften vorhanden. Da `overlay` eine durch den Benutzeragenten kontrollierte Eigenschaft ist, wird sie nicht in den Vorübergangs- oder Nachübergangszuständen deklariert.

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

Die zwei Eigenschaften, die wir animieren möchten, sind {{cssxref("opacity")}} und {{cssxref("transform")}}: wir möchten, dass das Popover beim Ein- und Ausblenden während des Wachstums und Schrumpfens in horizontaler Richtung verblasst. Wir setzen einen Startzustand dieser Eigenschaften auf den Standardversteckzustand des Popovers (ausgewählt über `[popover]`) und einen Endzustand auf den offenen Zustand des Popovers (ausgewählt über die {{cssxref(":popover-open")}}-Pseudoklasse). Dann setzen wir eine {{cssxref("transition")}}-Eigenschaft, um zwischen den beiden zu animieren.

Da das animierte Element beim Anzeigen in die {{Glossary("Top_layer", "Top-Schicht")}} befördert und beim Verstecken aus der Top-Schicht entfernt wird, wird `overlay` zur Liste der übergangenen Elemente hinzugefügt. Dies stellt sicher, dass die Entfernung des Elements aus der Top-Schicht verzögert wird, bis die Animation beendet ist. Das macht bei einfachen Animationen wie dieser keinen großen Unterschied, aber in komplexeren Fällen kann das Auslassen dieses Schritts dazu führen, dass das Element zu schnell aus dem Overlay entfernt wird, was bedeutet, dass die Animation nicht geschmeidig oder effektiv ist. Beachten Sie, dass der Wert [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) ebenfalls im Kurzschreibweise-Set festgelegt ist, um diskrete Übergänge zu ermöglichen.

Die folgenden Schritte sind ebenfalls erforderlich, um die Animation in beide Richtungen zum Laufen zu bringen:

- Ein Startzustand für die Animation wird innerhalb der {{cssxref("@starting-style")}}-At-Regel festgelegt. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden Übergänge nicht bei den ersten Stilaktualisierungen von Elementen ausgelöst oder wenn der `display`-Typ von `none` in einen anderen Typ geändert wird. `@starting-style` erlaubt es Ihnen, dieses Standardverhalten auf eine spezifische, kontrollierte Weise zu überschreiben. Ohne dies würde die Eintrittsanimation nicht erfolgen, und das Popover würde einfach erscheinen.
- `display` wird ebenfalls zur Liste der übergangenen Elemente hinzugefügt, damit das animierte Element während sowohl der Eintritts- als auch der Austrittsanimation sichtbar ist (auf `display: block` gesetzt). Ohne dies wäre die Austrittsanimation nicht sichtbar; tatsächlich würde das Popover einfach verschwinden. Auch hier ist `transition-behavior: allow-discrete` in diesem Fall erforderlich, damit die Animation erfolgen kann.

Sie werden feststellen, dass wir auch eine Übergangsanimation auf das {{cssxref("::backdrop")}} aufgenommen haben, das hinter dem Popover erscheint, wenn es geöffnet wird, um eine schöne Verdunkelungsanimation zu bieten. `[popover]:popover-open::backdrop` ist notwendig, um das Backdrop auszuwählen, wenn das Popover geöffnet ist.

#### Ergebnis

Der Code rendert wie folgt:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popover bei jedem Anzeigen von `display: none` zu `display: block` wechseln, wechseln sie bei jedem Eintrittsübergang von ihren `@starting-style`-Stilen zu ihren `[popover]:popover-open`-Stilen. Wenn das Popover geschlossen wird, wechselt es von seinem `[popover]:popover-open`-Zustand in den Standard-`[popover]`-Zustand.
>
> Es ist möglich, dass der Stilübergang beim Eintritt und Austritt in solchen Fällen unterschiedlich ist. Sehen Sie unser Beispiel [Demonstration of when starting styles are used](/de/docs/Web/CSS/Reference/At-rules/@starting-style#demonstration_of_when_starting_styles_are_used) für einen Beweis dafür.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Übergänge](/de/docs/Web/CSS/Guides/Transitions) Modul
- {{cssxref("@starting-style")}}
- {{cssxref("transition-behavior")}}
- [Vier neue CSS-Features für flüssige Ein- und Austrittsanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
