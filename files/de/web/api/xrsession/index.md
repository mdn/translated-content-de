---
title: XRSession
slug: Web/API/XRSession
l10n:
  sourceCommit: 15e12ff9faca3923ffb811d601ab589f4b2918e0
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Das **`XRSession`** Interface der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) repräsentiert eine laufende Sitzung zwischen einer Webanwendung und dem XR-Gerät eines Benutzers (zum Beispiel ein VR-Headset). Es stellt Methoden und Eigenschaften zur Verfügung, mit denen die Sitzung interagiert und gesteuert werden kann. Um eine WebXR-Sitzung zu eröffnen, verwenden Sie die [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) Methode des [`XRSystem`](/de/docs/Web/API/XRSystem) Interfaces.

Mit den Methoden von `XRSession` können Sie die Position und Orientierung des Betrachters (die [`XRViewerPose`](/de/docs/Web/API/XRViewerPose)) abfragen, Informationen über die Umgebung des Benutzers sammeln und Bilder dem Benutzer präsentieren. `XRSession` unterstützt sowohl Inline- als auch immersive Modi für virtuelle und erweiterte Realität.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften erbt `XRSession` Eigenschaften von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`depthDataFormat`](/de/docs/Web/API/XRSession/depthDataFormat) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt das Tiefenerkennungsdatenformat zurück, mit dem die Sitzung konfiguriert wurde.
- [`depthUsage`](/de/docs/Web/API/XRSession/depthUsage) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt die Verwendung der Tiefenerkennung zurück, mit der die Sitzung konfiguriert wurde.
- [`domOverlayState`](/de/docs/Web/API/XRSession/domOverlayState) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Bietet Informationen über das DOM-Overlay, falls die Funktion aktiviert ist.
- [`enabledFeatures`](/de/docs/Web/API/XRSession/enabledFeatures) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt ein Array der gewährten [Sitzungsfunktionen](/de/docs/Web/API/XRSystem/requestSession#session_features) zurück.
- [`environmentBlendMode`](/de/docs/Web/API/XRSession/environmentBlendMode) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt den Blendmodus dieser Sitzung zurück, der angibt, wie viel von der realen Umgebung durch das XR-Gerät sichtbar ist und wie das Gerät die Gerätebilder damit mischt.
- [`inputSources`](/de/docs/Web/API/XRSession/inputSources) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Liste der [`XRInputSource`](/de/docs/Web/API/XRInputSource)s dieser Sitzung zurück, von denen jede ein Eingabegerät darstellt, das zur Steuerung der Kamera und/oder der Szene verwendet wird.
- [`interactionMode`](/de/docs/Web/API/XRSession/interactionMode) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt den Interaktionsmodus dieser Sitzung zurück, der beschreibt, welcher Raum laut Benutzeragent für die Anwendung am besten geeignet ist, um interaktive Benutzeroberflächen für die aktuelle Sitzung zu zeichnen.
- [`preferredReflectionFormat`](/de/docs/Web/API/XRSession/preferredReflectionFormat) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt das bevorzugte Reflexionsformat dieser Sitzung zurück, das für die Texturdaten der Lichtschätzung verwendet wird.
- [`renderState`](/de/docs/Web/API/XRSession/renderState) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein [`XRRenderState`](/de/docs/Web/API/XRRenderState) Objekt, das Optionen enthält, die beeinflussen, wie die Bilder gerendert werden. Dazu gehören Dinge wie die Nah- und Fern-Clipping-Ebenen (Abstände, die definieren, wie nah und wie weit entfernt sich Objekte befinden können und trotzdem gerendert werden), sowie Informationen über das Sichtfeld.
- [`visibilityState`](/de/docs/Web/API/XRSession/visibilityState) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein String, der angibt, ob die Bilder der Sitzung für den Benutzer sichtbar sind und gegebenenfalls, ob sie sichtbar sind, aber derzeit nicht das Ziel für Benutzereingaben sind.

## Instanzmethoden

_`XRSession` stellt die folgenden Methoden zusätzlich zu denen bereit, die von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget), geerbt werden._

- [`cancelAnimationFrame()`](/de/docs/Web/API/XRSession/cancelAnimationFrame) {{Experimental_Inline}}
  - : Entfernt einen Callback aus den Animationsrahmen-Rendering-Callbacks von `XRSession`, gegeben durch das Identifikations-Handle, das von einem vorherigen Aufruf von [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) zurückgegeben wurde.
