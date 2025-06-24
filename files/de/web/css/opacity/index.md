---
title: opacity
slug: Web/CSS/opacity
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`opacity`** [CSS](/de/docs/Web/CSS)-Eigenschaft setzt die Opazität eines Elements. Opazität ist das Maß, in dem der Inhalt hinter einem Element verborgen ist, und ist das Gegenteil von Transparenz.

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

  - : Eine {{cssxref("number")}} im Bereich von `0.0` bis `1.0`, einschließlich, oder ein {{cssxref("percentage")}} im Bereich von `0%` bis `100%`, einschließlich, die die Opazität des Kanals (das heißt, den Wert seines Alphakanals) darstellt. Jeder Wert außerhalb des Intervalls, obwohl gültig, wird auf das nächste Limit im Bereich begrenzt.

    | Wert                                                  | Bedeutung                                                                         |
    | ----------------------------------------------------- | --------------------------------------------------------------------------------- |
    | `0`                                                   | Das Element ist vollständig transparent (d.h. unsichtbar).                        |
    | Jede {{cssxref("number")}} exakt zwischen `0` und `1` | Das Element ist durchscheinend (d.h. der Inhalt hinter dem Element ist sichtbar). |
    | `1` (Standardwert)                                    | Das Element ist vollständig undurchsichtig (visuell solide).                      |

## Beschreibung

`opacity` gilt für das gesamte Element, einschließlich seines Inhalts, obwohl der Wert nicht von Kindelementen geerbt wird. Daher haben das Element und seine Kinder alle die gleiche Opazität relativ zum Hintergrund des Elements, auch wenn sie unterschiedliche Opazitäten relativ zueinander haben.

Um nur die Opazität eines Hintergrunds zu ändern, verwenden Sie die {{cssxref("background")}}-Eigenschaft mit einem [Farbwert](/de/docs/Web/CSS/color_value), der einen Alphakanal zulässt. Zum Beispiel:

```css
background: rgb(0 0 0 / 40%);
```

Wenn der `opacity`-Wert auf `0` gesetzt ist, erscheinen das Element und alle seine Kinder unsichtbar, sind aber weiterhin Teil des DOMs. Das bedeutet, dass sie weiterhin [Zeigervorgänge](/de/docs/Web/API/Pointer_events) registrieren und, wenn die Elemente in einer Tab-Reihenfolge sind, sie den Fokus erhalten. Für eine gute Benutzerfreundlichkeit sollten solche Elemente sichtbar gemacht werden, wenn sie Benutzerinteraktionen erhalten, oder verwenden Sie die CSS-[`pointer-events`](/de/docs/Web/CSS/pointer-events)-Eigenschaft, um Zeigervorgänge zu deaktivieren, und nehmen Sie das Element aus der Tab-Reihenfolge, indem Sie es mit dem `disabled`-Attribut deaktivieren oder [`tab-index="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) für nicht formularbezogene interaktive Elemente setzen.

Die Verwendung von `opacity` mit einem anderen Wert als `1` platziert das Element in einem neuen [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context).

Opazität allein sollte nicht verwendet werden, um Informationen für Screenreader bereitzustellen. Verwenden Sie das HTML-[`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden)-Attribut, die CSS-[`visibility`](/de/docs/Web/CSS/visibility)- oder CSS-[`display`](/de/docs/Web/CSS/display)-Eigenschaften. Es ist am besten, das [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)-Attribut zu vermeiden, aber wenn das Element mit Opazität versteckt ist, dann verstecken Sie es auch vor Screenreadern.

### Übergang von Opazität

Beim [Übergang](/de/docs/Web/CSS/CSS_transitions) der Opazität von Elementen, wenn Sie sie der Seite hinzufügen, wenn der Inhalt zuvor mit [`visibility: hidden`](/de/docs/Web/CSS/visibility#hidden), [`display: none`](/de/docs/Web/CSS/display#none) oder [`content-visibility: hidden`](/de/docs/Web/CSS/content-visibility#hidden) versteckt war, müssen Sie sowohl eine [`@starting-style`](/de/docs/Web/CSS/@starting-style) als auch [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior#allow-discrete) einschließen:

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

Um Übergänge im Erst-Stil zu ermöglichen, sind `@starting-style`-Regeln erforderlich. Im obigen Code bietet das Setzen von `opacity: 0` in `@starting-style` einen Ausgangspunkt für den Übergang, wenn das Element sein Initialstil-Update erhält. Für weitere Details siehe [`@starting-style`](/de/docs/Web/CSS/@starting-style).

Das Setzen von `transition-behavior: allow-discrete` ist erforderlich, um zu `display: none` zu wechseln. Siehe die [`transition-behavior`](/de/docs/Web/CSS/transition-behavior)-Eigenschaft für weitere Details.

## Barrierefreiheit

Wenn die Textopazität angepasst wird, ist es wichtig sicherzustellen, dass das Kontrastverhältnis zwischen der Farbe des Textes und dem Hintergrund, über dem der Text platziert ist, hoch genug ist, damit Menschen mit Sehbeeinträchtigungen den Inhalt der Seite lesen können.

Das Farbkontrastverhältnis wird durch den Vergleich der Leuchtkraft der opazitätsangepassten Text- und Hintergrundfarbwerte bestimmt. Um die aktuellen [Richtlinien für Barrierefreiheit im Web-Inhalt (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4,5:1 für Textinhalte und 3:1 für größeren Text wie Überschriften erforderlich. Großer Text wird als 18.66px und [fett](/de/docs/Web/CSS/font-weight) oder größer, oder 24px oder größer definiert.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis von WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C-Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

Verschiedene Betriebssysteme bieten eine Präferenz zur Reduzierung der Transparenz. Um die `opacity` basierend auf den Transparenzeinstellungen des Betriebssystems des Benutzers festzulegen, verwenden Sie die [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency)-Media-Abfrage.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Opazität einstellen

Das folgende Beispiel zeigt, wie die `opacity`-Eigenschaft die Opazität des gesamten Elements und Inhalts ändert und somit den Text sehr schwer lesbar macht.

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

### Opazität bei Hover einstellen

Im folgenden Beispiel wird die Opazität beim Hover geändert, sodass das gestreifte Hintergrundbild des Elternelements durch das Bild hindurch sichtbar wird.

#### HTML

```html
<div class="wrapper">
  <img
    src="/shared-assets/images/examples/dino.svg"
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

### Styling basierend auf Benutzereinstellungen

Um Elemente basierend auf den Transparenzeinstellungen des Betriebssystems des Benutzers zu stylen, verwenden Sie die [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency)-Media-Abfrage. Das folgende Beispiel zeigt, wie Sie die `prefers-color-scheme`-Media-Abfrage verwenden, um die gewünschte `opacity` basierend auf den Präferenzen des Benutzers festzulegen.

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

- [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency)-Media-Abfrage
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors)-Modul
- SVG-{{SVGAttr("opacity")}}-Attribut
