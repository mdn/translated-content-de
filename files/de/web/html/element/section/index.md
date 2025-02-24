---
title: "<section>: Das generische Abschnittselement"
slug: Web/HTML/Element/section
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<section>`**-[HTML](/de/docs/Web/HTML)-Element stellt einen generischen eigenständigen Abschnitt eines Dokuments dar, der kein spezifischeres semantisches Element zur Darstellung hat. Abschnitte sollten immer eine Überschrift haben, mit sehr wenigen Ausnahmen.

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

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Wie oben erwähnt, ist `<section>` ein generisches Abschnittselement und sollte nur verwendet werden, wenn es kein spezifischeres Element gibt, das es darstellt. Zum Beispiel sollte ein Navigationsmenü in ein {{htmlelement("nav")}}-Element eingebunden werden, aber eine Liste von Suchergebnissen oder eine Kartenanzeige mit Steuerungselementen haben keine spezifischen Elemente und könnten in ein `<section>` eingebunden werden.

Berücksichtigen Sie auch diese Fälle:

- Wenn der Inhalt des Elements eine eigenständige, atomare Einheit von Inhalten darstellt, die als eigenständiges Stück sinnvoll syndiziert werden können (z. B. ein Blogbeitrag oder -kommentar oder ein Zeitungsartikel), wäre das {{HTMLElement("article")}}-Element die bessere Wahl.
- Wenn die Inhalte nützliche, tangentiale Informationen darstellen, die neben den Hauptinhalten funktionieren, aber nicht direkt Teil davon sind (wie verwandte Links oder eine Autorenbiografie), verwenden Sie ein {{HTMLElement("aside")}}.
- Wenn die Inhalte den Hauptinhaltsbereich eines Dokuments darstellen, verwenden Sie {{HTMLElement("main")}}.
- Wenn Sie das Element nur als Stil-Wrapper verwenden, verwenden Sie stattdessen {{HTMLElement("div")}}.

Um es zu wiederholen, jedes `<section>` sollte identifiziert werden, in der Regel durch die Einbeziehung einer Überschrift ({{HTMLElement("Heading_Elements", "h1")}} - {{HTMLElement("Heading_Elements", "h6")}} Element) als Kindelelement des `<section>`-Elements, wann immer möglich. Siehe unten für Beispiele, wo Sie ein `<section>` ohne Überschrift sehen könnten.

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

### Nutzung eines Abschnitts ohne Überschrift

Umstände, in denen Sie `<section>` ohne eine Überschrift sehen, finden sich typischerweise in Webanwendungen/UI-Bereichen statt in traditionellen Dokumentstrukturen. In einem Dokument macht es keinen wirklichen Sinn, einen separaten Abschnitt von Inhalten ohne eine Überschrift zu haben, die dessen Inhalt beschreibt. Solche Überschriften sind für alle Leser nützlich, besonders aber für Benutzer von assistiven Technologien wie Screenreadern, und sie sind auch gut für SEO.

Betrachten Sie jedoch einen sekundären Navigationsmechanismus. Wenn die globale Navigation bereits in einem `<nav>`-Element eingebunden ist, könnten Sie sich vorstellen, ein vorheriges/nächstes Menü in ein `<section>` zu verpacken:

```html
<section>
  <a href="#">Previous article</a>
  <a href="#">Next article</a>
</section>
```

Oder was ist mit einer Art Schaltflächenleiste zur Steuerung Ihrer App? Diese möchten möglicherweise nicht unbedingt eine Überschrift, aber es ist immer noch ein eigenständiger Abschnitt des Dokuments:

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

Abhängig vom Inhalt könnte das Hinzufügen einer Überschrift auch gut für SEO sein, daher ist es eine Option, die in Betracht gezogen werden sollte.

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
        >, <a href="/de/docs/Web/HTML/Content_categories#palpable_content">fühlbare Inhalte</a>.
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
      <td>Keine, sowohl das Anfangs- als auch das Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        > akzeptiert. Beachten Sie, dass ein <code>&#x3C;section></code>-Element kein Nachkomme eines {{HTMLElement("address")}}-Elements sein darf.
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
        > hat, andernfalls
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

- Andere abschnittsbezogene Elemente: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}}
- [Verwendung von HTML-Abschnitten und Umrissen](/de/docs/Web/HTML/Element/Heading_Elements)
- [ARIA: Region-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/region_role)
- [Warum Sie lieber HTML5 article über section wählen sollten](https://www.smashingmagazine.com/2020/01/html5-article-section/), von Bruce Lawson
