---
title: "XRSession: Squeeze-Ereignis"
short-title: squeeze
slug: Web/API/XRSession/squeeze_event
l10n:
  sourceCommit: 839b5e82a117678948392e77b81d64a7f6d03811
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das WebXR **`squeeze`**-Ereignis wird an eine {{domxref("XRSession")}} gesendet, wenn eine der Eingabequellen der Sitzung eine [primäre Drückaktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) abgeschlossen hat. Beispiele für übliche primäre Aktionen sind das Drücken von Auslösern oder Tasten, das Tippen auf ein Touchpad, das Sprechen eines Befehls oder das Ausführen einer erkennbaren Geste bei Verwendung eines Video-Tracking-Systems oder eines Handheld-Controllers mit einem Beschleunigungsmesser.

Für Details darüber, wie die Ereignisse {{domxref("XRSession.squeezestart_event", "squeezestart")}}, `squeeze` und {{domxref("XRSession.squeezeend_event", "squeezeend")}} funktionieren und wie Sie darauf reagieren sollten, siehe [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs#input_sources).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("squeeze", (event) => {});

onsqueeze = (event) => {};
```

## Ereignistyp

Ein {{domxref("XRInputSourceEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("XRInputSourceEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind auch Eigenschaften der Elternschnittstelle, {{domxref("Event")}}, verfügbar._

- {{domxref("XRInputSourceEvent.frame", "frame")}} {{ReadOnlyInline}}
  - : Ein {{domxref("XRFrame")}}-Objekt, das die notwendigen Informationen über das Ereignis-Frame bereitstellt, während der das Ereignis aufgetreten ist. Dieses Frame kann in der Vergangenheit gerendert worden sein, anstatt ein aktuelles Frame zu sein. Da es sich um ein _Ereignis_-Frame und nicht um ein _Animations_-Frame handelt, können Sie nicht {{domxref("XRFrame.getViewerPose", "XRFrame.getViewerPose()")}} darauf aufrufen; stattdessen verwenden Sie {{domxref("XRFrame.getPose", "getPose()")}}.
- {{domxref("XRInputSourceEvent.inputSource", "inputSource")}} {{ReadOnlyInline}}
  - : Ein {{domxref("XRInputSource")}}-Objekt, das anzeigt, welche Eingabequelle das Eingabeereignis erzeugt hat.

## Beschreibung

### Auslösen

Wird ausgelöst, wenn Benutzer den Controller drücken, eine Handgeste ausführen, die das Greifen von etwas nachahmt, oder einen Auslöser verwenden (drücken).

### Anwendungsfälle

Das {{domxref("XRSession.squeezestart_event", "squeezestart")}}-Ereignis zeigt an, dass der Benutzer eine Drückaktion begonnen hat.

Wenn die primäre Drückaktion erfolgreich endet, wird der Sitzung ein `squeeze`-Ereignis gesendet.

Ein {{domxref("XRSession.squeezeend_event", "squeezeend")}}-Ereignis wird gesendet, um anzuzeigen, dass die Drückaktion nicht mehr andauert. Dies wird gesendet, unabhängig davon, ob die Drückaktion erfolgreich war oder nicht.

## Beispiele

Im folgenden Beispiel wird {{domxref("EventTarget.addEventListener", "addEventListener()")}} verwendet, um einen Handler für das `squeeze`-Ereignis einzurichten. Der Handler ruft die Pose ab, die den Zielstrahl für `tracked-pointer`-Eingaben darstellt, und sendet die Transformationsdaten der Pose an eine Funktion namens `myHandleSqueezeWithRay()`.

Dieser Code behandelt das Drücken als eine sofortige Aktion, die keine laufende Aktivität verfolgt. Wenn Sie eine Drückaktion verfolgen müssen, die nicht sofort ist, hören Sie auf die Ereignisse {{domxref("XRSession.squeezestart_event", "squeezestart")}} und {{domxref("XRSession.squeezeend_event", "squeezeend")}}, um zu spüren, wann die Drückaktion beginnt und endet.

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

Sie können auch einen Handler für `squeeze`-Ereignisse einrichten, indem Sie die `onsqueeze`-Ereignis-Handler-Eigenschaft des {{domxref("XRSession")}}-Objekts auf eine Funktion setzen, die das Ereignis behandelt:

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

- {{domxref("XRSession.squeezestart_event", "squeezestart")}} und {{domxref("XRSession.squeezeend_event", "squeezeend")}} Ereignis
