---
title: Deckkraft
slug: Web/CSS/opacity
l10n:
  sourceCommit: 46a2eda1ce316d5c2c789104c28bc4fdaee5ab8b
---

{{CSSRef}}

Die **`opacity`** [CSS](/de/docs/Web/CSS)-Eigenschaft setzt die Deckkraft eines Elements. Deckkraft ist der Grad, in dem Inhalte hinter einem Element verborgen sind, und ist das Gegenteil von Transparenz.

{{EmbedInteractiveExample("pages/css/opacity.html")}}

## Syntax

```css
opacity: 0.9;
opacity: 90%;

/* Globale Werte */
opacity: inherit;
opacity: initial;
opacity: revert;
opacity: revert-layer;
opacity: unset;
```

### Werte

- `<alpha-value>`

  - : Eine {{cssxref("number")}} im Bereich von `0.0` bis `1.0`, einschließlich, oder ein {{cssxref("percentage")}} im Bereich von `0%` bis `100%`, einschließlich, das die Deckkraft des Kanals darstellt (das ist der Wert seines Alphakanals). Jeder Wert außerhalb des Intervalls wird, obwohl gültig, auf den nächsten Grenzwert im Bereich geklammert.

    | Wert                                                  | Bedeutung                                                                    |
    | ------------------------------------------------------ | ----------------------------------------------------------------------------- |
    | `0`                                                    | Das Element ist vollständig transparent (d. h. unsichtbar).                  |
    | Jede {{cssxref("number")}} strikt zwischen `0` und `1` | Das Element ist transluzent (d. h. der Inhalt hinter dem Element ist sichtbar). |
    | `1` (Standardwert)                                     | Das Element ist vollständig undurchsichtig (visuell solid).                   |

## Beschreibung

`opacity` wirkt auf das gesamte Element, einschließlich seiner Inhalte, obwohl der Wert nicht von Kindelementen geerbt wird. Somit haben das Element und seine Kinder alle die gleiche Deckkraft relativ zum Hintergrund des Elements, auch wenn sie unterschiedliche Deckkräfte relativ zueinander haben.

Um die Deckkraft nur eines Hintergrunds zu ändern, verwenden Sie die {{cssxref("background")}}-Eigenschaft mit einem [Farbwert](/de/docs/Web/CSS/color_value), der einen Alphakanal zulässt. Zum Beispiel:

```css
background: rgb(0 0 0 / 40%);
```

Wenn der `opacity`-Wert auf `0` gesetzt wird, erscheinen das Element und alle seine Kinder unsichtbar, sind aber immer noch Teil des DOM. Das bedeutet, dass sie weiterhin [Pointer-Ereignisse](/de/docs/Web/API/Pointer_events) registrieren und, wenn die Elemente in einer Tab-Reihenfolge sind, auch den Fokus erhalten. Für eine gute Benutzerfreundlichkeit stellen Sie sicher, dass solche Elemente sichtbar werden, sobald sie Benutzerinteraktionen erhalten oder verwenden Sie die CSS-Eigenschaft [`pointer-events`](/de/docs/Web/CSS/pointer-events), um Pointer-Ereignisse zu deaktivieren und das Element durch Deaktivieren mit dem `disabled`-Attribut oder Setzen von [`tab-index="-1"`](/de/docs/Web/HTML/Global_attributes/tabindex) aus der Tab-Reihenfolge zu entfernen.

Die Verwendung von `opacity` mit einem anderen Wert als `1` platziert das Element in einem neuen [Stapelhierarchiekontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context).

Deckkraft allein sollte nicht verwendet werden, um Informationen an Bildschirmleser bereitzustellen. Verwenden Sie das HTML-Attribut [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden), die CSS-Eigenschaften [`visibility`](/de/docs/Web/CSS/visibility) oder [`display`](/de/docs/Web/CSS/display). Es ist am besten, die Verwendung des [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)-Attributs zu vermeiden, aber wenn das Element aufgrund der Deckkraft verborgen ist, dann verbergen Sie es auch vor Bildschirmlesern.

