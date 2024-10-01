---
title: blink-Element (<blink>-Tag)
slug: Glossary/blink_element
l10n:
  sourceCommit: a4b72d0683826e060f72a82b297b41e0b162d909
---

{{GlossarySidebar}}

Das **`<blink>`-Element** (blink-Tag) ist ein veraltetes HTML-Feature, das von Webbrowsern nicht mehr unterstützt wird und nicht mehr auf MDN dokumentiert ist. Es wurde verwendet, um Textinhalte kontinuierlich blinken zu lassen (auf- und abblinken).

## Kurze Geschichte

In den frühen Web-Tagen (Anfang bis Mitte der 90er Jahre) gab es nicht viele Funktionen zur Gestaltung von Webseiten. Die [CSS](/de/docs/Web/CSS)-Spezifikation (Version 1) wurde erstmals 1996 veröffentlicht und erst viel später einheitlich von Browsern übernommen. Vor CSS experimentierten Browser mit verschiedenen Funktionen, um bestimmte Textabschnitte hervorzuheben und bei Bedarf die Aufmerksamkeit der Benutzer zu erregen. Das `<blink>`-Element war eines dieser Merkmale, das in frühen Versionen von {{Glossary("Netscape_Navigator", "Netscape Navigator")}} eingeführt wurde; das {{htmlelement("marquee")}}-Element von {{Glossary("Microsoft_Internet_Explorer", "Internet Explorer")}} war ein weiteres.

Das `<blink>`-Element entstand angeblich nach einem Gespräch in einer Bar in Mountain View zwischen dem Netscape-Ingenieur [Lou Montulli](https://en.wikipedia.org/wiki/Lou_Montulli) und seinen Kollegen. Als er am nächsten Morgen ins Büro kam, stellte er fest, dass einer seiner Kollegen die ganze Nacht damit verbracht hatte, es zu implementieren ([die Geschichte hier lesen](https://web.archive.org/web/20220331020029/http://www.montulli.org/theoriginofthe%3Cblink%3Etag)).

Obwohl es anfänglich populär war, wurde `<blink>` wegen übermäßiger Nutzung stark kritisiert; viele Menschen fanden es nervig. Wichtiger ist jedoch, dass es die Lesbarkeit beeinträchtigt und insbesondere für Benutzer mit Sehbehinderungen oder [kognitiven Störungen](/de/docs/Web/Accessibility/Cognitive_accessibility) wie Epilepsie oder ADHS problematisch sein kann. Es kann desorientierend sein oder im schlimmsten Fall sogar [Anfälle auslösen](/de/docs/Web/Accessibility/Seizure_disorders).

`<blink>` wurde nie richtig spezifiziert und hat nie eine bedeutende plattformübergreifende Unterstützung erreicht. Es kann als ein Stück Web-Geschichte betrachtet werden.

## Syntax

Das `<blink>`-Element wurde folgendermaßen verwendet:

```html example-bad
<blink>In ancient browsers, I may have blinked</blink>
```

### Alternativen

- Die CSS-Eigenschaft {{cssxref("text-decoration-line")}} hat einen `blink`-Wert, der den gleichen Effekt haben sollte, aber die meisten modernen Browser ignorieren ihn.
- Die JavaScript-Methode {{jsxref("String.blink()")}} umschließt eine Textzeichenfolge in `<blink></blink>`-Tags, aber wie bereits erwähnt, wird dieses Element inzwischen nirgendwo mehr unterstützt.
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) könnten weiterhin verwendet werden, um blinkenden Text zu erstellen. Sie sollten jedoch aus den oben genannten Gründen auf blinkenden Text auf Webseiten verzichten.

## Siehe auch

- [Blink-Element](https://en.wikipedia.org/wiki/Blink_element) auf Wikipedia
- [WCAG 2.2.2: Anhalten, Stoppen, Ausblenden](https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide)
- [WCAG 2.3.1: Drei Blitze oder darunter Schwelle](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold)
