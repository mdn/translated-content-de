---
title: "CaptureController: forwardWheel() Methode"
short-title: forwardWheel()
slug: Web/API/CaptureController/forwardWheel
l10n:
  sourceCommit: 83a92f1eaf27dabf71beec6c548afb03171aa194
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`forwardWheel()`**-Methode der [`CaptureController`](/de/docs/Web/API/CaptureController)-Schnittstelle beginnt mit dem Weiterleiten von [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignissen, die auf dem referenzierten Element ausgelöst werden, an die Ansichtsfläche einer zugehörigen erfassten Anzeigefläche.

Die Methode `forwardWheel()` muss über eine {{Glossary("Transient_activation", "vorübergehende Aktivierung")}} aufgerufen werden. Konkret sind die einzigen Ereignisse, die sie erfolgreich aufrufen können, `click` und `input`. Außerdem wird der Benutzer um Erlaubnis gebeten, Tabs zu teilen, wenn die Bildschirmerfassung erstmals versucht wird; gewährt der Benutzer die Erlaubnis, schließt dies auch die Erlaubnis ein, erfasste Tabs zu scrollen. Wenn die entsprechende Berechtigung bereits als `"granted"` gesetzt ist, ist keine vorübergehende Aktivierung erforderlich.

## Syntax

```js-nolint
forwardWheel(element)
```

### Parameter

- `element`
  - : Ein Verweis auf das Element, dessen `wheel`-Ereignisse Sie an die zugehörige erfasste Anzeigefläche weiterleiten möchten.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} erfüllt wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Der erfassende [`MediaStream`](/de/docs/Web/API/MediaStream), der durch den ursprünglichen Aufruf von [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) zurückgegeben wurde, nicht mehr erfasst, zum Beispiel weil die zugehörigen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte mit [`stop()`](/de/docs/Web/API/MediaStreamTrack/stop) gestoppt wurden.
    - Die Anwendung sich selbst erfasst.
    - Ein Versuch unternommen wird, `forwardWheel()` ohne vorübergehende Aktivierung aufzurufen, wenn die Benutzung vom Benutzer nicht genehmigt wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) der Seite durch den {{HTTPHeader("Permissions-Policy/captured-surface-control", "captured-surface-control")}} Header nicht erlaubt, dass die Seite die Captured Surface Control API verwendet.
    - Die Erlaubnis, die Anzeigefläche zu erfassen, vom Benutzer ausdrücklich verweigert wird.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der erfasste Flächentyp ist kein Browser-Tab.

## Beispiele

### Grundlegende Anwendung von `forwardWheel()`

In unserem Live-Demo, erklärt in [Verwendung der Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control), rufen wir eine Funktion namens `startForwarding()` auf, nachdem das Erfassungsversprechen `getDisplayMedia()` erfüllt wurde:

```js
// Create controller and start capture
const controller = new CaptureController();
videoElem.srcObject = await navigator.mediaDevices.getDisplayMedia({
  controller,
});

// ...

startForwarding();
```

Diese Funktion ruft die Methode `forwardWheel()` auf, indem sie ihr einen Verweis auf das `<video>`-Element übergibt, in dem der erfasste Stream angezeigt wird:

```js
async function startForwarding() {
  try {
    await controller.forwardWheel(videoElem);
  } catch (e) {
    console.log(e);
  }
}
```

Dies führt dazu, dass die [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignisse, die auf dem referenzierten Element ausgelöst werden, an die erfasste Anzeigefläche weitergeleitet werden, sodass die erfassende Anwendung diese scrollen kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
- [Verwendung der Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control)
