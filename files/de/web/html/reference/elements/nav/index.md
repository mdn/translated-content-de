---
title: "<nav>: Das Navigationselement"
slug: Web/HTML/Reference/Elements/nav
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<nav>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen Abschnitt einer Seite, dessen Zweck darin besteht, Navigationslinks bereitzustellen, entweder innerhalb des aktuellen Dokuments oder zu anderen Dokumenten. Häufige Beispiele für Navigationsabschnitte sind Menüs, Inhaltsverzeichnisse und Indizes.

{{InteractiveExample("HTML Demo: &lt;nav&gt;", "tabbed-standard")}}

```html interactive-example
<nav class="crumbs">
  <ol>
    <li class="crumb"><a href="#">Bikes</a></li>
    <li class="crumb"><a href="#">BMX</a></li>
    <li class="crumb">Jump Bike 3000</li>
  </ol>
</nav>

<h1>Jump Bike 3000</h1>
<p>
  This BMX bike is a solid step into the pro world. It looks as legit as it
  rides and is built to polish your skills.
</p>
```

```css interactive-example
nav {
  border-bottom: 1px solid black;
}

.crumbs ol {
  list-style-type: none;
  padding-left: 0;
}

.crumb {
  display: inline-block;
}

.crumb a::after {
  display: inline-block;
  color: #000;
  content: ">";
  font-size: 80%;
  font-weight: bold;
  padding: 0 3px;
}
```

## Attribute

Dieses Element beinhaltet nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Nutzungshinweise

- Es ist nicht notwendig, dass alle Links in einem `<nav>`-Element enthalten sind. `<nav>` ist nur für einen größeren Block von Navigationslinks gedacht; typischerweise hat das {{HTMLElement("footer")}}-Element oft eine Liste von Links, die nicht in einem `<nav>`-Element sein müssen.
- Ein Dokument kann mehrere `<nav>`-Elemente haben, zum Beispiel eines für die Seitennavigation und eines für die Intra-Seiten-Navigation. [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) kann in einem solchen Fall verwendet werden, um die Barrierefreiheit zu verbessern, siehe [Beispiel](/de/docs/Web/HTML/Reference/Elements/Heading_Elements#labeling_section_content).
- Benutzeragenten, wie Bildschirmleser für behinderte Benutzer, können dieses Element verwenden, um zu bestimmen, ob die erste Darstellung von nur-Navigationsinhalten weggelassen werden soll.

## Beispiele

In diesem Beispiel wird ein `<nav>`-Block verwendet, um eine ungeordnete Liste ({{HTMLElement("ul")}}) von Links zu enthalten. Mit geeignetem CSS kann dies als Seitenleiste, Navigationsleiste oder Dropdown-Menü dargestellt werden.

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

Die Semantik des `nav`-Elements besteht darin, Links bereitzustellen. Jedoch muss ein `nav`-Element nicht unbedingt eine Liste enthalten; es kann auch andere Arten von Inhalten enthalten. In diesem Navigationsblock werden Links im Fließtext bereitgestellt:

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
          >Strukturierungsinhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role"
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
- [Abschnitte und Gliederungen eines HTML-Dokuments](/de/docs/Web/HTML/Reference/Elements/Heading_Elements).
- [ARIA: Navigationsrolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role)
