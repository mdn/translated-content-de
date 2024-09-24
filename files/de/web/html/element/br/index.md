---
title: "<br>: Das Zeilenumbruch-Element"
slug: Web/HTML/Element/br
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

Das **`<br>`** [HTML](/de/docs/Web/HTML)-Element erzeugt einen Zeilenumbruch im Text (Wagenrücklauf). Es ist nützlich für das Schreiben eines Gedichts oder einer Adresse, bei denen die Aufteilung der Zeilen wichtig ist.

{{EmbedInteractiveExample("pages/tabbed/br.html", "tabbed-standard")}}

Wie Sie im obigen Beispiel sehen können, wird an jeder Stelle, an der der Text gebrochen werden soll, ein `<br>`-Element eingefügt. Der Text nach dem `<br>` beginnt am Anfang der nächsten Zeile des Textblocks erneut.

> [!NOTE]
> Verwenden Sie `<br>` nicht, um Abstände zwischen Absätzen zu schaffen; umgeben Sie sie mit {{htmlelement("p")}}-Elementen und verwenden Sie die [CSS](/de/docs/Web/CSS) {{cssxref('margin')}}-Eigenschaft, um deren Größe zu steuern.

## Attribute

Die Attribute dieses Elements beinhalten die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

### Veraltete Attribute

- `clear` {{Deprecated_Inline}}
  - : Gibt an, wo die nächste Zeile nach dem Umbruch beginnen soll.

## Styling mit CSS

Das `<br>`-Element hat einen einzigen, klar definierten Zweck — einen Zeilenumbruch in einem Textblock zu schaffen. Daher hat es keine eigenen Dimensionen oder visuelle Ausgabe, und es gibt nur sehr wenige Möglichkeiten, es zu stylen.

Sie können ein {{cssxref("margin")}} für `<br>`-Elemente selbst festlegen, um den Abstand zwischen den Zeilen im Block zu vergrößern, aber dies ist eine schlechte Praxis — Sie sollten die {{cssxref("line-height")}}-Eigenschaft verwenden, die dafür vorgesehen ist.

## Barrierefreiheit

Die Erstellung separater Textabsätze mit `<br>` ist nicht nur schlechte Praxis, sondern für Menschen problematisch, die mit Hilfe von Screenreader-Technologie navigieren. Screenreader können die Anwesenheit des Elements ankündigen, aber keinen Inhalt, der innerhalb von `<br>`s enthalten ist. Dies kann eine verwirrende und frustrierende Erfahrung für diejenigen sein, die den Screenreader verwenden.

Verwenden Sie `<p>`-Elemente und verwenden Sie CSS-Eigenschaften wie {{cssxref("margin")}}, um deren Abstände zu steuern.

## Beispiele

### Einfaches br

Im folgenden Beispiel verwenden wir `<br>`-Elemente, um Zeilenumbrüche zwischen den verschiedenen Zeilen einer Postadresse zu erzeugen:

```html
Mozilla<br />
331 E. Evelyn Avenue<br />
Mountain View, CA<br />
94041<br />
USA<br />
```

#### Ergebnis

{{ EmbedLiveSample('Simple_br', 640, 120) }}

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
          >Fluss-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierung-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void element")}}.</td>
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
          >Phrasierung-Inhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
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
      <td>{{domxref("HTMLBRElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{HTMLElement("address")}}-Element
- {{HTMLElement("p")}}-Element
- {{HTMLElement("wbr")}}-Element
