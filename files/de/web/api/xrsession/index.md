---
title: XRSession
slug: Web/API/XRSession
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Das **`XRSession`** Interface der [WebXR-Geräte-API](/de/docs/Web/API/WebXR_Device_API) repräsentiert eine laufende XR-Sitzung und bietet Methoden und Eigenschaften, die zur Interaktion mit und Steuerung der Sitzung verwendet werden. Um eine WebXR-Sitzung zu öffnen, verwenden Sie die Methode [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) des [`XRSystem`](/de/docs/Web/API/XRSystem) Interfaces.

Mit den `XRSession`-Methoden können Sie die Position und Orientierung des Betrachters (die [`XRViewerPose`](/de/docs/Web/API/XRViewerPose)) abfragen, Informationen über die Umgebung des Benutzers sammeln und Bildmaterial dem Benutzer präsentieren. `XRSession` unterstützt sowohl Inline- als auch immersive Modi für virtuelle und erweiterte Realität.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Zusätzlich zu den nachfolgend aufgeführten Eigenschaften erbt `XRSession` Eigenschaften von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`depthDataFormat`](/de/docs/Web/API/XRSession/depthDataFormat) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt das Tiefendatenformat zurück, mit dem die Sitzung konfiguriert wurde.
- [`depthUsage`](/de/docs/Web/API/XRSession/depthUsage) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt die Tiefennutzungsart zurück, mit der die Sitzung konfiguriert wurde.
- [`domOverlayState`](/de/docs/Web/API/XRSession/domOverlayState) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Bietet Informationen über das DOM-Overlay, falls die Funktion aktiviert ist.
- [`enabledFeatures`](/de/docs/Web/API/XRSession/enabledFeatures) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt ein Array der gewährten [Sitzungsmerkmale](/de/docs/Web/API/XRSystem/requestSession#session_features) zurück.
- [`environmentBlendMode`](/de/docs/Web/API/XRSession/environmentBlendMode) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt den Blend-Modus dieser Sitzung zurück, der angibt, wie viel von der realen Umgebungswelt durch das XR-Gerät sichtbar ist und wie das Gerät das Bildmaterial mit ihr mischen wird.
- [`inputSources`](/de/docs/Web/API/XRSession/inputSources) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Liste der [`XRInputSource`](/de/docs/Web/API/XRInputSource)s dieser Sitzung zurück, die jeweils ein Eingabegerät repräsentieren, das zur Steuerung der Kamera und/oder Szene verwendet wird.
- [`interactionMode`](/de/docs/Web/API/XRSession/interactionMode) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt den Interaktionsmodus dieser Sitzung zurück, der den besten Bereich beschreibt (laut Benutzeragent), in dem die Anwendung interaktive Benutzeroberflächen für die aktuelle Sitzung zeichnen sollte.
- [`preferredReflectionFormat`](/de/docs/Web/API/XRSession/preferredReflectionFormat) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt das bevorzugte Reflektionsformat dieser Sitzung zurück, das für die Texturdaten zur Beleuchtungsschätzung verwendet wird.
- [`renderState`](/de/docs/Web/API/XRSession/renderState) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein [`XRRenderState`](/de/docs/Web/API/XRRenderState) Objekt, das Optionen enthält, die beeinflussen, wie das Bildmaterial gerendert wird. Dies umfasst Dinge wie die Near- und Far-Clipping-Ebenen (Entfernungen, die definieren, wie nah und wie weit Objekte sein können und dennoch gerendert werden), sowie Informationen zum Sichtfeld.
- [`visibilityState`](/de/docs/Web/API/XRSession/visibilityState) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein String, der angibt, ob das Bildmaterial der Sitzung für den Benutzer sichtbar ist und, falls ja, ob es sichtbar ist, aber derzeit nicht das Ziel für Benutzereingaben ist.

## Instanzmethoden

_`XRSession` stellt die folgenden Methoden zusätzlich zu den von seinem übergeordneten Interface [`EventTarget`](/de/docs/Web/API/EventTarget) geerbten Methoden bereit._

- [`cancelAnimationFrame()`](/de/docs/Web/API/XRSession/cancelAnimationFrame) {{Experimental_Inline}}
  - : Entfernt einen Rückruf aus dem Set von Animationsbild-Rückrufen von `XRSession`, gegeben den identifizierenden Handle, der durch einen vorherigen Aufruf von [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) zurückgegeben wurde.
- [`end()`](/de/docs/Web/API/XRSession/end) {{Experimental_Inline}}
  - : Beendet die WebXR-Sitzung. Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn die Sitzung heruntergefahren wurde.
- [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) {{Experimental_Inline}}
  - : Planen Sie die angegebene Methode, um das nächste Mal aufgerufen zu werden, wenn der {{Glossary("user_agent", "User-Agent")}} an der Darstellung eines Animationsbildes für das WebXR-Gerät arbeitet. Gibt einen ganzzahligen Wert zurück, der verwendet werden kann, um die Anforderung zu identifizieren, mit der `cancelAnimationFrame()` Verwendung eines Rückrufs abgebrochen werden kann. Diese Methode ist vergleichbar mit der [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) Methode.
- [`requestHitTestSource()`](/de/docs/Web/API/XRSession/requestHitTestSource) {{Experimental_Inline}}
  - : Fordert ein [`XRHitTestSource`](/de/docs/Web/API/XRHitTestSource) Objekt an, das die Hit-Test-Subscription verwaltet.
- [`requestHitTestSourceForTransientInput()`](/de/docs/Web/API/XRSession/requestHitTestSourceForTransientInput) {{Experimental_Inline}}
  - : Fordert ein [`XRTransientInputHitTestSource`](/de/docs/Web/API/XRTransientInputHitTestSource) Objekt an, das die Hit-Test-Subscription für eine temporäre Eingabequelle verwaltet.
- [`requestLightProbe()`](/de/docs/Web/API/XRSession/requestLightProbe) {{Experimental_Inline}}
  - : Fordert ein [`XRLightProbe`](/de/docs/Web/API/XRLightProbe) an, das Beleuchtungsinformationen an einem gegebenen Punkt in der Umgebung des Benutzers schätzt.
- [`requestReferenceSpace()`](/de/docs/Web/API/XRSession/requestReferenceSpace) {{Experimental_Inline}}
  - : Fordert an, dass ein neuer [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) des angegebenen Typs erstellt wird. Gibt ein Promise zurück, das mit dem angeforderten `XRReferenceSpace` oder [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace) aufgelöst wird, oder wirft ein `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException), falls der angeforderte Raumtyp nicht vom Gerät unterstützt wird.
- [`updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) {{Experimental_Inline}}
  - : Aktualisiert die Eigenschaften des Renderzustands der Sitzung.

