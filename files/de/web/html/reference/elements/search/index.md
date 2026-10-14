---
title: "`<search>`: Allgemeines HTML-Suchelement"
short-title: <search>
slug: Web/HTML/Reference/Elements/search
l10n:
  sourceCommit: 46afd57950146568819d0bf98175a2ffdbe079d7
---

Das **`<search>`**-[HTML](/de/docs/Web/HTML)-Element ist ein Container für die Teile eines Dokuments oder einer Anwendung, die Formularsteuerelemente oder andere Inhalte für eine Such- oder Filterfunktion enthalten. Das `<search>`-Element kennzeichnet den Zweck seines Inhalts semantisch als Suche oder Filterung. Die Such- oder Filterfunktion kann sich auf die Website oder Anwendung, die aktuelle Webseite oder das aktuelle Dokument oder auf das gesamte Internet beziehungsweise einen Teil davon beziehen.

## Attribute

Dieses Element unterstützt nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

Das `<search>`-Element dient nicht zur Darstellung von Suchergebnissen. Suchergebnisse oder gefilterte Ergebnisse sollten stattdessen als Teil des Hauptinhalts der Webseite angezeigt werden. Vorschläge und Links einer „Schnellsuche“ können jedoch innerhalb des `<search>`-Elements stehen, da sie Teil der Suchfunktion sind.

## Barrierefreiheit

Das `<search>`-Element definiert einen [`search`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)-Landmark. Daher muss einem {{HTMLElement('form')}}-Element nicht zusätzlich `role=search` zugewiesen werden.

## Beispiele

### Suchformular im Header

Dieses Beispiel zeigt, wie `<search>` als Container für eine Suche im Header einer Website verwendet wird, um die gesamte Website zu durchsuchen. `<search>` ist ein semantischer Container für das {{HTMLElement("form")}}-Element, das die von der Benutzerin oder dem Benutzer eingegebene Suchanfrage an einen Server sendet.

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

```js hidden
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});
```

#### Ergebnis

{{EmbedLiveSample('Header search form')}}

### Suche in einer Webanwendung

Dieses Beispiel zeigt mögliche DOM-Inhalte, wenn eine Suchfunktion mit JavaScript dynamisch in eine Webanwendung eingebunden wird. Wenn die Suchfunktion vollständig mit JavaScript umgesetzt wird und kein Formular abgesendet wird, sind weder ein {{HTMLElement("form")}}-Element noch ein {{HTMLElement("button")}}-Element zum Absenden erforderlich. Das `<search>`-Element dient dabei als semantischer Container für die Such- und Filterfunktionen.

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
> Bedenken Sie, dass manche Nutzerinnen und Nutzer kein JavaScript zur Verfügung haben. Zudem wird JavaScript erst ausgeführt, nachdem es erfolgreich heruntergeladen, geparst und ausgeführt wurde. Stellen Sie sicher, dass die Inhalte Ihrer Website auch bei deaktiviertem JavaScript zugänglich sind.

### Mehrere Suchfunktionen

Dieses Beispiel zeigt eine Seite mit zwei Suchfunktionen. Die erste ist eine globale Suche für die gesamte Website im Header. Die zweite ist eine Suche mit Filtermöglichkeiten, die sich auf den Seiteninhalt bezieht – in diesem Beispiel auf Autos.

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

## Technische Übersicht

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließinhalt</a>, <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content">wahrnehmbarer Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließinhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Weglassen von Tags</th>
      <td>Nicht zulässig; sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role">search</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
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

- Weitere Elemente im Zusammenhang mit der Suche: {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("aside")}}, {{HTMLElement("nav")}}, {{HTMLElement("form")}}
- [ARIA: Rolle „search“](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)
