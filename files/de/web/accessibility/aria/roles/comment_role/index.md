---
title: "ARIA: comment Rolle"
slug: Web/Accessibility/ARIA/Roles/comment_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `comment`-Rolle bezeichnet semantisch einen Kommentar/Reaktion zu einem Inhalt auf der Seite oder zu einem vorherigen Kommentar.

> [!NOTE]
> Die `comment`-Rolle wird in WAI-ARIA 1.3 vorgeschlagen ([Aktuellster ARIA-Entwurf](https://w3c.github.io/aria/)), der sich noch im Entwurf befindet.

## Beispiele

Im folgenden Beispiel haben wir einen Dokumentabschnitt, der kommentiert wurde. Der kommentierte Abschnitt wird mit `<span role="mark">` ausgezeichnet.

Der zugehörige Kommentar wird mit einer HTML-Struktur ausgezeichnet, die in einem `<div>` mit `role="comment"` enthalten ist.

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

Um den Kommentar mit dem kommentierten Text zu verbinden, müssen wir den kommentierten Text mit einem Element umfassen, das das Attribut [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details) enthält, dessen Wert die ID des Kommentars sein sollte.

### Mehrere Kommentare

Da `aria-details` nun mehrere IDs akzeptieren kann, können wir mehrere Kommentare mit derselben Anmerkung verbinden, wie folgt:

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

Es ist möglich, Kommentare ineinander zu verschachteln, wie folgt:

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

## Barrierefreiheitsaspekte

Keine

## Spezifikationen

Wird Teil von WAI-ARIA 1.3 sein, das sich noch im Entwurf befindet.

## Siehe auch
