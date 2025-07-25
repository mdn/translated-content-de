---
title: "<br>: Das Zeilenumbruch-Element"
slug: Web/HTML/Reference/Elements/br
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<br>`** [HTML](/de/docs/Web/HTML) Element erzeugt einen Zeilenumbruch im Text. Es ist nützlich, um ein Gedicht oder eine Adresse zu schreiben, bei der die Unterteilung in Zeilen wichtig ist.

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

Wie Sie aus dem obigen Beispiel sehen können, wird ein `<br>` Element an jedem Punkt eingefügt, an dem der Text brechen soll. Der Text nach dem `<br>` beginnt wieder am Anfang der nächsten Zeile des Textblocks.

> [!NOTE]
> Verwenden Sie `<br>` nicht, um Abstände zwischen Absätzen zu schaffen; umschließen Sie diese in {{htmlelement("p")}} Elementen und verwenden Sie die [CSS](/de/docs/Web/CSS) {{cssxref('margin')}} Eigenschaft, um deren Größe zu steuern.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

### Veraltete Attribute

- `clear` {{Deprecated_Inline}}
  - : Gibt an, wo die nächste Zeile nach dem Umbruch beginnen soll.

## Gestaltung mit CSS

Das `<br>` Element hat einen einzigen, klar definierten Zweck — um einen Zeilenumbruch in einem Textblock zu erzeugen. Es hat daher keine Dimensionen oder visuelle Ausgabe für sich, und es gibt nur sehr wenig, was Sie tun können, um es zu stylen.

Sie können ein {{cssxref("margin")}} auf `<br>` Elementen selbst setzen, um den Abstand zwischen den Textzeilen im Block zu vergrößern, aber dies ist eine schlechte Praxis — Sie sollten die {{cssxref("line-height")}} Eigenschaft verwenden, die für diesen Zweck entwickelt wurde.

## Barrierefreiheit

Separate Textabsätze mit `<br>` zu erstellen ist nicht nur schlechte Praxis, sondern es ist auch problematisch für Menschen, die mit Hilfe von Bildschirmlesetechnologie navigieren. Bildschirmleser können das Vorhandensein des Elements ankündigen, jedoch nicht den innerhalb von `<br>` enthaltenen Inhalt. Dies kann eine verwirrende und frustrierende Erfahrung für die Person sein, die den Bildschirmleser verwendet.

Verwenden Sie `<p>` Elemente und verwenden Sie CSS-Eigenschaften wie {{cssxref("margin")}}, um deren Abstand zu steuern.

## Beispiele

### Einfaches br

Im folgenden Beispiel verwenden wir `<br>` Elemente, um Zeilenumbrüche zwischen den verschiedenen Zeilen einer Postadresse zu erstellen:

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
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
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
        Muss ein Start-Tag haben und darf kein End-Tag haben. In XHTML-Dokumenten wird dieses Element als <code>&#x3C;br /></code> geschrieben.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
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

- {{HTMLElement("address")}} Element
- {{HTMLElement("p")}} Element
- {{HTMLElement("wbr")}} Element
