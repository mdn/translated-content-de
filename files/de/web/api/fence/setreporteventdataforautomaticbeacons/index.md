---
title: "Fence: Methode setReportEventDataForAutomaticBeacons()"
short-title: setReportEventDataForAutomaticBeacons()
slug: Web/API/Fence/setReportEventDataForAutomaticBeacons
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die **`setReportEventDataForAutomaticBeacons()`**-Methode des [`Fence`](/de/docs/Web/API/Fence)-Interfaces spezifiziert Ereignisdaten, die gesendet werden, wenn eine Navigation innerhalb eines {{htmlelement("fencedframe")}} stattfindet. Diese Daten werden über ein automatisches [Beacon](/de/docs/Web/API/Beacon_API) an eine oder mehrere spezifische URLs gesendet, die über die [`registerAdBeacon()`](/de/docs/Web/API/InterestGroupReportingScriptRunnerGlobalScope/registerAdBeacon)-Methode der [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) registriert wurden, um Berichtsdaten für Auktionsergebnisse für Anzeigen zu sammeln.

> [!NOTE] > [`reportEvent()`](/de/docs/Web/API/Fence/reportEvent) bietet eine ähnliche Berichtsdateneinreichung, außer dass in diesem Fall die Einreichung über einen expliziten Methodenaufruf und nicht über eine Navigation ausgelöst wird.

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
        - `reserved.top_navigation_commit`: Ein Ereignis, das ausgelöst wird, wenn eine Top-Level-Navigation abgeschlossen ist.
    - `eventData`
      - : Ein String, der die zu sendenden Daten darstellt.
    - `destination`
      - : Ein Array, das einen oder mehrere aufgezählte Werte enthält, die Zieltypen darstellen. Dies sind die beteiligten Parteien, die die Daten an ihre registrierten URLs erhalten (d.h. über [`registerAdBeacon()`](/de/docs/Web/API/InterestGroupReportingScriptRunnerGlobalScope/registerAdBeacon)). Die möglichen Werte sind:
        - `"buyer"`: Der Bieter in der Anzeigenauktion.
        - `"seller"`: Der oberste Verkäufer, der die Anzeigenauktion durchführt.
        - `"component-seller"`: Der Verkäufer für eine Komponentenauktion in einer mehrstufigen Auktion.
        - `"direct-seller"`: Der Verkäufer, der direkt die Auktion durchführt, in der der Käufer geboten hat. Wenn die Anzeige eine einstufige Auktion war, wird der Wert `"seller"` verwendet. Wenn die Anzeige eine mehrstufige Auktion war, wird der Wert `"component-seller"` verwendet.
        - `"shared-storage-select-url"`: Ein [Shared Storage API](https://privacysandbox.google.com/private-advertising/shared-storage)-Speicherort, wie in einem Aufruf der Methode [`Window.sharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) definiert.
    - `once` {{optional_inline}}
      - : Ein boolescher Wert. Wenn auf `true` gesetzt, wird das automatische Beacon nur für das nächste Ereignis gesendet, und Beacons werden nicht für nachfolgende Ereignisse gesendet, bis `setReportEventDataForAutomaticBeacons()` erneut aufgerufen wird. Zum Beispiel kann dies, wenn es mit einem `click`-Handler verwendet wird, dazu verwendet werden, Beacon-Daten nur für spezifische Top-Level-Navigationen zu senden, anstatt für jede Top-Level-Navigation. Diese Eigenschaft hat standardmäßig den Wert `false`.

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

- [Fenced frames](https://privacysandbox.google.com/private-advertising/fenced-frame) auf privacysandbox.google.com
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
