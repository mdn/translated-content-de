---
title: "ARIA: suggestion-Rolle"
short-title: suggestion
slug: Web/Accessibility/ARIA/Reference/Roles/suggestion_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die `suggestion`-Rolle kennzeichnet semantisch eine einzelne vorgeschlagene Änderung an einem bearbeitbaren Dokument. Diese sollte auf einem Element verwendet werden, das ein Element mit einer `insertion`-Rolle und eines mit einer `deletion`-Rolle umschließt.

## Beispiele

Wenn Sie eine Inhaltsänderung haben, die eine Einfügung _und_ eine Löschung beinhaltet, gibt es für einen Screenreader-Benutzer keine Möglichkeit zu erkennen, ob die beiden miteinander in Beziehung stehen oder nicht. Hier kommt `role="suggestion"` ins Spiel, die auf ein Element gesetzt werden sollte, das beide umschließt, etwa so:

```html
<p>
  Freida's pet is a
  <span role="suggestion">
    <span role="deletion">black Cat called Luna</span>
    <span role="insertion">purple T. Rex called Tiny</span></span
  >.
</p>
```

Wir könnten sogar eine Informationsbox bereitstellen, die angibt, wer den Vorschlag gemacht hat und wann, und diese über [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) mit dem Vorschlag verknüpfen:

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

Browser neigen dazu, bei Löschungen einen standardmäßigen schwarzen Durchstrich und bei Einfügungen eine schwarze Unterstreichung bereitzustellen, wenn die HTML-Elemente verwendet werden, die diese Rollen implizit offenlegen. Bei der Verwendung expliziter ARIA-Rollen zur Modifizierung von HTML-Elementen, wie z.B. `<div>`-Elementen, müssen Sie jedoch CSS verwenden, um das visuelle Styling für solche Löschungen und Einfügungen anzupassen.

## Beste Praktiken

### Bevorzugen Sie HTML

Die Verwendung der [`<ins>`](/de/docs/Web/HTML/Reference/Elements/ins) und [`<del>`](/de/docs/Web/HTML/Reference/Elements/del) Elemente wird automatisch mitteilen, dass ein Abschnitt die Rolle `insertion` oder `deletion` hat. Wenn möglich, bevorzugen Sie die Verwendung der HTML-Elemente.

## Spezifikationen

Wird Teil von WAI-ARIA 1.3 sein, das sich noch in der Entwurfsphase befindet.
