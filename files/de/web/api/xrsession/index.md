---
title: XRSession
slug: Web/API/XRSession
l10n:
  sourceCommit: 104ee33c990973514704bdf8227d15c05f59ebcb
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Das **`XRSession`**-Interface der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) repräsentiert eine laufende XR-Sitzung und bietet Methoden und Eigenschaften, die zur Interaktion mit und Steuerung der Sitzung verwendet werden. Um eine WebXR-Sitzung zu öffnen, verwenden Sie die Methode [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) des [`XRSystem`](/de/docs/Web/API/XRSystem)-Interfaces.

Mit `XRSession`-Methoden können Sie die Position und Orientierung des Betrachters abfragen (das [`XRViewerPose`](/de/docs/Web/API/XRViewerPose)), Informationen über die Umgebung des Benutzers sammeln und Bilder dem Benutzer präsentieren. `XRSession` unterstützt sowohl Inline- als auch immersive virtuelle und erweiterte Realität Modi.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Neben den unten aufgeführten Eigenschaften erbt `XRSession` Eigenschaften von seinem übergeordneten Interface [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`depthDataFormat`](/de/docs/Web/API/XRSession/depthDataFormat) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt das Tiefensensordatenformat zurück, mit dem die Sitzung konfiguriert wurde.
- [`depthUsage`](/de/docs/Web/API/XRSession/depthUsage) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt die Nutzung des Tiefensensordaten zurück, mit der die Sitzung konfiguriert wurde.
- [`domOverlayState`](/de/docs/Web/API/XRSession/domOverlayState) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Bietet Informationen über das DOM-Overlay, wenn das Feature aktiviert ist.
- [`enabledFeatures`](/de/docs/Web/API/XRSession/enabledFeatures) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt ein Array von gewährten [Sitzungs-Features](/de/docs/Web/API/XRSystem/requestSession#session_features) zurück.
- [`environmentBlendMode`](/de/docs/Web/API/XRSession/environmentBlendMode) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt den Mischmodus dieser Sitzung zurück, der angibt, wie viel von der realen Umgebung durch das XR-Gerät sichtbar ist und wie das Gerät die Gerätekopie damit mischen wird.
- [`inputSources`](/de/docs/Web/API/XRSession/inputSources) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Liste der [`XRInputSource`](/de/docs/Web/API/XRInputSource)s dieser Sitzung zurück, von denen jede ein Eingabegerät darstellt, das zur Steuerung der Kamera und/oder Szene verwendet wird.
- [`interactionMode`](/de/docs/Web/API/XRSession/interactionMode) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt den Interaktionsmodus dieser Sitzung zurück, der beschreibt, welcher Raum (gemäß dem Benutzeragenten) am besten geeignet ist, um interaktive UI für die aktuelle Sitzung zu zeichnen.
- [`preferredReflectionFormat`](/de/docs/Web/API/XRSession/preferredReflectionFormat) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt das bevorzugte Reflexionsformat dieser Sitzung zurück, das für die Beleuchtungsschätzungstexturdaten verwendet wird.
- [`renderState`](/de/docs/Web/API/XRSession/renderState) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein [`XRRenderState`](/de/docs/Web/API/XRRenderState)-Objekt, das Optionen enthält, die beeinflussen, wie die Bilder gerendert werden. Dazu gehören Dinge wie die Nah- und Fernabschnitte (Entfernungen, die definieren, wie nah und wie weit weg Objekte sein können und trotzdem gerendert werden), sowie Informationen über das Sichtfeld.
- [`visibilityState`](/de/docs/Web/API/XRSession/visibilityState) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein String, der angibt, ob das Bildmaterial der Sitzung dem Benutzer sichtbar ist und falls ja, ob es sichtbar ist, aber aktuell nicht Ziel von Benutzereingaben.

## Instanzmethoden

_`XRSession` bietet die folgenden Methoden zusätzlich zu denen, die von seinem übergeordneten Interface [`EventTarget`](/de/docs/Web/API/EventTarget) geerbt werden._

- [`cancelAnimationFrame()`](/de/docs/Web/API/XRSession/cancelAnimationFrame) {{Experimental_Inline}}
  - : Entfernt einen Rückruf aus dem Set von Animationsframe-Rendering-Rückrufen von `XRSession`, unter Angabe des identifizierenden Handles, das von einem vorherigen Aufruf von [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) zurückgegeben wurde.
- [`end()`](/de/docs/Web/API/XRSession/end) {{Experimental_Inline}}
  - : Beendet die WebXR-Sitzung. Gibt ein {{jsxref("promise")}} zurück, das gelöst wird, wenn die Sitzung heruntergefahren wurde.
- [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) {{Experimental_Inline}}
  - : Plant die angegebene Methode zur Ausführung, wenn der {{Glossary("user_agent", "Benutzeragent")}} das nächste Mal ein Animationsframe für das WebXR-Gerät rendert. Gibt einen ganzzahligen Wert zurück, der zur Identifizierung der Anfrage für die Zwecke der Stornierung des Rückrufs mithilfe von `cancelAnimationFrame()` verwendet werden kann. Diese Methode ist vergleichbar mit der Methode [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame).
- [`requestHitTestSource()`](/de/docs/Web/API/XRSession/requestHitTestSource) {{Experimental_Inline}}
  - : Fordert ein [`XRHitTestSource`](/de/docs/Web/API/XRHitTestSource)-Objekt an, das die Treffertest-Abonnementverarbeitung übernimmt.
- [`requestHitTestSourceForTransientInput()`](/de/docs/Web/API/XRSession/requestHitTestSourceForTransientInput) {{Experimental_Inline}}
  - : Fordert ein [`XRTransientInputHitTestSource`](/de/docs/Web/API/XRTransientInputHitTestSource)-Objekt an, das die Treffertest-Abonnementverarbeitung für eine temporäre Eingabequelle übernimmt.
- [`requestLightProbe()`](/de/docs/Web/API/XRSession/requestLightProbe) {{Experimental_Inline}}
  - : Fordert ein [`XRLightProbe`](/de/docs/Web/API/XRLightProbe) an, das Lichtinformationen an einem bestimmten Punkt in der Umgebung des Benutzers schätzt.
- [`requestReferenceSpace()`](/de/docs/Web/API/XRSession/requestReferenceSpace) {{Experimental_Inline}}
  - : Fordert an, dass ein neuer [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) des angegebenen Typs erstellt wird. Gibt ein Versprechen zurück, das mit dem angeforderten `XRReferenceSpace` oder [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace) aufgelöst wird oder wirft einen `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException), wenn der angeforderte Raumtyp vom Gerät nicht unterstützt wird.
- [`updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) {{Experimental_Inline}}
  - : Aktualisiert die Eigenschaften des Renderzustands der Sitzung.

