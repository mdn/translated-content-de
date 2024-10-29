---
title: GPUQuerySet
slug: Web/API/GPUQuerySet
l10n:
  sourceCommit: 2379747e3cefc009c6a00ec52e88d66ff15c5397
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUQuerySet`** Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) wird verwendet, um die Ergebnisse von Abfragen für Passes aufzuzeichnen, wie z.B. Okklusions- oder Zeitstempelabfragen.

- Okklusionsabfragen sind bei Render-Passes verfügbar, um abzufragen, ob Fragmente alle fragmentbezogenen Tests für eine Reihe von Zeichnungsbefehlen bestehen (einschließlich Schere, Sample-Maske, Alpha-to-Coverage, Stencil- und Tiefentests). Um eine Okklusionsabfrage durchzuführen, muss ein geeignetes `GPUQuerySet` als Wert der `occlusionQuerySet`-Deskriptoreigenschaft bereitgestellt werden, wenn [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) aufgerufen wird, um einen Render-Pass auszuführen.

- Zeitstempelabfragen ermöglichen es Anwendungen, Zeitstempel in ein `GPUQuerySet` zu schreiben. Um eine Zeitstempelabfrage durchzuführen, müssen geeignete `GPUQuerySet`s innerhalb des Wertes der `timestampWrites`-Deskriptoreigenschaft bereitgestellt werden, wenn [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) aufgerufen wird, um einen Render-Pass auszuführen, oder [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass), um einen Compute-Pass auszuführen.

> [!NOTE]
> Die `timestamp-query` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, um Zeitstempelabfragen zu verwenden.

Eine Instanz eines `GPUQuerySet`-Objekts wird mit der Methode [`GPUDevice.createQuerySet()`](/de/docs/Web/API/GPUDevice/createQuerySet) erstellt.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`count`](/de/docs/Web/API/GPUQuerySet/count) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Anzahl der Abfragen angibt, die vom `GPUQuerySet` verwaltet werden.
- [`label`](/de/docs/Web/API/GPUQuerySet/label) {{Experimental_Inline}}
  - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
- [`type`](/de/docs/Web/API/GPUQuerySet/type) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein enumerierter Wert, der den Typ der vom `GPUQuerySet` verwalteten Abfragen angibt.

## Instanzmethoden

- [`destroy()`](/de/docs/Web/API/GPUQuerySet/destroy) {{Experimental_Inline}}
  - : Zerstört das `GPUQuerySet`.

## Beispiele

Das folgende Beispiel erstellt ein `GPUQuerySet`, das 32 Okklusionsabfrageergebnisse hält, und gibt dann den `type` und die `count` zurück:

```js
const querySet = device.createQuerySet({
  type: "occlusion",
  count: 32,
});

console.log(querySet.count); // 32
console.log(querySet.type); // "occlusion"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
