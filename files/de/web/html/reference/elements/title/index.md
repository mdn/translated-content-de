---
title: "<title>: Das Dokumenttitel-Element"
slug: Web/HTML/Reference/Elements/title
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<title>`**-Element [HTML](/de/docs/Web/HTML) definiert den Titel des Dokuments, der in der Titelleiste eines {{Glossary("Browser", "Browsers")}} oder in einem Tab einer Seite angezeigt wird. Es enthält nur Text; HTML-Tags innerhalb des Elements, falls vorhanden, werden ebenfalls als einfacher Text behandelt.

```html
<title>Grandma's Heavy Metal Festival Journal</title>
```

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Nutzungshinweise

Das `<title>`-Element wird immer innerhalb des {{HTMLElement("head")}}-Blocks einer Seite verwendet.

### Seitentitel und SEO

Der Inhalt eines Seitentitels kann erhebliche Auswirkungen auf die Suchmaschinenoptimierung ({{Glossary("SEO", "SEO")}}) haben. Im Allgemeinen erzielt ein längerer, beschreibender Titel bessere Ergebnisse als kurze oder generische Titel. Der Inhalt des Titels ist eine der Komponenten, die von Suchmaschinenalgorithmen verwendet werden, um die Reihenfolge festzulegen, in der Seiten in den Suchergebnissen gelistet werden. Außerdem ist der Titel der anfängliche "Aufhänger", mit dem Sie die Aufmerksamkeit der Leser gewinnen, die die Ergebnisseite der Suche überfliegen.

Einige Richtlinien und Tipps zur Erstellung guter Titel:

- Vermeiden Sie Ein-Wort- oder Zwei-Wort-Titel. Verwenden Sie einen beschreibenden Satz oder eine Begriff-Definition-Kopplung für Glossar- oder Referenzseiten.
- Suchmaschinen zeigen typischerweise die ersten 55-60 Zeichen eines Seitentitels an. Text darüber hinaus kann verloren gehen, daher sollten Titel nicht länger als das sein. Wenn Sie einen längeren Titel verwenden müssen, stellen Sie sicher, dass die wichtigen Teile früher erscheinen und dass nichts Kritisches im Teil des Titels ist, der wahrscheinlich weggelassen wird.
- Verwenden Sie keine "Keyword-Blobs". Wenn Ihr Titel nur eine Liste von Wörtern ist, reduzieren die Algorithmen oft die Position Ihrer Seite in den Suchergebnissen.
- Versuchen Sie, sicherzustellen, dass Ihre Titel innerhalb Ihrer eigenen Website so einzigartig wie möglich sind. Doppelte oder fast doppelte Titel können zu ungenauen Suchergebnissen beitragen.

## Barrierefreiheit

Es ist wichtig, einen genauen und prägnanten Titel bereitzustellen, der den Zweck der Seite beschreibt.

Eine gängige Navigationstechnik für Benutzer von unterstützenden Technologien besteht darin, den Seitentitel zu lesen und Rückschlüsse auf den Inhalt der Seite zu ziehen. Der Grund dafür ist, dass das Navigieren in eine Seite, um deren Inhalt zu bestimmen, ein zeitaufwändiger und potenziell verwirrender Prozess sein kann. Titel sollten für jede Seite einer Website einzigartig sein, idealerweise den primären Zweck der Seite zuerst anzeigen, gefolgt vom Namen der Website. Wenn dieses Muster befolgt wird, wird sichergestellt, dass der primäre Zweck der Seite von einem Bildschirmlesegerät zuerst angekündigt wird. Dies bietet ein viel besseres Erlebnis, als den Namen einer Website anhören zu müssen, bevor der einzigartige Seitentitel für jede Seite angesagt wird, zu der ein Benutzer innerhalb derselben Website navigiert.

### Beispiele

```html
<title>Menu - Blue House Chinese Food - FoodYum: Online takeout today!</title>
```

Wenn das Absenden eines Formulars Fehler enthält und das Absenden die aktuelle Seite neu rendert, kann der Titel verwendet werden, um Benutzer auf etwaige Fehler bei ihrer Eingabe aufmerksam zu machen. Aktualisieren Sie beispielsweise den `title`-Wert der Seite, um wesentliche Zustandsänderungen der Seite widerzuspiegeln (z. B. Probleme bei der Formularvalidierung).

```html
<title>
  2 errors - Your order - Sea Food Store - Food: Online takeout today!
</title>
```

> [!NOTE]
> Derzeit wird das dynamische Aktualisieren eines Seitentitels nicht automatisch von Bildschirmlesegeräten angekündigt. Wenn Sie den Seitentitel aktualisieren wollen, um wesentliche Zustandsänderungen wiederzugeben, kann die Verwendung von [ARIA Live Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) erforderlich sein.

- [MDN Verständnis WCAG, Erklärung der Leitlinie 2.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis des Erfolgskriteriums 2.4.2 | W3C Verständnis WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html)

## Beispiele

```html
<title>Awesome interesting stuff</title>
```

Dieses Beispiel legt eine Seite fest, deren Titel (wie oben im Fenster oder im Tab des Fensters angezeigt) "Awesome interesting stuff" ist.

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
        Text, der kein inter-Element {{Glossary("whitespace", "Leerzeichen")}} ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Sowohl Eröffnungs- als auch Abschluss-Tags sind erforderlich. Beachten Sie, dass das Weglassen von
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

- SVG [`<title>`](/de/docs/Web/SVG/Reference/Element/title) Element
