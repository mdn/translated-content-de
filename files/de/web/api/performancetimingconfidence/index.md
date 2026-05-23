---
title: PerformanceTimingConfidence
slug: Web/API/PerformanceTimingConfidence
l10n:
  sourceCommit: 29e6ba9d844b835a1f00346ef1a78fa5d9e7c1a8
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`PerformanceTimingConfidence`**-Schnittstelle bietet Zugriff auf Informationen, die anzeigen, ob ein Leistungsprotokoll die typische Anwendungsleistung widerspiegelt oder wahrscheinlich durch externe Faktoren beeinflusst wird.

Das `PerformanceTimingConfidence`-Objekt für jeden Navigationstiming-Eintrag wird über die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Schnittstelle und deren [`confidence`](/de/docs/Web/API/PerformanceNavigationTiming/confidence)-Eigenschaft abgerufen.

## Instanzeigenschaften

- [`PerformanceTimingConfidence.randomizedTriggerRate`](/de/docs/Web/API/PerformanceTimingConfidence/randomizedTriggerRate) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zahl, die angibt, wie oft Rauschen angewendet wird, wenn der `value` offengelegt wird.
- [`PerformanceTimingConfidence.value`](/de/docs/Web/API/PerformanceTimingConfidence/value) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein enumerierter Wert, der eine breite Vertrauensbeurteilung dafür angibt, ob ein Leistungsprotokoll die typische Anwendungsleistung widerspiegelt oder wahrscheinlich durch externe Faktoren beeinflusst wird.

## Instanzmethoden

- [`PerformanceTimingConfidence.toJSON()`](/de/docs/Web/API/PerformanceTimingConfidence/toJSON) {{experimental_inline}}
  - : Gibt eine JSON-Repräsentation des `PerformanceTimingConfidence`-Objekts zurück.

## Beschreibung

Wenn eine Website nach einem "Kaltstart" des Browsers oder einer Sitzungswiederherstellung geladen wurde, können ihre Seiten aufgrund dessen langsamer geladen werden.
Dies kann zu einem erheblichen Unterschied zwischen den realen Dashboard-Metriken und den Leistungsbeobachtungen in Seitenprofilierungstools führen, was es einem Entwickler erschwert, zu verstehen, ob ein Leistungsproblem ein legitimes Anliegen oder ein Ausreißer aufgrund externer Faktoren ist.

Die `PerformanceTimingConfidence`-Schnittstelle ermöglicht es Entwicklern, dieses Problem zu kompensieren, indem sie eine Schätzung des Browsers zurückgibt (in der [`value`](/de/docs/Web/API/PerformanceTimingConfidence/value)-Eigenschaft), wie wahrscheinlich es ist, dass ein zurückgegebenes Leistungsprotokoll die typische Anwendungsleistung darstellt.
Dies ist ein Wert von entweder `"low"` oder `"high"`, der das Vertrauen des Browsers in die Messung angibt.

> [!NOTE]
> Gerätefaktoren wie die CPU tragen nicht zur Leistungsbewertung bei. Andere Faktoren als der "Kaltstart" des Browsers und die Sitzungswiederherstellung können in zukünftigen Updates berücksichtigt werden.

Um die Möglichkeit der Verwendung des Wertes zur Erstellung von Fingerabdrücken zu verringern, wird dem Schätzwert Rauschen hinzugefügt, was bedeutet, dass der `value` absichtlich für einen Teil der Ergebnisse falsch sein wird.
Die Auslöserate für das Rauschen wird in der [`randomizedTriggerRate`](/de/docs/Web/API/PerformanceTimingConfidence/randomizedTriggerRate)-Eigenschaft angegeben.

Da dies je nach Aufzeichnung variieren kann, ist eine gewichtete Betrachtung pro Aufzeichnung erforderlich, um unverzerrte Aggregationen zu erhalten, die Datenkonsistenz zu verbessern, die Anzahl kombinierter Fehler zu reduzieren und im Allgemeinen eine Basislinie zu schaffen, an der die gemessenen Ergebnisse bewertet werden können.

### Verwendung der Daten

Sie sollten die Daten wie folgt verwenden, um aussagekräftige Informationen aus den zufälligen Werten zu extrahieren:

1. Beim Sammeln von [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Aufzeichnungen, sammeln Sie [`randomizedTriggerRate`](/de/docs/Web/API/PerformanceTimingConfidence/randomizedTriggerRate) und [`value`](/de/docs/Web/API/PerformanceTimingConfidence/value) für jede Aufzeichnung.
2. Beim Berechnen von Statistiken wie dem 75. Perzentil des {{Glossary("Largest_contentful_paint", "Largest Contentful Paint (LCP)")}} oder der mittleren {{Glossary("page_load_time", "Seitenladezeit")}}, verwenden Sie die unten erläuterten Gewichtungsformeln anstelle eines einfachen Durchschnitts — dies gibt Ihnen separate, korrigierte Metriken für "typische" Ladungen gegenüber "verschlechterten" Ladungen.
3. Verwenden Sie den Mittelwert/Perzentil mit "hohem" Vertrauen als Ihre "reale" Leistungsgrundlage und verwenden Sie den mit "niedrigem" Vertrauen, um zu verstehen, wie typische Daten in Kaltstart-Szenarien aussehen.

Die unten stehenden Verfahren veranschaulichen, wie Gewichtung basierend auf `value` angewendet werden kann, bevor zusammenfassende Statistiken basierend auf den Vertrauensdaten berechnet werden.

#### Berechnen nicht verzerrter Mittelwerte

Um nicht verzerrte Mittelwerte für sowohl [`high` und `low` Werte](/de/docs/Web/API/PerformanceTimingConfidence/value#value) zu berechnen:

1. Für jede Aufzeichnung:
   - Lassen Sie `p` die [`randomizedTriggerRate`](/de/docs/Web/API/PerformanceTimingConfidence/randomizedTriggerRate) der Aufzeichnung sein.
   - Lassen Sie `c` den [`value`](/de/docs/Web/API/PerformanceTimingConfidence/value) der Aufzeichnung sein.
   - Lassen Sie `R` `1` sein, wenn `c` `high` ist, andernfalls `0`.
2. Berechnen Sie das pro Aufzeichnung Gewicht `w` basierend auf `c`:
   - Zur Schätzung des `high`-Mittels: `w = (R - (p / 2)) / (1 - p)`.
   - Zur Schätzung des `low`-Mittels: `w = ((1 - R) - (p / 2)) / (1 - p)`.
     > [!NOTE]
     > `w` kann für einige Aufzeichnungen negativ sein; Sie sollten jede Aufzeichnung behalten.
   - Lassen Sie `weighted_duration = duration * w` (siehe [`duration`](/de/docs/Web/API/PerformanceEntry/duration)).
3. Lassen Sie `total_weighted_duration` die Summe der `weighted_duration`-Werte über alle Aufzeichnungen hinweg sein.
4. Lassen Sie `sum_weights` die Summe der `w`-Werte über alle Aufzeichnungen hinweg sein.
5. Lassen Sie `debiased_mean = total_weighted_duration / sum_weights`, vorausgesetzt `sum_weights` ist nicht nahe null.

#### Berechnen nicht verzerrter Perzentile

Um nicht verzerrte Perzentile für sowohl `high` als auch `low` zu berechnen:

1. Folgen Sie den Schritten für [das Berechnen nicht verzerrter Mittelwerte](#berechnen_nicht_verzerrter_mittelwerte), um ein Pro-Aufzeichnung-Gewicht `w` zu berechnen.
2. Lassen Sie `sum_weights` die Summe der `w`-Werte über alle Aufzeichnungen hinweg sein.
3. Lassen Sie `sorted_records` alle Aufzeichnungen nach Dauer aufsteigend sortiert sein.
4. Für ein gewünschtes Perzentil (0-100), berechnen Sie `q = percentile / 100.0`.
5. Gehen Sie `sorted_records` durch und für jede Aufzeichnung:
   - Berechnen Sie das kumulative Gewicht `cw` pro Aufzeichnung: `cw = sum_{i: duration_i <= duration_j} w_i`.
   - Berechnen Sie die nicht verzerrte kumulative Verteilungsfunktion pro Aufzeichnung: `cdf = cw / sum_weights`.
6. Finden Sie den ersten Index `idx`, wo `cdf >= q`.
   - Wenn `idx` `0` ist, geben Sie `duration` für `sorted_records[0]` zurück.
   - Wenn kein solcher `idx` existiert, geben Sie `duration` für `sorted_records[n]` zurück.
7. Berechnen Sie den Interpolationsanteil:
   - Lassen Sie `lower_cdf` das `cdf` für `sorted_records[idx-1]` sein.
   - Lassen Sie `upper_cdf` das `cdf` für `sorted_records[idx]` sein.
   - Wenn `lower_cdf = upper_cdf`, geben Sie `duration` für `sorted_records[idx]` zurück.
   - Ansonsten:
     - Lassen Sie `ifrac = (q - lower_cdf) / (upper_cdf - lower_cdf)`.
     - Lassen Sie `lower_duration` die `duration` für `sorted_records[idx-1]` sein.
     - Lassen Sie `upper_duration` die `duration` für `sorted_records[idx]` sein.
     - Geben Sie `lower_duration + (upper_duration - lower_duration) * ifrac` zurück.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um Vertrauensdaten von beobachteten [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Einträgen abzurufen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(
      `${entry.name} confidence: ${entry.confidence.value}`,
      `Trigger rate: ${entry.confidence.randomizedTriggerRate}`,
    );
  });
});

observer.observe({ type: "navigation", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
