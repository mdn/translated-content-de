---
title: Performance APIs
slug: Web/API/Performance_API
l10n:
  sourceCommit: 04301fa08caba25ce0fc17ea80e35383aa3361c0
---

{{DefaultAPISidebar("Performance API")}}

Die Performance-API ist eine Gruppe von Standards, die zur Messung der Leistung von Webanwendungen verwendet werden.

## Konzepte und Verwendung

Um sicherzustellen, dass Webanwendungen schnell sind, ist es wichtig, verschiedene Leistungskennzahlen zu messen und zu analysieren. Die Performance-API bietet wichtige eingebaute Messwerte und die Möglichkeit, eigene Messungen zur Leistungstimeline des Browsers hinzuzufügen. Die Leistungstimeline enthält hochpräzise Zeitstempel und kann in den Entwicklertools angezeigt werden. Sie können deren Daten auch an Analyseendpunkte senden, um Leistungskennzahlen im Laufe der Zeit zu protokollieren.

Jede Leistungskennzahl wird durch einen einzelnen [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) dargestellt. Ein Performance-Entry hat einen `name`, eine `duration`, eine `startTime` und einen `type`. Alle Leistungsmetriken erweitern die `PerformanceEntry`-Schnittstelle und qualifizieren sie weiter.

Die meisten Performance-Entries werden für Sie aufgezeichnet, ohne dass Sie etwas tun müssen, und sind dann entweder über [`Performance.getEntries()`](/de/docs/Web/API/Performance/getEntries) oder (vorzugsweise) über [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) zugänglich. Zum Beispiel werden [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)-Einträge für Ereignisse aufgezeichnet, die länger als ein festgelegter Schwellenwert dauern. Die Performance-API ermöglicht es Ihnen jedoch auch, eigene benutzerdefinierte Ereignisse zu definieren und aufzuzeichnen, indem Sie die Schnittstellen [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) und [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure) verwenden.

Die Hauptschnittstelle [`Performance`](/de/docs/Web/API/Performance) ist sowohl im [`Window`](/de/docs/Web/API/Window/performance) als auch im [`Worker`](/de/docs/Web/API/WorkerGlobalScope/performance) globalen Gültigkeitsbereich verfügbar und ermöglicht es Ihnen, benutzerdefinierte Performance-Einträge hinzuzufügen, Performance-Einträge zu löschen und Performance-Einträge abzurufen.

