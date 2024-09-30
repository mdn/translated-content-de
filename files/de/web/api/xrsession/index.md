---
title: XRSession
slug: Web/API/XRSession
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die **`XRSession`**-Schnittstelle der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) repräsentiert eine laufende XR-Sitzung und bietet Methoden und Eigenschaften zur Interaktion mit und Steuerung der Sitzung. Um eine WebXR-Sitzung zu eröffnen, verwenden Sie die Methode [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) der Schnittstelle [`XRSystem`](/de/docs/Web/API/XRSystem).

Mit `XRSession`-Methoden können Sie die Position und Ausrichtung des Betrachters abfragen (die [`XRViewerPose`](/de/docs/Web/API/XRViewerPose)), Informationen über die Umgebung des Benutzers sammeln und Bilder an den Benutzer präsentieren. `XRSession` unterstützt sowohl Inline- als auch immersive virtuelle und erweiterte Realitätsmodi.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften erbt `XRSession` Eigenschaften von seiner übergeordneten Schnittstelle [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`depthDataFormat`](/de/docs/Web/API/XRSession/depthDataFormat) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt das Tiefensensing-Datenformat zurück, mit dem die Sitzung konfiguriert wurde.
- [`depthUsage`](/de/docs/Web/API/XRSession/depthUsage) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt die Tiefensensing-Nutzung zurück, mit der die Sitzung konfiguriert wurde.
- [`domOverlayState`](/de/docs/Web/API/XRSession/domOverlayState) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Bietet Informationen über das DOM-Overlay, wenn das Feature aktiviert ist.
- [`environmentBlendMode`](/de/docs/Web/API/XRSession/environmentBlendMode) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt den Blendmodus dieser Sitzung zurück, der angibt, wie viel der realen Umgebung durch das XR-Gerät sichtbar ist und wie das Gerät die Bilddarstellung mit ihr vermischen wird.
- [`inputSources`](/de/docs/Web/API/XRSession/inputSources) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Liste der [`XRInputSource`](/de/docs/Web/API/XRInputSource)s dieser Sitzung zurück, die jeweils ein Eingabegerät darstellen, das zur Steuerung der Kamera und/oder Szene verwendet wird.
- [`interactionMode`](/de/docs/Web/API/XRSession/interactionMode) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt den Interaktionsmodus dieser Sitzung zurück, der den optimalen Raum (laut User-Agent) für die Anwendung beschreibt, um eine interaktive Benutzeroberfläche für die aktuelle Sitzung zu zeichnen.
- [`preferredReflectionFormat`](/de/docs/Web/API/XRSession/preferredReflectionFormat) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt das bevorzugte Reflexionsformat dieser Sitzung zurück, das für Beleuchtungsschätzungs-Texturdaten verwendet wird.
- [`renderState`](/de/docs/Web/API/XRSession/renderState) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein [`XRRenderState`](/de/docs/Web/API/XRRenderState)-Objekt, das Optionen enthält, die beeinflussen, wie die Bilder gerendert werden. Dies umfasst Dinge wie die Nah- und Fernabschnitte (Entfernungen, die definieren, wie nah und wie weit Objekte sein können und dennoch gerendert werden), sowie Informationen zum Sichtfeld.
- [`visibilityState`](/de/docs/Web/API/XRSession/visibilityState) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein String, der angibt, ob das Bildmaterial der Sitzung für den Benutzer sichtbar ist und, falls ja, ob es sichtbar ist, jedoch derzeit nicht das Ziel für Benutzereingaben ist.

## Instanzmethoden

_`XRSession` bietet die folgenden Methoden zusätzlich zu denen, die von seiner übergeordneten Schnittstelle [`EventTarget`](/de/docs/Web/API/EventTarget) geerbt werden._

- [`cancelAnimationFrame()`](/de/docs/Web/API/XRSession/cancelAnimationFrame) {{Experimental_Inline}}
  - : Entfernt einen Rückruf aus dem Satz von Animations-Frame-Rendering-Rückrufen der `XRSession`, wobei der zugehörige Handle verwendet wird, der zuvor von einem Aufruf von [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) zurückgegeben wurde.
