---
title: Interaction to Next Paint (INP)
slug: Glossary/Interaction_to_next_paint
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Interaction to Next Paint** (INP) misst die Reaktionsfähigkeit einer Website auf Benutzerinteraktionen (zum Beispiel, wenn sie auf einen Link klicken, auf einen Button tippen oder eine benutzerdefinierte, JavaScript-gesteuerte Steuerung verwenden).

INP wurde von Google als eine der [Core Web Vital](https://web.dev/articles/vitals)-Metriken entwickelt und ersetzt im Mai 2024 den {{Glossary("First_Input_Delay", "First Input Delay")}} (FID). Es gibt zwei wesentliche Unterschiede zwischen FID und INP, die INP zu einem zuverlässigeren Maß für die Reaktionsfähigkeit einer Seite machen:

- FID misst nur die erste Benutzerinteraktion, während INP alle Benutzerinteraktionen berücksichtigt.
- FID misst nur die Eingabeverzögerung der Interaktion, während INP für einen längeren Zeitraum misst: beginnend bei der Eingabeverzögerung, gefolgt von der Zeit, die zum Verarbeiten der Ereignishandler benötigt wird, und der Präsentationszeit des Browsers, bis der Browser den nächsten Frame gezeichnet hat.

INP misst die längste Zeitspanne (abzüglich einiger Ausreißer), in Millisekunden, zwischen der Benutzerinteraktion auf einer Webseite und der Präsentation des nächsten Frames, nachdem diese Interaktion verarbeitet wurde. Scrollen und Zoomen sind in dieser Metrik nicht enthalten. INP wird mit der [Event Timing API](/de/docs/Web/API/PerformanceEventTiming) berechnet. Asynchrone Operationen wie das Abrufen von Netzwerkanfragen oder Dateilesevorgänge verzögern INP in der Regel nicht, da das Rendern erfolgen kann, während solche Operationen behandelt werden.

Alle berechtigten Interaktionen während der gesamten Lebensdauer der Seite werden berücksichtigt. Für hoch interaktive Seiten mit 50 oder mehr Interaktionen wird das 98. Perzentil verwendet, um einige extreme Ausreißer auszuschließen, die die allgemeine Reaktionsfähigkeit der Seite nicht widerspiegeln.

Je länger die Verzögerung, desto schlechter die Benutzererfahrung. Die [Long Animation Frames API](/de/docs/Web/API/Performance_API/Long_animation_frame_timing) kann helfen, Ursachen für hohe INP-Werte zu identifizieren.

## Siehe auch

- [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [PerformanceEventTiming](/de/docs/Web/API/PerformanceEventTiming)
- [INP](https://web.dev/articles/inp) auf web.dev (2023)
- [Optimize Interaction to Next Paint](https://web.dev/articles/optimize-inp) auf web.dev (2023)
- [Interaction to Next Paint is officially a Core Web Vital](https://web.dev/blog/inp-cwv-launch) auf web.dev (2024)