- [`end()`](/de/docs/Web/API/XRSession/end) {{Experimental_Inline}}
  - : Beendet die WebXR-Sitzung. Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn die Sitzung beendet wurde.
- [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) {{Experimental_Inline}}
  - : Plant die angegebene Methode, um beim nächsten Mal aufgerufen zu werden, wenn der {{Glossary("user_agent", "User-Agent")}} an der Darstellung eines Animationsrahmens für das WebXR-Gerät arbeitet. Gibt einen ganzzahligen Wert zurück, der verwendet werden kann, um die Anfrage zum Zwecke des Abbruchs des Callbacks mit `cancelAnimationFrame()` zu identifizieren. Diese Methode ist vergleichbar mit der [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) Methode.
- [`requestHitTestSource()`](/de/docs/Web/API/XRSession/requestHitTestSource) {{Experimental_Inline}}
  - : Fordert ein [`XRHitTestSource`](/de/docs/Web/API/XRHitTestSource) Objekt an, das die Abonnementprüfung für Treffer erledigt.
- [`requestHitTestSourceForTransientInput()`](/de/docs/Web/API/XRSession/requestHitTestSourceForTransientInput) {{Experimental_Inline}}
  - : Fordert ein [`XRTransientInputHitTestSource`](/de/docs/Web/API/XRTransientInputHitTestSource) Objekt an, das die Abonnementprüfung für Treffer eines transienten Eingabeelements erledigt.
- [`requestLightProbe()`](/de/docs/Web/API/XRSession/requestLightProbe) {{Experimental_Inline}}
  - : Fordert ein [`XRLightProbe`](/de/docs/Web/API/XRLightProbe) an, das Lichtinformationen an einem bestimmten Punkt in der Umgebung des Benutzers schätzt.
- [`requestReferenceSpace()`](/de/docs/Web/API/XRSession/requestReferenceSpace) {{Experimental_Inline}}
  - : Fordert an, dass ein neues [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) des angegebenen Typs erstellt wird. Gibt ein Versprechen zurück, das mit dem angeforderten `XRReferenceSpace` oder [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace) aufgelöst wird, oder wirft eine `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException), wenn der angeforderte Raumtyp vom Gerät nicht unterstützt wird.
- [`updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) {{Experimental_Inline}}
  - : Aktualisiert die Eigenschaften des Renderzustands der Sitzung.

## Ereignisse

_Die folgenden Ereignisse werden an `XRSession` Objekte gesendet._

- [`end`](/de/docs/Web/API/XRSession/end_event) {{Experimental_Inline}}
  - : Wird an das `XRSession` Objekt gesendet, nachdem die WebXR-Sitzung beendet wurde und alle hardwarebezogenen Funktionen abgeschlossen sind. Das Ereignis wird durch ein Objekt des Typs [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent) dargestellt. Ebenfalls verfügbar über die `onend` Ereignishandler-Eigenschaft.
- [`inputsourceschange`](/de/docs/Web/API/XRSession/inputsourceschange_event) {{Experimental_Inline}}
  - : Ein Ereignis des Typs [`XRInputSourcesChangeEvent`](/de/docs/Web/API/XRInputSourcesChangeEvent), das an die `XRSession` gesendet wird, wenn sich die Liste der aktiven XR-Eingabequellen geändert hat. Ebenfalls verfügbar über die `oninputsourceschange` Ereignishandler-Eigenschaft.
- [`select`](/de/docs/Web/API/XRSession/select_event) {{Experimental_Inline}}
  - : Ein Ereignis des Typs [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent), das an die Sitzung gesendet wird, wenn eine der Eingabequellen der Sitzung eine [primäre Aktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_action) erfolgreich abgeschlossen hat. Dies entspricht im Allgemeinen dem Drücken eines Triggers, Touchpads oder einer Taste, einem gesprochenen Befehl oder einer erkennbaren Geste. Das `select` Ereignis wird nach dem `selectstart` Ereignis gesendet und unmittelbar bevor das `selectend` Ereignis gesendet wird. Wenn `select` _nicht_ gesendet wird, wurde die Auswahlaktion vor der Fertigstellung abgebrochen. Ebenfalls verfügbar über die `onselect` Ereignishandler-Eigenschaft.
