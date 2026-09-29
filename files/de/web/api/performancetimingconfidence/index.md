---
title: PerformanceTimingConfidence
slug: Web/API/PerformanceTimingConfidence
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die Schnittstelle **`PerformanceTimingConfidence`** bietet Zugriff auf Informationen, die angeben, ob ein Leistungseintrag die typische Leistung einer Anwendung widerspiegelt oder wahrscheinlich durch externe Faktoren beeinflusst wird.

Auf das `PerformanceTimingConfidence`-Objekt eines Navigation-Timing-Eintrags wird über die Eigenschaft [`confidence`](/de/docs/Web/API/PerformanceNavigationTiming/confidence) der Schnittstelle [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) zugegriffen.

## Instanzeigenschaften

- [`PerformanceTimingConfidence.randomizedTriggerRate`](/de/docs/Web/API/PerformanceTimingConfidence/randomizedTriggerRate) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zahl, die angibt, wie häufig bei der Bereitstellung von `value` Rauschen hinzugefügt wird.
- [`PerformanceTimingConfidence.value`](/de/docs/Web/API/PerformanceTimingConfidence/value) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein Aufzählungswert, der grob angibt, wie sicher es ist, dass ein Leistungseintrag die typische Leistung einer Anwendung widerspiegelt oder wahrscheinlich durch externe Faktoren beeinflusst wird.

## Instanzmethoden

- [`PerformanceTimingConfidence.toJSON()`](/de/docs/Web/API/PerformanceTimingConfidence/toJSON) {{experimental_inline}}
  - : Gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `PerformanceTimingConfidence`-Objekt darstellt. Wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen.

## Beschreibung

Wenn eine Website nach einem „Kaltstart“ des Browsers oder der Wiederherstellung einer Sitzung geladen wird, können ihre Seiten langsamer laden.
Dadurch kann ein erheblicher Unterschied zwischen Dashboard-Metriken aus der Praxis und Leistungsmessungen in Tools zur Seitenprofilierung entstehen. Für Entwickler ist dann schwer zu erkennen, ob ein Leistungsproblem tatsächlich relevant ist oder ein durch externe Faktoren verursachter Ausreißer.

Die Schnittstelle `PerformanceTimingConfidence` hilft Entwicklern, dieses Problem zu berücksichtigen: Sie liefert in der Eigenschaft [`value`](/de/docs/Web/API/PerformanceTimingConfidence/value) eine Einschätzung des Browsers, wie wahrscheinlich es ist, dass ein zurückgegebener Leistungseintrag die typische Leistung der Anwendung repräsentiert.
Der Wert ist entweder `"low"` oder `"high"` und gibt an, wie sicher sich der Browser bei der Messung ist.

> [!NOTE]
> Gerätefaktoren wie die CPU fließen nicht in die Leistungsbewertung ein. In zukünftigen Versionen könnten neben dem „Kaltstart“ des Browsers und der Sitzungswiederherstellung weitere Faktoren berücksichtigt werden.

Um die Möglichkeit zu verringern, den Wert für Fingerprinting zu verwenden, wird der Einschätzung Rauschen hinzugefügt. Das bedeutet, dass `value` bei einem Teil der Ergebnisse absichtlich falsch ist.
Die Häufigkeit, mit der dieses Rauschen ausgelöst wird, steht in der Eigenschaft [`randomizedTriggerRate`](/de/docs/Web/API/PerformanceTimingConfidence/randomizedTriggerRate).

Da diese Häufigkeit zwischen den Einträgen variieren kann, müssen die einzelnen Einträge gewichtet werden, um unverzerrte aggregierte Werte zu erhalten. Dies verbessert die Konsistenz der Daten, verringert die Anzahl sich überlagernder Fehler und liefert allgemein eine Vergleichsgrundlage für die Bewertung der Messergebnisse.

### Daten verwenden

Um aus den randomisierten Werten aussagekräftige Informationen zu gewinnen, gehen Sie wie folgt vor:

