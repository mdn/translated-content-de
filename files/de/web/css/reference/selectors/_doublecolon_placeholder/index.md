---
title: ::placeholder
slug: Web/CSS/Reference/Selectors/::placeholder
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Das **`::placeholder`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert den [Platzhaltertext](/de/docs/Web/HTML/Reference/Elements/input#placeholder) in einem {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} Element.

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

Nur der Teilbereich der CSS-Eigenschaften, die auf das {{cssxref("::first-line")}} Pseudo-Element anwendbar sind, kann in einer Regel verwendet werden, die `::placeholder` in ihrem Selektor verwendet.

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

Platzhaltertext hat normalerweise eine hellere Farbgebung, um anzuzeigen, dass es sich um einen Vorschlag handelt, welche Art von Eingabe gültig ist, und nicht um eine tatsächliche Eingabe.

Es ist wichtig sicherzustellen, dass das Kontrastverhältnis zwischen der Farbe des Platzhaltertextes und dem Hintergrund der Eingabe hoch genug ist, damit Personen mit Sehbeeinträchtigungen ihn lesen können, während ebenfalls sichergestellt wird, dass es genug Unterschied zwischen der Farbe des Platzhaltertextes und der des Eingabetextes gibt, damit Benutzer den Platzhalter nicht mit eingegebenen Daten verwechseln.

Das Farbkontrastverhältnis wird durch den Vergleich der Leuchtkraft der Farbe des Platzhaltertextes und der des Eingabehintergrunds bestimmt. Um die aktuellen [Richtlinien zur Barrierefreiheit von Web-Inhalten (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4,5:1 für Textinhalte und 3:1 für größeren Text wie Überschriften erforderlich. Großer Text wird als 18,66px und fett oder größer, oder 24px oder größer definiert.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Verstehen von WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erklärung des Erfolgskriteriums 1.4.3 | W3C Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

#### Benutzerfreundlichkeit

Platzhaltertext mit ausreichendem Farbkontrast kann als eingegebene Eingabe interpretiert werden. Platzhaltertext verschwindet auch, wenn jemand Inhalt in ein {{htmlelement("input")}} Element eingibt. Beide Umstände können das erfolgreiche Ausfüllen von Formularen beeinträchtigen, insbesondere für Personen mit kognitiven Bedenken.

Ein alternativer Ansatz, um Platzhalterinformationen bereitzustellen, ist, diese außerhalb der Eingabe in der Nähe zu platzieren und dann [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) zu verwenden, um das {{HTMLElement("input")}} programmatisch mit seinem Hinweis zu assoziieren.

Mit dieser Implementierung ist der Hinweisinhalt verfügbar, auch wenn Informationen in das Eingabefeld eingetragen werden, und die Eingabe erscheint beim Laden der Seite als frei von vorheriger Eingabe. Die meisten Bildschirmlesetechnologien verwenden `aria-describedby`, um den Hinweis nach dem Ansagetext des Eingabelabels zu lesen, und der Benutzer des Bildschirmlesers kann ihn stummschalten, wenn er die zusätzlichen Informationen für unnötig hält.

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

Platzhaltertext wird in [Windows Hochkontrastmodus](https://www.smashingmagazine.com/2022/06/guide-windows-high-contrast-mode/) mit derselben Gestaltung wie vom Benutzer eingegebener Textinhalt angezeigt. Das kann es einigen Personen erschweren festzustellen, welcher Inhalt eingegeben wurde und welcher Inhalt Platzhaltertext ist.

### Labels

Platzhalter sind kein Ersatz für das {{htmlelement("label")}} Element. Ohne ein Label, das programmatisch mit einer Eingabe durch eine Kombination der [`for`](/de/docs/Web/HTML/Reference/Elements/label#for) und [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) Attribute assoziiert wurde, können Hilfstechnologien wie Bildschirmlesegeräte keine {{htmlelement("input")}} Elemente parsen.

- [Platzhalter in Formularfeldern sind schädlich — Nielsen Norman Group](https://www.nngroup.com/articles/form-design-placeholders/)

## Beispiele

### Erscheinungsbild von Platzhaltern ändern

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
  opacity: 0.5;
}
```

#### Ergebnis

{{EmbedLiveSample("Change_placeholder_appearance", 200, 60)}}

### Opaker Text

Einige Browser machen Platzhaltertext weniger opak. Wenn Sie volltransparenten Text möchten, setzen Sie den Wert der {{CSSXref("color")}}-Eigenschaft explizit fest. Der [`currentColor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) Wert kann verwendet werden, um die gleiche Farbe wie das entsprechende Eingabeelement zu haben.

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
> Beachten Sie, dass Browser unterschiedliche Standardfarben für Platzhaltertext verwenden. Beispielsweise verwendet Firefox die Farbe des Eingabeelements mit 54% Transparenz, während Chrome die Farbe `darkgray` verwendet. Wenn Sie eine konsistente Platzhaltertextfarbe in allen Browsern wünschen, setzen Sie die `color`-Eigenschaft ausdrücklich.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{cssxref(":placeholder-shown")}} Pseudo-Klasse gestaltet ein Element, das _einen_ aktiven Platzhalter hat.
- Verwandte HTML-Elemente: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}
- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
