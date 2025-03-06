---
title: opacity
slug: Web/CSS/opacity
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{CSSRef}}

Die **`opacity`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt die Deckkraft eines Elements fest. Deckkraft ist das Maß, in dem der Inhalt hinter einem Element verborgen wird und ist das Gegenteil von Transparenz.

{{EmbedInteractiveExample("pages/css/opacity.html")}}

## Syntax

```css
opacity: 0.9;
opacity: 90%;

/* Global values */
opacity: inherit;
opacity: initial;
opacity: revert;
opacity: revert-layer;
opacity: unset;
```

### Werte

- `<alpha-value>`

  - : Eine {{cssxref("number")}} im Bereich von `0.0` bis `1.0`, einschließlich, oder ein {{cssxref("percentage")}} im Bereich von `0%` bis `100%`, einschließlich, die die Deckkraft des Kanals darstellt (das heißt, den Wert seines Alpha-Kanals). Jeder Wert außerhalb des Intervalls, obwohl gültig, wird auf den nächsten Grenzwert im Bereich begrenzt.

    | Wert                                            | Bedeutung                                                                       |
    | ----------------------------------------------- | ------------------------------------------------------------------------------- |
    | `0`                                             | Das Element ist vollständig transparent (d.h., unsichtbar).                     |
    | Jede {{cssxref("number")}} zwischen `0` und `1` | Das Element ist transluzent (d.h., der Inhalt hinter dem Element ist sichtbar). |
    | `1` (Standardwert)                              | Das Element ist vollständig opak (visuell fest).                                |

## Beschreibung

`opacity` gilt für das gesamte Element, einschließlich seiner Inhalte, auch wenn der Wert von den Kindelementen nicht geerbt wird. Daher haben das Element und seine Kinder alle die gleiche Deckkraft relativ zum Hintergrund des Elements, selbst wenn sie unterschiedliche Deckkräfte relativ zueinander haben.

Um nur die Deckkraft eines Hintergrunds zu ändern, verwenden Sie die {{cssxref("background")}}-Eigenschaft mit einem [Farbwert](/de/docs/Web/CSS/color_value), der einen Alpha-Kanal zulässt. Zum Beispiel:

```css
background: rgb(0 0 0 / 40%);
```

Wenn der `opacity`-Wert auf `0` gesetzt ist, erscheinen das Element und all seine Kinder unsichtbar, sind jedoch weiterhin Teil des DOM. Das bedeutet, dass sie weiterhin [Pointer-Ereignisse](/de/docs/Web/API/Pointer_events) registrieren und, wenn die Elemente in einer Tab-Reihenfolge sind, sie erhalten Fokus. Für gute Benutzerfreundlichkeit sorgen Sie dafür, dass solche Elemente sichtbar werden, wenn sie Benutzerinteraktionen erhalten, oder verwenden Sie die CSS-Eigenschaft [`pointer-events`](/de/docs/Web/CSS/pointer-events), um Zeigerereignisse zu deaktivieren, und entfernen Sie das Element aus der Tab-Reihenfolge, indem Sie das `disabled`-Attribut deaktivieren oder [`tab-index="-1"`](/de/docs/Web/HTML/Global_attributes/tabindex) für nicht formularbezogene interaktive Elemente setzen.

Das Verwenden von `opacity` mit einem anderen Wert als `1` platziert das Element in einem neuen [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context).

Deckkraft allein sollte nicht verwendet werden, um Informationen für Screenreader bereitzustellen. Verwenden Sie das HTML-Attribut [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden), CSS-Eigenschaften wie [`visibility`](/de/docs/Web/CSS/visibility) oder [`display`](/de/docs/Web/CSS/display). Es ist am besten, das Attribut [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) zu vermeiden, aber wenn das Element mit Deckkraft ausgeblendet wird, dann verstecken Sie es ebenfalls vor Screenreadern.

### Übergang der Deckkraft

