---
title: First Input Delay (FID)
slug: Glossary/First_input_delay
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**First Input Delay** (FID) misst die Zeit vom ersten Benutzer-Interaktion mit Ihrer Website (z. B. wenn ein Link angeklickt, ein Button gedrückt oder eine benutzerdefinierte, JavaScript-gesteuerte Steuerung verwendet wird) bis zu dem Zeitpunkt, an dem der Browser tatsächlich darauf reagieren kann.

> [!WARNING]
> FID wurde von Google als eine der [Core Web Vitals](https://web.dev/articles/vitals) Metriken entwickelt, aber [im Mai 2024](https://web.dev/blog/inp-cwv-launch) durch {{Glossary("Interaction_to_Next_Paint", "Interaction to Next Paint")}} (INP) ersetzt.

Es ist die Zeitspanne, in Millisekunden, zwischen der ersten Interaktion eines Benutzers auf einer Webseite und der Reaktion des Browsers auf diese Interaktion. Scrollen und Zoomen sind in dieser Metrik nicht enthalten.

Die Zeitspanne zwischen dem Zeitpunkt, zu dem der Inhalt auf der Seite dargestellt wird, und dem Zeitpunkt, zu dem alle Funktionen auf menschliche Interaktionen ansprechen, variiert oft je nach Größe und Komplexität des JavaScripts, das heruntergeladen, geparst und im Hauptthread ausgeführt werden muss, sowie je nach Geschwindigkeit oder Mangel an Geschwindigkeit des Geräts (denken Sie an mobile Geräte mit niedriger Leistung). Je länger die Verzögerung, desto schlechter ist das Benutzererlebnis. Wenn Sie die Initialisierungszeit der Website reduzieren und [lange Aufgaben](/de/docs/Web/API/PerformanceLongTaskTiming) eliminieren, können Sie Verzögerungen bei der ersten Eingabezeit verhindern.

## Siehe auch

- [Interaction to Next Paint is officially a Core Web Vital](https://web.dev/blog/inp-cwv-launch) auf web.dev (2024)
