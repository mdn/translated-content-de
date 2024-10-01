---
title: Performance APIs
slug: Web/API/Performance_API
l10n:
  sourceCommit: 54962bbd1d367115cfd01b4e1ba6b552e8b68eb7
---

{{DefaultAPISidebar("Performance API")}}

Die Performance API ist eine Gruppe von Standards, die verwendet werden, um die Leistung von Webanwendungen zu messen.

## Konzepte und Nutzung

Um sicherzustellen, dass Webanwendungen schnell sind, ist es wichtig, verschiedene Leistungsmetriken zu messen und zu analysieren. Die Performance API bietet wichtige integrierte Metriken und die Möglichkeit, eigene Messungen zur Leistungstimeline des Browsers hinzuzufügen. Die Performance-Timeline enthält hochpräzise Zeitstempel und kann in Entwicklertools angezeigt werden. Sie können deren Daten auch an Analyse-Endpunkte senden, um Leistungsmetriken im Laufe der Zeit zu erfassen.

Jede Leistungsmetrik wird durch einen einzigen [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) repräsentiert. Ein Performance-Eintrag hat einen `name`, eine `duration`, eine `startTime` und einen `type`. Alle Leistungsmetriken erweitern die `PerformanceEntry`-Schnittstelle und qualifizieren sie weiter.

Die meisten der Leistungs-Einträge werden für Sie aufgezeichnet, ohne dass Sie etwas tun müssen, und sind dann entweder über [`Performance.getEntries()`](/de/docs/Web/API/Performance/getEntries) oder (vorzugsweise) über [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) zugänglich. Zum Beispiel werden [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)-Einträge für Ereignisse aufgezeichnet, die länger als ein festgelegter Schwellenwert dauern. Aber die Performance API ermöglicht es Ihnen auch, Ihre eigenen benutzerdefinierten Ereignisse zu definieren und aufzuzeichnen, indem Sie die Schnittstellen [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) und [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure) verwenden.

Die Hauptschnittstelle [`Performance`](/de/docs/Web/API/Performance) ist sowohl im [`Window`](/de/docs/Web/API/Window/performance) als auch im [`Worker`](/de/docs/Web/API/WorkerGlobalScope/performance) globalen Kontext verfügbar und ermöglicht es Ihnen, benutzerdefinierte Performance-Eintrags hinzuzufügen, Performance-Einträge zu löschen und Performance-Eintrags abzurufen.

Die Schnittstelle [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) ermöglicht es Ihnen, verschiedenen Arten von Performance-Einträgen zuzuhören, während sie aufgezeichnet werden.

