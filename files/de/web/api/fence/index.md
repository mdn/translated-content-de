---
title: Fence
slug: Web/API/Fence
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Das **`Fence`**-Interface der [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API) enthält mehrere Funktionen, die für die Funktionalität von {{htmlelement("fencedframe")}} relevant sind.

Auf `Fence`-Objekte wird über die [`Window.fence`](/de/docs/Web/API/Window/fence) Eigenschaft zugegriffen, sie stehen jedoch nur Dokumenten zur Verfügung, die innerhalb von {{htmlelement("fencedframe")}}s (geladen über [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)s) oder {{htmlelement("iframe")}}s (geladen über undurchsichtige URNs) eingebettet sind.

> [!NOTE]
> Sehen Sie [Wie funktionieren `<fencedframe>`s?](/de/docs/Web/API/Fenced_frame_API#how_do_fencedframes_work) für eine Beschreibung zu `FencedFrameConfig`s und undurchsichtige URNs.

{{InheritanceDiagram}}

## Instanzmethoden

- [`getNestedConfigs()`](/de/docs/Web/API/Fence/getNestedConfigs) {{Experimental_Inline}}
  - : Gibt die [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)s zurück, die in `<fencedframe>`s geladen sind, die innerhalb des aktuellen `<fencedframe>`s eingebettet sind.
- [`reportEvent()`](/de/docs/Web/API/Fence/reportEvent) {{Experimental_Inline}}
  - : Löst die Übermittlung von Berichtsdaten über ein [Beacon](/de/docs/Web/API/Beacon_API) an eine oder mehrere spezifische URLs aus, die über die Methode [`registerAdBeacon()`](/de/docs/Web/API/InterestGroupReportingScriptRunnerGlobalScope/registerAdBeacon) der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) registriert wurden, um Ergebnisse der Werbeauktion zu sammeln.
- [`setReportEventDataForAutomaticBeacons()`](/de/docs/Web/API/Fence/setReportEventDataForAutomaticBeacons) {{Experimental_Inline}}
  - : Spezifiziert Ereignisdaten, die gesendet werden, wenn eine Navigation innerhalb eines `<fencedframe>` auftritt. Diese Daten werden über ein automatisches Beacon an eine oder mehrere spezifische URLs gesendet, die über die Methode [`registerAdBeacon()`](/de/docs/Web/API/InterestGroupReportingScriptRunnerGlobalScope/registerAdBeacon) der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) registriert sind, um Berichtsdaten für Werbeauktionsergebnisse zu sammeln.

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
