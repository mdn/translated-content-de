---
title: Performance APIs
slug: Web/API/Performance_API
l10n:
  sourceCommit: 2a563c927890794b513523649ccfbbe48d336465
---

{{DefaultAPISidebar("Performance API")}}{{AvailableInWorkers}}

Die Performance API ist eine Gruppe von Standards zur Messung der Leistung von Webanwendungen.

## Konzepte und Verwendung

Damit Webanwendungen schnell sind, ist es wichtig, verschiedene Leistungsmetriken zu messen und zu analysieren. Die Performance API bietet wichtige integrierte Metriken und die Möglichkeit, eigene Messungen zur Performance-Zeitleiste des Browsers hinzuzufügen. Die Performance-Zeitleiste enthält hochpräzise Zeitstempel und kann in den Entwicklertools angezeigt werden. Sie können ihre Daten auch an Analyse-Endpunkte senden, um Leistungsmetriken im Zeitverlauf zu erfassen.

Jede Leistungsmetrik wird durch einen einzelnen [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) dargestellt. Ein Performance-Eintrag hat einen `name`, eine `duration`, eine `startTime` und einen `type`. Alle Leistungsmetriken erweitern das Interface `PerformanceEntry` und spezifizieren es genauer.

Die meisten Performance-Einträge werden automatisch erfasst, ohne dass Sie etwas dafür tun müssen. Anschließend können Sie entweder über [`Performance.getEntries()`](/de/docs/Web/API/Performance/getEntries) oder vorzugsweise über [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) darauf zugreifen. Beispielsweise werden [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)-Einträge für Ereignisse erfasst, die länger als einen festgelegten Schwellenwert dauern. Mit der Performance API können Sie über die Interfaces [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) und [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure) aber auch eigene Ereignisse definieren und erfassen.

Das zentrale Interface [`Performance`](/de/docs/Web/API/Performance) ist sowohl im globalen Gültigkeitsbereich von [`Window`](/de/docs/Web/API/Window/performance) als auch von [`Worker`](/de/docs/Web/API/WorkerGlobalScope/performance) verfügbar. Damit können Sie eigene Performance-Einträge hinzufügen, Performance-Einträge löschen und Performance-Einträge abrufen.

Mit dem Interface [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) können Sie auf verschiedene Arten von Performance-Einträgen reagieren, während diese erfasst werden.

