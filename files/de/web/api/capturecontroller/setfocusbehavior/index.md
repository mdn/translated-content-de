---
title: "CaptureController: setFocusBehavior()-Methode"
short-title: setFocusBehavior()
slug: Web/API/CaptureController/setFocusBehavior
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`setFocusBehavior()`**-Methode der {{domxref("CaptureController")}}-Schnittstelle steuert, ob der erfasste Tab oder das Fenster fokussiert wird, wenn ein zugehöriges {{domxref("MediaDevices.getDisplayMedia()")}} {{jsxref("Promise")}} erfüllt wird, oder ob der Fokus bei dem Tab bleibt, der die erfassende App enthält.

Sie können dieses Verhalten mehrfach vor dem Aufruf von {{domxref("MediaDevices.getDisplayMedia()")}} festlegen oder einmal direkt nachdem das `Promise` aufgelöst wurde. Danach gilt das Fokusverhalten als festgelegt und kann nicht mehr geändert werden.

## Syntax

```js-nolint
setFocusBehavior(focusBehavior)
```

### Parameter

- `focusBehavior`
  - : Ein enumerierter Wert, der beschreibt, ob der Benutzeragent den Fokus auf die erfasste Anzeigeoberfläche übertragen soll oder die erfassende App fokussiert bleiben soll. Mögliche Werte sind `focus-captured-surface` (Fokus übertragen) und `no-focus-change` (Fokus auf der erfassenden App belassen).

### Rückgabewert

Kein (`undefined`).

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn:
    - Der Erfassungsstrom gestoppt wurde.
    - Der Benutzer sich entschieden hat, einen Bildschirm ({{domxref("MediaTrackSettings.displaySurface", "displaySurface")}} Typ `monitor`) statt eines `browser`-Tabs oder `window` zu teilen - Sie können keinen Monitor fokussieren. In diesem Fall wird die Ausnahme nach der Auflösung des {{domxref("MediaDevices.getDisplayMedia()")}} `Promise` ausgelöst.
    - Genügend Zeit nach der Erfüllung des {{domxref("MediaDevices.getDisplayMedia()")}} `Promise` vergangen ist, dass das Fokusverhalten festgelegt wurde.

## Beispiele

```js
// Erstellen Sie eine neue CaptureController-Instanz
const controller = new CaptureController();

// Fordern Sie den Benutzer auf, einen Tab, ein Fenster oder einen Bildschirm zu teilen.
const stream = await navigator.mediaDevices.getDisplayMedia({ controller });

// Abfragen des displaySurface-Wertes des erfassten Videotracks
const [track] = stream.getVideoTracks();
const displaySurface = track.getSettings().displaySurface;

if (displaySurface == "browser") {
  // Den erfassten Tab fokussieren.
  controller.setFocusBehavior("focus-captured-surface");
} else if (displaySurface == "window") {
  // Den Fokus nicht auf das erfasste Fenster setzen.
  // Die fokussierte Seite bleibt erhalten.
  controller.setFocusBehavior("no-focus-change");
}
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- {{domxref("MediaDevices.getDisplayMedia()")}}
- [Besseres Bildschirmteilen mit Conditional Focus](https://developer.chrome.com/docs/web-platform/conditional-focus/)
