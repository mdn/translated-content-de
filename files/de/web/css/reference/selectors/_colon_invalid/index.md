---
title: :invalid
slug: Web/CSS/Reference/Selectors/:invalid
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

Die **`:invalid`** [CSS](/de/docs/Web/CSS) [Pseudo-Klasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert jedes {{HTMLElement("form")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}} oder anderes {{HTMLElement("form")}}-Element, dessen Inhalt nicht [validiert](/de/docs/Web/HTML/Guides/Constraint_validation) wird.

{{InteractiveExample("CSS Demo: :invalid", "tabbed-shorter")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:invalid {
  background-color: ivory;
  border: none;
  outline: 2px solid red;
  border-radius: 5px;
}
```

```html interactive-example
<form>
  <label for="email">Email Address:</label>
  <input id="email" name="email" type="email" value="na@me@example.com" />

  <label for="secret">Secret Code: (lower case letters)</label>
  <input id="secret" name="secret" type="text" value="test" pattern="[a-z]+" />

  <label for="age">Your age: (18+)</label>
  <input id="age" name="age" type="number" value="5" min="18" />

  <label
    ><input name="tos" type="checkbox" required checked /> - Do you agree to
    ToS?</label
  >
</form>
```

Diese Pseudo-Klasse ist nützlich, um dem Benutzer Feldfehler hervorzuheben.

## Syntax

```css
:invalid {
  /* ... */
}
```

## Barrierefreiheit

Die Farbe Rot wird häufig verwendet, um ungültige Eingaben anzuzeigen. Personen mit bestimmten Arten von Farbenblindheit können den Zustand der Eingabe nicht bestimmen, es sei denn, es wird ein zusätzlicher Indikator verwendet, der nicht auf Farbe angewiesen ist, um Bedeutung zu vermitteln. Typischerweise wird beschreibender Text und/oder ein Icon verwendet.

- [MDN Verständnisse zu WCAG, Erklärungen zur Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis der Erfolgskriterien 1.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)

## Beispiele

### Elemente einfärben, um Validierung anzuzeigen

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

input:invalid {
  background-color: #ffdddd;
}

form:invalid {
  border: 5px solid #ffdddd;
}

input:valid {
  background-color: #ddffdd;
}

form:valid {
  border: 5px solid #ddffdd;
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

{{EmbedLiveSample('Coloring elements to show validation', 600, 200)}}

### Anzeigen von Abschnitten in Phasen

In diesem Beispiel verwenden wir `:invalid` zusammen mit `~`, dem [darauffolgender-Geschwister-Selektor](/de/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator), um ein Formular in Phasen erscheinen zu lassen, sodass das Formular zunächst das erste Element zum Ausfüllen anzeigt, und wenn der Benutzer jedes Element abschließt, wird das nächste angezeigt. Wenn das gesamte Formular ausgefüllt ist, kann der Benutzer es einreichen.

#### HTML

```html
<form>
  <fieldset>
    <legend>Personal Information</legend>
    <label for="form-name">Name</label><br />
    <input type="text" name="name" id="form-name" required />
  </fieldset>

  <fieldset>
    <legend>Contact Information</legend>
    <label for="form-email">Email Address</label><br />
    <input type="email" name="email" id="form-email" required />
  </fieldset>

  <fieldset>
    <legend>Message</legend>
    <label for="form-message">Message</label><br />
    <textarea name="message" id="form-message" required></textarea>
  </fieldset>

  <button type="submit" name="send">Submit</button>
</form>
```

#### CSS

```css
/* Hide the fieldset after an invalid fieldset */
fieldset:invalid ~ fieldset {
  display: none;
}

/* Dim and disable the button while the form is invalid */
form:invalid button {
  opacity: 0.3;
  pointer-events: none;
}

input,
textarea {
  box-sizing: border-box;
  width: 100%;
  font-family: monospace;
  padding: 0.25em 0.5em;
}

button {
  width: 100%;
  border: thin solid darkgrey;
  font-size: 1.25em;
  background-color: darkgrey;
  color: white;
}
```

#### Ergebnis

{{EmbedLiveSample('Showing sections in stages', 600, 300)}}

## Hinweise

### Optionsfelder

Wenn eines der Optionsfelder in einer Gruppe `required` ist, wird die `:invalid`-Pseudo-Klasse auf alle angewendet, wenn keines der Felder in der Gruppe ausgewählt ist. (Gruppierte Optionsfelder teilen sich denselben Wert für ihr `name`-Attribut.)

### Gecko-Standardeinstellungen

Standardmäßig wendet Gecko keinen Stil auf die `:invalid`-Pseudo-Klasse an. Es verwendet jedoch einen Stil (einen roten "Glanz" mit der {{Cssxref("box-shadow")}}-Eigenschaft) auf die {{cssxref(":user-invalid")}}-Pseudo-Klasse, die in einem Teil der Fälle für `:invalid` gilt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere validierungsbezogene Pseudo-Klassen: {{ cssxref(":required") }}, {{ cssxref(":optional") }}, {{ cssxref(":valid") }}
- Verwandte Mozilla-Pseudo-Klassen: {{cssxref(":user-invalid")}}, {{cssxref(":-moz-submit-invalid")}}
- [Validierung von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- Zugriff auf den [Gültigkeitsstatus](/de/docs/Web/API/ValidityState) aus JavaScript