## Ereignisse

_Die folgenden Ereignisse werden an `XRSession`-Objekte übermittelt._

- [`end`](/de/docs/Web/API/XRSession/end_event) {{Experimental_Inline}}
  - : Wird an das `XRSession`-Objekt gesendet, nachdem die WebXR-Sitzung beendet ist und alle hardwarebezogenen Funktionen abgeschlossen sind. Das Ereignis wird durch ein Objekt vom Typ [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent) dargestellt. Auch über die `onend`-Ereignishandler-Eigenschaft verfügbar.
- [`inputsourceschange`](/de/docs/Web/API/XRSession/inputsourceschange_event) {{Experimental_Inline}}
  - : Ein Ereignis vom Typ [`XRInputSourcesChangeEvent`](/de/docs/Web/API/XRInputSourcesChangeEvent), das an die `XRSession` gesendet wird, wenn sich die Liste der aktiven XR-Eingabequellen ändert. Auch über die `oninputsourceschange`-Ereignishandler-Eigenschaft verfügbar.
- [`select`](/de/docs/Web/API/XRSession/select_event) {{Experimental_Inline}}
  - : Ein Ereignis vom Typ [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent), das der Sitzung gesendet wird, wenn eine der Eingabequellen der Sitzung erfolgreich eine [Hauptaktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_action) abgeschlossen hat. Dies entspricht im Allgemeinen dem Drücken eines Auslösers, Touchpads oder einer Taste durch den Benutzer, dem Aussprechen eines Befehls oder dem Ausführen einer erkennbaren Geste. Das `select`-Ereignis wird nach dem `selectstart`-Ereignis gesendet und unmittelbar vor dem `selectend`-Ereignis. Wenn `select` _nicht_ gesendet wird, wurde die Auswahlaktion vor der Fertigstellung abgebrochen. Auch über die `onselect`-Ereignishandler-Eigenschaft verfügbar.
