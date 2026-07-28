---
title: "XRSession: squeeze-Ereignis"
short-title: squeeze
slug: Web/API/XRSession/squeeze_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das WebXR **`squeeze`** Ereignis wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn eine der Eingabequellen der Sitzung eine [primäre Squeeze-Aktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) abgeschlossen hat. Beispiele für häufige Arten von primären Aktionen sind das Drücken von Triggern oder Tasten durch Benutzer, das Tippen auf ein Touchpad, das Aussprechen eines Befehls oder das Ausführen einer erkennbaren Geste bei der Verwendung eines Video-Tracking-Systems oder eines Handcontrollers mit einem Beschleunigungsmesser.

Für Details zur Funktionsweise der Ereignisse [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event), `squeeze` und [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event) und wie Sie darauf reagieren sollten, siehe [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs#input_sources).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignishandler-Eigenschaft fest.

```js-nolint
addEventListener("squeeze", (event) => { })

onsqueeze = (event) => { }
```

## Ereignistyp

Ein [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRInputSourceEvent")}}

## Beschreibung

### Auslöser

Ausgelöst, wenn Benutzer den Controller drücken, eine Handgeste ausführen, die das Greifen von etwas nachahmt, oder einen Auslöser verwenden (drücken).

### Anwendungsfälle

Das [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event) Ereignis zeigt an, dass der Benutzer eine Squeeze-Aktion begonnen hat.

Wenn die primäre Squeeze-Aktion erfolgreich endet, wird der Sitzung ein `squeeze` Ereignis gesendet.

Ein [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event) Ereignis wird gesendet, um anzuzeigen, dass die Squeeze-Aktion nicht mehr im Gange ist. Dies wird gesendet, unabhängig davon, ob die Squeeze-Aktion erfolgreich war oder nicht.

## Beispiele

Das folgende Beispiel verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um einen Handler für das `squeeze` Ereignis einzurichten. Der Handler ruft die Pose ab, die den Zielstrahl für `tracked-pointer` Eingaben darstellt, und sendet die Transformation der Pose an eine Funktion namens `myHandleSqueezeWithRay()`.

Dieser Code behandelt das Squeeze als eine momentane Aktion, die keine laufende Aktivität verfolgt. Wenn Sie eine Squeeze-Aktion verfolgen müssen, die nicht sofort abgeschlossen ist, hören Sie auf die Ereignisse [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event) und [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event), um zu erkennen, wann die Squeeze-Aktion beginnt und endet.

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

Sie können auch einen Handler für `squeeze` Ereignisse einrichten, indem Sie die `onsqueeze` Ereignishandler-Eigenschaft des [`XRSession`](/de/docs/Web/API/XRSession) Objekts auf eine Funktion setzen, die das Ereignis behandelt:

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
