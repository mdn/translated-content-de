---
title: "<section>: Das generische Abschnitts-Element"
slug: Web/HTML/Element/section
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTMLSidebar}}

Das **`<section>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen generischen, eigenständigen Abschnitt eines Dokuments, für den es kein spezifischeres semantisches Element gibt. Abschnitte sollten immer eine Überschrift haben, mit nur sehr wenigen Ausnahmen.

{{EmbedInteractiveExample("pages/tabbed/section.html", "tabbed-standard")}}

## Attribute

Dieses Element beinhaltet nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Hinweise zur Verwendung

Wie oben erwähnt, ist `<section>` ein generisches Gliederungselement und sollte nur verwendet werden, wenn es kein spezifischeres Element gibt. Ein Navigationsmenü sollte beispielsweise in ein {{htmlelement("nav")}}-Element eingefasst werden, aber eine Ergebnisliste einer Suche oder eine Kartendisplay-Anzeige mit Steuerungselementen haben keine spezifischen Elemente und könnten in einem `<section>` untergebracht werden.

Berücksichtigen Sie auch diese Fälle:

- Wenn der Inhalt des Elements eine eigenständige, atomare Einheit darstellt, die als eigenständiges Stück sinnvoll verteilt werden kann (z.B. ein Blog-Beitrag oder Blog-Kommentar oder eine Zeitungsartikel), wäre das {{HTMLElement("article")}}-Element eine bessere Wahl.
- Wenn der Inhalt nützliche ergänzende Informationen darstellt, die neben dem Hauptinhalt funktionieren, aber nicht direkt dazu gehören (wie verwandte Links oder eine Autorbiografie), verwenden Sie {{HTMLElement("aside")}}.
- Wenn der Inhalt den Hauptinhaltbereich eines Dokuments darstellt, verwenden Sie {{HTMLElement("main")}}.
- Wenn Sie das Element nur als Styling-Wrapper verwenden, nutzen Sie stattdessen ein {{HTMLElement("div")}}.

Nochmals zur Wiederholung, jedes `<section>` sollte identifiziert werden, typischerweise durch die Einbeziehung einer Überschrift ({{HTMLElement("Heading_Elements", "h1")}} - {{HTMLElement("Heading_Elements", "h6")}}-Element) als Kind des `<section>`-Elements, wann immer möglich. Sehen Sie unten Beispiele, wo Sie eventuell ein `<section>` ohne Überschrift sehen könnten.

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

Umstände, bei denen Sie `<section>` ohne eine Überschrift verwenden könnten, finden sich typischerweise in Webanwendungen/UI-Sektionen und nicht in traditionellen Dokumentstrukturen. In einem Dokument macht es wirklich keinen Sinn, einen separaten Inhaltsbereich ohne eine Überschrift zu haben, die dessen Inhalt beschreibt. Solche Überschriften sind für alle Leser nützlich, insbesondere aber für Nutzer von unterstützenden Technologien wie Screenreadern, und sie sind auch gut für SEO.

Betrachten Sie jedoch einen sekundären Navigationsmechanismus. Wenn die globale Navigation bereits in ein `<nav>`-Element gewickelt ist, könnten Sie ein Vorwärts/Rückwärts-Menü in ein `<section>` einbinden:

```html
<section>
  <a href="#">Previous article</a>
  <a href="#">Next article</a>
</section>
```

Oder wie wäre es mit einer Art von Schaltflächenleiste, um Ihre App zu steuern? Diese möchte möglicherweise keine Überschrift haben, ist aber dennoch ein eigenständiger Abschnitt des Dokuments:

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

## Technische Übersicht

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
          >Fließender Inhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#sectioning_content"
          >Gliederungsinhalt</a
        >, <a href="/de/docs/Web/HTML/Content_categories#palpable_content">fühlbarer Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >fließenden Inhalt</a
        > akzeptiert. Beachten Sie, dass ein <code>&#x3C;section></code>-Element kein Nachfahre eines {{HTMLElement("address")}}-Elements sein darf.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
        > hat, ansonsten
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
- [Verwendung von HTML-Abschnitten und Gliederungen](/de/docs/Web/HTML/Element/Heading_Elements)
- [ARIA: Regionsrolle](/de/docs/Web/Accessibility/ARIA/Roles/region_role)
- [Warum Sie HTML5 article Über section wählen sollten](https://www.smashingmagazine.com/2020/01/html5-article-section/), von Bruce Lawson
