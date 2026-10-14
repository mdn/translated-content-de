---
title: "`:optional` CSS-Pseudoklasse"
short-title: :optional
slug: Web/CSS/Reference/Selectors/:optional
l10n:
  sourceCommit: bf3b0f3217d5d5a6957e9e17f863ece19d939d20
---

Die **`:optional`**-[CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) steht für jedes {{HTMLElement("input")}}-, {{HTMLElement("select")}}- oder {{HTMLElement("textarea")}}-Element, bei dem das Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) nicht gesetzt ist.

{{InteractiveExample("CSS Demo: :optional", "tabbed-standard")}}

```css interactive-example
label {
  display: block;
  margin-top: 0.5em;
}

fieldset {
  margin-top: 0.5em;
}

*:optional {
  background-color: palegreen;
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

Diese Pseudoklasse ist nützlich, um Felder zu gestalten, die zum Absenden eines Formulars nicht ausgefüllt werden müssen.

> [!NOTE]
> Die Pseudoklasse {{cssxref(":required")}} wählt _erforderliche_ Formularfelder aus.

## Syntax

```css
:optional {
  /* ... */
}
```

## Barrierefreiheit

Wenn ein [Formular](/de/docs/Web/HTML/Reference/Elements/form) optionale {{htmlelement("input")}}-Elemente enthält, sollten erforderliche Eingabefelder mit dem Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) gekennzeichnet werden. So können Personen, die Hilfstechnologien wie einen Screenreader verwenden, erkennen, welche Eingabefelder gültige Inhalte benötigen, damit das Formular erfolgreich abgesendet werden kann.

Erforderliche Eingabefelder sollten auch visuell gekennzeichnet werden, und zwar so, dass die Bedeutung nicht allein durch Farbe vermittelt wird. Üblicherweise werden dafür ein beschreibender Text und/oder ein Symbol verwendet.

- [MDN: WCAG verstehen – Erläuterungen zu Richtlinie 3.3](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.3_%e2%80%94_input_assistance_help_users_avoid_and_correct_mistakes)
- [Erfolgskriterium 3.3.2 verstehen | W3C: WCAG 2.0 verstehen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)

## Beispiele

### Das optionale Feld hat einen violetten Rahmen

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

input:optional {
  border-color: rebeccapurple;
  border-width: 3px;
}
```

#### Ergebnis

{{EmbedLiveSample('Examples', 600, 120)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Weitere Pseudoklassen für die Validierung: {{ cssxref(":required") }}, {{ cssxref(":invalid") }}, {{ cssxref(":valid") }}
- [Validierung von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
