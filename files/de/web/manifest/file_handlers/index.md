---
title: file_handlers
slug: Web/Manifest/file_handlers
l10n:
  sourceCommit: 54dbdfc6be6e1cb62b1c10e23356e895953fb196
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}{{SeeCompatTable}}

Der `file_handlers`-Eintrag gibt ein Array von Objekten an, die die Dateitypen darstellen, die eine installierte [Progressive Web App (PWA)](/de/docs/Web/Progressive_web_apps) verarbeiten kann.

Der `file_handlers`-Eintrag wird vom Browser beim Installieren der PWA gelesen und verwendet, um die Anwendung mit einer bestimmten Reihe von Dateitypen auf Betriebssystemebene zu verknüpfen.

Zum Beispiel kann eine PWA registriert werden, um Dateien zu verarbeiten, die dem `text/plain` [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) entsprechen. Sobald diese PWA installiert ist, kann das Betriebssystem sie verwenden, um Textdateien zu bearbeiten, indem es die PWA öffnet, wenn der Benutzer eine Datei dieses Typs öffnet. Beachten Sie, dass andere Anwendungen ebenfalls als Handler für Textdateien registriert sein können und dass sich die Art und Weise, wie Betriebssysteme die Zuordnung zwischen Dateitypen und Anwendungen verwalten und Benutzern die Wahl einer Anwendung zum Öffnen einer bestimmten Datei ermöglichen, von Gerät zu Gerät unterscheiden kann.

> [!NOTE]
> Auch wenn der `file_handlers`-Eintrag verwendet wird, um eine PWA mit einer bestimmten Menge von Dateitypen zu registrieren, führt dies nur dazu, dass das Betriebssystem die PWA startet, wenn eine passende Datei geöffnet wird. Die PWA muss die Datei dann tatsächlich mit JavaScript-Code bearbeiten. Weitere Informationen finden Sie unter [Bearbeitung der Dateien](#bearbeitung_der_dateien).

### Werte

Ein Array von Objekten. Jedes Objekt im Array muss die folgenden Werte enthalten (`action` und `accept` sind erforderlich):

- `action`

  - : Ein String, der die URL enthält, zu der navigiert werden soll, wenn eine Datei verarbeitet wird.
    Diese URL muss im Navigationsbereich der PWA liegen, das heißt in dem Satz von URLs, zu denen die PWA navigieren kann. Der Navigationsbereich einer PWA standardmäßig auf ihren [`start_url`](/de/docs/Web/Manifest/start_url)-Eintrag festgelegt, kann aber auch durch die Verwendung des [`scope`](/de/docs/Web/Manifest/scope)-Eintrags definiert werden.

- `accept`

  - : Ein Objekt. Für jede Eigenschaft im Objekt:
    - Der Eigenschaftsschlüssel ist ein MIME-Typ.
    - Der Eigenschaftswert ist ein Array von Strings, die Dateierweiterungen repräsentieren, die mit diesem MIME-Typ verbunden sind.

## Beispiele

In diesem Beispiel erklärt ein Web-App-Manifest einen Datei-Handler, der die App registriert, um Audiodateien zu verarbeiten. Andere Manifest-Einträge wie `name` oder `icons` sind in diesem Beispiel der Kürze halber nicht enthalten:

```json
{
  "file_handlers": [
    {
      "action": "/handle-audio-file",
      "accept": {
        "audio/wav": [".wav"],
        "audio/x-wav": [".wav"],
        "audio/mpeg": [".mp3"],
        "audio/mp4": [".mp4"],
        "audio/aac": [".adts"],
        "audio/ogg": [".ogg"],
        "application/ogg": [".ogg"],
        "audio/webm": [".webm"],
        "audio/flac": [".flac"],
        "audio/mid": [".rmi", ".mid"]
      }
    }
  ]
}
```

### Bearbeitung der Dateien

Um die Dateiverarbeitung in einer PWA tatsächlich zu implementieren, müssen Webentwickler auch [`window.launchQueue`](/de/docs/Web/API/Window/launchQueue) verwenden, um die eingehenden Dateien in ihrem Anwendungs-JavaScript-Code zu bearbeiten.

Die Bearbeitung der Dateien erfolgt im Anwendungscode, der im [Haupt-Thread](/de/docs/Glossary/main_thread) läuft, nicht im [Service Worker](/de/docs/Web/API/Service_Worker_API) der Anwendung.

Im folgenden Beispiel wird [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) verwendet, um eine Callback-Funktion festzulegen, die eingehende Audiodateien empfängt und die erste mit einem [`Audio`](/de/docs/Web/API/HTMLAudioElement/Audio)-Element abspielt:

```js
async function playSong(handledFile) {
  const blob = await handledFile.getFile();
  const url = window.URL.createObjectURL(blob);
  const audio = new Audio(url);
  audio.play();
}

if ("launchQueue" in window) {
  window.launchQueue.setConsumer((launchParams) => {
    if (launchParams.files && launchParams.files.length) {
      playSong(launchParams.files[0]);
    }
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Dateien in Progressive Web Apps auf learn.microsoft.com bearbeiten](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/handle-files)
- [Installierte Webanwendungen als Datei-Handler auf developer.chrome.com](https://developer.chrome.com/docs/capabilities/web-apis/file-handling)
