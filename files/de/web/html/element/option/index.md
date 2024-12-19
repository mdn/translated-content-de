---
title: "<option>: Das HTML Option Element"
slug: Web/HTML/Element/option
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

Das **`<option>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um ein Element innerhalb eines {{HTMLElement("select")}}, eines {{HTMLElement("optgroup")}} oder eines {{HTMLElement("datalist")}} Elements zu definieren. Daher kann `<option>` Menüelemente in Pop-ups und andere Elementlisten in einem HTML-Dokument darstellen.

{{EmbedInteractiveExample("pages/tabbed/option.html", "tabbed-standard")}}

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Wenn dieses Boolean-Attribut gesetzt ist, kann diese Option nicht ausgewählt werden. Browser blenden normalerweise solche Steuerungen aus und sie erhalten keine Browserevents, wie Mausklicks oder Fokus-bezogene Aktionen. Wenn dieses Attribut nicht gesetzt ist, kann das Element dennoch deaktiviert werden, wenn einer seiner Vorfahren ein deaktiviertes {{HTMLElement("optgroup")}} Element ist.
- `label`
  - : Dieses Attribut ist ein Text für das Label, das die Bedeutung der Option angibt. Wenn das `label` Attribut nicht definiert ist, ist sein Wert der Textinhalt des Elements.
- `selected`
  - : Wenn vorhanden, zeigt dieses Boolean-Attribut an, dass die Option anfänglich ausgewählt ist. Wenn das `<option>` Element ein Nachkomme eines {{HTMLElement("select")}} Elements ist, dessen [`multiple`](/de/docs/Web/HTML/Element/select#multiple) Attribut nicht gesetzt ist, darf nur ein einziges `<option>` dieses {{HTMLElement("select")}} Elements das `selected` Attribut haben.
- `value`
  - : Der Inhalt dieses Attributs repräsentiert den Wert, der mit dem Formular übermittelt werden soll, falls diese Option ausgewählt ist. Wenn dieses Attribut weggelassen wird, wird der Wert aus dem Textinhalt des Option Elements genommen.

## Styling mit CSS

Das Styling des **`<option>`** Elements ist stark eingeschränkt. Optionen erben nicht die Schriftart, die im übergeordneten Element gesetzt ist. In Firefox können nur [`color`](/de/docs/Web/CSS/color) und [`background-color`](/de/docs/Web/CSS/background-color) festgelegt werden, jedoch ist es in Chrome und Safari nicht möglich, irgendwelche Eigenschaften zu setzen. Weitere Details zum Styling finden Sie in [unserem Leitfaden zum fortgeschrittenen Form- Styling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling).

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
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Text, möglicherweise mit Escape-Zeichen (wie
        <code>&#x26;eacute;</code>).
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Der Start-Tag ist obligatorisch. Der End-Tag ist optional, wenn dieses Element
        unmittelbar von einem anderen <code>&#x3C;option></code> Element oder einem
        {{HTMLElement("optgroup")}} gefolgt wird, oder wenn das übergeordnete Element keinen
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
