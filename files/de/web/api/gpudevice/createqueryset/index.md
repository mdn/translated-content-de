---
title: "GPUDevice: createQuerySet()-Methode"
short-title: createQuerySet()
slug: Web/API/GPUDevice/createQuerySet
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`createQuerySet()`**-Methode der
{{domxref("GPUDevice")}}-Schnittstelle erstellt ein {{domxref("GPUQuerySet")}}, das zur Aufzeichnung von Abfrageergebnissen bei Durchgängen, wie z.B. Okklusions- oder Zeitstempelabfragen, verwendet werden kann.

## Syntax

```js-nolint
createQuerySet(descriptor)
```

### Parameter

- `descriptor`

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `count`
      - : Eine Zahl, die die Anzahl der Abfragen angibt, die von dem resultierenden {{domxref("GPUQuerySet")}} verwaltet werden sollen.
    - `label` {{optional_inline}}
      - : Ein String, der ein Etikett bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, z.B. in {{domxref("GPUError")}}-Meldungen oder Konsolenwarnungen.
    - `type`

      - : Ein enumerierter Wert, der den Typ der Abfragen angibt, die von dem resultierenden {{domxref("GPUQuerySet")}} verwaltet werden sollen. Mögliche Werte sind:

        - `"occlusion"`
          - : Okklusionsabfragen sind bei Render-Pässen verfügbar, um die Anzahl der Fragmentproben abzufragen, die alle Fragmenttests für eine Reihe von Zeichnungsbefehlen bestehen (einschließlich Schere, Probemaske, Alpha-to-Coverage, Stencil- und Tiefentests). Um eine Okklusionsabfrage durchzuführen, muss ein entsprechendes {{domxref("GPUQuerySet")}} als Wert der `occlusionQuerySet`-Deskriptoreigenschaft beim Aufruf von {{domxref("GPUCommandEncoder.beginRenderPass()")}} bereitgestellt werden, um einen Render-Pass durchzuführen.
        - `"timestamp"`

          - : Zeitstempelabfragen ermöglichen es Anwendungen, Zeitstempel in ein {{domxref("GPUQuerySet")}} zu schreiben. Um eine Zeitstempelabfrage durchzuführen, müssen entsprechende {{domxref("GPUQuerySet")}}s in der `timestampWrites`-Deskriptoreigenschaft beim Aufruf von {{domxref("GPUCommandEncoder.beginRenderPass()")}} für einen Render-Pass oder {{domxref("GPUCommandEncoder.beginComputePass()")}} für einen Compute-Pass bereitgestellt werden. Alternativ kann eine einzelne Zeitstempelabfrage jederzeit durch Aufrufen von {{domxref("GPUCommandEncoder.writeTimeStamp()")}} mit einem entsprechenden {{domxref("GPUQuerySet")}} als Parameter durchgeführt werden.

            Um Zeitstempelabfragen zu verwenden, muss das `timestamp-query` {{domxref("GPUSupportedFeatures", "feature", "", "nocode")}} in der {{domxref("GPUDevice")}} aktiviert sein.

### Rückgabewert

Eine Instanz des {{domxref("GPUQuerySet")}}-Objekts.

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`createQuerySet()`** erfüllt sein, ansonsten wird ein {{domxref("GPUValidationError")}} erzeugt und ein ungültiges {{domxref("GPUQuerySet")}}-Objekt zurückgegeben:

- `count` ist kleiner oder gleich 4096.

## Beispiele

Das folgende Snippet erstellt ein {{domxref("GPUQuerySet")}}, das 32 Okklusionsabfrageergebnisse enthält:

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
