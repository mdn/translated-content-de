---
title: RemotePlayback
slug: Web/API/RemotePlayback
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Remote Playback API")}}

Das **`RemotePlayback`** Interface der [Remote Playback API](/de/docs/Web/API/Remote_Playback_API) ermöglicht es der Seite, die Verfügbarkeit von Fernwiedergabegeräten zu erkennen, sich mit diesen zu verbinden und die Wiedergabe auf diesen Geräten zu steuern.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Eltern-Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`RemotePlayback.state`](/de/docs/Web/API/RemotePlayback/state) {{ReadOnlyInline}}
  - : Representiert den Zustand der `RemotePlayback`-Verbindung. Einer der folgenden Werte:
    - `"connecting"`
      - : Der Benutzeragent versucht, die Fernwiedergabe mit dem ausgewählten Gerät zu initiieren.
    - `"connected"`
      - : Der Übergang von der lokalen zur Fernwiedergabe ist erfolgt, alle Befehle werden nun auf dem Fernwiedergabegerät ausgeführt.
    - `"disconnected"`
      - : Die Fernwiedergabe wurde nicht initiiert, konnte nicht initiiert werden oder wurde gestoppt.

## Instanz-Methoden

_Erbt auch Methoden von seinem Eltern-Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`RemotePlayback.watchAvailability()`](/de/docs/Web/API/RemotePlayback/watchAvailability)
  - : Überwacht die Liste der verfügbaren Fernwiedergabegeräte und gibt ein {{jsxref("Promise")}} zurück, das mit einer `callbackId` eines verfügbaren Fernwiedergabegeräts aufgelöst wird.
- [`RemotePlayback.cancelWatchAvailability()`](/de/docs/Web/API/RemotePlayback/cancelWatchAvailability)
  - : Bricht die Anfrage zum Überwachen der Verfügbarkeit von Fernwiedergabegeräten ab.
- [`RemotePlayback.prompt()`](/de/docs/Web/API/RemotePlayback/prompt)
  - : Fordert den Benutzer auf, ein Fernwiedergabegerät auszuwählen und die Erlaubnis zur Verbindung zu erteilen.

## Ereignisse

_Erbt auch Ereignisse von seinem Eltern-Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`connecting`](/de/docs/Web/API/RemotePlayback/connecting_event)
  - : Wird ausgelöst, wenn der Benutzeragent die Fernwiedergabe initiiert.
- [`connect`](/de/docs/Web/API/RemotePlayback/connect_event)
  - : Wird ausgelöst, wenn der Benutzeragent erfolgreich mit dem Fernwiedergabegerät verbunden ist.
- [`disconnect`](/de/docs/Web/API/RemotePlayback/disconnect_event)
  - : Wird ausgelöst, wenn der Benutzeragent die Verbindung zum Fernwiedergabegerät trennt.

## Beispiele

Das folgende Beispiel zeigt einen Player mit benutzerdefinierten Steuerungen, die Fernwiedergabe unterstützen. Der anfangs verwendete Knopf zur Auswahl eines Geräts ist verborgen:

```html
<video id="videoElement" src="https://example.org/media.ext">
  <button id="deviceBtn" class="hidden">Pick device</button>
</video>
```

```css
.hidden {
  display: none;
}
```

Die Methode [`RemotePlayback.watchAvailability()`](/de/docs/Web/API/RemotePlayback/watchAvailability) wird verwendet, um nach verfügbaren Fernwiedergabegeräten zu suchen. Wenn ein Gerät verfügbar ist, verwenden Sie den Callback, um den Knopf anzuzeigen.

```js
const deviceBtn = document.getElementById("deviceBtn");
const videoElem = document.getElementById("videoElement");

function availabilityCallback(available) {
  // Show or hide the device picker button depending on device availability.
  if (available) {
    deviceBtn.classList.remove("hidden");
  } else {
    deviceBtn.classList.add("hidden");
  }
}

videoElem.remote.watchAvailability(availabilityCallback).catch(() => {
  // If the device cannot continuously watch available,
  // show the button to allow the user to try to prompt for a connection.
  deviceBtn.classList.remove("hidden");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
