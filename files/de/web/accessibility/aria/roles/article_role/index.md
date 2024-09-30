---
title: "ARIA: article-Rolle"
slug: Web/Accessibility/ARIA/Roles/article_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `article`-Rolle kennzeichnet einen Abschnitt einer Seite, der leicht für sich allein auf einer Seite, in einem Dokument oder auf einer Website bestehen könnte. Sie wird normalerweise auf verwandte Inhaltselemente wie Kommentare, Forenbeiträge, Zeitungsartikel oder andere Elemente gesetzt, die auf einer Seite gruppiert sind.

```html
<div role="article">
  <h2>Heading of the segment</h2>
  <p>Paragraph for the segment.</p>
  <p>Another paragraph.</p>
  Controls to interact with the article, share it, etc.
</div>
<div role="article">…</div>
```

Dieses Beispiel zeigt zwei Artikel nebeneinander auf einer Seite, die ähnlich strukturiert sind und in Beziehung zueinander stehen.

> [!NOTE]
> Anstelle eines `<div>` mit einer `article`-Rolle sollte das {{HTMLElement('article')}}-Element verwendet werden. **Immer das native Element verwenden, wenn verfügbar**

Verwenden Sie nicht `role="article"`. Stattdessen verwenden Sie das `<article>`-Element.

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

Die `article`-Rolle [Dokumentenstruktur-Rolle](/de/docs/Web/Accessibility/ARIA/Roles#1._document_structure_roles) bezeichnet einen Abschnitt eines Dokuments, einer Seite oder einer Site, der, wenn er allein stehen würde, als vollständiges Dokument, Seite oder Site betrachtet werden könnte. Das Ziel einer Reihe von Artikelsektionen ist es, ihre Beziehung zueinander zu kennzeichnen.

Artikel werden nicht als navigationales Landmark betrachtet, aber viele unterstützende Technologien, die Landmarks unterstützen, bieten auch eine Möglichkeit zur Navigation zwischen Artikeln. Sie können auch die Darstellung von Verschachtelungsbeziehungen innerhalb von Artikeln unterstützen.

Artikel können verschachtelt werden, was bedeutet, dass ein verschachtelter Artikel direkt Bezug zu dem Artikel hat, in dem er verschachtelt ist, aber nicht unbedingt zu denen außerhalb der Verschachtelungshierarchie. Nehmen Sie Bezug auf die Beispiele für spezifische Anwendungsfälle.

Wenn ein Artikel Teil eines Feeds ist, können die Attribute [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) und [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) festgelegt werden, um anzuzeigen, welche Position innerhalb des Feeds dieser bestimmte Artikel einnimmt.

Innerhalb einer `application` oder eines anderen Widgets, das bei Screenreadern und anderen unterstützenden Technologien den Pass-Through-Modus verursacht, kann ein Artikel verwendet werden, um anzuzeigen, dass diese wieder anfangen sollten, den eingeschlossenen Inhalt als regulären Webinhalt zu behandeln.

Anstelle der Verwendung der `article`-Rolle auf einem nicht-semantischen Element sollte das {{HTMLElement('article')}}-Element verwendet werden. Nutzeragenten übersetzen dies in die entsprechende Zugänglichkeitsinformation genauso wie die `article`-Rolle. Die Verwendung des {{HTMLElement('article')}}-Elements hilft auch Suchmaschinen, die Struktur einer Seite besser zu entdecken. Beispiele für geeignete Verwendungen von `role="article"`, oder vorzugsweise `<article>`, sind Blogposts, Forenbeiträge, ein Kommentar zu einem Forum oder Blogpost, ein Element in einem sozialen Medien-Feed.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset)
  - : Im Kontext eines Feeds gibt an, welche Position dieser bestimmte Artikel innerhalb dieses Feeds einnimmt, basierend auf einer Zählung beginnend bei 1.
- [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize)
  - : Im Kontext eines Feeds gibt an, wie viele Artikelpunkte es innerhalb dieses Feeds gibt.

### Tastatur-Interaktionen

Diese Rolle unterstützt keine spezifischen Tastaturinteraktionen.

### Erforderliche JavaScript-Funktionen

- Ereignishandler
  - : Diese Rolle erfordert keine Ereignishandler.
- Ändern von Attributwerten
  - : Beim Erstellen eines Feeds setzen Sie die `aria-posinset`- und `aria-setsize`-Attribute an jeder Artikelrolle auf die entsprechenden Werte, wobei zu beachten ist, dass `aria-posinset` bei 1 beginnt.

> **Hinweis:** **Immer das native Element verwenden, wenn verfügbar.** Anstelle eines `<div>` mit der `article`-Rolle sollte das `<article>`-Element verwendet werden.

## Beispiele

- Die [Anzeigedarstellung von Restaurantempfehlungen im Feed](https://www.w3.org/WAI/ARIA/apg/patterns/feed/examples/feed-display.html) zusammen mit der separaten [Dokumentation](https://www.w3.org/WAI/ARIA/apg/patterns/feed/) aus dem WAI-ARIA 1.1 Autorenschaftspraxis-Feed-Designmuster

## Spezifikationen

{{Specifications}}

## Reihenfolge der Vorrangigkeit

Diese Rolle entspricht dem {{HTMLElement('article')}}-Element in HTML, und dieses Element sollte stattdessen verwendet werden, wenn möglich. Diese Rolle erfordert keine spezifischen Rollen unter ihren Kindern. Es ist die einzige Rolle, die als direktes Kind eines Elements mit der [`feed`](/de/docs/Web/Accessibility/ARIA/Roles/feed_role)-Rolle zulässig ist.

## Siehe auch

- [`feed` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/feed_role)
- [`section` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/section_role)
- Das {{HTMLElement('article')}}-Element
- [RSS](/de/docs/Glossary/RSS) Glossar-Definition
