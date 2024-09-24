---
title: ":checked"
slug: Web/CSS/:checked
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Der **`:checked`** [CSS](/de/docs/Web/CSS) [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes)-Selektor repräsentiert jedes **Radio** ([`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio)), **Checkbox** ([`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox)) oder **Option** ({{HTMLElement("option")}} in einem {{HTMLElement("select")}}) Element, das ausgewählt oder in einen `on`-Zustand geschaltet ist.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-checked.html", "tabbed-shorter")}}

Der Benutzer kann diesen Zustand durch Auswählen eines Elements aktivieren oder durch Abwählen deaktivieren.

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
  <label for="yes">Ja</label>

  <input type="radio" name="my-input" id="no" value="no" />
  <label for="no">Nein</label>
</div>

<div>
  <input type="checkbox" name="my-checkbox" id="opt-in" />
  <label for="opt-in">Kreuzen Sie mich an!</label>
</div>

<select name="my-select" id="fruit">
  <option value="opt1">Äpfel</option>
  <option value="opt2">Trauben</option>
  <option value="opt3">Birnen</option>
</select>
```

#### CSS

```css
div,
select {
  margin: 8px;
}

/* Labels für geprüfte Eingaben */
input:checked + label {
  color: red;
}

/* Radio-Element, wenn geprüft */
input[type="radio"]:checked {
  box-shadow: 0 0 0 3px orange;
}

/* Checkbox-Element, wenn geprüft */
input[type="checkbox"]:checked {
  box-shadow: 0 0 0 3px hotpink;
}

/* Auswahl-Elemente, wenn ausgewählt */
option:checked {
  box-shadow: 0 0 0 3px lime;
  color: red;
}
```

#### Ergebnis

{{EmbedLiveSample("Basic_example")}}

### Umschalten von Elementen mit einer verborgenen Checkbox

Dieses Beispiel nutzt die `:checked` Pseudoklasse, damit der Benutzer den Inhalt basierend auf dem Zustand einer Checkbox umschalten kann, und das alles ohne [JavaScript](/de/docs/Web/JavaScript).

#### HTML

```html
<input type="checkbox" id="expand-toggle" />

<table>
  <thead>
    <tr>
      <th>Spalte #1</th>
      <th>Spalte #2</th>
      <th>Spalte #3</th>
    </tr>
  </thead>
  <tbody>
    <tr class="expandable">
      <td>[Weitere Texte]</td>
      <td>[Weitere Texte]</td>
      <td>[Weitere Texte]</td>
    </tr>
    <tr>
      <td>[Zelleninhalt]</td>
      <td>[Zelleninhalt]</td>
      <td>[Zelleninhalt]</td>
    </tr>
    <tr>
      <td>[Zelleninhalt]</td>
      <td>[Zelleninhalt]</td>
      <td>[Zelleninhalt]</td>
    </tr>
    <tr class="expandable">
      <td>[Weitere Texte]</td>
      <td>[Weitere Texte]</td>
      <td>[Weitere Texte]</td>
    </tr>
    <tr class="expandable">
      <td>[Weitere Texte]</td>
      <td>[Weitere Texte]</td>
      <td>[Weitere Texte]</td>
    </tr>
  </tbody>
</table>

<label for="expand-toggle" id="expand-btn">Verborgene Zeilen umschalten</label>
```

#### CSS

```css
/* Checkbox ausblenden */
#expand-toggle {
  display: none;
}

/* Erweiterbaren Inhalt standardmäßig ausblenden */
.expandable {
  visibility: collapse;
  background: #ddd;
}

/* Den Button stylen */
#expand-btn {
  display: inline-block;
  margin-top: 12px;
  padding: 5px 11px;
  background-color: #ff7;
  border: 1px solid;
  border-radius: 3px;
}

/* Verborgenen Inhalt anzeigen, wenn die Checkbox geprüft ist */
#expand-toggle:checked ~ * .expandable {
  visibility: visible;
}

/* Den Button stylen, wenn die Checkbox geprüft ist */
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

- [Webformulare — Benutzerdaten verarbeiten](/de/docs/Learn/Forms)
- [Gestaltung von Webformularen](/de/docs/Learn/Forms/Styling_web_forms)
- Verwandte HTML-Elemente: [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox), [`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio), {{HTMLElement("select")}}, und {{HTMLElement("option")}}
- [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
