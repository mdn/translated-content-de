---
title: file_handlers
slug: Web/Progressive_web_apps/Manifest/Reference/file_handlers
l10n:
  sourceCommit: 2f6ddccbafddcea8f2b68eb4a78b9764892916b3
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}{{SeeCompatTable}}

Das `file_handlers`-Element gibt ein Array von Objekten an, die die Arten von Dateien darstellen, die eine installierte [Progressive Web App (PWA)](/de/docs/Web/Progressive_web_apps) verarbeiten kann.

Das `file_handlers`-Element wird vom Browser gelesen, wenn die PWA installiert wird, und verwendet, um die Anwendung auf Betriebssystemebene mit einer bestimmten Menge von Dateitypen zu verknüpfen.

Zum Beispiel kann eine PWA so registriert werden, dass sie Dateien verarbeitet, die dem `text/plain` [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types/Common_types) entsprechen. Sobald diese PWA installiert ist, kann das Betriebssystem sie verwenden, um Textdateien zu verarbeiten, indem es die PWA öffnet, wenn der Benutzer eine Datei dieses Typs öffnet. Beachten Sie, dass auch andere Anwendungen als Textdatei-Handler registriert sein können und dass die Art und Weise, wie Betriebssysteme die Zuordnung zwischen Dateitypen und Anwendungen verwalten und wie sie es Benutzern ermöglichen, eine Anwendung zur Verarbeitung einer bestimmten Datei auszuwählen, von Gerät zu Gerät unterschiedlich sein kann.

> [!NOTE]
> Obwohl das `file_handlers`-Element verwendet wird, um eine PWA mit einem bestimmten Satz von Dateitypen zu registrieren, führt dies nur dazu, dass das Betriebssystem die PWA startet, wenn eine passende Datei geöffnet wird. Die PWA muss die Datei dann tatsächlich mit JavaScript-Code verarbeiten. Weitere Informationen finden Sie unter [Verarbeitung der Dateien](#verarbeitung_der_dateien).

### Werte

Ein Array von Objekten. Jedes Objekt im Array muss die folgenden Werte enthalten (`action` und `accept` sind erforderlich):

- `action`

  - : Ein String, der die URL enthält, zu der navigiert wird, wenn eine Datei verarbeitet wird.
    Diese URL muss innerhalb des Navigationsbereichs der PWA liegen, das ist die Menge der URLs, zu denen die PWA navigieren kann. Der Navigationsbereich einer PWA setzt standardmäßig auf das [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url)-Element, kann aber auch durch das [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope)-Element definiert werden.

- `accept`

  - : Ein Objekt. Für jede Eigenschaft im Objekt:
    - Der Eigenschaftsname ist ein MIME-Typ.
    - Der Eigenschaftswert ist ein Array von Strings, die Dateierweiterungen darstellen, die mit diesem MIME-Typ verbunden sind.

## Beispiele

In diesem Beispiel erklärt ein Web-App-Manifest einen Datei-Handler, der die App registriert, um Audio-Dateien zu verarbeiten. Andere Manifest-Elemente wie `name` oder `icons` sind in diesem Beispiel der Kürze halber nicht enthalten:

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

Um die Dateiverarbeitung in einer PWA tatsächlich zu implementieren, müssen Webentwickler auch [`window.launchQueue`](/de/docs/Web/API/Window/launchQueue) verwenden, um die eingehenden Dateien in ihrem Anwendungs-JavaScript-Code zu verarbeiten.

Die Verarbeitung von Dateien erfolgt im Anwendungscode, der auf dem {{Glossary("main_thread", "Haupt-Thread")}} läuft, nicht im [Service Worker](/de/docs/Web/API/Service_Worker_API) der Anwendung.

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

- [Verarbeiten von Dateien in Progressive Web Apps auf learn.microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/handle-files)
- [Ermöglichen Sie, dass installierte Webanwendungen Datei-Handler sind auf developer.chrome.com](https://developer.chrome.com/docs/capabilities/web-apis/file-handling)
