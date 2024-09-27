---
title: "<nav>: Das Navigation Bereich-Element"
slug: Web/HTML/Element/nav
l10n:
  sourceCommit: 9f21f168c4f77a90e2d300c5aa26441ecd980058
---

{{HTMLSidebar}}

Das **`<nav>`**-[HTML](/de/docs/Web/HTML)-Element stellt einen Abschnitt einer Seite dar, dessen Zweck es ist, Navigationslinks bereitzustellen, entweder innerhalb des aktuellen Dokuments oder zu anderen Dokumenten. Häufige Beispiele für Navigationsabschnitte sind Menüs, Inhaltsverzeichnisse und Indizes.

{{EmbedInteractiveExample("pages/tabbed/nav.html", "tabbed-standard")}}

## Attribute

Dieses Element beinhaltet nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

- Es ist nicht notwendig, dass alle Links in einem `<nav>`-Element enthalten sind. `<nav>` ist nur für einen größeren Block von Navigationslinks gedacht; typischerweise enthält das {{HTMLElement("footer")}}-Element oft eine Liste von Links, die nicht in einem `<nav>`-Element enthalten sein müssen.
- Ein Dokument kann mehrere `<nav>`-Elemente haben, zum Beispiel eines für die Seitennavigation und eines für die Intranavigation. [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) kann in einem solchen Fall zur Förderung der Barrierefreiheit verwendet werden, siehe [Beispiel](/de/docs/Web/HTML/Element/Heading_Elements#labeling_section_content).
- Benutzeragenten, wie Bildschirmleseprogramme für behinderte Benutzer, können dieses Element verwenden, um festzustellen, ob die anfängliche Darstellung von reinem Navigationsinhalt übersprungen werden soll.

## Beispiele

In diesem Beispiel wird ein `<nav>`-Block verwendet, um eine ungeordnete Liste ({{HTMLElement("ul")}}) von Links zu enthalten. Mit angemessenem CSS kann dies als Seitenleiste, Navigationsleiste oder Dropdown-Menü präsentiert werden.

```html live-sample___unordered-list
<nav class="menu">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

{{EmbedLiveSample('unordered-list')}}

Die Semantik des `nav`-Elements besteht darin, Links bereitzustellen. Ein `nav`-Element muss jedoch keine Liste enthalten, es kann auch anderer Inhalt enthalten. In diesem Navigationsblock werden Links in Prosa bereitgestellt:

```html live-sample___prose
<nav>
  <h2>Navigation</h2>
  <p>
    You are on my home page. To the north lies <a href="/blog">my blog</a>, from
    whence the sounds of battle can be heard. To the east you can see a large
    mountain, upon which many <a href="/school">school papers</a> are littered.
    Far up this mountain you can spy a little figure who appears to be me,
    desperately scribbling a <a href="/school/thesis">thesis</a>.
  </p>
  <p>
    To the west are several exits. One fun-looking exit is labeled
    <a href="https://games.example.com/">"games"</a>. Another more
    boring-looking exit is labeled <a href="https://isp.example.net/">ISP™</a>.
  </p>
  <p>
    To the south lies a dark and dank <a href="/about">contacts page</a>.
    Cobwebs cover its disused entrance, and at one point you see a rat run
    quickly out of the page.
  </p>
</nav>
```

{{EmbedLiveSample('prose')}}

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
          >Gliederungsinhalt</a
        >, greifbarer Inhalt.
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
      <td>Keine, sowohl das Anfangs- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/navigation_role"
            >navigation</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
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

- Andere abschnittsbezogene Elemente: {{HTMLElement("body")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}};
- [Abschnitte und Gliederungen eines HTML-Dokuments](/de/docs/Web/HTML/Element/Heading_Elements).
- [ARIA: Navigationsrolle](/de/docs/Web/Accessibility/ARIA/Roles/navigation_role)
