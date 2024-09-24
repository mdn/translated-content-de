---
title: "<section>: Das generische Abschnittselement"
slug: Web/HTML/Element/section
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTMLSidebar}}

Das **`<section>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen generischen eigenständigen Abschnitt eines Dokuments, der kein spezifischeres semantisches Element zur Darstellung hat. Abschnitte sollten immer eine Überschrift haben, mit sehr wenigen Ausnahmen.

{{EmbedInteractiveExample("pages/tabbed/section.html", "tabbed-standard")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Wie oben erwähnt, ist `<section>` ein generisches Abschnittselement und sollte nur verwendet werden, wenn es kein spezifischeres Element zur Darstellung gibt. Ein Navigationsmenü sollte zum Beispiel in ein {{htmlelement("nav")}}-Element eingebettet werden, aber eine Liste von Suchergebnissen oder eine Kartenanzeige und deren Steuerungen haben keine spezifischen Elemente und könnten in ein `<section>` eingefügt werden.

Berücksichtigen Sie auch folgende Fälle:

- Wenn die Inhalte des Elements eine eigenständige, atomare Inhaltseinheit darstellen, die als eigenständiges Stück syndiziert sinnvoll ist (z.B. ein Blogbeitrag oder Blogkommentar, oder ein Zeitungsartikel), wäre das {{HTMLElement("article")}}-Element die bessere Wahl.
- Wenn die Inhalte nützliche, tangentiale Informationen darstellen, die neben dem Hauptinhalt funktionieren, aber nicht direkt Teil davon sind (wie verwandte Links oder eine Autorbiografie), verwenden Sie ein {{HTMLElement("aside")}}.
- Wenn die Inhalte den Hauptinhaltbereich eines Dokuments repräsentieren, verwenden Sie {{HTMLElement("main")}}.
- Wenn Sie das Element nur als Stil-Wrapper verwenden, nutzen Sie stattdessen ein {{HTMLElement("div")}}.

Um es zu wiederholen, jedes `<section>` sollte identifiziert werden, typischerweise durch das Einfügen einer Überschrift ({{HTMLElement("Heading_Elements", "h1")}} - {{HTMLElement("Heading_Elements", "h6")}} Element) als Kind des `<section>` Elements, wann immer möglich. Siehe unten Beispiele, wo Sie ein `<section>` ohne Überschrift sehen könnten.

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

### Nutzung eines Abschnitts ohne Überschrift

Umstände, in denen Sie `<section>` ohne Überschrift sehen könnten, finden sich typischerweise in Webanwendungen/UI-Teilen und nicht in traditionellen Dokumentstrukturen. In einem Dokument macht es keinen wirklichen Sinn, einen separaten Inhaltsabschnitt ohne eine beschreibende Überschrift zu haben. Solche Überschriften sind für alle Leser nützlich, besonders aber für Benutzer von unterstützenden Technologien wie Bildschirmlesegeräten. Sie sind auch gut für SEO.

Betrachten Sie jedoch einen sekundären Navigationsmechanismus. Wenn die globale Navigation bereits in ein `<nav>` Element eingebettet ist, können Sie möglicherweise ein vorheriges/nächstes Menü in ein `<section>` einbetten:

```html
<section>
  <a href="#">Previous article</a>
  <a href="#">Next article</a>
</section>
```

Oder wie wäre es mit einer Art von Schaltflächenleiste zur Steuerung Ihrer App? Diese möchte nicht unbedingt eine Überschrift, ist aber dennoch ein klarer Abschnitt des Dokuments:

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

Je nach Inhalt könnte das Einfügen einer Überschrift auch für SEO vorteilhaft sein, daher ist es eine Überlegung wert.

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
          >Sektionierungs-Inhalt</a
        >, <a href="/de/docs/Web/HTML/Content_categories#palpable_content">wahrnehmbarer Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
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
      <th scope="row">Zulässige Eltern</th>
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
        > hat, sonst
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
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
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Andere abschnittsbezogene Elemente: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}}
- [Verwendung von HTML-Abschnitten und Umrissen](/de/docs/Web/HTML/Element/Heading_Elements)
- [ARIA: Regionsrolle](/de/docs/Web/Accessibility/ARIA/Roles/region_role)
- [Warum Sie den HTML5 Artikel über Abschnitt wählen sollten](https://www.smashingmagazine.com/2020/01/html5-article-section/), von Bruce Lawson
