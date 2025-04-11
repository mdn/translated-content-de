---
title: "<header>: Das Header-Element"
slug: Web/HTML/Reference/Elements/header
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<header>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einleitende Inhalte, typischerweise eine Gruppe von einleitenden oder navigativen Hilfsmitteln. Es kann einige Überschriften-Elemente enthalten, aber auch ein Logo, ein Suchformular, einen Autorennamen und andere Elemente.

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
  text-shadow: #000 2px 2px 0.2rem;
}

header > h1 {
  margin-bottom: 0;
}

header > time {
  font: italic 0.7rem sans-serif;
}
```

## Verwendungshinweise

Das `<header>`-Element hat eine identische Bedeutung wie die seitenweite [`banner`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role) Landmark-Rolle, es sei denn, es ist innerhalb eines Abschnittsinhalts verschachtelt. Dann ist das `<header>`-Element keine Landmarke.

Das `<header>`-Element kann eine globale Webseitenüberschrift definieren, die als `banner` im Barrierefreiheit-Baum beschrieben wird. Es umfasst in der Regel ein Logo, den Firmennamen, eine Suchfunktion und möglicherweise die globale Navigation oder einen Slogan. Es befindet sich normalerweise am oberen Rand der Seite.

Andernfalls ist es ein `section` im Barrierefreiheit-Baum und enthält in der Regel die Überschrift des umgebenden Abschnitts (ein `h1` – `h6` Element) und optional eine Unterüberschrift, dies ist jedoch **nicht** erforderlich.

### Historische Verwendung

Das `<header>`-Element existierte ursprünglich ganz am Anfang von HTML für Überschriften. Es wird auf [der allerersten Webseite](https://info.cern.ch/) gesehen. Irgendwann wurden Überschriften zu [`<h1>` bis `<h6>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), wodurch `<header>` frei wurde, eine andere Rolle zu übernehmen.

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Barrierefreiheit

Das `<header>`-Element definiert eine [`banner`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role) Landmark-Rolle, wenn der Kontext das {{HTMLElement('body')}}-Element ist. Das HTML-Header-Element wird nicht als Banner-Landmarke betrachtet, wenn es ein Nachfahre eines {{HTMLElement('article')}}, {{HTMLElement('aside')}}, {{HTMLElement('main')}}, {{HTMLElement('nav')}} oder {{HTMLElement('section')}}-Elements ist.

## Beispiele

### Seitenheader

```html
<header>
  <h1>Main Page Title</h1>
  <img src="mdn-logo-sm.png" alt="MDN logo" />
</header>
```

#### Ergebnis

{{EmbedLiveSample('Page Header')}}

### Artikelheader

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
          >Flow-Inhalt</a
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
          >Flow-Inhalt</a
        >, aber ohne <code>&#x3C;header></code> oder
        {{HTMLElement("footer")}} Nachfahren.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow-Inhalt</a
        > akzeptiert. Beachten Sie, dass ein <code>&#x3C;header></code>-Element kein Nachfahre eines {{HTMLElement("address")}},
        {{HTMLElement("footer")}} oder eines anderen
        <code>&lt;header&gt;</code>-Elements sein darf.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role">banner</a
        >, oder
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
          >generic</a
        >
        wenn ein Nachfahre eines
        <code><a href="/de/docs/Web/HTML/Reference/Elements/article">article</a></code
        >, <code><a href="/de/docs/Web/HTML/Reference/Elements/aside">aside</a></code
        >, <code><a href="/de/docs/Web/HTML/Reference/Elements/main">main</a></code
        >, <code><a href="/de/docs/Web/HTML/Reference/Elements/nav">nav</a></code> oder
        <code><a href="/de/docs/Web/HTML/Reference/Elements/section">section</a></code>
        Element, oder ein Element mit
        <code
          >role=<a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/article_role"
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
        >
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
