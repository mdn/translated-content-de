---
title: "<section>: Das generische Abschnittselement"
slug: Web/HTML/Element/section
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

Das **`<section>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen generischen eigenständigen Abschnitt eines Dokuments, für den es kein spezifischeres semantisches Element gibt. Abschnitte sollten immer eine Überschrift haben, mit sehr wenigen Ausnahmen.

{{EmbedInteractiveExample("pages/tabbed/section.html", "tabbed-standard")}}

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Anwendungshinweise

Wie oben erwähnt, ist `<section>` ein generisches Gliederungselement und sollte nur verwendet werden, wenn es kein spezifischeres Element gibt, das es repräsentiert. Ein Navigationsmenü sollte zum Beispiel in ein {{htmlelement("nav")}}-Element eingebettet werden, aber eine Liste von Suchergebnissen oder eine Kartenanzeige mit Steuerelementen haben keine spezifischen Elemente und könnten in ein `<section>` eingefügt werden.

Berücksichtigen Sie auch diese Fälle:

- Wenn der Inhalt des Elements eine eigenständige, atomare Inhaltseinheit darstellt, die sich als unabhängiges Stück sinnvoll syndizieren lässt (z.B. ein Blogpost oder Blogkommentar oder ein Zeitungsartikel), wäre das {{HTMLElement("article")}}-Element die bessere Wahl.
- Wenn der Inhalt nützliche, nebensächliche Informationen darstellt, die neben dem Hauptinhalt funktionieren, aber nicht direkt Teil davon sind (wie verwandte Links oder eine Autorenbiografie), verwenden Sie ein {{HTMLElement("aside")}}.
- Wenn der Inhalt den Hauptinhaltsbereich eines Dokuments darstellt, verwenden Sie {{HTMLElement("main")}}.
- Wenn Sie das Element nur als Styling-Wrapper verwenden, verwenden Sie stattdessen ein {{HTMLElement("div")}}.

Um es noch einmal zu betonen: Jedes `<section>` sollte identifiziert werden, typischerweise durch Einfügen einer Überschrift ({{HTMLElement("Heading_Elements", "h1")}} - {{HTMLElement("Heading_Elements", "h6")}}-Element) als untergeordnetes Element des `<section>`, wann immer möglich. Im Folgenden finden Sie Beispiele, wo Sie ein `<section>` ohne eine Überschrift sehen könnten.

## Beispiele

### Einfaches Anwendungsbeispiel

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

Fälle, in denen Sie `<section>` ohne eine Überschrift sehen könnten, finden sich typischerweise in Bereichen von Webanwendungen/UI eher als in traditionellen Dokumentstrukturen. In einem Dokument macht es wenig Sinn, einen separaten Inhaltsabschnitt ohne eine Überschrift zu haben, die seinen Inhalt beschreibt. Solche Überschriften sind für alle Leser nützlich, insbesondere aber für Benutzer unterstützender Technologien wie Screenreader und sie sind auch gut für SEO.

Erwägen Sie jedoch einen sekundären Navigationsmechanismus. Wenn die globale Navigation bereits in ein `<nav>`-Element eingebettet ist, könnten Sie ein Vor-/Zurück-Menü in ein `<section>` einbetten:

```html
<section>
  <a href="#">Previous article</a>
  <a href="#">Next article</a>
</section>
```

Oder was ist mit einer Art von Symbolleiste zur Steuerung Ihrer Anwendung? Möglicherweise möchte diese nicht unbedingt eine Überschrift, ist aber dennoch ein eigenständiger Abschnitt des Dokuments:

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

Je nach Inhalt könnte das Einschließen einer Überschrift auch gut für SEO sein, daher ist es eine Option, die in Betracht gezogen werden sollte.

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
          >Flow-Inhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#sectioning_content"
          >Gliederungsinhalt</a
        >, <a href="/de/docs/Web/HTML/Content_categories#palpable_content">greifbarer Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flow-Inhalt</a
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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flow-Inhalt</a
        > akzeptiert. Beachten Sie, dass ein <code>&#x3C;section></code>-Element kein Nachfahre eines {{HTMLElement("address")}}-Elements sein darf.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/region_role"
            >region</a
          ></code
        >
        wenn das Element einen
        <a
          href="/de/docs/Glossary/Accessible_name"
          >zugänglichen Namen</a
        > hat, andernfalls
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/alert_role"><code>alert</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/alertdialog_role"><code>alertdialog</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/application_role"><code>application</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/banner_role"><code>banner</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/complementary_role"><code>complementary</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/contentinfo_role"><code>contentinfo</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/dialog_role"><code>dialog</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/document_role"><code>document</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/feed_role"><code>feed</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/log_role"><code>log</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/main_role"><code>main</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/marquee_role"><code>marquee</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/navigation_role"><code>navigation</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/note_role"><code>note</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/search_role"><code>search</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/status_role"><code>status</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role"><code>tabpanel</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Interface</th>
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
- [Verwendung von HTML-Abschnitten und Gliederungen](/de/docs/Web/HTML/Element/Heading_Elements)
- [ARIA: Region-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/region_role)
- [Warum Sie HTML5 `<article>` über <section> wählen sollten](https://www.smashingmagazine.com/2020/01/html5-article-section/), von Bruce Lawson
