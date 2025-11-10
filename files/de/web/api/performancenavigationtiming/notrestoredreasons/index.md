---
title: "PerformanceNavigationTiming: notRestoredReasons Eigenschaft"
short-title: notRestoredReasons
slug: Web/API/PerformanceNavigationTiming/notRestoredReasons
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`notRestoredReasons`** schreibgeschützte Eigenschaft des [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Interfaces gibt ein [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Objekt zurück, das Berichtsdaten zu den Gründen liefert, warum das aktuelle Dokument daran gehindert wurde, den Vor-/Zurück-Cache ({{Glossary("bfcache", "bfcache")}}) bei der Navigation zu nutzen.

## Wert

Wenn das zugehörige `PerformanceNavigationTiming`-Objekt eine Verlauf-Navigation darstellt, gibt `notRestoredReasons` ein [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Objekt zurück.

Wenn das `PerformanceNavigationTiming`-Objekt keine Verlauf-Navigation darstellt, wird `notRestoredReasons` `null` zurückgeben. Dies ist nützlich, um festzustellen, ob bfcache für eine bestimmte Navigation nicht relevant ist (im Gegensatz zu `notRestoredReasons` wird nicht unterstützt, in diesem Fall würde es `undefined` zurückgeben).

> [!NOTE] > `notRestoredReasons` kann `null` zurückgeben, obwohl der Navigationstyp als Vor-/Zurück-Navigation gemeldet wird. Diese Umstände beinhalten das Duplizieren einer Vor-/Zurück-Navigation in einem neuen Tab und das Wiederherstellen eines Vor-/Zurück-Navigations-Tabs nach einem Browser-Neustart. In solchen Fällen kopieren einige Browser den Navigationstyp vom Original-Tab, aber da es sich nicht wirklich um Vor-/Zurück-Navigationen handelt, gibt `notRestoredReasons` `null` zurück.

## Beispiele

[`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Daten können aus der Performance-Zeitachse mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) oder [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) abgerufen werden.

Zum Beispiel könnten Sie die folgende Funktion aufrufen, um alle derzeit in der Performance-Zeitachse vorhandenen `PerformanceNavigationTiming`-Objekte zurückzugeben und deren `notRestoredReasons` zu protokollieren:

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

Die `PerformanceNavigationTiming.notRestoredReasons`-Eigenschaft gibt ein Objekt mit folgender Struktur zurück, das die Gründe liefert, warum das aktuelle Dokument daran gehindert wurde, den bfcache zu nutzen. In diesem Beispiel hat der oberste Frame keine eingebetteten Kind-`<iframe>`s:

```json
{
  "children": [],
  "id": null,
  "name": null,
  "reasons": [{ "reason": "unload-listener" }],
  "src": "",
  "url": "example.com"
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überwachung der Blockierungsgründe für bfcache](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)
