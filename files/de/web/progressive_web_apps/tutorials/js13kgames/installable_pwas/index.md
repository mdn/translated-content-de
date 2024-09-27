---
title: Wie man PWAs installierbar macht
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers", "Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

{{PWASidebar}}

Im letzten Schritt dieses Tutorials haben wir gelesen, wie die Beispielanwendung, [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/), dank ihres [Service Workers](/de/docs/Web/API/Service_Worker_API) offline funktioniert, aber wir können noch weiter gehen und den Nutzern erlauben, die Web-App auf ihrem Gerät zu installieren. Die installierte Web-App kann dann von Nutzern gestartet werden, als ob sie eine native Betriebssystem-App wäre. Dieser Artikel erklärt, wie man dies mit dem Manifest der Web-App erreicht.

Das Manifest ermöglicht es, die App direkt vom Startbildschirm, der Taskleiste oder dem Dock des Geräts aus zu starten, ohne dass der Nutzer den Browser öffnen und dann über ein Lesezeichen oder durch Eingabe der URL zur Seite navigieren muss. Ihre Web-App kann neben nativen Anwendungen sitzen, was den Zugriff für Nutzer erleichtert. Darüber hinaus können Sie festlegen, dass die App im Vollbild- oder Standalone-Modus gestartet wird, wodurch die Standard-Browserschnittstelle entfernt wird, die ansonsten vorhanden wäre, was zu einem noch nahtloseren und nativerem Gefühl führt.

Um mehr zu erfahren, siehe [PWAs installierbar machen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

## Anforderungen

Um unsere Beispielanwendung installierbar zu machen, sind folgende Dinge erforderlich:

- Ein Web-App-Manifest mit den [korrekten Mitgliedern ausgefüllt](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest).
- Die Website muss von einer sicheren (HTTPS) Domain bereitgestellt werden.
- Ein Icon zur Darstellung der App auf dem Gerät.

### Die Manifestdatei der Web-App

Das Schlüsselelement ist eine Manifestdatei der Web-App, die alle Informationen über die Website in einem JSON-Format auflistet.

Sie befindet sich normalerweise im Stammordner einer Web-App. Sie enthält nützliche Informationen, wie den Titel der App, Pfade zu unterschiedlich großen Icons, die zur Darstellung der App auf einem Betriebssystem verwendet werden können (z.B. ein Icon auf dem Startbildschirm, ein Eintrag im Startmenü oder ein Icon auf dem Desktop), und eine Hintergrundfarbe für Lade- oder Splash-Bildschirme. Diese Informationen sind notwendig, damit der Browser die Web-App während des Installationsprozesses sowie innerhalb der App-Startoberfläche auf dem Gerät, wie dem Startbildschirm eines mobilen Geräts, korrekt darstellt.

Die Datei `js13kpwa.webmanifest` der [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) Web-App wird im {{HTMLElement("head")}}-Block der `index.html` Datei mit der folgenden Codezeile eingebunden:

```html
<link rel="manifest" href="js13kpwa.webmanifest" />
```

> [!NOTE]
> Viele verwenden `manifest.json` für Web-App-Manifeste, da die Inhalte in einer JSON-Struktur organisiert sind. Das `.webmanifest` Dateiformat wird jedoch in der [W3C-Manifest-Spezifikation](https://w3c.github.io/manifest/) explizit erwähnt, daher verwenden wir es hier.

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

Die meisten Mitglieder sind selbsterklärend. Hier eine Beschreibung der im vorherigen Codebeispiel gezeigten Mitglieder:

- `name`: Der vollständige Name Ihrer Web-App.
- `short_name`: Kurzer Name, der auf dem Startbildschirm angezeigt wird.
- `description`: Ein oder zwei Sätze, die erklären, was Ihre App macht.
- `icons`: Informationen über die App-Icons — Quell-URLs, Größen und Typen. Stellen Sie sicher, dass mindestens einige enthalten sind, damit das am besten geeignete für das Gerät des Nutzers ausgewählt wird. Siehe [App-Icons definieren](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons).
- `start_url`: Das zu startende Dokument beim Start der App.
- `display`: Wie die App angezeigt wird; kann `fullscreen`, `standalone`, `minimal-ui` oder `browser` sein.
- `theme_color`: Eine primäre Farbe für die Benutzeroberfläche, die vom Betriebssystem verwendet wird.
- `background_color`: Eine Farbe, die als Standardhintergrund der App verwendet wird, während der Installation und auf dem Splash-Bildschirm.

Es gibt noch mehr Mitglieder, die Sie verwenden können, als oben aufgelistet sind — stellen Sie sicher, dass Sie die [Web App Manifest Referenz](/de/docs/Web/Manifest) für Details überprüfen.

## Installation der PWA

Mit den im Web-App-Manifest gefundenen Informationen können unterstützende Browser dem Nutzer eine Installationsaufforderung anzeigen. Wenn der Nutzer die PWA besucht, kann er aufgefordert werden, sie auf seinem Gerät zu installieren. Wenn er die Aufforderung annimmt, wird die PWA wie andere OS-native Apps installiert und der Nutzer kann die Web-App normal starten und verwenden.

Um mehr darüber zu erfahren, wie Nutzer PWAs installieren können, siehe [Installation und Deinstallation von Web-Apps](/de/docs/Web/Progressive_web_apps/Guides/Installing).

### Splash-Bildschirm

Auf bestimmten Geräten wird auch ein Splash-Bildschirm aus den Informationen im Manifest generiert, der angezeigt wird, wenn die PWA gestartet wird und während sie geladen wird.

![Screenshot des Splash-Bildschirms der App auf einem Mobiltelefon. Es ist eine komplett rote Seite mit dem Anwendungslogo in der Mitte und ihrem Namen darunter: "js13kGames Progressive Web App"](js13kpwa-splash.png)

Das Icon und die Farben für Thema und Hintergrund werden verwendet, um diesen Bildschirm zu erstellen.

## Zusammenfassung

In diesem Artikel haben wir gelernt, wie wir PWAs mit einem richtig konfigurierten Web-App-Manifest installierbar machen können und wie der Nutzer dann die PWA auf seinen Geräten installieren kann.

Nun gehen wir zum letzten Schritt unseres PWA-Tutorials über: der Verwendung von Push-Benachrichtigungen, um Ankündigungen mit dem Nutzer zu teilen und ihm zu helfen, sich wieder mit unserer App zu beschäftigen.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers", "Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
