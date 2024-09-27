---
title: "GPUDevice: createQuerySet()-Methode"
short-title: createQuerySet()
slug: Web/API/GPUDevice/createQuerySet
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createQuerySet()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), das verwendet werden kann, um die Ergebnisse von Abfragen bei Durchläufen aufzuzeichnen, wie zum Beispiel Okklusions- oder Zeitstempelabfragen.

## Syntax

```js-nolint
createQuerySet(descriptor)
```

### Parameter

- `descriptor`

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `count`
      - : Eine Zahl, die die Anzahl der Abfragen angibt, die vom resultierenden [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) verwaltet werden sollen.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.
    - `type`

      - : Ein enumerierter Wert, der den Typ der Abfragen angibt, die vom resultierenden [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) verwaltet werden sollen. Mögliche Werte sind:

        - `"occlusion"`
          - : Okklusionsabfragen sind in Renderdurchläufen verfügbar, um die Anzahl der Fragmentproben abzufragen, die alle per-Fragment-Tests für einen Satz von Zeichenbefehlen bestehen (einschließlich Schere, Probenmaske, Alpha-to-Coverage, Schablone und Tiefentests). Um eine Okklusionsabfrage auszuführen, muss ein geeignetes [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) als Wert der `occlusionQuerySet`-Descriptor-Eigenschaft bereitgestellt werden, wenn [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) aufgerufen wird, um einen Renderdurchlauf auszuführen.
        - `"timestamp"`

          - : Zeitstempelabfragen ermöglichen es Anwendungen, Zeitstempel in ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) zu schreiben. Um eine Zeitstempelabfrage auszuführen, müssen geeignete [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)s im Wert der `timestampWrites`-Descriptor-Eigenschaft bereitgestellt werden, wenn [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) aufgerufen wird, um einen Renderdurchlauf auszuführen, oder [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass), um einen Computedurchlauf auszuführen. Alternativ können Sie jederzeit eine einzelne Zeitstempelabfrage ausführen, indem Sie [`GPUCommandEncoder.writeTimeStamp()`](/de/docs/Web/API/GPUCommandEncoder/writeTimeStamp) mit einem geeigneten [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) als Parameter aufrufen.

            Um Zeitstempelabfragen zu verwenden, muss das `timestamp-query`-[Feature](/de/docs/Web/API/GPUSupportedFeatures) im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert sein.

### Rückgabewert

Eine Instanz eines [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)-Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createQuerySet()`** aufgerufen wird, ansonsten wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)-Objekt zurückgegeben:

- `count` ist kleiner oder gleich 4096.

## Beispiele

Der folgende Ausschnitt erstellt ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), das 32 Okklusionsabfrageergebnisse hält:

```js
const querySet = device.createQuerySet({
  type: "occlusion",
  count: 32,
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
