---
title: "Fence: setReportEventDataForAutomaticBeacons()-Methode"
short-title: setReportEventDataForAutomaticBeacons()
slug: Web/API/Fence/setReportEventDataForAutomaticBeacons
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die **`setReportEventDataForAutomaticBeacons()`**-Methode der [`Fence`](/de/docs/Web/API/Fence)-Schnittstelle gibt die Ereignisdaten an, die gesendet werden, wenn eine Navigation innerhalb eines {{htmlelement("fencedframe")}} erfolgt. Diese Daten werden über ein automatisches [Beacon](/de/docs/Web/API/Beacon_API) an eine oder mehrere spezifische URLs gesendet, die über die [`registerAdBeacon()`](/de/docs/Web/API/InterestGroupReportingScriptRunnerGlobalScope/registerAdBeacon)-Methode der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) registriert wurden, zum Zweck der Erfassung von Berichtsdaten für Auktionsergebnisse von Anzeigen.

> **Note:** [`reportEvent()`](/de/docs/Web/API/Fence/reportEvent) bietet eine ähnliche Übermittlung von Berichtsdaten, außer dass in diesem Fall die Übermittlung durch einen expliziten Methodenaufruf und nicht durch eine Navigation ausgelöst wird.

## Syntax

```js-nolint
setReportEventDataForAutomaticBeacons(event)
```

### Parameter

- `event`
  - : Ein Objekt, das die zu sendenden Daten darstellt. Die möglichen Eigenschaften sind wie folgt:
    - `eventType`
      - : Ein String, der den Typ des gemeldeten Ereignisses darstellt. Die verfügbaren Werte sind:
        - `reserved.top_navigation_start`: Ein Ereignis, das ausgelöst wird, wenn eine Navigation auf oberster Ebene beginnt.
        - `reserved.top_navigation_commit`: Ein Ereignis, das ausgelöst wird, wenn eine Navigation auf oberster Ebene abgeschlossen wird.
    - `eventData`
      - : Ein String, der die zu sendenden Daten darstellt.
    - `destination`
      - : Ein Array, das einen oder mehrere aufgezählte Werte enthält, die Zieltypen darstellen. Dies sind die beteiligten Parteien, die die Daten an ihre registrierten URLs erhalten (d.h. über [`registerAdBeacon()`](/de/docs/Web/API/InterestGroupReportingScriptRunnerGlobalScope/registerAdBeacon)). Die möglichen Werte sind:
        - `"buyer"`: Der Bieter in der Anzeigenauktion.
        - `"seller"`: Der Hauptverkäufer, der die Anzeigenauktion durchführt.
        - `"component-seller"`: Der Verkäufer für eine Komponentenausschreibung in einer mehrstufigen Auktion.
        - `"direct-seller"`: Der Verkäufer, der direkt die Auktion durchgeführt hat, an der der Käufer geboten hat. Wenn die Anzeige eine einstufige Auktion war, wird der Wert `"seller"` verwendet. Wenn die Anzeige eine mehrstufige Auktion war, wird der Wert `"component-seller"` verwendet.
        - `"shared-storage-select-url"`: Ein [Shared Storage API](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage)-Speicherort, wie in einem [`Window.sharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL)-Methodenaufruf definiert.
    - `once` {{optional_inline}}
      - : Ein boolescher Wert. Wenn auf `true` gesetzt, wird das automatische Beacon nur für das nächste Ereignis gesendet, und Beacons werden nicht für nachfolgende Ereignisse gesendet, bis `setReportEventDataForAutomaticBeacons()` erneut aufgerufen wird. Zum Beispiel kann dies in Verbindung mit einem `click`-Handler verwendet werden, um Beacon-Daten nur für bestimmte Navigationen auf oberster Ebene zu senden, anstatt für jede Navigation auf oberster Ebene. Diese Eigenschaft ist standardmäßig `false`.

### Rückgabewert

Keiner (`Undefined`).

## Beispiele

```js
window.fence.setReportEventDataForAutomaticBeacons({
  eventType: "reserved.top_navigation_start",
  eventData: "an example string",
  destination: ["seller", "buyer"],
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced frames](https://developers.google.com/privacy-sandbox/private-advertising/fenced-frame) auf developers.google.com
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
