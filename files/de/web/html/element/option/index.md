---
title: "<option>: Das HTML-Optionselement"
slug: Web/HTML/Element/option
l10n:
  sourceCommit: a88e260a72f1250c13b09665f9af247f80edb4f7
---

{{HTMLSidebar}}

Das **`<option>`**-[HTML](/de/docs/Web/HTML)-Element wird verwendet, um ein Element in einem {{HTMLElement("select")}}, einem {{HTMLElement("optgroup")}} oder einem {{HTMLElement("datalist")}}-Element zu definieren. Als solches kann `<option>` Menüpunkte in Popups und anderen Listen von Elementen in einem HTML-Dokument repräsentieren.

{{EmbedInteractiveExample("pages/tabbed/option.html", "tabbed-standard")}}

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Wenn dieses boolesche Attribut gesetzt ist, kann diese Option nicht ausgewählt werden. Häufig grauen Browser solche Steuerelemente aus, und sie empfangen keine Browsing-Ereignisse wie Mausklicks oder fokusbezogene Ereignisse. Wenn dieses Attribut nicht gesetzt ist, kann das Element dennoch deaktiviert sein, falls eines seiner übergeordneten Elemente ein deaktiviertes {{HTMLElement("optgroup")}}-Element ist.
- `label`
  - : Dieses Attribut ist der Text für das Label, das die Bedeutung der Option angibt. Wenn das `label`-Attribut nicht definiert ist, entspricht sein Wert dem Textinhalt des Elements.
- `selected`
  - : Wenn vorhanden, zeigt dieses boolesche Attribut an, dass die Option zunächst ausgewählt ist. Wenn das `<option>`-Element ein Nachfahre eines {{HTMLElement("select")}}-Elements ist, dessen [`multiple`](/de/docs/Web/HTML/Element/select#multiple)-Attribut nicht gesetzt ist, darf nur ein einziges `<option>` dieses {{HTMLElement("select")}}-Elements das `selected`-Attribut haben.
- `value`
  - : Der Inhalt dieses Attributs repräsentiert den Wert, der mit dem Formular übermittelt werden soll, falls diese Option ausgewählt wird. Wenn dieses Attribut weggelassen wird, wird der Wert aus dem Textinhalt des Optionselements übernommen.

## Gestaltung mit CSS

Die Gestaltung des **`<option>`**-Elements innerhalb eines `<select>`-Dropdowns ist stark eingeschränkt. In Firefox wird nur die Schriftgröße des übergeordneten `<select>`-Elements berücksichtigt. Chrome ermöglicht zusätzlich die Einstellung von [`color`](/de/docs/Web/CSS/color), [`background-color`](/de/docs/Web/CSS/background-color), [`font-size`](/de/docs/Web/CSS/font-size), [`font-family`](/de/docs/Web/CSS/font-family), [`font-variant`](/de/docs/Web/CSS/font-variant) und [`text-align`](/de/docs/Web/CSS/text-align). Weitere Details zum Styling finden Sie in [unserem Leitfaden für erweitertes Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling).

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
        Text, möglicherweise mit maskierten Zeichen (z. B.
        <code>&#x26;eacute;</code>).
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag ist verpflichtend. Das End-Tag ist optional, wenn dieses Element
        direkt gefolgt wird von einem anderen <code>&#x3C;option></code>-Element oder einem
        {{HTMLElement("optgroup")}}, oder wenn das übergeordnete Element keinen weiteren
        Inhalt hat.
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
