---
title: "GPUDevice: createQuerySet()-Methode"
short-title: createQuerySet()
slug: Web/API/GPUDevice/createQuerySet
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createQuerySet()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), das verwendet werden kann, um die Ergebnisse von Abfragen in Durchläufen zu protokollieren, wie z.B. Okklusions- oder Zeitstempelabfragen.

## Syntax

```js-nolint
createQuerySet(descriptor)
```

### Parameter

- `descriptor`

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `count`
      - : Eine Zahl, die die Anzahl der Abfragen angibt, die vom resultierenden [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) verwaltet werden sollen.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, z.B. in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `type`

      - : Ein enumerierter Wert, der den Typ der Abfragen angibt, die vom resultierenden [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) verwaltet werden sollen. Mögliche Werte sind:

        - `"occlusion"`
          - : Okklusionsabfragen sind in Rendering-Durchläufen verfügbar, um die Anzahl der Fragmentproben abzufragen, die alle pro-Fragment-Prüfungen für eine Reihe von Zeichenbefehlen bestehen (einschließlich Schermaske, Probenmaske, Alpha to Coverage, Schablonen- und Tiefenprüfungen). Um eine Okklusionsabfrage auszuführen, muss ein entsprechendes [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) als Wert der `occlusionQuerySet`-Deskriptoreigenschaft angegeben werden, wenn [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) aufgerufen wird, um einen Rendering-Durchlauf auszuführen.
        - `"timestamp"`

          - : Zeitstempelabfragen ermöglichen es Anwendungen, Zeitstempel in ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) zu schreiben. Um eine Zeitstempelabfrage auszuführen, müssen entsprechende [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)s als Wert der `timestampWrites`-Deskriptoreigenschaft angegeben werden, wenn [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) aufgerufen wird, um einen Rendering-Durchlauf auszuführen, oder [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) für einen Berechnungsdurchlauf. Alternativ kann jederzeit eine einzelne Zeitstempelabfrage durchgeführt werden, indem [`GPUCommandEncoder.writeTimeStamp()`](/de/docs/Web/API/GPUCommandEncoder/writeTimeStamp) mit einem entsprechenden [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) als Parameter aufgerufen wird.

            Um Zeitstempelabfragen zu verwenden, muss das `timestamp-query`-[Feature](/de/docs/Web/API/GPUSupportedFeatures) im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert sein.

### Rückgabewert

Eine Instanz des [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)-Objekts.

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`createQuerySet()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)-Objekt zurückgegeben:

- `count` ist kleiner oder gleich 4096.

## Beispiele

Das folgende Snippet erstellt ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), das 32 Okklusionsabfrageergebnisse enthält:

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
