---
title: "ARIA: `mark`-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/mark_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die `mark`-Rolle kennzeichnet Inhalte, die für Bezugnahme oder Notizzwecke markiert oder hervorgehoben sind, aufgrund der Relevanz des Inhalts im umgebenden Kontext.

## Beschreibung

Die `mark`-Rolle bezeichnet semantisch HTML-Elemente, die Text enthalten, der zu Referenzzwecken markiert/hervorgehoben ist. Dies entspricht semantisch dem HTML-{{HTMLElement('mark')}}-Element. Wenn möglich, sollten Sie stattdessen dieses Element verwenden.

Beispielhafte Verwendungen für `mark` sind genau die gleichen wie für das `<mark>`-Element. Sie beinhalten das Hervorheben von Text in einem Zitat, das von besonderem Interesse ist, aber nicht im Originalmaterial markiert wurde, vergleichbar mit der Verwendung eines Textmarkers, um Passagen eines gedruckten Artikels zu markieren, und die Kennzeichnung von Teilen des Inhalts, die für die aktuelle Benutzeraktivität relevant sind, wie z. B. das Hervorheben von Texttreffern, die von einer Suchfunktion gefunden wurden.

Verwenden Sie `mark` nicht für rein dekorative Stile, wie beispielsweise Syntaxhervorhebung.

Das `mark`-Element sollte keinen zugänglichen Namen erhalten; sowohl [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) als auch [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribute sind für `mark` untersagt.

## Beispiele

Im folgenden Beispiel haben wir einen Dokumentabschnitt, der kommentiert wurde. Der kommentierte Abschnitt wird mit `<span role="mark">` gekennzeichnet.

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

Der zugehörige Kommentar wird mit einer HTML-Struktur gekennzeichnet, die von einem {{HTMLElement('div')}} umschlossen ist und [`role="comment"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/comment_role) enthält.

Um den Kommentar mit dem Text, der kommentiert wird, zu verknüpfen, müssen wir den kommentierten Text mit einem Element umschließen, das das [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)-Attribut enthält, dessen Wert die ID des Kommentars sein sollte.

## Best Practices

### Bevorzugung von HTML

Die Verwendung des {{HTMLElement('mark')}}-Elements wird automatisch kommunizieren, dass ein Knoten die Rolle `mark` hat. Wenn möglich, bevorzugen Sie die Verwendung dieses Elements.

## Spezifikationen

Wird Teil von [WAI-ARIA 1.3](https://w3c.github.io/aria/#mark) sein, das sich noch in der Entwurfsphase befindet.

## Siehe auch

- HTML-{{HTMLElement('mark')}}-Element
