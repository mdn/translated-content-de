---
title: file_handlers
slug: Web/Manifest/file_handlers
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}{{SeeCompatTable}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Array</code></td>
    </tr>
  </tbody>
</table>

Das `file_handlers`-Mitglied gibt ein Array von Objekten an, die die Arten von Dateien darstellen, die eine installierte [Progressive Web App (PWA)](/de/docs/Web/Progressive_web_apps) verarbeiten kann.

Das `file_handlers`-Mitglied wird vom Browser gelesen, wenn die PWA installiert wird, und verwendet, um die Anwendung auf Systemebene mit einem bestimmten Satz von Dateitypen zu verknüpfen.

Zum Beispiel kann eine PWA registriert werden, um Dateien zu verarbeiten, die dem `text/plain` [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) entsprechen. Sobald diese PWA installiert ist, kann das Betriebssystem sie verwenden, um Textdateien zu behandeln, indem es die PWA öffnet, wenn der Benutzer eine Datei dieses Typs öffnet. Beachten Sie, dass andere Anwendungen ebenfalls als Textdateiverarbeiter registriert sein können, und die Art und Weise, wie Betriebssysteme die Zuordnung zwischen Dateitypen und Anwendungen verwalten und den Benutzern die Auswahl einer Anwendung zur Verarbeitung einer bestimmten Datei ermöglichen, kann von einem Gerät zum anderen variieren.

> [!NOTE]
> Während das `file_handlers`-Mitglied verwendet wird, um eine PWA mit einem bestimmten Satz von Dateitypen zu registrieren, führt dies nur dazu, dass das Betriebssystem die PWA startet, wenn eine passende Datei geöffnet wird. Die PWA muss dann tatsächlich die Datei mit JavaScript-Code verarbeiten. Siehe [Dateien bearbeiten](#dateien_bearbeiten) für weitere Informationen.

## Werte

Ein Array von Objekten. Jedes Objekt im Array muss die folgenden Werte enthalten (`action` und `accept` sind erforderlich):

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Mitglied</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>action</code></td>
      <td>
        Ein String, der die URL enthält, zu der navigiert werden soll, wenn eine Datei verarbeitet wird.<br>
        Diese URL muss sich im Navigationsbereich der PWA befinden, der die Menge an URLs ist, zu denen die PWA navigieren kann. Der Navigationsbereich einer PWA ist standardmäßig das <a href="/de/docs/Web/Manifest/start_url"><code>start_url</code></a>-Mitglied, kann aber auch durch das <a href="/de/docs/Web/Manifest/scope"><code>scope</code></a>-Mitglied definiert werden.
      </td>
    </tr>
    <tr>
      <td><code>accept</code></td>
      <td>
        Ein Objekt. Für jede Eigenschaft im Objekt:
        <ul>
          <li>Der Eigenschaftsschlüssel ist ein MIME-Typ.</li>
          <li>Der Eigenschaftswert ist ein Array von Strings, die Dateierweiterungen darstellen, die mit diesem MIME-Typ verbunden sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Beispiel

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

### Dateien bearbeiten

Um die Dateiverarbeitung in einer PWA tatsächlich zu implementieren, müssen Webentwickler auch {{domxref("window.launchQueue")}} verwenden, um die eingehenden Dateien in ihrem Anwendungs-JavaScript-Code zu behandeln.

Das Bearbeiten von Dateien erfolgt im Anwendungscode, der auf dem {{Glossary("main thread")}} läuft, nicht im [Service Worker der Anwendung](/de/docs/Web/API/Service_Worker_API).

Im folgenden Beispiel wird {{domxref("LaunchQueue.setConsumer", "window.launchQueue.setConsumer()")}} verwendet, um eine Callback-Funktion festzulegen, die eingehende Audiodateien empfängt und die erste mit einem {{domxref("HTMLAudioElement.Audio", "Audio")}}-Element abspielt:

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Handle files in Progressive Web Apps auf learn.microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/handle-files)
- [Let installed web applications be file handlers auf developer.chrome.com](https://developer.chrome.com/docs/capabilities/web-apis/file-handling)
