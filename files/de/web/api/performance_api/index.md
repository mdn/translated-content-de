---
title: Performance APIs
slug: Web/API/Performance_API
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{DefaultAPISidebar("Performance API")}}{{AvailableInWorkers}}

Die Performance-API ist eine Gruppe von Standards, die verwendet werden, um die Leistung von Webanwendungen zu messen.

## Konzepte und Verwendung

Um sicherzustellen, dass Webanwendungen schnell sind, ist es wichtig, verschiedene Leistungskennzahlen zu messen und zu analysieren. Die Performance-API bietet wichtige integrierte Metriken und die Möglichkeit, eigene Messungen zur Leistungstimeline des Browsers hinzuzufügen. Die Leistungstimeline enthält hochpräzise Zeitstempel und kann in Entwickler-Tools angezeigt werden. Sie können deren Daten auch an Analyse-Endpunkte senden, um Leistungskennzahlen im Laufe der Zeit zu protokollieren.

Jede Leistungskennzahl wird durch einen einzelnen [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) dargestellt. Ein Leistungs-Eintrag hat einen `name`, eine `duration`, eine `startTime` und einen `type`. Alle Leistungskennzahlen erweitern das `PerformanceEntry`-Interface und qualifizieren es weiter.

Die meisten der Leistungseinträge werden für Sie aufgezeichnet, ohne dass Sie etwas tun müssen, und sind entweder über [`Performance.getEntries()`](/de/docs/Web/API/Performance/getEntries) oder (bevorzugt) über [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) zugänglich. Zum Beispiel werden [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)-Einträge für Ereignisse aufgezeichnet, die länger als ein festgelegter Schwellenwert dauern. Aber die Performance-API ermöglicht es Ihnen auch, eigene benutzerdefinierte Ereignisse zu definieren und aufzuzeichnen, indem Sie die Schnittstellen [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) und [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure) verwenden.

Die Hauptschnittstelle [`Performance`](/de/docs/Web/API/Performance) ist sowohl in den globalen Bereichen [`Window`](/de/docs/Web/API/Window/performance) als auch [`Worker`](/de/docs/Web/API/WorkerGlobalScope/performance) verfügbar und ermöglicht es Ihnen, benutzerdefinierte Leistungseinträge hinzuzufügen, Leistungseinträge zu löschen und Leistungseinträge abzurufen.

Die Schnittstelle [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) ermöglicht es Ihnen, verschiedenen Arten von Leistungseinträgen zuzuhören, sobald sie aufgezeichnet werden.

