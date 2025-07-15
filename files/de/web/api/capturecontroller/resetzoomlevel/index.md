---
title: "CaptureController: resetZoomLevel() Methode"
short-title: resetZoomLevel()
slug: Web/API/CaptureController/resetZoomLevel
l10n:
  sourceCommit: 83a92f1eaf27dabf71beec6c548afb03171aa194
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`resetZoomLevel()`** Methode der [`CaptureController`](/de/docs/Web/API/CaptureController) Schnittstelle setzt den Zoom der aufgenommenen Anzeigefläche auf das ursprüngliche Niveau zurück, was `100` ist.

Die `resetZoomLevel()` Methode muss über eine {{Glossary("Transient_activation", "transiente Aktivierung")}} aufgerufen werden. Zusätzlich wird der Benutzer beim ersten Versuch, den Bildschirm zu erfassen, um Erlaubnis gebeten, Tabs zu teilen; wenn der Benutzer die Erlaubnis verweigert, kann das Zoomniveau nicht einmal mit transiente Aktivierung geändert werden.

## Syntax

```js-nolint
resetZoomLevel()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} erfüllt wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ein Versuch, `resetZoomLevel()` ohne transiente Aktivierung aufzurufen.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die {{HTTPHeader("Permissions-Policy/captured-surface-control", "captured-surface-control")}} [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) der Seite es der Seite nicht erlaubt, die Captured Surface Control API zu verwenden.
    - Die Erlaubnis, die Anzeigefläche zu erfassen, explizit vom Benutzer verweigert wird.

## Beispiele

### Grundlegende Verwendung von `resetZoomLevel()`

Das folgende Snippet fügt einem Button einen Event Listener hinzu, sodass beim Klicken darauf die Funktion `resetZoom()` aufgerufen wird. Diese ruft wiederum die Methode `resetZoomLevel()` auf und setzt das Zoomniveau der erfassten Oberfläche auf `100` zurück.

```js
// Create controller and start capture
const controller = new CaptureController();
videoElem.srcObject = await navigator.mediaDevices.getDisplayMedia({
  controller,
});

// ...

resetBtn.addEventListener("click", resetZoom);

async function resetZoom() {
  await controller.resetZoomLevel();
}
```

Siehe [Verwendung der Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control) für ein vollständiges, funktionierendes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
- [Verwendung der Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control)
