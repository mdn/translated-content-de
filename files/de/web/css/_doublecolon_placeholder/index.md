---
title: "::placeholder"
slug: Web/CSS/::placeholder
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Der **`::placeholder`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert den [Platzhaltertext](/de/docs/Web/HTML/Element/input#placeholder) in einem {{HTMLElement("input")}}- oder {{HTMLElement("textarea")}}-Element.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-placeholder.html", "tabbed-shorter")}}

Nur der Teil der CSS-Eigenschaften, der auf das {{cssxref("::first-line")}}-Pseudo-Element anwendbar ist, kann in einer Regel verwendet werden, die `::placeholder` im Selektor enthält.

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

Platzhaltertext hat typischerweise eine hellere Farbgestaltung, um anzuzeigen, dass er einen Vorschlag für die Art der gültigen Eingabe darstellt und keine tatsächliche Eingabe ist.

Es ist wichtig sicherzustellen, dass das Kontrastverhältnis zwischen der Farbe des Platzhaltertexts und dem Hintergrund der Eingabe hoch genug ist, damit Personen mit Sehschwächen ihn lesen können. Gleichzeitig muss sichergestellt sein, dass es einen ausreichenden Unterschied zwischen der Platzhaltertextfarbe und der Eingabetextfarbe gibt, damit Benutzer den Platzhalter nicht mit eingegebenen Daten verwechseln.

Das Kontrastverhältnis von Farben wird durch den Vergleich der Leuchtkraftwerte des Platzhaltertexts und der Eingabehintergrundfarbe bestimmt. Um die aktuellen [Richtlinien für barrierefreie Webinhalte (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4,5:1 für Textinhalte und 3:1 für größeren Text, wie z.B. Überschriften, erforderlich. Großer Text ist definiert als ab 18,66px und fett oder größer, oder ab 24px oder größer.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis der WCAG, Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

#### Benutzerfreundlichkeit

Platzhaltertext mit ausreichendem Farbkontrast kann als eingegebene Eingabe interpretiert werden. Der Platzhaltertext verschwindet zudem, wenn eine Person Inhalte in ein {{htmlelement("input")}}-Element eingibt. Beide Umstände können das erfolgreiche Ausfüllen eines Formulars beeinträchtigen, insbesondere für Menschen mit kognitiven Beeinträchtigungen.

Ein alternativer Ansatz zur Bereitstellung von Platzhalterinformationen besteht darin, diese außerhalb der Eingabe in unmittelbarer visueller Nähe zu platzieren und dann [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) zu verwenden, um das {{HTMLElement("input")}} programmatisch mit seinem Hinweis zu verknüpfen.

Mit dieser Implementierung ist der Hinweisinhalt selbst dann verfügbar, wenn Informationen in das Eingabefeld eingegeben werden, und die Eingabe erscheint beim Laden der Seite frei von bereits bestehenden Eingaben. Die meisten Bildschirmlesetechnologien verwenden `aria-describedby`, um den Hinweis nach dem Ankündigen des Beschriftungstextes der Eingabe zu lesen. Die Person, die den Bildschirmleser verwendet, kann ihn stummschalten, wenn sie die zusätzlichen Informationen als unnötig empfindet.

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

### Windows-Hochkontrastmodus

Platzhaltertext wird mit derselben Formatierung wie benutzereingebener Textinhalt angezeigt, wenn er im [Windows-Hochkontrastmodus](https://www.smashingmagazine.com/2022/06/guide-windows-high-contrast-mode/) gerendert wird. Dies erschwert einigen Personen die Entscheidung, welche Inhalte eingegeben wurden und welche Inhalte Platzhaltertext sind.

### Labels

Platzhalter sind kein Ersatz für das {{htmlelement("label")}}-Element. Ohne ein Label, das programmatisch mit einer Eingabe unter Verwendung einer Kombination der [`for`](/de/docs/Web/HTML/Element/label#for) und [`id`](/de/docs/Web/HTML/Global_attributes#id)-Attribute verknüpft wurde, kann unterstützende Technologie wie Bildschirmleser {{htmlelement("input")}}-Elemente nicht auslesen.

- [Platzhalter in Formularfeldern sind schädlich — Nielsen Norman Group](https://www.nngroup.com/articles/form-design-placeholders/)

## Beispiele

### Platzhalteraussehen ändern

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
}
```

#### Ergebnis

{{EmbedLiveSample("Change_placeholder_appearance", 200, 60)}}

### Opaker Text

Einige Browser (wie Firefox) setzen die Standard-{{cssxref("opacity")}} von Platzhaltern auf weniger als 100%. Wenn Sie vollständig opaken Platzhaltertext wünschen, setzen Sie `opacity` auf `1`.

#### HTML

```html
<input placeholder="Default opacity" />
<input placeholder="Full opacity" class="force-opaque" />
```

#### CSS

```css
::placeholder {
  color: green;
}

.force-opaque::placeholder {
  opacity: 1;
}
```

#### Ergebnis

{{EmbedLiveSample("Opaque_text", 200, 60)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{cssxref(":placeholder-shown")}}-Pseudoklasse stylt ein Element, das einen aktiven Platzhalter _hat_.
- Verwandte HTML-Elemente: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}
- [HTML-Formulare](/de/docs/Learn/Forms)
