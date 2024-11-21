---
title: "<br>: Das Zeilenumbruch-Element"
slug: Web/HTML/Element/br
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

Das **`<br>`**-Element in [HTML](/de/docs/Web/HTML) erzeugt einen Zeilenumbruch im Text (Wagenrücklauf). Es ist nützlich beim Schreiben eines Gedichts oder einer Adresse, bei denen die Aufteilung in Zeilen wichtig ist.

{{EmbedInteractiveExample("pages/tabbed/br.html", "tabbed-standard")}}

Wie Sie aus dem obigen Beispiel sehen können, wird ein `<br>`-Element an jeder Stelle eingefügt, an der wir den Text umbrechen möchten. Der Text nach dem `<br>` beginnt wieder am Anfang der nächsten Zeile des Textblocks.

> [!NOTE]
> Verwenden Sie `<br>` nicht, um Abstände zwischen Absätzen zu erzeugen; umhüllen Sie sie mit {{htmlelement("p")}}-Elementen und verwenden Sie die [CSS](/de/docs/Web/CSS) {{cssxref('margin')}}-Eigenschaft, um deren Größe zu kontrollieren.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

### Veraltete Attribute

- `clear` {{Deprecated_Inline}}
  - : Gibt an, wo die nächste Zeile nach dem Umbruch beginnen soll.

## Styling mit CSS

Das `<br>`-Element hat einen einzigen, klar definierten Zweck – um einen Zeilenumbruch in einem Textblock zu erzeugen. Daher hat es keine eigenen Dimensionen oder visuelle Ausgabe, und es gibt sehr wenig, was Sie daran stylen können.

Sie können ein {{cssxref("margin")}} auf `<br>`-Elementen selbst setzen, um den Abstand zwischen den Textzeilen im Block zu vergrößern, aber dies ist eine schlechte Praxis – Sie sollten die {{cssxref("line-height")}}-Eigenschaft verwenden, die dafür vorgesehen ist.

## Barrierefreiheit

Getrennte Absätze mit `<br>` zu erstellen, ist nicht nur schlechte Praxis, sondern auch problematisch für Menschen, die sich mit technischen Hilfsmitteln wie Screenreadern orientieren. Screenreader können das Vorhandensein des Elements ansagen, aber nicht etwaige Inhalte innerhalb der `<br>`s. Dies kann für die Person, die den Screenreader verwendet, verwirrend und frustrierend sein.

Verwenden Sie `<p>`-Elemente, und verwenden Sie CSS-Eigenschaften wie {{cssxref("margin")}}, um deren Abstände zu kontrollieren.

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
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließende Inhalte</a>,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phraseninhalte</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "void element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Muss einen Start-Tag haben und darf keinen End-Tag haben. In XHTML-Dokumenten schreiben Sie dieses Element als <code>&#x3C;br /></code>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phraseninhalte</a>
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
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

- {{HTMLElement("address")}}-Element
- {{HTMLElement("p")}}-Element
- {{HTMLElement("wbr")}}-Element
