---
title: "<code>: Das Inline-Code-Element"
slug: Web/HTML/Reference/Elements/code
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<code>`** [HTML](/de/docs/Web/HTML)-Element zeigt seinen Inhalt in einem Stil an, der darauf hinweist, dass der Text ein kurzes Fragment von Computercode ist. Standardmäßig wird der Inhaltstext in der Standard-Schriftart mit fester Breite des {{Glossary("user_agent", "User-Agents")}} angezeigt.

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

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Beispiele

Ein Absatz von Text, der `<code>` enthält:

```html
<p>
  The function <code>selectAll()</code> highlights all the text in the input
  field so the user can, for example, copy or delete the text.
</p>
```

### Ergebnis

{{EmbedLiveSample("Example", 640, 70)}}

## Anmerkungen

Um mehrere Codezeilen darzustellen, umschließen Sie das `<code>`-Element mit einem {{HTMLElement("pre")}}-Element. Das `<code>`-Element allein stellt nur eine einzelne Codephrase oder eine einzelne Codezeile dar.

Eine CSS-Regel kann für den `code`-Selektor definiert werden, um die Standardschriftart des Browsers zu überschreiben. Benutzereinstellungen können die festgelegten CSS-Einstellungen überwiegen.

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
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
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
