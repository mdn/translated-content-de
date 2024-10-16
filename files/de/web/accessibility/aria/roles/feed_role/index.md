---
title: "ARIA: feed Rolle"
slug: Web/Accessibility/ARIA/Roles/feed_role
l10n:
  sourceCommit: 2b26cc6e576d23f68fdf992767da81de9707965e
---

{{AccessibilitySidebar}}

Ein `feed` ist eine dynamische scrollbare `list` von `articles`, bei der Artikel an beiden Enden der Liste hinzugefügt oder entfernt werden können, während der Benutzer scrollt. Ein `feed` ermöglicht es Screenreadern, den Lese-Cursor im Browsemode zu verwenden, um durch einen Stream von reichhaltigem Inhalt zu lesen und zu scrollen, der möglicherweise unendlich weiterscrollt, indem mehr Inhalte geladen werden, während der Benutzer liest.

```html
<section role="feed" aria-busy="false">
  …
  <article aria-posinset="427" aria-setsize="-1">…</article>
  <article aria-posinset="428" aria-setsize="-1">…</article>
  <article aria-posinset="429" aria-setsize="-1">…</article>
  …
</section>
```

## Beschreibung

Ein `feed` ist eine Art von [`list`](/de/docs/Web/Accessibility/ARIA/Roles/list_role), die als Container-Rolle für scrollbare [`articles`](/de/docs/Web/Accessibility/ARIA/Roles/article_role) dient, bei denen das Scrollen dazu führen kann, dass Artikel oben oder unten an die Liste hinzugefügt werden. Die Rolle ermöglicht es unterstützender Technologie, den Lese-Cursor im Browsemode zu verwenden, um durch einen Stream von reichhaltigem Inhalt zu lesen und zu scrollen, der möglicherweise unendlich weiterscrollt, indem mehr Inhalte geladen werden, während der Benutzer liest. Beispiele schließen unter anderem einen RSS-Feed, Nachrichten-Feeds, soziale Medien-Feeds wie Facebook, Instagram oder Mastodon oder sogar eine Liste verwandter Produkte auf einer E-Commerce-Seite ein. Diese Streams können begrenzt oder unendlich sein und mehr Inhalte laden, wenn der Benutzer scrollt. Die Implementierung des `feed`-Musters erlaubt es einem Screenreader, den Feed-Inhalt zuverlässig zu lesen und das Laden von Inhalten im Lesemodus auszulösen.

Im Gegensatz zu den Dokumentstruktur-Elementen, die statische HTML-Elemente darstellen, erfordert die `feed`-Rolle spezifische Interaktionen und die Implementierung der Tastaturnavigation. Der `feed` ist ein Container-Element, dessen Kinder {{HTMLElement('article')}}s sind oder die Rolle `article` haben. Jeder Artikel innerhalb eines Feeds sollte fokussierbar sein, mit einem Tabindex von 0 oder -1. Ein Artikel sollte in den sichtbaren Bereich gescrollt werden, wenn er oder ein Nachfahre-Element den Fokus erhält. Wenn das Hinzufügen von Artikeln den Haupt-Browser-Thread beansprucht, stellen Sie sicher, dass `aria-busy="true"` auf dem Feed selbst gesetzt ist, und setzen Sie es zurück auf `false`, wenn die Verarbeitung endet, sonst sieht der Benutzer möglicherweise keine Aktualisierungen.

Wenn die Anzahl der Artikel bekannt ist, setzen Sie [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) auf die Artikel selbst. Wenn die Gesamtzahl jedoch extrem groß, unbestimmt oder sich häufig ändert, setzen Sie `aria-setsize="-1"`, um anzuzeigen, dass die Größe des Feeds nicht bekannt ist.

Ein weiteres Merkmal des Feed-Musters ist das Überlesen: Artikel innerhalb eines Feeds können sowohl einen zugänglichen Namen mit dem [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) als auch eine Beschreibung mit einem `aria-describedby` enthalten, was Screenreadern vorschlägt, welche Elemente nach dem Label zu sprechen sind, wenn sie nach Artikel navigieren. Durch die Identifizierung der Elemente innerhalb eines Artikels, die den Titel und den Hauptinhalt bieten, können unterstützende Technologien Funktionen bereitstellen, die es Benutzern ermöglichen, von Artikel zu Artikel zu springen und effizient zu erkennen, welche Artikel sie lesen möchten.

Das Feed-Muster ermöglicht eine zuverlässige Interaktion im Lesemodus der unterstützenden Technologie, indem es die folgende Interoperabilitätsvereinbarung zwischen der Webseite und den unterstützenden Technologien herstellt:

Im Kontext eines Feeds ist der Webseiten-Code verantwortlich für:

- Angemessenes visuelles Scrollen des Inhalts basierend darauf, welcher Artikel den DOM-Fokus enthält.
- Laden oder Entfernen von Feed-Artikeln basierend darauf, welcher Artikel den DOM-Fokus enthält.

### Tastatur-Interaktionen

Es wird empfohlen, die folgende oder eine ähnliche Schnittstelle zu unterstützen, wenn der Fokus innerhalb des Feeds liegt:

- <kbd>Bild runter</kbd>: Fokus auf den nächsten Artikel bewegen.
- <kbd>Bild hoch</kbd>: Fokus auf den vorherigen Artikel bewegen.
- <kbd>Strg + Ende</kbd>: Fokus auf das erste fokussierbare Element nach dem Feed bewegen.
- <kbd>Strg + Pos1</kbd>: Fokus auf das erste fokussierbare Element vor dem Feed bewegen.

Wenn ein Feed innerhalb eines Feeds verschachtelt ist, wie beispielsweise ein Kommentarfeed innerhalb eines Blogposts-Feeds, besteht die Konvention darin, mit der <kbd>Tab</kbd>-Taste in den verschachtelten Feed zu gelangen und einen weiteren Schlüssel, wie zum Beispiel <kbd>Alt + Bild runter</kbd>, bereitzustellen, um von einem 'äußeren' Artikel zum ersten Element im verschachtelten Feed dieses Artikels zu navigieren. Wechseln Sie zwischen dem verschachtelten Feed und dem Hauptfeed mit <kbd>Strg + Ende</kbd>, um den Fokus vom inneren Feed auf den nächsten Artikel im äußeren Feed zu bewegen.

### <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Rollen, Zustände und Eigenschaften

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)

  - : Wenn der Feed keinen sichtbaren Titel hat, hat das `feed`-Element ein mit `aria-label` angegebenes Label. Wenn es einen hat, siehe `aria-labelledby`.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)

  - : Wenn der Feed einen sichtbaren Titel hat, hat das `feed`-Element `aria-labelledby`, das auf das Element verweist, das den Titel enthält. Falls nicht, fügen Sie ein `aria-label` hinzu.

- [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy)

  - : Wenn beschäftigt, wie wenn Artikel zum `feed` hinzugefügt oder daraus entfernt werden, setzen Sie `aria-busy="true"` während des Aktualisierungsvorgangs. Stellen Sie sicher, dass es nach Abschluss der Operation zurück auf `false` gesetzt wird, oder die Änderungen könnten nicht sichtbar werden.

- article
  - : Jeder Abschnitt von Inhalten in einem Feed sollte in einem `<article>` oder einem Element mit der Rolle [`article`](/de/docs/Web/Accessibility/ARIA/Roles/article_role) enthalten sein. Jeder `article` sollte ein `aria-labelledby` haben, das auf den Artikeltitel oder ein anderes Kind verweist, das als unterscheidendes Label dienen kann. Jeder Artikel sollte vorzugsweise `aria-describedby` haben, das auf ein oder mehrere Elemente innerhalb des Artikels verweist, die als Hauptinhalt des Artikels gelten. Jedes `article`-Element hat [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset), das auf einen Wert gesetzt ist, der seine Position im Feed repräsentiert, und ein [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize), das auf einen Wert gesetzt ist, der entweder die Gesamtzahl der geladenen Artikel oder die Gesamtanzahl im Feed darstellt, je nachdem, welcher Wert den Benutzern hilfreicher ist. Wenn die Gesamtanzahl im Feed nicht bekannt ist, setzen Sie `aria-setsize="-1"`.

### Erforderliche JavaScript-Funktionen

Keine, außer wie von Attributen erforderlich. Zum Beispiel das Setzen von [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy) auf `true` während des Aktualisierungsvorgangs, falls nötig, und auf `false` bei Abschluss.

> [!NOTE]
> Es liegt in der Verantwortung des Autors, das oben erwähnte Tastaturverhalten anzuwenden.

## Beispiele

[Beispielhafte Implementierung des Feed-Musters](https://www.w3.org/WAI/ARIA/apg/patterns/feed/examples/feed/)

## Best Practices

Um eine gute Benutzererfahrung sicherzustellen, vermeiden Sie das Einfügen oder Entfernen von Artikeln in der Mitte eines `feed`, laden Sie neue Artikel, bevor der Benutzer das Ende des Feeds erreicht, und stellen Sie Tastaturbefehle zur Verfügung, um den Fokus zwischen Artikeln zu bewegen, sodass Tastenbenutzer durch Ihren Feed navigieren können. Siehe [Tastatur-Interaktionen](#tastatur-interaktionen).

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das HTML {{HTMLElement('article')}}-Element
- Das {{HTMLElement('ul')}}-Element einer ungeordneten Liste
- [ARIA: `article` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/article_role)
- [ARIA: `list` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/list_role)
