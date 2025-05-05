---
title: file_handlers
slug: Web/Progressive_web_apps/Manifest/Reference/file_handlers
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

{{SeeCompatTable}}

Das `file_handlers`-Mitglied spezifiziert ein Array von Objekten, das die Dateitypen darstellt, die eine installierte [Progressive Web App (PWA)](/de/docs/Web/Progressive_web_apps) verarbeiten kann.

Das `file_handlers`-Mitglied wird vom Browser gelesen, wenn die PWA installiert wird, und verwendet, um die Anwendung mit einem bestimmten Satz von Dateitypen auf Betriebssystemebene zu verknüpfen.

Beispielsweise kann eine PWA registriert werden, um Dateien zu verarbeiten, die dem `text/plain` [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types/Common_types) entsprechen. Sobald diese PWA installiert ist, kann das Betriebssystem sie verwenden, um Textdateien zu verarbeiten, indem es die PWA öffnet, wenn der Benutzer eine Datei dieses Typs öffnet. Beachten Sie, dass auch andere Anwendungen als Textdatei-Handler registriert sein können und dass die Art und Weise, wie Betriebssysteme die Zuordnung zwischen Dateitypen und Anwendungen verwalten, sowie die Art und Weise, wie sie es den Benutzern ermöglichen, eine Anwendung zur Verarbeitung einer bestimmten Datei auszuwählen, von Gerät zu Gerät variieren kann.

> [!NOTE]
> Während das `file_handlers`-Mitglied verwendet wird, um eine PWA mit einem bestimmten Satz von Dateitypen zu registrieren, führt dies nur dazu, dass das Betriebssystem die PWA startet, wenn eine passende Datei geöffnet wird. Die PWA muss dann die Datei tatsächlich mit JavaScript-Code verarbeiten. Weitere Informationen finden Sie unter [Verarbeitung der Dateien](#verarbeitung_der_dateien).

### Werte

Ein Array von Objekten. Jedes Objekt im Array muss die folgenden Werte enthalten (`action` und `accept` sind erforderlich):

- `action`

  - : Ein String, der die URL enthält, zu der navigiert wird, wenn eine Datei verarbeitet wird.
    Diese URL muss innerhalb des Navigationsumfangs der PWA liegen, der das Set von URLs darstellt, zu denen die PWA navigieren kann. Der Navigationsumfang einer PWA entspricht standardmäßig ihrem [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url)-Mitglied, kann aber auch durch das Verwenden des [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope)-Mitglieds definiert werden.

- `accept`

  - : Ein Objekt. Für jede Eigenschaft im Objekt:
    - Der Eigenschaftsschlüssel ist ein MIME-Typ.
    - Der Eigenschaftswert ist ein Array von Strings, die Dateierweiterungen darstellen, die mit diesem MIME-Typ assoziiert sind.

## Beispiele

In diesem Beispiel deklariert ein Web-App-Manifest einen Dateihandler, der die App registriert, um Audio-Dateien zu verarbeiten. Andere Manifestmitglieder wie `name` oder `icons` sind in diesem Beispiel der Kürze halber nicht enthalten:

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

### Verarbeitung der Dateien

Um die Dateiverarbeitung in einer PWA tatsächlich zu implementieren, müssen Webentwickler auch [`window.launchQueue`](/de/docs/Web/API/Window/launchQueue) verwenden, um die eingehenden Dateien in ihrem Anwendungscode in JavaScript zu verarbeiten.

Die Verarbeitung von Dateien erfolgt im Anwendungscode, der im {{Glossary("main_thread", "Hauptthread")}} läuft, nicht im [Service Worker](/de/docs/Web/API/Service_Worker_API) der Anwendung.

Im folgenden Beispiel wird [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) verwendet, um eine Callback-Funktion zu spezifizieren, die eingehende Audiodateien empfängt und die erste mithilfe eines [`Audio`](/de/docs/Web/API/HTMLAudioElement/Audio)-Elements abspielt:

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

- [Verarbeiten von Dateien in Progressive Web Apps auf learn.microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/handle-files)
- [Lassen Sie installierte Webanwendungen Dateihandler sein auf developer.chrome.com](https://developer.chrome.com/docs/capabilities/web-apis/file-handling)
