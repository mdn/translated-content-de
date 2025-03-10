---
title: opacity
slug: Web/CSS/opacity
l10n:
  sourceCommit: 9b9086cf753e2d5721fe1229ff6f767ccf512f97
---

{{CSSRef}}

Die **`opacity`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Deckkraft eines Elements fest. Deckkraft ist der Grad, zu dem der Inhalt hinter einem Element verborgen ist, und ist das Gegenteil von Transparenz.

{{EmbedInteractiveExample("pages/css/opacity.html")}}

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

  - : Ein {{cssxref("number")}} im Bereich von `0.0` bis `1.0`, einschließlich, oder ein {{cssxref("percentage")}} im Bereich von `0%` bis `100%`, einschließlich, der die Deckkraft des Kanals repräsentiert (das heißt, den Wert seines Alphakanals). Jeder Wert außerhalb des Intervalls wird, obwohl gültig, auf das nächste Limit im Bereich geklammert.

    | Wert                                                    | Bedeutung                                                                         |
    | ------------------------------------------------------- | --------------------------------------------------------------------------------- |
    | `0`                                                     | Das Element ist vollständig transparent (d.h. unsichtbar).                        |
    | Jeder {{cssxref("number")}} streng zwischen `0` und `1` | Das Element ist durchscheinend (d.h. der Inhalt hinter dem Element ist sichtbar). |
    | `1` (Standardwert)                                      | Das Element ist vollkommen undurchsichtig (visuell solide).                       |

## Beschreibung

`opacity` gilt für das gesamte Element einschließlich seiner Inhalte, auch wenn der Wert nicht von Kindelementen geerbt wird. Somit haben das Element und seine Kinder alle die gleiche Deckkraft relativ zum Hintergrund des Elements, auch wenn sie unterschiedliche Deckkräfte zueinander haben.

Um nur die Deckkraft eines Hintergrunds zu ändern, verwenden Sie die {{cssxref("background")}} Eigenschaft mit einem [Farbwert](/de/docs/Web/CSS/color_value), der einen Alphakanal zulässt. Zum Beispiel:

```css
background: rgb(0 0 0 / 40%);
```

Wenn der `opacity`-Wert auf `0` gesetzt ist, erscheinen das Element und alle seine Kinder unsichtbar, sind jedoch immer noch Teil des DOM. Das bedeutet, dass sie immer noch [pointer events](/de/docs/Web/API/Pointer_events) registrieren und, wenn die Elemente in einer Tab-Reihenfolge sind, den Fokus erhalten. Für eine gute Benutzerfreundlichkeit stellen Sie sicher, dass solche Elemente sichtbar werden, wenn sie Benutzerinteraktionen erhalten, oder verwenden Sie die CSS-Eigenschaft [`pointer-events`](/de/docs/Web/CSS/pointer-events), um Zeigerereignisse zu deaktivieren, und nehmen Sie das Element aus der Tab-Reihenfolge, indem Sie das `disabled`-Attribut deaktivieren oder [`tab-index="-1"`](/de/docs/Web/HTML/Global_attributes/tabindex) für nicht formularbezogene interaktive Elemente setzen.

Die Verwendung von `opacity` mit einem anderen Wert als `1` platziert das Element in einem neuen [Stacking Context](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context).

Deckkraft allein sollte nicht verwendet werden, um Informationen an Bildschirmleser bereitzustellen. Verwenden Sie das HTML-Attribut [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden), die CSS-Eigenschaften [`visibility`](/de/docs/Web/CSS/visibility) oder [`display`](/de/docs/Web/CSS/display). Es ist am besten, das Attribut [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) zu vermeiden, aber wenn das Element mit Deckkraft versteckt ist, verstecken Sie es auch vor Bildschirmlesern.

### Übergang der Deckkraft

Beim [Übergang](/de/docs/Web/CSS/CSS_transitions) der Deckkraft von Elementen, die Sie der Seite hinzufügen, wenn der Inhalt zuvor mit [`visibility: hidden`](/de/docs/Web/CSS/visibility#hidden), [`display: none`](/de/docs/Web/CSS/display#none) oder [`content-visibility: hidden`](/de/docs/Web/CSS/content-visibility#hidden) ausgeblendet war, müssen Sie sowohl einen [`@starting-style`](/de/docs/Web/CSS/@starting-style) als auch [`transition-behaviour: allow-discrete`](/de/docs/Web/CSS/transition-behavior#allow-discrete) einbeziehen:

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

Um Erstanbieterstile-Übergänge zu ermöglichen, sind `@starting-style`-Regeln erforderlich. Im obigen Code bietet `opacity: 0` in `@starting-style` einen Ausgangspunkt für den Übergang, wenn das Element sein initiales Stil-Update erhält. Für mehr Details siehe [`@starting-style`](/de/docs/Web/CSS/@starting-style).

Das Setzen von `transition-behavior: allow-discrete` ist erforderlich, um zu `display: none` zu wechseln. Siehe die [`transition-behavior`](/de/docs/Web/CSS/transition-behavior) Eigenschaft für mehr Details.

## Barrierefreiheit

Wenn die Textdeckkraft angepasst wird, ist es wichtig sicherzustellen, dass das Kontrastverhältnis zwischen der Farbe des Textes und dem Hintergrund, über den der Text platziert wird, hoch genug ist, damit Menschen mit Sehschwächen den Inhalt der Seite lesen können.

Das Farbkontrastverhältnis wird durch den Vergleich der Leuchtkraft der deckkraftangepassten Text- und Hintergrundfarbwerte bestimmt. Um die aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, wird ein Verhältnis von 4.5:1 für Textinhalte und 3:1 für größeren Text wie Überschriften benötigt. Großer Text wird als 18.66px und [fett](/de/docs/Web/CSS/font-weight) oder größer oder 24px oder größer definiert.

- [WebAIM: Farbkonstrast-Prüfer](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis WCAG, Guideline 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Success Criterion 1.4.3 verstehen | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

Verschiedene Betriebssysteme bieten eine Präferenz zur Verringerung der Transparenz. Um die `opacity` basierend auf den Transparenzeinstellungen des Benutzersystems festzulegen, verwenden Sie die [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency) Medienabfrage.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deckkraft setzen

Das folgende Beispiel zeigt, wie die Eigenschaft `opacity` die Deckkraft des gesamten Elements und Inhalts ändert, sodass der Text sehr schwer zu lesen ist.

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

### Deckkraft bei Hover setzen

Im folgenden Beispiel ändert sich die Deckkraft beim Hover, sodass das gestreifte Hintergrundbild auf dem Elternelement durch das Bild hindurchscheint.

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

### Stilgestaltung basierend auf Benutzervorlieben

Um Elemente basierend auf den Transparenzeinstellungen des Betriebssystems des Benutzers zu stylen, verwenden Sie die [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency) Medienabfrage. Das folgende Beispiel zeigt, wie die `prefers-color-scheme` Medienabfrage verwendet wird, um die gewünschte `opacity` basierend auf den Präferenzen des Benutzers anzugeben.

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
- [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors)
- SVG {{SVGAttr("opacity")}} Attribut
