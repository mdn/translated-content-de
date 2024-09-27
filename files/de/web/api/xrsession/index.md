---
title: XRSession
slug: Web/API/XRSession
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Das **`XRSession`** Interface der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) repräsentiert eine laufende XR-Sitzung und bietet Methoden und Eigenschaften, die zur Interaktion und Steuerung der Sitzung verwendet werden. Um eine WebXR-Sitzung zu öffnen, verwenden Sie die Methode [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) des [`XRSystem`](/de/docs/Web/API/XRSystem) Interfaces.

Mit den `XRSession`-Methoden können Sie die Position und Orientierung des Betrachters (die [`XRViewerPose`](/de/docs/Web/API/XRViewerPose)) abfragen, Informationen über die Umgebung des Benutzers sammeln und Bilder dem Benutzer präsentieren. `XRSession` unterstützt sowohl Inline- als auch immersive Virtual- und Augmented-Reality-Modi.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften erbt `XRSession` Eigenschaften von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`depthDataFormat`](/de/docs/Web/API/XRSession/depthDataFormat) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt das Tiefensensor-Datenformat zurück, mit dem die Sitzung konfiguriert wurde.
- [`depthUsage`](/de/docs/Web/API/XRSession/depthUsage) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt die Tiefensensor-Verwendung zurück, mit der die Sitzung konfiguriert wurde.
- [`domOverlayState`](/de/docs/Web/API/XRSession/domOverlayState) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Bietet Informationen über das DOM-Overlay, falls das Feature aktiviert ist.
- [`environmentBlendMode`](/de/docs/Web/API/XRSession/environmentBlendMode) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt den Blend-Modus dieser Sitzung zurück, der angibt, wie viel von der realen Umgebung durch das XR-Gerät sichtbar ist und wie das Gerät die Bilddaten des Geräts damit vermischt.
- [`inputSources`](/de/docs/Web/API/XRSession/inputSources) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Liste der [`XRInputSource`](/de/docs/Web/API/XRInputSource)s dieser Sitzung zurück, die jeweils ein Eingabegerät darstellen, das zur Steuerung der Kamera und/oder der Szene verwendet wird.
- [`interactionMode`](/de/docs/Web/API/XRSession/interactionMode) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt den Interaktionsmodus dieser Sitzung zurück, der den besten Bereich (laut des Benutzeragents) beschreibt, um die interaktive Benutzeroberfläche für die aktuelle Sitzung zu zeichnen.
- [`preferredReflectionFormat`](/de/docs/Web/API/XRSession/preferredReflectionFormat) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt das bevorzugte Reflexionsformat dieser Sitzung zurück, das für die Beleuchtungsschätzungs-Texturdaten verwendet wird.
- [`renderState`](/de/docs/Web/API/XRSession/renderState) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein [`XRRenderState`](/de/docs/Web/API/XRRenderState)-Objekt, das Optionen enthält, die beeinflussen, wie die Bildgebung gerendert wird. Dazu gehören Dinge wie die nahen und fernen Schneide-Ebenen (Entfernungen, die definieren, wie nah und wie weit Objekte entfernt sein können und trotzdem gerendert werden) sowie Informationen über das Sichtfeld.
- [`visibilityState`](/de/docs/Web/API/XRSession/visibilityState) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein String, der angibt, ob das Bildmaterial der Sitzung für den Nutzer sichtbar ist und falls ja, ob es sichtbar ist, aber derzeit nicht das Ziel für Benutzereingaben ist.

## Instanz-Methoden

_`XRSession` stellt die folgenden Methoden zusätzlich zu denen, die von seinem übergeordneten Interface [`EventTarget`](/de/docs/Web/API/EventTarget) geerbt werden, bereit._

- [`cancelAnimationFrame()`](/de/docs/Web/API/XRSession/cancelAnimationFrame) {{Experimental_Inline}}
  - : Entfernt einen Callback aus dem Animations-Frame-Mal-Callback aus dem Set der Animations-Frame-Rendering-Callbacks von `XRSession`, gegeben durch den identifizierenden Handle, der durch einen vorherigen Aufruf von [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) zurückgegeben wurde.
