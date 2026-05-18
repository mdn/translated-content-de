---
title: "PerformanceNavigationTiming: confidence-Eigenschaft"
short-title: confidence
slug: Web/API/PerformanceNavigationTiming/confidence
l10n:
  sourceCommit: 464ec9b1e43bf8a87ffe83abf2832e10739e2fb3
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte **`confidence`**-Eigenschaft der [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Schnittstelle gibt ein [`PerformanceTimingConfidence`](/de/docs/Web/API/PerformanceTimingConfidence)-Objekt zurück, das Informationen enthält, die angeben, ob ein Leistungsprotokoll die typische Anwendungsleistung widerspiegelt oder wahrscheinlich durch externe Faktoren beeinflusst wird.

Zum Beispiel, wenn eine Website nach einem "Cold-Start" des Browsers oder der Wiederherstellung einer Sitzung geladen wurde, könnten ihre Seiten dadurch langsamer laden. In solchen Fällen würde ein `low`-Vertrauenswert für ein zugehöriges Leistungsprotokoll zurückgegeben werden. Andererseits, wenn der Browser feststellt, dass ein zurückgegebenes Leistungsprotokoll repräsentativ für die typische Anwendungsleistung ist, wird ein `high`-Vertrauenswert zurückgegeben.

Dieses Vertrauensmaß ist für Entwickler nützlich, um festzustellen, ob ein Leistungsproblem eine berechtigte Sorge oder eine durch externe Faktoren verursachte Ausnahme ist.

## Wert

Ein [`PerformanceTimingConfidence`](/de/docs/Web/API/PerformanceTimingConfidence)-Objekt.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um Vertrauensdaten aus beobachteten [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Einträgen abzurufen. Die [`value`](/de/docs/Web/API/PerformanceTimingConfidence/value)-Eigenschaft ist ein enumerierter Wert von `low` oder `high`, der ein grobes Vertrauensmaß angibt, während die [`randomizedTriggerRate`](/de/docs/Web/API/PerformanceTimingConfidence/randomizedTriggerRate)-Eigenschaft eine Zahl im Intervall von `0` bis `1` einschließlich ist, die einen Prozentwert darstellt, der angibt, wie oft ein Rauschen angewendet wird, wenn der `value` angezeigt wird.

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

- [`PerformanceTimingConfidence`](/de/docs/Web/API/PerformanceTimingConfidence)