Weitere Informationen zu den Konzepten finden Sie in den [Leitfäden zur Performance API](#leitfäden) weiter unten.

![UML-Diagramm der Performance-APIs](diagram.svg)

## Referenz

Die folgenden Interfaces gehören zur Performance API:

- [`EventCounts`](/de/docs/Web/API/EventCounts)
  - : Eine schreibgeschützte Map, die von [`performance.eventCounts`](/de/docs/Web/API/Performance/eventCounts) zurückgegeben wird und die Anzahl der ausgelösten Ereignisse pro Ereignistyp enthält.
- [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint) {{Experimental_Inline}}
  - : Misst die Rendering-Zeit von {{Glossary("contentful_paint", "Contentful Paints")}}, die einer Interaktion zugeordnet sind.
- [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)
  - : Misst die Rendering-Zeit des größten Bildes oder Textblocks, der im Viewport sichtbar ist, ab dem Beginn des Seitenladevorgangs.
- [`LayoutShift`](/de/docs/Web/API/LayoutShift) {{Experimental_Inline}}
  - : Liefert anhand der Bewegungen von Elementen auf der Seite Einblicke in die Layoutstabilität von Webseiten.
- [`LayoutShiftAttribution`](/de/docs/Web/API/LayoutShiftAttribution) {{Experimental_Inline}}
  - : Liefert Debugging-Informationen zu Elementen, die sich verschoben haben. Diese Informationen sind über [`LayoutShift`](/de/docs/Web/API/LayoutShift)-Einträge verfügbar.
- [`NotRestoredReasonDetails`](/de/docs/Web/API/NotRestoredReasonDetails) {{Experimental_Inline}}
  - : Stellt einen einzelnen Grund dar, warum eine Seite bei der Navigation den Back/Forward Cache ({{Glossary("bfcache", "bfcache")}}) nicht verwenden konnte. Diese Information ist über [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Einträge verfügbar.
- [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons) {{Experimental_Inline}}
  - : Stellt Berichtsdaten mit Gründen bereit, warum das aktuelle Dokument bei der Navigation den Back/Forward Cache ({{Glossary("bfcache", "bfcache")}}) nicht verwenden konnte. Diese Daten sind über [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Einträge verfügbar.
- [`Performance`](/de/docs/Web/API/Performance)
  - : Zentrales Interface für den Zugriff auf Leistungsmessungen. Es ist in Window- und Worker-Kontexten über [`Window.performance`](/de/docs/Web/API/Window/performance) beziehungsweise [`WorkerGlobalScope.performance`](/de/docs/Web/API/WorkerGlobalScope/performance) verfügbar.
- [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming) {{Experimental_Inline}}
  - : Misst Rendering-Zeitstempel bestimmter Container mit mehreren Elementen.
- [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) {{Experimental_Inline}}
  - : Misst Rendering-Zeitstempel bestimmter Elemente.
- [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)
  - : Ein Eintrag auf der Performance-Zeitleiste, der eine einzelne Leistungsmetrik enthält. Alle Leistungsmetriken erben von diesem Interface.
- [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)
  - : Misst die Latenz von Ereignissen und {{Glossary("Interaction_to_Next_Paint", "Interaction to Next Paint")}} (INP).
- [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming) {{Experimental_Inline}}
  - : Liefert Metriken zu [langen Animationsframes (LoAFs)](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#what_is_a_long_animation_frame), die Rendering-Kapazität beanspruchen und die Ausführung anderer Aufgaben blockieren.
- [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming) {{Experimental_Inline}}
  - : Liefert Metriken zu {{Glossary("Long_task", "langen Aufgaben")}}, die Rendering-Kapazität beanspruchen und die Ausführung anderer Aufgaben blockieren.
- [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)
  - : Benutzerdefinierte Markierung für einen eigenen Eintrag auf der Performance-Zeitleiste.
- [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)
  - : Benutzerdefinierte Zeitmessung zwischen zwei Performance-Einträgen.
- [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
  - : Misst Ereignisse bei der Navigation zu einem Dokument, beispielsweise wie lange das Laden eines Dokuments dauert.
- [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)
  - : Reagiert auf neue Performance-Einträge, sobald sie auf der Performance-Zeitleiste erfasst werden.
- [`PerformanceObserverEntryList`](/de/docs/Web/API/PerformanceObserverEntryList)
  - : Liste der Einträge, die von einem Performance Observer beobachtet wurden.
- [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)
  - : Misst Rendering-Vorgänge beim Aufbau einer Webseite.
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)
  - : Misst Netzwerk-Ladezeiten, etwa Start- und Endzeiten von Weiterleitungen, den Beginn des Abrufs, Start- und Endzeiten von DNS-Abfragen sowie Start- und Endzeiten der Antwort für Ressourcen wie Bilder, Skripte und Fetch-Aufrufe.
- [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming) {{Experimental_Inline}}
  - : Liefert Metriken zu einzelnen Skripten, die [lange Animationsframes (LoAFs)](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#what_is_a_long_animation_frame) verursachen.
- [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)
  - : Macht Servermetriken zugänglich, die mit der Antwort im HTTP-Header {{HTTPHeader("Server-Timing")}} gesendet werden. Sie sind über [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)- und [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Einträge verfügbar.
- [`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation) {{Experimental_Inline}}
  - : Misst, wann {{Glossary("Soft_Navigation", "Soft Navigations")}} stattfinden.
- [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming) {{Experimental_Inline}}
  - : Identifiziert den Aufgabentyp und den Container, die für eine {{Glossary("long_task", "lange Aufgabe")}} verantwortlich sind. Diese Informationen sind über [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)-Einträge verfügbar.
- [`VisibilityStateEntry`](/de/docs/Web/API/VisibilityStateEntry)
  - : Misst den Zeitpunkt von Änderungen des Sichtbarkeitsstatus einer Seite, also wann ein Tab vom Vordergrund in den Hintergrund wechselt oder umgekehrt.

## Leitfäden

Die folgenden Leitfäden erläutern wichtige Konzepte der Performance API und geben einen Überblick über ihre Möglichkeiten:

- [Performance-Daten](/de/docs/Web/API/Performance_API/Performance_data): Leistungsdaten erfassen, abrufen und verwenden.
- [Hochpräzise Zeitmessung](/de/docs/Web/API/Performance_API/High_precision_timing): Messungen mit hochpräzisen Zeitangaben und monotonen Uhren durchführen.
- [Zeitmessung für Ressourcen](/de/docs/Web/API/Performance_API/Resource_timing): Netzwerkzeiten für abgerufene Ressourcen wie Bilder, CSS und JavaScript messen.
- [Zeitmessung für Navigationen](/de/docs/Web/API/Performance_API/Navigation_timing): Zeitabläufe bei der Navigation zu einem Dokument messen.
- [Benutzerdefinierte Zeitmessung](/de/docs/Web/API/Performance_API/User_timing): Anwendungsspezifische Leistungsdaten messen und erfassen.
- [Serverseitige Zeitmessung](/de/docs/Web/API/Performance_API/Server_timing): Serverseitige Metriken erfassen.
- [Zeitmessung für lange Animationsframes](/de/docs/Web/API/Performance_API/Long_animation_frame_timing): Metriken zu langen Animationsframes (LoAFs) und ihren Ursachen erfassen.
- [Gründe für die Blockierung des bfcache überwachen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons): Gründe erfassen, warum das aktuelle Dokument den Back/Forward Cache ({{Glossary("bfcache", "bfcache")}}) nicht verwenden konnte.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Web-Performance](/de/docs/Web/Performance)
- [Lernen: Web-Performance](/de/docs/Learn_web_development/Extensions/Performance)
