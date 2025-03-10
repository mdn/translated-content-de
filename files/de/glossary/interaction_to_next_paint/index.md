---
title: Interaction to Next Paint (INP)
slug: Glossary/Interaction_to_next_paint
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{GlossarySidebar}}

**Interaction to Next Paint** (INP) misst die Reaktionsfähigkeit einer Website auf Benutzerinteraktionen (zum Beispiel, wenn sie auf einen Link klicken, einen Button antippen oder ein benutzerdefiniertes, JavaScript-gesteuertes Steuerungselement verwenden).

INP wurde von Google als eine der [Core Web Vital](https://web.dev/articles/vitals)-Metriken entwickelt und ersetzt {{Glossary("First_Input_Delay", "First Input Delay")}} (FID) im Mai 2024. Es gibt zwei wesentliche Unterschiede zwischen FID und INP, die INP zu einem zuverlässigeren Maß für die Reaktionsfähigkeit einer Seite machen:

- FID misst nur die erste Benutzerinteraktion, während INP alle Benutzerinteraktionen berücksichtigt.
- FID misst nur die Eingabeverzögerung der Interaktion, während INP über einen längeren Zeitraum misst: beginnend bei der Eingabeverzögerung, gefolgt von der Zeit, die zur Verarbeitung der Ereignishandler benötigt wird, und der Präsentationszeit des Browsers, bis der Browser den nächsten Frame gemalt hat.

INP misst die längste Zeitdauer (abzüglich einiger Ausreißer), in Millisekunden, zwischen der Benutzerinteraktion auf einer Webseite und der Präsentation des nächsten Frames nach der Verarbeitung dieser Interaktion. Scrollen und Zoomen sind in dieser Metrik nicht enthalten. INP wird unter Verwendung der [Event Timing API](/de/docs/Web/API/PerformanceEventTiming) berechnet. Asynchrone Operationen wie Netzwerkzugriffe oder Dateilesen verzögern INP in der Regel nicht, da das Malen während der Bearbeitung solcher Operationen erfolgen kann.

Alle geeigneten Interaktionen während der gesamten Lebensdauer der Seite werden berücksichtigt. Für hochinteraktive Seiten mit 50 oder mehr Interaktionen wird das 98. Perzentil verwendet, um einige extreme Ausreißer auszuschließen, die nicht repräsentativ für die allgemeine Reaktionsfähigkeit der Seite sind.

Je länger die Verzögerung, desto schlechter die Benutzererfahrung. Die [Long Animation Frames API](/de/docs/Web/API/Performance_API/Long_animation_frame_timing) kann helfen, Ursachen für hohe INP zu identifizieren.

## Siehe auch

- [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [PerformanceEventTiming](/de/docs/Web/API/PerformanceEventTiming)
- [INP](https://web.dev/articles/inp) auf web.dev (2023)
- [Optimize Interaction to Next Paint](https://web.dev/articles/optimize-inp) auf web.dev (2023)
- [Interaction to Next Paint is officially a Core Web Vital](https://web.dev/blog/inp-cwv-launch) auf web.dev (2024)
