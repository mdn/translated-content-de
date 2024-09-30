---
title: XRInputSourceEvent
slug: Web/API/XRInputSourceEvent
l10n:
  sourceCommit: 6c592023efa1f762eaa1eb1f36241750626be51c
---

{{APIRef("WebXR Device API")}} {{SecureContext_Header}}

Die **`XRInputSourceEvent`**-Schnittstelle der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) beschreibt ein Ereignis, das auf einem WebXR-Benutzereingabegerät, wie einem Handcontroller, einem Blickverfolgungssystem oder einem Bewegungserkennungssystem, aufgetreten ist. Genauer gesagt, repräsentieren sie eine Änderung im Zustand einer [`XRInputSource`](/de/docs/Web/API/XRInputSource).

Um mehr über die Handhabung von Eingaben in einem WebXR-Projekt zu erfahren, lesen Sie den Artikel [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs).

{{InheritanceDiagram}}

## Konstruktor

- [`XRInputSourceEvent()`](/de/docs/Web/API/XRInputSourceEvent/XRInputSourceEvent)
  - : Erstellt und gibt ein neues `XRInputSourceEvent`-Objekt zurück, dessen Eigenschaften denen im bereitgestellten `eventInitDict`-Wörterbuch entsprechen.

## Instanz-Eigenschaften

- [`frame`](/de/docs/Web/API/XRInputSourceEvent/frame) {{ReadOnlyInline}}
  - : Ein [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekt, das die benötigten Informationen über den Ereignisrahmen bereitstellt, in dem das Ereignis aufgetreten ist. Dieser Rahmen könnte in der Vergangenheit gerendert worden sein, anstatt ein aktueller Rahmen zu sein. Da dies ein _Ereignisrahmen_ ist, nicht ein _Animationsrahmen_, können Sie die [`XRFrame`](/de/docs/Web/API/XRFrame)-Methode [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) nicht darauf aufrufen; verwenden Sie stattdessen [`getPose()`](/de/docs/Web/API/XRFrame/getPose).
- [`inputSource`](/de/docs/Web/API/XRInputSourceEvent/inputSource) {{ReadOnlyInline}}
  - : Ein [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt, das angibt, welche Eingabequelle das Eingabeereignis erzeugt hat.

## Instanz-Methoden

_Die `XRInputSourceEvent`-Schnittstelle definiert keine Methoden; jedoch werden mehrere Methoden von der Elternschnittstelle, [`Event`](/de/docs/Web/API/Event), geerbt._

## Ereignisarten

- [`select`](/de/docs/Web/API/XRSession/select_event)
  - : Wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn die sendende Eingabequelle eine [primäre Aktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_action) vollständig abgeschlossen hat.
- [`selectend`](/de/docs/Web/API/XRSession/selectend_event)
  - : Wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn eine laufende [primäre Aktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_action) endet oder wenn eine Eingabequelle mit einer laufenden primären Aktion vom System getrennt wurde.
- [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event)
  - : Wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn eine Eingabequelle ihre [primäre Aktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_action) beginnt, was darauf hinweist, dass der Benutzer mit einem befehlsähnlichen Eingang begonnen hat, z. B. das Drücken eines Triggers oder Knopfes, das Aussprechen eines Sprachbefehls, das Tippen auf ein Touchpad oder Ähnliches.
- [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event)
  - : Wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn die sendende Eingabequelle eine [primäre Quetschaktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) vollständig abgeschlossen hat.
- [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event)
  - : Wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn eine laufende [primäre Quetschaktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) endet oder wenn eine Eingabequelle mit einer laufenden primären Quetschaktion getrennt wird.
- [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event)
  - : Wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn eine Eingabequelle ihre [primäre Quetschaktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) beginnt, was darauf hinweist, dass der Benutzer begonnen hat, den Controller zu greifen, zu quetschen oder zu fassen.

## Beispiele

Der untenstehende Code richtet Handler für primäre Aktionsereignisse ein, um festzustellen, wann der Benutzer auf Objekte in der Szene klickt (schießt/anstupst/was auch immer).

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
