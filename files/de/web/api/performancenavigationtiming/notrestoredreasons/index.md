---
title: "PerformanceNavigationTiming: notRestoredReasons-Eigenschaft"
short-title: notRestoredReasons
slug: Web/API/PerformanceNavigationTiming/notRestoredReasons
l10n:
  sourceCommit: cc41ecd796870c2b6c77ad0b04fcb8d8c7d877d2
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`notRestoredReasons`** des [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Interfaces gibt ein [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Objekt zurück, das Berichtsdaten über die Gründe liefert, warum das aktuelle Dokument daran gehindert wurde, den Zurück-/Vorwärts-Cache ({{Glossary("bfcache", "bfcache")}}) bei der Navigation zu nutzen.

## Wert

Wenn das zugehörige `PerformanceNavigationTiming`-Objekt eine Verlaufsnavigation darstellt, gibt `notRestoredReasons` ein [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Objekt zurück.

Wenn das `PerformanceNavigationTiming`-Objekt keine Verlaufsnavigation darstellt, gibt `notRestoredReasons` `null` zurück. Dies ist nützlich, um festzustellen, ob der bfcache für eine bestimmte Navigation nicht relevant ist (im Gegensatz dazu, dass `notRestoredReasons` nicht unterstützt wird, in welchem Fall es `undefined` zurückgeben würde).

> **Note:** `notRestoredReasons` kann `null` zurückgeben, obwohl der Navigationstyp als Zurück-/Vorwärts-Navigation gemeldet wird. Diese Umstände schließen das Duplizieren einer Zurück-/Vorwärts-Navigation in einem neuen Tab und das Wiederherstellen eines Zurück-/Vorwärts-Navigationstabs nach einem Browser-Neustart ein. In solchen Fällen kopieren einige Browser den Navigationstyp vom ursprünglichen Tab, aber da es sich hierbei nicht tatsächlich um Zurück-/Vorwärts-Navigationen handelt, gibt `notRestoredReasons` `null` zurück.

## Beispiele

[`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Daten können aus der Performance-Zeitleiste mittels [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) oder [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) erhalten werden.

Zum Beispiel könnten Sie folgende Funktion aufrufen, um alle derzeit in der Performance-Zeitleiste vorhandenen `PerformanceNavigationTiming`-Objekte zurückzugeben und deren `notRestoredReasons` zu protokollieren:

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

Die `PerformanceNavigationTiming.notRestoredReasons`-Eigenschaft gibt ein Objekt mit folgender Struktur zurück, das Gründe liefert, warum das aktuelle Dokument daran gehindert wurde, den bfcache zu nutzen. In diesem Beispiel hat der oberste Frame keine eingebetteten Kind-`<iframe>`-Elemente:

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

- [Überwachung der Bfcache-Blockierungsgründe](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)
