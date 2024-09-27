---
title: Häufige App-Aktionen als Shortcuts bereitstellen
slug: Web/Progressive_web_apps/How_to/Expose_common_actions_as_shortcuts
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{PWASidebar}}

Viele Betriebssysteme unterstützen die Anzeige von Kurzmenüs oder Sprunglisten, wenn der Benutzer mit der rechten Maustaste oder langem Drücken auf ein App-Symbol klickt. Zum Beispiel wird in Windows durch Rechtsklicken auf ein beliebiges angeheftetes Programm in der Taskleiste eine Liste programmspezifischer Aktionen und kürzlich geöffneter Dateien angezeigt:

![Die Taskleiste in Windows zeigt mehrere angeheftete Apps. Das Firefox-App-Symbol wurde mit der rechten Maustaste angeklickt, und die Sprungliste wird angezeigt, die häufige Tabs und allgemeine Aufgaben zeigt](./jump-list.png)

Auf Android zeigt das lange Drücken eines App-Symbols ebenfalls eine Liste häufiger App-Aktionen:

![Der Android App-Launcher zeigt ein App-Symbol, das lange gedrückt wurde. Das Kurzmenü wird angezeigt und zeigt häufige Aktionen](./android-shortcuts.png)

[Progressive Web Apps (PWAs)](/de/docs/Web/Progressive_web_apps) können auf Geräten wie plattform-native Apps installiert werden und können wie ihre nativen Gegenstücke auch App-Kurzmenüs definieren, um Benutzern den Zugriff auf häufige Aktionen zu ermöglichen.

Shortcuts werden nur durch Rechtsklick oder langes Drücken des App-Symbols angezeigt, was bedeutet, dass sie nur verfügbar sind, wenn die PWA auf dem Gerät des Benutzers installiert ist. Um zu erfahren, wie Sie Ihre PWA installierbar machen, siehe [PWAs installierbar machen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

## Warum Shortcuts verwenden?

Das Definieren von Shortcuts für Ihre PWA kann die Produktivität der Benutzer steigern, indem sie die Hauptaktionen Ihrer App direkt von ihrem Startbildschirm aus zugänglich machen. Zusätzlich kann das Definieren von Shortcuts dazu beitragen, dass sich Ihre PWA mehr wie eine plattform-native App anfühlt und somit den Benutzern vertrauter erscheint.

## Shortcuts im Web App Manifest definieren

Um Shortcuts für Ihre PWA zu definieren, verwenden Sie das [`shortcuts`](/de/docs/Web/Manifest/shortcuts)-Element des [Web App Manifest](/de/docs/Web/Manifest). Dieses Element ist ein Array von Objekten, die den Namen und die URL jedes Shortcuts definieren, sowie den optionalen Kurznamen, die Beschreibung und Symbole. Zum Beispiel hier das Web App Manifest einer Kalender-App, die zwei Shortcuts definiert:

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
  - : Der Name des Shortcuts, der im Kurzmenü angezeigt wird. Stellen Sie sicher, dass er kurz, aber auch beschreibend genug ist, damit die Benutzer wissen, was der Shortcut bewirkt.
- `url`
  - : Die URL, mit der die PWA gestartet wird, wenn der Benutzer den Shortcut auswählt. Diese URL kann absolut sein, in diesem Fall sollte sie innerhalb des [Scope](/de/docs/Web/Manifest/scope) des Web App Manifests liegen. Die URL kann auch relativ sein, in diesem Fall wird sie relativ zur [Start URL](/de/docs/Web/Manifest/start_url) der PWA aufgelöst.

Alle anderen Eigenschaften des Shortcut-Objekts sind optional, aber Sie sollten in Betracht ziehen, sie bereitzustellen, um den Shortcut für die Benutzer nützlicher zu machen:

- `short_name`
  - : Ein kurzer Name für den Shortcut, der angezeigt wird, wenn nicht genügend Platz vorhanden ist, um den vollständigen Namen anzuzeigen.
- `description`
  - : Eine Beschreibung des Shortcuts. Dieser Text kann von unterstützenden Technologien, wie Screenreadern, abgerufen werden, um Benutzern zu helfen, zu verstehen, was der Shortcut bewirkt.
- `icons`
  - : Ein Array von Bildobjekten, die im Kurzmenü angezeigt werden. Jedes Bildobjekt wird genauso verarbeitet wie das [`icons`](/de/docs/Web/Manifest/icons)-Element des Web App Manifests und kann verwendet werden, um unterschiedlich große Symbole für unterschiedliche Geräteanforderungen bereitzustellen.

## Siehe auch

- [`shortcuts` Manifest-Element](/de/docs/Web/Manifest/shortcuts)
- [Erledigen Sie Aufgaben schnell mit App-Shortcuts](https://web.dev/articles/app-shortcuts) auf web.dev (2022)
- [App-Shortcuts definieren](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/shortcuts) auf learn.microsoft.com (2023)
