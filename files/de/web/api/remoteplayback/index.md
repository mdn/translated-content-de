---
title: RemotePlayback
slug: Web/API/RemotePlayback
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{APIRef("Remote Playback API")}}

Das **`RemotePlayback`**-Interface der [Remote Playback API](/de/docs/Web/API/Remote_Playback_API) ermöglicht es der Seite, die Verfügbarkeit von Remote-Wiedergabegeräten zu erkennen und dann die Wiedergabe auf diesen Geräten zu verbinden und zu steuern.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`RemotePlayback.state`](/de/docs/Web/API/RemotePlayback/state) {{ReadOnlyInline}}

  - : Repräsentiert den Status der `RemotePlayback`-Verbindung. Einer von:

    - `"connecting"`
      - : Der Benutzeragent versucht, eine Remote-Wiedergabe mit dem ausgewählten Gerät zu initiieren.
    - `"connected"`
      - : Der Übergang von lokaler zu Remote-Wiedergabe hat stattgefunden, alle Befehle erfolgen jetzt auf dem Remote-Gerät.
    - `"disconnected"`
      - : Die Remote-Wiedergabe wurde nicht initiiert, die Initialisierung ist fehlgeschlagen oder sie wurde gestoppt.

## Instanz-Methoden

_Erbt auch Methoden von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`RemotePlayback.watchAvailability()`](/de/docs/Web/API/RemotePlayback/watchAvailability)
  - : Überwacht die Liste der verfügbaren Remote-Wiedergabegeräte und gibt ein {{jsxref("Promise")}} zurück, das mit einer `callbackId` eines verfügbaren Remote-Wiedergabegeräts aufgelöst wird.
- [`RemotePlayback.cancelWatchAvailability()`](/de/docs/Web/API/RemotePlayback/cancelWatchAvailability)
  - : Bricht die Anforderung zur Überwachung der Verfügbarkeit von Remote-Wiedergabegeräten ab.
- [`RemotePlayback.prompt()`](/de/docs/Web/API/RemotePlayback/prompt)
  - : Fordert den Benutzer auf, ein Remote-Wiedergabegerät auszuwählen und die Berechtigung zur Verbindung zu erteilen.

## Ereignisse

_Erbt auch Ereignisse von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`connecting`](/de/docs/Web/API/RemotePlayback/connecting_event)
  - : Wird ausgelöst, wenn der Benutzeragent die Remote-Wiedergabe initiiert.
- [`connect`](/de/docs/Web/API/RemotePlayback/connect_event)
  - : Wird ausgelöst, wenn der Benutzeragent erfolgreich eine Verbindung zum Remote-Gerät herstellt.
- [`disconnect`](/de/docs/Web/API/RemotePlayback/disconnect_event)
  - : Wird ausgelöst, wenn der Benutzeragent die Verbindung zum Remote-Gerät trennt.

## Beispiele

Das folgende Beispiel zeigt einen Player mit benutzerdefinierten Steuerungen, die Remote-Wiedergabe unterstützen. Anfangs ist die Schaltfläche zum Auswählen eines Geräts verborgen:

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

Die Methode [`RemotePlayback.watchAvailability()`](/de/docs/Web/API/RemotePlayback/watchAvailability) wird verwendet, um nach verfügbaren Remote-Wiedergabegeräten zu suchen. Wenn ein Gerät verfügbar ist, zeigt der Callback die Schaltfläche an.

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
