---
title: Leistungs-APIs
slug: Web/API/Performance_API
l10n:
  sourceCommit: 54962bbd1d367115cfd01b4e1ba6b552e8b68eb7
---

{{DefaultAPISidebar("Performance API")}}

Die Leistungs-API ist eine Gruppe von Standards, die zur Messung der Leistung von Webanwendungen verwendet werden.

## Konzepte und Verwendung

Um sicherzustellen, dass Webanwendungen schnell sind, ist es wichtig, verschiedene Leistungsmetriken zu messen und zu analysieren. Die Leistungs-API bietet wichtige integrierte Metriken und die Möglichkeit, eigene Messungen zur Leistungstimeline des Browsers hinzuzufügen. Die Leistungstimeline enthält hochpräzise Zeitstempel und kann in Entwicklertools angezeigt werden. Sie können ihre Daten auch an Analyseendpunkte senden, um Leistungsmetriken im Laufe der Zeit zu protokollieren.

Jede Leistungsmetrik wird durch einen einzelnen {{domxref("PerformanceEntry")}} dargestellt. Ein Leistungseintrag hat einen `name`, eine `duration`, eine `startTime` und einen `type`. Alle Leistungsmetriken erweitern die `PerformanceEntry`-Schnittstelle und qualifizieren sie weiter.

Die meisten Leistungseinträge werden automatisch aufgezeichnet und sind entweder über {{domxref("Performance.getEntries()")}} oder (vorzugsweise) über {{domxref("PerformanceObserver")}} zugänglich. Beispielsweise werden {{domxref("PerformanceEventTiming")}}-Einträge für Ereignisse aufgezeichnet, die länger als ein festgelegter Schwellenwert dauern. Die Leistungs-API ermöglicht es Ihnen jedoch auch, eigene benutzerdefinierte Ereignisse mithilfe der Schnittstellen {{domxref("PerformanceMark")}} und {{domxref("PerformanceMeasure")}} zu definieren und aufzuzeichnen.

Die Hauptschnittstelle {{domxref("Performance")}} ist sowohl im globalen Bereich {{domxref("Window.performance", "Window")}} als auch im {{domxref("WorkerGlobalScope.performance", "Worker")}} verfügbar und ermöglicht es Ihnen, benutzerdefinierte Leistungseinträge hinzuzufügen, Leistungseinträge zu löschen und Leistungseinträge abzurufen.

Die Schnittstelle {{domxref("PerformanceObserver")}} ermöglicht es Ihnen, auf verschiedene Arten von Leistungseinträgen zu hören, sobald sie aufgezeichnet werden.

