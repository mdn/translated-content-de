---
title: "<section>: Das generische Abschnittselement"
slug: Web/HTML/Reference/Elements/section
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<section>`**-Element [HTML](/de/docs/Web/HTML) stellt einen generischen, eigenständigen Abschnitt eines Dokuments dar, für den es kein spezifischeres semantisches Element gibt. Abschnitte sollten immer eine Überschrift haben, mit sehr wenigen Ausnahmen.

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

## Nutzungshinweise

Wie oben erwähnt, ist `<section>` ein generisches Abschnittselement und sollte nur verwendet werden, wenn es kein spezifischeres Element gibt, das es repräsentiert. Ein Navigationsmenü sollte beispielsweise in ein {{htmlelement("nav")}}-Element eingewickelt werden, aber eine Liste von Suchergebnissen oder eine Kartendarstellung und deren Steuerungselemente haben keine spezifischen Elemente und könnten innerhalb eines `<section>`-Elements platziert werden.

Betrachten Sie auch diese Fälle:

- Wenn der Inhalt des Elements eine eigenständige, atomare Inhaltseinheit darstellt, die als eigenständiges Stück syndiziert Sinn macht (z. B. ein Blogbeitrag oder Blogkommentar oder ein Zeitungsartikel), wäre das {{HTMLElement("article")}}-Element eine bessere Wahl.
- Wenn der Inhalt nützliche, tangentiale Informationen darstellt, die neben dem Hauptinhalt funktionieren, aber nicht direkt Teil davon sind (wie verwandte Links oder eine Autoren-Biografie), verwenden Sie ein {{HTMLElement("aside")}}.
- Wenn der Inhalt den Hauptinhalt eines Dokuments darstellt, verwenden Sie {{HTMLElement("main")}}.
- Wenn Sie das Element nur als Styling-Wrapper verwenden, verwenden Sie stattdessen ein {{HTMLElement("div")}}.

Um es zu wiederholen, jeder `<section>` sollte identifiziert werden, typischerweise indem eine Überschrift ({{HTMLElement("Heading_Elements", "h1")}} - {{HTMLElement("Heading_Elements", "h6")}}-Element) als Kind des `<section>`-Elements enthalten wird, wann immer möglich. Siehe unten Beispiele, wo Sie möglicherweise ein `<section>` ohne eine Überschrift sehen könnten.

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

Umstände, in denen Sie `<section>` ohne eine Überschrift sehen könnten, finden sich typischerweise in Webanwendungs-/UI-Abschnitten und nicht in traditionellen Dokumentstrukturen. In einem Dokument macht es eigentlich keinen Sinn, einen separaten Inhaltsabschnitt ohne eine Überschrift zu haben, die den Inhalt beschreibt. Solche Überschriften sind für alle Leser nützlich, aber besonders für Benutzer von unterstützenden Technologien wie Bildschirmlesern, und sie sind auch gut für SEO.

Betrachten Sie jedoch einen sekundären Navigationsmechanismus. Wenn die globale Navigation bereits in ein `<nav>`-Element eingewickelt ist, könnten Sie ein Vorher-/Nächstes-Menü in ein `<section>` einwickeln:

```html
<section>
  <a href="#">Previous article</a>
  <a href="#">Next article</a>
</section>
```

Oder wie wäre es mit einer Art Buttonleiste zur Steuerung Ihrer App? Diese könnte möglicherweise keine Überschrift benötigen, aber es ist dennoch ein eigenständiger Abschnitt des Dokuments:

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

Je nach Inhalt könnte das Hinzufügen einer Überschrift auch gut für SEO sein, daher ist es eine Überlegung wert.

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
          >Fließinhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#sectioning_content"
          >Abschnittsinhalte</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content">wahrnehmbarer Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließinhalt</a
        > akzeptiert. Beachten Sie, dass ein <code>&#x3C;section></code>-Element kein
        Nachfahre eines {{HTMLElement("address")}}-Elements sein darf.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/region_role"
            >region</a
          ></code
        >
        wenn das Element einen
        <a
          href="/de/docs/Glossary/Accessible_name"
          >zugänglichen Namen</a
        > hat, sonst
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
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
- [Verwendung von HTML-Abschnitten und -Strukturen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [ARIA: Rollenregion](/de/docs/Web/Accessibility/ARIA/Reference/Roles/region_role)
- [Warum Sie HTML5-Artikel über Abschnitt wählen sollten](https://www.smashingmagazine.com/2020/01/html5-article-section/), von Bruce Lawson
