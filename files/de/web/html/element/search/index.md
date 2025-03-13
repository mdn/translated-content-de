---
title: "<search>: Das generische Such-Element"
slug: Web/HTML/Element/search
l10n:
  sourceCommit: c9dfe0dcc81a7414922637600bf318156bf83387
---

{{HTMLSidebar}}

Das **`<search>`** [HTML](/de/docs/Web/HTML)-Element ist ein Container, der die Teile des Dokuments oder der Anwendung mit Formularsteuerelementen oder anderem Inhalt zum Durchführen einer Such- oder Filteroperation repräsentiert. Das `<search>`-Element identifiziert semantisch den Zweck des Inhalts als Such- oder Filtermöglichkeiten. Die Such- oder Filterfunktionalität kann für die Website oder Anwendung, die aktuelle Webseite oder das Dokument oder das gesamte Internet oder einen Teil davon sein.

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Nutzungshinweise

Das `<search>`-Element ist nicht dazu gedacht, Suchergebnisse darzustellen. Stattdessen sollten Such- oder gefilterte Ergebnisse als Teil des Hauptinhalts auf dieser Webseite präsentiert werden. Dennoch gehören Vorschläge und Links, die Teil der "Schnellsuche" innerhalb der Such- oder Filterfunktionalität sind, angemessen in den Inhalt des `<search>`-Elements, da es sich um Suchfunktionen handelt.

## Barrierefreiheit

Das `<search>`-Element definiert ein [`search`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role) Landmark. Dies macht die Hinzufügung von `role=search` zu einem {{HTMLElement('form')}}-Element überflüssig.

## Beispiele

### Header-Suchformular

Dieses Beispiel zeigt die Verwendung von `<search>` als Container für eine Suche innerhalb eines Website-Headers, um eine Website-weite Suche durchzuführen. Das `<search>` ist ein semantischer Container für das {{HTMLElement("form")}}, das die vom Benutzer eingegebene Suchanfrage an einen Server sendet.

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

Dieses Beispiel zeigt möglichen DOM-Inhalt bei der dynamischen Einbindung von JavaScript-Suchfunktionen in eine Webanwendung. Wenn die Suchfunktionalität vollständig mit JavaScript implementiert ist, ist weder ein {{HTMLElement("form")}}-Element noch ein Absende-{{HTMLElement("button")}} erforderlich. Aus semantischen Gründen wird das `<search>`-Element enthalten, um die Such- und Filtermöglichkeiten aufzunehmen.

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
> Denken Sie daran, dass einige Benutzer kein JavaScript haben, und keiner Ihrer Benutzer hat JavaScript laufen, bis das JavaScript erfolgreich heruntergeladen, geparst und ausgeführt wurde. Stellen Sie sicher, dass Ihre Benutzer auf den Inhalt Ihrer Seite ohne JavaScript zugreifen können.

### Mehrere Suchfunktionen

Dieses Beispiel zeigt eine Seite mit zwei Suchfunktionen. Die erste ist eine globale Website-Suche im Header. Die zweite ist eine Suche und Filterung basierend auf dem Seitenkontext, in unserem Beispiel eine Autosuche.

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
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließender Inhalt</a>, <a href="/de/docs/Web/HTML/Content_categories#palpable_content">spürbarer Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließender Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
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
- [ARIA: Search role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)
