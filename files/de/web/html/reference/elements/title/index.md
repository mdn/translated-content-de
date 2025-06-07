---
title: "<title>: Das Dokumenttitel-Element"
slug: Web/HTML/Reference/Elements/title
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

Das **`<title>`** [HTML](/de/docs/Web/HTML)-Element definiert den Titel des Dokuments, der in der Titelleiste eines {{Glossary("Browser", "Browsers")}} oder im Tab einer Seite angezeigt wird. Es enthält nur Text; Tags innerhalb des Elements werden ignoriert.

```html
<title>Grandma's Heavy Metal Festival Journal</title>
```

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

Das `<title>`-Element wird immer innerhalb des {{HTMLElement("head")}}-Blocks einer Seite verwendet.

### Seitentitel und SEO

Der Inhalt eines Seitentitels kann erhebliche Auswirkungen auf die Suchmaschinenoptimierung ({{Glossary("SEO", "SEO")}}) haben. Im Allgemeinen hat ein längerer, beschreibender Titel bessere Leistung als kurze oder generische Titel. Der Inhalt des Titels ist eine der Komponenten, die von Suchmaschinenalgorithmen verwendet werden, um die Reihenfolge zu bestimmen, in der Seiten in den Suchergebnissen aufgelistet werden. Der Titel ist auch der erste "Haken", mit dem Sie die Aufmerksamkeit der Leser auf der Suchergebnisseite erlangen.

Einige Richtlinien und Tipps zur Erstellung guter Titel:

- Vermeiden Sie ein- oder zwei-Wort-Titel. Verwenden Sie einen beschreibenden Satz oder eine Begriff-Definition-Kombination für Glossar- oder Referenzseiten.
- Suchmaschinen zeigen typischerweise die ersten 55–60 Zeichen eines Seitentitels an. Text darüber hinaus kann verloren gehen, daher versuchen Sie, keine längeren Titel zu haben. Wenn Sie einen längeren Titel verwenden müssen, stellen Sie sicher, dass die wichtigen Teile früher erscheinen und dass nichts Kritisches in dem Teil des Titels ist, der wahrscheinlich abgeschnitten wird.
- Verwenden Sie keine "Keyword-Blöcke". Wenn Ihr Titel nur eine Liste von Wörtern ist, verringern Algorithmen oft die Position Ihrer Seite in den Suchergebnissen.
- Versuchen Sie sicherzustellen, dass Ihre Titel innerhalb Ihrer eigenen Website so einzigartig wie möglich sind. Doppelte oder nahezu doppelte Titel können zu ungenauen Suchergebnissen beitragen.

## Barrierefreiheit

Es ist wichtig, einen genauen und prägnanten Titel bereitzustellen, um den Zweck der Seite zu beschreiben.

Eine gängige Navigationstechnik für Benutzer von unterstützender Technologie besteht darin, den Seitentitel zu lesen und daraus den Inhalt der Seite zu erschließen. Dies liegt daran, dass die Navigation in eine Seite, um ihren Inhalt zu bestimmen, ein zeitaufwändiger und möglicherweise verwirrender Prozess sein kann. Titel sollten für jede Seite einer Website einzigartig sein, idealerweise zuerst den Hauptzweck der Seite und dann den Namen der Website aufführen. Durch dieses Muster wird sichergestellt, dass der Hauptzweck der Seite zuerst von einem Screenreader angekündigt wird. Dies bietet eine weitaus bessere Erfahrung, als den Namen einer Website hören zu müssen, bevor der einzigartige Seitentitel für jede Seite, zu der ein Benutzer auf derselben Website navigiert.

### Beispiele

```html
<title>Menu - Blue House Chinese Food - FoodYum: Online takeout today!</title>
```

Wenn eine Formularübermittlung Fehler enthält und die Übermittlung die aktuelle Seite neu rendert, kann der Titel verwendet werden, um Benutzer auf etwaige Fehler hinzuweisen. Beispielsweise sollten Sie den `title`-Wert der Seite aktualisieren, um signifikante Änderungen des Seitenstatus widerzuspiegeln (z. B. Probleme bei der Formularvalidierung).

```html
<title>
  2 errors - Your order - Sea Food Store - Food: Online takeout today!
</title>
```

> [!NOTE]
> Derzeit werden dynamische Aktualisierungen des Seitentitels nicht automatisch von Screenreadern angekündigt. Wenn Sie den Seitentitel aktualisieren, um wesentliche Änderungen am Zustand einer Seite widerzuspiegeln, kann die Verwendung von [ARIA Live Regions](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) erforderlich sein.

- [MDN Verständnis zu WCAG, Leitfaden 2.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis des Erfolgskriteriums 2.4.2 | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html)

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
        Text, der kein inter-Element-{{Glossary("whitespace", "Leerzeichen")}} ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Sowohl öffnende als auch schließende Tags sind erforderlich. Beachten Sie, dass das Weglassen von
        <code>&#x3C;/title></code> dazu führen sollte, dass der Browser den Rest
        der Seite ignoriert.
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

- SVG [`<title>`](/de/docs/Web/SVG/Reference/Element/title)-Element
