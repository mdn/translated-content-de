---
title: "<option>: Das HTML-Option-Element"
slug: Web/HTML/Reference/Elements/option
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<option>`**- [HTML](/de/docs/Web/HTML)-Element wird verwendet, um ein Element zu definieren, das in einem {{HTMLElement("select")}}, einem {{HTMLElement("optgroup")}} oder einem {{HTMLElement("datalist")}}-Element enthalten ist. Als solches kann `<option>` Menüeinträge in Popup-Fenstern und anderen Listen von Elementen in einem HTML-Dokument darstellen.

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
  - : Wenn dieses Boolean-Attribut gesetzt ist, kann diese Option nicht ausgewählt werden. Oftmals werden solche Steuerelemente von Browsern ausgegraut und sie erhalten keine Browsereignisse, wie Mausklicks oder fokussierungsbezogene Ereignisse. Wenn dieses Attribut nicht gesetzt ist, kann das Element dennoch deaktiviert sein, wenn einer seiner Vorfahren ein deaktiviertes {{HTMLElement("optgroup")}}-Element ist.
- `label`
  - : Dieses Attribut ist der Text für das Label, das die Bedeutung der Option angibt. Wenn das `label`-Attribut nicht definiert ist, entspricht sein Wert dem Textinhalt des Elements.
- `selected`
  - : Wenn vorhanden, gibt dieses Boolean-Attribut an, dass die Option initial ausgewählt ist. Wenn das `<option>`-Element ein Nachfolger eines {{HTMLElement("select")}}-Elements ist, dessen [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple)-Attribut nicht gesetzt ist, darf nur ein einziges `<option>` dieses {{HTMLElement("select")}}-Elements das `selected`-Attribut besitzen.
- `value`
  - : Der Inhalt dieses Attributs stellt den Wert dar, der mit dem Formular übermittelt werden soll, sollte diese Option ausgewählt sein. Wenn dieses Attribut ausgelassen wird, wird der Wert aus dem Textinhalt des Option-Elements entnommen.

## Gestaltung mit CSS

Die Gestaltung von `<option>`-Elementen war historisch gesehen stark eingeschränkt. [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) erklärt neuere Funktionen, die ihre vollständige Anpassung ermöglichen, genau wie bei jedem regulären DOM-Element.

### Legacy-Option-Gestaltung

In Browsern, die die modernen Anpassungsfunktionen nicht unterstützen (oder in alten Codebasen, in denen sie nicht verwendet werden können), hängt die verfügbare Gestaltung von `<option>`-Elementen vom Browser und Betriebssystem ab. Je nach Betriebssystem wird die [`font-size`](/de/docs/Web/CSS/font-size) des besitzenden `<select>` in Firefox und Chromium respektiert. Chromium kann zusätzlich [`color`](/de/docs/Web/CSS/color), [`background-color`](/de/docs/Web/CSS/background-color), [`font-family`](/de/docs/Web/CSS/font-family), [`font-variant`](/de/docs/Web/CSS/font-variant) und [`text-align`](/de/docs/Web/CSS/text-align) zulassen.

Weitere Details zur alten `<option>`-Gestaltung finden Sie in [unserem Leitfaden zur erweiterten Formular-Gestaltung](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling).

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
        In traditionellen <code>&lt;select&gt;</code>-Elementen sind nur Textinhalte erlaubt, möglicherweise mit escapten Zeichen (wie
        <code>&#x26;eacute;</code>). In <a href="/de/docs/Learn_web_development/Extensions/Forms/Customizable_select">anpassbaren Select-Elementen</a> können <code>&lt;option&gt;</code>-Elemente beliebige Inhalte haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Der Start-Tag ist obligatorisch. Der End-Tag ist optional, wenn dieses Element
        unmittelbar gefolgt wird von einem anderen <code>&#x3C;option></code>-Element oder einem
        {{HTMLElement("optgroup")}}, oder wenn das Elternelement keinen
        weiteren Inhalt hat.
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
      <th scope="row">Zulässige ARIA-Rollen</th>
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
