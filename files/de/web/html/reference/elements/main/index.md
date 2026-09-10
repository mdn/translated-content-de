---
title: "`<main>` HTML-Hauptelement"
short-title: <main>
slug: Web/HTML/Reference/Elements/main
l10n:
  sourceCommit: 100cf25d92d3953f3c70ecaa2af637d5e42179d8
---

Das [HTML](/de/docs/Web/HTML)-Element **`<main>`** repräsentiert den dominanten Inhalt des {{HTMLElement("body")}} eines Dokuments. Der Hauptinhaltsbereich besteht aus Inhalten, die direkt mit dem zentralen Thema eines Dokuments zusammenhängen oder dieses erweitern, oder aus der zentralen Funktionalität einer Anwendung.

{{InteractiveExample("HTML Demo: &lt;main&gt;", "tabbed-shorter")}}

```html interactive-example
<header>Gecko facts</header>

<main>
  <p>
    Geckos are a group of usually small, usually nocturnal lizards. They are
    found on every continent except Antarctica.
  </p>

  <p>
    Many species of gecko have adhesive toe pads which enable them to climb
    walls and even windows.
  </p>
</main>
```

```css interactive-example
header {
  font:
    bold 7vw "Arial",
    sans-serif;
}
```

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Hinweise zur Verwendung

Ein Dokument darf nicht mehr als ein `<main>`-Element enthalten, für das das Attribut [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden) nicht angegeben ist.

Der Inhalt eines `<main>`-Elements sollte für das Dokument eindeutig sein. Inhalte, die über eine Gruppe von Dokumenten oder Dokumentabschnitten hinweg wiederholt werden, wie Seitenleisten, Navigationslinks, Copyright-Informationen, Website-Logos und Suchformulare, sollten nicht enthalten sein, es sei denn, das Suchformular ist die Hauptfunktion der Seite.

`<main>` trägt nicht zur Gliederung des Dokuments bei; das heißt, im Gegensatz zu Elementen wie {{HTMLElement("body")}}, Überschriften wie {{HTMLElement("Heading_Elements", "h2")}} und Ähnlichem beeinflusst `<main>` nicht das {{Glossary("DOM", "DOM")}}-Konzept der Seitenstruktur. Es dient ausschließlich der Information.

## Barrierefreiheit

### Landmark

Das `<main>`-Element verhält sich wie die [`main`-Landmark-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role). [Landmarks](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles) können von assistiven Technologien verwendet werden, um große Abschnitte eines Dokuments schnell zu identifizieren und zu ihnen zu navigieren. Verwenden Sie vorzugsweise das `<main>`-Element statt `role="main"` zu deklarieren, sofern keine [Bedenken hinsichtlich der Unterstützung älterer Browser](#browser-kompatibilität) bestehen.

### Navigation überspringen

Das Überspringen der Navigation, auch als „skipnav“ bekannt, ist eine Technik, die es Nutzenden assistiver Technologien ermöglicht, große Bereiche wiederholter Inhalte (Hauptnavigation, Informationsbanner usw.) schnell zu überspringen. Dadurch können sie schneller auf den Hauptinhalt der Seite zugreifen.

Das Hinzufügen eines [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attributs zum `<main>`-Element ermöglicht es, dass dieses das Ziel eines Links zum Überspringen der Navigation ist.

```html
<body>
  <a href="#main-content">Skip to main content</a>

  <!-- navigation and header content -->

  <main id="main-content">
    <!-- main page content -->
  </main>
</body>
```

- [WebAIM: „Skip Navigation“-Links](https://webaim.org/techniques/skipnav/)

### Lesemodus

Die Lesemodus-Funktionalität von Browsern sucht beim Umwandeln von Inhalten in eine spezielle Leseansicht nach dem Vorhandensein des `<main>`-Elements sowie von [Überschriften](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und [Elementen zur Inhaltsgliederung](/de/docs/Web/HTML/Reference/Elements#content_sectioning).

- [Erstellen von Websites für den Safari-Reader-Modus und andere Lese-Apps.](https://medium.com/@mandy.michael/building-websites-for-safari-reader-mode-and-other-reading-apps-1562913c86c9)

## Beispiele

```html
<!-- other content -->

<main>
  <h1>Apples</h1>
  <p>The apple is the pomaceous fruit of the apple tree.</p>

  <article>
    <h2>Red Delicious</h2>
    <p>
      These bright red apples are the most common found in many supermarkets.
    </p>
    <p>…</p>
    <p>…</p>
  </article>

  <article>
    <h2>Granny Smith</h2>
    <p>These juicy, green apples make a great filling for apple pies.</p>
    <p>…</p>
    <p>…</p>
  </article>
</main>

<!-- other content -->
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

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
          >Flow content</a
        >, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Weglassen von Tags</th>
      <td>Keine; sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Elternelemente</th>
      <td>
        Dort, wo
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow content</a
        >
        erwartet wird, jedoch nur, wenn es sich um ein
        <a
          href="https://html.spec.whatwg.org/multipage/grouping-content.html#hierarchically-correct-main-element"
          >hierarchisch korrektes <code>main</code>-Element</a
        >
        handelt.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role"
            >main</a
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

- Grundlegende Strukturelemente: {{HTMLElement("html")}}, {{HTMLElement("head")}}, {{HTMLElement("body")}}
- Abschnittsbezogene Elemente: {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("footer")}}, {{HTMLElement("header")}} oder {{HTMLElement("nav")}}
- [ARIA: Main-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role)