- [`end()`](/de/docs/Web/API/XRSession/end) {{Experimental_Inline}}
  - : Beendet die WebXR-Sitzung. Gibt ein {{jsxref("promise")}} zurück, das aufgelöst wird, wenn die Sitzung heruntergefahren wurde.
- [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) {{Experimental_Inline}}
  - : Plant die angegebene Methode, die beim nächsten Mal aufgerufen wird, wenn der [User-Agent](/de/docs/Glossary/user_agent) daran arbeitet, einen Animations-Frame für das WebXR-Gerät zu rendern. Gibt einen ganzzahligen Wert zurück, der zur Identifizierung der Anfrage für die Zwecke der Stornierung des Rückrufs mit `cancelAnimationFrame()` verwendet werden kann. Diese Methode ist mit der Methode [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) vergleichbar.
- [`requestHitTestSource()`](/de/docs/Web/API/XRSession/requestHitTestSource) {{Experimental_Inline}}
  - : Fordert ein [`XRHitTestSource`](/de/docs/Web/API/XRHitTestSource)-Objekt an, das die Hit-Test-Subscription verwaltet.
- [`requestHitTestSourceForTransientInput()`](/de/docs/Web/API/XRSession/requestHitTestSourceForTransientInput) {{Experimental_Inline}}
  - : Fordert ein [`XRTransientInputHitTestSource`](/de/docs/Web/API/XRTransientInputHitTestSource)-Objekt an, das die Hit-Test-Subscription für eine vorübergehende Eingabequelle verwaltet.
- [`requestLightProbe()`](/de/docs/Web/API/XRSession/requestLightProbe) {{Experimental_Inline}}
  - : Fordert ein [`XRLightProbe`](/de/docs/Web/API/XRLightProbe) an, das Beleuchtungsinformationen an einem bestimmten Punkt in der Umgebung des Benutzers schätzt.
- [`requestReferenceSpace()`](/de/docs/Web/API/XRSession/requestReferenceSpace) {{Experimental_Inline}}
  - : Fordert an, dass ein neuer [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) des angegebenen Typs erstellt wird. Gibt ein Promise zurück, das mit dem angeforderten `XRReferenceSpace` oder [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace) aufgelöst wird, oder wirft eine `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException), wenn der angeforderte Raumtyp vom Gerät nicht unterstützt wird.
- [`updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) {{Experimental_Inline}}
  - : Aktualisiert die Eigenschaften des Render-Zustands der Sitzung.

## Ereignisse

_Die folgenden Ereignisse werden an `XRSession`-Objekte ausgeliefert._

- [`end`](/de/docs/Web/API/XRSession/end_event) {{Experimental_Inline}}
  - : Wird an das `XRSession`-Objekt gesendet, nachdem die WebXR-Sitzung beendet wurde und alle hardwarebezogenen Funktionen abgeschlossen sind. Das Ereignis wird durch ein Objekt vom Typ [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent) dargestellt. Auch über die `onend`-Ereignishandler-Eigenschaft verfügbar.
- [`inputsourceschange`](/de/docs/Web/API/XRSession/inputsourceschange_event) {{Experimental_Inline}}
  - : Ein Ereignis vom Typ [`XRInputSourcesChangeEvent`](/de/docs/Web/API/XRInputSourcesChangeEvent), das an die `XRSession` gesendet wird, wenn sich die Liste der aktiven XR-Eingabequellen geändert hat. Auch über die `oninputsourceschange`-Ereignishandler-Eigenschaft verfügbar.