Beim [Übergang](/de/docs/Web/CSS/CSS_transitions) der Deckkraft von Elementen, die zur Seite hinzugefügt werden, wenn der Inhalt zuvor mit [`visibility: hidden`](/de/docs/Web/CSS/visibility#hidden), [`display: none`](/de/docs/Web/CSS/display#none) oder [`content-visibility: hidden`](/de/docs/Web/CSS/content-visibility#hidden) verborgen war, müssen sowohl ein [`@starting-style`](/de/docs/Web/CSS/@starting-style) als auch [`transition-behaviour: allow-discrete`](/de/docs/Web/CSS/transition-behavior#allow-discrete) einbezogen werden:

```css
.card {
  transition:
    opacity 5s,
    display 5s;
  background-color: orange;

  transition-behavior: allow-discrete;
  @starting-style {
    opacity: 0;
  }
}

.card.hidden {
  display: none;
  opacity: 0;
}
```

Um Übergänge des ersten Stils zu ermöglichen, sind `@starting-style`-Regeln erforderlich. Im obigen Code stellt das Setzen von `opacity: 0` in `@starting-style` einen Ausgangspunkt für den Übergang dar, wenn das Element sein initiales Stil-Update erhält. Für weitere Details siehe [`@starting-style`](/de/docs/Web/CSS/@starting-style).

`transition-behavior: allow-discrete` muss gesetzt sein, um auf `display: none` zu wechseln. Weitere Details finden Sie in der [`transition-behavior`](/de/docs/Web/CSS/transition-behavior) Eigenschaft.

## Barrierefreiheit

Wenn die Deckkraft von Text angepasst wird, ist es wichtig sicherzustellen, dass das Kontrastverhältnis zwischen der Farbe des Textes und dem Hintergrund, über den der Text platziert ist, hoch genug ist, damit Menschen, die unter Sehbehinderungen leiden, den Inhalt der Seite lesen können.

Das Farbkontrastverhältnis wird durch den Vergleich der Leuchtkraft der deckkraftangepassten Text- und Hintergrundfarbwerte bestimmt. Um den aktuellen [Richtlinien für barrierefreie Webinhalte (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu entsprechen, ist ein Verhältnis von 4,5:1 für Textinhalte und 3:1 für größere Texte wie Überschriften erforderlich. Großer Text ist als 18,66 px und [fett](/de/docs/Web/CSS/font-weight) oder größer oder 24 px oder größer definiert.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis von WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C Verständnis zu WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

Verschiedene Betriebssysteme bieten eine Präferenz zur Reduzierung der Transparenz. Um die `opacity` basierend auf den Transparenzeinstellungen des Betriebssystems des Benutzers festzulegen, verwenden Sie die [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency) Media Query.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deckkraft einstellen

Das folgende Beispiel zeigt, wie die `opacity`-Eigenschaft die Deckkraft des gesamten Elements und des Inhalts ändert, wodurch der Text sehr schwer lesbar wird.

#### HTML

```html
<div class="light">You can barely see this.</div>
<div class="medium">This is easier to see.</div>
<div class="heavy">This is very easy to see.</div>
```

#### CSS

```css
div {
  background-color: yellow;
  font-weight: bold;
  font-size: 130%;
}
.light {
  opacity: 0.2; /* Barely see the text over the background */
}
.medium {
  opacity: 0.5; /* See the text more clearly over the background */
}
.heavy {
  opacity: 0.9; /* See the text very clearly over the background */
}
```

#### Ergebnis

{{EmbedLiveSample('Setting_opacity', '640', '105')}}

### Deckkraft beim Hover einstellen

Im folgenden Beispiel wird die Deckkraft beim Hover geändert, sodass das gestreifte Hintergrundbild des Elternelements durch das Bild hindurch sichtbar wird.

#### HTML

```html
<div class="wrapper">
  <img
    src="//interactive-examples.mdn.mozilla.net/media/dino.svg"
    alt="MDN Dino"
    width="128"
    height="146"
    class="opacity" />
</div>
```

#### CSS

```css
img.opacity {
  opacity: 1;
}

img.opacity:hover {
  opacity: 0.5;
}

.wrapper {
  width: 200px;
  height: 160px;
  background-color: #f03cc3;
  background-image: linear-gradient(
    90deg,
    transparent 50%,
    rgb(255 255 255 / 50%) 50%
  );
  background-size: 20px 20px;
}
```

#### Ergebnis

{{EmbedLiveSample('Setting_opacity_on_hover', '150', '200')}}

### Styling basierend auf den Benutzerpräferenzen

Um Elemente basierend auf den Transparenzeinstellungen des Betriebssystems des Benutzers zu stylen, verwenden Sie die [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency) Media Query. Das folgende Beispiel zeigt, wie die Media Query `prefers-color-scheme` verwendet wird, um die gewünschte `opacity` basierend auf den Benutzerpräferenzen zu spezifizieren.

```css
.element {
  opacity: 0.5;
}

@media (prefers-reduced-transparency) {
  .element {
    opacity: 1;
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency) Media Query
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
- SVG {{SVGAttr("opacity")}} Attribut
