---
title: PerformanceLongTaskTiming
slug: Web/API/PerformanceLongTaskTiming
l10n:
  sourceCommit: 9eb4ca6c8f9f5855b7ab94d06025c0561ebdeea9
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die **`PerformanceLongTaskTiming`**-Schnittstelle liefert Informationen über Aufgaben, die den UI-Thread für 50 Millisekunden oder mehr belegen.

## Beschreibung

Lange Aufgaben, die den Haupt-Thread für 50 ms oder mehr blockieren, verursachen unter anderem Probleme wie:

- Verzögerte {{glossary("Time to interactive")}} (TTI).
- Hohe/variable Eingabeverzögerung.
- Hohe/variable Latenz bei der Ereignisverarbeitung.
- Ruckelige Animationen und Bildläufe.

Eine lange Aufgabe ist jede ununterbrochene Phase, in der der Haupt-UI-Thread für 50 ms oder länger ausgelastet ist. Häufige Beispiele umfassen:

- Langlaufende Ereignishandler.
- Aufwendige Neuberechnungen von Layouts und andere Neu-Renderings.
- Die Arbeit, die der Browser zwischen verschiedenen Durchläufen der Ereignisschleife leistet und die 50 ms überschreitet.

Lange Aufgaben beziehen sich auf den "schuldigen Browsing-Kontext-Container" oder kurz "den Container", der die Hauptseite, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} ist, in dem die Aufgabe aufgetreten ist.

Für Aufgaben, die nicht innerhalb der Hauptseite auftreten, und um herauszufinden, welcher Container für die lange Aufgabe verantwortlich ist, bietet die {{domxref("TaskAttributionTiming")}}-Schnittstelle die Eigenschaften `containerId`, `containerName` und `containerSrc`, die möglicherweise weitere Informationen über die Quelle der Aufgabe bereitstellen.

## Vererbung

`PerformanceLongTaskTiming` erbt von {{domxref("PerformanceEntry")}}.

{{InheritanceDiagram}}

## Instanzeigenschaften

Diese Schnittstelle erweitert die folgenden {{domxref("PerformanceEntry")}}-Eigenschaften für Langaufgaben-Timing-Performance-Eintragstypen, indem sie wie folgt qualifiziert werden:

- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen {{domxref("DOMHighResTimeStamp")}} zurück, der die verstrichene Zeit zwischen dem Start und dem Ende der Aufgabe mit einer Granularität von 1 ms darstellt.
- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `"longtask"` zurück.
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen der folgenden Strings zurück, der sich auf den Browsing-Kontext oder Frame bezieht, der der langen Aufgabe zugeschrieben werden kann:
    - `"cross-origin-ancestor"`
    - `"cross-origin-descendant"`
    - `"cross-origin-unreachable"`
    - `"multiple-contexts"`
    - `"same-origin-ancestor"`
    - `"same-origin-descendant"`
    - `"same-origin"`
    - `"self"`
    - `"unknown"`
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen {{domxref("DOMHighResTimeStamp")}} zurück, der die Zeit darstellt, zu der die Aufgabe begonnen hat.

Diese Schnittstelle unterstützt auch die folgenden Eigenschaften:

- {{domxref("PerformanceLongTaskTiming.attribution")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Sequenz von {{domxref('TaskAttributionTiming')}}-Instanzen zurück.

## Instanzmethoden

- {{domxref("PerformanceLongTaskTiming.toJSON()")}} {{Experimental_Inline}}
  - : Gibt eine JSON-Repräsentation des `PerformanceLongTaskTiming`-Objekts zurück.

## Beispiele

### Lange Aufgaben abrufen

Um Informationen über das Timing langer Aufgaben zu erhalten, erstellen Sie eine {{domxref("PerformanceObserver")}}-Instanz und rufen Sie dann ihre [`observe()`](/de/docs/Web/API/PerformanceObserver/observe)-Methode auf, wobei `"longtask"` als Wert der [`type`](/de/docs/Web/API/PerformanceEntry/entryType)-Option übergeben wird. Sie müssen auch `buffered` auf `true` setzen, um auf lange Aufgaben zuzugreifen, die der Benutzeragent beim Erstellen des Dokuments gepuffert hat. Der Callback des `PerformanceObserver`-Objekts wird dann mit einer Liste von `PerformanceLongTaskTiming`-Objekten aufgerufen, die Sie analysieren können.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry);
  });
});

observer.observe({ type: "longtask", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("TaskAttributionTiming")}}
