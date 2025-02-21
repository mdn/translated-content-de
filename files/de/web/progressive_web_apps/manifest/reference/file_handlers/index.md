---
title: file_handlers
slug: Web/Progressive_web_apps/Manifest/Reference/file_handlers
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}{{SeeCompatTable}}

Der `file_handlers`-Eintrag spezifiziert ein Array von Objekten, die die Dateitypen repräsentieren, die eine installierte [Progressive Web App (PWA)](/de/docs/Web/Progressive_web_apps) verarbeiten kann.

Der `file_handlers`-Eintrag wird von dem Browser gelesen, wenn die PWA installiert wird, und verwendet, um die Anwendung auf Betriebssystemebene mit einer bestimmten Menge an Dateitypen zu verknüpfen.

Beispielsweise kann eine PWA registriert werden, um Dateien zu verarbeiten, die dem `text/plain` [MIME-Typ](/de/docs/Web/HTTP/MIME_types/Common_types) entsprechen. Sobald diese PWA installiert ist, kann das Betriebssystem sie verwenden, um Textdateien zu bearbeiten und die PWA zu öffnen, wenn der Benutzer eine Datei dieses Typs öffnet. Beachten Sie, dass andere Anwendungen ebenfalls als Textdateiverarbeiter registriert sein können und dass die Art und Weise, wie Betriebssysteme die Zuordnung zwischen Dateitypen und Anwendungen verwalten, und wie sie Benutzern ermöglichen, eine Anwendung auszuwählen, um eine bestimmte Datei zu handhaben, von Gerät zu Gerät unterschiedlich sein kann.

> [!NOTE]
> Während der `file_handlers`-Eintrag verwendet wird, um eine PWA mit einer bestimmten Menge an Dateitypen zu registrieren, führt dies nur dazu, dass das Betriebssystem die PWA startet, wenn eine passende Datei geöffnet wird. Die PWA muss dann die Datei tatsächlich mit JavaScript-Code verarbeiten. Weitere Informationen finden Sie unter [Verarbeiten der Dateien](#verarbeiten_der_dateien).

### Werte

Ein Array von Objekten. Jedes Objekt im Array muss die folgenden Werte enthalten (`action` und `accept` sind erforderlich):

- `action`

  - : Ein String, der die URL enthält, zu der navigiert werden soll, wenn eine Datei verarbeitet wird.
    Diese URL muss innerhalb des Navigationsbereichs der PWA liegen, also der Satz von URLs, die die PWA ansteuern kann. Der Navigationsbereich einer PWA entspricht standardmäßig dem [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url)-Eintrag, kann aber auch durch Verwendung des [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope)-Eintrags definiert werden.

- `accept`

  - : Ein Objekt. Für jede Eigenschaft im Objekt:
    - Der Eigenschaftsschlüssel ist ein MIME-Typ.
    - Der Eigenschaftswert ist ein Array von Strings, die Dateierweiterungen repräsentieren, die mit diesem MIME-Typ assoziiert sind.

## Beispiele

In diesem Beispiel deklariert ein Web-App-Manifest einen Datei-Handler, der die App registriert, um Audiodateien zu verarbeiten. Andere Manifest-Einträge wie `name` oder `icons` sind in diesem Beispiel der Kürze halber nicht enthalten:

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

### Verarbeiten der Dateien

Um die Dateiverarbeitung in einer PWA tatsächlich zu implementieren, müssen Webentwickler auch [`window.launchQueue`](/de/docs/Web/API/Window/launchQueue) verwenden, um die eingehenden Dateien in ihrem Anwendungscode zu verarbeiten.

Die Verarbeitung von Dateien erfolgt im Anwendungscode, der im {{Glossary("main_thread", "Hauptthread")}} ausgeführt wird, nicht im [Service Worker](/de/docs/Web/API/Service_Worker_API) der Anwendung.

Im folgenden Beispiel wird [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) verwendet, um eine Callback-Funktion anzugeben, die eingehende Audiodateien empfängt und die erste davon mit einem [`Audio`](/de/docs/Web/API/HTMLAudioElement/Audio)-Element abspielt:

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
- [Installierte Webanwendungen als Dateiverwalter auf developer.chrome.com](https://developer.chrome.com/docs/capabilities/web-apis/file-handling)
