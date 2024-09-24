---
title: Wie hosten Sie Ihre Website auf Google App Engine?
slug: Learn/Common_questions/Tools_and_setup/How_do_you_host_your_website_on_Google_App_Engine
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

[Google App Engine](https://cloud.google.com/appengine/) ist eine leistungsstarke Plattform, die es Ihnen ermöglicht, Anwendungen auf der Infrastruktur von Google zu erstellen und auszuführen – ob Sie eine mehrschichtige Webanwendung von Grund auf neu entwickeln oder eine statische Website hosten möchten. Hier ist eine Schritt-für-Schritt-Anleitung zum Hosten Ihrer Website auf Google App Engine.

## Erstellen eines Projekts auf der Google Cloud Platform

Um die Tools von Google für Ihre eigene Website oder App zu verwenden, müssen Sie ein neues Projekt auf der Google Cloud Platform erstellen. Dazu benötigen Sie ein Google-Konto.

1. Gehen Sie zum [App Engine Dashboard](https://console.cloud.google.com/projectselector/appengine) in der Google Cloud Platform Console und drücken Sie die Schaltfläche _Create_.
2. Wenn Sie zuvor noch kein Projekt erstellt haben, müssen Sie auswählen, ob Sie E-Mail-Updates erhalten möchten oder nicht, den Nutzungsbedingungen zustimmen und dann sollten Sie fortfahren können.
3. Geben Sie einen Namen für das Projekt ein, bearbeiten Sie Ihre Projekt-ID und notieren Sie diese. Für dieses Tutorial werden die folgenden Werte verwendet:

   - Projektname: _GAE Sample Site_
   - Projekt-ID: _gaesamplesite_

4. Klicken Sie auf die Schaltfläche _Create_, um Ihr Projekt zu erstellen.

## Erstellen einer Anwendung

Jedes Cloud Platform-Projekt kann eine App Engine-Anwendung enthalten. Lassen Sie uns eine App für unser Projekt vorbereiten.

1. Wir benötigen eine Musteranwendung zum Veröffentlichen. Wenn Sie keine zur Verfügung haben, laden Sie diese [Muster-App](https://gaesamplesite.appspot.com/downloads.html) herunter und entpacken Sie sie.
2. Werfen Sie einen Blick auf die Struktur der Musteranwendung – der `website`-Ordner enthält Ihren Website-Inhalt und `app.yaml` ist Ihre Anwendungskonfigurationsdatei.

   - Ihr Website-Inhalt muss im `website`-Ordner untergebracht werden, und die Landingpage muss `index.html` heißen, aber abgesehen davon kann sie jede beliebige Form annehmen.
   - Die Datei `app.yaml` ist eine Konfigurationsdatei, die App Engine mitteilt, wie URLs zu Ihren statischen Dateien zugeordnet werden. Sie müssen sie nicht bearbeiten.

## Veröffentlichen Ihrer Anwendung

Da wir nun unser Projekt erstellt und die Dateien der Musteranwendung gesammelt haben, lassen Sie uns unsere App veröffentlichen.

1. Öffnen Sie [Google Cloud Shell](https://shell.cloud.google.com/).
2. Ziehen Sie den Ordner `sample-app` in den linken Bereich des Code-Editors.
3. Führen Sie den folgenden Befehl in der Befehlszeile aus, um Ihr Projekt auszuwählen:

   ```bash
   gcloud config set project gaesamplesite
   ```

4. Führen Sie dann den folgenden Befehl aus, um zu Ihrem App-Verzeichnis zu gehen:

   ```bash
   cd sample-app
   ```

5. Sie sind nun bereit, Ihre Anwendung zu bereitstellen, d.h. Ihre Anwendung auf App Engine hochzuladen:

   ```bash
   gcloud app deploy
   ```

6. Geben Sie eine Zahl ein, um die Region auszuwählen, in der Sie Ihre Anwendung verwalten möchten.
7. Geben Sie `Y` ein, um zu bestätigen.
8. Öffnen Sie nun Ihren Browser und navigieren Sie zu _your-project-id_.appspot.com, um Ihre Website online zu sehen. Zum Beispiel, für die Projekt-ID _gaesamplesite_, gehen Sie zu [_gaesamplesite_.appspot.com](https://gaesamplesite.appspot.com/).

## Siehe auch

Weitere Informationen finden Sie in der [Google App Engine-Dokumentation](https://cloud.google.com/appengine/docs/).
