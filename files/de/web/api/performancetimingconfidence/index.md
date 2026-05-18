---
title: PerformanceTimingConfidence
slug: Web/API/PerformanceTimingConfidence
l10n:
  sourceCommit: 464ec9b1e43bf8a87ffe83abf2832e10739e2fb3
---

{{APIRef("Performance API")}}

Die **`PerformanceTimingConfidence`**-Schnittstelle bietet Zugriff auf Informationen, die darauf hinweisen, ob ein Leistungsbericht die typische Anwendungsleistung widerspiegelt oder wahrscheinlich durch externe Faktoren beeinflusst wird.

Das `PerformanceTimingConfidence`-Objekt für jeden Navigationstiming-Eintrag wird über die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Schnittstelle und deren [`confidence`](/de/docs/Web/API/PerformanceNavigationTiming/confidence)-Eigenschaft abgerufen.

## Instanzeigenschaften

- [`PerformanceTimingConfidence.randomizedTriggerRate`](/de/docs/Web/API/PerformanceTimingConfidence/randomizedTriggerRate) {{ReadOnlyInline}}
  - : Eine Zahl, die angibt, wie oft Rauschen angewendet wird, wenn der `value` offengelegt wird.
- [`PerformanceTimingConfidence.value`](/de/docs/Web/API/PerformanceTimingConfidence/value) {{ReadOnlyInline}}
  - : Ein enumerierter Wert, der eine breite Vertrauensmaßnahme angibt, ob ein Leistungsbericht die typische Anwendungsleistung widerspiegelt oder wahrscheinlich durch externe Faktoren beeinflusst wird.

## Instanzmethoden

- [`PerformanceTimingConfidence.toJSON()`](/de/docs/Web/API/PerformanceTimingConfidence/toJSON)
  - : Gibt eine JSON-Darstellung des `PerformanceTimingConfidence`-Objekts zurück.

## Beschreibung

Wenn eine Website nach einem "Cold Start" des Browsers oder einer Sitzungwiederherstellung geladen wurde, können ihre Seiten langsamer geladen werden.
Dies kann zu einem erheblichen Unterschied zwischen realen Dashboard-Metriken und Leistungsbeobachtungen in Seitenprofilierungswerkzeugen führen und es einem Entwickler erschweren zu verstehen, ob ein Leistungsproblem eine legitime Sorge darstellt oder ein Ausreißer ist, der durch externe Faktoren verursacht wird.

Die `PerformanceTimingConfidence`-Schnittstelle ermöglicht es Entwicklern, dieses Problem auszugleichen, indem eine Schätzung des Browsers (in der [`value`](/de/docs/Web/API/PerformanceTimingConfidence/value)-Eigenschaft) zurückgegeben wird, wie wahrscheinlich es ist, dass ein zurückgegebener Leistungsbericht die typische Anwendungsleistung darstellt.
Dies ist ein Wert von entweder `"low"` oder `"high"`, der das Vertrauen des Browsers in die Messung anzeigt.

> [!NOTE]
> Gerätefaktoren wie die CPU tragen nicht zur Leistungsbewertung bei. Andere Faktoren als Browser-"Cold Start" und Sitzungwiederherstellung können in zukünftigen Updates berücksichtigt werden.

Um die Möglichkeit der Nutzung des Wertes für die Fingerabdruckerstellung zu reduzieren, wird dem Schätzwert Rauschen hinzugefügt, was bedeutet, dass der `value` absichtlich für einen Teil der Ergebnisse falsch sein wird.
Die Auslösungsrate für das Rauschen wird in der [`randomizedTriggerRate`](/de/docs/Web/API/PerformanceTimingConfidence/randomizedTriggerRate)-Eigenschaft angegeben.

Da dies je nach Aufzeichnung variieren kann, ist eine gewichtete Bewertung pro Aufzeichnung erforderlich, um unverzerrte Aggregate zu erhalten, die Konsistenz der Daten zu verbessern, die Anzahl der kombinierten Fehler zu reduzieren und im Allgemeinen eine Basislinie zu erzeugen, gegen die die gemessenen Ergebnisse bewertet werden können.

### Verwendung der Daten

Sie sollten die Daten wie folgt verwenden, um aussagekräftige Informationen aus den zufälligen Werten zu extrahieren:

