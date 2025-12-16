---
title: transition-behavior
slug: Web/CSS/Reference/Properties/transition-behavior
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`transition-behavior`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt an, ob Übergänge für Eigenschaften gestartet werden, deren Animationsverhalten [diskret](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete) ist.

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
  - : Übergänge werden für diskret animierte Eigenschaften des Elements gestartet.
- `normal`
  - : Übergänge werden _nicht_ für diskret animierte Eigenschaften des Elements gestartet.

## Beschreibung

Die `transition-behavior`-Eigenschaft ist nur relevant, wenn sie in Verbindung mit anderen Übergangseigenschaften verwendet wird, insbesondere {{cssxref("transition-property")}} und {{cssxref("transition-duration")}}, da kein Übergang stattfindet, wenn keine Eigenschaften über eine von Null abweichende Dauer hinweg animiert werden.

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

Der `transition-behavior`-Wert kann als Teil einer Kurznotation {{cssxref("transition")}}-Deklaration enthalten sein. Wenn er in der Kurznotation enthalten ist, hat bei Verwendung oder Standardisierung auf alle Eigenschaften der `allow-discrete`-Wert keinen Einfluss auf regulär animierbare Eigenschaften. Der folgende CSS-Code ist den Langnotationserklärungen oben gleichwertig:

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

Im obigen Code-Snippet fügen wir die `transition`-Eigenschaft zweimal ein. Die erste Instanz enthält nicht den `allow-discrete`-Wert — dies bietet plattformübergreifende Unterstützung und stellt sicher, dass die anderen Eigenschaften der Karte in Browsern, die `transition-behavior` nicht unterstützen, weiterhin Übergänge durchführen.

### Diskretes Animationsverhalten

Diskret animierte Eigenschaften wechseln im Allgemeinen zwischen zwei Werten um 50 % durch die Animation zwischen den beiden.

Es gibt jedoch eine Ausnahme, wenn zu oder von `display: none` oder `content-visibility: hidden` animiert wird. In diesem Fall wird der Browser zwischen den beiden Werten wechseln, sodass der Übergangsinhalte während der gesamten Animationsdauer angezeigt wird.

Ein Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wechselt der Wert bei `0%` der Animationsdauer zu `block`, sodass er durchgängig sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wechselt der Wert bei `100%` der Animationsdauer zu `none`, sodass er durchgängig sichtbar ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Übergang eines Popovers

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) animiert, wenn es von verborgen zu sichtbar und zurück übergeht.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover mithilfe des [popover](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attributs deklariert ist, und ein {{htmlelement("button")}}-Element, das als Anzeigeelement des Popovers mithilfe seines [popovertarget](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attributs ausgewiesen ist.

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

Die beiden Eigenschaften, die wir animieren möchten, sind {{cssxref("opacity")}} und {{cssxref("transform")}}. Wir möchten, dass das Popover ein- und ausfärbt, während es sich in horizontaler Richtung vergrößert und verkleinert. Wir setzen einen Anfangszustand für diese Eigenschaften im Standard-verborgenen Zustand des Popover-Elements (ausgewählt über `[popover]`) und einen Endzustand im offenen Zustand des Popovers (ausgewählt über die {{cssxref(":popover-open")}}-Pseudoklasse). Wir setzen dann eine {{cssxref("transition")}}-Eigenschaft, um zwischen den beiden zu animieren.

Da das animierte Element beim Anzeigen in die {{Glossary("Top_layer", "obere Schicht")}} befördert und beim Verbergen aus der oberen Schicht entfernt wird — was auch bedeutet, dass sein verborgener Zustand `display: none` darauf eingestellt hat — werden die folgenden Eigenschaften zur Liste der übergangenen Elemente hinzugefügt, um die Animation in beiden Richtungen zu ermöglichen. In beiden Fällen wird `transition-behavior: allow-discrete` in der Kurzschreibweise gesetzt, um diskrete Animationen zu ermöglichen.

- `display`: Erforderlich, damit das animierte Element während sowohl der Eingangs- als auch der Ausgangsanimation sichtbar ist (auf `display: block` gesetzt). Ohne dies wäre die Ausgangsanimation nicht sichtbar; im Wesentlichen würde das Popover einfach verschwinden.
- {{cssxref("overlay")}}: Erforderlich, um sicherzustellen, dass die Entfernung des Elements aus der obersten Ebene aufgeschoben wird, bis die Animation abgeschlossen ist. Dies macht für grundlegende Animationen wie diese keinen großen Unterschied, aber in komplexeren Fällen kann das Fehlen dieser Maßnahme dazu führen, dass das Element zu schnell aus dem Overlay entfernt wird, sodass die Animation nicht reibungslos oder effektiv ist.

Zusätzlich wird ein Anfangszustand für die Animation innerhalb der {{cssxref("@starting-style")}}-At-Regel festgelegt. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden Übergänge bei den ersten Stilaktualisierungen der Elemente oder beim Wechsel des `display`-Typs von `none` zu einem anderen Typ nicht ausgelöst. `@starting-style` ermöglicht es Ihnen, dieses Standardverhalten auf kontrollierte Weise zu überschreiben. Ohne dies würde die Eingangsanimation nicht stattfinden, und das Popover würde einfach erscheinen.

#### Ergebnis

Der Code rendert wie folgt:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popover jedes Mal von `display: none` zu `display: block` wechseln, wenn sie angezeigt werden, wechselt das Popover bei jedem Auftreten des Eingangstransitions von seinen `@starting-style`-Stilen zu seinen `[popover]:popover-open`-Stilen. Wenn das Popover schließt, wechselt es von seinem `[popover]:popover-open`-Zustand zum Standardzustand `[popover]`.
>
> Es ist möglich, dass der Stilübergang beim Eintritt und Austritt in solchen Fällen unterschiedlich ist. Siehe unser [Demonstration der Verwendung von Anfangsstilen](/de/docs/Web/CSS/Reference/At-rules/@starting-style#demonstration_of_when_starting_styles_are_used)-Beispiel als Beweis dafür.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("overlay")}}
- {{cssxref("@starting-style")}}
- [CSS-Übergänge](/de/docs/Web/CSS/Guides/Transitions) Modul
- [Vier neue CSS-Funktionen für sanfte Ein- und Ausstiegsanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