- [`select`](/de/docs/Web/API/XRSession/select_event) {{Experimental_Inline}}
  - : Ein Ereignis vom Typ [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent), das an die Sitzung gesendet wird, wenn eine der Eingabequellen der Sitzung eine [primäre Aktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_action) erfolgreich abgeschlossen hat. Dies entspricht im Allgemeinen dem Drücken eines Triggers, Touchpads oder Knopfs durch den Benutzer, das Aussprechen eines Befehls oder dem Ausführen einer erkennbaren Geste. Das `select`-Ereignis wird nach dem `selectstart`-Ereignis gesendet und unmittelbar vor dem `selectend`-Ereignis. Wenn `select` _nicht_ gesendet wird, wurde die Auswahlaktion abgebrochen, bevor sie abgeschlossen wurde. Auch über die `onselect`-Ereignishandler-Eigenschaft verfügbar.
- [`selectend`](/de/docs/Web/API/XRSession/selectend_event) {{Experimental_Inline}}
  - : Ein Ereignis vom Typ [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent), das an das Sitzungsobjekt gesendet wird, wenn eines seiner Eingabegeräte seine primäre Aktion beendet oder getrennt wird, während es eine primäre Aktion verarbeitet. Zum Beispiel: Bei Knopf- oder Trigger-Aktionen bedeutet dies, dass der Knopf losgelassen wurde; bei gesprochenen Befehlen bedeutet es, dass der Benutzer das Sprechen beendet hat. Dies ist das letzte der drei `select*`-Ereignisse, die gesendet werden. Auch über die `onselectend`-Ereignishandler-Eigenschaft verfügbar.
- [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event) {{Experimental_Inline}}
  - : Ein Ereignis vom Typ [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent), das an das Sitzungsobjekt gesendet wird, wenn eines seiner Eingabegeräte erstmals vom Benutzer so betätigt wird, dass die primäre Aktion begonnen wird. Dies ist das erste der `session*`-Ereignisse, die gesendet werden. Auch über die `onselectstart`-Ereignishandler-Eigenschaft verfügbar.
- [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event) {{Experimental_Inline}}
  - : Ein [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent), das gesendet wird, um anzuzeigen, dass eine [primäre Quetschaktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) erfolgreich abgeschlossen wurde. Dies zeigt an, dass das gedrückte Gerät losgelassen wurde, und kann beispielsweise das Fallenlassen eines gegriffenen Objekts darstellen. Es wird unmittelbar vor dem `squeezeend`-Ereignis gesendet, um anzuzeigen, dass die Quetschaktion beendet ist. Auch über die `onsqueeze`-Ereignishandler-Eigenschaft verfügbar.
- [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event) {{Experimental_Inline}}
  - : Ein [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent), das an die `XRSession` gesendet wird, wenn die [primäre Quetschaktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) endet, unabhängig davon, ob die Aktion erfolgreich war oder nicht. Auch über die `onsqueezeend`-Ereignishandler-Eigenschaft verfügbar.
- [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event) {{Experimental_Inline}}
  - : Ein Ereignis vom Typ [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent), das an die `XRSession` gesendet wird, wenn der Benutzer ein quetschbares Steuergerät zunächst drückt. Dies kann beispielsweise ein Trigger sein, der verwendet wird, um Objekte zu greifen, oder tatsächlich das Quetschen, wenn man einen haptischen Handschuh trägt. Auch über die `onsqueezestart`-Ereignishandler-Eigenschaft verfügbar.
- [`visibilitychange`](/de/docs/Web/API/XRSession/visibilitychange_event) {{Experimental_Inline}}
  - : Ein [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent), das an die Sitzung gesendet wird, wenn sich ihr Sichtbarkeitsstatus ändert, wie durch [`visibilityState`](/de/docs/Web/API/XRSession/visibilityState) angezeigt. Auch über die `onvisibilitychange`-Ereignishandler-Eigenschaft verfügbar.

## Beispiel

Dieses Beispiel erstellt eine neue `XRSession` im `inline`-Modus, damit sie innerhalb eines HTML-Elements angezeigt werden kann, ohne dass ein dediziertes AR- oder VR-Betrachtungsgerät wie ein Headset erforderlich ist.

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
