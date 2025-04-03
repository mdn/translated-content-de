---
title: Wie hosten Sie Ihre Website auf Google App Engine?
slug: Learn_web_development/Howto/Tools_and_setup/How_do_you_host_your_website_on_Google_App_Engine
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{QuicklinksWithSubPages("/de/docs/Learn_web_development/Howto")}}

[Google App Engine](https://cloud.google.com/appengine) ist eine leistungsstarke Plattform, die es Ihnen ermöglicht, Anwendungen auf der Infrastruktur von Google zu erstellen und auszuführen – ganz gleich, ob Sie eine mehrschichtige Webanwendung von Grund auf neu erstellen oder eine statische Website hosten möchten. Hier ist ein Schritt-für-Schritt-Leitfaden zum Hosten Ihrer Website auf Google App Engine.

## Erstellen eines Projekts auf der Google Cloud Platform

Um die Google-Tools für Ihre eigene Website oder App zu nutzen, müssen Sie ein neues Projekt auf der Google Cloud Platform erstellen. Dazu benötigen Sie ein Google-Konto.

1. Gehen Sie zum [App Engine-Dashboard](https://console.cloud.google.com/projectselector/appengine) in der Google Cloud Platform Console und drücken Sie die Schaltfläche _Create_.
2. Wenn Sie zuvor kein Projekt erstellt haben, müssen Sie angeben, ob Sie E-Mail-Updates erhalten möchten oder nicht, den Nutzungsbedingungen zustimmen und können dann fortfahren.
3. Geben Sie einen Namen für das Projekt ein, bearbeiten Sie Ihre Projekt-ID und notieren Sie diese. Für dieses Tutorial werden die folgenden Werte verwendet:

   - Projektname: _GAE Sample Site_
   - Projekt-ID: _gaesamplesite_

4. Klicken Sie auf die Schaltfläche _Create_, um Ihr Projekt zu erstellen.

## Erstellen einer Anwendung

Jedes Cloud Platform-Projekt kann eine App Engine-Anwendung enthalten. Lassen Sie uns eine App für unser Projekt vorbereiten.

1. Wir benötigen eine Beispielanwendung zum Veröffentlichen. Wenn Sie noch keine Anwendung haben, die Sie verwenden können, laden Sie diese [Beispiel-App](https://gaesamplesite.appspot.com/downloads.html) herunter und entpacken Sie sie.
2. Schauen Sie sich die Struktur der Beispielanwendung an – der `website`-Ordner enthält Ihre Website-Inhalte und `app.yaml` ist Ihre Anwendungs-Konfigurationsdatei.

   - Ihre Website-Inhalte müssen sich im `website`-Ordner befinden und die Startseite muss `index.html` heißen. Davon abgesehen kann sie jede beliebige Form annehmen.
   - Die `app.yaml`-Datei ist eine Konfigurationsdatei, die App Engine mitteilt, wie URLs Ihren statischen Dateien zugeordnet werden. Sie müssen diese nicht bearbeiten.

## Veröffentlichen Ihrer Anwendung

Jetzt, da wir unser Projekt erstellt und die erforderlichen Dateien der Beispiel-App gesammelt haben, lassen Sie uns unsere App veröffentlichen.

1. Öffnen Sie die [Google Cloud Shell](https://shell.cloud.google.com/).
2. Ziehen Sie den `sample-app`-Ordner in das linke Fenster des Code-Editors.
3. Führen Sie das folgende im Kommandozeileninterpreter aus, um Ihr Projekt auszuwählen:

   ```bash
   gcloud config set project gaesamplesite
   ```

4. Führen Sie dann den folgenden Befehl aus, um zum Verzeichnis Ihrer App zu gelangen:

   ```bash
   cd sample-app
   ```

5. Sie sind nun bereit, Ihre Anwendung zu deployen, d.h. Ihre App auf App Engine hochzuladen:

   ```bash
   gcloud app deploy
   ```

6. Geben Sie eine Zahl ein, um die Region auszuwählen, in der sich Ihre Anwendung befinden soll.
7. Geben Sie `Y` ein, um zu bestätigen.
8. Navigieren Sie nun in Ihrem Browser zu _your-project-id_.appspot.com, um Ihre Website online zu sehen. Beispielsweise für die Projekt-ID _gaesamplesite_, gehen Sie zu [_gaesamplesite_.appspot.com](https://gaesamplesite.appspot.com/).

## Siehe auch

Um mehr zu erfahren, siehe [Google App Engine Dokumentation](https://cloud.google.com/appengine/docs/).
