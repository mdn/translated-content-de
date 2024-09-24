---
title: Gehege
slug: Web/API/Fence
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die **`Fence`**-Schnittstelle der {{domxref("Fenced Frame API", "Fenced Frame API", "", "nocode")}} enthält mehrere Funktionen, die für die Funktionalität von {{htmlelement("fencedframe")}} relevant sind.

`Fence`-Objekte werden über die {{domxref("Window.fence")}}-Eigenschaft zugegriffen, sind jedoch nur für Dokumente verfügbar, die in {{htmlelement("fencedframe")}}s eingebettet sind (geladen über {{domxref("FencedFrameConfig")}}s) oder in {{htmlelement("iframe")}}s (geladen über opake URNs).

> [!NOTE]
> Siehe [Wie funktionieren `<fencedframe>`s?](/de/docs/Web/API/Fenced_frame_API#how_do_fencedframes_work) für eine Beschreibung zu `FencedFrameConfig`s und opaken URNs.

{{InheritanceDiagram}}

## Instanzmethoden

- {{domxref("Fence.getNestedConfigs", "getNestedConfigs()")}} {{Experimental_Inline}}
  - : Gibt die {{domxref("FencedFrameConfig")}}s zurück, die in `<fencedframe>`s geladen sind, die innerhalb des aktuellen `<fencedframe>`s eingebettet sind.
- {{domxref("Fence.reportEvent", "reportEvent()")}} {{Experimental_Inline}}
  - : Löst die Übermittlung von Berichterstattungsdaten über ein [beacon](/de/docs/Web/API/Beacon_API) zu einem oder mehreren spezifischen URLs aus, die über die {{domxref("InterestGroupReportingScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}}-Methode der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) registriert wurden, um Ergebnisse von Werbeauktionen zu sammeln.
- {{domxref("Fence.setReportEventDataForAutomaticBeacons", "setReportEventDataForAutomaticBeacons()")}} {{Experimental_Inline}}
  - : Gibt Ereignisdaten an, die gesendet werden, wenn eine Navigation innerhalb eines `<fencedframe>`s erfolgt. Diese Daten werden automatisch über ein Beacon zu einem oder mehreren spezifischen URLs gesendet, die über die {{domxref("InterestGroupReportingScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}}-Methode der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) registriert wurden, um Berichtsdaten für Werbeaktionsergebnisse zu sammeln.

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
