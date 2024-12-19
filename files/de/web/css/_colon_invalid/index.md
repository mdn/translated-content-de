---
title: ":invalid"
slug: Web/CSS/:invalid
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Die **`:invalid`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes {{HTMLElement("form")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}} oder anderes {{HTMLElement("form")}}-Element, dessen Inhalt bei der [Validierung](/de/docs/Web/HTML/Constraint_validation) fehlschlägt.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-invalid.html", "tabbed-shorter")}}

Diese Pseudoklasse ist nützlich, um dem Benutzer Feldfehler hervorzuheben.

## Syntax

```css
:invalid {
  /* ... */
}
```

## Barrierefreiheit

Die Farbe Rot wird häufig verwendet, um ungültige Eingaben anzuzeigen. Personen mit bestimmten Arten von Farbblindheit werden den Zustand der Eingabe nicht erkennen können, sofern dieser nicht von einem zusätzlichen Indikator begleitet wird, der die Bedeutung nicht nur durch Farbe vermittelt. Typischerweise werden beschreibender Text und/oder ein Symbol verwendet.

- [MDN Verständnis WCAG, Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgs-Kriteriums 1.4.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)

## Beispiele

### Elemente färben, um die Validierung anzuzeigen

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

### Abschnitte in Stufen anzeigen

In diesem Beispiel verwenden wir `:invalid` zusammen mit `~`, dem [Nachfolger-Geschwister-Selektor](/de/docs/Web/CSS/Subsequent-sibling_combinator), um ein Formular schrittweise erscheinen zu lassen, sodass das Formular zunächst das erste auszufüllende Element anzeigt und, wenn der Benutzer jedes Element vervollständigt hat, das nächste anzeigt. Wenn das gesamte Formular ausgefüllt ist, kann der Benutzer es absenden.

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

### Radiobuttons

Wenn einer der Radiobuttons in einer Gruppe `required` ist, wird die `:invalid` Pseudoklasse auf alle angewendet, wenn keiner in der Gruppe ausgewählt ist. (Gruppierte Radiobuttons teilen sich denselben Wert für ihr `name`-Attribut.)

### Gecko-Standardeinstellungen

Standardmäßig wendet Gecko keinen Stil auf die `:invalid` Pseudoklasse an. Es wird jedoch ein Stil (ein rotes "Leuchten" unter Verwendung der {{Cssxref("box-shadow")}}-Eigenschaft) auf die {{cssxref(":user-invalid")}} Pseudoklasse angewendet, die in einem Teil der Fälle für `:invalid` gilt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere validierungsbezogene Pseudoklassen: {{ cssxref(":required") }}, {{ cssxref(":optional") }}, {{ cssxref(":valid") }}
- Verwandte Mozilla-Pseudoklassen: {{cssxref(":user-invalid")}}, {{cssxref(":-moz-submit-invalid")}}
- [Formulardatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- Zugriff auf den [Gültigkeitszustand](/de/docs/Web/API/ValidityState) von JavaScript aus
