---
title: opacity
slug: Web/CSS/opacity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Die **`opacity`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Opazität eines Elements fest. Opazität ist das Maß, in dem der Inhalt hinter einem Element verborgen ist, und ist das Gegenteil von Transparenz.

{{InteractiveExample("CSS Demo: opacity")}}

```css interactive-example-choice
opacity: 0;
```

```css interactive-example-choice
opacity: 0.33;
```

```css interactive-example-choice
opacity: 1;
```

```html interactive-example
<section class="default-example" id="default-example">
  <p id="example-element">
    London. Michaelmas term lately over, and the Lord Chancellor sitting in
    Lincoln's Inn Hall. Implacable November weather. As much mud in the streets
    as if the waters had but newly retired from the face of the earth, and it
    would not be wonderful to meet a Megalosaurus, forty feet long or so,
    waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

```css interactive-example
#example-element {
  background-color: #963770;
  color: white;
  padding: 1em;
}
```

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

  - : Ein {{cssxref("number")}} im Bereich von `0.0` bis `1.0`, einschließlich, oder ein {{cssxref("percentage")}} im Bereich von `0%` bis `100%`, einschließlich, der die Opazität des Kanals darstellt (das heißt, der Wert seines Alpha-Kanals). Jeder außerhalb des Intervalls liegende Wert, obwohl gültig, wird auf das nächstliegende Limit im Bereich begrenzt.

    | Wert                                                    | Bedeutung                                                                               |
    | ------------------------------------------------------- | --------------------------------------------------------------------------------------- |
    | `0`                                                     | Das Element ist vollständig transparent (das heißt, unsichtbar).                        |
    | Jeder {{cssxref("number")}} strikt zwischen `0` und `1` | Das Element ist durchscheinend (das heißt, der Inhalt hinter dem Element ist sichtbar). |
    | `1` (Standardwert)                                      | Das Element ist vollständig opak (visuell fest).                                        |

## Beschreibung

`opacity` bezieht sich auf das gesamte Element, einschließlich seines Inhalts, auch wenn der Wert nicht von Kindelementen geerbt wird. Somit haben das Element und seine Kinder alle die gleiche Opazität relativ zum Hintergrund des Elements, auch wenn sie unterschiedliche Opazitäten zueinander haben.

Um nur die Opazität eines Hintergrunds zu ändern, verwenden Sie die {{cssxref("background")}} Eigenschaft mit einem [Farbwert](/de/docs/Web/CSS/color_value), der einen Alpha-Kanal zulässt. Zum Beispiel:

```css
background: rgb(0 0 0 / 40%);
```

Wenn der `opacity` Wert auf `0` gesetzt ist, erscheinen das Element und alle seine Kinder unsichtbar, aber sie sind immer noch Teil des DOM. Das bedeutet, dass sie immer noch [Pointer-Ereignisse](/de/docs/Web/API/Pointer_events) registrieren und, wenn die Elemente in einer Tab-Reihenfolge sind, fokussiert werden. Aus Gründen der Benutzerfreundlichkeit stellen Sie sicher, dass solche Elemente sichtbar werden, wenn sie Benutzerinteraktionen erhalten, oder verwenden Sie die CSS-Eigenschaft [`pointer-events`](/de/docs/Web/CSS/pointer-events), um Pointer-Ereignisse zu deaktivieren und das Element aus der Tab-Reihenfolge zu entfernen, indem Sie das `disabled` Attribut deaktivieren oder [`tab-index="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) für nicht formularbezogene interaktive Elemente setzen.

Die Verwendung von `opacity` mit einem anderen Wert als `1` platziert das Element in einem neuen [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context).

Opazität allein sollte nicht verwendet werden, um Bildschirmlesegeräten Informationen bereitzustellen. Verwenden Sie das HTML [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden) Attribut, die CSS-Eigenschaften [`visibility`](/de/docs/Web/CSS/visibility) oder [`display`](/de/docs/Web/CSS/display). Es ist am besten, das Attribut [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) zu vermeiden, aber wenn das Element mit Opazität versteckt ist, dann verstecken Sie es auch vor Bildschirmlesegeräten.

### Übergang der Opazität

Beim [Übergang](/de/docs/Web/CSS/CSS_transitions) der Opazität von Elementen, wenn Sie sie zur Seite hinzufügen und der Inhalt zuvor mit [`visibility: hidden`](/de/docs/Web/CSS/visibility#hidden), [`display: none`](/de/docs/Web/CSS/display#none) oder [`content-visibility: hidden`](/de/docs/Web/CSS/content-visibility#hidden) versteckt war, müssen Sie sowohl einen [`@starting-style`](/de/docs/Web/CSS/@starting-style) als auch ein [`transition-behaviour: allow-discrete`](/de/docs/Web/CSS/transition-behavior#allow-discrete) einschließen:

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

Um Übergänge des ersten Stils zu aktivieren, sind `@starting-style` Regeln erforderlich. Im obigen Code bietet das Setzen von `opacity: 0` im `@starting-style` einen Ausgangspunkt für den Übergang, wenn das Element seinen initialen Stil-Update erhält. Für weitere Details siehe [`@starting-style`](/de/docs/Web/CSS/@starting-style).

Das Setzen von `transition-behavior: allow-discrete` ist erforderlich, um zu `display: none` zu wechseln. Weitere Details finden Sie in der [`transition-behavior`](/de/docs/Web/CSS/transition-behavior) Eigenschaft.

## Barrierefreiheit

Wenn die Textopazität angepasst wird, ist es wichtig sicherzustellen, dass das Kontrastverhältnis zwischen der Farbe des Textes und dem Hintergrund, über dem der Text platziert ist, hoch genug ist, damit Menschen mit Sehbeeinträchtigungen den Inhalt der Seite lesen können.

Das Farbkontrastverhältnis wird bestimmt, indem die Leuchtkraft der opazitätsangepassten Text- und Hintergrundfarbenwerte verglichen wird. Um die aktuellen [Richtlinien für barrierefreie Webinhalte (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4,5:1 für Textinhalte und 3:1 für größere Texte wie Überschriften erforderlich. Großer Text wird definiert als 18.66px und [fett](/de/docs/Web/CSS/font-weight) oder größer, oder 24px oder größer.

- [WebAIM: Kontrastprüfer für Farben](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis von WCAG, Erklärung der Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

Verschiedene Betriebssysteme bieten eine Präferenz zur Reduzierung von Transparenz. Um die `opacity` basierend auf den Transparenzeinstellungen des Betriebssystems des Benutzers festzulegen, verwenden Sie die [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency) Medienabfrage.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Opazität

Das folgende Beispiel illustriert, wie die `opacity` Eigenschaft die Opazität des gesamten Elements und des Inhalts ändert und so den Text sehr schwer lesbar macht.

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

### Festlegen der Opazität bei Hover

Im folgenden Beispiel wird die Opazität beim Hover geändert, so dass das gestreifte Hintergrundbild auf dem Elternelement durch das Bild hindurch sichtbar wird.

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

### Styling basierend auf Benutzerpräferenzen

Um Elemente basierend auf den Transparenzpräferenzen des Betriebssystems des Benutzers zu stylen, verwenden Sie die [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency) Medienabfrage. Das folgende Beispiel zeigt, wie die Medienabfrage `prefers-color-scheme` verwendet werden kann, um die gewünschte `opacity` basierend auf den Präferenzen des Benutzers festzulegen.

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
- [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors)
- SVG {{SVGAttr("opacity")}} Attribut
