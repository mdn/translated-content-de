---
title: opacity
slug: Web/CSS/opacity
l10n:
  sourceCommit: 46a2eda1ce316d5c2c789104c28bc4fdaee5ab8b
---

{{CSSRef}}

Die **`opacity`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Opazität eines Elements fest. Die Opazität ist das Maß dafür, wie stark Inhalte hinter einem Element verborgen sind, und ist das Gegenteil von Transparenz.

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

  - : Eine {{cssxref("number")}} im Bereich von `0.0` bis `1.0`, einschließlich, oder ein {{cssxref("percentage")}} im Bereich von `0%` bis `100%`, einschließlich, die die Opazität des Kanals darstellt (d. h. den Wert seines Alpha-Kanals). Alle Werte außerhalb des Intervalls werden, obwohl gültig, auf das nächstgelegene Limit im Bereich begrenzt.

    | Wert                                                 | Bedeutung                                                                      |
    | ------------------------------------------------------ | ----------------------------------------------------------------------------- |
    | `0`                                                    | Das Element ist vollständig transparent (d. h. unsichtbar).                   |
    | Eine {{cssxref("number")}}, die zwischen `0` und `1` liegt | Das Element ist durchscheinend (d. h. Inhalte hinter dem Element sind sichtbar). |
    | `1` (Standardwert)                                    | Das Element ist vollständig opak (visuell solide).                             |

## Beschreibung

`opacity` gilt für das gesamte Element, einschließlich seiner Inhalte, auch wenn der Wert nicht von Kindelementen vererbt wird. Daher haben das Element und seine Kinder alle die gleiche Opazität relativ zum Hintergrund des Elements, selbst wenn sie unterschiedliche Opazitäten relativ zueinander haben.

Um nur die Opazität eines Hintergrunds zu ändern, verwenden Sie die {{cssxref("background")}}-Eigenschaft mit einem [Farbwert](/de/docs/Web/CSS/color_value), der einen Alphakanal ermöglicht. Zum Beispiel:

```css
background: rgb(0 0 0 / 40%);
```

Wenn der `opacity`-Wert auf `0` gesetzt ist, erscheinen das Element und alle seine Kinder unsichtbar, aber sie sind immer noch Teil des DOM. Das bedeutet, dass sie weiterhin [Zeigerereignisse](/de/docs/Web/API/Pointer_events) registrieren und, wenn die Elemente in einer Tabulatorreihenfolge sind, den Fokus erhalten. Für eine gute Benutzerfreundlichkeit sollten solche Elemente sichtbar gemacht werden, wenn sie Benutzerinteraktionen erhalten, oder verwenden Sie die CSS-Eigenschaft [`pointer-events`](/de/docs/Web/CSS/pointer-events), um Zeigerereignisse zu deaktivieren und das Element aus der Tabulatorreihenfolge zu entfernen, indem Sie sie mit dem `disabled`-Attribut deaktivieren oder [`tab-index="-1"`](/de/docs/Web/HTML/Global_attributes/tabindex) für nicht formularbezogene interaktive Elemente setzen.

Die Verwendung von `opacity` mit einem anderen Wert als `1` platziert das Element in einem neuen [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context).

Alleinige Verwendung von Opazität sollte nicht zur Bereitstellung von Informationen für Screenreader eingesetzt werden. Verwenden Sie das HTML-Attribut [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden), die CSS-Eigenschaften [`visibility`](/de/docs/Web/CSS/visibility) oder [`display`](/de/docs/Web/CSS/display) Stil-Eigenschaften. Vermeiden Sie es, das [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) Attribut zu verwenden, aber wenn das Element mit Opazität versteckt wird, dann verstecken Sie es auch vor Screenreadern.

### Übergang der Opazität

Beim [Übergang](/de/docs/Web/CSS/CSS_transitions) der Opazität von Elementen, die der Seite hinzugefügt werden, wenn Inhalte zuvor mit [`visibility: hidden`](/de/docs/Web/CSS/visibility#hidden), [`display: none`](/de/docs/Web/CSS/display#none), oder [`content-visibility: hidden`](/de/docs/Web/CSS/content-visibility#hidden) versteckt waren, müssen sowohl ein [`@starting-style`](/de/docs/Web/CSS/@starting-style) als auch [`transition-behaviour: allow-discrete`](/de/docs/Web/CSS/transition-behavior#allow-discrete) einbezogen werden:

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

Um Übergänge des ersten Stils zu ermöglichen, werden `@starting-style`-Regeln benötigt. Im obigen Code stellt `opacity: 0` im `@starting-style` einen Startpunkt für den Übergang bereit, wenn das Element seine anfängliche Stilaktualisierung erhält. Für weitere Details siehe [`@starting-style`](/de/docs/Web/CSS/@starting-style).

Das Setzen von `transition-behavior: allow-discrete` ist erforderlich, um zu `display: none` überzugehen. Siehe die [`transition-behavior`](/de/docs/Web/CSS/transition-behavior) Eigenschaft für weitere Details.

## Barrierefreiheit

Wenn die Textopazität angepasst wird, ist es wichtig sicherzustellen, dass das Kontrastverhältnis zwischen der Farbe des Textes und dem Hintergrund, über dem der Text platziert ist, hoch genug ist, damit Menschen mit Sehbehinderungen den Inhalt der Seite lesen können.

Das Farbkontrastverhältnis wird durch den Vergleich der Helligkeit der opazitätsangepassten Text- und Hintergrundfarbenwerte bestimmt. Um die aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4.5:1 für Textinhalte und 3:1 für größeren Text wie Überschriften erforderlich. Großer Text wird als 18.66px und [fett](/de/docs/Web/CSS/font-weight) oder größer, oder 24px oder größer definiert.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis der WCAG, Erklärung von Leitlinie 1.4](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

Verschiedene Betriebssysteme bieten eine Präferenz zur Reduzierung der Transparenz. Um die `opacity` basierend auf den Transparenzpräferenzen des Betriebssystems des Benutzers einzustellen, verwenden Sie die [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency) Media Query.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Opazität einstellen

Das folgende Beispiel zeigt, wie die `opacity`-Eigenschaft die Opazität des gesamten Elements und des Inhalts ändert, wodurch der Text sehr schwer lesbar wird.

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

### Opazität beim Hover einstellen

Im folgenden Beispiel wird die Opazität beim Hover geändert, so dass das gestreifte Hintergrundbild des übergeordneten Elements durch das Bild hindurch sichtbar wird.

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

### Stil basierend auf Benutzerpräferenzen

Um Elemente basierend auf den Transparenzpräferenzen des Betriebssystems des Benutzers zu stylen, verwenden Sie die [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency) Media Query. Das folgende Beispiel zeigt, wie die Media Query `prefers-color-scheme` verwendet wird, um die gewünschte `opacity` basierend auf den Benutzerpräferenzen festzulegen.

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
- [CSS color](/de/docs/Web/CSS/CSS_colors) Modul
