---
title: "ARIA: Rolle mark"
slug: Web/Accessibility/ARIA/Roles/mark_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die Rolle `mark` kennzeichnet Inhalte, die zur Referenz oder für Notationen hervorgehoben oder markiert sind, aufgrund ihrer Relevanz im umgebenden Kontext.

## Beschreibung

Die Rolle `mark` kennzeichnet HTML-Elemente, die Text enthalten, der zur Referenz hervorgehoben/markiert ist. Dies ist semantisch äquivalent zum HTML-{{HTMLElement('mark')}}-Element. Wenn möglich, sollten Sie dieses Element stattdessen verwenden.

Anwendungsbeispiele für `mark` sind genau die gleichen wie für das `<mark>`-Element. Sie umfassen das Hervorheben von Text in einem Zitat, der besonders interessant ist, aber nicht im Originalmaterial markiert ist, vergleichbar mit einem Textmarker, um Passagen eines gedruckten Artikels zu markieren und Teile des Inhalts anzuzeigen, die für die aktuelle Aktivität des Benutzers relevant sind, wie z. B. das Hervorheben von Texttreffern, die mit einer Suchfunktion gefunden wurden.

Verwenden Sie `mark` nicht für rein dekorative Stilmittel wie Syntaxhervorhebung.

Dem `mark`-Element sollte kein zugänglicher Name gegeben werden; sowohl die Attribute [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) als auch [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) sind bei `mark` verboten.

## Beispiele

Im folgenden Beispiel haben wir einen Dokumentabschnitt, der kommentiert wurde. Der kommentierte Abschnitt wird mit `<span role="mark">` ausgezeichnet.

```html
<p>
  Die zweite Hälfte des Liedes ist ein langsam ansteigendes Crescendo, das am
  <span role="mark" aria-details="thread-1">Ende des Gitarrensolos</span> seinen Höhepunkt erreicht,
  bevor es abrupt ausklingt.
</p>

<div role="comment" id="thread-1" data-author="chris">
  <h3>Chris sagte</h3>
  <p class="comment-text">Ich denke wirklich, dieser Moment könnte mehr Cowbell vertragen.</p>
  <p><time datetime="2022-03-30T19:29">30. März 2022, 19:29</time></p>
</div>
```

Der zugehörige Kommentar wird mit einer HTML-Struktur ausgezeichnet, die mit einem {{HTMLElement('div')}} umschlossen ist und [`role="comment"`](/de/docs/Web/Accessibility/ARIA/Roles/comment_role) enthält.

Um den Kommentar mit dem kommentierten Text zu verbinden, müssen wir den kommentierten Text mit einem Element umschließen, das das [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details) Attribut enthält, dessen Wert die ID des Kommentars sein sollte.

## Beste Praktiken

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('mark')}}-Elements kommuniziert automatisch, dass ein Knoten die Rolle `mark` hat. Wenn irgendwie möglich, bevorzugen Sie die Verwendung dieses Elements.

## Spezifikationen

Wird Teil von [WAI-ARIA 1.3](https://w3c.github.io/aria/#mark), das sich noch in der Entwurfsphase befindet.

## Siehe auch

- HTML-{{HTMLElement('mark')}}-Element
