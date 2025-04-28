---
title: Wie verwende ich GitHub Pages?
slug: Learn_web_development/Howto/Tools_and_setup/Using_GitHub_pages
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{QuicklinksWithSubPages("/de/docs/Learn_web_development/Howto")}}

[GitHub](https://github.com/) ist eine "soziale Codierungsseite". Es erlaubt Ihnen, Code-Repositories zur Speicherung im [Git](https://git-scm.com/) **Versionskontrollsystem** hochzuladen. Sie können dann an Codeprojekten zusammenarbeiten, und das System ist standardmäßig Open Source, was bedeutet, dass jeder auf der Welt Ihren GitHub-Code finden, verwenden, daraus lernen und ihn verbessern kann. Sie können dasselbe mit dem Code anderer tun! Dieser Artikel bietet einen grundlegenden Leitfaden zur Veröffentlichung von Inhalten mit der gh-pages-Funktion von GitHub.

## Veröffentlichen von Inhalten

GitHub ist eine sehr wichtige und nützliche Community, in der Sie sich engagieren sollten, und Git/GitHub ist ein sehr beliebtes [Versionskontrollsystem](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) — die meisten Technologieunternehmen nutzen es mittlerweile in ihrem Arbeitsablauf. GitHub hat eine sehr nützliche Funktion namens [GitHub Pages](https://pages.github.com/), die es Ihnen ermöglicht, Website-Code live im Web zu veröffentlichen.

### Grundlegende GitHub-Einrichtung

1. Installieren Sie zunächst [Git](https://git-scm.com/downloads) auf Ihrem Computer. Dies ist die zugrunde liegende Software für das Versionskontrollsystem, auf dem GitHub basiert.
2. Melden Sie sich als Nächstes für ein GitHub-Konto an [hier anmelden](https://github.com/signup). Es ist einfach und unkompliziert.
3. Sobald Sie sich angemeldet haben, loggen Sie sich mit Ihrem Benutzernamen und Passwort auf [github.com](https://github.com/) ein.

### Vorbereitung Ihres Codes für den Upload

Sie können jeden Code, den Sie möchten, in einem GitHub-Repository speichern, aber um die GitHub Pages-Funktion voll auszunutzen, sollte Ihr Code wie eine typische Website strukturiert sein, z.B. mit dem primären Einstiegspunkt in einer HTML-Datei namens `index.html`.

Das andere, was Sie tun müssen, bevor Sie fortfahren können, ist, Ihr Codeverzeichnis als Git-Repository zu initialisieren. Dazu:

1. Richten Sie die Befehlszeile auf Ihr `test-site`-Verzeichnis (oder wie auch immer Sie das Verzeichnis genannt haben, das Ihre Website enthält). Verwenden Sie dafür den `cd`-Befehl (d.h. "**c**hange **d**irectory"). Das ist das, was Sie eingeben würden, wenn Sie Ihre Website in ein Verzeichnis namens `test-site` auf Ihrem Desktop gelegt haben:

   ```bash
   cd Desktop/test-site
   ```

2. Wenn die Befehlszeile auf Ihr Website-Verzeichnis zeigt, geben Sie den folgenden Befehl ein, der dem `git`-Werkzeug mitteilt, das Verzeichnis in ein Git-Repository zu verwandeln:

   ```bash
   git init
   ```

#### Ein Einschub zu Befehlszeilenoberflächen

Der beste Weg, Ihren Code zu GitHub hochzuladen, ist über die Befehlszeile — dies ist ein Fenster, in dem Sie Befehle eingeben, um Dinge zu tun wie Dateien erstellen und Programme ausführen, anstatt in einer Benutzeroberfläche zu klicken. Es wird ungefähr so aussehen:

![Terminal/Kommandoprompt geöffnet. Es wurde kein Befehl eingegeben.](command-line.png)

> [!NOTE]
> Sie könnten auch in Betracht ziehen, eine [grafische Benutzeroberfläche für Git](https://git-scm.com/downloads/guis) zu verwenden, um die gleiche Arbeit zu erledigen, wenn Sie sich mit der Befehlszeile unwohl fühlen.

Jedes Betriebssystem kommt mit einem Befehlszeilenwerkzeug:

- **Windows**: **Eingabeaufforderung** kann durch Drücken der Windows-Taste, Eingabe von _Eingabeaufforderung_ und Auswahl aus der Liste aufgerufen werden. Beachten Sie, dass Windows seine eigenen Befehlskonventionen hat, die sich von Linux und macOS unterscheiden, daher können sich die Befehle unten auf Ihrem System unterscheiden.
- **macOS**: **Terminal** kann unter _Programme > Dienstprogramme_ gefunden werden.
- **Linux**: In der Regel können Sie ein Terminal mit _Strg + Alt + T_ öffnen. Wenn das nicht funktioniert, suchen Sie im App-Menü nach **Terminal**.

Das mag anfangs etwas beängstigend erscheinen, aber keine Sorge — Sie werden sich schnell an die Grundlagen gewöhnen. Sie sagen dem Computer, dass er etwas im Terminal tun soll, indem Sie einen Befehl eingeben und die Eingabetaste drücken, wie oben gezeigt.

### Erstellen eines Repos für Ihren Code

1. Als nächstes müssen Sie ein neues Repo erstellen, in das Ihre Dateien gehen sollen. Klicken Sie auf der GitHub-Startseite oben rechts auf Plus (+) und wählen Sie _New Repository_.
2. Auf dieser Seite geben Sie im Feld _Repository name_ einen Namen für Ihr Code-Repository ein, zum Beispiel _my-repository_.
3. Füllen Sie auch eine Beschreibung aus, um zu sagen, was Ihr Repository enthalten wird. Ihr Bildschirm sollte so aussehen:
   ![Neue Repositorium-Seite im Browser geöffnet, Eingaben für Besitzer des Repositoriums, Name des Repositoriums und optionale Beschreibung sind ausgefüllt. Das öffentlich-Kontrollkästchen ist ausgewählt, das privat-Kontrollkästchen nicht, ebenso wenig das Kontrollkästchen zum Initialisieren mit einer README-Datei.](create-new-repo.png)
4. Klicken Sie auf _Create repository_; dies sollte Sie zur folgenden Seite bringen:
   ![Die Repositorium-Seite ist im Browser geöffnet, unterhalb der GitHub-Kopfzeile, die aus einer Suchleiste und Navigationslinks zu den Pull-Anfragen, Problemen und Gists des Repositoriums besteht. Neben den Navigationslinks gibt es eine Glockenbenachrichtigung und einen Link zu Ihrem Konto. Darunter der Name des Besitzer-Repositoriums gefolgt von einem Schrägstrich und dem Repositoriums-Namen. Darunter eine horizontale Navigationsleiste, bestehend aus verschiedenen Tabs, die sich auf Ihr Repositorium beziehen, der Code-Tab ist ausgewählt und zeigt eine Dokumentation an, die erklärt, wie man ein Repositorium erstellt oder wie man von der Befehlszeile aus pusht.](github-repo.png)

### Hochladen Ihrer Dateien auf GitHub

1. Auf der aktuellen Seite interessiert Sie der Abschnitt _…or push an existing repository from the command line_. Sie sollten zwei Zeilen Code in diesem Abschnitt sehen. Kopieren Sie die gesamte erste Zeile, fügen Sie sie in die Befehlszeile ein und drücken Sie die Eingabetaste. Der Befehl sollte ungefähr so aussehen:

   ```bash
   git remote add origin https://github.com/chrisdavidmills/my-repository.git
   ```

2. Geben Sie als Nächstes die folgenden zwei Befehle ein, indem Sie nach jedem Befehl die Eingabetaste drücken. Diese bereiten den Code für das Hochladen auf GitHub vor und weisen Git an, diese Dateien zu verwalten.

   ```bash
   git add --all
   git commit -m 'adding my files to my repository'
   ```

3. Drücken Sie schließlich den Code hoch zu GitHub, indem Sie zur GitHub-Webseite zurückkehren, auf der Sie sich befinden, und im Terminal die zweite der beiden Befehle aus dem Abschnitt _…or push an existing repository from the command line_ eingeben:

   ```bash
   git push -u origin main
   ```

4. Jetzt müssen Sie GitHub Pages in Ihrem Repository aktivieren. Gehen Sie dazu von der Startseite Ihres Repositories zu _Settings_, dann wählen Sie _Pages_ aus der Seitenleiste auf der linken Seite. Unter _Source_ wählen Sie den "main" Branch. Die Seite sollte aktualisieren.
5. Gehen Sie erneut zum Abschnitt GitHub Pages, und Sie sollten eine Zeile der Form "Your site is ready to be published at `https://xxxxxx`." sehen.
6. Wenn Sie auf diese URL klicken, sollten Sie zu einer Live-Version Ihres Beispiels gelangen, vorausgesetzt, die Startseite heißt `index.html` — es geht standardmäßig zu diesem Einstiegspunkt. Wenn der Einstiegspunkt Ihrer Website anders heißt, z.B. `myPage.html`, müssen Sie zu `https://xxxxxx/myPage.html` gehen.

### Weiterführendes Wissen über GitHub

Wenn Sie mehr Änderungen an Ihrer Testsite vornehmen und diese auf GitHub hochladen möchten, müssen Sie die Änderungen an Ihren Dateien wie zuvor vornehmen. Dann müssen Sie die folgenden Befehle eingeben (nach jedem die Eingabetaste drücken), um diese Änderungen auf GitHub hochzuschieben:

```bash
git add --all
git commit -m 'another commit'
git push
```

Sie können _another commit_ durch eine passendere Nachricht ersetzen, um zu beschreiben, welche Änderung Sie gerade gemacht haben.

Wir haben die Oberfläche von Git kaum angekratzt. Um mehr zu erfahren, schauen Sie sich unsere [Git und GitHub](/de/docs/Learn_web_development/Core/Version_control) Seite an.
