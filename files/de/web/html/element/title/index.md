---
title: "<title>: Das Dokumenttitel-Element"
slug: Web/HTML/Element/title
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}

Das **`<title>`** [HTML](/de/docs/Web/HTML) Element definiert den Titel des Dokuments, der in der Titelleiste eines [Browsers](/de/docs/Glossary/Browser) oder dem Tab einer Seite angezeigt wird. Es enthält nur Text; Tags innerhalb des Elements werden ignoriert.

```html
<title>Grandma's Heavy Metal Festival Journal</title>
```

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Das `<title>` Element wird immer innerhalb eines {{HTMLElement("head")}} Blocks einer Seite verwendet.

### Seitentitel und SEO

Der Inhalt eines Seitentitels kann erhebliche Auswirkungen auf die Suchmaschinenoptimierung ([SEO](/de/docs/Glossary/SEO)) haben. Im Allgemeinen performt ein längerer, beschreibender Titel besser als kurze oder generische Titel. Der Inhalt des Titels ist eine der Komponenten, die von Suchmaschinenalgorithmen verwendet werden, um die Reihenfolge zu bestimmen, in der Seiten in den Suchergebnissen gelistet werden. Außerdem ist der Titel der erste "Anker", mit dem Sie die Aufmerksamkeit der Leser auf der Suchergebnisseite gewinnen.

Einige Richtlinien und Tipps für das Erstellen guter Titel:

- Vermeiden Sie Ein- oder Zwei-Wort-Titel. Verwenden Sie eine beschreibende Phrase oder eine Begriff-Definition-Paarung für Glossar- oder Referenzseiten.
- Suchmaschinen zeigen typischerweise die ersten 55–60 Zeichen eines Seitentitels an. Text, der darüber hinausgeht, kann verloren gehen, versuchen Sie daher, keine längeren Titel zu verwenden. Wenn Sie einen längeren Titel verwenden müssen, stellen Sie sicher, dass die wichtigen Teile früher kommen und nichts Kritisches in dem Teil des Titels steht, der wahrscheinlich abgeschnitten wird.
- Verwenden Sie keine "Schlüsselwort-Blöcke". Wenn Ihr Titel nur aus einer Liste von Wörtern besteht, reduzieren Algorithmen oft die Position Ihrer Seite in den Suchergebnissen.
- Versuchen Sie, sicherzustellen, dass Ihre Titel so einzigartig wie möglich innerhalb Ihrer eigenen Website sind. Doppelte oder nahezu doppelte Titel können zu ungenauen Suchergebnissen führen.

## Barrierefreiheit

Es ist wichtig, einen genauen und prägnanten Titel bereitzustellen, um den Zweck der Seite zu beschreiben.

Eine gängige Navigationstechnik für Nutzer von unterstützender Technologie ist das Lesen des Seitentitels, um den Inhalt der Seite zu erkennen. Dies liegt daran, dass das Navigieren auf eine Seite, um deren Inhalt zu bestimmen, ein zeitaufwändiger und potenziell verwirrender Prozess sein kann. Titel sollten für jede Seite einer Website einzigartig sein und idealerweise das Hauptziel der Seite zuerst aufzeigen, gefolgt vom Namen der Website. Dieses Muster sorgt dafür, dass das Hauptziel der Seite zuerst von einem Screenreader angekündigt wird. Dies bietet eine viel bessere Erfahrung als das Anhören des Namens einer Website vor dem einzigartigen Seitentitel für jede Seite, zu der ein Benutzer auf derselben Website navigiert.

### Beispiele

```html
<title>Menu - Blue House Chinese Food - FoodYum: Online takeout today!</title>
```

Wenn eine Formularübermittlung Fehler enthält und die Übermittlung die aktuelle Seite neu rendert, kann der Titel verwendet werden, um Benutzer auf Fehler bei ihrer Übermittlung aufmerksam zu machen. Beispielsweise sollte der Wert des `title` aktualisiert werden, um wesentliche Änderungen des Seitenzustands widerzuspiegeln (wie z.B. Probleme bei der Formularvalidierung).

```html
<title>
  2 errors - Your order - Sea Food Store - Food: Online takeout today!
</title>
```

> [!NOTE]
> Derzeit wird das dynamische Aktualisieren eines Seitentitels nicht automatisch von Screenreadern angekündigt. Wenn Sie den Seitentitel aktualisieren, um wesentliche Änderungen am Zustand einer Seite widerzuspiegeln, kann die Verwendung von [ARIA Live-Regionen](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) erforderlich sein.

- [MDN Understanding WCAG, Guideline 2.4 explanations](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Understanding Success Criterion 2.4.2 | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html)

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#metadata_content"
          >Metadaten-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Text, der kein zwischen-Element [Whitespace](/de/docs/Glossary/whitespace) ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Sowohl das öffnende als auch das schließende Tag sind erforderlich. Beachten Sie, dass das Weglassen von
        <code>&#x3C;/title></code> dazu führen sollte, dass der Browser den Rest der Seite ignoriert.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{ HTMLElement("head") }} Element, das kein anderes
        <code>&lt;title&gt;</code> Element enthält.
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
