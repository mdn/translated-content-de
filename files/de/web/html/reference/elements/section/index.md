---
title: "`<section>` HTML generisches Abschnitts-Element"
short-title: <section>
slug: Web/HTML/Reference/Elements/section
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<section>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen generischen eigenständigen Abschnitt eines Dokuments, der kein spezifischeres semantisches Element hat, um ihn darzustellen. Abschnitte sollten immer eine Überschrift haben, mit sehr wenigen Ausnahmen.

{{InteractiveExample("HTML Demo: &lt;section&gt;", "tabbed-standard")}}

```html interactive-example
<h1>Choosing an Apple</h1>
<section>
  <h2>Introduction</h2>
  <p>
    This document provides a guide to help with the important task of choosing
    the correct Apple.
  </p>
</section>

<section>
  <h2>Criteria</h2>
  <p>
    There are many different criteria to be considered when choosing an Apple —
    size, color, firmness, sweetness, tartness...
  </p>
</section>
```

```css interactive-example
h1,
h2 {
  margin: 0;
}
```

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

Wie oben erwähnt, ist `<section>` ein generisches Gliederungselement und sollte nur verwendet werden, wenn es kein spezifischeres Element gibt, um es darzustellen. Als Beispiel sollte ein Navigationsmenü in ein {{htmlelement("nav")}}-Element eingebettet werden, aber eine Liste von Suchergebnissen oder eine Kartendarstellung und deren Steuerung haben keine spezifischen Elemente und könnten in ein `<section>` eingefügt werden.

Berücksichtigen Sie auch diese Fälle:

- Wenn der Inhalt des Elements eine eigenständige, atomare Einheit von Inhalten darstellt, die sinnvoll als eigenständiges Stück syndiziert werden kann (z.B. ein Blogbeitrag oder Blogkommentar oder ein Zeitungsartikel), wäre das {{HTMLElement("article")}}-Element die bessere Wahl.
- Wenn die Inhalte nützliche, tangentiale Informationen darstellen, die zusammen mit dem Hauptinhalt funktionieren, aber nicht direkt dazu gehören (wie verwandte Links oder eine Autorenbiografie), verwenden Sie ein {{HTMLElement("aside")}}.
- Wenn die Inhalte den Hauptinhaltsbereich eines Dokuments darstellen, verwenden Sie {{HTMLElement("main")}}.
- Wenn Sie das Element nur als Styling-Wrapper verwenden, benutzen Sie stattdessen ein {{HTMLElement("div")}}.

Um es zu wiederholen, jedes `<section>` sollte identifiziert werden, typischerweise durch die Einbeziehung einer Überschrift ({{HTMLElement("Heading_Elements", "h1")}} - {{HTMLElement("Heading_Elements", "h6")}} Element) als Kind des `<section>`-Elements, wo immer möglich. Siehe unten für Beispiele, wo Sie ein `<section>` ohne Überschrift sehen könnten.

## Beispiele

### Beispiel für grundsätzliche Verwendung

#### Vorher

```html
<div>
  <h2>Heading</h2>
  <p>Bunch of awesome content</p>
</div>
```

##### Ergebnis

{{EmbedLiveSample('Before')}}

#### Nachher

```html
<section>
  <h2>Heading</h2>
  <p>Bunch of awesome content</p>
</section>
```

##### Ergebnis

{{EmbedLiveSample('After')}}

### Verwendung eines Abschnitts ohne Überschrift

Umstände, in denen Sie `<section>` ohne Überschrift sehen könnten, sind typischerweise in Webanwendungen/UI-Abschnitten zu finden, nicht in traditionellen Dokumentstrukturen. In einem Dokument ergibt es keinen wirklichen Sinn, einen separaten Inhaltsabschnitt ohne eine Überschrift zu haben, um seinen Inhalt zu beschreiben. Solche Überschriften sind für alle Leser nützlich, insbesondere jedoch für Benutzer von unterstützenden Technologien wie Bildschirmlesegeräten, und sie sind auch gut für SEO.

Wenn Sie jedoch einen sekundären Navigationsmechanismus in Betracht ziehen, kann, wenn die globale Navigation bereits in ein `<nav>`-Element eingebettet ist, ein vorheriges/nächstes Menü in ein `<section>` eingebettet werden:

```html
<section>
  <a href="#">Previous article</a>
  <a href="#">Next article</a>
</section>
```

Oder was ist mit einer Art von Button-Leiste zur Steuerung Ihrer App? Dies möchte möglicherweise keine Überschrift, aber es ist dennoch ein eigenständiger Abschnitt des Dokuments:

```html
<section>
  <button class="reply">Reply</button>
  <button class="reply-all">Reply to all</button>
  <button class="fwd">Forward</button>
  <button class="del">Delete</button>
</section>
```

#### Ergebnis

{{EmbedLiveSample('Using a section without a heading')}}

Je nach Inhalt könnte die Einbeziehung einer Überschrift auch gut für SEO sein, daher ist es eine Überlegung wert.

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
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#sectioning_content"
          >Gliederungsinhalt</a
        >, <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content">wahrnehmbarer Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >.
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        > akzeptiert. Beachten Sie, dass ein <code>&#x3C;section></code>-Element kein
        Nachkomme eines {{HTMLElement("address")}}-Elements sein darf.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/region_role"
            >Region</a
          ></code
        >
        wenn das Element einen
        <a
          href="/de/docs/Glossary/Accessible_name"
          >zugänglichen Namen</a
        > hat, sonst
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
            >generisch</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role"><code>alert</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role"><code>alertdialog</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role"><code>application</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role"><code>banner</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role"><code>complementary</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role"><code>contentinfo</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role"><code>dialog</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/document_role"><code>document</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/feed_role"><code>feed</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/log_role"><code>log</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role"><code>main</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role"><code>marquee</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role"><code>navigation</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/note_role"><code>note</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role"><code>search</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role"><code>status</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role"><code>tabpanel</code></a>
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

- Andere abschnittsbezogene Elemente: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}}
- [Verwendung von HTML-Abschnitten und -Umrissen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [ARIA: Region Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/region_role)
- [Warum Sie HTML5 article über section wählen sollten](https://www.smashingmagazine.com/2020/01/html5-article-section/), von Bruce Lawson
