---
title: First input delay
slug: Glossary/First_input_delay
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**First input delay** (FID) misst die Zeit, die von der ersten Interaktion eines Nutzers mit Ihrer Website (d.h. wenn sie auf einen Link klicken, einen Button antippen oder eine benutzerdefinierte, JavaScript-gesteuerte Steuerung verwenden) bis zu dem Zeitpunkt vergeht, an dem der Browser tatsächlich auf diese Interaktion reagieren kann.

Es ist die Zeitspanne in Millisekunden zwischen der ersten Nutzerinteraktion auf einer Webseite und der Reaktion des Browsers auf diese Interaktion. Scrollen und Zoomen sind in dieser Metrik nicht enthalten.

Die Zeit zwischen dem Zeitpunkt, an dem der Inhalt auf die Seite gerendert wird, und dem Zeitpunkt, an dem alle Funktionen für menschliche Interaktion ansprechbar werden, variiert häufig basierend auf der Größe und Komplexität des JavaScripts, das heruntergeladen, geparst und im Haupt-Thread ausgeführt werden muss, sowie der Geschwindigkeit des Geräts oder deren Fehlen (denken Sie an mobile Geräte mit geringerer Leistung). Je länger die Verzögerung, desto schlechter die Benutzererfahrung. Die Reduzierung der Initialisierungszeit der Website und das Beseitigen von [langen Aufgaben](/de/docs/Web/API/PerformanceLongTaskTiming) können dazu beitragen, die Verzögerungen der ersten Eingabe zu verringern.

## Siehe auch

- [requestIdleCallback](/de/docs/Web/API/Window/requestIdleCallback)
- [Lazy Loading](/de/docs/Web/Performance/Lazy_loading)