1. Erfassen Sie beim Sammeln von [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Einträgen für jeden Eintrag [`randomizedTriggerRate`](/de/docs/Web/API/PerformanceTimingConfidence/randomizedTriggerRate) und [`value`](/de/docs/Web/API/PerformanceTimingConfidence/value).
2. Wenden Sie bei der Berechnung von Statistiken wie dem 75. Perzentil des {{Glossary("Largest_contentful_paint", "Largest Contentful Paint (LCP)")}} oder der durchschnittlichen {{Glossary("page_load_time", "Seitenladezeit")}} statt eines einfachen Durchschnitts die unten erläuterten Gewichtungsformeln an. So erhalten Sie getrennte, korrigierte Metriken für „typische“ und „beeinträchtigte“ Ladevorgänge.
3. Verwenden Sie den Mittelwert beziehungsweise das Perzentil mit `"high"` als Vergleichsgrundlage für die „tatsächliche“ Leistung. Anhand der Werte mit `"low"` können Sie nachvollziehen, wie typische Daten in Kaltstart-Szenarien aussehen.

Die folgenden Verfahren zeigen, wie die auf `value` basierende Gewichtung angewendet werden kann, bevor zusammenfassende Statistiken aus den Konfidenzdaten berechnet werden.

#### Unverzerrte Mittelwerte berechnen

So berechnen Sie unverzerrte Mittelwerte für [die Werte `high` und `low`](/de/docs/Web/API/PerformanceTimingConfidence/value#value):

1. Für jeden Eintrag:
   - Setzen Sie `p` auf den Wert von [`randomizedTriggerRate`](/de/docs/Web/API/PerformanceTimingConfidence/randomizedTriggerRate) des Eintrags.
   - Setzen Sie `c` auf den Wert von [`value`](/de/docs/Web/API/PerformanceTimingConfidence/value) des Eintrags.
   - Setzen Sie `R` auf `1`, wenn `c` gleich `high` ist, andernfalls auf `0`.
2. Berechnen Sie das Gewicht `w` für jeden Eintrag anhand von `c`:
   - Zur Schätzung des Mittelwerts für `high`: `w = (R - (p / 2)) / (1 - p)`.
   - Zur Schätzung des Mittelwerts für `low`: `w = ((1 - R) - (p / 2)) / (1 - p)`.
     > [!NOTE]
     > `w` kann für manche Einträge negativ sein; behalten Sie dennoch jeden Eintrag bei.
   - Setzen Sie `weighted_duration = duration * w` (siehe [`duration`](/de/docs/Web/API/PerformanceEntry/duration)).
3. Setzen Sie `total_weighted_duration` auf die Summe der `weighted_duration`-Werte aller Einträge.
4. Setzen Sie `sum_weights` auf die Summe der `w`-Werte aller Einträge.
5. Berechnen Sie `debiased_mean = total_weighted_duration / sum_weights`, sofern `sum_weights` nicht nahe null liegt.

#### Unverzerrte Perzentile berechnen

So berechnen Sie unverzerrte Perzentile für `high` und `low`:

1. Befolgen Sie die Schritte unter [Unverzerrte Mittelwerte berechnen](#unverzerrte_mittelwerte_berechnen), um für jeden Eintrag ein Gewicht `w` zu berechnen.
2. Setzen Sie `sum_weights` auf die Summe der `w`-Werte aller Einträge.
3. Setzen Sie `sorted_records` auf alle Einträge, aufsteigend nach `duration` sortiert.
4. Berechnen Sie für das gewünschte Perzentil (0–100) `q = percentile / 100.0`.
5. Durchlaufen Sie `sorted_records` und führen Sie für jeden Eintrag Folgendes aus:
   - Berechnen Sie das kumulierte Gewicht `cw` für den Eintrag: `cw = sum_{i: duration_i <= duration_j} w_i`.
   - Berechnen Sie den Wert der unverzerrten kumulativen Verteilungsfunktion für den Eintrag: `cdf = cw / sum_weights`.
6. Suchen Sie den ersten Index `idx`, für den `cdf >= q` gilt.
   - Wenn `idx` gleich `0` ist, geben Sie `duration` für `sorted_records[0]` zurück.
   - Wenn kein solcher Index `idx` existiert, geben Sie `duration` für `sorted_records[n]` zurück.
7. Berechnen Sie den Interpolationsfaktor:
   - Setzen Sie `lower_cdf` auf `cdf` für `sorted_records[idx-1]`.
   - Setzen Sie `upper_cdf` auf `cdf` für `sorted_records[idx]`.
   - Wenn `lower_cdf = upper_cdf` gilt, geben Sie `duration` für `sorted_records[idx]` zurück.
   - Andernfalls:
     - Setzen Sie `ifrac = (q - lower_cdf) / (upper_cdf - lower_cdf)`.
     - Setzen Sie `lower_duration` auf `duration` für `sorted_records[idx-1]`.
     - Setzen Sie `upper_duration` auf `duration` für `sorted_records[idx]`.
     - Geben Sie `lower_duration + (upper_duration - lower_duration) * ifrac` zurück.

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel wird ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) verwendet, um Konfidenzdaten aus beobachteten [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Einträgen abzurufen.

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
