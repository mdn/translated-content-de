---
title: "ARIA: article-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/article_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die `article`-Rolle gibt einen Abschnitt einer Seite an, der leicht alleine auf einer Seite, in einem Dokument oder auf einer Website stehen könnte. Sie wird normalerweise auf zusammengehörige Inhalte wie Kommentare, Forenbeiträge, Zeitungsartikel oder andere Elemente angewendet, die auf einer Seite gruppiert sind.

```html
<div role="article">
  <h2>Heading of the segment</h2>
  <p>Paragraph for the segment.</p>
  <p>Another paragraph.</p>
  Controls to interact with the article, share it, etc.
</div>
<div role="article">…</div>
```

Dieses Beispiel zeigt zwei Artikel nebeneinander auf einer Seite, die ähnlich strukturiert und miteinander verwandt sein könnten.

> [!NOTE]
> Anstelle eines `<div>` mit einer `article`-Rolle sollte das {{HTMLElement('article')}}-Element verwendet werden. **Verwenden Sie immer das native Element, wenn verfügbar**

Verwenden Sie nicht `role="article"`. Stattdessen sollten Sie das `<article>`-Element verwenden.

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

Die `article`-[Dokumentenstrukturrolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#1._document_structure_roles) kennzeichnet einen Abschnitt eines Dokuments, einer Seite oder einer Website, der, wenn er alleine stehen würde, als vollständiges Dokument, Seite oder Website angesehen werden könnte. Das Ziel einer Gruppe von Artikelabschnitten ist es, ihre Beziehung zueinander zu kennzeichnen.

Artikel gelten nicht als Navigationsmerkmal, aber viele unterstützende Technologien, die Merkmale unterstützen, bieten auch eine Möglichkeit, zwischen Artikeln zu navigieren. Sie können auch die Verschachtelungsbeziehungen innerhalb von Artikeln kennzeichnen.

Artikel können verschachtelt werden, was anzeigt, dass ein verschachtelter Artikel direkt im Zusammenhang mit dem Artikel steht, in dem er verschachtelt ist, aber nicht notwendigerweise mit den Artikeln außerhalb der Verschachtelungshierarchie. Siehe die Beispiele für spezifische Anwendungsfälle.

Wenn ein Artikel Teil eines Feeds ist, können die Attribute [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) und [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) gesetzt werden, um anzugeben, welche Position dieser bestimmte Artikel innerhalb des Feeds einnimmt.

Innerhalb einer `application` oder eines anderen Widgets, die Bildschirmlesegeräte und andere unterstützende Technologien im Durchgangsmodus halten, kann ein Artikel verwendet werden, um anzuzeigen, dass diese wieder zum normalen Webinhalt zurückkehren sollen.

Anstatt die `article`-Rolle auf ein nicht-semantisches Element einzuschließen, sollte das {{HTMLElement('article')}}-Element verwendet werden. Benutzeragenten übersetzen dies in die geeignete Zugänglichkeitsinformation wie die `article`-Rolle. Die Verwendung des {{HTMLElement('article')}}-Elements hilft auch Suchmaschinen, die Struktur einer Seite besser zu erkennen. Beispiele für angemessene Verwendungen von `role="article"`, oder vorzugsweise `<article>`, sind Blogbeiträge, Forenbeiträge, ein Kommentar zu einem Forum- oder Blogbeitrag, jedes Element in einem Social-Media-Feed.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset)
  - : Im Kontext eines Feeds zeigt es die Position dieses bestimmten Artikels innerhalb dieses Feeds anhand einer Zählung, die bei 1 beginnt.
- [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize)
  - : Im Kontext eines Feeds zeigt es an, wie viele Artikellelemente es innerhalb dieses Feeds gibt.

### Tastaturinteraktionen

Diese Rolle unterstützt keine spezifische Tastaturinteraktion.

### Erforderliche JavaScript-Funktionen

- Ereignishandler
  - : Diese Rolle erfordert keine Ereignishandler.
- Ändern von Attributwerten
  - : Beim Erstellen eines Feeds setzen Sie die Attribute `aria-posinset` und `aria-setsize` für jede Artikelrolle auf die entsprechenden Werte, wobei zu beachten ist, dass `aria-posinset` bei 1 startet.

> **Hinweis:** **Verwenden Sie immer das native Element, wenn verfügbar.** Anstelle eines `<div>` mit der `article`-Rolle sollte das `<article>`-Element verwendet werden.

## Beispiele

- Die [Restaurantempfehlung-Feed-Anzeige](https://www.w3.org/WAI/ARIA/apg/patterns/feed/examples/feed-display.html) zusammen mit ihrer separaten [Dokumentation](https://www.w3.org/WAI/ARIA/apg/patterns/feed/examples/feed/) aus den WAI-ARIA 1.1 Gestaltungspraktiken für Feeds

## Spezifikationen

{{Specifications}}

## Vorrangordnung

Diese Rolle entspricht dem {{HTMLElement('article')}}-Element in HTML, und dieses Element sollte stattdessen verwendet werden, wenn möglich. Diese Rolle erfordert keine spezifischen Rollen als Kinder. Sie ist die einzige Rolle, die als direktes Kind eines Elements mit der [`feed`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/feed_role)-Rolle erlaubt ist.

## Siehe auch

- [`feed`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/feed_role)
- [`section`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/section_role)
- Das {{HTMLElement('article')}}-Element
- {{Glossary("RSS", "RSS")}} Glossarbegriff
