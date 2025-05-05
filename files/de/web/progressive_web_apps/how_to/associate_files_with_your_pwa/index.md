---
title: Dateien mit Ihrer PWA verknüpfen
slug: Web/Progressive_web_apps/How_to/Associate_files_with_your_PWA
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

Auf einem Gerät sind Dateien normalerweise mit Apps verknüpft, sodass beim Öffnen der Datei das Betriebssystem die entsprechende App startet und die Datei an sie übergibt. Zum Beispiel werden HTML-Dateien oft in einem Webbrowser geöffnet, Textdateien in einem Texteditor und Videos in einem Videoplayer.

Progressive Web Apps können an dieser Funktion teilnehmen, sodass wenn der Benutzer Dateien bestimmter Typen anklickt, die PWA gestartet werden kann, um diese zu verarbeiten.

Es gibt zwei Teile zur Unterstützung des Datei-Handling:

- Deklarieren Sie die Unterstützung bestimmter Dateitypen über das [`file_handlers`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/file_handlers)-Mitglied der Web-App-Manifests.
- Dateien über das [`LaunchQueue`](/de/docs/Web/API/LaunchQueue)-Interface verarbeiten.

> [!NOTE]
> Derzeit ist diese Funktion nur in Chromium-basierten Browsern und nur auf Desktop-Betriebssystemen verfügbar.

## Unterstützung für Dateitypen deklarieren

Um die Unterstützung für bestimmte Dateitypen zu deklarieren, fügen Sie das [`file_handlers`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/file_handlers)-Mitglied in Ihre [Manifestdatei](/de/docs/Web/Progressive_web_apps/Manifest) ein.

Das `file_handlers`-Mitglied ist ein Array von Datei-Handler-Objekten. Jedes Datei-Handler-Objekt hat zwei obligatorische Eigenschaften: `action` und `accept`.

- Die `accept`-Eigenschaft enthält {{Glossary("MIME_Type", "MIME-Typen")}} und zugehörige Dateiendungen für Dateien, die der Handler verarbeiten kann.
- Die `action`-Eigenschaft ist eine URL, zu der die PWA navigiert, wenn der Benutzer die Datei öffnet. Diese Seite muss im Geltungsbereich ("scope") der PWA liegen.

Das untenstehende Beispiel der Manifestdatei enthält ein `file_handlers`-Mitglied mit einem einzelnen Handler, der {{Glossary("JPEG", "JPEG")}}- und {{Glossary("PNG", "PNG")}}-Dateien verarbeiten kann und zur Root-Seite der PWA navigiert, wenn der Benutzer eine dieser Dateien klickt.

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

In der Regel können mehrere Apps Dateien eines bestimmten Typs öffnen, daher stellt das Betriebssystem meist eine Funktion bereit, die es dem Benutzer ermöglicht, auszuwählen, welche App er zum Öffnen einer Datei verwenden möchte, und einen Standard-Handler festzulegen. Zum Beispiel kann der Benutzer auf macOS mit einem Rechtsklick auf eine Datei "Informationen" auswählen und den Standard-Handler im resultierenden Dialogfeld konfigurieren:

![Standard-Handler auf macOS auswählen](macos-get-info-dialog.png)

## Berechtigung anfordern

Das erste Mal, wenn der Browser Ihre PWA startet, um eine oder mehrere Dateien zu verarbeiten, die der Benutzer geöffnet hat, wird der Benutzer gefragt, ob er Ihre PWA dafür verwenden möchte. Zum Beispiel sieht der Chrome-Dialog folgendermaßen aus:

![Chrome-Warnungsdialog zum Starten der PWA zum Verarbeiten einer Datei](macos-chrome-launch-warning.png)

## Dateien verarbeiten

Wenn der Browser Ihre PWA startet und zu der Seite navigiert, die Sie in der `action`-Eigenschaft des `file_handlers`-Manifestmitglieds angegeben haben, müssen Sie Code ausführen, um die Datei zu verarbeiten. Dieser Code läuft auf der Seite, die in der `action`-Eigenschaft spezifiziert wurde.

Das zentrale Interface hierfür ist [`LaunchQueue`](/de/docs/Web/API/LaunchQueue), das als Eigenschaft des globalen [`Window`](/de/docs/Web/API/Window)-Objekts verfügbar ist.

Das `LaunchQueue`-Interface hat eine einzige Methode, [`setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer), die eine Callback-Funktion als Argument übernimmt. Diese wird aufgerufen, wenn der Browser die PWA mit einer oder mehreren zu verarbeitenden Dateien gestartet hat.

Der Callback wird ein [`LaunchParams`](/de/docs/Web/API/LaunchParams)-Objekt übergeben, das eine [`files`](/de/docs/Web/API/LaunchParams/files)-Eigenschaft enthält, in der ein Array von [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)-Objekten enthalten ist, von denen jedes eines der vom Benutzer geöffneten Dateien repräsentiert.

Das folgende Beispiel liest die Dateien ein und weist ihre Inhalte `{{HTMLElement("img")}}`-Elementen zu, die es der Seite hinzufügt:

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

Beachten Sie, dass der Code überprüft, ob `launchQueue` existiert, bevor er es verwendet, um sicherzustellen, dass die App in Browsern, die die API nicht unterstützen, fehlerfrei funktioniert.

## Siehe auch

- [`file_handlers`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/file_handlers)-Manifestmitglied
- [`LaunchQueue`](/de/docs/Web/API/LaunchQueue)-Interface
- [File System API](/de/docs/Web/API/File_System_API)
- [File API](/de/docs/Web/API/File_API)
- [Allow installed web applications to be file handlers](https://developer.chrome.com/docs/capabilities/web-apis/file-handling) auf developer.chrome.com (2022)
- [Dateien in Progressive Web Apps verarbeiten](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/handle-files) auf learn.microsoft.com (2023)
