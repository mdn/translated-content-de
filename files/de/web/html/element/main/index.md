---
title: "<main>: Das Main-Element"
slug: Web/HTML/Element/main
l10n:
  sourceCommit: bde0cb215d1d307c08678abe6623fc0d39f4cf7f
---

{{HTMLSidebar}}

Das **`<main>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert den dominanten Inhalt des {{HTMLElement("body")}} eines Dokuments. Der Hauptinhaltsbereich besteht aus Inhalten, die direkt mit dem zentralen Thema eines Dokuments oder der zentralen Funktionalität einer Anwendung verbunden sind oder diese erweitern.

{{EmbedInteractiveExample("pages/tabbed/main.html","tabbed-shorter")}}

Ein Dokument darf nicht mehr als ein `<main>`-Element haben, das nicht das [`hidden`](/de/docs/Web/HTML/Global_attributes#hidden)-Attribut spezifiziert hat.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Der Inhalt eines `<main>`-Elements sollte einzigartig für das Dokument sein. Inhalte, die über eine Reihe von Dokumenten oder Dokumentabschnitten hinweg wiederholt werden, wie z.B. Seitenleisten, Navigationslinks, Copyright-Informationen, Logokennzeichnungen und Suchformulare, sollten nicht enthalten sein, es sei denn, das Suchformular ist die Hauptfunktion der Seite.

`<main>` trägt nicht zur Gliederung des Dokuments bei; das bedeutet, im Gegensatz zu Elementen wie {{HTMLElement("body")}}, Überschriften wie {{HTMLElement("Heading_Elements", "h2")}}, und dergleichen beeinflusst `<main>` nicht das {{glossary("DOM", "DOM's")}} Konzept der Struktur der Seite. Es ist streng informativ.

## Barrierefreiheit

### Orientierungspunkt

Das `<main>`-Element verhält sich wie eine [`main` Orientierungspunkt](/de/docs/Web/Accessibility/ARIA/Roles/main_role) Rolle. [Orientierungspunkte](/de/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles) können von unterstützenden Technologien genutzt werden, um große Abschnitte des Dokuments schnell zu identifizieren und zu navigieren. Bevorzugen Sie die Verwendung des `<main>`-Elements anstelle der Erklärung `role="main"`, es sei denn, es gibt [Bedenken hinsichtlich der Unterstützung älterer Browser](#browser-kompatibilität).

### Navigation überspringen

Navigation überspringen, auch bekannt als "skipnav", ist eine Technik, die es Nutzern unterstützender Technologien erlaubt, schnell große Abschnitte von wiederholtem Inhalt (Hauptnavigation, Infobanner usw.) zu überspringen. Dadurch können Nutzer schneller auf den Hauptinhalt der Seite zugreifen.

Das Hinzufügen eines [`id`](/de/docs/Web/HTML/Global_attributes#id)-Attributs zum `<main>`-Element lässt es zu einem Ziel eines Skip-Navigation-Links werden.

```html
<body>
  <a href="#main-content">Zum Hauptinhalt springen</a>

  <!-- Navigations- und Kopfzeileninhalte -->

  <main id="main-content">
    <!-- Hauptseiteninhalt -->
  </main>
</body>
```

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)

### Lesemodus

Die Lese-Modus-Funktionalität des Browsers sucht nach dem Vorhandensein des `<main>`-Elements sowie von [Überschriften](/de/docs/Web/HTML/Element/Heading_Elements) und [Inhaltsgliederungselementen](/de/docs/Web/HTML/Element#content_sectioning), wenn Inhalte in eine spezialisierte Lesemodusansicht umgewandelt werden.

- [Websites für Safari-Lesemodus und andere Lese-Apps erstellen.](https://medium.com/@mandy.michael/building-websites-for-safari-reader-mode-and-other-reading-apps-1562913c86c9)

## Beispiele

```html
<!-- anderer Inhalt -->

<main>
  <h1>Äpfel</h1>
  <p>Der Apfel ist die pomologische Frucht des Apfelbaums.</p>

  <article>
    <h2>Red Delicious</h2>
    <p>
      Diese leuchtend roten Äpfel sind die am häufigsten in vielen Supermärkten zu finden.
    </p>
    <p>…</p>
    <p>…</p>
  </article>

  <article>
    <h2>Granny Smith</h2>
    <p>Diese saftigen, grünen Äpfel sind eine tolle Füllung für Apfelkuchen.</p>
    <p>…</p>
    <p>…</p>
  </article>
</main>

<!-- anderer Inhalt -->
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
        >, sichtbarer Inhalt.
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
      <th scope="row">Tag weglassen</th>
      <td>Keiner; sowohl die Start- als auch die End-Tags sind zwingend erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Wo
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
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
      <td>{{domxref("HTMLElement")}}</td>
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
- [ARIA: Main role](/de/docs/Web/Accessibility/ARIA/Roles/main_role)