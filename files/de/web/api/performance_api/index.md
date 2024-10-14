---
title: Performance APIs
slug: Web/API/Performance_API
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{DefaultAPISidebar("Performance API")}}{{AvailableInWorkers}}

Die Performance API ist eine Gruppe von Standards zur Messung der Leistung von Webanwendungen.

## Konzepte und Verwendung

Um sicherzustellen, dass Webanwendungen schnell sind, ist es wichtig, verschiedene Leistungskennzahlen zu messen und zu analysieren. Die Performance API bietet wichtige eingebaute Metriken und die Möglichkeit, eigene Messungen zur Browser-Performance-Zeitleiste hinzuzufügen. Die Performance-Zeitleiste enthält hochpräzise Zeitstempel und kann in den Entwicklerwerkzeugen angezeigt werden. Sie können deren Daten auch an Analyse-Endpunkte senden, um Performance-Metriken über die Zeit hinweg aufzuzeichnen.

Jede Leistungsmetrik wird durch einen einzelnen [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) dargestellt. Ein Performance-Eintrag hat einen `name`, eine `duration`, eine `startTime` und einen `type`. Alle Leistungsmetriken erweitern die `PerformanceEntry`-Schnittstelle und definieren sie weiter.

Die meisten Performance-Einträge werden für Sie aufgezeichnet, ohne dass Sie etwas tun müssen, und sind dann entweder über [`Performance.getEntries()`](/de/docs/Web/API/Performance/getEntries) oder (vorzugsweise) über [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) zugänglich. Zum Beispiel werden [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)-Einträge für Ereignisse aufgezeichnet, die länger als eine bestimmte Schwelle dauern. Aber die Performance API ermöglicht es Ihnen auch, eigene benutzerdefinierte Ereignisse zu definieren und aufzuzeichnen, indem Sie die Schnittstellen [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) und [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure) verwenden.

Die Hauptschnittstelle [`Performance`](/de/docs/Web/API/Performance) ist sowohl in den globalen Scopes [`Window`](/de/docs/Web/API/Window/performance) als auch [`Worker`](/de/docs/Web/API/WorkerGlobalScope/performance) verfügbar und ermöglicht es Ihnen, benutzerdefinierte Performance-Einträge hinzuzufügen, Performance-Einträge zu löschen und Performance-Einträge abzurufen.

Die Schnittstelle [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) ermöglicht es Ihnen, verschiedenen Arten von Performance-Einträgen zu lauschen, während sie aufgezeichnet werden.

