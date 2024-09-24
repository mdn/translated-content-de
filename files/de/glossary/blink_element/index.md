---
title: blink-Element (<blink>-Tag)
slug: Glossary/blink_element
l10n:
  sourceCommit: a4b72d0683826e060f72a82b297b41e0b162d909
---

{{GlossarySidebar}}

Das **`<blink>`-Element** (blink-Tag) ist ein veraltetes HTML-Feature, das von Webbrowsern nicht mehr unterstützt und auf MDN nicht mehr dokumentiert wird. Es wurde verwendet, um Textinhalte ständig blinken zu lassen.

## Kurze Geschichte

In den frühen Tagen des Webs (Anfang bis Mitte der 90er Jahre) gab es nicht viele Möglichkeiten, Webseiten zu gestalten. Die [CSS](/de/docs/Web/CSS)-Spezifikation (Version 1) wurde erstmals 1996 veröffentlicht und erst viel später konsistent von Browsern übernommen. Vor CSS experimentierten Browser mit verschiedenen Features, um bestimmte Textabschnitte hervorzuheben und die Aufmerksamkeit des Benutzers zu erregen. Das `<blink>`-Element war eines dieser Features und wurde in frühen Versionen des [Netscape Navigator](/de/docs/Glossary/Netscape_Navigator) eingeführt; das {{htmlelement("marquee")}}-Element des [Internet Explorer](/de/docs/Glossary/Microsoft_Internet_Explorer) war ein anderes.

Das `<blink>`-Element entstand anscheinend nach einem Gespräch in einer Bar in Mountain View zwischen dem Netscape-Ingenieur [Lou Montulli](https://en.wikipedia.org/wiki/Lou_Montulli) und seinen Kollegen. Als er am nächsten Morgen ins Büro kam, stellte er fest, dass einer seiner Kollegen die ganze Nacht wach geblieben war und es implementiert hatte ([hier die Geschichte lesen](https://web.archive.org/web/20220331020029/http://www.montulli.org/theoriginofthe%3Cblink%3Etag)).

Obwohl es anfangs populär war, wurde `<blink>` wegen übermäßiger Verwendung stark kritisiert; viele Menschen fanden es störend. Wichtiger noch, es verschlechtert die Lesbarkeit und kann besonders problematisch für Benutzer mit Sehbehinderungen oder [kognitiven Störungen](/de/docs/Web/Accessibility/Cognitive_accessibility) wie Epilepsie oder ADHS sein. Es kann desorientierend sein oder im schlimmsten Fall sogar [Anfälle auslösen](/de/docs/Web/Accessibility/Seizure_disorders).

`<blink>` wurde nie richtig spezifiziert und erreichte nie signifikante Unterstützung über verschiedene Browser hinweg. Es kann als ein Stück Webgeschichte betrachtet werden.

## Syntax

Das `<blink>`-Element wurde folgendermaßen verwendet:

```html example-bad
<blink>In alten Browsern habe ich vielleicht geblinkt</blink>
```

### Alternativen

- Die CSS-{{cssxref("text-decoration-line")}}-Eigenschaft hat einen `blink`-Wert, der denselben Effekt haben sollte, aber die meisten modernen Browser ignorieren ihn.
- Die JavaScript-Methode {{jsxref("String.blink()")}} umschließt einen Textstring in `<blink></blink>`-Tags, wobei dieses Element, wie bereits erwähnt, nirgendwo mehr unterstützt wird.
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) könnten immer noch verwendet werden, um blinkenden Text zu erstellen. Sie sollten jedoch blinkenden Text auf Webseiten aus den oben genannten Gründen vermeiden.

## Siehe auch

- [Blink-Element](https://en.wikipedia.org/wiki/Blink_element) auf Wikipedia
- [WCAG 2.2.2: Pause, Stop, Hide](https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide)
- [WCAG 2.3.1: Drei Blitze oder unterhalb der Schwelle](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold)
