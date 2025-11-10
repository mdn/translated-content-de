---
title: "<main>: Das Main-Element"
slug: Web/HTML/Reference/Elements/main
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
---

Das **`<main>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert den dominanten Inhalt des {{HTMLElement("body")}} eines Dokuments. Der Hauptinhalt besteht aus Inhalten, die direkt mit dem zentralen Thema eines Dokuments oder der zentralen Funktionalität einer Anwendung verbunden sind oder diese erweitern.

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

Ein Dokument darf nicht mehr als ein `<main>` Element haben, das nicht das [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden)-Attribut spezifiziert hat.

## Attribute

Dieses Element beinhaltet nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Nutzungshinweise

Der Inhalt eines `<main>` Elements sollte einzigartig für das Dokument sein. Inhalte, die über einen Satz von Dokumenten oder Dokumentabschnitten hinweg wiederholt werden, wie Seitenleisten, Navigationslinks, Copyright-Informationen, Website-Logos und Suchformulare, sollten nicht einbezogen werden, es sei denn, das Suchformular ist die Hauptfunktion der Seite.

`<main>` trägt nicht zur Gliederung des Dokuments bei; das heißt, im Gegensatz zu Elementen wie {{HTMLElement("body")}}, Überschriften wie {{HTMLElement("Heading_Elements", "h2")}} und ähnlichen, beeinflusst `<main>` nicht das Konzept der Struktur der Seite im {{Glossary("DOM", "DOM")}}. Es ist rein informativ.

## Barrierefreiheit

### Landmark

Das `<main>` Element verhält sich wie eine [`main`-Landmark](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role). [Landmarks](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles) können von unterstützender Technologie verwendet werden, um große Abschnitte des Dokuments schnell zu identifizieren und zu navigieren. Verwenden Sie bevorzugt das `<main>` Element anstelle der Deklaration von `role="main"`, es sei denn, es gibt [Bedenken bezüglich der Unterstützung älterer Browser](#browser-kompatibilität).

### Navigation überspringen

Navigation überspringen, auch bekannt als "skipnav", ist eine Technik, die es Benutzern mit assistiver Technologie ermöglicht, große Abschnitte von wiederholten Inhalten (Hauptnavigation, Infobanner, etc.) schnell zu umgehen. Dies ermöglicht es dem Benutzer, schneller auf den Hauptinhalt der Seite zuzugreifen.

Das Hinzufügen eines [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attributes zum `<main>` Element ermöglicht es, ein Ziel eines Links zur Navigation überspringen zu sein.

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

Die Browser-Lesemodus-Funktionalität sucht nach dem Vorhandensein des `<main>` Elements sowie nach [Überschriften](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und [Inhaltsstrukturierungselementen](/de/docs/Web/HTML/Reference/Elements#content_sectioning), wenn Inhalte in eine spezielle Leseransicht konvertiert werden.

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
          >Fließender Inhalt</a
        >, spürbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließender Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine; sowohl der Anfangs- als auch der Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Wo
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
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

- Grundlegende strukturelle Elemente: {{HTMLElement("html")}}, {{HTMLElement("head")}}, {{HTMLElement("body")}}
- Abschnittsbezogene Elemente: {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("footer")}}, {{HTMLElement("header")}}, oder {{HTMLElement("nav")}}
- [ARIA: Hauptrolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role)
