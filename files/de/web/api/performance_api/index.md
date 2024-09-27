---
title: Performance APIs
slug: Web/API/Performance_API
l10n:
  sourceCommit: 54962bbd1d367115cfd01b4e1ba6b552e8b68eb7
---

{{DefaultAPISidebar("Performance API")}}

Die Performance-API ist eine Gruppe von Standards, die zur Messung der Leistung von Webanwendungen verwendet werden.

## Konzepte und Nutzung

Um sicherzustellen, dass Webanwendungen schnell sind, ist es wichtig, verschiedene Leistungskennzahlen zu messen und zu analysieren. Die Performance-API bietet wichtige integrierte Metriken und die Möglichkeit, eigene Messungen zur Leistungszeitachse des Browsers hinzuzufügen. Die Leistungszeitachse enthält hochpräzise Zeitstempel und kann in den Entwicklertools angezeigt werden. Sie können deren Daten auch an Analyseendpunkte senden, um Leistungskennzahlen über die Zeit zu erfassen.

Jede Leistungsmetrik wird durch einen einzelnen [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) dargestellt. Ein Performance-Eintrag hat einen `name`, eine `duration`, eine `startTime` und einen `type`. Alle Leistungsmetriken erweitern die `PerformanceEntry`-Schnittstelle und qualifizieren sie weiter.

Die meisten Performance-Einträge werden für Sie aufgezeichnet, ohne dass Sie etwas tun müssen, und sind dann entweder über [`Performance.getEntries()`](/de/docs/Web/API/Performance/getEntries) oder (vorzugsweise) über [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) zugänglich. Zum Beispiel werden [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)-Einträge für Ereignisse aufgezeichnet, die länger als ein festgelegter Schwellenwert dauern. Die Performance-API ermöglicht es Ihnen jedoch auch, eigene benutzerdefinierte Ereignisse zu definieren und aufzuzeichnen, indem Sie die Schnittstellen [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) und [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure) verwenden.

Die Hauptschnittstelle [`Performance`](/de/docs/Web/API/Performance) ist sowohl in den globalen Bereichen [`Window`](/de/docs/Web/API/Window/performance) als auch [`Worker`](/de/docs/Web/API/WorkerGlobalScope/performance) verfügbar und ermöglicht es Ihnen, benutzerdefinierte Leistungsdaten hinzuzufügen, Leistungsdaten zu löschen und Leistungsdaten abzurufen.

Die Schnittstelle [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) ermöglicht es Ihnen, verschiedenen Arten von Performance-Einträgen zuzuhören, während sie aufgezeichnet werden.

