---
title: "::placeholder"
slug: Web/CSS/::placeholder
l10n:
  sourceCommit: 2d224eaced39c113bfa6b8d94212570bbba37d6c
---

{{CSSRef}}

Der **`::placeholder`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert den [Platzhaltertext](/de/docs/Web/HTML/Element/input#placeholder) in einem {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} Element.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-placeholder.html", "tabbed-shorter")}}

Nur die Teilmenge von CSS-Eigenschaften, die auf das {{cssxref("::first-line")}} Pseudoelement angewendet werden können, kann in einer Regel verwendet werden, die `::placeholder` in ihrem Selektor verwendet.

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

Platzhaltertext hat typischerweise eine hellere Farbgestaltung, um anzuzeigen, dass es sich um einen Vorschlag handelt, welche Art von Eingabe gültig ist, und es sich nicht um eine tatsächliche Eingabe handelt.

Es ist wichtig sicherzustellen, dass das Kontrastverhältnis zwischen der Farbe des Platzhaltertextes und dem Hintergrund der Eingabe hoch genug ist, damit Menschen mit Sehbehinderungen es lesen können, während auch gewährleistet wird, dass es einen ausreichenden Unterschied zwischen dem Platzhaltertext und der Eingabetextfarbe gibt, damit Benutzer den Platzhalter nicht für eingegebene Daten halten.

Das Kontrastverhältnis der Farben wird bestimmt, indem die Leuchtkraft der Platzhaltertext- und Eingabehintergrundfarben verglichen wird. Um den aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu entsprechen, ist ein Verhältnis von 4,5:1 für Textinhalte und 3:1 für größere Texte wie Überschriften erforderlich. Großer Text ist definiert als 18,66px und fett oder größer, oder 24px oder größer.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN: Verständnis der WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

#### Benutzerfreundlichkeit

Platzhaltertext mit ausreichend Farbkontrast kann als eingegebene Eingabe interpretiert werden. Platzhaltertext verschwindet außerdem, wenn eine Person Inhalte in ein {{htmlelement("input")}} Element eingibt. Beide Umstände können die erfolgreiche Vollendung von Formularen beeinträchtigen, besonders für Menschen mit kognitiven Beeinträchtigungen.

Ein alternativer Ansatz zur Bereitstellung von Platzhalterinformationen besteht darin, diese außerhalb der Eingabe in unmittelbarer visueller Nähe zu platzieren und dann [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) zu verwenden, um das {{HTMLElement("input")}} programmatisch mit seinem Hinweis zu verknüpfen.

Mit dieser Implementierung ist der Hinweistext verfügbar, selbst wenn Informationen in das Eingabefeld eingegeben werden, und die Eingabe erscheint frei von bestehenden Eingaben, wenn die Seite geladen wird. Die meisten Bildschirmlesetechnologien verwenden `aria-describedby`, um den Hinweis nach dem Eingabelabel vorzulesen, und die Person, die den Bildschirmleser nutzt, kann diesen stummschalten, wenn sie die zusätzlichen Informationen als unnötig erachtet.

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

Platzhaltertext wird mit derselben Gestaltung wie vom Benutzer eingegebener Text dargestellt, wenn er im [Windows Hochkontrastmodus](https://www.smashingmagazine.com/2022/06/guide-windows-high-contrast-mode/) angezeigt wird. Dies wird es für manche Menschen schwierig machen, zu bestimmen, welche Inhalte eingegeben wurden und welche Inhalte Platzhaltertext sind.

### Labels

Platzhalter sind kein Ersatz für das {{htmlelement("label")}} Element. Ohne ein Label, das mit einer Eingabe durch die Kombination der [`for`](/de/docs/Web/HTML/Element/label#for) und [`id`](/de/docs/Web/HTML/Global_attributes/id) Attribute programmatisch verknüpft wurde, kann unterstützende Technologie wie Bildschirmleser {{htmlelement("input")}} Elemente nicht interpretieren.

- [Platzhalter in Formularfeldern sind schädlich — Nielsen Norman Group](https://www.nngroup.com/articles/form-design-placeholders/)

## Beispiele

### Änderung des Platzhalteraussehens

Dieses Beispiel zeigt einige Anpassungen, die Sie an den Stilen von Platzhaltertext vornehmen können.

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

Einige Browser machen den Platzhaltertext weniger opak. Wenn Sie vollständig opaken Text wünschen, setzen Sie den Wert der {{CSSXref("color")}} Eigenschaft explizit. Der [`currentColor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) Wert kann verwendet werden, um dieselbe Farbe wie das entsprechende Eingabeelement zu haben.

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
> Beachten Sie, dass Browser unterschiedliche Standardfarben für Platzhaltertext verwenden. Beispielsweise verwendet Firefox die Farbe des Eingabeelements mit 54% Deckkraft, und Chrome verwendet die Farbe `darkgray`. Wenn Sie eine konsistente Platzhaltertextfarbe in allen Browsern wünschen, setzen Sie die `color` explizit.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{cssxref(":placeholder-shown")}} Pseudoklasse gestaltet ein Element, das _einen_ aktiven Platzhalter hat.
- Verwandte HTML-Elemente: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}
- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
