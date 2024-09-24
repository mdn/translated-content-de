---
title: "<code>: Das Inline-Code-Element"
slug: Web/HTML/Element/code
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{HTMLSidebar}}

Das **`<code>`**-[HTML](/de/docs/Web/HTML)-Element zeigt seinen Inhalt in einem Stil an, der darauf hinweist, dass es sich bei dem Text um ein kurzes Fragment von Computercode handelt. Standardmäßig wird der Inhaltstext mit der Standardschrift des {{Glossary("user agent", "user agent's")}} monospace Schriftart angezeigt.

{{EmbedInteractiveExample("pages/tabbed/code.html", "tabbed-shorter")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Beispiele

Ein Absatz von Text, der `<code>` enthält:

```html
<p>
  Die Funktion <code>selectAll()</code> markiert den gesamten Text im Eingabefeld, damit der Benutzer beispielsweise den Text kopieren oder löschen kann.
</p>
```

### Ergebnis

{{EmbedLiveSample("Example", 640, 70)}}

## Hinweise

Um mehrere Zeilen von Code darzustellen, wickeln Sie das `<code>`-Element innerhalb eines {{HTMLElement("pre")}}-Elements ein. Das `<code>`-Element alleine repräsentiert nur einen einzelnen Satz oder eine Zeile von Code.

Eine CSS-Regel kann für den `code`-Selektor definiert werden, um die Standardschriftart des Browsers zu überschreiben. Vom Benutzer festgelegte Präferenzen könnten die angegebene CSS überschreiben.

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
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
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
          >Phrasing-Inhalt</a
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
        {{domxref("HTMLElement")}} Bis einschließlich Gecko 1.9.2 (Firefox 4) implementiert Firefox die
        {{domxref("HTMLSpanElement")}}-Schnittstelle für dieses Element.
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
