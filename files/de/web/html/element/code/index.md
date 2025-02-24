---
title: "<code>: Das Inline-Code-Element"
slug: Web/HTML/Element/code
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<code>`**-[HTML](/de/docs/Web/HTML)-Element zeigt seinen Inhalt in einem Stil an, der andeuten soll, dass der Text ein kurzes Fragment von Computercode ist. Standardmäßig wird der Inhalt in der Standard-Monospace-Schriftart des {{Glossary("user_agent", "Benutzeragenten")}} dargestellt.

{{InteractiveExample("HTML Demo: &lt;code&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  The <code>push()</code> method adds one or more elements to the end of an
  array and returns the new length of the array.
</p>
```

```css interactive-example
code {
  background-color: #eee;
  border-radius: 3px;
  font-family: courier, monospace;
  padding: 0 3px;
}
```

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

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

## Anmerkungen

Um mehrere Codezeilen darzustellen, betten Sie das `<code>`-Element in ein {{HTMLElement("pre")}}-Element ein. Das `<code>`-Element allein stellt nur eine einzelne Phrase oder Zeile von Code dar.

Eine CSS-Regel kann für den `code`-Selektor definiert werden, um die Standardschriftart des Browsers zu überschreiben. Vom Benutzer vorgenommene Einstellungen können Vorrang vor der angegebenen CSS haben.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fluss-Content</a>,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasen-Content</a>, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasen-Content</a>.
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
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasen-Content</a>
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/structural_roles#structural_roles_with_html_equivalents">code</a></code>
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
