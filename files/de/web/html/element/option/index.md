---
title: "<option>: Das HTML-Optionselement"
slug: Web/HTML/Element/option
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<option>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um ein Element innerhalb eines {{HTMLElement("select")}}, eines {{HTMLElement("optgroup")}} oder eines {{HTMLElement("datalist")}} Elements zu definieren. In dieser Weise kann `<option>` Menüpunkte in Popups und anderen Listen von Elementen in einem HTML-Dokument darstellen.

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

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Wenn dieses Boolean-Attribut gesetzt ist, kann diese Option nicht ausgewählt werden. Browser blenden solche Steuerelemente oft aus, und sie erhalten keine Browsing-Ereignisse, wie Maus-Klicks oder solche, die mit dem Fokus zu tun haben. Wenn dieses Attribut nicht gesetzt ist, kann das Element trotzdem deaktiviert werden, wenn einer seiner Vorfahren ein deaktiviertes {{HTMLElement("optgroup")}} Element ist.
- `label`
  - : Dieses Attribut ist ein Text für das Label, das die Bedeutung der Option angibt. Wenn das `label` Attribut nicht definiert ist, ist sein Wert der Textinhalt des Elements.
- `selected`
  - : Wenn vorhanden, gibt dieses Boolean-Attribut an, dass die Option initial ausgewählt ist. Wenn das `<option>` Element ein Nachkomme eines {{HTMLElement("select")}} Elements ist, dessen [`multiple`](/de/docs/Web/HTML/Element/select#multiple) Attribut nicht gesetzt ist, darf nur eine einzelne `<option>` dieses {{HTMLElement("select")}} Elements das `selected` Attribut haben.
- `value`
  - : Der Inhalt dieses Attributs repräsentiert den Wert, der mit dem Formular übermittelt werden soll, falls diese Option ausgewählt ist. Wenn dieses Attribut weggelassen wird, wird der Wert aus dem Textinhalt des Optionselements genommen.

## Styling mit CSS

Das Styling des **`<option>`** Elements innerhalb eines `<select>` Dropdowns ist stark eingeschränkt und abhängig vom Browser und Betriebssystem. Je nach Betriebssystem wird die [`font-size`](/de/docs/Web/CSS/font-size) des besitzenden `<select>` in Firefox und Chromium respektiert. Chromium kann zusätzlich erlauben, [`color`](/de/docs/Web/CSS/color), [`background-color`](/de/docs/Web/CSS/background-color), [`font-family`](/de/docs/Web/CSS/font-family), [`font-variant`](/de/docs/Web/CSS/font-variant), und [`text-align`](/de/docs/Web/CSS/text-align) zu setzen.

Sie finden mehr Details zum Styling von `<option>` in [unserem Leitfaden zu erweitertem Formular-Styling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling).

## Beispiele

Siehe {{HTMLElement("select")}} für Beispiele.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Text, möglicherweise mit escapeten Zeichen (wie
        <code>&#x26;eacute;</code>).
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Der Start-Tag ist zwingend erforderlich. Der End-Tag ist optional, wenn dieses Element
        unmittelbar gefolgt wird von einem weiteren <code>&#x3C;option></code> Element oder einem
        {{HTMLElement("optgroup")}}, oder wenn das Elternelement keinen
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
      <th scope="row">Implizite ARIA Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/option_role"><code>option</code></a></td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA Rollen</th>
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

- Andere Formular-bezogene Elemente: {{HTMLElement("form")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}}, {{HTMLElement("select")}}, {{HTMLElement("datalist")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("textarea")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} und {{HTMLElement("meter")}}.
