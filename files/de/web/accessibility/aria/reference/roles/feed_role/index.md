---
title: "ARIA: `feed`-Rolle"
short-title: feed
slug: Web/Accessibility/ARIA/Reference/Roles/feed_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Ein `feed` ist eine dynamisch scrollbare `list` von `articles`, in der Artikel am Anfang oder Ende der Liste hinzugefügt oder entfernt werden, während der Benutzer scrollt. Ein `feed` ermöglicht es Screenreadern, den Lesecursor im Browse-Modus zu verwenden, um sowohl zu lesen als auch durch einen Strom von reichhaltigem Inhalt zu scrollen, der möglicherweise unendlich weiter scrollt, indem mehr Inhalte geladen werden, während der Benutzer liest.

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

Ein `feed` ist eine Art von [`list`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role), die Rolle für scrollbare [`articles`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/article_role), bei der das Scrollen dazu führen kann, dass Artikel am Anfang oder Ende der Liste hinzugefügt werden. Die Rolle ermöglicht assistiven Technologien die Verwendung des Lesecursors im Browse-Modus, um sowohl zu lesen als auch durch einen Strom von reichhaltigem Inhalt zu scrollen, der möglicherweise unendlich weiter scrollt, indem mehr Inhalte geladen werden, während der Benutzer liest. Beispiele umfassen einen RSS-Feed, Newsfeeds, soziale Medienfeeds wie Facebook, Instagram oder Mastodon oder sogar eine Liste verwandter Produkte auf einer E-Commerce-Seite. Diese Ströme können begrenzt oder unendlich sein und mehr Inhalte laden, während der Benutzer scrollt. Die Implementierung des `feed`-Musters ermöglicht es einem Screenreader, zuverlässig den `feed`-Inhalt im Lesemodus zu lesen und dessen Laden auszulösen.

Im Gegensatz zu den Dokumentstrukturelementen, die statische HTML-Elemente darstellen, erfordert die `feed`-Rolle spezifische Interaktionen und die Implementierung der Tastaturnavigation. Der `feed` ist ein Containerelement, dessen Kinder {{HTMLElement('article')}}s sind oder die Rolle `article` haben. Jeder Artikel innerhalb eines Feeds sollte fokussierbar sein, mit einem `tabindex` von 0 oder -1. Ein Artikel sollte in den Sichtbereich gescrollt werden, wenn er oder ein Nachfahrelement den Fokus erhält. Wenn das Hinzufügen von Artikeln den Hauptbrowser-Thread beansprucht, stellen Sie sicher, dass `aria-busy="true"` auf dem Feed selbst gesetzt ist, und setzen Sie es zurück auf `false`, wenn die Verarbeitung endet, oder der Benutzer sieht möglicherweise die Updates nicht.

Wenn die Anzahl der Artikel bekannt ist, setzen Sie [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) auf den Artikeln selbst. Wenn jedoch die Gesamtzahl extrem groß, unbestimmt oder sich häufig ändert, setzen Sie `aria-setsize="-1"`, um anzugeben, dass die Größe des Feeds nicht bekannt ist.

Ein weiteres Merkmal des Feed-Musters ist das schnelle Lesen: Artikel in einem Feed können sowohl einen zugänglichen Namen mit dem [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) als auch eine Beschreibung mit einem `aria-describedby` enthalten, was Screenreadern vorschlägt, welche Elemente nach dem Label gesprochen werden sollten, wenn nach Artikeln navigiert wird. Indem die Elemente identifiziert werden, die den Titel und den Hauptinhalt innerhalb eines Artikels bereitstellen, können assistive Technologien Funktionen bereitstellen, die es Benutzern ermöglichen, von Artikel zu Artikel zu springen und effizient zu erkennen, welche Artikel sie lesen möchten.

Das Feed-Muster ermöglicht eine zuverlässige Interaktionsmöglichkeit im Lesemodus für assistive Technologien, indem es die folgende Interoperabilitätsvereinbarung zwischen der Webseite und assistiven Technologien festlegt:

Im Kontext eines Feeds ist der Webseiten-Code verantwortlich für:

- Angemessenes visuelles Scrollen des Inhalts basierend darauf, welcher Artikel den DOM-Fokus enthält.
- Laden oder Entfernen von Feed-Artikeln basierend darauf, welcher Artikel den DOM-Fokus enthält.

### Tastatur-Interaktionen

