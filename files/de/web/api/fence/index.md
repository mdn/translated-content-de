---
title: Fence
slug: Web/API/Fence
l10n:
  sourceCommit: 3a839eeed13a60d34db1d39a5ce1594050d56ab0
---

{{APIRef("Fenced Frame API")}}

Die **`Fence`**-Schnittstelle der [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API) enthält mehrere Funktionen, die für die Funktionalität von {{htmlelement("fencedframe")}} relevant sind.

Auf `Fence`-Objekte wird über die Eigenschaft [`Window.fence`](/de/docs/Web/API/Window/fence) zugegriffen, sie sind jedoch nur für Dokumente verfügbar, die in {{htmlelement("fencedframe")}}s (geladen über [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)s) oder {{htmlelement("iframe")}}s (geladen über opake URNs) eingebettet sind.

> [!NOTE]
> Siehe [Wie funktionieren `<fencedframe>`s?](/de/docs/Web/API/Fenced_frame_API#how_do_fencedframes_work) für eine Beschreibung von `FencedFrameConfig`s und opaken URNs.

{{InheritanceDiagram}}

## Instanzmethoden

- [`getNestedConfigs()`](/de/docs/Web/API/Fence/getNestedConfigs) {{deprecated_inline}}
  - : Gibt die [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)s zurück, die in `<fencedframe>`s geladen sind, welche innerhalb des aktuellen `<fencedframe>` eingebettet sind.
- [`reportEvent()`](/de/docs/Web/API/Fence/reportEvent) {{deprecated_inline}}
  - : Löst die Übermittlung von Berichtsdaten über ein [Beacon](/de/docs/Web/API/Beacon_API) an eine oder mehrere spezifische URLs aus, die über die Methode [`registerAdBeacon()`](/de/docs/Web/API/InterestGroupReportingScriptRunnerGlobalScope/registerAdBeacon) der [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) registriert wurden, um Ergebnisse von Anzeigenauktionen zu erfassen.
- [`setReportEventDataForAutomaticBeacons()`](/de/docs/Web/API/Fence/setReportEventDataForAutomaticBeacons) {{deprecated_inline}}
  - : Legt Ereignisdaten fest, die gesendet werden, wenn innerhalb eines `<fencedframe>` eine Navigation erfolgt. Diese Daten werden über ein automatisches Beacon an eine oder mehrere spezifische URLs gesendet, die über die Methode [`registerAdBeacon()`](/de/docs/Web/API/InterestGroupReportingScriptRunnerGlobalScope/registerAdBeacon) der [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) registriert wurden, um Berichtsdaten zu Ergebnissen von Anzeigenauktionen zu erfassen.

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
- [Die Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
