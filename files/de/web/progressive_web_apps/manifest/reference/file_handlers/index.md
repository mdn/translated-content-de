---
title: file_handlers
slug: Web/Progressive_web_apps/Manifest/Reference/file_handlers
l10n:
  sourceCommit: 26f9fbee05fb92b584d44fba4359e86796484aa6
---

{{SeeCompatTable}}

Das `file_handlers`-Element spezifiziert ein Array von Objekten, die die Dateitypen darstellen, die eine installierte [Progressive Web App (PWA)](/de/docs/Web/Progressive_web_apps) verarbeiten kann.

Das `file_handlers`-Element wird vom Browser gelesen, wenn die PWA installiert wird, und dient dazu, die Anwendung mit einem bestimmten Satz von Dateitypen auf Betriebssystemebene zu verknüpfen.

Zum Beispiel kann eine PWA registriert werden, um Dateien zu verarbeiten, die dem `text/plain` [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types/Common_types) entsprechen. Sobald diese PWA installiert ist, kann das Betriebssystem sie verwenden, um Textdateien zu verarbeiten, indem die PWA geöffnet wird, wenn der Benutzer eine Datei dieses Typs öffnet. Beachten Sie, dass auch andere Anwendungen als Textdatei-Handler registriert sein können und dass die Art und Weise, wie Betriebssysteme die Verknüpfung zwischen Dateitypen und Anwendungen verwalten und wie sie Benutzern die Wahl einer Anwendung zur Verarbeitung einer bestimmten Datei ermöglichen, von Gerät zu Gerät unterschiedlich sein kann.

> [!NOTE]
> Während das `file_handlers`-Element verwendet wird, um eine PWA mit einem bestimmten Satz von Dateitypen zu registrieren, führt dies nur dazu, dass das Betriebssystem die PWA startet, wenn eine entsprechende Datei geöffnet wird. Die PWA muss dann tatsächlich die Datei mithilfe von JavaScript-Code verarbeiten. Siehe [Verarbeiten der Dateien](#verarbeiten_der_dateien) für weitere Informationen.

### Werte

Ein Array von Objekten. Jedes Objekt im Array muss die folgenden Werte enthalten (`action` und `accept` sind erforderlich):

- `action`
  - : Ein String, der die URL enthält, zu der navigiert wird, wenn eine Datei verarbeitet wird.
    Diese URL muss innerhalb des Navigationsbereichs der PWA liegen, der die Menge an URLs ist, zu denen die PWA navigieren kann. Der Navigationsbereich einer PWA standardmäßig ist das [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url)-Element, kann aber auch durch die Verwendung des [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope)-Elements definiert werden.

- `accept`
  - : Ein Objekt. Für jede Eigenschaft im Objekt:
    - Der Eigenschaftsschlüssel ist ein MIME-Typ.
    - Der Eigenschaftswert ist ein Array von Strings, die Dateierweiterungen repräsentieren, die mit diesem MIME-Typ assoziiert sind.

## Beispiele

In diesem Beispiel deklariert ein Web App Manifest einen Dateihandler, der die App registriert, um Audiodateien zu verarbeiten. Andere Manifest-Elemente wie `name` oder `icons` sind in diesem Beispiel zur Kürze nicht enthalten:

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

Um die Datei-Verarbeitung in einer PWA tatsächlich zu implementieren, müssen Webentwickler auch [`window.launchQueue`](/de/docs/Web/API/Window/launchQueue) verwenden, um die eingehenden Dateien in ihrem JavaScript-Code der Anwendung zu verarbeiten.

Die Verarbeitung von Dateien erfolgt im Anwendungscode, der auf dem {{Glossary("main_thread", "Haupt-Thread")}} läuft, nicht im [Service Worker](/de/docs/Web/API/Service_Worker_API) der Anwendung.

Im folgenden Beispiel wird [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) verwendet, um eine Rückruffunktion zu spezifizieren, die eingehende Audiodateien empfängt und die erste mit einem [`Audio`](/de/docs/Web/API/HTMLAudioElement/Audio)-Element abspielt:

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

- [Dateien in Progressive Web Apps verarbeiten auf learn.microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/handle-files)
- [Erlauben, dass installierte Webanwendungen Dateihandler sind auf developer.chrome.com](https://developer.chrome.com/docs/capabilities/web-apis/file-handling)
