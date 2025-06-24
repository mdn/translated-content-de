---
title: file_handlers
slug: Web/Progressive_web_apps/Manifest/Reference/file_handlers
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{SeeCompatTable}}

Das `file_handlers`-Mitglied gibt ein Array von Objekten an, die die Dateitypen darstellen, die eine installierte [Progressive Web App (PWA)](/de/docs/Web/Progressive_web_apps) verarbeiten kann.

Das `file_handlers`-Mitglied wird vom Browser gelesen, wenn die PWA installiert wird, und verwendet, um die Anwendung mit einem bestimmten Satz von Dateitypen auf Betriebssystemebene zu verknüpfen.

Beispielsweise kann eine PWA registriert werden, um Dateien zu verarbeiten, die dem `text/plain`- [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types/Common_types) entsprechen. Sobald diese PWA installiert ist, kann das Betriebssystem sie verwenden, um Textdateien zu verarbeiten, indem es die PWA öffnet, wenn der Benutzer eine Datei dieses Typs öffnet. Beachten Sie, dass andere Anwendungen ebenfalls als Textdatei-Handler registriert sein können und dass die Art und Weise, wie Betriebssysteme die Zuordnung zwischen Dateitypen und Anwendungen verwalten und wie sie den Benutzern die Auswahl einer Anwendung zur Verarbeitung einer bestimmten Datei ermöglichen, von Gerät zu Gerät variieren kann.

> [!NOTE]
> Während das `file_handlers`-Mitglied verwendet wird, um eine PWA mit einem bestimmten Satz von Dateitypen zu registrieren, führt dies nur dazu, dass das Betriebssystem die PWA startet, wenn eine passende Datei geöffnet wird. Die PWA muss die Datei dann tatsächlich mit JavaScript-Code verarbeiten. Siehe [Handling the files](#handling_the_files) für weitere Informationen.

### Werte

Ein Array von Objekten. Jedes Objekt im Array muss die folgenden Werte enthalten (`action` und `accept` sind erforderlich):

- `action`

  - : Ein String, der die URL enthält, zu der navigiert werden soll, wenn eine Datei verarbeitet wird.
    Diese URL muss im Navigationsbereich der PWA liegen, also dem Satz von URLs, zu denen die PWA navigieren kann. Der Navigationsbereich einer PWA gilt standardmäßig für ihr [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url)-Mitglied, kann aber auch durch das [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope)-Mitglied definiert werden.

- `accept`
  - : Ein Objekt. Für jede Eigenschaft im Objekt:
    - Der Eigenschaftsschlüssel ist ein MIME-Typ.
    - Der Eigenschaftswert ist ein Array von Strings, die Dateierweiterungen darstellen, die mit diesem MIME-Typ assoziiert sind.

## Beispiele

In diesem Beispiel deklariert ein Web-App-Manifest einen Datei-Handler, der die App registriert, um Audiodateien zu verarbeiten. Andere Manifestmitglieder wie `name` oder `icons` sind in diesem Beispiel der Kürze halber nicht enthalten:

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

### Handling the files

Um die Datei-Verarbeitung in einer PWA tatsächlich zu implementieren, müssen Webentwickler auch [`window.launchQueue`](/de/docs/Web/API/Window/launchQueue) verwenden, um die eingehenden Dateien in ihrem Anwendungs-JavaScript-Code zu verarbeiten.

Die Verarbeitung von Dateien erfolgt im Anwendungscode, der im {{Glossary("main_thread", "Main Thread")}} ausgeführt wird, nicht im [Service Worker](/de/docs/Web/API/Service_Worker_API) der Anwendung.

Im folgenden Beispiel wird [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) verwendet, um eine Callback-Funktion anzugeben, die eingehende Audiodateien empfängt und die erste mit einem [`Audio`](/de/docs/Web/API/HTMLAudioElement/Audio)-Element abspielt:

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

- [Handle files in Progressive Web Apps on learn.microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/handle-files)
- [Let installed web applications be file handlers on developer.chrome.com](https://developer.chrome.com/docs/capabilities/web-apis/file-handling)
