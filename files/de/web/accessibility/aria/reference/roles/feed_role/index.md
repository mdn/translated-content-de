---
title: "ARIA: feed Rolle"
short-title: feed
slug: Web/Accessibility/ARIA/Reference/Roles/feed_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Ein `feed` ist eine dynamische scrollbare `list` von `articles`, in denen Artikel entweder am Anfang oder Ende der Liste hinzugefügt oder entfernt werden, während der Benutzer scrollt. Ein `feed` ermöglicht es Screenreadern, den Lesemodus zu nutzen, um sowohl durch das Lesen als auch durch Scrollen einen Stream von reichhaltigem Inhalt zu navigieren, der möglicherweise unendlich scrollt, indem mehr Inhalt geladen wird, während der Benutzer liest.

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

Ein `feed` ist eine Art von [`list`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role), die übergeordnete Rolle für scrollbare [`articles`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/article_role), bei der das Scrollen dazu führen kann, dass Artikel an das obere oder untere Ende der Liste hinzugefügt werden. Die Rolle ermöglicht es unterstützenden Technologien, den Lesemodus-Cursor zu verwenden, um sowohl durch das Lesen als auch durch das Scrollen einen Stream von reichhaltigem Inhalt zu navigieren, der möglicherweise unendlich scrollt, indem mehr Inhalt geladen wird, während der Benutzer liest. Beispiele sind ein RSS-Feed, Nachrichten-Feeds, Social-Media-Feeds wie Facebook, Instagram oder Mastodon oder sogar eine Liste verwandter Produkte auf einer E-Commerce-Seite. Diese Streams können begrenzt oder unendlich sein, wobei mehr Inhalt geladen wird, während der Benutzer scrollt. Die Implementierung des `feed`-Musters ermöglicht es einem Screenreader, zuverlässig den Feed-Inhalt im Lesemodus zu lesen und zu laden.

Im Gegensatz zu den Dokumentstrukturelementen, die statische HTML-Elemente darstellen, erfordert die `feed`-Rolle spezifische Interaktionen und die Implementierung der Tastaturnavigation. Der `feed` ist ein Container-Element, dessen Kinder {{HTMLElement('article')}}s sind oder die die Rolle `article` haben. Jedes `article` innerhalb eines `feed` sollte fokussierbar sein, mit einem `tabindex` von 0 oder -1. Ein `article` sollte in den Sichtbereich gescrollt werden, wenn es oder ein Kind davon den Fokus erhält. Wenn das Hinzufügen von Artikeln den Haupt-Browser-Thread beansprucht, stellen Sie sicher, dass Sie `aria-busy="true"` auf dem `feed` selbst setzen, und stellen Sie sicher, dass es wieder auf `false` gesetzt wird, wenn die Verarbeitung endet, oder der Benutzer sieht möglicherweise die Aktualisierungen nicht.

Wenn die Anzahl der Artikel bekannt ist, setzen Sie [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) auf die Artikel selbst. Wenn die Gesamtzahl jedoch extrem hoch, unbestimmt oder sich häufig ändert, setzen Sie `aria-setsize="-1"`, um anzugeben, dass die Größe des `feed` nicht bekannt ist.

Ein weiteres Merkmal des `feed`-Musters ist das Überfliegen von Artikeln: Artikel innerhalb eines `feed` können sowohl einen zugänglichen Namen mit dem [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) als auch eine Beschreibung mit einem `aria-describedby` enthalten, um Screenreader darauf hinzuweisen, welche Elemente nach dem Label gesprochen werden sollen, wenn Sie nach Artikel navigieren. Durch die Identifizierung der Elemente in einem Artikel, die den Titel und den Hauptinhalt bereitstellen, können unterstützende Technologien Funktionen bereitstellen, die es den Benutzern ermöglichen, von Artikel zu Artikel zu springen und effizient zu erkennen, welche Artikel sie lesen möchten.

Das `feed`-Muster ermöglicht eine zuverlässige Interaktion im Lesemodus mit unterstützenden Technologien durch die Festlegung des folgenden Interoperabilitätsabkommens zwischen der Webseite und unterstützenden Technologien:

Im Kontext eines `feed` ist der Webseiten-Code verantwortlich für:

- Angemessenes visuelles Scrollen des Inhalts basierend darauf, welcher Artikel den DOM-Fokus enthält.
- Laden oder Entfernen von `feed`-Artikeln basierend darauf, welcher Artikel den DOM-Fokus enthält.

### Tastaturinteraktionen

