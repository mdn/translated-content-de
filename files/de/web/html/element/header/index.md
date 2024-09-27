---
title: "<header>: Das Header-Element"
slug: Web/HTML/Element/header
l10n:
  sourceCommit: 6336af7a3880c350919e5b29f83b938fb1594362
---

{{HTMLSidebar}}

Das **`<header>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einführende Inhalte, typischerweise eine Gruppe von einleitenden oder navigativen Hilfsmitteln. Es kann einige Überschriftselemente enthalten, aber auch ein Logo, ein Suchformular, einen Autorennamen und andere Elemente.

{{EmbedInteractiveExample("pages/tabbed/header.html", "tabbed-standard")}}

## Nutzungshinweise

Das `<header>`-Element hat dieselbe Bedeutung wie die seitenweite [`banner`](/de/docs/Web/Accessibility/ARIA/Roles/banner_role)-Landmark-Rolle, es sei denn, es ist innerhalb von Sektionsinhalten verschachtelt. Dann ist das `<header>`-Element kein Landmark.

Das `<header>`-Element kann einen globalen Site-Header definieren, der in der Accessibility-Struktur als `banner` beschrieben wird. Es enthält normalerweise ein Logo, den Firmennamen, eine Suchfunktion und möglicherweise die globale Navigation oder einen Slogan. Es befindet sich in der Regel oben auf der Seite.

Andernfalls ist es ein `section` in der Accessibility-Struktur und enthält normalerweise die Überschrift des umgebenden Abschnitts (ein `h1` – `h6` Element) und eine optionale Unterüberschrift, dies ist jedoch **nicht** erforderlich.

### Historische Nutzung

Das `<header>`-Element existierte ursprünglich am Anfang von HTML für Überschriften. Es ist auf [der allerersten Website](https://info.cern.ch/) zu sehen. Irgendwann wurden Überschriften zu [`<h1>` bis `<h6>`](/de/docs/Web/HTML/Element/Heading_Elements), was es dem `<header>`-Element ermöglichte, eine andere Rolle zu übernehmen.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Barrierefreiheit

Das `<header>`-Element definiert ein [`banner`](/de/docs/Web/Accessibility/ARIA/Roles/banner_role)-Landmark, wenn sein Kontext das {{HTMLElement('body')}}-Element ist. Das HTML-Header-Element wird nicht als Banner-Landmark betrachtet, wenn es ein Nachfahre eines {{HTMLElement('article')}}, {{HTMLElement('aside')}}, {{HTMLElement('main')}}, {{HTMLElement('nav')}} oder {{HTMLElement('section')}} Elements ist.

## Beispiele

### Seiten-Header

```html
<header>
  <h1>Main Page Title</h1>
  <img src="mdn-logo-sm.png" alt="MDN logo" />
</header>
```

#### Ergebnis

{{EmbedLiveSample('Page Header')}}

### Artikel-Header

```html
<article>
  <header>
    <h2>The Planet Earth</h2>
    <p>
      Posted on Wednesday, <time datetime="2017-10-04">4 October 2017</time> by
      Jane Smith
    </p>
  </header>
  <p>
    We live on a planet that's blue and green, with so many things still unseen.
  </p>
  <p><a href="https://example.com/the-planet-earth/">Continue reading…</a></p>
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
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#palpable_content"
          >greifbarer Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >, aber ohne <code>&#x3C;header></code> oder
        {{HTMLElement("footer")}} Nachfahren.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
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
          >generic</a
        >
        wenn ein Nachfahre eines
        <code><a href="/de/docs/Web/HTML/Element/article">article</a></code
        >, <code><a href="/de/docs/Web/HTML/Element/aside">aside</a></code
        >, <code><a href="/de/docs/Web/HTML/Element/main">main</a></code
        >, <code><a href="/de/docs/Web/HTML/Element/nav">nav</a></code> oder
        <code><a href="/de/docs/Web/HTML/Element/section">section</a></code>
        Elements, oder eines Elements mit
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
      <th scope="row">Zulässige ARIA-Rollen</th>
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

- Andere abschnittsbezogene Elemente: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("footer")}}, {{HTMLElement("section")}}, {{HTMLElement("address")}}.
