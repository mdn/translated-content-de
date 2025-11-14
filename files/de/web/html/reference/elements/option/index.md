---
title: "<option>: Das HTML-Optionselement"
slug: Web/HTML/Reference/Elements/option
l10n:
  sourceCommit: c10cfb6daba8fe6fc5366f2e1ca1bd32de8a537f
---

Das **`<option>`**-Element [HTML](/de/docs/Web/HTML) wird verwendet, um ein Element zu definieren, das in einem {{HTMLElement("select")}}, einem {{HTMLElement("optgroup")}} oder einem {{HTMLElement("datalist")}}-Element enthalten ist. So kann `<option>` Menüelemente in Popups und anderen Listen von Elementen in einem HTML-Dokument darstellen.

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
  - : Wenn dieses Boolesche Attribut gesetzt ist, ist diese Option nicht auswählbar. Häufig werden solche Bedienelemente von Browsern ausgegraut und erhalten keine Browsing-Ereignisse, wie Mausklicks oder Fokus-bezogene Ereignisse. Wenn dieses Attribut nicht gesetzt ist, kann das Element dennoch deaktiviert werden, wenn einer seiner Vorfahren ein deaktiviertes {{HTMLElement("optgroup")}}-Element ist.
- `label`
  - : Dieses Attribut ist der Text für die Beschriftung, die die Bedeutung der Option angibt. Wenn das `label`-Attribut nicht definiert ist, ist sein Wert der Textinhalt des Elements.
- `selected`
  - : Wenn vorhanden, weist dieses Boolesche Attribut darauf hin, dass die Option anfänglich ausgewählt ist. Wenn das `<option>`-Element ein Nachfahre eines {{HTMLElement("select")}}-Elements ist, dessen [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple)-Attribut nicht gesetzt ist, darf nur ein einziges `<option>` dieses {{HTMLElement("select")}}-Elements das `selected`-Attribut haben.
- `value`
  - : Der Inhalt dieses Attributs stellt den Wert dar, der mit dem Formular übermittelt werden soll, falls diese Option ausgewählt ist. Wenn dieses Attribut weggelassen wird, wird der Wert aus dem Textinhalt des Optionselements übernommen.

## Styling mit CSS

Das Styling von `<option>`-Elementen war historisch gesehen sehr eingeschränkt. [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) erläutern neuere Funktionen, die ihre vollständige Anpassung ermöglichen, ähnlich wie bei jedem regulären DOM-Element.

### Legacy-Option-Styling

In Browsern, die die modernen Anpassungsfunktionen nicht unterstützen (oder in Legacy-Codebasen, in denen sie nicht verwendet werden können), hängt das verfügbare Styling für `<option>`-Elemente vom Browser und Betriebssystem ab. Abhängig vom Betriebssystem wird in Firefox und Chromium die {{cssxref("font-size")}} des Besitzers `<select>` respektiert. Chromium kann zusätzlich {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("font-family")}}, {{cssxref("font-variant")}} und {{cssxref("text-align")}} gesetzt werden.

Weitere Details zum Legacy-`<option>`-Styling finden Sie in [unserem Leitfaden zum erweiterten Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling).

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
        In traditionellen <code>&lt;select&gt;</code>-Elementen ist nur Textinhalt gestattet, möglicherweise mit maskierten Zeichen (wie
        <code>&#x26;eacute;</code>). In <a href="/de/docs/Learn_web_development/Extensions/Forms/Customizable_select">anpassbaren Select-Elementen</a> können <code>&lt;option&gt;</code>-Elemente beliebige Inhalte haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag ist obligatorisch. Das End-Tag ist optional, wenn dieses Element
        unmittelbar von einem anderen <code>&#x3C;option></code>-Element oder einer
        {{HTMLElement("optgroup")}} gefolgt wird oder wenn das Elternelement keine
        weiteren Inhalte hat.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Elternelemente</th>
      <td>
        Ein {{HTMLElement("select")}}, ein
        {{HTMLElement("optgroup")}} oder ein
        {{HTMLElement("datalist")}}-Element.
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
