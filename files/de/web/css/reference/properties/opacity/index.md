---
title: opacity
slug: Web/CSS/Reference/Properties/opacity
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`opacity`**-[CSS](/de/docs/Web/CSS) Eigenschaft legt die Opazität eines Elements fest. Die Opazität bestimmt, in welchem Maße der Inhalt hinter einem Element verborgen ist, und ist das Gegenteil von Transparenz.

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
  - : Eine {{cssxref("number")}} im Bereich von `0,0` bis `1,0`, einschließlich, oder ein {{cssxref("percentage")}} im Bereich von `0%` bis `100%`, einschließlich, der die Opazität des Kanals darstellt (das heißt, den Wert seines Alpha-Kanals). Jeder Wert außerhalb des Intervalls, obwohl gültig, wird auf das nächste Limit im Bereich begrenzt.

    | Wert                                                   | Bedeutung                                                                          |
    | ------------------------------------------------------ | ---------------------------------------------------------------------------------- |
    | `0`                                                    | Das Element ist vollständig transparent (d.h. unsichtbar).                        |
    | Jede {{cssxref("number")}} strikt zwischen `0` und `1` | Das Element ist durchscheinend (d.h. der Inhalt hinter dem Element ist sichtbar). |
    | `1` (Standardwert)                                     | Das Element ist vollständig opak (visuell solid).                                  |

## Beschreibung

`opacity` bezieht sich auf das gesamte Element, einschließlich seines Inhalts, obwohl der Wert nicht von Kindelementen geerbt wird. Somit haben das Element und seine Kinder alle die gleiche Opazität relativ zum Hintergrund des Elements, auch wenn sie unterschiedliche Opazitäten relativ zueinander haben.

Um die Opazität nur eines Hintergrunds zu ändern, verwenden Sie die {{cssxref("background")}}-Eigenschaft mit einem [Farbwert](/de/docs/Web/CSS/Reference/Values/color_value), der einen Alpha-Kanal zulässt. Zum Beispiel:

```css
background: rgb(0 0 0 / 40%);
```

Wenn der `opacity`-Wert auf `0` gesetzt ist, erscheinen das Element und alle seine Kinder unsichtbar, sind jedoch weiterhin Teil des DOM. Das bedeutet, dass sie weiterhin [Pointer-Events](/de/docs/Web/API/Pointer_events) registrieren und, wenn die Elemente in einer Tab-Reihenfolge sind, den Fokus erhalten. Um eine gute Benutzerfreundlichkeit sicherzustellen, sollten Sie solche Elemente sichtbar machen, wenn sie Benutzerinteraktionen erhalten, oder die CSS-Eigenschaft [`pointer-events`](/de/docs/Web/CSS/Reference/Properties/pointer-events) verwenden, um Pointer-Events zu deaktivieren und das Element aus der Tab-Reihenfolge zu entfernen, indem Sie es mit dem `disabled`-Attribut deaktivieren oder [`tab-index="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) für nicht formularbezogene interaktive Elemente festlegen.

Die Verwendung von `opacity` mit einem anderen Wert als `1` platziert das Element in einem neuen [Stacking Context](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context).

Opazität allein sollte nicht verwendet werden, um Screenreadern Informationen bereitzustellen. Verwenden Sie das HTML-Attribut [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden), CSS [`visibility`](/de/docs/Web/CSS/Reference/Properties/visibility) oder CSS [`display`](/de/docs/Web/CSS/Reference/Properties/display)-Stileigenschaften. Es ist am besten, die Verwendung des [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)-Attributs zu vermeiden, aber wenn das Element mit Opazität versteckt ist, verstecken Sie es auch vor Screenreadern.

### Übergang der Opazität

Wenn [Übergänge](/de/docs/Web/CSS/CSS_transitions) der Opazität von Elementen beim Hinzufügen zur Seite fortschreiten, wenn der Inhalt zuvor mit [`visibility: hidden`](/de/docs/Web/CSS/Reference/Properties/visibility#hidden), [`display: none`](/de/docs/Web/CSS/Reference/Properties/display#none) oder [`content-visibility: hidden`](/de/docs/Web/CSS/Reference/Properties/content-visibility#hidden) verborgen war, müssen sowohl ein [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style) als auch [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior#allow-discrete) enthalten sein:

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

Um Übergänge des ersten Stils zu ermöglichen, sind `@starting-style`-Regeln erforderlich. Im obigen Code bietet das Setzen von `opacity: 0` in `@starting-style` einen Startpunkt für den Übergang, wenn das Element sein anfängliches Stil-Update erhält. Weitere Details finden Sie unter [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style).

Das Setzen von `transition-behavior: allow-discrete` ist erforderlich, um zu `display: none` zu wechseln. Weitere Details finden Sie in der Eigenschaft [`transition-behavior`](/de/docs/Web/CSS/Reference/Properties/transition-behavior).

## Barrierefreiheit

Wenn die Textopazität angepasst wird, ist es wichtig sicherzustellen, dass das Kontrastverhältnis zwischen der Farbe des Textes und dem Hintergrund, über dem der Text platziert ist, hoch genug ist, damit Personen mit Sehschwächen den Inhalt der Seite lesen können.

Das Farbkontrastverhältnis wird ermittelt, indem die Helligkeit der opazitätsangepassten Text- und Hintergrundfarbwerte verglichen wird. Um die aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4,5:1 für Textinhalte und 3:1 für größeren Text wie Überschriften erforderlich. Großer Text ist definiert als 18,66px und [fett](/de/docs/Web/CSS/Reference/Properties/font-weight) oder größer, oder 24px oder größer.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis der WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erklärung des Erfolgskriteriums 1.4.3 | W3C Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

Verschiedene Betriebssysteme bieten eine Einstellung zur Verringerung der Transparenz. Um die `opacity` basierend auf den Transparenzeinstellungen des Benutzers im Betriebssystem festzulegen, verwenden Sie die [`prefers-reduced-transparency`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency) Media Query.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Opazität festlegen

Das folgende Beispiel zeigt, wie die `opacity`-Eigenschaft die Opazität des gesamten Elements und Inhalts ändert und so den Text sehr schwer lesbar macht.

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

### Opazität beim Hover festlegen

Im folgenden Beispiel wird die Opazität beim Hover geändert, sodass das gestreifte Hintergrundbild auf dem Elternelement durch das Bild hindurch sichtbar wird.

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

### Stil basierend auf Benutzereinstellungen

Um Elemente basierend auf den Transparenzeinstellungen des Benutzers im Betriebssystem zu stylen, verwenden Sie die [`prefers-reduced-transparency`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency) Media Query. Das folgende Beispiel zeigt, wie die Media Query `prefers-color-scheme` verwendet wird, um die gewünschte `opacity` basierend auf den Einstellungen des Benutzers anzugeben.

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
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
- SVG {{SVGAttr("opacity")}} Attribut