Es wird empfohlen, die folgende oder eine ähnliche Schnittstelle zu unterstützen, wenn der Fokus innerhalb des `feed` liegt:

- <kbd>Page Down</kbd>: Fokus auf den nächsten Artikel bewegen.
- <kbd>Page Up</kbd>: Fokus auf den vorherigen Artikel bewegen.
- <kbd>Control + End</kbd>: Fokus auf das erste fokussierbare Element nach dem `feed` bewegen.
- <kbd>Control + Home</kbd>: Fokus auf das erste fokussierbare Element vor dem `feed` bewegen.

Wenn ein `feed` innerhalb eines anderen `feed` verschachtelt ist, wie z. B. ein Kommentar-Feed innerhalb eines Blogpost-Feeds, ist die Konvention, mit der <kbd>Tab</kbd>-Taste in den verschachtelten `feed` zu wechseln und einen anderen Schlüssel bereitzustellen, wie z. B. <kbd>Alt + Page Down</kbd>, um von einem 'äußeren' Artikel zum ersten Element im verschachtelten `feed` dieses Artikels zu navigieren. Navigieren Sie zwischen dem verschachtelten `feed` und dem Haupt-`feed` mit <kbd>Control + End</kbd>, um den Fokus vom inneren `feed` auf den nächsten Artikel im äußeren `feed` zu verschieben.

### <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr>-Rollen, -Zustände und -Eigenschaften

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Wenn der `feed` keinen sichtbaren Titel hat, hat das `feed`-Element ein mit `aria-label` angegebenes Label. Wenn es einen sichtbaren Titel gibt, siehe `aria-labelledby`.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Wenn der `feed` einen sichtbaren Titel hat, hat das `feed`-Element `aria-labelledby`, das auf das Element verweist, das den Titel enthält. Wenn nicht, fügen Sie ein `aria-label` hinzu.

- [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
  - : Wenn beschäftigt, wie z.B. wenn Artikel zum `feed` hinzugefügt oder daraus entfernt werden, setzen Sie `aria-busy="true"` während der Aktualisierung. Stellen Sie sicher, dass es zurück auf `false` gesetzt wird, wenn der Vorgang abgeschlossen ist oder die Änderungen möglicherweise nicht sichtbar werden.

- article
  - : Jeder Inhaltsbereich in einem `feed` sollte in einem `<article>` oder einem Element mit der Rolle [`article`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/article_role) enthalten sein. Jedes `article` sollte ein `aria-labelledby` besitzen, das auf den Artikeltitel oder ein anderes Kind verweist, das als Unterscheidungsmerkmal dienen kann. Jedes `article` sollte vorzugsweise ein `aria-describedby` haben, das auf ein oder mehrere Elemente im Artikel verweist, die als Hauptinhalt des Artikels dienen. Jedes `article`-Element hat [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset), das auf einen Wert gesetzt ist, der seine Position im `feed` darstellt und ein [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize), das auf einen Wert gesetzt ist, der entweder die Gesamtzahl der geladenen Artikel oder die Gesamtanzahl im `feed` angibt, je nachdem, welcher Wert für die Benutzer hilfreicher ist. Wenn die Gesamtanzahl im `feed` unbekannt ist, setzen Sie `aria-setsize="-1"`.

### Erforderliche JavaScript-Funktionen

Keine, außer wie von Attributen gefordert. Zum Beispiel das Setzen von [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) auf `true` während der Aktualisierung, wenn nötig, und dann auf `false` bei Abschluss.

Hinweis: Es liegt in der Verantwortung des Autors, das oben beschriebene Verhalten der Tastatur zu implementieren.

## Beispiele

[Beispielimplementierung des Feed-Musters](https://www.w3.org/WAI/ARIA/apg/patterns/feed/examples/feed/)

## Best Practices

Um eine gute Benutzererfahrung zu gewährleisten, vermeiden Sie es, Artikel in der Mitte eines `feed`-Elements einzufügen oder zu entfernen, laden Sie neue Artikel, bevor der Benutzer das Ende des `feed` erreicht, und bieten Sie Tastaturbefehle zum Verschieben des Fokus zwischen Artikeln, damit Tastaturnutzer durch Ihren `feed` navigieren können. Siehe [Tastaturinteraktionen](#tastaturinteraktionen).

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das HTML-{{HTMLElement('article')}}-Element
- Das {{HTMLElement('ul')}} ungeordnete Listenelement
- [ARIA: `article` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/article_role)
- [ARIA: `list` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