Für weitere konzeptionelle Informationen siehe die [Performance API-Leitfäden](#leitfäden) unten.

![UML-Diagramm der Performance-APIs](diagram.svg)

## Referenz

Die folgenden Schnittstellen sind in der Performance API enthalten:

- [`EventCounts`](/de/docs/Web/API/EventCounts)
  - : Eine schreibgeschützte Karte, die von [`performance.eventCounts`](/de/docs/Web/API/Performance/eventCounts) zurückgegeben wird und die Anzahl der pro Ereignistyp gesendeten Ereignisse enthält.
- [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)
  - : Misst die Renderzeit des größten sichtbaren Bildes oder Textblocks innerhalb des Ansichtsfensters, aufgezeichnet ab dem Zeitpunkt, an dem die Seite zu laden beginnt.
- [`LayoutShift`](/de/docs/Web/API/LayoutShift)
  - : Bietet Einblicke in die Layoutstabilität von Webseiten basierend auf Bewegungen der Elemente auf der Seite.
- [`LayoutShiftAttribution`](/de/docs/Web/API/LayoutShiftAttribution)
  - : Bietet Debug-Informationen über Elemente, die sich verschoben haben.
- [`NotRestoredReasonDetails`](/de/docs/Web/API/NotRestoredReasonDetails)
  - : Repräsentiert einen einzelnen Grund, warum eine navigierte Seite daran gehindert wurde, den Zurück-Weiter-Cache ({{Glossary("bfcache", "bfcache")}}) zu verwenden.
- [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)
  - : Bietet Berichtsdatensätze, die Gründe enthalten, warum das aktuelle Dokument daran gehindert wurde, den Zurück-Weiter-Cache ({{Glossary("bfcache", "bfcache")}}) bei der Navigation zu verwenden.
- [`Performance`](/de/docs/Web/API/Performance)
  - : Hauptschnittstelle zum Zugriff auf Leistungs-Messungen. Verfügbar in Fenster- und Worker-Kontexten mit [`Window.performance`](/de/docs/Web/API/Window/performance) oder [`WorkerGlobalScope.performance`](/de/docs/Web/API/WorkerGlobalScope/performance).
- [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)
  - : Misst die Renderzeitstempel spezifischer Elemente.
- [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)
  - : Ein Eintrag in der Performance-Zeitleiste, der eine einzelne Leistungsmetrik kapselt. Alle Leistungsmetriken erben von dieser Schnittstelle.
- [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)
  - : Misst die Latenz von Ereignissen und die Verzögerung der ersten Eingabe (FID).
- [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)
  - : Bietet Metriken zu [langen Animationsbildern (LoAFs)](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#what_is_a_long_animation_frame), die Rendering belegen und andere Aufgaben blockieren.
- [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)
  - : Bietet Metriken zu {{Glossary("Long_task", "langen Aufgaben (Long Tasks)")}}, die Rendering belegen und andere Aufgaben blockieren.
- [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)
  - : Benutzerdefinierter Marker für Ihren eigenen Eintrag in der Performance-Zeitleiste.
- [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)
  - : Benutzerdefinierte Zeitmessung zwischen zwei Performance-Einträgen.
- [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
  - : Misst Ereignisse der Dokumentennavigation, zum Beispiel wie lange es dauert, ein Dokument zu laden.
- [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)
  - : Lauscht für neue Performance-Einträge, während diese in der Performance-Zeitleiste erfasst werden.
- [`PerformanceObserverEntryList`](/de/docs/Web/API/PerformanceObserverEntryList)
  - : Liste der Einträge, die in einem Performance-Observer beobachtet wurden.
- [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)
  - : Misst Renderoperationen während des Baus einer Webseite.
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)
  - : Misst Netzwerk-Lademetriken wie Zeitpunkte für den Anfang und das Ende von Umleitungen, den Beginn von Abrufen, den Beginn und das Ende von DNS-Lookups, Beginn und Ende von Antworten für Ressourcen wie Bilder, Skripte, Abruf-Aufrufe usw.
- [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)
  - : Bietet Metriken zu einzelnen Skripten, die [lange Animationsbilder (LoAFs)](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#what_is_a_long_animation_frame) verursachen.
- [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)
  - : Stellt Servermetriken dar, die mit der Antwort im {{HTTPHeader("Server-Timing")}} HTTP-Header gesendet werden.
- [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming)
  - : Identifiziert die Art der Aufgabe und das Container-Element, das für die lange Aufgabe verantwortlich ist.
- [`VisibilityStateEntry`](/de/docs/Web/API/VisibilityStateEntry)
  - : Misst die Timing-Änderungen des Sichtbarkeitsstatus der Seite, d.h., wenn ein Tab vom Vordergrund in den Hintergrund wechselt oder umgekehrt.

## Leitfäden

Die folgenden Leitfäden helfen Ihnen, die wichtigsten Konzepte der Performance API zu verstehen und geben einen Überblick über ihre Fähigkeiten:

- [Performance-Daten](/de/docs/Web/API/Performance_API/Performance_data): Erfassung, Zugriff und Arbeit mit Leistungsdaten.
- [Präzise Zeitmessung](/de/docs/Web/API/Performance_API/High_precision_timing): Messen mit hochpräzisen Zeit- und monotonen Uhren.
- [Ressourcen-Timing](/de/docs/Web/API/Performance_API/Resource_timing): Messung der Netzwerklastzeiten für abgerufene Ressourcen wie Bilder, CSS und JavaScript.
- [Navigationstiming](/de/docs/Web/API/Performance_API/Navigation_timing): Messung der Navigationstiming eines Dokuments.
- [Benutzer-Timing](/de/docs/Web/API/Performance_API/User_timing): Messen und Aufzeichnen von Leistungsdaten, die speziell für Ihre Anwendung sind.
- [Server-Timing](/de/docs/Web/API/Performance_API/Server_timing): Erfassung von serverseitigen Metriken.
- [Timing langer Animationsbilder](/de/docs/Web/API/Performance_API/Long_animation_frame_timing): Erfassung von Metriken zu langen Animationsbildern (LoAFs) und deren Ursachen.
- [Überwachung von Gründen für die Blockierung des bfcache](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons): Berichterstattung darüber, warum das aktuelle Dokument daran gehindert wurde, den Zurück-Weiter-Cache ({{Glossary("bfcache", "bfcache")}}) zu verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Web-Leistung](/de/docs/Web/Performance)
- [Lernen: Web-Leistung](/de/docs/Learn/Performance)
