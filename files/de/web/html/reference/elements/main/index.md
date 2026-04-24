---
title: "`<main>` HTML Hauptelement"
short-title: <main>
slug: Web/HTML/Reference/Elements/main
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<main>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert den dominierenden Inhalt des {{HTMLElement("body")}} eines Dokuments. Der Hauptinhalt besteht aus Inhalten, die direkt mit dem zentralen Thema eines Dokuments oder der zentralen Funktionalität einer Anwendung verbunden sind oder diese erweitern.

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

Ein Dokument darf nicht mehr als ein `<main>`-Element haben, das nicht das [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden)-Attribut spezifiziert hat.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Nutzungshinweise

Der Inhalt eines `<main>`-Elements sollte einzigartig für das Dokument sein. Inhalte, die in einer Reihe von Dokumenten oder Dokumentabschnitten wiederholt werden, wie Seitenleisten, Navigationslinks, Copyright-Informationen, Seitensymbole und Suchformulare, sollten nicht enthalten sein, es sei denn, das Suchformular ist die Hauptfunktion der Seite.

`<main>` trägt nicht zur Strukturierung des Dokuments bei; das heißt, anders als Elemente wie {{HTMLElement("body")}} oder Überschriftselemente wie {{HTMLElement("Heading_Elements", "h2")}}, beeinflusst `<main>` nicht das Strukturkonzept des {{Glossary("DOM", "DOMs")}} der Seite. Es ist rein informativ.

## Barrierefreiheit

### Landmark

Das `<main>`-Element verhält sich wie eine [`main`-landmark](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role) Rolle. [Landmarks](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles) können von unterstützenden Technologien genutzt werden, um schnell große Abschnitte des Dokuments zu identifizieren und zu navigieren. Es wird bevorzugt, das `<main>`-Element zu verwenden, anstatt `role="main"` zu deklarieren, es sei denn, es gibt Bedenken hinsichtlich der [Unterstützung älterer Browser](#browser-kompatibilität).

### Navigation überspringen

Navigation überspringen, auch bekannt als "skipnav", ist eine Technik, die es einem Benutzer unterstützender Technologien ermöglicht, schnell große Abschnitte wiederholter Inhalte (Hauptnavigation, Info-Banner usw.) zu überspringen. Dies ermöglicht es dem Benutzer, den Hauptinhalt der Seite schneller zu erreichen.

Das Hinzufügen eines [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attributs zum `<main>`-Element ermöglicht, dass es das Ziel eines Navigations-Skip-Links wird.

```html
<body>
  <a href="#main-content">Skip to main content</a>

  <!-- navigation and header content -->

  <main id="main-content">
    <!-- main page content -->
  </main>
</body>
```

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)

### Lesemodus

Die Lesemodus-Funktionalität des Browsers sucht nach dem Vorhandensein des `<main>`-Elements sowie von [Überschriften](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und [Inhaltsabschnitten](/de/docs/Web/HTML/Reference/Elements#content_sectioning), um Inhalte in eine spezialisierte Leseransicht umzuwandeln.

- [Websites für den Safari-Lesemodus und andere Lese-Apps erstellen.](https://medium.com/@mandy.michael/building-websites-for-safari-reader-mode-and-other-reading-apps-1562913c86c9)

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
          >Flussinhalte</a
        >, greifbare Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalte</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine; sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Wo
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalte</a
        >
        erwartet werden, aber nur, wenn es sich um ein
        <a
          href="https://html.spec.whatwg.org/multipage/grouping-content.html#hierarchically-correct-main-element"
          >hierarchisch korrektes <code>main</code>-Element</a
        > handelt.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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

- Grundlegende strukturelle Elemente: {{HTMLElement("html")}}, {{HTMLElement("head")}}, {{HTMLElement("body")}}
- Abschnittsbezogene Elemente: {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("footer")}}, {{HTMLElement("header")}}, oder {{HTMLElement("nav")}}
- [ARIA: Hauptrolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role)