## Ereignisse

_Die folgenden Ereignisse werden an `XRSession`-Objekte geliefert._

- [`end`](/de/docs/Web/API/XRSession/end_event) {{Experimental_Inline}}
  - : Wird an das `XRSession`-Objekt gesendet, nachdem die WebXR-Sitzung beendet wurde und alle hardwarebezogenen Funktionen abgeschlossen sind. Das Ereignis wird durch ein Objekt vom Typ [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent) repräsentiert und ist auch über die Ereignis-Handler-Eigenschaft `onend` verfügbar.
- [`inputsourceschange`](/de/docs/Web/API/XRSession/inputsourceschange_event) {{Experimental_Inline}}
  - : Ein Ereignis des Typs [`XRInputSourcesChangeEvent`](/de/docs/Web/API/XRInputSourcesChangeEvent), das an die `XRSession` gesendet wird, wenn sich die Liste der aktiven XR-Eingabequellen geändert hat. Auch über die Ereignis-Handler-Eigenschaft `oninputsourceschange` verfügbar.
- [`select`](/de/docs/Web/API/XRSession/select_event) {{Experimental_Inline}}
  - : Ein Ereignis des Typs [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent), das an die Sitzung gesendet wird, wenn eine der Eingabequellen der Sitzung eine [primäre Aktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_action) erfolgreich abgeschlossen hat. Dies entspricht im Allgemeinen dem Drücken eines Auslösers, Touchpads oder einer Taste, dem Äußern eines Befehls oder dem Ausführen einer erkennbaren Geste durch den Benutzer. Das `select` Ereignis wird nach dem `selectstart` Ereignis und unmittelbar vor dem `selectend` Ereignis gesendet. Wenn `select` _nicht_ gesendet wird, wurde die Auswahlaktion abgebrochen, bevor sie abgeschlossen war. Auch über die Ereignis-Handler-Eigenschaft `onselect` verfügbar.
