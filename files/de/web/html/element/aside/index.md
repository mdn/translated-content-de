---
title: "<aside>: Das Aside-Element"
slug: Web/HTML/Element/aside
l10n:
  sourceCommit: 829db137a01feb14af7beaec178a3ea0118b4777
---

{{HTMLSidebar}}

Das **`<aside>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen Teil eines Dokuments, dessen Inhalt nur indirekt mit dem Hauptinhalt des Dokuments in Verbindung steht. Asides werden häufig als Seitenleisten oder hervorgehobene Boxen dargestellt.

{{EmbedInteractiveExample("pages/tabbed/aside.html", "tabbed-standard")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

- Verwenden Sie das `<aside>`-Element nicht, um eingeklammerten Text zu kennzeichnen, da diese Art von Text als Teil des Hauptflusses betrachtet wird.

## Beispiele

### Verwendung von \<aside>

Dieses Beispiel verwendet `<aside>`, um einen Absatz in einem Artikel zu markieren. Der Absatz steht nur indirekt in Zusammenhang mit dem Hauptinhalt des Artikels:

```html
<article>
  <p>
    The Disney movie <cite>The Little Mermaid</cite> was first released to
    theatres in 1989.
  </p>
  <aside>
    <p>The movie earned $87 million during its initial release.</p>
  </aside>
  <p>More info about the movie…</p>
</article>
```

#### Ergebnis

{{EmbedLiveSample("Using_aside")}}

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
          >Flussinhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#sectioning_content"
          >Strukturierungsinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#palpable_content"
          >fühlbarer Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Starttag als auch der Endtag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        > akzeptiert. Beachten Sie, dass ein <code>&#x3C;aside></code>-Element kein Nachkomme eines {{HTMLElement("address")}}-Elements sein darf.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/complementary_role"
            >complementary</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/feed_role"><code>feed</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/note_role"><code>note</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/region_role"><code>region</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/search_role"><code>search</code></a>
      </td>
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

- Andere strukturbezogene Elemente: {{HTMLElement("body")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}};
- [Verwendung von HTML-Abschnitten und -Gliederungen](/de/docs/Web/HTML/Element/Heading_Elements)
- [ARIA: Komplementäre Rolle](/de/docs/Web/Accessibility/ARIA/Roles/complementary_role)
