---
title: "ARIA: Rolle feed"
short-title: feed
slug: Web/Accessibility/ARIA/Reference/Roles/feed_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

Ein `feed` ist eine dynamische, scrollbarе `list` von `articles`. Während Benutzer durch die Liste scrollen, werden an ihrem Anfang oder Ende Artikel hinzugefügt oder entfernt. Ein `feed` ermöglicht es Screenreadern, mit dem Lesecursor im Browse-Modus einen Strom umfangreicher Inhalte zu lesen und durch ihn zu scrollen. Dieser kann sich durch das Nachladen weiterer Inhalte beim Lesen unbegrenzt fortsetzen.

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

Ein `feed` ist eine Art [`list`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role), die scrollbarе [`articles`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/article_role) enthält. Beim Scrollen können am Anfang oder Ende der Liste Artikel hinzugefügt werden. Die Rolle ermöglicht es assistiven Technologien, mit dem Lesecursor im Browse-Modus einen Strom umfangreicher Inhalte zu lesen und durch ihn zu scrollen. Dieser kann sich durch das Nachladen weiterer Inhalte beim Lesen unbegrenzt fortsetzen. Beispiele sind RSS-Feeds, Nachrichten-Feeds, Social-Media-Feeds wie Facebook, Instagram oder Mastodon sowie Listen verwandter Produkte auf einer E-Commerce-Seite. Diese Inhaltsströme können begrenzt oder unbegrenzt sein und beim Scrollen weitere Inhalte laden. Durch die Implementierung des `feed`-Musters kann ein Screenreader im Lesemodus Feed-Inhalte zuverlässig lesen und deren Nachladen auslösen.

Anders als Rollen, die statische HTML-Elemente abbilden, erfordert die Rolle `feed` bestimmte Interaktionen und eine implementierte Tastaturnavigation. Ein `feed` ist ein Containerelement, dessen Kindelemente {{HTMLElement('article')}}-Elemente sind oder die Rolle `article` haben. Jeder Artikel innerhalb eines Feeds sollte fokussierbar sein und einen `tabindex` von 0 oder -1 haben. Ein Artikel sollte in den sichtbaren Bereich gescrollt werden, wenn er oder eines seiner Nachfahrenelemente den Fokus erhält. Wenn das Hinzufügen von Artikeln den Haupt-Thread des Browsers beansprucht, setzen Sie `aria-busy="true"` auf dem Feed selbst und nach Abschluss der Verarbeitung wieder auf `false`. Andernfalls werden die Aktualisierungen für Benutzer möglicherweise nicht sichtbar.

Wenn die Anzahl der Artikel bekannt ist, setzen Sie [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) auf den Artikeln selbst. Ist die Gesamtzahl jedoch extrem groß, unbestimmt oder ändert sie sich häufig, setzen Sie `aria-setsize="-1"`, um anzugeben, dass die Größe des Feeds unbekannt ist.

Ein weiteres Merkmal des Feed-Musters ist das überfliegende Lesen: Artikel innerhalb eines Feeds können sowohl einen mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) festgelegten zugänglichen Namen als auch eine mit `aria-describedby` festgelegte Beschreibung haben. Damit wird Screenreadern mitgeteilt, welche Elemente sie bei der Navigation zwischen Artikeln nach dem Namen vorlesen sollen. Indem die Elemente innerhalb eines Artikels gekennzeichnet werden, die den Titel und den Hauptinhalt bereitstellen, können assistive Technologien Funktionen anbieten, mit denen Benutzer von Artikel zu Artikel springen und schnell erkennen können, welche Artikel sie lesen möchten.

Das Feed-Muster ermöglicht eine zuverlässige Interaktion mit assistiven Technologien im Lesemodus, indem es die folgende Vereinbarung über das Zusammenspiel zwischen Webseite und assistiven Technologien festlegt:

Im Kontext eines Feeds ist der Code der Webseite dafür verantwortlich:

- Den Inhalt entsprechend dem Artikel, der den DOM-Fokus enthält, sichtbar zu scrollen.
- Feed-Artikel entsprechend dem Artikel, der den DOM-Fokus enthält, zu laden oder zu entfernen.

### Tastaturinteraktionen

Wenn sich der Fokus innerhalb des Feeds befindet, wird die Unterstützung der folgenden oder einer ähnlichen Bedienung empfohlen:

