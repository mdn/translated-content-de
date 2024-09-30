---
title: Media Session API
slug: Web/API/Media_Session_API
l10n:
  sourceCommit: 033bcb33784ef00e5c95c0333d51c771125f9f94
---

{{DefaultAPISidebar("Media Session API")}}

Die **Media Session API** bietet eine Möglichkeit, Medienbenachrichtigungen anzupassen. Sie tut dies, indem sie Metadaten bereitstellt, die vom Benutzeragenten für die Medien angezeigt werden, die Ihre Web-App abspielt.

Sie bietet auch Aktions-Handler, die der Browser verwenden kann, um auf Plattform-Medientasten zuzugreifen, wie Hardwaretasten auf Tastaturen, Headsets, Fernbedienungen und Softwaretasten in Benachrichtigungsbereichen und auf Sperrbildschirmen von mobilen Geräten. So können Sie nahtlos durch Ihr Gerät bereitgestellte Medien steuern, selbst wenn Sie die Webseite nicht ansehen.

Das Ziel ist es, Benutzern zu ermöglichen, zu wissen, was abgespielt wird und es zu steuern, ohne dass sie die spezielle Seite öffnen müssen, die es gestartet hat. Um die Media Session API zu unterstützen, benötigt ein Browser zunächst einen Mechanismus, um auf die Medienkontrollen auf Betriebssystemebene zuzugreifen und von diesen gesteuert zu werden (wie beispielsweise Firefox' [MediaControl](https://bugzil.la/1648100)).

## Medien-Sitzungskonzepte und Verwendung

Das [`MediaMetadata`](/de/docs/Web/API/MediaMetadata)-Interface erlaubt es einer Website, umfassende Metadaten an die Plattform-UI für Medien, die abgespielt werden, bereitzustellen. Diese Metadaten umfassen den Titel, den Namen des Künstlers (Erstellers), das Album (Sammlung), sowie Bilder und Kapitelinformationen. Die Plattform kann diese Metadaten in Medienzentren, Benachrichtigungen, Gerätesperrbildschirmen und so weiter anzeigen. Zum Beispiel können verschiedene Geräte die Media Session API-Daten wie folgt präsentieren:

![Medien-Sitzungsdaten für den Titel und das Artwork des Sintel-Trailers, präsentiert auf einem Desktop-Browser, einem Mobiltelefon und einer Smartwatch](media-session-ui.jpg)

> [!CALLOUT]
> Originalbildquelle: [Customize media notifications and playback controls with the Media Session API](https://web.dev/articles/media-session) auf web.dev (2024)

Das [`MediaSession`](/de/docs/Web/API/MediaSession)-Interface ermöglicht es Benutzern, die Wiedergabe von Medien über benutzeragentendefinierte Interface-Elemente zu steuern. Die Interaktion mit diesen Elementen löst Aktions-Handler auf der Webseite aus, die die Medien abspielt. Da mehrere Seiten gleichzeitig diese API verwenden können, ist der Benutzeragent verantwortlich für das Aufrufen der Aktions-Handler der korrekten Seite. Der Benutzeragent bietet Standardverhalten, wenn kein seitendefiniertes Verhalten verfügbar ist.

## Zugriff auf die Media Session API

Das primäre Interface für die Media Session API ist das [`MediaSession`](/de/docs/Web/API/MediaSession)-Interface. Anstatt Ihre eigene `MediaSession`-Instanz zu erstellen, greifen Sie mit der [`navigator.mediaSession`](/de/docs/Web/API/Navigator/mediaSession)-Eigenschaft auf die API zu. Zum Beispiel, um den aktuellen Status der Medien-Sitzung auf `playing` zu setzen:

```js
navigator.mediaSession.playbackState = "playing";
```

## Schnittstellen

- [`ChapterInformation`](/de/docs/Web/API/ChapterInformation)
  - : Repräsentiert die Metadaten für ein individuelles Kapitel einer Medienressource (z.B. eine Video- oder Audiodatei).
- [`MediaMetadata`](/de/docs/Web/API/MediaMetadata)
  - : Ermöglicht es einer Webseite, umfassende Medienmetadaten zur Anzeige in einer Plattform-UI bereitzustellen.
- [`MediaSession`](/de/docs/Web/API/MediaSession)
  - : Ermöglicht es einer Webseite, benutzerdefinierte Verhaltensweisen für Standard-Medienwiedergabe-Interaktionen bereitzustellen.

## Beispiele

### Einrichten von Aktions-Handlern für einen Musik-Player

Das folgende Beispiel zeigt die Funktionserkennung für die Media Session API. Anschließend wird ein Metadatenobjekt für die Sitzung instanziiert und Aktions-Handler für die Benutzersteuerungsaktionen hinzugefügt:

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

Einige Benutzeragenten deaktivieren die automatische Wiedergabe für Medienelemente auf mobilen Geräten und erfordern eine Benutzeraktion, um Medien zu starten. Das folgende Beispiel fügt ein `pointerup`-Ereignis zu einem Play-Button auf der Seite hinzu, das dann verwendet wird, um den Medien-Sitzungscode zu starten:

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

### Verwenden von Aktions-Handlern zur Steuerung einer Präsentation

Die `"previousslide"`- und `"nextslide"`-Aktions-Handler können verwendet werden, um zum Beispiel das Vorwärts- und Rückwärtsbewegen durch eine Präsentation zu steuern, wenn der Benutzer seine Präsentation in ein [Picture-in-Picture](/de/docs/Web/API/Picture-in-Picture_API)-Fenster setzt und die vom Browser bereitgestellten Steuerungen für die Navigation durch Folien drückt.

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
