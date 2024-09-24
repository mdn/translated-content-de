---
title: Erste Eingabeverzögerung
slug: Glossary/First_input_delay
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**First input delay** (FID) misst die Zeit, die vergeht, bis der Browser auf die erste Interaktion eines Benutzers mit Ihrer Website reagieren kann (z. B. wenn er auf einen Link klickt, auf einen Button tippt oder eine benutzerdefinierte, JavaScript-gesteuerte Steuerung verwendet).

Es ist die Zeitspanne in Millisekunden zwischen der ersten Benutzerinteraktion auf einer Webseite und der Reaktion des Browsers auf diese Interaktion. Scrollen und Zoomen sind in dieser Metrik nicht enthalten.

Die Zeit zwischen dem Zeitpunkt, an dem Inhalte auf der Seite dargestellt werden, und dem Zeitpunkt, an dem alle Funktionen auf menschliche Interaktionen reagieren können, variiert häufig je nach Größe und Komplexität des JavaScripts, das im Haupt-Thread heruntergeladen, geparst und ausgeführt werden muss, sowie je nach Geschwindigkeit des Geräts oder deren Fehlen (denken Sie an mobile Geräte mit niedriger Leistung). Je länger die Verzögerung, desto schlechter das Benutzererlebnis. Die Reduzierung der Initialisierungszeit der Seite und die Beseitigung von [long tasks](/de/docs/Web/API/PerformanceLongTaskTiming) können helfen, erste Eingabeverzögerungen zu vermeiden.

## Siehe auch

- [requestIdleCallback](/de/docs/Web/API/Window/requestIdleCallback)
- [Lazy Loading](/de/docs/Web/Performance/Lazy_loading)
