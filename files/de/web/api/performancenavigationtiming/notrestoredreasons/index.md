---
title: "PerformanceNavigationTiming: Eigenschaft notRestoredReasons"
short-title: notRestoredReasons
slug: Web/API/PerformanceNavigationTiming/notRestoredReasons
l10n:
  sourceCommit: 3148591fa7280daf3e88a5cece3b60dfc9470330
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`notRestoredReasons`** der Schnittstelle [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) gibt ein [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Objekt zurück, das Berichtsdatensätze zu den Gründen liefert, warum das aktuelle Dokument bei einer Navigation daran gehindert wurde, den Back/Forward Cache ({{Glossary("bfcache", "bfcache")}}) zu verwenden.

## Wert

Wenn das assoziierte `PerformanceNavigationTiming`-Objekt eine Verlauf-Navigation darstellt, gibt `notRestoredReasons` ein [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Objekt zurück.

Wenn das `PerformanceNavigationTiming`-Objekt keine Verlauf-Navigation darstellt, wird `notRestoredReasons` `null` zurückgeben. Dies ist nützlich, um festzustellen, ob bfcache für eine bestimmte Navigation nicht relevant ist (im Gegensatz zu `notRestoredReasons`, die nicht unterstützt werden würden, in diesem Fall würde `undefined` zurückgegeben).

> **Note:** `notRestoredReasons` kann `null` zurückgeben, obwohl der Navigationstyp als Vorwärts/Rückwärts-Navigation gemeldet wird. Diese Umstände umfassen das Duplizieren einer Vorwärts/Rückwärts-Navigation in einem neuen Tab und das Wiederherstellen eines Vorwärts/Rückwärts-Navigations-Tabs nach einem Browser-Neustart. In solchen Fällen kopieren einige Browser den Navigationstyp aus dem Original-Tab, aber da dies tatsächlich keine Vorwärts/Rückwärts-Navigationsvorgänge sind, gibt `notRestoredReasons` `null` zurück.

## Beispiele

[`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Daten können mithilfe der [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) oder des [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) aus der Performance-Zeitleiste abgerufen werden.

Zum Beispiel könnte die folgende Funktion aufgerufen werden, um alle `PerformanceNavigationTiming`-Objekte, die derzeit in der Performance-Zeitleiste vorhanden sind, zurückzugeben und deren `notRestoredReasons` zu protokollieren:

```js
function returnNRR() {
  const navEntries = performance.getEntriesByType("navigation");
  for (let i = 0; i < navEntries.length; i++) {
    console.log(`Navigation entry ${i}`);
    let navEntry = navEntries[i];
    console.log(navEntry.notRestoredReasons);
  }
}
```

Die Eigenschaft `PerformanceNavigationTiming.notRestoredReasons` gibt ein Objekt mit der folgenden Struktur zurück, das die Gründe angibt, warum das aktuelle Dokument daran gehindert wurde, den bfcache zu verwenden. In diesem Beispiel hat der oberste Rahmen keine eingebetteten `<iframe>`-Kinder:

```js
{
  children: [],
  id: null,
  name: null,
  reasons: [
    { reason: "unload-listener" }
  ],
  src: "",
  url: "example.com",
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überwachung der Gründe für die Sperrung von bfcache](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)
