---
title: CSS-Pseudoklasse `:invalid`
short-title: :invalid
slug: Web/CSS/Reference/Selectors/:invalid
l10n:
  sourceCommit: bf3b0f3217d5d5a6957e9e17f863ece19d939d20
---

Die **`:invalid`**-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) von [CSS](/de/docs/Web/CSS) repräsentiert jedes {{HTMLElement("form")}}-, {{HTMLElement("fieldset")}}-, {{HTMLElement("input")}}- oder andere {{HTMLElement("form")}}-Element, dessen Inhalt die [Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht besteht.

Diese Pseudoklasse ist nützlich, um Benutzer auf Fehler in Formularfeldern hinzuweisen.

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
```

## Syntax

```css
:invalid {
  /* ... */
}
```

## Barrierefreiheit

Die Farbe Rot wird häufig verwendet, um ungültige Eingaben zu kennzeichnen. Menschen mit bestimmten Formen der Farbenblindheit können den Zustand der Eingabe jedoch nicht erkennen, wenn kein zusätzlicher Hinweis vorhanden ist, der die Bedeutung unabhängig von der Farbe vermittelt. Üblicherweise werden dafür beschreibender Text und/oder ein Symbol verwendet.

- [MDN: Erläuterungen zu WCAG-Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erläuterung zu Erfolgskriterium 1.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)

## Beispiele

### Elemente einfärben, um das Validierungsergebnis anzuzeigen

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

### Abschnitte schrittweise anzeigen

In diesem Beispiel verwenden wir `:invalid` zusammen mit `~`, dem [Nachfolgende-Geschwister-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator), um ein Formular schrittweise anzuzeigen. Zunächst ist nur das erste auszufüllende Feld sichtbar. Sobald der Benutzer ein Feld ausgefüllt hat, zeigt das Formular das nächste an. Ist das gesamte Formular ausgefüllt, kann es abgesendet werden.

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

```js hidden
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});
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

### Radio-Buttons

Wenn einer der Radio-Buttons einer Gruppe `required` ist, wird die Pseudoklasse `:invalid` auf alle Radio-Buttons der Gruppe angewendet, sofern keiner davon ausgewählt ist. (Radio-Buttons einer Gruppe haben denselben Wert für ihr `name`-Attribut.)

### Standardeinstellungen in Gecko

Standardmäßig wendet Gecko keinen Stil auf die Pseudoklasse `:invalid` an. Gecko wendet jedoch einen Stil (ein rotes „Leuchten“ mithilfe der Eigenschaft {{Cssxref("box-shadow")}}) auf die Pseudoklasse {{cssxref(":user-invalid")}} an, die in einer Teilmenge der Fälle von `:invalid` greift.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Weitere Pseudoklassen für die Validierung: {{ cssxref(":required") }}, {{ cssxref(":optional") }}, {{ cssxref(":valid") }}
- Verwandte Mozilla-Pseudoklassen: {{cssxref(":user-invalid")}}, {{cssxref(":-moz-submit-invalid")}}
- [Validierung von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- Zugriff auf den [Validierungsstatus](/de/docs/Web/API/ValidityState) mit JavaScript
