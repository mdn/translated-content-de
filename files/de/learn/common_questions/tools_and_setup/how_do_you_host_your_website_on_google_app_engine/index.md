---
title: Wie hosten Sie Ihre Website auf Google App Engine?
slug: Learn/Common_questions/Tools_and_setup/How_do_you_host_your_website_on_Google_App_Engine
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

[Google App Engine](https://cloud.google.com/appengine/) ist eine leistungsstarke Plattform, mit der Sie Anwendungen auf der Infrastruktur von Google erstellen und ausführen können - sei es, um eine mehrstufige Webanwendung von Grund auf zu entwickeln oder eine statische Website zu hosten. Hier ist ein Schritt-für-Schritt-Leitfaden zum Hosten Ihrer Website auf Google App Engine.

## Erstellen eines Google Cloud Platform-Projekts

Um die Google-Tools für Ihre eigene Seite oder App zu verwenden, müssen Sie ein neues Projekt auf Google Cloud Platform erstellen. Dazu benötigen Sie ein Google-Konto.

1. Gehen Sie zum [App Engine-Dashboard](https://console.cloud.google.com/projectselector/appengine) in der Google Cloud Platform Console und drücken Sie die Schaltfläche _Erstellen_.
2. Wenn Sie noch kein Projekt erstellt haben, müssen Sie wählen, ob Sie E-Mail-Updates erhalten möchten oder nicht, den Nutzungsbedingungen zustimmen und sollten dann fortfahren können.
3. Geben Sie einen Projektnamen ein, bearbeiten Sie Ihre Projekt-ID und notieren Sie diese. Für dieses Tutorial werden die folgenden Werte verwendet:

   - Projektname: _GAE Sample Site_
   - Projekt-ID: _gaesamplesite_

4. Klicken Sie auf die Schaltfläche _Erstellen_, um Ihr Projekt zu erstellen.

## Erstellen einer Anwendung

Jedes Cloud Platform-Projekt kann eine App Engine-Anwendung enthalten. Lassen Sie uns eine App für unser Projekt vorbereiten.

1. Wir benötigen eine Beispielanwendung, die veröffentlicht werden soll. Falls Sie keine zum Verwenden haben, laden Sie diese [Beispiel-App](https://gaesamplesite.appspot.com/downloads.html) herunter und entpacken Sie sie.
2. Schauen Sie sich die Struktur der Beispielanwendung an — der Ordner `website` enthält Ihre Website-Inhalte und `app.yaml` ist Ihre Anwendungskonfigurationsdatei.

   - Ihre Website-Inhalte müssen in den Ordner `website` kommen, und die Startseite muss `index.html` genannt werden. Ansonsten kann sie beliebige Formen annehmen.
   - Die Datei `app.yaml` ist eine Konfigurationsdatei, die App Engine anweist, wie URLs auf Ihre statischen Dateien abzubilden sind. Sie müssen sie nicht bearbeiten.

## Veröffentlichen Ihrer Anwendung

Jetzt, da wir unser Projekt erstellt und die Dateien der Beispiel-App zusammengebracht haben, lassen Sie uns unsere App veröffentlichen.

1. Öffnen Sie [Google Cloud Shell](https://shell.cloud.google.com/).
2. Ziehen Sie den Ordner `sample-app` in das linke Fenster des Code-Editors.
3. Führen Sie das folgende im Befehlszeileninterpreter aus, um Ihr Projekt auszuwählen:

   ```bash
   gcloud config set project gaesamplesite
   ```

4. Führen Sie dann den folgenden Befehl aus, um zum Verzeichnis Ihrer App zu gelangen:

   ```bash
   cd sample-app
   ```

5. Sie sind jetzt bereit, Ihre Anwendung bereitzustellen, d.h. Ihre App auf App Engine hochzuladen:

   ```bash
   gcloud app deploy
   ```

6. Geben Sie eine Zahl ein, um die Region auszuwählen, in der Ihre Anwendung platziert werden soll.
7. Geben Sie `Y` ein, um zu bestätigen.
8. Navigieren Sie nun in Ihrem Browser zu _your-project-id_.appspot.com, um Ihre Website online zu sehen. Zum Beispiel, für die Projekt-ID _gaesamplesite_, gehen Sie zu [_gaesamplesite_.appspot.com](https://gaesamplesite.appspot.com/).

## Siehe auch

Um mehr zu erfahren, sehen Sie sich die [Google App Engine Dokumentation](https://cloud.google.com/appengine/docs/) an.