- [`selectend`](/de/docs/Web/API/XRSession/selectend_event) {{Experimental_Inline}}
  - : Ein Ereignis des Typs [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent), das an das Sitzungsobjekt gesendet wird, wenn eines seiner Eingabegeräte seine primäre Aktion beendet oder während der Bearbeitung einer primären Aktion die Verbindung getrennt wurde. Zum Beispiel: Bei Tasten- oder Trigger-Aktionen bedeutet dies, dass die Taste freigegeben wurde; bei gesprochenen Befehlen, dass der Benutzer das Sprechen beendet hat. Dies ist das letzte der drei `select*` Ereignisse, die gesendet werden. Ebenfalls verfügbar über die `onselectend` Ereignishandler-Eigenschaft.
- [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event) {{Experimental_Inline}}
  - : Ein Ereignis des Typs [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent), das an das Sitzungsobjekt gesendet wird, wenn eines seiner Eingabegeräte zuerst vom Benutzer so betätigt wird, dass die primäre Aktion beginnt. Dies ist das erste `session*` Ereignis, das gesendet wird. Ebenfalls verfügbar über die `onselectstart` Ereignishandler-Eigenschaft.
- [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event) {{Experimental_Inline}}
  - : Ein [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent), das gesendet wird, um anzuzeigen, dass eine [primäre Quetschaktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) erfolgreich abgeschlossen wurde. Dies bedeutet, dass das Gerät, das gequetscht wird, freigegeben wurde und kann z.B. das Fallenlassen eines gegriffenen Objekts darstellen. Es wird unmittelbar vor dem `squeezeend` Ereignis gesendet, um anzuzeigen, dass die Quetschaktion vorbei ist. Ebenfalls verfügbar über die `onsqueeze` Ereignishandler-Eigenschaft.
- [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event) {{Experimental_Inline}}
  - : Ein [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent), das an die `XRSession` gesendet wird, wenn die [primäre Quetschaktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) endet, unabhängig davon, ob die Aktion erfolgreich war oder nicht. Ebenfalls verfügbar über die `onsqueezeend` Ereignishandler-Eigenschaft.
- [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event) {{Experimental_Inline}}
  - : Ein Ereignis des Typs [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent), das an die `XRSession` gesendet wird, wenn der Benutzer einen quetschbaren Controller initial drückt. Dies kann beispielsweise ein Auslöser sein, der verwendet wird, um das Greifen von Objekten zu repräsentieren, oder tatsächliches Quetschen beim Tragen eines haptischen Handschuhs darstellen. Ebenfalls verfügbar über die `onsqueezestart` Ereignishandler-Eigenschaft.
- [`visibilitychange`](/de/docs/Web/API/XRSession/visibilitychange_event) {{Experimental_Inline}}
  - : Ein [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent), das an die Sitzung gesendet wird, wenn sich der Sichtbarkeitszustand, wie durch den [`visibilityState`](/de/docs/Web/API/XRSession/visibilityState) angegeben, ändert. Ebenfalls verfügbar über die `onvisibilitychange` Ereignishandler-Eigenschaft.
- [`visibilitymaskchange`](/de/docs/Web/API/XRSession/visibilitymaskchange_event) {{Experimental_Inline}}
  - : Ein [`XRVisibilityMaskChangeEvent`](/de/docs/Web/API/XRVisibilityMaskChangeEvent), das an die Sitzung gesendet wird, wenn sich der für den Benutzer sichtbare Teil der [`XRView`](/de/docs/Web/API/XRView) ändert und damit Leistungsverbesserungen ermöglicht, indem der Browser nur den sichtbaren Teil der aktualisierten Ansicht zeichnet. Ebenfalls verfügbar über die `onvisibilitymaskchange` Ereignishandler-Eigenschaft.

## Beispiel

Dieses Beispiel etabliert eine neue `XRSession` im `inline` Modus, so dass es innerhalb eines HTML-Elements angezeigt werden kann, ohne dass ein dediziertes AR- oder VR-Anzeigegerät wie ein Headset erforderlich ist.

```js
const XR = navigator.xr;

if (XR) {
  XR.requestSession("inline").then((xrSession) => {
    xrSession.requestReferenceSpace("local").then((xrReferenceSpace) => {
      xrSession.requestAnimationFrame((time, xrFrame) => {
        const viewer = xrFrame.getViewerPose(xrReferenceSpace);

        gl.bindFramebuffer(xrWebGLLayer.framebuffer);

        for (const xrView of viewer.views) {
          const xrViewport = xrWebGLLayer.getViewport(xrView);
          gl.viewport(
            xrViewport.x,
            xrViewport.y,
            xrViewport.width,
            xrViewport.height,
          );
        }
      });
    });
  });
} else {
  /* WebXR is not available */
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":xr-overlay")}} Pseudo-Klasse
