---
title: "<footer>: Das Footer-Element"
slug: Web/HTML/Element/footer
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<footer>`**-Element [HTML](/de/docs/Web/HTML) stellt einen Fußbereich für das nächstgelegene übergeordnete [Strukturinhalt](/de/docs/Web/HTML/Content_categories#sectioning_content) oder [Strukturwurzel](/de/docs/Web/HTML/Element/Heading_Elements#labeling_section_content) Element dar. Ein `<footer>` enthält typischerweise Informationen über den Autor des Abschnitts, Urheberrechtsdaten oder Links zu verwandten Dokumenten.

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

Dieses Element beinhaltet nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Nutzungshinweise

- Informationen über den Autor sollten in ein {{HTMLElement("address")}}-Element eingeschlossen werden, das in das `<footer>`-Element aufgenommen werden kann.
- Wenn das nächstgelegene übergeordnete Strukturinhalt oder Strukturwurzel-Element das Body-Element ist, gilt das Footer für die gesamte Seite.
- Das `<footer>`-Element ist kein Strukturinhalt und führt daher keinen neuen Abschnitt in die [Gliederung](/de/docs/Web/HTML/Element/Heading_Elements) ein.

## Barrierefreiheit

Vor der Veröffentlichung von Safari 13 wurde die `contentinfo` [Landmark-Rolle](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics#signpostslandmarks) von [VoiceOver](https://help.apple.com/voiceover/info/guide/) nicht korrekt dargestellt. Wenn Sie alte Safari-Browser unterstützen müssen, fügen Sie `role="contentinfo"` zum `footer`-Element hinzu, um sicherzustellen, dass das Landmark korrekt dargestellt wird.

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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließinhalt</a>, spürbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließinhalt</a>, jedoch ohne <code>&#x3C;footer></code> oder
        {{HTMLElement("header")}} Nachkommen.
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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließinhalt</a> akzeptiert. Beachten Sie, dass ein <code>&#x3C;footer></code>-Element darf kein
        Nachkomme eines {{HTMLElement("address")}},
        {{HTMLElement("header")}} oder eines anderen
        <code>&#x3C;footer></code>-Elements sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/contentinfo_role">contentinfo</a>, oder
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/generic_role">generisch</a>
        wenn ein Nachkomme einer
        <a href="/de/docs/Web/HTML/Element/article">article</a>,
        <a href="/de/docs/Web/HTML/Element/aside">aside</a>,
        <a href="/de/docs/Web/HTML/Element/main">main</a>,
        <a href="/de/docs/Web/HTML/Element/nav">nav</a> oder
        <a href="/de/docs/Web/HTML/Element/section">section</a> Element ist, oder
        ein Element mit
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
