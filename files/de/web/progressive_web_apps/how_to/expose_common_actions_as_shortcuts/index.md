---
title: Häufige App-Aktionen als Kurzbefehle bereitstellen
slug: Web/Progressive_web_apps/How_to/Expose_common_actions_as_shortcuts
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

Viele Betriebssysteme unterstützen das Anzeigen von Kontextmenüs oder Sprunglisten, wenn der Benutzer mit der rechten Maustaste klickt oder ein App-Symbol lange gedrückt hält. Zum Beispiel zeigt ein Rechtsklick auf ein beliebiges angeheftetes Programm in der Taskleiste unter Windows eine Liste programmspezifischer Aktionen und zuletzt geöffneter Dateien:

![Die Taskleiste in Windows mit mehreren angehefteten Apps. Auf das Firefox-App-Symbol wurde mit der rechten Maustaste geklickt und die Sprungliste wird angezeigt, die häufige Tabs und allgemeine Aufgaben zeigt](./jump-list.png)

Unter Android zeigt das lange Drücken eines App-Symbols ebenfalls eine Liste häufiger App-Aktionen:

![Der Android-App-Launcher zeigt ein App-Symbol, das lange gedrückt wurde. Das Kontextmenü wird angezeigt und zeigt häufige Aktionen](./android-shortcuts.png)

[Progressive Web Apps (PWAs)](/de/docs/Web/Progressive_web_apps) können auf Geräten genauso installiert werden wie plattformeigene Apps und können, wie ihre nativen Gegenstücke, auch App-Kurzmenüs definieren, um Benutzern den Zugriff auf häufige Aktionen zu ermöglichen.

Kurzbefehle werden nur angezeigt, wenn man mit der rechten Maustaste auf das App-Symbol klickt oder es lange gedrückt hält, das bedeutet, sie sind nur verfügbar, wenn die PWA auf dem Gerät des Benutzers installiert ist. Um zu erfahren, wie Sie Ihre PWA installierbar machen, siehe [PWAs installierbar machen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

## Warum Kurzbefehle verwenden?

Das Definieren von Kurzbefehlen für Ihre PWA kann Benutzer produktiver machen, indem sie die Hauptaktionen Ihrer App direkt von ihrem Startbildschirm aus zugänglich machen. Zudem kann das Definieren von Kurzbefehlen dazu beitragen, dass sich Ihre PWA mehr wie eine plattformeigene App anfühlt und daher den Benutzern vertrauter erscheint.

## Kurzbefehle im Web-App-Manifest definieren

Um Kurzbefehle für Ihre PWA zu definieren, verwenden Sie das [`shortcuts`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/shortcuts)-Mitglied des [Web-App-Manifests](/de/docs/Web/Progressive_web_apps/Manifest). Dieses Mitglied ist ein Array von Objekten, die den Namen und die URL jedes Kurzbefehls definieren, sowie den optionalen Kurznamen, die Beschreibung und Symbole. Hier ist zum Beispiel das Web-App-Manifest einer Kalender-App, die zwei Kurzbefehle definiert:

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

Die wichtigsten Eigenschaften jedes Kurzbefehlsobjekts sind:

- `name`
  - : Der Name des Kurzbefehls, der im Kontextmenü angezeigt wird. Stellen Sie sicher, dass er kurz, aber auch beschreibend genug ist, damit Benutzer wissen, was der Kurzbefehl macht.
- `url`
  - : Die URL, mit der die PWA gestartet wird, wenn der Benutzer den Kurzbefehl auswählt. Diese URL kann absolut sein, in diesem Fall sollte sie innerhalb des [scope](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) des Web-App-Manifests existieren. Die URL kann auch relativ sein, in diesem Fall wird sie relativ zur [Start-URL](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url) der PWA aufgelöst.

Alle anderen Kurzbefehlsobjekteigenschaften sind optional, aber Sie sollten in Erwägung ziehen, sie bereitzustellen, um den Kurzbefehl für Benutzer nützlicher zu machen:

- `short_name`
  - : Ein kurzer Name für den Kurzbefehl, der angezeigt wird, wenn nicht genug Platz für die vollständige Namensanzeige vorhanden ist.
- `description`
  - : Eine Beschreibung des Kurzbefehls. Dieser Text kann von unterstützenden Technologien, wie Bildschirmlesern, verwendet werden, um Benutzern dabei zu helfen, zu verstehen, was der Kurzbefehl macht.
- `icons`
  - : Ein Array von Bildobjekten, die im Kontextmenü angezeigt werden. Jedes Bildobjekt wird genauso verarbeitet wie das [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons)-Mitglied des Web-App-Manifests und kann verwendet werden, um Icons in verschiedenen Größen für unterschiedliche Geräteanforderungen bereitzustellen.

## Siehe auch

- [`shortcuts`-Manifestmitglied](/de/docs/Web/Progressive_web_apps/Manifest/Reference/shortcuts)
- [Erledigen Sie Aufgaben schnell mit App-Kurzbefehlen](https://web.dev/articles/app-shortcuts) auf web.dev (2022)
- [App-Kurzbefehle definieren](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/shortcuts) auf learn.microsoft.com (2023)