- <kbd>Page Down</kbd>: Fokus zum nächsten Artikel bewegen.
- <kbd>Page Up</kbd>: Fokus zum vorherigen Artikel bewegen.
- <kbd>Control + End</kbd>: Fokus zum ersten fokussierbaren Element nach dem Feed bewegen.
- <kbd>Control + Home</kbd>: Fokus zum ersten fokussierbaren Element vor dem Feed bewegen.

Wenn ein Feed in einen anderen Feed verschachtelt ist, etwa ein Kommentar-Feed innerhalb eines Feeds mit Blogbeiträgen, wird üblicherweise mit der Taste <kbd>Tab</kbd> in den verschachtelten Feed gewechselt. Zusätzlich sollte eine weitere Tastenkombination wie <kbd>Alt + Page Down</kbd> bereitgestellt werden, um von einem Artikel des äußeren Feeds zum ersten Eintrag seines verschachtelten Feeds zu navigieren. Mit <kbd>Control + End</kbd> kann vom verschachtelten Feed zum Haupt-Feed navigiert werden; dabei wird der Fokus vom inneren Feed auf den nächsten Artikel im äußeren Feed bewegt.

### Rollen, Zustände und Eigenschaften von <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr>

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Wenn der Feed keinen sichtbaren Titel hat, erhält das `feed`-Element eine mit `aria-label` festgelegte Beschriftung. Hat er einen sichtbaren Titel, verwenden Sie `aria-labelledby`.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Wenn der Feed einen sichtbaren Titel hat, verweist `aria-labelledby` auf dem `feed`-Element auf das Element mit dem Titel. Andernfalls fügen Sie ein `aria-label` hinzu.

- [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
  - : Wenn der `feed` beschäftigt ist, etwa weil Artikel hinzugefügt oder entfernt werden, setzen Sie während der Aktualisierung `aria-busy="true"`. Setzen Sie den Wert nach Abschluss unbedingt wieder auf `false`, da die Änderungen sonst möglicherweise nicht sichtbar werden.

- article
  - : Jeder Inhaltsabschnitt in einem Feed sollte in einem `<article>`-Element oder einem Element mit der Rolle [`article`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/article_role) enthalten sein. Jeder `article` sollte ein `aria-labelledby` haben, das auf den Artikeltitel oder ein anderes Kindelement verweist, das als unterscheidbare Beschriftung dienen kann. Vorzugsweise sollte jeder Artikel ein `aria-describedby` haben, das auf ein oder mehrere Elemente innerhalb des Artikels verweist, die dessen Hauptinhalt bilden. Für jedes `article`-Element ist [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) auf einen Wert gesetzt, der seine Position im Feed angibt. [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) ist auf einen Wert gesetzt, der entweder die Gesamtzahl der geladenen Artikel oder die Gesamtzahl der Artikel im Feed angibt – je nachdem, welcher Wert für Benutzer hilfreicher ist. Wenn die Gesamtzahl der Artikel im Feed unbekannt ist, setzen Sie `aria-setsize="-1"`.

### Erforderliche JavaScript-Funktionen

Keine, abgesehen von den Funktionen, die für die verwendeten Attribute erforderlich sind. Dazu gehört beispielsweise, [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) bei Bedarf während der Aktualisierung auf `true` und nach deren Abschluss auf `false` zu setzen.

Hinweis: Für die Implementierung des oben beschriebenen Tastaturverhaltens sind die Autoren verantwortlich.

## Bewährte Vorgehensweisen

Um eine gute Benutzererfahrung zu gewährleisten, vermeiden Sie es, Artikel mitten in einem `feed` einzufügen oder daraus zu entfernen. Laden Sie neue Artikel, bevor Benutzer das Ende des Feeds erreichen, und stellen Sie Tastaturbefehle zum Bewegen des Fokus zwischen Artikeln bereit, damit Benutzer mit der Tastatur durch den Feed navigieren können. Siehe [Tastaturinteraktionen](#tastaturinteraktionen).

## Beispiele

[Beispielimplementierung des Feed-Musters](https://www.w3.org/WAI/ARIA/apg/patterns/feed/examples/feed/)

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das HTML-Element {{HTMLElement('article')}}
- Das HTML-Element {{HTMLElement('ul')}} für ungeordnete Listen
- [ARIA: Rolle `article`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/article_role)
- [ARIA: Rolle `list`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
