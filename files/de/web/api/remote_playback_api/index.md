---
title: Remote Playback API
slug: Web/API/Remote_Playback_API
l10n:
  sourceCommit: e6d43da6c6d28a6ac92cdd47882809ffbdf987ce
---

{{DefaultAPISidebar("Remote Playback API")}}

Die **Remote Playback API** erweitert das [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), um die Steuerung von Medien zu ermöglichen, die auf einem entfernten Gerät abgespielt werden.

## Konzepte und Nutzung

Remote-Playback-Geräte sind angeschlossene Geräte wie Fernseher, Projektoren oder Lautsprecher. Die API berücksichtigt kabelgebundene Geräte, die über HDMI oder DVI verbunden sind, sowie drahtlose Geräte wie z.B. Chromecast oder AirPlay.

Die API ermöglicht es einer Seite, die ein Medienelement wie eine Video- oder Audiodatei enthält, die Wiedergabe dieses Mediums auf einem verbundenen Remote-Gerät zu starten und zu steuern. Zum Beispiel die Wiedergabe eines Videos auf einem verbundenen Fernseher.

> [!NOTE]
> Safari für iOS verfügt über einige APIs, die die Remote-Wiedergabe über AirPlay ermöglichen. Details dazu finden Sie in [den Safari 9.0-Versionshinweisen](https://developer.apple.com/library/archive/releasenotes/General/WhatsNewInSafari/Articles/Safari_9_0.html#//apple_ref/doc/uid/TP40014305-CH9-SW16).
>
> Android-Versionen von Firefox und Chrome enthalten ebenfalls einige Remote-Playback-Funktionen. Diese Geräte zeigen eine Cast-Schaltfläche an, wenn ein Cast-Gerät im lokalen Netzwerk verfügbar ist.

## Schnittstellen

- [`RemotePlayback`](/de/docs/Web/API/RemotePlayback)
  - : Ermöglicht es der Seite, die Verfügbarkeit von Remote-Playback-Geräten zu erkennen, dann eine Verbindung herzustellen und die Wiedergabe auf diesen Geräten zu steuern.

### Erweiterungen zu anderen Schnittstellen

- [`HTMLMediaElement.disableRemotePlayback`](/de/docs/Web/API/HTMLMediaElement/disableRemotePlayback)
  - : Ein boolescher Wert, der den Remote-Playback-Status setzt oder zurückgibt, was anzeigt, ob das Medienelement eine Remote-Playback-Benutzeroberfläche haben darf.
- [`HTMLMediaElement.remote`](/de/docs/Web/API/HTMLMediaElement/remote) {{ReadOnlyInline}}
  - : Gibt eine [`RemotePlayback`](/de/docs/Web/API/RemotePlayback)-Objektinstanz zurück, die dem Medienelement zugeordnet ist.

## Beispiele

Das folgende Beispiel demonstriert einen Player mit benutzerdefinierten Steuerelementen, der Remote-Playback unterstützt. Zunächst wird die Schaltfläche zur Auswahl eines Geräts verborgen.

```html
<video id="videoElement" src="https://example.org/media.ext">
  <button id="deviceBtn" style="display: none;">Pick device</button>
</video>
```

Die Methode [`RemotePlayback.watchAvailability()`](/de/docs/Web/API/RemotePlayback/watchAvailability) überwacht verfügbare Remote-Playback-Geräte. Wenn ein Gerät verfügbar ist, nutzen Sie den Callback, um die Schaltfläche anzuzeigen.

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
