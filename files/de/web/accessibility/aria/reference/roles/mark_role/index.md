---
title: "ARIA: mark-Rolle"
short-title: mark
slug: Web/Accessibility/ARIA/Reference/Roles/mark_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

Die Rolle `mark` kennzeichnet Inhalte, die zu Referenz- oder Anmerkungszwecken markiert oder hervorgehoben sind, weil sie im umgebenden Kontext relevant sind.

## Beschreibung

Die Rolle `mark` kennzeichnet HTML-Elemente mit Text, der zu Referenzzwecken markiert oder hervorgehoben ist. Sie entspricht semantisch dem HTML-Element {{HTMLElement('mark')}}. Verwenden Sie nach Möglichkeit stattdessen dieses Element.

Die Anwendungsfälle für `mark` sind dieselben wie für das Element `<mark>`. Dazu gehört, Text in einem Zitat hervorzuheben, der von besonderem Interesse ist, aber im Original nicht markiert wurde – vergleichbar mit dem Markieren von Passagen in einem gedruckten Artikel mit einem Textmarker. Auch Teile eines Inhalts, die für die aktuelle Aktivität der Nutzenden relevant sind, können so gekennzeichnet werden, etwa Treffer einer Suchfunktion.

Verwenden Sie `mark` nicht für rein dekorative Gestaltung wie Syntaxhervorhebung.

Das Element `mark` darf keinen zugänglichen Namen erhalten; sowohl das Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) als auch [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) sind für `mark` unzulässig.

## Bewährte Vorgehensweisen

### HTML bevorzugen

Das Element {{HTMLElement('mark')}} vermittelt automatisch, dass ein Knoten die Rolle `mark` hat. Verwenden Sie es nach Möglichkeit.

## Beispiele

Im folgenden Beispiel enthält ein Dokument einen Abschnitt, zu dem ein Kommentar verfasst wurde. Dieser Abschnitt ist mit `<span role="mark">` ausgezeichnet.

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

Der zugehörige Kommentar ist in einer HTML-Struktur ausgezeichnet, die von einem {{HTMLElement('div')}} mit [`role="comment"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/comment_role) umschlossen wird.

Um den Kommentar mit dem betreffenden Text zu verknüpfen, müssen wir den Text mit einem Element umschließen, das das Attribut [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) enthält. Dessen Wert muss die ID des Kommentars sein.

## Spezifikationen

Die Rolle wird Teil von [WAI-ARIA 1.3](https://w3c.github.io/aria/#mark) sein, das sich noch in der Entwurfsphase befindet.

## Siehe auch

- HTML-Element {{HTMLElement('mark')}}
