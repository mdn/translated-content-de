---
title: "`::placeholder` CSS pseudo-element"
short-title: ::placeholder
slug: Web/CSS/Reference/Selectors/::placeholder
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
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

Nur die Teilmenge der CSS-Eigenschaften, die auf das {{cssxref("::first-line")}} Pseudoelement anwendbar sind, kann in einer Regel mit `::placeholder` im Selektor verwendet werden.

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

Platzhaltertext hat typischerweise eine hellere Farbgestaltung, um darauf hinzuweisen, dass es sich um einen Vorschlag handelt, welcher Art von Eingabe gültig sein wird, und nicht um tatsächliche Eingaben.

Es ist wichtig sicherzustellen, dass das Kontrastverhältnis zwischen der Farbe des Platzhaltertextes und dem Hintergrund der Eingabe hoch genug ist, damit Personen mit Sehbehinderungen es lesen können, während gleichzeitig sichergestellt wird, dass es einen ausreichenden Unterschied zwischen der Farbe des Platzhaltertextes und der eingegebenen Texte gibt, damit Benutzer den Platzhalter nicht mit eingegebenen Daten verwechseln.

Das Kontrastverhältnis wird bestimmt, indem die Leuchtkraft des Platzhaltertextes und die Hintergrundfarbwerte der Eingabe verglichen werden. Um die aktuellen [Richtlinien für barrierefreie Webinhalte (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4.5:1 für Textinhalte und 3:1 für größeren Text wie Überschriften erforderlich. Großer Text wird als 18.66px und fett oder größer oder 24px oder größer definiert.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis der WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

#### Benutzerfreundlichkeit

Platzhaltertext mit ausreichendem Farbkontrast kann als eingegebene Eingabe interpretiert werden. Platzhaltertext wird ebenfalls verschwinden, wenn eine Person Inhalte in ein {{htmlelement("input")}} Element eingibt. Beide Umstände können das erfolgreiche Ausfüllen von Formularen beeinträchtigen, insbesondere für Menschen mit kognitiven Schwierigkeiten.

Ein alternativer Ansatz zur Bereitstellung von Platzhalterinformationen besteht darin, sie außerhalb der Eingabe in engem visuellen Bezug einzubeziehen und dann [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) zu verwenden, um das {{HTMLElement("input")}} programmgesteuert mit seinem Hinweis zu assoziieren.

Mit dieser Implementierung sind die Hinweisinhalte verfügbar, selbst wenn Informationen in das Eingabefeld eingegeben werden, und die Eingabe erscheint frei von vorhandenen Eingaben, wenn die Seite geladen wird. Die meisten Bildschirmlesetechnologien verwenden `aria-describedby`, um den Hinweis nach dem Ankündigen des Texteingabelabels vorzulesen, und die Person, die den Bildschirmleser verwendet, kann ihn stummschalten, wenn sie die zusätzlichen Informationen als unnötig erachtet.

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

Platzhaltertext wird im [Windows-Hochkontrastmodus](https://www.smashingmagazine.com/2022/06/guide-windows-high-contrast-mode/) mit der gleichen Gestaltung wie vom Benutzer eingegebene Textinhalte dargestellt. Dies wird es für einige Menschen schwierig machen zu bestimmen, welche Inhalte eingegeben wurden und welche Inhalte Platzhaltertext sind.

### Labels

Platzhalter sind kein Ersatz für das {{htmlelement("label")}} Element. Ohne ein Label, das programmgesteuert mit einer Eingabe über eine Kombination der Attribute [`for`](/de/docs/Web/HTML/Reference/Elements/label#for) und [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) verbunden ist, kann assistive Technologie wie Bildschirmleser {{htmlelement("input")}} Elemente nicht analysieren.

- [Platzhalter in Formularfeldern sind schädlich — Nielsen Norman Group](https://www.nngroup.com/articles/form-design-placeholders/)

## Beispiele

### Erscheinungsbild des Platzhalters ändern

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

Einige Browser machen Platzhaltertext weniger deckend. Wenn Sie vollständig deckenden Text wünschen, setzen Sie dann den Wert der {{CSSXref("color")}} Eigenschaft explizit. Der [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword) Wert kann verwendet werden, um die gleiche Farbe wie das entsprechende Eingabeelement zu haben.

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
> Beachten Sie, dass Browser unterschiedliche Standardfarben für Platzhaltertext verwenden. Zum Beispiel verwendet Firefox die Farbe des Eingabeelements mit 54% Deckkraft, und Chrome verwendet die Farbe `darkgray`. Wenn Sie eine konsistente Platzhaltertextfarbe in den Browsern haben möchten, setzen Sie die Farbe explizit.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{cssxref(":placeholder-shown")}} Pseudoklasse stylt ein Element, das _einen_ aktiven Platzhalter hat.
- Verwandte HTML-Elemente: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}
- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
