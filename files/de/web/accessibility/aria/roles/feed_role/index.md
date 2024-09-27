---
title: "ARIA: feed-Rolle"
slug: Web/Accessibility/ARIA/Roles/feed_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Ein `feed` ist eine dynamische scrollbare `list` von `articles`, bei der Artikel am Anfang oder Ende der Liste hinzugefügt oder entfernt werden, während der Benutzer scrollt. Ein `feed` ermöglicht es Screenreadern, den Lesemodus-Lese-Cursor sowohl zum Lesen als auch zum Scrollen durch einen Strom von reichhaltigem Inhalt zu verwenden, der möglicherweise unendlich weiterscrollt, indem mehr Inhalt geladen wird, während der Benutzer liest.

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

Ein `feed` ist eine Art von [`list`](/de/docs/Web/Accessibility/ARIA/Roles/list_role), die die übergeordnete Rolle für scrollbare [`articles`](/de/docs/Web/Accessibility/ARIA/Roles/article_role) darstellt, bei denen das Scrollen dazu führen kann, dass Artikel am Anfang oder Ende der Liste hinzugefügt werden. Die Rolle ermöglicht es unterstützenden Technologien, den Lesemodus-Lese-Cursor sowohl zum Lesen als auch zum Scrollen durch einen Strom von reichhaltigem Inhalt zu verwenden, der möglicherweise unendlich weiterscrollt, indem mehr Inhalt geladen wird, während der Benutzer liest. Beispiele umfassen einen RSS-Feed, Nachrichtenfeeds, Social-Media-Feeds wie Facebook, Instagram oder Mastodon oder sogar eine Liste verwandter Produkte auf einer E-Commerce-Seite. Diese Ströme können begrenzt oder unendlich sein und mehr Inhalt laden, während der Benutzer scrollt. Die Implementierung des `feed`-Musters ermöglicht es einem Screenreader, den Feed-Inhalt zuverlässig im Lesemodus zu lesen und auszulösen.

Im Gegensatz zu den Dokumentstrukturelementen, die statische HTML-Elemente darstellen, erfordert die `feed`-Rolle spezifische Interaktionen und die Implementierung von Tastaturnavigation. Das `feed` ist ein Container-Element, dessen Kinder {{HTMLElement('article')}}s sind oder die Rolle `article` haben. Jeder Artikel innerhalb eines Feeds sollte fokussierbar sein, mit einem tabindex von 0 oder -1. Ein Artikel sollte in den Sichtbereich gescrollt werden, wenn er oder ein Nachfahre-Element den Fokus erhält. Wenn das Hinzufügen von Artikeln den Hauptbrowser-Thread beansprucht, stellen Sie sicher, dass `aria-busy="true"` auf dem Feed selbst gesetzt wird, und setzen Sie es zurück auf `false`, wenn die Verarbeitung endet, oder der Benutzer sieht möglicherweise die Aktualisierungen nicht.

Wenn die Anzahl der Artikel bekannt ist, setzen Sie [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) auf den Artikeln selbst. Wenn jedoch die Gesamtzahl extrem groß, unbestimmt oder häufig wechselt, setzen Sie `aria-setsize="-1"` um anzuzeigen, dass die Größe des Feeds nicht bekannt ist.

Ein weiteres Merkmal des Feed-Musters ist das Überfliegen: Artikel innerhalb eines Feeds können sowohl einen zugänglichen Namen mit dem [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) als auch eine Beschreibung mit einem `aria-describedby` enthalten, das Bildschirmleser darüber informiert, welche Elemente nach dem Label gesprochen werden sollen, wenn sie nach Artikel navigieren. Indem identifiziert wird, welche Elemente innerhalb eines Artikels den Titel und den Hauptinhalt liefern, können unterstützende Technologien Funktionen bereitstellen, die es Benutzern ermöglichen, von Artikel zu Artikel zu springen und effizient zu erkennen, welche Artikel sie lesen möchten.

Das Feed-Muster ermöglicht eine zuverlässige Interaktion im Lese-Modus von unterstützenden Technologien, indem die folgende Interoperabilitätsvereinbarung zwischen der Webseite und unterstützenden Technologien festgelegt wird:

Im Kontext eines Feeds ist der Seiten-Code verantwortlich für:

- Angemessenes visuelles Scrollen des Inhalts basierend darauf, welcher Artikel den DOM-Fokus enthält.
- Laden oder Entfernen von Feed-Artikeln basierend darauf, welcher Artikel den DOM-Fokus enthält.

