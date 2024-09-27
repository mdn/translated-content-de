---
title: "ARIA: mark role"
slug: Web/Accessibility/ARIA/Roles/mark_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die Rolle `mark` kennzeichnet Inhalte, die für Referenz- oder Notationszwecke markiert oder hervorgehoben sind, aufgrund der Relevanz des Inhalts im umgebenden Kontext.

## Beschreibung

Die Rolle `mark` kennzeichnet HTML-Elemente, die Text enthalten, der zu Referenzzwecken markiert/hervorgehoben ist. Dies entspricht semantisch dem HTML-Element {{HTMLElement('mark')}}. Falls möglich, sollten Sie dieses Element verwenden.

Die Verwendung der Rolle `mark` ist identisch mit dem `<mark>`-Element. Sie umfasst das Hervorheben von Text in einem Zitat, das von besonderem Interesse ist, aber im ursprünglichen Quellmaterial nicht markiert ist, vergleichbar mit dem Einsatz eines Textmarkers, um Passagen eines gedruckten Artikels zu markieren. Außerdem wird angezeigt, welche Teile des Inhalts für die aktuelle Aktivität des Benutzers relevant sind, wie das Hervorheben von Texttreffern, die durch eine Suchfunktion gefunden wurden.

Verwenden Sie `mark` nicht für rein dekorative Stilgestaltung wie Syntaxhervorhebung.

Das `mark`-Element sollte keinen zugänglichen Namen erhalten; sowohl die Attribute [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) als auch [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) sind bei `mark` unzulässig.

## Beispiele

Im folgenden Beispiel haben wir einen Dokumentenabschnitt, der kommentiert wurde. Der kommentierte Abschnitt wird mit `<span role="mark">` ausgezeichnet.

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

Der zugehörige Kommentar wird mittels einer HTML-Struktur ausgezeichnet, die in einem {{HTMLElement('div')}} mit [`role="comment"`](/de/docs/Web/Accessibility/ARIA/Roles/comment_role) eingeschlossen ist.

Um den Kommentar mit dem kommentierten Text zu verknüpfen, müssen wir den kommentierten Text mit einem Element umschließen, das das Attribut [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details) enthält, dessen Wert die ID des Kommentars sein sollte.

## Best Practices

### Bevorzugen Sie HTML

Wenn das {{HTMLElement('mark')}}-Element verwendet wird, wird automatisch kommuniziert, dass ein Knoten die Rolle `mark` hat. Wenn möglich, sollten Sie es bevorzugt verwenden.

## Spezifikationen

Wird Teil von [WAI-ARIA 1.3](https://w3c.github.io/aria/#mark) sein, das sich noch in der Entwurfsphase befindet.

## Siehe auch

- HTML-Element {{HTMLElement('mark')}}
