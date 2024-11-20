---
title: Interaction to Next Paint (INP)
slug: Glossary/Interaction_to_next_paint
l10n:
  sourceCommit: 0598721ab3f672c66a8357d9e6b27ec8644a2b21
---

{{GlossarySidebar}}

**Interaction to Next Paint** (INP) misst die Reaktionsfähigkeit einer Website auf Benutzerinteraktionen (zum Beispiel, wenn sie auf einen Link klicken, eine Schaltfläche antippen oder ein benutzerdefiniertes, JavaScript-gesteuertes Steuerelement verwenden).

INP wurde von Google als eine der [Core Web Vital](https://web.dev/articles/vitals)-Metriken entwickelt und ersetzt ab Mai 2024 die {{Glossary("First_Input_Delay", "First Input Delay")}} (FID). Es gibt zwei wesentliche Unterschiede zwischen FID und INP, die INP zu einer zuverlässigeren Messung der Reaktionsfähigkeit einer Seite machen:

- FID misst nur die erste Benutzerinteraktion, während INP alle Benutzerinteraktionen berücksichtigt.
- FID misst nur die Eingangsverzögerung der Interaktion, während INP über einen längeren Zeitraum misst: beginnend bei der Eingangsverzögerung, gefolgt von der Zeit, die benötigt wird, um Ereignis-Handler zu verarbeiten, und der Darstellung durch den Browser, bis der Browser den nächsten Frame gerendert hat.

INP misst die längste Zeitdauer (abzüglich einiger Ausreißer), in Millisekunden, zwischen der Benutzerinteraktion auf einer Webseite und der Präsentation des nächsten Frames nach der Verarbeitung dieser Interaktion. Scrollen und Zoomen sind nicht in dieser Metrik enthalten. INP wird unter Verwendung der [Event Timing API](/de/docs/Web/API/PerformanceEventTiming) berechnet. Asynchrone Vorgänge wie Netzwerkabfragen oder Dateilesen verzögern INP normalerweise nicht, da das Rendern erfolgen kann, während solche Vorgänge gehandhabt werden.

Alle berechtigten Interaktionen während der gesamten Lebensdauer der Seite werden berücksichtigt. Für hoch interaktive Seiten mit 50 oder mehr Interaktionen wird das 98te Perzentil verwendet, um einige extreme Ausreißer auszuschließen, die nicht die allgemeine Reaktionsfähigkeit der Seite widerspiegeln.

Je länger die Verzögerung, desto schlechter die Benutzererfahrung. Die [Long Animation Frames API](/de/docs/Web/API/Performance_API/Long_animation_frame_timing) kann helfen, Ursachen für hohe INP zu identifizieren.

## Siehe auch

- [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [PerformanceEventTiming](/de/docs/Web/API/PerformanceEventTiming)
- [INP](https://web.dev/articles/inp) auf web.dev (2023)
- [Optimizing INP](https://web.dev/articles/optimizing-inp) auf web.dev (2023)
- [Interaction to Next Paint is officially a Core Web Vital](https://web.dev/blog/inp-cwv-launch) auf web.dev (2024)
