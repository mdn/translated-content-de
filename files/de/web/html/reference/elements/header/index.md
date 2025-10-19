---
title: "<header>: Das Header-Element"
slug: Web/HTML/Reference/Elements/header
l10n:
  sourceCommit: 3527b9372ddeb3b301cc826ed2fbcf086b487568
---

Das **`<header>`** [HTML](/de/docs/Web/HTML) Element repräsentiert einführende Inhalte, typischerweise eine Gruppe von einleitenden oder Navigationshilfen. Es kann einige Überschriftselemente, aber auch ein Logo, ein Suchformular, einen Autorennamen und andere Elemente enthalten.

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

## Nutzungshinweise

Wenn es nicht innerhalb von [Sectioning-Content](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content), {{htmlelement("main")}}, oder einem Element mit derselben ARIA-Rolle wie die implizite ARIA-Rolle dieser Elemente eingebettet ist, hat das `<header>` Element eine identische Bedeutung zu der site-weiten [`banner`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role)-Rolle. Es definiert eine globale Website-Header, welcher normalerweise ein Logo, den Firmennamen, eine Suchfunktion und möglicherweise die globale Navigation oder einen Slogan enthält. Es befindet sich in der Regel am oberen Rand der Seite.

Andernfalls, wenn es innerhalb der genannten Elemente verschachtelt ist, verliert es seinen Landmark-Status und repräsentiert eine Gruppe von einleitenden oder Navigationshilfen für den umgebenden Abschnitt. Es enthält in der Regel die Überschrift des umgebenden Abschnitts (ein `h1` – `h6` Element) und eine optionale Unterüberschrift, aber dies ist **nicht** erforderlich.

### Historische Nutzung

Das `<header>` Element existierte ursprünglich zu Beginn von HTML für Überschriften. Es ist auf [der allerersten Website](https://info.cern.ch/) zu sehen. Irgendwann wurden Überschriften zu [`<h1>` bis `<h6>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), wodurch `<header>` frei wurde, um eine andere Rolle auszufüllen.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Barrierefreiheit

Das `<header>` Element definiert ein [`banner`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role)-Landmark, wenn sein Kontext das {{HTMLElement('body')}} Element ist.

Wenn es innerhalb eines {{HTMLElement('article')}}, {{HTMLElement('main')}}, {{HTMLElement('section')}}, {{HTMLElement('nav')}}, {{HTMLElement('aside')}} oder eines Elements mit derselben ARIA-Rolle wie die implizite ARIA-Rolle dieser Elemente platziert ist, hat das `<header>` Element stattdessen die [`generic`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role)-Rolle und wird nicht mehr als Landmark angesehen. In diesem Fall kann es nicht mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) gekennzeichnet werden.

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
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >, jedoch ohne <code>&#x3C;header></code> oder
        {{HTMLElement("footer")}} Nachkommen.
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
          >Flussinhalt</a
        > akzeptiert. Beachten Sie, dass ein <code>&#x3C;header></code> Element kein
        Nachkomme eines {{HTMLElement("address")}},
        {{HTMLElement("footer")}} oder eines anderen
        <code>&lt;header&gt;</code> Elements sein darf.
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
        wenn Nachkommen eines
        <code><a href="/de/docs/Web/HTML/Reference/Elements/article">article</a></code
        >, <code><a href="/de/docs/Web/HTML/Reference/Elements/aside">aside</a></code
        >, <code><a href="/de/docs/Web/HTML/Reference/Elements/main">main</a></code
        >, <code><a href="/de/docs/Web/HTML/Reference/Elements/nav">nav</a></code> oder
        <code><a href="/de/docs/Web/HTML/Reference/Elements/section">section</a></code>
        Elements oder eines Elements mit
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
