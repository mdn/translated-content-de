---
title: "<header>: Das Header-Element"
slug: Web/HTML/Element/header
l10n:
  sourceCommit: 6336af7a3880c350919e5b29f83b938fb1594362
---

{{HTMLSidebar}}

Das **`<header>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einführende Inhalte, typischerweise eine Gruppe von einführenden oder navigativen Hilfsmitteln. Es kann einige Überschriftselemente, aber auch ein Logo, ein Suchformular, einen Autorennamen und andere Elemente enthalten.

{{EmbedInteractiveExample("pages/tabbed/header.html", "tabbed-standard")}}

## Verwendungsnotizen

Das `<header>`-Element hat eine identische Bedeutung wie die seitenweite [`banner`](/de/docs/Web/Accessibility/ARIA/Roles/banner_role)-Landmarke, außer es ist in verschachtelten Abschnittsinhalten enthalten. Dann ist das `<header>`-Element keine Landmarke.

Das `<header>`-Element kann eine globale Site-Header definieren, die im Barrierefreiheitstree als `banner` beschrieben wird. Es umfasst normalerweise ein Logo, den Firmennamen, eine Suchfunktion und möglicherweise die globale Navigation oder einen Slogan. Es befindet sich in der Regel oben auf der Seite.

Andernfalls ist es ein `section` im Barrierefreiheitstree und enthält normalerweise die Überschrift des umgebenden Abschnitts (ein `h1` – `h6` Element) und eine optionale Unterüberschrift, dies ist jedoch **nicht** erforderlich.

### Historische Nutzung

Das `<header>`-Element existierte ursprünglich ganz am Anfang von HTML für Überschriften. Es ist auf [der allerersten Website](https://info.cern.ch/) zu sehen. Irgendwann wurden Überschriften zu [`<h1>` bis `<h6>`](/de/docs/Web/HTML/Element/Heading_Elements), sodass `<header>` frei wurde, um eine andere Rolle zu übernehmen.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Barrierefreiheit

Das `<header>`-Element definiert eine [`banner`](/de/docs/Web/Accessibility/ARIA/Roles/banner_role)-Landmarke, wenn sein Kontext das {{HTMLElement('body')}}-Element ist. Das HTML-Header-Element wird nicht als Banner-Landmarke betrachtet, wenn es Nachfahre eines {{HTMLElement('article')}}, {{HTMLElement('aside')}}, {{HTMLElement('main')}}, {{HTMLElement('nav')}} oder {{HTMLElement('section')}}-Elements ist.

## Beispiele

### Seiten-Header

```html
<header>
  <h1>Hauptseitentitel</h1>
  <img src="mdn-logo-sm.png" alt="MDN-Logo" />
</header>
```

#### Ergebnis

{{EmbedLiveSample('Page Header')}}

### Artikel-Header

```html
<article>
  <header>
    <h2>Der Planet Erde</h2>
    <p>
      Veröffentlicht am Mittwoch, <time datetime="2017-10-04">4. Oktober 2017</time> von
      Jane Smith
    </p>
  </header>
  <p>
    Wir leben auf einem Planeten, der blau und grün ist, mit so vielen Dingen, die noch unentdeckt sind.
  </p>
  <p><a href="https://example.com/the-planet-earth/">Weiterlesen…</a></p>
</article>
```

#### Ergebnis

{{EmbedLiveSample('Article Header')}}

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
          >Fließende Inhalte</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#palpable_content"
          >spürbare Inhalte</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließende Inhalte</a
        >, aber ohne <code>&#x3C;header></code> oder
        {{HTMLElement("footer")}} Nachfahre.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind zwingend erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >fließende Inhalte</a
        > akzeptiert. Beachten Sie, dass ein <code>&#x3C;header></code>-Element kein
        Nachfahre eines {{HTMLElement("address")}},
        {{HTMLElement("footer")}} oder eines anderen
        <code>&lt;header&gt;</code>-Elements sein darf.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/banner_role">banner</a
        >, oder
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/generic_role"
          >generisch</a
        >
        wenn es ein Nachfahre eines
        <code><a href="/de/docs/Web/HTML/Element/article">article</a></code
        >, <code><a href="/de/docs/Web/HTML/Element/aside">aside</a></code
        >, <code><a href="/de/docs/Web/HTML/Element/main">main</a></code
        >, <code><a href="/de/docs/Web/HTML/Element/nav">nav</a></code> oder
        <code><a href="/de/docs/Web/HTML/Element/section">section</a></code>
        -Elements ist, oder eines Elements mit
        <code
          >role=<a href="/de/docs/Web/Accessibility/ARIA/Roles/article_role"
            >article</a
          ></code
        >,
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/complementary_role"
            >complementary</a
          ></code
        >,
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/main_role"
            >main</a
          ></code
        >,
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/navigation_role"
            >navigation</a
          ></code
        >
        oder
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/region_role"
            >region</a
          ></code
        >
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
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere abschnittsbezogene Elemente: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("footer")}}, {{HTMLElement("section")}}, {{HTMLElement("address")}}.