Die [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Schnittstelle ermöglicht es Ihnen, verschiedenen Typen von Performance-Einträgen zuzuhören, während sie aufgezeichnet werden.

Für weitere konzeptionelle Informationen siehe die [Performance-API-Leitfäden](#leitfäden) unten.

![UML-Diagramm der Performance-APIs](diagram.svg)

## Referenz

Die folgenden Schnittstellen sind in der Performance-API vorhanden:

- [`EventCounts`](/de/docs/Web/API/EventCounts)
  - : Eine schreibgeschützte Karte, die von [`performance.eventCounts`](/de/docs/Web/API/Performance/eventCounts) zurückgegeben wird und die Anzahl der pro Ereignistyp ausgelösten Ereignisse enthält.
- [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)
  - : Misst die Renderzeit des größten Bildes oder Textblocks, der im Ansichtsfenster sichtbar ist, und wird ab dem Beginn des Ladevorgangs der Seite aufgezeichnet.
- [`LayoutShift`](/de/docs/Web/API/LayoutShift)
  - : Bietet Einblicke in die Layoutstabilität von Webseiten basierend auf der Bewegung der Elemente auf der Seite.
- [`LayoutShiftAttribution`](/de/docs/Web/API/LayoutShiftAttribution)
  - : Liefert Debugging-Informationen zu Elementen, die sich verschoben haben.
- [`NotRestoredReasonDetails`](/de/docs/Web/API/NotRestoredReasonDetails)
  - : Repräsentiert einen einzelnen Grund, warum eine navigierte Seite daran gehindert wurde, den Rückwärts-/Vorwärts-Cache ({{Glossary("bfcache", "bfcache")}}) zu verwenden.
- [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)
  - : Liefert Berichtsdaten, die Gründe enthalten, warum das aktuelle Dokument daran gehindert wurde, den Rückwärts-/Vorwärts-Cache ({{Glossary("bfcache", "bfcache")}}) bei der Navigation zu verwenden.
- [`Performance`](/de/docs/Web/API/Performance)
  - : Hauptschnittstelle für den Zugriff auf Leistungskennzahlen. Verfügbar in Fenster- und Worker-Kontexten unter Verwendung von [`Window.performance`](/de/docs/Web/API/Window/performance) oder [`WorkerGlobalScope.performance`](/de/docs/Web/API/WorkerGlobalScope/performance).
- [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)
  - : Misst Render-Zeitstempel bestimmter Elemente.
- [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)
  - : Ein Eintrag auf der Leistungstimeline, der eine einzelne Leistungskennzahl zusammenfasst. Alle Leistungskennzahlen leiten sich von dieser Schnittstelle ab.
- [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)
  - : Misst die Latenz von Ereignissen und die Verzögerung der ersten Eingabe (FID).
- [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)
  - : Bietet Kennzahlen zu [langen Animationsbildern (LoAFs)](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#what_is_a_long_animation_frame), die Rendering beanspruchen und andere Aufgaben blockieren.
- [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)
  - : Bietet Kennzahlen zu {{Glossary("Long_task", "langen Aufgaben")}}, die Rendering beanspruchen und andere Aufgaben blockieren.
- [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)
  - : Benutzerdefinierte Markierung für Ihren eigenen Eintrag in der Leistungstimeline.
- [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)
  - : Benutzerdefinierte Zeitmessung zwischen zwei Performance-Einträgen.
- [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
  - : Misst Ereignisse der Dokumentnavigation, wie zum Beispiel die Zeit, die zum Laden eines Dokuments benötigt wird.
- [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)
  - : Hört auf neue Performance-Einträge, während sie in der Leistungstimeline aufgezeichnet werden.
- [`PerformanceObserverEntryList`](/de/docs/Web/API/PerformanceObserverEntryList)
  - : Liste von Einträgen, die in einem Leistungsbeobachter beobachtet wurden.
- [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)
  - : Misst Render-Operationen während des Aufbaus einer Webseite.
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)
  - : Misst Netzwerkladezeiten wie Start- und Endzeiten der Umleitung, Start des Abrufs, Start- und Endzeiten des DNS-Lookups, Antwortstart- und -endzeiten für Ressourcen wie Bilder, Skripte, Abrufaufrufe usw.
- [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)
  - : Bietet Kennzahlen zu einzelnen Skripten, die [lange Animationsbilder (LoAFs)](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#what_is_a_long_animation_frame) verursachen.
- [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)
  - : Stellt Server-Kennzahlen bereit, die mit der Antwort im {{HTTPHeader("Server-Timing")}} HTTP-Header gesendet werden.
- [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming)
  - : Identifiziert den Aufgabentyp und das Container-Element, das für die lange Aufgabe verantwortlich ist.
- [`VisibilityStateEntry`](/de/docs/Web/API/VisibilityStateEntry)
  - : Misst die Zeitpunkte der Sichtbarkeitsstatusänderungen einer Seite, d.h. wenn ein Tab von Vordergrund zu Hintergrund wechselt oder umgekehrt.

## Leitfäden

Die folgenden Leitfäden helfen Ihnen, die wesentlichen Konzepte der Performance-API zu verstehen und bieten einen Überblick über deren Fähigkeiten:

- [Leistungsdaten](/de/docs/Web/API/Performance_API/Performance_data): Sammeln, Zugreifen und Arbeiten mit Leistungsdaten.
- [Hochpräzisionszeitmessung](/de/docs/Web/API/Performance_API/High_precision_timing): Messen mit hochpräzisen Zeit- und monotonen Uhren.
- [Ressourcentiming](/de/docs/Web/API/Performance_API/Resource_timing): Messen der Netzwerkzeit für abgerufene Ressourcen wie Bilder, CSS und JavaScript.
- [Navigationstiming](/de/docs/Web/API/Performance_API/Navigation_timing): Messen der Navigationstiming eines Dokuments.
- [Benutzerdefiniertes Timing](/de/docs/Web/API/Performance_API/User_timing): Messen und Aufzeichnen von Leistungsdaten, die speziell auf Ihre Anwendung zugeschnitten sind.
- [Server-Timing](/de/docs/Web/API/Performance_API/Server_timing): Sammeln von serverseitigen Metriken.
- [Langes Animationsbild-Timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing): Sammeln von Kennzahlen zu langen Animationsbildern (LoAFs) und deren Ursachen.
- [Überwachen der bfcache-Blockierungsgründe](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons): Bericht über die Gründe, warum das aktuelle Dokument daran gehindert wurde, den Rückwärts-/Vorwärts-Cache ({{Glossary("bfcache", "bfcache")}}) zu verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Web-Performance](/de/docs/Web/Performance)
- [Lernen: Web-Performance](/de/docs/Learn/Performance)
