---
title: Dateien mit Ihrer PWA verknüpfen
slug: Web/Progressive_web_apps/How_to/Associate_files_with_your_PWA
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{PWASidebar}}

Auf einem Gerät sind Dateien in der Regel mit Apps verknüpft, sodass das Betriebssystem beim Öffnen der Datei die entsprechende App startet und die Datei übergibt. Beispielsweise werden HTML-Dateien häufig in einem Webbrowser geöffnet, Textdateien in einem Texteditor und Videos in einem Videoplayer.

Progressive Web Apps können an dieser Funktion teilnehmen, sodass die PWA gestartet werden kann, wenn der Benutzer auf Dateien bestimmter Typen klickt.

Es gibt zwei Teile, um die Unterstützung für Dateiverarbeitung hinzuzufügen:

- Unterstützung für bestimmte Dateitypen deklarieren, indem das [`file_handlers`](/de/docs/Web/Manifest/Reference/file_handlers)-Mitglied im Web-App-Manifest verwendet wird.
- Dateien über die [`LaunchQueue`](/de/docs/Web/API/LaunchQueue)-Schnittstelle verarbeiten.

> [!NOTE]
> Derzeit ist diese Funktion nur in Chromium-basierten Browsern und nur auf Desktop-Betriebssystemen verfügbar.

## Unterstützung für Dateitypen deklarieren

Um die Unterstützung für bestimmte Dateitypen zu deklarieren, fügen Sie das [`file_handlers`](/de/docs/Web/Manifest/Reference/file_handlers)-Mitglied in Ihre [Manifestdatei](/de/docs/Web/Manifest) ein.

Das `file_handlers`-Mitglied ist ein Array von Datei-Handler-Objekten. Jedes Datei-Handler-Objekt hat zwei Pflichtfelder: `action` und `accept`.

- Die Eigenschaft `accept` enthält {{Glossary("MIME_Type", "MIME-Typen")}} und zugehörige Dateierweiterungen für Dateien, die der Handler verarbeiten kann.
- Die Eigenschaft `action` ist eine URL, zu der die PWA navigieren wird, wenn der Benutzer die Datei öffnet. Diese Seite muss im Geltungsbereich der PWA liegen.

Die unten stehende Manifestdatei enthält ein `file_handlers`-Mitglied mit einem einzigen Handler, der {{Glossary("JPEG", "JPEG")}}- und {{Glossary("PNG", "PNG")}}-Dateien verarbeiten kann und bei Klick des Benutzers auf eine dieser Dateien zur Startseite der PWA navigiert.

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

In der Regel können mehrere Apps Dateien eines bestimmten Typs öffnen, sodass das Betriebssystem normalerweise eine Funktion bietet, mit der der Benutzer wählen kann, welche App er zum Öffnen einer Datei verwenden möchte, und einen Standard-Handler festlegen kann. Zum Beispiel kann der Benutzer auf macOS mit der rechten Maustaste auf eine Datei klicken, "Informationen anzeigen" auswählen und den Standard-Handler im resultierenden Dialog konfigurieren:

![Auswahl des Standard-Handlers auf macOS](macos-get-info-dialog.png)

## Zustimmung einholen

Das erste Mal, wenn der Browser Ihre PWA starten soll, um eine oder mehrere vom Benutzer geöffnete Dateien zu verarbeiten, wird der Benutzer gefragt, ob er Ihre PWA zum Öffnen der Dateien verwenden möchte. Beispielsweise sieht der Chrome-Dialog so aus:

![Chrome-Warnungsdialog zum Starten der PWA zur Datei-Verarbeitung](macos-chrome-launch-warning.png)

## Verarbeitung der Dateien

Wenn der Browser Ihre PWA startet und zu der im `action`-Eigenschaft des `file_handlers`-Manifestmitglieds angegebenen Seite navigiert, müssen Sie Code ausführen, um die Datei zu verarbeiten. Dieser Code läuft auf der Seite, die in der `action`-Eigenschaft angegeben ist.

Die zentrale Schnittstelle hier ist [`LaunchQueue`](/de/docs/Web/API/LaunchQueue), die als Eigenschaft des globalen [`Window`](/de/docs/Web/API/Window)-Objekts verfügbar ist.

Die `LaunchQueue`-Schnittstelle hat eine einzige Methode, [`setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer), die eine Callback-Funktion als Argument nimmt. Diese Funktion wird aufgerufen, wenn der Browser die PWA mit einer oder mehreren Dateien zum Verarbeiten gestartet hat.

Das Callback erhält ein [`LaunchParams`](/de/docs/Web/API/LaunchParams)-Objekt, das eine [`files`](/de/docs/Web/API/LaunchParams/files)-Eigenschaft enthält, bestehend aus einem Array von [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)-Objekten, die jeweils eine der vom Benutzer geöffneten Dateien darstellen.

Zum Beispiel liest der unten stehende Code die Dateien und weist deren Inhalte {{HTMLElement("img")}}-Elementen zu, die der Seite hinzugefügt werden:

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

Beachten Sie, dass der Code überprüft, ob `launchQueue` existiert, bevor er verwendet wird, um sicherzustellen, dass die App in Browsern, die die API nicht unterstützen, reibungslos funktioniert.

## Siehe auch

- [`file_handlers`](/de/docs/Web/Manifest/Reference/file_handlers)-Manifestmitglied
- [`LaunchQueue`](/de/docs/Web/API/LaunchQueue)-Schnittstelle
- [File System API](/de/docs/Web/API/File_System_API)
- [File API](/de/docs/Web/API/File_API)
- [Lassen Sie installierte Webanwendungen Dateihandler sein](https://developer.chrome.com/docs/capabilities/web-apis/file-handling) auf developer.chrome.com (2022)
- [Dateien in Progressive Web Apps verarbeiten](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/handle-files) auf learn.microsoft.com (2023)
