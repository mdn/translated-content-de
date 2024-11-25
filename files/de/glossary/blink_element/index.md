---
title: blink-Element (<blink>-Tag)
slug: Glossary/blink_element
l10n:
  sourceCommit: f37ba79adf0ca78fa49e05194f63822d457fa188
---

{{GlossarySidebar}}

Das **`<blink>`-Element** (blink-Tag) ist ein veraltetes HTML-Feature, das von Webbrowsern nicht mehr unterstützt wird und nicht mehr in der MDN dokumentiert ist. Es wurde verwendet, um Textinhalt kontinuierlich blinken zu lassen.

## Kurze Geschichte

In den frühen Tagen des Webs (Anfang bis Mitte der 90er Jahre) gab es nicht viele Funktionen zum Styling von Webseiten. Die [CSS](/de/docs/Web/CSS)-Spezifikation (Version 1) wurde erstmals 1996 veröffentlicht und von Browsern erst viel später einheitlich übernommen. Vor CSS experimentierten Browser mit verschiedenen Funktionen, um bestimmte Textabschnitte hervorzuheben und die Aufmerksamkeit des Nutzers zu erregen. Das `<blink>`-Element war eines davon und wurde in frühen Versionen von {{Glossary("Netscape_Navigator", "Netscape Navigator")}} eingeführt; das {{htmlelement("marquee")}}-Element von {{Glossary("Microsoft_Internet_Explorer", "Internet Explorer")}} war ein anderes.

Das `<blink>`-Element entstand offenbar nach einem Gespräch in einer Bar in Mountain View zwischen dem Netscape-Ingenieur [Lou Montulli](https://en.wikipedia.org/wiki/Lou_Montulli) und seinen Kollegen. Als er am nächsten Morgen ins Büro kam, fand er heraus, dass einer seiner Kollegen die ganze Nacht durchgearbeitet und es implementiert hatte ([lesen Sie die Geschichte hier](https://web.archive.org/web/20220331020029/http://www.montulli.org/theoriginofthe%3Cblink%3Etag)).

Während es anfangs populär war, wurde `<blink>` wegen übermäßiger Nutzung bald stark kritisiert; viele Menschen empfanden es als störend. Wichtiger noch, es beeinträchtigt die Lesbarkeit und kann besonders problematisch für Nutzer mit Sehbehinderungen oder [kognitiven Störungen](/de/docs/Web/Accessibility/Cognitive_accessibility) wie Epilepsie oder ADHS sein. Es kann desorientierend sein oder im schlimmsten Fall sogar [Anfälle auslösen](/de/docs/Web/Accessibility/Seizure_disorders).

`<blink>` wurde nie richtig spezifiziert und erreichte nie eine signifikante Browser-Kompatibilität. Es kann als Stück Web-Geschichte betrachtet werden.

## Syntax

Das `<blink>`-Element wurde folgendermaßen verwendet:

```html example-bad
<blink>In ancient browsers, I may have blinked</blink>
```

### Alternativen

- Die CSS-Eigenschaft {{cssxref("text-decoration-line")}} hat einen `blink`-Wert, der die gleiche Wirkung haben sollte, aber die meisten modernen Browser ignorieren ihn.
- Die JavaScript-Methode {{jsxref("String.blink()")}} umschließt eine Textzeichenkette mit `<blink></blink>`-Tags, aber wie bereits erwähnt, wird dieses Element nirgends mehr unterstützt.
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) könnten immer noch verwendet werden, um blinkenden Text zu erstellen. Sie sollten jedoch blinkenden Text auf Webseiten aus den oben genannten Gründen vermeiden.

## Siehe auch

- [Blink element](https://en.wikipedia.org/wiki/Blink_element) auf Wikipedia
- [WCAG 2.2.2: Pause, Stop, Hide](https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide)
- [WCAG 2.3.1: Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold)
