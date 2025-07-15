---
title: "CaptureController: increaseZoomLevel() Methode"
short-title: increaseZoomLevel()
slug: Web/API/CaptureController/increaseZoomLevel
l10n:
  sourceCommit: 83a92f1eaf27dabf71beec6c548afb03171aa194
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`increaseZoomLevel()`**-Methode der [`CaptureController`](/de/docs/Web/API/CaptureController)-Schnittstelle erhöht den Zoomfaktor der erfassten Anzeigefläche um einen Schritt.

Die `increaseZoomLevel()`-Methode muss über eine {{Glossary("Transient_activation", "transiente Aktivierung")}} aufgerufen werden. Außerdem wird der Benutzer um Erlaubnis gebeten, Tabs zu teilen, wenn die Bildschirmaufnahme zum ersten Mal versucht wird; verweigert der Benutzer die Erlaubnis, kann der Zoomfaktor auch mit transiente Aktivierung nicht geändert werden.

## Syntax

```js-nolint
increaseZoomLevel()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit {{jsxref("undefined")}} erfüllt wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die erfasste Anzeigefläche bereits den maximal unterstützten Zoomfaktor erreicht hat.
    - Ein Versuch unternommen wird, `increaseZoomLevel()` ohne transiente Aktivierung aufzurufen.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die {{HTTPHeader("Permissions-Policy/captured-surface-control", "captured-surface-control")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) der Seite der Seite nicht erlaubt, die Captured Surface Control API zu nutzen.
    - Die Erlaubnis zur Erfassung der Anzeigefläche vom Benutzer ausdrücklich verweigert wird.

## Beispiele

### Grundlegende Verwendung von `increaseZoomLevel()`

Der folgende Code-Ausschnitt fügt einem Button einen Event-Listener hinzu, sodass beim Klicken die `increaseZoom()`-Funktion aufgerufen wird. Diese wiederum ruft die `increaseZoomLevel()`-Methode auf und zoomt dadurch die erfasste Oberfläche ein.

```js
// Create controller and start capture
const controller = new CaptureController();
videoElem.srcObject = await navigator.mediaDevices.getDisplayMedia({
  controller,
});

// ...

incBtn.addEventListener("click", increaseZoom);

async function increaseZoom() {
  try {
    await controller.increaseZoomLevel();
  } catch (e) {
    console.log(e);
  }
}
```

Es ist allgemein eine bewährte Praxis, `increaseZoomLevel()` innerhalb eines [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Blocks aufzurufen, da der Zoomfaktor asynchron von einer anderen Entität als der Anwendung geändert werden könnte, was zu einem Fehler führen kann. Beispielsweise könnte der Benutzer direkt mit der erfassten Oberfläche interagieren, um ein- oder auszuzoomen.

Siehe [Verwendung der Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control) für ein vollständiges Arbeitsbeispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
- [Verwendung der Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control)
