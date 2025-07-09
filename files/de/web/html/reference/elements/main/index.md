---
title: "<main>: Das Hauptelement"
slug: Web/HTML/Reference/Elements/main
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<main>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert den dominanten Inhalt des {{HTMLElement("body")}} eines Dokuments. Der Hauptinhaltsbereich besteht aus Inhalten, die direkt mit dem zentralen Thema eines Dokuments in Verbindung stehen oder dieses erweitern, oder mit der zentralen Funktionalität einer Anwendung.

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
    bold 7vw Arial,
    sans-serif;
}
```

Ein Dokument darf nicht mehr als ein `<main>`-Element haben, das nicht das [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden)-Attribut spezifiziert.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Hinweise zur Nutzung

Der Inhalt eines `<main>`-Elements sollte für das Dokument einzigartig sein. Inhalte, die über mehrere Dokumente oder Dokumentabschnitte hinweg wiederholt werden, wie Seitenleisten, Navigationslinks, Urheberrechtsinformationen, Site-Logos und Suchformulare, sollten nicht enthalten sein, es sei denn, das Suchformular ist die Hauptfunktion der Seite.

`<main>` trägt nicht zur Gliederung des Dokuments bei; das bedeutet, im Unterschied zu Elementen wie {{HTMLElement("body")}}, Überschriften wie {{HTMLElement("Heading_Elements", "h2")}}, und dergleichen, beeinflusst `<main>` nicht das Konzept des {{Glossary("DOM", "DOMs")}} zur Struktur der Seite. Es ist rein informativ.

## Barrierefreiheit

### Landmark

Das `<main>`-Element verhält sich wie ein [`main`-Landmark](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role). [Landmarks](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles) können von unterstützender Technologie verwendet werden, um große Dokumentenabschnitte schnell zu identifizieren und zu navigieren. Bevorzugen Sie die Verwendung des `<main>`-Elements über die Deklaration von `role="main"`, es sei denn, es gibt [Probleme mit der Unterstützung alter Browser](#browser-kompatibilität).

### Navigation überspringen

Die Navigation überspringen, auch bekannt als "skipnav", ist eine Technik, die es Nutzern unterstützender Technologie ermöglicht, große Abschnitte von sich wiederholenden Inhalten (Hauptnavigation, Informationsbanner usw.) schnell zu überspringen. Dies ermöglicht dem Nutzer, schneller zum Hauptinhalt der Seite zu gelangen.

Ein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut zum `<main>`-Element hinzuzufügen, ermöglicht es, als Ziel eines Links zum Überspringen der Navigation zu dienen.

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

Die Lesemodus-Funktionalität des Browsers sucht nach dem Vorhandensein des `<main>`-Elements, sowie nach [Überschriften](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und [Inhaltsstrukturierungselementen](/de/docs/Web/HTML/Reference/Elements#content_sectioning), um Inhalte in eine spezialisierte Leseransicht umzuwandeln.

- [Websites für den Safari-Lesemodus und andere Lese-Apps entwickeln.](https://medium.com/@mandy.michael/building-websites-for-safari-reader-mode-and-other-reading-apps-1562913c86c9)

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
          >Flow-Inhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine; sowohl die öffnenden als auch die schließenden Tags sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Wo
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow-Inhalt</a
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

- Grundlegende Strukturelemente: {{HTMLElement("html")}}, {{HTMLElement("head")}}, {{HTMLElement("body")}}
- Abschnittsbezogene Elemente: {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("footer")}}, {{HTMLElement("header")}}, oder {{HTMLElement("nav")}}
- [ARIA: Hauptrolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role)
