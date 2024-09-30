---
title: "<optgroup>: Das Option Group Element"
slug: Web/HTML/Element/optgroup
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

Das **`<optgroup>`** [HTML](/de/docs/Web/HTML) Element erstellt eine Gruppierung von Optionen innerhalb eines {{HTMLElement("select")}} Elements.

{{EmbedInteractiveExample("pages/tabbed/optgroup.html", "tabbed-standard")}}

> [!NOTE]
> Optgroup-Elemente dürfen nicht geschachtelt werden.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Wenn dieses boolesche Attribut gesetzt ist, ist keines der Elemente in dieser Optionsgruppe auswählbar. Oftmals werden solche Steuerelemente in Browsern ausgegraut und sie erhalten keine Browsing-Ereignisse, wie Mausklicks oder fokusbezogene Ereignisse.
- `label`
  - : Der Name der Optionsgruppe, den der Browser verwenden kann, um die Optionen in der Benutzeroberfläche zu beschriften. Dieses Attribut ist obligatorisch, wenn dieses Element verwendet wird.

## Beispiele

```html
<select>
  <optgroup label="Group 1">
    <option>Option 1.1</option>
  </optgroup>
  <optgroup label="Group 2">
    <option>Option 2.1</option>
    <option>Option 2.2</option>
  </optgroup>
  <optgroup label="Group 3" disabled>
    <option>Option 3.1</option>
    <option>Option 3.2</option>
    <option>Option 3.3</option>
  </optgroup>
</select>
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

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
      <td>Null oder mehr {{HTMLElement("option")}} Elemente.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Der Start-Tag ist obligatorisch. Der End-Tag ist optional, wenn dieses Element
        unmittelbar von einem anderen <code>&#x3C;optgroup></code> Element gefolgt wird oder
        wenn das Elternelement keinen weiteren Inhalt hat.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Ein {{HTMLElement("select")}} Element.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a></td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLOptGroupElement`](/de/docs/Web/API/HTMLOptGroupElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere formularbezogene Elemente: {{HTMLElement("form")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}}, {{HTMLElement("select")}}, {{HTMLElement("datalist")}}, {{HTMLElement("option")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("textarea")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} und {{HTMLElement("meter")}}.
