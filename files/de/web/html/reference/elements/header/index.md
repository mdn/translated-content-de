---
title: "`<header>` HTML-Header-Element"
short-title: <header>
slug: Web/HTML/Reference/Elements/header
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<header>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einleitende Inhalte, typischerweise eine Gruppe von einleitenden oder navigativen Hilfsmitteln. Es kann einige Überschriftenelemente enthalten, aber auch ein Logo, ein Suchformular, einen Autorennamen und andere Elemente.

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
    I love beagles <em>so</em> much! Like, really, a lot. They're adorable and
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

Wenn es nicht in [sektionsbildenden Inhalten](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content), {{htmlelement("main")}} oder in einem Element mit derselben ARIA-Rolle wie die implizite ARIA-Rolle dieser Elemente verschachtelt ist, dann hat das `<header>`-Element die gleiche Bedeutung wie die seitenweite [`banner`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role)-Landmarkenrolle. Es definiert einen globalen Seitenkopf, der normalerweise ein Logo, den Firmennamen, die Suchfunktion und möglicherweise die globale Navigation oder einen Slogan enthält. Es befindet sich in der Regel am oberen Rand der Seite.

Andernfalls, wenn es in den genannten Elementen verschachtelt ist, verliert es seinen Landmarkenstatus und stellt eine Gruppe von einleitenden oder navigativen Hilfselementen für den umgebenden Abschnitt dar. Es enthält normalerweise die Überschrift des umgebenden Abschnitts (ein `h1` – `h6` Element) und eine optionale Unterüberschrift, aber dies ist **nicht** erforderlich.

### Historische Nutzung

Das `<header>`-Element existierte ursprünglich ganz am Anfang von HTML für Überschriften. Es ist auf [der allerersten Website](https://info.cern.ch/) zu sehen. Irgendwann wurden Überschriften zu [`<h1>` bis `<h6>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), wodurch das `<header>`-Element frei war, eine andere Rolle zu übernehmen.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Barrierefreiheit

Das `<header>`-Element definiert eine [`banner`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role)-Landmarke, wenn sein Kontext das {{HTMLElement('body')}}-Element ist.

Wenn es innerhalb eines {{HTMLElement('article')}}, {{HTMLElement('main')}}, {{HTMLElement('section')}}, {{HTMLElement('nav')}}, {{HTMLElement('aside')}} oder eines Elements mit derselben ARIA-Rolle wie die implizite ARIA-Rolle dieser Elemente platziert wird, hat das `<header>`-Element stattdessen die [`generic`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role)-Rolle und gilt nicht mehr als Landmarke. In diesem Fall kann es nicht mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) beschriftet werden.

## Beispiele

### Seitenkopf

```html
<header>
  <h1>Main Page Title</h1>
  <img src="mdn-logo-sm.png" alt="MDN logo" />
</header>
```

#### Ergebnis

{{EmbedLiveSample('Page Header')}}

### Artikelkopf

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
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >, jedoch ohne <code>&#x3C;header></code>- oder
        {{HTMLElement("footer")}}-Nachkommen.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind verpflichtend.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        > akzeptiert. Beachten Sie, dass ein <code>&#x3C;header></code>-Element kein
        Nachkomme eines {{HTMLElement("address")}},
        {{HTMLElement("footer")}} oder eines anderen
        <code>&lt;header&gt;</code>-Elements sein darf.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role">Banner</a
        >, oder
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
          >generisch</a
        >
        wenn ein Nachkomme eines
        <code><a href="/de/docs/Web/HTML/Reference/Elements/article">article</a></code
        >, <code><a href="/de/docs/Web/HTML/Reference/Elements/aside">aside</a></code
        >, <code><a href="/de/docs/Web/HTML/Reference/Elements/main">main</a></code
        >, <code><a href="/de/docs/Web/HTML/Reference/Elements/nav">nav</a></code> oder
        <code><a href="/de/docs/Web/HTML/Reference/Elements/section">section</a></code>
        -Elements, oder eines Elements mit
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
        >-Rolle
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
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
