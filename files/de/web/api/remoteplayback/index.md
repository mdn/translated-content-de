---
title: RemotePlayback
slug: Web/API/RemotePlayback
l10n:
  sourceCommit: e6d43da6c6d28a6ac92cdd47882809ffbdf987ce
---

{{APIRef("Remote Playback API")}}

Das **`RemotePlayback`**-Interface der [Remote Playback API](/de/docs/Web/API/Remote_Playback_API) ermöglicht es der Seite, die Verfügbarkeit von Geräten für die Remote-Wiedergabe zu erkennen und dann die Wiedergabe auf diesen Geräten zu steuern.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von seinem Elterninterface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`RemotePlayback.state`](/de/docs/Web/API/RemotePlayback/state) {{ReadOnlyInline}}

  - : Repräsentiert den Status der `RemotePlayback`-Verbindung. Einer von:

    - `"connecting"`
      - : Der User-Agent versucht, die Remote-Wiedergabe mit dem ausgewählten Gerät zu initiieren.
    - `"connected"`
      - : Der Wechsel von lokaler zu Remote-Wiedergabe hat stattgefunden, alle Befehle werden nun auf dem Remote-Gerät ausgeführt.
    - `"disconnected"`
      - : Die Remote-Wiedergabe wurde nicht initiiert, konnte nicht initiiert werden oder wurde gestoppt.

## Instanzmethoden

_Erbt auch Methoden von seinem Elterninterface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`RemotePlayback.watchAvailability()`](/de/docs/Web/API/RemotePlayback/watchAvailability)
  - : Überwacht die Liste der verfügbaren Remote-Wiedergabegeräte und gibt ein {{jsxref("Promise")}} zurück, das mit einem `callbackId` eines verfügbaren Remote-Wiedergabegeräts aufgelöst wird.
- [`RemotePlayback.cancelWatchAvailability()`](/de/docs/Web/API/RemotePlayback/cancelWatchAvailability)
  - : Hebt die Anfrage zur Überwachung der Verfügbarkeit von Remote-Wiedergabegeräten auf.
- [`RemotePlayback.prompt()`](/de/docs/Web/API/RemotePlayback/prompt)
  - : Fordert den Benutzer auf, ein Remote-Wiedergabegerät auszuwählen und die Berechtigung zur Verbindung zu erteilen.

## Ereignisse

_Erbt auch Ereignisse von seinem Elterninterface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`connecting`](/de/docs/Web/API/RemotePlayback/connecting_event)
  - : Wird ausgelöst, wenn der User-Agent die Remote-Wiedergabe initiiert.
- [`connect`](/de/docs/Web/API/RemotePlayback/connect_event)
  - : Wird ausgelöst, wenn der User-Agent erfolgreich eine Verbindung zum Remote-Gerät herstellt.
- [`disconnect`](/de/docs/Web/API/RemotePlayback/disconnect_event)
  - : Wird ausgelöst, wenn der User-Agent die Verbindung zum Remote-Gerät trennt.

## Beispiele

Das folgende Beispiel zeigt einen Player mit benutzerdefinierten Steuerelementen, die die Remote-Wiedergabe unterstützen. Zu Beginn ist die Schaltfläche, die zur Auswahl eines Geräts verwendet wird, ausgeblendet:

```html
<video id="videoElement" src="https://example.org/media.ext">
  <button id="deviceBtn" style="display: none;">Pick device</button>
</video>
```

Die Methode [`RemotePlayback.watchAvailability()`](/de/docs/Web/API/RemotePlayback/watchAvailability) wird verwendet, um nach verfügbaren Remote-Wiedergabegeräten zu suchen. Wenn ein Gerät verfügbar ist, verwenden Sie den Callback, um die Schaltfläche anzuzeigen.

```js
const deviceBtn = document.getElementById("deviceBtn");
const videoElem = document.getElementById("videoElement");

function availabilityCallback(available) {
  // Show or hide the device picker button depending on device availability.
  deviceBtn.style.display = available ? "inline" : "none";
}

videoElem.remote.watchAvailability(availabilityCallback).catch(() => {
  // If the device cannot continuously watch available,
  // show the button to allow the user to try to prompt for a connection.
  deviceBtn.style.display = "inline";
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
