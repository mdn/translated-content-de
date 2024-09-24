---
title: "MediaSource: canConstructInDedicatedWorker statische Eigenschaft"
short-title: canConstructInDedicatedWorker
slug: Web/API/MediaSource/canConstructInDedicatedWorker_static
l10n:
  sourceCommit: 4558d208395a5b1df4db44b0c8ef4e9a0f8adbbf
---

{{APIRef("Media Source Extensions")}}

Die **`canConstructInDedicatedWorker`** statische Eigenschaft des {{domxref("MediaSource")}}-Interfaces gibt `true` zurück, wenn die Unterstützung von `MediaSource` in Workern implementiert ist, was einen Mechanismus zur Feature-Erkennung mit geringer Latenz bietet.

Falls dies nicht verfügbar wäre, wäre die Alternative ein Ansatz mit deutlich höherer Latenz, wie der Versuch, ein `MediaSource`-Objekt von einem dedizierten Worker aus zu erstellen und das Ergebnis zurück an den Hauptthread zu übertragen.

## Wert

Ein boolescher Wert. Gibt `true` zurück, wenn die Unterstützung von `MediaSource` in Workern implementiert ist, oder `false` andernfalls.

## Beispiele

```js
if (MediaSource.canConstructInDedicatedWorker) {
  // MSE ist in Workern verfügbar; lassen Sie uns das tun
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [MSE-in-Workers Demo von Matt Wolenetz](https://wolenetz.github.io/mse-in-workers-demo/mse-in-workers-demo.html)
- {{domxref("Media Source Extensions API", "Media Source Extensions API", "", "nocode")}}
- {{domxref("MediaSource")}}
- {{domxref("SourceBuffer")}}
