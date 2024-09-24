---
title: Häufige App-Aktionen als Kurzbefehle verfügbar machen
slug: Web/Progressive_web_apps/How_to/Expose_common_actions_as_shortcuts
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{PWASidebar}}

Viele Betriebssysteme unterstützen die Anzeige von Shortcut-Menüs oder Sprunglisten, wenn der Benutzer mit der rechten Maustaste auf ein App-Symbol klickt oder lange darauf drückt. Zum Beispiel wird unter Windows beim Rechtsklick auf ein beliebiges angeheftetes Programm in der Taskleiste eine Liste programmspezifischer Aktionen und zuletzt geöffneter Dateien angezeigt:

![Die Taskleiste in Windows, die mehrere angeheftete Apps zeigt. Auf das Firefox-App-Symbol wurde mit der rechten Maustaste geklickt, und die Sprungliste wird angezeigt, die häufige Tabs und häufige Aufgaben zeigt](./jump-list.png)

Auf Android zeigt ein langes Drücken auf ein App-Symbol ebenfalls eine Liste häufiger App-Aktionen:

![Der Android-App-Launcher zeigt ein App-Symbol, das lange gedrückt wurde. Das Shortcut-Menü wird angezeigt und zeigt häufige Aktionen](./android-shortcuts.png)

[Progressive Web Apps (PWAs)](/de/docs/Web/Progressive_web_apps) können auf Geräten ebenso wie plattformnative Apps installiert werden und können, wie ihre nativen Gegenstücke, auch App-Shortcut-Menüs definieren, um Benutzern den Zugriff auf häufige Aktionen zu ermöglichen.

Shortcuts werden nur durch Rechtsklicken oder langes Drücken auf das App-Symbol angezeigt, das heißt, sie sind nur verfügbar, wenn die PWA auf dem Gerät des Benutzers installiert ist. Um zu erfahren, wie Sie Ihre PWA installierbar machen, lesen Sie den Artikel [Making PWAs installable](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

## Warum Kurzbefehle verwenden?

Durch das Definieren von Kurzbefehlen für Ihre PWA können Benutzer produktiver werden, indem sie die Hauptaktionen Ihrer App direkt von ihrem Startbildschirm aus aufrufen können. Darüber hinaus kann das Definieren von Kurzbefehlen dazu beitragen, dass sich Ihre PWA mehr wie eine plattformnative App anfühlt und daher für Ihre Benutzer vertrauter ist.

## Kurzbefehle im Web-App-Manifest definieren

Um Kurzbefehle für Ihre PWA zu definieren, verwenden Sie das [`shortcuts`](/de/docs/Web/Manifest/shortcuts)-Mitglied des [Web-App-Manifests](/de/docs/Web/Manifest). Dieses Mitglied ist ein Array von Objekten, das den Namen und die URL eines jeden Kurzbefehls sowie den optionalen Kurznamen, die Beschreibung und die Symbole definiert. Hier ist zum Beispiel das Web-App-Manifest einer Kalender-App, das zwei Kurzbefehle definiert:

```json
{
  "name": "Calendar",
  "start_url": "/",
  "display": "standalone",
  "icons": [
    {
      "src": "images/icon-256.png",
      "sizes": "256x256",
      "type": "image/png"
    }
  ],
  "shortcuts": [
    {
      "name": "New event",
      "url": "/new-event"
    },
    {
      "name": "View today's events",
      "url": "/today"
    }
  ]
}
```

Die wichtigsten Eigenschaften jedes Shortcut-Objekts sind:

- `name`
  - : Der Name des Kurzbefehls, der im Shortcut-Menü angezeigt wird. Stellen Sie sicher, dass er kurz, aber auch beschreibend genug ist, damit die Benutzer wissen, was der Shortcut bewirkt.
- `url`
  - : Die URL, um die PWA zu starten, wenn der Benutzer den Shortcut auswählt. Diese URL kann absolut sein, in welchem Fall sie innerhalb des [Scopes](/de/docs/Web/Manifest/scope) des Web-App-Manifests existieren sollte. Die URL kann auch relativ sein, in welchem Fall sie relativ zur [Start-URL](/de/docs/Web/Manifest/start_url) der PWA aufgelöst wird.

Alle anderen Eigenschaften des Shortcut-Objekts sind optional, aber Sie sollten erwägen, sie bereitzustellen, um den Shortcut für die Benutzer nützlicher zu machen:

- `short_name`
  - : Ein kurzer Name für den Shortcut, der angezeigt wird, wenn nicht genug Platz für die vollständige Anzeige des Namens vorhanden ist.
- `description`
  - : Eine Beschreibung des Kurzbefehls. Diese Zeichenfolge kann von unterstützenden Technologien wie Bildschirmlesern aufgerufen werden, um Benutzern zu helfen zu verstehen, was der Shortcut bewirkt.
- `icons`
  - : Ein Array von Bildobjekten, die im Shortcut-Menü angezeigt werden. Jedes Bildobjekt wird wie das [`icons`](/de/docs/Web/Manifest/icons)-Mitglied des Web-App-Manifests verarbeitet und kann verwendet werden, um unterschiedlich große Symbole für unterschiedliche Gerätevoraussetzungen bereitzustellen.

## Siehe auch

- [`shortcuts` Manifestmitglied](/de/docs/Web/Manifest/shortcuts)
- [Get things done quickly with app shortcuts](https://web.dev/articles/app-shortcuts) auf web.dev (2022)
- [Define app shortcuts](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/shortcuts) auf learn.microsoft.com (2023)
