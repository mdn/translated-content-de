---
title: opacity
slug: Web/CSS/opacity
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{CSSRef}}

Die **`opacity`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt die Deckkraft eines Elements fest. Opazität ist das Maß, in dem der Inhalt hinter einem Element verborgen ist, und ist das Gegenteil von Transparenz.

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

  - : Eine {{cssxref("number")}} im Bereich von `0.0` bis `1.0`, einschließlich, oder eine {{cssxref("percentage")}} im Bereich von `0%` bis `100%`, einschließlich, die die Deckkraft des Kanals darstellt (das heißt, den Wert seines Alphakanals). Jeder Wert außerhalb des Intervalls, obwohl gültig, wird auf das nächstgelegene Limit im Bereich begrenzt.

    | Wert                                            | Bedeutung                                                                         |
    | ----------------------------------------------- | --------------------------------------------------------------------------------- |
    | `0`                                             | Das Element ist vollständig transparent (d.h. unsichtbar).                        |
    | Jede {{cssxref("number")}} zwischen `0` und `1` | Das Element ist durchscheinend (d.h. der Inhalt hinter dem Element ist sichtbar). |
    | `1` (Standardwert)                              | Das Element ist vollständig undurchsichtig (visuell fest).                        |

## Beschreibung

`opacity` gilt für das gesamte Element, einschließlich seines Inhalts, auch wenn der Wert nicht von Kindelementen geerbt wird. Daher haben das Element und seine Kinder alle die gleiche Opazität relativ zum Hintergrund des Elements, auch wenn sie unterschiedliche Opazitäten relativ zueinander haben.

Um nur die Deckkraft eines Hintergrunds zu ändern, verwenden Sie die {{cssxref("background")}}-Eigenschaft mit einem [Farbwert](/de/docs/Web/CSS/color_value), der einen Alpha-Kanal ermöglicht. Zum Beispiel:

```css
background: rgb(0 0 0 / 40%);
```

Wenn der `opacity`-Wert auf `0` gesetzt wird, erscheinen das Element und alle seine Kinder unsichtbar, sind aber dennoch Teil des DOM. Das bedeutet, dass sie weiterhin [Pointer-Ereignisse](/de/docs/Web/API/Pointer_events) registrieren und, wenn die Elemente in einer Tab-Reihenfolge sind, auch den Fokus erlangen. Für eine gute Benutzerfreundlichkeit stellen Sie sicher, dass solche Elemente sichtbar werden, wenn sie Benutzerinteraktionen erhalten oder verwenden Sie die CSS [`pointer-events`](/de/docs/Web/CSS/pointer-events)-Eigenschaft, um Pointer-Ereignisse zu deaktivieren, und nehmen Sie das Element aus der Tab-Reihenfolge heraus, indem Sie es mit dem `disabled`-Attribut deaktivieren oder [`tab-index="-1"`](/de/docs/Web/HTML/Global_attributes/tabindex) für nicht formularbezogene interaktive Elemente setzen.

Die Verwendung von `opacity` mit einem anderen Wert als `1` platziert das Element in einem neuen [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context).

Opazität allein sollte nicht verwendet werden, um Informationen für Screenreader bereitzustellen. Verwenden Sie das HTML-Attribut [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden), CSS [`visibility`](/de/docs/Web/CSS/visibility) oder CSS [`display`](/de/docs/Web/CSS/display)-Stileigenschaften. Es ist am besten, das [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)-Attribut zu vermeiden, aber wenn das Element mit Opazität verborgen ist, dann verstecken Sie es auch vor Screenreadern.

### Übergang von Opazität

Wenn Sie die Opazität von Elementen ändern, indem Sie sie auf der Seite hinzufügen, wenn der Inhalt zuvor mit [`visibility: hidden`](/de/docs/Web/CSS/visibility#hidden), [`display: none`](/de/docs/Web/CSS/display#none) oder [`content-visibility: hidden`](/de/docs/Web/CSS/content-visibility#hidden) verborgen war, müssen Sie sowohl ein [`@starting-style`](/de/docs/Web/CSS/@starting-style) als auch [`transition-behaviour: allow-discrete`](/de/docs/Web/CSS/transition-behavior#allow-discrete) einbeziehen:

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

Um erste Stil-Übergänge zu ermöglichen, werden `@starting-style`-Regeln benötigt. Im obigen Code bietet die Einstellung von `opacity: 0` in `@starting-style` einen Ausgangspunkt für den Übergang, wenn das Element seine erste Stilaktualisierung erhält. Für weitere Details siehe [`@starting-style`](/de/docs/Web/CSS/@starting-style).

Das Setzen von `transition-behaviour: allow-discrete` ist erforderlich, um zu `display: none` überzugehen. Weitere Details finden Sie in der [`transition-behavior`](/de/docs/Web/CSS/transition-behavior)-Eigenschaft.

## Barrierefreiheit

Wenn die Textopazität angepasst wird, ist es wichtig sicherzustellen, dass das Kontrastverhältnis zwischen der Farbe des Textes und dem Hintergrund, auf dem der Text platziert wird, hoch genug ist, damit Menschen mit Sehbehinderungen den Inhalt der Seite lesen können.

Das Farbkontrastverhältnis wird bestimmt, indem die Leuchtdichte der opacity-angepassten Text- und Hintergrundfarbenwerte verglichen wird. Um die aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4.5:1 für Textinhalte und 3:1 für größeren Text wie Überschriften erforderlich. Großer Text wird als 18.66px und [fett](/de/docs/Web/CSS/font-weight) oder größer, oder 24px oder größer definiert.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis von WCAG, Erklärung der Richtlinie 1.4](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

Verschiedene Betriebssysteme bieten eine Präferenz zur Reduzierung von Transparenz. Um die `opacity` basierend auf den Transparenzeinstellungen des Betriebssystems des Benutzers zu setzen, verwenden Sie die [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency) Medienabfrage.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Opazität festlegen

Das folgende Beispiel zeigt, wie die `opacity`-Eigenschaft die Deckkraft des gesamten Elements und des Inhalts ändert und somit den Text sehr schwer lesbar macht.

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

### Opazität beim Hover festlegen

Im folgenden Beispiel wird die Opazität beim Hover geändert, sodass das gestreifte Hintergrundbild des Elternelements durch das Bild hindurch sichtbar wird.

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

### Stilisierung basierend auf Benutzervorlieben

Um Elemente basierend auf den Transparenz-Präferenzen des Betriebssystems des Benutzers zu gestalten, verwenden Sie die [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency)-Medienabfrage. Das folgende Beispiel zeigt, wie die `prefers-color-scheme`-Medienabfrage verwendet wird, um die gewünschte `opacity` basierend auf den Präferenzen des Benutzers festzulegen.

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

- [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency) Medienabfrage
- [CSS-Farbe](/de/docs/Web/CSS/CSS_colors) Modul
- SVG {{SVGAttr("opacity")}} Attribut
