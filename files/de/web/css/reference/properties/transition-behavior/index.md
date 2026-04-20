---
title: "`transition-behavior` CSS property"
short-title: transition-behavior
slug: Web/CSS/Reference/Properties/transition-behavior
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`transition-behavior`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, ob Übergänge für Eigenschaften gestartet werden, deren Animationsverhalten [diskret](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete) ist.

## Syntax

```css
/* Keyword values */
transition-behavior: allow-discrete;
transition-behavior: normal;

/* Global values */
transition-behavior: inherit;
transition-behavior: initial;
transition-behavior: revert;
transition-behavior: revert-layer;
transition-behavior: unset;
```

### Werte

- `allow-discrete`
  - : Übergänge werden am Element für diskret animierte Eigenschaften gestartet.
- `normal`
  - : Übergänge werden _nicht_ am Element für diskret animierte Eigenschaften gestartet.

## Beschreibung

Die `transition-behavior`-Eigenschaft ist nur relevant, wenn sie in Verbindung mit anderen Übergangseigenschaften verwendet wird, insbesondere {{cssxref("transition-property")}} und {{cssxref("transition-duration")}}, da kein Übergang erfolgt, wenn keine Eigenschaften über eine ungleich null dauernde Zeitspanne animiert werden.

```css
.card {
  transition-property: opacity, display;
  transition-duration: 0.25s;
  transition-behavior: allow-discrete;
}

.card.fade-out {
  opacity: 0;
  display: none;
}
```

Der `transition-behavior`-Wert kann als Teil einer verkürzten {{cssxref("transition")}}-Deklaration enthalten sein. Wird er in der verkürzten Form eingeschlossen und auf alle Eigenschaften angewendet oder standardmäßig festgelegt, hat der `allow-discrete`-Wert keinen Einfluss auf regulär animierbare Eigenschaften. Der folgende CSS-Code entspricht den langen Deklarationen oben:

```css
.card {
  transition: all 0.25s;
  transition: all 0.25s allow-discrete;
}

.card.fade-out {
  opacity: 0;
  display: none;
}
```

Im obigen Ausschnitt haben wir die `transition`-Eigenschaft zweimal eingefügt. Die erste Instanz schließt den `allow-discrete`-Wert nicht ein — dies bietet eine Unterstützung über verschiedene Browser hinweg, um sicherzustellen, dass die anderen Eigenschaften der Karte in Browsern, die `transition-behavior` nicht unterstützen, dennoch übergehen.

### Diskretes Animationsverhalten

Diskret animierte Eigenschaften wechseln im Allgemeinen zwischen zwei Werten, indem sie 50 % der Animation zwischen den beiden Werten liegen.

Es gibt jedoch eine Ausnahme, wenn zu oder von `display: none` oder `content-visibility: hidden` animiert wird. In diesem Fall wechselt der Browser zwischen den beiden Werten, sodass der übergehende Inhalt während der gesamten Animationsdauer gezeigt wird.

Zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wechselt der Wert zu `block` bei `0%` der Animationsdauer, sodass er die ganze Zeit sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wechselt der Wert zu `none` bei `100%` der Animationsdauer, sodass er die ganze Zeit sichtbar ist.

## Formelle Definition

{{cssinfo}}

## Formelle Syntax

{{CSSSyntax}}

## Beispiele

