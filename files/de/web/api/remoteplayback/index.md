---
title: RemotePlayback
slug: Web/API/RemotePlayback
l10n:
  sourceCommit: f6fd1d76db03af97c23b5587fb7eba5762f425df
---

{{APIRef("Remote Playback API")}}

Die **`RemotePlayback`**-Schnittstelle der {{domxref('Remote Playback API','','',' ')}} ermöglicht es der Seite, die Verfügbarkeit von Fernwiedergabegeräten zu erkennen, dann eine Verbindung herzustellen und die Wiedergabe auf diesen Geräten zu steuern.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seiner übergeordneten Schnittstelle, {{DOMxRef("EventTarget")}}._

- {{domxref("RemotePlayback.state")}} {{ReadOnlyInline}}

  - : Repräsentiert den Verbindungszustand von `RemotePlayback`. Einer von:

    - `"connecting"`
      - : Der User-Agent versucht, die Fernwiedergabe mit dem ausgewählten Gerät zu initiieren.
    - `"connected"`
      - : Der Wechsel von lokaler zu Fernwiedergabe hat stattgefunden, alle Befehle werden nun auf das Ferngerät übertragen.
    - `"disconnected"`
      - : Die Fernwiedergabe wurde nicht initiiert, konnte nicht initiiert werden oder wurde gestoppt.

## Instanz-Methoden

_Erbt auch Methoden von seiner übergeordneten Schnittstelle, {{DOMxRef("EventTarget")}}._

- {{domxref("RemotePlayback.watchAvailability()")}}
  - : Überwacht die Liste der verfügbaren Fernwiedergabegeräte und gibt ein {{jsxref("Promise")}} zurück, das mit einer `callbackId` eines verfügbaren Fernwiedergabegeräts aufgelöst wird.
- {{domxref("RemotePlayback.cancelWatchAvailability()")}}
  - : Bricht die Anforderung zur Überwachung der Verfügbarkeit von Fernwiedergabegeräten ab.
- {{domxref("RemotePlayback.prompt()")}}
  - : Fordert den Benutzer auf, ein Fernwiedergabegerät auszuwählen und die Berechtigung zur Verbindung zu erteilen.

## Ereignisse

_Erbt auch Ereignisse von seiner übergeordneten Schnittstelle, {{DOMxRef("EventTarget")}}._

- {{domxref("RemotePlayback.connecting_event", "connecting")}}
  - : Wird ausgelöst, wenn der User-Agent die Fernwiedergabe initiiert.
- {{domxref("RemotePlayback.connect_event", "connect")}}
  - : Wird ausgelöst, wenn der User-Agent erfolgreich eine Verbindung zum Ferngerät herstellt.
- {{domxref("RemotePlayback.disconnect_event", "disconnect")}}
  - : Wird ausgelöst, wenn der User-Agent die Verbindung zum Ferngerät trennt.

## Beispiele

Das folgende Beispiel zeigt einen Player mit benutzerdefinierten Steuerelementen, die die Fernwiedergabe unterstützen. Zunächst ist die Taste zur Auswahl eines Geräts versteckt:

```html
<video id="videoElement" src="https://example.org/media.ext">
  <button id="deviceBtn" style="display: none;">Pick device</button>
</video>
```

Die Methode {{domxref("RemotePlayback.watchAvailability()")}} wird verwendet, um nach verfügbaren Fernwiedergabegeräten zu suchen. Wenn ein Gerät verfügbar ist, wird die Schaltfläche über den Callback angezeigt.

```js
const deviceBtn = document.getElementById("deviceBtn");
const videoElem = document.getElementById("videoElement");

function availabilityCallback(available) {
  // Zeigen oder verbergen Sie die Gerät-Auswahlschaltfläche je nach Geräteverfügbarkeit.
  deviceBtn.style.display = available ? "inline" : "none";
}

videoElem.remote.watchAvailability(availabilityCallback).catch(() => {
  /* Wenn das Gerät nicht kontinuierlich überwacht werden kann,
  zeigen Sie die Taste an, damit der Benutzer versuchen kann, eine Verbindung herzustellen.*/
  deviceBtn.style.display = "inline";
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
