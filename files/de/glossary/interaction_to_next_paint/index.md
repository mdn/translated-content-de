---
title: Interaction to Next Paint (INP)
slug: Glossary/Interaction_to_next_paint
l10n:
  sourceCommit: 9548e8228e0872c244e3a0622ed0448139995ad6
---

**Interaction to Next Paint** (INP) misst die Reaktionsfähigkeit einer Website auf Benutzeraktionen (zum Beispiel, wenn sie einen Link anklicken, auf einen Button tippen oder eine benutzerdefinierte, JavaScript-gesteuerte Steuerung verwenden).

INP wurde von Google als eine der [Core Web Vital](https://web.dev/articles/vitals)-Metriken entwickelt und ersetzt ab Mai 2024 die {{Glossary("First_Input_Delay", "First Input Delay")}} (FID). Es gibt zwei wesentliche Unterschiede zwischen FID und INP, die INP zu einem zuverlässigeren Maß für die Reaktionsfähigkeit einer Seite machen:

- FID misst nur die erste Benutzerinteraktion, während INP alle Benutzerinteraktionen berücksichtigt.
- FID misst nur die Eingabeverzögerung der Interaktion, während INP über einen längeren Zeitraum misst: Beginnend bei der Eingabeverzögerung, gefolgt von der Zeit, die benötigt wird, um Ereignishandler zu verarbeiten, und der Präsentationszeit des Browsers bis der Browser den nächsten Frame gezeichnet hat.

INP misst die längste Zeitspanne (minus einiger Ausreißer) in Millisekunden zwischen der Benutzerinteraktion auf einer Webseite und der nächsten Bilddarstellung, nachdem diese Interaktion verarbeitet wurde. Scrollen und Zoomen sind in dieser Metrik nicht enthalten. INP wird unter Verwendung der [Event Timing API](/de/docs/Web/API/PerformanceEventTiming) berechnet. Asynchrone Operationen wie Netzwerkabfragen oder Dateilesen verzögern INP in der Regel nicht, da das Rendering stattfinden kann, während solche Operationen verarbeitet werden.

Alle geeigneten Interaktionen während der gesamten Lebensdauer der Seite werden berücksichtigt. Bei hochinteraktiven Seiten mit 50 oder mehr Interaktionen wird das 98. Perzentil verwendet, um extreme Ausreißer auszuschließen, die nicht die gesamte Reaktionsfähigkeit der Seite widerspiegeln. Der Wert [`Performance.interactionCount`](/de/docs/Web/API/Performance/interactionCount) kann verwendet werden, um die Anzahl der Interaktionen abzufragen und festzustellen, wann eine große Anzahl an Interaktionen auf einer Seite stattgefunden hat.

Je länger die Verzögerung, desto schlechter das Benutzererlebnis. Die [Long Animation Frames API](/de/docs/Web/API/Performance_API/Long_animation_frame_timing) kann dabei helfen, Ursachen für hohe INP-Werte zu identifizieren.

## Siehe auch

- [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [PerformanceEventTiming](/de/docs/Web/API/PerformanceEventTiming)
- [`Performance.interactionCount`](/de/docs/Web/API/Performance/interactionCount)
- [INP](https://web.dev/articles/inp) auf web.dev (2023)
- [Optimize Interaction to Next Paint](https://web.dev/articles/optimize-inp) auf web.dev (2023)
- [Interaction to Next Paint is officially a Core Web Vital](https://web.dev/blog/inp-cwv-launch) auf web.dev (2024)
