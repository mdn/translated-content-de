---
title: "GPUDevice: createQuerySet() Methode"
short-title: createQuerySet()
slug: Web/API/GPUDevice/createQuerySet
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createQuerySet()`** Methode des [`GPUDevice`](/de/docs/Web/API/GPUDevice) Interfaces erstellt ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), das verwendet werden kann, um die Ergebnisse von Abfragen auf Passes aufzuzeichnen, wie beispielsweise Okklusions- oder Zeitstempelabfragen.

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
      - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `type`

      - : Ein enumerierter Wert, der den Typ der Abfragen angibt, die vom resultierenden [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) verwaltet werden sollen. Mögliche Werte sind:

        - `"occlusion"`
          - : Okklusionsabfragen sind auf Render-Passes verfügbar, um die Anzahl der Fragmentproben abzufragen, die alle per-Fragment-Tests für eine Reihe von Zeichnungsbefehlen bestehen (einschließlich Schere, Probemasken, Alpha-to-Coverage, Stencil und Tiefentests). Um eine Okklusionsabfrage auszuführen, muss ein entsprechendes [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) als Wert der `occlusionQuerySet` Descriptor-Eigenschaft angegeben werden, wenn [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) aufgerufen wird, um einen Render-Pass auszuführen.
        - `"timestamp"`

          - : Zeitstempelabfragen ermöglichen Anwendungen, Zeitstempel an ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) zu schreiben. Um eine Zeitstempelabfrage auszuführen, müssen entsprechende [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)s innerhalb des Werts der `timestampWrites` Descriptor-Eigenschaft angegeben werden, wenn [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) aufgerufen wird, um einen Render-Pass auszuführen, oder [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass), um einen Compute-Pass auszuführen. Alternativ können Sie jederzeit eine einzelne Zeitstempelabfrage ausführen, indem Sie [`GPUCommandEncoder.writeTimeStamp()`](/de/docs/Web/API/GPUCommandEncoder/writeTimestamp) mit einem geeigneten [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) als Parameter aufrufen.

            > [!NOTE]
            > Die `timestamp-query` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, um Zeitstempelabfragen verwenden zu können.

### Rückgabewert

Eine Instanz eines [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createQuerySet()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) Objekt zurückgegeben:

- `count` ist kleiner oder gleich 4096.

## Beispiele

Der folgende Codeausschnitt erstellt ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), das 32 Okklusionsabfrageergebnisse hält:

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
