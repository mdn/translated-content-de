---
title: blink-Element (<blink>-Tag)
slug: Glossary/blink_element
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Das **`<blink>`-Element** (blink-Tag) ist ein veraltetes HTML-Feature, das von Webbrowsern nicht mehr unterstützt wird und auf MDN nicht mehr dokumentiert ist. Es wurde verwendet, um Textinhalte kontinuierlich blinken (flackern) zu lassen.

Das `<blink>`-Element wurde so verwendet:

```html example-bad
<blink>In ancient browsers, I may have blinked</blink>
```

## Kurze Geschichte

In den frühen Tagen des Webs (Anfang bis Mitte der 90er Jahre) gab es nicht viele Funktionen für das Styling von Webseiten. Die [CSS](/de/docs/Web/CSS)-Spezifikation (Version 1) wurde erstmals 1996 veröffentlicht und erst viel später von den Browsern einheitlich übernommen. Vor CSS experimentierten Browser mit verschiedenen Funktionen, um bestimmte Textabschnitte hervorzuheben und die Aufmerksamkeit der Benutzer zu erregen. Das `<blink>`-Element war eines davon und wurde in frühen Versionen von {{Glossary("Netscape_Navigator", "Netscape Navigator")}} eingeführt; ein weiteres war das {{htmlelement("marquee")}}-Element von {{Glossary("Microsoft_Internet_Explorer", "Internet Explorer")}}.

Das `<blink>`-Element entstand offenbar nach einem Gespräch in einer Bar in Mountain View zwischen dem Netscape-Ingenieur [Lou Montulli](https://de.wikipedia.org/wiki/Lou_Montulli) und Kollegen. Als er am nächsten Morgen ins Büro kam, stellte er fest, dass einer seiner Kollegen die ganze Nacht durchgearbeitet hatte, um es zu implementieren ([lesen Sie die Geschichte hier](https://web.archive.org/web/20220331020029/http://www.montulli.org/theoriginofthe%3Cblink%3Etag)).

Während es zunächst beliebt war, wurde `<blink>` wegen seines übermäßigen Gebrauchs stark kritisiert; viele Leute fanden es nervig. Wichtiger ist jedoch, dass es die Lesbarkeit beeinträchtigt und insbesondere für Benutzer mit Sehbehinderungen oder [kognitiven Störungen](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility) wie Epilepsie oder ADHS problematisch sein kann. Es kann desorientierend sein oder, im schlimmsten Fall, sogar [Anfälle auslösen](/de/docs/Web/Accessibility/Guides/Seizure_disorders).

`<blink>` wurde nie ordnungsgemäß spezifiziert und erreichte nie eine signifikante Unterstützung durch verschiedene Browser. Es kann als ein Stück Webgeschichte betrachtet werden.

## Alternativen

- Die CSS-Eigenschaft {{cssxref("text-decoration-line")}} hat einen `blink`-Wert, der denselben Effekt haben sollte, aber die meisten modernen Browser ignorieren ihn.
- Die JavaScript-Methode {{jsxref("String.blink()")}} umschließt eine Textzeichenfolge mit `<blink></blink>`-Tags, jedoch wird dieses Element, wie bereits besprochen, nirgends mehr unterstützt.
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) könnten immer noch verwendet werden, um blinkenden Text zu erstellen. Sie sollten jedoch aus den oben genannten Gründen auf blinkenden Text auf Webseiten verzichten.

## Siehe auch

- [Blink-Element](https://de.wikipedia.org/wiki/Blink_element) auf Wikipedia
- [WCAG 2.2.2: Pause, Stop, Hide](https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide)
- [WCAG 2.3.1: Drei Blitze oder darunter Schwelle](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold)
