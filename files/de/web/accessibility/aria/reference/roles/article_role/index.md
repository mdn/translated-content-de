---
title: "ARIA: article-Rolle"
short-title: article
slug: Web/Accessibility/ARIA/Reference/Roles/article_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

Die Rolle `article` kennzeichnet einen Abschnitt einer Seite, der auch eigenständig auf einer Seite, in einem Dokument oder auf einer Website stehen könnte. Sie wird üblicherweise für zusammengehörige Inhaltseinheiten wie Kommentare, Forenbeiträge, Zeitungsartikel oder andere Elemente verwendet, die auf einer Seite gruppiert sind.

```html
<div role="article">
  <h2>Heading of the segment</h2>
  <p>Paragraph for the segment.</p>
  <p>Another paragraph.</p>
  Controls to interact with the article, share it, etc.
</div>
<div role="article">…</div>
```

Dieses Beispiel zeigt zwei Artikel nebeneinander auf einer Seite. Sie könnten ähnlich strukturiert sein und stehen miteinander in Beziehung.

> [!NOTE]
> Verwenden Sie statt eines `<div>` mit der Rolle `article` das Element {{HTMLElement('article')}}. **Verwenden Sie immer das native Element, wenn es verfügbar ist.**

Verwenden Sie nicht `role="article"`, sondern das Element `<article>`.

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

Die `article`-[Rolle für die Dokumentstruktur](/de/docs/Web/Accessibility/ARIA/Reference/Roles#1._document_structure_roles) kennzeichnet einen Abschnitt eines Dokuments, einer Seite oder einer Website, der für sich genommen als vollständiges Dokument, vollständige Seite oder vollständige Website betrachtet werden könnte. Eine Gruppe von Artikelabschnitten soll ihre Beziehung zueinander verdeutlichen.

Artikel gelten nicht als Navigations-Landmarks. Viele assistive Technologien, die Landmarks unterstützen, bieten jedoch auch eine Möglichkeit, zwischen Artikeln zu navigieren. Sie können außerdem verschachtelte Beziehungen zwischen Artikeln anzeigen.

Artikel können verschachtelt sein. Ein verschachtelter Artikel steht in direkter Beziehung zu dem Artikel, in dem er enthalten ist, aber nicht unbedingt zu Artikeln außerhalb dieser Verschachtelung. Konkrete Anwendungsfälle finden Sie in den Beispielen.

Wenn ein Artikel Teil eines Feeds ist, können die Attribute [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) und [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) gesetzt werden, um die Position dieses Artikels innerhalb des Feeds anzugeben.

Innerhalb einer `application` oder eines anderen Widgets, das Screenreader und andere assistive Technologien in einen Durchreichmodus versetzt, kann ein Artikel signalisieren, dass sie den enthaltenen Inhalt wieder als regulären Webinhalt behandeln sollen.

Statt die Rolle `article` einem nicht-semantischen Element zuzuweisen, sollten Sie das Element {{HTMLElement('article')}} verwenden. User Agents setzen es ebenso wie die Rolle `article` in die entsprechenden Informationen zur Barrierefreiheit um. Das Element {{HTMLElement('article')}} hilft auch Suchmaschinen, die Struktur einer Seite besser zu erkennen. Geeignete Anwendungsfälle für `role="article"` oder vorzugsweise `<article>` sind Blogbeiträge, Forenbeiträge, Kommentare zu Foren- oder Blogbeiträgen und Elemente in einem Social-Media-Feed.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset)
  - : Gibt im Kontext eines Feeds die Position dieses Artikels innerhalb des Feeds an. Die Zählung beginnt bei 1.
- [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize)
  - : Gibt im Kontext eines Feeds an, wie viele Artikel der Feed enthält.

### Tastaturinteraktionen

Diese Rolle unterstützt keine spezifischen Tastaturinteraktionen.

### Erforderliche JavaScript-Funktionen

- Event-Handler
  - : Für diese Rolle sind keine Event-Handler erforderlich.
- Ändern von Attributwerten
  - : Setzen Sie beim Erstellen eines Feeds die Attribute `aria-posinset` und `aria-setsize` für jede `article`-Rolle auf die entsprechenden Werte. Beachten Sie dabei, dass die Zählung bei `aria-posinset` mit 1 beginnt.

> [!NOTE]
> **Verwenden Sie immer das native Element, wenn es verfügbar ist.** Statt eines `<div>` mit der Rolle `article` sollten Sie das Element `<article>` verwenden.

## Rangfolge

Diese Rolle entspricht dem HTML-Element {{HTMLElement('article')}}. Verwenden Sie nach Möglichkeit dieses Element anstelle der Rolle. Für die untergeordneten Elemente dieser Rolle sind keine bestimmten Rollen erforderlich. Sie ist die einzige Rolle, die als direktes Kind eines Elements mit der Rolle [`feed`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/feed_role) zulässig ist.

## Beispiele

- Die [Anzeige eines Feeds mit Restaurantempfehlungen](https://www.w3.org/WAI/ARIA/apg/patterns/feed/examples/feed-display.html) und ihre separate [Dokumentation](https://www.w3.org/WAI/ARIA/apg/patterns/feed/examples/feed/) zum Feed-Entwurfsmuster der WAI-ARIA 1.1 Authoring Practices

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Rolle `feed`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/feed_role)
- [Rolle `section`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/section_role)
- Das Element {{HTMLElement('article')}}
- {{Glossary("RSS", "RSS")}}-Glossareintrag
