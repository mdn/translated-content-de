---
title: "MediaSource: Statische Eigenschaft canConstructInDedicatedWorker"
short-title: canConstructInDedicatedWorker
slug: Web/API/MediaSource/canConstructInDedicatedWorker_static
l10n:
  sourceCommit: 118909727d715a42a27e3d368379bf959feca4af
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte statische Eigenschaft **`canConstructInDedicatedWorker`** der Schnittstelle [`MediaSource`](/de/docs/Web/API/MediaSource) gibt `true` zurück, wenn die Unterstützung für `MediaSource` in Workern implementiert ist. Sie ermöglicht damit eine Funktionserkennung mit geringer Latenz.

Ohne diese Eigenschaft müsste beispielsweise versucht werden, ein `MediaSource`-Objekt in einem Dedicated Worker zu erstellen und das Ergebnis an den Hauptthread zurückzugeben. Dieser Ansatz hätte eine deutlich höhere Latenz.

## Wert

Ein boolescher Wert. Gibt `true` zurück, wenn die Unterstützung für `MediaSource` in Workern implementiert ist, andernfalls `false`.

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

- [MSE-in-Workers-Demo von Matt Wolenetz](https://wolenetz.github.io/mse-in-workers-demo/mse-in-workers-demo.html)
- [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API)
- [`MediaSource`](/de/docs/Web/API/MediaSource)
- [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)
