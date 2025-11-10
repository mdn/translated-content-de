---
title: "<aside>: Das Aside-Element"
slug: Web/HTML/Reference/Elements/aside
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<aside>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen Teil eines Dokuments, dessen Inhalt nur indirekt mit dem Hauptinhalt des Dokuments zusammenhängt. Asides werden häufig als Sidebars oder Call-out-Boxen dargestellt.

{{InteractiveExample("HTML Demo: &lt;aside&gt;", "tabbed-standard")}}

```html interactive-example
<p>
  Salamanders are a group of amphibians with a lizard-like appearance, including
  short legs and a tail in both larval and adult forms.
</p>

<aside>
  <p>The Rough-skinned Newt defends itself with a deadly neurotoxin.</p>
</aside>

<p>
  Several species of salamander inhabit the temperate rainforest of the Pacific
  Northwest, including the Ensatina, the Northwestern Salamander and the
  Rough-skinned Newt. Most salamanders are nocturnal, and hunt for insects,
  worms and other small creatures.
</p>
```

```css interactive-example
aside {
  width: 40%;
  padding-left: 0.5rem;
  margin-left: 0.5rem;
  float: right;
  box-shadow: inset 5px 0 5px -5px #29627e;
  font-style: italic;
  color: #29627e;
}

aside > p {
  margin: 0.5rem;
}
```

## Attribute

Dieses Element beinhaltet nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Anwendungshinweise

- Verwenden Sie das `<aside>`-Element nicht, um in Klammern gesetzten Text zu kennzeichnen, da dieser Text als Teil des Hauptflusses betrachtet wird.

## Beispiele

### Verwendung von \<aside>

Dieses Beispiel verwendet `<aside>`, um einen Paragraphen in einem Artikel zu kennzeichnen. Der Paragraph steht nur indirekt mit dem Hauptinhalt des Artikels in Zusammenhang:

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow content</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#sectioning_content"
          >sectioning content</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >palpable content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Weghlassen von Tags</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >flow content</a
        > akzeptiert. Beachten Sie, dass ein <code>&#x3C;aside></code>-Element
        kein Nachfolger eines {{HTMLElement("address")}}-Elements sein darf.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role"
            >complementary</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/feed_role"><code>feed</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/note_role"><code>note</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/region_role"><code>region</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role"><code>search</code></a>
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

- Andere Abschnittsbezogene Elemente: {{HTMLElement("body")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}};
- [Verwendung von HTML-Abschnitten und Gliederungen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [ARIA: Complementary role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role)