Es wird empfohlen, die folgende oder eine ähnliche Schnittstelle zu unterstützen, wenn der Fokus innerhalb des Feeds ist:

- <kbd>Bild nach unten</kbd>: Fokus zum nächsten Artikel bewegen.
- <kbd>Bild nach oben</kbd>: Fokus zum vorherigen Artikel bewegen.
- <kbd>Strg + Ende</kbd>: Fokus zum ersten fokussierbaren Element nach dem Feed verschieben.
- <kbd>Strg + Pos 1</kbd>: Fokus zum ersten fokussierbaren Element vor dem Feed verschieben.

Wenn ein Feed innerhalb eines Feeds verschachtelt ist, wie z.B. ein Kommentarfeld innerhalb eines Feeds von Blogbeiträgen, besteht die Konvention darin, mit der <kbd>Tab</kbd>-Taste in den verschachtelten Feed zu wechseln und eine andere Taste, wie <kbd>Alt + Bild nach unten</kbd>, bereitzustellen, um von einem 'äußeren' Artikel zum ersten Element im verschachtelten Feed des Artikels zu navigieren. Navigieren Sie zwischen dem verschachtelten Feed und dem Hauptfeed mit <kbd>Strg + Ende</kbd>, indem Sie den Fokus vom inneren Feed zum nächsten Artikel im äußeren Feed bewegen.

### <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Rollen, Zustände und Eigenschaften

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)

  - : Wenn der Feed keinen sichtbaren Titel hat, hat das `feed`-Element ein Label, das mit `aria-label` angegeben ist. Wenn es einen hat, siehe `aria-labelledby`.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)

  - : Wenn der Feed einen sichtbaren Titel hat, hat das `feed`-Element `aria-labelledby`, das auf das Element zeigt, das den Titel enthält. Wenn nicht, fügen Sie ein `aria-label` hinzu.

- [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)

  - : Bei einem Update, wie dem Hinzufügen oder Entfernen von Artikeln aus dem `feed`, setzen Sie `aria-busy="true"` während der Aktualisierung. Stellen Sie sicher, dass es auf `false` zurückgesetzt wird, wenn die Aktualisierung abgeschlossen ist, sonst können die Änderungen möglicherweise nicht sichtbar werden.

- article
  - : Jeder Abschnitt von Inhalt in einem Feed sollte in einem `<article>` oder einem Element mit der Rolle [`article`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/article_role) enthalten sein. Jeder `article` sollte ein `aria-labelledby` haben, das auf den Artikeltitel oder ein anderes Kind verweist, das als eindeutiges Label dienen kann. Jeder Artikel sollte vorzugsweise ein `aria-describedby` haben, das auf ein oder mehrere Elemente im Artikel verweist, die als Hauptinhalt des Artikels dienen. Jedes `article`-Element hat [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) auf einen Wert gesetzt, der seine Position im Feed darstellt, und ein [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize), das entweder die Gesamtanzahl der geladenen Artikel oder die Gesamtanzahl im Feed darstellt, je nachdem, welcher Wert für Benutzer hilfreicher ist. Wenn die Gesamtanzahl im Feed nicht bekannt ist, setzen Sie `aria-setsize="-1"`.

### Erforderliche JavaScript-Funktionen

Keine, außer wenn sie von Attributen verlangt werden. Zum Beispiel das Setzen von [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) auf `true` während einer Aktualisierung und dann auf `false` nach Abschluss.

Hinweis: Es liegt in der Verantwortung des Autors, das oben beschriebene Tastaturverhalten anzuwenden.

## Beispiele

[Beispielimplementierung des Feed-Musters](https://www.w3.org/WAI/ARIA/apg/patterns/feed/examples/feed/)

## Beste Praktiken

Um ein gutes Benutzererlebnis zu gewährleisten, vermeiden Sie das Einfügen oder Entfernen von Artikeln in der Mitte eines `feeds`, laden Sie neue Artikel, bevor der Benutzer das Ende des Feeds erreicht hat, und bieten Sie Tastaturbefehle zum Bewegen des Fokus zwischen Artikeln, damit Tastaturnutzer durch Ihren Feed navigieren können. Siehe [Tastatur-Interaktionen](#tastatur-interaktionen).

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das HTML-{{HTMLElement('article')}}-Element
- Das {{HTMLElement('ul')}} Element für ungeordnete Listen
- [ARIA: `article`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/article_role)
- [ARIA: `list`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