Für weitere konzeptionelle Informationen sehen Sie sich die untenstehenden [Performance API-Leitfäden](#leitfäden) an.

![UML-Diagramm der Performance APIs](diagram.svg)

## Referenz

Die folgenden Schnittstellen sind in der Performance API vorhanden:

- [`EventCounts`](/de/docs/Web/API/EventCounts)
  - : Eine schreibgeschützte Map, die von [`performance.eventCounts`](/de/docs/Web/API/Performance/eventCounts) zurückgegeben wird und die Anzahl der Ereignisse enthält, die pro Ereignistyp gesendet wurden.
- [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)
  - : Misst die Renderzeit des größten Bildes oder Textblocks, der im Ansichtsfenster sichtbar ist, seit die Seite zu laden begonnen hat.
- [`LayoutShift`](/de/docs/Web/API/LayoutShift)
  - : Bietet Einblicke in die Layout-Stabilität von Webseiten basierend auf Bewegungen der Elemente auf der Seite.
- [`LayoutShiftAttribution`](/de/docs/Web/API/LayoutShiftAttribution)
  - : Bietet Debugging-Informationen zu Elementen, die sich verschoben haben.
- [`Performance`](/de/docs/Web/API/Performance)
  - : Hauptschnittstelle für den Zugriff auf Leistungs-Messungen. Verfügbar in Fenster- und Worker-Kontexten mithilfe von [`Window.performance`](/de/docs/Web/API/Window/performance) oder [`WorkerGlobalScope.performance`](/de/docs/Web/API/WorkerGlobalScope/performance).
- [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)
  - : Misst die Renderzeitstempel spezifischer Elemente.
- [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)
  - : Ein Eintrag in der Leistungstimeline, der eine einzelne Leistungsmetrik kapselt. Alle Leistungsmetriken erben von dieser Schnittstelle.
- [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)
  - : Misst die Latenz von Ereignissen und die erste Eingabeverzögerung (FID).
- [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)
  - : Bietet Metriken zu [langen Animationsbildern (LoAFs)](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#what_is_a_long_animation_frame), die das Rendern belegen und andere Aufgaben blockieren.
- [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)
  - : Bietet Metriken zu {{Glossary("Long_task", "langen Aufgaben")}}, die das Rendern belegen und andere Aufgaben blockieren.
- [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)
  - : Benutzerdefiniertes Zeichen für Ihren eigenen Eintrag auf der Leistungstimeline.
- [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)
  - : Benutzerdefinierte Zeitmessung zwischen zwei Leistungseinträgen.
- [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
  - : Misst Dokumentnavigationsereignisse, wie zum Beispiel die Dauer des Ladevorgangs eines Dokuments.
- [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)
  - : Hört auf neue Leistungseinträge, sobald sie in der Leistungstimeline aufgezeichnet werden.
- [`PerformanceObserverEntryList`](/de/docs/Web/API/PerformanceObserverEntryList)
  - : Liste von Einträgen, die in einem Performance-Beobachter beobachtet wurden.
- [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)
  - : Misst Render-Operationen während der Erstellung einer Webseite.
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)
  - : Misst Netzwerk-Lademetriken wie Umleitungs-Start- und Endzeiten, Fetch-Start, DNS-Lookup-Start- und Endzeiten, Antwort-Start- und Endzeiten für Ressourcen wie Bilder, Skripte, Fetch-Aufrufe usw.
- [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)
  - : Bietet Metriken zu einzelnen Skripten, die [lange Animationsbilder (LoAFs)](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#what_is_a_long_animation_frame) verursachen.
- [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)
  - : Präsentiert Servermetriken, die mit der Antwort im {{HTTPHeader("Server-Timing")}} HTTP-Header gesendet werden.
- [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming)
  - : Identifiziert die Art der Aufgabe und den Container, der für die lange Aufgabe verantwortlich ist.
- [`VisibilityStateEntry`](/de/docs/Web/API/VisibilityStateEntry)
  - : Misst das Timing von Änderungen des Seiten-Sichtbarkeitsstatus, d.h. wenn ein Tab vom Vordergrund in den Hintergrund wechselt oder umgekehrt.

## Leitfäden

Die folgenden Leitfäden helfen Ihnen, die wichtigsten Konzepte der Performance API zu verstehen und bieten einen Überblick über ihre Fähigkeiten:

- [Performance-Daten](/de/docs/Web/API/Performance_API/Performance_data): Sammeln, Zugreifen und Arbeiten mit Performance-Daten.
- [Hochpräzise Zeitmessung](/de/docs/Web/API/Performance_API/High_precision_timing): Messen mit hochpräzisen Zeiten und monotonen Uhren.
- [Ressourcen-Timing](/de/docs/Web/API/Performance_API/Resource_timing): Messen der Netzwerkzeitmessung für abgerufene Ressourcen, wie Bilder, CSS und JavaScript.
- [Navigationstiming](/de/docs/Web/API/Performance_API/Navigation_timing): Messen der Navigationstiming eines Dokuments.
- [Benutzer-Timing](/de/docs/Web/API/Performance_API/User_timing): Messen und Aufzeichnen von Leistungsdaten, die spezifisch für Ihre Anwendung sind.
- [Server-Timing](/de/docs/Web/API/Performance_API/Server_timing): Erfassen von serverseitigen Metriken.
- [Langes Animationsbild-Timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing): Erfassen von Metriken zu langen Animationsbildern (LoAFs) und ihren Ursachen.
- [Überwachen von bfcache-Blockierungsgründen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons): Bericht, warum das aktuelle Dokument daran gehindert wurde, den Back-/Forward-Cache zu verwenden ({{Glossary("bfcache", "bfcache")}}).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Web-Performance](/de/docs/Web/Performance)
- [Lernen: Web-Performance](/de/docs/Learn/Performance)
