---
title: ::placeholder
slug: Web/CSS/::placeholder
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **`::placeholder`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert den [Platzhaltertext](/de/docs/Web/HTML/Reference/Elements/input#placeholder) in einem {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} Element.

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

Nur die Teilmenge von CSS-Eigenschaften, die auf das {{cssxref("::first-line")}} Pseudo-Element anwendbar sind, kann in einer Regel mit `::placeholder` im Selektor genutzt werden.

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

Platzhaltertext hat typischerweise eine hellere Farbgebung, um anzudeuten, dass er ein Vorschlag für eine gültige Eingabe und keine tatsächliche Eingabe ist.

Es ist wichtig, sicherzustellen, dass das Kontrastverhältnis zwischen der Farbe des Platzhaltertextes und dem Hintergrund der Eingabe hoch genug ist, damit Menschen mit Sehbeeinträchtigungen ihn lesen können, während gleichzeitig genug Unterschied zwischen Platzhaltertext und Eingabetext besteht, damit die Benutzer den Platzhalter nicht für eingegebene Daten halten.

Das Farbkontrastverhältnis wird bestimmt, indem die Helligkeit des Platzhaltertextes mit den Farbeigenschaften des Eingabehintergrundes verglichen wird. Um die aktuellen [Richtlinien für barrierefreie Webinhalte (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4.5:1 für Textinhalte und 3:1 für größeren Text wie Überschriften erforderlich. Großer Text ist definiert als 18,66px fett oder größer oder 24px oder größer.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis der WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

#### Benutzbarkeit

Platzhaltertext mit ausreichendem Farbkontrast kann als eingegebene Eingabe interpretiert werden. Platzhaltertext verschwindet auch, wenn eine Person Inhalte in ein {{HTMLElement("input")}}-Element eingibt. Beide Umstände können das erfolgreiche Ausfüllen eines Formulars beeinträchtigen, insbesondere für Menschen mit kognitiven Einschränkungen.

Ein alternativer Ansatz zur Bereitstellung von Platzhalterinformationen besteht darin, sie außerhalb des Eingabefelds in unmittelbarer visueller Nähe zu platzieren und dann [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) zu verwenden, um das {{HTMLElement("input")}} mit seinem Hinweis programmatisch zu verknüpfen.

Mit dieser Umsetzung ist der Hinweisinhalt verfügbar, auch wenn Informationen in das Eingabefeld eingegeben werden, und das Eingabefeld erscheint frei von vorhandenen Eingaben, wenn die Seite geladen wird. Die meisten Screenreader-Technologien verwenden `aria-describedby`, um den Hinweis nach dem Ansagen des Labels des Eingabefeldes vorzulesen, und die Person, die den Screenreader verwendet, kann ihn stummschalten, wenn sie die zusätzlichen Informationen als unnötig erachtet.

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

### Windows High Contrast-Modus

Im [Windows High Contrast-Modus](https://www.smashingmagazine.com/2022/06/guide-windows-high-contrast-mode/) wird der Platzhaltertext mit der gleichen Formatierung wie vom Benutzer eingegebene Textinhalte angezeigt. Dies erschwert es einigen Menschen, zwischen eingegebenen Inhalten und Platzhaltertext zu unterscheiden.

### Labels

Platzhalter sind kein Ersatz für das {{HTMLElement("label")}}-Element. Ohne ein Label, das mithilfe einer Kombination der Attribute [`for`](/de/docs/Web/HTML/Reference/Elements/label#for) und [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) programmatisch mit einer Eingabe verknüpft ist, können unterstützende Technologien wie Screenreader {{HTMLElement("input")}}-Elemente nicht analysieren.

- [Platzhalter in Formularfeldern sind schädlich — Nielsen Norman Group](https://www.nngroup.com/articles/form-design-placeholders/)

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
  opacity: 0.5;
}
```

#### Ergebnis

{{EmbedLiveSample("Change_placeholder_appearance", 200, 60)}}

### Opaquer Text

Einige Browser machen Platzhaltertext weniger deckend. Wenn Sie vollständig deckenden Text wünschen, setzen Sie den Wert der {{CSSXref("color")}}-Eigenschaft explizit. Der [`currentColor`](/de/docs/Web/CSS/color_value#currentcolor_keyword)-Wert kann verwendet werden, um die gleiche Farbe wie das entsprechende Eingabeelement zu haben.

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
> Beachten Sie, dass Browser unterschiedliche Standardfarben für Platzhaltertext verwenden. Zum Beispiel verwendet Firefox die Farbe des Eingabeelements mit 54% Deckkraft, und Chrome verwendet die Farbe `darkgray`. Wenn Sie eine konsistente Platzhaltertextfarbe über alle Browser hinweg wünschen, setzen Sie die `color`-Eigenschaft explizit.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{cssxref(":placeholder-shown")}} Pseudo-Klasse gestaltet ein Element, das _einen_ aktiven Platzhalter hat.
- Verwandte HTML-Elemente: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}
- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
