---
title: "<option>: Das HTML-Option-Element"
slug: Web/HTML/Element/option
l10n:
  sourceCommit: b80c82981e07b1f42952439aef4a1c6060198395
---

{{HTMLSidebar}}

Das **`<option>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um ein Element in einem {{HTMLElement("select")}}, einem {{HTMLElement("optgroup")}} oder einem {{HTMLElement("datalist")}}-Element zu definieren. Daher kann `<option>` Menüeinträge in Popups und anderen Listen von Elementen in einem HTML-Dokument darstellen.

{{EmbedInteractiveExample("pages/tabbed/option.html", "tabbed-standard")}}

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Wenn dieses boolesche Attribut gesetzt ist, kann diese Option nicht ausgewählt werden. Oft werden solche Steuerelemente im Browser ausgegraut, und sie erhalten keine Ereignisse wie Mausklicks oder solche, die mit dem Fokus zusammenhängen. Ist dieses Attribut nicht gesetzt, kann das Element dennoch deaktiviert sein, wenn einer seiner Vorfahren ein deaktiviertes {{HTMLElement("optgroup")}}-Element ist.
- `label`
  - : Dieses Attribut ist ein Text, der die Bedeutung der Option beschreibt. Wenn das `label`-Attribut nicht definiert ist, wird sein Wert aus dem Textinhalt des Elements übernommen.
- `selected`
  - : Wenn vorhanden, zeigt dieses boolesche Attribut an, dass die Option initial ausgewählt ist. Wenn das `<option>`-Element ein Nachkomme eines {{HTMLElement("select")}}-Elements ist, dessen [`multiple`](/de/docs/Web/HTML/Element/select#multiple)-Attribut nicht gesetzt ist, darf nur ein einziges `<option>`-Element dieses {{HTMLElement("select")}}-Elements das `selected`-Attribut besitzen.
- `value`
  - : Der Inhalt dieses Attributs gibt den Wert an, der zusammen mit dem Formular abgesendet wird, wenn diese Option ausgewählt ist. Wenn dieses Attribut nicht angegeben ist, wird der Wert aus dem Textinhalt des Option-Elements übernommen.

## Gestaltung mit CSS

Das Styling des **`<option>`**-Elements innerhalb eines `<select>`-Dropdowns ist stark eingeschränkt und abhängig vom Browser und Betriebssystem. Je nach Betriebssystem wird die [`font-size`](/de/docs/Web/CSS/font-size) des äußeren `<select>` in Firefox und Chromium respektiert. Chromium erlaubt möglicherweise zusätzlich die Festlegung von [`color`](/de/docs/Web/CSS/color), [`background-color`](/de/docs/Web/CSS/background-color), [`font-family`](/de/docs/Web/CSS/font-family), [`font-variant`](/de/docs/Web/CSS/font-variant) und [`text-align`](/de/docs/Web/CSS/text-align).

Weitere Details zum Styling von `<option>` finden Sie in [unserem Leitfaden zur erweiterten Formulargestaltung](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling).

## Beispiele

Siehe {{HTMLElement("select")}} für Beispiele.

## Technische Übersicht

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
        Text, möglicherweise mit entzeichneten Zeichen (wie
        <code>&#x26;eacute;</code>).
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Weglassen</th>
      <td>
        Der Start-Tag ist obligatorisch. Der End-Tag ist optional, wenn dieses Element
        unmittelbar von einem anderen <code>&#x3C;option></code>-Element oder einem
        {{HTMLElement("optgroup")}} gefolgt wird oder wenn das Elternelement keinen
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
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/option_role"><code>option</code></a></td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine erlaubte <code>role</code></td>
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

- Weitere formularbezogene Elemente: {{HTMLElement("form")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}}, {{HTMLElement("select")}}, {{HTMLElement("datalist")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("textarea")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} und {{HTMLElement("meter")}}.
