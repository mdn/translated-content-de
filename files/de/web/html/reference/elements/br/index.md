---
title: "<br>: Das Zeilenumbruch-Element"
slug: Web/HTML/Reference/Elements/br
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

Das **`<br>`** [HTML](/de/docs/Web/HTML)-Element erzeugt einen Zeilenumbruch im Text (Wagenrücklauf). Es ist nützlich beim Schreiben eines Gedichts oder einer Adresse, wo die Teilung der Zeilen von Bedeutung ist.

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

Wie im obigen Beispiel zu sehen ist, wird ein `<br>`-Element an jeder Stelle eingefügt, an der der Text umgebrochen werden soll. Der Text nach dem `<br>` beginnt dann am Anfang der nächsten Zeile des Textblocks erneut.

> [!NOTE]
> Verwenden Sie `<br>` nicht, um Abstände zwischen Absätzen zu erstellen; umschließen Sie diese in {{htmlelement("p")}}-Elementen und verwenden Sie die [CSS](/de/docs/Web/CSS) {{cssxref('margin')}}-Eigenschaft, um deren Größe zu steuern.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

### Veraltete Attribute

- `clear` {{Deprecated_Inline}}
  - : Gibt an, wo die nächste Zeile nach dem Umbruch beginnen soll.

## Gestaltung mit CSS

Das `<br>`-Element hat einen einzigen, klar definierten Zweck – es erstellt einen Zeilenumbruch in einem Textblock. Daher hat es keine eigenen Dimensionen oder visuelle Ausgabe, und es gibt nur sehr wenig, was Sie daran gestalten können.

Sie können ein {{cssxref("margin")}} auf `<br>`-Elementen selbst setzen, um den Abstand zwischen den Textzeilen im Block zu vergrößern, aber das ist eine schlechte Praxis — nutzen Sie die {{cssxref("line-height")}}-Eigenschaft, die für diesen Zweck konzipiert wurde.

## Barrierefreiheit

Separate Textabsätze mithilfe von `<br>` zu erstellen, ist nicht nur schlechte Praxis, sondern auch problematisch für Menschen, die mit der Unterstützung von Bildschirmlesetechnologie navigieren. Bildschirmleser können das Vorhandensein des Elements ankündigen, jedoch keinen Inhalt innerhalb der `<br>`s. Dies kann eine verwirrende und frustrierende Erfahrung für den Benutzer des Bildschirmlesers sein.

Verwenden Sie `<p>`-Elemente und CSS-Eigenschaften wie {{cssxref("margin")}}, um deren Abstände zu steuern.

## Beispiele

### Einfaches br

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
          >Fließende Inhalte</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierung von Inhalten</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Option</th>
      <td>
        Muss ein Start-Tag haben und darf keinen End-Tag haben. In XHTML-Dokumenten wird dieses Element als <code>&#x3C;br /></code> geschrieben.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasinhalte</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
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
