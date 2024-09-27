---
title: Remote Playback API
slug: Web/API/Remote_Playback_API
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{DefaultAPISidebar("Remote Playback API")}}

Die **Remote Playback API** erweitert das [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), um die Steuerung von Medien zu ermöglichen, die auf einem entfernten Gerät abgespielt werden.

## Konzepte und Verwendung

Entfernte Wiedergabegeräte sind verbundene Geräte wie Fernseher, Projektoren oder Lautsprecher. Die API berücksichtigt kabelgebundene Geräte, die über HDMI oder DVI verbunden sind, sowie kabellose Geräte wie beispielsweise Chromecast oder AirPlay.

Die API ermöglicht es einer Seite, die ein Medienelement wie eine Video- oder Audiodatei besitzt, die Wiedergabe dieses Mediums auf einem verbundenen entfernten Gerät zu starten und zu steuern. Zum Beispiel das Abspielen eines Videos auf einem verbundenen Fernseher.

> [!NOTE]
> Safari für iOS verfügt über einige APIs, die die Remote-Wiedergabe über AirPlay ermöglichen. Einzelheiten dazu finden Sie in den [Safari 9.0-Versionshinweisen](https://developer.apple.com/library/archive/releasenotes/General/WhatsNewInSafari/Articles/Safari_9_0.html#//apple_ref/doc/uid/TP40014305-CH9-SW16).
>
> Android-Versionen von Firefox und Chrome enthalten ebenfalls einige Funktionen für die Remote-Wiedergabe. Diese Geräte zeigen einen Cast-Button, wenn im lokalen Netzwerk ein Cast-Gerät verfügbar ist.

## Schnittstellen

- [`RemotePlayback`](/de/docs/Web/API/RemotePlayback)
  - : Ermöglicht es der Seite, die Verfügbarkeit von entfernten Wiedergabegeräten zu ermitteln, sich zu verbinden und die Wiedergabe auf diesen Geräten zu steuern.

### Erweiterungen für andere Schnittstellen

- [`HTMLMediaElement.disableRemotePlayback`](/de/docs/Web/API/HTMLMediaElement/disableRemotePlayback)
  - : Ein boolescher Wert, der den Status der Remote-Wiedergabe festlegt oder zurückgibt und anzeigt, ob das Medienelement eine Benutzeroberfläche für die Remote-Wiedergabe haben darf.
- [`HTMLMediaElement.remote`](/de/docs/Web/API/HTMLMediaElement/remote) {{ReadOnlyInline}}
  - : Gibt eine Instanz des [`RemotePlayback`](/de/docs/Web/API/RemotePlayback)-Objekts zurück, das dem Medienelement zugeordnet ist.

## Beispiele

Das folgende Beispiel zeigt einen Player mit benutzerdefinierten Steuerelementen, der die Remote-Wiedergabe unterstützt. Anfangs ist der Button zum Auswählen eines Geräts versteckt.

```html
<video id="videoElement" src="https://example.org/media.ext">
  <button id="deviceBtn" style="display: none;">Pick device</button>
</video>
```

Die Methode [`RemotePlayback.watchAvailability()`](/de/docs/Web/API/RemotePlayback/watchAvailability) überwacht verfügbare entfernte Wiedergabegeräte. Wenn ein Gerät verfügbar ist, verwenden Sie den Callback, um den Button anzuzeigen.

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
