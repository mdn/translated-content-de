---
title: GPUQuerySet
slug: Web/API/GPUQuerySet
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUQuerySet`** Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) wird verwendet, um die Ergebnisse von Abfragen in Durchläufen aufzuzeichnen, wie beispielsweise Okklusions- oder Zeitstempelabfragen.

- Okklusionsabfragen sind in Renderdurchläufen verfügbar, um abzufragen, ob alle Fragmentproben alle fragmentbezogenen Tests für eine Reihe von Zeichenbefehlen bestehen (einschließlich Scheren, Probenmaske, Alpha to Coverage, Stencil- und Tiefentests). Um eine Okklusionsabfrage auszuführen, muss ein entsprechendes `GPUQuerySet` als Wert der `occlusionQuerySet` Deskriptoreigenschaft bereitgestellt werden, wenn [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) zur Ausführung eines Renderdurchlaufs aufgerufen wird.

- Zeitstempelabfragen ermöglichen es Anwendungen, Zeitstempel in ein `GPUQuerySet` zu schreiben. Um eine Zeitstempelabfrage auszuführen, müssen geeignete `GPUQuerySet`s innerhalb des Werts der `timestampWrites` Deskriptoreigenschaft bereitgestellt werden, wenn [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) zum Ausführen eines Renderdurchlaufs oder [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) zum Ausführen eines Rechendurchlaufs aufgerufen wird. Alternativ kann jederzeit eine einzelne Zeitstempelabfrage durchgeführt werden, indem [`GPUCommandEncoder.writeTimeStamp()`](/de/docs/Web/API/GPUCommandEncoder/writeTimeStamp) mit einem geeigneten `GPUQuerySet` als Parameter aufgerufen wird.

> [!NOTE]
> Um Zeitstempelabfragen zu verwenden, muss das `timestamp-query` [Feature](/de/docs/Web/API/GPUSupportedFeatures) im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert sein.

Ein `GPUQuerySet` Objektinstanz wird mit der Methode [`GPUDevice.createQuerySet()`](/de/docs/Web/API/GPUDevice/createQuerySet) erstellt.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`count`](/de/docs/Web/API/GPUQuerySet/count) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Anzahl der vom `GPUQuerySet` verwalteten Abfragen angibt.
- [`label`](/de/docs/Web/API/GPUQuerySet/label) {{Experimental_Inline}}
  - : Ein String, der ein Etikett bereitstellt, das zum Identifizieren des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError) Meldungen oder Konsolenwarnungen.
- [`type`](/de/docs/Web/API/GPUQuerySet/type) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein enumerierter Wert, der den Typ der vom `GPUQuerySet` verwalteten Abfragen angibt.

## Instanzmethoden

- [`destroy()`](/de/docs/Web/API/GPUQuerySet/destroy) {{Experimental_Inline}}
  - : Zerstört das `GPUQuerySet`.

## Beispiele

Das folgende Beispiel erstellt ein `GPUQuerySet`, das 32 Okklusionsabfrageergebnisse enthält, und gibt dann den `type` und `count` zurück:

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
