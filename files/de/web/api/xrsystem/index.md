---
title: XRSystem
slug: Web/API/XRSystem
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) Schnittstelle **`XRSystem`** bietet Methoden, mit denen Sie Zugriff auf ein {{domxref("XRSession")}}-Objekt erhalten, das eine WebXR-Sitzung darstellt. Mit dieser `XRSession` können Sie mit dem Augmented Reality (AR)- oder Virtual Reality (VR)-Gerät interagieren.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Obwohl `XRSystem` direkt keine Eigenschaften bietet, erbt es Eigenschaften von seiner übergeordneten Schnittstelle, {{domxref("EventTarget")}}._

## Instanz-Methoden

_Neben der Vererbung von Methoden seiner übergeordneten Schnittstelle, {{domxref("EventTarget")}}, umfasst die `XRSystem`-Schnittstelle die folgenden Methoden:_

- {{DOMxRef("XRSystem.isSessionSupported", "isSessionSupported()")}} {{Experimental_Inline}}
  - : Gibt ein Versprechen zurück, das sich in `true` auflöst, wenn der Browser den angegebenen Sitzungsmodus unterstützt.
    Löst sich in `false` auf, wenn der spezifizierte Modus nicht unterstützt wird.
- {{DOMxRef("XRSystem.requestSession", "requestSession()")}} {{Experimental_Inline}}
  - : Gibt ein Versprechen zurück, das sich zu einem neuen {{DOMxRef("XRSession")}} mit dem angegebenen Sitzungsmodus auflöst.

## Ereignisse

- {{domxref("XRSystem.devicechange_event", "devicechange")}} {{Experimental_Inline}}
  - : Wird gesendet, wenn sich die Menge der verfügbaren XR-Geräte geändert hat.
    Auch über den `ondevicechange` Ereignis-Handler verfügbar.

## Hinweise zur Verwendung

Diese Schnittstelle war in früheren Versionen der Spezifikation als `XR` bekannt; wenn Sie Verweise auf `XR` im Code oder in der Dokumentation sehen, ersetzen Sie diese durch `XRSystem`.

## Beispiele

Das folgende Beispiel zeigt, wie sowohl {{domxref("XRSystem.isSessionSupported", "isSessionSupported()")}} als auch {{domxref("XRSystem.requestSession", "requestSession()")}} verwendet werden.

```js
if (navigator.xr) {
  immersiveButton.addEventListener("click", onButtonClicked);
  navigator.xr.isSessionSupported("immersive-vr").then((isSupported) => {
    immersiveButton.disabled = !isSupported;
  });
}

function onButtonClicked() {
  if (!xrSession) {
    navigator.xr.requestSession("immersive-vr").then((session) => {
      // onSessionStarted() not shown for reasons of brevity and clarity.
      onSessionStarted(session);
    });
  } else {
    // Shut down the already running XRSession
    xrSession.end().then(() => {
      // Since there are cases where the end event is not sent, call the handler here as well.
      onSessionEnded();
    });
  }
}
```

Dieser Code beginnt damit zu überprüfen, ob WebXR verfügbar ist, indem er nach der {{domxref("navigator.xr")}}-Eigenschaft sucht. Wenn sie gefunden wird, wissen wir, dass WebXR vorhanden ist, und fahren fort, indem wir einen Handler für den Button einrichten, den der Benutzer anklicken kann, um den immersiven VR-Modus ein- und auszuschalten.

Wir wissen jedoch noch nicht, ob der gewünschte immersive Modus verfügbar ist. Um dies festzustellen, rufen wir `isSessionSupported()` auf und übergeben die gewünschte Sitzungsoption, bevor wir den Button `immersiveButton` aktivieren, den der Benutzer dann verwenden kann, um in den immersiven Modus zu wechseln, wenn der immersive VR-Modus verfügbar ist. Ist der immersive VR-Modus nicht verfügbar, wird der Button deaktiviert, um seine Verwendung zu verhindern.

Die Funktion `onButtonClicked()` überprüft, ob bereits eine Sitzung läuft. Wenn dies nicht der Fall ist, verwenden wir `requestSession()`, um eine zu starten, und sobald das zurückgegebene Versprechen erfüllt wird, rufen wir eine Funktion `onSessionStarted()` auf, um unsere Sitzung für das Rendering und so weiter einzurichten.

Wenn andererseits bereits eine laufende XR-Sitzung besteht, rufen wir stattdessen {{domxref("XRSession.end", "end()")}} auf, um die aktuelle Sitzung zu beenden. Wenn die aktuelle Sitzung endet, wird das {{domxref("XRSession.end_event", "end")}}-Ereignis gesendet, setzen Sie also `xrSession` in seinem Handler auf `null`, um zu vermerken, dass wir keine laufende Sitzung mehr haben. Auf diese Weise wird, wenn der Benutzer den Button erneut klickt, eine neue Sitzung gestartet.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
