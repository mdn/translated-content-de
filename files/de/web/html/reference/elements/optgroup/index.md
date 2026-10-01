---
title: HTML-Element `<optgroup>` für Optionsgruppen
short-title: <optgroup>
slug: Web/HTML/Reference/Elements/optgroup
l10n:
  sourceCommit: bcb7d4dde9f0a43664c64587d9d70b8835286eb7
---

Das [HTML](/de/docs/Web/HTML)-Element **`<optgroup>`** gruppiert Optionen innerhalb eines {{HTMLElement("select")}}-Elements.

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

## Attribute

Dieses Element unterstützt die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Wenn dieses boolesche Attribut gesetzt ist, kann keines der Elemente dieser Optionsgruppe ausgewählt werden. Browser stellen eine solche Gruppe häufig ausgegraut dar; sie empfängt dann keine Interaktionsereignisse wie Mausklicks oder Fokusereignisse.
- `label`
  - : Der Name der Optionsgruppe, den der Browser zur Beschriftung der Optionen in der Benutzeroberfläche verwenden kann. Dieses Attribut ist erforderlich, wenn das Element verwendet wird.

## Verwendungshinweise

`<optgroup>`-Elemente dürfen nicht verschachtelt werden.

In [anpassbaren `<select>`-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) ist das {{htmlelement("legend")}}-Element als Kindelement von `<optgroup>` zulässig. Es stellt eine Beschriftung bereit, die sich leicht gezielt auswählen und gestalten lässt. Diese ersetzt einen im `label`-Attribut des `<optgroup>`-Elements angegebenen Text und hat dieselbe Semantik.

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
      <th scope="row">Zulässiger Inhalt</th>
      <td>Null oder mehr {{HTMLElement("option")}}-Elemente. In <a href="/de/docs/Learn_web_development/Extensions/Forms/Customizable_select">anpassbaren select-Elementen</a> ist ein {{htmlelement("legend")}}-Element als Kindelement von <code>&lt;optgroup&gt;</code> zulässig.</td>
    </tr>
    <tr>
      <th scope="row">Weglassen von Tags</th>
      <td>
        Das Start-Tag ist erforderlich. Das End-Tag ist optional, wenn auf dieses Element
        unmittelbar ein weiteres <code>&#x3C;optgroup></code>-Element folgt oder
        das Elternelement keinen weiteren Inhalt hat.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige Elternelemente</th>
      <td>Ein {{HTMLElement("select")}}-Element.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a></td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Keine <code>role</code> zulässig</td>
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

- Weitere formularbezogene Elemente: {{HTMLElement("form")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}}, {{HTMLElement("select")}}, {{HTMLElement("datalist")}}, {{HTMLElement("option")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("textarea")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} und {{HTMLElement("meter")}}.
- [Anpassbare select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
