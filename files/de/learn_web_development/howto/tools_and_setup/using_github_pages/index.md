---
title: Wie verwende ich GitHub Pages?
slug: Learn_web_development/Howto/Tools_and_setup/Using_GitHub_pages
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{QuicklinksWithSubPages("/de/docs/Learn_web_development/Howto")}}

[GitHub](https://github.com/) ist eine Plattform für "soziales Codieren". Sie ermöglicht Ihnen, Code-Repositories für die Speicherung im Versionskontrollsystem [Git](https://git-scm.com/) hochzuladen. Anschließend können Sie an Codeprojekten zusammenarbeiten, und das System ist standardmäßig Open-Source, was bedeutet, dass jeder auf der Welt Ihren GitHub-Code finden, verwenden, davon lernen und ihn verbessern kann. Das Gleiche können Sie auch mit dem Code anderer tun! Dieser Artikel bietet einen grundlegenden Leitfaden zum Veröffentlichen von Inhalten mit der GitHub gh-pages-Funktion.

## Inhalte veröffentlichen

GitHub ist eine sehr wichtige und nützliche Community, in der man sich engagieren sollte, und Git/GitHub ist ein sehr beliebtes [Versionskontrollsystem](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) - die meisten Technologieunternehmen verwenden es mittlerweile in ihrem Arbeitsablauf. GitHub verfügt über eine sehr nützliche Funktion namens [GitHub Pages](https://pages.github.com/), die es Ihnen ermöglicht, Website-Code live im Web zu veröffentlichen.

### Grundlegende GitHub-Einrichtung

1. Zuerst [installieren Sie Git](https://git-scm.com/downloads) auf Ihrem Rechner. Dies ist die zugrunde liegende Software des Versionskontrollsystems, auf der GitHub aufbaut.
2. Als nächstes [melden Sie sich für ein GitHub-Konto an](https://github.com/signup). Es ist einfach und unkompliziert.
3. Nachdem Sie sich angemeldet haben, loggen Sie sich mit Ihrem Benutzernamen und Passwort auf [github.com](https://github.com/) ein.

### Vorbereiten Ihres Codes für den Upload

Sie können beliebigen Code in einem GitHub-Repository speichern, aber um die GitHub Pages-Funktion in vollem Umfang zu nutzen, sollte Ihr Code wie eine typische Website strukturiert sein, z.B. mit dem Haupteinstiegspunkt in einer HTML-Datei namens `index.html`.

Das andere, was Sie tun müssen, bevor Sie fortfahren, ist, Ihr Codeverzeichnis als Git-Repository zu initialisieren. Gehen Sie dazu wie folgt vor:

1. Richten Sie die Befehlszeile auf Ihr `test-site`-Verzeichnis (oder wie auch immer Sie das Verzeichnis mit Ihrer Website genannt haben). Verwenden Sie dazu den Befehl `cd` (d.h. "**c**hange **d**irectory"). Das wäre der Befehl, den Sie eingeben würden, wenn Sie Ihre Website in einem Verzeichnis namens `test-site` auf Ihrem Desktop gespeichert haben:

   ```bash
   cd Desktop/test-site
   ```

2. Wenn die Befehlszeile auf Ihr Website-Verzeichnis zeigt, geben Sie den folgenden Befehl ein, der dem `git`-Werkzeug mitteilt, das Verzeichnis in ein Git-Repository zu verwandeln:

   ```bash
   git init
   ```

#### Eine Anmerkung zu Befehlszeilenschnittstellen

Der beste Weg, Ihren Code auf GitHub hochzuladen, ist über die Befehlszeile - das ist ein Fenster, in dem Sie Befehle eingeben, um Dinge wie das Erstellen von Dateien und das Ausführen von Programmen zu erledigen, anstatt innerhalb einer Benutzeroberfläche zu klicken. Es sieht ungefähr so aus:

![Terminal/Befehlszeile geöffnet. Kein Befehl wurde eingegeben.](command-line.png)

> [!NOTE]
> Sie könnten auch erwägen, eine [Git-Grafische Benutzeroberfläche](https://git-scm.com/downloads/guis) zu verwenden, um die gleiche Arbeit zu erledigen, wenn Sie sich mit der Befehlszeile unwohl fühlen.

Jedes Betriebssystem verfügt über ein Befehlszeilenwerkzeug:

- **Windows**: **Eingabeaufforderung** kann durch Drücken der Windows-Taste, Eingabe von _Eingabeaufforderung_ und Auswahl aus der erscheinenden Liste aufgerufen werden. Beachten Sie, dass Windows eigene Befehlskonventionen hat, die sich von Linux und macOS unterscheiden, sodass die unten stehenden Befehle auf Ihrem Rechner variieren können.
- **macOS**: **Terminal** befindet sich unter _Programme > Dienstprogramme_.
- **Linux**: Normalerweise können Sie ein Terminal mit _Strg + Alt + T_ aufrufen. Wenn das nicht funktioniert, suchen Sie in einer App-Leiste oder einem Menü nach **Terminal**.

Das mag anfangs etwas beängstigend wirken, aber machen Sie sich keine Sorgen - Sie werden bald die Grundlagen verstehen. Sie geben dem Computer etwas im Terminal an, indem Sie einen Befehl eingeben und die Eingabetaste drücken, wie oben gezeigt.

### Erstellen eines Repos für Ihren Code

1. Als nächstes müssen Sie ein neues Repo erstellen, in das Ihre Dateien gelangen. Klicken Sie auf der GitHub-Startseite oben rechts auf Plus (+) und wählen Sie _Neues Repository_.
2. Geben Sie auf dieser Seite im Feld _Repository-Name_ einen Namen für Ihr Code-Repository ein, zum Beispiel _my-repository_.
3. Füllen Sie auch eine Beschreibung aus, um anzugeben, was Ihr Repository enthalten wird. Ihr Bildschirm sollte so aussehen:
   ![Neue Repository-Seite im Browser geöffnet, Eingabefelder für den Repository-Besitzer und den Repository-Namen sind ausgefüllt, ebenso das optionale Beschreibungsfeld. Das öffentliche Kontrollkästchen ist ausgewählt, das private Kontrollkästchen nicht, ebenso wie das Repository mit einer Readme-Datei initialisieren.](create-new-repo.png)
4. Klicken Sie auf _Repository erstellen_; dies sollte Sie zur folgenden Seite bringen:
   ![Die Repository-Seite ist im Browser geöffnet, unter dem GitHub-Header mit Suchleiste und Navigationslinks zu den Pull Requests, Issues und Gist des Repositorys. Neben den Navigationslinks befindet sich ein Benachrichtigungsglocke und ein Link zu Ihrem Konto. Darunter der Name des Repository-Besitzers gefolgt von einem Schrägstrich mit dem Repository-Namen. Darunter eine horizontale Navigationsleiste mit verschiedenen Tabs zu Ihrem Repository, der Code-Tab ist ausgewählt und zeigt eine Dokumentation an, die erklärt, wie man ein Repository erstellt oder wie man vom Terminal aus pusht.](github-repo.png)

### Hochladen Ihrer Dateien auf GitHub

1. Auf der aktuellen Seite interessiert Sie der Abschnitt _…oder ein bestehendes Repository von der Befehlszeile aus pushen_. Sie sollten zwei Zeilen Code in diesem Abschnitt sehen. Kopieren Sie die gesamte erste Zeile, fügen Sie sie in die Befehlszeile ein und drücken Sie die Eingabetaste. Der Befehl sollte ungefähr so aussehen:

   ```bash
   git remote add origin https://github.com/chrisdavidmills/my-repository.git
   ```

2. Geben Sie dann die folgenden zwei Befehle ein und drücken Sie nach jedem die Eingabetaste. Diese bereiten den Code für das Hochladen auf GitHub vor und fügen die Dateien zur Verwaltung durch Git hinzu.

   ```bash
   git add --all
   git commit -m 'adding my files to my repository'
   ```

3. Schließlich pushen Sie den Code zu GitHub, indem Sie zur GitHub-Webseite gehen, auf der Sie sich befinden, und in das Terminal den zweiten der beiden Befehle eingeben, die wir im Abschnitt _…oder ein bestehendes Repository von der Befehlszeile aus pushen_ gesehen haben:

   ```bash
   git push -u origin main
   ```

4. Jetzt müssen Sie GitHub Pages für Ihr Repository aktivieren. Um dies zu tun, wählen Sie auf der Startseite Ihres Repositorys _Einstellungen_ und danach im Seitenleistenmenü links _Pages_. Unter _Quelle_ wählen Sie den "main"-Branch. Die Seite sollte aktualisiert werden.
5. Gehen Sie erneut zum Abschnitt GitHub Pages, und Sie sollten eine Zeile der Form "Ihre Seite ist bereit, veröffentlicht zu werden unter `https://xxxxxx`." sehen.
6. Wenn Sie auf diese URL klicken, sollten Sie zu einer Live-Version Ihres Beispiels gelangen, vorausgesetzt, die Homepage heißt `index.html` - sie geht standardmäßig zu diesem Einstiegspunkt. Wenn der Einstiegspunkt Ihrer Seite anders heißt, zum Beispiel `myPage.html`, müssen Sie `https://xxxxxx/myPage.html` besuchen.

### Weiteres GitHub-Wissen

Wenn Sie weitere Änderungen an Ihrer Testseite vornehmen und diese auf GitHub hochladen möchten, müssen Sie die Änderung an Ihren Dateien wie zuvor vornehmen. Dann müssen Sie die folgenden Befehle eingeben (nach jedem die Eingabetaste drücken), um diese Änderungen zu GitHub zu pushen:

```bash
git add --all
git commit -m 'another commit'
git push
```

Sie können _another commit_ durch eine aussagekräftigere Nachricht ersetzen, um zu beschreiben, welche Änderung Sie gerade vorgenommen haben.

Wir haben gerade erst die Oberfläche von Git angeritzt. Um mehr zu erfahren, schauen Sie sich unsere Seite [Git und GitHub](/de/docs/Learn_web_development/Core/Version_control) an.
