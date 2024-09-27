---
title: Media Session API
slug: Web/API/Media_Session_API
l10n:
  sourceCommit: 033bcb33784ef00e5c95c0333d51c771125f9f94
---

{{DefaultAPISidebar("Media Session API")}}

Die **Media Session API** bietet eine Möglichkeit, Mediebenachrichtigungen anzupassen. Dies erfolgt durch das Bereitstellen von Metadaten, die vom Benutzeragenten für die von Ihrer Webanwendung abgespielten Medien angezeigt werden sollen.

Sie bietet auch Aktionshandler, die der Browser nutzen kann, um auf plattformspezifische Medientasten zuzugreifen, wie Hardware-Tasten auf Tastaturen, Headsets, Fernbedienungen, und Software-Tasten in Benachrichtigungsbereichen und auf dem Sperrbildschirm mobiler Geräte. So können Sie nahtlos über Ihr Gerät Webmedien steuern, auch wenn Sie nicht auf die Webseite schauen.

Das Ziel ist es, den Benutzern zu ermöglichen, zu wissen, was gespielt wird und es zu steuern, ohne die spezifische Seite öffnen zu müssen, die es gestartet hat. Um die Media Session API unterstützen zu können, muss ein Browser zuerst über einen Mechanismus verfügen, um auf die Mediensteuerungen auf Betriebssystemebene zuzugreifen und von diesen gesteuert zu werden (wie Firefox's [MediaControl](https://bugzil.la/1648100)).

## Konzepte und Nutzung der Media Session

Das [`MediaMetadata`](/de/docs/Web/API/MediaMetadata)-Interface erlaubt es einer Webseite, reichhaltige Metadaten an die Plattform-Benutzeroberfläche für abgespielte Medien zu liefern. Diese Metadaten umfassen den Titel, den Namen des Künstlers (Erstellers), das Album (Sammlung), das Artwork und Kapitelinformationen. Die Plattform kann diese Metadaten in Medienzentren, Benachrichtigungen, Gerätesperrbildschirmen usw. anzeigen. Beispielsweise könnten verschiedene Geräte die Mediendaten aus der Media Session API wie folgt präsentieren:

![Mediendaten für den Titel und das Artwork des Sintel-Trailers auf einem Desktop-Browser, einem Mobiltelefon und einer Smartwatch](media-session-ui.jpg)

> [!CALLOUT]
> Ursprüngliche Bildquelle: [Customize media notifications and playback controls with the Media Session API](https://web.dev/articles/media-session) auf web.dev (2024)

Das [`MediaSession`](/de/docs/Web/API/MediaSession)-Interface ermöglicht es Benutzern, die Wiedergabe von Medien über benutzeragentendefinierte Interface-Elemente zu steuern. Die Interaktion mit diesen Elementen löst Aktionshandler auf der Webseite aus, die das Medium abspielt. Da mehrere Seiten diese API gleichzeitig verwenden können, ist der Benutzeragent dafür verantwortlich, die Aktionshandler der richtigen Seite aufzurufen. Wenn kein von der Seite definiertes Verhalten verfügbar ist, stellt der Benutzeragent Standardverhalten bereit.

## Zugriff auf die Media Session API

Das primäre Interface für die Media Session API ist das [`MediaSession`](/de/docs/Web/API/MediaSession)-Interface. Anstatt Ihre eigene `MediaSession`-Instanz zu erstellen, greifen Sie über die [`navigator.mediaSession`](/de/docs/Web/API/Navigator/mediaSession)-Eigenschaft auf die API zu. Zum Beispiel, um den aktuellen Status der Mediensitzung auf `playing` zu setzen:

```js
navigator.mediaSession.playbackState = "playing";
```

## Schnittstellen

- [`ChapterInformation`](/de/docs/Web/API/ChapterInformation)
  - : Repräsentiert die Metadaten für ein einzelnes Kapitel einer Medienressource (z. B. eine Video- oder Audiodatei).
- [`MediaMetadata`](/de/docs/Web/API/MediaMetadata)
  - : Ermöglicht einer Webseite das Anbieten von reichhaltigen Medien-Metadaten zur Anzeige in einer Plattform-Benutzeroberfläche.
- [`MediaSession`](/de/docs/Web/API/MediaSession)
  - : Erlaubt einer Webseite das Bereitstellen benutzerdefinierter Verhaltensweisen für standardmäßige Medienwiedergabeinteraktionen.

## Beispiele

### Einrichten von Aktionshandlern für einen Musikplayer

Das folgende Beispiel zeigt die Erkennung der Media Session API. Es erstellt dann ein Metadatenobjekt für die Sitzung und fügt Aktionshandler für die Benutzersteuerungsaktionen hinzu:

```js
if ("mediaSession" in navigator) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: "Unforgettable",
    artist: "Nat King Cole",
    album: "The Ultimate Collection (Remastered)",
    artwork: [
      {
        src: "https://dummyimage.com/96x96",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/128x128",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/192x192",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/256x256",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/384x384",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/512x512",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  });

  navigator.mediaSession.setActionHandler("play", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("pause", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("stop", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("seekbackward", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("seekforward", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("seekto", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("previoustrack", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("nexttrack", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("skipad", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("togglecamera", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("togglemicrophone", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("hangup", () => {
    /* Code excerpted. */
  });
}
```

Einige Benutzeragenten deaktivieren das automatische Abspielen von Medienelementen auf mobilen Geräten und erfordern eine Benutzerinteraktion, um Medien zu starten. Das folgende Beispiel fügt einem auf der Seite befindlichen Abspielknopf ein `pointerup`-Ereignis hinzu, das dann verwendet wird, um den Mediensitzungscode zu starten:

```js
playButton.addEventListener("pointerup", (event) => {
  const audio = document.querySelector("audio");

  // User interacted with the page. Let's play audio!
  audio
    .play()
    .then(() => {
      /* Set up media session controls, as shown above. */
    })
    .catch((error) => {
      console.error(error);
    });
});
```

### Verwenden von Aktionshandlern zur Steuerung einer Präsentation

Die `"previousslide"`- und `"nextslide"`-Aktionshandler können verwendet werden, um das Vor- und Zurückbewegen durch eine Präsentation zu steuern, beispielsweise wenn der Benutzer seine Präsentation in ein [Picture-in-Picture](/de/docs/Web/API/Picture-in-Picture_API)-Fenster setzt und die vom Browser bereitgestellten Steuerungen zum Navigieren durch die Folien betätigt.

```js
try {
  navigator.mediaSession.setActionHandler("previousslide", () => {
    log('> User clicked "Previous Slide" icon.');
    if (slideNumber > 1) slideNumber--;
    updateSlide();
  });
} catch (error) {
  log('Warning! The "previousslide" media session action is not supported.');
}

try {
  navigator.mediaSession.setActionHandler("nextslide", () => {
    log('> User clicked "Next Slide" icon.');
    slideNumber++;
    updateSlide();
  });
} catch (error) {
  log('Warning! The "nextslide" media session action is not supported.');
}
```

Siehe [Presenting Slides / Media Session Sample](https://googlechrome.github.io/samples/media-session/slides.html) für ein funktionierendes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Customize media notifications and playback controls with the Media Session API](https://web.dev/articles/media-session) auf web.dev (2024)
