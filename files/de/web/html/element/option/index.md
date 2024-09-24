---
title: "<option>: Das HTML-Auswahlelement"
slug: Web/HTML/Element/option
l10n:
  sourceCommit: 991385e7cfb9ac8589332b07aadcc4b38edea512
---

{{HTMLSidebar}}

Das **`<option>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um einen Eintrag innerhalb eines {{HTMLElement("select")}}, eines {{HTMLElement("optgroup")}} oder eines {{HTMLElement("datalist")}} Elements zu definieren. Als solches kann `<option>` Menüpunkte in Popups und anderen Listen von Einträgen in einem HTML-Dokument darstellen.

{{EmbedInteractiveExample("pages/tabbed/option.html", "tabbed-standard")}}

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Wenn dieses boolesche Attribut gesetzt ist, ist diese Option nicht auswählbar. Oftmals blenden Browser solche Steuerelemente aus und sie erhalten keine Browserevents wie Mausklicks oder fokusbezogene Ereignisse. Wenn dieses Attribut nicht gesetzt ist, kann das Element dennoch deaktiviert werden, wenn einer seiner Vorfahren ein deaktiviertes {{HTMLElement("optgroup")}} Element ist.
- `label`
  - : Dieses Attribut ist Text für die Beschriftung, die die Bedeutung der Option angibt. Wenn das `label`-Attribut nicht definiert ist, wird sein Wert aus dem Textinhalt des Elements übernommen.
- `selected`
  - : Wenn vorhanden, gibt dieses boolesche Attribut an, dass die Option initial ausgewählt ist. Wenn das `<option>` Element ein Nachkomme eines {{HTMLElement("select")}} Elements ist, dessen [`multiple`](/de/docs/Web/HTML/Element/select#multiple)-Attribut nicht gesetzt ist, darf nur eine einzelne `<option>` dieses {{HTMLElement("select")}} Elements das `selected` Attribut haben.
- `value`
  - : Der Inhalt dieses Attributs repräsentiert den Wert, der zusammen mit dem Formular gesendet werden soll, sollte diese Option ausgewählt sein. Wenn dieses Attribut weggelassen wird, wird der Wert aus dem Textinhalt des Option-Elements genommen.

## Gestaltung mit CSS

Die Gestaltung des **`<option>`** Elements ist stark eingeschränkt. Optionen übernehmen nicht die Schriftart, die auf dem Elternteil festgelegt ist. In Firefox können nur [`color`](/de/docs/Web/CSS/color) und [`background-color`](/de/docs/Web/CSS/background-color) festgelegt werden, in Chrome und Safari ist es jedoch nicht möglich, irgendwelche Eigenschaften festzulegen. Weitere Details zur Gestaltung finden Sie in [unserem Leitfaden zur erweiterten Formularstilisierung](/de/docs/Learn/Forms/Advanced_form_styling).

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
        Text, möglicherweise mit escapen Zeichen (wie
        <code>&#x26;eacute;</code>).
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Der Start-Tag ist obligatorisch. Der End-Tag ist optional, wenn dieses Element
        unmittelbar von einem weiteren <code>&#x3C;option></code> Element oder einem
        {{HTMLElement("optgroup")}} gefolgt wird oder wenn das Elternelement keinen
        weiteren Inhalt hat.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Elternteile</th>
      <td>
        Ein {{HTMLElement("select")}}, ein
        {{HTMLElement("optgroup")}} oder ein
        {{HTMLElement("datalist")}} Element.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/option_role"><code>option</code></a></td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>{{domxref("HTMLOptionElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere formularbezogene Elemente: {{HTMLElement("form")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}}, {{HTMLElement("select")}}, {{HTMLElement("datalist")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("textarea")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} und {{HTMLElement("meter")}}.
