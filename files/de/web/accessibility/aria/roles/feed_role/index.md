---
title: "ARIA: feed-Rolle"
slug: Web/Accessibility/ARIA/Roles/feed_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Ein `feed` ist eine dynamische scrollbare `list` von `articles`, bei der Artikel am Anfang oder Ende der Liste hinzugefügt oder entfernt werden, während die Benutzerin oder der Benutzer scrollt. Ein `feed` ermöglicht es Screenreadern, den Lesemodus-Cursor zu verwenden, um durch einen Strom von reichhaltigen Inhalten zu lesen und zu scrollen, der durch das Laden weiterer Inhalte beim Lesen möglicherweise endlos weiter scrollen kann.

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

Ein `feed` ist eine Art von [`list`](/de/docs/Web/Accessibility/ARIA/Roles/list_role), die tragende Rolle für scrollbare [`articles`](/de/docs/Web/Accessibility/ARIA/Roles/article_role), bei der das Scrollen dazu führen kann, dass Artikel am Anfang oder Ende der Liste hinzugefügt werden. Die Rolle ermöglicht es unterstützender Technologie, den Lesemodus-Cursor sowohl zum Lesen als auch zum Scrollen durch einen Strom von reichhaltigen Inhalten zu verwenden, der durch das Laden weiterer Inhalte beim Lesen möglicherweise endlos weiter scrollen kann. Beispiele sind ein RSS-Feed, Nachrichten-Feeds, soziale Medien-Feeds wie Facebook, Instagram oder Mastodon, oder sogar eine Liste verwandter Produkte auf einer E-Commerce-Seite. Diese Streams können begrenzt oder unendlich sein und laden beim Scrollen der Benutzerin oder des Benutzers weitere Inhalte. Die Implementierung des `feed`-Musters ermöglicht es einem Screenreader, Inhalte im Lesemodus zuverlässig zu lesen und das Laden von Feed-Inhalten auszulösen.

Im Gegensatz zu den Dokumentstruktur-Elementen, die statische HTML-Elemente repräsentieren, erfordert die `feed`-Rolle spezifische Interaktionen und Implementierungen der Tastaturnavigation. Der `feed` ist ein Containerelement, dessen Kinder {{HTMLElement('article')}}s sind oder die Rolle `article` haben. Jeder Artikel innerhalb eines `feed` sollte fokussierbar sein, mit einem `tabindex` von 0 oder -1. Ein Artikel sollte in den Ansichtsbereich gescrollt werden, wenn er oder ein untergeordnetes Element den Fokus erhält. Wenn die Hinzufügung von Artikeln den Hauptbrowser-Thread beansprucht, stellen Sie sicher, `aria-busy="true"` auf dem `feed` selbst zu setzen, und setzen Sie dieses zurück auf `false`, wenn die Verarbeitung endet, sonst sieht die Benutzerin oder der Benutzer die Updates möglicherweise nicht.

Wenn die Anzahl der Artikel bekannt ist, setzen Sie [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) auf die Artikel selbst. Wenn jedoch die Gesamtanzahl extrem groß, unbestimmt oder sich häufig ändert, setzen Sie `aria-setsize="-1"` um anzuzeigen, dass die Größe des `feed` nicht bekannt ist.

Ein weiteres Merkmal des `feed`-Musters ist das oberflächliche Lesen: Artikel innerhalb eines `feed` können sowohl einen zugänglichen Namen mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) als auch eine Beschreibung mit `aria-describedby` enthalten, was Screenreadern vorschlägt, welche Elemente nach dem Label gesprochen werden sollen, wenn nach Artikeln navigiert wird. Durch das Identifizieren der Elemente innerhalb eines Artikels, die den Titel und den Hauptinhalt bieten, können unterstützende Technologien Funktionen bereitstellen, die es Benutzerinnen und Benutzern ermöglichen, von Artikel zu Artikel zu springen und effizient zu erkennen, welche Artikel sie lesen möchten.

Das `feed`-Muster ermöglicht eine zuverlässige Interaktion mit dem Lese-Modus der unterstützenden Technologie durch die Festlegung der folgenden Interoperabilitätsvereinbarung zwischen der Webseite und unterstützenden Technologien:

Im Kontext eines `feed` ist der Webseiten-Code verantwortlich für:

- Angemessenes visuelles Scrollen des Inhalts basierend darauf, welcher Artikel DOM-Fokus enthält.
- Laden oder Entfernen von `feed`-Artikeln basierend darauf, welcher Artikel DOM-Fokus enthält.

### Tastatur-Interaktionen

