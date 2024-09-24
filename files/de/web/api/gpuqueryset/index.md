---
title: GPUQuerySet
slug: Web/API/GPUQuerySet
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`GPUQuerySet`**-Schnittstelle der {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} wird verwendet, um die Ergebnisse von Abfragen in Passes zu erfassen, wie zum Beispiel Okklusions- oder Zeitstempelabfragen.

- Okklusionsabfragen sind in Render-Passes verfügbar, um zu prüfen, ob irgendwelche Fragment-Samples alle Tests auf Fragment-Ebene für eine Reihe von Zeichenbefehlen bestehen (einschließlich Scherenschnitt, Sample-Maske, Alpha-zu-Coverage, Stencil- und Tiefentests). Um eine Okklusionsabfrage durchzuführen, muss ein entsprechendes `GPUQuerySet` als Wert der `occlusionQuerySet`-Deskriptoreigenschaft bereitgestellt werden, wenn {{domxref("GPUCommandEncoder.beginRenderPass()")}} aufgerufen wird, um einen Render-Pass auszuführen.

- Zeitstempelabfragen ermöglichen es Anwendungen, Zeitstempel in ein `GPUQuerySet` zu schreiben. Um eine Zeitstempelabfrage durchzuführen, müssen entsprechende `GPUQuerySet`s innerhalb des Wertes der `timestampWrites`-Deskriptoreigenschaft bereitgestellt werden, wenn {{domxref("GPUCommandEncoder.beginRenderPass()")}} aufgerufen wird, um einen Render-Pass auszuführen, oder {{domxref("GPUCommandEncoder.beginComputePass()")}} um einen Compute-Pass durchzuführen. Alternativ können Sie jederzeit eine einzelne Zeitstempelabfrage durchführen, indem Sie {{domxref("GPUCommandEncoder.writeTimeStamp()")}} mit einem entsprechenden `GPUQuerySet` als Parameter aufrufen.

> [!NOTE]
> Um Zeitstempelabfragen zu verwenden, muss das `timestamp-query` {{domxref("GPUSupportedFeatures", "feature", "", "nocode")}} im {{domxref("GPUDevice")}} aktiviert sein.

Ein `GPUQuerySet` Objektinstanz wird mit der Methode {{domxref("GPUDevice.createQuerySet()")}} erstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref("GPUQuerySet.count", "count")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Anzahl der Abfragen angibt, die vom `GPUQuerySet` verwaltet werden.
- {{domxref("GPUQuerySet.label", "label")}} {{Experimental_Inline}}
  - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in {{domxref("GPUError")}}-Meldungen oder Konsolenwarnungen.
- {{domxref("GPUQuerySet.type", "type")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein enumerierter Wert, der den Typ der Abfragen angibt, die vom `GPUQuerySet` verwaltet werden.

## Instanz-Methoden

- {{domxref("GPUQuerySet.destroy", "destroy()")}} {{Experimental_Inline}}
  - : Zerstört das `GPUQuerySet`.

## Beispiele

Das folgende Snippet erstellt ein `GPUQuerySet`, das 32 Okklusionsabfrage-Ergebnisse hält, und gibt dann den `type` und `count` zurück:

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
