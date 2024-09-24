---
title: ":invalid"
slug: Web/CSS/:invalid
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Die **`:invalid`** [CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes {{HTMLElement("form")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}} oder anderes {{HTMLElement("form")}}-Element, dessen Inhalt die [Validierung](/de/docs/Web/HTML/Constraint_validation) nicht besteht.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-invalid.html", "tabbed-shorter")}}

Diese Pseudoklasse ist nützlich, um Benutzern die Fehler in Feldern hervorzuheben.

## Syntax

```css
:invalid {
  /* ... */
}
```

## Barrierefreiheit

Die Farbe Rot wird häufig verwendet, um auf ungültige Eingaben hinzuweisen. Personen, die an bestimmten Arten von Farbenblindheit leiden, können den Status der Eingabe nicht erkennen, es sei denn, sie wird von einem zusätzlichen Indikator begleitet, der nicht auf Farbe angewiesen ist, um Bedeutung zu vermitteln. Typischerweise werden beschreibender Text und/oder ein Symbol verwendet.

- [MDN Understanding WCAG, Guideline 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgs-Kriteriums 1.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)

## Beispiele

### Elemente farblich kennzeichnen, um die Validierung anzuzeigen

#### HTML

```html
<form>
  <div class="field">
    <label for="url_input">Geben Sie eine URL ein:</label>
    <input type="url" id="url_input" />
  </div>

  <div class="field">
    <label for="email_input">Geben Sie eine E-Mail-Adresse ein:</label>
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

In diesem Beispiel nutzen wir `:invalid` zusammen mit `~`, dem [nachfolgenden Geschwisterkombinator](/de/docs/Web/CSS/Subsequent-sibling_combinator), um ein Formular in Etappen erscheinen zu lassen. Das Formular zeigt zunächst das erste auszufüllende Element an, und wenn der Benutzer jedes Element abschließt, wird das nächste angezeigt. Wenn das gesamte Formular ausgefüllt ist, kann der Benutzer es abschicken.

#### HTML

```html
<form>
  <fieldset>
    <label for="form-name">Name</label><br />
    <input type="text" name="name" id="form-name" required />
  </fieldset>

  <fieldset>
    <label for="form-email">E-Mail-Adresse</label><br />
    <input type="email" name="email" id="form-email" required />
  </fieldset>

  <fieldset>
    <label for="form-message">Nachricht</label><br />
    <textarea name="message" id="form-message" required></textarea>
  </fieldset>

  <button type="submit" name="send">Absenden</button>
</form>
```

#### CSS

```css
/* Verstecken Sie das Fieldset hinter einem ungültigen Fieldset */
fieldset:invalid ~ fieldset {
  display: none;
}

/* Abdunkeln und Deaktivieren des Buttons, während das Formular ungültig ist */
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

### Radiobuttons

Wenn einer der Radiobuttons in einer Gruppe `required` ist, wird die `:invalid`-Pseudoklasse auf alle angewendet, wenn keiner der Buttons in der Gruppe ausgewählt ist. (Radiobuttons in einer Gruppe teilen denselben Wert für ihr `name`-Attribut.)

### Gecko-Standardeinstellungen

Standardmäßig wendet Gecko keinen Stil auf die `:invalid`-Pseudoklasse an. Jedoch wird ein Stil (ein rotes "Leuchten" unter Verwendung der {{Cssxref("box-shadow")}}-Eigenschaft) auf die {{cssxref(":user-invalid")}}-Pseudoklasse angewendet, die in einem Teil der Fälle für `:invalid` gilt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere validierungsbezogene Pseudoklassen: {{ cssxref(":required") }}, {{ cssxref(":optional") }}, {{ cssxref(":valid") }}
- Verwandte Mozilla-Pseudoklassen: {{cssxref(":user-invalid")}}, {{cssxref(":-moz-submit-invalid")}}
- [Formulardatenvalidierung](/de/docs/Learn/Forms/Form_validation)
- Zugriff auf den [Gültigkeitsstatus](/de/docs/Web/API/ValidityState) mit JavaScript