### Übergang der Deckkraft

Beim [Übergang](/de/docs/Web/CSS/CSS_transitions) der Deckkraft von Elementen, die der Seite hinzugefügt werden, wenn der Inhalt zuvor mit [`visibility: hidden`](/de/docs/Web/CSS/visibility#hidden), [`display: none`](/de/docs/Web/CSS/display#none) oder [`content-visibility: hidden`](/de/docs/Web/CSS/content-visibility#hidden) verborgen war, müssen sowohl ein [`@starting-style`](/de/docs/Web/CSS/@starting-style) als auch [`transition-behaviour: allow-discrete`](/de/docs/Web/CSS/transition-behavior#allow-discrete) enthalten sein:

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

Um Übergänge des Anfangsstils zu ermöglichen, sind `@starting-style`-Regeln erforderlich. Im obigen Code bietet das Setzen von `opacity: 0` in `@starting-style` einen Ausgangspunkt für den Übergang, wenn das Element seine anfängliche Stilaktualisierung erhält. Für mehr Details, siehe [`@starting-style`](/de/docs/Web/CSS/@starting-style).

Das Setzen von `transition-behavior: allow-discrete` ist erforderlich, um zu `display: none` zu wechseln. Siehe die [`transition-behavior`](/de/docs/Web/CSS/transition-behavior) Eigenschaft für weitere Details.

## Barrierefreiheit

Wenn die Textdeckkraft angepasst wird, ist es wichtig sicherzustellen, dass das Kontrastverhältnis zwischen der Farbe des Textes und dem Hintergrund, auf dem der Text platziert ist, hoch genug ist, damit Personen mit Sehbehinderungen den Inhalt der Seite lesen können.

Das Farbkontrastverhältnis wird bestimmt, indem die Helligkeit der opazitär angepassten Text- und Hintergrundfarbwerte verglichen wird. Um den aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu entsprechen, ist ein Verhältnis von 4.5:1 für Textinhalte und 3:1 für größeren Text wie Überschriften erforderlich. Großer Text ist definiert als 18.66px und [fett](/de/docs/Web/CSS/font-weight) oder größer oder 24px oder größer.

- [WebAIM: Farbkontrast-Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis von WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

Verschiedene Betriebssysteme bieten eine Präferenz zur Reduzierung von Transparenz. Um die `opacity` basierend auf den Transparenzeinstellungen des Betriebssystems des Benutzers festzulegen, verwenden Sie die [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency) Media-Query.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen der Deckkraft

Das folgende Beispiel zeigt, wie die Eigenschaft `opacity` die Deckkraft des gesamten Elements und Inhalts ändert und so den Text sehr schwer lesbar macht.

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
  opacity: 0.2; /* Text ist kaum sichtbar über dem Hintergrund */
}
.medium {
  opacity: 0.5; /* Text ist klarer sichtbar über dem Hintergrund */
}
.heavy {
  opacity: 0.9; /* Text ist sehr klar sichtbar über dem Hintergrund */
}
```

#### Ergebnis

{{EmbedLiveSample('Setting_opacity', '640', '105')}}

### Deckkraft bei Hover setzen

Im folgenden Beispiel wird die Deckkraft beim Hover geändert, sodass das gestreifte Hintergrundbild des Elternelements durch das Bild sichtbar wird.

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

### Styling basierend auf Benutzereinstellungen

Um Elemente basierend auf den Transparenzeinstellungen des Betriebssystems des Benutzers zu stylen, verwenden Sie die [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency) Media-Query. Das folgende Beispiel zeigt, wie Sie die Media-Query `prefers-color-scheme` verwenden, um die gewünschte `opacity` basierend auf den Benutzerpräferenzen festzulegen.

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

- [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency) Media-Query
- [CSS Farbmodul](/de/docs/Web/CSS/CSS_colors)