Weitere konzeptionelle Informationen finden Sie in den folgenden [Performance API Leitfäden](#leitfäden).

![UML-Diagramm der Performance-APIs](diagram.svg)

## Referenz

Die folgenden Schnittstellen sind in der Performance-API vorhanden:

- [`EventCounts`](/de/docs/Web/API/EventCounts)
  - : Eine schreibgeschützte Karte, die von [`performance.eventCounts`](/de/docs/Web/API/Performance/eventCounts) zurückgegeben wird und die Anzahl der Ereignisse enthält, die pro Ereignistyp gesendet wurden.
- [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)
  - : Misst die Renderzeit des größten Bildes oder Textblocks, der im Viewport sichtbar ist, aufgezeichnet ab dem Zeitpunkt, an dem die Seite zu laden beginnt.
- [`LayoutShift`](/de/docs/Web/API/LayoutShift)
  - : Bietet Einblicke in die Layout-Stabilität von Webseiten anhand der Bewegungen der Elemente auf der Seite.
- [`LayoutShiftAttribution`](/de/docs/Web/API/LayoutShiftAttribution)
  - : Bietet Debugging-Informationen über verschobene Elemente.
- [`Performance`](/de/docs/Web/API/Performance)
  - : Hauptschnittstelle zum Zugriff auf Leistungsdaten. Verfügbar in den Window- und Worker-Kontexten mit [`Window.performance`](/de/docs/Web/API/Window/performance) oder [`WorkerGlobalScope.performance`](/de/docs/Web/API/WorkerGlobalScope/performance).
- [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)
  - : Misst Rendering-Zeitstempel von spezifischen Elementen.
- [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)
  - : Ein Eintrag in der Leistungszeitachse, der eine einzelne Leistungsmetrik encapsuliert. Alle Leistungsmetriken erben von dieser Schnittstelle.
- [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)
  - : Misst Latenz von Ereignissen und Verzögerungen bei der ersten Eingabe (FID).
- [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)
  - : Bietet Metriken zu [langen Animationsbildern (LoAFs)](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#what_is_a_long_animation_frame), die das Rendering ausfüllen und andere Tasks daran hindern, ausgeführt zu werden.
- [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)
  - : Bietet Metriken zu [langen Aufgaben](/de/docs/Glossary/Long_task), die das Rendering ausfüllen und andere Aufgaben daran hindern, ausgeführt zu werden.
- [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)
  - : Benutzerdefinierter Marker für einen eigenen Eintrag in der Leistungszeitachse.
- [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)
  - : Benutzerdefinierte Zeitmessung zwischen zwei Leistungsdatenpunkten.
- [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
  - : Misst Dokumentnavigationsereignisse, wie lange es dauert, ein Dokument zu laden.
- [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)
  - : Hört auf neue Leistungsdaten, während sie in der Leistungszeitachse aufgezeichnet werden.
- [`PerformanceObserverEntryList`](/de/docs/Web/API/PerformanceObserverEntryList)
  - : Liste von Einträgen, die in einem Leistungsbeobachter beobachtet wurden.
- [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)
  - : Misst Renderoperationen während des Aufbaus einer Webseite.
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)
  - : Misst Netzwerk-Lade-Metriken wie Umleitungsstart- und -endzeiten, Abrufstart, DNS-Lookup-Start- und -Endzeiten, Antwortstart und -endzeiten für Ressourcen wie Bilder, Skripte, Fetch-Aufrufe usw.
- [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)
  - : Bietet Metriken zu einzelnen Skripten, die [lange Animationsbilder (LoAFs)](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#what_is_a_long_animation_frame) verursachen.
- [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)
  - : Zeigt Servermetriken an, die mit der Antwort im {{HTTPHeader("Server-Timing")}} HTTP-Header gesendet werden.
- [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming)
  - : Identifiziert den Aufgabentyp und den Container, der für die lange Aufgabe verantwortlich ist.
- [`VisibilityStateEntry`](/de/docs/Web/API/VisibilityStateEntry)
  - : Misst das Timing von Änderungen des Sichtbarkeitszustands der Seite, d.h. wenn ein Tab vom Vordergrund in den Hintergrund wechselt oder umgekehrt.

## Leitfäden

Die folgenden Leitfäden helfen Ihnen, die Hauptkonzepte der Performance-API zu verstehen, und bieten einen Überblick über ihre Fähigkeiten:

- [Leistungsdaten](/de/docs/Web/API/Performance_API/Performance_data): Sammeln, Zugreifen und Arbeiten mit Leistungsdaten.
- [Hochpräzise Zeitmessung](/de/docs/Web/API/Performance_API/High_precision_timing): Messen mit hochpräzisem Zeit- und monotonem Uhrwerk.
- [Ressourcentiming](/de/docs/Web/API/Performance_API/Resource_timing): Netzwerktiming für abgerufene Ressourcen wie Bilder, CSS und JavaScript messen.
- [Navigationstiming](/de/docs/Web/API/Performance_API/Navigation_timing): Navigationstiming eines Dokuments messen.
- [Nutzerdefiniertes Timing](/de/docs/Web/API/Performance_API/User_timing): Messung und Aufzeichnung von Leistungsdaten, die speziell für Ihre Anwendung sind.
- [Server-Timing](/de/docs/Web/API/Performance_API/Server_timing): Erfassen von serverseitigen Metriken.
- [Timing bei langen Animationsframes](/de/docs/Web/API/Performance_API/Long_animation_frame_timing): Sammeln von Metriken zu langen Animationsbildern (LoAFs) und deren Ursachen.
- [Überwachung von bfcache-Blockierungsgründen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons): Berichten darüber, warum das aktuelle Dokument daran gehindert wurde, den Back/Forward-Cache ([bfcache](/de/docs/Glossary/bfcache)) zu verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Web-Performance](/de/docs/Web/Performance)
- [Lernen: Web-Performance](/de/docs/Learn/Performance)
