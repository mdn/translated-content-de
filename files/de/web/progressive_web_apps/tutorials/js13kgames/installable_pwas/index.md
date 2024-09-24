---
title: Wie man PWAs installierbar macht
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers", "Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

{{PWASidebar}}

Im letzten Schritt dieses Tutorials haben wir gelesen, wie die Beispielanwendung [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) offline arbeitet dank ihres [Service Workers](/de/docs/Web/API/Service_Worker_API). Wir können jedoch noch weiter gehen und den Benutzern erlauben, die Web-App auf ihrem Gerät zu installieren. Die installierte Web-App kann dann von Benutzern gestartet werden, als ob sie eine OS-native App wäre. Dieser Artikel erklärt, wie dies mit dem Manifest der Web-App erreicht werden kann.

Das Web-App-Manifest ermöglicht es, die App direkt vom Startbildschirm, der Taskleiste oder dem Dock des Geräts zu starten, anstatt dass der Benutzer den Browser öffnen und dann die Seite durch Setzen eines Lesezeichens oder Eingabe der URL aufsuchen muss. Ihre Web-App kann neben nativen Anwendungen sitzen, was es den Benutzern erleichtert, darauf zuzugreifen. Zusätzlich können Sie angeben, dass die App im Vollbild- oder im Standalone-Modus gestartet wird, wodurch die standardmäßige Browser-Benutzeroberfläche entfernt wird, die ansonsten vorhanden wäre, und ein noch nahtloserer und nativer Anschein entsteht.

Weitere Informationen finden Sie unter [Wie man PWAs installierbar macht](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

## Anforderungen

Um unsere Beispielanwendung installierbar zu machen, sind folgende Dinge erforderlich:

- Ein Web-App-Manifest mit den [korrekten Mitgliedern ausgefüllt](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest).
- Die Website muss von einer sicheren (HTTPS) Domäne bereitgestellt werden.
- Ein Icon zum Repräsentieren der App auf dem Gerät.

### Die Web-App-Manifest-Datei

Das Schlüsselelement ist eine Web-App-Manifest-Datei, die alle Informationen über die Website in einem JSON-Format auflistet.

Üblicherweise befindet sie sich im Stammverzeichnis einer Web-App. Sie enthält nützliche Informationen, wie den Titel der App, Pfade zu unterschiedlich großen Icons, die zur Darstellung der App auf einem Betriebssystem verwendet werden können (z. B. ein Icon auf dem Startbildschirm, ein Eintrag im Startmenü oder ein Icon auf dem Desktop), und eine Hintergrundfarbe für Lade- oder Startbildschirme. Diese Informationen sind erforderlich, damit der Browser die Web-App während des Installationsprozesses sowie innerhalb der Startoberfläche des Geräts, wie dem Startbildschirm eines mobilen Geräts, ordnungsgemäß präsentieren kann.

Die Datei `js13kpwa.webmanifest` der [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) Web-App ist im {{HTMLElement("head")}}-Block der `index.html`-Datei mit folgender Codezeile enthalten:

```html
<link rel="manifest" href="js13kpwa.webmanifest" />
```

> [!NOTE]
> Viele verwenden `manifest.json` für Web-App-Manifeste, da der Inhalt in einem JSON-Format organisiert ist. Das `.webmanifest`-Dateiformat wird jedoch ausdrücklich in der [W3C-Manifest-Spezifikation](https://w3c.github.io/manifest/) erwähnt, daher verwenden wir es hier.

Der Inhalt der Datei sieht wie folgt aus:

```json
{
  "name": "js13kGames Progressive Web App",
  "short_name": "js13kPWA",
  "description": "Progressive Web App, die Spiele auflistet, die zur A-Frame-Kategorie im js13kGames-Wettbewerb 2017 eingereicht wurden.",
  "icons": [
    {
      "src": "icons/icon-32.png",
      "sizes": "32x32",
      "type": "image/png"
    },
    // ...
    {
      "src": "icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": "/pwa-examples/js13kpwa/index.html",
  "display": "fullscreen",
  "theme_color": "#B12A34",
  "background_color": "#B12A34"
}
```

Die meisten Mitglieder sind selbsterklärend. Hier ist eine Beschreibung der im obigen Codebeispiel gezeigten Mitglieder:

- `name`: Der vollständige Name Ihrer Web-App.
- `short_name`: Kurzer Name, der auf dem Startbildschirm angezeigt wird.
- `description`: Ein oder zwei Sätze, die erklären, was Ihre App tut.
- `icons`: Informationen über die App-Icons — Quell-URLs, Größen und Typen. Stellen Sie sicher, dass Sie mindestens einige einschließen, damit das am besten passende für das Gerät des Benutzers ausgewählt wird. Siehe [Definieren Sie Ihre App-Icons](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons).
- `start_url`: Das Index-Dokument, das beim Starten der App geladen werden soll.
- `display`: Wie die App angezeigt wird; kann `fullscreen`, `standalone`, `minimal-ui` oder `browser` sein.
- `theme_color`: Eine Hauptfarbe für die Benutzeroberfläche, die vom Betriebssystem verwendet wird.
- `background_color`: Eine Farbe, die als Standardhintergrund der App verwendet wird, während der Installation und auf dem Startbildschirm.

Es gibt noch mehr Mitglieder, die Sie verwenden können als hier aufgeführt — überprüfen Sie die [Web-App-Manifest-Referenz](/de/docs/Web/Manifest) für Details.

## Installation der PWA

Unter Verwendung der Informationen in unserem Web-App-Manifest können unterstützende Browser dem Benutzer ein Installationsaufforderung-Fenster anzeigen. Wenn der Benutzer die PWA besucht, kann er zur Installation auf seinem Gerät aufgefordert werden. Wenn er die Aufforderung annimmt, wird die PWA wie andere OS-native Apps installiert und der Benutzer kann die Web-App normal starten und verwenden.

Weitere Informationen darüber, wie Benutzer PWAs installieren können, finden Sie unter [Installieren und Deinstallieren von Web-Apps](/de/docs/Web/Progressive_web_apps/Guides/Installing).

### Startbildschirm

Auf bestimmten Geräten wird auch ein Startbildschirm aus den Informationen im Manifest generiert, der angezeigt wird, wenn die PWA gestartet wird und während sie geladen wird.

![Screenshot des Startbildschirms der App auf einem Mobiltelefon. Es ist eine ganz rote Seite mit dem Anwendungslogo in der Mitte und dem Namen darunter: "js13kGames Progressive Web App"](js13kpwa-splash.png)

Das Icon sowie die Themen- und Hintergrundfarbe werden verwendet, um diesen Bildschirm zu erstellen.

## Zusammenfassung

In diesem Artikel haben wir gelernt, wie man PWAs mit einem richtig konfigurierten Web-App-Manifest installierbar machen kann und wie der Benutzer dann die PWA auf seinen Geräten installieren kann.

Nun gehen wir zum letzten Schritt unseres PWA-Tutorials über: die Verwendung von Push-Benachrichtigungen, um Benachrichtigungen mit dem Benutzer zu teilen und den Benutzer zur erneuten Nutzung unserer App zu animieren.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers", "Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