### Übergang eines Popovers

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) animiert, während es von versteckt zu sichtbar und wieder zurück übergeht.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover mittels des [popover](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attributs deklariert ist, und ein {{htmlelement("button")}}-Element, das als Anzeigeelement für das Popover über sein [popovertarget](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut gekennzeichnet ist.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

```css hidden
html {
  font-family: "Helvetica", "Arial", sans-serif;
}

[popover] {
  font-size: 1.2rem;
  padding: 10px;
}
```

```css
[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}

[popover] {
  /* Final state of the exit animation */
  opacity: 0;
  transform: scaleX(0);

  transition-property: opacity, transform, overlay, display;
  transition-duration: 0.7s;
  transition-behavior: allow-discrete;
  /* Using the shorthand transition property, we could write:
    transition: 
      opacity 0.7s,
      transform 0.7s,
      overlay 0.7s allow-discrete,
      display 0.7s allow-discrete;

    or even:
    transition: all 0.7s allow-discrete;
  */
}

/* Needs to be included after the previous [popover]:popover-open 
   rule to take effect, as the specificity is the same */
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}
```

Die beiden Eigenschaften, die wir animieren möchten, sind {{cssxref("opacity")}} und {{cssxref("transform")}}: Wir möchten, dass das Popover ein- und ausblendet, während es in der horizontalen Richtung wächst und schrumpft. Wir setzen einen Anfangszustand für diese Eigenschaften im standardmäßig versteckten Zustand des Popover-Elements (ausgewählt über `[popover]`) und einen Endzustand im geöffneten Zustand des Popovers (ausgewählt über die {{cssxref(":popover-open")}}-Pseudoklasse). Dann setzen wir eine {{cssxref("transition")}}-Eigenschaft, um zwischen den beiden zu animieren.

Da das animierte Element in die {{Glossary("Top_layer", "oberste Ebene")}} befördert wird, wenn es sichtbar wird, und aus der obersten Ebene entfernt wird, wenn es verborgen wird — was auch bedeutet, dass sein versteckter Zustand [`display: none`](/de/docs/Web/CSS/Reference/Properties/display) darauf gesetzt ist — werden die folgenden Eigenschaften zur Liste der übergehenden Elemente hinzugefügt, um die Animation in beide Richtungen zu ermöglichen. In beiden Fällen wird `transition-behavior: allow-discrete` in der Kurzform festgelegt, um diskrete Animationen zu ermöglichen.

- `display`: Erforderlich, damit das animierte Element während des Eintritts und Austritts (zu `display: block` gesetzt) sichtbar ist. Ohne dies wäre die Austrittsanimation nicht sichtbar; tatsächlich würde das Popover einfach verschwinden.
- {{cssxref("overlay")}}: Erforderlich, um sicherzustellen, dass die Entfernung des Elements aus der obersten Ebene bis zum Abschluss der Animation verschoben wird. Dies macht keinen großen Unterschied für einfache Animationen wie diese, aber in komplexeren Fällen kann die Animation ohne diese Maßnahme nicht glatt oder effektiv sein.

Zusätzlich wird ein Anfangszustand für die Animation innerhalb der {{cssxref("@starting-style")}}-At-Regel festgelegt. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden Übergänge nicht bei den ersten Stilaktualisierungen von Elementen ausgelöst, oder wenn sich der `display`-Typ von `none` zu einem anderen Typ ändert. `@starting-style` ermöglicht es Ihnen, diesen Standard spezifisch und kontrolliert zu überschreiben. Ohne dies würde die Eintrittsanimation nicht stattfinden, und das Popover würde einfach erscheinen.

#### Ergebnis

Der Code wird wie folgt dargestellt:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Weil Popovers jedes Mal von `display: none` zu `display: block` wechseln, wenn sie angezeigt werden, wechselt das Popover jedes Mal von seinen `@starting-style`-Stilen zu seinen `[popover]:popover-open`-Stilen, wenn der Eintrittsübergang erfolgt. Wenn das Popover schließt, wechselt es von seinem `[popover]:popover-open`-Zustand zurück zum Standard-`[popover]`-Zustand.
>
> In solchen Fällen ist es möglich, dass der Stilübergang beim Eintritt und Austritt unterschiedlich ist. Sehen Sie sich unser [Demonstration von wann Startstile verwendet werden](/de/docs/Web/CSS/Reference/At-rules/@starting-style#demonstration_of_when_starting_styles_are_used) Beispiel für einen Beweis hierfür an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("overlay")}}
- {{cssxref("@starting-style")}}
- [CSS-Übergänge](/de/docs/Web/CSS/Guides/Transitions)-Modul
- [Vier neue CSS-Features für nahtlose Ein- und Austrittsanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
