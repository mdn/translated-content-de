---
title: "XRSession: squeeze Ereignis"
short-title: squeeze
slug: Web/API/XRSession/squeeze_event
l10n:
  sourceCommit: 839b5e82a117678948392e77b81d64a7f6d03811
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das WebXR **`squeeze`** Ereignis wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn eine der Eingabequellen der Sitzung eine [primäre Squeeze-Aktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) abgeschlossen hat. Beispiele für gängige Arten von primären Aktionen sind das Drücken von Triggern oder Tasten durch Benutzer, das Antippen eines Touchpads, das Aussprechen eines Befehls oder das Ausführen einer erkennbaren Geste bei der Verwendung eines Video-Tracking-Systems oder eines tragbaren Controllers mit einem Beschleunigungssensor.

Einzelheiten darüber, wie die Ereignisse [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event), `squeeze` und [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event) funktionieren und wie Sie darauf reagieren sollten, finden Sie unter [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs#input_sources).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("squeeze", (event) => {});

onsqueeze = (event) => {};
```

## Ereignistyp

Ein [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRInputSourceEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind auch Eigenschaften der übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event) verfügbar._

- [`frame`](/de/docs/Web/API/XRInputSourceEvent/frame) {{ReadOnlyInline}}
  - : Ein [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekt, das die benötigten Informationen über den Ereignisrahmen bereitstellt, währenddessen das Ereignis aufgetreten ist. Dieser Frame könnte in der Vergangenheit gerendert worden sein und nicht der aktuelle Frame sein. Da dies ein _Ereignis_-Frame und kein _Animations_-Frame ist, können Sie nicht [`XRFrame.getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) darauf aufrufen; stattdessen verwenden Sie [`getPose()`](/de/docs/Web/API/XRFrame/getPose).
- [`inputSource`](/de/docs/Web/API/XRInputSourceEvent/inputSource) {{ReadOnlyInline}}
  - : Ein [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt, das angibt, welche Eingabequelle das Eingabeereignis generiert hat.

## Beschreibung

### Auslöser

Ausgelöst, wenn Benutzer den Controller drücken, eine Handbewegung machen, die das Greifen von etwas mimt, oder einen Trigger verwenden (drücken).

### Anwendungsfälle

Das Ereignis [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event) zeigt an, dass der Benutzer mit einer Squeeze-Aktion begonnen hat.

Wenn die primäre Squeeze-Aktion erfolgreich endet, wird eine `squeeze`-Ereignis an die Sitzung gesendet.

Ein [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event) Ereignis wird gesendet, um anzuzeigen, dass die Squeeze-Aktion nicht mehr im Gange ist. Dies wird gesendet, unabhängig davon, ob die Squeeze-Aktion erfolgreich war oder nicht.

## Beispiele

Das folgende Beispiel verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um einen Handler für das `squeeze`-Ereignis einzurichten. Der Handler ruft die Pose ab, die den Zielstrahl für `tracked-pointer` Eingaben darstellt, und sendet die Transformation der Pose an eine Funktion namens `myHandleSqueezeWithRay()`.

Dieser Code behandelt das Squeeze als eine Momentaufnahme, die nicht ein fortlaufendes Tracking einer Aktivität beinhaltet. Wenn Sie ein Squeeze verfolgen müssen, das nicht sofortig ist, hören Sie auf die Ereignisse [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event) und [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event), um festzustellen, wann die Squeeze-Aktion beginnt und endet.

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

Sie können auch einen Handler für `squeeze`-Ereignisse einrichten, indem Sie die `onsqueeze`-Ereignishandlereigenschaft des [`XRSession`](/de/docs/Web/API/XRSession)-Objekts auf eine Funktion setzen, die das Ereignis behandelt:

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
