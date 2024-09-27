---
title: First input delay
slug: Glossary/First_input_delay
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**First input delay** (FID) misst die Zeitspanne von dem Moment, in dem ein Benutzer erstmals mit Ihrer Website interagiert (d. h. wenn er auf einen Link klickt, einen Button antippt oder eine benutzerdefinierte, JavaScript-gesteuerte Steuerung verwendet) bis zu dem Zeitpunkt, an dem der Browser tatsächlich in der Lage ist, auf diese Interaktion zu reagieren.

Es ist die Zeitspanne in Millisekunden zwischen der ersten Benutzerinteraktion auf einer Webseite und der Reaktion des Browsers auf diese Interaktion. Scrollen und Zoomen sind in dieser Metrik nicht eingeschlossen.

Die Zeit zwischen dem Rendern von Inhalten auf der Seite und dem Zeitpunkt, an dem die gesamte Funktionalität auf menschliche Interaktionen reagiert, variiert oft je nach Größe und Komplexität des JavaScripts, das heruntergeladen, geparst und im Haupt-Thread ausgeführt werden muss, sowie der Geschwindigkeit des Geräts oder deren Fehlen (denken Sie an mobile Geräte mit niedriger Ausstattung). Je länger die Verzögerung, desto schlechter die Benutzererfahrung. Die Reduzierung der Site-Initialisierungszeit und die Beseitigung von [langen Aufgaben](/de/docs/Web/API/PerformanceLongTaskTiming) können helfen, First Input Delays zu eliminieren.

## Siehe auch

- [requestIdleCallback](/de/docs/Web/API/Window/requestIdleCallback)
- [Lazy Loading](/de/docs/Web/Performance/Lazy_loading)
