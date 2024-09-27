---
title: "<br>: Das Zeilenumbruch-Element"
slug: Web/HTML/Element/br
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

Das **`<br>`**-Element von [HTML](/de/docs/Web/HTML) erzeugt einen Zeilenumbruch im Text (Wagenrücklauf). Es ist nützlich beim Schreiben eines Gedichts oder einer Adresse, bei denen die Aufteilung der Zeilen von Bedeutung ist.

{{EmbedInteractiveExample("pages/tabbed/br.html", "tabbed-standard")}}

Wie Sie im obigen Beispiel sehen können, wird ein `<br>`-Element an jedem Punkt eingefügt, an dem der Text umgebrochen werden soll. Der Text nach dem `<br>` beginnt am Anfang der nächsten Zeile des Textblocks erneut.

> [!NOTE]
> Verwenden Sie `<br>` nicht, um Abstände zwischen Absätzen zu erstellen; verwenden Sie {{htmlelement("p")}}-Elemente und nutzen Sie die [CSS](/de/docs/Web/CSS) {{cssxref('margin')}}-Eigenschaft, um deren Größe zu steuern.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

### Veraltete Attribute

- `clear` {{Deprecated_Inline}}
  - : Gibt an, wo die nächste Zeile nach dem Umbruch beginnen soll.

## Styling mit CSS

Das `<br>`-Element hat einen einzigen, klar definierten Zweck — einen Zeilenumbruch in einem Textblock zu erzeugen. Es hat keine eigenen Dimensionen oder visuelle Ausgabe, und es gibt nur sehr wenig, was Sie stilistisch ändern können.

Sie können einen {{cssxref("margin")}} auf `<br>`-Elementen selbst einstellen, um den Abstand zwischen den Zeilen des Textblocks zu vergrößern, aber dies ist eine schlechte Praxis — Sie sollten die {{cssxref("line-height")}}-Eigenschaft verwenden, die dafür vorgesehen ist.

## Barrierefreiheit

Die Erstellung separater Textabsätze mit `<br>` ist nicht nur schlechte Praxis, sondern auch problematisch für Personen, die mit Bildschirmlesetechnologien navigieren. Bildschirmleser können das Vorhandensein des Elements ankündigen, jedoch nicht den darin enthaltenen Inhalt. Dies kann eine verwirrende und frustrierende Erfahrung für die Person sein, die den Bildschirmleser verwendet.

Verwenden Sie `<p>`-Elemente und nutzen Sie CSS-Eigenschaften wie {{cssxref("margin")}}, um deren Abstand zu steuern.

## Beispiele

### Einfaches br

Im folgenden Beispiel verwenden wir `<br>`-Elemente, um Zeilenumbrüche zwischen den unterschiedlichen Zeilen einer Postadresse zu erzeugen:

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
          >Fließinhalte</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein [leeres Element](/de/docs/Glossary/void_element).</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Muss einen Start-Tag haben und darf keinen End-Tag haben. In XHTML-Dokumenten schreiben Sie dieses Element als <code>&#x3C;br /></code>.
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

- {{HTMLElement("address")}}-Element
- {{HTMLElement("p")}}-Element
- {{HTMLElement("wbr")}}-Element
