---
title: "<option>: Das HTML Option-Element"
slug: Web/HTML/Element/option
l10n:
  sourceCommit: 991385e7cfb9ac8589332b07aadcc4b38edea512
---

{{HTMLSidebar}}

Das **`<option>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um ein Element in einem {{HTMLElement("select")}}, einem {{HTMLElement("optgroup")}} oder einem {{HTMLElement("datalist")}}-Element zu definieren. Als solches kann `<option>` Menüelemente in Popups und andere Listen von Elementen in einem HTML-Dokument darstellen.

{{EmbedInteractiveExample("pages/tabbed/option.html", "tabbed-standard")}}

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Wenn dieses boolesche Attribut gesetzt ist, ist diese Option nicht überprüfbar. Oftmals werden solche Steuerelemente in Browsern ausgegraut und erhalten keine Browserevents, wie Mausklicks oder fokusbezogene Events. Wenn dieses Attribut nicht gesetzt ist, kann das Element dennoch deaktiviert sein, wenn einer seiner Vorfahren ein deaktiviertes {{HTMLElement("optgroup")}} Element ist.
- `label`
  - : Dieses Attribut ist der Text für das Label, das die Bedeutung der Option anzeigt. Ist das `label`-Attribut nicht definiert, ist sein Wert der des Textinhalts des Elements.
- `selected`
  - : Wenn vorhanden, gibt dieses boolesche Attribut an, dass die Option ursprünglich ausgewählt ist. Wenn das `<option>`-Element ein Nachkomme eines {{HTMLElement("select")}} Elements ist, dessen [`multiple`](/de/docs/Web/HTML/Element/select#multiple) Attribut nicht gesetzt ist, darf nur ein einzelnes `<option>` dieses {{HTMLElement("select")}} Elements das `selected`-Attribut haben.
- `value`
  - : Der Inhalt dieses Attributs stellt den Wert dar, der mit dem Formular übermittelt werden soll, sollte diese Option ausgewählt sein. Wenn dieses Attribut weggelassen wird, wird der Wert aus dem Textinhalt des Option-Elements übernommen.

## Styling mit CSS

Das Styling des **`<option>`** Elements ist stark eingeschränkt. Optionen erben nicht die Schriftart vom Elternelement. In Firefox können nur [`color`](/de/docs/Web/CSS/color) und [`background-color`](/de/docs/Web/CSS/background-color) gesetzt werden, in Chrome und Safari ist es jedoch nicht möglich, irgendwelche Eigenschaften zu setzen. Weitere Details zum Styling finden Sie in [unserem Leitfaden zum fortgeschrittenen Formularstyling](/de/docs/Learn/Forms/Advanced_form_styling).

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
        Text, möglicherweise mit Escape-Zeichen (wie
        <code>&#x26;eacute;</code>).
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag ist obligatorisch. Das End-Tag kann weggelassen werden, wenn dieses Element unmittelbar von einem anderen <code>&#x3C;option></code> Element oder einem {{HTMLElement("optgroup")}} gefolgt wird, oder wenn das übergeordnete Element keinen weiteren Inhalt hat.
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

- Andere formularbezogene Elemente: {{HTMLElement("form")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}}, {{HTMLElement("select")}}, {{HTMLElement("datalist")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("textarea")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} und {{HTMLElement("meter")}}.
