---
title: "Fence: reportEvent() Methode"
short-title: reportEvent()
slug: Web/API/Fence/reportEvent
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die **`reportEvent()`** Methode der [`Fence`](/de/docs/Web/API/Fence)-Schnittstelle löst die Übermittlung von Berichtsdaten über ein [beacon](/de/docs/Web/API/Beacon_API) an eine oder mehrere spezifische URLs aus, die über die [`registerAdBeacon()`](/de/docs/Web/API/InterestGroupReportingScriptRunnerGlobalScope/registerAdBeacon)-Methode der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) registriert wurden, um die Ergebnisse der Anzeigenauktion zu sammeln.

> **Note:** [`setReportEventDataForAutomaticBeacons()`](/de/docs/Web/API/Fence/setReportEventDataForAutomaticBeacons) bietet eine ähnliche Übermittlung von Berichtsdaten, außer dass die Übermittlung in diesem Fall durch eine Navigation und nicht durch einen expliziten Methodenaufruf ausgelöst wird.

## Syntax

```js-nolint
reportEvent(event)
```

### Parameter

- `event`
  - : Ein Objekt oder ein String, der die zu sendenden Daten darstellt.
    - Ein Objektwert definiert ein spezifisches Berichtsevent, das Sie senden möchten. Die erforderlichen Eigenschaften sind wie folgt:
      - `eventType`
        - : Ein String, der den Typ des berichteten Events darstellt – zum Beispiel könnten Sie daran interessiert sein, wie oft auf eine Anzeige geklickt wird. Dieser String kann jeder relevante Eventname sein (zum Beispiel [`click`](/de/docs/Web/API/Element/click_event)). Dieser muss mit dem im zugehörigen [`registerAdBeacon()`](/de/docs/Web/API/InterestGroupReportingScriptRunnerGlobalScope/registerAdBeacon)-Aufruf in einem [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) Worklet angegebenen Eventtyp übereinstimmen.
      - `eventData`
        - : Ein String, der die zu sendenden Daten darstellt.
      - `destination`
        - : Ein Array, das einen oder mehrere aufgezählte Werte enthält, die Zieltypen darstellen. Dies sind die beteiligten Parteien, die die Daten an ihre registrierten URLs erhalten (d. h. über [`registerAdBeacon()`](/de/docs/Web/API/InterestGroupReportingScriptRunnerGlobalScope/registerAdBeacon)). Die möglichen Werte sind:
          - `"buyer"`: Der Bieter in der Anzeigenauktion.
          - `"seller"`: Der Hauptverkäufer, der die Anzeigenauktion durchführt.
          - `"component-seller"`: Der Verkäufer für eine Komponentenauktion in einer mehrstufigen Auktion.
          - `"direct-seller"`: Der Verkäufer, der die Auktion, in der der Käufer geboten hat, direkt durchgeführt hat. Wenn die Anzeige eine einstufige Auktion war, wird der Wert `"seller"` verwendet. Wenn die Anzeige eine mehrstufige Auktion war, wird der Wert `"component-seller"` verwendet.
          - `"shared-storage-select-url"`: Ein [Shared Storage API](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage) Speicherort, wie in einem [`Window.sharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL)-Methodenaufruf definiert.
    - Ein Stringwert stellt einen `eventType` dar, zum Beispiel `"click"` (siehe die frühere Definition von `eventType`). Wenn ein `eventType`-String als Wert von `reportEvent()` übergeben wird, löst dies alle Private Aggregation-Beiträge aus, die von diesem Eventtyp abhängen (zum Beispiel über [`PrivateAggregation.contributeToHistogramOnEvent()`](/de/docs/Web/API/PrivateAggregation/contributeToHistogramOnEvent)) gesendet werden sollen.

### Rückgabewert

Keiner (`Undefined`).

## Beispiele

```js
window.fence.reportEvent({
  eventType: "click",
  eventData: JSON.stringify({ clickX: "123", clickY: "456" }),
  destination: ["buyer", "seller"],
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced frames](https://developers.google.com/privacy-sandbox/private-advertising/fenced-frame) auf developers.google.com
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
