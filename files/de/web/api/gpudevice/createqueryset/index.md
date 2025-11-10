---
title: "GPUDevice: createQuerySet()-Methode"
short-title: createQuerySet()
slug: Web/API/GPUDevice/createQuerySet
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createQuerySet()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), das verwendet werden kann, um die Ergebnisse von Abfragen auf Passes, wie Okklusions- oder Zeitstempelabfragen, aufzuzeichnen.

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
      - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `type`

      - : Ein enumerierter Wert, der den Typ der Abfragen angibt, die vom resultierenden [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) verwaltet werden sollen. Mögliche Werte sind:

        - `"occlusion"`
          - : Okklusionsabfragen stehen bei Render-Passes zur Verfügung, um die Anzahl der Fragmentproben abzufragen, die alle per-Fragment-Tests für einen Satz von Zeichnungsbefehlen bestehen (einschließlich Schere, Sample-Maske, Alpha-to-Coverage, Schablonen- und Tiefentests). Um eine Okklusionsabfrage auszuführen, muss ein geeignetes [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) als Wert der `occlusionQuerySet`-Deskriptoreigenschaft angegeben werden, wenn [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) aufgerufen wird, um einen Render-Pass auszuführen.
        - `"timestamp"`

          - : Zeitstempelabfragen ermöglichen es Anwendungen, Zeitstempel an ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) zu schreiben. Um eine Zeitstempelabfrage auszuführen, müssen geeignete [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) innerhalb des Wertes der `timestampWrites`-Deskriptoreigenschaft bereitgestellt werden, wenn [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) aufgerufen wird, um einen Render-Pass auszuführen, oder [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass), um einen Compute-Pass auszuführen. Alternativ können Sie jederzeit eine einzelne Zeitstempelabfrage durchführen, indem Sie [`GPUCommandEncoder.writeTimeStamp()`](/de/docs/Web/API/GPUCommandEncoder/writeTimestamp) mit einem geeigneten [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) als Parameter aufrufen.

            > [!NOTE]
            > Das `timestamp-query` [Feature](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, um Zeitstempelabfragen verwenden zu können.

### Rückgabewert

Eine Instanz eines [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)-Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createQuerySet()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)-Objekt zurückgegeben:

- `count` ist kleiner oder gleich 4096.

## Beispiele

Das folgende Snippet erstellt ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), das 32 Okklusionsabfrageergebnisse hält:

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
