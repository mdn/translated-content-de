---
title: GPUQuerySet
slug: Web/API/GPUQuerySet
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUQuerySet`**-Schnittstelle der [WebGPU-API](/de/docs/Web/API/WebGPU_API) wird verwendet, um die Ergebnisse von Anfragen in Durchläufen aufzuzeichnen, wie etwa Okkulsions- oder Zeitstempelanfragen.

- Okkulsionsanfragen sind in Renderdurchläufen verfügbar, um zu prüfen, ob irgendwelche Fragmentproben alle Tests pro Fragment für eine Reihe von Zeichenbefehlen bestehen (inklusive Schere, Probenmaske, Alpha-to-Coverage, Stencil- und Tiefentests). Um eine Okkulsionsanfrage durchzuführen, muss ein geeigneter `GPUQuerySet` als Wert der `occlusionQuerySet` Deskriptoreigenschaft bereitgestellt werden, wenn [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) aufgerufen wird, um einen Renderdurchlauf auszuführen.

- Zeitstempelanfragen ermöglichen es Anwendungen, Zeitstempel in einen `GPUQuerySet` zu schreiben. Um eine Zeitstempelanfrage durchzuführen, müssen geeignete `GPUQuerySet`s als Wert der `timestampWrites` Deskriptoreigenschaft bereitgestellt werden, wenn [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) aufgerufen wird, um einen Renderdurchlauf, oder [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) um einen Berechnungsdurchlauf auszuführen. Alternativ kann eine einzelne Zeitstempelanfrage jederzeit durch Aufrufen von [`GPUCommandEncoder.writeTimeStamp()`](/de/docs/Web/API/GPUCommandEncoder/writeTimeStamp) mit einem geeigneten `GPUQuerySet` als Parameter durchgeführt werden.

> [!NOTE]
> Um Zeitstempelanfragen zu verwenden, muss das `timestamp-query` [Feature](/de/docs/Web/API/GPUSupportedFeatures) im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert sein.

Ein `GPUQuerySet` Objekt wird mit der Methode [`GPUDevice.createQuerySet()`](/de/docs/Web/API/GPUDevice/createQuerySet) erstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`count`](/de/docs/Web/API/GPUQuerySet/count) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Anzahl der von dem `GPUQuerySet` verwalteten Anfragen angibt.
- [`label`](/de/docs/Web/API/GPUQuerySet/label) {{Experimental_Inline}}
  - : Ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
- [`type`](/de/docs/Web/API/GPUQuerySet/type) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein enumerierter Wert, der den Typ der von dem `GPUQuerySet` verwalteten Anfragen angibt.

## Instanz-Methoden

- [`destroy()`](/de/docs/Web/API/GPUQuerySet/destroy) {{Experimental_Inline}}
  - : Zerstört das `GPUQuerySet`.

## Beispiele

Das folgende Beispiel erstellt ein `GPUQuerySet`, das 32 Okkulsionsanfrage-Ergebnisse hält, und gibt dann den `type` und `count` zurück:

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
