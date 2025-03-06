---
title: "ARIA: feed-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/feed_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Ein `feed` ist eine dynamische scrollbare `list` von `articles`, bei denen Artikel entweder am Anfang oder Ende der Liste hinzugefügt oder entfernt werden, während der Benutzer scrollt. Ein `feed` ermöglicht es Screenreadern, den Lese-Cursor im Browsermodus zu verwenden, um sowohl zu lesen als auch durch einen Strom von reichhaltigem Inhalt zu scrollen, der möglicherweise unendlich weiter scrollt, indem mehr Inhalt geladen wird, während der Benutzer liest.

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

Ein `feed` ist eine Art von [`list`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role), die Rolle enthält scrollbare [`articles`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/article_role), bei denen das Scrollen dazu führen kann, dass Artikel an den Anfang oder das Ende der Liste hinzugefügt werden. Die Rolle ermöglicht es unterstützenden Technologien, den Lese-Cursor im Browsermodus zu verwenden, um sowohl zu lesen als auch durch einen Strom von reichhaltigem Inhalt zu scrollen, der möglicherweise unendlich weiter scrollt, indem mehr Inhalt geladen wird, während der Benutzer liest. Beispiele beinhalten einen RSS-Feed, Nachrichten-Feeds, Social-Media-Feeds wie Facebook, Instagram oder Mastodon oder sogar eine Liste verwandter Produkte auf einer E-Commerce-Seite. Diese Ströme können begrenzt oder unendlich sein, mit mehr Inhalt, der geladen wird, während der Benutzer scrollt. Die Implementierung des `feed`-Musters ermöglicht es einem Screenreader, den Feed-Inhalt zuverlässig im Lesemodus zu lesen und das Laden auszulösen.

Im Gegensatz zu den Dokumentstruktur-Elementen, die statische HTML-Elemente repräsentieren, erfordert die `feed`-Rolle spezifische Interaktionen und eine Implementierung der Tastaturnavigation. Der `feed` ist ein Container-Element, dessen Kinder {{HTMLElement('article')}}s oder Elemente mit der Rolle `article` sind. Jeder Artikel innerhalb eines Feeds sollte fokussierbar sein, mit tabindex von 0 oder -1. Ein Artikel sollte ins Sichtfeld gescrollt werden, wenn er oder ein enthaltenes Element den Fokus erhält. Wenn das Hinzufügen von Artikeln den Haupt-Browser-Thread beansprucht, stellen Sie sicher, dass `aria-busy="true"` auf den Feed selbst gesetzt wird, und setzen Sie ihn zurück auf `false`, wenn die Verarbeitung endet, oder der Benutzer sieht die Updates möglicherweise nicht.

Wenn die Anzahl der Artikel bekannt ist, setzen Sie [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) auf die Artikel selbst. Wenn jedoch die Gesamtanzahl extrem groß, unbestimmt oder sich häufig ändert, setzen Sie `aria-setsize="-1"`, um anzuzeigen, dass die Größe des Feeds unbekannt ist.

Ein weiteres Merkmal des Feed-Musters ist das schnelle Lesen: Artikel innerhalb eines Feeds können sowohl einen zugänglichen Namen mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) als auch eine Beschreibung mit `aria-describedby` enthalten, das Screenreadern vorschlägt, welche Elemente nach dem Label gesprochen werden sollen, wenn man nach Artikel navigiert. Indem identifiziert wird, welche Elemente innerhalb eines Artikels den Titel und den Hauptinhalt bereitstellen, können unterstützende Technologien Funktionen bieten, die es Benutzern ermöglichen, von Artikel zu Artikel zu springen und effizient zu erkennen, welche Artikel sie lesen möchten.

Das Feed-Muster ermöglicht zuverlässige Interaktion im Lesemodus der assistiven Technologie durch Festlegung der folgenden Interoperabilitätsvereinbarung zwischen der Webseite und unterstützenden Technologien:

Im Kontext eines Feeds ist der Webseiten-Code verantwortlich für:

- Angemessenes visuelles Scrollen des Inhalts basierend darauf, welcher Artikel DOM-Fokus enthält.
- Laden oder Entfernen von Feed-Artikeln basierend darauf, welcher Artikel DOM-Fokus enthält.

### Tastatur-Interaktionen

Es wird empfohlen, die folgenden oder eine ähnliche Schnittstelle zu unterstützen, wenn der Fokus im Feed ist:

