---
title: "GPUDevice: createQuerySet()-Methode"
short-title: createQuerySet()
slug: Web/API/GPUDevice/createQuerySet
l10n:
  sourceCommit: 2379747e3cefc009c6a00ec52e88d66ff15c5397
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createQuerySet()`**-Methode des [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Interfaces erstellt ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), das verwendet werden kann, um die Ergebnisse von Abfragen bei Durchläufen aufzuzeichnen, wie zum Beispiel Okklusions- oder Zeitstempelabfragen.

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
      - : Ein String, der eine Bezeichnung bereitstellt, die verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.
    - `type`

      - : Ein enumerierter Wert, der den Typ der Abfragen angibt, die vom resultierenden [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) verwaltet werden sollen. Mögliche Werte sind:

        - `"occlusion"`
          - : Okklusionsabfragen sind in Render-Durchläufen verfügbar, um die Anzahl der Fragmentproben zu ermitteln, die alle Tests pro Fragment für einen Satz von Zeichenkommandos (einschließlich Schere, Probenmaske, Alpha-to-Coverage, Stencil- und Tiefentests) bestehen. Um eine Okklusionsabfrage auszuführen, muss ein entsprechendes [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) als Wert der `occlusionQuerySet`-Eigenschaft angegeben werden, wenn [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) aufgerufen wird, um einen Render-Durchlauf auszuführen.
        - `"timestamp"`

          - : Zeitstempelabfragen erlauben es Anwendungen, Zeitstempel in ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) zu schreiben. Um eine Zeitstempelabfrage auszuführen, müssen entsprechende [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)s im Wert der `timestampWrites`-Eigenschaft angegeben werden, wenn [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) aufgerufen wird, um einen Render-Durchlauf auszuführen, oder [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass), um einen Berechnungsdurchlauf auszuführen. Alternativ kann eine einzelne Zeitstempelabfrage jederzeit durch den Aufruf von [`GPUCommandEncoder.writeTimeStamp()`](/de/docs/Web/API/GPUCommandEncoder/writeTimeStamp) mit einem entsprechenden [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) als Parameter ausgeführt werden.

            > [!NOTE]
            > Die `timestamp-query` [feature](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, um Zeitstempelabfragen zu verwenden.

### Rückgabewert

Eine Instanz des [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)-Objekts.

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`createQuerySet()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)-Objekt zurückgegeben:

- `count` ist kleiner oder gleich 4096.

## Beispiele

Das folgende Beispiel erstellt ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), das 32 Okklusions-Abfrageergebnisse hält:

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
