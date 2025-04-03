---
title: "Fence: reportEvent() Methode"
short-title: reportEvent()
slug: Web/API/Fence/reportEvent
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die **`reportEvent()`** Methode der [`Fence`](/de/docs/Web/API/Fence) Schnittstelle löst die Übermittlung von Berichts-Daten über ein [Beacon](/de/docs/Web/API/Beacon_API) zu einer oder mehreren spezifischen URLs aus, die über die [`registerAdBeacon()`](/de/docs/Web/API/InterestGroupReportingScriptRunnerGlobalScope/registerAdBeacon) Methode der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) registriert sind, um Ergebnisse von Anzeigenauktionen zu sammeln.

> **Note:** [`setReportEventDataForAutomaticBeacons()`](/de/docs/Web/API/Fence/setReportEventDataForAutomaticBeacons) bietet ähnliche Übermittlungen von Berichts-Daten, außer dass in diesem Fall die Übermittlung durch eine Navigation statt durch einen ausdrücklichen Methodenaufruf ausgelöst wird.

## Syntax

```js-nolint
reportEvent(event)
```

### Parameter

- `event`
  - : Ein Objekt oder eine Zeichenkette, die die zu sendenden Daten darstellt.
    - Ein Objektwert definiert ein spezifisches Berichtsereignis, das Sie senden möchten. Die erforderlichen Eigenschaften sind wie folgt:
      - `eventType`
        - : Eine Zeichenkette, die den Typ des Ereignisses darstellt, das gemeldet wird — beispielsweise könnten Sie daran interessiert sein, wie oft auf eine Anzeige geklickt wird. Diese Zeichenkette kann jeden relevanten Ereignisnamen haben (zum Beispiel [`click`](/de/docs/Web/API/Element/click_event)). Dies muss mit dem in der zugehörigen [`registerAdBeacon()`](/de/docs/Web/API/InterestGroupReportingScriptRunnerGlobalScope/registerAdBeacon) Aufruf in einem [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) Worklet angegebenen Ereignistyp übereinstimmen.
      - `eventData`
        - : Eine Zeichenkette, die die zu sendenden Daten darstellt.
      - `destination`
        - : Ein Array, das einen oder mehrere aufgezählte Werte enthält, die Zieltypen repräsentieren. Dies sind die beteiligten Parteien, die die Daten an ihre registrierten URLs erhalten (d.h. über [`registerAdBeacon()`](/de/docs/Web/API/InterestGroupReportingScriptRunnerGlobalScope/registerAdBeacon)). Die möglichen Werte sind:
          - `"buyer"`: Der Bieter in der Anzeigenauktion.
          - `"seller"`: Der oberste Verkäufer, der die Anzeigenauktion durchführt.
          - `"component-seller"`: Der Verkäufer für eine Komponentenauktion in einer mehrstufigen Auktion.
          - `"direct-seller"`: Der Verkäufer, der direkt die Auktion durchgeführt hat, in der der Bieter geboten hat. Wenn die Anzeige eine einstufige Auktion war, wird der Wert `"seller"` verwendet. Bei einer mehrstufigen Auktion wird der Wert `"component-seller"` verwendet.
          - `"shared-storage-select-url"`: Ein Speicherort der [Shared Storage API](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage), wie in einem [`Window.sharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) Methodenaufruf definiert.
    - Ein Zeichenkettenwert repräsentiert einen `eventType`, zum Beispiel `"click"` (siehe die frühere Definition von `eventType`). Wenn eine `eventType` Zeichenkette als Wert von `reportEvent()` übergeben wird, löst sie alle Private Aggregation Beiträge aus, die bedingt auf diesem Ereignistyp gemacht wurden (zum Beispiel über [`PrivateAggregation.contributeToHistogramOnEvent()`](/de/docs/Web/API/PrivateAggregation/contributeToHistogramOnEvent)), um gesendet zu werden.

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
