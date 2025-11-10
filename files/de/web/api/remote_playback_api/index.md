---
title: Remote Playback API
slug: Web/API/Remote_Playback_API
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{DefaultAPISidebar("Remote Playback API")}}

Die **Remote Playback API** erweitert das [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), um die Steuerung von Medien zu ermöglichen, die auf einem entfernten Gerät abgespielt werden.

## Konzepte und Nutzung

Remote-Playback-Geräte sind verbundene Geräte wie Fernsehgeräte, Projektoren oder Lautsprecher. Die API berücksichtigt kabelgebundene Geräte, die über HDMI oder DVI verbunden sind, sowie kabellose Geräte, wie zum Beispiel Chromecast oder AirPlay.

Die API ermöglicht es einer Seite, die ein Medienelement wie eine Video- oder Audiodatei enthält, die Wiedergabe dieses Mediums auf einem verbundenen, entfernten Gerät zu starten und zu steuern. Zum Beispiel das Abspielen eines Videos auf einem verbundenen Fernseher.

> [!NOTE]
> Safari für iOS verfügt über einige APIs, die die Remote-Wiedergabe auf AirPlay ermöglichen. Einzelheiten hierzu finden Sie in den [Veröffentlichungshinweisen zu Safari 9.0](https://developer.apple.com/library/archive/releasenotes/General/WhatsNewInSafari/Articles/Safari_9_0.html#//apple_ref/doc/uid/TP40014305-CH9-SW16).
>
> Android-Versionen von Firefox und Chrome enthalten auch einige Funktionen zur Remote-Wiedergabe. Diese Geräte zeigen eine Cast-Schaltfläche, wenn ein Cast-Gerät im lokalen Netzwerk verfügbar ist.

## Schnittstellen

- [`RemotePlayback`](/de/docs/Web/API/RemotePlayback)
  - : Ermöglicht es der Seite, die Verfügbarkeit von Remote-Playback-Geräten zu erkennen, sich mit ihnen zu verbinden und die Wiedergabe auf diesen Geräten zu steuern.

### Erweiterungen zu anderen Schnittstellen

- [`HTMLMediaElement.disableRemotePlayback`](/de/docs/Web/API/HTMLMediaElement/disableRemotePlayback)
  - : Ein Boolean, der den Status der Remote-Wiedergabe setzt oder zurückgibt, sodass angezeigt wird, ob das Medienelement eine Benutzeroberfläche für die Remote-Wiedergabe haben darf.
- [`HTMLMediaElement.remote`](/de/docs/Web/API/HTMLMediaElement/remote) {{ReadOnlyInline}}
  - : Gibt eine [`RemotePlayback`](/de/docs/Web/API/RemotePlayback) Objektinstanz zurück, die mit dem Medienelement verknüpft ist.

## Beispiele

Das folgende Beispiel zeigt einen Player mit benutzerdefinierten Steuerelementen, der Remote-Wiedergabe unterstützt. Zunächst ist die Schaltfläche zum Auswählen eines Geräts verborgen.

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

Die Methode [`RemotePlayback.watchAvailability()`](/de/docs/Web/API/RemotePlayback/watchAvailability) überwacht die Verfügbarkeit von Remote-Playback-Geräten. Wenn ein Gerät verfügbar ist, verwenden Sie den Callback, um die Schaltfläche anzuzeigen.

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
