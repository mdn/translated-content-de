---
title: Wie verwende ich GitHub Pages?
slug: Learn/Common_questions/Tools_and_setup/Using_GitHub_pages
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

[GitHub](https://github.com/) ist eine "Social Coding" Plattform. Sie ermöglicht es Ihnen, Code-Repositories zur Speicherung in dem [Git](https://git-scm.com/) **Versionskontrollsystem** hochzuladen. Sie können dann an Codeprojekten zusammenarbeiten und das System ist standardmäßig Open-Source, was bedeutet, dass jeder auf der Welt Ihren GitHub-Code finden, nutzen, davon lernen und ihn verbessern kann. Das können Sie auch mit dem Code anderer! Dieser Artikel bietet eine grundlegende Anleitung zur Veröffentlichung von Inhalten mit der gh-pages-Funktion von GitHub.

## Veröffentlichung von Inhalten

GitHub ist eine sehr wichtige und nützliche Community, in der Sie sich engagieren können, und Git/GitHub ist ein sehr populäres [Versionskontrollsystem](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) — die meisten Technologieunternehmen verwenden es jetzt in ihrem Workflow. GitHub hat eine sehr nützliche Funktion namens [GitHub Pages](https://pages.github.com/), mit der Sie Website-Code live im Web veröffentlichen können.

### Grundlegende GitHub-Installation

1. Installieren Sie zunächst [Git](https://git-scm.com/downloads) auf Ihrem Computer. Dies ist die zugrunde liegende Versionskontrollsoftware, auf der GitHub basiert.
2. Erstellen Sie als nächstes ein [GitHub-Konto](https://github.com/signup). Es ist einfach und unkompliziert.
3. Sobald Sie sich registriert haben, loggen Sie sich mit Ihrem Benutzernamen und Passwort auf [github.com](https://github.com/) ein.

### Vorbereitung Ihres Codes für den Upload

Sie können beliebigen Code in einem GitHub-Repository speichern, aber um die GitHub Pages-Funktion voll auszunutzen, sollte Ihr Code wie eine typische Website strukturiert sein, z.B. mit dem primären Einstiegspunkt als HTML-Datei namens `index.html`.

Bevor Sie fortfahren, müssen Sie auch Ihr Codeverzeichnis als Git-Repository initialisieren. Dazu:

1. Navigieren Sie mit der Befehlszeile zu Ihrem `test-site` Verzeichnis (oder wie auch immer Sie das Verzeichnis, das Ihre Website enthält, genannt haben). Verwenden Sie dazu den `cd` Befehl (also "**c**hange **d**irectory"). So sieht der Befehl aus, wenn Sie Ihre Website in einem Verzeichnis namens `test-site` auf Ihrem Desktop abgelegt haben:

   ```bash
   cd Desktop/test-site
   ```

2. Wenn die Befehlszeile auf Ihr Website-Verzeichnis zeigt, geben Sie den folgenden Befehl ein, der dem `git` Tool sagt, das Verzeichnis in ein Git-Repository zu verwandeln:

   ```bash
   git init
   ```

#### Ein Exkurs zu Kommandozeilenschnittstellen

Der beste Weg, Ihren Code auf GitHub hochzuladen, ist über die Kommandozeile — ein Fenster, in dem Sie Befehle eingeben, um Dinge zu tun, wie Dateien zu erstellen und Programme auszuführen, anstatt innerhalb einer Benutzeroberfläche zu klicken. Es sieht in etwa so aus:

![Terminal/command prompt geöffnet. Es wurde kein Befehl eingegeben.](command-line.png)

> [!NOTE]
> Sie könnten auch in Betracht ziehen, eine [Git-Grafische Benutzeroberfläche](https://git-scm.com/downloads/guis) zu verwenden, wenn Ihnen die Kommandozeile nicht angenehm ist.

Jedes Betriebssystem hat ein Kommandozeilen-Tool:

- **Windows**: **Eingabeaufforderung** kann geöffnet werden, indem Sie die Windows-Taste drücken, _Eingabeaufforderung_ eingeben und es aus der erscheinenden Liste auswählen. Beachten Sie, dass Windows eigene Befehlskonventionen hat, die sich von Linux und macOS unterscheiden, sodass sich die untenstehenden Befehle auf Ihrem Computer möglicherweise unterscheiden.
- **macOS**: **Terminal** finden Sie in _Programme > Dienstprogramme_.
- **Linux**: In der Regel können Sie ein Terminal mit _Strg + Alt + T_ öffnen. Wenn das nicht funktioniert, suchen Sie nach **Terminal** in einer App-Leiste oder im Menü.

Das kann anfangs etwas beängstigend wirken, aber keine Sorge — Sie werden sich schnell an die Grundlagen gewöhnen. Sie geben dem Computer im Terminal einen Befehl ein, indem Sie ihn eintippen und Enter drücken, wie oben gezeigt.

### Erstellen eines Repos für Ihren Code

1. Erstellen Sie als nächstes ein neues Repository, in das Ihre Dateien kommen. Klicken Sie auf Plus (+) oben rechts auf der GitHub-Homepage und wählen Sie _Neues Repository_.
2. Auf dieser Seite geben Sie im Feld _Repository-Name_ einen Namen für Ihr Code-Repository ein, z.B. _mein-repository_.
3. Fügen Sie auch eine Beschreibung hinzu, die angibt, was Ihr Repository enthalten wird. Ihr Bildschirm sollte folgendermaßen aussehen:
   ![Neue Repository-Seite im Browser geöffnet, Repository-Besitzer Eingabefeld und der Repository-Name sind ausgefüllt, ebenso das optionale Beschreibungsfeld. Das öffentliche Kontrollkästchen ist ausgewählt, das private nicht, ebenso wie das Kontrollkästchen zum Initialisieren dieses Repositories mit einer README.](create-new-repo.png)
4. Klicken Sie auf _Repository erstellen_; dies sollte Sie zur folgenden Seite führen:
   ![Die Repository-Seite ist im Browser geöffnet, unter der GitHub-Kopfzeile, die aus Suchleiste und Navigationslinks zum Repositorys Pull-Request, Issues und Gist besteht. Neben den Navigationslinks eine Glockenbenachrichtigung und ein Link zu Ihrem Konto. Darunter der Name des Repository-Besitzers gefolgt von einem Schrägstrich mit dem Namen des Repositories. Darunter eine horizontale Navigationsleiste bestehend aus verschiedenen Tabs in Bezug auf Ihr Repository, der Code-Tab ist ausgewählt und zeigt eine Dokumentation, die erklärt, wie man ein Repository erstellt oder wie man vom Kommandozeilen-Interface aus pusht.](github-repo.png)

### Hochladen Ihrer Dateien auf GitHub

1. Auf der aktuellen Seite interessieren Sie sich für den Abschnitt _…oder ein bestehendes Repository von der Kommandozeile pushen_. Sie sollten zwei Codezeilen in diesem Abschnitt sehen. Kopieren Sie die gesamte erste Zeile, fügen Sie sie in die Kommandozeile ein und drücken Sie Enter. Der Befehl sollte ungefähr so aussehen:

   ```bash
   git remote add origin https://github.com/chrisdavidmills/mein-repository.git
   ```

2. Geben Sie als nächstes die folgenden zwei Befehle ein und drücken Sie nach jedem Enter. Diese bereiten den Code für den Upload zu GitHub vor und bitten Git, diese Dateien zu verwalten.

   ```bash
   git add --all
   git commit -m 'meine Dateien zu meinem Repository hinzufügen'
   ```

3. Schieben Sie schließlich den Code auf GitHub, indem Sie zur GitHub-Webseite gehen, auf der Sie sich befinden, und den zweiten der beiden Befehle, die wir im Abschnitt _…oder ein bestehendes Repository von der Kommandozeile pushen_ gesehen haben, in das Terminal eingeben:

   ```bash
   git push -u origin main
   ```

4. Nun müssen Sie GitHub Pages für Ihr Repository aktivieren. Gehen Sie dazu von der Startseite Ihres Repositories auf _Einstellungen_, dann wählen Sie _Seiten_ aus der linken Seitenleiste. Wählen Sie unter _Quelle_ den "Haupt"-Branch aus. Die Seite sollte sich aktualisieren.
5. Gehen Sie erneut zum Bereich GitHub Pages und Sie sollten eine Zeile der Form "Ihre Site ist bereit, unter `https://xxxxxx` veröffentlicht zu werden" sehen.
6. Wenn Sie auf diese URL klicken, sollten Sie eine live Version Ihres Beispiels sehen, vorausgesetzt, die Startseite heißt `index.html` — sie geht standardmäßig zu diesem Einstiegspunkt. Wenn der Einstiegspunkt Ihrer Site anders heißt, z.B. `meineSeite.html`, müssen Sie auf `https://xxxxxx/meineSeite.html` gehen.

### Weiterführendes GitHub-Wissen

Wenn Sie weitere Änderungen an Ihrer Test-Website vornehmen und diese auf GitHub hochladen möchten, müssen Sie die Änderung an Ihren Dateien genauso vornehmen wie zuvor. Dann müssen Sie die folgenden Befehle eingeben (nach jedem Enter drücken), um diese Änderungen auf GitHub zu pushen:

```bash
git add --all
git commit -m 'ein weiterer Commit'
git push
```

Sie können _ein weiterer Commit_ durch eine passendere Nachricht ersetzen, um zu beschreiben, welche Änderung Sie gerade vorgenommen haben.

Wir haben hier nur die Oberfläche von Git angekratzt. Um mehr zu erfahren, schauen Sie sich unsere [Git und GitHub](/de/docs/Learn/Tools_and_testing/GitHub) Seite an.
