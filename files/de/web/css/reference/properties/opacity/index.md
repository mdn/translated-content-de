---
title: opacity
slug: Web/CSS/Reference/Properties/opacity
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`opacity`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Deckkraft eines Elements fest. Die Deckkraft ist das Maß, in dem der Inhalt hinter einem Element verborgen ist, und ist das Gegenteil von Transparenz.

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

  - : Eine {{cssxref("number")}} im Bereich von `0.0` bis `1.0` einschließlich oder ein {{cssxref("percentage")}} im Bereich von `0%` bis `100%` einschließlich, die die Deckkraft des Kanals repräsentiert (das heißt, der Wert seines Alpha-Kanals). Jeder Wert außerhalb des Intervalls, obwohl gültig, wird auf das nächste Limit im Bereich geklemmt.

    | Wert                                                   | Bedeutung                                                                        |
    | ------------------------------------------------------ | -------------------------------------------------------------------------------- |
    | `0`                                                    | Das Element ist vollständig transparent (d.h. unsichtbar).                      |
    | Jede {{cssxref("number")}} streng zwischen `0` und `1` | Das Element ist durchsichtig (d.h. der Inhalt hinter dem Element ist sichtbar). |
    | `1` (Standardwert)                                     | Das Element ist vollständig undurchsichtig (visuell solide).                     |

## Beschreibung

`opacity` gilt für das gesamte Element, einschließlich seines Inhalts, auch wenn der Wert nicht von Kindelementen geerbt wird. Daher haben das Element und seine Kinder alle die gleiche Deckkraft relativ zum Hintergrund des Elements, auch wenn sie unterschiedliche Deckkräfte zueinander haben.

Um nur die Deckkraft eines Hintergrunds zu ändern, verwenden Sie die {{cssxref("background")}}-Eigenschaft mit einem [Farbwert](/de/docs/Web/CSS/Reference/Values/color_value), der einen Alpha-Kanal zulässt. Zum Beispiel:

```css
background: rgb(0 0 0 / 40%);
```

Wenn der `opacity`-Wert auf `0` gesetzt ist, erscheinen das Element und alle seine Kinder unsichtbar, sind jedoch immer noch Teil des DOM. Das bedeutet, dass sie immer noch [Zeigerereignisse](/de/docs/Web/API/Pointer_events) registrieren und, wenn die Elemente in einer Tab-Reihenfolge sind, sie auch den Fokus erhalten. Um eine gute Benutzerfreundlichkeit zu gewährleisten, stellen Sie sicher, dass solche Elemente sichtbar werden, wenn sie Interaktionen vom Benutzer erhalten, oder verwenden Sie die CSS-`pointer-events`-Eigenschaft, um Zeigerereignisse zu deaktivieren und das Element aus der Tab-Reihenfolge zu entfernen, indem Sie es mit dem `disabled`-Attribut deaktivieren oder [`tab-index="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) für nicht formularbezogene interaktive Elemente festlegen.

Wenn `opacity` mit einem anderen Wert als `1` verwendet wird, wird das Element in einen neuen [Stapelschichtenkontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context) gesetzt.

Allein durch `opacity` sollte keine Information für Bildschirmleseprogramme bereitgestellt werden. Verwenden Sie das HTML-`hidden`-Attribut, CSS-`visibility` oder CSS-`display`-Stileigenschaften. Es ist am besten zu vermeiden, das `aria-hidden`-Attribut zu verwenden, aber wenn das Element mit Deckkraft versteckt ist, verstecken Sie es auch vor Bildschirmleseprogrammen.

### Übergang von Deckkraft

Beim [Übergang](/de/docs/Web/CSS/Guides/Transitions) der Deckkraft von Elementen, die der Seite hinzugefügt werden, wenn der Inhalt zuvor mit [`visibility: hidden`](/de/docs/Web/CSS/Reference/Properties/visibility#hidden), [`display: none`](/de/docs/Web/CSS/Reference/Properties/display#none) oder [`content-visibility: hidden`](/de/docs/Web/CSS/Reference/Properties/content-visibility#hidden) verborgen war, müssen Sie sowohl einen [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style)- als auch [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior#allow-discrete) angeben:

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

Um den ersten Stilübergang zu aktivieren, sind `@starting-style`-Regeln erforderlich. Im obigen Code liefert `opacity: 0` in `@starting-style` einen Ausgangspunkt für den Übergang, wenn das Element sein anfängliches Stilupdate erhält. Weitere Details finden Sie unter [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style).

Das Festlegen von `transition-behavior: allow-discrete` ist erforderlich, um auf `display: none` zu wechseln. Weitere Details finden Sie in der [`transition-behavior`](/de/docs/Web/CSS/Reference/Properties/transition-behavior)-Eigenschaft.

## Barrierefreiheit

Wenn die Textdeckkraft angepasst wird, ist es wichtig sicherzustellen, dass das Kontrastverhältnis zwischen der Farbe des Textes und dem Hintergrund, über dem der Text platziert ist, hoch genug ist, damit Menschen mit Sehbehinderungen den Inhalt der Seite lesen können.

Das Farbkontrastverhältnis wird ermittelt, indem die Helligkeit der deckkraftangepassten Text- und Hintergrundfarbenwerte verglichen wird. Um den aktuellen [Richtlinien für Barrierefreiheit von Webinhalten (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu entsprechen, ist ein Verhältnis von 4.5:1 für Textinhalte und 3:1 für größeren Text wie Überschriften erforderlich. Großer Text ist definiert als 18,66px und [fett](/de/docs/Web/CSS/Reference/Properties/font-weight) oder größer oder 24px oder größer.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Guideline 1.4 explanations](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

Verschiedene Betriebssysteme bieten eine Präferenz zum Reduzieren der Transparenz. Um die `opacity` basierend auf den Transparenzeinstellungen des Betriebssystems des Benutzers festzulegen, verwenden Sie die [`prefers-reduced-transparency`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency) Media Query.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deckkraft einstellen

Das folgende Beispiel zeigt, wie die `opacity`-Eigenschaft die Deckkraft des gesamten Elements und Inhalts ändert, wodurch der Text schwer lesbar wird.

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

Um Elemente basierend auf den Transparenzeinstellungen des Betriebssystems des Benutzers zu stylen, verwenden Sie die [`prefers-reduced-transparency`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency) Media Query. Das folgende Beispiel zeigt, wie Sie die `prefers-color-scheme` Media Query verwenden, um die gewünschte `opacity` basierend auf den Benutzereinstellungen anzugeben.

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

- [`prefers-reduced-transparency`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency) Media Query
- [CSS color](/de/docs/Web/CSS/Guides/Colors) Modul
- SVG {{SVGAttr("opacity")}} Attribut
