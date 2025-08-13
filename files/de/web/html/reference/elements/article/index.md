---
title: "<article>: Das Artikel-Inhaltselement"
slug: Web/HTML/Reference/Elements/article
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

Das **`<article>`**-Element repräsentiert eine eigenständige Zusammenstellung in einem Dokument, einer Seite, Anwendung oder Website, die dazu bestimmt ist, eigenständig verteilbar oder wiederverwendbar zu sein (z. B. in der Syndizierung). Beispiele umfassen: einen Forenbeitrag, einen Magazin- oder Zeitungsartikel, einen Blogeintrag, eine Produktkarte, einen von Nutzern eingesendeten Kommentar, ein interaktives Widget oder Gadget oder jeden anderen unabhängigen Inhaltsgegenstand.

{{InteractiveExample("HTML Demo: &lt;article&gt;", "tabbed-standard")}}

```html interactive-example
<article class="forecast">
  <h1>Weather forecast for Seattle</h1>
  <article class="day-forecast">
    <h2>03 March 2018</h2>
    <p>Rain.</p>
  </article>
  <article class="day-forecast">
    <h2>04 March 2018</h2>
    <p>Periods of rain.</p>
  </article>
  <article class="day-forecast">
    <h2>05 March 2018</h2>
    <p>Heavy rain.</p>
  </article>
</article>
```

```css interactive-example
.forecast {
  margin: 0;
  padding: 0.3rem;
  background-color: #eeeeee;
}

.forecast > h1,
.day-forecast {
  margin: 0.5rem;
  padding: 0.3rem;
  font-size: 1.2rem;
}

.day-forecast {
  background: right/contain content-box border-box no-repeat
    url("/shared-assets/images/examples/rain.svg") white;
}

.day-forecast > h2,
.day-forecast > p {
  margin: 0.2rem;
  font-size: 1rem;
}
```

Ein gegebenes Dokument kann mehrere Artikel enthalten; zum Beispiel auf einem Blog, der den Text jedes Artikels nacheinander zeigt, während der Leser scrollt, wäre jeder Beitrag in einem `<article>`-Element enthalten, möglicherweise mit einem oder mehreren `<section>`-Elementen darin.

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Nutzungshinweise

- Jedes `<article>` sollte identifiziert werden, typischerweise durch das Einschließen einer Überschrift (ein [`<h1>` - `<h6>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)-Element) als Kind des `<article>`-Elements.
- Wenn ein `<article>`-Element verschachtelt ist, repräsentiert das innere Element einen Artikel, der mit dem äußeren Element in Beziehung steht. Zum Beispiel können die Kommentare eines Blogbeitrags `<article>`-Elemente sein, die im `<article>` enthalten sind, das den Blogbeitrag repräsentiert.
- Autoreninformationen eines `<article>`-Elements können durch das {{HTMLElement("address")}}-Element bereitgestellt werden, aber das gilt nicht für verschachtelte `<article>`-Elemente.
- Das Veröffentlichungsdatum und die -zeit eines `<article>`-Elements können mit dem [`datetime`](/de/docs/Web/HTML/Reference/Elements/time#datetime)-Attribut eines {{HTMLElement("time")}}-Elements beschrieben werden.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließender Inhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#sectioning_content"
          >Sektionierender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >Greifbarer Inhalt</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließender Inhalt</a
        >.
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
          >fließenden Inhalt</a
        > akzeptiert. Beachten Sie, dass ein <code>&#x3C;article></code>-Element kein Nachfahre eines {{HTMLElement("address")}}-Elements sein darf.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/article_role"
            >article</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role"><code>application</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/document_role"><code>document</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/feed_role"><code>feed</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role"><code>main</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/region_role"><code>region</code></a>
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

- Andere sektionsbezogene Elemente: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("section")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}}
- [Verwendung von HTML-Sektionen und Umrissen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
