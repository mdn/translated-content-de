---
title: file_handlers
slug: Web/Manifest/file_handlers
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}{{SeeCompatTable}}

Das `file_handlers`-Mitglied spezifiziert ein Array von Objekten, die die Typen von Dateien darstellen, die eine installierte [Progressive Web App (PWA)](/de/docs/Web/Progressive_web_apps) bearbeiten kann.

Das `file_handlers`-Mitglied wird vom Browser gelesen, wenn die PWA installiert wird, und verwendet, um die Anwendung mit einem bestimmten Satz von Dateitypen auf Betriebssystemebene zu verknüpfen.

Zum Beispiel kann eine PWA so registriert werden, dass sie Dateien verarbeiten kann, die dem `text/plain` [MIME-Typ](/de/docs/Web/HTTP/MIME_types/Common_types) entsprechen. Sobald diese PWA installiert ist, kann das Betriebssystem sie verwenden, um Textdateien zu verarbeiten, indem es die PWA öffnet, wenn der Nutzer eine Datei dieses Typs öffnet. Beachten Sie, dass auch andere Anwendungen als Textdatei-Handler registriert sein können und dass die Art und Weise, wie Betriebssysteme die Zuordnung zwischen Dateitypen und Anwendungen verwalten und wie sie den Benutzern erlauben, eine Anwendung zur Verarbeitung einer bestimmten Datei auszuwählen, von Gerät zu Gerät unterschiedlich sein kann.

> [!NOTE]
> Während das `file_handlers`-Mitglied verwendet wird, um eine PWA mit einem bestimmten Satz von Dateitypen zu registrieren, führt dies nur dazu, dass das Betriebssystem die PWA startet, wenn eine passende Datei geöffnet wird. Die PWA muss die Datei dann tatsächlich mit JavaScript-Code verarbeiten. Weitere Informationen finden Sie unter [Umgang mit den Dateien](#umgang_mit_den_dateien).

### Werte

Ein Array von Objekten. Jedes Objekt in dem Array muss die folgenden Werte enthalten (`action` und `accept` sind erforderlich):

- `action`

  - : Ein String, der die URL enthält, zu der navigiert wird, wenn eine Datei verarbeitet wird.
    Diese URL muss innerhalb des Navigationsbereichs der PWA liegen, das ist der Satz von URLs, zu denen die PWA navigieren kann. Der Navigationsbereich einer PWA hat standardmäßig den Wert ihres [`start_url`](/de/docs/Web/Manifest/start_url)-Mitglieds, kann aber auch durch das [`scope`](/de/docs/Web/Manifest/scope)-Mitglied definiert werden.

- `accept`

  - : Ein Objekt. Für jede Eigenschaft im Objekt:
    - Der Eigenschaftsname ist ein MIME-Typ.
    - Der Eigenschaftswert ist ein Array von Strings, die Dateiendungen darstellen, die diesem MIME-Typ zugeordnet sind.

## Beispiele

In diesem Beispiel erklärt ein Web-App-Manifest einen Dateihandler, der die App so registriert, dass sie Audiodateien verarbeiten kann. Andere Manifestmitglieder wie `name` oder `icons` sind in diesem Beispiel der Kürze halber nicht enthalten:

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

### Umgang mit den Dateien

Um die Datei-Verarbeitung in einer PWA tatsächlich zu implementieren, müssen Webentwickler auch [`window.launchQueue`](/de/docs/Web/API/Window/launchQueue) verwenden, um die eingehenden Dateien im JavaScript-Code ihrer Anwendung zu verarbeiten.

Die Verarbeitung der Dateien erfolgt im Anwendungscode, der im {{Glossary("main_thread", "Hauptthread")}} läuft, nicht im [Service Worker](/de/docs/Web/API/Service_Worker_API) der Anwendung.

Im folgenden Beispiel wird [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) verwendet, um eine Callback-Funktion zu spezifizieren, die eingehende Audiodateien empfängt und die erste mit einem [`Audio`](/de/docs/Web/API/HTMLAudioElement/Audio)-Element abspielt:

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

- [Handle files in Progressive Web Apps auf learn.microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/handle-files) 
- [Let installed web applications be file handlers auf developer.chrome.com](https://developer.chrome.com/docs/capabilities/web-apis/file-handling)
