---
title: "ARIA: article Rolle"
slug: Web/Accessibility/ARIA/Roles/article_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `article` Rolle zeigt einen Abschnitt einer Seite an, der allein auf einer Seite, in einem Dokument oder auf einer Website stehen könnte. Sie wird normalerweise auf zusammenhängende Inhaltsobjekte wie Kommentare, Forenbeiträge, Zeitungsartikel oder andere auf einer Seite gruppierte Objekte gesetzt.

```html
<div role="article">
  <h2>Heading of the segment</h2>
  <p>Paragraph for the segment.</p>
  <p>Another paragraph.</p>
  Controls to interact with the article, share it, etc.
</div>
<div role="article">…</div>
```

Dieses Beispiel zeigt zwei Artikel nebeneinander auf einer Seite, die ähnlich strukturiert und miteinander verbunden sind.

> [!NOTE]
> Verwenden Sie anstelle eines `<div>` mit einer `article` Rolle das {{HTMLElement('article')}} Element. **Verwenden Sie immer native Elemente, wenn verfügbar**

Verwenden Sie nicht `role="article"`. Stattdessen verwenden Sie das `<article>` Element.

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

Die `article` [Dokumentenstruktur-Rolle](/de/docs/Web/Accessibility/ARIA/Roles#1._document_structure_roles) kennzeichnet einen Abschnitt eines Dokuments, einer Seite oder einer Website, der, würde er alleine stehen, als vollständiges Dokument, vollständige Seite oder vollständige Website betrachtet werden könnte. Ziel einer Reihe von Artikelabschnitten ist es, ihre Beziehung zueinander anzuzeigen.

Artikel gelten nicht als Navigationsmerkmal, aber viele unterstützende Technologien, die Landmarks unterstützen, bieten auch eine Möglichkeit, zwischen Artikeln zu navigieren. Sie können auch Nesting-Beziehungen innerhalb von Artikeln unterstützen.

Artikel können verschachtelt werden, was darauf hinweist, dass ein verschachtelter Artikel direkt mit dem Artikel in Beziehung steht, in dem er verschachtelt ist, aber nicht unbedingt mit den Artikeln außerhalb der Verschachtelungshierarchie. Verweisen Sie auf die Beispiele für spezifische Anwendungsfälle.

Wenn ein Artikel Teil eines Feeds ist, können die Attribute [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) und [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) gesetzt werden, um anzuzeigen, welche Position dieser spezielle Artikel innerhalb des Feeds einnimmt.

In einem `application` oder einem anderen Widget, das Bildschirmlesegeräte und andere unterstützende Technologien in den Durchlaufmodus versetzt, kann ein Artikel verwendet werden, um anzuzeigen, dass diese wieder zurückschalten sollten, um den eingeschlossenen Inhalt als regulären Webinhalt zu behandeln.

Anstelle der Einbeziehung der `article` Rolle in ein nicht-semantisches Element sollte das {{HTMLElement('article')}} Element verwendet werden. Benutzeragenten übersetzen dies in die angemessenen Zugänglichkeitsinformationen, genau wie die `article` Rolle. Die Verwendung des {{HTMLElement('article')}} Elements hilft auch Suchmaschinen, die Struktur einer Seite besser zu erkennen. Beispiele für angemessene Verwendung von `role="article"` oder vorzugsweise `<article>` sind Blogbeiträge, Forenbeiträge, ein Kommentar zu einem Forum oder Blogbeitrag, jedes Element in einem sozialen Medien-Feed.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset)
  - : Im Zusammenhang mit einem Feed gibt es die Position dieses speziellen Artikels innerhalb dieses Feeds an, basierend auf einer Zählung ab 1.
- [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize)
  - : Im Zusammenhang mit einem Feed gibt es an, wie viele Artikelobjekte innerhalb dieses Feeds vorhanden sind.

### Tastaturinteraktionen

Diese Rolle unterstützt keine spezifische Tastaturinteraktion.

### Erforderliche JavaScript-Funktionen

- Ereignis-Handler
  - : Diese Rolle erfordert keine Ereignis-Handler.
- Attributswerte ändern
  - : Beim Erstellen eines Feeds setzen Sie die Attribute `aria-posinset` und `aria-setsize` auf jede Artikelrolle auf die entsprechenden Werte, wobei zu beachten ist, dass `aria-posinset` ab 1 zählt.

> **Hinweis:** **Verwenden Sie immer native Elemente, wenn verfügbar.** Anstelle eines `<div>` mit der `article` Rolle sollte das `<article>` Element verwendet werden.

## Beispiele

- Die [Darstellung des Restaurantempfehlungs-Feeds](https://www.w3.org/WAI/ARIA/apg/patterns/feed/examples/feed-display.html) zusammen mit der separaten [Dokumentation](https://www.w3.org/WAI/ARIA/apg/patterns/feed/examples/feed/) aus den WAI-ARIA 1.1 Autorenpraxis-Feed-Designrichtlinien

## Spezifikationen

{{Specifications}}

## Prioritätsordnung

Diese Rolle entspricht dem {{HTMLElement('article')}} Element in HTML, und dieses Element sollte nach Möglichkeit verwendet werden. Diese Rolle erfordert keine spezifischen Rollen unter ihren Kindern. Es ist die einzige Rolle, die als direktes Kind eines Elements mit der [`feed`](/de/docs/Web/Accessibility/ARIA/Roles/feed_role) Rolle erlaubt ist.

## Siehe auch

- [`feed` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/feed_role)
- [`section` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/section_role)
- Das {{HTMLElement('article')}} Element
- [RSS](/de/docs/Glossary/RSS) Glossar-Definition
