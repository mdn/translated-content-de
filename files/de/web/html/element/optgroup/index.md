---
title: "<optgroup>: Das Optionsgruppen-Element"
slug: Web/HTML/Element/optgroup
l10n:
  sourceCommit: 2595b22899b54f079721069704128fb7f0451995
---

{{HTMLSidebar}}

Das **`<optgroup>`** [HTML](/de/docs/Web/HTML)-Element erstellt eine Gruppierung von Optionen innerhalb eines {{HTMLElement("select")}}-Elements.

In [anpassbaren `<select>`-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) ist das {{htmlelement("legend")}}-Element als Kind von `<optgroup>` erlaubt, um ein einfach zu zielendes und zu stylendes Label bereitzustellen. Dies ersetzt jeden Text, der im `label`-Attribut des `<optgroup>`-Elements gesetzt ist und hat die gleichen Semantiken.

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

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Wenn dieses boolesche Attribut gesetzt ist, ist keines der Elemente in dieser Optionsgruppe auswählbar. Oftmals blenden Browser solche Steuerungen aus und sie erhalten keine Browser-Ereignisse, wie Mausklicks oder Fokus-bezogene.
- `label`
  - : Der Name der Optionsgruppe, den der Browser verwenden kann, um die Optionen in der Benutzeroberfläche zu kennzeichnen. Dieses Attribut ist zwingend erforderlich, wenn dieses Element verwendet wird.

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
      <td>Null oder mehr {{HTMLElement("option")}}-Elemente. In <a href="/de/docs/Learn_web_development/Extensions/Forms/Customizable_select">anpassbaren Select-Elementen</a> ist ein {{htmlelement("legend")}}-Element als Kind von <code>&lt;optgroup&gt;</code> erlaubt.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag ist erforderlich. Das End-Tag ist optional, wenn dieses Element
        unmittelbar von einem anderen <code>&#x3C;optgroup></code>-Element gefolgt wird oder
        wenn das Elternelement keinen weiteren Inhalt hat.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Ein {{HTMLElement("select")}}-Element.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
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
- [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
