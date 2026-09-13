---
title: "`<option>` HTML `<option>`-Element"
short-title: <option>
slug: Web/HTML/Reference/Elements/option
l10n:
  sourceCommit: 28f5f3b9b463fa842fa686ccc73c9e1d9b06282b
---

Das **`<option>`**-Element in [HTML](/de/docs/Web/HTML) wird verwendet, um ein Element zu definieren, das in einem {{HTMLElement("select")}}, einem {{HTMLElement("optgroup")}} oder einem {{HTMLElement("datalist")}}-Element enthalten ist. Somit kann `<option>` Menüpunkte in Popups und anderen Listen von Elementen in einem HTML-Dokument darstellen.

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
  - : Wenn dieses boolesche Attribut gesetzt ist, kann diese Option nicht aktiviert werden. Oftmals grenzen Browser solche Steuerelemente aus und es wird kein Browsing-Ereignis, wie Mausklicks oder fokussierte Ereignisse, empfangen. Wenn dieses Attribut nicht gesetzt ist, kann das Element dennoch deaktiviert sein, wenn einer seiner Vorfahren ein deaktiviertes {{HTMLElement("optgroup")}}-Element ist.
- `label`
  - : Dieses Attribut ist ein Text für das Label, das die Bedeutung der Option angibt. Wenn das `label`-Attribut nicht definiert ist, entspricht sein Wert dem Textinhalt des Elements.
- `selected`
  - : Wenn vorhanden, zeigt dieses boolesche Attribut an, dass die Option anfänglich ausgewählt ist. Wenn das `<option>`-Element ein Nachfahre eines {{HTMLElement("select")}}-Elements ist, dessen [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple)-Attribut nicht gesetzt ist, darf nur ein einzelnes `<option>` dieses {{HTMLElement("select")}}-Elements das `selected`-Attribut haben.
- `value`
  - : Der Inhalt dieses Attributs stellt den Wert dar, der mit dem Formular übermittelt wird, sollte diese Option ausgewählt sein. Wenn dieses Attribut weggelassen wird, wird der Wert aus dem Textinhalt des Options-Elements übernommen.

## Styling mit CSS

Das Styling von `<option>`-Elementen war historisch gesehen stark eingeschränkt. [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) erklärt neuere Funktionen, die ihre vollständige Anpassung ermöglichen, wie bei jedem regulären DOM-Element.

### Legacy-Option-Styling

In Browsern, die die modernen Anpassungsfunktionen nicht unterstützen (oder bei älteren Codebasen, wo sie nicht verwendet werden können), hängt das Styling der `<option>`-Elemente vom Browser und Betriebssystem ab. Abhängig vom Betriebssystem wird die {{cssxref("font-size")}} des zugehörigen `<select>` in Firefox und Chromium respektiert. Chromium kann zusätzlich {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("font-family")}}, {{cssxref("font-variant")}} und {{cssxref("text-align")}} einstellen lassen.

Weitere Details zum Legacy-Styling von `<option>`-Elementen finden Sie in [unserem Leitfaden zum erweiterten Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling).

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
        In traditionellen <code>&lt;select&gt;</code>-Elementen ist nur Textinhalt erlaubt, möglicherweise mit escaped Zeichen (wie
        <code>&#x26;eacute;</code>). In <a href="/de/docs/Learn_web_development/Extensions/Forms/Customizable_select">anpassbaren Select-Elementen</a> können `<option>`-Elemente beliebigen Inhalt haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Der Start-Tag ist obligatorisch. Der End-Tag ist optional, wenn dieses Element unmittelbar auf ein anderes <code>&#x3C;option></code>-Element oder ein {{HTMLElement("optgroup")}}, oder wenn das Elternelement keinen weiteren Inhalt hat, folgt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("select")}}, ein {{HTMLElement("optgroup")}} oder ein {{HTMLElement("datalist")}}-Element.
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
      <th scope="row">DOM-Interface</th>
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
