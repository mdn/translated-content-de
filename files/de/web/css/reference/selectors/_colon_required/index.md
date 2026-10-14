---
title: CSS-Pseudoklasse `:required`
short-title: :required
slug: Web/CSS/Reference/Selectors/:required
l10n:
  sourceCommit: bf3b0f3217d5d5a6957e9e17f863ece19d939d20
---

Die [CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) **`:required`** erfasst jedes {{HTMLElement("input")}}-, {{HTMLElement("select")}}- oder {{HTMLElement("textarea")}}-Element, bei dem das Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) gesetzt ist.

{{InteractiveExample("CSS Demo: :required", "tabbed-standard")}}

```css interactive-example
label {
  display: block;
  margin-top: 0.5em;
}

fieldset {
  margin-top: 0.5em;
}

*:required {
  background-color: gold;
}
```

```html interactive-example
<label for="name">Name (required):</label>
<input id="name" name="name" type="text" required />

<label for="birth">Date of birth:</label>
<input id="birth" name="birth" type="date" />

<label for="origin">How did you find out about us? (required)</label>
<select id="origin" name="origin" required>
  <option value="">Choose an option</option>
  <option value="google">Google</option>
  <option value="facebook">Facebook</option>
  <option value="advertisement">Advertisement</option>
</select>

<fieldset>
  <legend>Preferred contact method:</legend>
  <label>
    <input name="contact" type="radio" value="email" checked /> Email
  </label>
  <label><input name="contact" type="radio" value="phone" /> Phone</label>
</fieldset>

<label>
  <input name="newsletter" type="checkbox" checked /> I want to subscribe to a
  personalized newsletter.
</label>
<label>
  <input name="privacy" type="checkbox" required /> I have read and I agree to
  the Privacy Policy (required).
</label>
```

Diese Pseudoklasse ist nützlich, um Felder hervorzuheben, die gültige Daten enthalten müssen, bevor ein Formular abgeschickt werden kann.

> [!NOTE]
> Die Pseudoklasse {{cssxref(":optional")}} wählt _optionale_ Formularfelder aus.

## Syntax

```css
:required {
  /* ... */
}
```

## Barrierefreiheit

Bei erforderlichen {{htmlelement("input")}}-Elementen sollte das Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) gesetzt sein. So können Personen, die unterstützende Technologien wie Screenreader verwenden, erkennen, welche Eingabefelder gültige Inhalte benötigen, damit das Formular erfolgreich abgeschickt werden kann.

Wenn das Formular auch [optionale](/de/docs/Web/CSS/Reference/Selectors/:optional) Eingabefelder enthält, sollten erforderliche Eingabefelder visuell gekennzeichnet sein, ohne dass die Bedeutung ausschließlich durch Farbe vermittelt wird. Üblicherweise werden dafür beschreibender Text und/oder ein Symbol verwendet.

- [MDN: Erläuterungen zu WCAG-Richtlinie 3.3](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.3_%e2%80%94_input_assistance_help_users_avoid_and_correct_mistakes)
- [Erfolgskriterium 3.3.2 verstehen | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)

## Beispiele

### Das erforderliche Feld hat einen roten Rahmen

#### HTML

```html
<form>
  <div class="field">
    <label for="url_input">Enter a URL:</label>
    <input type="url" id="url_input" />
  </div>

  <div class="field">
    <label for="email_input">Enter an email address:</label>
    <input type="email" id="email_input" required />
  </div>
</form>
```

#### CSS

```css
label {
  display: block;
  margin: 1px;
  padding: 1px;
}

.field {
  margin: 1px;
  padding: 1px;
}

input:required {
  border-color: maroon;
  border-width: 3px;
}

input:required:invalid {
  border-color: #c00000;
}
```

#### Ergebnis

{{EmbedLiveSample('Examples', 600, 120)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Weitere Pseudoklassen für die Validierung: {{ cssxref(":optional") }}, {{ cssxref(":invalid") }}, {{ cssxref(":valid") }}
- [Validierung von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