### Tastaturinteraktionen

Es wird empfohlen, die folgende oder eine ähnliche Schnittstelle zu unterstützen, wenn der Fokus innerhalb des Feeds liegt:

- <kbd>Page Down</kbd>: Fokus auf den nächsten Artikel verschieben.
- <kbd>Page Up</kbd>: Fokus auf den vorherigen Artikel verschieben.
- <kbd>Control + End</kbd>: Fokus auf das erste fokussierbare Element nach dem Feed verschieben.
- <kbd>Control + Home</kbd>: Fokus auf das erste fokussierbare Element vor dem Feed verschieben.

Wenn ein Feed innerhalb eines Feeds verschachtelt ist, wie z.B. ein Kommentar-Feed innerhalb eines Blog-Feeds, ist es die Konvention, mit der <kbd>Tab</kbd>-Taste in den verschachtelten Feed zu wechseln und eine weitere Taste bereitzustellen, wie <kbd>Alt + Page Down</kbd>, um von einem 'äußeren' Artikel zum ersten Element im verschachtelten Feed dieses Artikels zu navigieren. Zwischen dem verschachtelten Feed und dem Hauptfeed mit <kbd>Control + End</kbd> navigieren, um den Fokus vom inneren Feed auf den nächsten Artikel im äußeren Feed zu verschieben.

### <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr>-Rollen, Zustände und Eigenschaften

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)

  - : Wenn der Feed keinen sichtbaren Titel hat, hat das `feed`-Element ein mit `aria-label` angegebenes Label. Falls nicht, siehe `aria-labelledby`.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)

  - : Wenn der Feed einen sichtbaren Titel hat, hat das `feed`-Element ein `aria-labelledby`, das auf das Element verweist, das den Titel enthält. Andernfalls fügen Sie ein `aria-label` hinzu.

- [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy)

  - : Wenn der Feed beschäftigt ist, z.B. wenn Artikel hinzugefügt oder entfernt werden, setzen Sie `aria-busy="true"` während der Aktualisierungsoperation. Stellen Sie sicher, dass es auf `false` zurückgesetzt wird, wenn die Operation abgeschlossen ist, oder die Änderungen möglicherweise nicht sichtbar werden.

- article
  - : Jede Inhaltssektion in einem Feed sollte in einem `<article>` oder einem Element mit der Rolle [`article`](/de/docs/Web/Accessibility/ARIA/Roles/article_role) enthalten sein. Jedes `article` sollte ein `aria-labelledby` haben, das auf den Artikeltitel oder ein anderes Kind verweist, das als unterscheidbares Label dienen kann. Jedes `article` sollte vorzugsweise ein `aria-describedby` haben, das auf ein oder mehrere Elemente innerhalb des Artikels verweist, die als Hauptinhalt des Artikels dienen. Jedes `article`-Element hat [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) auf einen Wert gesetzt, der seine Position im Feed repräsentiert, und ein [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) auf einen Wert gesetzt, der entweder die Gesamtzahl der geladenen Artikel oder die Gesamtzahl im Feed repräsentiert, je nachdem, welcher Wert für die Benutzer hilfreicher ist. Wenn die Gesamtzahl im Feed nicht bekannt ist, setzen Sie `aria-setsize="-1"`.

### Erforderliche JavaScript-Funktionen

Keine, außer wie durch Attribute erforderlich. Beispielsweise das Setzen von [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy) auf `true` während der Aktualisierungsoperation, falls erforderlich, und dann auf `false` nach Abschluss.

Hinweis: Es ist die Verantwortung des Autors, das obenstehende Tastaturverhalten anzuwenden.

## Beispiele

[Beispielimplementierung des Feed-Musters](https://www.w3.org/WAI/ARIA/apg/patterns/feed/examples/feed/)

## Best Practices

Um eine gute Benutzererfahrung zu gewährleisten, vermeiden Sie das Einfügen oder Entfernen von Artikeln in der Mitte eines `feed`, laden Sie neue Artikel, bevor der Benutzer das Ende des Feeds erreicht hat, und stellen Sie Tastaturbefehle bereit, um den Fokus zwischen den Artikeln zu bewegen, damit Benutzer mit Tastaturunterstützung durch Ihren Feed navigieren können. Siehe [Tastaturinteraktionen](#tastaturinteraktionen).

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das HTML-{{HTMLElement('article')}} Element
- Das {{HTMLElement('ul')}} ungeordnete Listen-Element
- [ARIA: `article`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/article_role)
- [ARIA: `list`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/list_role)
