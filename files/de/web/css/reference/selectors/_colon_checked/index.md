---
title: CSS-Pseudoklasse `:checked`
short-title: :checked
slug: Web/CSS/Reference/Selectors/:checked
l10n:
  sourceCommit: bf3b0f3217d5d5a6957e9e17f863ece19d939d20
---

Der [CSS](/de/docs/Web/CSS)-[Pseudoklassenselektor](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) **`:checked`** erfasst jedes **radio**-Element ([`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)), **checkbox**-Element ([`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)) und **option**-Element ({{HTMLElement("option")}} in einem {{HTMLElement("select")}}-Element), das ausgewählt oder in den Zustand `on` versetzt wurde.

{{InteractiveExample("CSS Demo: :checked", "tabbed-standard")}}

```css interactive-example
label {
  display: block;
  margin-top: 0.5em;
}

fieldset {
  margin-top: 0.5em;
}

input:checked {
  border: none;
  outline: 2px solid deeppink;
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

Benutzer können diesen Zustand aktivieren, indem sie ein Element auswählen, und ihn durch Aufheben der Auswahl wieder deaktivieren.

> [!NOTE]
> Da Browser `<option>`-Elemente häufig als {{Glossary("replaced_elements", "ersetzte Elemente")}} behandeln, unterscheidet sich von Browser zu Browser, inwieweit sie sich mit der Pseudoklasse `:checked` gestalten lassen. Die Funktionalität für [anpassbare select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) ermöglicht in unterstützenden Browsern die vollständige Anpassung von `<option>`-Elementen wie bei jedem anderen regulären DOM-Element.

## Syntax

```css
:checked {
  /* ... */
}
```

## Beispiele

### Einfaches Beispiel

#### HTML

```html
<div>
  <input type="radio" name="my-input" id="yes" value="yes" />
  <label for="yes">Yes</label>

  <input type="radio" name="my-input" id="no" value="no" />
  <label for="no">No</label>
</div>

<div>
  <input type="checkbox" name="my-checkbox" id="opt-in" />
  <label for="opt-in">Check me!</label>
</div>

<select name="my-select" id="fruit">
  <option value="opt1">Apples</option>
  <option value="opt2">Grapes</option>
  <option value="opt3">Pears</option>
</select>
```

#### CSS

```css
div,
select {
  margin: 8px;
}

/* Labels for checked inputs */
input:checked + label {
  color: red;
}

/* Radio element, when checked */
input[type="radio"]:checked {
  box-shadow: 0 0 0 3px orange;
}

/* Checkbox element, when checked */
input[type="checkbox"]:checked {
  box-shadow: 0 0 0 3px hotpink;
}

/* Option elements, when selected */
option:checked {
  box-shadow: 0 0 0 3px lime;
  color: red;
}
```

#### Ergebnis

{{EmbedLiveSample("Basic_example")}}

### Elemente mit einer ausgeblendeten checkbox umschalten

Dieses Beispiel verwendet die Pseudoklasse `:checked`, damit Benutzer Inhalte abhängig vom Zustand einer checkbox ein- und ausblenden können – ganz ohne [JavaScript](/de/docs/Web/JavaScript).

#### HTML

```html
<input type="checkbox" id="expand-toggle" />

<table>
  <thead>
    <tr>
      <th>Column #1</th>
      <th>Column #2</th>
      <th>Column #3</th>
    </tr>
  </thead>
  <tbody>
    <tr class="expandable">
      <td>[more text]</td>
      <td>[more text]</td>
      <td>[more text]</td>
    </tr>
    <tr>
      <td>[cell text]</td>
      <td>[cell text]</td>
      <td>[cell text]</td>
    </tr>
    <tr>
      <td>[cell text]</td>
      <td>[cell text]</td>
      <td>[cell text]</td>
    </tr>
    <tr class="expandable">
      <td>[more text]</td>
      <td>[more text]</td>
      <td>[more text]</td>
    </tr>
    <tr class="expandable">
      <td>[more text]</td>
      <td>[more text]</td>
      <td>[more text]</td>
    </tr>
  </tbody>
</table>

<label for="expand-toggle" id="expand-btn">Toggle hidden rows</label>
```

#### CSS

```css
/* Hide the toggle checkbox */
#expand-toggle {
  display: none;
}

/* Hide expandable content by default */
.expandable {
  visibility: collapse;
  background: #dddddd;
}

/* Style the button */
#expand-btn {
  display: inline-block;
  margin-top: 12px;
  padding: 5px 11px;
  background-color: #ffff77;
  border: 1px solid;
  border-radius: 3px;
}

/* Show hidden content when the checkbox is checked */
#expand-toggle:checked ~ * .expandable {
  visibility: visible;
}

/* Style the button when the checkbox is checked */
#expand-toggle:checked ~ #expand-btn {
  background-color: #cccccc;
}
```

#### Ergebnis

{{EmbedLiveSample("Toggling_elements_with_a_hidden_checkbox", "auto", 220)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Webformulare – Arbeiten mit Benutzerdaten](/de/docs/Learn_web_development/Extensions/Forms)
- [Webformulare gestalten](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- Verwandte HTML-Elemente: [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox), [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio), {{HTMLElement("select")}} und {{HTMLElement("option")}}
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
