---
title: "ARIA: article Rolle"
short-title: article
slug: Web/Accessibility/ARIA/Reference/Roles/article_role
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

Die `article`-Rolle zeigt einen Abschnitt einer Seite an, der problemlos allein auf einer Seite, in einem Dokument oder auf einer Website stehen könnte. Sie wird normalerweise auf verwandten Inhaltselementen wie Kommentaren, Forenbeiträgen, Zeitungsartikeln oder anderen auf einer Seite gruppierten Elementen gesetzt.

```html
<div role="article">
  <h2>Heading of the segment</h2>
  <p>Paragraph for the segment.</p>
  <p>Another paragraph.</p>
  Controls to interact with the article, share it, etc.
</div>
<div role="article">…</div>
```

Dieses Beispiel zeigt zwei Artikel, die nebeneinander auf einer Seite angeordnet sind, die ähnlich strukturiert sind und miteinander verbunden sind.

> [!NOTE]
> Verwenden Sie anstelle eines `<div>` mit einer `article`-Rolle das {{HTMLElement('article')}}-Element. **Immer das native Element verwenden, wenn verfügbar**

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

Die `article`-Rolle [Dokumentenstrukturrolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#1._document_structure_roles) bezeichnet einen Abschnitt eines Dokuments, einer Seite oder einer Website, der, wenn er allein stünde, als vollständiges Dokument, vollständige Seite oder vollständige Website betrachtet werden könnte. Ziel einer Reihe von Artikelsektionen ist es, ihre Beziehung zueinander anzuzeigen.

Artikel werden nicht als navigierbares Landmarke angesehen, aber viele unterstützende Technologien, die Landmarken unterstützen, bieten auch eine Möglichkeit, zwischen Artikeln zu navigieren. Sie können auch die Anzeige von Verschachtelungsbeziehungen innerhalb von Artikeln unterstützen.

Artikel können verschachtelt werden, was bedeutet, dass ein verschachtelter Artikel direkt zu demjenigen Artikel gehört, in den er verschachtelt ist, aber nicht notwendigerweise zu denjenigen außerhalb der Verschachtelungshierarchie. Rufen Sie die Beispiele für spezifische Anwendungsfälle auf.

Wenn ein Artikel Teil eines Feeds ist, kann er die Attribute [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) und [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) enthalten, um anzuzeigen, welche Position dieser spezielle Artikel innerhalb des Feeds hat.

Innerhalb einer `application` oder eines anderen Widgets, das Vorleseprogramme und andere unterstützende Technologien in den Durchgangsmodus versetzt, kann ein Artikel verwendet werden, um anzuzeigen, dass diese wieder dazu übergehen sollten, den eingeschlossenen Inhalt als regulären Webinhalt zu behandeln.

Anstatt die `article`-Rolle auf ein nicht-semantisches Element anzuwenden, sollte das {{HTMLElement('article')}}-Element verwendet werden. Benutzeragenten übersetzen dies in die geeigneten Barrierefreiheitsinformationen, genau wie bei der `article`-Rolle. Die Verwendung des {{HTMLElement('article')}}-Elements hilft auch Suchmaschinen, die Struktur einer Seite besser zu erkennen. Beispiele für geeignete Verwendungen der `role="article"` oder vorzugsweise `<article>` schließen Blogbeiträge, Forenbeiträge, Kommentare zu einem Forums- oder Blogbeitrag, jedes Element in einem Social Media-Feed ein.

### Zugeordnete WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset)
  - : Im Kontext eines Feeds gibt an, welche Position dieser spezielle Artikel innerhalb dieses Feeds hat, basierend auf einer Zählung ab 1.
- [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize)
  - : Im Kontext eines Feeds gibt an, wie viele Artikel-Elemente es innerhalb dieses Feeds gibt.

### Tastaturinteraktionen

Diese Rolle unterstützt keine spezifischen Tastaturinteraktionen.

### Erforderliche JavaScript-Funktionen

- Ereignishandler
  - : Diese Rolle erfordert keine vorhandenen Ereignishandler.
- Ändern von Attributwerten
  - : Beim Erstellen eines Feeds die Attribute `aria-posinset` und `aria-setsize` auf jede Artikelrolle mit den entsprechenden Werten setzen, wobei zu beachten ist, dass `aria-posinset` 1-basiert ist.

> [!NOTE] > **Immer das native Element verwenden, wenn verfügbar.** Anstelle eines `<div>` mit der `article`-Rolle sollte das `<article>`-Element verwendet werden.

## Beispiele

- Die [Restaurantempfehlungen-Anzeige im Feed](https://www.w3.org/WAI/ARIA/apg/patterns/feed/examples/feed-display.html) zusammen mit ihrer separaten [Dokumentation](https://www.w3.org/WAI/ARIA/apg/patterns/feed/examples/feed/) aus den WAI-ARIA 1.1-Erstellungspraxen für Feed-Designmuster

## Spezifikationen

{{Specifications}}

## Reihenfolge der Priorität

Diese Rolle entspricht dem {{HTMLElement('article')}}-Element in HTML, und dieses Element sollte stattdessen verwendet werden, falls möglich. Diese Rolle erfordert keine spezifischen Rollen unter ihren Kindern. Es ist die einzige Rolle, die als direktes Kind eines Elements mit der [`feed`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/feed_role)-Rolle erlaubt ist.

## Siehe auch

- [`feed`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/feed_role)
- [`section`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/section_role)
- Das {{HTMLElement('article')}}-Element
- {{Glossary("RSS", "RSS")}} Glossareintrag
