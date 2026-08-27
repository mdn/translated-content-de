---
title: "Fence: setReportEventDataForAutomaticBeacons() Methode"
short-title: setReportEventDataForAutomaticBeacons()
slug: Web/API/Fence/setReportEventDataForAutomaticBeacons
l10n:
  sourceCommit: e316526e520d8163e9151dca8973eb777b5285e0
---

{{APIRef("Fenced Frame API")}}

Die **`setReportEventDataForAutomaticBeacons()`** Methode der [`Fence`](/de/docs/Web/API/Fence) Schnittstelle spezifiziert Ereignisdaten, die gesendet werden, wenn eine Navigation innerhalb eines {{htmlelement("fencedframe")}} stattfindet. Diese Daten werden über ein automatisches [Beacon](/de/docs/Web/API/Beacon_API) an eine oder mehrere spezifische URLs gesendet, die über die [`registerAdBeacon()`](/de/docs/Web/API/InterestGroupReportingScriptRunnerGlobalScope/registerAdBeacon) Methode der [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) registriert wurden, um Berichtsdaten für Auktionsergebnisse von Werbung zu sammeln.

> [!NOTE]
> [`reportEvent()`](/de/docs/Web/API/Fence/reportEvent) bietet eine ähnliche Datenübermittlung für Berichte, wobei die Übermittlung in diesem Fall durch einen expliziten Methodenaufruf und nicht durch eine Navigation ausgelöst wird.

## Syntax

```js-nolint
setReportEventDataForAutomaticBeacons(event)
```

### Parameter

- `event`
  - : ein Objekt, das die zu sendenden Daten darstellt. Die möglichen Eigenschaften sind wie folgt:
    - `eventType`
      - : Ein String, der den Typ des gemeldeten Ereignisses darstellt. Die verfügbaren Werte sind:
        - `reserved.top_navigation_start`: Ein Ereignis, das ausgelöst wird, wenn eine Top-Level-Navigation beginnt.
        - `reserved.top_navigation_commit`: Ein Ereignis, das ausgelöst wird, wenn eine Top-Level-Navigation abgeschlossen wird.
    - `eventData`
      - : Ein String, der die zu sendenden Daten darstellt.
    - `destination`
      - : Ein Array, das einen oder mehrere aufgezählte Werte enthält, die den Zieltyp repräsentieren. Dies sind die beteiligten Parteien, die die Daten auf ihre registrierten URLs erhalten (z. B. über [`registerAdBeacon()`](/de/docs/Web/API/InterestGroupReportingScriptRunnerGlobalScope/registerAdBeacon)). Die möglichen Werte sind:
        - `"buyer"`: Der Bieter in der Werbeauktion.
        - `"seller"`: Der Top-Level-Verkäufer, der die Werbeauktion durchführt.
        - `"component-seller"`: Der Verkäufer für eine Komponentenauktion in einer mehrstufigen Auktion.
        - `"direct-seller"`: Der Verkäufer, der direkt die Auktion durchgeführt hat, auf die der Käufer geboten hat. Wenn die Werbung eine einstufige Auktion war, wird der Wert `"seller"` verwendet. Wenn die Werbung eine mehrstufige Auktion war, wird der Wert `"component-seller"` verwendet.
        - `"shared-storage-select-url"`: Ein [Shared Storage API](https://privacysandbox.google.com/private-advertising/shared-storage) Speicherort, wie in einem [`Window.sharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) Methodenaufruf definiert.
    - `once` {{optional_inline}}
      - : Ein boolescher Wert. Wenn auf `true` gesetzt, wird das automatische Beacon nur für das nächste Ereignis gesendet, und Beacons werden nicht für nachfolgende Ereignisse gesendet, bis `setReportEventDataForAutomaticBeacons()` erneut aufgerufen wird. Zum Beispiel kann, wenn in einem `click`-Handler verwendet, dies genutzt werden, um Beacon-Daten nur für spezifische Top-Level-Navigationen zu senden, anstatt für jede Top-Level-Navigation. Diese Eigenschaft ist standardmäßig auf `false` gesetzt.

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

- [Fenced frames](https://privacysandbox.google.com/private-advertising/fenced-frame) auf privacysandbox.google.com
- [Die Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
