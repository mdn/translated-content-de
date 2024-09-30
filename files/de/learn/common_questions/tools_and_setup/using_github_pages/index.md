---
title: Wie verwende ich GitHub Pages?
slug: Learn/Common_questions/Tools_and_setup/Using_GitHub_pages
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

[GitHub](https://github.com/) ist eine Seite für "soziales Programmieren". Sie ermöglicht es Ihnen, Code-Repositories zur Speicherung im [Git](https://git-scm.com/) **Versionskontrollsystem** hochzuladen. Sie können dann an Code-Projekten zusammenarbeiten, und das System ist standardmäßig Open Source, was bedeutet, dass jeder auf der Welt Ihren GitHub-Code finden, verwenden, daraus lernen und ihn verbessern kann. Das können Sie auch mit dem Code anderer Leute tun! Dieser Artikel bietet einen grundlegenden Leitfaden zum Veröffentlichen von Inhalten mit der gh-pages-Funktion von GitHub.

## Inhalte veröffentlichen

GitHub ist eine sehr wichtige und nützliche Community, an der Sie teilnehmen können, und Git/GitHub ist ein sehr beliebtes [Versionskontrollsystem](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) — die meisten Technologieunternehmen verwenden es mittlerweile in ihrem Arbeitsablauf. GitHub hat eine sehr nützliche Funktion namens [GitHub Pages](https://pages.github.com/), die es ermöglicht, Website-Code live im Web zu veröffentlichen.

### Grundlegende GitHub-Einrichtung

1. Installieren Sie zunächst [Git](https://git-scm.com/downloads) auf Ihrem Rechner. Dies ist die zugrunde liegende Software des Versionskontrollsystems, auf dem GitHub aufbaut.
2. Erstellen Sie als Nächstes ein [GitHub-Konto](https://github.com/signup). Es ist einfach und unkompliziert.
3. Nachdem Sie sich angemeldet haben, loggen Sie sich mit Ihrem Benutzernamen und Passwort bei [github.com](https://github.com/) ein.

### Ihren Code für den Upload vorbereiten

Sie können jeden gewünschten Code in einem GitHub-Repository speichern, aber um die GitHub Pages-Funktion optimal zu nutzen, sollte Ihr Code wie eine typische Website strukturiert sein, z. B. mit einem primären Einstiegspunkt in Form einer HTML-Datei namens `index.html`.

Bevor Sie fortfahren, müssen Sie auch Ihr Codeverzeichnis als Git-Repository initialisieren. Um dies zu tun:

1. Navigieren Sie mit der Befehlszeile zu Ihrem `test-site`-Verzeichnis (oder wie auch immer Sie das Verzeichnis mit Ihrer Website nennen). Verwenden Sie dafür den `cd`-Befehl (d.h. "**c**hange **d**irectory"). So würden Sie es eingeben, wenn sich Ihre Website in einem Verzeichnis namens `test-site` auf Ihrem Desktop befindet:

   ```bash
   cd Desktop/test-site
   ```

2. Wenn die Befehlszeile in Ihr Website-Verzeichnis zeigt, geben Sie den folgenden Befehl ein, der dem `git`-Tool mitteilt, das Verzeichnis in ein Git-Repository zu verwandeln:

   ```bash
   git init
   ```

#### Eine Randbemerkung zu Befehlszeilenschnittstellen

Der beste Weg, Ihren Code auf GitHub hochzuladen, ist über die Befehlszeile - dies ist ein Fenster, in dem Sie Befehle eingeben, um Dinge wie das Erstellen von Dateien und das Ausführen von Programmen zu erledigen, anstatt in einer Benutzeroberfläche zu klicken. Es sieht ungefähr so aus:

![Terminal/Befehlszeile geöffnet. Kein Befehl wurde eingegeben.](command-line.png)

> [!NOTE]
> Sie könnten auch in Betracht ziehen, eine [Git-Grafikbenutzeroberfläche](https://git-scm.com/downloads/guis) zu verwenden, um die gleiche Arbeit zu erledigen, wenn Sie sich mit der Befehlszeile unwohl fühlen.

Jedes Betriebssystem verfügt über ein Befehlszeilenwerkzeug:

- **Windows**: **Eingabeaufforderung** kann durch Drücken der Windows-Taste, Eingabe von _Eingabeaufforderung_ und Auswahl aus der erscheinenden Liste geöffnet werden. Beachten Sie, dass Windows eigene Befehlskonventionen hat, die sich von Linux und macOS unterscheiden, weshalb die Befehle unten auf Ihrem Computer abweichen können.
- **macOS**: **Terminal** ist unter _Programme > Dienstprogramme_ zu finden.
- **Linux**: In der Regel können Sie ein Terminal mit _Strg + Alt + T_ öffnen. Wenn das nicht funktioniert, suchen Sie nach **Terminal** in einer App-Leiste oder im Menü.

Dies mag zunächst etwas beängstigend erscheinen, aber keine Sorge — Sie werden sich schnell mit den Grundlagen vertraut machen. Sie befehlen dem Computer, indem Sie einen Befehl eingeben und die Eingabetaste drücken, wie oben gezeigt.

### Ein Repository für Ihren Code erstellen

1. Als Nächstes müssen Sie ein neues Repository für Ihre Dateien erstellen. Klicken Sie auf das Plus-Symbol (+) oben rechts auf der GitHub-Startseite und wählen Sie _Neues Repository_.
2. Geben Sie auf dieser Seite im Feld _Repository-Name_ einen Namen für Ihr Code-Repository ein, zum Beispiel _mein-repository_.
3. Füllen Sie auch eine Beschreibung aus, die angibt, was Ihr Repository enthalten wird. Ihr Bildschirm sollte so aussehen:
   ![Neue Repository-Seite im Browser geöffnet, Besitzer-Eingabe und Repository-Name sind ausgefüllt, dasselbe gilt für die optionale Beschreibungseingabe. Das öffentliche Kontrollkästchen ist ausgewählt, das private Kontrollkästchen nicht, ebenso wenig wie das Initialisieren dieses Repositorys mit einer Readme.](create-new-repo.png)
4. Klicken Sie auf _Repository erstellen_; dies sollte Sie zu folgender Seite führen:
   ![Die Repository-Seite ist im Browser geöffnet, unterhalb der GitHub-Header, bestehend aus Suchleiste und Navigationslinks zum Repositorys Pull Request, Issues und Gist. Neben den Navigationslinks, eine Benachrichtigungsglocke und ein Link zu Ihrem Konto. Unten der Name des Besitzers und das Repository gefolgt von einem Schrägstrich mit dem Namen des Repositorys. Darunter eine horizontale Navigationsleiste bestehend aus verschiedenen Tabs, die sich auf Ihr Repository beziehen, der Code-Tab ausgewählt, der eine Dokumentation erklärt, wie man ein Repository erstellt oder wie man vom Einsatz der Befehlszeile pusht.](github-repo.png)

### Ihre Dateien auf GitHub hochladen

1. Auf der aktuellen Seite interessiert Sie der Abschnitt _…or push an existing repository from the command line_. Sie sollten zwei Zeilen Code in diesem Abschnitt aufgelistet sehen. Kopieren Sie die erste Zeile vollständig, fügen Sie sie in die Befehlszeile ein und drücken Sie Enter. Der Befehl sollte ungefähr so aussehen:

   ```bash
   git remote add origin https://github.com/chrisdavidmills/my-repository.git
   ```

2. Geben Sie als Nächstes die folgenden zwei Befehle ein und drücken Sie nach jedem die Eingabetaste. Diese bereiten den Code für den Upload auf GitHub vor und weisen Git an, diese Dateien zu verwalten.

   ```bash
   git add --all
   git commit -m 'adding my files to my repository'
   ```

3. Schieben Sie schließlich den Code zu GitHub, indem Sie zur GitHub-Webseite gehen, auf der Sie sich gerade befinden, und den zweiten der beiden Befehle, die wir im Abschnitt _…or push an existing repository from the command line_ gesehen haben, ins Terminal eingeben:

   ```bash
   git push -u origin main
   ```

4. Jetzt müssen Sie GitHub Pages für Ihr Repository aktivieren. Um dies zu tun, wählen Sie auf der Startseite Ihres Repositories _Einstellungen_ und dann _Seiten_ in der Seitenleiste links. Unter _Quelle_ wählen Sie den "main"-Zweig. Die Seite sollte aktualisiert werden.
5. Gehen Sie erneut zum GitHub Pages-Bereich, und Sie sollten eine Zeile der Form "Ihre Seite ist bereit, unter `https://xxxxxx` veröffentlicht zu werden." sehen.
6. Wenn Sie auf diese URL klicken, sollten Sie zu einer Live-Version Ihres Beispiels gelangen, vorausgesetzt, die Homepage heißt `index.html` — diese wird automatisch als Einstiegspunkt verwendet. Wenn der Einstiegspunkt Ihrer Seite anders heißt, zum Beispiel `meineSeite.html`, müssen Sie zu `https://xxxxxx/meineSeite.html` gehen.

### Weiterführende GitHub-Kenntnisse

Wenn Sie weitere Änderungen an Ihrer Testseite vornehmen und diese auf GitHub hochladen möchten, müssen Sie die Änderung an Ihren Dateien genauso vornehmen wie zuvor. Dann müssen Sie die folgenden Befehle eingeben (nach jedem die Eingabetaste drücken), um diese Änderungen auf GitHub hochzuladen:

```bash
git add --all
git commit -m 'another commit'
git push
```

Sie können _ein weiterer Commit_ durch eine passendere Nachricht ersetzen, um zu beschreiben, welche Änderung Sie gerade vorgenommen haben.

Wir haben nur an der Oberfläche von Git gekratzt. Um mehr zu lernen, besuchen Sie unsere [Git und GitHub](/de/docs/Learn/Tools_and_testing/GitHub) Seite.
