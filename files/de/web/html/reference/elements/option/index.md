---
title: "<option>: Das HTML-Optionselement"
slug: Web/HTML/Reference/Elements/option
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Das **`<option>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um ein Element in einem {{HTMLElement("select")}}, einem {{HTMLElement("optgroup")}}, oder einem {{HTMLElement("datalist")}} Element zu definieren. Somit kann `<option>` Menüelemente in Popups und anderen Listen von Elementen in einem HTML-Dokument darstellen.

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

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Wenn dieses boolesche Attribut gesetzt ist, kann diese Option nicht ausgewählt werden. Oftmals blenden Browser solche Elemente aus, und sie erhalten keine Browserereignisse, wie Mausklicks oder fokussierungsbezogene Ereignisse. Wenn dieses Attribut nicht gesetzt ist, kann das Element immer noch deaktiviert sein, wenn einer seiner Vorfahren ein deaktiviertes {{HTMLElement("optgroup")}} Element ist.
- `label`
  - : Dieses Attribut ist der Text für das Label, das die Bedeutung der Option angibt. Wenn das `label` Attribut nicht definiert ist, entspricht sein Wert dem Textinhalt des Elements.
- `selected`
  - : Wenn vorhanden, zeigt dieses boolesche Attribut an, dass die Option anfänglich ausgewählt ist. Wenn das `<option>` Element ein Nachkomme eines {{HTMLElement("select")}} Elements ist, dessen [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple) Attribut nicht gesetzt ist, darf nur ein einziges `<option>` dieses {{HTMLElement("select")}} Elements das `selected` Attribut haben.
- `value`
  - : Der Inhalt dieses Attributs stellt den Wert dar, der mit dem Formular übermittelt wird, falls diese Option ausgewählt wird. Wenn dieses Attribut weggelassen wird, wird der Wert aus dem Textinhalt des Optionselements übernommen.

## Gestaltung mit CSS

Die Gestaltung von `<option>`-Elementen war historisch gesehen stark eingeschränkt. [Anpassbare Auswahl-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) erklärt neuere Funktionen, die ihre vollständige Anpassung ermöglichen, genau wie jedes reguläre DOM-Element.

### Altes Optionsdesign

In Browsern, die die modernen Anpassungsfunktionen nicht unterstützen (oder in alten Codebasen, wo sie nicht verwendet werden können), hängt die Gestaltung, die auf `<option>`-Elementen verfügbar ist, vom Browser und Betriebssystem ab. Abhängig vom Betriebssystem wird die [`font-size`](/de/docs/Web/CSS/Reference/Properties/font-size) des eigenen `<select>` in Firefox und Chromium respektiert. Chromium kann zusätzlich [`color`](/de/docs/Web/CSS/Reference/Properties/color), [`background-color`](/de/docs/Web/CSS/Reference/Properties/background-color), [`font-family`](/de/docs/Web/CSS/Reference/Properties/font-family), [`font-variant`](/de/docs/Web/CSS/Reference/Properties/font-variant) und [`text-align`](/de/docs/Web/CSS/Reference/Properties/text-align) zulassen.

Sie finden weitere Details zu altem `<option>`-Design in [unserem Leitfaden zur erweiterten Formulargestaltung](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling).

## Beispiele

Siehe {{HTMLElement("select")}} für Beispiele.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        In traditionellen <code>&lt;select&gt;</code> Elementen ist nur Textinhalt erlaubt, möglicherweise mit escaped Zeichen (wie
        <code>&#x26;eacute;</code>). In <a href="/de/docs/Learn_web_development/Extensions/Forms/Customizable_select">anpassbaren Auswahl-Elementen</a> können <code>&lt;option&gt;</code> Elemente beliebigen Inhalt haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Tags-Aussparung</th>
      <td>
        Das Start-Tag ist obligatorisch. Das End-Tag ist optional, wenn dieses Element
        unmittelbar von einem anderen <code>&#x3C;option></code> Element oder einem
        {{HTMLElement("optgroup")}} gefolgt wird oder wenn das Elternelement keinen
        weiteren Inhalt hat.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("select")}}, ein
        {{HTMLElement("optgroup")}} oder ein
        {{HTMLElement("datalist")}} Element.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
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
- [Anpassbare Auswahl-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
