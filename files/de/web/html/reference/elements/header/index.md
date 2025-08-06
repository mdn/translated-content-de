---
title: "<header>: Das Header-Element"
slug: Web/HTML/Reference/Elements/header
l10n:
  sourceCommit: f2d281d86396bcd2dcecfdabd5837b1590132aa6
---

Das **`<header>`** [HTML](/de/docs/Web/HTML) Element repräsentiert einleitende Inhalte, typischerweise eine Gruppe von einleitenden oder navigierenden Hilfsmitteln. Es kann einige Überschriftselemente enthalten, aber auch ein Logo, ein Suchformular, einen Autorennamen und andere Elemente.

{{InteractiveExample("HTML Demo: &lt;header&gt;", "tabbed-standard")}}

```html interactive-example
<header>
  <a class="logo" href="#">Cute Puppies Express!</a>
</header>

<article>
  <header>
    <h1>Beagles</h1>
    <time>08.12.2014</time>
  </header>
  <p>
    I love beagles <em>so</em> much! Like, really, a lot. They’re adorable and
    their ears are so, so snugly soft!
  </p>
</article>
```

```css interactive-example
.logo {
  background: left / cover
    url("/shared-assets/images/examples/puppy-header.jpg");
  display: flex;
  height: 120px;
  align-items: center;
  justify-content: center;
  font:
    bold calc(1em + 2 * (100vw - 120px) / 100) "Dancing Script",
    fantasy;
  color: #ff0083;
  text-shadow: black 2px 2px 0.2rem;
}

header > h1 {
  margin-bottom: 0;
}

header > time {
  font: italic 0.7rem sans-serif;
}
```

## Verwendungshinweise

Das `<header>`-Element hat eine identische Bedeutung zur seitenweiten [`banner`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role) Landmarke, es sei denn, es ist innerhalb von gliedernden Inhalten verschachtelt. Dann ist das `<header>`-Element keine Landmarke.

Das `<header>`-Element kann ein globales Site-Header definieren, das als `banner` im Barrierefreiheitsbaum beschrieben wird. Es enthält normalerweise ein Logo, den Firmennamen, eine Suchfunktion und möglicherweise die globale Navigation oder ein Slogan. Es befindet sich in der Regel am oberen Rand der Seite.

Andernfalls ist es ein `section` im Barrierefreiheitsbaum und enthält üblicherweise die Überschrift des umgebenden Abschnitts (ein `h1` – `h6` Element) und eine optionale Unterüberschrift, dies ist jedoch **nicht** erforderlich.

### Historische Nutzung

Das `<header>`-Element existierte ursprünglich am Anfang von HTML für Überschriften. Es ist auf [der allerersten Website](https://info.cern.ch/) zu sehen. Zu einem bestimmten Zeitpunkt wurden Überschriften zu [`<h1>` bis `<h6>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), sodass `<header>` frei ist, eine andere Rolle zu übernehmen.

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Barrierefreiheit

Das `<header>`-Element definiert eine [`banner`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role) Landmarke, wenn sein Kontext das {{HTMLElement('body')}} Element ist. Das HTML-Header-Element gilt nicht als Banner-Landmarke, wenn es ein Nachkomme eines {{HTMLElement('article')}}, {{HTMLElement('aside')}}, {{HTMLElement('main')}}, {{HTMLElement('nav')}}, oder {{HTMLElement('section')}} Elements ist.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >fühlbarer Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >, jedoch ohne <code>&#x3C;header></code> oder
        {{HTMLElement("footer")}} Nachkomme.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind verpflichtend.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >
        akzeptiert. Beachten Sie, dass ein <code>&#x3C;header></code>-Element
        kein Nachkomme eines {{HTMLElement("address")}},
        {{HTMLElement("footer")}} oder eines anderen
        <code>&lt;header&gt;</code>-Elements sein darf.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role">banner</a
        >, oder
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
          >generic</a
        >
        wenn es ein Nachkomme eines
        <code><a href="/de/docs/Web/HTML/Reference/Elements/article">article</a></code
        >, <code><a href="/de/docs/Web/HTML/Reference/Elements/aside">aside</a></code
        >, <code><a href="/de/docs/Web/HTML/Reference/Elements/main">main</a></code
        >, <code><a href="/de/docs/Web/HTML/Reference/Elements/nav">nav</a></code> oder
        <code><a href="/de/docs/Web/HTML/Reference/Elements/section">section</a></code>
        Elements ist, oder eines Elements mit
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/article_role"
            >article</a
          ></code
        >,
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role"
            >complementary</a
          ></code
        >,
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role"
            >main</a
          ></code
        >,
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role"
            >navigation</a
          ></code
        >
        oder
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/region_role"
            >region</a
          ></code
        > Rolle
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

- Andere abschnittsbezogene Elemente: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("footer")}}, {{HTMLElement("section")}}, {{HTMLElement("address")}}.
