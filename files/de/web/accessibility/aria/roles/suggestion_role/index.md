---
title: "ARIA: suggestion Rolle"
slug: Web/Accessibility/ARIA/Roles/suggestion_role
l10n:
  sourceCommit: 0a2839a8e9253a7756ff8ae04b1aa7be7f92034d
---

{{AccessibilitySidebar}}

Die `suggestion`-Rolle kennzeichnet semantisch eine einzelne vorgeschlagene Änderung an einem bearbeitbaren Dokument. Diese sollte auf einem Element verwendet werden, das ein Element mit der `insertion`-Rolle und eines mit der `deletion`-Rolle umschließt.

## Beispiele

Wenn eine Inhaltsänderung sowohl eine Einfügung als auch eine Löschung umfasst, kann ein Screenreader-Benutzer nicht feststellen, ob die beiden zusammenhängen oder nicht. Hierfür ist `role="suggestion"` zuständig, das auf einem Element gesetzt werden sollte, das beide umschließt, wie folgt:

```html
<p>
  Freida's pet is a
  <span role="suggestion">
    <span role="deletion">black Cat called Luna</span>
    <span role="insertion">purple T. Rex called Tiny</span></span
  >.
</p>
```

Wir könnten sogar ein Informationsfeld bereitstellen, das sagt, wer den Vorschlag gemacht hat und wann, und es mit dem Vorschlag über [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details) verknüpfen:

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

Browser neigen dazu, eine standardmäßige schwarze Durchstreichung für Löschungen und eine schwarze Unterstreichung für Einfügungen bereitzustellen, wenn die HTML-Elemente verwendet werden, die diese Rollen implizit darstellen. Bei der Verwendung expliziter ARIA-Rollen zur Modifikation von HTML-Elementen, wie z.B. divs, müssen Sie CSS verwenden, um das visuelle Styling für solche Löschungen und Einfügungen anzupassen.

## Beste Praktiken

### HTML bevorzugen

Die Verwendung der [`<ins>`](/de/docs/Web/HTML/Element/ins) und [`<del>`](/de/docs/Web/HTML/Element/del) Elemente kommuniziert automatisch, dass ein Abschnitt die Rolle `insertion` oder `deletion` hat. Wenn möglich, bevorzugen Sie die Verwendung der HTML-Elemente.

## Spezifikationen

Wird Teil von WAI-ARIA 1.3 sein, das sich noch im Entwurfsstadium befindet.

## Siehe auch
