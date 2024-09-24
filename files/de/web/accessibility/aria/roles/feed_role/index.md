---
title: "ARIA: feed-Rolle"
slug: Web/Accessibility/ARIA/Roles/feed_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Ein `feed` ist eine dynamisch scrollbare `list` von `articles`, bei denen Artikel hinzugefügt oder entfernt werden können, während der Benutzer scrollt. Ein `feed` ermöglicht es Bildschirmlesegeräten, den Lese-Cursor im Durchsuchen-Modus zu verwenden, um sowohl zu lesen als auch durch einen kontinuierlichen Strom an reichhaltigem Inhalt zu scrollen, der möglicherweise unendlich weiter scrollt, indem mehr Inhalt geladen wird, während der Benutzer liest.

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

Ein `feed` ist eine Art von [`list`](/de/docs/Web/Accessibility/ARIA/Roles/list_role), die als Container-Rolle für scrollbare [`articles`](/de/docs/Web/Accessibility/ARIA/Roles/article_role) dient, bei denen das Scrollen dazu führen kann, dass Artikel am Anfang oder Ende der Liste hinzugefügt werden. Die Rolle ermöglicht es assistiven Technologien, den Lese-Cursor im Durchsuchen-Modus zu verwenden, um sowohl zu lesen als auch durch einen kontinuierlichen Strom an reichhaltigem Inhalt zu scrollen, der möglicherweise unendlich weiter scrollt, indem mehr Inhalt geladen wird, während der Benutzer liest. Beispiele umfassen einen RSS-Feed, Nachrichten-Feeds, soziale Medien-Feeds wie Facebook, Instagram oder Mastodon oder sogar eine Liste verwandter Produkte auf einer E-Commerce-Seite. Diese Ströme können begrenzt oder unendlich sein und mehr Inhalte laden, während der Benutzer scrollt. Die Implementierung des `feed`-Musters ermöglicht es einem Bildschirmleser, zuverlässig Inhalte im Lese-Modus zu lesen und deren Laden auszulösen.

Im Gegensatz zu den Dokumentstrukturelementen, die statische HTML-Elemente darstellen, erfordert die `feed`-Rolle spezifische Interaktionen und die Implementierung der Tastaturnavigation. Der `feed` ist ein Container-Element, dessen Kinder {{HTMLElement('article')}}s sind oder die die Rolle `article` haben. Jedes Artikel innerhalb eines Feeds sollte fokussierbar sein, mit einem Tabindex von 0 oder -1. Ein Artikel sollte in den Sichtbereich gescrollt werden, wenn er oder ein untergeordnetes Element den Fokus erhält. Falls das Hinzufügen von Artikeln den Haupt-Browser-Thread beansprucht, stellen Sie sicher, dass `aria-busy="true"` auf dem Feed selbst gesetzt ist, und setzen Sie es nach Beendigung der Verarbeitung wieder auf `false`, damit der Benutzer die Updates sehen kann.

Wenn die Anzahl der Artikel bekannt ist, setzen Sie [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) auf die Artikel selbst. Wenn jedoch die Gesamtzahl extrem groß ist, unbestimmt oder sich oft ändert, setzen Sie `aria-setsize="-1"`, um anzuzeigen, dass die Größe des Feeds nicht bekannt ist.

Ein weiteres Merkmal des Feed-Musters ist das überfliegende Lesen (Skimming): Artikel innerhalb eines Feeds können sowohl einen zugänglichen Namen mit dem [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) als auch eine Beschreibung mit einem `aria-describedby`, was Bildschirmlesegeräten nahelegt, welche Elemente nach dem Label gesprochen werden sollen, wenn nach Artikel navigiert wird. Durch die Identifizierung der Elemente innerhalb eines Artikels, die den Titel und den Hauptinhalt bereitstellen, können assistive Technologien Funktionen bieten, die es Benutzern ermöglichen, von Artikel zu Artikel zu springen und effizient zu erkennen, welche Artikel sie lesen möchten.

Das Feed-Muster ermöglicht eine zuverlässige Interaktion im Lese-Modus von assistiven Technologien, indem die folgende Interoperabilitätsvereinbarung zwischen der Webseite und den assistiven Technologien etabliert wird:

Im Kontext eines Feeds ist der Code der Webseite verantwortlich für:

- Angemessenes visuelles Scrollen des Inhalts basierend darauf, welches Artikel den DOM-Fokus hat.
- Laden oder Entfernen von Feed-Artikeln basierend darauf, welches Artikel den DOM-Fokus hat.

### Tastaturinteraktionen

