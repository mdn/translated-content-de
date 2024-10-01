---
title: Dateien mit Ihrer PWA verknüpfen
slug: Web/Progressive_web_apps/How_to/Associate_files_with_your_PWA
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{PWASidebar}}

Auf einem Gerät werden Dateien normalerweise mit Apps verknüpft, sodass das Betriebssystem beim Öffnen der Datei die entsprechende App startet und die Datei an diese übergibt. Zum Beispiel werden HTML-Dateien häufig in einem Webbrowser geöffnet, Textdateien in einem Texteditor und Videos in einem Videoplayer.

Progressive Web Apps können an dieser Funktion teilnehmen, sodass beim Anklicken von Dateien bestimmter Typen die PWA gestartet werden kann, um diese zu bearbeiten.

Es gibt zwei Schritte, um Unterstützung für das Dateihandling hinzuzufügen:

- Unterstützung für bestimmte Dateitypen mit dem [`file_handlers`](/de/docs/Web/Manifest/file_handlers) Mitglied des Web-App-Manifests deklarieren.
- Dateien mit dem [`LaunchQueue`](/de/docs/Web/API/LaunchQueue) Interface behandeln.

> [!NOTE]
> Derzeit ist diese Funktion nur in Chromium-basierten Browsern verfügbar und nur auf Desktop-Betriebssystemen.

## Unterstützung für Dateitypen deklarieren

Um Unterstützung für bestimmte Dateitypen zu deklarieren, fügen Sie das [`file_handlers`](/de/docs/Web/Manifest/file_handlers) Mitglied in Ihrer [Manifestdatei](/de/docs/Web/Manifest) hinzu.

Das `file_handlers` Mitglied ist ein Array von Datei-Handler-Objekten. Jedes Datei-Handler-Objekt hat zwei Pflichtfelder, `action` und `accept`.

- Das `accept` Feld enthält {{Glossary("MIME_Type", "MIME-Typen")}} und zugehörige Dateierweiterungen für Dateien, die der Handler verarbeiten kann.
- Das `action` Feld ist eine URL, zu der die PWA navigiert, wenn der Benutzer die Datei öffnet. Diese Seite muss im Geltungsbereich der PWA liegen.

Die untenstehende Manifestdatei enthält ein `file_handlers` Mitglied mit einem einzelnen Handler, der {{Glossary("JPEG", "JPEG")}} und {{Glossary("PNG", "PNG")}} Dateien verarbeiten kann und zur Startseite der PWA navigiert, wenn der Benutzer eine dieser Dateien anklickt.

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

In der Regel können mehr als eine App Dateien eines bestimmten Typs öffnen. Daher bietet das Betriebssystem normalerweise eine Funktion, mit der der Benutzer wählen kann, welche App zum Öffnen einer Datei verwendet werden soll, und einen Standard-Handler festlegen kann. Zum Beispiel kann der Benutzer auf macOS mit der rechten Maustaste auf eine Datei klicken, „Informationen“ auswählen und den Standard-Handler im erscheinenden Dialog konfigurieren:

![Auswahl des Standard-Handlers auf macOS](macos-get-info-dialog.png)

## Berechtigung anfragen

Das erste Mal, wenn der Browser Ihre PWA starten möchte, um eine oder mehrere Dateien, die der Benutzer geöffnet hat, zu bearbeiten, wird der Benutzer gebeten zu bestätigen, dass er Ihre PWA zum Öffnen verwenden möchte. Zum Beispiel sieht der Chrome-Dialog so aus:

![Chrome-Warnungsdialog für das Starten der PWA zur Dateibehandlung](macos-chrome-launch-warning.png)

## Dateien behandeln

Wenn der Browser Ihre PWA startet und zur in der `action` Eigenschaft des `file_handlers` Manifestmitglieds angegebenen Seite navigiert, müssen Sie Code ausführen, um die Datei zu behandeln. Dieser Code wird auf der Seite ausgeführt, die in der `action` Eigenschaft angegeben ist.

Das entscheidende Interface hier ist [`LaunchQueue`](/de/docs/Web/API/LaunchQueue), das als Eigenschaft des globalen [`Window`](/de/docs/Web/API/Window) Objekts verfügbar ist.

Das `LaunchQueue` Interface hat eine einzige Methode, [`setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer), die als Argument eine Callback-Funktion benötigt, die aufgerufen wird, wenn der Browser die PWA mit einer oder mehreren zu behandelnden Dateien gestartet hat.

Der Callback wird ein [`LaunchParams`](/de/docs/Web/API/LaunchParams) Objekt übergeben, das eine [`files`](/de/docs/Web/API/LaunchParams/files) Eigenschaft enthält, die ein Array von [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) Objekten darstellt, von denen jedes eine der vom Benutzer geöffneten Dateien repräsentiert.

Zum Beispiel liest der untenstehende Code die Dateien und weist deren Inhalte den {{HTMLElement("img")}} Elementen zu, die er der Seite hinzufügt:

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

Beachten Sie, dass der Code überprüft, ob `launchQueue` existiert, bevor es verwendet wird, um sicherzustellen, dass die App in Browsern, die die API nicht unterstützen, reibungslos funktioniert.

## Siehe auch

- [`file_handlers`](/de/docs/Web/Manifest/file_handlers) Manifestmitglied
- [`LaunchQueue`](/de/docs/Web/API/LaunchQueue) Interface
- [File System API](/de/docs/Web/API/File_System_API)
- [File API](/de/docs/Web/API/File_API)
- [Lassen Sie installierte Webanwendungen Dateihandler sein](https://developer.chrome.com/docs/capabilities/web-apis/file-handling) auf developer.chrome.com (2022)
- [Dateien in Progressive Web Apps handhaben](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/handle-files) auf learn.microsoft.com (2023)