Für weitere konzeptionelle Informationen siehe die [Leitfäden zur Performance-API](#leitfäden) unten.

![UML-Diagramm der Performance-APIs](diagramm.svg)

## Referenz

Die folgenden Schnittstellen sind in der Performance-API vorhanden:

- [`EventCounts`](/de/docs/Web/API/EventCounts)
  - : Eine schreibgeschützte Abbildung, die von [`performance.eventCounts`](/de/docs/Web/API/Performance/eventCounts) zurückgegeben wird und die Anzahl der Ereignisse enthält, die pro Ereignistyp gesendet wurden.
- [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)
  - : Misst die Renderzeit des größten sichtbaren Bildes oder Textblocks innerhalb des Viewports, aufgezeichnet ab dem Zeitpunkt, an dem die Seite anfängt zu laden.
- [`LayoutShift`](/de/docs/Web/API/LayoutShift)
  - : Bietet Einblicke in die Layoutstabilität von Webseiten basierend auf Bewegungen der Elemente auf der Seite.
- [`LayoutShiftAttribution`](/de/docs/Web/API/LayoutShiftAttribution)
  - : Bietet Debug-Informationen über Elemente, die sich verschoben haben.
- [`NotRestoredReasonDetails`](/de/docs/Web/API/NotRestoredReasonDetails)
  - : Repräsentiert einen einzelnen Grund, warum eine navigierte Seite daran gehindert wurde, den Back/Forward-Cache ({{Glossary("bfcache", "bfcache")}}) zu nutzen.
- [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)
  - : Bietet Berichtsdaten mit Gründen, warum das aktuelle Dokument daran gehindert wurde, den Back/Forward-Cache ({{Glossary("bfcache", "bfcache")}}) bei der Navigation zu nutzen.
- [`Performance`](/de/docs/Web/API/Performance)
  - : Hauptschnittstelle zum Zugriff auf Leistungsdaten. Verfügbar in Fenster- und Worker-Kontexten über [`Window.performance`](/de/docs/Web/API/Window/performance) oder [`WorkerGlobalScope.performance`](/de/docs/Web/API/WorkerGlobalScope/performance).
- [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)
  - : Misst Rendering-Zeitstempel spezifischer Elemente.
- [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)
  - : Ein Eintrag in der Leistungstimeline, der eine einzelne Leistungskennzahl einkapselt. Alle Leistungskennzahlen erben von diesem Interface.
- [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)
  - : Misst Latenz von Ereignissen und {{Glossary("Interaction_to_Next_Paint", "Interaction to Next Paint")}} (INP).
- [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)
  - : Bietet Metriken zu [langen Animationsbildern (LoAFs)](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#what_is_a_long_animation_frame), die das Rendering auslasten und andere Aufgaben blockieren.
- [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)
  - : Bietet Metriken zu {{Glossary("Long_task", "langen Aufgaben")}}, die das Rendering auslasten und andere Aufgaben blockieren.
- [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)
  - : Benutzerdefinierter Marker für Ihren eigenen Eintrag in der Leistungstimeline.
- [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)
  - : Benutzerdefinierte Zeitmessung zwischen zwei Leistungseinträgen.
- [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
  - : Misst Dokumentnavigationsereignisse, wie die Zeit, die benötigt wird, um ein Dokument zu laden.
- [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)
  - : Lauscht auf neue Leistungseinträge, sobald sie in der Leistungstimeline aufgezeichnet werden.
- [`PerformanceObserverEntryList`](/de/docs/Web/API/PerformanceObserverEntryList)
  - : Liste von Einträgen, die in einem Performance Observer beobachtet wurden.
- [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)
  - : Misst Render-Operationen während des Aufbaus einer Webseite.
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)
  - : Misst Netzwerk-Lademetriken wie Redirect-Start- und Endzeiten, Fetch-Start, DNS-Lookup-Start- und Endzeiten, Antwort-Start- und Endzeiten für Ressourcen wie Bilder, Skripte, Fetch-Aufrufe usw.
- [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)
  - : Bietet Metriken zu einzelnen Skripten, die [lange Animationsbilder (LoAFs)](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#what_is_a_long_animation_frame) verursachen.
- [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)
  - : Zeigt Servermetriken an, die mit der Antwort im {{HTTPHeader("Server-Timing")}} HTTP-Header gesendet werden.
- [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming)
  - : Identifiziert den Aufgabentyp und den Container, der für die lange Aufgabe verantwortlich ist.
- [`VisibilityStateEntry`](/de/docs/Web/API/VisibilityStateEntry)
  - : Misst das Timing von Änderungen des Sichtbarkeitsstatus der Seite, d.h. wenn ein Tab von Vordergrund zu Hintergrund oder umgekehrt wechselt.

## Leitfäden

Die folgenden Leitfäden helfen Ihnen, die Schlüsselkonzepte der Performance-API zu verstehen und bieten einen Überblick über ihre Fähigkeiten:

- [Leistungsdaten](/de/docs/Web/API/Performance_API/Performance_data): Sammeln, Zugreifen und Arbeiten mit Leistungsdaten.
- [Hochpräzisions-Timing](/de/docs/Web/API/Performance_API/High_precision_timing): Messen mit hochpräzisen Zeit- und monotonen Uhren.
- [Ressourcen-Timing](/de/docs/Web/API/Performance_API/Resource_timing): Messen von Netzwerk-Timing für abgerufene Ressourcen wie Bilder, CSS und JavaScript.
- [Navigations-Timing](/de/docs/Web/API/Performance_API/Navigation_timing): Messen des Navigations-Timings eines Dokuments.
- [Benutzerdefiniertes Timing](/de/docs/Web/API/Performance_API/User_timing): Messen und Aufzeichnen von Leistungsdaten, die spezifisch für Ihre Anwendung sind.
- [Server-Timing](/de/docs/Web/API/Performance_API/Server_timing): Sammeln von serverseitigen Metriken.
- [Langes Animationsbilder-Timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing): Sammeln von Metriken zu langen Animationsbildern (LoAFs) und deren Ursachen.
- [Überwachen von bfcache-Blockierungsgründen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons): Bericht über Gründe, warum das aktuelle Dokument daran gehindert wurde, den Back/Forward-Cache ({{Glossary("bfcache", "bfcache")}}) zu nutzen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Webleistung](/de/docs/Web/Performance)
- [Lernen: Webleistung](/de/docs/Learn_web_development/Extensions/Performance)
