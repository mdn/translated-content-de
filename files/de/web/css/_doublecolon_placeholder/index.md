---
title: "::placeholder"
slug: Web/CSS/::placeholder
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Das **`::placeholder`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert den [Platzhaltertext](/de/docs/Web/HTML/Element/input#placeholder) in einem {{HTMLElement("input")}}- oder {{HTMLElement("textarea")}}-Element.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-placeholder.html", "tabbed-shorter")}}

Nur der Teil der CSS-Eigenschaften, die für das {{cssxref("::first-line")}} Pseudoelement gelten, kann in einer Regel verwendet werden, die `::placeholder` in ihrem Selektor verwendet.

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

Platzhaltertext hat typischerweise eine hellere Farbgebung, um anzuzeigen, dass er ein Vorschlag für eine gültige Eingabeart ist und keine tatsächliche Eingabe irgendeiner Art darstellt.

Es ist wichtig, sicherzustellen, dass das Kontrastverhältnis zwischen der Farbe des Platzhaltertextes und dem Hintergrund der Eingabe hoch genug ist, damit Menschen mit Sehbehinderungen es lesen können, während auch sichergestellt wird, dass es genügend Unterschied zwischen dem Platzhaltertext und der Eingabetextfarbe gibt, damit Benutzer den Platzhalter nicht mit eingegebenen Daten verwechseln.

Das Farbkontrastverhältnis wird bestimmt, indem die Leuchtkraft des Platzhaltertextes und des Eingabehintergrundes verglichen wird. Um die aktuellen [Richtlinien für barrierefreie Webinhalte (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4,5:1 für Textinhalte und 3:1 für größeren Text wie Überschriften erforderlich. Als großer Text gelten 18,66px und fett oder größer, oder 24px oder größer.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis der WCAG, Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

#### Benutzbarkeit

Platzhaltertext mit ausreichendem Farbkontrast kann als eingegebener Text interpretiert werden. Platzhaltertext verschwindet auch, wenn eine Person Inhalte in ein {{htmlelement("input")}}-Element eingibt. Beide Umstände können den erfolgreichen Abschluss eines Formulars stören, insbesondere für Personen mit kognitiven Einschränkungen.

Ein alternativer Ansatz zur Bereitstellung von Platzhalterinformationen besteht darin, diese außerhalb der Eingabe in visuell naher Umgebung einzuschließen und dann [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) zu verwenden, um das {{HTMLElement("input")}} programmatisch mit seinem Hinweis zu verknüpfen.

Mit dieser Implementierung ist der Hinweisinhalt auch verfügbar, wenn Informationen in das Eingabefeld eingegeben werden, und die Eingabe erscheint frei von vorhandenen Eingaben, wenn die Seite geladen wird. Die meisten Bildschirmlesetechnologien verwenden `aria-describedby`, um den Hinweis nach dem Eingabeetikett vorzulesen, und die Person, die den Bildschirmleser verwendet, kann ihn stummschalten, wenn sie die zusätzlichen Informationen nicht benötigt.

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

### Windows Hochkontrastmodus

Platzhaltertext wird mit dem gleichen Stil wie vom Benutzer eingegebene Textinhalte angezeigt, wenn er im [Windows Hochkontrastmodus](https://www.smashingmagazine.com/2022/06/guide-windows-high-contrast-mode/) gerendert wird. Dies erschwert es einigen Personen, zu erkennen, welche Inhalte eingegeben wurden und welche Platzhaltertexte sind.

### Labels

Platzhalter sind kein Ersatz für das {{htmlelement("label")}}-Element. Ohne ein Label, das programmatisch mit einer Eingabe unter Verwendung einer Kombination der Attribute [`for`](/de/docs/Web/HTML/Element/label#for) und [`id`](/de/docs/Web/HTML/Global_attributes#id) verknüpft wurde, können unterstützende Technologien wie Bildschirmleser {{htmlelement("input")}}-Elemente nicht analysieren.

- [Platzhalter in Formularfeldern sind schädlich — Nielsen Norman Group](https://www.nngroup.com/articles/form-design-placeholders/)

## Beispiele

### Aussehen des Platzhalters ändern

Dieses Beispiel zeigt einige der Anpassungen, die Sie an den Stilen von Platzhaltertext vornehmen können.

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

### Undurchsichtiger Text

Einige Browser (wie Firefox) setzen die Standard-{{cssxref("opacity")}} von Platzhaltern auf weniger als 100%. Wenn Sie vollständig undurchsichtigen Platzhaltertext wünschen, setzen Sie `opacity` auf `1`.

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

- Die {{cssxref(":placeholder-shown")}} Pseudoklasse gestaltet ein Element, das einen aktiven Platzhalter _hat_.
- Verwandte HTML-Elemente: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}
- [HTML-Formulare](/de/docs/Learn/Forms)
