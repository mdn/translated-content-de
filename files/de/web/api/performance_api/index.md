---
title: Performance APIs
slug: Web/API/Performance_API
l10n:
  sourceCommit: 0598721ab3f672c66a8357d9e6b27ec8644a2b21
---

{{DefaultAPISidebar("Performance API")}}{{AvailableInWorkers}}

Die Performance-API ist eine Gruppe von Standards, die verwendet werden, um die Leistung von Webanwendungen zu messen.

## Konzepte und Nutzung

Um sicherzustellen, dass Webanwendungen schnell sind, ist es wichtig, verschiedene Leistungsmetriken zu messen und zu analysieren. Die Performance-API bietet wichtige integrierte Metriken und die Möglichkeit, eigene Messungen zur Leistungstimeline des Browsers hinzuzufügen. Die Leistungstimeline enthält hochpräzise Zeitstempel und kann in den Entwicklerwerkzeugen angezeigt werden. Sie können die Daten auch an Analyse-Endpunkte senden, um Leistungsmetriken über die Zeit aufzuzeichnen.

Jede Leistungsmetrik wird durch einen einzelnen [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) dargestellt. Ein Leistungseintrag hat einen `name`, eine `duration`, eine `startTime` und einen `type`. Alle Leistungsmetriken erweitern das `PerformanceEntry`-Interface und qualifizieren es weiter.

Die meisten Leistungseinträge werden für Sie aufgezeichnet, ohne dass Sie etwas tun müssen, und sind dann entweder über [`Performance.getEntries()`](/de/docs/Web/API/Performance/getEntries) oder (vorzugsweise) über [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) zugänglich. Zum Beispiel werden [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)-Einträge für Ereignisse aufgezeichnet, die länger als ein festgelegter Schwellenwert dauern. Aber die Performance-API ermöglicht es Ihnen auch, eigene benutzerdefinierte Ereignisse zu definieren und aufzuzeichnen, indem Sie die [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) und [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)-Interfaces verwenden.

Das Haupt-Interface [`Performance`](/de/docs/Web/API/Performance) ist sowohl im [`Window`](/de/docs/Web/API/Window/performance) als auch im [`Worker`](/de/docs/Web/API/WorkerGlobalScope/performance) globalen Kontext verfügbar und ermöglicht es Ihnen, benutzerdefinierte Leistungseinträge hinzuzufügen, Leistungseinträge zu löschen und Leistungseinträge abzurufen.

Das [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) Interface ermöglicht es Ihnen, verschiedene Arten von Leistungseinträgen zu hören, sobald sie aufgezeichnet werden.

