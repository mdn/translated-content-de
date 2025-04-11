---
title: ::placeholder
slug: Web/CSS/::placeholder
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Das **`::placeholder`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert den [Platzhaltertext](/de/docs/Web/HTML/Reference/Elements/input#placeholder) in einem {{HTMLElement("input")}}- oder {{HTMLElement("textarea")}}-Element.

{{InteractiveExample("CSS Demo: ::placeholder", "tabbed-shorter")}}

```css interactive-example
input {
  margin-top: 0.5rem;
}

input::placeholder {
  font-weight: bold;
  opacity: 0.5;
  color: red;
}
```

```html interactive-example
<label for="first-name">Your phone number:</label><br />

<input
  id="first-name"
  type="tel"
  name="phone"
  minlength="9"
  maxlength="9"
  placeholder="It must be 9 digits" />
```

Nur der Teil der CSS-Eigenschaften, die auf das {{cssxref("::first-line")}}-Pseudo-Element anwendbar sind, kann in einer Regel verwendet werden, die `::placeholder` in ihrem Selektor verwendet.

> [!NOTE]
> In den meisten Browsern erscheint der Platzhaltertext standardmäßig in einer durchscheinenden oder hellgrauen Farbe.

## Syntax

```css
::placeholder {
  /* ... */
}
```

## Barrierefreiheit

### Farbkontrast

#### Kontrastverhältnis

Platzhaltertext hat typischerweise eine hellere Farbbehandlung, um anzuzeigen, dass es sich um einen Vorschlag für die Art der gültigen Eingaben handelt und nicht um tatsächliche Eingaben.

Es ist wichtig sicherzustellen, dass das Kontrastverhältnis zwischen der Farbe des Platzhaltertextes und dem Hintergrund der Eingabe hoch genug ist, damit Menschen mit Sehbeeinträchtigungen es lesen können, während auch genügend Unterschied zwischen der Farbe des Platzhaltertextes und der Eingabetextfarbe besteht, damit Nutzer den Platzhalter nicht mit eingegebenen Daten verwechseln.

Das Farbkontrastverhältnis wird durch den Vergleich der Leuchtkraft der Werte von Platzhaltertext und Eingabehintergrundfarbe bestimmt. Um den aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu entsprechen, ist ein Verhältnis von 4,5:1 für Textinhalt und 3:1 für größeren Text wie Überschriften erforderlich. Großer Text wird als 18,66px fett oder größer bzw. 24px oder größer definiert.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis der WCAG, Erklärung zu Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

#### Nutzbarkeit

Platzhaltertext mit ausreichendem Farbkontrast kann als eingegebene Eingabe interpretiert werden. Platzhaltertext verschwindet auch, wenn jemand Inhalte in ein {{htmlelement("input")}}-Element eingibt. Diese Umstände können besonders für Menschen mit kognitiven Beeinträchtigungen das erfolgreiche Ausfüllen von Formularen beeinträchtigen.

Ein alternativer Ansatz, um Platzhalterinformationen bereitzustellen, besteht darin, sie außerhalb der Eingabe in unmittelbarer visueller Nähe einzuschließen und dann [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) zu verwenden, um das {{HTMLElement("input")}} programmatisch mit seinem Hinweis zu verknüpfen.

Mit dieser Implementierung sind die Hinweis-Inhalte auch verfügbar, wenn Informationen in das Eingabefeld eingegeben werden, und die Eingabe erscheint frei von vorbestehenden Eingaben, wenn die Seite geladen wird. Die meisten Bildschirmlesetechnologien verwenden `aria-describedby`, um den Hinweis nach dem angekündigten Eingabelabeltext zu lesen, und die Person, die den Bildschirmleser verwendet, kann ihn stumm schalten, wenn sie die zusätzlichen Informationen unnötig findet.

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

Im [Windows High Contrast Mode](https://www.smashingmagazine.com/2022/06/guide-windows-high-contrast-mode/) erscheint der Platzhaltertext mit demselben Styling wie vom Benutzer eingegebene Textinhalte. Dadurch wird es für einige Menschen schwierig zu bestimmen, welche Inhalte eingegeben und welche Platzhaltertexte sind.

### Labels

Platzhalter sind kein Ersatz für das {{htmlelement("label")}}-Element. Ohne ein Label, das programmatisch mit einer Eingabe durch eine Kombination der [`for`](/de/docs/Web/HTML/Reference/Elements/label#for)- und [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribute verknüpft ist, kann unterstützende Technologie wie Bildschirmleser {{htmlelement("input")}}-Elemente nicht parsen.

- [Platzhalter in Formularfeldern sind schädlich — Nielsen Norman Group](https://www.nngroup.com/articles/form-design-placeholders/)

## Beispiele

### Platzhalterdarstellung ändern

Dieses Beispiel zeigt einige Anpassungen, die Sie an den Stilen des Platzhaltertextes vornehmen können.

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

Einige Browser machen Platzhaltertext weniger durchsichtig. Wenn Sie vollständig opaken Text wünschen, dann setzen Sie den Wert der {{CSSXref("color")}}-Eigenschaft explizit. Der [`currentColor`](/de/docs/Web/CSS/color_value#currentcolor_keyword)-Wert kann verwendet werden, um die gleiche Farbe wie das entsprechende Eingabeelement zu haben.

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
> Beachten Sie, dass Browser unterschiedliche Standardfarben für Platzhaltertext verwenden. Zum Beispiel benutzt Firefox die Farbe des Eingabeelements mit 54% Deckkraft, und Chrome verwendet die Farbe `darkgray`. Wenn Sie eine konsistente Platzhaltertextfarbe über die Browser hinweg wünschen, setzen Sie die `color` explizit.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{cssxref(":placeholder-shown")}}-Pseudoklasse stylt ein Element, das einen aktiven Platzhalter _hat_.
- Verwandte HTML-Elemente: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}
- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
