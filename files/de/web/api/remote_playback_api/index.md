---
title: Remote Playback API
slug: Web/API/Remote_Playback_API
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

{{DefaultAPISidebar("Remote Playback API")}}

Die **Remote Playback API** erweitert das [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), um die Steuerung von Medien zu ermöglichen, die auf einem entfernten Gerät abgespielt werden.

## Konzepte und Verwendung

Remote-Wiedergabegeräte sind verbundene Geräte wie Fernseher, Projektoren oder Lautsprecher. Die API berücksichtigt kabelgebundene Geräte, die über HDMI oder DVI verbunden sind, sowie drahtlose Geräte, zum Beispiel Chromecast oder AirPlay.

Die API ermöglicht es einer Seite, die ein Medienelement wie eine Video- oder Audiodatei enthält, die Wiedergabe dieses Mediums auf einem verbundenen entfernten Gerät zu starten und zu steuern. Zum Beispiel das Abspielen eines Videos auf einem verbundenen Fernseher.

> [!NOTE]
> Safari für iOS verfügt über einige APIs, die die Fernwiedergabe über AirPlay ermöglichen. Details dazu finden Sie in den [Safari 9.0 Release-Notes](https://developer.apple.com/library/archive/releasenotes/General/WhatsNewInSafari/Articles/Safari_9_0.html#//apple_ref/doc/uid/TP40014305-CH9-SW16).
>
> Die Android-Versionen von Firefox und Chrome enthalten ebenfalls einige Fernwiedergabefunktionen. Diese Geräte zeigen eine Cast-Schaltfläche, wenn ein Cast-Gerät im lokalen Netzwerk verfügbar ist.

## Schnittstellen

- [`RemotePlayback`](/de/docs/Web/API/RemotePlayback)
  - : Ermöglicht der Seite, die Verfügbarkeit von Fernwiedergabegeräten zu erkennen, sich mit diesen zu verbinden und die Wiedergabe auf diesen Geräten zu steuern.

### Erweiterungen für andere Schnittstellen

- [`HTMLMediaElement.disableRemotePlayback`](/de/docs/Web/API/HTMLMediaElement/disableRemotePlayback)
  - : Ein Boolean, der den Fernwiedergabestatus setzt oder zurückgibt und angibt, ob das Medienelement eine Benutzeroberfläche für die Fernwiedergabe haben darf.
- [`HTMLMediaElement.remote`](/de/docs/Web/API/HTMLMediaElement/remote) {{ReadOnlyInline}}
  - : Gibt eine [`RemotePlayback`](/de/docs/Web/API/RemotePlayback) Objektinstanz zurück, die dem Medienelement zugeordnet ist.

## Beispiele

Das folgende Beispiel zeigt einen Player mit benutzerdefinierten Steuerelementen, der die Fernwiedergabe unterstützt. Zu Beginn ist die Schaltfläche zur Auswahl eines Geräts verborgen.

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

Die Methode [`RemotePlayback.watchAvailability()`](/de/docs/Web/API/RemotePlayback/watchAvailability) überwacht die Verfügbarkeit von Fernwiedergabegeräten. Wenn ein Gerät verfügbar ist, verwenden Sie den Callback, um die Schaltfläche anzuzeigen.

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
  deviceBtn.style.display = "inline";
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
