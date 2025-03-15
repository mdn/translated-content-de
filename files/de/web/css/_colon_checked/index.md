---
title: :checked
slug: Web/CSS/:checked
l10n:
  sourceCommit: c8ff2398fa61950fe46f2d9155a105c125bfea83
---

{{CSSRef}}

Der **`:checked`** [CSS](/de/docs/Web/CSS) [Pseudoklassen-Selektor](/de/docs/Web/CSS/Pseudo-classes) steht für jedes **Radio** ([`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio)), **Checkbox** ([`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox)) oder **Option** ({{HTMLElement("option")}} in einem {{HTMLElement("select")}}) Element, das aktiviert oder auf einen `on`-Zustand geschaltet ist.

{{InteractiveExample("CSS Demo: :checked", "tabbed-shorter")}}

```css interactive-example
label,
input[type="submit"] {
  display: block;
  margin-top: 1em;
}

input:checked {
  border: none;
  outline: 2px solid deeppink;
}
```

```html interactive-example
<form>
  <p>How did you find out about us?</p>
  <label
    ><input name="origin" type="radio" value="google" checked /> Google</label
  >
  <label><input name="origin" type="radio" value="facebook" /> Facebook</label>
  <p>Please agree to our terms:</p>

  <label
    ><input name="newsletter" type="checkbox" checked /> I want to subscribe to
    a personalized newsletter.</label
  >

  <label
    ><input name="privacy" type="checkbox" /> I have read and I agree to the
    Privacy Policy.</label
  >

  <input type="submit" value="Submit form" />
</form>
```

Der Benutzer kann diesen Zustand aktivieren, indem er ein Element überprüft/auswählt oder deaktivieren, indem er das Element abwählt.

> [!NOTE]
> Da Browser häufig `<option>`s als {{Glossary("replaced_elements", "ersetzte Elemente")}} behandeln, variiert das Ausmaß, in dem sie mit der `:checked`-Pseudoklasse gestaltet werden können, von Browser zu Browser.

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

### Umschalten von Elementen mit einer versteckten Checkbox

Dieses Beispiel nutzt die `:checked` Pseudoklasse, um es dem Benutzer zu ermöglichen, Inhalte basierend auf dem Zustand einer Checkbox umzuschalten, ganz ohne [JavaScript](/de/docs/Web/JavaScript).

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
  background: #ddd;
}

/* Style the button */
#expand-btn {
  display: inline-block;
  margin-top: 12px;
  padding: 5px 11px;
  background-color: #ff7;
  border: 1px solid;
  border-radius: 3px;
}

/* Show hidden content when the checkbox is checked */
#expand-toggle:checked ~ * .expandable {
  visibility: visible;
}

/* Style the button when the checkbox is checked */
#expand-toggle:checked ~ #expand-btn {
  background-color: #ccc;
}
```

#### Ergebnis

{{EmbedLiveSample("Toggling_elements_with_a_hidden_checkbox", "auto", 220)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Webformulare — Arbeiten mit Benutzerdaten](/de/docs/Learn_web_development/Extensions/Forms)
- [Gestaltung von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- Verwandte HTML-Elemente: [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox), [`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio), {{HTMLElement("select")}}, und {{HTMLElement("option")}}
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
