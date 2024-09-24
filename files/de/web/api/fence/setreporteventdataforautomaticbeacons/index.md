---
title: "Zaun: setReportEventDataForAutomaticBeacons()-Methode"
short-title: setReportEventDataForAutomaticBeacons()
slug: Web/API/Fence/setReportEventDataForAutomaticBeacons
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die **`setReportEventDataForAutomaticBeacons()`**-Methode der
{{domxref("Fence")}}-Schnittstelle legt Ereignisdaten fest, die gesendet werden, wenn eine Navigation innerhalb eines {{htmlelement("fencedframe")}} stattfindet. Diese Daten werden über ein automatisches [Beacon](/de/docs/Web/API/Beacon_API) an eine oder mehrere spezifische URLs gesendet, die über die Methode {{domxref("InterestGroupReportingScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}} der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) registriert wurden, um Berichts daten für Auktionsergebnisse zu sammeln.

> **Note:** {{domxref("Fence.reportEvent", "reportEvent()")}} bietet eine ähnliche Berichtsdateneinreichung, außer dass in diesem Fall die Einreichung durch einen expliziten Methodenaufruf und nicht durch eine Navigation ausgelöst wird.

## Syntax

```js-nolint
setReportEventDataForAutomaticBeacons(event)
```

### Parameter

- `event`
  - : Ein Objekt, das die zu sendenden Daten darstellt. Die möglichen Eigenschaften sind wie folgt:
    - `eventType`
      - : Ein String, der den Typ des gemeldeten Ereignisses darstellt. Die verfügbaren Werte sind:
        - `reserved.top_navigation_start`: Ein Ereignis, das ausgelöst wird, wenn eine Top-Level-Navigation beginnt.
        - `reserved.top_navigation_commit`: Ein Ereignis, das ausgelöst wird, wenn eine Top-Level-Navigation abgeschlossen ist.
    - `eventData`
      - : Ein String, der die zu sendenden Daten darstellt.
    - `destination`
      - : Ein Array, das einen oder mehrere enumerierte Werte enthält, die die Zieltypen darstellen. Diese sind die beteiligten Parteien, die die Daten an ihre registrierten URLs erhalten werden (d. h. über {{domxref("InterestGroupReportingScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}}). Die möglichen Werte sind:
        - `"buyer"`: Der Bieter in der Anzeigenauktion.
        - `"seller"`: Der Top-Level-Verkäufer, der die Anzeigenauktion durchführt.
        - `"component-seller"`: Der Verkäufer für eine Komponentenauktion in einer mehrstufigen Auktion.
        - `"direct-seller"`: Der Verkäufer, der direkt die Auktion durchgeführt hat, in der der Käufer geboten hat. Wenn die Anzeige eine einstufige Auktion war, wird der Wert `"seller"` verwendet. Wenn die Anzeige eine mehrstufige Auktion war, wird der Wert `"component-seller"` verwendet.
        - `"shared-storage-select-url"`: Ein [Shared Storage API](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage) Speicherort, wie in einem {{domxref("WindowSharedStorage.selectURL", "Window.sharedStorage.selectURL()")}}-Methodenaufruf definiert.
    - `once` {{optional_inline}}
      - : Ein boolescher Wert. Wenn auf `true` gesetzt, wird das automatische Beacon nur für das nächste Ereignis gesendet, und Beacons werden nicht für nachfolgende Ereignisse gesendet, bis `setReportEventDataForAutomaticBeacons()` erneut aufgerufen wird. Zum Beispiel, wenn es mit einem `click`-Handler verwendet wird, kann dies genutzt werden, um Beacon-Daten nur für bestimmte Top-Level-Navigationen zu senden, anstatt für jede Top-Level-Navigation. Diese Eigenschaft ist standardmäßig `false`.

### Rückgabewert

Kein (`Undefined`).

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
