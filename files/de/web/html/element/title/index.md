---
title: "<title>: Das Dokumenttitel-Element"
slug: Web/HTML/Element/title
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{HTMLSidebar}}

Das **`<title>`** [HTML](/de/docs/Web/HTML) Element definiert den Titel des Dokuments, der in der Titelleiste eines {{Glossary("Browser", "Browsers")}} oder in der Registerkarte einer Seite angezeigt wird. Es enthält nur Text; Tags innerhalb des Elements werden ignoriert.

```html
<title>Grandma's Heavy Metal Festival Journal</title>
```

## Attribute

Dieses Element beinhaltet nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Das `<title>`-Element wird immer innerhalb des {{HTMLElement("head")}}-Blocks einer Seite verwendet.

### Seitentitel und SEO

Der Inhalt eines Seitentitels kann erhebliche Auswirkungen auf die Suchmaschinenoptimierung ({{Glossary("SEO", "SEO")}}) haben. Im Allgemeinen performt ein längerer, beschreibender Titel besser als kurze oder generische Titel. Der Inhalt des Titels ist eine der Komponenten, die von Suchmaschinenalgorithmen verwendet werden, um die Reihenfolge festzulegen, in der Seiten in den Suchergebnissen aufgelistet werden. Der Titel ist auch der erste "Aufhänger", mit dem Sie die Aufmerksamkeit der Leser erregen, die die Ergebnisseite durchsuchen.

Einige Richtlinien und Tipps für die Gestaltung guter Titel:

- Vermeiden Sie Ein- oder Zwei-Wort-Titel. Verwenden Sie eine beschreibende Phrase oder ein Begriff-Definition-Paar für Glossar- oder Referenzseiten.
- Suchmaschinen zeigen typischerweise die ersten 55–60 Zeichen eines Seitentitels an. Text darüber hinaus könnte verloren gehen, also versuchen Sie, Titel nicht länger als das zu machen. Wenn ein längerer Titel unvermeidlich ist, stellen Sie sicher, dass die wichtigen Teile früher erscheinen und dass nichts Kritisches im Teil des Titels ist, der wahrscheinlich abgeschnitten wird.
- Verwenden Sie keine "Schlüsselwort-Blöcke". Wenn Ihr Titel nur aus einer Liste von Wörtern besteht, verringern Algorithmen oft die Position Ihrer Seite in den Suchergebnissen.
- Versuchen Sie, Ihre Titel innerhalb Ihrer eigenen Website so einzigartig wie möglich zu gestalten. Doppelte oder fast doppelte Titel können zu ungenauen Suchergebnissen führen.

## Barrierefreiheit

Es ist wichtig, einen genauen und prägnanten Titel zu erstellen, der den Zweck der Seite beschreibt.

Eine gängige Navigationsmethode für Benutzer assistiver Technologien besteht darin, den Seitentitel zu lesen und den Inhalt zu erschließen, den die Seite enthält. Dies liegt daran, dass das Navigieren in eine Seite, um deren Inhalt zu bestimmen, ein zeitaufwändiger und potenziell verwirrender Prozess sein kann. Titel sollten für jede Seite einer Website einzigartig sein und idealerweise zuerst den Hauptzweck der Seite und anschließend den Namen der Website nennen. Dieses Muster hilft sicherzustellen, dass der Hauptzweck der Seite zuerst von einem Screenreader angekündigt wird, was ein weitaus besseres Erlebnis bietet, als ständig den Namen einer Website anhören zu müssen, bevor der einzigartige Seitentitel auf jeder Seite einer Website vorgelesen wird.

### Beispiele

```html
<title>Menu - Blue House Chinese Food - FoodYum: Online takeout today!</title>
```

Wenn ein Formulareintrag Fehler enthält und die Einreichung die aktuelle Seite erneut rendert, kann der Titel verwendet werden, um Benutzer auf etwaige Fehler bei ihrer Einreichung hinzuweisen. Aktualisieren Sie beispielsweise den `title`-Wert der Seite, um wesentliche Zustandsänderungen der Seite zu widerspiegeln (z. B. bei Formularvalidierungsproblemen).

```html
<title>
  2 errors - Your order - Sea Food Store - Food: Online takeout today!
</title>
```

> [!NOTE]
> Derzeit wird das dynamische Aktualisieren eines Seitentitels nicht automatisch von Screenreadern angekündigt. Wenn Sie den Seitentitel aktualisieren, um wesentliche Änderungen des Seitenszustands widerzuspiegeln, könnte die Verwendung von [ARIA Live Regions](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) notwendig sein.

- [MDN Verständnis von WCAG, Erläuterungen zu Richtlinie 2.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis des Erfolgskriteriums 2.4.2 | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html)

## Beispiele

```html
<title>Awesome interesting stuff</title>
```

Dieses Beispiel erstellt eine Seite, deren Titel (wie oben im Fenster oder in der Registerkarte des Fensters angezeigt) als "Awesome interesting stuff" festgelegt ist.

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
        Text, der kein inter-element {{Glossary("whitespace", "Whitespace")}} ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Weglassung</th>
      <td>
        Sowohl das öffnende als auch das schließende Tag sind erforderlich. Beachten Sie, dass das Weglassen von
        <code>&#x3C;/title></code> dazu führen sollte, dass der Browser den Rest der Seite ignoriert.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
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

- SVG [`<title>`](/de/docs/Web/SVG/Reference/Element/title) Element
