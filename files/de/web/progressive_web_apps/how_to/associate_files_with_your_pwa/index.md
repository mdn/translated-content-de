---
title: Dateien mit Ihrer PWA verknüpfen
slug: Web/Progressive_web_apps/How_to/Associate_files_with_your_PWA
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{PWASidebar}}

Auf einem Gerät werden Dateien normalerweise mit Apps verknüpft, sodass das Betriebssystem beim Öffnen einer Datei die entsprechende App startet und dem die Datei übergibt. Zum Beispiel werden HTML-Dateien häufig in einem Webbrowser geöffnet, Textdateien in einem Texteditor und Videos in einem Videoplayer.

Progressive Web Apps können an dieser Funktion teilnehmen, sodass die PWA gestartet werden kann, wenn Benutzer auf Dateien bestimmter Typen klicken, um diese zu bearbeiten.

Es gibt zwei Teile zur Unterstützung der Dateiverarbeitung:

- Erklären Sie die Unterstützung bestimmter Dateitypen mit dem [`file_handlers`](/de/docs/Web/Manifest/file_handlers) Mitglied des Web-App-Manifests.
- Dateien handhaben mit der [`LaunchQueue`](/de/docs/Web/API/LaunchQueue) Schnittstelle.

> [!NOTE]
> Derzeit ist diese Funktion nur in auf Chromium basierenden Browsern und nur auf Desktop-Betriebssystemen verfügbar.

## Unterstützung für Dateitypen deklarieren

Um Unterstützung für bestimmte Dateitypen zu erklären, fügen Sie das [`file_handlers`](/de/docs/Web/Manifest/file_handlers) Mitglied in Ihre [Manifestdatei](/de/docs/Web/Manifest) ein.

Das `file_handlers` Mitglied ist ein Array von Dateihandler-Objekten. Jedes Dateihandler-Objekt hat zwei obligatorische Eigenschaften: `action` und `accept`.

- Die `accept` Eigenschaft enthält [MIME-Typen](/de/docs/Glossary/MIME_Type) und zugehörige Dateierweiterungen für Dateien, die der Handler verarbeiten kann.
- Die `action` Eigenschaft ist eine URL, zu der die PWA navigiert, wenn der Benutzer die Datei öffnet. Diese Seite muss im Geltungsbereich der PWA liegen.

Die folgende Manifestdatei enthält ein `file_handlers` Mitglied mit einem einzelnen Handler, der [JPEG](/de/docs/Glossary/JPEG) und [PNG](/de/docs/Glossary/PNG) Dateien verarbeiten kann und zur Startseite der PWA navigiert, wenn der Benutzer auf eine dieser Dateien klickt.

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

Mit diesem Manifest kann die PWA nach der Installation geöffnet werden, wenn der Benutzer Dateien dieser Typen öffnet.

Normalerweise können mehrere Apps Dateien eines bestimmten Typs öffnen, sodass das Betriebssystem in der Regel eine Funktion bereitstellt, mit der der Benutzer wählen kann, welche App zum Öffnen einer Datei verwendet werden soll, und einen Standard-Handler festlegen kann. Auf macOS kann der Benutzer beispielsweise mit der rechten Maustaste auf eine Datei klicken, "Informationen" auswählen und den Standard-Handler im angezeigten Dialogfeld konfigurieren:

![Auswahl des Standard-Handlers auf macOS](macos-get-info-dialog.png)

## Erlaubnis erfragen

Das erste Mal, wenn der Browser Ihre PWA starten möchte, um eine oder mehrere Dateien zu verarbeiten, die der Benutzer geöffnet hat, wird der Benutzer gefragt, ob er Ihre PWA zum Öffnen verwenden möchte. Beispielsweise sieht der Chrome-Dialog so aus:

![Chrome-Warndialog zum Starten der PWA zur Dateiverarbeitung](macos-chrome-launch-warning.png)

## Dateien bearbeiten

Wenn der Browser Ihre PWA startet und zur Seite navigiert, die Sie in der `action` Eigenschaft des `file_handlers` Manifestmitglieds angegeben haben, müssen Sie Code ausführen, um die Datei zu bearbeiten. Dieser Code wird auf der Seite ausgeführt, die in der `action` Eigenschaft angegeben wurde.

Die Schlüssel-Schnittstelle hier ist [`LaunchQueue`](/de/docs/Web/API/LaunchQueue), die als Eigenschaft des globalen [`Window`](/de/docs/Web/API/Window) Objekts verfügbar ist.

Die `LaunchQueue` Schnittstelle hat eine einzelne Methode, [`setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer), die als Argument eine Callback-Funktion nimmt, welche aufgerufen wird, wenn der Browser die PWA mit einer oder mehreren zu bearbeitenden Dateien gestartet hat.

Der Callback wird ein [`LaunchParams`](/de/docs/Web/API/LaunchParams) Objekt übergeben, das eine [`files`](/de/docs/Web/API/LaunchParams/files) Eigenschaft enthält, die ein Array von [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) Objekten umfasst. Jedes dieser Objekte repräsentiert eine der Dateien, die der Benutzer geöffnet hat.

Das folgende Beispiel liest die Dateien und weist deren Inhalte den {{HTMLElement("img")}} Elementen zu, die es zur Seite hinzufügt:

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

Beachten Sie, dass der Code überprüft, ob `launchQueue` existiert, bevor er verwendet wird, um sicherzustellen, dass die App sich in Browsern, die die API nicht unterstützen, anständig verhält.

## Siehe auch

- [`file_handlers`](/de/docs/Web/Manifest/file_handlers) Manifestmitglied
- [`LaunchQueue`](/de/docs/Web/API/LaunchQueue) Schnittstelle
- [File System API](/de/docs/Web/API/File_System_API)
- [File API](/de/docs/Web/API/File_API)
- [Let installed web applications be file handlers](https://developer.chrome.com/docs/capabilities/web-apis/file-handling) auf developer.chrome.com (2022)
- [Handle files in Progressive Web Apps](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/handle-files) auf learn.microsoft.com (2023)
