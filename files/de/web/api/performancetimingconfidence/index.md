---
title: PerformanceTimingConfidence
slug: Web/API/PerformanceTimingConfidence
l10n:
  sourceCommit: 5cb7efb91e0bafe87cc5c907877e765d1643d0bc
---

{{APIRef("Performance API")}}

Das **`PerformanceTimingConfidence`**-Interface bietet Zugriff auf Informationen, die anzeigen, ob ein Leistungsdatensatz die typische Anwendungsleistung widerspiegelt oder wahrscheinlich durch externe Faktoren beeinträchtigt wurde.

Das `PerformanceTimingConfidence`-Objekt für jeden Navigationstiming-Eintrag wird über die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Schnittstelle und deren [`confidence`](/de/docs/Web/API/PerformanceNavigationTiming/confidence)-Eigenschaft abgerufen.

## Instanz-Eigenschaften

- [`PerformanceTimingConfidence.randomizedTriggerRate`](/de/docs/Web/API/PerformanceTimingConfidence/randomizedTriggerRate) {{ReadOnlyInline}}
  - : Eine Zahl, die angibt, wie oft Rauschen angewendet wird, wenn der `value` offengelegt wird.
- [`PerformanceTimingConfidence.value`](/de/docs/Web/API/PerformanceTimingConfidence/value) {{ReadOnlyInline}}
  - : Ein enumerierter Wert, der ein breites Vertrauensmaß dafür angibt, ob ein Leistungsdatensatz die typische Anwendungsleistung widerspiegelt oder wahrscheinlich durch externe Faktoren beeinträchtigt wurde.

## Instanz-Methoden

- [`PerformanceTimingConfidence.toJSON()`](/de/docs/Web/API/PerformanceTimingConfidence/toJSON)
  - : Gibt eine JSON-Darstellung des `PerformanceTimingConfidence`-Objekts zurück.

## Beschreibung

Wenn eine Website nach einem "Kaltstart" des Browsers oder einer Sitzungswiederherstellung geladen wurde, können die Seiten dadurch langsamer laden.
Dies kann zu erheblichen Unterschieden zwischen den realen Dashboard-Metriken und den Leistungsbeobachtungen in Seitenprofilerstellungstools führen, was es für einen Entwickler schwierig macht zu verstehen, ob ein Leistungsproblem ein legitimes Anliegen oder eine durch externe Faktoren verursachte Ausnahme ist.

Das `PerformanceTimingConfidence`-Interface ermöglicht es Entwicklern, dieses Problem zu kompensieren, indem es eine Schätzung des Browsers zurückgibt (in der [`value`](/de/docs/Web/API/PerformanceTimingConfidence/value)-Eigenschaft), die die Wahrscheinlichkeit angibt, dass ein zurückgegebener Leistungsdatensatz die typische Anwendungsleistung darstellt.
Dies ist entweder ein Wert von `"low"` oder `"high"`, der das Vertrauen des Browsers in die Messung anzeigt.

> [!NOTE]
> Gerätefaktoren wie die CPU tragen nicht zur Leistungsbewertung bei. Andere Faktoren als "Kaltstart" des Browsers und die Sitzungswiederherstellung könnten in zukünftigen Aktualisierungen berücksichtigt werden.

Um die Möglichkeit zu reduzieren, den Wert für Fingerabdrücke zu verwenden, wird dem Schätzwert Rauschen hinzugefügt, was bedeutet, dass der `value` absichtlich für einen Teil der Ergebnisse falsch sein wird.
Die Auslösungsrate für das Rauschen wird in der [`randomizedTriggerRate`](/de/docs/Web/API/PerformanceTimingConfidence/randomizedTriggerRate)-Eigenschaft angegeben.

Da dies über Datensätze hinweg variieren kann, ist eine Gewichtung pro Datensatz erforderlich, um unvoreingenommene Aggregate wiederherzustellen, die Datenkonsistenz zu verbessern, die Anzahl der zusammengesetzten Fehler zu reduzieren und im Allgemeinen eine Basislinie zu schaffen, gegen die die gemessenen Ergebnisse bewertet werden können.

### Verwendung der Daten

Sie sollten die Daten wie folgt verwenden, um sinnvolle Informationen aus den zufälligen Werten zu extrahieren:

1. Beim Sammeln von [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Datensätzen, erfassen Sie [`randomizedTriggerRate`](/de/docs/Web/API/PerformanceTimingConfidence/randomizedTriggerRate) und [`value`](/de/docs/Web/API/PerformanceTimingConfidence/value) für jeden Datensatz.
2. Wenn Sie Statistiken wie das 75. Perzentil {{Glossary("Largest_contentful_paint", "Largest contentful paint (LCP)")}} oder die durchschnittliche {{Glossary("page_load_time", "Seitenladezeit")}} berechnen, wenden Sie die unten erklärten Gewichtungsformeln anstelle eines einfachen Durchschnitts an — dies gibt Ihnen separate, korrigierte Metriken für "normale" Ladevorgänge vs. "verschlechterte" Ladevorgänge.
3. Verwenden Sie das "high" Vertrauen Durchschnitt/Perzentil als Ihre "reale" Leistungsbasislinie und das "low" Vertrauen, um zu verstehen, wie typische Daten in Kaltstart-Szenarien aussehen.

Die unten stehenden Verfahren veranschaulichen, wie die Gewichtung basierend auf `value` angewendet werden kann, bevor zusammenfassende Statistiken basierend auf den Vertrauensdaten berechnet werden.

#### Berechnung unvoreingenommener Mittelwerte

Um unvoreingenommene Mittelwerte für beide [`high` und `low` Werte](/de/docs/Web/API/PerformanceTimingConfidence/value#value) zu berechnen:

1. Für jeden Datensatz:
   - Lassen Sie `p` die [`randomizedTriggerRate`](/de/docs/Web/API/PerformanceTimingConfidence/randomizedTriggerRate) des Datensatzes sein.
   - Lassen Sie `c` der [`value`](/de/docs/Web/API/PerformanceTimingConfidence/value) des Datensatzes sein.
   - Lassen Sie `R` `1` sein, wenn `c` `high` ist, sonst `0`.
2. Berechnen Sie das Gewicht `w` pro Datensatz basierend auf `c`:
   - Zur Schätzung des `high` Durchschnitts: `w = (R - (p / 2)) / (1 - p)`.
   - Zur Schätzung des `low` Durchschnitts: `w = ((1 - R) - (p / 2)) / (1 - p)`.
     > [!NOTE]
     > `w` kann für einige Datensätze negativ sein; Sie sollten jeden Datensatz behalten.
   - Lassen Sie `weighted_duration = duration * w` (siehe [`duration`](/de/docs/Web/API/PerformanceEntry/duration)).
3. Lassen Sie `total_weighted_duration` die Summe der `weighted_duration`-Werte über alle Datensätze sein.
4. Lassen Sie `sum_weights` die Summe der `w`-Werte über alle Datensätze sein.
5. Lassen Sie `debiased_mean = total_weighted_duration / sum_weights`, vorausgesetzt `sum_weights` ist nicht nahe null.

#### Berechnung unvoreingenommener Perzentile

Um unvoreingenommene Perzentile für beide `high` und `low` zu berechnen:

1. Folgen Sie den [Berechnung unvoreingenommener Mittelwerte](#berechnung_unvoreingenommener_mittelwerte)-Schritten, um ein Gewicht `w` pro Datensatz zu berechnen.
2. Lassen Sie `sum_weights` die Summe der `w`-Werte über alle Datensätze sein.
3. Lassen Sie `sorted_records` alle Datensätze sein, die nach Dauer in aufsteigender Reihenfolge sortiert sind.
4. Für ein gewünschtes Perzentil (0-100), berechnen Sie `q = percentile / 100.0`.
5. Gehen Sie `sorted_records` durch und für jeden Datensatz:
   - Berechnen Sie das kumulative Gewicht `cw` pro Datensatz: `cw = sum_{i: duration_i <= duration_j} w_i`.
   - Berechnen Sie die unvoreingenommene kumulative Verteilungsfunktion pro Datensatz: `cdf = cw / sum_weights`.
6. Finden Sie den ersten Index `idx`, wo `cdf >= q`.
   - Wenn `idx` `0` ist, geben Sie die `duration` für `sorted_records[0]` zurück.
   - Wenn kein solcher `idx` existiert, geben Sie die `duration` für `sorted_records[n]` zurück.
7. Berechnen Sie den Interpolationsbruchteil:
   - Lassen Sie `lower_cdf` das `cdf` für `sorted_records[idx-1]` sein.
   - Lassen Sie `upper_cdf` das `cdf` für `sorted_records[idx]` sein.
   - wenn `lower_cdf = upper_cdf`, geben Sie die `duration` für `sorted_records[idx]` zurück.
   - Andernfalls:
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