Es wird empfohlen, die folgende oder eine ähnliche Benutzeroberfläche zu unterstützen, wenn der Fokus innerhalb des `feed` ist:

- <kbd>Page Down</kbd>: Fokussierung auf den nächsten Artikel.
- <kbd>Page Up</kbd>: Fokussierung auf den vorherigen Artikel.
- <kbd>Control + End</kbd>: Fokussierung auf das erste fokussierbare Element nach dem `feed`.
- <kbd>Control + Home</kbd>: Fokussierung auf das erste fokussierbare Element vor dem `feed`.

Befindet sich ein `feed` innerhalb eines `feed`, wie z.B. ein Kommentar-Feed innerhalb eines Feeds von Blogbeiträgen, ist es üblich, mit der <kbd>Tab</kbd>-Taste in den geschachtelten `feed` zu tabben und eine andere Taste bereitzustellen, wie <kbd>Alt + Page Down</kbd>, um von einem "äußeren" Artikel zum ersten Element im geschachtelten `feed` dieses Artikels zu navigieren. Zwischen dem geschachtelten `feed` und dem Haupt-`feed` navigieren Sie mit <kbd>Control + End</kbd>, wodurch der Fokus vom inneren `feed` auf den nächsten Artikel im äußeren `feed` verschoben wird.

### <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Rollen, Zustände und Eigenschaften

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)

  - : Wenn der `feed` keinen sichtbaren Titel hat, hat das `feed`-Element ein Label, das mit `aria-label` angegeben ist. Wenn es eines hat, siehe `aria-labelledby`.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)

  - : Wenn der `feed` einen sichtbaren Titel hat, hat das `feed`-Element `aria-labelledby`, das auf das Element verweist, das den Titel enthält. Wenn nicht, fügen Sie ein `aria-label` hinzu.

- [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy)

  - : Wenn beschäftigt, wie z.B. wenn Artikel hinzugefügt oder aus dem `feed` entfernt werden, setzen Sie `aria-busy="true"` während des Aktualisierungsvorgangs. Stellen Sie sicher, dass es auf `false` zurückgesetzt wird, wenn die Operation abgeschlossen ist, oder die Änderungen werden möglicherweise nicht sichtbar.

- article
  - : Jeder Inhaltsabschnitt in einem `feed` sollte in einem `<article>` oder einem Element mit der Rolle [`article`](/de/docs/Web/Accessibility/ARIA/Roles/article_role) enthalten sein. Jeder `article` sollte ein `aria-labelledby` haben, das auf den Artikeltitel oder ein anderes Kind verweist, das als unterscheidendes Label dienen kann. Jeder Artikel sollte vorzugsweise `aria-describedby` haben, das auf ein oder mehrere Elemente innerhalb des Artikels verweist, die als Hauptinhalt des Artikels dienen. Jedes `article`-Element hat [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) auf einen Wert gesetzt, der seine Position im `feed` darstellt, und [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize), das auf einen Wert gesetzt ist, der entweder die Gesamtanzahl der geladenen Artikel oder die gesamte Anzahl im `feed` darstellt, je nachdem, welcher Wert für Benutzerinnen und Benutzer hilfreicher ist. Wenn die Gesamtanzahl im `feed` nicht bekannt ist, setzen Sie `aria-setsize="-1"`.

### Erforderliche JavaScript-Funktionen

Keine, außer, wie von Attributen erforderlich. Zum Beispiel das Setzen von [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy) auf `true` während des Aktualisierungsvorgangs, falls erforderlich, und dann auf `false` nach Abschluss.

Hinweis: Es liegt in der Verantwortung der Autorin oder des Autors, das "obige" Tastaturverhalten anzuwenden.

## Beispiele

[Beispielimplementierung des `Feed`-Musters](https://www.w3.org/WAI/ARIA/apg/patterns/feed/examples/feed/)

## Bewährte Praktiken

Um eine gute Benutzererfahrung sicherzustellen, vermeiden Sie das Einfügen oder Entfernen von Artikeln in der Mitte eines `feed`, laden Sie neue Artikel, bevor der Benutzer das Ende des `feed` erreicht hat, und bieten Sie Tastaturbefehle an, um den Fokus zwischen den Artikeln zu bewegen, damit Tastaturnutzende durch Ihren `feed` navigieren können. Siehe [Tastatur-Interaktionen](#tastatur-interaktionen).

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das HTML {{HTMLElement('article')}} Element
- Das {{HTMLElement('ul')}} ungeordnete Listen-Element
- [ARIA: `article` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/article_role)
- [ARIA: `list` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/list_role)
