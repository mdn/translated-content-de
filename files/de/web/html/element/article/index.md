---
title: "<article>: Das Article-Inhaltselement"
slug: Web/HTML/Element/article
l10n:
  sourceCommit: 829db137a01feb14af7beaec178a3ea0118b4777
---

{{HTMLSidebar}}

Das **`<article>`** [HTML](/de/docs/Web/HTML) Element repräsentiert eine in sich geschlossene Komposition in einem Dokument, einer Seite, einer Anwendung oder einer Website, die unabhängig verteilt oder wiederverwendet werden soll (z. B. in Syndikation). Beispiele umfassen: einen Forumsbeitrag, einen Magazin- oder Zeitungsartikel, einen Blogeintrag, eine Produktkarte, einen von Nutzern eingereichten Kommentar, ein interaktives Widget oder Gadget oder jedes andere unabhängige Inhaltselement.

{{EmbedInteractiveExample("pages/tabbed/article.html", "tabbed-standard")}}

Ein gegebenes Dokument kann mehrere Artikel enthalten; zum Beispiel, auf einem Blog, das die Texte jedes Artikels nacheinander zeigt, während der Leser scrollt, würde jeder Beitrag in einem `<article>` Element enthalten sein, möglicherweise mit einem oder mehreren `<section>`s darin.

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Nutzungshinweise

- Jedes `<article>` sollte identifiziert werden, typischerweise durch Einfügen einer Überschrift ([`<h1>` - `<h6>`](/de/docs/Web/HTML/Element/Heading_Elements) Element) als ein Kind des `<article>` Elements.
- Wenn ein `<article>` Element verschachtelt ist, repräsentiert das innere Element einen Artikel, der mit dem äußeren Element in Zusammenhang steht. Zum Beispiel können die Kommentare eines Blogposts `<article>` Elemente sein, die in dem `<article>`, das den Blogpost repräsentiert, verschachtelt sind.
- Autoreninformationen eines `<article>` Elements können durch das {{HTMLElement("address")}} Element bereitgestellt werden, jedoch gilt dies nicht für verschachtelte `<article>` Elemente.
- Das Veröffentlichungsdatum und die Uhrzeit eines `<article>` Elements können durch das [`datetime`](/de/docs/Web/HTML/Element/time#datetime) Attribut eines {{HTMLElement("time")}} Elements beschrieben werden.

## Beispiele

```html
<article class="film_review">
  <h2>Jurassic Park</h2>
  <section class="main_review">
    <h3>Review</h3>
    <p>Dinos were great!</p>
  </section>
  <section class="user_reviews">
    <h3>User reviews</h3>
    <article class="user_review">
      <h4>Too scary!</h4>
      <p>Way too scary for me.</p>
      <footer>
        <p>
          Posted on
          <time datetime="2015-05-16 19:00">May 16</time>
          by Lisa.
        </p>
      </footer>
    </article>
    <article class="user_review">
      <h4>Love the dinos!</h4>
      <p>I agree, dinos are my favorite.</p>
      <footer>
        <p>
          Posted on
          <time datetime="2015-05-17 19:00">May 17</time>
          by Tom.
        </p>
      </footer>
    </article>
  </section>
  <footer>
    <p>
      Posted on
      <time datetime="2015-05-15 19:00">May 15</time>
      by Staff.
    </p>
  </footer>
</article>
```

### Ergebnis

{{EmbedLiveSample('Examples','','570')}}

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
        <a
          href="/de/docs/Web/HTML/Content_categories#sectioning_content"
          >gliedernder Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#palpable_content"
          >spürbarer Inhalt</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Anfangs- als auch der Endtag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        > akzeptiert. Beachten Sie, dass ein <code>&#x3C;article></code> Element kein
        Nachkomme eines {{HTMLElement("address")}} Elements sein darf.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/article_role"
            >article</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/application_role"><code>application</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/document_role"><code>document</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/feed_role"><code>feed</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/main_role"><code>main</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/region_role"><code>region</code></a>
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

- Andere mit Abschnitten verbundene Elemente: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("section")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}}
- [Verwendung von HTML-Abschnitten und Umrissen](/de/docs/Web/HTML/Element/Heading_Elements)
