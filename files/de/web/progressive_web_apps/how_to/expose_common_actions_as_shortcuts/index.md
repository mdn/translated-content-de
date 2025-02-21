---
title: Allgemeine App-Aktionen als Shortcuts verfügbar machen
slug: Web/Progressive_web_apps/How_to/Expose_common_actions_as_shortcuts
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{PWASidebar}}

Viele Betriebssysteme unterstützen die Anzeige von Shortcut-Menüs oder Sprunglisten, wenn der Benutzer mit der rechten Maustaste auf ein App-Symbol klickt oder dieses lange drückt. Zum Beispiel wird unter Windows, wenn Sie mit der rechten Maustaste auf ein beliebiges angeheftetes Programm in der Taskleiste klicken, eine Liste programmspezifischer Aktionen und zuletzt geöffneter Dateien angezeigt:

![Die Taskleiste in Windows zeigt mehrere angeheftete Apps. Das Firefox-App-Symbol wurde mit der rechten Maustaste angeklickt, und die Sprungliste wird angezeigt, die häufig verwendete Tabs und allgemeine Aufgaben zeigt](./jump-list.png)

Auf Android zeigt das lange Drücken eines App-Symbols ebenfalls eine Liste allgemeiner App-Aktionen:

![Der App-Launcher von Android zeigt ein App-Symbol, das lange gedrückt wurde. Das Shortcut-Menü wird angezeigt und zeigt allgemeine Aktionen](./android-shortcuts.png)

[Progressive Web Apps (PWAs)](/de/docs/Web/Progressive_web_apps) können auf Geräten installiert werden, genau wie plattform-native Apps. Wie ihre nativen Gegenstücke können sie auch App-Shortcut-Menüs definieren, damit Benutzer auf gängige Aktionen zugreifen können.

Shortcuts werden nur angezeigt, wenn Sie mit der rechten Maustaste oder durch langes Drücken auf das App-Symbol zugreifen, was bedeutet, dass sie erst verfügbar sind, wenn die PWA auf dem Gerät des Benutzers installiert ist. Um zu erfahren, wie Sie Ihre PWA installierbar machen, siehe [PWAs installierbar machen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

## Warum sollten Sie Shortcuts verwenden?

Das Definieren von Shortcuts für Ihre PWA kann Benutzer produktiver machen, indem sie direkt vom Startbildschirm aus auf die Hauptaktionen Ihrer App zugreifen können. Darüber hinaus kann das Definieren von Shortcuts dazu beitragen, dass sich Ihre PWA mehr wie eine plattform-native App anfühlt und damit für Ihre Benutzer vertrauter wirkt.

## Shortcuts im Web App Manifest definieren

Um Shortcuts für Ihre PWA zu definieren, verwenden Sie das [`shortcuts`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/shortcuts)-Mitglied des [Web App Manifests](/de/docs/Web/Progressive_web_apps/Manifest). Dieses Mitglied ist ein Array von Objekten, das den Namen und die URL jedes Shortcuts definiert, sowie optional den Kurznamen, die Beschreibung und die Symbole. Hier ist zum Beispiel das Web App Manifest einer Kalender-App, die zwei Shortcuts definiert:

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
  - : Der Name des Shortcuts, der im Shortcut-Menü angezeigt wird. Stellen Sie sicher, dass er kurz, aber auch beschreibend genug ist, damit Benutzer wissen, was der Shortcut tut.
- `url`
  - : Die URL, mit der die PWA gestartet wird, wenn der Benutzer den Shortcut auswählt. Diese URL kann absolut sein, in diesem Fall sollte sie innerhalb des [scope](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) des Web App Manifests existieren. Die URL kann auch relativ sein, dann wird sie relativ zur [start URL](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url) der PWA aufgelöst.

Alle anderen Eigenschaften des Shortcut-Objekts sind optional, aber Sie sollten erwägen, diese bereitzustellen, um den Shortcut für Benutzer nützlicher zu machen:

- `short_name`
  - : Ein kurzer Name für den Shortcut, der angezeigt wird, wenn nicht genug Platz vorhanden ist, um den vollständigen Namen anzuzeigen.
- `description`
  - : Eine Beschreibung des Shortcuts. Diese Zeichenfolge kann von Hilfstechnologien, wie Bildschirmlesegeräten, abgerufen werden, um Benutzern zu helfen, zu verstehen, was der Shortcut tut.
- `icons`
  - : Ein Array von Bildobjekten, das im Shortcut-Menü angezeigt wird. Jedes Bildobjekt wird genauso verarbeitet wie das [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons)-Mitglied des Web App Manifests, und kann verwendet werden, um unterschiedlich große Symbole für verschiedene Geräteanforderungen bereitzustellen.

## Siehe auch

- [`shortcuts` Manifest-Mitglied](/de/docs/Web/Progressive_web_apps/Manifest/Reference/shortcuts)
- [Erledigen Sie Dinge schnell mit App-Shortcuts](https://web.dev/articles/app-shortcuts) auf web.dev (2022)
- [App-Shortcuts definieren](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/shortcuts) auf learn.microsoft.com (2023)
