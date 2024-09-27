---
title: "MediaSource: canConstructInDedicatedWorker statische Eigenschaft"
short-title: canConstructInDedicatedWorker
slug: Web/API/MediaSource/canConstructInDedicatedWorker_static
l10n:
  sourceCommit: 1573959d78591b4079500af13019f901faaaca02
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die statische Eigenschaft **`canConstructInDedicatedWorker`** des [`MediaSource`](/de/docs/Web/API/MediaSource)-Interfaces gibt `true` zurück, wenn `MediaSource`-Worker-Unterstützung implementiert ist. Dies bietet einen Mechanismus zur Erkennung von Funktionen mit niedriger Latenz.

Wenn dies nicht verfügbar wäre, wäre die Alternative ein Ansatz mit wesentlich höherer Latenz, wie zum Beispiel der Versuch, ein `MediaSource`-Objekt aus einem dedizierten Worker zu erstellen und das Ergebnis zurück an den Haupt-Thread zu übertragen.

## Wert

Ein boolescher Wert. Gibt `true` zurück, wenn `MediaSource`-Worker-Unterstützung implementiert ist, oder `false` andernfalls.

## Beispiele

```js
if (MediaSource.canConstructInDedicatedWorker) {
  // MSE is available in workers; let's do this
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [MSE-in-Workers Demo von Matt Wolenetz](https://wolenetz.github.io/mse-in-workers-demo/mse-in-workers-demo.html)
- [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API)
- [`MediaSource`](/de/docs/Web/API/MediaSource)
- [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)
