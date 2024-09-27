---
title: XRSystem
slug: Web/API/XRSystem
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Das [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) Interface **`XRSystem`** bietet Methoden, die Ihnen den Zugriff auf ein [`XRSession`](/de/docs/Web/API/XRSession)-Objekt ermöglichen, das eine WebXR-Session repräsentiert. Mit dieser `XRSession` können Sie mit dem Gerät für Augmented Reality (AR) oder Virtual Reality (VR) interagieren.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Während `XRSystem` direkt keine Eigenschaften anbietet, erbt es Eigenschaften von seinem Eltern-Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Instanz-Methoden

_Neben der Vererbung von Methoden seines Eltern-Interfaces, [`EventTarget`](/de/docs/Web/API/EventTarget), beinhaltet das `XRSystem` Interface die folgenden Methoden:_

- [`isSessionSupported()`](/de/docs/Web/API/XRSystem/isSessionSupported) {{Experimental_Inline}}
  - : Gibt ein Promise zurück, das auf `true` aufgelöst wird, wenn der Browser den angegebenen Sitzungsmodus unterstützt. Es wird auf `false` aufgelöst, wenn der spezifizierte Modus nicht unterstützt wird.
- [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) {{Experimental_Inline}}
  - : Gibt ein Promise zurück, das auf eine neue [`XRSession`](/de/docs/Web/API/XRSession) mit dem angegebenen Sitzungsmodus aufgelöst wird.

## Ereignisse

- [`devicechange`](/de/docs/Web/API/XRSystem/devicechange_event) {{Experimental_Inline}}
  - : Wird gesendet, wenn sich die Menge der verfügbaren XR-Geräte geändert hat. Auch verfügbar über den `ondevicechange` Ereignis-Handler.

## Nutzungshinweise

Dieses Interface war zuvor als `XR` in früheren Versionen der Spezifikation bekannt; wenn Sie Verweise auf `XR` in Code oder Dokumentation sehen, ersetzen Sie dies durch `XRSystem`.

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

Dieser Code beginnt damit, zu überprüfen, ob WebXR verfügbar ist, indem die [`navigator.xr`](/de/docs/Web/API/Navigator/xr)-Eigenschaft gesucht wird. Wenn sie gefunden wird, wissen wir, dass WebXR vorhanden ist, und fahren mit der Einrichtung eines Handlers für den Button fort, den der Benutzer klicken kann, um den immersiven VR-Modus ein- und auszuschalten.

Wir wissen jedoch noch nicht, ob der gewünschte immersive Modus verfügbar ist. Um dies zu bestimmen, rufen wir `isSessionSupported()` auf, indem wir die gewünschte Sitzungsoption übergeben, bevor der Button, `immersiveButton`, aktiviert wird, den der Benutzer dann verwenden kann, um in den immersiven Modus zu wechseln, nur wenn der immersive VR-Modus verfügbar ist. Wenn der immersive VR-Modus nicht verfügbar ist, wird der Button deaktiviert, um seine Verwendung zu verhindern.

Die Funktion `onButtonClicked()` prüft, ob bereits eine Sitzung läuft. Wenn nicht, verwenden wir `requestSession()`, um eine zu starten, und sobald das zurückgegebene Promise aufgelöst ist, rufen wir eine Funktion `onSessionStarted()` auf, um unsere Sitzung für das Rendering und so weiter einzurichten.

Wenn andererseits bereits eine laufende XR-Session vorhanden ist, rufen wir stattdessen [`end()`](/de/docs/Web/API/XRSession/end) auf, um die aktuelle Sitzung zu beenden. Wenn die aktuelle Sitzung endet, wird das [`end`](/de/docs/Web/API/XRSession/end_event)-Ereignis gesendet, daher setzen Sie `xrSession` in dessen Handler auf `null`, um festzuhalten, dass wir keine laufende Sitzung mehr haben. Auf diese Weise wird eine neue Sitzung gestartet, wenn der Benutzer erneut auf den Button klickt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
