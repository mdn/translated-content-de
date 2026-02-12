---
title: "<br>: Das Zeilenumbruch-Element"
slug: Web/HTML/Reference/Elements/br
l10n:
  sourceCommit: 0ab262675372b83fc870accf3dc46d6a367c451c
---

Das **`<br>`**-[HTML](/de/docs/Web/HTML)-Element erzeugt einen Zeilenumbruch im Text (Zeilenrücklauf). Es ist nützlich zum Schreiben eines Gedichts oder einer Adresse, wo die Aufteilung der Zeilen von Bedeutung ist.

{{InteractiveExample("HTML Demo: &lt;br&gt;", "tabbed-standard")}}

```html interactive-example
<p>
  O'er all the hilltops<br />
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

Wie Sie aus dem obigen Beispiel sehen können, wird ein `<br>`-Element an jeder Stelle eingefügt, an der wir den Text umbrechen möchten. Der Text nach dem `<br>` beginnt wieder am Anfang der nächsten Zeile des Textblocks.

> [!NOTE]
> Verwenden Sie `<br>` nicht, um Abstände zwischen Absätzen zu erstellen; umschließen Sie diese mit {{htmlelement("p")}}-Elementen und verwenden Sie die [CSS](/de/docs/Web/CSS) {{cssxref('margin')}}-Eigenschaft, um deren Größe zu steuern.

## Attribute

Zu den Attributen dieses Elements gehören die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

### Veraltete Attribute

- `clear` {{Deprecated_Inline}}
  - : Gibt an, wo die nächste Zeile nach dem Umbruch beginnen soll.

## Styling mit CSS

Das `<br>`-Element hat einen einzigen, klar definierten Zweck — einen Zeilenumbruch in einem Textblock zu erzeugen. Daher hat es selbst keine Dimensionen oder visuelle Ausgabe und es gibt nur sehr wenig, was Sie daran stylen können.

Sie können auf `<br>`-Elementen selbst ein {{cssxref("margin")}} festlegen, um den Abstand zwischen den Zeilen des Textblocks zu vergrößern, aber das ist eine schlechte Praxis — Sie sollten die {{cssxref("line-height")}}-Eigenschaft verwenden, die für diesen Zweck entworfen wurde.

## Barrierefreiheit

Das Erstellen von getrennten Textabsätzen mit `<br>` ist nicht nur schlechte Praxis, sondern auch problematisch für Menschen, die mit Hilfe von Screenreader-Technologie navigieren. Screenreader können die Anwesenheit des Elements ankündigen, aber keinen innerhalb von `<br>`s enthaltenen Inhalt. Dies kann eine verwirrende und frustrierende Erfahrung für die Person sein, die den Screenreader verwendet.

Verwenden Sie `<p>`-Elemente und verwenden Sie CSS-Eigenschaften wie {{cssxref("margin")}}, um deren Abstände zu steuern.

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

{{EmbedLiveSample('Basic_br', 640, 120)}}

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
      <td>Keiner; es ist ein {{Glossary("void_element", "void element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Muss ein Start-Tag haben und darf keinen End-Tag haben. In XHTML-Dokumenten
        schreiben Sie dieses Element als <code>&#x3C;br /></code>.
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

- {{HTMLElement("address")}}-Element
- {{HTMLElement("p")}}-Element
- {{HTMLElement("wbr")}}-Element
