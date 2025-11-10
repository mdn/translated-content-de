---
title: "CaptureController: decreaseZoomLevel()-Methode"
short-title: decreaseZoomLevel()
slug: Web/API/CaptureController/decreaseZoomLevel
l10n:
  sourceCommit: 83a92f1eaf27dabf71beec6c548afb03171aa194
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`decreaseZoomLevel()`**-Methode der [`CaptureController`](/de/docs/Web/API/CaptureController)-Schnittstelle verringert die Zoomstufe der erfassten Bildschirmoberfläche um eine Stufe.

Die `decreaseZoomLevel()`-Methode muss über {{Glossary("Transient_activation", "transiente Aktivierung")}} aufgerufen werden. Darüber hinaus wird der Benutzer um Erlaubnis gebeten, Tabs zu teilen, wenn der Bildschirm erstmals erfasst wird. Wenn der Benutzer die Erlaubnis verweigert, kann die Zoomstufe auch mit transienten Aktivierung nicht geändert werden.

## Syntax

```js-nolint
decreaseZoomLevel()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} erfüllt wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die erfasste Bildschirmoberfläche bereits auf der minimal unterstützten Zoomstufe ist.
    - Ein Versuch unternommen wird, `decreaseZoomLevel()` ohne transiente Aktivierung aufzurufen.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die {{HTTPHeader("Permissions-Policy/captured-surface-control", "captured-surface-control")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) der Seite nicht zulässt, dass die Seite die Captured Surface Control API verwendet.
    - Die Erlaubnis zur Erfassung der Bildschirmoberfläche ausdrücklich vom Benutzer verweigert wird.

## Beispiele

### Grundlegende `decreaseZoomLevel()`-Verwendung

Der folgende Codeausschnitt fügt einem Button einen Event-Listener hinzu, sodass beim Klicken die Funktion `decreaseZoom()` aufgerufen wird. Diese ruft wiederum die `decreaseZoomLevel()`-Methode auf, wodurch die erfasste Oberfläche herausgezoomt wird.

```js
// Create controller and start capture
const controller = new CaptureController();
videoElem.srcObject = await navigator.mediaDevices.getDisplayMedia({
  controller,
});

// ...

decBtn.addEventListener("click", decreaseZoom);

async function decreaseZoom() {
  try {
    await controller.decreaseZoomLevel();
  } catch (e) {
    console.log(e);
  }
}
```

Es ist generell eine bewährte Praxis, `decreaseZoomLevel()` innerhalb eines [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Blocks aufzurufen, da die Zoomstufe asynchron von einer anderen als der Anwendung geändert werden könnte, was zu einem Fehler führen könnte. Beispielsweise könnte der Benutzer direkt mit der erfassten Oberfläche interagieren, um herein- oder herauszuzoomen.

Sehen Sie sich [Using the Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control) für ein vollständiges funktionierendes Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
- [Using the Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control)
