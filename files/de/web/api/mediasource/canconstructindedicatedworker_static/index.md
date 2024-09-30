---
title: "MediaSource: canConstructInDedicatedWorker statische Eigenschaft"
short-title: canConstructInDedicatedWorker
slug: Web/API/MediaSource/canConstructInDedicatedWorker_static
l10n:
  sourceCommit: 1573959d78591b4079500af13019f901faaaca02
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`canConstructInDedicatedWorker`** statische Eigenschaft der [`MediaSource`](/de/docs/Web/API/MediaSource) Schnittstelle gibt `true` zurück, wenn die Unterstützung von `MediaSource`-Workern implementiert ist, und bietet damit einen Mechanismus zur Erkennung von Features mit niedriger Latenz.

Wenn dies nicht verfügbar wäre, wäre die Alternative ein Ansatz mit wesentlich höherer Latenz, wie der Versuch, ein `MediaSource`-Objekt von einem dedizierten Worker aus zu erstellen und das Ergebnis zurück an den Haupt-Thread zu übertragen.

## Wert

Ein Boolean. Gibt `true` zurück, wenn die Unterstützung von `MediaSource`-Workern implementiert ist, andernfalls `false`.

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
