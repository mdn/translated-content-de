---
title: Übergangsverhalten
slug: Web/CSS/transition-behavior
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`transition-behavior`**-Eigenschaft von [CSS](/de/docs/Web/CSS) gibt an, ob Übergänge für Eigenschaften gestartet werden, deren Animationsverhalten [diskret](/de/docs/Web/CSS/CSS_animated_properties#discrete) ist.

## Syntax

```css
/* Schlüsselwortwerte */
transition-behavior: allow-discrete;
transition-behavior: normal;

/* Globale Werte */
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
  - : Übergänge werden für diskret animierte Eigenschaften des Elements _nicht_ gestartet.

## Beschreibung

Die `transition-behavior`-Eigenschaft ist nur relevant, wenn sie in Verbindung mit anderen Übergangseigenschaften, insbesondere {{cssxref("transition-property")}} und {{cssxref("transition-duration")}}, verwendet wird, da kein Übergang erfolgt, wenn keine Eigenschaften über eine von null abweichende Zeitspanne animiert werden.

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

Der Wert `transition-behavior` kann als Teil einer Kurzform von {{cssxref("transition")}}-Deklaration enthalten sein. Wenn es in der Kurzform enthalten ist und auf alle Eigenschaften angewendet wird oder als Standard verwendet wird, hat der Wert `allow-discrete` keine Auswirkung auf reguläre animierbare Eigenschaften. Folgender CSS-Code ist gleichbedeutend mit den obigen Langformen:

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

Im obigen Beispiel ist die `transition`-Eigenschaft zweimal enthalten. Die erste Instanz enthält den Wert `allow-discrete` nicht — dies sorgt für browserübergreifende Unterstützung und stellt sicher, dass die anderen Eigenschaften der Karte in Browsern, die `transition-behavior` nicht unterstützen, weiterhin Übergänge haben.

### Diskretes Animationsverhalten

Diskret-animierte Eigenschaften wechseln in der Regel 50 % der Animationszeit zwischen zwei Werten.

Es gibt jedoch eine Ausnahme, wenn eine Animation zu oder von `display: none` oder `content-visibility: hidden` erfolgt. In diesem Fall wird der Wechsel zwischen den beiden Werten so durchgeführt, dass der übergangene Inhalt während der gesamten Animationsdauer angezeigt wird.

Zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wechselt der Wert zu `block` bei `0%` der Animationsdauer, sodass er die ganze Zeit sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wechselt der Wert zu `none` bei `100%` der Animationsdauer, sodass er die ganze Zeit sichtbar ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Überblenden einer Popover

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) animiert, während es von versteckt zu sichtbar und wieder zurück wechselt.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover mit dem [popover](/de/docs/Web/HTML/Global_attributes/popover)-Attribut deklariert ist, und ein {{htmlelement("button")}}-Element, das als Anzeigesteuerung des Popover durch sein [popovertarget](/de/docs/Web/HTML/Element/button#popovertarget)-Attribut spezifiziert ist.

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
  /* Endzustand der Austrittsanimation */
  opacity: 0;
  transform: scaleX(0);

  transition-property: opacity, transform, overlay, display;
  transition-duration: 0.7s;
  transition-behavior: allow-discrete;
  /* Bei Verwendung der Kurzform der Übergangseigenschaft könnten wir schreiben:
    transition: 
      opacity 0.7s,
      transform 0.7s,
      overlay 0.7s allow-discrete,
      display 0.7s allow-discrete;

    oder sogar:
    transition: all 0.7s allow-discrete;
  */
}

/* Muss nach der vorherigen Regel [popover]:popover-open eingefügt werden, um wirksam zu sein,
   da die Spezifität identisch ist */
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}
```

Die beiden Eigenschaften, die wir animieren wollen, sind [`opacity`](/de/docs/Web/CSS/opacity) und [`transform`](/de/docs/Web/CSS/transform): Wir möchten, dass das Popover ein- und ausgeblendet wird, während es in horizontaler Richtung wächst und schrumpft. Wir setzen einen Anfangszustand für diese Eigenschaften im versteckten Standardzustand des Popover-Elements (ausgewählt über `[popover]`) und einen Endzustand im offenen Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/:popover-open)-Pseudo-Klasse). Anschließend setzen wir eine [`transition`](/de/docs/Web/CSS/transition)-Eigenschaft, um zwischen den beiden zu animieren.

Weil das animierte Element in die [oberste Ebene](/de/docs/Glossary/Top_layer) befördert wird, wenn es angezeigt und aus der obersten Ebene entfernt wird, wenn es verborgen ist — was auch bedeutet, dass sein verborgener Zustand auf [`display: none`](/de/docs/Web/CSS/display) gesetzt wird — werden die folgenden Eigenschaften zur Liste der übergangenen Elemente hinzugefügt, um die Animation in beiden Richtungen zu ermöglichen. In beiden Fällen wird `transition-behavior: allow-discrete` in der Kurzform gesetzt, um diskrete Animation zu ermöglichen.

- `display`: Erforderlich, damit das animierte Element (auf `display: block` gesetzt) während sowohl der Ein- als auch der Austrittsanimation sichtbar ist. Ohne dies wäre die Austrittsanimation nicht sichtbar; tatsächlich würde das Popover einfach verschwinden.
- [`overlay`](/de/docs/Web/CSS/overlay): Erforderlich, um sicherzustellen, dass das Entfernen des Elements aus der obersten Ebene verzögert wird, bis die Animation abgeschlossen ist. Dies macht keinen großen Unterschied bei einfachen Animationen wie dieser, aber in komplexeren Fällen kann das Fehlen zu einem zu schnellen Entfernen des Elements aus dem Overlay führen, was bedeutet, dass die Animation nicht fließend oder effektiv ist.

Zusätzlich wird ein Anfangszustand für die Animation innerhalb der [`@starting-style`](/de/docs/Web/CSS/@starting-style) At-Regel festgelegt. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden Übergänge bei den ersten Stilaktualisierungen von Elementen oder wenn sich der `display`-Typ von `none` auf einen anderen Typ ändert, nicht ausgelöst. `@starting-style` ermöglicht es Ihnen, diesen Standard auf eine spezifische und kontrollierte Weise zu überschreiben. Ohne dies würde die Einstiegstransition nicht stattfinden und das Popover würde einfach erscheinen.

#### Ergebnis

Der Code wird folgendermaßen gerendert:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers bei jedem Anzeigen von `display: none` zu `display: block` wechseln, wechselt das Popover bei jedem Auftreten des Einstiegstransitions von seinen `@starting-style`-Stilen zu seinen `[popover]:popover-open`-Stilen. Wenn das Popover schließt, wechselt es von seinem `[popover]:popover-open`-Zustand zum Standardzustand `[popover]`.
>
> Es ist möglich, dass der Stilübergang beim Ein- und Austritt in solchen Fällen unterschiedlich ist. Sehen Sie sich unser [Demonstration of when starting styles are used](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used)-Beispiel für einen Beweis dessen an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`overlay`](/de/docs/Web/CSS/overlay)
- [`@starting-style`](/de/docs/Web/CSS/@starting-style)
- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions)-Modul
- [Vier neue CSS-Funktionen für reibungslose Ein- und Austrittsanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
