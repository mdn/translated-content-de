---
title: opacity
slug: Web/CSS/Reference/Properties/opacity
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`opacity`** [CSS](/de/docs/Web/CSS) Eigenschaft setzt die Opazität eines Elements. Opazität ist das Maß, in dem der Inhalt hinter einem Element verborgen ist, und ist das Gegenteil von Transparenz.

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
  - : Eine {{cssxref("number")}} im Bereich von `0.0` bis `1.0`, inklusive, oder ein {{cssxref("percentage")}} im Bereich von `0%` bis `100%`, inklusive, die die Opazität des Kanals repräsentiert (das heißt, den Wert seines Alphakanals). Jeder Wert außerhalb des Intervalls, obwohl gültig, wird auf das nächste Limit im Bereich begrenzt.

    | Wert                                                  | Bedeutung                                                                       |
    | ----------------------------------------------------- | --------------------------------------------------------------------------------|
    | `0`                                                   | Das Element ist vollständig transparent (das heißt, unsichtbar).                 |
    | Jede {{cssxref("number")}} strikt zwischen `0` und `1`| Das Element ist durchscheinend (das heißt, der Inhalt hinter dem Element ist sichtbar). |
    | `1` (Standardwert)                                    | Das Element ist vollständig undurchsichtig (visuell solide).                     |

## Beschreibung

`opacity` wird auf das gesamte Element einschließlich seines Inhalts angewendet, obwohl der Wert nicht von Kind-Elementen geerbt wird. Daher haben das Element und seine Kinder alle die gleiche Opazität relativ zum Hintergrund des Elements, auch wenn sie unterschiedliche Opazitäten zueinander haben.

Um die Opazität nur eines Hintergrunds zu ändern, verwenden Sie die {{cssxref("background")}} Eigenschaft mit einem [Farbwert](/de/docs/Web/CSS/color_value), der einen Alphakanal erlaubt. Zum Beispiel:

```css
background: rgb(0 0 0 / 40%);
```

Wenn der `opacity` Wert auf `0` gesetzt ist, erscheinen das Element und alle seine Kinder unsichtbar, sind jedoch immer noch Teil des DOMs. Das bedeutet, dass sie weiterhin [Zeigereignisse](/de/docs/Web/API/Pointer_events) registrieren und, wenn die Elemente in einer Tabulatorreihenfolge sind, den Fokus erhalten. Für eine gute Benutzerfreundlichkeit stellen Sie sicher, dass solche Elemente sichtbar werden, wenn sie Benutzerinteraktionen erhalten, oder verwenden Sie die CSS-Eigenschaft [`pointer-events`](/de/docs/Web/CSS/Reference/Properties/pointer-events), um Zeigereignisse zu deaktivieren, und nehmen Sie das Element aus der Tabulatorreihenfolge, indem Sie es mit dem `disabled` Attribut deaktivieren oder [`tab-index="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) für nicht formbezogene interaktive Elemente festlegen.

Die Verwendung von `opacity` mit einem anderen Wert als `1` platziert das Element in einem neuen [Stacking Context](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context).

Opazität alleine sollte nicht verwendet werden, um Informationen für Bildschirmlesegeräte bereitzustellen. Verwenden Sie das HTML-Attribut [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden), die CSS-Eigenschaften [`visibility`](/de/docs/Web/CSS/Reference/Properties/visibility) oder [`display`](/de/docs/Web/CSS/Reference/Properties/display) Stiloptionen. Es ist am besten, das [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) Attribut zu vermeiden, aber wenn das Element mit Opazität versteckt wird, dann verbergen Sie es auch vor Bildschirmlesegeräten.

### Animation der Opazität

Beim [Transitioning](/de/docs/Web/CSS/CSS_transitions) der Opazität von Elementen, wenn Sie diese zur Seite hinzufügen, wenn der Inhalt zuvor mit [`visibility: hidden`](/de/docs/Web/CSS/Reference/Properties/visibility#hidden), [`display: none`](/de/docs/Web/CSS/Reference/Properties/display#none) oder [`content-visibility: hidden`](/de/docs/Web/CSS/Reference/Properties/content-visibility#hidden) verborgen war, müssen Sie sowohl eine [`@starting-style`](/de/docs/Web/CSS/@starting-style) als auch [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior#allow-discrete) einschließen:

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

Um erste Stiländerungen zu ermöglichen, werden `@starting-style` Regeln benötigt. Im obigen Code bietet `opacity: 0` in `@starting-style` einen Ausgangspunkt für die Transition, wenn das Element seinen ersten Stil-Update erhält. Weitere Details finden Sie unter [`@starting-style`](/de/docs/Web/CSS/@starting-style).

Das Setzen von `transition-behavior: allow-discrete` ist erforderlich, um zu `display: none` zu wechseln. Weitere Einzelheiten finden Sie in der [`transition-behavior`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) Eigenschaft.

## Barrierefreiheit

Wenn die Textopazität angepasst wird, ist es wichtig sicherzustellen, dass der Kontrast zwischen der Farbe des Textes und dem Hintergrund, über den der Text platziert ist, hoch genug ist, damit Menschen mit eingeschränktem Sehvermögen den Inhalt der Seite lesen können.

Das Farbkontrastverhältnis wird bestimmt, indem die Helligkeit der opazitätsangepassten Text- und Hintergrundfarbwerte verglichen wird. Um den aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu entsprechen, ist ein Verhältnis von 4.5:1 für Textinhalt und 3:1 für größeren Text, wie Überschriften, erforderlich. Großer Text ist definiert als 18.66px und [fett](/de/docs/Web/CSS/Reference/Properties/font-weight) oder größer, oder 24px oder größer.

- [WebAIM: Farbkontrastprüfer](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis von Erfolgskriterium 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

Verschiedene Betriebssysteme bieten eine Präferenz zur Reduzierung der Transparenz. Um die `opacity` basierend auf den Transparenzpräferenzen des Benutzerbetriebssystems einzustellen, verwenden Sie die [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency) Medienabfrage.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Opazität einstellen

Das folgende Beispiel demonstriert, wie die `opacity` Eigenschaft die Opazität des gesamten Elements und des Inhalts ändert, wodurch der Text sehr schwer lesbar wird.

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

Im folgenden Beispiel wird die Opazität beim Hover geändert, sodass das gestreifte Hintergrundbild auf dem übergeordneten Element durch das Bild hindurchscheint.

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

### Styling basierend auf Benutzerpräferenzen

Um Elemente basierend auf den Transparenzpräferenzen des Benutzerbetriebssystems zu gestalten, verwenden Sie die [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency) Medienabfrage. Das folgende Beispiel zeigt, wie Sie die Medienabfrage `prefers-color-scheme` verwenden, um die gewünschte `opacity` basierend auf den Benutzerpräferenzen festzulegen.

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
- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Modul
- SVG {{SVGAttr("opacity")}} Attribut
