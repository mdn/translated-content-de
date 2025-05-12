---
title: "ARIA: Rolle `article`"
short-title: article
slug: Web/Accessibility/ARIA/Reference/Roles/article_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die `article`-Rolle gibt einen Abschnitt einer Seite an, der leicht eigenständig auf einer Seite, in einem Dokument oder auf einer Website stehen könnte. Sie wird üblicherweise auf zusammenhängende Inhaltselemente wie Kommentare, Forenbeiträge, Zeitungsartikel oder andere auf einer Seite zusammengefasste Elemente angewendet.

```html
<div role="article">
  <h2>Heading of the segment</h2>
  <p>Paragraph for the segment.</p>
  <p>Another paragraph.</p>
  Controls to interact with the article, share it, etc.
</div>
<div role="article">…</div>
```

Dieses Beispiel zeigt zwei Artikel nebeneinander auf einer Seite, die ähnlich strukturiert sind und miteinander in Zusammenhang stehen.

> [!NOTE]
> Anstatt eines `<div>` mit einer `article`-Rolle sollte das {{HTMLElement('article')}}-Element verwendet werden. **Verwenden Sie immer ein natives Element, wenn es verfügbar ist**

Verwenden Sie nicht `role="article"`. Verwenden Sie stattdessen das `<article>`-Element.

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

Die `article`-[Dokumentenstrukturrolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#1._document_structure_roles) kennzeichnet einen Abschnitt eines Dokuments, einer Seite oder einer Website, der, wenn er eigenständig stehen würde, als vollständiges Dokument, vollständige Seite oder vollständige Website betrachtet werden könnte. Das Ziel einer Gruppe von Artikelabschnitten ist es, ihre Beziehung zueinander anzuzeigen.

Artikel werden nicht als Navigationsmarkierung betrachtet, aber viele unterstützende Technologien, die Markierungen unterstützen, ermöglichen auch eine Navigation zwischen Artikeln. Möglicherweise unterstützen sie auch die Anzeige von Verschachtelungsbeziehungen innerhalb von Artikeln.

Artikel können verschachtelt werden, was anzeigt, dass ein verschachtelter Artikel direkt mit demjenigen in Beziehung steht, in dem er verschachtelt ist, aber nicht notwendigerweise mit denen außerhalb der Verschachtelungshierarchie. Verwenden Sie die Beispiele als Referenz für spezifische Anwendungsfälle.

Wenn ein Artikel Teil eines Feeds ist, können die Attribute [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) und [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) gesetzt werden, um anzuzeigen, welche Position dieser spezielle Artikel innerhalb des Feeds hat.

Innerhalb einer `application` oder eines anderen Widgets, das Bildschirmlesegeräte und andere assistierende Technologien in den Durchgangsmodus versetzt, kann ein Artikel verwendet werden, um anzuzeigen, dass diese Technologien wieder behandeln sollen, dass der umschlossene Inhalt als regulärer Webinhalt betrachtet wird.

Anstatt die `article`-Rolle auf ein nicht-semantisches Element anzuwenden, sollte das {{HTMLElement('article')}}-Element verwendet werden. Benutzeragenten übersetzen dies in die entsprechende Zugänglichkeitsinformation, genauso wie die `article`-Rolle. Die Verwendung des {{HTMLElement('article')}}-Elements hilft auch Suchmaschinen, die Struktur einer Seite besser zu erkennen. Geeignete Anwendungen der `role="article"` oder vorzugsweise des `<article>`-Elements umfassen Blogbeiträge, Forenbeiträge, einen Kommentar zu einem Forum oder Blogbeitrag, ein beliebiges Element in einem Social-Media-Feed.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset)
  - : Im Kontext eines Feeds wird die Position dieses bestimmten Artikels innerhalb des Feeds angegeben, basierend auf einer Zählung ab 1.
- [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize)
  - : Im Kontext eines Feeds wird die Anzahl der Artikel innerhalb des Feeds angegeben.

### Tastaturinteraktionen

Diese Rolle unterstützt keine spezifischen Tastaturinteraktionen.

### Erforderliche JavaScript-Funktionen

- Ereignis-Handler
  - : Diese Rolle erfordert keine vorhandenen Ereignis-Handler.
- Ändern von Attributwerten
  - : Beim Erstellen eines Feeds sollten die Attribute `aria-posinset` und `aria-setsize` auf jeder Artikelrolle auf die entsprechenden Werte gesetzt werden, wobei zu beachten ist, dass `aria-posinset` bei 1 beginnt.

> **Hinweis:** **Verwenden Sie immer ein natives Element, wenn es verfügbar ist.** Anstelle eines `<div>` mit der `article`-Rolle sollte das `<article>`-Element verwendet werden.

## Beispiele

- Die [Anzeige von Restaurantempfehlungen im Feed](https://www.w3.org/WAI/ARIA/apg/patterns/feed/examples/feed-display.html) zusammen mit der separaten [Dokumentation](https://www.w3.org/WAI/ARIA/apg/patterns/feed/examples/feed/) aus den WAI-ARIA 1.1-Autorenpraktiken für das Feed-Design-Muster

## Spezifikationen

{{Specifications}}

## Rangfolge

Diese Rolle entspricht dem {{HTMLElement('article')}}-Element in HTML, und dieses Element sollte nach Möglichkeit verwendet werden. Diese Rolle erfordert keine spezifischen Rollen als Kinder. Es ist die einzige Rolle, die als direktes Kind eines Elements mit der Rolle [`feed`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/feed_role) erlaubt ist.

## Siehe auch

- [`feed`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/feed_role)
- [`section`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/section_role)
- Das {{HTMLElement('article')}}-Element
- {{Glossary("RSS", "RSS")}} Glossarbegriff
