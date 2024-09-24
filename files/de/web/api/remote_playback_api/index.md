---
title: Remote Playback API
slug: Web/API/Remote_Playback_API
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{DefaultAPISidebar("Remote Playback API")}}

Die **Remote Playback API** erweitert das {{domxref("HTMLMediaElement")}}, um die Steuerung von Medien zu ermöglichen, die auf einem entfernten Gerät abgespielt werden.

## Konzepte und Verwendung

Entfernte Wiedergabegeräte sind angeschlossene Geräte wie Fernseher, Projektoren oder Lautsprecher. Die API berücksichtigt kabelgebundene Geräte, die über HDMI oder DVI verbunden sind, sowie drahtlose Geräte wie z.B. Chromecast oder AirPlay.

Die API ermöglicht es einer Seite, die ein Medienelement wie eine Video- oder Audiodatei enthält, die Wiedergabe dieses Mediums auf einem verbundenen entfernten Gerät zu starten und zu steuern. Zum Beispiel das Abspielen eines Videos auf einem verbundenen Fernseher.

> [!NOTE]
> Safari für iOS hat einige APIs, die die Fernwiedergabe auf AirPlay ermöglichen. Details dazu finden Sie in [den Safari 9.0 Release Notes](https://developer.apple.com/library/archive/releasenotes/General/WhatsNewInSafari/Articles/Safari_9_0.html#//apple_ref/doc/uid/TP40014305-CH9-SW16).
>
> Android-Versionen von Firefox und Chrome enthalten ebenfalls einige Funktionen für die Fernwiedergabe. Diese Geräte zeigen eine Cast-Schaltfläche an, wenn ein Cast-Gerät im lokalen Netzwerk verfügbar ist.

## Schnittstellen

- {{domxref("RemotePlayback")}}
  - : Ermöglicht es der Seite, die Verfügbarkeit von Fernwiedergabegeräten zu erkennen, eine Verbindung zu ihnen herzustellen und die Wiedergabe auf diesen Geräten zu steuern.

### Erweiterungen für andere Schnittstellen

- {{domxref("HTMLMediaElement.disableRemotePlayback")}}
  - : Ein Boolean, der den Fernwiedergabestatus setzt oder zurückgibt, der angibt, ob dem Medienelement eine Fernwiedergabe-Benutzeroberfläche erlaubt ist.
- {{domxref("HTMLMediaElement.remote")}} {{ReadOnlyInline}}
  - : Gibt eine {{domxref("RemotePlayback")}}-Objektinstanz zurück, die dem Medienelement zugeordnet ist.

## Beispiele

Das folgende Beispiel zeigt einen Player mit benutzerdefinierten Steuerelementen, der Fernwiedergabe unterstützt. Anfänglich ist die Schaltfläche zur Auswahl eines Geräts ausgeblendet.

```html
<video id="videoElement" src="https://example.org/media.ext">
  <button id="deviceBtn" style="display: none;">Gerät auswählen</button>
</video>
```

Die Methode {{domxref("RemotePlayback.watchAvailability()")}} überwacht auf verfügbare Fernwiedergabegeräte. Wenn ein Gerät verfügbar ist, verwenden Sie den Callback, um die Schaltfläche anzuzeigen.

```js
const deviceBtn = document.getElementById("deviceBtn");
const videoElem = document.getElementById("videoElement");

function availabilityCallback(available) {
  // Zeigen oder verbergen Sie die Schaltfläche zur Geräteauswahl abhängig von der Geräteverfügbarkeit.
  deviceBtn.style.display = available ? "inline" : "none";
}

videoElem.remote.watchAvailability(availabilityCallback).catch(() => {
  /* Wenn das Gerät nicht kontinuierlich auf Verfügbarkeit überwachen kann,
  zeigen Sie die Schaltfläche an, um dem Benutzer zu ermöglichen, eine Verbindung anzustoßen.*/
  deviceBtn.style.display = "inline";
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
