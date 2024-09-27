---
title: opacity
slug: Web/CSS/opacity
l10n:
  sourceCommit: 46a2eda1ce316d5c2c789104c28bc4fdaee5ab8b
---

{{CSSRef}}

Die **`opacity`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Sichtbarkeit eines Elements fest. Sichtbarkeit ist der Grad, zu dem Inhalte hinter einem Element verborgen sind, und steht im Gegensatz zur Transparenz.

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

  - : Eine {{cssxref("number")}} im Bereich von `0.0` bis `1.0`, einschließlich, oder ein {{cssxref("percentage")}} im Bereich von `0%` bis `100%`, einschließlich, die die Deckkraft des Kanals darstellt (d. h. den Wert seines Alpha-Kanals). Jeder Wert außerhalb des Intervalls wird auf das nächste Limit im Bereich begrenzt, obwohl er gültig ist.

    | Wert                                                               | Bedeutung                                                                           |
    | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
    | `0`                                                                | Das Element ist vollständig transparent (d. h. unsichtbar).                         |
    | Jeder {{cssxref("number")}}, der strikt zwischen `0` und `1` liegt | Das Element ist durchscheinend (d. h., der Inhalt hinter dem Element ist sichtbar). |
    | `1` (Standardwert)                                                 | Das Element ist vollständig undurchsichtig (visuell solide).                        |

## Beschreibung

`opacity` gilt für das gesamte Element, einschließlich seines Inhalts, obwohl der Wert nicht von Kindelementen geerbt wird. Somit haben das Element und seine Kinder alle die gleiche Deckkraft relativ zum Hintergrund des Elements, selbst wenn sie unterschiedliche Deckkräfte im Vergleich zueinander haben.

Um nur die Deckkraft eines Hintergrunds zu ändern, verwenden Sie die {{cssxref("background")}} Eigenschaft mit einem [Farbwert](/de/docs/Web/CSS/color_value), der einen Alpha-Kanal erlaubt. Zum Beispiel:

```css
background: rgb(0 0 0 / 40%);
```

Wenn der `opacity` Wert auf `0` gesetzt ist, erscheinen das Element und alle seine Kinder unsichtbar, sind aber immer noch Teil des DOM. Das bedeutet, dass sie weiterhin [Pointer-Ereignisse](/de/docs/Web/API/Pointer_events) registrieren und, wenn die Elemente in einer Tab-Reihenfolge sind, sie den Fokus erhalten. Für eine gute Benutzerfreundlichkeit stellen Sie sicher, dass solche Elemente sichtbar werden, wenn sie Benutzerinteraktionen erhalten, oder verwenden Sie die CSS-Eigenschaft [`pointer-events`](/de/docs/Web/CSS/pointer-events), um Pointer-Ereignisse zu deaktivieren und das Element aus der Tab-Reihenfolge herauszunehmen, indem Sie das `disabled` Attribut verwenden oder [`tab-index="-1"`](/de/docs/Web/HTML/Global_attributes/tabindex) für nicht formularbezogene interaktive Elemente setzen.

Das Verwenden von `opacity` mit einem anderen Wert als `1` platziert das Element in einem neuen [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context).

Deckkraft allein sollte nicht verwendet werden, um Informationen an Screenreader zu übermitteln. Verwenden Sie das HTML-Attribut [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden), die CSS-Eigenschaften [`visibility`](/de/docs/Web/CSS/visibility) oder [`display`](/de/docs/Web/CSS/display). Es ist am besten, das Attribut [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) zu vermeiden, aber wenn das Element mit Deckkraft versteckt ist, dann verstecken Sie es auch vor Screenreadern.

### Transitioning Deckkraft

Wenn Sie die Deckkraft von Elementen ändern, während Sie sie zur Seite hinzufügen, wenn Inhalte zuvor mit [`visibility: hidden`](/de/docs/Web/CSS/visibility#hidden), [`display: none`](/de/docs/Web/CSS/display#none) oder [`content-visibility: hidden`](/de/docs/Web/CSS/content-visibility#hidden) verborgen waren, müssen Sie sowohl einen [`@starting-style`](/de/docs/Web/CSS/@starting-style) als auch [`transition-behaviour: allow-discrete`](/de/docs/Web/CSS/transition-behavior#allow-discrete) einbeziehen:

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

Um Erststil-Transitionen zu ermöglichen, sind `@starting-style` Regeln erforderlich. Im obigen Code wird durch das Setzen von `opacity: 0` in `@starting-style` ein Ausgangspunkt für die Transition festgelegt, wenn das Element sein erstes Stil-Update erhält. Für weitere Details siehe [`@starting-style`](/de/docs/Web/CSS/@starting-style).

`transition-behavior: allow-discrete` muss festgelegt werden, um zu `display: none` zu wechseln. Siehe die Eigenschaft [`transition-behavior`](/de/docs/Web/CSS/transition-behavior) für weitere Details.

## Barrierefreiheit

Wenn die Textdeckkraft angepasst wird, ist es wichtig sicherzustellen, dass der Kontrast zwischen der Farbe des Textes und dem Hintergrund, über dem der Text platziert ist, hoch genug ist, damit Personen mit Sehbehinderungen den Inhalt der Seite lesen können.

Das Farbkontrastverhältnis wird bestimmt, indem die Leuchtkraft der deckkraftangepassten Text- und Hintergrundfarbwerte verglichen wird. Um die aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4,5:1 für Textinhalt und 3:1 für größeren Text wie Überschriften erforderlich. Großtext wird als 18,66px und [fett](/de/docs/Web/CSS/font-weight) oder größer, oder 24px oder größer definiert.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

Verschiedene Betriebssysteme bieten eine Option zur Reduzierung von Transparenz. Um die `opacity` basierend auf den Transparenzeinstellungen des Benutzerbetriebssystems festzulegen, verwenden Sie die [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency) Medienabfrage.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deckkraft einstellen

Das folgende Beispiel zeigt, wie die `opacity` Eigenschaft die Deckkraft des gesamten Elements und Inhalts verändert, wodurch der Text schwer lesbar wird.

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

Im folgenden Beispiel wird die Deckkraft beim Hover verändert, sodass das Streifenhintergrundbild auf dem Elternelement durch das Bild hindurchscheint.

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

### Stil basierend auf Benutzerpräferenzen

Um Elemente basierend auf den Transparenzeinstellungen des Betriebssystems des Benutzers zu gestalten, verwenden Sie die [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency) Medienabfrage. Das folgende Beispiel zeigt, wie die Medienabfrage `prefers-color-scheme` verwendet wird, um die gewünschte `opacity` basierend auf den Benutzereinstellungen festzulegen.

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
- [CSS-Farbe](/de/docs/Web/CSS/CSS_colors) Modul
