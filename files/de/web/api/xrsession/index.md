---
title: XRSession
slug: Web/API/XRSession
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die **`XRSession`**-Schnittstelle der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) repräsentiert eine laufende XR-Sitzung und bietet Methoden und Eigenschaften, die zum Interagieren mit und zur Steuerung der Sitzung verwendet werden. Um eine WebXR-Sitzung zu öffnen, verwenden Sie die Methode {{domxref("XRSystem.requestSession", "requestSession()")}} der {{domxref("XRSystem")}}-Schnittstelle.

Mit den Methoden von `XRSession` können Sie die Position und Orientierung des Betrachters (die {{domxref("XRViewerPose")}}) abfragen, Informationen über die Umgebung des Benutzers sammeln und Bilder für den Benutzer darstellen. `XRSession` unterstützt sowohl Inline- als auch immersive Modi für virtuelle und erweiterte Realität.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften erbt `XRSession` Eigenschaften von seiner übergeordneten Schnittstelle, {{domxref("EventTarget")}}._

- {{DOMxRef("XRSession.depthDataFormat", "depthDataFormat")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt das Format der Tiefensensordaten zurück, mit dem die Sitzung konfiguriert wurde.
- {{DOMxRef("XRSession.depthUsage", "depthUsage")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt die Nutzung der Tiefensensordaten zurück, mit der die Sitzung konfiguriert wurde.
- {{DOMxRef("XRSession.domOverlayState", "domOverlayState")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Bietet Informationen über das DOM-Overlay, falls die Funktion aktiviert ist.
- {{DOMxRef("XRSession.environmentBlendMode", "environmentBlendMode")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt den Blendmodus dieser Sitzung zurück, der angibt, wie viel der realen Umgebung durch das XR-Gerät sichtbar ist und wie das Gerät die Gerätegraphe mit ihr vermischt.
- {{DOMxRef("XRSession.inputSources", "inputSources")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Liste der {{DOMxRef("XRInputSource")}} dieser Sitzung zurück, die jeweils ein Eingabegerät darstellen, das zum Steuern der Kamera und/oder der Szene verwendet wird.
- {{DOMxRef("XRSession.interactionMode", "interactionMode")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt den Interaktionsmodus dieser Sitzung zurück, der den besten Raum (laut Benutzeragent) beschreibt, für den die Anwendung interaktive Benutzeroberflächen zeichnen soll.
- {{DOMxRef("XRSession.preferredReflectionFormat", "preferredReflectionFormat")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt das bevorzugte Reflexionsformat dieser Sitzung zurück, das für Beleuchtungsschätzungen von Texturdaten verwendet wird.
- {{DOMxRef("XRSession.renderState", "renderState")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein {{domxref("XRRenderState")}}-Objekt, das Optionen enthält, die beeinflussen, wie die Grafik gerendert wird. Dazu gehören Dinge wie die Nah- und Fernabschneideebenen (Abstände, die definieren, wie nahe und wie weit entfernt Objekte sein können und trotzdem gerendert werden), sowie Informationen zum Sichtfeld.
- {{DOMxRef("XRSession.visibilityState", "visibilityState")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein String, der angibt, ob die Bilder der Sitzung für den Benutzer sichtbar sind und wenn ja, ob sie sichtbar sind aber momentan nicht das Ziel für Benutzereignisse sind.

## Instanzmethoden

_`XRSession` bietet die folgenden Methoden zusätzlich zu denen, die von seiner übergeordneten Schnittstelle, {{domxref("EventTarget")}}, geerbt werden._

- {{DOMxRef("XRSession.cancelAnimationFrame", "cancelAnimationFrame()")}} {{Experimental_Inline}}
  - : Entfernt einen Rückruf aus dem Rückrufset des `XRSession` für die Animationsrahmen-Malerei, basierend auf dem Identifikations-Handle, das von einem vorherigen Aufruf von {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} zurückgegeben wurde.
- {{DOMxRef("XRSession.end", "end()")}} {{Experimental_Inline}}
  - : Beendet die WebXR-Sitzung. Gibt ein {{jsxref("promise")}} zurück, das aufgelöst wird, wenn die Sitzung beendet wurde.
- {{DOMxRef("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} {{Experimental_Inline}}
  - : Plant die angegebene Methode für den nächsten Zeitpunkt der Animationsrahmenbearbeitung durch den {{glossary("user agent")}} für das WebXR-Gerät ein. Gibt einen ganzzahligen Wert zurück, der verwendet werden kann, um die Anforderung zum Zwecke der Stornierung des Rückrufs mit `cancelAnimationFrame()` zu identifizieren. Diese Methode ist vergleichbar mit der Methode {{domxref("Window.requestAnimationFrame()")}}.
- {{DOMxRef("XRSession.requestHitTestSource", "requestHitTestSource()")}} {{Experimental_Inline}}
  - : Fordert ein {{domxref("XRHitTestSource")}}-Objekt an, das Subskriptionen für Treffer-Tests verwaltet.
- {{DOMxRef("XRSession.requestHitTestSourceForTransientInput", "requestHitTestSourceForTransientInput()")}} {{Experimental_Inline}}
  - : Fordert ein {{domxref("XRTransientInputHitTestSource")}}-Objekt an, das Subskriptionen für Treffer-Tests für eine flüchtige Eingabequelle verwaltet.
- {{DOMxRef("XRSession.requestLightProbe", "requestLightProbe()")}} {{Experimental_Inline}}
  - : Fordert eine {{domxref("XRLightProbe")}} an, die Lichtinformationen an einem bestimmten Punkt in der Umgebung des Benutzers schätzt.
- {{DOMxRef("XRSession.requestReferenceSpace", "requestReferenceSpace()")}} {{Experimental_Inline}}
  - : Fordert an, dass ein neuer {{domxref("XRReferenceSpace")}} des angegebenen Typs erstellt wird. Gibt ein Versprechen zurück, das mit dem angeforderten `XRReferenceSpace` oder {{domxref("XRBoundedReferenceSpace")}} aufgelöst wird, oder löst einen `NotSupportedError` {{domxref("DOMException")}} aus, wenn der angeforderte Raumtyp vom Gerät nicht unterstützt wird.
- {{DOMxRef("XRSession.updateRenderState", "updateRenderState()")}} {{Experimental_Inline}}
  - : Aktualisiert die Eigenschaften des Renderzustands der Sitzung.

## Ereignisse

_Die folgenden Ereignisse werden an `XRSession`-Objekte gesendet._

- {{domxref("XRSession.end_event", "end")}} {{Experimental_Inline}}
  - : Wird an das `XRSession`-Objekt gesendet, nachdem die WebXR-Sitzung beendet wurde und alle hardwarebezogenen Funktionen abgeschlossen sind. Das Ereignis wird durch ein Objekt des Typs {{domxref("XRSessionEvent")}} dargestellt. Auch über die `onend`-Ereignishandler-Eigenschaft verfügbar.
- {{domxref("XRSession.inputsourceschange_event", "inputsourceschange")}} {{Experimental_Inline}}
  - : Ein Ereignis des Typs {{domxref("XRInputSourcesChangeEvent")}}, das an die `XRSession` gesendet wird, wenn sich die Liste der aktiven XR-Eingabequellen geändert hat. Auch über die `oninputsourceschange`-Ereignishandler-Eigenschaft verfügbar.
- {{domxref("XRSession.select_event", "select")}} {{Experimental_Inline}}
  - : Ein Ereignis des Typs {{domxref("XRInputSourceEvent")}}, das an die Sitzung gesendet wird, wenn eine der Eingabequellen der Sitzung erfolgreich eine [primäre Aktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_action) abgeschlossen hat. Dies korrespondiert in der Regel mit dem Drücken eines Triggers, Touchpads oder einer Taste, einem gesprochenen Befehl oder einer erkennbaren Geste. Das `select`-Ereignis wird nach dem `selectstart`-Ereignis gesendet und unmittelbar vor dem `selectend`-Ereignis gesendet. Wenn `select` _nicht_ gesendet wird, wurde die Auswahlaktion vor der Fertigstellung abgebrochen. Auch über die `onselect`-Ereignishandler-Eigenschaft verfügbar.
- {{domxref("XRSession.selectend_event", "selectend")}} {{Experimental_Inline}}
  - : Ein Ereignis des Typs {{domxref("XRInputSourceEvent")}}, das an das Sitzungsobjekt gesendet wird, wenn eine der Eingabegeräte seine primäre Aktion beendet oder beim Bearbeiten einer primären Aktion getrennt wurde. Zum Beispiel: Bei Taste- oder Triggereingaben bedeutet dies, dass die Taste losgelassen wurde; bei gesprochenen Befehlen bedeutet dies, dass der Benutzer das Sprechen beendet hat. Dies ist das letzte der drei `select*`-Ereignisse, die gesendet werden. Auch über die `onselectend`-Ereignishandler-Eigenschaft verfügbar.
- {{domxref("XRSession.selectstart_event", "selectstart")}} {{Experimental_Inline}}
  - : Ein Ereignis des Typs {{domxref("XRInputSourceEvent")}}, das an das Sitzungsobjekt gesendet wird, wenn eine seiner Eingabegeräte vom Benutzer so aktiviert wird, dass die primäre Aktion beginnt. Dies ist das erste der `session*`-Ereignisse, das gesendet wird. Auch über die `onselectstart`-Ereignishandler-Eigenschaft verfügbar.
- {{domxref("XRSession.squeeze_event", "squeeze")}} {{Experimental_Inline}}
  - : Ein {{domxref("XRInputSourceEvent")}}, das gesendet wird, um anzuzeigen, dass eine [primäre Quetschaktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) erfolgreich abgeschlossen wurde. Das zeigt an, dass das gequetschte Gerät losgelassen wurde, und kann zum Beispiel das Ablegen eines gegriffenen Objekts darstellen. Es wird unmittelbar vor dem `squeezeend`-Ereignis gesendet, um anzuzeigen, dass die Quetschaktion abgeschlossen ist. Auch über die `onsqueeze`-Ereignishandler-Eigenschaft verfügbar.
- {{domxref("XRSession.squeezeend_event", "squeezeend")}} {{Experimental_Inline}}
  - : Ein {{domxref("XRInputSourceEvent")}}, das an die `XRSession` gesendet wird, wenn die [primäre Quetschaktion](/de/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) endet, unabhängig davon, ob die Aktion erfolgreich war. Auch über die `onsqueezeend`-Ereignishandler-Eigenschaft verfügbar.
- {{domxref("XRSession.squeezestart_event", "squeezestart")}} {{Experimental_Inline}}
  - : Ein Ereignis des Typs {{domxref("XRInputSourceEvent")}}, das an die `XRSession` gesendet wird, wenn der Benutzer erstmals einen quetschbaren Controller quetscht. Dies kann zum Beispiel ein Trigger sein, der verwendet wird, um das Greifen von Objekten darzustellen, oder könnte bei Verwendung eines haptischen Handschuhs tatsächlich Quetschen darstellen. Auch über die `onsqueezestart`-Ereignishandler-Eigenschaft verfügbar.
- {{domxref("XRSession.visibilitychange_event", "visibilitychange")}} {{Experimental_Inline}}
  - : Ein {{domxref("XRSessionEvent")}}, das an die Sitzung gesendet wird, wenn sich der Sichtbarkeitszustand laut {{domxref("XRSession.visibilityState", "visibilityState")}} ändert. Auch über die `onvisibilitychange`-Ereignishandler-Eigenschaft verfügbar.

## Beispiel

Dieses Beispiel erstellt eine neue `XRSession` im `inline`-Modus, sodass sie innerhalb eines HTML-Elements angezeigt werden kann, ohne dass ein spezielles AR- oder VR-Anzeigegerät wie ein Headset erforderlich ist.

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
