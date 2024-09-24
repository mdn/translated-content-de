---
title: "<title>: Das Dokumenttitel-Element"
slug: Web/HTML/Element/title
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}

Das **`<title>`** [HTML](/de/docs/Web/HTML)-Element definiert den Titel des Dokuments, der in der Titelzeile eines {{glossary("Browser", "Browsers")}} oder in einem Tab einer Seite angezeigt wird. Es enthält nur Text; Tags innerhalb des Elements werden ignoriert.

```html
<title>Omas Heavy Metal Festival Journal</title>
```

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Das `<title>`-Element wird immer innerhalb des {{HTMLElement("head")}}-Blocks einer Seite verwendet.

### Seitentitel und SEO

Der Inhalt eines Seitentitels kann erhebliche Auswirkungen auf die Suchmaschinenoptimierung ({{glossary("SEO")}}) haben. Im Allgemeinen schneidet ein längerer, beschreibender Titel besser ab als kurze oder generische Titel. Der Inhalt des Titels ist eine der Komponenten, die von Suchmaschinenalgorithmen verwendet werden, um die Reihenfolge der Seiten in den Suchergebnissen zu bestimmen. Zudem ist der Titel der erste "Aufhänger", mit dem Sie die Aufmerksamkeit der Leser auf der Ergebnisseite gewinnen.

Einige Richtlinien und Tipps für die Erstellung guter Titel:

- Vermeiden Sie ein- oder zweiwortige Titel. Verwenden Sie einen beschreibenden Ausdruck oder ein Begriff-Definition-Paar für Glossar- oder Referenzseiten.
- Suchmaschinen zeigen in der Regel die ersten 55–60 Zeichen eines Seitentitels an. Text darüber hinaus kann verloren gehen, also versuchen Sie, Titel nicht länger als das zu machen. Falls Sie einen längeren Titel verwenden müssen, stellen Sie sicher, dass die wichtigen Teile früher kommen und dass nichts Kritisches in dem Teil steht, der wahrscheinlich abgeschnitten wird.
- Verwenden Sie keine "Schlüsselwort-Blöcke". Wenn Ihr Titel nur eine Liste von Wörtern ist, neigen Algorithmen oft dazu, die Position Ihrer Seite in den Suchergebnissen zu verringern.
- Stellen Sie sicher, dass Ihre Titel innerhalb Ihrer eigenen Website so einzigartig wie möglich sind. Doppelte oder nahezu doppelte Titel können zu ungenauen Suchergebnissen führen.

## Barrierefreiheit

Es ist wichtig, einen genauen und prägnanten Titel bereitzustellen, um den Zweck der Seite zu beschreiben.

Eine gängige Navigationstechnik für Benutzer von unterstützenden Technologien ist das Lesen des Seitentitels, um den Inhalt der Seite zu erfassen. Dies liegt daran, dass das Navigieren in eine Seite, um ihren Inhalt zu bestimmen, ein zeitaufwändiger und potenziell verwirrender Prozess sein kann. Titel sollten für jede Seite einer Website eindeutig sein, idealerweise mit der Angabe des Hauptzwecks der Seite zuerst, gefolgt vom Namen der Website. Die Einhaltung dieses Musters wird dazu beitragen, sicherzustellen, dass der Hauptzweck der Seite von einem Screenreader zuerst angekündigt wird. Dies bietet eine weit bessere Erfahrung, als den Namen einer Website vor dem eindeutigen Seitentitel anhören zu müssen, für jede Seite, die ein Benutzer auf derselben Website navigiert.

### Beispiele

```html
<title>Menü - Blue House Chinesisches Essen - FoodYum: Heute online zum Mitnehmen!</title>
```

Wenn ein Formular, das Fehler enthält, übermittelt wird und die Einreichung die aktuelle Seite neu rendert, kann der Titel verwendet werden, um Benutzer auf Fehler bei ihrer Einreichung aufmerksam zu machen. Zum Beispiel aktualisieren Sie den `title`-Wert der Seite, um signifikante Zustandsänderungen der Seite widerzuspiegeln (wie beispielsweise Validierungsprobleme bei Formularen).

```html
<title>
  2 Fehler - Ihre Bestellung - Sea Food Store - Essen: Heute online zum Mitnehmen!
</title>
```

> [!NOTE]
> Derzeit wird das dynamische Aktualisieren eines Seitentitels nicht automatisch von Screenreadern angekündigt. Wenn Sie den Seitentitel aktualisieren, um signifikante Zustandsänderungen einer Seite widerzuspiegeln, ist möglicherweise die Verwendung von [ARIA Live Regionen](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) erforderlich.

- [MDN Verständnis WCAG, Richtlinie 2.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis von Erfolgskriterium 2.4.2 | W3C Verständnis WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html)

## Beispiele

```html
<title>Tolle interessante Dinge</title>
```

Dieses Beispiel stellt eine Seite dar, deren Titel (wie oben im Fenster oder im Tab des Fensters angezeigt) "Tolle interessante Dinge" lautet.

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
          >Metadateninhalte</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Text, der kein zwischen Elementen {{glossary("whitespace")}} ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Sowohl öffnende als auch schließende Tags sind erforderlich. Beachten Sie, dass das Weglassen von
        <code>&#x3C;/title></code> dazu führen sollte, dass der Browser den Rest der Seite ignoriert.
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
      <td>{{domxref("HTMLTitleElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG [`<title>`](/de/docs/Web/SVG/Element/title)-Element
