---
title: opacity
slug: Web/CSS/opacity
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`opacity`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Deckkraft eines Elements fest. Deckkraft ist das Maß, in dem der Inhalt hinter einem Element verborgen ist und ist das Gegenteil von Transparenz.

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

  - : Eine {{cssxref("number")}} im Bereich von `0.0` bis `1.0`, einschließlich, oder ein {{cssxref("percentage")}} im Bereich von `0%` bis `100%`, einschließlich, die die Deckkraft des Kanals darstellt (das heißt, der Wert des Alphakanals). Jeder Wert außerhalb des Intervalls, obwohl gültig, wird an die nächste Grenze im Bereich angepasst.

    | Wert                                            | Bedeutung                                                                      |
    | ----------------------------------------------- | ------------------------------------------------------------------------------ |
    | `0`                                             | Das Element ist vollständig transparent (das heißt, unsichtbar).               |
    | Jede {{cssxref("number")}} zwischen `0` und `1` | Das Element ist halbdurchsichtig (der Inhalt hinter dem Element ist sichtbar). |
    | `1` (Standardwert)                              | Das Element ist vollständig undurchsichtig (visuell solide).                   |

## Beschreibung

`opacity` gilt für das gesamte Element, einschließlich seines Inhalts, auch wenn der Wert nicht von Kindelementen geerbt wird. Somit haben das Element und seine Kinder die gleiche Deckkraft im Verhältnis zum Hintergrund des Elements, selbst wenn sie unterschiedliche Deckkräfte zueinander haben.

Um nur die Deckkraft eines Hintergrunds zu ändern, verwenden Sie die {{cssxref("background")}} Eigenschaft mit einem [Farbwert](/de/docs/Web/CSS/color_value), der einen Alphakanal zulässt. Beispielsweise:

```css
background: rgb(0 0 0 / 40%);
```

Wenn der `opacity`-Wert auf `0` gesetzt ist, erscheinen das Element und alle seine Kinder unsichtbar, aber sie sind immer noch Teil des DOMs. Das bedeutet, dass sie weiterhin [Pointer-Ereignisse](/de/docs/Web/API/Pointer_events) registrieren und, wenn die Elemente in einer Tab-Reihenfolge sind, erhalten sie den Fokus. Für eine gute Benutzerfreundlichkeit sollten solche Elemente bei Benutzerinteraktionen sichtbar gemacht werden oder die CSS-Eigenschaft [`pointer-events`](/de/docs/Web/CSS/pointer-events) verwenden, um Pointer-Ereignisse zu deaktivieren und das Element aus der Tab-Reihenfolge zu nehmen, indem Sie das Attribut `disabled` deaktivieren oder [`tab-index="-1"`](/de/docs/Web/HTML/Global_attributes/tabindex) für nicht formularbezogene interaktive Elemente setzen.

Die Verwendung von `opacity` mit einem Wert ungleich `1` platziert das Element in einem neuen [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context).

Deckkraft allein sollte nicht verwendet werden, um Informationen an Screenreader zu übermitteln. Verwenden Sie das HTML Attribut [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden), CSS Eigenschaften [`visibility`](/de/docs/Web/CSS/visibility) oder [`display`](/de/docs/Web/CSS/display). Es ist am besten, das Attribut [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) zu vermeiden, aber wenn das Element mit Deckkraft versteckt ist, sollten Sie es auch vor Screenreadern verbergen.

### Übergang der Deckkraft

Beim [Übergang](/de/docs/Web/CSS/CSS_transitions) der Deckkraft von Elementen, wenn Sie sie zur Seite hinzufügen, während der Inhalt zuvor mit [`visibility: hidden`](/de/docs/Web/CSS/visibility#hidden), [`display: none`](/de/docs/Web/CSS/display#none), oder [`content-visibility: hidden`](/de/docs/Web/CSS/content-visibility#hidden) versteckt war, müssen Sie sowohl einen [`@starting-style`](/de/docs/Web/CSS/@starting-style) als auch [`transition-behaviour: allow-discrete`](/de/docs/Web/CSS/transition-behavior#allow-discrete) einschließen:

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

Um Übergänge im ersten Stil zu ermöglichen, sind `@starting-style` Regeln erforderlich. Im obigen Code liefert das Setzen von `opacity: 0` im `@starting-style` einen Startpunkt für den Übergang, wenn das Element seine anfängliche Stilaktualisierung erhält. Für weitere Details siehe [`@starting-style`](/de/docs/Web/CSS/@starting-style).

Die Einstellung `transition-behavior: allow-discrete` ist erforderlich, um zu `display: none` zu wechseln. Weitere Details finden Sie in der [`transition-behavior`](/de/docs/Web/CSS/transition-behavior) Eigenschaft.

## Barrierefreiheit

Wenn die Textdeckkraft angepasst wird, ist es wichtig sicherzustellen, dass das Kontrastverhältnis zwischen der Farbe des Textes und dem Hintergrund, auf dem der Text platziert ist, hoch genug ist, dass Personen mit Einschränkungen des Sehvermögens den Inhalt der Seite lesen können.

Das Farbkontrastverhältnis wird bestimmt, indem die Leuchtkraft der in der Deckkraft angepassten Text- und Hintergrundfarbe verglichen wird. Um den aktuellen [Richtlinien für barrierefreie Webinhalte (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu entsprechen, ist ein Verhältnis von 4.5:1 für Textinhalte und 3:1 für größeren Text wie Überschriften erforderlich. Großer Text wird als 18.66px und [fett](/de/docs/Web/CSS/font-weight) oder größer, oder 24px oder größer definiert.

- [WebAIM: Farbkontrast-Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis der WCAG, Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgs-Kriteriums 1.4.3 | W3C Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

Verschiedene Betriebssysteme bieten eine Präferenz zur Reduzierung der Transparenz. Um die `opacity` basierend auf den Transparenzeinstellungen des Betriebssystems des Benutzers festzulegen, verwenden Sie die [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency) Media Query.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deckkraft einstellen

Das folgende Beispiel demonstriert, wie die `opacity` Eigenschaft die Deckkraft des gesamten Elements und Inhalts ändert und dadurch den Text sehr schwer lesbar macht.

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

### Deckkraft beim Hovern einstellen

Im folgenden Beispiel wird die Deckkraft beim Hovern geändert, sodass das gestreifte Hintergrundbild auf dem übergeordneten Element durch das Bild zu sehen ist.

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

### Stil basierend auf Benutzereinstellungen

Um Elemente basierend auf den Transparenzeinstellungen des Betriebssystems des Benutzers zu stylen, verwenden Sie die [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency) Media Query. Das folgende Beispiel zeigt, wie man die `prefers-color-scheme` Media Query verwendet, um die gewünschte `opacity` basierend auf den Präferenzen des Benutzers zu spezifizieren.

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
