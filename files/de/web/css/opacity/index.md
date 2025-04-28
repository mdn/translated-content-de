---
title: opacity
slug: Web/CSS/opacity
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{CSSRef}}

Die **`opacity`** [CSS](/de/docs/Web/CSS)-Eigenschaft setzt die Deckkraft eines Elements. Deckkraft ist das Maß, inwieweit der Inhalt hinter einem Element versteckt ist und das Gegenteil von Transparenz.

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

  - : Eine {{cssxref("number")}} im Bereich von `0.0` bis `1.0`, einschließlich, oder ein {{cssxref("percentage")}} im Bereich von `0%` bis `100%`, einschließlich, das die Deckkraft des Kanals darstellt (d.h. der Wert seines Alphakanals). Jeder Wert außerhalb des Intervalls wird, obwohl gültig, auf den nächsten Grenzwert im Bereich geklemmt.

    | Wert                                                   | Bedeutung                                                                         |
    | ------------------------------------------------------ | --------------------------------------------------------------------------------- |
    | `0`                                                    | Das Element ist vollständig transparent (d.h. unsichtbar).                        |
    | Jede {{cssxref("number")}} strikt zwischen `0` und `1` | Das Element ist durchscheinend (d.h. der Inhalt hinter dem Element ist sichtbar). |
    | `1` (Standardwert)                                     | Das Element ist vollständig undurchsichtig (visuell solide).                      |

## Beschreibung

`opacity` gilt für das gesamte Element, einschließlich seiner Inhalte, auch wenn der Wert nicht von Kindelementen geerbt wird. Daher haben das Element und seine Kinder alle die gleiche Deckkraft relativ zum Hintergrund des Elements, selbst wenn sie unterschiedliche Deckkräfte relativ zueinander haben.

Um nur die Deckkraft eines Hintergrundes zu ändern, verwenden Sie die {{cssxref("background")}}-Eigenschaft mit einem [Farbwert](/de/docs/Web/CSS/color_value), der einen Alphakanal erlaubt. Zum Beispiel:

```css
background: rgb(0 0 0 / 40%);
```

Wenn der `opacity`-Wert auf `0` gesetzt wird, erscheinen das Element und alle seine Kinder unsichtbar, bleiben jedoch Teil des DOMs. Das bedeutet, dass sie immer noch [Zeigereignisse](/de/docs/Web/API/Pointer_events) registrieren und, wenn die Elemente in einer Tab-Reihenfolge sind, Fokus erhalten. Für eine gute Benutzerfreundlichkeit stellen Sie sicher, dass solche Elemente sichtbar werden, wenn sie Benutzerinteraktionen erhalten, oder verwenden Sie die CSS-Eigenschaft [`pointer-events`](/de/docs/Web/CSS/pointer-events), um Zeigereignisse zu deaktivieren, und nehmen Sie das Element aus der Tab-Reihenfolge, indem Sie es mit dem `disabled`-Attribut deaktivieren oder [`tab-index="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) für nicht formularbezogene interaktive Elemente setzen.

Die Verwendung von `opacity` mit einem anderen Wert als `1` platziert das Element in einem neuen [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context).

Allein sollte `opacity` nicht verwendet werden, um Informationen für Screenreader bereitzustellen. Verwenden Sie das HTML-Attribut [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden), die CSS-Eigenschaften [`visibility`](/de/docs/Web/CSS/visibility) oder [`display`](/de/docs/Web/CSS/display). Es ist am besten, die Verwendung des Attributs [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) zu vermeiden, aber wenn das Element mit Deckkraft versteckt ist, dann verbergen Sie es auch vor Screenreader.

### Übergang von Deckkraft

Beim [Übergang](/de/docs/Web/CSS/CSS_transitions) der Deckkraft von Elementen, wenn Sie sie zur Seite hinzufügen, während der Inhalt zuvor mit [`visibility: hidden`](/de/docs/Web/CSS/visibility#hidden), [`display: none`](/de/docs/Web/CSS/display#none) oder [`content-visibility: hidden`](/de/docs/Web/CSS/content-visibility#hidden) versteckt war, müssen Sie sowohl eine [`@starting-style`](/de/docs/Web/CSS/@starting-style) als auch [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior#allow-discrete) einschließen:

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

Um erste Stilübergänge zu ermöglichen, sind `@starting-style`-Regeln erforderlich. Im obigen Code bietet das Setzen von `opacity: 0` in `@starting-style` einen Ausgangspunkt für den Übergang, wenn das Element seine anfängliche Stilaktualisierung erhält. Weitere Informationen finden Sie unter [`@starting-style`](/de/docs/Web/CSS/@starting-style).

Es ist erforderlich, `transition-behavior: allow-discrete` zu setzen, um auf `display: none` zu wechseln. Weitere Details finden Sie in der Eigenschaft [`transition-behavior`](/de/docs/Web/CSS/transition-behavior).

## Barrierefreiheit

Wenn die Textdeckkraft angepasst wird, ist es wichtig, sicherzustellen, dass das Kontrastverhältnis zwischen der Farbe des Textes und dem Hintergrund, auf dem der Text platziert ist, hoch genug ist, damit Menschen mit Sehbehinderungen den Inhalt der Seite lesen können.

Der Farbkontrast wird durch den Vergleich der Leuchtkraft der deckkraftangepassten Text- und Hintergrundfarbenwerte bestimmt. Um die aktuellen [Richtlinien für barrierefreie Webinhalte (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4,5:1 für Textinhalt und 3:1 für größeren Text wie Überschriften erforderlich. Großer Text ist definiert als 18,66px und [bold](/de/docs/Web/CSS/font-weight) oder größer, oder 24px oder größer.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis der WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

Verschiedene Betriebssysteme bieten eine Präferenz zur Reduzierung der Transparenz. Um die `opacity` basierend auf den Transparenzpräferenzen des Betriebssystems des Nutzers zu setzen, verwenden Sie die [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency)-Media-Query.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deckkraft einstellen

Das folgende Beispiel zeigt, wie die `opacity`-Eigenschaft die Deckkraft des gesamten Elements und seines Inhalts ändert, wodurch der Text sehr schwer zu lesen ist.

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

Im folgenden Beispiel wird die Deckkraft beim Hover geändert, sodass das gestreifte Hintergrundbild auf dem übergeordneten Element durch das Bild hindurch sichtbar wird.

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

Um Elemente basierend auf den Transparenzpräferenzen des Betriebssystems des Benutzers zu stylen, verwenden Sie die [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency)-Media-Query. Das folgende Beispiel zeigt, wie die `prefers-color-scheme`-Media-Query verwendet wird, um die gewünschte `opacity` basierend auf den Benutzerpräferenzen festzulegen.

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

{{Spezifikationen}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency) Media-Query
- [CSS-Farbe](/de/docs/Web/CSS/CSS_colors) Modul
- SVG {{SVGAttr("opacity")}} Attribut