- [`selectend`](/de/docs/Web/API/XRSession/selectend_event) {{Experimental_Inline}}
  - : Ein Ereignis des Typs [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent), das an das Sitzungsobjekt gesendet wird, wenn eines seiner Eingabegeräte seine primäre Aktion beendet oder während der Verarbeitung einer primären Aktion getrennt wird. Zum Beispiel: Für Tasten- oder Auslöseaktionen bedeutet dies, dass die Taste losgelassen wurde; für gesprochene Befehle bedeutet dies, dass der Benutzer zu sprechen aufgehört hat. Dies ist das letzte der drei `select*` Ereignisse, das gesendet wird. Auch über die Ereignis-Handler-Eigenschaft `onselectend` verfügbar.
- [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event) {{Experimental_Inline}}
  - : Ein Ereignis des Typs [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent), das an das Sitzungsobjekt gesendet wird, wenn eines seiner Eingabegeräte zum ersten Mal vom Benutzer aktiviert wird, um die primäre Aktion zu starten. Dies ist das erste zu sendende `session*` Ereignis. Auch über die Ereignis-Handler-Eigenschaft `onselectstart` verfügbar.
- [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event) {{Experimental_Inline}}
  - : Ein [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent), das gesendet wird, um anzuzeigen, dass eine [primäre Quetschaktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) erfolgreich abgeschlossen wurde. Dies zeigt an, dass das gequetschte Gerät freigegeben wurde und beispielsweise das Fallenlassen eines gegriffenen Objekts darstellen kann. Es wird unmittelbar vor dem `squeezeend` Ereignis gesendet, um anzuzeigen, dass die Quetschaktion beendet ist. Auch über die Ereignis-Handler-Eigenschaft `onsqueeze` verfügbar.
- [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event) {{Experimental_Inline}}
  - : Ein [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent), das an die `XRSession` gesendet wird, wenn die [primäre Quetschaktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) endet, unabhängig davon, ob die Aktion erfolgreich war oder nicht. Auch über die Ereignis-Handler-Eigenschaft `onsqueezeend` verfügbar.
- [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event) {{Experimental_Inline}}
  - : Ein Ereignis des Typs [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent), das an die `XRSession` gesendet wird, wenn der Benutzer einen quetschbaren Controller erstmals drückt. Dies kann zum Beispiel ein Auslöser sein, der verwendet wird, um das Greifen von Objekten zu repräsentieren, oder könnte tatsächlich das Quetschen darstellen, wenn ein haptischer Handschuh getragen wird. Auch über die Ereignis-Handler-Eigenschaft `onsqueezestart` verfügbar.
- [`visibilitychange`](/de/docs/Web/API/XRSession/visibilitychange_event) {{Experimental_Inline}}
  - : Ein [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent), das an die Sitzung gesendet wird, wenn sich der Sichtbarkeitsstatus gemäß dem [`visibilityState`](/de/docs/Web/API/XRSession/visibilityState) ändert. Auch über die Ereignis-Handler-Eigenschaft `onvisibilitychange` verfügbar.

## Beispiel

Dieses Beispiel richtet eine neue `XRSession` im `inline`-Modus ein, sodass sie innerhalb eines HTML-Elements angezeigt werden kann, ohne dass ein dediziertes AR- oder VR-Anzeigegerät wie ein Headset erforderlich ist.

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
