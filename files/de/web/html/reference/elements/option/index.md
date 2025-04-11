---
title: "<option>: Das HTML-Optionselement"
slug: Web/HTML/Reference/Elements/option
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<option>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um einen Eintrag in einem {{HTMLElement("select")}}, einem {{HTMLElement("optgroup")}} oder einem {{HTMLElement("datalist")}}-Element zu definieren. Dementsprechend kann `<option>` Menüeinträge in Popups und anderen Listen von Einträgen in einem HTML-Dokument darstellen.

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

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Wenn dieses boolesche Attribut gesetzt ist, kann diese Option nicht überprüft werden. Oft blenden Browser solche Steuerelemente aus, und sie erhalten keine Browsing-Ereignisse, wie Mausklicks oder solche im Zusammenhang mit dem Fokus. Wenn dieses Attribut nicht gesetzt ist, kann das Element dennoch deaktiviert werden, wenn eines seiner Vorfahren ein deaktiviertes {{HTMLElement("optgroup")}}-Element ist.
- `label`
  - : Dieses Attribut ist der Text für das Label, das die Bedeutung der Option angibt. Wenn das `label`-Attribut nicht definiert ist, entspricht sein Wert dem Textinhalt des Elements.
- `selected`
  - : Wenn vorhanden, gibt dieses boolesche Attribut an, dass die Option anfänglich ausgewählt ist. Wenn das `<option>`-Element ein Nachkomme eines {{HTMLElement("select")}}-Elements ist, dessen [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple)-Attribut nicht gesetzt ist, kann nur ein einzelnes `<option>` dieses {{HTMLElement("select")}}-Elements das `selected`-Attribut haben.
- `value`
  - : Der Inhalt dieses Attributs repräsentiert den Wert, der mit dem Formular übermittelt werden soll, falls diese Option ausgewählt wird. Wenn dieses Attribut weggelassen wird, wird der Wert aus dem Textinhalt des Optionselements übernommen.

## Styling mit CSS

Das Styling von `<option>`-Elementen war historisch sehr eingeschränkt. [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) erklären neuere Funktionen, die ihre vollständige Anpassung ermöglichen, ähnlich wie bei jedem regulären DOM-Element.

### Veraltetes Option-Styling

In Browsern, die die modernen Anpassungsfunktionen nicht unterstützen (oder in älteren Codebasen, in denen sie nicht verwendet werden können), hängt das Styling, das bei `<option>`-Elementen verfügbar ist, vom Browser und Betriebssystem ab. Abhängig vom Betriebssystem wird die [`font-size`](/de/docs/Web/CSS/font-size) des enthaltenen `<select>` in Firefox und Chromium respektiert. Chromium kann zusätzlich [`color`](/de/docs/Web/CSS/color), [`background-color`](/de/docs/Web/CSS/background-color), [`font-family`](/de/docs/Web/CSS/font-family), [`font-variant`](/de/docs/Web/CSS/font-variant) und [`text-align`](/de/docs/Web/CSS/text-align) zulassen.

Mehr Details zum veralteten `<option>`-Styling finden Sie in [unserem Leitfaden zum erweiterten Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling).

## Beispiele

Siehe {{HTMLElement("select")}} für Beispiele.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        In traditionellen <code>&lt;select&gt;</code>-Elementen ist nur Textinhalt erlaubt, möglicherweise mit maskierten Zeichen (wie
        <code>&#x26;eacute;</code>). In <a href="/de/docs/Learn_web_development/Extensions/Forms/Customizable_select">anpassbaren Select-Elementen</a> können <code>&lt;option&gt;</code>-Elemente beliebigen Inhalt haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Der Start-Tag ist zwingend erforderlich. Der End-Tag ist optional, wenn dieses Element
        direkt von einem anderen <code>&#x3C;option></code>-Element oder einem
        {{HTMLElement("optgroup")}} gefolgt wird oder wenn das übergeordnete Element keine
        weiteren Inhalte hat.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("select")}}, ein
        {{HTMLElement("optgroup")}} oder ein
        {{HTMLElement("datalist")}}-Element.
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
- [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
