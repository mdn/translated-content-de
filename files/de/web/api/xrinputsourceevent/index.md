---
title: XRInputSourceEvent
slug: Web/API/XRInputSourceEvent
l10n:
  sourceCommit: 6c592023efa1f762eaa1eb1f36241750626be51c
---

{{APIRef("WebXR Device API")}} {{SecureContext_Header}}

Das **`XRInputSourceEvent`**-Interface der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) beschreibt ein Ereignis, das auf einem WebXR-Benutzereingabegerät wie einem Hand-Controller, einem Blickverfolgungssystem oder einem Bewegungserfassungssystem aufgetreten ist. Genauer gesagt repräsentieren sie eine Änderung des Zustands einer [`XRInputSource`](/de/docs/Web/API/XRInputSource).

Um mehr über die Handhabung von Eingaben in einem WebXR-Projekt zu erfahren, lesen Sie den Artikel [Inputs und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs).

{{InheritanceDiagram}}

## Konstruktor

- [`XRInputSourceEvent()`](/de/docs/Web/API/XRInputSourceEvent/XRInputSourceEvent)
  - : Erstellt und gibt ein neues `XRInputSourceEvent`-Objekt zurück, dessen Eigenschaften mit denen übereinstimmen, die im bereitgestellten `eventInitDict`-Wörterbuch angegeben sind.

## Instanz-Eigenschaften

- [`frame`](/de/docs/Web/API/XRInputSourceEvent/frame) {{ReadOnlyInline}}
  - : Ein [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekt, das die benötigten Informationen über den Ereignis-Frame bereitstellt, während dessen das Ereignis aufgetreten ist. Dieser Frame könnte in der Vergangenheit gerendert worden sein und muss nicht unbedingt ein aktueller Frame sein. Da dies ein _Ereignis_-Frame und kein _Animations_-Frame ist, können Sie darauf nicht die [`XRFrame`](/de/docs/Web/API/XRFrame)-Methode [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) aufrufen; verwenden Sie stattdessen [`getPose()`](/de/docs/Web/API/XRFrame/getPose).
- [`inputSource`](/de/docs/Web/API/XRInputSourceEvent/inputSource) {{ReadOnlyInline}}
  - : Ein [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt, das angibt, welche Eingabequelle das Eingabeereignis erzeugt hat.

## Instanz-Methoden

_Das `XRInputSourceEvent`-Interface definiert keine eigenen Methoden; jedoch werden mehrere Methoden von dem übergeordneten Interface [`Event`](/de/docs/Web/API/Event) geerbt._

## Ereignistypen

- [`select`](/de/docs/Web/API/XRSession/select_event)
  - : An eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn die sendende Eingabequelle eine [primäre Aktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_action) vollständig abgeschlossen hat.
- [`selectend`](/de/docs/Web/API/XRSession/selectend_event)
  - : An eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn eine laufende [primäre Aktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_action) endet oder wenn eine Eingabequelle mit einer laufenden primären Aktion vom System getrennt wurde.
- [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event)
  - : An eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn eine Eingabequelle ihre [primäre Aktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_action) beginnt, was darauf hinweist, dass der Benutzer einen befehlsartigen Input begonnen hat, wie das Drücken eines Triggers oder Knopfes, das Ausgeben eines Sprachbefehls, das Tippen auf ein Touchpad oder Ähnliches.
- [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event)
  - : An eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn die sendende Eingabequelle eine [primäre Quetschaktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) vollständig abgeschlossen hat.
- [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event)
  - : An eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn eine laufende [primäre Quetschaktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) endet oder wenn eine Eingabequelle mit einer laufenden primären Quetschaktion getrennt wird.
- [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event)
  - : An eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn eine Eingabequelle ihre [primäre Quetschaktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) beginnt, was anzeigt, dass der Benutzer begonnen hat, den Controller zu greifen, quetschen oder festzuhalten.

## Beispiele

Der folgende Code richtet Handler für primäre Aktionsereignisse ein, um zu bestimmen, wann der Benutzer auf Objekte in der Szene klickt (sie anschießt/piekt/was auch immer).

```js
xrSession.addEventListener("select", (event) => {
  let targetRayPose = event.frame.getPose(
    event.inputSource.targetRaySpace,
    myRefSpace,
  );

  if (targetRayPose) {
    let hit = myHitTest(targetRayPose.transform);
    if (hit) {
      /* handle the hit */
    }
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
