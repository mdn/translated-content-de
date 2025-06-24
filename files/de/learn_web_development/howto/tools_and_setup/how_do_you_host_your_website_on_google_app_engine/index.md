---
title: Wie hosten Sie Ihre Website auf Google App Engine?
slug: Learn_web_development/Howto/Tools_and_setup/How_do_you_host_your_website_on_Google_App_Engine
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

[Google App Engine](https://cloud.google.com/appengine) ist eine leistungsstarke Plattform, die es Ihnen ermöglicht, Anwendungen auf Googles Infrastruktur zu erstellen und auszuführen – egal, ob Sie eine mehrstufige Webanwendung von Grund auf neu erstellen oder eine statische Website hosten möchten. Hier ist ein Schritt-für-Schritt-Leitfaden zum Hosten Ihrer Website auf Google App Engine.

## Erstellen eines Google Cloud Platform-Projekts

Um die Google-Tools für Ihre eigene Website oder App zu verwenden, müssen Sie ein neues Projekt auf der Google Cloud Platform erstellen. Dazu benötigen Sie ein Google-Konto.

1. Gehen Sie zum [App Engine-Dashboard](https://console.cloud.google.com/projectselector/appengine) in der Google Cloud Platform Console und drücken Sie die Schaltfläche _Create_.
2. Wenn Sie noch nie ein Projekt erstellt haben, müssen Sie auswählen, ob Sie E-Mail-Updates erhalten möchten oder nicht, den Nutzungsbedingungen zustimmen und dann sollten Sie fortfahren können.
3. Geben Sie einen Namen für das Projekt ein, bearbeiten Sie Ihre Projekt-ID und notieren Sie diese. Für dieses Tutorial werden die folgenden Werte verwendet:

   - Projektname: _GAE Sample Site_
   - Projekt-ID: _gaesamplesite_

4. Klicken Sie auf die Schaltfläche _Create_, um Ihr Projekt zu erstellen.

## Erstellen einer Anwendung

Jedes Cloud Platform-Projekt kann eine App Engine-Anwendung enthalten. Bereiten wir eine App für unser Projekt vor.

1. Wir benötigen eine Beispielanwendung zur Veröffentlichung. Wenn Sie keine zur Hand haben, laden Sie diese [Beispiel-App](https://gaesamplesite.appspot.com/downloads.html) herunter und entpacken Sie sie.
2. Schauen Sie sich die Struktur der Beispielanwendung an – der Ordner `website` enthält Ihren Websiteinhalt und `app.yaml` ist Ihre Anwendungskonfigurationsdatei.
   - Ihr Websiteinhalt muss in den Ordner `website` verschoben werden und die Startseite muss `index.html` genannt werden. Abgesehen davon kann sie jede beliebige Form annehmen.
   - Die Datei `app.yaml` ist eine Konfigurationsdatei, die App Engine mitteilt, wie URLs auf Ihre statischen Dateien abgebildet werden. Sie müssen sie nicht bearbeiten.

## Veröffentlichen Ihrer Anwendung

Jetzt, da wir unser Projekt erstellt und die Dateien der Beispiel-App zusammengetragen haben, veröffentlichen wir unsere App.

1. Öffnen Sie [Google Cloud Shell](https://shell.cloud.google.com/).
2. Ziehen Sie den Ordner `sample-app` in den linken Bereich des Code-Editors.
3. Führen Sie Folgendes in der Befehlszeile aus, um Ihr Projekt auszuwählen:

   ```bash
   gcloud config set project gaesamplesite
   ```

4. Führen Sie dann den folgenden Befehl aus, um zu Ihrem App-Verzeichnis zu gelangen:

   ```bash
   cd sample-app
   ```

5. Sie sind nun bereit, Ihre Anwendung bereitzustellen, d.h. Ihre App auf App Engine hochzuladen:

   ```bash
   gcloud app deploy
   ```

6. Geben Sie eine Zahl ein, um die Region auszuwählen, in der Ihre Anwendung bereitgestellt werden soll.
7. Geben Sie `Y` ein, um zu bestätigen.
8. Navigieren Sie nun in Ihrem Browser zu _your-project-id_.appspot.com, um Ihre Website online zu sehen. Für die Projekt-ID _gaesamplesite_ gehen Sie beispielsweise zu [_gaesamplesite_.appspot.com](https://gaesamplesite.appspot.com/).

## Siehe auch

Um mehr zu erfahren, sehen Sie die [Google App Engine-Dokumentation](https://cloud.google.com/appengine/docs/).
