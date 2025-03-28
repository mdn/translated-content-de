---
title: "<option>: Das HTML Option-Element"
slug: Web/HTML/Element/option
l10n:
  sourceCommit: 2595b22899b54f079721069704128fb7f0451995
---

{{HTMLSidebar}}

Das **`<option>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um ein Element innerhalb eines {{HTMLElement("select")}}, eines {{HTMLElement("optgroup")}}, oder eines {{HTMLElement("datalist")}} Elements zu definieren. Als solches kann `<option>` Menüpunkte in Popups und anderen Listen von Elementen in einem HTML-Dokument darstellen.

{{InteractiveExample("HTML Demo: &lt;option&gt;", "tabbed-standard")}}

```html interactive-example
<label for="pet-select">Choose a pet:</label>

<select id="pet-select">
  <option value="">--Please choose an option--</option>
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="hamster">Hamster</option>
  <option value="parrot">Parrot</option>
  <option value="spider">Spider</option>
  <option value="goldfish">Goldfish</option>
</select>
```

```css interactive-example
label {
  font-family: sans-serif;
  font-size: 1rem;
  padding-right: 10px;
}

select {
  font-size: 0.9rem;
  padding: 2px 5px;
}
```

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Wenn dieses Boolesche Attribut gesetzt ist, kann diese Option nicht ausgewählt werden. Häufig werden solche Steuerelemente von Browsern ausgegraut und erhalten keine Browserevents, wie Mausklicks oder Fokus-bezogene Ereignisse. Wenn dieses Attribut nicht gesetzt ist, kann das Element dennoch deaktiviert sein, wenn einer seiner Vorfahren ein deaktiviertes {{HTMLElement("optgroup")}} Element ist.
- `label`
  - : Dieses Attribut ist Text für das Label, das die Bedeutung der Option angibt. Wenn das `label`-Attribut nicht definiert ist, ist sein Wert der Textinhalt des Elements.
- `selected`
  - : Wenn vorhanden, zeigt dieses Boolesche Attribut an, dass die Option anfänglich ausgewählt ist. Wenn das `<option>` Element ein Nachfolger eines {{HTMLElement("select")}} Elements ist, dessen [`multiple`](/de/docs/Web/HTML/Element/select#multiple)-Attribut nicht gesetzt ist, darf nur ein einziges `<option>` dieses {{HTMLElement("select")}} Elements das `selected`-Attribut haben.
- `value`
  - : Der Inhalt dieses Attributs repräsentiert den Wert, der mit dem Formular übermittelt werden soll, sollte diese Option ausgewählt werden. Wenn dieses Attribut weggelassen wird, wird der Wert aus dem Textinhalt des Optionselements übernommen.

## Styling mit CSS

Das Styling von `<option>` Elementen war traditionell stark eingeschränkt. [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) erklärt neuere Funktionen, die ihre vollständige Anpassung ermöglichen, ganz wie normale DOM-Elemente.

### Altes Option-Styling

In Browsern, die die modernen Anpassungsfunktionen nicht unterstützen (oder in Codebasen, die sie nicht nutzen können), hängt das verfügbare Styling von `<option>` Elementen vom Browser und Betriebssystem ab. Abhängig vom Betriebssystem wird die [`font-size`](/de/docs/Web/CSS/font-size) des besitzenden `<select>` in Firefox und Chromium berücksichtigt. Chromium kann zusätzlich [`color`](/de/docs/Web/CSS/color), [`background-color`](/de/docs/Web/CSS/background-color), [`font-family`](/de/docs/Web/CSS/font-family), [`font-variant`](/de/docs/Web/CSS/font-variant) und [`text-align`](/de/docs/Web/CSS/text-align) zulassen.

Weitere Details zum alten `<option>` Styling finden Sie in [unserem Leitfaden zum erweiterten Formular-Styling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling).

## Beispiele

Siehe {{HTMLElement("select")}} für Beispiele.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        In traditionellen <code>&lt;select&gt;</code>-Elementen ist nur Textinhalt erlaubt, möglicherweise mit maskierten Zeichen (wie <code>&#x26;eacute;</code>). In <a href="/de/docs/Learn_web_development/Extensions/Forms/Customizable_select">anpassbaren Select-Elementen</a> können <code>&lt;option&gt;</code>-Elemente beliebigen Inhalt haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag ist obligatorisch. Das End-Tag ist optional, wenn dieses Element direkt von einem anderen <code>&#x3C;option></code>-Element oder einem {{HTMLElement("optgroup")}} gefolgt wird, oder wenn das Elternelement keinen weiteren Inhalt hat.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("select")}}, ein {{HTMLElement("optgroup")}}, oder ein {{HTMLElement("datalist")}} Element.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role"><code>option</code></a></td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere formularbezogene Elemente: {{HTMLElement("form")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}}, {{HTMLElement("select")}}, {{HTMLElement("datalist")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("textarea")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} und {{HTMLElement("meter")}}.
- [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
