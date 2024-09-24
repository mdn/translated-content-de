---
title: Dateien mit Ihrer PWA verknüpfen
slug: Web/Progressive_web_apps/How_to/Associate_files_with_your_PWA
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{PWASidebar}}

Auf einem Gerät sind Dateien normalerweise mit Apps verknüpft, sodass beim Öffnen der Datei das Betriebssystem die entsprechende App startet und die Datei an sie übergibt. Beispielsweise werden HTML-Dateien oft in einem Webbrowser geöffnet, Textdateien in einem Texteditor und Videos in einem Videoplayer.

Progressive Web Apps können an dieser Funktion teilnehmen, sodass die PWA gestartet werden kann, um Dateien bestimmter Typen zu bearbeiten, wenn der Benutzer darauf klickt.

Es gibt zwei Teile, um Unterstützung für die Dateiverarbeitung hinzuzufügen:

- Erklären Sie die Unterstützung bestimmter Dateitypen mithilfe des [`file_handlers`](/de/docs/Web/Manifest/file_handlers) Web-App-Manifest-Mitglieds.
- Verarbeiten Sie Dateien mithilfe der {{domxref("LaunchQueue")}}-Schnittstelle.

> [!NOTE]
> Derzeit ist diese Funktion nur in auf Chromium basierenden Browsern und nur auf Desktop-Betriebssystemen verfügbar.

## Unterstützung für Dateitypen erklären

Um die Unterstützung für bestimmte Dateitypen zu deklarieren, fügen Sie das [`file_handlers`](/de/docs/Web/Manifest/file_handlers)-Mitglied in Ihre [Manifestdatei](/de/docs/Web/Manifest) ein.

Das `file_handlers`-Mitglied ist ein Array von Datei-Handler-Objekten. Jedes Datei-Handler-Objekt hat zwei obligatorische Eigenschaften: `action` und `accept`.

- Die `accept`-Eigenschaft enthält {{Glossary("MIME_Type", "MIME-Typen")}} und zugehörige Dateierweiterungen für Dateien, die der Handler verarbeiten kann.
- Die `action`-Eigenschaft ist eine URL, zu der die PWA navigieren wird, wenn der Benutzer die Datei öffnet. Diese Seite muss im Gültigkeitsbereich der PWA liegen.

Die folgende Manifestdatei enthält ein `file_handlers`-Mitglied mit einem einzelnen Handler, der {{Glossary("JPEG")}}- und {{Glossary("PNG")}}-Dateien handhaben kann und zur Startseite der PWA navigiert, wenn der Benutzer eine dieser Dateien anklickt.

```json
{
  "name": "Dateiverarbeitung Demo",
  "icons": [
    {
      "src": "icons/lightbulb.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": "/",
  "display": "standalone",
  "file_handlers": [
    {
      "action": "/",
      "accept": {
        "image/jpeg": [".jpg", ".jpeg"],
        "image/png": [".png"]
      }
    }
  ]
}
```

Mit diesem Manifest kann die PWA geöffnet werden, sobald sie installiert ist, wenn der Benutzer Dateien dieser Typen öffnet.

In der Regel können mehr als eine App Dateien eines bestimmten Typs öffnen, sodass das Betriebssystem normalerweise eine Funktion bereitstellt, mit der der Benutzer auswählen kann, welche App zum Öffnen einer Datei verwendet werden soll, und einen Standard-Handler festlegen kann. Zum Beispiel kann der Benutzer unter macOS mit der rechten Maustaste auf eine Datei klicken, "Informationen" auswählen und im daraufhin angezeigten Dialogfeld den Standard-Handler konfigurieren:

![Auswahl des Standard-Handlers auf macOS](macos-get-info-dialog.png)

## Erlaubnis erfragen

Das erste Mal, wenn der Browser Ihre PWA starten möchte, um eine oder mehrere vom Benutzer geöffnete Dateien zu handhaben, wird der Benutzer aufgefordert, zu bestätigen, ob er Ihre PWA dafür verwenden möchte. Beispielsweise sieht der Chrome-Dialog so aus:

![Chrome-Warnungsdialog zum Starten der PWA zur Verarbeitung einer Datei](macos-chrome-launch-warning.png)

## Die Dateien verarbeiten

Wenn der Browser Ihre PWA startet und zur Seite navigiert, die Sie im `action`-Eigenschaft des `file_handlers`-Manifest-Mitglieds angegeben haben, müssen Sie Code ausführen, um die Datei zu verarbeiten. Dieser Code wird auf der Seite ausgeführt, die in der `action`-Eigenschaft angegeben wurde.

Die Schlüssel-Schnittstelle hier ist {{domxref("LaunchQueue")}}, die als Eigenschaft des globalen {{domxref("Window")}}-Objekts verfügbar ist.

Die `LaunchQueue`-Schnittstelle hat eine einzige Methode, {{domxref("LaunchQueue/setConsumer", "setConsumer()")}}, die eine Callback-Funktion als Argument nimmt, die aufgerufen wird, wenn der Browser die PWA mit einer oder mehreren zu verarbeitenden Dateien gestartet hat.

Der Callback wird ein {{domxref("LaunchParams")}}-Objekt übergeben, das eine {{domxref("LaunchParams/files", "files")}}-Eigenschaft enthält, die ein Array von {{domxref("FileSystemHandle")}}-Objekten bereitstellt, von denen jedes eine der vom Benutzer geöffneten Dateien repräsentiert.

Beispielsweise liest der folgende Code die Dateien und weist deren Inhalte den {{HTMLElement("img")}}-Elementen zu, die er der Seite hinzufügt:

```js
const imageContainer = document.querySelector("#container");

if ("launchQueue" in window) {
  launchQueue.setConsumer(async (launchParams) => {
    for (const file of launchParams.files) {
      const img = document.createElement("img");
      img.src = URL.createObjectURL(await file.getFile());
      imageContainer.appendChild(img);
    }
  });
}
```

Beachten Sie, dass der Code prüft, ob `launchQueue` existiert, bevor er es verwendet, um sicherzustellen, dass die App sich in Browsern, die die API nicht unterstützen, angemessen verhält.

## Siehe auch

- [`file_handlers`](/de/docs/Web/Manifest/file_handlers) Manifestmitglied
- {{domxref("LaunchQueue")}} Schnittstelle
- [Dateisystem-API](/de/docs/Web/API/File_System_API)
- [Datei-API](/de/docs/Web/API/File_API)
- [Installierte Webanwendungen als Datei-Handler verwenden](https://developer.chrome.com/docs/capabilities/web-apis/file-handling) auf developer.chrome.com (2022)
- [Dateien in Progressive Web Apps verarbeiten](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/handle-files) auf learn.microsoft.com (2023)
