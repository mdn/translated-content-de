---
title: "<br>: Das Zeilenumbruch-Element"
slug: Web/HTML/Reference/Elements/br
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<br>`**-Element [HTML](/de/docs/Web/HTML) erzeugt einen Zeilenumbruch im Text (Wagenrücklauf). Es ist nützlich, um ein Gedicht oder eine Adresse zu schreiben, bei denen die Aufteilung der Zeilen von Bedeutung ist.

{{InteractiveExample("HTML Demo: &lt;br&gt;", "tabbed-standard")}}

```html interactive-example
<p>
  O’er all the hilltops<br />
  Is quiet now,<br />
  In all the treetops<br />
  Hearest thou<br />
  Hardly a breath;<br />
  The birds are asleep in the trees:<br />
  Wait, soon like these<br />
  Thou too shalt rest.
</p>
```

```css interactive-example
p {
  font-size: 1rem;
  font-family: sans-serif;
  margin: 20px;
}
```

Wie Sie dem obigen Beispiel entnehmen können, ist an jeder Stelle, an der der Text unterbrochen werden soll, ein `<br>`-Element eingefügt. Der Text nach dem `<br>` beginnt wieder am Anfang der nächsten Zeile des Textblocks.

> [!NOTE]
> Verwenden Sie `<br>` nicht, um Abstände zwischen Absätzen zu schaffen; umwickeln Sie diese mit {{htmlelement("p")}}-Elementen und verwenden Sie die [CSS](/de/docs/Web/CSS) {{cssxref('margin')}}-Eigenschaft, um ihre Größe zu steuern.

## Attribute

Zu den Attributen dieses Elements gehören die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

### Veraltete Attribute

- `clear` {{Deprecated_Inline}}
  - : Gibt an, wo die nächste Zeile nach dem Umbruch beginnen soll.

## Styling mit CSS

Das `<br>`-Element hat einen einzigen, klar definierten Zweck — einen Zeilenumbruch in einem Textblock zu erzeugen. Daher hat es keine eigenen Dimensionen oder visuelle Ausgabe, und es gibt sehr wenig, was Sie daran stylen können.

Sie können ein {{cssxref("margin")}} auf `<br>`-Elementen selbst setzen, um den Abstand zwischen den Textzeilen im Block zu vergrößern, aber das ist eine schlechte Praxis — Sie sollten die {{cssxref("line-height")}}-Eigenschaft verwenden, die dafür entworfen wurde.

## Barrierefreiheit

Die Erstellung von separaten Textabsätzen mit `<br>` ist nicht nur eine schlechte Praxis, sondern auch problematisch für Menschen, die mit Hilfe von Bildschirmlesetechnologie navigieren. Bildschirmleser können die Anwesenheit des Elements ankündigen, aber nicht den Inhalt, der innerhalb von `<br>`-Elementen enthalten ist. Dies kann eine verwirrende und frustrierende Erfahrung für die Person sein, die den Bildschirmleser verwendet.

Verwenden Sie `<p>`-Elemente und nutzen Sie CSS-Eigenschaften wie {{cssxref("margin")}}, um deren Abstand zu kontrollieren.

## Beispiele

### Einfacher Zeilenumbruch

Im folgenden Beispiel verwenden wir `<br>`-Elemente, um Zeilenumbrüche zwischen den verschiedenen Zeilen einer Postadresse zu erstellen:

```html
Mozilla<br />
331 E. Evelyn Avenue<br />
Mountain View, CA<br />
94041<br />
USA<br />
```

#### Ergebnis

{{ EmbedLiveSample('Basic_br', 640, 120) }}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Muss ein Start-Tag haben und darf keinen End-Tag haben. In XHTML-Dokumenten schreiben Sie dieses Element als <code>&#x3C;br /></code>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLBRElement`](/de/docs/Web/API/HTMLBRElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("address")}}-Element
- {{HTMLElement("p")}}-Element
- {{HTMLElement("wbr")}}-Element
