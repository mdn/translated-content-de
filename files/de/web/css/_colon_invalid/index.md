---
title: :invalid
slug: Web/CSS/:invalid
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Die **`:invalid`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes {{HTMLElement("form")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}} oder ein anderes {{HTMLElement("form")}}-Element, dessen Inhalt beim [Validieren](/de/docs/Web/HTML/Constraint_validation) fehlschlägt.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-invalid.html", "tabbed-shorter")}}

Diese Pseudoklasse ist nützlich, um Benutzern Fehler in Feldern hervorzuheben.

## Syntax

```css
:invalid {
  /* ... */
}
```

## Barrierefreiheit

Die Farbe Rot wird häufig verwendet, um ungültige Eingaben anzuzeigen. Menschen mit bestimmten Arten von Farbenblindheit können den Status der Eingabe nicht erkennen, wenn er nicht von einem zusätzlichen Indikator begleitet wird, der nicht auf Farbe angewiesen ist, um Bedeutung zu vermitteln. Üblicherweise wird beschreibender Text und/oder ein Symbol verwendet.

- [MDN-Erklärung zu WCAG, Richtlinie 1.4](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erklärung des Erfolgskriteriums 1.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)

## Beispiele

### Elemente einfärben, um die Validierung zu zeigen

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

### Abschnitte stufenweise anzeigen

In diesem Beispiel verwenden wir `:invalid` zusammen mit `~`, dem [nachfolgenden-Geschwisterkombinator](/de/docs/Web/CSS/Subsequent-sibling_combinator), um ein Formular stufenweise erscheinen zu lassen. Das Formular zeigt zunächst das erste Element zur Eingabe an, und wenn der Benutzer dieses ausgefüllt hat, wird das nächste angezeigt. Wenn das gesamte Formular ausgefüllt ist, kann der Benutzer es absenden.

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

## Hinweise

### Optionsfelder (Radio Buttons)

Wenn eines der Optionsfelder in einer Gruppe `required` ist, wird die Pseudoklasse `:invalid` auf alle angewendet, wenn keines der Felder in der Gruppe ausgewählt wird. (Gruppierte Optionsfelder teilen sich denselben Wert für ihr `name`-Attribut.)

### Gecko-Standardeinstellungen

Standardmäßig wendet Gecko keinen Stil auf die Pseudoklasse `:invalid` an. Es wird jedoch ein Stil (ein rotes "Leuchten" mithilfe der {{Cssxref("box-shadow")}}-Eigenschaft) auf die Pseudoklasse {{cssxref(":user-invalid")}} angewendet, die in einer Teilmenge der Fälle für `:invalid` gilt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere Validierungs-bezogene Pseudoklassen: {{ cssxref(":required") }}, {{ cssxref(":optional") }}, {{ cssxref(":valid") }}
- Verwandte Mozilla-Pseudoklassen: {{cssxref(":user-invalid")}}, {{cssxref(":-moz-submit-invalid")}}
- [Validierung von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- Zugriff auf den [Validierungsstatus](/de/docs/Web/API/ValidityState) mit JavaScript
