---
title: "<title>: Das Dokumenttitel-Element"
slug: Web/HTML/Reference/Elements/title
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<title>`** [HTML](/de/docs/Web/HTML) Element definiert den Titel des Dokuments, der in der Titelleiste eines {{Glossary("Browser", "Browsers")}} oder einem Tab einer Seite angezeigt wird. Es enthält nur Text; Tags innerhalb des Elements werden ignoriert.

```html
<title>Grandma's Heavy Metal Festival Journal</title>
```

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

Das `<title>`-Element wird immer innerhalb eines {{HTMLElement("head")}}-Blocks einer Seite verwendet.

### Seitentitel und SEO

Der Inhalt eines Seitentitels kann erhebliche Auswirkungen auf die Suchmaschinenoptimierung ({{Glossary("SEO", "SEO")}}) haben. Im Allgemeinen schneidet ein längerer, beschreibender Titel besser ab als kurze oder generische Titel. Der Titelinhalt ist eine der Komponenten, die von Suchmaschinen-Algorithmen verwendet werden, um die Reihenfolge zu bestimmen, in der Seiten in den Suchergebnissen aufgelistet werden. Außerdem ist der Titel der initiale "Aufhänger", mit dem Sie die Aufmerksamkeit der Leser erregen, die einen Blick auf die Suchergebnisseite werfen.

Einige Richtlinien und Tipps zur Erstellung guter Titel:

- Vermeiden Sie Ein-Wort- oder Zwei-Wort-Titel. Verwenden Sie eine beschreibende Phrase oder eine Begriff-Definition-Kombination für Glossar- oder Referenzseiten.
- Suchmaschinen zeigen typischerweise die ersten 55–60 Zeichen eines Seitentitels an. Text, der darüber hinausgeht, könnte verloren gehen. Versuchen Sie daher, Titel nicht länger zu gestalten. Wenn Sie einen längeren Titel verwenden müssen, stellen Sie sicher, dass die wichtigen Teile früher kommen und dass nichts Wesentliches in dem Teil des Titels steht, der wahrscheinlich wegfällt.
- Verwenden Sie keine "Keyword-Blobs". Wenn Ihr Titel nur aus einer Liste von Wörtern besteht, verringert dies oft die Position Ihrer Seite in den Suchergebnissen.
- Achten Sie darauf, dass Ihre Titel möglichst einzigartig innerhalb Ihrer eigenen Website sind. Duplizierte oder nahezu duplizierte Titel können zu ungenauen Suchergebnissen führen.

## Barrierefreiheit

Es ist wichtig, einen genauen und prägnanten Titel zu wählen, der den Zweck der Seite beschreibt.

Eine gängige Navigationstechnik für Benutzer von unterstützender Technologie ist das Lesen des Seitentitels, um den Inhalt zu bestimmen, den die Seite enthält. Denn es kann zeitaufwendig und potenziell verwirrend sein, sich in eine Seite zu navigieren, um ihren Inhalt zu ermitteln. Titel sollten für jede Seite einer Website einzigartig sein, idealerweise sollte der primäre Zweck der Seite zuerst erscheinen, gefolgt vom Namen der Website. Dieses Muster hilft sicherzustellen, dass der primäre Zweck der Seite zuerst von einem Screenreader angekündigt wird. Dies bietet ein weit besseres Erlebnis, als den Namen einer Website vor dem einzigartigen Seitentitel hören zu müssen, bei jeder Seite, die ein Benutzer auf derselben Website aufruft.

### Beispiele

```html
<title>Menu - Blue House Chinese Food - FoodYum: Online takeout today!</title>
```

Wenn ein Formular eingereicht wird und Fehler enthält und die Einreichung die aktuelle Seite neu rendert, kann der Titel verwendet werden, um Benutzer auf eventuelle Fehler bei ihrer Einreichung aufmerksam zu machen. Aktualisieren Sie beispielsweise den Wert des Seitentitels, um wesentliche Zustandsänderungen der Seite zu reflektieren (wie etwa Probleme bei der Formularvalidierung).

```html
<title>
  2 errors - Your order - Sea Food Store - Food: Online takeout today!
</title>
```

> [!NOTE]
> Derzeit wird das dynamische Aktualisieren eines Seitentitels nicht automatisch von Screenreadern angekündigt. Wenn Sie den Seitentitel aktualisieren, um signifikante Änderungen des Seitenzustands widerzuspiegeln, kann der Einsatz von [ARIA Live-Bereichen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) notwendig sein.

- [MDN Verständnis der WCAG, Leitfaden 2.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis des Erfolgskriteriums 2.4.2 | W3C Verständnis der WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html)

## Beispiele

```html
<title>Awesome interesting stuff</title>
```

Dieses Beispiel legt eine Seite fest, deren Titel (wie oben im Fenster oder im Tab des Fensters angezeigt) als "Awesome interesting stuff" dargestellt wird.

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
          >Metadaten-Inhalte</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Text, der kein inter-element {{Glossary("whitespace", "Leerzeichen")}}
        ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Sowohl öffnende als auch schließende Tags sind erforderlich. Beachten Sie,
        dass das Auslassen von
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
