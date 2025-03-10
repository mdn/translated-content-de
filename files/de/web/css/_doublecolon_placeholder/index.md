---
title: ::placeholder
slug: Web/CSS/::placeholder
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{CSSRef}}

Das **`::placeholder`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert den [Platzhaltertext](/de/docs/Web/HTML/Element/input#placeholder) in einem {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} Element.

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

Nur der Teilbereich von CSS-Eigenschaften, die auf das {{cssxref("::first-line")}} Pseudo-Element anwendbar sind, kann in einer Regel verwendet werden, die `::placeholder` in ihrem Selektor hat.

> [!NOTE]
> In den meisten Browsern ist das Erscheinungsbild von Platzhaltertext standardmäßig eine durchscheinende oder helle graue Farbe.

## Syntax

```css
::placeholder {
  /* ... */
}
```

## Barrierefreiheit

### Farbkontrast

#### Kontrastverhältnis

Platzhaltertext hat typischerweise eine hellere Farbgebung, um anzuzeigen, dass es sich um einen Vorschlag für eine Art von gültiger Eingabe handelt und nicht um tatsächliche Eingabedaten.

Es ist wichtig sicherzustellen, dass der Kontrast zwischen der Farbe des Platzhaltertextes und dem Hintergrund der Eingabe hoch genug ist, damit Personen mit Sehbeeinträchtigungen ihn lesen können. Gleichzeitig sollte ein ausreichender Unterschied zwischen der Farbe des Platzhaltertextes und der Eingabetextfarbe bestehen, damit Benutzer den Platzhalter nicht mit eingegebenen Daten verwechseln.

Das Farbkontrastverhältnis wird bestimmt, indem die Helligkeit des Platzhaltertextes und der Eingabehintergrundfarbenwerte verglichen werden. Um den aktuellen [Richtlinien für barrierefreie Webinhalte (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu entsprechen, ist ein Verhältnis von 4.5:1 für Textinhalte und 3:1 für größeren Text wie Überschriften erforderlich. Großer Text wird als 18,66px fett oder größer, oder 24px oder größer definiert.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis von WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verstehen des Erfolgskriteriums 1.4.3 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

#### Benutzerfreundlichkeit

Platzhaltertext mit ausreichendem Farbkontrast kann als eingegebene Eingabe interpretiert werden. Platzhaltertext verschwindet auch, wenn eine Person Inhalte in ein {{htmlelement("input")}} Element eingibt. Beide Umstände können den erfolgreichen Abschluss eines Formulars behindern, insbesondere für Menschen mit kognitiven Herausforderungen.

Ein alternativer Ansatz zur Bereitstellung von Platzhalterinformationen besteht darin, diese außerhalb der Eingabe in visueller Nähe zu platzieren und dann [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) zu verwenden, um das {{HTMLElement("input")}} programmatisch mit seinem Hinweis zu verknüpfen.

Mit dieser Implementierung sind die Hinweis-Inhalte selbst dann verfügbar, wenn Informationen in das Eingabefeld eingegeben werden, und die Eingabe erscheint frei von vorhandenen Eingaben, wenn die Seite geladen wird. Die meisten Screenreader-Technologien verwenden `aria-describedby`, um den Hinweis nach dem Vorlesen des Labeltextes der Eingabe anzukündigen, und die Person, die den Screenreader verwendet, kann ihn stummschalten, wenn sie die zusätzlichen Informationen für unnötig hält.

```html
<label for="user-email">Your email address</label>
<span id="user-email-hint" class="input-hint">Example: jane@sample.com</span>
<input
  id="user-email"
  aria-describedby="user-email-hint"
  name="email"
  type="email" />
```

- [Placeholders in Form Fields Are Harmful — Nielsen Norman Group](https://www.nngroup.com/articles/form-design-placeholders/)

### Windows High Contrast Mode

Platzhaltertext wird mit dem gleichen Stil wie vom Benutzer eingegebene Textinhalte angezeigt, wenn er im [Windows High Contrast Mode](https://www.smashingmagazine.com/2022/06/guide-windows-high-contrast-mode/) gerendert wird. Dies macht es für einige Personen schwierig zu bestimmen, welche Inhalte eingegeben wurden und welche Inhalte Platzhaltertext sind.

### Beschriftungen

Platzhalter sind kein Ersatz für das {{htmlelement("label")}} Element. Ohne ein Label, das programmatisch mit einer Eingabe mithilfe einer Kombination von [`for`](/de/docs/Web/HTML/Element/label#for) und [`id`](/de/docs/Web/HTML/Global_attributes/id) Attributen verknüpft wurde, kann unterstützende Technologie wie Screenreader {{htmlelement("input")}} Elemente nicht interpretieren.

- [Placeholders in Form Fields Are Harmful — Nielsen Norman Group](https://www.nngroup.com/articles/form-design-placeholders/)

## Beispiele

### Ändern des Platzhalter-Erscheinungsbildes

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

### Opaqer Text

Einige Browser machen Platzhaltertext weniger opak. Wenn Sie vollständig opaken Text wünschen, setzen Sie den Wert der {{CSSXref("color")}} Eigenschaft explizit fest. Der [`currentColor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) Wert kann verwendet werden, um die gleiche Farbe wie das entsprechende Eingabeelement zu haben.

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
> Beachten Sie, dass Browser unterschiedliche Standardfarben für Platzhaltertext verwenden. Beispielsweise verwendet Firefox die Farbe des Eingabeelements mit 54% Deckkraft, und Chrome verwendet die Farbe `darkgray`. Wenn Sie eine konsistente Platzhaltertextfarbe über die Browser hinweg wünschen, setzen Sie die `color` explizit.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{cssxref(":placeholder-shown")}} Pseudoklasse formatiert ein Element, das _einen_ aktiven Platzhalter hat.
- Verwandte HTML-Elemente: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}
- [HTML Formulare](/de/docs/Learn_web_development/Extensions/Forms)
