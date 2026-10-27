---
title: "XRSession: squeeze-Ereignis"
short-title: squeeze
slug: Web/API/XRSession/squeeze_event
l10n:
  sourceCommit: 92c5e81c587ffea6177431743106118984f1675d
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das WebXR-Ereignis **`squeeze`** wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn eine ihrer Eingabequellen eine [primäre Squeeze-Aktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) abgeschlossen hat. Beispiele für solche Aktionen sind das Drücken von Triggern oder Tasten, das Antippen eines Touchpads, das Sprechen eines Befehls oder eine erkennbare Geste bei der Verwendung eines Video-Tracking-Systems oder eines Handcontrollers mit Beschleunigungssensor.

Weitere Informationen dazu, wie die Ereignisse [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event), `squeeze` und [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event) funktionieren und wie Sie darauf reagieren sollten, finden Sie unter [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs#input_sources).

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("squeeze", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle eine Funktion zuweisen:

```js-nolint
onsqueeze = (event) => { }
```

## Ereignistyp

Ein [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRInputSourceEvent")}}

## Beschreibung

### Auslöser

Wird ausgelöst, wenn Benutzer den Controller zusammendrücken, eine Greifbewegung mit der Hand nachahmen oder einen Trigger betätigen.

### Anwendungsfälle

Das Ereignis [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event) zeigt an, dass der Benutzer eine Squeeze-Aktion begonnen hat.

Wenn die primäre Squeeze-Aktion erfolgreich endet, wird ein `squeeze`-Ereignis an die Sitzung gesendet.

Ein [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event)-Ereignis zeigt an, dass die Squeeze-Aktion nicht mehr ausgeführt wird. Es wird unabhängig davon gesendet, ob die Aktion erfolgreich war.

## Beispiele

Das folgende Beispiel verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um einen Handler für das `squeeze`-Ereignis einzurichten. Der Handler ruft die Pose ab, die den Zielstrahl für `tracked-pointer`-Eingaben repräsentiert, und übergibt die Transformation der Pose an eine Funktion namens `myHandleSqueezeWithRay()`.

Dieser Code behandelt die Squeeze-Aktion als augenblickliche Aktion, bei der keine fortlaufende Aktivität verfolgt wird. Wenn Sie eine Squeeze-Aktion verfolgen müssen, die nicht augenblicklich ist, überwachen Sie die Ereignisse [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event) und [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event), um zu erkennen, wann die Aktion beginnt und endet.

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

Sie können einen Handler für `squeeze`-Ereignisse auch einrichten, indem Sie der Event-Handler-Eigenschaft `onsqueeze` des [`XRSession`](/de/docs/Web/API/XRSession)-Objekts eine Funktion zuweisen, die das Ereignis verarbeitet. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onsqueeze` hinzugefügte Event-Listener ersetzt werden:

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

- Ereignisse [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event) und [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event)
