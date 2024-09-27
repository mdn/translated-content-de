---
title: "<option>: Das HTML Option-Element"
slug: Web/HTML/Element/option
l10n:
  sourceCommit: 991385e7cfb9ac8589332b07aadcc4b38edea512
---

{{HTMLSidebar}}

Das **`<option>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um ein Element innerhalb eines {{HTMLElement("select")}}, eines {{HTMLElement("optgroup")}}, oder eines {{HTMLElement("datalist")}} Elements zu definieren. In einem HTML-Dokument kann `<option>` somit Menüelemente in Pop-ups und anderen Elementlisten darstellen.

{{EmbedInteractiveExample("pages/tabbed/option.html", "tabbed-standard")}}

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Wenn dieses boolesche Attribut gesetzt ist, ist diese Option nicht auswählbar. Oft blenden Browser solche Steuerelemente aus, und sie erhalten keine Browser-Ereignisse wie Maus-Klicks oder Fokus-bezogene Ereignisse. Wenn dieses Attribut nicht gesetzt ist, kann das Element trotzdem deaktiviert sein, wenn einer seiner Vorfahren ein deaktiviertes {{HTMLElement("optgroup")}} Element ist.
- `label`
  - : Dieses Attribut enthält den Text für das Label, das die Bedeutung der Option angibt. Wenn das `label` Attribut nicht definiert ist, entspricht sein Wert dem Textinhalt des Elements.
- `selected`
  - : Wenn vorhanden, gibt dieses boolesche Attribut an, dass die Option anfänglich ausgewählt ist. Wenn das `<option>` Element ein Nachkomme eines {{HTMLElement("select")}} Elements ist, dessen [`multiple`](/de/docs/Web/HTML/Element/select#multiple) Attribut nicht gesetzt ist, darf nur ein einziges `<option>` dieses {{HTMLElement("select")}} Elements das `selected` Attribut haben.
- `value`
  - : Der Inhalt dieses Attributs stellt den Wert dar, der mit dem Formular übermittelt wird, falls diese Option ausgewählt wird. Wenn dieses Attribut weggelassen wird, wird der Wert aus dem Textinhalt des Option-Elements entnommen.

## Stil mit CSS

Das Styling des **`<option>`** Elements ist stark eingeschränkt. Optionen erben nicht die Schriftart, die in den übergeordneten Elementen festgelegt ist. In Firefox können nur [`color`](/de/docs/Web/CSS/color) und [`background-color`](/de/docs/Web/CSS/background-color) festgelegt werden. In Chrome und Safari ist es jedoch nicht möglich, Eigenschaften festzulegen. Weitere Details zum Styling finden Sie in [unserem Leitfaden zum erweiterten Formular-Styling](/de/docs/Learn/Forms/Advanced_form_styling).

## Beispiele

Sehen Sie sich {{HTMLElement("select")}} für Beispiele an.

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
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        Text, möglicherweise mit maskierten Zeichen (wie
        <code>&#x26;eacute;</code>).
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag ist obligatorisch. Das End-Tag ist optional, wenn dieses Element
        unmittelbar von einem anderen <code>&#x3C;option></code> Element oder einem
        {{HTMLElement("optgroup")}} gefolgt wird, oder wenn das Elternelement keinen
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
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/option_role"><code>option</code></a></td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM Schnittstelle</th>
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
