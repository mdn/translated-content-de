---
title: "<title>: Das Dokumenttitel-Element"
slug: Web/HTML/Reference/Elements/title
l10n:
  sourceCommit: 96a73163513476fe49bfba695acedb7622135354
---

Das **`<title>`** [HTML](/de/docs/Web/HTML)-Element definiert den Dokumenttitel, der in der Titelleiste eines {{Glossary("Browser", "Browsers")}} oder im Tab einer Seite angezeigt wird. Es enthält nur Text; HTML-Tags innerhalb des Elements, falls vorhanden, werden ebenfalls als reiner Text behandelt.

```html
<title>Grandma's Heavy Metal Festival Journal</title>
```

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Nutzungshinweise

Das `<title>`-Element wird immer innerhalb des {{HTMLElement("head")}}-Blocks einer Seite verwendet.

### Seitentitel und SEO

Der Inhalt eines Seitentitels kann erhebliche Auswirkungen auf die Suchmaschinenoptimierung ({{Glossary("SEO", "SEO")}}) haben. Im Allgemeinen wird ein längerer, beschreibender Titel besser performen als kurze oder generische Titel. Der Inhalt des Titels ist eine der Komponenten, die Suchmaschinenalgorithmen verwenden, um die Reihenfolge zu bestimmen, in der Seiten in Suchergebnissen aufgelistet werden. Außerdem ist der Titel der erste „Hook“, mit dem Sie die Aufmerksamkeit von Lesern auf sich ziehen, die auf die Suchergebnisseite blicken.

Einige Richtlinien und Tipps zum Verfassen guter Titel:

- Vermeiden Sie Ein- oder Zwei-Wort-Titel. Verwenden Sie eine beschreibende Phrase oder eine Begriff-Definition-Paarung für Glossar- oder Referenzseiten.
- Suchmaschinen zeigen normalerweise die ersten 55–60 Zeichen eines Seitentitels an. Text darüber hinaus kann verloren gehen, daher sollten Sie versuchen, keine längeren Titel zu haben. Wenn Sie einen längeren Titel verwenden müssen, stellen Sie sicher, dass die wichtigen Teile früher kommen und dass nichts Kritisches in dem Teil des Titels ist, der vermutlich abgeschnitten wird.
- Verwenden Sie keine „Schlagworthaufen“. Wenn Ihr Titel nur eine Liste von Wörtern ist, reduzieren Algorithmen oft die Position Ihrer Seite in den Suchergebnissen.
- Stellen Sie sicher, dass Ihre Titel innerhalb Ihrer eigenen Website so einzigartig wie möglich sind. Doppelte - oder nahezu doppelte - Titel können zu ungenauen Suchergebnissen führen.

## Barrierefreiheit

Es ist wichtig, einen genauen und prägnanten Titel bereitzustellen, um den Zweck der Seite zu beschreiben.

Eine gängige Navigationstechnik für Benutzer von unterstützenden Technologien ist, den Titel der Seite zu lesen und den Inhalt zu erschließen, den die Seite enthält. Dies liegt daran, dass das Navigieren in eine Seite, um deren Inhalt zu bestimmen, ein zeitaufwendiger und potenziell verwirrender Prozess sein kann. Titel sollten eindeutig für jede Seite einer Website sein und idealerweise den Hauptzweck der Seite zuerst darstellen, gefolgt vom Namen der Website. Die Einhaltung dieses Musters wird sicherstellen, dass der Hauptzweck der Seite von einem Screenreader zuerst angekündigt wird. Dies bietet ein weit besseres Erlebnis, als den Namen einer Website vor dem eindeutigen Seitentitel hören zu müssen, für jede Seite, die ein Benutzer innerhalb derselben Website besucht.

### Beispiele

```html
<title>Menu - Blue House Chinese Food - FoodYum: Online takeout today!</title>
```

Wenn eine Formularübermittlung Fehler enthält und das Absenden die aktuelle Seite neu rendert, kann der Titel verwendet werden, um Benutzer auf etwaige Fehler bei ihrer Übermittlung aufmerksam zu machen. Aktualisieren Sie zum Beispiel den Wert des Seitentitels, um bedeutende Zustandsänderungen der Seite (wie Validierungsprobleme im Formular) widerzuspiegeln.

```html
<title>
  2 errors - Your order - Sea Food Store - Food: Online takeout today!
</title>
```

> [!NOTE]
> Derzeit wird das dynamische Aktualisieren eines Seitentitels nicht automatisch von Screenreadern angekündigt. Wenn Sie den Seitentitel aktualisieren, um bedeutende Änderungen am Zustand einer Seite widerzuspiegeln, kann die Verwendung von [ARIA Live Regions](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) erforderlich sein.

- [MDN Verständnis der WCAG, Erklärungen zu Leitlinie 2.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis des Erfolgskriteriums 2.4.2 | W3C Verständnis WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html)

## Beispiele

```html
<title>Awesome interesting stuff</title>
```

Dieses Beispiel erstellt eine Seite, deren Titel (wie oben im Fenster oder im Tab des Fensters angezeigt) als "Awesome interesting stuff" lautet.

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
        Text, der kein zwischenelementares {{Glossary("whitespace", "Whitespace")}} ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Sowohl öffnende als auch schließende Tags sind erforderlich. Beachten Sie, dass das Weglassen von
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

- SVG {{svgelement("title")}}-Element
