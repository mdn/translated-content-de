---
title: "<search>: Das generische Suchelement"
slug: Web/HTML/Element/search
l10n:
  sourceCommit: 3ad6abf39faf306d8fc4846706bf0f8465d19130
---

{{HTMLSidebar}}

Das **`<search>`** [HTML](/de/docs/Web/HTML)-Element ist ein Container, der Teile des Dokuments oder der Anwendung mit Formelementen oder anderem Inhalt repräsentiert, die für eine Such- oder Filteroperation relevant sind. Das `<search>`-Element identifiziert semantisch den Zweck des Inhalts als mit Such- oder Filterfunktionen versehen. Die Such- oder Filterfunktionalität kann für die Webseite oder Anwendung, die aktuelle Webseite oder das Dokument oder für das gesamte Internet oder einen Teil davon sein.

## Attribute

Dieses Element beinhaltet nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Nutzungshinweise

Das `<search>`-Element ist nicht dafür gedacht, Suchergebnisse darzustellen. Stattdessen sollten Such- oder gefilterte Ergebnisse als Teil des Hauptinhalts dieser Webseite präsentiert werden. Vorschläge und Links, die Teil der "Schnellsuche"-Funktionalität innerhalb der Such- oder Filterfunktionalität sind, sollten jedoch angemessen innerhalb des Inhalts des `<search>`-Elements verschachtelt sein, da sie Suchfunktionen darstellen.

## Barrierefreiheit

Das `<search>`-Element definiert ein [`search`](/de/docs/Web/Accessibility/ARIA/Roles/search_role) Landmark. Dadurch entfällt die Notwendigkeit, `role=search` zu einem {{HTMLElement('form')}}-Element hinzuzufügen.

## Beispiele

### Suche im Kopfbereich

Dieses Beispiel demonstriert die Verwendung von `<search>` als Container für eine Suche innerhalb eines Website-Kopfbereichs, um eine einfache, seitenweite Suche durchzuführen. Das `<search>` ist ein semantischer Container für das {{HTMLElement("form")}}, das die vom Benutzer eingegebene Suchanfrage an einen Server sendet.

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

Dieses Beispiel zeigt potenziellen DOM-Inhalt bei der dynamischen Einbindung von JavaScript-Suchfunktionen in einer Webanwendung. Wenn die Suchfunktion vollständig mit JavaScript implementiert wird und kein Formular gesendet wird, sind weder ein {{HTMLElement("form")}}-Element noch ein submit {{HTMLElement("button")}} erforderlich. Aus semantischen Gründen wird das `<search>`-Element hinzugefügt, um die Such- und Filterfunktionen einzuschließen.

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
> Denken Sie daran, dass einige Benutzer kein JavaScript haben und keiner Ihrer Benutzer JavaScript ausführt, bis das JavaScript erfolgreich heruntergeladen, geparst und ausgeführt wird. Stellen Sie sicher, dass Ihre Benutzer auf den Inhalt Ihrer Seite ohne JavaScript zugreifen können.

### Mehrere Suchen

Dieses Beispiel zeigt eine Seite mit zwei Suchfunktionen. Die erste ist eine globale Site-Suche im Kopfbereich. Die zweite ist eine Suche und Filterung basierend auf dem Kontext der Seite, in unserem Beispiel eine Autosuche.

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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließinhalt</a>, <a href="/de/docs/Web/HTML/Content_categories#palpable_content">greifbarer Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließinhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/search_role">search</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/form_role"><code>form</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/region_role"><code>region</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/search_role"><code>search</code></a>
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
- [ARIA: Suchrolle](/de/docs/Web/Accessibility/ARIA/Roles/search_role)
