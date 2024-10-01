---
title: "<main>: Das Main-Element"
slug: Web/HTML/Element/main
l10n:
  sourceCommit: bde0cb215d1d307c08678abe6623fc0d39f4cf7f
---

{{HTMLSidebar}}

Das **`<main>`** [HTML](/de/docs/Web/HTML) Element repräsentiert den dominierenden Inhalt des {{HTMLElement("body")}} eines Dokuments. Der Hauptinhaltsbereich besteht aus Inhalten, die direkt mit dem zentralen Thema eines Dokuments oder der zentralen Funktionalität einer Anwendung zusammenhängen oder darauf aufbauen.

{{EmbedInteractiveExample("pages/tabbed/main.html","tabbed-shorter")}}

Ein Dokument darf nicht mehr als ein `<main>` Element haben, bei dem das [`hidden`](/de/docs/Web/HTML/Global_attributes#hidden) Attribut nicht angegeben ist.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Der Inhalt eines `<main>` Elements sollte einzigartig für das Dokument sein. Inhalte, die über eine Reihe von Dokumenten oder Dokumentabschnitten hinweg wiederholt werden, wie Seitenleisten, Navigationslinks, Urheberrechtsinformationen, Webseiten-Logos und Suchformulare, sollten nicht enthalten sein, es sei denn, das Suchformular ist die Hauptfunktion der Seite.

`<main>` trägt nicht zur Gliederung des Dokuments bei. Das bedeutet, im Gegensatz zu Elementen wie {{HTMLElement("body")}}, Überschriften wie {{HTMLElement("Heading_Elements", "h2")}} und dergleichen, beeinflusst `<main>` nicht das Konzept der Struktur der Seite im {{Glossary("DOM", "DOM")}}. Es ist rein informativ.

## Barrierefreiheit

### Landmark

Das `<main>` Element verhält sich wie eine [`main` Landmark](/de/docs/Web/Accessibility/ARIA/Roles/main_role) Rolle. [Landmarks](/de/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles) können von unterstützenden Technologien verwendet werden, um große Abschnitte des Dokuments schnell zu identifizieren und zu navigieren. Bevorzugen Sie die Verwendung des `<main>` Elements gegenüber der Deklaration `role="main"`, es sei denn, es gibt Bedenken hinsichtlich der Unterstützung älterer Browser.

### Navigation überspringen

Das Überspringen der Navigation, auch bekannt als "skipnav", ist eine Technik, die es Benutzern von unterstützender Technologie ermöglicht, große Abschnitte wiederholter Inhalte (Hauptnavigation, Informationsbanner usw.) schnell zu umgehen. Auf diese Weise kann der Benutzer schneller auf den Hauptinhalt der Seite zugreifen.

Wenn dem `<main>` Element ein [`id`](/de/docs/Web/HTML/Global_attributes#id) Attribut hinzugefügt wird, kann es Ziel eines Skip-Navigation-Links sein.

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

Die Leseansicht-Funktion von Browsern sucht nach dem Vorhandensein des `<main>` Elements sowie [Überschriften](/de/docs/Web/HTML/Element/Heading_Elements) und [Inhaltsgliederungselementen](/de/docs/Web/HTML/Element#content_sectioning), wenn Inhalte in eine spezialisierte Leseansicht umgewandelt werden.

- [Webseiten für den Safari Reader-Mode und andere Lese-Apps erstellen.](https://medium.com/@mandy.michael/building-websites-for-safari-reader-mode-and-other-reading-apps-1562913c86c9)

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

## Technische Übersicht

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
          >Fließender Inhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließender Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Weglassen des Tags</th>
      <td>Keine; sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Wo
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >fließender Inhalt</a
        >
        erwartet wird, aber nur, wenn es ein
        <a
          href="https://html.spec.whatwg.org/multipage/grouping-content.html#hierarchically-correct-main-element"
          >hierarchisch korrektes <code>main</code> Element</a
        >ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
      <th scope="row">DOM Schnittstelle</th>
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
- [ARIA: Main Rolle](/de/docs/Web/Accessibility/ARIA/Roles/main_role)
