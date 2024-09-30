---
title: "<section>: Das generische Abschnittselement"
slug: Web/HTML/Element/section
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTMLSidebar}}

Das **`<section>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen generischen, eigenständigen Abschnitt eines Dokuments, der kein spezifischeres semantisches Element hat, um es zu repräsentieren. Abschnitte sollten immer ein Überschriftselement besitzen, mit nur wenigen Ausnahmen.

{{EmbedInteractiveExample("pages/tabbed/section.html", "tabbed-standard")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Nutzungshinweise

Wie oben erwähnt, ist `<section>` ein generisches Abschnittselement und sollte nur verwendet werden, wenn es kein spezifischeres Element zur Darstellung gibt. Zum Beispiel sollte ein Navigationsmenü in ein {{htmlelement("nav")}}-Element eingeschlossen werden, aber eine Liste von Suchergebnissen oder eine Kartendarstellung mit ihren Steuerelementen haben keine spezifischen Elemente und könnten innerhalb eines `<section>` platziert werden.

Berücksichtigen Sie auch diese Fälle:

- Wenn der Inhalt des Elements eine eigenständige, atomare Einheit von Inhalten darstellt, die sinnvollerweise als eigenständiges Stück syndiziert werden kann (z. B. ein Blogpost oder Blogkommentar, oder ein Zeitungsartikel), wäre das {{HTMLElement("article")}}-Element die bessere Wahl.
- Wenn der Inhalt nützliche, tangentiale Informationen darstellt, die neben dem Hauptinhalt funktionieren, aber nicht direkt Teil davon sind (wie verwandte Links oder eine Autorenbiografie), verwenden Sie ein {{HTMLElement("aside")}}.
- Wenn der Inhalt den Hauptinhaltsbereich eines Dokuments darstellt, verwenden Sie {{HTMLElement("main")}}.
- Wenn Sie das Element nur als Stilrahmen verwenden, verwenden Sie stattdessen ein {{HTMLElement("div")}}.

Um dies nochmals zu bestätigen, sollte jedes `<section>` identifiziert werden, typischerweise durch die Einbeziehung einer Überschrift ({{HTMLElement("Heading_Elements", "h1")}} - {{HTMLElement("Heading_Elements", "h6")}}) als Kind des `<section>`-Elements, wann immer dies möglich ist. Unten finden Sie Beispiele, wo Sie gegebenenfalls ein `<section>` ohne Überschrift sehen könnten.

## Beispiele

### Einfaches Nutzungsbeispiel

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

Umstände, in denen Sie `<section>` ohne eine Überschrift sehen könnten, finden sich typischerweise in Webanwendungen/UI-Bereichen anstelle traditioneller Dokumentenstrukturen. In einem Dokument macht es wenig Sinn, einen separaten Abschnitt von Inhalten ohne Überschrift zur Beschreibung seiner Inhalte zu haben. Solche Überschriften sind für alle Leser nützlich, besonders jedoch für Benutzer von unterstützenden Technologien wie Bildschirmlesegeräten, und sie sind auch gut für SEO.

Bedenken Sie jedoch einen sekundären Navigationsmechanismus. Wenn die globale Navigation bereits in ein `<nav>`-Element eingeschlossen ist, könnten Sie ein vorheriges/nächstes Menü möglicherweise in ein `<section>` einwickeln:

```html
<section>
  <a href="#">Previous article</a>
  <a href="#">Next article</a>
</section>
```

Oder wie wäre es mit einer Art Buttonbar zur Steuerung Ihrer Anwendung? Diese möchte möglicherweise nicht unbedingt eine Überschrift, ist jedoch immer noch ein eigenständiger Abschnitt des Dokuments:

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

Abhängig vom Inhalt könnte die Einbeziehung einer Überschrift auch gut für SEO sein, daher ist dies eine Überlegung wert.

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
          >Abschnittsinhalte</a
        >, <a href="/de/docs/Web/HTML/Content_categories#palpable_content">fühlbarer Inhalt</a>.
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
      <td>Keine, sowohl das Anfangs- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        > akzeptiert. Beachten Sie, dass ein <code>&#x3C;section></code>-Element kein
        Nachkomme eines {{HTMLElement("address")}}-Elements sein darf.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/region_role"
            >Region</a
          ></code
        >
        wenn das Element einen
        <a
          href="/de/docs/Glossary/Accessible_name"
          >zugänglichen Namen</a
        > hat, ansonsten
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/generic_role"
            >generisch</a
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

- Weitere abschnittsbezogene Elemente: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}}
- [Verwendung von HTML-Abschnitten und Umrissen](/de/docs/Web/HTML/Element/Heading_Elements)
- [ARIA: Region Rolle](/de/docs/Web/Accessibility/ARIA/Roles/region_role)
- [Warum Sie HTML5 article statt section verwenden sollten](https://www.smashingmagazine.com/2020/01/html5-article-section/), von Bruce Lawson