- [`end()`](/de/docs/Web/API/XRSession/end) {{Experimental_Inline}}
  - : Beendet die WebXR-Sitzung. Gibt ein {{jsxref("promise")}} zurück, das sich auflöst, wenn die Sitzung heruntergefahren wurde.
- [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) {{Experimental_Inline}}
  - : Plant die angegebene Methode für den nächsten Zeitpunkt ein, zu dem der [User-Agent](/de/docs/Glossary/user_agent) an der Wiedergabe eines Animations-Frames für das WebXR-Gerät arbeitet. Gibt einen ganzzahligen Wert zurück, der zur Identifizierung der Anfrage zum Zweck der Stornierung des Callbacks mittels `cancelAnimationFrame()` genutzt werden kann. Diese Methode ist vergleichbar mit der [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)-Methode.
- [`requestHitTestSource()`](/de/docs/Web/API/XRSession/requestHitTestSource) {{Experimental_Inline}}
  - : Fordert ein [`XRHitTestSource`](/de/docs/Web/API/XRHitTestSource)-Objekt an, das die Hit-Test-Abonnementverwaltung übernimmt.
- [`requestHitTestSourceForTransientInput()`](/de/docs/Web/API/XRSession/requestHitTestSourceForTransientInput) {{Experimental_Inline}}
  - : Fordert ein [`XRTransientInputHitTestSource`](/de/docs/Web/API/XRTransientInputHitTestSource)-Objekt an, das die Hit-Test-Abonnementverwaltung für eine temporäre Eingabequelle übernimmt.
- [`requestLightProbe()`](/de/docs/Web/API/XRSession/requestLightProbe) {{Experimental_Inline}}
  - : Fordert eine [`XRLightProbe`](/de/docs/Web/API/XRLightProbe) an, die Lichtinformationen an einem gegebenen Punkt in der Umgebung des Benutzers schätzt.
- [`requestReferenceSpace()`](/de/docs/Web/API/XRSession/requestReferenceSpace) {{Experimental_Inline}}
  - : Fordert an, dass ein neuer [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) des angegebenen Typs erstellt wird. Gibt ein Promise zurück, das sich mit dem angeforderten `XRReferenceSpace` oder [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace) auflöst oder wirft einen `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException), wenn der angeforderte Raumtyp vom Gerät nicht unterstützt wird.
- [`updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) {{Experimental_Inline}}
  - : Aktualisiert die Eigenschaften des Render-Status der Sitzung.

## Ereignisse

_Die folgenden Ereignisse werden an `XRSession`-Objekte gesendet._

- [`end`](/de/docs/Web/API/XRSession/end_event) {{Experimental_Inline}}
  - : Wird an das `XRSession`-Objekt gesendet, nachdem die WebXR-Sitzung beendet wurde und alle hardwarebezogenen Funktionen abgeschlossen sind. Das Ereignis wird durch ein Objekt vom Typ [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent) repräsentiert. Auch über die `onend`-Ereignishandler-Eigenschaft verfügbar.
- [`inputsourceschange`](/de/docs/Web/API/XRSession/inputsourceschange_event) {{Experimental_Inline}}
  - : Ein Ereignis vom Typ [`XRInputSourcesChangeEvent`](/de/docs/Web/API/XRInputSourcesChangeEvent), das an die `XRSession` gesendet wird, wenn sich die Liste der aktiven XR-Eingabequellen geändert hat. Auch über die `oninputsourceschange`-Ereignishandler-Eigenschaft verfügbar.
