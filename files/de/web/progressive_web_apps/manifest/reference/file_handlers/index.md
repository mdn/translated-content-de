---
title: file_handlers
slug: Web/Progressive_web_apps/Manifest/Reference/file_handlers
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}{{SeeCompatTable}}

Das `file_handlers`-Mitglied spezifiziert ein Array von Objekten, die die Arten von Dateien darstellen, die eine installierte [Progressive Web App (PWA)](/de/docs/Web/Progressive_web_apps) verarbeiten kann.

Das `file_handlers`-Mitglied wird vom Browser gelesen, wenn die PWA installiert wird, und wird verwendet, um die Anwendung mit einer bestimmten Reihe von Dateitypen auf Betriebssystemebene zu verknüpfen.

Zum Beispiel kann eine PWA registriert werden, um Dateien zu verarbeiten, die dem `text/plain` [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types/Common_types) entsprechen. Sobald diese PWA installiert ist, kann das Betriebssystem sie verwenden, um Textdateien zu handhaben und die PWA zu öffnen, wenn der Benutzer eine Datei dieses Typs öffnet. Beachten Sie, dass auch andere Anwendungen als Textdatei-Handler registriert sein können und dass die Art und Weise, wie Betriebssysteme die Verknüpfung zwischen Dateitypen und Anwendungen verwalten und Benutzern erlauben, eine Anwendung zur Handhabung einer bestimmten Datei auszuwählen, von Gerät zu Gerät variieren kann.

> [!NOTE]
> Während das `file_handlers`-Mitglied verwendet wird, um eine PWA mit einer bestimmten Reihe von Dateitypen zu registrieren, führt dies nur dazu, dass das Betriebssystem die PWA startet, wenn eine passende Datei geöffnet wird. Die PWA muss dann tatsächlich die Datei mit JavaScript-Code verarbeiten. Siehe [Handhabung der Dateien](#handhabung_der_dateien) für weitere Informationen.

### Werte

Ein Array von Objekten. Jedes Objekt im Array muss die folgenden Werte enthalten (`action` und `accept` sind erforderlich):

- `action`

  - : Ein String, der die URL enthält, zu der navigiert wird, wenn eine Datei gehandhabt wird.
    Diese URL muss innerhalb des Navigationsbereichs der PWA liegen, der die Menge von URLs darstellt, zu denen die PWA navigieren kann. Der Navigationsbereich einer PWA standardmäßig ist ihr [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url)-Mitglied, kann aber auch durch Verwendung des [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope)-Mitglieds definiert werden.

- `accept`

  - : Ein Objekt. Für jede Eigenschaft im Objekt:
    - Der Eigenschaftsschlüssel ist ein MIME-Typ.
    - Der Eigenschaftswert ist ein Array von Strings, die Dateierweiterungen darstellen, die mit diesem MIME-Typ verbunden sind.

## Beispiele

In diesem Beispiel deklariert ein Webapp-Manifest einen Datei-Handler, der die App registriert, um Audiodateien zu verarbeiten. Andere Manifest-Mitglieder wie `name` oder `icons` sind in diesem Beispiel zur Kürze nicht enthalten:

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

### Handhabung der Dateien

Um tatsächlich Datei-Handling in einer PWA zu implementieren, müssen Webentwickler auch [`window.launchQueue`](/de/docs/Web/API/Window/launchQueue) verwenden, um die eingehenden Dateien in ihrem Anwendungs-JavaScript-Code zu verarbeiten.

Die Handhabung von Dateien erfolgt im Anwendungscode, der auf dem {{Glossary("main_thread", "Hauptthread")}} läuft, nicht im [Service Worker](/de/docs/Web/API/Service_Worker_API) der Anwendung.

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

- [Handle files in Progressive Web Apps on learn.microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/handle-files)
- [Let installed web applications be file handlers on developer.chrome.com](https://developer.chrome.com/docs/capabilities/web-apis/file-handling)
