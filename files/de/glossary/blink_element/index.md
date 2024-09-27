---
title: blink-Element (<blink>-Tag)
slug: Glossary/blink_element
l10n:
  sourceCommit: a4b72d0683826e060f72a82b297b41e0b162d909
---

{{GlossarySidebar}}

Das **`<blink>`-Element** (blink-Tag) ist ein veraltetes HTML-Feature, das von Webbrowsern nicht mehr unterstützt wird und nicht mehr in den MDN-Dokumentationen aufgeführt ist. Es wurde verwendet, um Textinhalte ständig blinken (blitzen) zu lassen.

## Kurze Geschichte

In den frühen Tagen des Webs (Anfang bis Mitte der 90er Jahre) standen nicht viele Funktionen zur Verfügung, um Webseiten zu gestalten. Die [CSS](/de/docs/Web/CSS)-Spezifikation (Version 1) wurde erstmals 1996 veröffentlicht und erst viel später konsistent von Browsern übernommen. Vor CSS experimentierten Browser mit mehreren Funktionen, um bestimmte Textabschnitte hervorzuheben und bei Bedarf die Aufmerksamkeit des Nutzers zu erregen. Das `<blink>`-Element war eines dieser Elemente, das in frühen Versionen des [Netscape Navigator](/de/docs/Glossary/Netscape_Navigator) eingeführt wurde; das {{htmlelement("marquee")}}-Element von [Internet Explorer](/de/docs/Glossary/Microsoft_Internet_Explorer) war ein weiteres.

Das `<blink>`-Element wurde offenbar nach einem Gespräch in einer Bar in Mountain View zwischen dem Netscape-Ingenieur [Lou Montulli](https://en.wikipedia.org/wiki/Lou_Montulli) und Kollegen erstellt. Am nächsten Morgen, als er ins Büro kam, stellte er fest, dass einer seiner Kollegen die ganze Nacht aufgeblieben war und es implementiert hatte ([lesen Sie die Geschichte hier](https://web.archive.org/web/20220331020029/http://www.montulli.org/theoriginofthe%3Cblink%3Etag)).

Obwohl es anfangs beliebt war, wurde `<blink>` aufgrund übermäßigen Gebrauchs stark kritisiert; viele Menschen fanden es störend. Wichtiger ist, dass es die Lesbarkeit verschlechtert und besonders für Benutzer mit Sehbehinderungen oder [kognitiven Störungen](/de/docs/Web/Accessibility/Cognitive_accessibility) wie Epilepsie oder ADHS problematisch sein kann. Es kann desorientierend wirken oder im schlimmsten Fall sogar [Anfälle auslösen](/de/docs/Web/Accessibility/Seizure_disorders).

`<blink>` wurde nie ordnungsgemäß spezifiziert und erreichte nie eine signifikante Unterstützung über verschiedene Browser hinweg. Es kann als ein Stück Web-Geschichte betrachtet werden.

## Syntax

Das `<blink>`-Element wurde folgendermaßen verwendet:

```html example-bad
<blink>In ancient browsers, I may have blinked</blink>
```

### Alternativen

- Die CSS-Eigenschaft {{cssxref("text-decoration-line")}} hat einen `blink`-Wert, der denselben Effekt haben sollte. Die meisten modernen Browser ignorieren ihn jedoch.
- Die JavaScript-Methode {{jsxref("String.blink()")}} umschließt eine Textzeichenkette in `<blink></blink>`-Tags, aber wie bereits erwähnt, wird dieses Element nirgendwo mehr unterstützt.
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) könnten noch verwendet werden, um blinkenden Text zu erstellen. Sie sollten jedoch blinkenden Text auf Webseiten aus den oben genannten Gründen vermeiden.

## Siehe auch

- [Blink element](https://en.wikipedia.org/wiki/Blink_element) auf Wikipedia
- [WCAG 2.2.2: Pause, Stop, Hide](https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide)
- [WCAG 2.3.1: Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold)
