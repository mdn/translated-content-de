---
title: XRSystem
slug: Web/API/XRSystem
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die Schnittstelle [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) **`XRSystem`** bietet Methoden, die es Ihnen ermöglichen, auf ein [`XRSession`](/de/docs/Web/API/XRSession)-Objekt zuzugreifen, das eine WebXR-Sitzung darstellt. Mit dieser `XRSession` können Sie mit dem Augmented Reality (AR) oder Virtual Reality (VR) Gerät interagieren.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Obwohl `XRSystem` direkt keine Eigenschaften bietet, erbt es Eigenschaften von seiner Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Instanz-Methoden

_Neben den von der Elternschnittstelle [`EventTarget`](/de/docs/Web/API/EventTarget) geerbten Methoden umfasst die `XRSystem`-Schnittstelle die folgenden Methoden:_

- [`isSessionSupported()`](/de/docs/Web/API/XRSystem/isSessionSupported) {{Experimental_Inline}}
  - : Gibt ein Versprechen zurück, das auf `true` aufgelöst wird, wenn der Browser den angegebenen Sitzungsmodus unterstützt.
    Wird auf `false` aufgelöst, wenn der angegebene Modus nicht unterstützt wird.
- [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) {{Experimental_Inline}}
  - : Gibt ein Versprechen zurück, das auf eine neue [`XRSession`](/de/docs/Web/API/XRSession) mit dem angegebenen Sitzungsmodus aufgelöst wird.

## Ereignisse

- [`devicechange`](/de/docs/Web/API/XRSystem/devicechange_event) {{Experimental_Inline}}
  - : Wird gesendet, wenn sich die Menge der verfügbaren XR-Geräte geändert hat.
    Auch über den `ondevicechange`-Ereignis-Handler verfügbar.

## Nutzungshinweise

Diese Schnittstelle war in früheren Versionen der Spezifikation als `XR` bekannt; wenn Sie Verweise auf `XR` in Code oder Dokumentation sehen, ersetzen Sie diese durch `XRSystem`.

## Beispiele

Das folgende Beispiel zeigt, wie sowohl [`isSessionSupported()`](/de/docs/Web/API/XRSystem/isSessionSupported) als auch [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) verwendet werden.

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

Dieser Code beginnt damit zu überprüfen, ob WebXR verfügbar ist, indem die [`navigator.xr`](/de/docs/Web/API/Navigator/xr)-Eigenschaft gesucht wird. Wenn sie gefunden wird, wissen wir, dass WebXR vorhanden ist, und fahren fort, einen Handler für den Button einzurichten, den der Benutzer anklicken kann, um den immersiven VR-Modus ein- und auszuschalten.

Wir wissen jedoch noch nicht, ob der gewünschte immersive Modus verfügbar ist. Um dies festzustellen, rufen wir `isSessionSupported()` auf, übergeben die gewünschte Sitzungsoption, bevor der Button `immersiveButton` aktiviert wird, den dann der Benutzer nur verwenden kann, um in den immersiven Modus zu wechseln, wenn der immersive VR-Modus verfügbar ist. Wenn der immersive VR nicht verfügbar ist, wird der Button deaktiviert, um seine Nutzung zu verhindern.

Die Funktion `onButtonClicked()` überprüft, ob bereits eine Sitzung läuft. Falls nicht, verwenden wir `requestSession()`, um eine zu starten, und sobald das zurückgegebene Versprechen aufgelöst wird, rufen wir eine Funktion `onSessionStarted()` auf, um unsere Sitzung für das Rendering und so weiter einzurichten.

Wenn hingegen bereits eine laufende XR-Sitzung besteht, rufen wir stattdessen [`end()`](/de/docs/Web/API/XRSession/end) auf, um die aktuelle Sitzung zu beenden. Wenn die aktuelle Sitzung endet, wird das [`end`](/de/docs/Web/API/XRSession/end_event) Ereignis gesendet, sodass `xrSession` im entsprechenden Handler auf `null` gesetzt wird, um zu vermerken, dass wir keine laufende Sitzung mehr haben. Auf diese Weise startet eine neue Sitzung, wenn der Benutzer den Button erneut anklickt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
