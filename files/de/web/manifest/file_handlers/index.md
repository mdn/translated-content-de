---
title: file_handlers
slug: Web/Manifest/file_handlers
l10n:
  sourceCommit: 54dbdfc6be6e1cb62b1c10e23356e895953fb196
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}{{SeeCompatTable}}

Das `file_handlers`-Mitglied gibt ein Array von Objekten an, das die Arten von Dateien repräsentiert, die eine installierte [Progressive Web App (PWA)](/de/docs/Web/Progressive_web_apps) verarbeiten kann.

Das `file_handlers`-Mitglied wird vom Browser gelesen, wenn die PWA installiert wird, und wird verwendet, um die Anwendung auf Betriebssystemebene mit einer bestimmten Dateiart zu verknüpfen.

Zum Beispiel kann eine PWA registriert werden, um Dateien zu behandeln, die dem `text/plain` [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) entsprechen. Sobald diese PWA installiert ist, kann das Betriebssystem sie verwenden, um Textdateien zu verarbeiten und die PWA zu öffnen, wenn der Benutzer eine Datei dieses Typs öffnet. Beachten Sie, dass auch andere Anwendungen als Textdatei-Handler registriert sein können und dass die Art und Weise, wie Betriebssysteme die Verknüpfung zwischen Dateitypen und Anwendungen verwalten und dem Nutzer die Möglichkeit geben, eine Anwendung für die Verarbeitung einer bestimmten Datei auszuwählen, von Gerät zu Gerät unterschiedlich sein kann.

> [!NOTE]
> Auch wenn das `file_handlers`-Mitglied verwendet wird, um eine PWA mit einer bestimmten Dateiart zu registrieren, führt dies nur dazu, dass das Betriebssystem die PWA startet, wenn eine passende Datei geöffnet wird. Die PWA muss die Datei dann tatsächlich mithilfe von JavaScript-Code verarbeiten. Weitere Informationen finden Sie unter [Dateien verarbeiten](#dateien_verarbeiten).

### Werte

Ein Array von Objekten. Jedes Objekt im Array muss die folgenden Werte enthalten (`action` und `accept` sind erforderlich):

- `action`

  - : Ein String, der die URL beinhaltet, zu der navigiert wird, wenn eine Datei verarbeitet wird.
    Diese URL muss innerhalb des Navigationsbereichs der PWA liegen, also der Menge von URLs, zu denen die PWA navigieren kann. Der Navigationsbereich einer PWA wird standardmäßig durch ihr [`start_url`](/de/docs/Web/Manifest/start_url)-Mitglied festgelegt, kann aber auch durch Verwendung des [`scope`](/de/docs/Web/Manifest/scope)-Mitglieds definiert werden.

- `accept`

  - : Ein Objekt. Für jede Eigenschaft im Objekt:
    - Der Eigenschaftsschlüssel ist ein MIME-Typ.
    - Der Eigenschaftswert ist ein Array von Strings, die Dateiendungen repräsentieren, die mit diesem MIME-Typ assoziiert sind.

## Beispiele

In diesem Beispiel erklärt ein Web-App-Manifest einen Datei-Handler, der die App registriert, um Audiodateien zu verarbeiten. Andere Manifestmitglieder wie `name` oder `icons` sind in diesem Beispiel aus Gründen der Kürze nicht enthalten:

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

### Dateien verarbeiten

Um die Dateiabwicklung tatsächlich in einer PWA zu implementieren, müssen Webentwickler auch [`window.launchQueue`](/de/docs/Web/API/Window/launchQueue) verwenden, um die eingehenden Dateien in ihrem Anwendungs-JavaScript-Code zu verarbeiten.

Die Verarbeitung von Dateien erfolgt im Anwendungscode, der auf dem {{Glossary("main_thread", "Haupt-Thread")}} läuft, nicht im [Service Worker](/de/docs/Web/API/Service_Worker_API) der Anwendung.

Im folgenden Beispiel wird [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) verwendet, um eine Callback-Funktion festzulegen, die eingehende Audiodateien empfängt und die erste mithilfe eines [`Audio`](/de/docs/Web/API/HTMLAudioElement/Audio)-Elements abspielt:

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
- [Installierte Webanwendungen als Datei-Handler auf developer.chrome.com zulassen](https://developer.chrome.com/docs/capabilities/web-apis/file-handling)
