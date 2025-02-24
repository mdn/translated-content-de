---
title: "<main>: Das Hauptelement"
slug: Web/HTML/Element/main
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<main>`** [HTML](/de/docs/Web/HTML) Element repräsentiert den dominierenden Inhalt des {{HTMLElement("body")}} eines Dokuments. Der Hauptinhaltsbereich besteht aus Inhalten, die direkt mit dem zentralen Thema eines Dokuments oder der zentralen Funktionalität einer Anwendung verbunden sind oder diese erweitern.

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

Ein Dokument darf nicht mehr als ein `<main>` Element haben, das nicht das [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden) Attribut spezifiziert hat.

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Anwendungshinweise

Der Inhalt eines `<main>` Elements sollte einmalig für das Dokument sein. Inhalte, die über eine Reihe von Dokumenten oder Dokumentabschnitten hinweg wiederholt werden, wie Seitenleisten, Navigationslinks, Urheberrechtsinformationen, Seitenlogos und Suchformulare, sollten nicht enthalten sein, es sei denn, das Suchformular ist die Hauptfunktion der Seite.

`<main>` trägt nicht zur Gliederung des Dokuments bei; das heißt, im Gegensatz zu Elementen wie {{HTMLElement("body")}}, Überschriften wie {{HTMLElement("Heading_Elements", "h2")}} und dergleichen, beeinflusst `<main>` nicht das Konzept der Struktur der Seite im {{Glossary("DOM", "DOM")}}. Es ist rein informativ.

## Barrierefreiheit

### Landmark

Das `<main>` Element verhält sich wie eine [`main` landmark](/de/docs/Web/Accessibility/ARIA/Roles/main_role) Rolle. [Landmarks](/de/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles) können von unterstützender Technologie genutzt werden, um große Abschnitte des Dokuments schnell zu identifizieren und zu navigieren. Es ist vorzuziehen, das `<main>` Element zu verwenden, anstatt `role="main"` zu deklarieren, es sei denn, es gibt Bedenken bezüglich der [Unterstützung alter Browser](#browser-kompatibilität).

### Skip-Navigation

Skip-Navigation, auch als "skipnav" bekannt, ist eine Technik, mit der ein Nutzer unterstützender Technologie schnell große Abschnitte von wiederholtem Inhalt (Hauptnavigation, Informationsbanner usw.) überspringen kann. Dies ermöglicht es dem Nutzer, schneller auf den Hauptinhalt der Seite zuzugreifen.

Das Hinzufügen eines [`id`](/de/docs/Web/HTML/Global_attributes/id) Attributs zum `<main>` Element ermöglicht es, dass es Ziel eines Skip-Navigation-Links sein kann.

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

### Reader-Modus

Die Funktionalität des Reader-Modus im Browser sucht nach der Präsenz des `<main>` Elements sowie nach [Überschriften](/de/docs/Web/HTML/Element/Heading_Elements) und [Inhaltsgliederungselementen](/de/docs/Web/HTML/Element#content_sectioning), wenn Inhalte in eine spezialisierte Lesesicht konvertiert werden.

- [Websites für den Safari Reader-Modus und andere Lese-Apps erstellen.](https://medium.com/@mandy.michael/building-websites-for-safari-reader-mode-and-other-reading-apps-1562913c86c9)

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
          >Fließinhalt</a
        >, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließinhalt</a
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
          >Fließinhalt</a
        >
        erwartet wird, jedoch nur, wenn es ein
        <a
          href="https://html.spec.whatwg.org/multipage/grouping-content.html#hierarchically-correct-main-element"
          >hierarchisch korrektes <code>main</code> Element</a
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
- Bereichsbezogene Elemente: {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("footer")}}, {{HTMLElement("header")}}, oder {{HTMLElement("nav")}}
- [ARIA: Main-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/main_role)
