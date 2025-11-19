---
title: opacity
slug: Web/CSS/Reference/Properties/opacity
l10n:
  sourceCommit: f28f4c26a3d95e41d01a505af3388881abd6e49c
---

Die **`opacity`** [CSS](/de/docs/Web/CSS) Eigenschaft setzt die Opazität eines Elements. Opazität ist der Grad, in dem der Inhalt hinter einem Element verborgen ist und stellt das Gegenteil von Transparenz dar.

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
  - : Eine {{cssxref("number")}} im Bereich von `0.0` bis `1.0`, inklusive, oder ein {{cssxref("percentage")}} im Bereich von `0%` bis `100%`, inklusive, die die Opazität des Kanals darstellt (also der Wert des Alphakanals). Jeder Wert außerhalb dieses Intervalls, obwohl gültig, wird auf den nächstgelegenen Grenzwert im Bereich begrenzt.

    | Wert                                                   | Bedeutung                                                                       |
    | ------------------------------------------------------ | ------------------------------------------------------------------------------- |
    | `0`                                                    | Das Element ist vollständig transparent (d.h. unsichtbar).                      |
    | Jede {{cssxref("number")}} streng zwischen `0` und `1` | Das Element ist durchsichtig (d.h. der Inhalt hinter dem Element ist sichtbar). |
    | `1` (Standardwert)                                     | Das Element ist vollständig opak (visuell fest).                                |

## Beschreibung

`opacity` wird auf das Element als Ganzes angewendet, einschließlich seines Inhalts, auch wenn der Wert nicht von Kind-Elementen geerbt wird. Daher haben das Element und seine Kinder alle dieselbe Opazität im Verhältnis zum Hintergrund des Elements, auch wenn sie unterschiedliche Opazitäten zueinander haben.

Um die Opazität nur des Hintergrunds zu ändern, verwenden Sie die {{cssxref("background")}} Eigenschaft mit einem [Farbwert](/de/docs/Web/CSS/Reference/Values/color_value), der einen Alphakanal ermöglicht. Zum Beispiel:

```css
background: rgb(0 0 0 / 40%);
```

Wenn der `opacity`-Wert auf `0` gesetzt ist, erscheinen das Element und alle seine Kinder unsichtbar, sind jedoch immer noch Teil des DOM. Das bedeutet, dass sie immer noch [Zeigerereignisse](/de/docs/Web/API/Pointer_events) registrieren und, wenn die Elemente in einer Tab-Reihenfolge sind, erhalten sie auch Fokus. Für eine gute Benutzerfreundlichkeit stellen Sie sicher, solche Elemente sichtbar zu machen, wenn sie Benutzerinteraktionen erhalten, oder verwenden Sie die CSS [`pointer-events`](/de/docs/Web/CSS/Reference/Properties/pointer-events) Eigenschaft, um Zeigerereignisse zu deaktivieren und das Element aus der Tab-Reihenfolge herauszunehmen, indem Sie das `disabled`-Attribut deaktivieren oder [`tab-index="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) für nicht formularbezogene interaktive Elemente setzen.

Die Verwendung von `opacity` mit einem anderen Wert als `1` versetzt das Element in einen neuen [stapelnden Kontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context).

Allein die Opazität sollte nicht verwendet werden, um Informationen für Screenreader bereitzustellen. Verwenden Sie das HTML-Attribut [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden), CSS [`visibility`](/de/docs/Web/CSS/Reference/Properties/visibility) oder CSS [`display`](/de/docs/Web/CSS/Reference/Properties/display) Stil-Eigenschaften. Es ist am besten, das Attribut [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) zu vermeiden, aber wenn das Element mit Opazität versteckt ist, verbergen Sie es auch vor Screenreadern.

### Übergang der Opazität

Beim [Übergang](/de/docs/Web/CSS/Guides/Transitions) der Opazität von Elementen, wenn Sie sie zur Seite hinzufügen, nachdem der Inhalt zuvor mit [`visibility: hidden`](/de/docs/Web/CSS/Reference/Properties/visibility#hidden), [`display: none`](/de/docs/Web/CSS/Reference/Properties/display#none) oder [`content-visibility: hidden`](/de/docs/Web/CSS/Reference/Properties/content-visibility#hidden) verborgen wurde, müssen Sie sowohl ein [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style) als auch [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior#allow-discrete) beinhalten:

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

Um erste Stilübergänge zu ermöglichen, sind `@starting-style` Regeln erforderlich. Im obigen Code wird `opacity: 0` im `@starting-style` gesetzt, um einen Ausgangspunkt für den Übergang zu schaffen, wenn das Element sein initiales Stil-Update erhält. Für weitere Details siehe [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style).

Das Setzen von `transition-behavior: allow-discrete` ist erforderlich, um zu `display: none` zu wechseln. Sehen Sie sich die [`transition-behavior`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) Eigenschaft für weitere Details an.

## Barrierefreiheit

Wenn die Textopazität angepasst wird, ist es wichtig sicherzustellen, dass das Kontrastverhältnis zwischen der Farbe des Textes und dem Hintergrund, über dem der Text platziert ist, hoch genug ist, damit Personen mit Sehbehinderungen den Inhalt der Seite lesen können.

Das Farbkontrastverhältnis wird durch Vergleich der Leuchtdichte der opazitätangepassten Text- und Hintergrundfarbwerte bestimmt. Um die aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4.5:1 für Textinhalte und 3:1 für größeren Text wie Überschriften erforderlich. Großer Text wird definiert als 18.66px und [fett](/de/docs/Web/CSS/Reference/Properties/font-weight) oder größer, oder 24px oder größer.

- [WebAIM: Farbkontrast-Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis der WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis Erfolgskriterium 1.4.3 | W3C Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

Verschiedene Betriebssysteme bieten eine Präferenz für die Reduzierung der Transparenz. Um die `opacity` basierend auf den Transparenzeinstellungen des Betriebssystems des Benutzers zu setzen, verwenden Sie die [`prefers-reduced-transparency`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency) Media-Query.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Opazität setzen

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

### Opazität beim Hover setzen

Im folgenden Beispiel wird die Opazität beim Hover geändert, sodass das gestreifte Hintergrundbild auf dem Elternelement durch das Bild hindurchscheint.

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

Um Elemente basierend auf den Transparenzeinstellungen des Betriebssystems des Benutzers zu gestalten, verwenden Sie die [`prefers-reduced-transparency`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency) Media-Query. Das folgende Beispiel zeigt, wie die `prefers-color-scheme` Media-Query verwendet wird, um die gewünschte `opacity` basierend auf den Präferenzen des Benutzers anzugeben.

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

- [`prefers-reduced-transparency`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency) Media-Query
- [CSS Farbe](/de/docs/Web/CSS/Guides/Colors) Modul
- SVG {{SVGAttr("opacity")}} Attribut
