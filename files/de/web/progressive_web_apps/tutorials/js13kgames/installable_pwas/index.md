---
title: Wie man PWAs installierbar macht
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers", "Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

{{PWASidebar}}

Im letzten Schritt dieses Tutorials haben wir gelesen, wie die Beispielanwendung, [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/), dank ihres [Service Workers](/de/docs/Web/API/Service_Worker_API) offline funktioniert. Aber wir können noch einen Schritt weiter gehen und den Nutzern erlauben, die Web-App auf ihrem Gerät zu installieren. Die installierte Web-App kann dann von Nutzern genau wie eine native App des Betriebssystems gestartet werden. Dieser Artikel erklärt, wie Sie dies mit Hilfe des Manifests der Web-App erreichen können.

Das Web-App-Manifest ermöglicht es, die App direkt vom Home-Bildschirm, der Taskleiste oder dem Dock des Geräts aus zu starten, anstatt dass der Nutzer den Browser öffnen und dann über ein Lesezeichen oder die Eingabe der URL zur Seite navigieren muss. Ihre Web-App kann neben nativen Anwendungen platziert werden, was den Zugriff für die Nutzer erleichtert. Außerdem können Sie angeben, dass die App im Vollbild- oder Standalone-Modus gestartet werden soll, wodurch die standardmäßige Benutzeroberfläche des Browsers entfernt wird, die ansonsten vorhanden wäre, was ein noch nahtloseres und nativeres Gefühl schafft.

Um mehr zu erfahren, siehe [PWAs installierbar machen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

## Voraussetzungen

Um unsere Beispielanwendung installierbar zu machen, sind die folgenden Dinge erforderlich:

- Ein Web-App-Manifest mit den [korrekten ausgefüllten Elementen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest).
- Die Website muss von einer sicheren (HTTPS) Domain bereitgestellt werden.
- Ein Icon, das die App auf dem Gerät darstellt.

### Die Web-App-Manifestdatei

Das Schlüsselelement ist eine Web-App-Manifestdatei, die alle Informationen über die Website in einem JSON-Format auflistet.

Sie befindet sich üblicherweise im Stammverzeichnis einer Web-App. Sie enthält nützliche Informationen wie den Titel der App, Pfade zu unterschiedlich großen Icons, die verwendet werden können, um die App im Betriebssystem darzustellen (wie ein Icon auf dem Home-Bildschirm, ein Eintrag im Startmenü oder ein Icon auf dem Desktop) und eine Hintergrundfarbe für Lade- oder Startbildschirme. Diese Informationen sind notwendig, damit der Browser die Web-App während des Installationsprozesses sowie in der App-Startschnittstelle des Geräts, wie dem Home-Bildschirm eines mobilen Geräts, korrekt präsentieren kann.

Die Datei `js13kpwa.webmanifest` der [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) Web-App wird im {{HTMLElement("head")}} Block der `index.html` Datei mit der folgenden Codezeile eingebunden:

```html
<link rel="manifest" href="js13kpwa.webmanifest" />
```

> [!NOTE]
> Viele verwenden `manifest.json` für Web-App-Manifeste, da die Inhalte in einer JSON-Struktur organisiert sind. Allerdings wird das `.webmanifest` Dateiformat ausdrücklich in der [W3C Manifest Spezifikation](https://w3c.github.io/manifest/) erwähnt, daher verwenden wir dies hier.

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
    // …
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

Die meisten der Elemente sind selbsterklärend. Hier ist eine Beschreibung der im vorherigen Codebeispiel angegebenen Elemente:

- `name`: Der vollständige Name Ihrer Web-App.
- `short_name`: Kurzer Name, der auf dem Home-Bildschirm angezeigt werden soll.
- `description`: Ein oder zwei Sätze, die erklären, was Ihre App macht.
- `icons`: Informationen über die App-Icons — Quell-URLs, Größen und Typen. Stellen Sie sicher, dass Sie mindestens einige hinzufügen, damit das am besten passende für das Gerät des Nutzers ausgewählt wird. Siehe [Definieren Sie Ihre App-Icons](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons).
- `start_url`: Das Startdokument, das beim Starten der App geöffnet werden soll.
- `display`: Wie die App angezeigt wird; kann `fullscreen`, `standalone`, `minimal-ui` oder `browser` sein.
- `theme_color`: Eine Primärfarbe für die Benutzeroberfläche, verwendet vom Betriebssystem.
- `background_color`: Eine Farbe, die als Standardhintergrund der App verwendet wird, während der Installation und auf dem Startbildschirm.

Es gibt noch mehr Elemente, die Sie verwenden können als oben aufgeführt — stellen Sie sicher, die [Web-App-Manifestreferenz](/de/docs/Web/Progressive_web_apps/Manifest) für Details zu prüfen.

## Installation der PWA

Unter Verwendung der im Web-App-Manifest enthaltenen Informationen können unterstützende Browser dem Nutzer ein Installations-Prompt anzeigen. Wenn der Nutzer die PWA besucht, kann er aufgefordert werden, sie auf seinem Gerät zu installieren. Wenn er dem Prompt zustimmt, wird die PWA wie andere native OS-Apps installiert, und der Nutzer kann die Web-App normal starten und verwenden.

Um mehr darüber zu erfahren, wie Nutzer PWAs installieren können, lesen Sie [Installieren und Deinstallieren von Web-Apps](/de/docs/Web/Progressive_web_apps/Guides/Installing).

### Startbildschirm

Auf bestimmten Geräten wird aus den Informationen im Manifest ein Startbildschirm generiert, der angezeigt wird, wenn die PWA gestartet wird und während sie geladen wird.

![Screenshot des Startbildschirms der App auf einem Mobiltelefon. Es ist eine komplett rote Seite mit dem Anwendungslogo in der Mitte und dem darunter stehenden Namen: "js13kGames Progressive Web App"](js13kpwa-splash.png)

Das Icon sowie die Themen- und Hintergrundfarben werden verwendet, um diesen Bildschirm zu erstellen.

## Zusammenfassung

In diesem Artikel haben wir gelernt, wie wir PWAs mit einem korrekt konfigurierten Web-App-Manifest installierbar machen können und wie der Nutzer danach die PWA auf seinen Geräten installieren kann.

Nun gehen wir zum letzten Schritt in unserem PWA-Tutorial über: Push-Benachrichtigungen verwenden, um Ankündigungen mit dem Nutzer zu teilen und ihm zu helfen, sich wieder mit unserer App zu beschäftigen.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers", "Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
