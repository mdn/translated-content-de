---
title: opacity
slug: Web/CSS/Reference/Properties/opacity
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`opacity`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Deckkraft eines Elements fest. Deckkraft ist das Maß, in dem Inhalte hinter einem Element verborgen sind, und ist das Gegenteil von Transparenz.

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
  - : Eine {{cssxref("number")}} im Bereich von `0.0` bis `1.0`, inklusive, oder ein {{cssxref("percentage")}} im Bereich von `0%` bis `100%`, inklusive, die die Deckkraft des Kanals darstellen (das heißt, den Wert seines Alphakanals). Jeder Wert außerhalb des Intervalls ist zwar gültig, wird jedoch auf das nächstliegende Limit im Bereich begrenzt.

    | Wert                                                    | Bedeutung                                                                       |
    | ------------------------------------------------------- | ------------------------------------------------------------------------------- |
    | `0`                                                     | Das Element ist vollständig transparent (d.h. unsichtbar).                      |
    | Jeder {{cssxref("number")}} strikt zwischen `0` und `1` | Das Element ist durchscheinend (d.h. Inhalte hinter dem Element sind sichtbar). |
    | `1` (Standardwert)                                      | Das Element ist vollständig opak (visuell solide).                              |

## Beschreibung

`opacity` gilt für das gesamte Element, einschließlich seiner Inhalte, auch wenn der Wert nicht von Kindelementen geerbt wird. Daher haben das Element und seine Kinder alle die gleiche Deckkraft relativ zum Hintergrund des Elements, selbst wenn sie unterschiedliche Deckkräfte relativ zueinander haben.

Um die Deckkraft nur eines Hintergrunds zu ändern, verwenden Sie die {{cssxref("background")}} Eigenschaft mit einem [Farbwert](/de/docs/Web/CSS/Reference/Values/color_value), der einen Alphakanal zulässt. Zum Beispiel:

```css
background: rgb(0 0 0 / 40%);
```

Wenn der `opacity`-Wert auf `0` gesetzt ist, erscheinen das Element und alle seine Kinder unsichtbar, sind aber weiterhin Teil des DOM. Das bedeutet, dass sie weiterhin [Zeigerereignisse](/de/docs/Web/API/Pointer_events) registrieren und, wenn die Elemente in einer Tabulatorreihenfolge sind, sie den Fokus erhalten. Zur guten Benutzerfreundlichkeit, stellen Sie sicher, dass solche Elemente sichtbar werden, wenn sie Benutzerinteraktionen erhalten, oder verwenden Sie die CSS {{cssxref("pointer-events")}} Eigenschaft, um Zeigerereignisse zu deaktivieren und das Element aus der Tabulatorreihenfolge zu entfernen, indem Sie das Attribut `disabled` deaktivieren oder [`tab-index="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) für nicht formularbezogene interaktive Elemente setzen.

Die Verwendung von `opacity` mit einem anderen Wert als `1` platziert das Element in einem neuen [Stapelfluss](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context).

Allein Deckkraft sollte nicht verwendet werden, um Informationen für Screenreader bereitzustellen. Verwenden Sie das HTML [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden) Attribut, CSS {{cssxref("visibility")}}, oder CSS {{cssxref("display")}} Stil-Eigenschaften. Am besten ist es, die Verwendung des [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) Attributs zu vermeiden, aber wenn das Element mit Deckkraft verborgen ist, dann verbergen Sie es auch vor Screenreadern.

### Übergang der Deckkraft

Beim [Übergang](/de/docs/Web/CSS/Guides/Transitions) der Deckkraft von Elementen, wenn sie zur Seite hinzugefügt werden, wenn der Inhalt zuvor mit [`visibility: hidden`](/de/docs/Web/CSS/Reference/Properties/visibility#hidden), [`display: none`](/de/docs/Web/CSS/Reference/Properties/display#none) oder [`content-visibility: hidden`](/de/docs/Web/CSS/Reference/Properties/content-visibility#hidden) verborgen war, müssen Sie sowohl ein {{cssxref("@starting-style")}} als auch [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior#allow-discrete) einschließen:

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

Um Übergänge im ersten Stil zu ermöglichen, sind `@starting-style` Regeln erforderlich. Im obigen Code bietet das Setzen von `opacity: 0` im `@starting-style` einen Ausgangspunkt für den Übergang, wenn das Element seine anfängliche Stilaktualisierung erhält. Weitere Details finden Sie unter {{cssxref("@starting-style")}}.

Das Setzen von `transition-behavior: allow-discrete` ist erforderlich, um den Übergang zu `display: none` zu ermöglichen. Weitere Details finden Sie bei der {{cssxref("transition-behavior")}} Eigenschaft.

## Barrierefreiheit

Wenn die Deckkraft von Text angepasst wird, ist es wichtig sicherzustellen, dass das Kontrastverhältnis zwischen der Farbe des Textes und dem Hintergrund, über dem der Text platziert ist, hoch genug ist, damit Menschen mit Sehschwäche in der Lage sind, den Inhalt der Seite zu lesen.

Das Farbkontrastverhältnis wird ermittelt, indem die Helligkeit der deckkraftangepassten Text- und Hintergrundfarben verglichen wird. Um die aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4.5:1 für Textinhalt und 3:1 für größeren Text wie Überschriften erforderlich. Großer Text wird definiert als 18.66px und [fett](/de/docs/Web/CSS/Reference/Properties/font-weight) oder größer, oder 24px oder größer.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis der WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis der Erfolgskriterien 1.4.3 | W3C Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

Verschiedene Betriebssysteme bieten eine Präferenz für die Reduzierung von Transparenz. Um die `opacity` basierend auf den Transparenzeinstellungen des Betriebssystems des Nutzers einzustellen, verwenden Sie die [`prefers-reduced-transparency`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency) Media Query.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Deckkraft

Das folgende Beispiel zeigt, wie die `opacity` Eigenschaft die Deckkraft des gesamten Elements und Inhalts verändert, wodurch der Text sehr schwer lesbar wird.

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

### Festlegen der Deckkraft beim Hovern

Im folgenden Beispiel wird die Deckkraft beim Hovern geändert, sodass das gestreifte Hintergrundbild des übergeordneten Elements durch das Bild hindurch sichtbar wird.

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

Um Elemente basierend auf den Transparenzeinstellungen des Betriebssystems des Benutzers zu stylen, verwenden Sie die [`prefers-reduced-transparency`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency) Media Query. Das folgende Beispiel zeigt, wie die `prefers-color-scheme` Media Query verwendet wird, um die gewünschte `opacity` basierend auf den Präferenzen des Benutzers festzulegen.

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
- [CSS Farben](/de/docs/Web/CSS/Guides/Colors) Modul
- SVG {{SVGAttr("opacity")}} Attribut
