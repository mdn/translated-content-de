---
title: "<title>: Das Dokumenten-Titel-Element"
slug: Web/HTML/Element/title
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

Das **`<title>`** [HTML](/de/docs/Web/HTML)-Element definiert den Titel des Dokuments, der in der Titelleiste eines {{Glossary("Browser", "Browsers")}} oder im Tab einer Seite angezeigt wird. Es enthält nur Text; Tags innerhalb des Elements werden ignoriert.

```html
<title>Grandma's Heavy Metal Festival Journal</title>
```

## Attribute

Dieses Element schließt nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes) ein.

## Anwendungshinweise

Das `<title>`-Element wird immer innerhalb des {{HTMLElement("head")}} Blocks einer Seite verwendet.

### Seitentitel und SEO

Der Inhalt eines Seitentitels kann erhebliche Auswirkungen auf die Suchmaschinenoptimierung ({{Glossary("SEO", "SEO")}}) haben. Im Allgemeinen erzielt ein längerer, beschreibender Titel bessere Ergebnisse als kurze oder generische Titel. Der Inhalt des Titels ist eine der Komponenten, die von Suchmaschinenalgorithmen verwendet werden, um die Reihenfolge zu bestimmen, in der Seiten in den Suchergebnissen gelistet werden. Außerdem ist der Titel der erste Anreiz, mit dem Sie die Aufmerksamkeit der Leser auf der Seite mit den Suchergebnissen erregen.

Einige Richtlinien und Tipps zur Erstellung guter Titel:

- Vermeiden Sie ein- oder zwei-Wort-Titel. Verwenden Sie eine beschreibende Phrase oder eine Begriff-Definition-Paarung für Glossar- oder referenzartige Seiten.
- Suchmaschinen zeigen in der Regel die ersten 55–60 Zeichen eines Seitentitels an. Text, der darüber hinausgeht, könnte verloren gehen, also versuchen Sie, keine längeren Titel zu haben. Wenn Sie einen längeren Titel verwenden müssen, stellen Sie sicher, dass die wichtigen Teile früher kommen und dass nichts Kritisches in dem Teil des Titels steht, der wahrscheinlich abgeschnitten wird.
- Verwenden Sie keine "Schlüsselworthaufen". Wenn Ihr Titel nur aus einer Liste von Wörtern besteht, verringern Algorithmen oft die Position Ihrer Seite in den Suchergebnissen.
- Versuchen Sie, sicherzustellen, dass Ihre Titel innerhalb Ihrer eigenen Website so einzigartig wie möglich sind. Doppelte oder nahezu doppelte Titel können zu ungenauen Suchergebnissen beitragen.

## Barrierefreiheit

Es ist wichtig, einen genauen und prägnanten Titel bereitzustellen, um den Zweck der Seite zu beschreiben.

Eine gängige Navigationstechnik für Benutzer von assistiven Technologien ist es, den Seitentitel zu lesen und daraus abzuleiten, welchen Inhalt die Seite enthält. Dies liegt daran, dass das Navigieren auf eine Seite, um deren Inhalt zu bestimmen, ein zeitaufwändiger und potenziell verwirrender Prozess sein kann. Titel sollten für jede Seite einer Website einzigartig sein und idealerweise den Hauptzweck der Seite zuerst angeben, gefolgt vom Namen der Website. Ein solcher Aufbau stellt sicher, dass der primäre Zweck der Seite zuerst von einem Screenreader angekündigt wird. Dies bietet eine weitaus bessere Erfahrung, als auf jeder Seite, zu der navigiert wird, den Namen der Website vor dem einzigartigen Seitentitel zu hören.

### Beispiele

```html
<title>Menu - Blue House Chinese Food - FoodYum: Online takeout today!</title>
```

Wenn eine Formularübermittlung Fehler enthält und die Übermittlung die aktuelle Seite neu lädt, kann der Titel verwendet werden, um Benutzer auf etwaige Fehler ihrer Übermittlung aufmerksam zu machen. Aktualisieren Sie zum Beispiel den `title`-Wert der Seite, um bedeutende Zustandsänderungen der Seite zu reflektieren (wie z.B. Probleme bei der Formularvalidierung).

```html
<title>
  2 errors - Your order - Sea Food Store - Food: Online takeout today!
</title>
```

> [!NOTE]
> Derzeit wird das dynamische Aktualisieren des Seitentitels nicht automatisch von Screenreadern angekündigt. Wenn Sie den Seitentitel aktualisieren, um bedeutende Änderungen am Zustand einer Seite widerzuspiegeln, kann die Verwendung von [ARIA Live Regions](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) erforderlich sein.

- [MDN Understanding WCAG, Leitfaden zur Erklärung von Richtlinie 2.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis des Erfolgskriteriums 2.4.2 | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html)

## Beispiele

```html
<title>Awesome interesting stuff</title>
```

Dieses Beispiel erstellt eine Seite, deren Titel (wie oben im Fenster oder im Tab des Fensters angezeigt) als "Awesome interesting stuff" angezeigt wird.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#metadata_content"
          >Metadateninhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Text, der kein inter-element {{Glossary("whitespace", "Leerraum")}} ist.
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
      <th scope="row">Erlaubte Eltern-Elemente</th>
      <td>
        Ein {{ HTMLElement("head") }}-Element, das kein weiteres
        <code>&lt;title&gt;</code>-Element enthält.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
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

- SVG [`<title>`](/de/docs/Web/SVG/Element/title) Element
