---
title: "Fence: reportEvent() Methode"
short-title: reportEvent()
slug: Web/API/Fence/reportEvent
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die **`reportEvent()`** Methode des [`Fence`](/de/docs/Web/API/Fence) Interface löst die Übermittlung von Berichtsdaten über ein [Beacon](/de/docs/Web/API/Beacon_API) an eine oder mehrere spezifische URLs aus, die über die [`registerAdBeacon()`](/de/docs/Web/API/InterestGroupReportingScriptRunnerGlobalScope/registerAdBeacon) Methode der [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) registriert wurden, um Ergebnisse von Anzeigenauktionen zu sammeln.

> [!NOTE] > [`setReportEventDataForAutomaticBeacons()`](/de/docs/Web/API/Fence/setReportEventDataForAutomaticBeacons) bietet eine ähnliche Übermittlung von Berichtsdaten, außer dass in diesem Fall die Übermittlung über eine Navigation und nicht durch einen expliziten Methodenaufruf ausgelöst wird.

## Syntax

```js-nolint
reportEvent(event)
```

### Parameter

- `event`
  - : Ein Objekt oder String, das die zu sendenden Daten darstellt.
    - Ein Objektwert definiert ein spezifisches Berichtsereignis, das Sie senden möchten. Die erforderlichen Eigenschaften sind wie folgt:
      - `eventType`
        - : Ein String, der den Typ des gemeldeten Ereignisses darstellt — zum Beispiel könnten Sie daran interessiert sein, wie oft auf eine Anzeige geklickt wird. Dieser String kann jeden relevanten Ereignisnamen tragen (zum Beispiel [`click`](/de/docs/Web/API/Element/click_event)). Dieser muss mit dem Ereignistyp im zugehörigen [`registerAdBeacon()`](/de/docs/Web/API/InterestGroupReportingScriptRunnerGlobalScope/registerAdBeacon) Aufruf in einem [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) Worklet übereinstimmen.
      - `eventData`
        - : Ein String, der die zu sendenden Daten repräsentiert.
      - `destination`
        - : Ein Array, das einen oder mehrere aufgezählte Werte enthält, die Zieltypen darstellen. Dies sind die beteiligten Parteien, die die Daten an ihre registrierten URLs erhalten (d.h. über [`registerAdBeacon()`](/de/docs/Web/API/InterestGroupReportingScriptRunnerGlobalScope/registerAdBeacon)). Die möglichen Werte sind:
          - `"buyer"`: Der Bieter in der Anzeigenauktion.
          - `"seller"`: Der übergeordnete Verkäufer, der die Anzeigenauktion durchführt.
          - `"component-seller"`: Der Verkäufer für eine Komponentenausschreibung in einer mehrstufigen Auktion.
          - `"direct-seller"`: Der Verkäufer, der direkt die Auktion durchgeführt hat, an der der Käufer geboten hat. War die Anzeige eine einstufige Auktion, wird der Wert `"seller"` verwendet. War die Anzeige eine mehrstufige Auktion, wird der Wert `"component-seller"` verwendet.
          - `"shared-storage-select-url"`: Ein Speicherort der [Shared Storage API](https://privacysandbox.google.com/private-advertising/shared-storage), wie in einem [`Window.sharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) Methodenaufruf definiert.
    - Ein Stringwert stellt ein `eventType` dar, zum Beispiel `"click"` (siehe frühere Definition von `eventType`). Wenn ein `eventType` String als Wert von `reportEvent()` übergeben wird, werden alle Private Aggregation Beiträge, die bedingt von diesem Ereignistyp gemacht wurden (zum Beispiel über [`PrivateAggregation.contributeToHistogramOnEvent()`](/de/docs/Web/API/PrivateAggregation/contributeToHistogramOnEvent)), ausgelöst, um gesendet zu werden.

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

- [Eingezäunte Frames](https://privacysandbox.google.com/private-advertising/fenced-frame) auf privacysandbox.google.com
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
