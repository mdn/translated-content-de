---
title: Wie hosten Sie Ihre Website auf Google App Engine?
slug: Learn/Common_questions/Tools_and_setup/How_do_you_host_your_website_on_Google_App_Engine
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

[Google App Engine](https://cloud.google.com/appengine/) ist eine leistungsstarke Plattform, die es Ihnen ermöglicht, Anwendungen auf der Infrastruktur von Google zu erstellen und zu betreiben - sei es, dass Sie eine mehrschichtige Webanwendung von Grund auf erstellen oder eine statische Website hosten. Hier ist ein Schritt-für-Schritt-Leitfaden zum Hosting Ihrer Website auf Google App Engine.

## Erstellen eines Google Cloud Platform-Projekts

Um die Tools von Google für Ihre eigene Website oder App zu nutzen, müssen Sie ein neues Projekt auf der Google Cloud Platform erstellen. Dazu benötigen Sie ein Google-Konto.

1. Gehen Sie zum [App Engine-Dashboard](https://console.cloud.google.com/projectselector/appengine) in der Google Cloud Platform-Konsole und drücken Sie die Schaltfläche _Erstellen_.
2. Wenn Sie noch kein Projekt erstellt haben, müssen Sie auswählen, ob Sie E-Mail-Updates erhalten möchten oder nicht, den Nutzungsbedingungen zustimmen und dann sollten Sie weitermachen können.
3. Geben Sie einen Namen für das Projekt ein, bearbeiten Sie Ihre Projekt-ID und notieren Sie diese. Für dieses Tutorial werden die folgenden Werte verwendet:

   - Projektname: _GAE Sample Site_
   - Projekt-ID: _gaesamplesite_

4. Klicken Sie auf die Schaltfläche _Erstellen_, um Ihr Projekt zu erstellen.

## Erstellen einer Anwendung

Jedes Cloud Platform-Projekt kann eine App Engine-Anwendung enthalten. Bereiten wir eine App für unser Projekt vor.

1. Wir benötigen eine Beispielanwendung, um sie zu veröffentlichen. Wenn Sie noch keine haben, laden Sie diese [Beispiel-App](https://gaesamplesite.appspot.com/downloads.html) herunter und entpacken Sie sie.
2. Werfen Sie einen Blick auf die Struktur der Beispielanwendung — der Ordner `website` enthält Ihren Website-Inhalt und `app.yaml` ist Ihre Anwendungskonfigurationsdatei.

   - Ihr Website-Inhalt muss in den Ordner `website` gehen, und die Einstiegsseite muss `index.html` genannt werden, aber abgesehen davon kann sie jede beliebige Form annehmen.
   - Die `app.yaml`-Datei ist eine Konfigurationsdatei, die App Engine sagt, wie URLs auf Ihre statischen Dateien zuzuordnen sind. Sie müssen sie nicht bearbeiten.

## Veröffentlichen Ihrer Anwendung

Jetzt, da wir unser Projekt erstellt und die Beispiel-App-Dateien zusammengetragen haben, veröffentlichen wir unsere App.

1. Öffnen Sie [Google Cloud Shell](https://shell.cloud.google.com/).
2. Ziehen Sie den Ordner `sample-app` in das linke Feld des Code-Editors.
3. Führen Sie das Folgende in der Befehlszeile aus, um Ihr Projekt auszuwählen:

   ```bash
   gcloud config set project gaesamplesite
   ```

4. Führen Sie dann den folgenden Befehl aus, um zum Verzeichnis Ihrer App zu gelangen:

   ```bash
   cd sample-app
   ```

5. Sie sind nun bereit, Ihre Anwendung bereitzustellen, d.h. Ihre App auf App Engine hochzuladen:

   ```bash
   gcloud app deploy
   ```

6. Geben Sie eine Zahl ein, um die Region auszuwählen, in der Ihre Anwendung platziert werden soll.
7. Geben Sie `Y` ein, um zu bestätigen.
8. Navigieren Sie jetzt in Ihrem Browser zu _your-project-id_.appspot.com, um Ihre Website online zu sehen. Zum Beispiel, für die Projekt-ID _gaesamplesite_, gehen Sie zu [_gaesamplesite_.appspot.com](https://gaesamplesite.appspot.com/).

## Siehe auch

Um mehr zu erfahren, sehen Sie sich die [Google App Engine Dokumentation](https://cloud.google.com/appengine/docs/) an.
