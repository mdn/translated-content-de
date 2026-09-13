---
title: Fence
slug: Web/API/Fence
l10n:
  sourceCommit: e316526e520d8163e9151dca8973eb777b5285e0
---

{{APIRef("Fenced Frame API")}}

Die **`Fence`**-Schnittstelle der [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API) enthält mehrere Funktionen, die für die Funktionalität von {{htmlelement("fencedframe")}} relevant sind.

`Fence`-Objekte werden über die [`Window.fence`](/de/docs/Web/API/Window/fence)-Eigenschaft zugegriffen, sind jedoch nur für Dokumente verfügbar, die innerhalb von {{htmlelement("fencedframe")}}-Elementen (geladen über [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)) oder {{htmlelement("iframe")}}-Elementen (geladen über opake URNs) eingebettet sind.

> [!NOTE]
> Siehe [Wie funktionieren `<fencedframe>`-Elemente?](/de/docs/Web/API/Fenced_frame_API#how_do_fencedframes_work) für eine Beschreibung zu `FencedFrameConfig`s und opaken URNs.

{{InheritanceDiagram}}

## Instanzmethoden

- [`getNestedConfigs()`](/de/docs/Web/API/Fence/getNestedConfigs) {{deprecated_inline}}
  - : Gibt die [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Elemente zurück, die in `<fencedframe>`-Elementen geladen sind, die im aktuellen `<fencedframe>` eingebettet sind.
- [`reportEvent()`](/de/docs/Web/API/Fence/reportEvent) {{deprecated_inline}}
  - : Löst die Übermittlung von Berichtsdaten über ein [Beacon](/de/docs/Web/API/Beacon_API) an eine oder mehrere spezifische URLs aus, die über die Methode [`registerAdBeacon()`](/de/docs/Web/API/InterestGroupReportingScriptRunnerGlobalScope/registerAdBeacon) der [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) registriert sind, um die Ergebnisse von Werbeauktionen zu sammeln.
- [`setReportEventDataForAutomaticBeacons()`](/de/docs/Web/API/Fence/setReportEventDataForAutomaticBeacons) {{deprecated_inline}}
  - : Gibt Ereignisdaten an, die gesendet werden, wenn eine Navigation innerhalb eines `<fencedframe>`-Elements erfolgt. Diese Daten werden über ein automatisches Beacon an eine oder mehrere spezifische URLs gesendet, die über die Methode [`registerAdBeacon()`](/de/docs/Web/API/InterestGroupReportingScriptRunnerGlobalScope/registerAdBeacon) der [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) registriert sind, um Berichtsdaten für Werbeauktionsergebnisse zu sammeln.

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

- [Fenced Frames](https://privacysandbox.google.com/private-advertising/fenced-frame) auf privacysandbox.google.com
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
