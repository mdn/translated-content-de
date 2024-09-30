---
title: "<title>: Das Document Title-Element"
slug: Web/HTML/Element/title
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}

Das **`<title>`**-[HTML](/de/docs/Web/HTML)-Element definiert den Titel des Dokuments, der in der Titelleiste eines [Browsers](/de/docs/Glossary/Browser) oder in einem Tab der Seite angezeigt wird. Es enthält nur Text; Tags innerhalb des Elements werden ignoriert.

```html
<title>Grandma's Heavy Metal Festival Journal</title>
```

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Nutzungshinweise

Das `<title>`-Element wird immer innerhalb des {{HTMLElement("head")}}-Blocks einer Seite verwendet.

### Seitentitel und SEO

Der Inhalt eines Seitentitels kann erhebliche Auswirkungen auf die Suchmaschinenoptimierung ([SEO](/de/docs/Glossary/SEO)) haben. Im Allgemeinen erzielt ein längerer, beschreibender Titel bessere Leistungen als kurze oder generische Titel. Der Inhalt des Titels ist eine der Komponenten, die von Suchmaschinenalgorithmen verwendet werden, um die Reihenfolge der Seiten in den Suchergebnissen zu bestimmen. Außerdem ist der Titel der erste "Hook", mit dem Sie die Aufmerksamkeit der Leser auf der Suchergebnisseite gewinnen.

Einige Richtlinien und Tipps für gute Titel:

- Vermeiden Sie Ein- oder Zwei-Wort-Titel. Verwenden Sie eine beschreibende Phrase oder ein Begriff-Definition-Paar für Glossar- oder Referenzseiten.
- Suchmaschinen zeigen typischerweise die ersten 55–60 Zeichen eines Seitentitels an. Text darüber hinaus kann verloren gehen, also versuchen Sie, die Titel nicht länger als das zu halten. Müssen Sie einen längeren Titel verwenden, stellen Sie sicher, dass die wichtigen Teile früher kommen und nichts Kritisches in dem Abschnitt des Titels steht, der wahrscheinlich abgeschnitten wird.
- Verwenden Sie keine "Keyword-Blöcke". Wenn Ihr Titel nur eine Liste von Wörtern ist, verringern Algorithmen oft die Position Ihrer Seite in den Suchergebnissen.
- Versuchen Sie sicherzustellen, dass Ihre Titel innerhalb Ihrer eigenen Website so einzigartig wie möglich sind. Doppelte oder fast doppelte Titel können zu ungenauen Suchergebnissen beitragen.

## Barrierefreiheit

Es ist wichtig, einen genauen und prägnanten Titel bereitzustellen, der den Zweck der Seite beschreibt.

Eine gängige Navigationstechnik für Benutzer von unterstützender Technologie ist das Lesen des Seitentitels, um den Inhalt der Seite zu ermitteln. Dies liegt daran, dass das Navigieren in eine Seite, um ihren Inhalt zu bestimmen, ein zeitaufwendiger und potenziell verwirrender Prozess sein kann. Titel sollten für jede Seite einer Website einzigartig sein, idealerweise den Hauptzweck der Seite zuerst anzeigen, gefolgt vom Namen der Website. Diese Vorgehensweise hilft sicherzustellen, dass der Hauptzweck der Seite zuerst von einem Screenreader angekündigt wird. Dies bietet ein weit besseres Erlebnis, als den Namen einer Website vor dem einzigartigen Seitentitel hören zu müssen, für jede Seite, die ein Benutzer innerhalb derselben Website besucht.

### Beispiele

```html
<title>Menu - Blue House Chinese Food - FoodYum: Online takeout today!</title>
```

Wenn eine Formularübermittlung Fehler enthält und die Übermittlung die aktuelle Seite neu rendert, kann der Titel verwendet werden, um Benutzern auf Fehler bei ihrer Übermittlung hinzuweisen. Beispielsweise aktualisieren Sie den Wert des `title` der Seite, um bedeutende Zustandsänderungen der Seite (wie Probleme bei der Formularvalidierung) widerzuspiegeln.

```html
<title>
  2 errors - Your order - Sea Food Store - Food: Online takeout today!
</title>
```

> [!NOTE]
> Derzeit wird das dynamische Aktualisieren des Titels einer Seite nicht automatisch von Screenreadern angekündigt. Wenn Sie den Seitentitel aktualisieren, um bedeutende Änderungen am Zustand einer Seite widerzuspiegeln, kann die Verwendung von [ARIA Live-Regionen](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) erforderlich sein.

- [MDN Verständnis von WCAG, Erläuterungen zur Richtlinie 2.4](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis des Erfolgskriteriums 2.4.2 | W3C Verständnis von WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html)

## Beispiele

```html
<title>Awesome interesting stuff</title>
```

Dieses Beispiel stellt eine Seite dar, deren Titel (wie oben im Fenster oder im Tab des Fensters angezeigt) als "Großartige interessante Dinge" angezeigt wird.

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
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        Text, der kein Zwischen-Element-\[Leerraum\](/de/docs/Glossary/whitespace) ist.
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
      <th scope="row">Zulässige Eltern</th>
      <td>
        Ein {{HTMLElement("head")}}-Element, das kein anderes
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
      <th scope="row">Zulässige ARIA-Rollen</th>
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
