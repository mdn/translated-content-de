---
title: "<main>: Das Hauptelement"
slug: Web/HTML/Element/main
l10n:
  sourceCommit: 816cc4d4a5a318a23222946b6981bb92b499aebb
---

{{HTMLSidebar}}

Das **`<main>`** [HTML](/de/docs/Web/HTML) Element repräsentiert den dominierenden Inhalt des {{HTMLElement("body")}} eines Dokuments. Der Hauptinhaltsbereich besteht aus Inhalten, die direkt mit dem zentralen Thema eines Dokuments oder der zentralen Funktionalität einer Anwendung zusammenhängen oder diese erweitern.

{{EmbedInteractiveExample("pages/tabbed/main.html","tabbed-shorter")}}

Ein Dokument darf nicht mehr als ein `<main>` Element haben, bei dem das [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden) Attribut nicht spezifiert ist.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Nutzungshinweise

Der Inhalt eines `<main>` Elements sollte einzigartig für das Dokument sein. Inhalte, die über eine Reihe von Dokumenten oder Dokumentabschnitten hinweg wiederholt werden, wie Seitenleisten, Navigationslinks, Urheberrechtsinformationen, Logos und Suchformulare, sollten nicht enthalten sein, es sei denn, das Suchformular ist die Hauptfunktion der Seite.

`<main>` trägt nicht zur Gliederung des Dokuments bei; das heißt, im Gegensatz zu Elementen wie {{HTMLElement("body")}}, Überschriften wie {{HTMLElement("Heading_Elements", "h2")}} und dergleichen, beeinflusst `<main>` nicht das {{Glossary("DOM", "DOM")}} Verständnis der Struktur der Seite. Es ist rein informativ.

## Zugänglichkeit

### Landmark

Das `<main>` Element verhält sich wie eine [Hauptlandmarke (`main`)](/de/docs/Web/Accessibility/ARIA/Roles/main_role). [Landmarken](/de/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles) können von unterstützenden Technologien verwendet werden, um schnell große Abschnitte des Dokuments zu identifizieren und zu navigieren. Bevorzugen Sie die Nutzung des `<main>` Elements gegenüber der Deklaration von `role="main"`, es sei denn, es gibt Bedenken hinsichtlich [unterstützter älterer Browser](#browser-kompatibilität).

### Navigation überspringen

Navigation überspringen, auch bekannt als "skipnav", ist eine Technik, die einem Benutzer von unterstützender Technologie ermöglicht, schnell große Abschnitte von wiederholtem Inhalt (Hauptnavigation, Informationsbanner, etc.) zu überspringen. Dies ermöglicht es dem Benutzer, schneller auf den Hauptinhalt der Seite zuzugreifen.

Das Hinzufügen eines [`id`](/de/docs/Web/HTML/Global_attributes/id) Attributs zum `<main>` Element ermöglicht es, dass es das Ziel eines Links zum Überspringen der Navigation wird.

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

### Leseansicht

Die Leseransichts-Funktionalität des Browsers sucht nach dem Vorhandensein des `<main>` Elements sowie [Überschriften](/de/docs/Web/HTML/Element/Heading_Elements) und [Inhaltsabschnitten](/de/docs/Web/HTML/Element#content_sectioning), um den Inhalt in eine spezialisierte Leseansicht umzuwandeln.

- [Webseiten für den Safari Reader Mode und andere Lese-Apps erstellen.](https://medium.com/@mandy.michael/building-websites-for-safari-reader-mode-and-other-reading-apps-1562913c86c9)

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
      <th scope="row">Tag-Auslassung</th>
      <td>Keine; sowohl das Start- als auch das End-Tag sind zwingend erforderlich.</td>
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
        >
        ist.
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
- [ARIA: Hauptrolle](/de/docs/Web/Accessibility/ARIA/Roles/main_role)
