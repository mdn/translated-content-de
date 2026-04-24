---
title: "`<search>` HTML generisches Such-Element"
short-title: <search>
slug: Web/HTML/Reference/Elements/search
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<search>`** [HTML](/de/docs/Web/HTML)-Element ist ein Container, der die Teile des Dokuments oder der Anwendung mit Formularsteuerelementen oder anderem Inhalt darstellt, die mit der Durchführung einer Such- oder Filteroperation verbunden sind. Das `<search>`-Element identifiziert semantisch den Zweck der Inhalte des Elements als Such- oder Filterfunktionen. Die Such- oder Filterfunktionalität kann für die Website oder Anwendung, die aktuelle Webseite oder das Dokument, oder das gesamte Internet oder einen Teil davon sein.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Nutzungshinweise

Das `<search>`-Element dient nicht zur Präsentation von Suchergebnissen. Vielmehr sollten Such- oder gefilterte Ergebnisse als Teil des Hauptinhalts dieser Webseite präsentiert werden. Dennoch sind Vorschläge und Links, die Teil der "Schnellsuch"-Funktionalität innerhalb der Such- oder Filterfunktionalität sind, angemessen innerhalb der Inhalte des `<search>`-Elements verschachtelt, da sie Suchfunktionen sind.

## Barrierefreiheit

Das `<search>`-Element definiert ein [`search`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)-Landmark. Dies macht es überflüssig, `role=search` zu einem {{HTMLElement('form')}}-Element hinzuzufügen.

## Beispiele

### Suchformular im Kopfbereich

Dieses Beispiel demonstriert die Verwendung von `<search>` als Container für eine Suche innerhalb eines Website-Kopfbereichs zum Durchführen einer siteweiten Suche. Das `<search>` ist ein semantischer Container für das {{HTMLElement("form")}}, das die vom Benutzer eingegebene Suchanfrage an einen Server sendet.

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

Dieses Beispiel zeigt mögliche DOM-Inhalte, wenn eine JavaScript-Suchfunktionalität dynamisch in einer Webanwendung integriert wird. Wenn Suchfunktionen vollständig mit JavaScript implementiert werden und kein Formular übermittelt wird, sind weder ein {{HTMLElement("form")}}-Element noch ein Senden-{{HTMLElement("button")}} erforderlich. Für semantische Zwecke wird das `<search>`-Element hinzugefügt, um die Such- und Filterfunktionen zu enthalten.

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
> Denken Sie daran, dass einige Benutzer kein JavaScript haben und keiner Ihrer Benutzer JavaScript ausführt, bis das JavaScript erfolgreich heruntergeladen, analysiert und ausgeführt wurde. Stellen Sie sicher, dass Ihre Benutzer auf den Inhalt Ihrer Website zugreifen können, wenn JavaScript deaktiviert ist.

### Mehrfache Suchen

Dieses Beispiel zeigt eine Seite mit zwei Suchfunktionen. Die erste ist eine globale Site-Suche im Kopfbereich. Die zweite ist eine Suche und ein Filter basierend auf dem Seitenkontext, in unserem Beispiel eine Autosuche.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>, <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content">greifbarer Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
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
- [ARIA: Suchrolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)
