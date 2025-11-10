---
title: Dateien mit Ihrer PWA verknüpfen
slug: Web/Progressive_web_apps/How_to/Associate_files_with_your_PWA
l10n:
  sourceCommit: 26f9fbee05fb92b584d44fba4359e86796484aa6
---

Auf einem Gerät sind Dateien üblicherweise mit Apps verknüpft, sodass das Betriebssystem beim Öffnen einer Datei die entsprechende App startet und die Datei übergibt. Beispielsweise werden HTML-Dateien häufig im Webbrowser geöffnet, Textdateien in einem Texteditor und Videos in einem Videoplayer.

Progressive Web Apps können an dieser Funktion teilnehmen. Wenn der Benutzer auf Dateien bestimmter Typen klickt, kann die PWA gestartet werden, um sie zu verarbeiten.

Es gibt zwei Teile, um die Unterstützung für die Dateiverarbeitung hinzuzufügen:

- Erklären Sie die Unterstützung für bestimmte Dateitypen mithilfe des `file_handlers` Web-App-Manifestmitglieds.
- Verarbeitung von Dateien mit dem `LaunchQueue` Interface.

> [!NOTE]
> Derzeit ist diese Funktion nur in auf Chromium basierenden Browsern und nur auf Desktop-Betriebssystemen verfügbar.

## Unterstützung für Dateitypen erklären

Um die Unterstützung für bestimmte Dateitypen zu erklären, fügen Sie das `file_handlers` Mitglied in Ihrer [Manifestdatei](/de/docs/Web/Progressive_web_apps/Manifest) hinzu.

Das `file_handlers` Mitglied ist ein Array von Dateihandler-Objekten. Jedes Dateihandler-Objekt hat zwei obligatorische Eigenschaften: `action` und `accept`.

- Die `accept` Eigenschaft enthält {{Glossary("MIME_Type", "MIME-Typen")}} und zugehörige Dateierweiterungen für Dateien, die der Handler verarbeiten kann.
- Die `action` Eigenschaft ist eine URL, zu der die PWA navigieren wird, wenn der Benutzer die Datei öffnet. Diese Seite muss sich im Geltungsbereich der PWA befinden.

Die untenstehende Manifestdatei enthält ein `file_handlers` Mitglied mit einem einzelnen Handler, der {{Glossary("JPEG", "JPEG")}}- und {{Glossary("PNG", "PNG")}}-Dateien verarbeiten kann und zur Startseite der PWA navigiert, wenn der Benutzer auf eine dieser Dateien klickt.

```json
{
  "name": "File handling demo",
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

Mit diesem Manifest kann die PWA, sobald sie installiert ist, geöffnet werden, wenn der Benutzer Dateien dieser Typen öffnet.

Normalerweise können mehr als eine App Dateien eines bestimmten Typs öffnen, sodass das Betriebssystem in der Regel eine Funktion bietet, mit der der Benutzer auswählen kann, welche App verwendet werden soll, um eine Datei zu öffnen, und einen Standardhandler festlegen kann. Beispielsweise kann der Benutzer auf macOS mit einem Rechtsklick auf eine Datei "Informationen" auswählen und den Standardhandler im sich öffnenden Dialogfeld konfigurieren:

![Auswahl des Standardhandlers auf macOS](macos-get-info-dialog.png)

## Berechtigung erfragen

Das erste Mal, wenn der Browser Ihre PWA starten möchte, um eine oder mehrere vom Benutzer geöffnete Dateien zu verarbeiten, wird er den Benutzer fragen, ob er Ihre PWA verwenden möchte, um sie zu öffnen. Zum Beispiel sieht der Chrome-Dialog so aus:

![Chrome-Warndialog zum Starten der PWA zur Verarbeitung einer Datei](macos-chrome-launch-warning.png)

## Die Dateien verarbeiten

Wenn der Browser Ihre PWA startet und zu der Seite navigiert, die Sie in der `action` Eigenschaft des `file_handlers` Manifestmitglieds angegeben haben, müssen Sie Code ausführen, um die Datei zu verarbeiten. Dieser Code wird auf der Seite ausgeführt, die in der `action` Eigenschaft angegeben wurde.

Das zentrale Interface hier ist `LaunchQueue`, welches als Eigenschaft des globalen `Window` Objekts verfügbar ist.

Das `LaunchQueue` Interface hat eine einzige Methode, `setConsumer()`, die eine Callback-Funktion als Argument nimmt, die aufgerufen wird, wenn der Browser die PWA mit einer oder mehreren zu verarbeitenden Dateien gestartet hat.

Der Callback wird ein `LaunchParams` Objekt übergeben, das eine `files` Eigenschaft enthält, die ein Array von `FileSystemHandle` Objekten umfasst, von denen jedes eine der vom Benutzer geöffneten Dateien darstellt.

Zum Beispiel liest der untenstehende Code die Dateien und weist deren Inhalte `img` Elementen zu, die zur Seite hinzugefügt werden:

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

Beachten Sie, dass der Code überprüft, ob `launchQueue` existiert, bevor es verwendet wird, um sicherzustellen, dass die App in Browsern, die die API nicht unterstützen, problemlos funktioniert.

## Siehe auch

- `file_handlers` Manifestmitglied
- `LaunchQueue` Interface
- [File System API](/de/docs/Web/API/File_System_API)
- [File API](/de/docs/Web/API/File_API)
- [Let installed web applications be file handlers](https://developer.chrome.com/docs/capabilities/web-apis/file-handling) auf developer.chrome.com (2022)
- [Handle files in Progressive Web Apps](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/handle-files) auf learn.microsoft.com (2023)
