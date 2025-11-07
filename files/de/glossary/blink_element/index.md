---
title: blink-Element (<blink>-Tag)
slug: Glossary/blink_element
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **`<blink>`-Element** (blink-Tag) ist ein veraltetes HTML-Element, das von Webbrowsern nicht mehr unterstützt wird und auf MDN nicht mehr dokumentiert ist. Es wurde verwendet, um Text kontinuierlich blinken zu lassen.

Das `<blink>`-Element wurde folgendermaßen verwendet:

```html example-bad
<blink>In ancient browsers, I may have blinked</blink>
```

## Kurze Geschichte

In den frühen Tagen des Webs (Anfang bis Mitte der 90er Jahre) gab es nicht viele Möglichkeiten zur Gestaltung von Webseiten. Die [CSS](/de/docs/Web/CSS)-Spezifikation (Version 1) wurde erstmals 1996 veröffentlicht und von Browsern erst viel später konsistent übernommen. Vor CSS experimentierten Browser mit verschiedenen Funktionen, um bestimmte Textabschnitte hervorzuheben und die Aufmerksamkeit der Benutzer zu erregen. Das `<blink>`-Element war eines dieser Elemente, das in frühen Versionen von {{Glossary("Netscape_Navigator", "Netscape Navigator")}} eingeführt wurde; das {{htmlelement("marquee")}}-Element von {{Glossary("Microsoft_Internet_Explorer", "Internet Explorer")}} war ein anderes.

Das `<blink>`-Element entstand offenbar nach einem Gespräch in einer Bar in Mountain View zwischen dem Netscape-Ingenieur [Lou Montulli](https://en.wikipedia.org/wiki/Lou_Montulli) und Kollegen. Als er am nächsten Morgen ins Büro kam, stellte er fest, dass einer seiner Kollegen die ganze Nacht wach geblieben war und es implementiert hatte ([lesen Sie die Geschichte hier](https://web.archive.org/web/20220331020029/http://www.montulli.org/theoriginofthe%3Cblink%3Etag)).

Obwohl es zunächst beliebt war, wurde `<blink>` wegen des übermäßigen Gebrauchs sehr kritisiert; viele Menschen empfanden es als störend. Wichtiger ist jedoch, dass es die Lesbarkeit beeinträchtigt und besonders problematisch für Benutzer mit Sehbehinderungen oder [kognitiven Störungen](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility) wie Epilepsie oder ADHS sein kann. Es kann desorientierend sein oder im schlimmsten Fall sogar [Anfälle auslösen](/de/docs/Web/Accessibility/Guides/Seizure_disorders).

`<blink>` wurde nie richtig spezifiziert und hat nie eine signifikante Unterstützung über verschiedene Browser hinweg erreicht. Es kann als ein Stück Webgeschichte betrachtet werden.

## Alternativen

- Die CSS-Eigenschaft {{cssxref("text-decoration-line")}} hat einen `blink`-Wert, der denselben Effekt haben sollte, aber die meisten modernen Browser ignorieren ihn.
- Die JavaScript-Methode {{jsxref("String.blink()")}} umschließt eine Textzeichenkette in `<blink></blink>`-Tags, aber wie bereits erwähnt, wird dieses Element nirgendwo mehr unterstützt.
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) könnten immer noch verwendet werden, um blinkenden Text zu erstellen. Sie sollten jedoch auf blinkenden Text auf Webseiten aus den oben genannten Gründen verzichten.

## Siehe auch

- [Blink-Element](https://en.wikipedia.org/wiki/Blink_element) auf Wikipedia
- [WCAG 2.2.2: Pause, Stop, Verstecken](https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide)
- [WCAG 2.3.1: Drei Blitze oder unterhalb der Schwelle](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold)