- [`selectend`](/de/docs/Web/API/XRSession/selectend_event) {{Experimental_Inline}}
  - : Ein Ereignis vom Typ [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent), das an das Sitzungsobjekt gesendet wird, wenn eines seiner Eingabegeräte seine Hauptaktion beendet oder während der Ausführung einer Hauptaktion getrennt wird. Zum Beispiel: Für Tasten- oder Auslöseraktionen bedeutet dies, dass die Taste losgelassen wurde; bei gesprochenen Befehlen bedeutet es, dass der Benutzer das Sprechen beendet hat. Dies ist das letzte der drei `select*`-Ereignisse, die gesendet werden. Auch über die `onselectend`-Ereignishandler-Eigenschaft verfügbar.
- [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event) {{Experimental_Inline}}
  - : Ein Ereignis vom Typ [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent), das an das Sitzungsobjekt gesendet wird, wenn eines seiner Eingabegeräte vom Benutzer in einer Weise initialisiert wird, die das Beginnen der Hauptaktion verursacht. Dies ist das erste der `session*`-Ereignisse, die gesendet werden. Auch über die `onselectstart`-Ereignishandler-Eigenschaft verfügbar.
- [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event) {{Experimental_Inline}}
  - : Ein [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent), das gesendet wird, um anzuzeigen, dass eine [primäre Quetschaktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) erfolgreich abgeschlossen wurde. Dies zeigt an, dass das gequetschte Gerät freigegeben wurde und kann z. B. das Fallenlassen eines gegriffenen Objekts darstellen. Es wird unmittelbar vor dem `squeezeend`-Ereignis gesendet, um anzuzeigen, dass die Quetschaktion beendet ist. Auch über die `onsqueeze`-Ereignishandler-Eigenschaft verfügbar.
- [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event) {{Experimental_Inline}}
  - : Ein [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent), das an die `XRSession` gesendet wird, wenn die [primäre Quetschaktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) endet, unabhängig davon, ob die Aktion erfolgreich war oder nicht. Auch über die `onsqueezeend`-Ereignishandler-Eigenschaft verfügbar.
- [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event) {{Experimental_Inline}}
  - : Ein Ereignis vom Typ [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent), das an die `XRSession` gesendet wird, wenn der Benutzer zunächst einen quetschbaren Controller drückt. Dies könnte zum Beispiel ein Auslöser sein, der zum Greifen von Objekten verwendet wird, oder könnte tatsächlich das Quetschen darstellen, wenn ein haptischer Handschuh getragen wird. Auch über die `onsqueezestart`-Ereignishandler-Eigenschaft verfügbar.
- [`visibilitychange`](/de/docs/Web/API/XRSession/visibilitychange_event) {{Experimental_Inline}}
  - : Ein [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent), das an die Sitzung gesendet wird, wenn sich der Sichtbarkeitsstatus gemäß [`visibilityState`](/de/docs/Web/API/XRSession/visibilityState) ändert. Auch über die `onvisibilitychange`-Ereignishandler-Eigenschaft verfügbar.

## Beispiel

Dieses Beispiel erstellt eine neue `XRSession` im `inline`-Modus, sodass sie innerhalb eines HTML-Elements angezeigt werden kann. Dadurch wird vermieden, dass ein spezielles AR- oder VR-Anzeigegerät wie ein Headset erforderlich ist.

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
