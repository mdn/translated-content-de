---
title: Wie benutze ich GitHub Pages?
slug: Learn_web_development/Howto/Tools_and_setup/Using_GitHub_pages
l10n:
  sourceCommit: 479ea4c8bff4b900a7968413287c77dde2b0c20f
---

[GitHub](https://github.com/) ist eine Plattform für "soziales Codieren". Sie ermöglicht es Ihnen, Code-Repositorien im [Git](https://git-scm.com/) **Versionskontrollsystem** zu speichern. Sie können dann an Codeprojekten zusammenarbeiten, und das System ist standardmäßig quelloffen, was bedeutet, dass jeder auf der Welt Ihren GitHub-Code finden, verwenden, davon lernen und ihn verbessern kann. Sie können das auch mit dem Code anderer Leute tun! Dieser Artikel bietet einen grundlegenden Leitfaden zur Veröffentlichung von Inhalten mit der `gh-pages` Funktion von GitHub.

## Veröffentlichungsinhalt

GitHub ist eine sehr wichtige und nützliche Gemeinschaft, in die es sich lohnt, sich zu engagieren, und Git/GitHub ist ein sehr populäres [Versionskontrollsystem](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) — die meisten Tech-Unternehmen verwenden es heute in ihrem Arbeitsablauf. GitHub hat eine sehr nützliche Funktion namens [GitHub Pages](https://pages.github.com/), die es Ihnen ermöglicht, Website-Code live im Web zu veröffentlichen.

### Grundlegende GitHub-Einrichtung

1. Installieren Sie zuerst [Git](https://git-scm.com/downloads) auf Ihrem Computer. Dies ist die zugrunde liegende Versionskontrollsystem-Software, auf der GitHub basiert.
2. Melden Sie sich als nächstes für ein [GitHub-Konto](https://github.com/signup) an. Es ist einfach und unkompliziert.
3. Sobald Sie sich angemeldet haben, loggen Sie sich mit Ihrem Benutzernamen und Passwort bei [github.com](https://github.com/) ein.

### Ihren Code zum Hochladen vorbereiten

Sie können jeden beliebigen Code in einem GitHub-Repository speichern, aber um die GitHub Pages-Funktion voll zu nutzen, sollte Ihr Code wie eine typische Website strukturiert sein, z.B. mit einem primären Einstiegspunkt, der eine HTML-Datei namens `index.html` ist.

Eine weitere Sache, die Sie tun müssen, bevor Sie weitermachen, ist, Ihr Codeverzeichnis als ein Git-Repository zu initialisieren. Um dies zu tun:

1. Navigieren Sie in der Befehlszeile zu Ihrem `test-site`-Verzeichnis (oder wie auch immer Sie das Verzeichnis genannt haben, das Ihre Website enthält). Verwenden Sie dazu den Befehl `cd` (d.h. "**c**hange **d**irectory"). So würde der Befehl aussehen, wenn Sie Ihre Website in einem Verzeichnis namens `test-site` auf Ihrem Desktop abgelegt haben:

   ```bash
   cd Desktop/test-site
   ```

2. Wenn die Befehlszeile auf Ihr Website-Verzeichnis zeigt, geben Sie den folgenden Befehl ein, der dem `git`-Tool mitteilt, das Verzeichnis in ein Git-Repository zu verwandeln:

   ```bash
   git init
   ```

#### Ein Exkurs zu Befehlszeilenschnittstellen

Der beste Weg, um Ihren Code auf GitHub hochzuladen, ist über die Befehlszeile — dies ist ein Fenster, in dem Sie Befehle eingeben, um Dinge zu tun, wie z.B. Dateien zu erstellen und Programme auszuführen, anstatt innerhalb einer Benutzeroberfläche zu klicken. Es sieht ungefähr so aus:

![Terminal/Befehlsaufforderung geöffnet. Es wurde noch kein Befehl eingegeben.](command-line.png)

> [!NOTE]
> Sie könnten auch in Betracht ziehen, eine [Git grafische Benutzeroberfläche](https://git-scm.com/downloads/guis) zu verwenden, um dieselbe Arbeit zu erledigen, wenn Sie sich mit der Befehlszeile unwohl fühlen.

Jedes Betriebssystem verfügt über ein Befehlszeilenwerkzeug:

- **Windows**: **Eingabeaufforderung** kann durch Drücken der Windows-Taste aufgerufen werden, indem Sie _Eingabeaufforderung_ eingeben und es aus der erscheinenden Liste auswählen. Beachten Sie, dass Windows eigene Befehlskonventionen hat, die von Linux und macOS abweichen, sodass die untenstehenden Befehle auf Ihrem Computer variieren können.
- **macOS**: **Terminal** finden Sie unter _Programme > Dienstprogramme_.
- **Linux**: Normalerweise können Sie ein Terminal mit _Strg + Alt + T_ öffnen. Wenn das nicht funktioniert, suchen Sie nach **Terminal** in einer App-Leiste oder einem Menü.

Dies mag zunächst etwas beängstigend erscheinen, aber keine Sorge — Sie werden bald die Grundlagen beherrschen. Sie sagen dem Computer, dass er etwas im Terminal tun soll, indem Sie einen Befehl eingeben und Enter drücken, wie oben gezeigt.

### Erstellen eines Repositorys für Ihren Code

1. Als nächstes müssen Sie ein neues Repository für Ihre Dateien erstellen. Klicken Sie oben rechts auf der GitHub-Homepage auf Plus (+) und wählen Sie _New Repository_.
2. Auf dieser Seite geben Sie im Feld _Repository name_ einen Namen für Ihr Code-Repository ein, z.B. _my-repository_.
3. Füllen Sie auch eine Beschreibung aus, um zu sagen, was Ihr Repository enthalten wird. Ihr Bildschirm sollte so aussehen:
   ![Seite für neues Repository im Browser geöffnet, Repository-Inhabereingabe und Repository-Name sind ausgefüllt, ebenso wie die optionale Beschreibungseingabe. Das öffentliche Kontrollkästchen ist ausgewählt, das private nicht, ebenso wie das Kontrollkästchen "Dieses Repository mit einer Readme initialisieren".](create-new-repo.png)
4. Klicken Sie auf _Create repository_; dies sollte Sie zur folgenden Seite führen:
   ![Die Repository-Seite ist im Browser geöffnet, unterhalb des GitHub-Headers, der aus Suchleiste und Navigationslinks zum Repository, den Pull-Requests, Issues und Gists besteht. Neben den Navigationslinks eine Glockenbenachrichtigung und ein Link zu Ihrem Konto. Darunter der Name des Besitzers gefolgt von einem Schrägstrich mit dem Namen des Repositories. Darunter eine horizontale Navigationsleiste, die aus verschiedenen Registerkarten in Bezug auf Ihr Repository besteht, wobei die Code-Registerkarte ausgewählt ist, die eine Dokumentation erklärt, wie man ein Repository erstellt oder wie man von der Befehlszeile aus pusht.](github-repo.png)

### Hochladen Ihrer Dateien auf GitHub

1. Auf der aktuellen Seite interessiert Sie der Abschnitt _…or push an existing repository from the command line_. Sie sollten hier zwei Zeilen Code sehen, die aufgelistet sind. Kopieren Sie die gesamte erste Zeile, fügen Sie sie in die Befehlszeile ein und drücken Sie Enter. Der Befehl sollte ungefähr so aussehen:

   ```bash
   git remote add origin https://github.com/chrisdavidmills/my-repository.git
   ```

2. Geben Sie als nächstes die folgenden zwei Befehle ein und drücken Sie nach jedem Enter. Diese bereiten den Code für das Hochladen zu GitHub vor und teilen Git mit, diese Dateien zu verwalten.

   ```bash
   git add --all
   git commit -m 'adding my files to my repository'
   ```

3. Drücken Sie schließlich den Code zu GitHub, indem Sie zur GitHub-Webseite gehen, auf der Sie sich gerade befinden, und geben Sie in das Terminal die zweite der beiden Befehle aus dem Abschnitt _…or push an existing repository from the command line_ ein:

   ```bash
   git push -u origin main
   ```

4. Jetzt müssen Sie GitHub Pages für Ihr Repository aktivieren. Gehen Sie dafür von der Startseite Ihres Repositorys auf _Settings_, dann wählen Sie _Pages_ aus der Seitenleiste auf der linken Seite. Unter _Source_ wählen Sie den "main"-Branch. Die Seite sollte sich aktualisieren.
5. Gehen Sie erneut zum Abschnitt GitHub Pages, und Sie sollten eine Zeile der Form "Your site is ready to be published at `https://xxxxxx`." sehen.
6. Wenn Sie auf diese URL klicken, sollten Sie auf eine Live-Version Ihres Beispiels gelangen, vorausgesetzt, die Startseite heißt `index.html` — sie geht standardmäßig zu diesem Einstiegspunkt. Wenn der Einstiegspunkt Ihrer Seite anders heißt, z.B. `myPage.html`, müssen Sie zu `https://xxxxxx/myPage.html` gehen.

### Weiterführende GitHub-Kenntnisse

Wenn Sie weitere Änderungen an Ihrer Testseite vornehmen und diese auf GitHub hochladen möchten, müssen Sie die Änderungen an Ihren Dateien genau so vornehmen, wie Sie es zuvor getan haben. Dann müssen Sie die folgenden Befehle eingeben (und nach jedem Enter drücken), um diese Änderungen auf GitHub zu pushen:

```bash
git add --all
git commit -m 'another commit'
git push
```

Sie können _another commit_ durch eine passendere Nachricht ersetzen, um zu beschreiben, welche Änderung Sie gerade vorgenommen haben.

Wir haben erst an der Oberfläche von Git gekratzt. Um mehr zu erfahren, schauen Sie sich unsere [Git und GitHub](/de/docs/Learn_web_development/Core/Version_control) Seite an.
