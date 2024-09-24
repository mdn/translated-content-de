---
title: "ARIA: article Role"
slug: Web/Accessibility/ARIA/Roles/article_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die Verwendung von `article` zeigt einen Abschnitt einer Seite an, der in einem Dokument oder auf einer Website eigenständig stehen könnte. Es wird normalerweise für verwandte Inhaltselemente wie Kommentare, Forenbeiträge, Zeitungsartikel oder andere Artikel, die auf einer Seite zusammengefasst sind, verwendet.

```html
<div role="article">
  <h2>Heading of the segment</h2>
  <p>Paragraph for the segment.</p>
  <p>Another paragraph.</p>
  Controls to interact with the article, share it, etc.
</div>
<div role="article">…</div>
```

Dieses Beispiel zeigt zwei Artikel nebeneinander auf einer Seite, die ähnlich strukturiert sind und miteinander in Beziehung stehen.

> [!NOTE]
> Anstelle eines `<div>` mit einer `article`-Rolle nutzen Sie das {{HTMLElement('article')}}-Element. **Nach Möglichkeit immer ein nativer Element verwenden.**

Verwenden Sie nicht `role="article"`. Nutzen Sie stattdessen das `<article>`-Element.

```html
<article>
  <h2>Heading of the segment</h2>
  <p>Paragraph for the segment.</p>
  <p>Another paragraph.</p>
  Controls to interact with the article, share it, etc.
</article>
<article>…</article>
```

## Beschreibung

Die `article` [Dokumentenstruktur-Rolle](/de/docs/Web/Accessibility/ARIA/Roles#1._document_structure_roles) bezeichnet einen Abschnitt eines Dokuments, einer Seite oder einer Website, der, wenn er eigenständig stünde, als vollständiges Dokument, Seite oder Website betrachtet werden könnte. Das Ziel eines Sets von Artikelabschnitten ist es, ihre Beziehung zueinander anzuzeigen.

Artikel werden nicht als navigatorische Landmarken betrachtet, aber viele unterstützende Technologien, die Landmarken unterstützen, bieten auch eine Möglichkeit zur Navigation zwischen Artikeln. Sie können auch Unterstützung für die Anzeige von Verschachtelungsbeziehungen innerhalb von Artikeln bieten.

Artikel können verschachtelt werden, was anzeigt, dass ein verschachtelter Artikel direkt mit demjenigen zusammenhängt, in den er verschachtelt ist, jedoch nicht unbedingt mit denen außerhalb der Verschachtelungshierarchie. Beziehen Sie sich auf die Beispiele für spezifische Anwendungsfälle.

Wenn ein Artikel Teil eines Feeds ist, kann er die Attribute [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) und [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) gesetzt haben, um anzuzeigen, welche Position dieser bestimmte Artikel im Feed einnimmt.

Innerhalb einer `application` oder eines anderen Widgets, das Bildschirmlesegeräte und andere unterstützende Technologien in einen Pass-Through-Modus versetzt, kann ein Artikel verwendet werden, um anzuzeigen, dass diese zurückschalten sollen, um den eingeschlossenen Inhalt als regulären Webinhalt zu behandeln.

Anstatt die `article`-Rolle auf einem nicht-semantischen Element einzuschließen, sollte das {{HTMLElement('article')}}-Element verwendet werden. Benutzeragenten übersetzen dies in die entsprechenden Zugänglichkeitsinformationen, genau wie die `article`-Rolle. Die Verwendung des {{HTMLElement('article')}}-Elements hilft auch Suchmaschinen, die Struktur einer Seite besser zu erfassen. Beispiele für angemessene Verwendungen der `role="article"` oder vorzugsweise `<article>`, umfassen Blogbeiträge, Forenbeiträge, einen Kommentar zu einem Foren- oder Blogbeitrag, ein Element in einem sozialen Medien-Feed.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset)
  - : Im Kontext eines Feeds gibt an, welche Position dieser bestimmte Artikel innerhalb des Feeds einnimmt, basierend auf einer Zählung ab 1.
- [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize)
  - : Im Kontext eines Feeds gibt an, wie viele Artikel innerhalb dieses Feeds vorhanden sind.

### Tastaturinteraktionen

Diese Rolle unterstützt keine spezifische Tastaturinteraktion.

### Erforderliche JavaScript-Funktionen

- Ereignishandler
  - : Diese Rolle erfordert keine vorhandenen Ereignishandler.
- Ändern von Attributwerten
  - : Beim Erstellen eines Feeds setzen Sie die Attribute `aria-posinset` und `aria-setsize` für jede Artikelnrolle auf die entsprechenden Werte, wobei zu beachten ist, dass `aria-posinset` auf 1 basiert.

> **Hinweis:** **Nach Möglichkeit immer ein nativer Element verwenden.** Anstelle eines `<div>` mit der `article`-Rolle, sollte das `<article>`-Element verwendet werden.

## Beispiele

- Die [Anzeige des Restaurantempfehlungs-Feeds](https://www.w3.org/WAI/ARIA/apg/patterns/feed/examples/feed-display.html) zusammen mit deren separaten [Dokumentation](https://www.w3.org/WAI/ARIA/apg/patterns/feed/) aus den WAI-ARIA 1.1 Autorenpraxis-Feed-Designmuster

## Spezifikationen

{{Specifications}}

## Vorrangordnung

Diese Rolle entspricht dem {{HTMLElement('article')}}-Element in HTML und dieses Element sollte stattdessen verwendet werden, wenn möglich. Diese Rolle erfordert keine spezifischen Rollen unter ihren Kindelementen. Es ist die einzige Rolle, die als direktes Kindelement eines Elements mit der [`feed`](/de/docs/Web/Accessibility/ARIA/Roles/feed_role) Rolle erlaubt ist.

## Siehe auch

- [`feed`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/feed_role)
- [`section`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/section_role)
- Das {{HTMLElement('article')}}-Element
- {{Glossary("RSS")}} Glossareintrag
