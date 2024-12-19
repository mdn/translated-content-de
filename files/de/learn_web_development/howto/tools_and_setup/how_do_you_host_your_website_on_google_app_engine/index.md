---
title: Wie hosten Sie Ihre Webseite auf Google App Engine?
slug: Learn_web_development/Howto/Tools_and_setup/How_do_you_host_your_website_on_Google_App_Engine
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

[Google App Engine](https://cloud.google.com/appengine/) ist eine leistungsfähige Plattform, mit der Sie Anwendungen auf der Infrastruktur von Google erstellen und betreiben können – egal, ob Sie eine mehrschichtige Webanwendung von Grund auf neu entwickeln oder eine statische Webseite hosten möchten. Hier ist ein Schritt-für-Schritt-Leitfaden zum Hosten Ihrer Webseite auf Google App Engine.

## Erstellen eines Google Cloud Platform-Projekts

Um die Tools von Google für Ihre eigene Seite oder App zu nutzen, müssen Sie ein neues Projekt auf der Google Cloud Platform erstellen. Dazu benötigen Sie ein Google-Konto.

1. Gehen Sie zum [App Engine Dashboard](https://console.cloud.google.com/projectselector/appengine) auf der Google Cloud Platform Konsole und drücken Sie die Schaltfläche _Create_.
2. Wenn Sie noch nie ein Projekt erstellt haben, müssen Sie auswählen, ob Sie E-Mail-Updates erhalten möchten oder nicht, den Nutzungsbedingungen zustimmen und dann sollten Sie fortfahren können.
3. Geben Sie einen Namen für das Projekt ein, bearbeiten Sie Ihre Projekt-ID und notieren Sie sie. Für dieses Tutorial werden folgende Werte verwendet:

   - Projektname: _GAE Sample Site_
   - Projekt-ID: _gaesamplesite_

4. Klicken Sie auf die Schaltfläche _Create_, um Ihr Projekt zu erstellen.

## Erstellen einer Anwendung

Jedes Cloud Platform-Projekt kann eine App Engine-Anwendung enthalten. Lassen Sie uns eine App für unser Projekt vorbereiten.

1. Wir benötigen eine Beispielanwendung zum Veröffentlichen. Wenn Sie noch keine haben, laden Sie diese [Beispiel-App](https://gaesamplesite.appspot.com/downloads.html) herunter und entpacken Sie sie.
2. Sehen Sie sich die Struktur der Beispielanwendung an — der `website`-Ordner enthält Ihre Website-Inhalte und `app.yaml` ist Ihre Anwendungskonfigurationsdatei.

   - Ihre Website-Inhalte müssen innerhalb des `website`-Ordners platziert werden, und ihre Startseite muss `index.html` genannt werden, aber abgesehen davon kann sie jede Form annehmen.
   - Die `app.yaml`-Datei ist eine Konfigurationsdatei, die App Engine mitteilt, wie URLs auf Ihre statischen Dateien abgebildet werden. Sie müssen sie nicht bearbeiten.

## Veröffentlichung Ihrer Anwendung

Jetzt, da wir unser Projekt erstellt und die Beispiel-App-Dateien gesammelt haben, lassen Sie uns unsere App veröffentlichen.

1. Öffnen Sie [Google Cloud Shell](https://shell.cloud.google.com/).
2. Ziehen Sie den `sample-app`-Ordner in das linke Fenster des Code-Editors.
3. Führen Sie folgendes im Befehlszeilenfenster aus, um Ihr Projekt auszuwählen:

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

6. Geben Sie eine Nummer ein, um die Region auszuwählen, in der Sie Ihre Anwendung platzieren möchten.
7. Geben Sie `Y` ein, um zu bestätigen.
8. Navigieren Sie nun mit Ihrem Browser zu _your-project-id_.appspot.com, um Ihre Webseite online zu sehen. Zum Beispiel, für die Projekt-ID _gaesamplesite_, gehen Sie zu [_gaesamplesite_.appspot.com](https://gaesamplesite.appspot.com/).

## Siehe auch

Um mehr zu erfahren, siehe [Google App Engine Dokumentation](https://cloud.google.com/appengine/docs/).
