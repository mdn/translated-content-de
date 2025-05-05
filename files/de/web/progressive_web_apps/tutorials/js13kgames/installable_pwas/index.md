---
title: "js13kGames: Wie man PWAs installierbar macht"
short-title: Wie man PWAs installierbar macht
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers", "Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

Im letzten Schritt dieses Tutorials haben wir gelesen, wie die Beispielanwendung [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) offline funktioniert, dank ihres [Service Workers](/de/docs/Web/API/Service_Worker_API), aber wir können noch weiter gehen und den Nutzern ermöglichen, die Web-App auf ihrem Gerät zu installieren. Die installierte Web-App kann dann von den Nutzern gestartet werden, als wäre sie eine native App des OS. Dieser Artikel erklärt, wie dies mithilfe des Manifests der Web-App erreicht wird.

Das Web-App-Manifest ermöglicht es, die App direkt von der Startseite des Geräts, der Taskleiste oder dem Dock zu starten, anstatt dass der Nutzer den Browser öffnen und dann zur Seite navigieren muss, sei es durch Verwendung eines Lesezeichens oder durch Eingeben der URL. Ihre Web-App kann sich neben nativen Anwendungen befinden, was den Zugriff für die Nutzer erleichtert. Darüber hinaus können Sie festlegen, dass die App im Vollbild- oder Standalone-Modus gestartet wird, wodurch die standardmäßige Benutzeroberfläche des Browsers, die sonst vorhanden wäre, entfernt wird und ein noch nahtloseres, nativeres Gefühl entsteht.

Um mehr zu erfahren, sehen Sie [Wie man PWAs installierbar macht](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

## Anforderungen

Um unsere Beispielanwendung installierbar zu machen, werden folgende Dinge benötigt:

- Ein Web-Anwendungsmanifest, mit den [korrekt ausgefüllten Mitgliedern](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest).
- Die Website muss von einer sicheren (HTTPS) Domäne aus bedient werden.
- Ein Symbol zur Darstellung der App auf dem Gerät.

### Die Web-App-Manifest-Datei

Das Schlüsselelement ist eine Manifestdatei der Web-Anwendung, die alle Informationen über die Website im JSON-Format auflistet.

Sie befindet sich normalerweise im Stammordner einer Web-App. Sie enthält nützliche Informationen, wie den Titel der App, Pfade zu unterschiedlich großen Symbolen, die verwendet werden können, um die App auf einem OS zu repräsentieren (wie ein Symbol auf dem Startbildschirm, ein Eintrag im Startmenü oder ein Symbol auf dem Desktop), und eine Hintergrundfarbe für Lade- oder Startbildschirme. Diese Informationen sind notwendig, damit der Browser die Web-App während des Installationsprozesses sowie innerhalb der Startoberfläche des Geräts, wie dem Startbildschirm eines mobilen Geräts, korrekt präsentieren kann.

Die `js13kpwa.webmanifest`-Datei der [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) Web-App ist im {{HTMLElement("head")}} Block der `index.html` Datei mit der folgenden Codezeile enthalten:

```html
<link rel="manifest" href="js13kpwa.webmanifest" />
```

> [!NOTE]
> Viele verwenden `manifest.json` für Web-App-Manifestdateien, da die Inhalte in einer JSON-Struktur organisiert sind. Allerdings wird das `.webmanifest`-Dateiformat ausdrücklich in der [W3C Manifest-Spezifikation](https://w3c.github.io/manifest/) erwähnt, daher werden wir es hier verwenden.

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

Die meisten Mitglieder sind selbsterklärend. Hier ist eine Beschreibung der im vorhergehenden Codebeispiel gezeigten Mitglieder:

- `name`: Der vollständige Name Ihrer Web-App.
- `short_name`: Kurzer Name, der auf dem Startbildschirm angezeigt wird.
- `description`: Ein bis zwei Sätze, die erklären, was Ihre App macht.
- `icons`: Informationen über die App-Symbole — Quell-URLs, Größen und Typen. Stellen Sie sicher, dass Sie mindestens ein paar einschließen, sodass eines ausgewählt wird, das am besten zum Gerät des Benutzers passt. Siehe [Definieren Sie Ihre App-Symbole](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons).
- `start_url`: Das Startdokument, das beim Starten der App geladen wird.
- `display`: Wie die App angezeigt wird; kann `fullscreen`, `standalone`, `minimal-ui` oder `browser` sein.
- `theme_color`: Eine Primärfarbe für die Benutzeroberfläche, die vom Betriebssystem verwendet wird.
- `background_color`: Eine Farbe, die als Standardhintergrund der App verwendet wird, während der Installation und auf dem Startbildschirm.

Es gibt noch mehr Mitglieder, die Sie verwenden können als die oben aufgeführten — stellen Sie sicher, dass Sie das [Web-App-Manifest-Referenz](/de/docs/Web/Progressive_web_apps/Manifest) für Details überprüfen.

## Die PWA installieren

Unter Verwendung der Informationen, die in unserem Web-App-Manifest gefunden werden, können unterstützende Browser dem Benutzer ein Installationsaufforderung anzeigen. Wenn der Benutzer die PWA besucht, kann er aufgefordert werden, sie auf seinem Gerät zu installieren. Wenn er die Aufforderung akzeptiert, wird die PWA wie andere OS-native Apps installiert und der Benutzer kann die Web-App wie gewohnt starten und verwenden.

Um mehr darüber zu erfahren, wie Benutzer PWAs installieren können, siehe [Web-Apps installieren und deinstallieren](/de/docs/Web/Progressive_web_apps/Guides/Installing).

### Startbildschirm

Auf bestimmten Geräten wird auch ein Startbildschirm aus den Informationen im Manifest generiert, der angezeigt wird, wenn die PWA gestartet wird und während sie geladen wird.

![Screenshot des Startbildschirms der App auf einem Mobiltelefon. Es ist eine komplett rote Seite mit dem Anwendungslogo in der Mitte und dem Namen darunter: "js13kGames Progressive Web App"](js13kpwa-splash.png)

Das Symbol sowie die Farb- und Hintergrundfarben werden verwendet, um diesen Bildschirm zu erstellen.

## Zusammenfassung

In diesem Artikel haben wir erfahren, wie wir PWAs mit einem richtig konfigurierten Web-App-Manifest installierbar machen können und wie der Benutzer dann die PWA auf seinen Geräten installieren kann.

Jetzt kommen wir zum letzten Schritt unseres PWA-Tutorials: Push-Benachrichtigungen zu nutzen, um Ankündigungen mit dem Benutzer zu teilen und um dem Benutzer zu helfen, sich erneut mit unserer App zu beschäftigen.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers", "Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
