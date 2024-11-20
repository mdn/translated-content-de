---
title: First Input Delay (FID)
slug: Glossary/First_input_delay
l10n:
  sourceCommit: 0598721ab3f672c66a8357d9e6b27ec8644a2b21
---

{{GlossarySidebar}}

**First Input Delay** (FID) misst die Zeit von dem Moment, in dem ein Benutzer zuerst mit Ihrer Website interagiert (zum Beispiel, wenn er auf einen Link klickt, auf einen Button tippt oder eine benutzerdefinierte, JavaScript-gesteuerte Steuerung verwendet) bis zum Moment, in dem der Browser tatsächlich in der Lage ist, auf diese Interaktion zu reagieren.

> [!WARNING]
> FID wurde von Google als eine der [Core Web Vital](https://web.dev/articles/vitals) Metriken entwickelt, aber wurde [im Mai 2024](https://web.dev/blog/inp-cwv-launch) durch {{Glossary("Interaction_to_Next_Paint", "Interaction to Next Paint")}} (INP) ersetzt.

Es ist die Zeitdauer in Millisekunden zwischen der ersten Benutzerinteraktion auf einer Webseite und der Reaktion des Browsers auf diese Interaktion. Scrollen und Zoomen sind in dieser Metrik nicht enthalten.

Die Zeit zwischen dem Moment, in dem Inhalte auf der Seite dargestellt werden, und dem Moment, in dem alle Funktionen auf menschliche Interaktionen reagieren, variiert oft basierend auf der Größe und Komplexität des JavaScripts, das heruntergeladen, geparst und im Haupt-Thread ausgeführt werden muss, und auf der Geräteleistung oder deren Fehlen (denken Sie an leistungsschwache mobile Geräte). Je länger die Verzögerung, desto schlechter das Benutzererlebnis. Die Reduzierung der Initialisierungszeit der Website und die Beseitigung von [langen Aufgaben](/de/docs/Web/API/PerformanceLongTaskTiming) können helfen, die ersten Eingabeverzögerungen zu beseitigen.

## Siehe auch

- [Interaction to Next Paint is officially a Core Web Vital](https://web.dev/blog/inp-cwv-launch) auf web.dev (2024)
