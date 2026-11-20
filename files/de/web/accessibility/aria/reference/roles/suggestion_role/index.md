---
title: "ARIA: suggestion-Rolle"
short-title: suggestion
slug: Web/Accessibility/ARIA/Reference/Roles/suggestion_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

Die `suggestion`-Rolle kennzeichnet semantisch eine einzelne vorgeschlagene Änderung an einem bearbeitbaren Dokument. Sie sollte einem Element zugewiesen werden, das sowohl ein Element mit der `insertion`-Rolle als auch eines mit der `deletion`-Rolle umschließt.

## Bewährte Verfahren

### HTML bevorzugen

Die Verwendung der Elemente [`<ins>`](/de/docs/Web/HTML/Reference/Elements/ins) und [`<del>`](/de/docs/Web/HTML/Reference/Elements/del) vermittelt automatisch, dass ein Abschnitt die Rolle `insertion` beziehungsweise `deletion` hat. Verwenden Sie nach Möglichkeit diese HTML-Elemente.

## Beispiele

Wenn eine Inhaltsänderung sowohl eine Einfügung _als auch_ eine Löschung umfasst, können Nutzer von Screenreadern nicht erkennen, ob die beiden zusammengehören. Dafür ist `role="suggestion"` vorgesehen. Die Rolle sollte einem Element zugewiesen werden, das beide umschließt:

```html
<p>
  Freida's pet is a
  <span role="suggestion">
    <span role="deletion">black Cat called Luna</span>
    <span role="insertion">purple T. Rex called Tiny</span></span
  >.
</p>
```

Wir könnten auch ein Informationsfeld bereitstellen, das angibt, wer den Vorschlag wann gemacht hat, und es über [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) mit dem Vorschlag verknüpfen:

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

Browser stellen Löschungen bei Verwendung der HTML-Elemente, die diese Rollen implizit bereitstellen, standardmäßig meist mit einer schwarzen Durchstreichung und Einfügungen mit einer schwarzen Unterstreichung dar. Wenn Sie dagegen explizite ARIA-Rollen verwenden, um HTML-Elementen wie div-Elementen diese Rollen zuzuweisen, müssen Sie die visuelle Darstellung solcher Löschungen und Einfügungen mit CSS anpassen.

## Spezifikationen

Die Rolle wird Teil von WAI-ARIA 1.3 sein, das sich noch in der Entwurfsphase befindet.