- <kbd>Bild ab</kbd>: Fokus auf den nächsten Artikel bewegen.
- <kbd>Bild auf</kbd>: Fokus auf den vorherigen Artikel bewegen.
- <kbd>Strg + Ende</kbd>: Fokus auf das erste fokussierbare Element nach dem Feed bewegen.
- <kbd>Strg + Anfang</kbd>: Fokus auf das erste fokussierbare Element vor dem Feed bewegen.

Wenn ein Feed innerhalb eines Feeds verschachtelt ist, wie z.B. ein Kommentar-Feed innerhalb eines Blogbeitrags-Feeds, ist es üblich, mit der <kbd>Tab</kbd>-Taste in den verschachtelten Feed zu gehen und einen anderen Schlüssel anzubieten, wie <kbd>Alt + Bild ab</kbd>, um von einem 'äußeren' Artikel zum ersten Element in dem verschachtelten Feed dieses Artikels zu wechseln. Navigieren Sie zwischen dem verschachtelten Feed und dem Haupt-Feed mit <kbd>Strg + Ende</kbd>, und verschieben Sie den Fokus vom inneren Feed zum nächsten Artikel im äußeren Feed.

### <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr>-Rollen, -Zustände und -Eigenschaften

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)

  - : Wenn der Feed keinen sichtbaren Titel hat, hat das `feed`-Element ein mit `aria-label` angegebenes Label. Wenn es einen Titel hat, siehe `aria-labelledby`.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)

  - : Wenn der Feed einen sichtbaren Titel hat, hat das `feed`-Element `aria-labelledby`, das auf das Element verweist, das den Titel enthält. Wenn nicht, fügen Sie ein `aria-label` hinzu.

- [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)

  - : Wenn der Feed beschäftigt ist, z.B. wenn Artikel hinzugefügt oder entfernt werden, setzen Sie `aria-busy="true"` während des Updates. Stellen Sie sicher, dass es auf `false` zurückgesetzt wird, wenn die Operation abgeschlossen ist, oder die Änderungen werden möglicherweise nicht sichtbar.

- artikel
  - : Jeder Inhaltsbereich in einem Feed sollte in einem `<article>` oder einem Element mit der Rolle [`article`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/article_role) enthalten sein. Jeder `article` sollte ein `aria-labelledby` haben, das auf den Artikeltitel oder ein anderes Kind verweist, das als unterscheidendes Label dienen kann. Jeder Artikel sollte vorzugsweise ein `aria-describedby` haben, das auf eines oder mehrere Elemente im Artikel verweist, die als Hauptinhalt des Artikels dienen. Jedes `article`-Element hat [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) auf einen Wert gesetzt, der seine Position im Feed repräsentiert, und [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) auf einen Wert gesetzt, der entweder die Gesamtanzahl der geladenen Artikel oder die Gesamtzahl im Feed repräsentiert, abhängig davon, welcher Wert für Benutzer hilfreicher ist. Wenn die Gesamtanzahl im Feed unbekannt ist, setzen Sie `aria-setsize="-1"`.

### Erforderliche JavaScript-Funktionen

Keine, außer wie von irgendwelchen Attributen erforderlich. Zum Beispiel, `aria-busy` auf `true` setzen während der Aktualisierung, falls erforderlich, und danach auf `false`, wenn abgeschlossen.

Hinweis: Es liegt in der Verantwortung des Autors, das "oben" beschriebene Tastaturverhalten anzuwenden.

## Beispiele

[Beispielhafte Implementierung des Feed-Musters](https://www.w3.org/WAI/ARIA/apg/patterns/feed/examples/feed/)

## Best Practices

Um eine gute Benutzererfahrung sicherzustellen, vermeiden Sie es, Artikel in der Mitte eines `feed` einzufügen oder zu entfernen, laden Sie neue Artikel, bevor der Benutzer das Ende des Feeds erreicht hat, und stellen Sie Tastaturbefehle für das Verschieben des Fokus zwischen Artikeln bereit, damit Tastaturnutzer durch Ihren Feed navigieren können. Siehe [Tastatur-Interaktionen](#tastatur-interaktionen).

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das HTML-{{HTMLElement('article')}}-Element
- Das {{HTMLElement('ul')}} ungeordnete Listenelement
- [ARIA: `article`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/article_role)
- [ARIA: `list`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
