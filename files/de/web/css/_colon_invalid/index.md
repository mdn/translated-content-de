---
title: :invalid
slug: Web/CSS/:invalid
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`:invalid`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes {{HTMLElement("form")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}} oder anderes {{HTMLElement("form")}}-Element, dessen Inhalt die [Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht besteht.

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

Diese Pseudoklasse ist nützlich, um für den Benutzer Fehler in Formularfeldern hervorzuheben.

## Syntax

```css
:invalid {
  /* ... */
}
```

## Barrierefreiheit

Rot wird häufig verwendet, um ungültige Eingaben anzuzeigen. Menschen mit bestimmten Arten von Farbenblindheit können den Status der Eingabe nicht erkennen, es sei denn, sie wird von einem zusätzlichen Indikator begleitet, der nicht auf Farbe angewiesen ist, um Bedeutung zu vermitteln. Typischerweise werden beschreibender Text und/oder ein Symbol verwendet.

- [MDN Understanding WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)

## Beispiele

### Elemente einfärben, um die Validierung anzuzeigen

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
  border-color: #800000;
  border-width: 3px;
}

input:required:invalid {
  border-color: #c00000;
}
```

#### Ergebnis

{{EmbedLiveSample('Coloring elements to show validation', 600, 200)}}

### Abschnitte in Phasen anzeigen

In diesem Beispiel verwenden wir `:invalid` zusammen mit `~`, dem [nachfolgenden Geschwisterkombinator](/de/docs/Web/CSS/Subsequent-sibling_combinator), um ein Formular in Phasen erscheinen zu lassen, sodass das Formular zunächst das erste Element anzeigt, das auszufüllen ist, und wenn der Benutzer jedes Element ausfüllt, wird das nächste angezeigt. Wenn das gesamte Formular ausgefüllt ist, kann der Benutzer es absenden.

#### HTML

```html
<form>
  <fieldset>
    <label for="form-name">Name</label><br />
    <input type="text" name="name" id="form-name" required />
  </fieldset>

  <fieldset>
    <label for="form-email">Email Address</label><br />
    <input type="email" name="email" id="form-email" required />
  </fieldset>

  <fieldset>
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

## Anmerkungen

### Optionsfelder

Wenn eines der Optionsfelder in einer Gruppe `required` ist, wird die `:invalid` Pseudoklasse auf alle angewendet, wenn keines der Felder in der Gruppe ausgewählt ist. (Gruppierte Optionsfelder teilen denselben Wert für ihr `name`-Attribut.)

### Gecko-Standards

Standardmäßig wendet Gecko keinen Stil auf die `:invalid` Pseudoklasse an. Es wendet jedoch einen Stil (ein rotes "Leuchten" mit der {{Cssxref("box-shadow")}}-Eigenschaft) auf die {{cssxref(":user-invalid")}} Pseudoklasse an, die in einer Teilmenge der Fälle für `:invalid` gilt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere validierungsbezogene Pseudoklassen: {{ cssxref(":required") }}, {{ cssxref(":optional") }}, {{ cssxref(":valid") }}
- Verwandte Mozilla-Pseudoklassen: {{cssxref(":user-invalid")}}, {{cssxref(":-moz-submit-invalid")}}
- [Formulardatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- Zugriff auf den [Validitätsstatus](/de/docs/Web/API/ValidityState) aus JavaScript
