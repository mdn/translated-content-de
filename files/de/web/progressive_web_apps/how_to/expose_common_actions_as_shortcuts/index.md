---
title: Häufig genutzte App-Aktionen als Shortcuts bereitstellen
slug: Web/Progressive_web_apps/How_to/Expose_common_actions_as_shortcuts
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{PWASidebar}}

Viele Betriebssysteme unterstützen das Anzeigen von Shortcut-Menüs oder Jump-Lists, wenn der Benutzer mit der rechten Maustaste klickt oder ein App-Symbol lange gedrückt hält. Auf Windows zeigt zum Beispiel ein Rechtsklick auf ein beliebiges angeheftetes Programm in der Taskleiste eine Liste programmspezifischer Aktionen und zuletzt geöffneter Dateien:

![Die Taskleiste in Windows, die mehrere angeheftete Apps zeigt. Auf das Firefox-App-Symbol wurde mit der rechten Maustaste geklickt, und die Jump-Liste wird angezeigt, die häufig genutzte Tabs und allgemeine Aufgaben zeigt.](./jump-list.png)

Auf Android zeigt ein langes Drücken eines App-Symbols ebenfalls eine Liste häufiger App-Aktionen:

![Der Android-App-Launcher, der ein App-Symbol zeigt, das lange gedrückt wurde. Das Shortcut-Menü wird angezeigt und zeigt häufige Aktionen.](./android-shortcuts.png)

[Progressive Web Apps (PWAs)](/de/docs/Web/Progressive_web_apps) können wie plattformnative Apps auf Geräten installiert werden und können wie ihre nativen Gegenstücke auch App-Shortcut-Menüs definieren, um Benutzern den Zugriff auf häufige Aktionen zu ermöglichen.

Shortcuts werden nur durch einen Rechtsklick oder ein langes Drücken des App-Symbols angezeigt, das heißt, sie sind nur verfügbar, wenn die PWA auf dem Gerät des Benutzers installiert ist. Um zu erfahren, wie Sie Ihre PWA installierbar machen, siehe [PWAs installierbar machen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

## Warum Shortcuts verwenden?

Das Definieren von Shortcuts für Ihre PWA kann die Produktivität der Benutzer steigern, indem sie die Hauptaktionen Ihrer App direkt von ihrem Startbildschirm aus ausführen können. Darüber hinaus kann das Definieren von Shortcuts dazu beitragen, dass sich Ihre PWA mehr wie eine plattformnative App anfühlt und daher für Ihre Benutzer vertrauter wirkt.

## Shortcuts im Web-App-Manifest definieren

Um Shortcuts für Ihre PWA zu definieren, verwenden Sie das [`shortcuts`](/de/docs/Web/Manifest/shortcuts)-Element des [Web-App-Manifests](/de/docs/Web/Manifest). Dieses Element ist ein Array von Objekten, die den Namen und die URL jedes Shortcuts definieren, sowie den optionalen Kurznamen, die Beschreibung und die Symbole. Hier ist zum Beispiel das Web-App-Manifest einer Kalender-App, die zwei Shortcuts definiert:

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
  - : Der Name des Shortcuts, der im Shortcut-Menü angezeigt wird. Stellen Sie sicher, dass er kurz, aber auch ausreichend beschreibend ist, damit Benutzer wissen, was der Shortcut tut.
- `url`
  - : Die URL, mit der die PWA gestartet wird, wenn der Benutzer den Shortcut auswählt. Diese URL kann absolut sein, in welchem Fall sie innerhalb des [Übereinstimmungsbereichs](/de/docs/Web/Manifest/scope) des Web-App-Manifests liegen sollte. Die URL kann auch relativ sein, in welchem Fall sie relativ zur [Start-URL](/de/docs/Web/Manifest/start_url) der PWA aufgelöst wird.

Alle anderen Eigenschaften des Shortcut-Objekts sind optional, aber Sie sollten in Betracht ziehen, sie bereitzustellen, um den Shortcut für Benutzer nützlicher zu machen:

- `short_name`
  - : Ein kurzer Name für den Shortcut, der angezeigt wird, wenn nicht genug Platz vorhanden ist, um den vollständigen Namen anzuzeigen.
- `description`
  - : Eine Beschreibung des Shortcuts. Diese Zeichenkette kann von unterstützenden Technologien wie Bildschirmleseprogrammen genutzt werden, um Benutzern zu helfen, zu verstehen, was der Shortcut macht.
- `icons`
  - : Ein Array von Bildobjekten, das im Shortcut-Menü angezeigt wird. Jedes Bildobjekt wird genauso verarbeitet wie das [`icons`](/de/docs/Web/Manifest/icons)-Element des Web-App-Manifests und kann verwendet werden, um unterschiedlich große Symbole für unterschiedliche Geräteanforderungen bereitzustellen.

## Siehe auch

- [`shortcuts`-Manifest-Element](/de/docs/Web/Manifest/shortcuts)
- [Get things done quickly with app shortcuts](https://web.dev/articles/app-shortcuts) auf web.dev (2022)
- [Define app shortcuts](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/shortcuts) auf learn.microsoft.com (2023)
