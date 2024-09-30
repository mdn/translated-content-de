---
title: Wie man PWAs installierbar macht
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers", "Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

{{PWASidebar}}

Im letzten Schritt dieses Tutorials haben wir erfahren, wie die Beispielanwendung, [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/), dank ihres [Service Workers](/de/docs/Web/API/Service_Worker_API) offline funktioniert. Aber wir können noch weiter gehen und den Nutzern erlauben, die Web-App auf ihrem Gerät zu installieren. Die installierte Web-App kann dann von den Nutzern gestartet werden, als ob es sich um eine native App des Betriebssystems handeln würde. Dieser Artikel erklärt, wie das mithilfe des Manifests der Web-App erreicht wird.

Das Web-App-Manifest ermöglicht es, die App direkt vom Startbildschirm, der Taskleiste oder dem Dock des Geräts zu starten, ohne dass der Nutzer den Browser öffnen und zur Seite navigieren muss, indem er ein Lesezeichen verwendet oder die URL eingibt. Ihre Web-App kann neben nativen Anwendungen platziert werden, was den Zugang für die Nutzer erleichtert. Zusätzlich können Sie spezifizieren, dass die App im Vollbild- oder Standalone-Modus gestartet werden soll, wodurch die standardmäßige Browser-Benutzeroberfläche entfernt wird und ein noch nahtloseres und nativeres Gefühl entsteht.

Weitere Informationen finden Sie unter [Making PWAs installable](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

## Anforderungen

Um unsere Beispielanwendung installierbar zu machen, sind folgende Dinge erforderlich:

- Ein Web-Anwendungsmanifest mit den [korrekt ausgefüllten Mitgliedern](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest).
- Die Website muss von einer sicheren (HTTPS) Domain bereitgestellt werden.
- Ein Icon, um die App auf dem Gerät darzustellen.

### Die Web-App-Manifest-Datei

Das Schlüsselelement ist eine Web-Anwendungsmanifestdatei, die alle Informationen über die Website im JSON-Format auflistet.

Sie befindet sich normalerweise im Stammverzeichnis einer Web-App. Sie enthält nützliche Informationen wie den Titel der App, Pfade zu unterschiedlich großen Icons, die zur Darstellung der App auf einem Betriebssystem verwendet werden können (z.B. ein Icon auf dem Startbildschirm, ein Eintrag im Startmenü oder ein Icon auf dem Desktop) und eine Hintergrundfarbe, die in Lade- oder Begrüßungsbildschirmen verwendet wird. Diese Informationen sind erforderlich, damit der Browser die Web-App während des Installationsprozesses sowie innerhalb der App-Starte-Benutzeroberfläche des Geräts, wie dem Startbildschirm eines mobilen Geräts, richtig präsentiert.

Die Datei `js13kpwa.webmanifest` der [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) Web-App wird im {{HTMLElement("head")}}-Block der `index.html`-Datei mit der folgenden Codezeile eingebunden:

```html
<link rel="manifest" href="js13kpwa.webmanifest" />
```

> [!NOTE]
> Viele verwenden `manifest.json` für Web-App-Manifeste, da die Inhalte in einer JSON-Struktur organisiert sind. Allerdings wird das `.webmanifest`-Dateiformat ausdrücklich in der [W3C-Manifest-Spezifikation](https://w3c.github.io/manifest/) erwähnt, darum verwenden wir hier dieses Format.

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

Die meisten Mitglieder sind selbsterklärend. Hier ist eine Beschreibung der im obigen Code-Beispiel gezeigten Mitglieder:

- `name`: Der volle Name Ihrer Web-App.
- `short_name`: Kurzer Name, der auf dem Startbildschirm angezeigt wird.
- `description`: Ein oder zwei Sätze, die erklären, was Ihre App macht.
- `icons`: Informationen über die App-Icons — Quell-URLs, Größen und Typen. Stellen Sie sicher, dass Sie mindestens einige einschließen, damit ein Icon ausgewählt werden kann, das am besten zum Gerät des Nutzers passt. Siehe [Define your app icons](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons).
- `start_url`: Das zu startende Dokument, wenn die App gestartet wird.
- `display`: Wie die App angezeigt wird; kann `fullscreen`, `standalone`, `minimal-ui` oder `browser` sein.
- `theme_color`: Eine Hauptfarbe für die Benutzeroberfläche, die vom Betriebssystem verwendet wird.
- `background_color`: Eine Farbe, die während der Installation und auf dem Begrüßungsbildschirm als Standardhintergrund der App verwendet wird.

Es gibt noch mehr Mitglieder, die Sie verwenden können als die oben aufgeführten — sehen Sie sich das [Web-App-Manifest-Referenz](/de/docs/Web/Manifest) für Details an.

## Installation der PWA

Mit den Informationen aus unserem Web-App-Manifest können unterstützende Browser dem Nutzer ein Installationsaufforderung anzeigen. Wenn der Nutzer die PWA besucht, kann er aufgefordert werden, sie auf seinem Gerät zu installieren. Sobald er die Aufforderung akzeptiert, wird die PWA installiert, ähnlich wie andere native Betriebssystem-Apps, und der Nutzer kann die Web-App wie gewohnt starten und verwenden.

Um mehr darüber zu erfahren, wie Nutzer PWAs installieren können, sehen Sie sich die [Installing and uninstalling web apps](/de/docs/Web/Progressive_web_apps/Guides/Installing) an.

### Begrüßungsbildschirm

Auf bestimmten Geräten wird auch ein Begrüßungsbildschirm aus den Informationen im Manifest generiert, der angezeigt wird, wenn die PWA gestartet wird und während sie geladen wird.

![Screenshot des Begrüßungsbildschirms der App auf einem Mobiltelefon. Es ist eine völlig rote Seite mit dem Applikationslogo in der Mitte und dem Namen darunter: "js13kGames Progressive Web App"](js13kpwa-splash.png)

Das Icon sowie die Themen- und Hintergrundfarben werden verwendet, um diesen Bildschirm zu erstellen.

## Zusammenfassung

In diesem Artikel haben wir erfahren, wie wir PWAs mit einem korrekt konfigurierten Web-App-Manifest installierbar machen können und wie der Nutzer anschließend die PWA auf seinen Geräten installieren kann.

Nun gehen wir zum letzten Schritt unseres PWA-Tutorials über: die Nutzung von Push-Benachrichtigungen, um Ankündigungen mit dem Nutzer zu teilen und die Interaktion mit unserer App zu fördern.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers", "Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