Für mehr konzeptionelle Informationen siehe die untenstehenden [Leistungs-API-Leitfäden](#leitfäden).

![UML-Diagramm der Leistungs-APIs](diagram.svg)

## Referenz

Die folgenden Schnittstellen sind in der Leistungs-API vorhanden:

- {{domxref("EventCounts")}}
  - : Eine schreibgeschützte Karte, die von {{domxref("performance.eventCounts")}} zurückgegeben wird und die Anzahl der gesendeten Ereignisse pro Typ enthält.
- {{domxref("LargestContentfulPaint")}}
  - : Misst die Renderzeit des größten Bild- oder Textblocks, der im sichtbaren Bereich angezeigt wird, aufgezeichnet ab dem Zeitpunkt, zu dem die Seite zu laden beginnt.
- {{domxref("LayoutShift")}}
  - : Bietet Einblicke in die Layoutstabilität von Webseiten basierend auf den Bewegungen der Elemente auf der Seite.
- {{domxref("LayoutShiftAttribution")}}
  - : Bietet Debugging-Informationen über verschobene Elemente.
- {{domxref("Performance")}}
  - : Hauptschnittstelle für den Zugriff auf Leistungsbewertungen. Verfügbar in Fenster- und Worker-Kontexten über {{domxref("Window.performance")}} oder {{domxref("WorkerGlobalScope.performance")}}.
- {{domxref("PerformanceElementTiming")}}
  - : Misst Rendertime der spezifischen Elemente.
- {{domxref("PerformanceEntry")}}
  - : Ein Eintrag auf der Leistungstimeline, der eine einzelne Leistungsmetrik kapselt. Alle Leistungsmetriken erben von dieser Schnittstelle.
- {{domxref("PerformanceEventTiming")}}
  - : Misst Latenzen von Ereignissen und "First Input Delay" (FID).
- {{domxref("PerformanceLongAnimationFrameTiming")}}
  - : Bietet Metriken zu [langen Animationsbildern (LoAFs)](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#what_is_a_long_animation_frame), die das Rendering beanspruchen und andere Aufgaben blockieren.
- {{domxref("PerformanceLongTaskTiming")}}
  - : Bietet Metriken zu [langen Aufgaben](/de/docs/Glossary/Long_task), die das Rendering beanspruchen und andere Aufgaben blockieren.
- {{domxref("PerformanceMark")}}
  - : Benutzerdefinierter Marker für Ihren eigenen Eintrag in der Leistungstimeline.
- {{domxref("PerformanceMeasure")}}
  - : Benutzerdefinierte Zeitmessung zwischen zwei Leistungseinträgen.
- {{domxref("PerformanceNavigationTiming")}}
  - : Misst Dokumentennavigationsereignisse, wie lange es dauert, ein Dokument zu laden.
- {{domxref("PerformanceObserver")}}
  - : Lauscht auf neue Leistungseinträge, während sie in der Leistungstimeline aufgezeichnet werden.
- {{domxref("PerformanceObserverEntryList")}}
  - : Liste der Einträge, die in einem Leistungs-Beobachter beobachtet wurden.
- {{domxref("PerformancePaintTiming")}}
  - : Misst Renderoperationen während des Aufbaus einer Webseite.
- {{domxref("PerformanceResourceTiming")}}
  - : Misst Netzwerk-Ladezeiten wie Umleitungsstart- und -endzeiten, Abrufbeginn, DNS-Abfragebeginn und -ende, Antwortbeginn- und -endzeiten für Ressourcen wie Bilder, Skripte, Abrufe usw.
- {{domxref("PerformanceScriptTiming")}}
  - : Bietet Metriken zu individuellen Skripten, die [lange Animationsbilder (LoAFs)](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#what_is_a_long_animation_frame) verursachen.
- {{domxref("PerformanceServerTiming")}}
  - : Zeigt Servermetriken an, die mit der Antwort im {{HTTPHeader("Server-Timing")}} HTTP-Header gesendet werden.
- {{domxref("TaskAttributionTiming")}}
  - : Identifiziert den Typ der Aufgabe und den Container, der für die lange Aufgabe verantwortlich ist.
- {{domxref("VisibilityStateEntry")}}
  - : Misst die Zeitpunkte von Sichtbarkeitszustandsänderungen der Seite, d. h. wenn ein Tab vom Vordergrund in den Hintergrund wechselt oder umgekehrt.

## Leitfäden

Die folgenden Leitfäden helfen Ihnen, die Schlüsselkonzepte der Leistungs-API zu verstehen und vermitteln einen Überblick über ihre Fähigkeiten:

- [Leistungsdaten](/de/docs/Web/API/Performance_API/Performance_data): Sammeln, Zugriff und Arbeiten mit Leistungsdaten.
- [Hochpräzise Zeitmessung](/de/docs/Web/API/Performance_API/High_precision_timing): Messung mit hochpräzisen Zeiten und monotonen Uhren.
- [Ressourcenzeitmessung](/de/docs/Web/API/Performance_API/Resource_timing): Messung der Netzwerkzeit für abgerufene Ressourcen, wie Bilder, CSS und JavaScript.
- [Navigationstiming](/de/docs/Web/API/Performance_API/Navigation_timing): Messung des Navigationstiming eines Dokuments.
- [Benutzerdefinierte Zeitmessung](/de/docs/Web/API/Performance_API/User_timing): Messen und Aufzeichnen von Leistungsdaten, die speziell für Ihre Anwendung sind.
- [Server-Zeitmessung](/de/docs/Web/API/Performance_API/Server_timing): Sammeln von Metriken auf Serverseite.
- [Lange Animationsframemessung](/de/docs/Web/API/Performance_API/Long_animation_frame_timing): Sammeln von Metriken zu langen Animationsbildern (LoAFs) und deren Ursachen.
- [Überwachung von bfcache Blockierungsgründen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons): Berichterstattung darüber, warum das aktuelle Dokument daran gehindert wurde, den Vorwärts-/Zurück-Cache ({{Glossary("bfcache")}}) zu verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Webleistung](/de/docs/Web/Performance)
- [Lernen: Webleistung](/de/docs/Learn/Performance)
