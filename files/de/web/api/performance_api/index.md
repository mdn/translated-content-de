---
title: Performance APIs
slug: Web/API/Performance_API
l10n:
  sourceCommit: c9b973e5cf1f5d5b282eb4eb49cddcc044ce7e2b
---

{{DefaultAPISidebar("Performance API")}}{{AvailableInWorkers}}

Die Performance-API ist eine Gruppe von Standards, die zur Messung der Leistung von Webanwendungen verwendet werden.

## Konzepte und Nutzung

Um sicherzustellen, dass Webanwendungen schnell sind, ist es wichtig, verschiedene Leistungsmetriken zu messen und zu analysieren. Die Performance-API bietet wichtige integrierte Metriken und die Möglichkeit, eigene Messungen zur Leistungstimeline des Browsers hinzuzufügen. Die Leistungstimeline enthält hochpräzise Zeitstempel und kann in den Developer-Tools angezeigt werden. Sie können deren Daten auch an Analyseendpunkte senden, um Leistungsmetriken im Laufe der Zeit aufzuzeichnen.

Jede Leistungskennzahl wird durch einen einzelnen [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) dargestellt. Ein Performance-Eintrag hat einen `name`, eine `duration`, eine `startTime` und einen `type`. Alle Leistungsmetriken erweitern das `PerformanceEntry`-Interface und qualifizieren es weiter.

Die meisten Performance-Einträge werden für Sie aufgezeichnet, ohne dass Sie etwas unternehmen müssen, und sind dann entweder über [`Performance.getEntries()`](/de/docs/Web/API/Performance/getEntries) oder (vorzugsweise) über den [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) zugänglich. Zum Beispiel werden [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)-Einträge für Ereignisse aufgezeichnet, die länger als ein festgelegter Grenzwert dauern. Die Performance-API ermöglicht es Ihnen jedoch auch, eigene benutzerdefinierte Ereignisse mit den [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)- und [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)-Interfaces zu definieren und aufzuzeichnen.

Das Haupt-[`Performance`](/de/docs/Web/API/Performance)-Interface ist sowohl im [`Window`](/de/docs/Web/API/Window/performance) als auch im [`Worker`](/de/docs/Web/API/WorkerGlobalScope/performance)-globalen Bereich verfügbar und ermöglicht es Ihnen, benutzerdefinierte Performance-Einträge hinzuzufügen, Performance-Einträge zu löschen und Performance-Einträge abzurufen.

