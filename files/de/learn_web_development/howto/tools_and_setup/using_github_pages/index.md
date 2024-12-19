---
title: Wie verwende ich GitHub Pages?
slug: Learn_web_development/Howto/Tools_and_setup/Using_GitHub_pages
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

[GitHub](https://github.com/) ist eine "soziale Programmier"-Site. Es ermöglicht Ihnen, Code-Repositories zur Speicherung im **Versionskontrollsystem** [Git](https://git-scm.com/) hochzuladen. Sie können dann an Code-Projekten zusammenarbeiten, und das System ist standardmäßig Open-Source, was bedeutet, dass jeder auf der Welt Ihren GitHub-Code finden, ihn nutzen, daraus lernen und ihn verbessern kann. Sie können das Gleiche auch mit dem Code anderer tun! Dieser Artikel bietet einen grundlegenden Leitfaden zum Veröffentlichen von Inhalten mit der gh-pages-Funktion von GitHub.

## Veröffentlichung von Inhalten

GitHub ist eine sehr wichtige und nützliche Community, in die Sie sich einbringen können, und Git/GitHub ist ein sehr populäres [Versionskontrollsystem](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) — die meisten Technologieunternehmen verwenden es jetzt in ihrem Arbeitsablauf. GitHub hat eine sehr nützliche Funktion, die [GitHub Pages](https://pages.github.com/) genannt wird, die es Ihnen ermöglicht, Website-Code live im Web zu veröffentlichen.

### Grundlegende GitHub-Einrichtung

1. Installieren Sie zuerst [Git](https://git-scm.com/downloads) auf Ihrem Rechner. Dies ist die zugrundeliegende Software des Versionskontrollsystems, auf dem GitHub aufbaut.
2. Melden Sie sich als Nächstes für ein [GitHub-Konto an](https://github.com/signup). Es ist einfach und unkompliziert.
3. Nachdem Sie sich angemeldet haben, loggen Sie sich mit Ihrem Benutzernamen und Passwort auf [github.com](https://github.com/) ein.

### Vorbereitung Ihres Codes für den Upload

Sie können jeden beliebigen Code in einem GitHub-Repository speichern, aber um die GitHub Pages-Funktion voll auszunutzen, sollte Ihr Code wie eine typische Website strukturiert sein, z.B. mit dem primären Einstiegspunkt als HTML-Datei namens `index.html`.

Bevor Sie fortfahren, müssen Sie Ihr Code-Verzeichnis als Git-Repository initialisieren. Gehen Sie dafür folgendermaßen vor:

1. Zeigen Sie die Befehlszeile auf Ihr `test-site`-Verzeichnis (oder wie auch immer Sie das Verzeichnis mit Ihrer Website genannt haben). Verwenden Sie dafür den Befehl `cd` (d.h. "**c**hange **d**irectory"). So würden Sie tippen, wenn Sie Ihre Website in einem Verzeichnis namens `test-site` auf Ihrem Desktop abgelegt haben:

   ```bash
   cd Desktop/test-site
   ```

2. Wenn die Befehlszeile in Ihrem Website-Verzeichnis zeigt, geben Sie den folgenden Befehl ein, der dem `git`-Tool sagt, das Verzeichnis in ein Git-Repository zu verwandeln:

   ```bash
   git init
   ```

#### Ein Exkurs zu Befehlszeilenschnittstellen

Der beste Weg, Ihren Code zu GitHub hochzuladen, ist über die Befehlszeile — dies ist ein Fenster, in dem Sie Befehle eingeben, um Dinge wie das Erstellen von Dateien und das Ausführen von Programmen zu tun, anstatt innerhalb einer Benutzeroberfläche zu klicken. Es sieht ungefähr so aus:

![Terminal/command prompt geöffnet. Kein Befehl wurde eingegeben.](command-line.png)

> [!NOTE]
> Sie könnten auch in Betracht ziehen, eine [Git-GUI](https://git-scm.com/downloads/guis) zu verwenden, um die gleiche Arbeit zu erledigen, wenn Sie sich mit der Befehlszeile nicht wohl fühlen.

Jedes Betriebssystem kommt mit einem Befehlszeilentool:

- **Windows**: **Eingabeaufforderung** kann durch Drücken der Windows-Taste, Eingabe von _Eingabeaufforderung_ und Auswahl aus der angezeigten Liste aufgerufen werden. Beachten Sie, dass Windows seine eigenen Befehlskonventionen hat, die von Linux und macOS abweichen, sodass sich die Befehle unten auf Ihrem Rechner unterscheiden können.
- **macOS**: **Terminal** finden Sie in _Programme > Dienstprogramme_.
- **Linux**: Normalerweise können Sie ein Terminal mit _Strg + Alt + T_ aufrufen. Wenn das nicht funktioniert, suchen Sie nach **Terminal** in einer App-Leiste oder einem Menü.

Dies mag zunächst etwas beängstigend erscheinen, aber keine Sorge — Sie werden die Grundlagen schnell verstehen. Sie geben dem Computer im Terminal einen Befehl, indem Sie ihn eintippen und die Eingabetaste drücken, wie oben zu sehen ist.

### Erstellen eines Repos für Ihren Code

1. Als Nächstes müssen Sie ein neues Repository für Ihre Dateien erstellen. Klicken Sie auf der GitHub-Homepage oben rechts auf Plus (+) und wählen Sie _Neues Repository_.
2. Auf dieser Seite, im Feld _Repository-Name_, geben Sie einen Namen für Ihr Code-Repository ein, zum Beispiel _mein-repository_.
3. Füllen Sie ebenfalls eine Beschreibung aus, um zu sagen, was Ihr Repository enthalten wird. Ihr Bildschirm sollte so aussehen:
   ![Neue Repository-Seite im Browser geöffnet, Eingaben für Repository-Besitzer und Repository-Name sind ausgefüllt, ebenso das optionale Beschreibungsfeld. Das öffentliche Kontrollkästchen ist ausgewählt, das private nicht, gleiches gilt für das Initialisieren dieses Repositories mit einer README.](create-new-repo.png)
4. Klicken Sie auf _Repository erstellen_; dies sollte Sie zur folgenden Seite führen:
   ![Die Repository-Seite ist im Browser geöffnet, unter der GitHub-Headerleiste, die aus Suchleiste und Navigationslinks zum Repositorys Pull-Request, Issues und Gist besteht. Neben den Navigationslinks, eine Glockenbenachrichtigung und ein Link zu Ihrem Konto. Darunter der Name des Besitzers Repositorys gefolgt von einem Schrägstrich mit dem Namen des Repositorys. Darunter eine horizontale Navigationsleiste, die sich aus verschiedenen Tabs in Bezug auf Ihr Repository zusammensetzt, der Code-Tab ausgewählt, der eine Dokumentation erklärt, wie man ein Repository erstellt oder von der Befehlszeile dafür pusht.](github-repo.png)

### Hochladen Ihrer Dateien zu GitHub

1. Auf der aktuellen Seite sind Sie an dem Abschnitt _…oder ein bestehendes Repository von der Befehlszeile pushen_ interessiert. Sie sollten zwei Zeilen Code in diesem Abschnitt sehen. Kopieren Sie die gesamte erste Zeile, fügen Sie sie in die Befehlszeile ein und drücken Sie Enter. Der Befehl sollte ungefähr so aussehen:

   ```bash
   git remote add origin https://github.com/chrisdavidmills/my-repository.git
   ```

2. Geben Sie als Nächstes die folgenden beiden Befehle ein und drücken Sie nach jedem die Eingabetaste. Diese bereiten den Code für den Upload zu GitHub vor und bitten Git, diese Dateien zu verwalten.

   ```bash
   git add --all
   git commit -m 'adding my files to my repository'
   ```

3. Schließlich pushen Sie den Code zu GitHub, indem Sie zur GitHub-Webseite gehen, auf der Sie sich gerade befinden, und im Terminal den zweiten der beiden Befehle ausführen, die wir im Abschnitt _…oder ein bestehendes Repository von der Befehlszeile aus pushen_ gesehen haben:

   ```bash
   git push -u origin main
   ```

4. Nun müssen Sie GitHub Pages für Ihr Repository aktivieren. Gehen Sie dazu von der Startseite Ihres Repositorys zu _Einstellungen_, dann wählen Sie _Pages_ aus der Seitenleiste links. Unter _Source_ wählen Sie den "main"-Branch. Die Seite sollte sich aktualisieren.
5. Gehen Sie erneut zum Abschnitt GitHub Pages, und Sie sollten eine Zeile der Form "Ihre Site ist bereit, veröffentlicht zu werden unter `https://xxxxxx`." sehen.
6. Wenn Sie auf diese URL klicken, sollten Sie zu einer Live-Version Ihres Beispiels gelangen, vorausgesetzt, die Homepage heißt `index.html` — es geht standardmäßig zu diesem Einstiegspunkt. Wenn der Einstiegspunkt Ihrer Website anders heißt, zum Beispiel `meineSeite.html`, müssen Sie zu `https://xxxxxx/meineSeite.html` gehen.

### Weiterführende GitHub-Kenntnisse

Wenn Sie weitere Änderungen an Ihrer Testseite vornehmen und diese zu GitHub hochladen möchten, müssen Sie die Änderungen an Ihren Dateien genauso vornehmen wie zuvor. Dann müssen Sie die folgenden Befehle eingeben (und nach jedem die Eingabetaste drücken), um diese Änderungen zu GitHub zu pushen:

```bash
git add --all
git commit -m 'another commit'
git push
```

Sie können _another commit_ durch eine geeignetere Nachricht ersetzen, um zu beschreiben, welche Änderung Sie gerade vorgenommen haben.

Wir haben erst an der Oberfläche von Git gekratzt. Um mehr zu erfahren, schauen Sie auf unserer Seite [Git und GitHub](/de/docs/Learn_web_development/Core/Version_control) vorbei.
