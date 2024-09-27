---
title: "ARIA: suggestion Rolle"
slug: Web/Accessibility/ARIA/Roles/suggestion_role
l10n:
  sourceCommit: 0a2839a8e9253a7756ff8ae04b1aa7be7f92034d
---

{{AccessibilitySidebar}}

Die `suggestion`-Rolle kennzeichnet semantisch eine einzelne vorgeschlagene Änderung an einem bearbeitbaren Dokument. Diese sollte auf ein Element angewendet werden, das sowohl ein Element mit der `insertion`-Rolle als auch eines mit der `deletion`-Rolle umschließt.

## Beispiele

Wenn Sie eine Inhaltsänderung haben, die sowohl eine Einfügung als auch eine Löschung beinhaltet, gibt es keine Möglichkeit für einen Screenreader-Benutzer, herauszufinden, ob die beiden miteinander in Beziehung stehen oder nicht. Hier kommt `role="suggestion"` ins Spiel, das auf ein Element gesetzt werden sollte, das beide umschließt wie folgt:

```html
<p>
  Freida's pet is a
  <span role="suggestion">
    <span role="deletion">black Cat called Luna</span>
    <span role="insertion">purple T. Rex called Tiny</span></span
  >.
</p>
```

Wir könnten sogar eine Informationsbox bereitstellen, die angibt, wer den Vorschlag gemacht hat und wann, und diese mit dem Vorschlag über [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details) verknüpfen:

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

Browser neigen dazu, standardmäßig einen schwarzen Durchstreichungseffekt für Löschungen und eine schwarze Unterstreichung für Einfügungen bereitzustellen, wenn Sie die HTML-Elemente verwenden, die implizit diese Rollen ausgeben. Wenn ARIA-Rollen jedoch explizit zur Modifizierung von HTML-Elementen verwendet werden, wie z.B. von `divs`, müssen Sie CSS verwenden, um das visuelle Styling für solche Löschungen und Einfügungen anzupassen.

## Beste Praktiken

### HTML bevorzugen

Die Verwendung der [`<ins>`](/de/docs/Web/HTML/Element/ins) und [`<del>`](/de/docs/Web/HTML/Element/del) Elemente wird automatisch mitteilen, dass ein Abschnitt die Rolle `insertion` oder `deletion` hat. Wenn möglich, sollten Sie die HTML-Elemente bevorzugen.

## Spezifikationen

Wird Teil von WAI-ARIA 1.3 sein, das sich noch im Entwurfsstadium befindet.

## Siehe auch
