---
title: blink-Element (<blink>-Tag)
slug: Glossary/blink_element
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{GlossarySidebar}}

Das **`<blink>`-Element** (blink-Tag) ist ein veraltetes HTML-Merkmal, das von Webbrowsern nicht mehr unterstützt wird und nicht mehr in den MDN-Dokumenten aufgeführt ist. Es wurde verwendet, um Textinhalte kontinuierlich blinken zu lassen.

## Kurze Geschichte

In den frühen Tagen des Webs (Anfang bis Mitte der 90er Jahre) standen nicht viele Funktionen zur Verfügung, um Webseiten zu gestalten. Die [CSS](/de/docs/Web/CSS)-Spezifikation (Version 1) wurde erstmals 1996 veröffentlicht und erst viel später durchgängig von Browsern übernommen. Vor CSS experimentierten Browser mit verschiedenen Funktionen, um bestimmte Textabschnitte hervorzuheben und die Aufmerksamkeit des Benutzers zu gewinnen. Das `<blink>`-Element war eines davon und wurde in frühen Versionen des {{Glossary("Netscape_Navigator", "Netscape Navigator")}} eingeführt; das {{htmlelement("marquee")}}-Element von {{Glossary("Microsoft_Internet_Explorer", "Internet Explorer")}} war ein weiteres.

Das `<blink>`-Element entstand offenbar nach einem Gespräch in einer Bar in Mountain View zwischen dem Netscape-Ingenieur [Lou Montulli](https://en.wikipedia.org/wiki/Lou_Montulli) und Kollegen. Als er am nächsten Morgen ins Büro kam, stellte er fest, dass einer seiner Kollegen die ganze Nacht wach geblieben war und es implementiert hatte ([lesen Sie die Geschichte hier](https://web.archive.org/web/20220331020029/http://www.montulli.org/theoriginofthe%3Cblink%3Etag)).

Obwohl es anfangs beliebt war, wurde `<blink>` wegen Übernutzung stark kritisiert; viele Menschen fanden es störend. Noch wichtiger ist, dass es die Lesbarkeit beeinträchtigt und besonders problematisch für Benutzer mit Sehbehinderungen oder [kognitiven Störungen](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility) wie Epilepsie oder ADHS sein kann. Es kann desorientierend sein oder im schlimmsten Fall sogar [Anfälle auslösen](/de/docs/Web/Accessibility/Guides/Seizure_disorders).

`<blink>` wurde nie richtig spezifiziert und erreichte nie eine signifikante plattformübergreifende Unterstützung. Es kann als ein Stück Webgeschichte betrachtet werden.

## Syntax

Das `<blink>`-Element wurde folgendermaßen verwendet:

```html example-bad
<blink>In ancient browsers, I may have blinked</blink>
```

### Alternativen

- Die CSS-Eigenschaft {{cssxref("text-decoration-line")}} hat einen `blink`-Wert, der den gleichen Effekt haben sollte, aber die meisten modernen Browser ignorieren ihn.
- Die JavaScript-Methode {{jsxref("String.blink()")}} umschließt einen Textstring mit `<blink></blink>`-Tags, aber wie bereits erwähnt, wird dieses Element nirgends mehr unterstützt.
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) könnten weiterhin verwendet werden, um blinkenden Text zu erstellen. Es sollte jedoch vermieden werden, blinkenden Text auf Webseiten zu verwenden, aus den oben genannten Gründen.

## Siehe auch

- [Blink-Element](https://en.wikipedia.org/wiki/Blink_element) auf Wikipedia
- [WCAG 2.2.2: Pause, Stop, Hide](https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide)
- [WCAG 2.3.1: Drei Blitze oder unterhalb der Schwelle](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold)
