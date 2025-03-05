---
title: "::placeholder"
slug: Web/CSS/::placeholder
l10n:
  sourceCommit: 33a12980eb49cc795a41f15ec7a0181270ad3048
---

{{CSSRef}}

Das **`::placeholder`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert den [Platzhaltertext](/de/docs/Web/HTML/Element/input#placeholder) in einem {{HTMLElement("input")}}- oder {{HTMLElement("textarea")}}-Element.

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

Nur der Teil der CSS-Eigenschaften, die auf das {{cssxref("::first-line")}} Pseudo-Element anwendbar sind, kann in einer Regel verwendet werden, in deren Selektor `::placeholder` enthalten ist.

> [!NOTE]
> In den meisten Browsern erscheint der Platzhaltertext standardmäßig in einer transluzenten oder hellgrauen Farbe.

## Syntax

```css
::placeholder {
  /* ... */
}
```

## Barrierefreiheit

### Farbkontrast

#### Kontrastverhältnis

Platzhaltertext hat typischerweise eine hellere Farbgebung, um anzuzeigen, dass er ein Vorschlag für den Typ der gültigen Eingabe ist und keine tatsächliche Eingabe darstellt.

Es ist wichtig sicherzustellen, dass das Kontrastverhältnis zwischen der Farbe des Platzhaltertextes und dem Hintergrund der Eingabe hoch genug ist, damit Personen mit Sehbehinderungen es lesen können. Gleichzeitig muss genügend Unterschied zwischen der Farbe des Platzhaltertextes und der Eingabetextfarbe bestehen, damit Nutzer den Platzhalter nicht für eingetippte Daten halten.

Das Farbkontrastverhältnis wird bestimmt, indem die Leuchtkraft der Werte von Platzhaltertext und Eingabefeldhintergrundfarbe verglichen wird. Um die aktuellen [Richtlinien zur Barrierefreiheit von Webinhalten (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4,5:1 für Textinhalte und 3:1 für größere Texte wie Überschriften erforderlich. Große Texte sind definiert als 18,66px und fett oder größer oder 24px oder größer.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Guideline 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

#### Benutzerfreundlichkeit

Platzhaltertext mit ausreichendem Farbkontrast kann als eingegebene Eingabe interpretiert werden. Platzhaltertext verschwindet auch, wenn eine Person Inhalt in ein {{htmlelement("input")}}-Element eingibt. Beide Umstände können den erfolgreichen Abschluss von Formularen beeinträchtigen, insbesondere bei Personen mit kognitiven Problemen.

Ein alternativer Ansatz, um Platzhalterinformationen bereitzustellen, besteht darin, diese außerhalb der Eingabe in unmittelbarer visueller Nähe zu platzieren und dann [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) zu verwenden, um das {{HTMLElement("input")}} programmatisch mit seinem Hinweis zu verknüpfen.

Mit dieser Implementierung sind die Hinweisinhalte auch verfügbar, wenn Informationen in das Eingabefeld eingegeben werden, und das Eingabefeld erscheint frei von vorher bestehenden Eingaben, wenn die Seite geladen wird. Die meisten Screenreader-Technologien verwenden `aria-describedby`, um den Hinweis nach dem Vorlesen des Labeltextes des Eingabefelds anzusagen, und die Person, die den Screenreader verwendet, kann ihn stummschalten, wenn sie die zusätzlichen Informationen für unnötig hält.

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

### Windows Hoher Kontrast Modus

Platzhaltertext wird im [Windows Hoher Kontrast Modus](https://www.smashingmagazine.com/2022/06/guide-windows-high-contrast-mode/) mit dem gleichen Stil wie Inhalt, der von Nutzern eingegeben wird, dargestellt. Dies kann es für einige Personen schwer machen, zu unterscheiden, welcher Inhalt eingegeben wurde und welcher Platzhaltertext ist.

### Labels

Platzhalter sind kein Ersatz für das {{htmlelement("label")}}-Element. Ohne ein Label, das programmgesteuert mit einer Eingabe mit einer Kombination der Attribute [`for`](/de/docs/Web/HTML/Element/label#for) und [`id`](/de/docs/Web/HTML/Global_attributes/id) verknüpft wurde, können unterstützende Technologien wie Screenreader {{htmlelement("input")}}-Elemente nicht interpretieren.

- [Placeholders in Form Fields Are Harmful — Nielsen Norman Group](https://www.nngroup.com/articles/form-design-placeholders/)

## Beispiele

### Platzhalterscheinen ändern

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

Einige Browser machen den Platzhaltertext weniger opak. Wenn Sie vollständig opaken Text wünschen, setzen Sie den Wert der {{CSSXref("color")}}-Eigenschaft explizit. Der [`currentColor`](/de/docs/Web/CSS/color_value#currentcolor_keyword)-Wert kann verwendet werden, um die gleiche Farbe wie das entsprechende Eingabeelement zu haben.

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
> Beachten Sie, dass Browser unterschiedliche Standardfarben für Platzhaltertext verwenden. Zum Beispiel verwendet Firefox die Farbe des Eingabeelements mit 54 % Opazität, und Chrome verwendet die Farbe `darkgray`. Wenn Sie eine konsistente Platzhaltertextfarbe über die Browser hinweg wünschen, dann setzen Sie die `color`-Eigenschaft explizit.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{cssxref(":placeholder-shown")}} Pseudo-Klasse stylt ein Element, das einen aktiven Platzhalter _hat_.
- Verwandte HTML-Elemente: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}
- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