1. Beim Sammeln von [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Aufzeichnungen sollten Sie [`randomizedTriggerRate`](/de/docs/Web/API/PerformanceTimingConfidence/randomizedTriggerRate) und [`value`](/de/docs/Web/API/PerformanceTimingConfidence/value) für jede Aufzeichnung sammeln.
2. Bei der Berechnung von Statistiken wie dem 75. Perzentil für den {{Glossary("Largest_contentful_paint", "Größter inhaltsvoller Farbauftrag (LCP)")}} oder der durchschnittlichen {{Glossary("page_load_time", "Seitenladezeit")}} sollten Sie die unten erklärten Gewichtungsformeln anwenden anstatt eines einfachen Durchschnitts — dies gibt Ihnen separate, korrigierte Metriken für "typische" Ladezeiten gegenüber "verschlechterten" Ladezeiten.
3. Verwenden Sie den "hohen" Vertrauensmittelwert/-perzentil als Ihre "echte" Leistungsbasislinie und verwenden Sie den "niedrigen", um zu verstehen, wie typische Daten in "Cold Start"-Szenarien aussehen.

Die folgenden Verfahren zeigen, wie die Gewichtung basierend auf `value` vor der Berechnung von Zusammenfassungsstatistiken auf der Grundlage der Vertrauensdaten angewendet werden kann.

#### Berechnung unverzerrter Mittelwerte

Um unverzerrte Mittelwerte für sowohl [`high` und `low` Werte](/de/docs/Web/API/PerformanceTimingConfidence/value#value) zu berechnen:

1. Für jede Aufzeichnung:
   - Lassen Sie `p` die [`randomizedTriggerRate`](/de/docs/Web/API/PerformanceTimingConfidence/randomizedTriggerRate) der Aufzeichnung sein.
   - Lassen Sie `c` der [`value`](/de/docs/Web/API/PerformanceTimingConfidence/value) der Aufzeichnung sein.
   - Lassen Sie `R` `1` sein, wenn `c` `high` ist, ansonsten `0`.
2. Berechnen Sie das Gewicht `w` basierend auf `c`:
   - Zur Schätzung des `high` Mittelwerts: `w = (R - (p / 2)) / (1 - p)`.
   - Zur Schätzung des `low` Mittelwerts: `w = ((1 - R) - (p / 2)) / (1 - p)`.
     > [!NOTE]
     > `w` kann für einige Aufzeichnungen negativ sein; Sie sollten jede Aufzeichnung behalten.
   - Lassen Sie `weighted_duration = duration * w` (siehe [`duration`](/de/docs/Web/API/PerformanceEntry/duration)).
3. Lassen Sie `total_weighted_duration` die Summe der `weighted_duration` Werte über alle Aufzeichnungen sein.
4. Lassen Sie `sum_weights` die Summe der `w` Werte über alle Aufzeichnungen sein.
5. Lassen Sie `debiased_mean = total_weighted_duration / sum_weights`, vorausgesetzt `sum_weights` ist nicht in der Nähe von null.

#### Berechnung unverzerrter Perzentile

Um unverzerrte Perzentile für sowohl `high` als auch `low` zu berechnen:

1. Folgen Sie den Schritten im Abschnitt [Berechnung unverzerrter Mittelwerte](#berechnung_unverzerrter_mittelwerte), um ein gewichtetes `w` pro Aufzeichnung zu berechnen.
2. Lassen Sie `sum_weights` die Summe der `w` Werte über alle Aufzeichnungen sein.
3. Lassen Sie `sorted_records` alle Aufzeichnungen sein, die nach Dauer aufsteigend sortiert sind.
4. Für ein gewünschtes Perzentil (0-100), berechnen Sie `q = percentile / 100.0`.
5. Durchlaufen Sie `sorted_records` und für jede Aufzeichnung:
   - Berechnen Sie das kumulierte Gewicht `cw` pro Aufzeichnung: `cw = sum_{i: duration_i <= duration_j} w_i`.
   - Berechnen Sie die unvoreingenommene kumulative Verteilungsfunktion pro Aufzeichnung: `cdf = cw / sum_weights`.
6. Finden Sie den ersten Index `idx`, bei dem `cdf >= q`.
   - Wenn `idx` `0` ist, geben Sie die `duration` für `sorted_records[0]` zurück.
   - Wenn kein solcher `idx` existiert, geben Sie die `duration` für `sorted_records[n]` zurück.
7. Berechnen Sie den Interpolationsbruchteil:
   - Lassen Sie `lower_cdf` `cdf` für `sorted_records[idx-1]` sein.
   - Lassen Sie `upper_cdf` `cdf` für `sorted_records[idx]` sein.
   - Wenn `lower_cdf = upper_cdf`, geben Sie die `duration` für `sorted_records[idx]` zurück.
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
