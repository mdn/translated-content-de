---
title: Allgemeine App-Aktionen als Kurzbefehle verfügbar machen
slug: Web/Progressive_web_apps/How_to/Expose_common_actions_as_shortcuts
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{PWASidebar}}

Viele Betriebssysteme unterstützen die Anzeige von Kontextmenüs oder Sprunglisten, wenn der Benutzer mit der rechten Maustaste oder durch langes Drücken auf ein App-Symbol klickt. Beispielsweise wird unter Windows beim Rechtsklicken auf ein beliebiges in der Taskleiste angeheftetes Programm eine Liste programmspezifischer Aktionen und kürzlich geöffneter Dateien angezeigt:

![Die Taskleiste in Windows zeigt mehrere angeheftete Apps. Auf das Firefox-App-Symbol wurde mit der rechten Maustaste geklickt, und die Sprungliste wird angezeigt, die häufige Tabs und allgemeine Aufgaben zeigt](./jump-list.png)

Auf Android zeigt langes Drücken eines App-Symbols ebenfalls eine Liste allgemeiner App-Aktionen:

![Der Android-App-Launcher zeigt ein App-Symbol, das lange gedrückt wurde. Das Kontextmenü wird angezeigt, das allgemeine Aktionen zeigt](./android-shortcuts.png)

[Progressive Web Apps (PWAs)](/de/docs/Web/Progressive_web_apps) können auf Geräten installiert werden, genau wie plattformeigene Apps, und sie können ebenso wie ihre nativen Gegenstücke App-Kurzmenüs definieren, um Benutzern den Zugriff auf allgemeine Aktionen zu ermöglichen.

Kurzbefehle werden nur durch Rechtsklicken oder langes Drücken des App-Symbols angezeigt, was bedeutet, dass sie erst verfügbar sind, wenn die PWA auf dem Gerät des Nutzers installiert ist. Um zu erfahren, wie Sie Ihre PWA installierbar machen, siehe [PWAs installierbar machen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

## Warum Kurzbefehle verwenden?

Das Definieren von Kurzbefehlen für Ihre PWA kann die Produktivität der Benutzer steigern, indem sie direkt von ihrem Startbildschirm auf die Hauptaktionen Ihrer App zugreifen können. Darüber hinaus kann das Definieren von Kurzbefehlen dazu beitragen, dass sich Ihre PWA mehr wie eine plattformnative App anfühlt und daher für Ihre Benutzer vertrauter ist.

## Kurzbefehle im Web-App-Manifest definieren

Um Kurzbefehle für Ihre PWA zu definieren, verwenden Sie das [`shortcuts`](/de/docs/Web/Manifest/Reference/shortcuts)-Mitglied des [Web-App-Manifests](/de/docs/Web/Manifest). Dieses Mitglied ist ein Array von Objekten, die den Namen und die URL jedes Kurzbefehls sowie den optionalen Kurznamen, die Beschreibung und die Symbole definieren. Hier ist zum Beispiel das Web-App-Manifest einer Kalender-App, die zwei Kurzbefehle definiert:

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
  - : Der Name des Kurzbefehls, der im Kurzmenü angezeigt wird. Stellen Sie sicher, dass er kurz, aber auch beschreibend genug ist, damit die Benutzer wissen, was der Kurzbefehl bewirkt.
- `url`
  - : Die URL, um die PWA zu starten, wenn der Benutzer den Kurzbefehl auswählt. Diese URL kann absolut sein, in welchem Fall sie innerhalb des [Geltungsbereichs](/de/docs/Web/Manifest/Reference/scope) des Web-App-Manifests existieren sollte. Die URL kann auch relativ sein, in welchem Fall sie relativ zur [Start-URL](/de/docs/Web/Manifest/Reference/start_url) der PWA aufgelöst wird.

Alle anderen Eigenschaften des Kurzbefehlsobjekts sind optional, aber Sie sollten in Betracht ziehen, sie bereitzustellen, um den Kurzbefehl für die Benutzer nützlicher zu machen:

- `short_name`
  - : Ein Kurzname für den Kurzbefehl, der angezeigt wird, wenn nicht genug Platz vorhanden ist, um den vollständigen Namen anzuzeigen.
- `description`
  - : Eine Beschreibung des Kurzbefehls. Diese Zeichenfolge kann von unterstützenden Technologien, wie z.B. Bildschirmlesegeräten, abgerufen werden, um Benutzern zu helfen zu verstehen, was der Kurzbefehl tut.
- `icons`
  - : Ein Array von Bildobjekten, die im Kurzmenü angezeigt werden. Jedes Bildobjekt wird wie das [`icons`](/de/docs/Web/Manifest/Reference/icons)-Mitglied des Web-App-Manifests verarbeitet und kann verwendet werden, um unterschiedlich große Symbole für unterschiedliche Geräteanforderungen bereitzustellen.

## Siehe auch

- [`shortcuts`-Manifestmitglied](/de/docs/Web/Manifest/Reference/shortcuts)
- [Erledigen Sie Aufgaben schnell mit App-Kurzbefehlen](https://web.dev/articles/app-shortcuts) auf web.dev (2022)
- [App-Kurzbefehle definieren](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/shortcuts) auf learn.microsoft.com (2023)
