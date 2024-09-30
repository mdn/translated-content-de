---
title: ":invalid"
slug: Web/CSS/:invalid
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Die **`:invalid`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes {{HTMLElement("form")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}} oder anderes {{HTMLElement("form")}} Element, dessen Inhalt die [Validierung](/de/docs/Web/HTML/Constraint_validation) nicht besteht.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-invalid.html", "tabbed-shorter")}}

Diese Pseudoklasse ist nützlich, um dem Benutzer Fehler in Feldern hervorzuheben.

## Syntax

```css
:invalid {
  /* ... */
}
```

## Barrierefreiheit

Die Farbe Rot wird häufig verwendet, um ungültige Eingaben anzuzeigen. Personen mit bestimmten Arten von Farbblindheit können den Zustand der Eingabe nicht bestimmen, es sei denn, es wird ein zusätzlicher Indikator verwendet, der nicht auf Farbe angewiesen ist, um Bedeutung zu vermitteln. Typischerweise werden beschreibender Text und/oder ein Symbol verwendet.

- [MDN-Verständnis von WCAG, Erläuterungen zur Richtlinie 1.4](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erklärung des Erfolgskriteriums 1.4.1 | W3C Verständliche WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)

## Beispiele

### Elemente färben, um Validierung anzuzeigen

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

### Abschnitte in Etappen anzeigen

In diesem Beispiel verwenden wir `:invalid` zusammen mit `~`, dem [nachfolgenden Geschwisterkombinator](/de/docs/Web/CSS/Subsequent-sibling_combinator), um ein Formular schrittweise erscheinen zu lassen, sodass das Formular anfänglich das erste Element zur Vervollständigung anzeigt und wenn der Benutzer jedes Element vervollständigt, zeigt das Formular das nächste an. Wenn das gesamte Formular ausgefüllt ist, kann der Benutzer es absenden.

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

Wenn eines der Optionsfelder in einer Gruppe `required` ist, wird die `:invalid`-Pseudoklasse auf alle angewendet, wenn keines der Felder in der Gruppe ausgewählt ist. (Gruppe von Optionsfeldern teilen denselben Wert für ihr `name` Attribut.)

### Gecko-Standards

Standardmäßig wendet Gecko keinen Stil auf die `:invalid`-Pseudoklasse an. Es wird jedoch ein Stil (ein rotes "Leuchten" unter Verwendung der {{Cssxref("box-shadow")}}-Eigenschaft) auf die {{cssxref(":user-invalid")}}-Pseudoklasse angewendet, die in einer Teilmenge der Fälle für `:invalid` gilt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere validierungsbezogene Pseudoklassen: {{ cssxref(":required") }}, {{ cssxref(":optional") }}, {{ cssxref(":valid") }}
- Verwandte Mozilla-Pseudoklassen: {{cssxref(":user-invalid")}}, {{cssxref(":-moz-submit-invalid")}}
- [Formulardatenvalidierung](/de/docs/Learn/Forms/Form_validation)
- Zugreifen auf den [Gültigkeitszustand](/de/docs/Web/API/ValidityState) aus JavaScript
