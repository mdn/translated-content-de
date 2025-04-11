---
title: "<main>: Das Main-Element"
slug: Web/HTML/Reference/Elements/main
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<main>`** [HTML](/de/docs/Web/HTML) Element repräsentiert den dominanten Inhalt des {{HTMLElement("body")}} eines Dokuments. Der Hauptinhaltsbereich besteht aus Inhalten, die direkt mit dem zentralen Thema eines Dokuments oder der zentralen Funktionalität einer Anwendung in Zusammenhang stehen oder diese erweitern.

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

Ein Dokument darf nicht mehr als ein `<main>`-Element haben, das nicht das [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden)-Attribut spezifiziert hat.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Hinweise zur Verwendung

Der Inhalt eines `<main>`-Elements sollte einzigartig für das Dokument sein. Inhalte, die in einer Reihe von Dokumenten oder Dokumentabschnitten wiederholt werden, wie zum Beispiel Seitenleisten, Navigationslinks, Copyright-Informationen, Logos der Website und Suchformulare, sollten nicht enthalten sein, es sei denn, das Suchformular ist die Hauptfunktion der Seite.

`<main>` trägt nicht zur Gliederung des Dokuments bei; das heißt, im Gegensatz zu Elementen wie {{HTMLElement("body")}}, Überschriften wie {{HTMLElement("Heading_Elements", "h2")}}, und dergleichen, beeinflusst `<main>` nicht das Konzept der Struktur der Seite im {{Glossary("DOM", "DOM")}}. Es ist rein informativ.

## Barrierefreiheit

### Orientierungspunkt

Das `<main>`-Element verhält sich wie eine [`main`-Markierung](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role). [Markierungen](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles) können von unterstützenden Technologien verwendet werden, um große Abschnitte des Dokuments schnell zu identifizieren und zu navigieren. Bevorzugen Sie die Verwendung des `<main>`-Elements anstelle der Deklaration `role="main"`, es sei denn, es gibt [Bedenken bezüglich der Unterstützung älterer Browser](#browser-kompatibilität).

### Navigation überspringen

Navigation überspringen, auch bekannt als "skipnav", ist eine Technik, die es einem Benutzer mit unterstützender Technologie ermöglicht, große Abschnitte von wiederholten Inhalten (Hauptnavigation, Informationsbänder, etc.) schnell zu umgehen. Dies ermöglicht es dem Benutzer, schneller auf den Hauptinhalt der Seite zuzugreifen.

Das Hinzufügen eines [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attributs zum `<main>`-Element ermöglicht, dass es Ziel eines Links zum Überspringen der Navigation wird.

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

Die Lesemodus-Funktionalität von Browsern sucht nach dem Vorhandensein des `<main>`-Elements sowie von [Überschriften](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und [Inhaltsgliederungselementen](/de/docs/Web/HTML/Reference/Elements#content_sectioning), wenn Inhalte in eine spezielle Leseransicht konvertiert werden.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Weglassen des Tags</th>
      <td>Keines; sowohl Anfangs- als auch Endtags sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Wo <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a> erwartet wird, aber nur, wenn es sich um ein <a href="https://html.spec.whatwg.org/multipage/grouping-content.html#hierarchically-correct-main-element">hierarchisch korrektes <code>main</code>-Element</a> handelt.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role">main</a></code>
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
