---
title: "PerformanceNavigationTiming: notRestoredReasons Eigenschaft"
short-title: notRestoredReasons
slug: Web/API/PerformanceNavigationTiming/notRestoredReasons
l10n:
  sourceCommit: bebf5d96c072cbf8531979f8088d380ef7f09d06
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`notRestoredReasons`** schreibgeschützte Eigenschaft des [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Interfaces gibt ein [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Objekt zurück, das Berichtsdaten über [die Gründe](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons#blocking_reasons) liefert, warum das aktuelle Dokument daran gehindert wurde, den Zurück/Vorwärts-Cache ({{Glossary("bfcache", "bfcache")}}) bei der Navigation zu nutzen.

## Wert

Wenn das zugehörige `PerformanceNavigationTiming`-Objekt eine Verlaufsnavigation darstellt, gibt `notRestoredReasons` ein [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Objekt zurück.

Wenn das `PerformanceNavigationTiming`-Objekt keine Verlaufsnavigation darstellt, gibt `notRestoredReasons` `null` zurück. Dies ist nützlich, um festzustellen, ob bfcache für eine bestimmte Navigation nicht relevant ist (im Gegensatz dazu, dass `notRestoredReasons` nicht unterstützt wird, in welchem Fall es `undefined` zurückgeben würde).

Die `notRestoredReasons`-Eigenschaft kann `null` zurückgeben, selbst wenn der Navigationstyp als zurück/vorwärts gemeldet wird. Die Umstände, unter denen dies geschieht, umfassen:

- Das Duplizieren einer Zurück/Vorwärts-Navigation in einem neuen Tab. In solchen Fällen kopieren einige Browser den Navigationstyp vom Originaltab, aber da diese tatsächlich keine Zurück/Vorwärts-Navigationen sind, gibt `notRestoredReasons` `null` zurück.
- Das Wiederherstellen eines Zurück/Vorwärts-Navigationstabs nach einem Browser-Neustart. Da der bfcache vollständig geladene Seiten einschließlich DOM und JavaScript-Heap speichert, können Entwickler nicht dafür sorgen, dass bfcache einen vollständigen Neustart überlebt. Die Eigenschaft gibt daher `null` zurück, da es keinen bfcache-Eintrag gab, der die Wiederherstellung hätte blockieren können.

## Beispiele

[`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Daten können aus der Performance-Timeline mithilfe von [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) oder [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) abgerufen werden.

Beispielsweise könnte die folgende Funktion aufgerufen werden, um alle `PerformanceNavigationTiming`-Objekte, die derzeit in der Performance-Timeline vorhanden sind, zurückzugeben und ihre `notRestoredReasons` zu protokollieren:

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

Die `PerformanceNavigationTiming.notRestoredReasons`-Eigenschaft gibt ein Objekt mit der folgenden Struktur zurück, das die Gründe angibt, warum das aktuelle Dokument daran gehindert wurde, den bfcache zu nutzen. In diesem Beispiel hat das Top-Level-Frame keine eingebetteten `<iframe>`-Kinder:

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

- [Überwachung von bfcache-Blockierungsgründen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)
