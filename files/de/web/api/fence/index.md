---
title: Fence
slug: Web/API/Fence
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Das **`Fence`** Interface der [Fenced Frame API](/de/docs/Web/API/Fenced_Frame_API) enthält mehrere Funktionen, die relevant für die Funktionalität von {{htmlelement("fencedframe")}} sind.

`Fence`-Objekte werden über die [`Window.fence`](/de/docs/Web/API/Window/fence)-Eigenschaft aufgerufen, sind jedoch nur für Dokumente verfügbar, die innerhalb von {{htmlelement("fencedframe")}}s eingebettet sind (geladen über [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)s) oder {{htmlelement("iframe")}}s (geladen über opake URNs).

> [!NOTE]
> Weitere Informationen zu `FencedFrameConfig`s und opaken URNs finden Sie unter [Wie funktionieren `<fencedframe>`s?](/de/docs/Web/API/Fenced_frame_API#how_do_fencedframes_work).

{{InheritanceDiagram}}

## Instanzmethoden

- [`getNestedConfigs()`](/de/docs/Web/API/Fence/getNestedConfigs) {{Experimental_Inline}}
  - : Gibt die [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)s zurück, die in `<fencedframe>`s geladen sind, die im aktuellen `<fencedframe>` eingebettet sind.
- [`reportEvent()`](/de/docs/Web/API/Fence/reportEvent) {{Experimental_Inline}}
  - : Löst die Übermittlung von Berichtsdaten über ein [beacon](/de/docs/Web/API/Beacon_API) an eine oder mehrere spezifische URLs aus, die über die [`registerAdBeacon()`](/de/docs/Web/API/InterestGroupReportingScriptRunnerGlobalScope/registerAdBeacon)-Methode der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) registriert wurden, um Ergebnisse von Anzeigenauktionen zu sammeln.
- [`setReportEventDataForAutomaticBeacons()`](/de/docs/Web/API/Fence/setReportEventDataForAutomaticBeacons) {{Experimental_Inline}}
  - : Gibt Ereignisdaten an, die gesendet werden, wenn eine Navigation innerhalb eines `<fencedframe>` erfolgt. Diese Daten werden über ein automatisches Beacon an eine oder mehrere spezifische URLs gesendet, die über die [`registerAdBeacon()`](/de/docs/Web/API/InterestGroupReportingScriptRunnerGlobalScope/registerAdBeacon)-Methode der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) registriert wurden, um Berichtsdaten für Anzeigenauktionsergebnisse zu sammeln.

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