Für weitere konzeptionelle Informationen, siehe die [Performance-API-Leitfäden](#leitfäden) unten.

![UML-Diagramm der Performance-APIs](diagram.svg)

## Referenz

Die folgenden Interfaces sind in der Performance-API vorhanden:

- [`EventCounts`](/de/docs/Web/API/EventCounts)
  - : Eine schreibgeschützte Karte, die von [`performance.eventCounts`](/de/docs/Web/API/Performance/eventCounts) zurückgegeben wird und die Anzahl der Events enthält, die pro Event-Typ versendet wurden.
- [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)
  - : Misst die Renderzeit des größten Bildes oder Textblocks, der im sichtbaren Bereich zu sehen ist, aufgezeichnet ab dem Zeitpunkt, an dem die Seite zu laden beginnt.
- [`LayoutShift`](/de/docs/Web/API/LayoutShift)
  - : Bietet Einblicke in die Layout-Stabilität von Webseiten basierend auf Bewegungen der Elemente auf der Seite.
- [`LayoutShiftAttribution`](/de/docs/Web/API/LayoutShiftAttribution)
  - : Liefert Debug-Informationen über Elemente, die sich verschoben haben.
- [`NotRestoredReasonDetails`](/de/docs/Web/API/NotRestoredReasonDetails)
  - : Repräsentiert einen einzelnen Grund, warum eine navigierte Seite daran gehindert wurde, den Back-/Forward-Cache ({{Glossary("bfcache", "bfcache")}}) zu verwenden.
- [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)
  - : Bietet Berichtsinformationen, die die Gründe enthalten, warum das aktuelle Dokument an der Verwendung des Back-/Forward-Caches ({{Glossary("bfcache", "bfcache")}}) bei der Navigation gehindert wurde.
- [`Performance`](/de/docs/Web/API/Performance)
  - : Haupt-Interface zum Zugriff auf Leistungsmaße. Verfügbar für Fenster- und Worker-Kontexte über [`Window.performance`](/de/docs/Web/API/Window/performance) oder [`WorkerGlobalScope.performance`](/de/docs/Web/API/WorkerGlobalScope/performance).
- [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)
  - : Misst Rendering-Zeitstempel spezifischer Elemente.
- [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)
  - : Ein Eintrag in der Leistungstimeline, der eine einzelne Leistungsmetrik umschließt. Alle Leistungsmetriken erben von diesem Interface.
- [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)
  - : Misst die Latenz von Ereignissen und {{Glossary("Interaction_to_Next_Paint", "Interaction to Next Paint")}} (INP).
- [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)
  - : Liefert Metriken zu [long animation frames (LoAFs)](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#what_is_a_long_animation_frame), die das Rendering beanspruchen und andere Aufgaben blockieren.
- [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)
  - : Liefert Metriken zu {{Glossary("Long_task", "long tasks")}}, die das Rendering beanspruchen und andere Aufgaben blockieren.
- [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)
  - : Benutzerdefinierte Markierung für Ihren eigenen Eintrag in der Leistungstimeline.
- [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)
  - : Benutzerdefinierte Zeitmessung zwischen zwei Leistungseinträgen.
- [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
  - : Misst Dokumentnavigations-Ereignisse, wie lange es dauert, ein Dokument zu laden.
- [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)
  - : Hört auf neue Leistungseinträge, während sie in der Leistungstimeline aufgezeichnet werden.
- [`PerformanceObserverEntryList`](/de/docs/Web/API/PerformanceObserverEntryList)
  - : Liste von Einträgen, die in einem Performance Observer beobachtet wurden.
- [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)
  - : Misst Render-Operationen während des Aufbaus einer Webseite.
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)
  - : Misst Netzwerk-Ladezeiten wie Redirect-Start- und Endzeiten, Fetch-Start, DNS-Lookup-Start- und Endzeiten, Antwort-Start- und Endzeiten für Ressourcen wie Bilder, Skripte, Fetch-Aufrufe etc.
- [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)
  - : Liefert Metriken zu individuellen Skripten, die [long animation frames (LoAFs)](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#what_is_a_long_animation_frame) verursachen.
- [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)
  - : Zeigt Servermetriken an, die mit der Antwort im {{HTTPHeader("Server-Timing")}} HTTP-Header gesendet werden.
- [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming)
  - : Identifiziert den Typ der Aufgabe und den Container, der für die lange Aufgabe verantwortlich ist.
- [`VisibilityStateEntry`](/de/docs/Web/API/VisibilityStateEntry)
  - : Misst das Timing von Änderungen des Sichtbarkeitsstatus einer Seite, d.h. wenn ein Tab vom Vordergrund in den Hintergrund wechselt oder umgekehrt.

## Leitfäden

Die folgenden Leitfäden helfen Ihnen, die Schlüsselkonzepte der Performance-API zu verstehen und bieten einen Überblick über deren Fähigkeiten:

- [Performance-Daten](/de/docs/Web/API/Performance_API/Performance_data): Sammeln, Zugreifen und Arbeiten mit Leistungsdaten.
- [Hochpräzise Zeitmessung](/de/docs/Web/API/Performance_API/High_precision_timing): Messen mit hochpräzisen Zeit- und monotonen Uhren.
- [Ressourcen-Timing](/de/docs/Web/API/Performance_API/Resource_timing): Messen von Netzwerktimings für abgerufene Ressourcen, wie Bilder, CSS und JavaScript.
- [Navigationstiming](/de/docs/Web/API/Performance_API/Navigation_timing): Messen der Navigationszeit eines Dokuments.
- [Benutzerdefiniertes Timing](/de/docs/Web/API/Performance_API/User_timing): Messen und Aufzeichnen von Leistungsdaten, die auf Ihre Anwendung zugeschnitten sind.
- [Server-Timing](/de/docs/Web/API/Performance_API/Server_timing): Sammeln von Server-seitigen Metriken.
- [Timing langer Animationsrahmen](/de/docs/Web/API/Performance_API/Long_animation_frame_timing): Sammeln von Metriken zu langen Animationsrahmen (LoAFs) und deren Ursachen.
- [Überwachung von Gründen, die bfcache blockieren](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons): Berichterstattung darüber, warum das aktuelle Dokument an der Nutzung des Back-/Forward-Caches ({{Glossary("bfcache", "bfcache")}}) gehindert wurde.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Web-Performance](/de/docs/Web/Performance)
- [Lernen: Web-Performance](/de/docs/Learn/Performance)
