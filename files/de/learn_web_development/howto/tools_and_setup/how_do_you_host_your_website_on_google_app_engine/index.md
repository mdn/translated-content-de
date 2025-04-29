---
title: Wie hosten Sie Ihre Website auf Google App Engine?
slug: Learn_web_development/Howto/Tools_and_setup/How_do_you_host_your_website_on_Google_App_Engine
l10n:
  sourceCommit: 479ea4c8bff4b900a7968413287c77dde2b0c20f
---

[Google App Engine](https://cloud.google.com/appengine) ist eine leistungsstarke Plattform, die es Ihnen ermöglicht, Anwendungen auf der Infrastruktur von Google zu erstellen und auszuführen – sei es, um eine mehrschichtige Webanwendung von Grund auf neu zu erstellen oder eine statische Website zu hosten. Hier ist ein Schritt-für-Schritt-Leitfaden zum Hosten Ihrer Website auf Google App Engine.

## Erstellen eines Google Cloud Platform-Projekts

Um die Tools von Google für Ihre eigene Website oder App zu nutzen, müssen Sie ein neues Projekt auf der Google Cloud Platform erstellen. Dazu benötigen Sie ein Google-Konto.

1. Gehen Sie zum [App Engine-Dashboard](https://console.cloud.google.com/projectselector/appengine) auf der Google Cloud Platform Console und drücken Sie die Schaltfläche _Erstellen_.
2. Wenn Sie noch nie ein Projekt erstellt haben, müssen Sie auswählen, ob Sie E-Mail-Updates erhalten möchten, den Nutzungsbedingungen zustimmen und dann sollten Sie weitermachen können.
3. Geben Sie einen Namen für das Projekt ein, bearbeiten Sie Ihre Projekt-ID und notieren Sie sie. Für dieses Tutorial werden folgende Werte verwendet:

   - Projektname: _GAE Sample Site_
   - Projekt-ID: _gaesamplesite_

4. Klicken Sie auf die Schaltfläche _Erstellen_, um Ihr Projekt zu erstellen.

## Erstellen einer Anwendung

Jedes Cloud Platform-Projekt kann eine App Engine-Anwendung enthalten. Lassen Sie uns eine App für unser Projekt vorbereiten.

1. Wir benötigen eine Beispielanwendung, die wir veröffentlichen. Falls Sie noch keine haben, laden Sie diese [Beispiel-App](https://gaesamplesite.appspot.com/downloads.html) herunter und entpacken Sie sie.
2. Schauen Sie sich die Struktur der Beispielanwendung an — der Ordner `website` enthält Ihre Website-Inhalte und `app.yaml` ist Ihre Anwendungskonfigurationsdatei.

   - Ihre Website-Inhalte müssen in den `website`-Ordner gehen, und die Einstiegsseite muss `index.html` heißen, abgesehen davon kann sie jede beliebige Form haben.
   - Die `app.yaml`-Datei ist eine Konfigurationsdatei, die App Engine mitteilt, wie URLs auf Ihre statischen Dateien abgebildet werden. Sie müssen sie nicht bearbeiten.

## Veröffentlichen Ihrer Anwendung

Jetzt, da wir unser Projekt erstellt und die Dateien der Beispiel-App zusammengeführt haben, lassen Sie uns unsere App veröffentlichen.

1. Öffnen Sie [Google Cloud Shell](https://shell.cloud.google.com/).
2. Ziehen Sie den Ordner `sample-app` in das linke Fenster des Code-Editors.
3. Führen Sie das Folgende in der Befehlszeile aus, um Ihr Projekt auszuwählen:

   ```bash
   gcloud config set project gaesamplesite
   ```

4. Führen Sie dann den folgenden Befehl aus, um in das Verzeichnis Ihrer App zu wechseln:

   ```bash
   cd sample-app
   ```

5. Sie sind nun bereit, Ihre Anwendung zu deployen, d.h. Ihre App auf App Engine hochzuladen:

   ```bash
   gcloud app deploy
   ```

6. Geben Sie eine Zahl ein, um die Region auszuwählen, in der sich Ihre Anwendung befinden soll.
7. Geben Sie `Y` zur Bestätigung ein.
8. Navigieren Sie jetzt in Ihrem Browser zu _your-project-id_.appspot.com, um Ihre Website online zu sehen. Zum Beispiel für die Projekt-ID _gaesamplesite_, gehen Sie zu [_gaesamplesite_.appspot.com](https://gaesamplesite.appspot.com/).

## Siehe auch

Um mehr zu erfahren, siehe [Google App Engine-Dokumentation](https://cloud.google.com/appengine/docs/).
