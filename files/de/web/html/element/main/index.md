---
title: "<main>: Das Main-Element"
slug: Web/HTML/Element/main
l10n:
  sourceCommit: bde0cb215d1d307c08678abe6623fc0d39f4cf7f
---

{{HTMLSidebar}}

Das **`<main>`**-[HTML](/de/docs/Web/HTML)-Element repräsentiert den dominanten Inhalt des {{HTMLElement("body")}} eines Dokuments. Der Hauptinhaltsbereich besteht aus Inhalten, die direkt mit dem zentralen Thema eines Dokuments oder der zentralen Funktionalität einer Anwendung verbunden sind oder diese erweitern.

{{EmbedInteractiveExample("pages/tabbed/main.html","tabbed-shorter")}}

Ein Dokument darf nicht mehr als ein `<main>`-Element haben, das nicht das [`hidden`](/de/docs/Web/HTML/Global_attributes#hidden)-Attribut spezifiziert hat.

## Attribute

Dieses Element beinhaltet nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Der Inhalt eines `<main>`-Elements sollte im Dokument einzigartig sein. Inhalte, die über eine Reihe von Dokumenten oder Dokumentabschnitten hinweg wiederholt werden, wie beispielsweise Seitenleisten, Navigationslinks, Urheberrechtsinformationen, Website-Logos und Suchformulare, sollten nicht enthalten sein, es sei denn, das Suchformular ist die Hauptfunktion der Seite.

`<main>` trägt nicht zur Gliederung des Dokuments bei; das heißt, im Gegensatz zu Elementen wie {{HTMLElement("body")}}, Überschriften wie {{HTMLElement("Heading_Elements", "h2")}} und dergleichen, beeinflusst `<main>` nicht das Konzept der Struktur der Seite im [DOM](/de/docs/Glossary/DOM). Es ist rein informativ.

## Barrierefreiheit

### Landmark

Das `<main>`-Element verhält sich wie eine [`main`-Landmark](/de/docs/Web/Accessibility/ARIA/Roles/main_role)-Rolle. [Landmarks](/de/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles) können von unterstützenden Technologien verwendet werden, um schnell große Abschnitte des Dokuments zu identifizieren und zu navigieren. Es wird bevorzugt, das `<main>`-Element anstelle der Deklaration `role="main"` zu verwenden, es sei denn, es gibt Bedenken hinsichtlich der [Unterstützung älterer Browser](#browser-kompatibilität).

### Navigation überspringen

Das Überspringen der Navigation, auch "skipnav" genannt, ist eine Technik, die es Nutzern von unterstützenden Technologien ermöglicht, schnell große Abschnitte wiederholter Inhalte (Hauptnavigation, Infobanner usw.) zu überspringen. Dadurch kann der Nutzer den Hauptinhalt der Seite schneller erreichen.

Wenn Sie dem `<main>`-Element ein [`id`](/de/docs/Web/HTML/Global_attributes#id)-Attribut hinzufügen, kann es das Ziel eines Links zum Überspringen der Navigation werden.

```html
<body>
  <a href="#main-content">Skip to main content</a>

  <!-- navigation and header content -->

  <main id="main-content">
    <!-- main page content -->
  </main>
</body>
```

- [WebAIM: Links zum „Überspringen der Navigation“](https://webaim.org/techniques/skipnav/)

### Lesemodus

Die Reader-Modus-Funktionalität des Browsers sucht nach dem Vorhandensein des `<main>`-Elements sowie nach [Überschriften](/de/docs/Web/HTML/Element/Heading_Elements) und [Inhaltsstrukturierungselementen](/de/docs/Web/HTML/Element#content_sectioning), um Inhalte in eine spezialisierte Leseransicht umzuwandeln.

- [Websites für den Safari Reader Mode und andere Lese-Apps erstellen.](https://medium.com/@mandy.michael/building-websites-for-safari-reader-mode-and-other-reading-apps-1562913c86c9)

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
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
      <td>Keine; sowohl die Start- als auch die End-Tags sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Wo
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >
        erwartet wird, aber nur, wenn es ein
        <a
          href="https://html.spec.whatwg.org/multipage/grouping-content.html#hierarchically-correct-main-element"
          >hierarchisch korrektes <code>main</code>-Element</a
        >
        ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/main_role"
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
- [ARIA: Main-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/main_role)
