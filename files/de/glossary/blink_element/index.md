---
title: blink-Element (<blink>-Tag)
slug: Glossary/blink_element
l10n:
  sourceCommit: c5c84b62f3f1fbd46f77c940fa0cbfff649c46a1
---

{{GlossarySidebar}}

Das **`<blink>`-Element** (blink-Tag) ist ein veraltetes HTML-Feature, das von Webbrowsern nicht mehr unterstützt wird und nicht mehr in den MDN-Dokumenten enthalten ist. Es wurde verwendet, um Textinhalte kontinuierlich blinken (blitzen) zu lassen.

Das `<blink>`-Element wurde folgendermaßen verwendet:

```html example-bad
<blink>In ancient browsers, I may have blinked</blink>
```

## Kurze Geschichte

In den frühen Tagen des Webs (Anfang bis Mitte der 90er) waren nicht viele Features verfügbar, um Webseiten zu gestalten. Die [CSS](/de/docs/Web/CSS)-Spezifikation (Version 1) wurde erstmals 1996 veröffentlicht und erst viel später von Browsern konsistent übernommen. Vor CSS experimentierten Browser mit verschiedenen Features, um bestimmte Textabschnitte hervorzuheben und die Aufmerksamkeit der Benutzer zu erregen. Das `<blink>`-Element war eines dieser Features, eingeführt in frühen Versionen von {{Glossary("Netscape_Navigator", "Netscape Navigator")}}; das {{htmlelement("marquee")}}-Element von {{Glossary("Microsoft_Internet_Explorer", "Internet Explorer")}} war ein anderes.

Das `<blink>`-Element entstand angeblich nach einem Gespräch in einer Bar in Mountain View zwischen dem Netscape-Ingenieur [Lou Montulli](https://en.wikipedia.org/wiki/Lou_Montulli) und seinen Kollegen. Als er am nächsten Morgen ins Büro kam, stellte er fest, dass einer seiner Kollegen die ganze Nacht daran gearbeitet und es implementiert hatte ([hier die Geschichte lesen](https://web.archive.org/web/20220331020029/http://www.montulli.org/theoriginofthe%3Cblink%3Etag)).

Während es anfangs beliebt war, wurde `<blink>` aufgrund von Überbeanspruchung oft kritisiert; viele Menschen fanden es störend. Wichtiger ist, dass es die Lesbarkeit beeinträchtigt und besonders problematisch für Benutzer mit Sehbehinderungen oder [kognitiven Störungen](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility) wie Epilepsie oder ADHS sein kann. Es kann desorientierend wirken oder im schlimmsten Fall sogar [Anfälle auslösen](/de/docs/Web/Accessibility/Guides/Seizure_disorders).

`<blink>` wurde nie ordnungsgemäß spezifiziert und erreichte niemals eine signifikante plattformübergreifende Unterstützung. Es kann als ein Stück Web-Geschichte angesehen werden.

## Alternativen

- Die CSS-Eigenschaft {{cssxref("text-decoration-line")}} hat einen `blink`-Wert, der denselben Effekt haben sollte, aber die meisten modernen Browser ignorieren ihn.
- Die JavaScript-Methode {{jsxref("String.blink()")}} umschließt eine Textzeichenfolge in `<blink></blink>`-Tags, aber wie bereits erwähnt, wird dieses Element nirgends mehr unterstützt.
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) können immer noch verwendet werden, um blinkenden Text zu erstellen. Sie sollten jedoch blinkenden Text auf Webseiten wegen der bereits genannten Gründe vermeiden.

## Siehe auch

- [Blink element](https://en.wikipedia.org/wiki/Blink_element) auf Wikipedia
- [WCAG 2.2.2: Pause, Stop, Hide](https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide)
- [WCAG 2.3.1: Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold)
