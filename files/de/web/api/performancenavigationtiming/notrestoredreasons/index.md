---
title: "PerformanceNavigationTiming: Eigenschaft notRestoredReasons"
short-title: notRestoredReasons
slug: Web/API/PerformanceNavigationTiming/notRestoredReasons
l10n:
  sourceCommit: 3148591fa7280daf3e88a5cece3b60dfc9470330
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`notRestoredReasons`** des {{domxref("PerformanceNavigationTiming")}}-Interfaces gibt ein {{domxref("NotRestoredReasons")}}-Objekt zurück, das Berichtsdaten zu den Gründen bereitstellt, warum das aktuelle Dokument daran gehindert wurde, den Cache für Vorwärts-/Rückwärtsnavigation ({{Glossary("bfcache")}}) bei der Navigation zu nutzen.

## Wert

Wenn das zugehörige `PerformanceNavigationTiming`-Objekt eine Verlaufseintragung darstellt, gibt `notRestoredReasons` ein {{domxref("NotRestoredReasons")}}-Objekt zurück.

Wenn das `PerformanceNavigationTiming`-Objekt keine Verlaufseintragung darstellt, wird `notRestoredReasons` `null` zurückgeben. Dies ist nützlich, um festzustellen, ob der bfcache für eine bestimmte Navigation irrelevant ist (im Gegensatz dazu, dass `notRestoredReasons` nicht unterstützt wird, in welchem Fall `undefined` zurückgegeben würde).

> **Note:** `notRestoredReasons` kann `null` zurückgeben, obwohl der Navigationstyp als Rückwärts-/Vorwärtsnavigation gemeldet wird. Solche Umstände schließen das Duplizieren einer Rückwärts-/Vorwärtsnavigation in einem neuen Tab und das Wiederherstellen eines Rückwärts-/Vorwärtstabs nach einem Browser-Neustart ein. In solchen Fällen kopieren einige Browser den Navigationstyp vom Original-Tab, aber da es sich tatsächlich nicht um Rückwärts-/Vorwärtsnavigationen handelt, gibt `notRestoredReasons` `null` zurück.

## Beispiele

[`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Daten können aus der Leistungslinie mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) oder [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) abgerufen werden.

Zum Beispiel könnten Sie die folgende Funktion aufrufen, um alle `PerformanceNavigationTiming`-Objekte, die derzeit in der Leistungslinie vorhanden sind, zurückzugeben und ihre `notRestoredReasons` zu protokollieren:

```js
function returnNRR() {
  const navEntries = performance.getEntriesByType("navigation");
  for (let i = 0; i < navEntries.length; i++) {
    console.log(`Navigationseintrag ${i}`);
    let navEntry = navEntries[i];
    console.log(navEntry.notRestoredReasons);
  }
}
```

Die Eigenschaft `PerformanceNavigationTiming.notRestoredReasons` gibt ein Objekt mit der folgenden Struktur zurück, das die Gründe enthält, warum das aktuelle Dokument daran gehindert wurde, den bfcache zu nutzen. In diesem Beispiel enthält der Hauptframe keine eingebetteten `<iframe>`-Kinder:

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

- [Überwachung der Gründe für bfcache-Blockierungen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- {{domxref("PerformanceResourceTiming")}}
