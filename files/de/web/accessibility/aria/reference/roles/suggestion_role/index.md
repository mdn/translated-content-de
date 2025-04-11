---
title: "ARIA: Rolle `suggestion`"
slug: Web/Accessibility/ARIA/Reference/Roles/suggestion_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Die Rolle `suggestion` bezeichnet semantisch eine einzelne vorgeschlagene Änderung in einem bearbeitbaren Dokument. Diese Rolle sollte auf ein Element angewendet werden, das ein Element mit der Rolle `insertion` und eines mit der Rolle `deletion` umschließt.

## Beispiele

Wenn Sie eine Inhaltsänderung haben, die eine Einfügung _und_ eine Löschung umfasst, gibt es für Benutzer von Screenreadern keine Möglichkeit zu erkennen, ob die beiden miteinander verbunden sind. Hier kommt `role="suggestion"` ins Spiel, das auf ein Element gesetzt werden sollte, das beide umschließt, wie folgt:

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

Browser neigen dazu, standardmäßig eine schwarze Durchstreichung für Löschungen und eine schwarze Unterstreichung für Einfügungen bereitzustellen, wenn HTML-Elemente verwendet werden, die diese Rollen implizit offenlegen. Bei der Verwendung expliziter ARIA-Rollen, um HTML-Elemente wie divs zu modifizieren, müssen Sie jedoch CSS verwenden, um das visuelle Styling für solche Löschungen und Einfügungen anzupassen.

## Best Practices

### Bevorzugen Sie HTML

Die Verwendung der Elemente [`<ins>`](/de/docs/Web/HTML/Reference/Elements/ins) und [`<del>`](/de/docs/Web/HTML/Reference/Elements/del) wird automatisch kommunizieren, dass ein Abschnitt die Rolle `insertion` oder `deletion` hat. Wenn möglich, bevorzugen Sie die Verwendung der HTML-Elemente.

## Spezifikationen

Wird Teil von WAI-ARIA 1.3, das sich noch in der Entwurfsphase befindet.
