---
title: "`<title>` HTML-Dokumenttitel-Element"
short-title: <title>
slug: Web/HTML/Reference/Elements/title
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<title>`** [HTML](/de/docs/Web/HTML)-Element definiert den Titel des Dokuments, der in der Titelleiste eines {{Glossary("Browser", "Browsers")}} oder einem Tab einer Seite angezeigt wird. Es enthält nur Text; HTML-Tags innerhalb des Elements, falls vorhanden, werden ebenfalls als reiner Text behandelt.

```html
<title>Grandma's Heavy Metal Festival Journal</title>
```

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

Das `<title>`-Element wird immer innerhalb des {{HTMLElement("head")}}-Blocks einer Seite verwendet.

### Seitentitel und SEO

Der Inhalt eines Seitentitels kann erhebliche Auswirkungen auf die Suchmaschinenoptimierung ({{Glossary("SEO", "SEO")}}) haben. Im Allgemeinen bringt ein längerer, beschreibender Titel bessere Ergebnisse als kurze oder generische Titel. Der Inhalt des Titels ist eine der Komponenten, die von Suchmaschinenalgorithmen verwendet werden, um die Reihenfolge zu bestimmen, in der Seiten in Suchergebnissen gelistet werden. Zudem ist der Titel der erste "Hook", um die Aufmerksamkeit der Leser, die die Suchergebnisseite überfliegen, zu gewinnen.

Einige Richtlinien und Tipps zur Erstellung guter Titel:

- Vermeiden Sie ein- oder zweiwortige Titel. Verwenden Sie eine beschreibende Phrase oder eine Begriff-Definition-Paarung für Glossar- oder Referenzseiten.
- Suchmaschinen zeigen in der Regel die ersten 55–60 Zeichen eines Seitentitels an. Text darüber hinaus kann verloren gehen, also versuchen Sie, Titel nicht länger als das zu machen. Sollten Sie einen längeren Titel verwenden müssen, stellen Sie sicher, dass die wichtigen Teile früher im Titel erscheinen und nichts Kritisches in dem Teil steht, der wahrscheinlich abgeschnitten wird.
- Verwenden Sie keine "Keyword-Blobs." Wenn Ihr Titel nur eine Liste von Wörtern ist, kann dies dazu führen, dass Ihre Seite in den Suchergebnissen weiter unten eingestuft wird.
- Versuchen Sie, Ihre Titel so einzigartig wie möglich innerhalb Ihrer eigenen Website zu gestalten. Doppelte oder nahezu doppelte Titel können zu ungenauen Suchergebnissen führen.

## Barrierefreiheit

Es ist wichtig, einen genauen und prägnanten Titel zu geben, der den Zweck der Seite beschreibt.

Eine häufige Navigationstechnik für Benutzer von unterstützenden Technologien besteht darin, den Seitentitel zu lesen und abzuleiten, welchen Inhalt die Seite enthält. Denn das Navigieren auf eine Seite, um ihren Inhalt zu bestimmen, kann ein zeitaufwändiger und potenziell verwirrender Prozess sein. Titel sollten einzigartig für jede Seite einer Website sein und idealerweise den Hauptzweck der Seite zuerst zum Vorschein bringen, gefolgt vom Namen der Website. Wenn Sie dieses Muster befolgen, wird sichergestellt, dass der Hauptzweck der Seite von einem Screenreader zuerst angekündigt wird. Dies bietet ein weit besseres Erlebnis, als bei jeder Seite, zu der ein Benutzer innerhalb derselben Website navigiert, zuerst den Namen der Website anhören zu müssen.

### Beispiele

```html
<title>Menu - Blue House Chinese Food - FoodYum: Online takeout today!</title>
```

Enthält eine Formularübermittlung Fehler und rendert die Seite deswegen erneut, kann der Titel verwendet werden, um Benutzer auf Fehler bei ihrer Übermittlung aufmerksam zu machen. Beispielsweise kann der Wert des Seitentitels aktualisiert werden, um bedeutende Zustandsänderungen der Seite widerzuspiegeln (wie Probleme bei der Formularvalidierung).

```html
<title>
  2 errors - Your order - Sea Food Store - Food: Online takeout today!
</title>
```

> [!NOTE]
> Zurzeit wird das dynamische Aktualisieren eines Seitentitels nicht automatisch von Screenreadern angekündigt. Wenn Sie den Seitentitel aktualisieren, um bedeutende Änderungen am Zustand einer Seite widerzuspiegeln, könnte auch die Verwendung von [ARIA-Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) erforderlich sein.

- [MDN-Erklärung zu WCAG, Leitlinie 2.4 Erläuterungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis des Erfolgs-Kriteriums 2.4.2 | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html)

## Beispiele

```html
<title>Awesome interesting stuff</title>
```

Dieses Beispiel erstellt eine Seite, deren Titel (wie er oben im Fenster oder im Tab des Fensters angezeigt wird) als "Awesome interesting stuff" lautet.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content"
          >Metadaten-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Text, der kein inter-element {{Glossary("whitespace", "Whitespace")}} ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Sowohl Start- als auch End-Tag sind erforderlich. Beachten Sie, dass das Weglassen von
        <code>&#x3C;/title></code> den Browser dazu veranlassen sollte, den Rest der Seite zu ignorieren.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{ HTMLElement("head") }}-Element, das kein anderes
        <code>&lt;title&gt;</code>-Element enthält.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt.</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLTitleElement`](/de/docs/Web/API/HTMLTitleElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{svgelement("title")}} Element
