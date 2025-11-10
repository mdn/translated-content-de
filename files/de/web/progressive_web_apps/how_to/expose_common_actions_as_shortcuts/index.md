---
title: Gewöhnliche App-Aktionen als Shortcuts bereitstellen
slug: Web/Progressive_web_apps/How_to/Expose_common_actions_as_shortcuts
l10n:
  sourceCommit: 26f9fbee05fb92b584d44fba4359e86796484aa6
---

Viele Betriebssysteme unterstützen das Anzeigen von Shortcut-Menüs oder Jump-Lists, wenn der Benutzer mit der rechten Maustaste auf ein App-Symbol klickt oder es lange drückt. Beispielsweise zeigt Windows beim Rechtsklicken auf ein beliebiges angeheftetes Programm in der Taskleiste eine Liste mit programmspezifischen Aktionen und zuletzt geöffneten Dateien an:

![Die Taskleiste in Windows zeigt mehrere angeheftete Apps. Das Firefox-App-Symbol wurde mit der rechten Maustaste angeklickt, und die Jump-List wird angezeigt, die häufige Tabs und gemeinsame Aufgaben zeigt](./jump-list.png)

Auf Android zeigt das lange Drücken eines App-Symbols ebenfalls eine Liste von allgemeinen App-Aktionen an:

![Der Android-App-Launcher zeigt ein App-Symbol, das lange gedrückt wurde. Das Shortcut-Menü wird angezeigt und zeigt allgemeine Aktionen](./android-shortcuts.png)

[Progressive Web Apps (PWAs)](/de/docs/Web/Progressive_web_apps) können auf Geräten wie plattformnativen Apps installiert werden und können, genau wie ihre nativen Gegenstücke, Shortcut-Menüs definieren, um Benutzern den Zugriff auf allgemeine Aktionen zu ermöglichen.

Shortcuts werden nur durch Rechtsklicken oder langes Drücken des App-Symbols angezeigt, was bedeutet, dass sie nur verfügbar sind, wenn die PWA auf dem Gerät des Benutzers installiert ist. Um zu erfahren, wie Sie Ihre PWA installierbar machen, siehe [PWAs installierbar machen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

## Warum Shortcuts verwenden?

Das Definieren von Shortcuts für Ihre PWA kann die Produktivität der Benutzer steigern, indem es ihnen ermöglicht, die Hauptaktionen Ihrer App direkt vom Startbildschirm aus aufzurufen. Darüber hinaus kann das Definieren von Shortcuts dazu beitragen, dass sich Ihre PWA eher wie eine plattformnative App anfühlt und somit Ihren Benutzern vertrauter wirkt.

## Shortcuts im Web-App-Manifest definieren

Um Shortcuts für Ihre PWA zu definieren, verwenden Sie das [`shortcuts`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/shortcuts)-Element des [Web-App-Manifests](/de/docs/Web/Progressive_web_apps/Manifest). Dieses Element ist ein Array von Objekten, die den Namen und die URL jedes Shortcuts definieren, sowie den optionalen Kurznamen, die Beschreibung und die Symbole. Hier ist beispielsweise das Web-App-Manifest einer Kalender-App, das zwei Shortcuts definiert:

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
  - : Der Name des Shortcuts, der im Shortcut-Menü angezeigt wird. Stellen Sie sicher, dass er kurz, aber auch beschreibend genug ist, damit Benutzer wissen, was der Shortcut bewirkt.
- `url`
  - : Die URL, mit der die PWA gestartet wird, wenn der Benutzer den Shortcut auswählt. Diese URL kann absolut sein, in diesem Fall sollte sie innerhalb des [scope](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) des Web-App-Manifests existieren. Die URL kann auch relativ sein, in diesem Fall wird sie relativ zur [Start-URL](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url) der PWA aufgelöst.

Alle anderen Eigenschaften des Shortcut-Objekts sind optional, aber Sie sollten in Betracht ziehen, sie bereitzustellen, um den Shortcut für Benutzer nützlicher zu machen:

- `short_name`
  - : Ein Kurzname für den Shortcut, der angezeigt wird, wenn nicht genug Platz vorhanden ist, um den vollständigen Namen anzuzeigen.
- `description`
  - : Eine Beschreibung des Shortcuts. Dieser Text kann von unterstützenden Technologien, wie Bildschirmlesegeräten, genutzt werden, um Benutzern zu helfen zu verstehen, was der Shortcut bewirkt.
- `icons`
  - : Ein Array von Bildobjekten, die im Shortcut-Menü angezeigt werden. Jedes Bildobjekt wird genauso verarbeitet wie das [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons)-Element des Web-App-Manifests und kann verwendet werden, um unterschiedlich große Symbole für verschiedene Geräteanforderungen bereitzustellen.

## Siehe auch

- [`shortcuts`-Manifestteil](/de/docs/Web/Progressive_web_apps/Manifest/Reference/shortcuts)
- [Schnell Dinge erledigen mit App-Shortcuts](https://web.dev/articles/app-shortcuts) auf web.dev (2022)
- [App-Shortcuts definieren](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/shortcuts) auf learn.microsoft.com (2023)
