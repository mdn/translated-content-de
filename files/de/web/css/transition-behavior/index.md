---
title: transition-behavior
slug: Web/CSS/transition-behavior
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`transition-behavior`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, ob Übergänge für Eigenschaften, deren Animationsverhalten [diskret](/de/docs/Web/CSS/CSS_animated_properties#discrete) ist, gestartet werden.

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
  - : Übergänge werden für diskret animierte Eigenschaften auf dem Element gestartet.
- `normal`
  - : Übergänge werden _nicht_ für diskret animierte Eigenschaften auf dem Element gestartet.

## Beschreibung

Die Eigenschaft `transition-behavior` ist nur relevant, wenn sie in Verbindung mit anderen Übergangseigenschaften verwendet wird, insbesondere {{cssxref("transition-property")}} und {{cssxref("transition-duration")}}, da kein Übergang erfolgt, wenn keine Eigenschaften über eine Zeitdauer ungleich Null animiert werden.

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

Der Wert `transition-behavior` kann als Teil einer Kurzform {{cssxref("transition")}} Deklaration enthalten sein. Wenn er in der Kurzform enthalten ist, hat der Wert `allow-discrete` keine Auswirkung auf regulär animierbare Eigenschaften, wenn für alle Eigenschaften verwendet oder auf sie zurückgegriffen wird. Das folgende CSS entspricht den oben genannten Langformdeklarationen:

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

Im obigen Code-Schnipsel wird die `transition` Eigenschaft zweimal angegeben. Die erste Instanz enthält den Wert `allow-discrete` nicht — dies sorgt für Unterstützung in verschiedenen Browsern, indem sichergestellt wird, dass die anderen Eigenschaften der Karte immer noch in Browsern übergehen, die `transition-behavior` nicht unterstützen.

### Diskretes Animationsverhalten

Diskret animierte Eigenschaften wechseln in der Regel zwischen zwei Werten 50% der Zeit während der Animation zwischen den beiden.

Es gibt jedoch eine Ausnahme, und zwar beim Animieren von oder zu `display: none` oder `content-visibility: hidden`. In diesem Fall wechselt der Browser zwischen den beiden Werten, sodass der Übergangsinhalt während der gesamten Animationsdauer angezeigt wird.

Zum Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wird der Wert bei `0%` der Animationsdauer auf `block` umgeschaltet, sodass er durchgehend sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none`, wird der Wert bei `100%` der Animationsdauer auf `none` umgeschaltet, sodass er durchgehend sichtbar ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Übergang eines Popovers

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) animiert, während es von verborgen zu sichtbar und wieder zurückschaltet, wenn eine [Übergangsanimation](/de/docs/Web/CSS/CSS_transitions) stattfindet.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover mit dem [popover](/de/docs/Web/HTML/Global_attributes/popover)-Attribut deklariert ist, und ein {{htmlelement("button")}}-Element, das als Anzeige-Steuerung des Popovers über sein [popovertarget](/de/docs/Web/HTML/Element/button#popovertarget)-Attribut bezeichnet wird.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

```css hidden
html {
  font-family: Arial, Helvetica, sans-serif;
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

Die beiden Eigenschaften, die wir animieren möchten, sind [`opacity`](/de/docs/Web/CSS/opacity) und [`transform`](/de/docs/Web/CSS/transform): Wir möchten, dass das Popover ein- und ausgeblendet wird, während es sich in horizontaler Richtung vergrößert und verkleinert. Wir setzen einen Anfangszustand für diese Eigenschaften im Standardzustand des verborgenen Popovers (ausgewählt über `[popover]`) und einen Endzustand im geöffneten Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/:popover-open)-Pseudo-Klasse). Anschließend setzen wir eine [`transition`](/de/docs/Web/CSS/transition)-Eigenschaft, um zwischen den beiden zu animieren.

Da das animierte Element in die [oberste Ebene](/de/docs/Glossary/Top_layer) verschoben wird, wenn es angezeigt wird und aus dieser entfernt wird, wenn es verborgen ist — was auch bedeutet, dass im verborgenen Zustand [`display: none`](/de/docs/Web/CSS/display) auf ihm gesetzt ist — werden die folgenden Eigenschaften der Liste der übergehenden Elemente hinzugefügt, um die Animation in beiden Richtungen zu realisieren. In beiden Fällen wird `transition-behavior: allow-discrete` in der Kurzform gesetzt, um diskrete Animationen zu ermöglichen.

- `display`: Erforderlich, damit das animierte Element während beider Animationen sichtbar ist (auf `display: block` gesetzt). Ohne dies wäre die Ausgangsanimation nicht sichtbar; effektiv würde das Popover einfach verschwinden.
- [`overlay`](/de/docs/Web/CSS/overlay): Erforderlich, um sicherzustellen, dass die Entfernung des Elements aus der oberen Ebene verschoben wird, bis die Animation abgeschlossen ist. Dies macht bei einfachen Animationen wie dieser keinen großen Unterschied, aber in komplexeren Fällen kann es dazu führen, dass das Element zu schnell aus dem Overlay entfernt wird, was bedeutet, dass die Animation nicht glatt oder effektiv ist.

Darüber hinaus wird ein Anfangszustand der Animation innerhalb der [`@starting-style`](/de/docs/Web/CSS/@starting-style)-Regel festgelegt. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden Übergänge nicht bei den ersten Stilaktualisierungen von Elementen ausgelöst oder wenn der `display`-Typ von `none` in einen anderen Typ geändert wird. `@starting-style` ermöglicht es Ihnen, diesen Standard in einer spezifischen, kontrollierten Weise zu überschreiben. Ohne dies würde die Eintrittsanimation nicht stattfinden und das Popover einfach erscheinen.

#### Ergebnis

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers bei jeder Anzeige vom `display: none` zu `display: block` wechseln, wechselt das Popover jedes Mal, wenn die Eintrittsanimation stattfindet, von seinen `@starting-style`-Stilen zu seinen `[popover]:popover-open`-Stilen. Wenn das Popover schließt, wechselt es von seinem `[popover]:popover-open`-Zustand zum Standardzustand `[popover]`.
>
> Es ist möglich, dass der Stilübergang beim Eintritt und Austritt in solchen Fällen unterschiedlich ist. Sehen Sie sich unser [Beispiel zur Demonstration, wann Anfangsstile verwendet werden](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) an, um einen Beweis dafür zu erhalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`overlay`](/de/docs/Web/CSS/overlay)
- [`@starting-style`](/de/docs/Web/CSS/@starting-style)
- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) Modul
- [Vier neue CSS-Funktionen für sanfte Ein- und Austrittsanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