- [`select`](/de/docs/Web/API/XRSession/select_event) {{Experimental_Inline}}
  - : Ein Ereignis vom Typ [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent), das an die Sitzung gesendet wird, wenn eine der Eingabequellen der Sitzung eine [primäre Aktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_action) erfolgreich abgeschlossen hat. Dies entspricht im Allgemeinen dem Drücken eines Triggers, eines Touchpads oder eines Buttons, dem Aussprechen eines Befehls oder dem Ausführen einer erkennbaren Geste durch den Benutzer. Das `select`-Ereignis wird nach dem `selectstart`-Ereignis gesendet und unmittelbar bevor das `selectend`-Ereignis gesendet wird. Wenn `select` _nicht_ gesendet wird, wurde die Auswahlaktion abgebrochen, bevor sie abgeschlossen wurde. Auch über die `onselect`-Ereignishandler-Eigenschaft verfügbar.
- [`selectend`](/de/docs/Web/API/XRSession/selectend_event) {{Experimental_Inline}}
  - : Ein Ereignis vom Typ [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent), das an das Sitzungsobjekt gesendet wird, wenn eine seiner Eingabegeräte seine primäre Aktion abgeschlossen hat oder während der Bearbeitung einer primären Handlung getrennt wurde. Beispielsweise: Bei Button- oder Trigger-Aktionen bedeutet dies, dass der Button losgelassen wurde; bei gesprochenen Befehlen bedeutet dies, dass der Benutzer das Sprechen abgeschlossen hat. Dies ist das letzte der drei `select*`-Ereignisse, die gesendet werden. Auch über die `onselectend`-Ereignishandler-Eigenschaft verfügbar.
- [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event) {{Experimental_Inline}}
  - : Ein Ereignis vom Typ [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent), das an das Sitzungsobjekt gesendet wird, wenn eines seiner Eingabegeräte vom Benutzer erstmals so engagiert wird, dass die primäre Aktion beginnt. Dies ist das erste der `session*`-Ereignisse, die gesendet werden. Auch über die `onselectstart`-Ereignishandler-Eigenschaft verfügbar.
- [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event) {{Experimental_Inline}}
  - : Ein [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent), das gesendet wird, um anzuzeigen, dass eine [primäre Quetschaktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) erfolgreich abgeschlossen wurde. Dies bedeutet, dass das Gerät, das gequetscht wurde, freigegeben wurde, und kann zum Beispiel das Fallenlassen eines aufgenommenen Objekts darstellen. Es wird unmittelbar vor dem `squeezeend`-Ereignis gesendet, um anzuzeigen, dass die Quetschaktion vorbei ist. Auch über die `onsqueeze`-Ereignishandler-Eigenschaft verfügbar.
- [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event) {{Experimental_Inline}}
  - : Ein [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent), das an die `XRSession` gesendet wird, wenn die [primäre Quetschaktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) endet, unabhängig davon, ob die Aktion erfolgreich war oder nicht. Auch über die `onsqueezeend`-Ereignishandler-Eigenschaft verfügbar.
- [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event) {{Experimental_Inline}}
  - : Ein Ereignis vom Typ [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent), das an die `XRSession` gesendet wird, wenn der Benutzer erstmals einen quetschbaren Controller zusammendrückt. Dies kann beispielsweise ein Trigger sein, der verwendet wird, um das Greifen von Objekten darzustellen, oder es könnte tatsächliches Quetschen sein, wenn ein haptischer Handschuh getragen wird. Auch über die `onsqueezestart`-Ereignishandler-Eigenschaft verfügbar.
- [`visibilitychange`](/de/docs/Web/API/XRSession/visibilitychange_event) {{Experimental_Inline}}
  - : Ein [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent), das an die Sitzung gesendet wird, wenn sich der Sichtbarkeitsstatus der Sitzung, wie von der [`visibilityState`](/de/docs/Web/API/XRSession/visibilityState) angegeben, ändert. Auch über die `onvisibilitychange`-Ereignishandler-Eigenschaft verfügbar.

## Beispiel

Dieses Beispiel etabliert eine neue `XRSession` im `inline`-Modus, sodass sie innerhalb eines HTML-Elements angezeigt werden kann, was die Notwendigkeit eines speziellen AR- oder VR-Anzeigegeräts wie eines Headsets vermeidet.

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