Das [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Interface ermöglicht es Ihnen, auf verschiedene Arten von Performance-Einträgen zu lauschen, wenn sie aufgezeichnet werden.

Für weitere konzeptionelle Informationen siehe die untenstehenden [Performance-API-Leitfäden](#leitfäden).

![UML-Diagramm der Performance-APIs](diagram.svg)

## Referenz

Die folgenden Schnittstellen sind in der Performance-API vorhanden:

- [`EventCounts`](/de/docs/Web/API/EventCounts)
  - : Eine schreibgeschützte Map, die von [`performance.eventCounts`](/de/docs/Web/API/Performance/eventCounts) zurückgegeben wird und die Anzahl der Ereignisse enthält, die pro Ereignistyp ausgelöst wurden.
- [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint) {{Experimental_Inline}}
  - : Misst die Renderzeit von {{Glossary("contentful_paint", "contentful paints")}}, die einer Interaktion zugeordnet sind.
- [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)
  - : Misst die Renderzeit des größten Bildes oder Textblocks, der innerhalb des Viewports sichtbar ist und aufgezeichnet wird, ab wann die Seite zu laden beginnt.
- [`LayoutShift`](/de/docs/Web/API/LayoutShift) {{Experimental_Inline}}
  - : Bietet Einblicke in die Layout-Stabilität von Webseiten basierend auf den Bewegungen der Elemente auf der Seite.
- [`LayoutShiftAttribution`](/de/docs/Web/API/LayoutShiftAttribution) {{Experimental_Inline}}
  - : Bietet Debug-Informationen über Elemente, die sich verschoben haben. Dies ist verfügbar durch [`LayoutShift`](/de/docs/Web/API/LayoutShift)-Einträge.
- [`NotRestoredReasonDetails`](/de/docs/Web/API/NotRestoredReasonDetails) {{Experimental_Inline}}
  - : Repräsentiert einen einzelnen Grund, warum eine navigierte Seite daran gehindert wurde, den Vorwärts/Rückwärts-Cache ({{Glossary("bfcache", "bfcache")}}) zu verwenden. Verfügbar über [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Einträge.
- [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons) {{Experimental_Inline}}
  - : Liefert Berichtsdaten, die Gründe enthalten, warum das aktuelle Dokument daran gehindert wurde, den Vorwärts/Rückwärts-Cache ({{Glossary("bfcache", "bfcache")}}) bei der Navigation zu verwenden. Verfügbar über [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Einträge.
- [`Performance`](/de/docs/Web/API/Performance)
  - : Hauptschnittstelle, um auf Leistungsmaßnahmen zuzugreifen. Verfügbar für Fenster- und Worker-Kontexte mit [`Window.performance`](/de/docs/Web/API/Window/performance) oder [`WorkerGlobalScope.performance`](/de/docs/Web/API/WorkerGlobalScope/performance).
- `PerformanceContainerTiming` {{ experimental_inline }}
  - : Misst Rendering-Zeitstempel spezifischer Container mehrerer Elemente.
- [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) {{Experimental_Inline}}
  - : Misst Rendering-Zeitstempel bestimmter Elemente.
- [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)
  - : Ein Eintrag in der Leistungstimeline, der eine einzelne Leistungskennzahl verkapselt. Alle Leistungskennzahlen erben von diesem Interface.
- [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)
  - : Misst Latenzzeiten von Ereignissen und {{Glossary("Interaction_to_Next_Paint", "Interaction to Next Paint")}} (INP).
- [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming) {{Experimental_Inline}}
  - : Liefert Metriken zu [langen Animationsbildern (LoAFs)](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#what_is_a_long_animation_frame), die das Rendering besetzen und andere Aufgaben blockieren.
- [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming) {{Experimental_Inline}}
  - : Liefert Metriken zu {{Glossary("Long_task", "langen Aufgaben")}}, die das Rendering besetzen und andere Aufgaben blockieren.
- [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)
  - : Benutzerdefinierter Marker für Ihren eigenen Eintrag auf der Leistungstimeline.
- [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)
  - : Benutzerdefinierte Zeitmessung zwischen zwei Leistungseinträgen.
- [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
  - : Misst Dokumentnavigationsereignisse, wie lange es dauert, ein Dokument zu laden.
- [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)
  - : Lauscht auf neue Leistungseinträge, wenn sie in der Leistungstimeline aufgezeichnet werden.
- [`PerformanceObserverEntryList`](/de/docs/Web/API/PerformanceObserverEntryList)
  - : Liste der Einträge, die in einem Performance-Observer beobachtet wurden.
- [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)
  - : Misst Render-Operationen während des Aufbaus einer Webseite.
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)
  - : Misst Netzwerklade-Metriken wie die Start- und Endzeiten von Weiterleitungen, den Beginn des Abrufs, die Start- und Endzeiten der DNS-Auflösung, Start- und Endzeiten der Antwort für Ressourcen wie Bilder, Skripte, Abrufaufrufe usw.
- [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming) {{Experimental_Inline}}
  - : Liefert Metriken zu einzelnen Skripten, die [lange Animationsbilder (LoAFs)](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#what_is_a_long_animation_frame) verursachen.
- [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)
  - : Stellt Servermetriken bereit, die mit der Antwort im {{HTTPHeader("Server-Timing")}} HTTP-Header gesendet werden. Dies ist verfügbar über [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) und [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Einträge.
- [`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation) {{Experimental_Inline}}
  - : Misst, wann {{Glossary("Soft_Navigation", "Soft Navigations")}} auftreten.
- [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming) {{Experimental_Inline}}
  - : Identifiziert den Typ der Aufgabe und den Container, der für eine {{Glossary("long_task", "lange Aufgabe")}} verantwortlich ist. Dies ist verfügbar durch [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)-Einträge.
- [`VisibilityStateEntry`](/de/docs/Web/API/VisibilityStateEntry)
  - : Misst das Timing von Änderungen des Seiten-Sichtbarkeitszustands, d.h. wann ein Tab vom Vordergrund in den Hintergrund oder umgekehrt wechselt.

## Leitfäden

Die folgenden Leitfäden helfen Ihnen, die Schlüsselkonzepte der Performance-API zu verstehen und bieten einen Überblick über ihre Fähigkeiten:

- [Leistungsdaten](/de/docs/Web/API/Performance_API/Performance_data): Sammeln, Zugreifen und Arbeiten mit Leistungsdaten.
- [Hochpräzise Zeitmessung](/de/docs/Web/API/Performance_API/High_precision_timing): Messen mit hochpräziser Zeit und monotonen Uhren.
- [Ressourcen-Timing](/de/docs/Web/API/Performance_API/Resource_timing): Messen der Netzwerkauslastung für abgerufene Ressourcen wie Bilder, CSS und JavaScript.
- [Navigations-Timing](/de/docs/Web/API/Performance_API/Navigation_timing): Messen der Navigationsdauer eines Dokuments.
- [Benutzerdefiniertes Timing](/de/docs/Web/API/Performance_API/User_timing): Messen und Aufzeichnen von Leistungsdaten, die speziell für Ihre Anwendung relevant sind.
- [Server-Timing](/de/docs/Web/API/Performance_API/Server_timing): Sammeln von serverseitigen Metriken.
- [Langes Animationszeit-Frame-Timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing): Sammeln von Metriken zu langen Animationsbildern (LoAFs) und ihren Ursachen.
- [Überwachung von bfcache-Blockierungsgründen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons): Berichterstattung darüber, warum das aktuelle Dokument daran gehindert wurde, den Vorwärts/Rückwärts-Cache ({{Glossary("bfcache", "bfcache")}}) zu verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Web-Performance](/de/docs/Web/Performance)
- [Lernen: Web-Performance](/de/docs/Learn_web_development/Extensions/Performance)
