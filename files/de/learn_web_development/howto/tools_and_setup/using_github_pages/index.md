---
title: Wie verwende ich GitHub Pages?
slug: Learn_web_development/Howto/Tools_and_setup/Using_GitHub_pages
l10n:
  sourceCommit: 1eae3d383ad47b5e21bf25764d1d35487ea52bb8
---

{{QuicklinksWithSubPages("/de/docs/Learn_web_development/Howto")}}

[GitHub](https://github.com/) ist eine "soziale Codierungs"-Website. Sie erlaubt Ihnen, Code-Repositorys hochzuladen, die im **Versionskontrollsystem** [Git](https://git-scm.com/) gespeichert werden. Sie können dann an Codeprojekten zusammenarbeiten, und das System ist standardmäßig quelloffen, was bedeutet, dass jeder auf der Welt Ihren GitHub-Code finden, verwenden, davon lernen und ihn verbessern kann. Sie können das auch mit dem Code anderer Leute tun! Dieser Artikel bietet einen grundlegenden Leitfaden zum Veröffentlichen von Inhalten mit der gh-pages-Funktion von GitHub.

## Veröffentlichung von Inhalten

GitHub ist eine sehr wichtige und nützliche Community, in der man sich engagieren kann, und Git/GitHub ist ein sehr beliebtes [Versionskontrollsystem](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) – die meisten Technologieunternehmen verwenden es mittlerweile in ihrem Arbeitsablauf. GitHub hat eine sehr nützliche Funktion namens [GitHub Pages](https://pages.github.com/), die es Ihnen ermöglicht, Website-Code live im Internet zu veröffentlichen.

### Grundlegende GitHub-Einrichtung

1. Installieren Sie zunächst [Git](https://git-scm.com/downloads) auf Ihrem Computer. Dies ist die Software für das zugrunde liegende Versionskontrollsystem, auf dem GitHub aufbaut.
2. Melden Sie sich als Nächstes für ein [GitHub-Konto an](https://github.com/signup). Es ist einfach und unkompliziert.
3. Sobald Sie sich angemeldet haben, loggen Sie sich mit Ihrem Benutzernamen und Passwort bei [github.com](https://github.com/) ein.

### Vorbereitung Ihres Codes für den Upload

Sie können jeden beliebigen Code in einem GitHub-Repository speichern, aber um die GitHub Pages-Funktion vollständig zu nutzen, sollte Ihr Code wie eine typische Website strukturiert sein, z. B. mit dem primären Einstiegspunkt als HTML-Datei namens `index.html`.

Bevor Sie weitermachen, müssen Sie Ihr Verzeichnis als Git-Repository initialisieren. Dazu:

1. Zeigen Sie die Befehlszeile auf Ihr `test-site`-Verzeichnis (oder wie auch immer Sie das Verzeichnis genannt haben, das Ihre Website enthält). Verwenden Sie dafür den Befehl `cd` (d. h. "**c**hange **d**irectory"). Hier ist, was Sie eingeben würden, wenn Sie Ihre Website in einem Verzeichnis namens `test-site` auf Ihrem Desktop abgelegt haben:

   ```bash
   cd Desktop/test-site
   ```

2. Wenn die Befehlszeile in das Verzeichnis Ihrer Website zeigt, geben Sie den folgenden Befehl ein, der das `git`-Tool anweist, das Verzeichnis in ein Git-Repository zu verwandeln:

   ```bash
   git init
   ```

#### Ein Hinweis zu Befehlszeilenschnittstellen

Der beste Weg, Ihren Code auf GitHub hochzuladen, ist über die Befehlszeile – dies ist ein Fenster, in dem Sie durch Eingabe von Befehlen Dinge wie das Erstellen von Dateien und das Ausführen von Programmen tun, anstatt in einer Benutzeroberfläche zu klicken. Es sieht etwa so aus:

![Geöffneter Terminal-/Befehlsaufforderungsbildschirm. Kein Befehl wurde eingegeben.](command-line.png)

> [!NOTE]
> Sie könnten auch erwägen, eine [Git-Grafikbenutzeroberfläche](https://git-scm.com/downloads/guis) zu verwenden, um dieselbe Arbeit zu erledigen, wenn Sie sich mit der Befehlszeile unwohl fühlen.

Jedes Betriebssystem wird mit einem Befehlszeilentool geliefert:

- **Windows**: **Eingabeaufforderung** kann durch Drücken der Windows-Taste, Eingabe von _Eingabeaufforderung_ und Auswahl aus der erscheinenden Liste aufgerufen werden. Beachten Sie, dass Windows eigene Befehlskonventionen hat, die sich von Linux und macOS unterscheiden, sodass die unten stehenden Befehle auf Ihrem Computer variieren können.
- **macOS**: **Terminal** kann unter _Programme > Dienstprogramme_ gefunden werden.
- **Linux**: In der Regel können Sie mit _Strg + Alt + T_ ein Terminal aufrufen. Wenn das nicht funktioniert, suchen Sie in einer App-Leiste oder einem Menü nach **Terminal**.

Das mag zunächst etwas beängstigend wirken, aber keine Sorge – Sie werden bald die Grundlagen beherrschen. Sie weisen den Computer an, etwas im Terminal zu tun, indem Sie einen Befehl eingeben und die Eingabetaste drücken, wie oben gezeigt.

### Erstellen eines Repos für Ihren Code

1. Als Nächstes müssen Sie ein neues Repo für Ihre Dateien erstellen. Klicken Sie auf der GitHub-Homepage oben rechts auf Plus (+) und wählen Sie _New Repository_.
2. Auf dieser Seite geben Sie im Feld _Repository name_ einen Namen für Ihr Code-Repository ein, zum Beispiel _my-repository_.
3. Füllen Sie auch eine Beschreibung aus, um anzugeben, was Ihr Repository enthalten wird. Ihr Bildschirm sollte folgendermaßen aussehen:
   ![Seite für das neue Repository im Browser geöffnet, Eingabe des Repository-Besitzers und der Repository-Name sind ausgefüllt, ebenso das optionale Beschreibungsfeld. Das Kästchen "öffentlich" ist ausgewählt, das Kästchen "privat" nicht, ebenso für das Initialisieren dieses Repositorys mit einer README-Datei.](create-new-repo.png)
4. Klicken Sie auf _Create repository_; dies sollte Sie zu folgender Seite führen:
   ![Die Repository-Seite ist im Browser geöffnet, unterhalb der GitHub-Kopfzeile besteht aus Suchleiste und Navigationslinks zu den Pull-Requests, Issues und Gists des Repositorys. Neben den Navigationslinks befindet sich eine Glocken-Benachrichtigung und ein Link zu Ihrem Konto. Darunter der Name des Repository-Besitzers gefolgt von einem Schrägstrich mit dem Namen des Repositorys. Unter einer horizontalen Navigationsleiste bestehend aus verschiedenen Tabs, die sich auf Ihr Repository beziehen, ist der Code-Tab ausgewählt, der eine Dokumentation erklärt, wie man ein Repository erstellt oder wie man vom Kommandozeilen aus pusht.](github-repo.png)

### Hochladen Ihrer Dateien auf GitHub

1. Auf der aktuellen Seite interessiert Sie der Abschnitt _…oder push an bestehendes Repository von der Kommandozeile_. Sie sollten zwei Zeilen Code in diesem Abschnitt sehen. Kopieren Sie die gesamte erste Zeile, fügen Sie sie in die Befehlszeile ein und drücken Sie Enter. Der Befehl sollte in etwa so aussehen:

   ```bash
   git remote add origin https://github.com/chrisdavidmills/my-repository.git
   ```

2. Geben Sie als Nächstes die folgenden zwei Befehle ein und drücken Sie nach jedem die Enter-Taste. Diese bereiten den Code für das Hochladen auf GitHub vor und weisen Git an, diese Dateien zu verwalten.

   ```bash
   git add --all
   git commit -m 'adding my files to my repository'
   ```

3. Zum Schluss pushen Sie den Code zu GitHub, indem Sie die zweite der beiden Befehle, die wir im Abschnitt _…oder push an bestehendes Repository von der Kommandozeile_ gesehen haben, in das Terminal eingeben.

   ```bash
   git push -u origin main
   ```

4. Nun müssen Sie GitHub Pages für Ihr Repository aktivieren. Gehen Sie dazu von der Startseite Ihres Repositorys aus zu _Settings_ und wählen Sie dann _Pages_ aus der linken Seitenleiste. Wählen Sie unter _Source_ den "main" Zweig aus. Die Seite sollte aktualisiert werden.
5. Gehen Sie erneut zum GitHub Pages-Bereich und Sie sollten eine Zeile der Form "Ihre Seite ist bereit, unter `https://xxxxxx` veröffentlicht zu werden." sehen.
6. Wenn Sie auf diese URL klicken, sollten Sie eine Live-Version Ihres Beispiels sehen, vorausgesetzt, die Homepage heißt `index.html` – es wird standardmäßig zu diesem Einstiegspunkt gehen. Wenn der Einstiegspunkt Ihrer Website anders genannt ist, z. B. `myPage.html`, müssen Sie zu `https://xxxxxx/myPage.html` gehen.

### Weitere GitHub-Kenntnisse

Wenn Sie weitere Änderungen an Ihrer Testseite vornehmen und diese auf GitHub hochladen möchten, müssen Sie die Änderungen an Ihren Dateien wie zuvor vornehmen. Dann müssen Sie die folgenden Befehle eingeben (nach jedem die Enter-Taste drücken), um diese Änderungen auf GitHub zu pushen:

```bash
git add --all
git commit -m 'another commit'
git push
```

Sie können _another commit_ durch eine passendere Nachricht ersetzen, die beschreibt, welche Änderung Sie gerade vorgenommen haben.

Wir haben die Oberfläche von Git kaum angeritzt. Um mehr zu lernen, schauen Sie auf unserer [Git und GitHub](/de/docs/Learn_web_development/Core/Version_control) Seite vorbei.
