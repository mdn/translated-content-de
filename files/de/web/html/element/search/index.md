---
title: "<search>: Das generische Suchelement"
slug: Web/HTML/Element/search
l10n:
  sourceCommit: 3ad6abf39faf306d8fc4846706bf0f8465d19130
---

{{HTMLSidebar}}

Das **`<search>`** [HTML](/de/docs/Web/HTML)-Element ist ein Container, der die Teile des Dokuments oder der Anwendung mit Formularelementen oder anderem Inhalt zur Durchführung einer Such- oder Filteroperation darstellt. Das `<search>`-Element identifiziert semantisch den Zweck seines Inhalts als solche mit Such- oder Filterfähigkeiten. Die Such- oder Filterfunktionalität kann für die Website oder Anwendung, die aktuelle Webseite oder das Dokument oder das gesamte Internet oder einen Abschnitt davon sein.

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Nutzungshinweise

Das `<search>`-Element dient nicht zur Darstellung von Suchergebnissen. Vielmehr sollten Such- oder gefilterte Ergebnisse als Teil des Hauptinhalts der Webseite präsentiert werden. Dennoch sind Vorschläge und Links, die Teil einer "Schnellsuche"-Funktionalität innerhalb der Such- oder Filterfunktion sind, angemessen im Inhalt des `<search>`-Elements eingebettet, da sie Suchmerkmale sind.

## Barrierefreiheit

Das `<search>`-Element definiert ein [`search`](/de/docs/Web/Accessibility/ARIA/Roles/search_role) Landmark. Dies macht die Hinzufügung von `role=search` zu einem {{HTMLElement('form')}}-Element überflüssig.

## Beispiele

### Suchformular im Header

Dieses Beispiel demonstriert die Verwendung von `<search>` als Container für eine Suche innerhalb eines Website-Headers, um eine einfache siteweite Suche durchzuführen. Das `<search>` ist ein semantischer Container für das {{HTMLElement("form")}}, das die vom Benutzer eingegebene Suchanfrage an einen Server sendet.

#### HTML

```html
<header>
  <h1>Film-Website</h1>
  <search>
    <form action="./search/">
      <label for="movie">Finde einen Film</label>
      <input type="search" id="movie" name="q" />
      <button type="submit">Suchen</button>
    </form>
  </search>
</header>
```

#### Ergebnis

{{EmbedLiveSample('Header search form')}}

### Web-App-Suche

Dieses Beispiel veranschaulicht potenziellen DOM-Inhalt beim dynamischen Einbinden von JavaScript-Suchfunktionalität in einer Webanwendung. Wenn die Suchfunktionalität vollständig mit JavaScript implementiert wird und kein Formular übergeben wird, sind weder ein {{HTMLElement("form")}}-Element noch ein Absende-{{HTMLElement("button")}} erforderlich. Für Semantik wird das `<search>`-Element einbezogen, um die Such- und Filterfähigkeiten zu umfassen.

#### HTML

```html
<search>
  <label>
    Finden und filtern Sie Ihre Anfrage
    <input type="search" id="query" />
  </label>
  <label>
    <input type="checkbox" id="exact-only" />
    Nur exakte Treffer
  </label>

  <section>
    <h3>Ergebnisse:</h3>
    <ul id="results">
      <!-- Suchergebnisinhalt -->
    </ul>
    <output id="no-results">
      <!-- Kein Ergebnisinhalt -->
    </output>
  </section>
</search>
```

#### Ergebnis

{{EmbedLiveSample('Web app search')}}

> [!NOTE]
> Denken Sie daran, dass einige Benutzer kein JavaScript haben und keiner Ihrer Benutzer JavaScript ausführt, bis das JavaScript erfolgreich heruntergeladen, geparst und ausgeführt wurde. Stellen Sie sicher, dass Ihre Benutzer auf den Inhalt Ihrer Website zugreifen können, wenn JavaScript deaktiviert ist.

### Mehrere Suchen

Dieses Beispiel zeigt eine Seite mit zwei Suchfunktionen. Die erste ist eine globale Site-Suche im Header. Die zweite ist eine Suche und Filterung basierend auf dem Seitennkontext, in unserem Beispiel eine Autosuche.

#### HTML

```html
<body>
  <header>
    <h1>Autovermietung</h1>
    <search title="Website">...</search>
  </header>
  <main>
    <h2>Verfügbare Mietwagen</h2>
    <search title="Cars">
      <h3>Ergebnisse filtern</h3>
      ...
    </search>
    <article>
      <!-- Suchergebnisinhalt -->
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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>, <a href="/de/docs/Web/HTML/Content_categories#palpable_content">greifbarer Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl Anfangs- als auch End-Tags sind zwingend erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
      <td>{{domxref("HTMLElement")}}</td>
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
