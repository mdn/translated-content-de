---
title: ":invalid"
slug: Web/CSS/:invalid
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Die **`:invalid`** [CSS](/de/docs/Web/CSS) [Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes {{HTMLElement("form")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}} oder anderes {{HTMLElement("form")}}-Element, dessen Inhalt die [Validierung](/de/docs/Web/HTML/Constraint_validation) nicht besteht.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-invalid.html", "tabbed-shorter")}}

Diese Pseudo-Klasse ist nützlich, um dem Benutzer Feldfehler hervorzuheben.

## Syntax

```css
:invalid {
  /* ... */
}
```

## Barrierefreiheit

Die Farbe Rot wird häufig verwendet, um ungültige Eingaben anzuzeigen. Menschen mit bestimmten Arten von Farbenblindheit können den Zustand der Eingabe nicht erkennen, es sei denn, sie wird von einem zusätzlichen Indikator begleitet, der sich nicht auf Farbe verlässt, um Bedeutung zu vermitteln. Typischerweise werden beschreibender Text und/oder ein Symbol verwendet.

- [MDN Verständnis WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)

## Beispiele

### Elemente färben, um die Validierung zu zeigen

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

In diesem Beispiel verwenden wir `:invalid` zusammen mit `~`, dem [nachfolgenden Geschwisterkombinator](/de/docs/Web/CSS/Subsequent-sibling_combinator), um ein Formular stufenweise erscheinen zu lassen. Das Formular zeigt zunächst das erste auszufüllende Element, und wenn der Benutzer jedes Element ausfüllt, wird das nächste angezeigt. Wenn das gesamte Formular vollständig ist, kann der Benutzer es abschicken.

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

### Optionsfelder

Wenn eines der Optionsfelder in einer Gruppe `required` ist, wird die Pseudo-Klasse `:invalid` auf alle angewendet, wenn keines der Felder in der Gruppe ausgewählt ist. (Gruppierte Optionsfelder teilen denselben Wert für das `name`-Attribut.)

### Gecko-Standardeinstellungen

Standardmäßig wendet Gecko keinen Stil auf die Pseudo-Klasse `:invalid` an. Es wird jedoch ein Stil (ein roter "Glanz" mit der {{Cssxref("box-shadow")}}-Eigenschaft) auf die {{cssxref(":user-invalid")}}-Pseudo-Klasse angewendet, die in einer Teilmenge der Fälle für `:invalid` gilt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere validierungsbezogene Pseudo-Klassen: {{ cssxref(":required") }}, {{ cssxref(":optional") }}, {{ cssxref(":valid") }}
- Verwandte Mozilla-Pseudo-Klassen: {{cssxref(":user-invalid")}}, {{cssxref(":-moz-submit-invalid")}}
- [Formulardatenvalidierung](/de/docs/Learn/Forms/Form_validation)
- Zugriff auf den [gültigkeitsstatus](/de/docs/Web/API/ValidityState) von JavaScript aus.
