---
title: XRInputSourceEvent
slug: Web/API/XRInputSourceEvent
l10n:
  sourceCommit: 6c592023efa1f762eaa1eb1f36241750626be51c
---

{{APIRef("WebXR Device API")}} {{SecureContext_Header}}

Das **`XRInputSourceEvent`**-Interface der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) beschreibt ein Ereignis, das auf einem WebXR-Benutzereingabegerät wie einem Handcontroller, einem Blickverfolgungssystem oder einem Bewegungserfassungssystem aufgetreten ist. Genauer gesagt, repräsentieren sie eine Änderung im Zustand einer {{domxref("XRInputSource")}}.

Um mehr über die Handhabung von Eingaben in einem WebXR-Projekt zu erfahren, lesen Sie den Artikel [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs).

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("XRInputSourceEvent.XRInputSourceEvent", "XRInputSourceEvent()")}}
  - : Erstellt und gibt ein neues `XRInputSourceEvent`-Objekt zurück, dessen Eigenschaften den im bereitgestellten `eventInitDict`-Wörterbuch angegebenen Werten entsprechen.

## Instanz-Eigenschaften

- {{domxref("XRInputSourceEvent.frame", "frame")}} {{ReadOnlyInline}}
  - : Ein {{domxref("XRFrame")}}-Objekt, das die benötigten Informationen über den Ereignisrahmen bereitstellt, während dessen das Ereignis aufgetreten ist. Dieser Rahmen könnte in der Vergangenheit gerendert worden sein, anstatt ein aktueller Rahmen zu sein. Da dies ein _Ereignisrahmen_ und kein _Animationsrahmen_ ist, können Sie nicht die {{domxref("XRFrame")}}-Methode {{domxref("XRFrame.getViewerPose", "getViewerPose()")}} aufrufen; stattdessen verwenden Sie {{domxref("XRFrame.getPose", "getPose()")}}.
- {{domxref("XRInputSourceEvent.inputSource", "inputSource")}} {{ReadOnlyInline}}
  - : Ein {{domxref("XRInputSource")}}-Objekt, das anzeigt, welche Eingabequelle das Eingabeereignis generiert hat.

## Instanz-Methoden

_Das `XRInputSourceEvent`-Interface definiert keine eigenen Methoden; es erbt jedoch mehrere Methoden vom übergeordneten Interface, {{domxref("Event")}}._

## Ereignistypen

- {{domxref("XRSession.select_event", "select")}}
  - : Wird an eine {{domxref("XRSession")}} gesendet, wenn die sendende Eingabequelle eine [primäre Aktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_action) vollständig abgeschlossen hat.
- {{domxref("XRSession.selectend_event", "selectend")}}
  - : Wird an eine {{domxref("XRSession")}} gesendet, wenn eine laufende [primäre Aktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_action) endet oder wenn eine Eingabequelle mit einer laufenden primären Aktion vom System getrennt wurde.
- {{domxref("XRSession.selectstart_event", "selectstart")}}
  - : Wird an eine {{domxref("XRSession")}} gesendet, wenn eine Eingabequelle ihre [primäre Aktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_action) beginnt, was anzeigt, dass der Benutzer eine befehlähnliche Eingabe begonnen hat, wie z. B. das Drücken eines Abzugs oder einer Taste, das Ausgeben eines gesprochenen Befehls, das Tippen auf ein Touchpad oder ähnliches.
- {{domxref("XRSession.squeeze_event", "squeeze")}}
  - : Wird an eine {{domxref("XRSession")}} gesendet, wenn die sendende Eingabequelle eine [primäre Quetschaktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) vollständig abgeschlossen hat.
- {{domxref("XRSession.squeezeend_event", "squeezeend")}}
  - : Wird an eine {{domxref("XRSession")}} gesendet, wenn eine laufende [primäre Quetschaktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) endet oder wenn eine Eingabequelle mit einer laufenden primären Quetschaktion getrennt wird.
- {{domxref("XRSession.squeezestart_event", "squeezestart")}}
  - : Wird an eine {{domxref("XRSession")}} gesendet, wenn eine Eingabequelle ihre [primäre Quetschaktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) beginnt, was anzeigt, dass der Benutzer begonnen hat, den Controller zu greifen, zu quetschen oder zu halten.

## Beispiele

Der folgende Code richtet Handler für primäre Aktionsevents ein, um festzustellen, wann der Benutzer auf Objekte in der Szene klickt (darauf schießt/darauf tippt/was auch immer).

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
