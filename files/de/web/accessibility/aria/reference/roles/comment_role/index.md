---
title: "ARIA: comment-Rolle"
short-title: comment
slug: Web/Accessibility/ARIA/Reference/Roles/comment_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

Die Rolle `comment` kennzeichnet semantisch einen Kommentar oder eine Reaktion auf einen Inhalt der Seite oder auf einen vorherigen Kommentar.

> [!NOTE]
> Die Rolle `comment` ist für WAI-ARIA 1.3 vorgeschlagen ([aktuellster ARIA-Entwurf](https://w3c.github.io/aria/)), das sich noch in der Entwurfsphase befindet.

## Aspekte der Barrierefreiheit

Keine.

## Beispiele

Im folgenden Beispiel gibt es einen Dokumentabschnitt, der kommentiert wurde. Der kommentierte Abschnitt ist mit `<span role="mark">` ausgezeichnet.

Der zugehörige Kommentar ist mit einer HTML-Struktur ausgezeichnet, die von einem `<div>` mit `role="comment"` umschlossen wird.

```html
<p>
  The last half of the song is a slow-rising crescendo that peaks at the
  <span role="mark" aria-details="thread-1">end of the guitar solo</span>,
  before fading away sharply.
</p>

<div role="comment" id="thread-1" data-author="chris">
  <h3>Chris said</h3>
  <p class="comment-text">I really think this moment could use more cowbell.</p>
  <p><time datetime="2019-03-30T19:29">March 30 2019, 19:29</time></p>
</div>
```

Um den Kommentar mit dem kommentierten Text zu verknüpfen, müssen wir den Text mit einem Element umschließen, das das Attribut [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) enthält. Dessen Wert sollte die ID des Kommentars sein.

### Mehrere Kommentare

Da `aria-details` inzwischen mehrere IDs akzeptieren kann, können wir mehrere Kommentare derselben Annotation zuordnen:

```html
<p>
  The last half of the song is a slow-rising crescendo that peaks at the
  <mark aria-details="thread-1 thread-2">end of the guitar solo</mark>, before
  fading away sharply.
</p>

<div role="comment" id="thread-1" data-author="chris">
  <h3>Chris said</h3>
  <p class="comment-text">I really think this moment could use more cowbell.</p>
  <p><time datetime="2019-03-30T19:29">March 30 2019, 19:29</time></p>
</div>

<div role="comment" id="thread-2" data-author="chris">
  <h3>Marcus said</h3>
  <p class="comment-text">
    The guitar solo could do with a touch more chorus, and a slightly lower
    volume.
  </p>
  <p><time datetime="2019-03-29T15:35">March 29 2019, 15:35</time></p>
</div>
```

### Verschachtelte Kommentare

Kommentare können ineinander verschachtelt werden:

```html
<div role="comment" id="thread-1" data-author="chris">
  <h3>Chris said</h3>
  <p class="comment-text">I really think this moment could use more cowbell.</p>
  <p><time datetime="2021-03-30T19:29">March 30 2021, 19:29</time></p>

  <div role="comment" data-author="marcus">
    <h3>Marcus replied</h3>
    <p class="comment-text">
      I don't know about that. I think the cowbell could distract from the solo.
    </p>
    <p><time datetime="2021-03-30T21:02">March 30 2021, 21:02</time></p>
  </div>
</div>
```

## Spezifikationen

Wird Teil von WAI-ARIA 1.3 sein, das sich noch in der Entwurfsphase befindet.
