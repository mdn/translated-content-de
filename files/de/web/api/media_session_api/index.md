---
title: Media Session API
slug: Web/API/Media_Session_API
l10n:
  sourceCommit: 033bcb33784ef00e5c95c0333d51c771125f9f94
---

{{DefaultAPISidebar("Media Session API")}}

Die **Media Session API** bietet eine Möglichkeit, Medienbenachrichtigungen anzupassen. Dies geschieht, indem Metadaten bereitgestellt werden, die vom Benutzeragenten für die von Ihrer Webanwendung abgespielten Medien angezeigt werden können.

Außerdem bietet sie Aktionshandler, die der Browser verwenden kann, um auf Plattform-Medientasten zuzugreifen, wie z.B. Hardwaretasten auf Tastaturen, Headsets, Fernbedienungen und Softwaretasten in Benachrichtigungsbereichen und auf Sperrbildschirmen mobiler Geräte. So können Sie nahtlos auf webbasierte Medien über Ihr Gerät zugreifen und diese steuern, selbst wenn Sie die Webseite nicht betrachten.

Das Ziel ist es, Benutzern zu ermöglichen, zu wissen, was abgespielt wird, und es zu steuern, ohne die spezifische Seite öffnen zu müssen, die es gestartet hat. Damit ein Browser die Media Session API unterstützen kann, benötigt er zunächst einen Mechanismus, um auf die mediensteuernden Funktionen des Betriebssystems zugreifen zu können (wie zum Beispiel Firefox' [MediaControl](https://bugzil.la/1648100)).

## Konzepte und Nutzung der Media Session

Das {{domxref("MediaMetadata")}}-Interface ermöglicht es einer Website, reichhaltige Metadaten für die Benutzeroberfläche der Plattform für abgespielte Medien bereitzustellen. Diese Metadaten umfassen den Titel, den Namen des Künstlers (Erstellers), das Album (Sammlung), die Grafik und die Kapitelinformationen. Die Plattform kann diese Metadaten in Medienzentren, Benachrichtigungen, Gerätesperrbildschirmen usw. anzeigen. Verschiedene Geräte können beispielsweise die Media Session API-Daten folgendermaßen präsentieren:

![Media Session Daten für den Sintel-Trailer-Titel und die Grafiken auf einem Desktop-Browser, Smartphone und einer Smartwatch dargestellt](media-session-ui.jpg)

> [!CALLOUT]
> Originalbildquelle: [Anpassen von Medienbenachrichtigungen und Wiedergabesteuerungen mit der Media Session API](https://web.dev/articles/media-session) auf web.dev (2024)

Das {{domxref("MediaSession")}}-Interface ermöglicht es Benutzern, die Wiedergabe von Medien über benutzerdefinierte Interface-Elemente des Benutzeragenten zu steuern. Die Interaktion mit diesen Elementen löst Aktionshandler auf der Webseite aus, die die Medien abspielt. Da mehrere Seiten gleichzeitig diese API nutzen können, ist der Benutzeragent verantwortlich für das Aufrufen der korrekten Seitentaktionshandler. Der Benutzeragent bietet Standardverhalten, wenn kein seitendefiniertes Verhalten verfügbar ist.

## Zugriff auf die Media Session API

Das primäre Interface für die Media Session API ist das {{domxref("MediaSession")}}-Interface. Anstatt Ihre eigene `MediaSession`-Instanz zu erstellen, greifen Sie über die {{domxref("navigator.mediaSession")}}-Eigenschaft auf die API zu. Zum Beispiel, um den aktuellen Zustand der Media Session auf `playing` zu setzen:

```js
navigator.mediaSession.playbackState = "playing";
```

## Schnittstellen

- {{domxref("ChapterInformation")}}
  - : Repräsentiert die Metadaten für ein einzelnes Kapitel einer Medienressource (d.h. einer Video- oder Audiodatei).
- {{domxref("MediaMetadata")}}
  - : Ermöglicht einer Webseite, reichhaltige Medienmetadaten für die Anzeige in einer Plattform-UI bereitzustellen.
- {{domxref("MediaSession")}}
  - : Ermöglicht einer Webseite, benutzerdefinierte Verhalten für standardisierte Medienwiedergabe-Interaktionen bereitzustellen.

## Beispiele

### Einrichten von Aktionshandhabern für einen Musikspieler

Das folgende Beispiel zeigt die Feature-Detektion für die Media Session API. Anschließend wird ein Metadatenobjekt für die Sitzung instanziiert und Aktionshandler für die Benutzersteuerungsaktionen hinzugefügt:

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

Einige Benutzeragenten deaktivieren die automatische Wiedergabe von Medienelementen auf mobilen Geräten und erfordern eine Benutzeraktion, um Medien zu starten. Das folgende Beispiel fügt ein `pointerup`-Ereignis zu einer Play-Schaltfläche auf der Seite hinzu, die dann verwendet wird, um den Medienlaufmodus zu starten:

```js
playButton.addEventListener("pointerup", (event) => {
  const audio = document.querySelector("audio");

  // Der Benutzer hat mit der Seite interagiert. Lassen Sie uns Audio abspielen!
  audio
    .play()
    .then(() => {
      /* Setzen Sie die Steuerungen der Media Session auf, wie oben gezeigt. */
    })
    .catch((error) => {
      console.error(error);
    });
});
```

### Verwenden von Aktionshandhabern zur Steuerung einer Präsentation

Die Aktionshandler `"previousslide"` und `"nextslide"` können verwendet werden, um das Vor- und Zurückblättern durch eine Präsentation zu handhaben, beispielsweise wenn der Benutzer seine Präsentation in einem {{domxref("Picture-in-Picture API", "Picture-in-Picture", "", "nocode")}}-Fenster vorführt und die von Browser bereitgestellten Steuerungen zum Navigieren durch die Folien nutzt.

```js
try {
  navigator.mediaSession.setActionHandler("previousslide", () => {
    log('> Benutzer klickte auf das "Vorherige Folie"-Symbol.');
    if (slideNumber > 1) slideNumber--;
    updateSlide();
  });
} catch (error) {
  log('Warnung! Die "previousslide"-Aktion der Media Session wird nicht unterstützt.');
}

try {
  navigator.mediaSession.setActionHandler("nextslide", () => {
    log('> Benutzer klickte auf das "Nächste Folie"-Symbol.');
    slideNumber++;
    updateSlide();
  });
} catch (error) {
  log('Warnung! Die "nextslide"-Aktion der Media Session wird nicht unterstützt.');
}
```

Siehe [Präsentation von Folien / Media Session Beispiel](https://googlechrome.github.io/samples/media-session/slides.html) für ein funktionierendes Beispiel.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Anpassen von Medienbenachrichtigungen und Wiedergabesteuerungen mit der Media Session API](https://web.dev/articles/media-session) auf web.dev (2024)
