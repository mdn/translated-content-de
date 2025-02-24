---
title: "<br>: Das Zeilenumbruch-Element"
slug: Web/HTML/Element/br
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<br>`** [HTML](/de/docs/Web/HTML) Element erzeugt einen Zeilenumbruch im Text (Carriage-Return). Es ist nützlich für das Schreiben eines Gedichts oder einer Adresse, wo die Aufteilung in Zeilen wichtig ist.

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

Wie Sie im obigen Beispiel sehen können, wird ein `<br>` Element an jeder Stelle eingefügt, an der wir möchten, dass der Text umgebrochen wird. Der Text nach dem `<br>` beginnt wieder am Anfang der nächsten Zeile des Textblocks.

> [!NOTE]
> Verwenden Sie `<br>` nicht, um Abstände zwischen Absätzen zu erzeugen; umschließen Sie sie in {{htmlelement("p")}} Elementen und verwenden Sie die [CSS](/de/docs/Web/CSS) {{cssxref('margin')}}-Eigenschaft, um deren Größe zu steuern.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

### Veraltete Attribute

- `clear` {{Deprecated_Inline}}
  - : Gibt an, wo die nächste Zeile nach dem Umbruch beginnen soll.

## Styling mit CSS

Das `<br>` Element hat einen einzigen, gut definierten Zweck — es erzeugt einen Zeilenumbruch in einem Textblock. Daher hat es keine eigenen Abmessungen oder visuelle Ausgabe, und es gibt sehr wenig, was Sie daran gestalten können.

Sie können auf `<br>` Elementen selbst ein {{cssxref("margin")}} setzen, um den Abstand zwischen den Textzeilen im Block zu vergrößern, aber dies ist eine schlechte Praxis — Sie sollten die {{cssxref("line-height")}}-Eigenschaft verwenden, die dafür ausgelegt ist.

## Barrierefreiheit

Das Erstellen separater Textabsätze mit `<br>` ist nicht nur eine schlechte Praxis, es ist problematisch für Personen, die mit Hilfe von Bildschirmlesetechnologie navigieren. Bildschirmlesegeräte können das Vorhandensein des Elements ankündigen, jedoch nicht den Inhalt innerhalb von `<br>`s. Dies kann eine verwirrende und frustrierende Erfahrung für die Person darstellen, die den Bildschirmleser verwendet.

Verwenden Sie `<p>` Elemente und verwenden Sie CSS-Eigenschaften wie {{cssxref("margin")}}, um deren Abstände zu steuern.

## Beispiele

### Einfaches br

Im folgenden Beispiel verwenden wir `<br>` Elemente, um Zeilenumbrüche zwischen den verschiedenen Zeilen einer Postadresse zu erzeugen:

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
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
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
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
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>
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

- {{HTMLElement("address")}} Element
- {{HTMLElement("p")}} Element
- {{HTMLElement("wbr")}} Element
