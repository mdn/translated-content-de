---
title: "ARIA: Rolle suggestion"
slug: Web/Accessibility/ARIA/Reference/Roles/suggestion_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die Rolle `suggestion` kennzeichnet semantisch eine einzelne vorgeschlagene Änderung an einem bearbeitbaren Dokument. Diese sollte auf einem Element verwendet werden, das ein Element mit der Rolle `insertion` und eines mit der Rolle `deletion` umschließt.

## Beispiele

Wenn Sie eine Inhaltsänderung haben, die eine Einfügung _und_ eine Löschung beinhaltet, gibt es keine Möglichkeit für einen Screenreader-Benutzer, herauszufinden, ob die beiden miteinander verbunden sind oder nicht. Hier kommt `role="suggestion"` ins Spiel, das auf ein Element gesetzt werden sollte, das beide umschließt, wie folgt:

```html
<p>
  Freida's pet is a
  <span role="suggestion">
    <span role="deletion">black Cat called Luna</span>
    <span role="insertion">purple T. Rex called Tiny</span></span
  >.
</p>
```

Wir könnten sogar eine Informationsbox bereitstellen, die anzeigt, wer den Vorschlag gemacht hat und wann, und sie mit dem Vorschlag über [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) verknüpfen:

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

Browser bieten in der Regel standardmäßig ein schwarzes Durchstreichen für Löschungen und ein schwarzes Unterstreichen für Einfügungen, wenn die HTML-Elemente verwendet werden, die diese Rollen implizit darstellen. Aber wenn Sie explizite ARIA-Rollen verwenden, um HTML-Elemente wie `divs` zu modifizieren, müssen Sie CSS verwenden, um die visuelle Darstellung solcher Löschungen und Einfügungen anzupassen.

## Beste Praktiken

### Bevorzugen Sie HTML

Die Verwendung der [`<ins>`](/de/docs/Web/HTML/Element/ins)- und [`<del>`](/de/docs/Web/HTML/Element/del)-Elemente kommuniziert automatisch, dass ein Abschnitt die Rolle `insertion` oder `deletion` hat. Wenn möglich, sollten Sie die HTML-Elemente bevorzugen.

## Spezifikationen

Wird Teil von WAI-ARIA 1.3 sein, das sich noch in der Entwurfsphase befindet.

## Siehe auch
