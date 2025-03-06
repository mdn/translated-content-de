---
title: "<search>: Das generische Suchelement"
slug: Web/HTML/Element/search
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

Das **`<search>`** [HTML](/de/docs/Web/HTML)-Element ist ein Container, der die Teile des Dokuments oder der Anwendung repräsentiert, die Formularelemente oder andere Inhalte im Zusammenhang mit der Durchführung einer Such- oder Filteroperation enthalten. Das `<search>`-Element identifiziert semantisch den Zweck des Inhalts des Elements als Such- oder Filterfähigkeiten. Die Such- oder Filterfunktionalität kann für die Website oder Anwendung, die aktuelle Webseite oder das Dokument oder das gesamte Internet oder einen Teil davon sein.

## Attribute

Dieses Element beinhaltet nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Das `<search>`-Element ist nicht dazu gedacht, Suchergebnisse darzustellen. Such- oder gefilterte Ergebnisse sollten stattdessen als Teil des Hauptinhalts dieser Webseite präsentiert werden. Nichtsdestotrotz sind Vorschläge und Links, die Teil der "Schnellsuche"-Funktionalität innerhalb der Such- oder Filterfunktionalität sind, angemessen innerhalb der Inhalte des `<search>`-Elements verschachtelt, da sie Suchfunktionen sind.

## Barrierefreiheit

Das `<search>`-Element definiert ein [`search`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)-Landmarke. Dies macht es überflüssig, `role=search` einem {{HTMLElement('form')}}-Element hinzuzufügen.

## Beispiele

### Suchformular im Header

Dieses Beispiel demonstriert die Verwendung von `<search>` als Container für eine Suche innerhalb eines Website-Headers, um eine einfache seitenweite Suche durchzuführen. Das `<search>` ist ein semantischer Container für das {{HTMLElement("form")}}, das die vom Benutzer eingegebene Suchanfrage an einen Server sendet.

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

### Suche in einer Webanwendung

Dieses Beispiel demonstriert potenziellen DOM-Inhalt beim dynamischen Einbinden von JavaScript-Suchfunktionalität in einer Webanwendung. Wenn die Suchfunktionalität vollständig mit JavaScript implementiert ist, ist weder ein {{HTMLElement("form")}}-Element noch ein Sende-{{HTMLElement("button")}} erforderlich, wenn kein Formular gesendet wird. Für die Semantik wird das `<search>`-Element enthalten, um die Such- und Filterfähigkeiten zu integrieren.

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
> Denken Sie daran, dass einige Benutzer kein JavaScript haben, und keiner Ihrer Benutzer hat JavaScript laufen, bis das JavaScript erfolgreich heruntergeladen, analysiert und ausgeführt wurde. Stellen Sie sicher, dass Ihre Benutzer auf den Inhalt Ihrer Website ohne JavaScript zugreifen können.

### Mehrere Suchen

Dieses Beispiel zeigt eine Seite mit zwei Suchfunktionen. Die erste ist eine globale Seitensuche im Header. Die zweite ist eine Suche und Filter basierend auf dem Seitenkontext, in unserem Beispiel eine Autosuche.

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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließinhalt</a>, <a href="/de/docs/Web/HTML/Content_categories#palpable_content">spürbarer Inhalt</a>.
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
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
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
