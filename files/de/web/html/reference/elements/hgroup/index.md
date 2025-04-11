---
title: "<hgroup>: Das Kopfelement-Gruppe-Element"
slug: Web/HTML/Reference/Elements/hgroup
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<hgroup>`** [HTML](/de/docs/Web/HTML) Element repräsentiert eine Überschrift und verwandten Inhalt. Es gruppiert ein einzelnes [`<h1>–<h6>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) Element mit einem oder mehreren [`<p>`](/de/docs/Web/HTML/Reference/Elements/p).

{{InteractiveExample("HTML Demo: &lt;hgroup&gt;", "tabbed-standard")}}

```html interactive-example
<hgroup>
  <h1>Frankenstein</h1>
  <p>Or: The Modern Prometheus</p>
</hgroup>
<p>
  Victor Frankenstein, a Swiss scientist, has a great ambition: to create
  intelligent life. But when his creature first stirs, he realizes he has made a
  monster. A monster which, abandoned by his master and shunned by everyone who
  sees it, follows Dr Frankenstein to the very ends of the earth.
</p>
```

```css interactive-example
hgroup {
  text-align: right;
  padding-right: 16px;
  border-right: 10px solid #00c8d7;
}

hgroup h1 {
  margin-bottom: 0;
}

hgroup p {
  margin: 0;
  font-weight: bold;
}
```

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Anwendungshinweise

Das `<hgroup>` Element ermöglicht die Gruppierung einer Überschrift mit beliebigem sekunden Inhalt, wie etwa Unterüberschriften, einem alternativen Titel oder einem Slogan. Jede dieser Inhaltsarten wird als ein `<p>`-Element innerhalb des `<hgroup>` dargestellt.

Das `<hgroup>` selbst hat keinen Einfluss auf die Dokumentenstruktur einer Webseite. Vielmehr steuert die einzelne erlaubte Überschrift innerhalb des `<hgroup>` zur Dokumentenstruktur bei.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >, Überschrifteninhalt, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Null oder mehr {{HTMLElement("p")}} Elemente, gefolgt von einem
        {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}},
        {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}},
        {{HTMLElement("Heading_Elements", "h5")}}, oder {{HTMLElement("Heading_Elements", "h6")}} Element,
        gefolgt von null oder mehr {{HTMLElement("p")}} Elementen.
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"
            >group</a
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
      <td>[`HTMLElement`](/de/docs/Web/API/HTMLElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Weitere abschnittsbezogene Elemente: {{HTMLElement("body")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("nav")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}};
- [Abschnitte und Gliederungen eines HTML-Dokuments](/de/docs/Web/HTML/Reference/Elements/Heading_Elements).
