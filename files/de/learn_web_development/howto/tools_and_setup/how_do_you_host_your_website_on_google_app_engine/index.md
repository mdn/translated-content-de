---
title: Wie hosten Sie Ihre Website mit Google App Engine?
slug: Learn_web_development/Howto/Tools_and_setup/How_do_you_host_your_website_on_Google_App_Engine
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{QuicklinksWithSubPages("/de/docs/Learn_web_development/Howto")}}

[Google App Engine](https://cloud.google.com/appengine) ist eine leistungsstarke Plattform, die es Ihnen ermöglicht, Anwendungen auf Googles Infrastruktur zu erstellen und auszuführen – egal ob Sie eine mehrschichtige Webanwendung von Grund auf neu erstellen oder eine statische Website hosten möchten. Hier ist ein Schritt-für-Schritt-Leitfaden, um Ihre Website auf Google App Engine zu hosten.

## Ein Google Cloud Platform-Projekt erstellen

Um Googles Tools für Ihre eigene Website oder App zu nutzen, müssen Sie ein neues Projekt auf der Google Cloud Platform erstellen. Dazu benötigen Sie ein Google-Konto.

1. Gehen Sie zum [App Engine Dashboard](https://console.cloud.google.com/projectselector/appengine) in der Google Cloud Platform Console und drücken Sie die Schaltfläche _Create_.
2. Wenn Sie noch kein Projekt erstellt haben, müssen Sie auswählen, ob Sie E-Mail-Updates erhalten möchten oder nicht, den Nutzungsbedingungen zustimmen, und dann können Sie fortfahren.
3. Geben Sie einen Namen für das Projekt ein, bearbeiten Sie Ihre Projekt-ID und notieren Sie diese. Für dieses Tutorial werden die folgenden Werte verwendet:

   - Projektname: _GAE Sample Site_
   - Projekt-ID: _gaesamplesite_

4. Klicken Sie auf die Schaltfläche _Create_, um Ihr Projekt zu erstellen.

## Eine Anwendung erstellen

Jedes Cloud Platform-Projekt kann eine App Engine-Anwendung enthalten. Lassen Sie uns eine App für unser Projekt vorbereiten.

1. Wir benötigen eine Beispielanwendung zum Veröffentlichen. Wenn Sie keine haben, laden Sie diese [Beispielanwendung](https://gaesamplesite.appspot.com/downloads.html) herunter und entpacken Sie sie.
2. Sehen Sie sich die Struktur der Beispielanwendung an – der `website`-Ordner enthält den Inhalt Ihrer Website und `app.yaml` ist Ihre Anwendungs-Konfigurationsdatei.

   - Der Inhalt Ihrer Website muss in den `website`-Ordner, und die Startseite muss `index.html` genannt werden. Abgesehen davon kann sie in beliebiger Form vorliegen.
   - Die `app.yaml`-Datei ist eine Konfigurationsdatei, die App Engine mitteilt, wie URLs auf Ihre statischen Dateien abgebildet werden. Sie müssen sie nicht bearbeiten.

## Ihre Anwendung veröffentlichen

Nachdem wir unser Projekt erstellt und die Dateien der Beispiel-App gesammelt haben, veröffentlichen wir nun unsere App.

1. Öffnen Sie [Google Cloud Shell](https://shell.cloud.google.com/).
2. Ziehen Sie den `sample-app`-Ordner in das linke Fenster des Code-Editors.
3. Führen Sie das Folgende in der Befehlszeile aus, um Ihr Projekt auszuwählen:

   ```bash
   gcloud config set project gaesamplesite
   ```

4. Führen Sie dann den folgenden Befehl aus, um zum Verzeichnis Ihrer App zu gelangen:

   ```bash
   cd sample-app
   ```

5. Sie sind nun bereit, Ihre Anwendung zu bereitstellen, d.h. Ihre App in App Engine hochzuladen:

   ```bash
   gcloud app deploy
   ```

6. Geben Sie eine Zahl ein, um die Region auszuwählen, in der sich Ihre Anwendung befinden soll.
7. Geben Sie `Y` ein, um zu bestätigen.
8. Navigieren Sie jetzt mit Ihrem Browser zu _Ihr-Projekt-ID_.appspot.com, um Ihre Website online zu sehen. Für die Projekt-ID _gaesamplesite_ gehen Sie beispielsweise zu [_gaesamplesite_.appspot.com](https://gaesamplesite.appspot.com/).

## Siehe auch

Um mehr zu erfahren, lesen Sie die [Google App Engine-Dokumentation](https://cloud.google.com/appengine/docs/).
