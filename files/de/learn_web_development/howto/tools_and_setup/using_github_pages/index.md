---
title: Wie verwende ich GitHub Pages?
slug: Learn_web_development/Howto/Tools_and_setup/Using_GitHub_pages
l10n:
  sourceCommit: e3a2272d272f21ea38e5fff9bd6ccec2d0dfb1a8
---

[GitHub](https://github.com/) ist eine „Social-Coding“-Website. Sie ermöglicht Ihnen, Code-Repositories zur Speicherung im **Versionskontrollsystem** [Git](https://git-scm.com/) hochzuladen. Anschließend können Sie an Code-Projekten zusammenarbeiten. Das System ist standardmäßig Open Source, was bedeutet, dass jede Person weltweit Ihren GitHub-Code finden, verwenden, daraus lernen und ihn verbessern kann. Das können Sie auch mit dem Code anderer Personen tun! Dieser Artikel bietet einen grundlegenden Leitfaden zum Veröffentlichen von Inhalten mit der gh-pages-Funktion von GitHub.

## Inhalte veröffentlichen

GitHub ist eine sehr wichtige und nützliche Community, an der Sie sich beteiligen können, und Git/GitHub ist ein sehr beliebtes [Versionskontrollsystem](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) — die meisten Technologieunternehmen verwenden es inzwischen in ihren Arbeitsabläufen. GitHub bietet eine sehr nützliche Funktion namens [GitHub Pages](https://pages.github.com/), mit der Sie Website-Code live im Web veröffentlichen können.

### Grundlegende GitHub-Einrichtung

1. Installieren Sie zunächst [Git](https://git-scm.com/downloads/) auf Ihrem Computer. Dies ist die zugrunde liegende Versionskontrollsoftware, auf der GitHub basiert.
2. Registrieren Sie sich anschließend für [ein GitHub-Konto](https://github.com/signup). Das ist einfach und unkompliziert.
3. Sobald Sie sich registriert haben, melden Sie sich mit Ihrem Benutzernamen und Passwort bei [github.com](https://github.com/) an.

### Ihren Code für das Hochladen vorbereiten

Sie können beliebigen Code in einem GitHub-Repository speichern. Um die Funktion GitHub Pages jedoch optimal zu nutzen, sollte Ihr Code wie eine typische Website strukturiert sein, wobei beispielsweise der primäre Einstiegspunkt eine HTML-Datei namens `index.html` ist.

Bevor Sie fortfahren, müssen Sie außerdem Ihr Code-Verzeichnis als Git-Repository initialisieren. Gehen Sie dazu wie folgt vor:

1. Navigieren Sie in der Befehlszeile zu Ihrem `test-site`-Verzeichnis (oder wie auch immer Sie das Verzeichnis genannt haben, das Ihre Website enthält). Verwenden Sie hierfür den Befehl `cd` (d.h. „**c**hange **d**irectory“). So würden Sie ihn eingeben, wenn Sie Ihre Website auf Ihrem Desktop in einem Verzeichnis namens `test-site` abgelegt haben:

   ```bash
   cd Desktop/test-site
   ```

2. Wenn die Befehlszeile auf Ihr Website-Verzeichnis zeigt, geben Sie den folgenden Befehl ein. Dieser weist das Werkzeug `git` an, das Verzeichnis in ein Git-Repository umzuwandeln:

   ```bash
   git init
   ```

#### Ein Hinweis zu Befehlszeilenschnittstellen

Der beste Weg, Ihren Code auf GitHub hochzuladen, ist über die Befehlszeile — ein Fenster, in dem Sie Befehle eingeben, um beispielsweise Dateien zu erstellen und Programme auszuführen, anstatt in einer Benutzeroberfläche zu klicken. Es sieht ungefähr so aus:

![Geöffnetes Terminal/Eingabeaufforderung. Es wurde kein Befehl eingegeben.](command-line.png)

> [!NOTE]
> Sie können auch eine [grafische Git-Benutzeroberfläche](https://git-scm.com/downloads/guis) verwenden, um dieselbe Arbeit zu erledigen, falls Sie sich mit der Befehlszeile unwohl fühlen.

Jedes Betriebssystem verfügt über ein Befehlszeilenwerkzeug:

- **Windows**: Auf die **Eingabeaufforderung** können Sie zugreifen, indem Sie die Windows-Taste drücken, _Eingabeaufforderung_ eingeben und sie aus der angezeigten Liste auswählen. Beachten Sie, dass Windows eigene Befehlskonventionen hat, die sich von Linux und macOS unterscheiden. Daher können die folgenden Befehle auf Ihrem Computer abweichen.
- **macOS**: **Terminal** finden Sie unter _Programme > Dienstprogramme_.
- **Linux**: Normalerweise können Sie ein Terminal mit _Strg + Alt + T_ öffnen. Falls das nicht funktioniert, suchen Sie nach **Terminal** in einer App-Leiste oder einem Menü.

Das mag zunächst etwas beängstigend wirken, aber keine Sorge — Sie werden die Grundlagen schnell verstehen. Sie weisen den Computer im Terminal an, etwas zu tun, indem Sie einen Befehl eingeben und die Eingabetaste drücken, wie oben dargestellt.

### Ein Repository für Ihren Code erstellen

1. Als Nächstes müssen Sie ein neues Repository erstellen, in dem Ihre Dateien abgelegt werden. Klicken Sie oben rechts auf der GitHub-Startseite auf Plus (+) und wählen Sie anschließend _New Repository_ aus.
2. Geben Sie auf dieser Seite im Feld _Repository name_ einen Namen für Ihr Code-Repository ein, zum Beispiel _my-repository_.
3. Fügen Sie außerdem eine Beschreibung hinzu, die angibt, was Ihr Repository enthalten soll. Ihr Bildschirm sollte etwa so aussehen:
   ![Seite zum Erstellen eines neuen Repositorys im Browser geöffnet; die Eingabefelder für Repository-Inhaber und Repository-Name sowie das optionale Beschreibungsfeld sind ausgefüllt. Das Kontrollkästchen für öffentlich ist ausgewählt, das für privat nicht; Gleiches gilt für die Option, dieses Repository mit einer README zu initialisieren.](create-new-repo.png)
4. Klicken Sie auf _Create repository_. Dadurch sollten Sie auf die folgende Seite gelangen:
   ![Die Repository-Seite ist im Browser geöffnet. Unter der GitHub-Kopfzeile mit Suchleiste und Navigationslinks zu Pull Requests, Issues und Gist des Repositorys befinden sich neben den Navigationslinks eine Benachrichtigungsglocke und ein Link zu Ihrem Konto. Darunter steht der Name des Repository-Inhabers, gefolgt von einem Schrägstrich und dem Namen des Repositorys. Unter einer horizontalen Navigationsleiste mit verschiedenen Tabs für Ihr Repository ist der Tab für den Code ausgewählt und zeigt eine Dokumentation dazu an, wie ein Repository erstellt oder über die Befehlszeile hochgeladen wird.](github-repo.png)

### Ihre Dateien auf GitHub hochladen

1. Auf der aktuellen Seite interessiert Sie der Abschnitt _…or push an existing repository from the command line_. In diesem Abschnitt sollten zwei Codezeilen aufgeführt sein. Kopieren Sie die gesamte erste Zeile, fügen Sie sie in die Befehlszeile ein und drücken Sie die Eingabetaste. Der Befehl sollte ungefähr so aussehen:

   ```bash
   git remote add origin https://github.com/chrisdavidmills/my-repository.git
   ```

2. Geben Sie anschließend die folgenden zwei Befehle ein und drücken Sie nach jedem die Eingabetaste. Diese bereiten den Code für das Hochladen auf GitHub vor und weisen Git an, diese Dateien zu verwalten.

   ```bash
   git add --all
   git commit -m 'adding my files to my repository'
   ```

3. Laden Sie schließlich den Code auf GitHub hoch, indem Sie auf der aktuellen GitHub-Webseite den zweiten der beiden Befehle aus dem Abschnitt _…or push an existing repository from the command line_ aufrufen und ihn in das Terminal eingeben:

   ```bash
   git push -u origin main
   ```

4. Jetzt müssen Sie GitHub Pages für Ihr Repository aktivieren. Wählen Sie dazu auf der Startseite Ihres Repositorys _Settings_ und anschließend in der linken Seitenleiste _Pages_. Wählen Sie unter _Source_ den Branch „main“ aus. Die Seite sollte aktualisiert werden.
5. Rufen Sie erneut den Abschnitt GitHub Pages auf. Dort sollte eine Zeile der Form „Your site is ready to be published at `https://xxxxxx`.“ angezeigt werden.
6. Wenn Sie auf diese URL klicken, sollten Sie zu einer Live-Version Ihres Beispiels gelangen, sofern die Startseite `index.html` heißt — standardmäßig wird dieser Einstiegspunkt aufgerufen. Falls der Einstiegspunkt Ihrer Website anders heißt, beispielsweise `myPage.html`, müssen Sie `https://xxxxxx/myPage.html` aufrufen.

### Weiterführendes GitHub-Wissen

Wenn Sie weitere Änderungen an Ihrer Test-Website vornehmen und diese auf GitHub hochladen möchten, müssen Sie die Änderung wie zuvor an Ihren Dateien vornehmen. Anschließend müssen Sie die folgenden Befehle eingeben und nach jedem die Eingabetaste drücken, um diese Änderungen auf GitHub hochzuladen:

```bash
git add --all
git commit -m 'another commit'
git push
```

Sie können _another commit_ durch eine passendere Nachricht ersetzen, die beschreibt, welche Änderung Sie gerade vorgenommen haben.

Wir haben Git nur oberflächlich behandelt. Weitere Informationen finden Sie auf unserer Seite [Git und GitHub](/de/docs/Learn_web_development/Core/Version_control).
