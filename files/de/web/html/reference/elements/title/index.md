---
title: "<title>: Das Dokumenttitel-Element"
slug: Web/HTML/Reference/Elements/title
l10n:
  sourceCommit: 0c73bebdb12fb60f6305b3206ebc6aa9bda81739
---

{{HTMLSidebar}}

Das **`<title>`**-[HTML](/de/docs/Web/HTML)-Element definiert den Dokumenttitel, der in der Titelleiste eines {{Glossary("Browser", "Browsers")}} oder im Tab einer Seite angezeigt wird. Es enthält nur Text; HTML-Tags innerhalb des Elements werden, falls vorhanden, ebenfalls als einfacher Text behandelt.

```html
<title>Grandma's Heavy Metal Festival Journal</title>
```

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Nutzungshinweise

Das `<title>`-Element wird immer innerhalb eines {{HTMLElement("head")}}-Blocks einer Seite verwendet.

### Seitentitel und SEO

Der Inhalt eines Seitentitels kann erhebliche Auswirkungen auf die Suchmaschinenoptimierung ({{Glossary("SEO", "SEO")}}) haben. Im Allgemeinen haben längere, beschreibende Titel eine bessere Leistung als kurze oder generische Titel. Der Inhalt des Titels ist einer der Faktoren, die von Suchmaschinenalgorithmen verwendet werden, um zu entscheiden, in welcher Reihenfolge Seiten in den Suchergebnissen gelistet werden. Außerdem ist der Titel der erste „Haken“, der die Aufmerksamkeit der Leser auf der Suchergebnisseite erregen soll.

Einige Richtlinien und Tipps für das Verfassen guter Titel:

- Vermeiden Sie ein- oder zwei-Wort-Titel. Verwenden Sie eine beschreibende Phrase oder ein Begriffs-Definitions-Paar für Glossar- oder Referenzseiten.
- Suchmaschinen zeigen typischerweise die ersten 55–60 Zeichen eines Seitentitels an. Text darüber hinaus kann verloren gehen, daher versuchen Sie, Titel nicht länger als das zu machen. Wenn Sie einen längeren Titel verwenden müssen, stellen Sie sicher, dass die wichtigen Teile früher erscheinen und dass nichts Kritisches im Teil des Titels enthalten ist, der wahrscheinlich entfernt wird.
- Verwenden Sie keine „Keyword-Blobs“. Wenn Ihr Titel nur aus einer Liste von Wörtern besteht, verringern Algorithmen oft die Position Ihrer Seite in den Suchergebnissen.
- Versuchen Sie, Ihre Titel auf Ihrer eigenen Website so einzigartig wie möglich zu machen. Doppelte oder nahezu doppelte Titel können zu ungenauen Suchergebnissen führen.

## Barrierefreiheit

Es ist wichtig, einen genauen und prägnanten Titel bereitzustellen, um den Zweck der Seite zu beschreiben.

Eine gängige Navigationstechnik für Benutzer von unterstützenden Technologien besteht darin, den Seitentitel zu lesen und daraus den Inhalt der Seite zu schließen. Dies liegt daran, dass es ein zeitaufwändiger und potenziell verwirrender Prozess sein kann, in eine Seite zu navigieren, um deren Inhalt zu bestimmen. Titel sollten auf jeder Seite einer Website einzigartig sein und idealerweise den Hauptzweck der Seite zuerst zeigen, gefolgt vom Namen der Website. Das Befolgen dieses Musters hilft sicherzustellen, dass der Hauptzweck der Seite zuerst von einem Screenreader bekannt gegeben wird. Dies bietet eine weitaus bessere Erfahrung, als für jede Seite, zu der ein Benutzer auf derselben Website navigiert, den Namen einer Website hören zu müssen, bevor der einzigartige Seitentitel kommt.

### Beispiele

```html
<title>Menu - Blue House Chinese Food - FoodYum: Online takeout today!</title>
```

Wenn eine Formulareinsendung Fehler enthält und die Einsendung die aktuelle Seite neu rendert, kann der Titel verwendet werden, um Benutzer auf etwaige Fehler in ihrer Einsendung aufmerksam zu machen. Beispielsweise aktualisieren Sie den Seiten-`title`-Wert, um signifikante Zustandsänderungen der Seite (z. B. Probleme bei der Formularvalidierung) widerzuspiegeln.

```html
<title>
  2 errors - Your order - Sea Food Store - Food: Online takeout today!
</title>
```

> [!NOTE]
> Derzeit wird das dynamische Aktualisieren eines Seitentitels nicht automatisch von Screenreadern angekündigt. Wenn Sie den Seitentitel aktualisieren, um signifikante Änderungen des Seitenzustands widerzuspiegeln, kann die Verwendung von [ARIA Live Regions](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) erforderlich sein.

- [MDN Verständnis von WCAG, Leitfaden 2.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis des Erfolgskriteriums 2.4.2 | W3C Verständnis von WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html)

## Beispiele

```html
<title>Awesome interesting stuff</title>
```

Dieses Beispiel erstellt eine Seite, deren Titel (wie oben im Fenster oder im Tab des Fensters angezeigt) "Awesome interesting stuff" lautet.

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
        Text, der nicht aus Zwischen-Element-{{Glossary("whitespace", "Leerzeichen")}} besteht.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Sowohl öffnende als auch schließende Tags sind erforderlich. Beachten Sie, dass das Weglassen von
        <code>&#x3C;/title></code> dazu führen sollte, dass der Browser den Rest der
        Seite ignoriert.
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
