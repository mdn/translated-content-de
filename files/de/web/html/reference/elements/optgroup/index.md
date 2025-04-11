---
title: "<optgroup>: Das Option Group-Element"
slug: Web/HTML/Reference/Elements/optgroup
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<optgroup>`** [HTML](/de/docs/Web/HTML)-Element erstellt eine Gruppierung von Optionen innerhalb eines {{HTMLElement("select")}}-Elements.

In [anpassbaren `<select>`-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) ist das {{htmlelement("legend")}}-Element als Kind von `<optgroup>` erlaubt, um ein Label bereitzustellen, das leicht anvisierbar und stilisierbar ist. Dies ersetzt jeden im `label`-Attribut des `<optgroup>`-Elements gesetzten Text und besitzt die gleichen Semantiken.

{{InteractiveExample("HTML Demo: &lt;optgroup&gt;", "tabbed-standard")}}

```html interactive-example
<label for="dino-select">Choose a dinosaur:</label>
<select id="dino-select">
  <optgroup label="Theropods">
    <option>Tyrannosaurus</option>
    <option>Velociraptor</option>
    <option>Deinonychus</option>
  </optgroup>
  <optgroup label="Sauropods">
    <option>Diplodocus</option>
    <option>Saltasaurus</option>
    <option>Apatosaurus</option>
  </optgroup>
</select>
```

```css interactive-example
label {
  display: block;
  margin-bottom: 10px;
}
```

> [!NOTE]
> Optgroup-Elemente dürfen nicht verschachtelt werden.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Wenn dieses Boolesche Attribut gesetzt ist, ist keines der Elemente in dieser Optionsgruppe auswählbar. Oftmals blenden Browser solche Steuerelemente aus und sie erhalten keine Browsereignisse, wie Mausklicks oder fokussierte Ereignisse.
- `label`
  - : Der Name der Optionsgruppe, den der Browser verwenden kann, wenn er die Optionen in der Benutzeroberfläche beschriftet. Dieses Attribut ist obligatorisch, wenn dieses Element verwendet wird.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Null oder mehr {{HTMLElement("option")}}-Elemente. In <a href="/de/docs/Learn_web_development/Extensions/Forms/Customizable_select">anpassbaren select-Elementen</a> ist ein {{htmlelement("legend")}}-Element als Kind von <code>&lt;optgroup&gt;</code> erlaubt.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Der Start-Tag ist obligatorisch. Der End-Tag ist optional, wenn dieses Element
        unmittelbar von einem anderen <code>&#x3C;optgroup></code>-Element gefolgt wird, oder
        wenn das Eltern-Element keinen weiteren Inhalt hat.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Ein {{HTMLElement("select")}}-Element.</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a></td>
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
- [Anpassbare select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
