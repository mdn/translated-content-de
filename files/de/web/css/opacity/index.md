---
title: opacity
slug: Web/CSS/opacity
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`opacity`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Deckkraft eines Elements fest. Opazität bezeichnet den Grad, zu dem Inhalte hinter einem Element verdeckt werden, und ist das Gegenteil von Transparenz.

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
  - : Eine {{cssxref("number")}} im Bereich von `0.0` bis `1.0`, einschließlich, oder ein {{cssxref("percentage")}} im Bereich von `0%` bis `100%`, einschließlich, die die Opazität des Kanals (d.h. den Wert seines Alphakanals) darstellt. Jeder außerhalb des Intervalls liegende Wert, der jedoch gültig ist, wird auf die nächste Grenze im Bereich begrenzt.

    | Wert                                                   | Bedeutung                                                                        |
    | ------------------------------------------------------ | -------------------------------------------------------------------------------- |
    | `0`                                                    | Das Element ist vollständig transparent (d.h. unsichtbar).                      |
    | Jede {{cssxref("number")}} streng zwischen `0` und `1` | Das Element ist durchscheinend (d.h. Inhalte hinter dem Element sind sichtbar). |
    | `1` (Standardwert)                                     | Das Element ist vollständig undurchsichtig (visuell solide).                     |

## Beschreibung

`opacity` gilt für das gesamte Element einschließlich seiner Inhalte, obwohl der Wert von Kindelementen nicht geerbt wird. Somit haben das Element und seine Kinder die gleiche Opazität im Verhältnis zum Hintergrund des Elements, auch wenn sie unterschiedliche Opazitäten im Verhältnis zueinander haben.

Um die Opazität nur eines Hintergrunds zu ändern, verwenden Sie die {{cssxref("background")}}-Eigenschaft mit einem [Farbwert](/de/docs/Web/CSS/color_value), der einen Alphakanal zulässt. Zum Beispiel:

```css
background: rgb(0 0 0 / 40%);
```

Wenn der `opacity`-Wert auf `0` gesetzt ist, erscheinen das Element und alle seine Kinder unsichtbar, sind aber dennoch Teil des DOM. Das bedeutet, dass sie weiterhin [Zeigerereignisse](/de/docs/Web/API/Pointer_events) registrieren und, wenn die Elemente in einer Tab-Reihenfolge sind, erhalten sie den Fokus. Für eine gute Benutzerfreundlichkeit stellen Sie sicher, dass solche Elemente sichtbar gemacht werden, wenn sie Benutzerinteraktionen empfangen, oder verwenden Sie die CSS-Property [`pointer-events`](/de/docs/Web/CSS/pointer-events), um Zeigerereignisse zu deaktivieren und das Element aus der Tab-Reihenfolge herauszunehmen, indem Sie das `disabled`-Attribut deaktivieren oder [`tab-index="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) für nicht formularbezogene interaktive Elemente setzen.

Die Verwendung von `opacity` mit einem Wert ungleich `1` platziert das Element in einem neuen [Stacking Context](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context).

Opazität allein sollte nicht verwendet werden, um Informationen für Screenreader bereitzustellen. Verwenden Sie das HTML-Attribut [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden), CSS-Property [`visibility`](/de/docs/Web/CSS/visibility) oder CSS-Style-Eigenschaften [`display`](/de/docs/Web/CSS/display). Es ist am besten, die Verwendung des Attributs [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) zu vermeiden, aber wenn das Element mit Opazität versteckt ist, verbergen Sie es auch vor Screenreadern.

### Übergang der Opazität

Wenn Sie die Opazität von Elementen während des Hinzufügens zur Seite über [Übergänge](/de/docs/Web/CSS/CSS_transitions) ändern, wenn Inhalte zuvor mit [`visibility: hidden`](/de/docs/Web/CSS/visibility#hidden), [`display: none`](/de/docs/Web/CSS/display#none) oder [`content-visibility: hidden`](/de/docs/Web/CSS/content-visibility#hidden) verborgen waren, müssen Sie sowohl ein [`@starting-style`](/de/docs/Web/CSS/@starting-style) als auch [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior#allow-discrete) einschließen:

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

Um Übergänge im ersten Stil zu ermöglichen, werden `@starting-style`-Regeln benötigt. Im obigen Code bietet das Setzen von `opacity: 0` in `@starting-style` einen Ausgangspunkt für den Übergang, wenn das Element seinen initialen Stil-Update erhält. Weitere Details finden Sie unter [`@starting-style`](/de/docs/Web/CSS/@starting-style).

Das Setzen von `transition-behavior: allow-discrete` ist erforderlich, um zu `display: none` zu wechseln. Siehe die [`transition-behavior`](/de/docs/Web/CSS/transition-behavior) Eigenschaft für weitere Details.

## Barrierefreiheit

Wenn die Textopazität angepasst wird, ist es wichtig sicherzustellen, dass das Kontrastverhältnis zwischen der Farbe des Textes und dem Hintergrund, auf den der Text platziert wird, hoch genug ist, damit Menschen mit Sehbehinderungen die Inhalte der Seite lesen können.

Das Farbkontrastverhältnis wird bestimmt, indem die Leuchtkraft der opazitätsangepassten Text- und Hintergrundfarben verglichen wird. Um die aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4.5:1 für Textinhalte und 3:1 für größere Texte wie Überschriften erforderlich. Große Texte werden als 18.66px und [fett](/de/docs/Web/CSS/font-weight) oder größer oder 24px oder größer definiert.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Leitfaden 1.4 Erläuterungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

Verschiedene Betriebssysteme bieten eine Präferenz zur Reduzierung der Transparenz. Um die `opacity` basierend auf den Transparenzeinstellungen des Betriebssystems des Benutzers festzulegen, verwenden Sie die [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency) Media Query.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Opazität einstellen

Das folgende Beispiel zeigt, wie die `opacity`-Eigenschaft die Opazität des gesamten Elements und der Inhalte ändert, sodass der Text sehr schwer zu lesen ist.

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

Im folgenden Beispiel wird die Opazität beim Hover geändert, sodass das gestreifte Hintergrundbild im übergeordneten Element durch das Bild sichtbar wird.

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

Um Elemente basierend auf den Transparenzeinstellungen des Betriebssystems des Benutzers zu stylen, verwenden Sie die [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency) Media Query. Das folgende Beispiel zeigt, wie die Media Query `prefers-color-scheme` verwendet wird, um die gewünschte `opacity` basierend auf den Benutzerpräferenzen anzugeben.

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
- [CSS Farbe](/de/docs/Web/CSS/CSS_colors) Modul
- SVG {{SVGAttr("opacity")}} Attribut
