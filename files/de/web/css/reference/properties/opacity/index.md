---
title: opacity
slug: Web/CSS/Reference/Properties/opacity
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`opacity`**-Eigenschaft [CSS](/de/docs/Web/CSS) legt die Deckkraft eines Elements fest. Deckkraft ist der Grad, zu dem Inhalte hinter einem Element verborgen sind, und ist das Gegenteil von Transparenz.

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
  - : Eine {{cssxref("number")}} im Bereich von `0.0` bis einschließlich `1.0` oder ein {{cssxref("percentage")}} im Bereich von `0%` bis einschließlich `100%`, das die Deckkraft des Kanals darstellt (das heißt, den Wert seines Alphakanals). Jeder Wert außerhalb des Intervalls wird, obwohl er gültig ist, auf das nächstgelegene Limit im Bereich begrenzt.

    | Wert                                                   | Bedeutung                                                                         |
    | ------------------------------------------------------ | --------------------------------------------------------------------------------- |
    | `0`                                                    | Das Element ist vollständig transparent (d.h. unsichtbar).                       |
    | Jede {{cssxref("number")}} strikt zwischen `0` und `1` | Das Element ist durchscheinend (d.h. Inhalte hinter dem Element sind sichtbar). |
    | `1` (Standardwert)                                     | Das Element ist vollständig undurchsichtig (visuell solide).                      |

## Beschreibung

`opacity` gilt für das gesamte Element, einschließlich seiner Inhalte, obwohl der Wert nicht von Kindelementen geerbt wird. Daher haben das Element und seine Kinder dieselbe Deckkraft relativ zum Hintergrund des Elements, selbst wenn sie unterschiedliche Deckkräfte zueinander aufweisen.

Um die Deckkraft nur eines Hintergrunds zu ändern, verwenden Sie die {{cssxref("background")}}-Eigenschaft mit einem [Farbwert](/de/docs/Web/CSS/Reference/Values/color_value), der einen Alphakanal ermöglicht. Zum Beispiel:

```css
background: rgb(0 0 0 / 40%);
```

Wenn der `opacity`-Wert auf `0` gesetzt ist, erscheinen das Element und alle seine Kinder unsichtbar, sind aber immer noch Teil des DOM. Das bedeutet, dass sie weiterhin [Pointevents](/de/docs/Web/API/Pointer_events) registrieren und, falls sich die Elemente in einer Tabulatorreihenfolge befinden, sie Fokus erhalten. Für gute Benutzerfreundlichkeit stellen Sie sicher, dass solche Elemente sichtbar werden, wenn sie Nutzereingaben erhalten, oder verwenden Sie die CSS-Eigenschaft {{cssxref("pointer-events")}}, um Pointevents zu deaktivieren und das Element aus der Tab-Reihenfolge zu entfernen, indem Sie es mit dem `disabled`-Attribut deaktivieren oder [`tabindex="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) für nicht formularbezogene interaktive Elemente setzen.

Die Verwendung von `opacity` mit einem anderen Wert als `1` platziert das Element in einem neuen [stapelnden Kontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context).

Deckkraft allein sollte nicht verwendet werden, um Bildschirmlesegeräten Informationen bereitzustellen. Verwenden Sie das HTML-Attribut [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden), die CSS-Eigenschaften {{cssxref("visibility")}} oder {{cssxref("display")}}. Es ist am besten, die Verwendung des Attributs [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) zu vermeiden, aber wenn das Element mit Deckkraft versteckt ist, dann verstecken Sie es auch vor Bildschirmlesegeräten.

### Übergang der Deckkraft

Beim [Übergang](/de/docs/Web/CSS/Guides/Transitions) der Deckkraft von Elementen, wenn Sie sie der Seite hinzufügen, nachdem Inhalte zuvor mit [`visibility: hidden`](/de/docs/Web/CSS/Reference/Properties/visibility#hidden), [`display: none`](/de/docs/Web/CSS/Reference/Properties/display#none) oder [`content-visibility: hidden`](/de/docs/Web/CSS/Reference/Properties/content-visibility#hidden) versteckt wurden, müssen sowohl ein [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style) als auch [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior#allow-discrete) enthalten sein:

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

Um Erststil-Übergänge zu aktivieren, sind `@starting-style`-Regeln erforderlich. Im obigen Code bietet das Setzen von `opacity: 0` im `@starting-style` einen Ausgangspunkt für den Übergang, wenn das Element seine anfängliche Stilaktualisierung erhält. Für weitere Details siehe [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style).

Das Festlegen von `transition-behavior: allow-discrete` ist erforderlich, um zu `display: none` zu wechseln. Weitere Details finden Sie in der {{cssxref("transition-behavior")}}-Eigenschaft.

## Barrierefreiheit

Wenn die Deckkraft von Text angepasst wird, ist es wichtig sicherzustellen, dass das Kontrastverhältnis zwischen der Farbe des Textes und dem Hintergrund, über dem der Text platziert ist, hoch genug ist, damit Personen mit Sehbehinderungen den Inhalt der Seite lesen können.

Das Kontrastverhältnis wird ermittelt, indem die Leuchtkraft der deckkraftangepassten Text- und Hintergrundfarbenwerte verglichen wird. Um den aktuellen [Richtlinien für barrierefreie Webinhalte (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu entsprechen, ist ein Verhältnis von 4,5:1 für Textinhalte und 3:1 für größere Texte wie Überschriften erforderlich. Großer Text ist als 18,66px und [fett](/de/docs/Web/CSS/Reference/Properties/font-weight) oder größer oder 24px oder größer definiert.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Guideline 1.4 explanations](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

Verschiedene Betriebssysteme bieten eine Präferenz zur Reduzierung der Transparenz. Um die `opacity` basierend auf den Transparenzpräferenzen des Betriebssystems des Nutzers festzulegen, verwenden Sie die Medienabfrage [`prefers-reduced-transparency`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deckkraft einstellen

Das folgende Beispiel zeigt, wie die `opacity`-Eigenschaft die gesamte Deckkraft des Elements und des Inhalts ändert, wodurch der Text sehr schwer lesbar wird.

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

### Deckkraft beim Hover ändern

Im folgenden Beispiel wird die Deckkraft beim Hover geändert, sodass das gestreifte Hintergrundbild im übergeordneten Element durch das Bild hindurchscheint.

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

### Stil basierend auf Benutzerpräferenzen

Um Elemente basierend auf Transparenzpräferenzen des Betriebssystems des Benutzers zu gestalten, verwenden Sie die Medienabfrage [`prefers-reduced-transparency`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency). Das folgende Beispiel zeigt, wie die Medienabfrage `prefers-color-scheme` verwendet wird, um die gewünschte `opacity` basierend auf den Benutzerpräferenzen zu spezifizieren.

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
