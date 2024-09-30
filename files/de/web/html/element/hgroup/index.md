---
title: "<hgroup>: Das Element Heading Group"
slug: Web/HTML/Element/hgroup
l10n:
  sourceCommit: 4a93b09e58da589b7af14cbbe30fc7f337a1ad50
---

{{HTMLSidebar}}

Das **`<hgroup>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert eine Überschrift und verwandte Inhalte. Es gruppiert ein einzelnes [`<h1>–<h6>`](/de/docs/Web/HTML/Element/Heading_Elements)-Element mit einem oder mehreren [`<p>`](/de/docs/Web/HTML/Element/p).

{{EmbedInteractiveExample("pages/tabbed/hgroup.html", "tabbed-standard")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Das `<hgroup>`-Element ermöglicht die Gruppierung einer Überschrift mit sekundären Inhalten, wie Unterüberschriften, einem alternativen Titel oder einem Slogan. Jeder dieser Inhaltstypen wird als `<p>`-Element innerhalb des `<hgroup>` dargestellt.

Das `<hgroup>` selbst hat keinen Einfluss auf die Dokumentstruktur einer Webseite. Vielmehr trägt die einzelne zulässige Überschrift innerhalb des `<hgroup>` zur Dokumentstruktur bei.

## Beispiele

```html
<!doctype html>
<title>HTML Standard</title>
<body>
  <hgroup id="document-title">
    <h1>HTML: Living Standard</h1>
    <p>Last Updated 12 July 2022</p>
  </hgroup>
  <p>Some intro to the document.</p>
  <h2>Table of contents</h2>
  <ol id="toc">
    …
  </ol>
  <h2>First section</h2>
  <p>Some intro to the first section.</p>
</body>
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>, Überschrifteninhalt, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        Null oder mehr {{HTMLElement("p")}}-Elemente, gefolgt von einem
        {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}},
        {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}},
        {{HTMLElement("Heading_Elements", "h5")}} oder {{HTMLElement("Heading_Elements", "h6")}}-Element,
        gefolgt von null oder mehr {{HTMLElement("p")}}-Elementen.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das eröffnende als auch das schließende Tag sind zwingend erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/group_role">group</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLElement`](/de/docs/Web/API/HTMLElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere abschnittsbezogene Elemente: {{HTMLElement("body")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("nav")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}};
- [Abschnitte und Gliederungen eines HTML-Dokuments](/de/docs/Web/HTML/Element/Heading_Elements).
