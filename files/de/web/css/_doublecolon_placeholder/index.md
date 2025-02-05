---
title: "::placeholder"
slug: Web/CSS/::placeholder
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Der **`::placeholder`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert den [Platzhaltertext](/de/docs/Web/HTML/Element/input#placeholder) in einem {{HTMLElement("input")}}- oder {{HTMLElement("textarea")}}-Element.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-placeholder.html", "tabbed-shorter")}}

Nur die Untermenge von CSS-Eigenschaften, die auf das {{cssxref("::first-line")}}-Pseudo-Element anwendbar sind, kann in einer Regel verwendet werden, die `::placeholder` in ihrem Selektor verwendet.

> [!NOTE]
> In den meisten Browsern erscheint der Platzhaltertext standardmäßig als durchscheinende oder hellgraue Farbe.

## Syntax

```css
::placeholder {
  /* ... */
}
```

## Barrierefreiheit

### Farbkontrast

#### Kontrastverhältnis

Platzhaltertext hat typischerweise eine hellere Farbgebung, um anzuzeigen, dass er einen Vorschlag für gültige Eingaben darstellt und keine tatsächliche Eingabe. Es ist wichtig sicherzustellen, dass das Kontrastverhältnis zwischen der Farbe des Platzhaltertextes und dem Hintergrund des Eingabefeldes hoch genug ist, damit Personen mit Sehbehinderungen diesen lesen können, und gleichzeitig sicherzustellen, dass ein ausreichender Unterschied zwischen dem Platzhaltertext und der Farbe des eingegebenen Textes besteht, damit Benutzer den Platzhalter nicht mit eingegebenen Daten verwechseln.

Das Kontrastverhältnis wird durch den Vergleich der Helligkeit des Platzhaltertextes und der hinterlegten Eingabefarbe bestimmt. Um die aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, wird ein Verhältnis von 4,5:1 für Textinhalte und 3:1 für größeren Text wie Überschriften benötigt. Großer Text wird definiert als 18,66 px und fett oder größer, oder 24 px oder größer.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis von WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

#### Benutzerfreundlichkeit

Platzhaltertext mit ausreichendem Farbkontrast kann als eingegebene Eingabe interpretiert werden. Platzhaltertext verschwindet auch, wenn jemand Inhalte in ein {{htmlelement("input")}}-Element eingibt. Beide Umstände können den erfolgreichen Abschluss eines Formulars beeinträchtigen, insbesondere für Personen mit kognitiven Einschränkungen.

Ein alternativer Ansatz zur Bereitstellung von Platzhalterinformationen besteht darin, diese außerhalb des Eingabefeldes in unmittelbarer visueller Nähe bereitzustellen und dann [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) zu verwenden, um das {{HTMLElement("input")}} programmgesteuert mit seinem Hinweis zu verknüpfen.

Bei dieser Implementierung sind die Hinweisinhalte auch verfügbar, wenn Informationen in das Eingabefeld eingetragen werden, und die Eingabe erscheint frei von bereits vorhandenen Inhalten, wenn die Seite geladen wird. Die meisten Screenreader-Technologien verwenden `aria-describedby`, um den Hinweis nach dem Vorlesen des Eingabeetiketts vorzulesen, und die Person, die den Screenreader verwendet, kann es deaktivieren, wenn sie die zusätzlichen Informationen nicht benötigt.

```html
<label for="user-email">Your email address</label>
<span id="user-email-hint" class="input-hint">Example: jane@sample.com</span>
<input
  id="user-email"
  aria-describedby="user-email-hint"
  name="email"
  type="email" />
```

- [Platzhalter in Formularfeldern sind schädlich — Nielsen Norman Group](https://www.nngroup.com/articles/form-design-placeholders/)

### Windows High Contrast Mode

Platzhaltertext wird im [Windows High Contrast Mode](https://www.smashingmagazine.com/2022/06/guide-windows-high-contrast-mode/) mit demselben Stil wie vom Benutzer eingegebener Text angezeigt. Dies kann es einigen Menschen erschweren zu erkennen, welche Inhalte eingegeben wurden und welche Platzhaltertext sind.

### Labels

Platzhalter sind kein Ersatz für das {{htmlelement("label")}}-Element. Ohne ein Label, das programmgesteuert mit einer Eingabe durch die Kombination der Attribute [`for`](/de/docs/Web/HTML/Element/label#for) und [`id`](/de/docs/Web/HTML/Global_attributes/id) verknüpft wurde, kann assistive Technologie wie ein Screenreader keine {{htmlelement("input")}}-Elemente parsen.

- [Platzhalter in Formularfeldern sind schädlich — Nielsen Norman Group](https://www.nngroup.com/articles/form-design-placeholders/)

## Beispiele

### Platzhalterdarstellung ändern

Dieses Beispiel zeigt einige der Anpassungen, die Sie am Stil von Platzhaltertext vornehmen können.

#### HTML

```html
<input placeholder="Type here" />
```

#### CSS

```css
input::placeholder {
  color: red;
  font-size: 1.2em;
  font-style: italic;
  opacity: 0.5;
}
```

#### Ergebnis

{{EmbedLiveSample("Change_placeholder_appearance", 200, 60)}}

### Opaquer Text

Einige Browser machen Platzhaltertext weniger deckend. Wenn Sie vollständig deckenden Text möchten, setzen Sie den Wert der Eigenschaft {{CSSXref("color")}} explizit. Der Wert [`currentColor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) kann verwendet werden, um dieselbe Farbe wie das zugehörige Eingabeelement zu haben.

#### HTML

```html
<input placeholder="Color set by browser" />
<input placeholder="Same color as input" class="explicit-color" />
<input placeholder="Semi-opaque text color" class="opacity-change" />
```

#### CSS

```css
input {
  font-weight: bold;
  color: green;
}

.explicit-color::placeholder {
  /* use the same color as input element to avoid the browser set default color */
  color: currentColor;
}

.opacity-change::placeholder {
  /* less opaque text */
  color: color-mix(in srgb, currentColor 70%, transparent);
}
```

#### Ergebnis

{{EmbedLiveSample("default_color", 200, 60)}}

> [!NOTE]
> Beachten Sie, dass Browser unterschiedliche Standardfarben für Platzhaltertext verwenden. Beispielsweise verwendet Firefox die Farbe des Eingabeelements mit 54% Deckkraft, und Chrome verwendet die Farbe `darkgray`. Wenn Sie eine einheitliche Platzhaltertextfarbe in allen Browsern möchten, setzen Sie die `color`-Eigenschaft explizit.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{cssxref(":placeholder-shown")}} Pseudo-Class formatiert ein Element, das _einen_ aktiven Platzhalter hat.
- Verwandte HTML-Elemente: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}
- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
