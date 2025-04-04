---
title: "Fence: setReportEventDataForAutomaticBeacons() Methode"
short-title: setReportEventDataForAutomaticBeacons()
slug: Web/API/Fence/setReportEventDataForAutomaticBeacons
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die **`setReportEventDataForAutomaticBeacons()`**-Methode der [`Fence`](/de/docs/Web/API/Fence)-Schnittstelle spezifiziert Ereignisdaten, die gesendet werden, wenn eine Navigation innerhalb eines {{htmlelement("fencedframe")}} stattfindet. Diese Daten werden automatisch über einen [Beacon](/de/docs/Web/API/Beacon_API) an eine oder mehrere spezifische URLs gesendet, die über die [`registerAdBeacon()`](/de/docs/Web/API/InterestGroupReportingScriptRunnerGlobalScope/registerAdBeacon)-Methode der [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) registriert wurden, um Berichterstattungsdaten für Auktionsergebnisse von Anzeigen zu sammeln.

> **Note:** [`reportEvent()`](/de/docs/Web/API/Fence/reportEvent) bietet eine ähnliche Möglichkeit zur Übermittlung von Berichtsdaten, außer dass in diesem Fall die Übermittlung durch einen expliziten Methodenaufruf und nicht durch eine Navigation ausgelöst wird.

## Syntax

```js-nolint
setReportEventDataForAutomaticBeacons(event)
```

### Parameter

- `event`
  - : ein Objekt, das die zu sendenden Daten repräsentiert. Die möglichen Eigenschaften sind wie folgt:
    - `eventType`
      - : Ein String, der den Typ des zu berichtenden Ereignisses darstellt. Die verfügbaren Werte sind:
        - `reserved.top_navigation_start`: Ein Ereignis, das ausgelöst wird, wenn eine Navigation auf oberster Ebene beginnt.
        - `reserved.top_navigation_commit`: Ein Ereignis, das ausgelöst wird, wenn eine Navigation auf oberster Ebene abgeschlossen ist.
    - `eventData`
      - : Ein String, der die zu sendenden Daten repräsentiert.
    - `destination`
      - : Ein Array, das einen oder mehrere aufgezählte Werte enthält, die Zieltypen darstellen. Dies sind die beteiligten Parteien, die die Daten an ihre registrierten URLs erhalten (z. B. über [`registerAdBeacon()`](/de/docs/Web/API/InterestGroupReportingScriptRunnerGlobalScope/registerAdBeacon)). Die möglichen Werte sind:
        - `"buyer"`: Der Bieter in der Anzeigenauktion.
        - `"seller"`: Der Hauptverkäufer, der die Anzeigenauktion durchführt.
        - `"component-seller"`: Der Verkäufer für eine Komponentenausschreibung in einer mehrstufigen Auktion.
        - `"direct-seller"`: Der Verkäufer, der die Auktion direkt durchgeführt hat, bei der der Bieter geboten hat. Wenn es sich um eine einstufige Auktion handelt, wird der Wert `"seller"` verwendet. Bei einer mehrstufigen Auktion wird der Wert `"component-seller"` verwendet.
        - `"shared-storage-select-url"`: Ein Speicherort der [Shared Storage API](https://privacysandbox.google.com/private-advertising/shared-storage), wie in einem Methodenaufruf von [`Window.sharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) definiert.
    - `once` {{optional_inline}}
      - : Ein boolescher Wert. Wenn `true` gesetzt ist, wird der automatische Beacon nur für das nächste Ereignis gesendet, und Beacons werden für nachfolgende Ereignisse nicht gesendet, bis `setReportEventDataForAutomaticBeacons()` erneut aufgerufen wird. Zum Beispiel kann dies, wenn es mit einem `click`-Handler verwendet wird, genutzt werden, um Beacon-Daten nur für bestimmte Top-Level-Navigationen zu senden und nicht für jede Top-Level-Navigation. Diese Eigenschaft ist standardmäßig `false`.

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
