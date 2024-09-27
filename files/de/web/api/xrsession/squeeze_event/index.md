---
title: "XRSession: squeeze Ereignis"
short-title: squeeze
slug: Web/API/XRSession/squeeze_event
l10n:
  sourceCommit: 839b5e82a117678948392e77b81d64a7f6d03811
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das WebXR **`squeeze`** Ereignis wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn eine der Eingabequellen der Sitzung eine [primäre Squeeze-Aktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) abgeschlossen hat. Beispiele für häufige Arten von primären Aktionen sind das Drücken von Auslösern oder Tasten, das Tippen auf ein Touchpad, das Sprechen eines Befehls oder das Ausführen einer erkennbaren Geste bei Verwendung eines Video-Trackingsystems oder eines Handheld-Controllers mit einem Beschleunigungssensor.

Für Details darüber, wie die Ereignisse [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event), `squeeze` und [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event) funktionieren und wie Sie darauf reagieren sollten, siehe [Inputs und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs#input_sources).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("squeeze", (event) => {});

onsqueeze = (event) => {};
```

## Ereignistyp

Ein [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRInputSourceEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind die Eigenschaften von der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`frame`](/de/docs/Web/API/XRInputSourceEvent/frame) {{ReadOnlyInline}}
  - : Ein [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekt, das die benötigten Informationen über das Ereignis-Frame bereitstellt, in dem das Ereignis aufgetreten ist. Dieses Frame kann in der Vergangenheit gerendert worden sein, anstatt ein aktuelles Frame zu sein. Da dies ein _Ereignis_-Frame und kein _Animations_-Frame ist, können Sie [`XRFrame.getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) nicht darauf aufrufen; stattdessen verwenden Sie [`getPose()`](/de/docs/Web/API/XRFrame/getPose).
- [`inputSource`](/de/docs/Web/API/XRInputSourceEvent/inputSource) {{ReadOnlyInline}}
  - : Ein [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt, das angibt, welche Eingabequelle das Eingabeereignis erzeugt hat.

## Beschreibung

### Auslöser

Ausgelöst, wenn Benutzer den Controller zusammendrücken, eine Handgeste machen, die das Greifen von etwas nachahmt, oder einen Auslöser verwenden (drücken).

### Anwendungsfälle

Das [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event) Ereignis zeigt an, dass der Benutzer eine Squeeze-Aktion begonnen hat.

Wenn die primäre Squeeze-Aktion erfolgreich endet, wird an die Sitzung ein `squeeze` Ereignis gesendet.

Ein [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event) Ereignis wird gesendet, um anzuzeigen, dass die Squeeze-Aktion nicht mehr im Gange ist. Dies wird gesendet, unabhängig davon, ob die Squeeze-Aktion erfolgreich war oder nicht.

## Beispiele

Das folgende Beispiel verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um einen Handler für das `squeeze`-Ereignis einzurichten. Der Handler ruft die Pose ab, die den Zielstrahl für `tracked-pointer` Eingaben darstellt, und sendet die Transformation der Pose an eine Funktion namens `myHandleSqueezeWithRay()`.

Dieser Code behandelt das Squeeze als eine sofortige Aktion, die keine Verfolgung einer laufenden Tätigkeit beinhaltet. Wenn Sie eine Squeeze-Aktion verfolgen müssen, die nicht sofortig ist, hören Sie die Ereignisse [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event) und [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event) ab, um zu erkennen, wann die Squeeze-Aktion beginnt und endet.

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

Sie können auch einen Handler für `squeeze` Ereignisse einrichten, indem Sie die `onsqueeze` Ereignis-Handler-Eigenschaft des [`XRSession`](/de/docs/Web/API/XRSession)-Objekts auf eine Funktion setzen, die das Ereignis behandelt:

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
