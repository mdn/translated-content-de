---
title: transition-behavior
slug: Web/CSS/Reference/Properties/transition-behavior
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`transition-behavior`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, ob Übergänge für Eigenschaften gestartet werden, deren Animationsverhalten [diskret](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete) ist.

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
  - : Übergänge werden für diskrete animierte Eigenschaften des Elements gestartet.
- `normal`
  - : Übergänge werden _nicht_ für diskrete animierte Eigenschaften des Elements gestartet.

## Beschreibung

Die `transition-behavior` Eigenschaft ist nur relevant, wenn sie in Verbindung mit anderen Übergangseigenschaften verwendet wird, insbesondere {{cssxref("transition-property")}} und {{cssxref("transition-duration")}}, da kein Übergang stattfindet, wenn keine Eigenschaften über eine nicht-null Dauer animiert werden.

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

Der `transition-behavior` Wert kann als Teil einer Kurzschrift {{cssxref("transition")}} Deklaration aufgenommen werden. Wenn er in die Kurzschrift aufgenommen wird, hat der `allow-discrete` Wert keinen Einfluss auf regulär animierbare Eigenschaften, wenn alle Eigenschaften verwendet oder darauf zurückgegriffen werden. Der folgende CSS-Code ist gleichwertig zu den ausführlichen Deklarationen oben:

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

Im obigen Beispiel schließen wir die `transition` Eigenschaft zweimal ein. Die erste Instanz enthält nicht den `allow-discrete` Wert — dies bietet eine plattformübergreifende Unterstützung, um sicherzustellen, dass die anderen Eigenschaften der Karte auch in Browsern übergehen, die `transition-behavior` nicht unterstützen.

### Diskretes Animationsverhalten

Diskret animierte Eigenschaften wechseln im Allgemeinen zwischen zwei Werten 50% der Animation zwischen den beiden.

Es gibt jedoch eine Ausnahme, und zwar beim Animieren von oder zu `display: none` oder `content-visibility: hidden`. In diesem Fall wird der Browser zwischen den beiden Werten wechseln, sodass der übergangene Inhalt während der gesamten Animationsdauer angezeigt wird.

Ein Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display` Wert) wechselt der Wert zu `block` bei `0%` der Animationsdauer, sodass er während der gesamten Dauer sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display` Wert) zu `none` wechselt der Wert zu `none` bei `100%` der Animationsdauer, sodass er während der gesamten Dauer sichtbar ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Übergang eines Popovers

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) animiert, während es [übergangsweise](/de/docs/Web/CSS/Guides/Transitions) von verborgen zu sichtbar und wieder zurück wechselt.

#### HTML

Das HTML enthält ein {{htmlelement("div")}} Element, das als Popover mit dem [popover](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attribut deklariert ist, und ein {{htmlelement("button")}} Element, das als Anzeige-Steuerung des Popovers mit seinem [popovertarget](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) Attribut bezeichnet ist.

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

Die beiden Eigenschaften, die wir animieren möchten, sind {{cssxref("opacity")}} und {{cssxref("transform")}}: Wir möchten, dass das Popover ein- und ausblendet, während es sich in horizontaler Richtung vergrößert und verkleinert. Wir setzen einen Startzustand für diese Eigenschaften im Standard-versteckten Zustand des Popover-Elements (ausgewählt über `[popover]`), und einen Endzustand im offenen Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/Reference/Selectors/:popover-open) Pseudo-Klasse). Dann setzen wir eine {{cssxref("transition")}} Eigenschaft, um zwischen den beiden zu animieren.

Da das animierte Element in die {{Glossary("Top_layer", "oberste Ebene")}} verschoben wird, wenn es angezeigt wird, und aus der obersten Ebene entfernt wird, wenn es verborgen wird — was auch bedeutet, dass sein verborgener Zustand [`display: none`](/de/docs/Web/CSS/Reference/Properties/display) darauf gesetzt hat — werden die folgenden Eigenschaften zur Liste der übergangenen Elemente hinzugefügt, um die Animation in beide Richtungen funktionsfähig zu machen. In beiden Fällen wird `transition-behavior: allow-discrete` in der Kurzschrift gesetzt, um diskrete Animation zu ermöglichen.

- `display`: Erforderlich, damit das animierte Element (auf `display: block` gesetzt) während sowohl des Ein- als auch des Ausstiegs durchgehend sichtbar ist. Ohne dies wäre die Austrittsanimation nicht sichtbar; effektiv würde das Popover einfach verschwinden.
- {{cssxref("overlay")}}: Erforderlich, um sicherzustellen, dass die Entfernung des Elements von der obersten Ebene bis zum Abschluss der Animation verschoben wird. Dies macht keinen großen Unterschied für grundlegende Animationen wie diese, aber in komplexeren Fällen kann das Unterlassen dieser Maßnahme dazu führen, dass das Element zu schnell aus der Überlagerung entfernt wird, was bedeutet, dass die Animation nicht reibungslos oder effektiv ist.

Darüber hinaus wird ein Startzustand für die Animation innerhalb der [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style) Regel gesetzt. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden Übergänge nicht bei den ersten Stilaktualisierungen von Elementen ausgelöst oder wenn sich der `display` Typ von `none` zu einem anderen Typ ändert. `@starting-style` erlaubt Ihnen, diese Standardeinstellung auf eine bestimmte kontrollierte Weise zu überschreiben. Ohne dies würde die Eintrittsanimation nicht stattfinden und das Popover würde einfach erscheinen.

#### Ergebnis

Der Code rendert sich wie folgt:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers bei jeder Anzeige von `display: none` zu `display: block` wechseln, wechselt das Popover jedes Mal beim Eintrittsübergang von seinen `@starting-style` Stilen zu seinen `[popover]:popover-open` Stilen. Wenn das Popover schließt, wechselt es von seinem `[popover]:popover-open` Zustand zum Standardzustand `[popover]`.
>
> Es ist möglich, dass der Stilübergang beim Ein- und Austritt unterschiedlich ist. Sehen Sie sich unser Beispiel [Demonstration of when starting styles are used](/de/docs/Web/CSS/Reference/At-rules/@starting-style#demonstration_of_when_starting_styles_are_used) an, um einen Beweis dafür zu erhalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("overlay")}}
- [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style)
- [CSS Übergänge](/de/docs/Web/CSS/Guides/Transitions) Modul
- [Vier neue CSS-Funktionen für sanfte Ein- und Austrittsanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
