---
title: file_handlers
slug: Web/Progressive_web_apps/Manifest/Reference/file_handlers
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

{{SeeCompatTable}}

Das `file_handlers`-Mitglied gibt ein Array von Objekten an, die die Dateitypen darstellen, die eine installierte [progressive Web-App (PWA)](/de/docs/Web/Progressive_web_apps) verarbeiten kann.

Das `file_handlers`-Mitglied wird vom Browser beim Installieren der PWA gelesen und verwendet, um die Anwendung mit einem bestimmten Satz von Dateitypen auf Betriebssystemebene zu verknüpfen.

Ein Beispiel: Eine PWA kann registriert werden, um Dateien zu verarbeiten, die dem `text/plain` [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types/Common_types) entsprechen. Sobald diese PWA installiert ist, kann das Betriebssystem sie zur Verarbeitung von Textdateien verwenden, wobei die PWA geöffnet wird, wenn der Benutzer eine Datei dieses Typs öffnet. Beachten Sie, dass möglicherweise auch andere Anwendungen als Handler für Textdateien registriert sind und dass die Art und Weise, wie Betriebssysteme die Zuordnung zwischen Dateitypen und Anwendungen verwalten, und wie sie den Benutzern die Auswahl einer Anwendung zur Verarbeitung einer bestimmten Datei ermöglichen, von Gerät zu Gerät variieren kann.

> [!NOTE]
> Während das `file_handlers`-Mitglied verwendet wird, um eine PWA mit einem bestimmten Satz von Dateitypen zu registrieren, führt dies nur dazu, dass das Betriebssystem die PWA startet, wenn eine passende Datei geöffnet wird. Die PWA muss die Datei dann tatsächlich mit JavaScript-Code verarbeiten. Siehe [Verarbeitung der Dateien](#verarbeitung_der_dateien) für weitere Informationen.

## Werte

Ein Array von Objekten. Jedes Objekt im Array muss die folgenden Werte enthalten (`action` und `accept` sind erforderlich):

- `action`
  - : Ein String, der die URL enthält, zu der navigiert werden soll, wenn eine Datei verarbeitet wird.
    Diese URL muss sich innerhalb des Navigationsbereichs der PWA befinden, welcher der Satz von URLs ist, zu denen die PWA navigieren kann. Der Navigationsbereich einer PWA ist standardmäßig auf ihr [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url)-Mitglied festgelegt, kann aber auch durch Verwendung des [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope)-Mitglieds definiert werden.

- `accept`
  - : Ein Objekt. Für jede Eigenschaft im Objekt:
    - Der Eigenschaftsschlüssel ist ein MIME-Typ.
    - Der Eigenschaftswert ist ein Array von Strings, die Dateierweiterungen darstellen, die mit diesem MIME-Typ assoziiert sind.

## Beispiele

In diesem Beispiel erklärt ein Web-App-Manifest einen Dateihandler, der die App zur Handhabung von Audiodateien registriert. Andere Manifestmitglieder wie `name` oder `icons` sind in diesem Beispiel aus Platzgründen nicht enthalten:

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

Um tatsächlich die Datei-Verarbeitung in einer PWA zu implementieren, müssen Webentwickler auch [`window.launchQueue`](/de/docs/Web/API/Window/launchQueue) verwenden, um die eingehenden Dateien in ihrem Anwendungscode zu verarbeiten.

Die Verarbeitung von Dateien erfolgt im Anwendungscode, der im {{Glossary("main_thread", "Hauptthread")}} läuft, nicht im [Service Worker](/de/docs/Web/API/Service_Worker_API) der Anwendung.

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

- [Verarbeiten von Dateien in Progressive Web Apps auf learn.microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/handle-files)
- [Lassen Sie installierte Webanwendungen Dateihandler sein auf developer.chrome.com](https://developer.chrome.com/docs/capabilities/web-apis/file-handling)
