---
title: ":checked"
slug: Web/CSS/:checked
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Der **`:checked`** [CSS](/de/docs/Web/CSS) [Pseudoklassen-Selektor](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes **Radio**-([`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio)), **Checkbox**-([`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox)) oder **Options**-Element ({{HTMLElement("option")}} in einem {{HTMLElement("select")}}), das ausgewählt oder in einem `on`-Zustand umgeschaltet ist.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-checked.html", "tabbed-shorter")}}

Der Benutzer kann diesen Zustand durch Auswählen/Ankreuzen eines Elements aktivieren oder durch Abwählen/Abkreuzen wieder deaktivieren.

> [!NOTE]
> Da Browser `<option>`s oft als [ersetzte Elemente](/de/docs/Web/CSS/Replaced_element) behandeln, variiert das Ausmaß, in dem sie mit der `:checked` Pseudoklasse gestaltet werden können, von Browser zu Browser.

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

Dieses Beispiel verwendet die `:checked` Pseudoklasse, um den Benutzer Inhalte basierend auf dem Zustand einer Checkbox umschalten zu lassen, ganz ohne [JavaScript](/de/docs/Web/JavaScript).

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

- [Webformulare — Arbeiten mit Benutzerdaten](/de/docs/Learn/Forms)
- [Styling von Webformularen](/de/docs/Learn/Forms/Styling_web_forms)
- Verwandte HTML-Elemente: [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox), [`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio), {{HTMLElement("select")}} und {{HTMLElement("option")}}
- [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
