---
title: "<footer>: Das Footer-Element"
slug: Web/HTML/Reference/Elements/footer
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<footer>`** [HTML](/de/docs/Web/HTML) Element repräsentiert einen Footer für das nächste übergeordnete [sectioning content](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) oder [sectioning root](/de/docs/Web/HTML/Reference/Elements/Heading_Elements#labeling_section_content) Element. Ein `<footer>` enthält typischerweise Informationen über den Autor des Abschnitts, Urheberrechtsdaten oder Links zu verwandten Dokumenten.

{{InteractiveExample("HTML Demo: &lt;footer&gt;", "tabbed-standard")}}

```html interactive-example
<article>
  <h1>How to be a wizard</h1>
  <ol>
    <li>Grow a long, majestic beard.</li>
    <li>Wear a tall, pointed hat.</li>
    <li>Have I mentioned the beard?</li>
  </ol>
  <footer>
    <p>© 2018 Gandalf</p>
  </footer>
</article>
```

```css interactive-example
article {
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

footer {
  display: flex;
  justify-content: center;
  padding: 5px;
  background-color: #45a1ff;
  color: #fff;
}
```

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

- Schließen Sie Informationen über den Autor in ein {{HTMLElement("address")}}-Element ein, das in das `<footer>`-Element eingefügt werden kann.
- Wenn das nächste übergeordnete Sectioning Content oder Sectioning Root Element das Body-Element ist, gilt der Footer für die gesamte Seite.
- Das `<footer>`-Element ist kein Sectioning Content und führt daher keinen neuen Abschnitt in der [Gliederung](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) ein.

## Barrierefreiheit

Vor der Veröffentlichung von Safari 13 wurde das `contentinfo` [Landmark-Rolle](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics#signpostslandmarks) nicht ordnungsgemäß durch [VoiceOver](https://help.apple.com/voiceover/info/guide/) dargestellt. Wenn die Unterstützung für ältere Safari-Browser erforderlich ist, fügen Sie `role="contentinfo"` zum `footer`-Element hinzu, um sicherzustellen, dass das Landmarken-Attribut ordnungsgemäß dargestellt wird.

- Verwandt: [WebKit Bugzilla: 146930 – AX: HTML native Elemente (header, footer, main, aside, nav) sollten genauso funktionieren wie ARIA-Landmarks, manchmal tun sie es nicht](https://webkit.org/b/146930)

## Beispiele

```html
<body>
  <h3>FIFA World Cup top goalscorers</h3>
  <ol>
    <li>Miroslav Klose, 16</li>
    <li>Ronaldo Nazário, 15</li>
    <li>Gerd Müller, 14</li>
  </ol>

  <footer>
    <small>
      Copyright © 2023 Football History Archives. All Rights Reserved.
    </small>
  </footer>
</body>
```

```css
footer {
  text-align: center;
  padding: 5px;
  background-color: #abbaba;
  color: #000;
}
```

{{EmbedLiveSample('Examples')}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flow content</a>, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flow content</a>, jedoch ohne <code>&#x3C;footer></code> oder
        {{HTMLElement("header")}} Nachkommen.
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">flow content</a> akzeptiert. Beachten Sie, dass ein <code>&#x3C;footer></code>-Element kein Nachkomme eines {{HTMLElement("address")}},
        {{HTMLElement("header")}} oder eines anderen
        <code>&#x3C;footer></code>-Elements sein darf.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role">contentinfo</a>, oder
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role">generic</a>
        wenn ein Nachkomme eines
        <a href="/de/docs/Web/HTML/Reference/Elements/article">article</a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/aside">aside</a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/main">main</a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/nav">nav</a> oder
        <a href="/de/docs/Web/HTML/Reference/Elements/section">section</a> Elements, oder
        eines Elements mit
        <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/article_role">article</a></code>,
        <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role">complementary</a></code>,
        <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role">main</a></code>,
        <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role">navigation</a></code>
        oder
        <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/region_role">region</a></code> Rolle
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a> oder
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>
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

- Andere abschnittsbezogene Elemente: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("section")}}, {{HTMLElement("address")}};
- [Verwendung von HTML-Abschnitten und Gliederungen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [ARIA: Contentinfo Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role)
