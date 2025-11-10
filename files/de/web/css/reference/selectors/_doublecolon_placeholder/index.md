---
title: ::placeholder
slug: Web/CSS/Reference/Selectors/::placeholder
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das **`::placeholder`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert den [Platzhaltertext](/de/docs/Web/HTML/Reference/Elements/input#placeholder) in einem {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} Element.

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

Nur die Teilmenge von CSS-Eigenschaften, die auf das {{cssxref("::first-line")}} Pseudoelement angewendet werden können, kann in einer Regel mit `::placeholder` im Selektor verwendet werden.

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

Platzhaltertext hat typischerweise eine hellere Farbgebung, um anzuzeigen, dass er einen Vorschlag für gültige Eingaben darstellt und keine tatsächliche Eingabe ist.

Es ist wichtig, sicherzustellen, dass das Kontrastverhältnis zwischen der Farbe des Platzhaltertextes und dem Hintergrund der Eingabe hoch genug ist, damit Personen mit Sehbehinderungen ihn lesen können. Dabei muss auch genügend Unterschied zwischen der Farbe des Platzhaltertextes und des Eingabetextes bestehen, sodass Nutzer den Platzhalter nicht mit eingegebenen Daten verwechseln.

Das Kontrastverhältnis wird ermittelt, indem die Leuchtdichte der Farbe des Platzhaltertextes und der Farbe des Eingabehintergrunds verglichen werden. Um den aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu entsprechen, ist ein Verhältnis von 4.5:1 für Textinhalte und 3:1 für größeren Text wie Überschriften erforderlich. Großer Text ist definiert als 18,66px und fett oder größer, oder 24px oder größer.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis der Erfolgskriterien 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

#### Benutzerfreundlichkeit

Platzhaltertext mit ausreichendem Farbkontrast kann als eingegebene Eingabe interpretiert werden. Platzhaltertext verschwindet auch, wenn eine Person Inhalte in ein {{htmlelement("input")}} Element eingibt. Beide Umstände können den erfolgreichen Abschluss eines Formulars beeinträchtigen, insbesondere für Personen mit kognitiven Einschränkungen.

Ein alternativer Ansatz zum Bereitstellen von Platzhalterinformationen besteht darin, diese außerhalb der Eingabe in naher visueller Nähe einzuschließen und dann [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) zu verwenden, um das {{HTMLElement("input")}} programmatisch mit seinem Hinweis zu verknüpfen.

Mit dieser Implementierung sind die Hinweis-Inhalte verfügbar, auch wenn Informationen in das Eingabefeld eingegeben werden, und die Eingabe erscheint frei von vorheriger Eingabe, wenn die Seite geladen wird. Die meisten Bildschirmlesetechnologien verwenden `aria-describedby`, um den Hinweis nach dem Text des Eingabelabels vorzulesen, und die Person, die den Screenreader verwendet, kann ihn stummschalten, wenn sie die zusätzlichen Informationen als unnötig empfindet.

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

Platzhaltertext wird mit derselben Gestaltung wie vom Benutzer eingegebener Textinhalt angezeigt, wenn er im [Windows High Contrast Mode](https://www.smashingmagazine.com/2022/06/guide-windows-high-contrast-mode/) gerendert wird. Dies kann es für einige Personen schwierig machen festzustellen, welche Inhalte eingegeben wurden und welche Inhalte Platzhaltertext sind.

### Labels

Platzhalter sind kein Ersatz für das {{htmlelement("label")}} Element. Ohne ein Label, das programmatisch mit einer Eingabe mittels einer Kombination der [`for`](/de/docs/Web/HTML/Reference/Elements/label#for) und [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) Attribute verbunden ist, kann assistive Technologie wie Screenreader {{htmlelement("input")}} Elemente nicht interpretieren.

- [Platzhalter in Formularfeldern sind schädlich — Nielsen Norman Group](https://www.nngroup.com/articles/form-design-placeholders/)

## Beispiele

### Erscheinung des Platzhalters ändern

Dieses Beispiel zeigt einige der Anpassungen, die an den Stilen des Platzhaltertextes vorgenommen werden können.

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

### Opaker Text

Einige Browser machen Platzhaltertext weniger opak. Wenn Sie vollständig opaken Text möchten, setzen Sie den Wert der {{CSSXref("color")}} Eigenschaft explizit. Der [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword) Wert kann verwendet werden, um die gleiche Farbe wie das entsprechende Eingabeelement zu haben.

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
> Beachten Sie, dass Browser unterschiedliche Standardfarben für Platzhaltertext verwenden. Beispielsweise verwendet Firefox die Farbe des Eingabeelements mit 54 % Opazität, und Chrome verwendet die Farbe `darkgray`. Wenn Sie eine konsistente Platzhaltertextfarbe über verschiedene Browser hinweg wünschen, setzen Sie die `color` Eigenschaft explizit.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{cssxref(":placeholder-shown")}} Pseudoklasse gestaltet ein Element, das einen aktiven Platzhalter _hat_.
- Verwandte HTML-Elemente: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}
- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
