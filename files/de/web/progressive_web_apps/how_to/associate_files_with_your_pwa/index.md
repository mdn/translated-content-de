---
title: Dateien mit Ihrer PWA verknüpfen
slug: Web/Progressive_web_apps/How_to/Associate_files_with_your_PWA
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{PWASidebar}}

Auf einem Gerät sind Dateien normalerweise mit Apps verknüpft, sodass das Betriebssystem beim Öffnen der Datei die entsprechende App startet und die Datei an diese übergibt. Beispielsweise werden HTML-Dateien häufig in einem Webbrowser geöffnet, Textdateien in einem Texteditor und Videos in einem Videoplayer.

Progressive Web Apps können an dieser Funktion teilnehmen, so dass die PWA gestartet werden kann, um Dateien bestimmter Typen zu bearbeiten, wenn der Benutzer auf diese klickt.

Es gibt zwei Teile, um Unterstützung für die Dateiverarbeitung hinzuzufügen:

- Unterstützen Sie bestimmte Dateitypen, indem Sie das [`file_handlers`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/file_handlers) Web-App-Manifestmitglied deklarieren.
- Bearbeiten Sie Dateien mit der [`LaunchQueue`](/de/docs/Web/API/LaunchQueue)-Schnittstelle.

> [!NOTE]
> Derzeit ist diese Funktion nur in auf Chromium basierenden Browsern verfügbar und nur auf Desktop-Betriebssystemen.

## Unterstützung für Dateitypen deklarieren

Um Unterstützung für bestimmte Dateitypen zu deklarieren, fügen Sie das [`file_handlers`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/file_handlers)-Mitglied in Ihre [Manifestdatei](/de/docs/Web/Progressive_web_apps/Manifest) ein.

Das `file_handlers`-Mitglied ist ein Array von Datei-Handler-Objekten. Jedes Datei-Handler-Objekt hat zwei obligatorische Eigenschaften, `action` und `accept`.

- Die `accept`-Eigenschaft enthält {{Glossary("MIME_Type", "MIME-Typen")}} und zugehörige Dateierweiterungen für Dateien, die der Handler verarbeiten kann.
- Die `action`-Eigenschaft ist eine URL, zu der die PWA navigiert, wenn der Benutzer die Datei öffnet. Diese Seite muss im Geltungsbereich der PWA liegen.

Die folgende Manifestdatei enthält ein `file_handlers`-Mitglied mit einem einzelnen Handler, der {{Glossary("JPEG", "JPEG")}}- und {{Glossary("PNG", "PNG")}}-Dateien verarbeiten kann und zur Startseite der PWA navigiert, wenn der Benutzer auf eine dieser Dateien klickt.

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

Normalerweise können mehr als eine App Dateien eines bestimmten Typs öffnen, daher bietet das Betriebssystem normalerweise eine Funktion, die es dem Benutzer ermöglicht, auszuwählen, welche App zum Öffnen einer Datei verwendet werden soll, und einen Standard-Handler festzulegen. Beispielsweise kann ein Benutzer auf macOS mit der rechten Maustaste auf eine Datei klicken, "Informationen anzeigen" auswählen und den Standard-Handler im resultierenden Dialogfeld konfigurieren:

![Auswählen des Standard-Handlers unter macOS](macos-get-info-dialog.png)

## Erlaubnis erfragen

Das erste Mal, wenn der Browser Ihre PWA startet, um eine oder mehrere vom Benutzer geöffnete Dateien zu bearbeiten, wird der Benutzer aufgefordert zu bestätigen, dass er Ihre PWA zum Öffnen verwenden möchte. Das Dialogfeld in Chrome sieht beispielsweise so aus:

![Chrome-Warnhinweis-Dialogfeld zum Starten der PWA zur Dateiverarbeitung](macos-chrome-launch-warning.png)

## Die Dateien verarbeiten

Wenn der Browser Ihre PWA startet und zur Seite navigiert, die Sie in der `action`-Eigenschaft des `file_handlers` Manifestmitglieds angegeben haben, müssen Sie etwas Code ausführen, um die Datei zu bearbeiten. Dieser Code wird auf der in der `action`-Eigenschaft angegebenen Seite ausgeführt.

Die Hauptschnittstelle hier ist [`LaunchQueue`](/de/docs/Web/API/LaunchQueue), die als Eigenschaft des globalen [`Window`](/de/docs/Web/API/Window)-Objekts verfügbar ist.

Die `LaunchQueue`-Schnittstelle hat eine einzige Methode, [`setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer), die eine Rückruffunktion als Argument annimmt, die aufgerufen wird, wenn der Browser die PWA mit einer oder mehreren Dateien, die es zu verarbeiten gilt, gestartet hat.

Der Rückruf wird mit einem [`LaunchParams`](/de/docs/Web/API/LaunchParams)-Objekt aufgerufen, das eine [`files`](/de/docs/Web/API/LaunchParams/files)-Eigenschaft enthält, welche ein Array von [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)-Objekten enthält. Jedes dieser Objekte stellt eine der Dateien dar, die der Benutzer geöffnet hat.

Zum Beispiel liest der folgende Code die Dateien und weist deren Inhalte den {{HTMLElement("img")}}-Elementen zu, die sie der Seite hinzufügt:

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

- [`file_handlers`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/file_handlers)-Manifestmitglied
- [`LaunchQueue`](/de/docs/Web/API/LaunchQueue)-Schnittstelle
- [File System API](/de/docs/Web/API/File_System_API)
- [File API](/de/docs/Web/API/File_API)
- [Lassen Sie installierte Webanwendungen Dateien verarbeiten](https://developer.chrome.com/docs/capabilities/web-apis/file-handling) auf developer.chrome.com (2022)
- [Dateien in Progressive Web Apps verarbeiten](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/handle-files) auf learn.microsoft.com (2023)
