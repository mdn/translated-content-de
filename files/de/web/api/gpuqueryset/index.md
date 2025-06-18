---
title: GPUQuerySet
slug: Web/API/GPUQuerySet
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUQuerySet`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) wird verwendet, um die Ergebnisse von Abfragen auf Durchläufen aufzuzeichnen, wie zum Beispiel Okklusions- oder Zeitstempelabfragen.

- Okklusionsabfragen sind auf Render-Durchläufen verfügbar, um abzufragen, ob Fragmentproben alle Tests pro Fragment für einen Satz von Zeichenbefehlen bestehen (einschließlich Scheren, Probenmasken, Alpha-to-Coverage, Schablonen- und Tiefentests). Um eine Okklusionsabfrage auszuführen, muss ein entsprechendes `GPUQuerySet` als Wert der `occlusionQuerySet`-Deskriptoreigenschaft bereitgestellt werden, wenn [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) aufgerufen wird, um einen Render-Durchlauf auszuführen.

- Zeitstempelabfragen erlauben es Anwendungen, Zeitstempel in ein `GPUQuerySet` zu schreiben. Um eine Zeitstempelabfrage auszuführen, müssen entsprechende `GPUQuerySet`s innerhalb des Wertes der `timestampWrites`-Deskriptoreigenschaft bereitgestellt werden, wenn [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) für einen Render-Durchlauf oder [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) für einen Berechnungsdurchlauf aufgerufen wird.

> [!NOTE]
> Das `timestamp-query`-[Feature](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, um Zeitstempelabfragen zu verwenden.

Ein `GPUQuerySet`-Objekt wird mit der Methode [`GPUDevice.createQuerySet()`](/de/docs/Web/API/GPUDevice/createQuerySet) erstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`count`](/de/docs/Web/API/GPUQuerySet/count) {{ReadOnlyInline}}
  - : Eine Zahl, die die Anzahl der vom `GPUQuerySet` verwalteten Abfragen angibt.
- [`label`](/de/docs/Web/API/GPUQuerySet/label)
  - : Ein String, der ein Bezeichner zur Verfügung stellt, der verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
- [`type`](/de/docs/Web/API/GPUQuerySet/type) {{ReadOnlyInline}}
  - : Ein enumerierter Wert, der den Typ der vom `GPUQuerySet` verwalteten Abfragen angibt.

## Instanz-Methoden

- [`destroy()`](/de/docs/Web/API/GPUQuerySet/destroy)
  - : Zerstört das `GPUQuerySet`.

## Beispiele

Der folgende Ausschnitt erstellt ein `GPUQuerySet`, das 32 Okklusionsabfrageergebnisse enthält, und gibt dann den `type` und `count` zurück:

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
