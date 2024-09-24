---
title: "Fence: reportEvent()-Methode"
short-title: reportEvent()
slug: Web/API/Fence/reportEvent
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die **`reportEvent()`**-Methode der
{{domxref("Fence")}}-Schnittstelle löst die Übermittlung von Berichts-Daten über ein [Beacon](/de/docs/Web/API/Beacon_API) an eine oder mehrere spezifische URLs aus, die über die {{domxref("InterestGroupReportingScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}}-Methode der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) registriert wurden, um Ergebnisse von Anzeigenauktionen zu sammeln.

> **Hinweis:** {{domxref("Fence.setReportEventDataForAutomaticBeacons", "setReportEventDataForAutomaticBeacons()")}} bietet eine ähnliche Übermittlung von Berichts-Daten, jedoch wird in diesem Fall die Übermittlung durch eine Navigation und nicht durch einen expliziten Methodenaufruf ausgelöst.

## Syntax

```js-nolint
reportEvent(event)
```

### Parameter

- `event`
  - : Ein Objekt oder String, der die zu sendenden Daten darstellt.
    - Ein Objektwert definiert ein spezifisches Bericht-Event, das Sie senden möchten. Die erforderlichen Eigenschaften sind wie folgt:
      - `eventType`
        - : Ein String, der den Typ des Ereignisses darstellt, das gemeldet wird — zum Beispiel könnten Sie daran interessiert sein, wie oft auf eine Anzeige geklickt wird. Dieser String kann jeder relevante Ereignisname sein (zum Beispiel [`click`](/de/docs/Web/API/Element/click_event)). Dieser muss mit dem in dem zugehörigen {{domxref("InterestGroupReportingScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}}-Aufruf in einem [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience)-Worklet angegebenen Ereignistyp übereinstimmen.
      - `eventData`
        - : Ein String, der die zu sendenden Daten darstellt.
      - `destination`
        - : Ein Array, das einen oder mehrere aufgezählte Werte enthält, die die Zieltypen darstellen. Diese sind die beteiligten Parteien, die die Daten an ihre registrierten URLs erhalten (d.h. über {{domxref("InterestGroupReportingScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}}). Die möglichen Werte sind:
          - `"buyer"`: Der Bieter in der Anzeigenauktion.
          - `"seller"`: Der übergeordnete Verkäufer, der die Anzeigenauktion durchführt.
          - `"component-seller"`: Der Verkäufer für eine Komponentenauktion in einer mehrstufigen Auktion.
          - `"direct-seller"`: Der Verkäufer, der direkt die Auktion durchgeführt hat, in der der Käufer geboten hat. Wenn die Anzeige eine einstufige Auktion war, wird der Wert `"seller"` verwendet. Wenn die Anzeige eine mehrstufige Auktion war, wird der Wert `"component-seller"` verwendet.
          - `"shared-storage-select-url"`: Ein [Shared Storage API](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage)-Speicherort, wie er in einem {{domxref("WindowSharedStorage.selectURL", "Window.sharedStorage.selectURL()")}}-Methodenaufruf definiert ist.
    - Ein String-Wert repräsentiert ein `eventType`, zum Beispiel `"click"` (siehe die frühere Definition von `eventType`). Wenn ein `eventType`-String als Wert von `reportEvent()` übergeben wird, löst dies alle Private Aggregation-Beiträge aus, die bedingt auf diesem Ereignistyp gemacht wurden (zum Beispiel über {{domxref("PrivateAggregation.contributeToHistogramOnEvent()")}}), zur Übermittlung aus.

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