Es wird empfohlen, die folgende oder eine ähnliche Schnittstelle zu unterstützen, wenn der Fokus innerhalb des Feeds liegt:

- <kbd>Bild runter</kbd>: Fokus auf nächsten Artikel verschieben.
- <kbd>Bild hoch</kbd>: Fokus auf vorherigen Artikel verschieben.
- <kbd>Strg + Ende</kbd>: Fokus auf das erste fokussierbare Element nach dem Feed verschieben.
- <kbd>Strg + Pos1</kbd>: Fokus auf das erste fokussierbare Element vor dem Feed verschieben.

Wenn ein Feed innerhalb eines anderen Feeds eingebettet ist, wie z.B. ein Kommentar-Feed innerhalb eines Blogpost-Feeds, ist es konventionell, mit der <kbd>Tab</kbd>-Taste in den eingebetteten Feed zu wechseln und eine weitere Taste, wie <kbd>Alt + Bild runter</kbd>, bereitzustellen, um von einem "äußeren" Artikel zum ersten Element im eingebetteten Feed dieses Artikels zu navigieren. Wechseln Sie zwischen dem eingebetteten Feed und dem Haupt-Feed mit <kbd>Strg + Ende</kbd>, um den Fokus vom inneren Feed zum nächsten Artikel im äußeren Feed zu verschieben.

### <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr>-Rollen, -Zustände und -Eigenschaften

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)

  - : Wenn der Feed keinen sichtbaren Titel hat, wird dem `feed`-Element ein mit `aria-label` spezifiziertes Label hinzugefügt. Wenn es einen sichtbaren Titel hat, siehe `aria-labelledby`.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)

  - : Wenn der Feed einen sichtbaren Titel hat, hat das `feed`-Element ein `aria-labelledby`, das auf das Element verweist, das den Titel enthält. Andernfalls fügen Sie ein `aria-label` hinzu.

- [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy)

  - : Wenn der Feed beschäftigt ist, wie wenn Artikel hinzugefügt oder entfernt werden, setzen Sie `aria-busy="true"` während der Aktualisierung. Stellen Sie sicher, dass es zurück auf `false` gesetzt wird, wenn die Operation abgeschlossen ist, oder die Änderungen möglicherweise nicht sichtbar werden.

- article
  - : Jeder Abschnitt von Inhalten in einem Feed sollte in einem `<article>` oder einem Element mit der Rolle [`article`](/de/docs/Web/Accessibility/ARIA/Roles/article_role) enthalten sein. Jedes `article` sollte ein `aria-labelledby` haben, das auf den Artikeltitel oder ein anderes untergeordnetes Element verweist, das als unterscheidendes Label dienen kann. Jedes Artikel sollte vorzugsweise ein `aria-describedby` haben, das auf eines oder mehrere Elemente innerhalb des Artikels verweist, die als Hauptinhalt des Artikels dienen. Jedes `article`-Element hat [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) auf einen Wert gesetzt, der seine Position im Feed darstellt, und ein [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) auf einen Wert gesetzt, der entweder die Gesamtzahl der geladenen Artikel oder die Gesamtzahl im Feed darstellt, je nachdem, welcher Wert für die Benutzer hilfreicher ist. Wenn die Gesamtanzahl im Feed nicht bekannt ist, setzen Sie `aria-setsize="-1"`.

### Erforderliche JavaScript-Features

Keine, außer wie sie durch Attribute erforderlich sind. Zum Beispiel das Setzen von [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy) auf `true` während der Aktualisierungsoperation, falls erforderlich, und dann auf `false` bei Abschluss.

Hinweis: Es liegt in der Verantwortung des Autors, das oben beschriebene Tastaturverhalten anzuwenden.

## Beispiele

[Beispielimplementierung des Feed-Musters](https://www.w3.org/WAI/ARIA/apg/patterns/feed/examples/feed/)

## Beste Praktiken

Um eine gute Benutzererfahrung zu gewährleisten, vermeiden Sie das Einfügen oder Entfernen von Artikeln in der Mitte eines `feed`, laden Sie neue Artikel, bevor der Benutzer das Ende des Feeds erreicht hat, und bieten Sie Tastaturbefehle zum Verschieben des Fokus zwischen Artikeln, damit Tastaturbenutzer durch Ihre Feeds navigieren können. Siehe [Tastaturinteraktionen](#tastaturinteraktionen).

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das HTML {{HTMLElement('article')}}-Element
- Das {{HTMLElement('ul')}} ungeordnete Listen-Element
- [ARIA: `article`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/article_role)
- [ARIA: `list`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/list_role)
