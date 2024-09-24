---
title: "ARIA: Vorschlags-Rolle"
slug: Web/Accessibility/ARIA/Roles/suggestion_role
l10n:
  sourceCommit: 0a2839a8e9253a7756ff8ae04b1aa7be7f92034d
---

{{AccessibilitySidebar}}

Die `suggestion`-Rolle bezeichnet semantisch eine einzelne vorgeschlagene Änderung an einem bearbeitbaren Dokument. Diese sollte auf einem Element verwendet werden, das ein Element mit einer `insertion`-Rolle und eines mit einer `deletion`-Rolle umhüllt.

## Beispiele

Wenn Sie eine Inhaltsänderung haben, die eine Einfügung _und_ eine Löschung beinhaltet, gibt es keine Möglichkeit für einen Screenreader-Benutzer, zu erkennen, ob die beiden zusammengehören oder nicht. Hier kommt `role="suggestion"` ins Spiel, das auf ein Element gesetzt werden sollte, das beide umhüllt, wie folgt:

```html
<p>
  Freidas Haustier ist ein
  <span role="suggestion">
    <span role="deletion">schwarzer Kater namens Luna</span>
    <span role="insertion">lila T. Rex namens Tiny</span></span
  >.
</p>
```

Wir könnten sogar ein Informationsfeld bereitstellen, das angibt, wer den Vorschlag gemacht hat und wann, und es mit dem Vorschlag über [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details) verknüpfen:

```html
<p>
  Freidas Haustier ist ein
  <span role="suggestion" aria-details="comment-source">
    <span role="deletion">schwarzer Kater namens Luna</span>
    <span role="insertion">lila T. Rex namens Tiny</span></span
  >.
</p>

<div id="comment-source">
  Vorgeschlagen von Chris,
  <time datetime="2019-03-30T19:29">30. März 2019, 19:29</time>
</div>
```

Browser neigen dazu, standardmäßig eine schwarze Durchstreichung für Löschungen und eine schwarze Unterstreichung für Einfügungen bereitzustellen, wenn sie die HTML-Elemente verwenden, die diese Rollen implizit anzeigen. Aber wenn Sie explizite ARIA-Rollen verwenden, um HTML-Elemente wie Divs zu ändern, müssen Sie CSS verwenden, um das visuelle Styling für solche Löschungen und Einfügungen anzupassen.

## Beste Praktiken

### Bevorzugen Sie HTML

Die Verwendung der [`<ins>`](/de/docs/Web/HTML/Element/ins)- und [`<del>`](/de/docs/Web/HTML/Element/del)-Elemente wird automatisch vermitteln, dass ein Abschnitt die Rolle `insertion` oder `deletion` hat. Wenn möglich, sollten Sie die Verwendung der HTML-Elemente bevorzugen.

## Spezifikationen

Wird Teil von WAI-ARIA 1.3, das sich noch im Entwurf befindet.

## Siehe auch
