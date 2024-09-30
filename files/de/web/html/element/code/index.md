---
title: "<code>: Das Inline-Code-Element"
slug: Web/HTML/Element/code
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{HTMLSidebar}}

Das **`<code>`**-[HTML](/de/docs/Web/HTML)-Element zeigt seine Inhalte in einem Stil an, der darauf hinweist, dass der Text ein kurzer Ausschnitt von Computercode ist. Standardmäßig wird der Inhaltstext unter Verwendung der monospace Schriftart des [User-Agents](/de/docs/Glossary/user_agent) angezeigt.

{{EmbedInteractiveExample("pages/tabbed/code.html", "tabbed-shorter")}}

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

## Hinweise

Um mehrere Zeilen von Code darzustellen, umschließen Sie das `<code>`-Element mit einem {{HTMLElement("pre")}}-Element. Das `<code>`-Element für sich allein stellt nur einen einzelnen Codeabschnitt oder eine einzelne Codezeile dar.

Eine CSS-Regel kann für den `code`-Selektor definiert werden, um die standardmäßige Schriftart des Browsers zu überschreiben. Vom Benutzer festgelegte Präferenzen könnten jedoch Vorrang vor der angegebenen CSS haben.

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
          >Fließinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/structural_roles#structural_roles_with_html_equivalents">code</a
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
        [`HTMLElement`](/de/docs/Web/API/HTMLElement) Bis einschließlich Gecko 1.9.2 (Firefox 4) implementiert Firefox die
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
