---
title: "<footer>: Das Footer-Element"
slug: Web/HTML/Reference/Elements/footer
l10n:
  sourceCommit: b2c8dcdae36907a87d1d1b9393ca4a35ebc765d6
---

{{HTMLSidebar}}

Das **`<footer>`**-[HTML](/de/docs/Web/HTML)-Element repräsentiert eine Fußzeile für sein nächstes übergeordnetes [Abschnittsinhalts-](/de-DE/docs/Web/HTML/Guides/Content_categories#sectioning_content) oder [Abschnittswurzel-](/de/docs/Web/HTML/Reference/Elements/Heading_Elements#labeling_section_content)-Element. Ein `<footer>` enthält typischerweise Informationen über den Autor des Abschnitts, Copyright-Daten oder Links zu verwandten Dokumenten.

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

Dieses Element enthält nur die [globalen Attribute](/de-DE/docs/Web/HTML/Reference/Global_attributes).

## Hinweise zur Verwendung

- Schließen Sie Informationen über den Autor in ein {{HTMLElement("address")}}-Element ein, das in das `<footer>`-Element aufgenommen werden kann.
- Wenn das nächstgelegene übergeordnete Abschnittsinhalt- oder Abschnittswurzel-Element das body-Element ist, gilt die Fußzeile für die gesamte Seite.
- Das `<footer>`-Element ist kein Abschnittsinhalt und führt daher keinen neuen Abschnitt in der [Gliederung](/de-DE/docs/Web/HTML/Reference/Elements/Heading_Elements) ein.

## Barrierefreiheit

Vor der Veröffentlichung von Safari 13 wurde die `contentinfo` [Landmark-Rolle](/de-DE/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics#signpostslandmarks) nicht richtig von [VoiceOver](https://help.apple.com/voiceover/info/guide/) dargestellt. Wenn Sie ältere Safari-Browser unterstützen müssen, fügen Sie dem `footer`-Element `role="contentinfo"` hinzu, um sicherzustellen, dass das Landmark ordnungsgemäß dargestellt wird.

- Verwandt: [WebKit Bugzilla: 146930 – AX: HTML native elements (header, footer, main, aside, nav) should work the same as ARIA landmarks, sometimes they don't](https://webkit.org/b/146930)

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
        <a href="/de-DE/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de-DE/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de-DE/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>, jedoch ohne <code>&#x3C;footer></code> oder
        {{HTMLElement("header")}} Nachfahren.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Anfangs- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de-DE/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a> akzeptiert. Beachten Sie, dass ein <code>&#x3C;footer></code>-Element kein
        Nachkomme eines {{HTMLElement("address")}},
        {{HTMLElement("header")}} oder eines anderen
        <code>&#x3C;footer></code>-Elements sein darf.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de-DE/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role">contentinfo</a>, oder
        <a href="/de-DE/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role">generic</a>
        wenn ein Nachkomme eines
        <a href="/de-DE/docs/Web/HTML/Reference/Elements/article">article</a>,
        <a href="/de-DE/docs/Web/HTML/Reference/Elements/aside">aside</a>,
        <a href="/de-DE/docs/Web/HTML/Reference/Elements/main">main</a>,
        <a href="/de-DE/docs/Web/HTML/Reference/Elements/nav">nav</a> oder
        <a href="/de-DE/docs/Web/HTML/Reference/Elements/section">section</a>-Elements ist, oder
        eines Elements mit
        <code><a href="/de-DE/docs/Web/Accessibility/ARIA/Reference/Roles/article_role">article</a></code>,
        <code><a href="/de-DE/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role">complementary</a></code>,
        <code><a href="/de-DE/docs/Web/Accessibility/ARIA/Reference/Roles/main_role">main</a></code>,
        <code><a href="/de-DE/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role">navigation</a></code>
        oder
        <code><a href="/de-DE/docs/Web/Accessibility/ARIA/Reference/Roles/region_role">region</a></code>-Rolle
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de-DE/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a>, <a href="/de-DE/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a> oder
        <a href="/de-DE/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLElement`](/de-DE/docs/Web/API/HTMLElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Weitere abschnittsbezogene Elemente: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("section")}}, {{HTMLElement("address")}};
- [Verwendung von HTML-Abschnitten und Gliederungen](/de-DE/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [ARIA: Contentinfo-Rolle](/de-DE/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role)
