---
title: "Fence: reportEvent() Methode"
short-title: reportEvent()
slug: Web/API/Fence/reportEvent
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die **`reportEvent()`** Methode der
[`Fence`](/de/docs/Web/API/Fence) Schnittstelle löst die Übermittlung von Berichtsdaten über ein [Beacon](/de/docs/Web/API/Beacon_API) an eine oder mehrere spezifische URLs aus, die über die Methode [`registerAdBeacon()`](/de/docs/Web/API/InterestGroupReportingScriptRunnerGlobalScope/registerAdBeacon) der [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) registriert wurden, um Ergebnisse von Anzeigenauktionen zu sammeln.

> **Hinweis:** [`setReportEventDataForAutomaticBeacons()`](/de/docs/Web/API/Fence/setReportEventDataForAutomaticBeacons) bietet eine ähnliche Übermittlung von Berichtsdaten, außer dass in diesem Fall die Übermittlung durch eine Navigation und nicht durch einen expliziten Methodenaufruf ausgelöst wird.

## Syntax

```js-nolint
reportEvent(event)
```

### Parameter

- `event`
  - : Ein Objekt oder String, das die zu sendenden Daten repräsentiert.
    - Ein Objektwert definiert ein spezifisches Berichtsereignis, das Sie senden möchten. Die erforderlichen Eigenschaften sind wie folgt:
      - `eventType`
        - : Ein String, der den Typ des gemeldeten Ereignisses darstellt — zum Beispiel könnten Sie interessiert sein, wie oft auf eine Anzeige geklickt wird. Dieser String kann jeden relevanten Ereignisnamen enthalten (zum Beispiel [`click`](/de/docs/Web/API/Element/click_event)). Er muss mit dem in dem zugehörigen [`registerAdBeacon()`](/de/docs/Web/API/InterestGroupReportingScriptRunnerGlobalScope/registerAdBeacon) Aufruf in einem [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) Worklet angegebenen Ereignistyp übereinstimmen.
      - `eventData`
        - : Ein String, der die zu sendenden Daten darstellt.
      - `destination`
        - : Ein Array, das einen oder mehrere enumerierte Werte enthält, die Zieltypen darstellen. Diese sind die involvierten Parteien, die die Daten an ihre registrierten URLs erhalten werden (d.h. über [`registerAdBeacon()`](/de/docs/Web/API/InterestGroupReportingScriptRunnerGlobalScope/registerAdBeacon)). Die möglichen Werte sind:
          - `"buyer"`: Der Bieter in der Anzeigenauktion.
          - `"seller"`: Der Hauptverkäufer, der die Anzeigenauktion durchführt.
          - `"component-seller"`: Der Verkäufer für eine Komponentenauktion in einer mehrstufigen Auktion.
          - `"direct-seller"`: Der Verkäufer, der die Auktion direkt durchgeführt hat, in der der Käufer geboten hat. Wenn die Anzeige eine einstufige Auktion war, wird der Wert `"seller"` verwendet. Wenn die Anzeige eine mehrstufige Auktion war, wird der Wert `"component-seller"` verwendet.
          - `"shared-storage-select-url"`: Ein [Shared Storage API](https://privacysandbox.google.com/private-advertising/shared-storage) Speicherort, wie in einem [`Window.sharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) Methodenaufruf definiert.
    - Ein Stringwert repräsentiert ein `eventType`, zum Beispiel `"click"` (siehe frühere Definition von `eventType`). Wenn ein `eventType` String als Wert von `reportEvent()` übergeben wird, löst es alle Private Aggregation Beiträge aus, die unter der Bedingung dieses Ereignistyps gemacht wurden (zum Beispiel über [`PrivateAggregation.contributeToHistogramOnEvent()`](/de/docs/Web/API/PrivateAggregation/contributeToHistogramOnEvent)), um gesendet zu werden.

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

- [Fenced frames](https://privacysandbox.google.com/private-advertising/fenced-frame) auf privacysandbox.google.com
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
