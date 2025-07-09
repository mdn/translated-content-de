---
title: "<search>: Das generische Such-Element"
slug: Web/HTML/Reference/Elements/search
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<search>`** [HTML](/de/docs/Web/HTML)-Element ist ein Container, der die Teile des Dokuments oder der Anwendung mit Formularsteuerelementen oder anderem Inhalt darstellt, die mit der Durchführung einer Such- oder Filteroperation verbunden sind. Das `<search>`-Element identifiziert semantisch den Zweck des Inhalts des Elements als mit Such- oder Filterfähigkeiten versehen. Die Such- oder Filterfunktionalität kann für die Website oder Anwendung, die aktuelle Webseite oder das Dokument, oder das gesamte Internet oder einen Unterabschnitt davon sein.

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

Das `<search>`-Element ist nicht dafür gedacht, Suchergebnisse darzustellen. Vielmehr sollten Such- oder gefilterte Ergebnisse als Teil des Hauptinhalts der Webseite präsentiert werden. Das heißt, Vorschläge und Links, die Teil der "Schnellsuche"-Funktionalität innerhalb der Such- oder Filterfunktion sind, sollten angemessen innerhalb des Inhalts des `<search>`-Elements geschachtelt sein, da sie Suchmerkmale sind.

## Barrierefreiheit

Das `<search>`-Element definiert ein [`search`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)-Landmark. Dies macht das Hinzufügen von `role=search` zu einem {{HTMLElement('form')}}-Element überflüssig.

## Beispiele

### Header-Suchformular

Dieses Beispiel demonstriert die Verwendung von `<search>` als Container für eine Suche innerhalb eines Website-Headers, um eine Website-weite Suche durchzuführen. Das `<search>` ist ein semantischer Container für das {{HTMLElement("form")}}, das die vom Benutzer eingegebene Suchanfrage an einen Server sendet.

#### HTML

```html
<header>
  <h1>Movie website</h1>
  <search>
    <form action="./search/">
      <label for="movie">Find a Movie</label>
      <input type="search" id="movie" name="q" />
      <button type="submit">Search</button>
    </form>
  </search>
</header>
```

#### Ergebnis

{{EmbedLiveSample('Header search form')}}

### Web-App-Suche

Dieses Beispiel zeigt potenziellen DOM-Inhalt, wenn dynamisch JavaScript-Suchfunktionalität in eine Webanwendung integriert wird. Wenn die Suchfunktionalität vollständig mit JavaScript implementiert wird, ist weder ein {{HTMLElement("form")}}-Element noch ein Absende-{{HTMLElement("button")}} erforderlich, wenn kein Formular übermittelt wird. Aus semantischen Gründen wird das `<search>`-Element eingefügt, um die Such- und Filterfähigkeiten zu enthalten.

#### HTML

```html
<search>
  <label>
    Find and filter your query
    <input type="search" id="query" />
  </label>
  <label>
    <input type="checkbox" id="exact-only" />
    Exact matches only
  </label>

  <section>
    <h3>Results:</h3>
    <ul id="results">
      <!-- search result content -->
    </ul>
    <output id="no-results">
      <!-- no results content -->
    </output>
  </section>
</search>
```

#### Ergebnis

{{EmbedLiveSample('Web app search')}}

> [!NOTE]
> Denken Sie daran, dass einige Benutzer kein JavaScript haben, und keiner Ihrer Benutzer hat JavaScript laufen, bis das JavaScript erfolgreich heruntergeladen, geparst und ausgeführt wurde. Stellen Sie sicher, dass Ihre Benutzer mit deaktiviertem JavaScript auf die Inhalte Ihrer Website zugreifen können.

### Mehrfache Suchen

Dieses Beispiel zeigt eine Seite mit zwei Suchfunktionen. Die erste ist eine globale Seitensuche im Header. Die zweite ist eine Suche und ein Filter, die auf dem Seitenkontext basieren, in unserem Beispiel eine Autosuche.

#### HTML

```html
<body>
  <header>
    <h1>Car rental agency</h1>
    <search title="Website">...</search>
  </header>
  <main>
    <h2>Cars available for rent</h2>
    <search title="Cars">
      <h3>Filter results</h3>
      ...
    </search>
    <article>
      <!-- search result content -->
    </article>
  </main>
</body>
```

#### Ergebnis

{{EmbedLiveSample('Multiple searches')}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließender Inhalt</a>, <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content">wahrnehmbarer Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließender Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role">search</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/form_role"><code>form</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/region_role"><code>region</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role"><code>search</code></a>
      </td>
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

- Andere suchbezogene Elemente: {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("aside")}}, {{HTMLElement("nav")}}, {{HTMLElement("form")}}
- [ARIA: Suchrolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)
