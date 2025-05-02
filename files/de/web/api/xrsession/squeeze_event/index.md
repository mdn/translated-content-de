---
title: "XRSession: squeeze Ereignis"
short-title: squeeze
slug: Web/API/XRSession/squeeze_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das WebXR **`squeeze`** Ereignis wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn eine der Eingabequellen der Sitzung eine [primäre Quetschaktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) abgeschlossen hat. Beispiele für häufige Arten von primären Aktionen sind das Drücken von Triggern oder Tasten, das Antippen eines Touchpads, das Sprechen eines Befehls oder das Ausführen einer erkennbaren Geste bei der Verwendung eines Videosystems zur Verfolgung oder eines Hand-Controllers mit Beschleunigungsmesser.

Einzelheiten dazu, wie die Ereignisse [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event), `squeeze`, und [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event) funktionieren und wie Sie darauf reagieren sollten, finden Sie unter [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs#input_sources).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("squeeze", (event) => { })

onsqueeze = (event) => { }
```

## Ereignistyp

Ein [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRInputSourceEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind die Eigenschaften der übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event) verfügbar._

- [`frame`](/de/docs/Web/API/XRInputSourceEvent/frame) {{ReadOnlyInline}}
  - : Ein [`XRFrame`](/de/docs/Web/API/XRFrame) Objekt, das die erforderlichen Informationen über den Ereignis-Frame bereitstellt, in dem das Ereignis aufgetreten ist. Dieser Frame könnte in der Vergangenheit gerendert worden sein, anstatt ein aktueller Frame zu sein. Da dies ein _Ereignis_-Frame ist, kein _Animations_-Frame, können Sie nicht [`XRFrame.getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) darauf aufrufen; verwenden Sie stattdessen [`getPose()`](/de/docs/Web/API/XRFrame/getPose).
- [`inputSource`](/de/docs/Web/API/XRInputSourceEvent/inputSource) {{ReadOnlyInline}}
  - : Ein [`XRInputSource`](/de/docs/Web/API/XRInputSource) Objekt, das anzeigt, welche Eingabequelle das Eingabeereignis erzeugt hat.

## Beschreibung

### Auslöser

Ausgelöst, wenn Benutzer den Controller drücken, eine Handbewegung ausführen, die etwas Greifen imitiert, oder einen Trigger benutzen (drücken).

### Anwendungsfälle

Das [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event) Ereignis zeigt an, dass der Benutzer eine Quetschaktion gestartet hat.

Wenn die primäre Quetschaktion erfolgreich abgeschlossen wird, wird der Sitzung ein `squeeze` Ereignis gesendet.

Ein [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event) Ereignis wird gesendet, um anzuzeigen, dass die Quetschaktion nicht mehr im Gange ist. Dies wird gesendet, unabhängig davon, ob die Quetschaktion erfolgreich war oder nicht.

## Beispiele

Das folgende Beispiel verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um einen Handler für das `squeeze` Ereignis einzurichten. Der Handler holt die Pose, die den Zielstrahl für `tracked-pointer` Eingaben darstellt, und sendet die Transformation der Pose an eine Funktion namens `myHandleSqueezeWithRay()`.

Dieser Code behandelt das Quetschen als eine sofortige Aktion, die keine Verfolgung einer laufenden Aktivität erfordert. Wenn Sie eine Quetschaktion verfolgen müssen, die nicht sofort ist, hören Sie auf die [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event) und [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event) Ereignisse, um zu erkennen, wann die Quetschaktion beginnt und endet.

```js
xrSession.addEventListener("squeeze", (event) => {
  if (event.inputSource.targetRayMode === "tracked-pointer") {
    let targetRayPose = event.frame.getPose(
      event.inputSource.targetRaySpace,
      myRefSpace,
    );
    if (targetRayPose) {
      myHandleSqueezeWithRay(targetRayPose.transform);
    }
  }
});
```

Sie können auch einen Handler für `squeeze` Ereignisse einrichten, indem Sie die `onsqueeze` Ereignis-Handler-Eigenschaft des [`XRSession`](/de/docs/Web/API/XRSession) Objekts auf eine Funktion setzen, die das Ereignis behandelt:

```js
xrSession.onsqueeze = (event) => {
  if (event.inputSource.targetRayMode === "tracked-pointer") {
    let targetRayPose = event.frame.getPose(
      event.inputSource.targetRaySpace,
      myRefSpace,
    );
    if (targetRayPose) {
      myHandleSqueezeWithRay(targetRayPose.transform);
    }
  }
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event) und [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event) Ereignis
