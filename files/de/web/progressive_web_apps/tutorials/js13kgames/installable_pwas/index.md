---
title: So machen Sie PWAs installierbar
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers", "Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

{{PWASidebar}}

Im letzten Schritt dieses Tutorials haben wir erfahren, wie die Beispielanwendung [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) offline funktioniert, dank ihres [Service Workers](/de/docs/Web/API/Service_Worker_API). Aber wir können noch weiter gehen und es Benutzern ermöglichen, die Web-App auf ihrem Gerät zu installieren. Die installierte Web-App kann dann von den Nutzern gestartet werden, als wäre sie eine native App des Betriebssystems. Dieser Artikel erklärt, wie Sie dies mithilfe des Manifests der Web-App erreichen können.

Das Web-App-Manifest ermöglicht es, die App direkt vom Startbildschirm, der Taskleiste oder dem Dock des Geräts zu starten, anstatt dass der Benutzer den Browser öffnen und dann mithilfe eines Lesezeichens oder durch Eingabe der URL zur Seite navigieren muss. Ihre Web-App kann neben nativen Anwendungen platziert werden, wodurch es für Benutzer einfacher wird, darauf zuzugreifen. Außerdem können Sie festlegen, dass die App im Vollbild- oder Standalone-Modus gestartet wird, wodurch die standardmäßige Benutzeroberfläche des Browsers entfernt wird und ein noch nahtloseres und an die native App angenähertes Gefühl entsteht.

Um mehr zu erfahren, siehe [Making PWAs installable](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

## Anforderungen

Um unsere Beispielanwendung installierbar zu machen, sind folgende Dinge erforderlich:

- Ein Web-App-Manifest mit den [korrekt ausgefüllten Elementen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest).
- Die Webseite muss von einer sicheren (HTTPS) Domäne bereitgestellt werden.
- Ein Symbol zur Darstellung der App auf dem Gerät.

### Die Web-App-Manifestdatei

Das Schlüsselelement ist eine Web-App-Manifestdatei, die alle Informationen über die Website in einem JSON-Format auflistet.

Sie befindet sich normalerweise im Stammverzeichnis einer Web-App. Sie enthält nützliche Informationen wie den Titel der App, Pfade zu unterschiedlich großen Symbolen, die verwendet werden können, um die App auf einem Betriebssystem darzustellen (z.B. als Symbol auf dem Startbildschirm, als Eintrag im Startmenü oder als Symbol auf dem Desktop), und eine Hintergrundfarbe, die in Lade- oder Startbildschirmen verwendet wird. Diese Informationen sind notwendig, damit der Browser die Web-App während des Installationsprozesses sowie innerhalb der App-Startoberfläche des Geräts, wie z.B. dem Startbildschirm eines mobilen Geräts, richtig präsentieren kann.

Die Datei `js13kpwa.webmanifest` der [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) Web-App wird im {{HTMLElement("head")}}-Block der `index.html`-Datei mit der folgenden Codezeile eingebunden:

```html
<link rel="manifest" href="js13kpwa.webmanifest" />
```

> [!NOTE]
> Viele verwenden `manifest.json` für Web-App-Manifeste, da die Inhalte in einer JSON-Struktur organisiert sind. Das `.webmanifest`-Dateiformat ist jedoch ausdrücklich in der [W3C Manifest-Spezifikation](https://w3c.github.io/manifest/) erwähnt, daher werden wir dies hier verwenden.

Der Inhalt der Datei sieht folgendermaßen aus:

```json
{
  "name": "js13kGames Progressive Web App",
  "short_name": "js13kPWA",
  "description": "Progressive Web App that lists games submitted to the A-Frame category in the js13kGames 2017 competition.",
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

Die meisten der Elemente sind selbsterklärend. Hier ist eine Beschreibung der in dem vorherigen Codebeispiel gezeigten Elemente:

- `name`: Der vollständige Name Ihrer Web-App.
- `short_name`: Kurzname, der auf dem Startbildschirm angezeigt wird.
- `description`: Ein oder zwei Sätze, die erklären, was Ihre App macht.
- `icons`: Informationen über die App-Symbole — Quell-URLs, Größen und Typen. Stellen Sie sicher, dass Sie mindestens ein paar hinzufügen, sodass das am besten geeignete für das Gerät des Benutzers gewählt wird. Siehe [Definieren Sie Ihre App-Symbole](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons).
- `start_url`: Das Indexdokument, das beim Starten der App geöffnet wird.
- `display`: Wie die App angezeigt wird; kann `fullscreen`, `standalone`, `minimal-ui` oder `browser` sein.
- `theme_color`: Eine Primärfarbe für die Benutzeroberfläche, die vom Betriebssystem verwendet wird.
- `background_color`: Eine Farbe, die als Standardhintergrund der App verwendet wird, während der Installation und auf dem Startbildschirm.

Es gibt sogar noch mehr Elemente, die Sie verwenden können, als die oben aufgeführten — stellen Sie sicher, dass Sie die [Web-App-Manifest-Referenz](/de/docs/Web/Progressive_web_apps/Manifest) für Details überprüfen.

## Installation der PWA

Mithilfe der Informationen, die in unserem Web-App-Manifest enthalten sind, können unterstützende Browser dem Benutzer ein Installationsfenster anzeigen. Wenn der Benutzer die PWA besucht, kann er aufgefordert werden, sie auf seinem Gerät zu installieren. Wenn er das Fenster akzeptiert, wird die PWA wie andere native OS-Apps installiert und der Benutzer kann die Web-App normal starten und verwenden.

Um mehr darüber zu erfahren, wie Benutzer PWAs installieren können, siehe [Installing and uninstalling web apps](/de/docs/Web/Progressive_web_apps/Guides/Installing).

### Startbildschirm

Auf bestimmten Geräten wird ein Startbildschirm aus den Informationen im Manifest generiert, der angezeigt wird, wenn die PWA gestartet und während sie geladen wird.

![Screenshot des Startbildschirms der App auf einem Mobiltelefon. Es ist eine komplett rote Seite mit dem Anwendungslogo in der Mitte und dem Namen darunter: "js13kGames Progressive Web App"](js13kpwa-splash.png)

Das Symbol sowie die Themen- und Hintergrundfarben werden verwendet, um diesen Bildschirm zu erstellen.

## Zusammenfassung

In diesem Artikel haben wir gelernt, wie wir PWAs mit einem richtig konfigurierten Web-App-Manifest installierbar machen können und wie der Benutzer dann die PWA auf seinem Gerät installieren kann.

Nun gehen wir zum letzten Schritt unseres PWA-Tutorials über: die Verwendung von Push-Benachrichtigungen, um Ankündigungen mit dem Benutzer zu teilen und den Benutzer zu ermutigen, sich erneut mit unserer App zu beschäftigen.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers", "Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
