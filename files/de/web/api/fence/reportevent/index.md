---
title: "Fence: reportEvent() Methode"
short-title: reportEvent()
slug: Web/API/Fence/reportEvent
l10n:
  sourceCommit: e316526e520d8163e9151dca8973eb777b5285e0
---

{{APIRef("Fenced Frame API")}}

Die **`reportEvent()`** Methode des
[`Fence`](/de/docs/Web/API/Fence) Interfaces löst die Übermittlung von Berichtsdaten über ein [Beacon](/de/docs/Web/API/Beacon_API) zu einer oder mehreren spezifischen URLs aus, die über die [`registerAdBeacon()`](/de/docs/Web/API/InterestGroupReportingScriptRunnerGlobalScope/registerAdBeacon) Methode der [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) registriert sind, um Ergebnisse von Anzeigenauktionen zu sammeln.

> [!NOTE]
> [`setReportEventDataForAutomaticBeacons()`](/de/docs/Web/API/Fence/setReportEventDataForAutomaticBeacons) bietet ähnliche Berichtsdatenübermittlungen, außer dass in diesem Fall die Übermittlung durch eine Navigation und nicht durch einen expliziten Methodenaufruf ausgelöst wird.

## Syntax

```js-nolint
reportEvent(event)
```

### Parameter

- `event`
  - : Ein Objekt oder String, der die zu sendenden Daten repräsentiert.
    - Ein Objektwert definiert ein spezifisches Berichtsevent, das Sie senden möchten. Die erforderlichen Eigenschaften sind wie folgt:
      - `eventType`
        - : Ein String, der den Typ des gemeldeten Ereignisses darstellt — zum Beispiel könnten Sie interessiert sein, wie oft eine Anzeige angeklickt wird. Dieser String kann jeden relevanten Ereignisnamen enthalten (zum Beispiel [`click`](/de/docs/Web/API/Element/click_event)). Dieser muss mit dem Ereignistyp übereinstimmen, der im zugehörigen [`registerAdBeacon()`](/de/docs/Web/API/InterestGroupReportingScriptRunnerGlobalScope/registerAdBeacon) Aufruf in einem [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) Worklet angegeben wurde.
      - `eventData`
        - : Ein String, der die zu sendenden Daten darstellt.
      - `destination`
        - : Ein Array, das einen oder mehrere aufgezählte Werte enthält, die Zieltypen repräsentieren. Dies sind die beteiligten Parteien, die die Daten an ihre registrierten URLs erhalten (d.h. über [`registerAdBeacon()`](/de/docs/Web/API/InterestGroupReportingScriptRunnerGlobalScope/registerAdBeacon)). Die möglichen Werte sind:
          - `"buyer"`: Der Bieter in der Anzeigenauktion.
          - `"seller"`: Der oberste Verkäufer, der die Anzeigenauktion ausführt.
          - `"component-seller"`: Der Verkäufer für eine Komponentenausschreibung in einer mehrstufigen Auktion.
          - `"direct-seller"`: Der Verkäufer, der direkt die Ausschreibung ausgeführt hat, bei der der Käufer geboten hat. Wenn es sich um eine einstufige Auktion handelte, wird der Wert `"seller"` verwendet. Wenn es sich um eine mehrstufige Auktion handelte, wird der Wert `"component-seller"` verwendet.
          - `"shared-storage-select-url"`: Ein Speicherort der [Shared Storage API](https://privacysandbox.google.com/private-advertising/shared-storage), wie in einem [`Window.sharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) Methodenaufruf definiert.
    - Ein Stringwert repräsentiert einen `eventType`, zum Beispiel `"click"` (siehe die frühere Definition von `eventType`). Wenn ein `eventType` String als Wert von `reportEvent()` übergeben wird, löst dies alle Private Aggregation Beiträge aus, die an diesen Ereignistyp gebunden waren (zum Beispiel über [`PrivateAggregation.contributeToHistogramOnEvent()`](/de/docs/Web/API/PrivateAggregation/contributeToHistogramOnEvent)), um gesendet zu werden.

### Rückgabewert

Kein (`Undefined`).

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
