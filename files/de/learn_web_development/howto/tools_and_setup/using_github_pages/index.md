---
title: Wie verwende ich GitHub Pages?
slug: Learn_web_development/Howto/Tools_and_setup/Using_GitHub_pages
l10n:
  sourceCommit: 6722199b4d63fad3c33db1146af380fc98b6c202
---

[GitHub](https://github.com/) ist eine "soziale Programmierung"-Plattform. Sie ermöglicht es Ihnen, Code-Repositories für die Speicherung im **Versionskontrollsystem** [Git](https://git-scm.com/) hochzuladen. Sie können dann an Codeprojekten zusammenarbeiten, und das System ist standardmäßig Open Source, was bedeutet, dass jeder auf der Welt Ihren GitHub-Code finden, nutzen, von ihm lernen und ihn verbessern kann. Das gilt auch für den Code anderer! Dieser Artikel bietet einen grundlegenden Leitfaden zum Veröffentlichen von Inhalten mit der GitHub gh-pages-Funktion.

## Inhalte veröffentlichen

GitHub ist eine sehr wichtige und nützliche Gemeinschaft, an der man sich beteiligen kann, und Git/GitHub ist ein sehr beliebtes [Versionskontrollsystem](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) – die meisten Technologieunternehmen verwenden es mittlerweile in ihrem Arbeitsablauf. GitHub bietet eine sehr nützliche Funktion namens [GitHub Pages](https://pages.github.com/), die es Ihnen ermöglicht, Website-Code live im Web zu veröffentlichen.

### Grundlegende GitHub-Einrichtung

1. Installieren Sie zunächst [Git](https://git-scm.com/downloads) auf Ihrem Rechner. Das ist die zugrundeliegende Versionskontrollsystem-Software, auf der GitHub basiert.
2. Melden Sie sich als Nächstes für ein [GitHub-Konto](https://github.com/signup) an. Es ist einfach und unkompliziert.
3. Sobald Sie sich angemeldet haben, loggen Sie sich mit Ihrem Benutzernamen und Passwort bei [github.com](https://github.com/) ein.

### Ihren Code für den Upload vorbereiten

Sie können jeden beliebigen Code in einem GitHub-Repository speichern, aber um die GitHub Pages-Funktion voll auszunutzen, sollte Ihr Code als typische Website strukturiert sein, zum Beispiel mit dem primären Einstiegspunkt als HTML-Datei namens `index.html`.

Das andere, was Sie tun müssen, bevor Sie weitermachen, ist, Ihr Codeverzeichnis als Git-Repository zu initialisieren. Dafür:

1. Navigieren Sie mit der Befehlszeile in Ihr `test-site` Verzeichnis (oder wie auch immer Sie das Verzeichnis genannt haben, das Ihre Website enthält). Verwenden Sie dazu den `cd` Befehl (d.h. "**c**hange **d**irectory"). Hier ist ein Beispiel dafür, wie Sie es eingeben würden, wenn Sie Ihre Website in einem Verzeichnis namens `test-site` auf Ihrem Desktop abgelegt haben:

   ```bash
   cd Desktop/test-site
   ```

2. Wenn die Befehlszeile sich in Ihrem Website-Verzeichnis befindet, geben Sie den folgenden Befehl ein, der das `git`-Tool anweist, das Verzeichnis in ein Git-Repository zu verwandeln:

   ```bash
   git init
   ```

#### Ein Exkurs zu Befehlszeilenschnittstellen

Der beste Weg, Ihren Code auf GitHub hochzuladen, ist über die Befehlszeile – das ist ein Fenster, in dem Sie Befehle eingeben, um Dinge zu tun wie Dateien erstellen und Programme ausführen, anstatt innerhalb einer Benutzeroberfläche zu klicken. Es wird ungefähr so aussehen:

![Terminal/Kommandoprompt geöffnet. Kein Befehl wurde eingegeben.](command-line.png)

> [!NOTE]
> Sie könnten auch in Erwägung ziehen, eine [Git grafische Benutzeroberfläche](https://git-scm.com/downloads/guis) zu verwenden, um dieselbe Arbeit zu erledigen, wenn Sie sich mit der Befehlszeile unwohl fühlen.

Jedes Betriebssystem kommt mit einem Befehlszeilentool:

- **Windows**: Der **Kommandozeilen Eingabeaufforderung** kann durch Drücken der Windows-Taste aufgerufen werden, indem Sie _Command Prompt_ eingeben und es aus der erscheinenden Liste auswählen. Beachten Sie, dass Windows seine eigenen Befehlskonventionen hat, die sich von Linux und macOS unterscheiden, daher können die Befehle unten auf Ihrem Computer variieren.
- **macOS**: Das **Terminal** finden Sie unter _Programme > Dienstprogramme_.
- **Linux**: Sie können normalerweise ein Terminal mit _Strg + Alt + T_ öffnen. Wenn das nicht funktioniert, suchen Sie nach **Terminal** in einer App-Leiste oder einem Menü.

Dies mag anfangs etwas beängstigend sein, aber keine Sorge — Sie werden schnell die Grundlagen beherrschen. Sie sagen dem Computer im Terminal, dass er etwas tun soll, indem Sie einen Befehl eingeben und die Eingabetaste drücken, wie oben gezeigt.

### Ein Repository für Ihren Code erstellen

1. Als Nächstes müssen Sie ein neues Repository für Ihre Dateien erstellen. Klicken Sie oben rechts auf der GitHub-Startseite auf Plus (+) und wählen Sie _Neues Repository_.
2. Auf dieser Seite geben Sie im Feld _Repository-Name_ einen Namen für Ihr Code-Repository ein, zum Beispiel _mein-repository_.
3. Fügen Sie auch eine Beschreibung hinzu, um zu sagen, was Ihr Repository enthalten wird. Ihr Bildschirm sollte so aussehen:
   ![Neue Repository-Seite im Browser geöffnet, Felder für Repository-Besitzer und -Name ausgefüllt, gleiches gilt für das optionale Beschreibungsfeld. Die Checkbox für öffentlich ist ausgewählt, die für privat nicht, ebenso wenig wie die Option, dieses Repository mit einem Readme zu initialisieren.](create-new-repo.png)
4. Klicken Sie auf _Repository erstellen_; dies sollte Sie zur folgenden Seite bringen:
   ![Die Repository-Seite ist im Browser geöffnet, unter der GitHub-Kopfzeile bestehend aus Suchleiste und Navigationslinks zu den Pull-Anfragen, Problemen und Gist des Repositorys. Neben den Navigationslinks eine Glockenbenachrichtigung und ein Link zu Ihrem Konto. Darunter der Name des Repository-Besitzers gefolgt von einem Schrägstrich mit dem Repository-Namen. Darunter eine horizontale Navigationsleiste mit verschiedenen Tabs, die sich auf Ihr Repository beziehen, der Code-Tab ist ausgewählt und zeigt eine Dokumentation, die erklärt, wie man ein Repository erstellt oder wie man über die Befehlszeile pusht.](github-repo.png)

### Ihre Dateien zu GitHub hochladen

1. Auf der aktuellen Seite interessiert Sie der Abschnitt _…oder ein bestehendes Repository von der Befehlszeile pushen_. Sie sollten zwei Zeilen Code in diesem Abschnitt sehen. Kopieren Sie die gesamte erste Zeile, fügen Sie sie in die Befehlszeile ein und drücken Sie Enter. Der Befehl sollte ungefähr so aussehen:

   ```bash
   git remote add origin https://github.com/chrisdavidmills/my-repository.git
   ```

2. Geben Sie als nächstes die folgenden zwei Befehle ein, und drücken Sie nach jedem Enter. Diese bereiten den Code für das Hochladen auf GitHub vor und bitten Git, diese Dateien zu verwalten.

   ```bash
   git add --all
   git commit -m 'adding my files to my repository'
   ```

3. Schließlich pushen Sie den Code zu GitHub, indem Sie auf der GitHub-Webseite, auf der Sie sich befinden, den zweiten der beiden Befehle eingeben, die wir im Abschnitt _…oder ein bestehendes Repository von der Befehlszeile pushen_ gesehen haben:

   ```bash
   git push -u origin main
   ```

4. Jetzt müssen Sie GitHub Pages für Ihr Repository aktivieren. Um dies zu tun, wählen Sie auf der Startseite Ihres Repositories _Einstellungen_, dann wählen Sie _Pages_ aus der Seitenleiste auf der linken Seite. Unter _Source_ wählen Sie den "main" Branch. Die Seite sollte sich aktualisieren.
5. Gehen Sie erneut zum GitHub Pages-Abschnitt, und Sie sollten eine Zeile in der Form "Ihre Seite kann unter `https://xxxxxx` veröffentlicht werden" sehen.
6. Wenn Sie auf diese URL klicken, sollten Sie zu einer Live-Version Ihres Beispiels gelangen, sofern die Startseite `index.html` genannt wird – sie geht standardmäßig zu diesem Einstiegspunkt. Wenn der Einstiegspunkt Ihrer Website anders genannt wird, z. B. `myPage.html`, müssen Sie zu `https://xxxxxx/myPage.html` gehen.

### Weiterführende GitHub-Kenntnisse

Wenn Sie mehr Änderungen an Ihrer Testseite vornehmen und diese bei GitHub hochladen möchten, müssen Sie die Änderungen an Ihren Dateien genauso vornehmen wie zuvor. Dann müssen Sie die folgenden Befehle eingeben (nach jedem Enter drücken), um diese Änderungen zu GitHub zu pushen:

```bash
git add --all
git commit -m 'another commit'
git push
```

Sie können _another commit_ durch eine passende Nachricht ersetzen, die beschreibt, welche Änderung Sie gerade vorgenommen haben.

Wir haben hier nur an der Oberfläche von Git gekratzt. Um mehr zu lernen, schauen Sie sich unsere [Git und GitHub](/de/docs/Learn_web_development/Core/Version_control) Seite an.
