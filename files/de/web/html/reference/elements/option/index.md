---
title: "`<option>` HTML-Optionselement"
short-title: <option>
slug: Web/HTML/Reference/Elements/option
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<option>`**-Element in [HTML](/de/docs/Web/HTML) wird verwendet, um ein Element in einem {{HTMLElement("select")}}, einem {{HTMLElement("optgroup")}} oder einem {{HTMLElement("datalist")}}-Element zu definieren. Somit kann `<option>` Menüelemente in Popups und andere Listen von Elementen in einem HTML-Dokument darstellen.

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

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Wenn dieses boolesche Attribut gesetzt ist, ist diese Option nicht auswählbar. Oftmals werden solche Steuerelemente von Browsern grau dargestellt und erhalten keine Navigationsereignisse, wie Mausklicks oder Fokusereignisse. Ist dieses Attribut nicht gesetzt, kann das Element dennoch deaktiviert sein, wenn ein übergeordnetes {{HTMLElement("optgroup")}}-Element deaktiviert ist.
- `label`
  - : Dieses Attribut ist ein Text für das Label, das die Bedeutung der Option angibt. Ist das `label` Attribut nicht definiert, entspricht sein Wert dem Textinhalt des Elements.
- `selected`
  - : Wenn vorhanden, zeigt dieses boolesche Attribut an, dass die Option initial ausgewählt ist. Wenn das `<option>`-Element ein Nachkomme eines {{HTMLElement("select")}}-Elements ist, dessen [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple) Attribut nicht gesetzt ist, darf nur ein einziges `<option>` dieses {{HTMLElement("select")}}-Elements das `selected` Attribut haben.
- `value`
  - : Der Inhalt dieses Attributs stellt den Wert dar, der mit dem Formular übermittelt werden soll, wenn diese Option ausgewählt wurde. Ist dieses Attribut weggelassen, wird der Wert aus dem Textinhalt des Optionselements genommen.

## Styling mit CSS

Das Styling von `<option>`-Elementen war historisch gesehen sehr eingeschränkt. [Customizable select elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) erklärt neuere Funktionen, die ihre vollständige Anpassung ermöglichen, genauso wie bei jedem regulären DOM-Element.

### Legacy-Optionen-Styling

In Browsern, die die modernen Anpassungsfunktionen nicht unterstützen (oder in älteren Codebasen, wo sie nicht verwendet werden können), hängt das verfügbare Styling von `<option>`-Elementen vom Browser und Betriebssystem ab. Abhängig vom Betriebssystem wird die {{cssxref("font-size")}} des besitzenden `<select>` in Firefox und Chromium respektiert. Chromium kann zusätzlich {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("font-family")}}, {{cssxref("font-variant")}} und {{cssxref("text-align")}} erlauben.

Mehr Details über Legacy-`<option>`-Styling finden Sie in [unserem Leitfaden zum erweiterten Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling).

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
        In traditionellen <code>&lt;select&gt;</code>-Elementen ist nur Textinhalt erlaubt, möglicherweise mit escape-Zeichen (wie
        <code>&#x26;eacute;</code>). In <a href="/de/docs/Learn_web_development/Extensions/Forms/Customizable_select">anpassbaren Select-Elementen</a> können <code>&lt;option&gt;</code>-Elemente beliebigen Inhalt haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag ist obligatorisch. Das End-Tag ist optional, wenn dieses Element
        unmittelbar von einem anderen <code>&#x3C;option></code>-Element oder einem
        {{HTMLElement("optgroup")}} gefolgt wird, oder wenn das übergeordnete Element
        keinen weiteren Inhalt hat.
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

- Andere form-bezogene Elemente: {{HTMLElement("form")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}}, {{HTMLElement("select")}}, {{HTMLElement("datalist")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("textarea")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} und {{HTMLElement("meter")}}.
- [Customizable select elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
