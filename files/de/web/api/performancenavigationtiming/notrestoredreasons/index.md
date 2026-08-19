---
title: "PerformanceNavigationTiming: notRestoredReasons-Eigenschaft"
short-title: notRestoredReasons
slug: Web/API/PerformanceNavigationTiming/notRestoredReasons
l10n:
  sourceCommit: 3e23ee580c298320c9ecbbb745371611389e6cb8
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`notRestoredReasons`** des [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Interfaces gibt ein [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Objekt zurück, das Berichtsdaten über [die Gründe](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons#blocking_reasons) liefert, warum das aktuelle Dokument daran gehindert wurde, den Vorwärts-/Rückwärts-Cache ({{Glossary("bfcache", "bfcache")}}) bei der Navigation zu verwenden.

## Wert

Wenn das zugehörige `PerformanceNavigationTiming`-Objekt eine Verlauf-Navigation darstellt, gibt `notRestoredReasons` ein [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Objekt zurück.

Wenn das `PerformanceNavigationTiming`-Objekt keine Verlauf-Navigation darstellt, wird `notRestoredReasons` `null` zurückgeben. Dies ist nützlich, um festzustellen, ob der bfcache für eine bestimmte Navigation nicht relevant ist (im Gegensatz dazu, dass `notRestoredReasons` nicht unterstützt wird, in welchem Fall es `undefined` zurückgeben würde).

> [!NOTE]
> `notRestoredReasons` kann `null` zurückgeben, obwohl der Navigationstyp als Vorwärts-/Rückwärts-Navigation gemeldet wird. Diese Umstände beinhalten das Duplizieren einer Vorwärts-/Rückwärts-Navigation in einem neuen Tab und das Wiederherstellen eines Vorwärts-/Rückwärts-Navigationstabs nach einem Browser-Neustart. In solchen Fällen kopieren einige Browser den Navigationstyp aus dem Original-Tab, aber da dies tatsächlich keine Vorwärts-/Rückwärts-Navigationen sind, gibt `notRestoredReasons` `null` zurück.

## Beispiele

[`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Daten können von der Performance-Zeitleiste mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) oder [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) abgerufen werden.

Zum Beispiel könnten Sie die folgende Funktion aufrufen, um alle aktuell in der Performance-Zeitleiste vorhandenen `PerformanceNavigationTiming`-Objekte abzurufen und deren `notRestoredReasons` zu protokollieren:

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

Die Eigenschaft `PerformanceNavigationTiming.notRestoredReasons` gibt ein Objekt mit der folgenden Struktur zurück, das die Gründe liefert, warum das aktuelle Dokument daran gehindert wurde, den bfcache zu verwenden. In diesem Beispiel hat das Top-Level-Frame keine eingebetteten Kind-`<iframe>`s:

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

- [Überwachung der bfcache-Blockierungsgründe](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)
