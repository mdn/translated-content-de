---
title: "::placeholder"
slug: Web/CSS/::placeholder
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Das **`::placeholder`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert den [Platzhaltertext](/de/docs/Web/HTML/Element/input#placeholder) in einem {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} Element.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-placeholder.html", "tabbed-shorter")}}

Nur die Teilmenge von CSS-Eigenschaften, die auf das {{cssxref("::first-line")}} Pseudoelement anwendbar sind, kann in einer Regel verwendet werden, die `::placeholder` in ihrem Selektor verwendet.

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

Platzhaltertext hat typischerweise eine hellere Farbgestaltung, um anzuzeigen, dass es sich um einen Vorschlag handelt, welche Art von Eingabe gültig sein wird, und nicht um tatsächliche Eingaben.

Es ist wichtig sicherzustellen, dass das Kontrastverhältnis zwischen der Farbe des Platzhaltertextes und dem Hintergrund der Eingabe hoch genug ist, damit Menschen mit Sehbeeinträchtigungen ihn lesen können. Gleichzeitig muss genügend Unterschied zwischen der Farbe des Platzhaltertextes und des Eingabetextes bestehen, damit Benutzer den Platzhalter nicht mit eingegebenen Daten verwechseln.

Das Kontrastverhältnis wird durch den Vergleich der Helligkeit der Platzhaltertext- und Eingabehintergrundfarben bestimmt. Um den aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu entsprechen, ist ein Verhältnis von 4.5:1 für Textinhalt und 3:1 für größeren Text wie Überschriften erforderlich. Großer Text ist definiert als 18,66px und fett oder größer, oder 24px oder größer.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Guideline 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

#### Benutzerfreundlichkeit

Platzhaltertext mit ausreichend Farbkontrast kann als eingegebene Eingabe interpretiert werden. Platzhaltertext verschwindet ebenfalls, wenn eine Person Inhalte in ein {{htmlelement("input")}} Element eingibt. Beide Umstände können den erfolgreichen Abschluss von Formularen beeinträchtigen, insbesondere für Menschen mit kognitiven Einschränkungen.

Ein alternativer Ansatz, um Platzhalterinformationen bereitzustellen, besteht darin, diese außerhalb der Eingabe in unmittelbarer visueller Nähe zu platzieren und dann [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) zu verwenden, um das {{HTMLElement("input")}} programmatisch mit seinem Hinweis zu verknüpfen.

Mit dieser Implementierung sind die Hinweisinhalte verfügbar, auch wenn Informationen in das Eingabefeld eingegeben werden, und die Eingabe erscheint frei von vorhandenen Eingaben, wenn die Seite geladen wird. Die meisten Bildschirmlesetechnologien verwenden `aria-describedby`, um den Hinweis nach dem Labeltext der Eingabe zu lesen, und die Person, die den Bildschirmleser verwendet, kann ihn stummschalten, wenn sie die zusätzlichen Informationen als unnötig empfinden.

```html
<label for="user-email">Ihre E-Mail-Adresse</label>
<span id="user-email-hint" class="input-hint">Beispiel: jane@sample.com</span>
<input
  id="user-email"
  aria-describedby="user-email-hint"
  name="email"
  type="email" />
```

- [Placeholders in Form Fields Are Harmful — Nielsen Norman Group](https://www.nngroup.com/articles/form-design-placeholders/)

### Windows Hohen Kontrastmodus

Platzhaltertext wird mit demselben Styling wie vom Benutzer eingegebener Textinhalt angezeigt, wenn er im [Windows Hohen Kontrastmodus](https://www.smashingmagazine.com/2022/06/guide-windows-high-contrast-mode/) gerendert wird. Dies erschwert es einigen Personen festzustellen, welche Inhalte eingegeben wurden und welche Inhalte Platzhaltertext sind.

### Labels

Platzhalter sind kein Ersatz für das {{htmlelement("label")}} Element. Ohne ein Label, das programmgesteuert mit einer Eingabe unter Verwendung einer Kombination der [`for`](/de/docs/Web/HTML/Element/label#for) und [`id`](/de/docs/Web/HTML/Global_attributes#id) Attribute verknüpft ist, können unterstützende Technologien wie Bildschirmleser {{htmlelement("input")}} Elemente nicht interpretieren.

- [Placeholders in Form Fields Are Harmful — Nielsen Norman Group](https://www.nngroup.com/articles/form-design-placeholders/)

## Beispiele

### Aussehen des Platzhalters ändern

Dieses Beispiel zeigt einige der Anpassungen, die Sie an den Stilen des Platzhaltertextes vornehmen können.

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

- Die {{cssxref(":placeholder-shown")}} Pseudoklasse stylt ein Element, das _einen_ aktiven Platzhalter hat.
- Verwandte HTML-Elemente: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}
- [HTML-Formulare](/de/docs/Learn/Forms)
