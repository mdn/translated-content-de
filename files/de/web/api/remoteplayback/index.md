---
title: RemotePlayback
slug: Web/API/RemotePlayback
l10n:
  sourceCommit: f6fd1d76db03af97c23b5587fb7eba5762f425df
---

{{APIRef("Remote Playback API")}}

Die **`RemotePlayback`**-Schnittstelle des [Remote Playback API](/de/docs/Web/API/Remote_Playback_API) ermöglicht der Seite, die Verfügbarkeit von Geräten für die Fernwiedergabe zu erkennen, dann eine Verbindung herzustellen und die Wiedergabe auf diesen Geräten zu steuern.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von der übergeordneten Schnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`RemotePlayback.state`](/de/docs/Web/API/RemotePlayback/state) {{ReadOnlyInline}}

  - : Repräsentiert den Zustand der `RemotePlayback`-Verbindung. Einer von:

    - `"connecting"`
      - : Der User-Agent versucht, die Fernwiedergabe mit dem ausgewählten Gerät zu initiieren.
    - `"connected"`
      - : Der Übergang von lokaler zu Fernwiedergabe hat stattgefunden, alle Befehle erfolgen nun auf dem Remote-Gerät.
    - `"disconnected"`
      - : Die Fernwiedergabe wurde nicht initiiert, konnte nicht initiiert werden oder wurde gestoppt.

## Instanz-Methoden

_Erbt auch Methoden von der übergeordneten Schnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`RemotePlayback.watchAvailability()`](/de/docs/Web/API/RemotePlayback/watchAvailability)
  - : Beobachtet die Liste verfügbarer Geräte für die Fernwiedergabe und gibt ein {{jsxref("Promise")}} zurück, das mit einer `callbackId` eines verfügbaren Geräts für die Fernwiedergabe aufgelöst wird.
- [`RemotePlayback.cancelWatchAvailability()`](/de/docs/Web/API/RemotePlayback/cancelWatchAvailability)
  - : Bricht die Anfrage zur Überwachung der Verfügbarkeit von Fernwiedergabegeräten ab.
- [`RemotePlayback.prompt()`](/de/docs/Web/API/RemotePlayback/prompt)
  - : Fordert den Benutzer auf, ein Gerät für die Fernwiedergabe auszuwählen und die Berechtigung zum Verbinden zu erteilen.

## Ereignisse

_Erbt auch Ereignisse von der übergeordneten Schnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`connecting`](/de/docs/Web/API/RemotePlayback/connecting_event)
  - : Wird ausgelöst, wenn der User-Agent die Fernwiedergabe initiiert.
- [`connect`](/de/docs/Web/API/RemotePlayback/connect_event)
  - : Wird ausgelöst, wenn der User-Agent erfolgreich eine Verbindung zum Remote-Gerät herstellt.
- [`disconnect`](/de/docs/Web/API/RemotePlayback/disconnect_event)
  - : Wird ausgelöst, wenn der User-Agent die Verbindung zum Remote-Gerät trennt.

## Beispiele

Das folgende Beispiel demonstriert einen Player mit benutzerdefinierten Steuerungen, die die Fernwiedergabe unterstützen. Anfangs ist die Schaltfläche zum Auswählen eines Geräts verborgen:

```html
<video id="videoElement" src="https://example.org/media.ext">
  <button id="deviceBtn" style="display: none;">Pick device</button>
</video>
```

Die Methode [`RemotePlayback.watchAvailability()`](/de/docs/Web/API/RemotePlayback/watchAvailability) wird verwendet, um verfügbare Geräte für die Fernwiedergabe zu überwachen. Wenn ein Gerät verfügbar ist, verwenden Sie den Callback, um die Schaltfläche anzuzeigen.

```js
const deviceBtn = document.getElementById("deviceBtn");
const videoElem = document.getElementById("videoElement");

function availabilityCallback(available) {
  // Show or hide the device picker button depending on device availability.
  deviceBtn.style.display = available ? "inline" : "none";
}

videoElem.remote.watchAvailability(availabilityCallback).catch(() => {
  /* If the device cannot continuously watch available,
  show the button to allow the user to try to prompt for a connection.*/
  deviceBtn.style.display = "inline";
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
