---
title: "ARIA: mark Rolle"
slug: Web/Accessibility/ARIA/Roles/mark_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `mark` Rolle bezeichnet Inhalte, die aus Gründen der Referenz oder Notiz markiert oder hervorgehoben sind, aufgrund der Relevanz des Inhalts im umgebenden Kontext.

## Beschreibung

Die `mark` Rolle bezeichnet semantisch HTML-Elemente, die Text enthalten, der zu Referenzzwecken markiert/hervorgehoben ist. Dies ist semantisch äquivalent zum HTML-{{HTMLElement('mark')}}-Element. Wenn möglich, sollten Sie dieses Element verwenden.

Beispiele für die Verwendung von `mark` sind identisch mit denen des `<mark>`-Elements. Dazu gehört das Hervorheben von Text in einem Zitat, der von besonderem Interesse ist, aber nicht im ursprünglichen Quellmaterial markiert wurde, vergleichbar mit einem Textmarker, um Passagen eines gedruckten Artikels hervorzuheben und relevante Teile des Inhalts für die aktuelle Aktivität des Nutzers zu kennzeichnen, wie z.B. das Hervorheben von Texttreffern, die durch eine Suchfunktion gefunden wurden.

Verwenden Sie `mark` nicht für rein dekorative Stilmittel wie Syntax-Hervorhebungen.

Das `mark`-Element sollte keinen zugänglichen Namen erhalten; sowohl [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) als auch [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) Attribute sind auf `mark` verboten.

## Beispiele

Im folgenden Beispiel haben wir einen Dokumentabschnitt, der kommentiert wurde. Der kommentierte Abschnitt wird mit `<span role="mark">` ausgezeichnet.

```html
<p>
  The last half of the song is a slow-rising crescendo that peaks at the
  <span role="mark" aria-details="thread-1">end of the guitar solo</span>,
  before fading away sharply.
</p>

<div role="comment" id="thread-1" data-author="chris">
  <h3>Chris said</h3>
  <p class="comment-text">I really think this moment could use more cowbell.</p>
  <p><time datetime="2022-03-30T19:29">March 30 2022, 19:29</time></p>
</div>
```

Der dazugehörige Kommentar wird mit einer HTML-Struktur versehen, die mit einem {{HTMLElement('div')}} eingeschlossen ist, der [`role="comment"`](/de/docs/Web/Accessibility/ARIA/Roles/comment_role) enthält.

Um den Kommentar mit dem kommentierten Text zu verknüpfen, müssen wir den kommentierten Text mit einem Element umschließen, das das [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details) Attribut enthält, dessen Wert die ID des Kommentars sein sollte.

## Beste Praktiken

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('mark')}}-Elements wird automatisch kommunizieren, dass ein Knoten die Rolle `mark` hat. Wenn möglich, bevorzugen Sie dessen Verwendung.

## Spezifikationen

Wird Teil von [WAI-ARIA 1.3](https://w3c.github.io/aria/#mark) sein, das sich noch in der Entwurfsphase befindet.

## Siehe auch

- HTML {{HTMLElement('mark')}} Element
