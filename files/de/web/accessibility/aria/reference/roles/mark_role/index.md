---
title: "ARIA: mark Rolle"
short-title: mark
slug: Web/Accessibility/ARIA/Reference/Roles/mark_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die `mark` Rolle kennzeichnet Inhalte, die zur Referenz oder wegen ihrer Bedeutung im umgebenden Kontext markiert oder hervorgehoben sind.

## Beschreibung

Die `mark` Rolle kennzeichnet HTML-Elemente, die Text enthalten, der zur Referenz markiert/hervorgehoben ist. Dies entspricht semantisch dem HTML-Element {{HTMLElement('mark')}}. Wenn möglich, sollten Sie dieses Element stattdessen verwenden.

Beispiele für die Verwendung von `mark` sind genau dieselben wie für das `<mark>` Element. Dazu gehört das Hervorheben von Text in einem Zitat, das von besonderem Interesse ist, aber im ursprünglichen Quellenmaterial nicht markiert ist, vergleichbar mit der Verwendung eines Textmarkers, um Abschnitte eines gedruckten Artikels zu markieren und Teile des Inhalts anzuzeigen, die für die aktuelle Aktivität des Benutzers relevant sind, wie z.B. das Hervorheben von Textübereinstimmungen, die von einer Suchfunktion gefunden wurden.

Verwenden Sie `mark` nicht für rein dekorative Stile wie Syntaxhervorhebung.

Dem `mark` Element sollte kein zugänglicher Name gegeben werden; sowohl die [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) als auch die [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) Attribute sind bei `mark` verboten.

## Beispiele

Im folgenden Beispiel haben wir einen Abschnitt eines Dokuments, der kommentiert wurde. Der kommentierte Abschnitt wird mit `<span role="mark">` ausgezeichnet.

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

Der dazugehörige Kommentar wird mit einer HTML-Struktur ausgezeichnet, die mit einem {{HTMLElement('div')}} umschlossen ist und [`role="comment"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/comment_role) enthält.

Um den Kommentar mit dem kommentierten Text zu verknüpfen, müssen wir den kommentierten Text mit einem Element umschließen, das das [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) Attribut enthält, dessen Wert die ID des Kommentars sein sollte.

## Best Practices

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('mark')}} Elements gibt automatisch an, dass ein Knoten die Rolle `mark` hat. Wenn möglich, sollten Sie es bevorzugt verwenden.

## Spezifikationen

Wird Teil von [WAI-ARIA 1.3](https://w3c.github.io/aria/#mark) sein, das sich noch in der Entwurfsphase befindet.

## Siehe auch

- HTML {{HTMLElement('mark')}} Element
