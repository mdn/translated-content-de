---
title: Wie hostet man seine Website auf Google App Engine?
slug: Learn_web_development/Howto/Tools_and_setup/How_do_you_host_your_website_on_Google_App_Engine
l10n:
  sourceCommit: 1eae3d383ad47b5e21bf25764d1d35487ea52bb8
---

{{QuicklinksWithSubPages("/de/docs/Learn_web_development/Howto")}}

[Google App Engine](https://cloud.google.com/appengine/) ist eine leistungsstarke Plattform, die es Ihnen ermöglicht, Anwendungen auf der Infrastruktur von Google zu entwickeln und auszuführen – sei es, um eine mehrstufige Webanwendung von Grund auf zu erstellen oder eine statische Website zu hosten. Hier finden Sie einen Schritt-für-Schritt-Leitfaden zum Hosten Ihrer Website auf Google App Engine.

## Erstellen eines Google Cloud Platform-Projekts

Um die Google-Tools für Ihre eigene Website oder App zu nutzen, müssen Sie ein neues Projekt auf der Google Cloud Platform erstellen. Hierfür benötigen Sie ein Google-Konto.

1. Gehen Sie zum [App Engine-Dashboard](https://console.cloud.google.com/projectselector/appengine) auf der Google Cloud Platform Console und drücken Sie die _Erstellen_-Taste.
2. Wenn Sie zuvor kein Projekt erstellt haben, müssen Sie auswählen, ob Sie E-Mail-Updates erhalten möchten oder nicht, den Nutzungsbedingungen zustimmen, und dann sollten Sie fortfahren können.
3. Geben Sie einen Namen für das Projekt ein, bearbeiten Sie Ihre Projekt-ID und notieren Sie diese. Für dieses Tutorial werden die folgenden Werte verwendet:

   - Projektname: _GAE Sample Site_
   - Projekt-ID: _gaesamplesite_

4. Klicken Sie auf die Schaltfläche _Erstellen_, um Ihr Projekt zu erstellen.

## Erstellen einer Anwendung

Jedes Cloud Platform-Projekt kann eine App Engine-Anwendung enthalten. Lassen Sie uns eine App für unser Projekt vorbereiten.

1. Wir benötigen eine Beispielanwendung, um sie zu veröffentlichen. Wenn Sie keine zur Hand haben, laden Sie diese [Beispielanwendung](https://gaesamplesite.appspot.com/downloads.html) herunter und entpacken Sie sie.
2. Werfen Sie einen Blick auf die Struktur der Beispielanwendung — der Ordner `website` enthält Ihre Website-Inhalte und `app.yaml` ist Ihre Anwendungskonfigurationsdatei.

   - Ihre Website-Inhalte müssen im `website`-Ordner sein, und die Startseite muss `index.html` heißen, aber abgesehen davon kann sie jede Form annehmen.
   - Die Datei `app.yaml` ist eine Konfigurationsdatei, die App Engine mitteilt, wie URLs Ihren statischen Dateien zugeordnet werden. Sie müssen sie nicht bearbeiten.

## Veröffentlichen Ihrer Anwendung

Jetzt, da wir unser Projekt erstellt und die Beispiel-App-Dateien gesammelt haben, lassen Sie uns unsere App veröffentlichen.

1. Öffnen Sie [Google Cloud Shell](https://shell.cloud.google.com/).
2. Ziehen Sie den Ordner `sample-app` in das linke Fenster des Code-Editors.
3. Führen Sie das folgende Kommandozeilenkommando aus, um Ihr Projekt auszuwählen:

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
8. Navigieren Sie nun in Ihrem Browser zu _Ihre-Projekt-ID_.appspot.com, um Ihre Website online zu sehen. Zum Beispiel, für die Projekt-ID _gaesamplesite_, gehen Sie zu [_gaesamplesite_.appspot.com](https://gaesamplesite.appspot.com/).

## Siehe auch

Um mehr zu erfahren, sehen Sie sich die [Google App Engine-Dokumentation](https://cloud.google.com/appengine/docs/) an.
