---
title: Fence
slug: Web/API/Fence
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Das **`Fence`**-Interface der [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API) enthält mehrere Funktionen, die für die Funktionalität von {{htmlelement("fencedframe")}} relevant sind.

`Fence`-Objekte werden über die [`Window.fence`](/de/docs/Web/API/Window/fence)-Eigenschaft aufgerufen, sind jedoch nur für Dokumente verfügbar, die in {{htmlelement("fencedframe")}}-Elemente (geladen über [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)s) oder {{htmlelement("iframe")}}s (geladen über undurchsichtige URNs) eingebettet sind.

> [!NOTE]
> Siehe [Wie funktionieren `<fencedframe>`s?](/de/docs/Web/API/Fenced_frame_API#how_do_fencedframes_work) für eine Beschreibung zu `FencedFrameConfig`s und undurchsichtigen URNs.

{{InheritanceDiagram}}

## Instanzmethoden

- [`getNestedConfigs()`](/de/docs/Web/API/Fence/getNestedConfigs) {{Experimental_Inline}}
  - : Gibt die [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)s zurück, die in `<fencedframe>`s geladen sind, die innerhalb des aktuellen `<fencedframe>` eingebettet sind.
- [`reportEvent()`](/de/docs/Web/API/Fence/reportEvent) {{Experimental_Inline}}
  - : Löst die Übermittlung von Berichtsdaten über ein [beacon](/de/docs/Web/API/Beacon_API) an eine oder mehrere spezifische URLs aus, die über die [`registerAdBeacon()`](/de/docs/Web/API/InterestGroupReportingScriptRunnerGlobalScope/registerAdBeacon)-Methode der [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) registriert sind, um Ergebnisse einer Anzeigenauktion zu sammeln.
- [`setReportEventDataForAutomaticBeacons()`](/de/docs/Web/API/Fence/setReportEventDataForAutomaticBeacons) {{Experimental_Inline}}
  - : Gibt Ereignisdaten an, die gesendet werden, wenn eine Navigation innerhalb eines `<fencedframe>` erfolgt. Diese Daten werden über ein automatisches Beacon an eine oder mehrere spezifische URLs gesendet, die über die [`registerAdBeacon()`](/de/docs/Web/API/InterestGroupReportingScriptRunnerGlobalScope/registerAdBeacon)-Methode der [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) registriert sind, um Berichtsdaten für Anzeigenauktionsergebnisse zu sammeln.

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
