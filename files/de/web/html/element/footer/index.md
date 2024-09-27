---
title: "<footer>: Das Footer-Element"
slug: Web/HTML/Element/footer
l10n:
  sourceCommit: bde0cb215d1d307c08678abe6623fc0d39f4cf7f
---

{{HTMLSidebar}}

Das **`<footer>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen Fußbereich für seinen nächstgelegenen [gliedernden Inhalt](/de/docs/Web/HTML/Content_categories#sectioning_content) oder [gliedernden Wurzel-](/de/docs/Web/HTML/Element/Heading_Elements#labeling_section_content) Element. Ein `<footer>` enthält typischerweise Informationen über den Autor des Abschnitts, Urheberrechtsdaten oder Links zu verwandten Dokumenten.

{{EmbedInteractiveExample("pages/tabbed/footer.html", "tabbed-standard")}}

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

- Fassen Sie Informationen über den Autor in einem {{HTMLElement("address")}}-Element zusammen, das in das `<footer>`-Element aufgenommen werden kann.
- Wenn das nächstgelegene gliedernde Inhalts- oder Wurzelelement das body-Element ist, bezieht sich das Footer-Element auf die gesamte Seite.
- Das `<footer>`-Element ist kein gliedernder Inhalt und führt daher keinen neuen Abschnitt in die [Gliederung](/de/docs/Web/HTML/Element/Heading_Elements) ein.

## Barrierefreiheit

Vor der Veröffentlichung von Safari 13 wurde die `contentinfo`-[Landmarken-Rolle](/de/docs/Learn/Accessibility/WAI-ARIA_basics#signpostslandmarks) nicht ordnungsgemäß von [VoiceOver](https://help.apple.com/voiceover/info/guide/) erkannt. Wenn Sie ältere Safari-Browser unterstützen müssen, fügen Sie dem `footer`-Element `role="contentinfo"` hinzu, um sicherzustellen, dass die Landmarke ordnungsgemäß angezeigt wird.

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
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>, jedoch ohne Nachkommen von <code>&#x3C;footer></code> oder
        {{HTMLElement("header")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a> akzeptiert. Beachten Sie, dass ein <code>&#x3C;footer></code>-Element kein Nachkomme eines {{HTMLElement("address")}},
        {{HTMLElement("header")}} oder eines anderen
        <code>&#x3C;footer></code>-Elements sein darf.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/contentinfo_role">contentinfo</a>, oder
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/generic_role">generic</a>,
        wenn ein Nachkomme eines
        <a href="/de/docs/Web/HTML/Element/article">article</a>,
        <a href="/de/docs/Web/HTML/Element/aside">aside</a>,
        <a href="/de/docs/Web/HTML/Element/main">main</a>,
        <a href="/de/docs/Web/HTML/Element/nav">nav</a> oder
        <a href="/de/docs/Web/HTML/Element/section">section</a>-Elements,
        oder eines Elements mit
        <code>role=<a href="/de/docs/Web/Accessibility/ARIA/Roles/article_role">article</a></code>,
        <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/complementary_role">complementary</a></code>,
        <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/main_role">main</a></code>,
        <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/navigation_role">navigation</a></code>
        oder
        <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/region_role">region</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a> oder
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>
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
- [Verwendung von HTML-Abschnitten und Gliederungen](/de/docs/Web/HTML/Element/Heading_Elements)
- [ARIA: Contentinfo-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/contentinfo_role)
