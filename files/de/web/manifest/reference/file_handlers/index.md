---
title: file_handlers
slug: Web/Manifest/Reference/file_handlers
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest/Reference")}}{{SeeCompatTable}}

Das `file_handlers`-Element spezifiziert ein Array von Objekten, das die Arten von Dateien darstellt, die eine installierte [Progressive Web App (PWA)](/de/docs/Web/Progressive_web_apps) verarbeiten kann.

Das `file_handlers`-Element wird vom Browser gelesen, wenn die PWA installiert wird, und dient dazu, die Anwendung auf Betriebssystemebene mit einer bestimmten Menge an Dateitypen zu verknüpfen.

Zum Beispiel kann eine PWA registriert werden, um Dateien zu verarbeiten, die dem `text/plain` [MIME-Typ](/de/docs/Web/HTTP/MIME_types/Common_types) entsprechen. Sobald diese PWA installiert ist, kann das Betriebssystem sie verwenden, um Textdateien zu bearbeiten und die PWA zu öffnen, wenn der Benutzer eine Datei dieses Typs öffnet. Beachten Sie, dass auch andere Anwendungen als Textdatei-Verarbeiter registriert sein können und dass die Art und Weise, wie Betriebssysteme die Zuordnung zwischen Dateitypen und Anwendungen verwalten und dem Benutzer die Auswahl einer Anwendung für die Bearbeitung einer bestimmten Datei ermöglichen, von einem Gerät zum anderen variieren kann.

> [!NOTE]
> Obwohl das `file_handlers`-Element verwendet wird, um eine PWA mit einer bestimmten Menge an Dateitypen zu registrieren, führt dies nur dazu, dass das Betriebssystem die PWA startet, wenn eine passende Datei geöffnet wird. Die PWA muss die Datei dann tatsächlich mit JavaScript-Code verarbeiten. Siehe [Verarbeitung der Dateien](#verarbeitung_der_dateien) für weitere Informationen.

### Werte

Ein Array von Objekten. Jedes Objekt im Array muss die folgenden Werte enthalten (`action` und `accept` sind erforderlich):

- `action`

  - : Ein String, der die URL enthält, zu der navigiert werden soll, wenn eine Datei verarbeitet wird.
    Diese URL muss innerhalb des Navigationsbereichs der PWA liegen, der die Menge der URLs ist, zu denen die PWA navigieren kann. Der Navigationsbereich einer PWA entspricht standardmäßig ihrem [`start_url`](/de/docs/Web/Manifest/Reference/start_url)-Element, kann aber auch durch das [`scope`](/de/docs/Web/Manifest/Reference/scope)-Element definiert werden.

- `accept`

  - : Ein Objekt. Für jede Eigenschaft im Objekt:
    - Der Eigenschaftsschlüssel ist ein MIME-Typ.
    - Der Eigenschaftswert ist ein Array von Strings, die Dateierweiterungen darstellen, die mit diesem MIME-Typ assoziiert sind.

## Beispiele

In diesem Beispiel deklariert ein Web-App-Manifest einen Dateiverarbeiter, der die App registriert, um Audiodateien zu verarbeiten. Andere Manifest-Elemente wie `name` oder `icons` sind in diesem Beispiel der Kürze halber nicht enthalten:

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

Die Verarbeitung von Dateien erfolgt im Anwendungscode, der auf dem {{Glossary("main_thread", "Hauptthread")}} läuft, nicht im [Service Worker](/de/docs/Web/API/Service_Worker_API) der Anwendung.

Im folgenden Beispiel wird [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) verwendet, um eine Callback-Funktion anzugeben, die eingehende Audiodateien empfängt und die erste mittels einer [`Audio`](/de/docs/Web/API/HTMLAudioElement/Audio)-Element abspielt:

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
