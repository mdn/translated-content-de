---
title: Wie verwende ich GitHub Pages?
slug: Learn/Common_questions/Tools_and_setup/Using_GitHub_pages
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

[GitHub](https://github.com/) ist eine "soziale Programmierungs"-Seite. Sie ermöglicht es Ihnen, Code-Repositories zum Speichern im [Git](https://git-scm.com/) **Versionskontrollsystem** hochzuladen. Sie können dann bei Codeprojekten zusammenarbeiten, und das System ist standardmäßig open-source, was bedeutet, dass jeder auf der Welt Ihren GitHub-Code finden, nutzen, daraus lernen und ihn verbessern kann. Das können Sie auch mit dem Code anderer Leute tun! Dieser Artikel bietet einen grundlegenden Leitfaden zum Veröffentlichen von Inhalten mit der gh-pages-Funktion von GitHub.

## Inhalte veröffentlichen

GitHub ist eine sehr wichtige und nützliche Community, bei der es sich lohnt, sich zu engagieren, und Git/GitHub ist ein sehr beliebtes [Versionskontrollsystem](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) — die meisten Technologieunternehmen nutzen es heutzutage in ihrem Workflow. GitHub hat eine sehr nützliche Funktion namens [GitHub Pages](https://pages.github.com/), mit der Sie Website-Code live im Web veröffentlichen können.

### Grundlegende GitHub-Einrichtung

1. Installieren Sie zunächst [Git](https://git-scm.com/downloads) auf Ihrem Rechner. Dies ist die zugrundeliegende Versionskontrollsystem-Software, auf der GitHub aufbaut.
2. Registrieren Sie sich als nächstes für ein [GitHub-Konto](https://github.com/signup). Es ist einfach und unkompliziert.
3. Sobald Sie sich registriert haben, melden Sie sich mit Ihrem Benutzernamen und Passwort bei [github.com](https://github.com/) an.

### Ihren Code für den Upload vorbereiten

Sie können jeden beliebigen Code in einem GitHub-Repository speichern, aber um die GitHub Pages-Funktion optimal zu nutzen, sollte Ihr Code als typische Website strukturiert sein, z.B. mit dem primären Einstiegspunkt als HTML-Datei namens `index.html`.

Außerdem müssen Sie Ihr Code-Verzeichnis als Git-Repository initialisieren, bevor Sie fortfahren. Gehen Sie hierzu folgendermaßen vor:

1. Weisen Sie die Befehlszeile an, auf Ihr `test-site`-Verzeichnis zu zeigen (oder wie auch immer Sie das Verzeichnis genannt haben, das Ihre Website enthält). Verwenden Sie dazu den `cd`-Befehl (d.h. "**c**hange **d**irectory"). Hier ist, was Sie eingeben würden, wenn Sie Ihre Website in einem Verzeichnis namens `test-site` auf Ihrem Desktop abgelegt haben:

   ```bash
   cd Desktop/test-site
   ```

2. Wenn die Befehlszeile auf Ihr Website-Verzeichnis zeigt, geben Sie den folgenden Befehl ein, der das `git`-Tool anweist, das Verzeichnis in ein Git-Repository umzuwandeln:

   ```bash
   git init
   ```

#### Eine Anmerkung zu Befehlszeilen-Schnittstellen

Der beste Weg, Ihren Code zu GitHub hochzuladen, ist über die Befehlszeile — dies ist ein Fenster, in dem Sie Befehle eingeben, um Dinge wie das Erstellen von Dateien und das Ausführen von Programmen zu tun, anstatt in einer Benutzeroberfläche zu klicken. Es wird ungefähr so aussehen:

![Terminal/Befehlsaufforderung geöffnet. Kein Befehl wurde eingegeben.](command-line.png)

> [!NOTE]
> Sie könnten auch erwägen, eine [Git-Grafische Benutzeroberfläche](https://git-scm.com/downloads/guis) zu verwenden, um die gleiche Arbeit zu erledigen, wenn Sie sich mit der Befehlszeile unwohl fühlen.

Jedes Betriebssystem verfügt über ein Befehlszeilen-Tool:

- **Windows**: **Command Prompt** kann durch Drücken der Windows-Taste, Eingabe von _Command Prompt_ und Auswahl aus der erscheinenden Liste aufgerufen werden. Beachten Sie, dass Windows seine eigenen Befehlskonventionen hat, die sich von Linux und macOS unterscheiden, sodass die Befehle auf Ihrem Rechner abweichen können.
- **macOS**: **Terminal** finden Sie unter _Applications > Utilities_.
- **Linux**: Normalerweise können Sie ein Terminal mit _Ctrl + Alt + T_ aufrufen. Wenn das nicht funktioniert, suchen Sie nach **Terminal** in einer App-Leiste oder einem Menü.

Das mag anfangs ein bisschen beängstigend erscheinen, aber keine Sorge — Sie werden sich bald mit den Grundlagen vertraut machen. Sie sagen dem Computer, dass er im Terminal etwas tun soll, indem Sie einen Befehl eingeben und die Eingabetaste drücken, wie oben zu sehen ist.

### Ein Repository für Ihren Code erstellen

1. Als nächstes müssen Sie ein neues Repository erstellen, in das Ihre Dateien kommen. Klicken Sie auf Plus (+) oben rechts auf der GitHub-Startseite und wählen Sie _Neues Repository_.
2. Geben Sie auf dieser Seite im Feld _Repository-Name_ einen Namen für Ihr Code-Repository ein, zum Beispiel _my-repository_.
3. Fügen Sie außerdem eine Beschreibung hinzu, um anzugeben, was Ihr Repository enthalten wird. Ihr Bildschirm sollte so aussehen:
   ![Seite für neues Repository im Browser geöffnet, Repository-Besitzereingabe und Repository-Name sind ausgefüllt, dasselbe gilt für die optionale Beschreibungseingabe. Das Kontrollkästchen Öffentlich ist ausgewählt, das Privat-Kontrollkästchen nicht, dasselbe gilt für das Initialisieren dieses Repositorys mit einem Readme.](create-new-repo.png)
4. Klicken Sie auf _Repository erstellen_; dies sollte Sie zur folgenden Seite bringen:
   ![Die Repository-Seite ist im Browser geöffnet, unterhalb der GitHub-Kopfzeile bestehend aus Suchleiste und Navigationslinks zu Pull-Anfragen, Problemen und Gist des Repositorys. Neben den Navigationslinks eine Glockenbenachrichtigung und ein Link zu Ihrem Konto. Darunter der Name des Besitzers Repository gefolgt von einem Schrägstrich und dem Namen des Repositorys. Darunter eine horizontale Navigationsleiste, die aus verschiedenen Tabs zu Ihrem Repository besteht, der Tab Code ist ausgewählt und zeigt eine Dokumentation, die erklärt, wie man ein Repository erstellt oder wie man von der Befehlszeile aus hochlädt.](github-repo.png)

### Ihre Dateien auf GitHub hochladen

1. Auf der aktuellen Seite ist der Abschnitt _…oder ein bestehendes Repository von der Befehlszeile aus pushen_ für Sie interessant. Sie sollten zwei Zeilen Code in diesem Abschnitt sehen. Kopieren Sie die gesamte erste Zeile, fügen Sie sie in die Befehlszeile ein und drücken Sie Enter. Der Befehl sollte ungefähr so aussehen:

   ```bash
   git remote add origin https://github.com/chrisdavidmills/my-repository.git
   ```

2. Geben Sie als Nächstes die folgenden zwei Befehle ein und drücken Sie nach jedem die Eingabetaste. Diese bereiten den Code zum Hochladen auf GitHub vor und fordern Git auf, diese Dateien zu verwalten.

   ```bash
   git add --all
   git commit -m 'adding my files to my repository'
   ```

3. Schließlich pushen Sie den Code zu GitHub, indem Sie zur GitHub-Webseite gehen, auf der Sie sich befinden, und im Terminal den zweiten der beiden Befehle eingeben, die wir im Abschnitt _…oder ein bestehendes Repository von der Befehlszeile aus pushen_ sahen:

   ```bash
   git push -u origin main
   ```

4. Nun müssen Sie GitHub Pages für Ihr Repository aktivieren. Gehen Sie dazu von der Startseite Ihres Repositorys aus zu _Einstellungen_, und wählen Sie dann _Pages_ aus der Seitenleiste links. Unter _Source_ wählen Sie den "main"-Zweig aus. Die Seite sollte aktualisiert werden.
5. Gehen Sie erneut zum Abschnitt GitHub Pages, und Sie sollten eine Zeile der Form "Ihre Seite ist bereit, unter `https://xxxxxx` veröffentlicht zu werden" sehen.
6. Wenn Sie auf diese URL klicken, sollten Sie zu einer Live-Version Ihres Beispiels gelangen, vorausgesetzt, die Startseite heißt `index.html` — standardmäßig wird dieser Einstiegspunkt genommen. Wenn der Einstiegspunkt Ihrer Seite anders heißt, zum Beispiel `meineSeite.html`, müssen Sie zu `https://xxxxxx/meineSeite.html` gehen.

### Weiterführendes GitHub-Wissen

Wenn Sie weitere Änderungen an Ihrer Testseite vornehmen und diese auf GitHub hochladen möchten, müssen Sie die Änderungen an Ihren Dateien genauso vornehmen wie zuvor. Dann müssen Sie die folgenden Befehle eingeben (nach jedem die Eingabetaste drücken), um diese Änderungen auf GitHub zu pushen:

```bash
git add --all
git commit -m 'another commit'
git push
```

Sie können _another commit_ durch eine passendere Nachricht ersetzen, um zu beschreiben, welche Änderung Sie gerade vorgenommen haben.

Wir haben gerade erst die Oberfläche von Git gekratzt. Um mehr zu erfahren, besuchen Sie unsere [Git und GitHub](/de/docs/Learn/Tools_and_testing/GitHub) Seite.
