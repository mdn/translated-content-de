---
title: "`opacity` CSS property"
short-title: opacity
slug: Web/CSS/Reference/Properties/opacity
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`opacity`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Deckkraft eines Elements fest. Die Deckkraft beschreibt, in welchem Maße der Inhalt hinter einem Element verborgen ist, und ist das Gegenteil von Transparenz.

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
  - : Eine {{cssxref("number")}} im Bereich von `0.0` bis `1.0` einschließlich, oder ein {{cssxref("percentage")}} im Bereich von `0%` bis `100%` einschließlich, die die Deckkraft des Kanals darstellt (dies bedeutet, den Wert seines Alpha-Kanals). Jeder Wert außerhalb des Bereichs, obwohl gültig, wird auf das nächste Limit innerhalb des Bereichs begrenzt.

    | Wert                                                   | Bedeutung                                                                         |
    | ------------------------------------------------------ | --------------------------------------------------------------------------------- |
    | `0`                                                    | Das Element ist vollständig transparent (d.h. unsichtbar).                        |
    | Jede {{cssxref("number")}} strikt zwischen `0` und `1` | Das Element ist durchscheinend (d.h. der Inhalt hinter dem Element ist sichtbar). |
    | `1` (Standardwert)                                     | Das Element ist vollständig undurchsichtig (visuell solide).                      |

## Beschreibung

`opacity` wirkt sich auf das gesamte Element aus, einschließlich seines Inhalts, obwohl der Wert nicht von Kindelementen geerbt wird. Somit haben das Element und seine Kinder alle die gleiche Deckkraft relativ zum Hintergrund des Elements, auch wenn sie unterschiedliche Deckkräfte relativ zueinander haben.

Um nur die Deckkraft eines Hintergrundes zu ändern, verwenden Sie die {{cssxref("background")}} Eigenschaft mit einem [Farbwert](/de/docs/Web/CSS/Reference/Values/color_value), der einen Alpha-Kanal ermöglicht. Zum Beispiel:

```css
background: rgb(0 0 0 / 40%);
```

Wenn der `opacity`-Wert auf `0` gesetzt wird, erscheinen das Element und all seine Kinder unsichtbar, sind aber immer noch Teil des DOM. Das bedeutet, dass sie immer noch [Zeigerereignisse](/de/docs/Web/API/Pointer_events) registrieren und, wenn sich die Elemente in einer Tabulatorreihenfolge befinden, den Fokus erhalten. Für eine gute Benutzerfreundlichkeit stellen Sie sicher, dass solche Elemente sichtbar werden, wenn sie Benutzerinteraktionen empfangen oder verwenden Sie die CSS {{cssxref("pointer-events")}} Eigenschaft, um Zeigerereignisse zu deaktivieren und das Element aus der Tab-Reihenfolge zu entfernen, indem Sie es mit dem `disabled`-Attribut deaktivieren oder [`tab-index="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) für nicht formularbezogene interaktive Elemente setzen.

Die Verwendung von `opacity` mit einem anderen Wert als `1` platziert das Element in einem neuen [Stapelschutzkontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context).

Allein `opacity` sollte nicht verwendet werden, um Informationen für Bildschirmleser bereitzustellen. Verwenden Sie das HTML [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden) Attribut, die CSS {{cssxref("visibility")}} oder die CSS {{cssxref("display")}} Stil-Eigenschaften. Es ist am besten, das [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) Attribut zu vermeiden, aber wenn das Element mit Deckkraft verborgen ist, dann verbergen Sie es auch vor Bildschirmlesern.

### Übergang von Deckkraft

Wenn Sie die Deckkraft von Elementen beim Hinzufügen auf die Seite überleiten, nachdem der Inhalt zuvor mit [`visibility: hidden`](/de/docs/Web/CSS/Reference/Properties/visibility#hidden), [`display: none`](/de/docs/Web/CSS/Reference/Properties/display#none) oder [`content-visibility: hidden`](/de/docs/Web/CSS/Reference/Properties/content-visibility#hidden) verborgen war, müssen Sie sowohl eine {{cssxref("@starting-style")}} als auch [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior#allow-discrete) einschließen:

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

Um Übergänge im ersten Stil zu ermöglichen, sind `@starting-style`-Regeln notwendig. Im obigen Code bietet das Setzen von `opacity: 0` in `@starting-style` einen Ausgangspunkt für den Übergang, wenn das Element sein initiales Stil-Update erhält. Für weitere Details siehe {{cssxref("@starting-style")}}.

Das Setzen von `transition-behavior: allow-discrete` ist erforderlich, um zu `display: none` zu übergehen. Weitere Details finden Sie in der {{cssxref("transition-behavior")}} Eigenschaft.

## Barrierefreiheit

Wenn die Textdeckkraft angepasst wird, ist es wichtig sicherzustellen, dass das Kontrastverhältnis zwischen der Farbe des Textes und dem Hintergrund, auf dem der Text platziert ist, hoch genug ist, damit Personen mit eingeschränktem Sehvermögen den Inhalt der Seite lesen können.

Das Farbkontrastverhältnis wird bestimmt, indem die Leuchtkraft der deckkraftangepassten Text- und Hintergrundfarbwerte verglichen wird. Um den aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu entsprechen, ist ein Verhältnis von 4.5:1 für Textinhalte und 3:1 für größere Texte wie Überschriften erforderlich. Großer Text wird als 18.66px und [fett](/de/docs/Web/CSS/Reference/Properties/font-weight) oder größer oder 24px oder größer definiert.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Guideline 1.4 explanations](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

Verschiedene Betriebssysteme bieten eine Präferenz zur Reduzierung von Transparenz. Um die `opacity` basierend auf den Transparenzeinstellungen des Betriebssystems eines Benutzers einzustellen, verwenden Sie die [`prefers-reduced-transparency`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency) Medienabfrage.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deckkraft einstellen

Das folgende Beispiel zeigt, wie die `opacity`-Eigenschaft die Deckkraft des gesamten Elements und Inhalts ändert und den Text dadurch sehr schwer lesbar macht.

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

Im folgenden Beispiel wird die Deckkraft beim Hover geändert, sodass das gestreifte Hintergrundbild auf dem übergeordneten Element durch das Bild hindurchscheint.

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

Um Elemente basierend auf den Transparenzeinstellungen des Betriebssystems eines Benutzers zu stylen, verwenden Sie die [`prefers-reduced-transparency`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency) Medienabfrage. Das folgende Beispiel zeigt, wie Sie die `prefers-color-scheme` Medienabfrage verwenden, um die gewünschte `opacity` basierend auf den Benutzereinstellungen festzulegen.

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

- [`prefers-reduced-transparency`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency) Medienabfrage
- [CSS color](/de/docs/Web/CSS/Guides/Colors) Modul
- SVG {{SVGAttr("opacity")}} Attribut
