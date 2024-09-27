---
title: RemotePlayback
slug: Web/API/RemotePlayback
l10n:
  sourceCommit: f6fd1d76db03af97c23b5587fb7eba5762f425df
---

{{APIRef("Remote Playback API")}}

Die **`RemotePlayback`**-Schnittstelle der [Remote Playback API](/de/docs/Web/API/Remote_Playback_API) ermöglicht es der Seite, die Verfügbarkeit von Remote-Wiedergabegeräten zu erkennen, sich mit ihnen zu verbinden und die Wiedergabe auf diesen Geräten zu steuern.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von ihrer übergeordneten Schnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`RemotePlayback.state`](/de/docs/Web/API/RemotePlayback/state) {{ReadOnlyInline}}

  - : Repräsentiert den Status der `RemotePlayback`-Verbindung. Einer von:

    - `"connecting"`
      - : Der Benutzeragent versucht, die Remote-Wiedergabe mit dem ausgewählten Gerät zu initiieren.
    - `"connected"`
      - : Der Übergang von lokaler zu Remote-Wiedergabe hat stattgefunden, alle Befehle werden nun auf dem entfernten Gerät ausgeführt.
    - `"disconnected"`
      - : Die Remote-Wiedergabe wurde nicht initiiert, die Initiierung ist fehlgeschlagen oder wurde gestoppt.

## Instanz-Methoden

_Erbt auch Methoden von ihrer übergeordneten Schnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`RemotePlayback.watchAvailability()`](/de/docs/Web/API/RemotePlayback/watchAvailability)
  - : Überwacht die Liste der verfügbaren Remote-Wiedergabegeräte und gibt ein {{jsxref("Promise")}} zurück, das mit einer `callbackId` eines verfügbaren Remote-Wiedergabegeräts aufgelöst wird.
- [`RemotePlayback.cancelWatchAvailability()`](/de/docs/Web/API/RemotePlayback/cancelWatchAvailability)
  - : Hebt die Anforderung zur Überwachung der Verfügbarkeit von Remote-Wiedergabegeräten auf.
- [`RemotePlayback.prompt()`](/de/docs/Web/API/RemotePlayback/prompt)
  - : Fordert den Benutzer auf, ein Remote-Wiedergabegerät auszuwählen und die Erlaubnis zum Verbinden zu erteilen.

## Ereignisse

_Erbt auch Ereignisse von ihrer übergeordneten Schnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`connecting`](/de/docs/Web/API/RemotePlayback/connecting_event)
  - : Wird ausgelöst, wenn der Benutzeragent die Remote-Wiedergabe initiiert.
- [`connect`](/de/docs/Web/API/RemotePlayback/connect_event)
  - : Wird ausgelöst, wenn der Benutzeragent erfolgreich mit dem entfernten Gerät verbunden ist.
- [`disconnect`](/de/docs/Web/API/RemotePlayback/disconnect_event)
  - : Wird ausgelöst, wenn der Benutzeragent die Verbindung zum entfernten Gerät trennt.

## Beispiele

Das folgende Beispiel demonstriert einen Player mit benutzerdefinierten Steuerungen, die Remote-Wiedergabe unterstützen. Anfangs ist der Button, der zum Auswählen eines Geräts verwendet wird, ausgeblendet:

```html
<video id="videoElement" src="https://example.org/media.ext">
  <button id="deviceBtn" style="display: none;">Pick device</button>
</video>
```

Die Methode [`RemotePlayback.watchAvailability()`](/de/docs/Web/API/RemotePlayback/watchAvailability) wird verwendet, um nach verfügbaren Remote-Wiedergabegeräten zu suchen. Wenn ein Gerät verfügbar ist, wird der Callback verwendet, um den Button anzuzeigen.

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
