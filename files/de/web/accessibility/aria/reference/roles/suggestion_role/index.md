---
title: "ARIA: suggestion role"
slug: Web/Accessibility/ARIA/Reference/Roles/suggestion_role
l10n:
  sourceCommit: d666d5ed812b56cbc9c6cba853494976da1f1dd2
---

Die `suggestion`-Rolle kennzeichnet semantisch eine einzelne vorgeschlagene Änderung an einem bearbeitbaren Dokument. Diese sollte auf einem Element verwendet werden, das ein Element mit einer `insertion`-Rolle und eines mit einer `deletion`-Rolle umschließt.

## Beispiele

Wenn Sie eine Inhaltsänderung haben, die eine Einfügung _und_ eine Löschung beinhaltet, gibt es keine Möglichkeit für Benutzer von Bildschirmlesern zu erkennen, ob die beiden miteinander verbunden sind oder nicht. Dies ist die Aufgabe von `role="suggestion"`, das auf ein Element gesetzt werden sollte, das beide umschließt, wie folgt:

```html
<p>
  Freida's pet is a
  <span role="suggestion">
    <span role="deletion">black Cat called Luna</span>
    <span role="insertion">purple T. Rex called Tiny</span></span
  >.
</p>
```

Wir könnten sogar ein Informationsfeld bereitstellen, das angibt, wer die Änderung vorgeschlagen hat und wann, und es über [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) mit dem Vorschlag verknüpfen:

```html
<p>
  Freida's pet is a
  <span role="suggestion" aria-details="comment-source">
    <span role="deletion">black Cat called Luna</span>
    <span role="insertion">purple T. Rex called Tiny</span></span
  >.
</p>

<div id="comment-source">
  Suggested by Chris,
  <time datetime="2019-03-30T19:29">March 30 2019, 19:29</time>
</div>
```

Browser neigen dazu, eine standardmäßige schwarze Durchstreichung für Löschungen und eine schwarze Unterstreichung für Einfügungen bereitzustellen, wenn die HTML-Elemente verwendet werden, die diese Rollen implizit darstellen. Wenn jedoch explizite ARIA-Rollen verwendet werden, um HTML-Elemente wie `divs` zu modifizieren, müssen Sie CSS verwenden, um die visuelle Gestaltung solcher Löschungen und Einfügungen anzupassen.

## Beste Praktiken

### Bevorzugen Sie HTML

Die Verwendung der [`<ins>`](/de/docs/Web/HTML/Element/ins) und [`<del>`](/de/docs/Web/HTML/Element/del) Elemente kommuniziert automatisch, dass ein Abschnitt die Rolle `insertion` oder `deletion` hat. Wenn möglich, sollten Sie die HTML-Elemente bevorzugen.

## Spezifikationen

Wird Teil von WAI-ARIA 1.3 sein, das sich noch in der Entwurfsphase befindet.
