---
title: "<code>: Das Inline-Code-Element"
slug: Web/HTML/Reference/Elements/code
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

Das **`<code>`** [HTML](/de/docs/Web/HTML)-Element zeigt seinen Inhalt in einem Stil an, der darauf hinweist, dass der Text ein kurzes Fragment von Computercode ist. Standardmäßig wird der Textinhalt mit der Standard-Schriftart des {{Glossary("user_agent", "User Agents")}} im Monospace angezeigt.

{{InteractiveExample("HTML Demo: &lt;code&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  The <code>push()</code> method adds one or more elements to the end of an
  array and returns the new length of the array.
</p>
```

```css interactive-example
code {
  background-color: #eeeeee;
  border-radius: 3px;
  font-family: courier, monospace;
  padding: 0 3px;
}
```

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Beispiele

Ein Absatz mit Text, der `<code>` enthält:

```html
<p>
  The function <code>selectAll()</code> highlights all the text in the input
  field so the user can, for example, copy or delete the text.
</p>
```

### Ergebnis

{{EmbedLiveSample("Example", 640, 70)}}

## Hinweise

Um mehrere Zeilen von Code darzustellen, umschließen Sie das `<code>`-Element mit einem {{HTMLElement("pre")}}-Element. Das `<code>`-Element allein stellt nur eine einzelne Code-Phrase oder Code-Zeile dar.

Eine CSS-Regel kann für den `code`-Selektor definiert werden, um die standardmäßig vom Browser verwendete Schriftart zu überschreiben. Vom Benutzer festgelegte Präferenzen können gegenüber der angegebenen CSS Vorrang haben.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Content-Kategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierung-Inhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierung-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierung-Inhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#structural_roles_with_html_equivalents">code</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>
        [`HTMLElement`](/de/docs/Web/API/HTMLElement) Bis einschließlich Gecko 1.9.2 (Firefox 4)
        implementiert Firefox die
        [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement)-Schnittstelle für dieses Element.
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("samp")}}
- {{HTMLElement("kbd")}}
- {{HTMLElement("var")}}
- {{HTMLElement("pre")}}
