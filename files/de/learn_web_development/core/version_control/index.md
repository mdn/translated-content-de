---
title: Versionskontrolle
slug: Learn_web_development/Core/Version_control
l10n:
  sourceCommit: 03e93e0948768ea78474e77a53795698ebca5836
---

{{PreviousMenu("Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core")}}

Versionskontrollwerkzeuge (oft **Versionskontrollsysteme** oder **VCS** genannt) sind ein wesentlicher Bestandteil moderner Coding-Workflows – zum Sichern von Code, zur Zusammenarbeit an Codebasen und zum Zurücksetzen auf frühere Versionen, falls erforderlich.

[Git](https://git-scm.com/) ist ein Beispiel für ein Versionskontrollwerkzeug. [GitHub](https://github.com/) hingegen ist eine Website und Infrastruktur, die einen Git-Server sowie eine Reihe nützlicher Werkzeuge für die Arbeit mit Git-Repositories bereitstellt, sowohl einzeln als auch im Team. Mit GitHub können Sie Probleme im Code melden, Code gemeinsam überprüfen und Projektmanagementfunktionen nutzen, etwa zum Priorisieren von Issues, Zuweisen von Aufgaben, Planen von Projekten und mehr.

Dieses Modul führt Sie durch die Grundlagen der Versionskontrolle mit Git und GitHub.

## Voraussetzungen

- Ein Desktop-Computer, auf dem Git installiert ist (siehe die [Git-Downloadseite](https://git-scm.com/downloads/)).
- Ein Werkzeug zur Verwendung von Git. Je nachdem, wie Sie bevorzugt arbeiten, können Sie Folgendes verwenden:
  - Einen [Git-GUI-Client](https://git-scm.com/downloads/guis/) (wir empfehlen [GitHub Desktop](https://desktop.github.com/download/), [SourceTree](https://www.sourcetreeapp.com/) oder [Git Kraken](https://gitkraken.com/)).
  - Ein Befehlszeilen-/Terminalfenster (lesen Sie unseren [Schnellkurs zur Befehlszeile](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) als Einführung).
- Ein [GitHub-Konto](https://github.com/signup). Falls Sie noch keines haben, registrieren Sie sich jetzt über den angegebenen Link.

## Leitfäden

- [Was ist GitHub? (von GitHub)](https://docs.github.com/en/get-started/start-your-journey/what-is-github)
  - : Hier wird erläutert, was Git und GitHub sind, wie sie zusammenarbeiten und wie Sie beginnen können.
- [Hallo, Welt (von GitHub)](https://docs.github.com/en/get-started/using-github/hello-world)
  - : Dieser praktische Leitfaden beginnt direkt mit der Verwendung von GitHub und vermittelt die Grundlagen von Git, etwa das Erstellen von Repositories und Branches, das Erstellen von Commits sowie das Öffnen und Zusammenführen von Pull Requests.
- [Git verwenden (von GitHub)](https://docs.github.com/en/get-started/using-git)
  - : Das Git-Handbuch geht etwas mehr ins Detail und erklärt, was ein Versionskontrollwerkzeug und ein Repository sind, wie das grundlegende GitHub-Modell funktioniert, Git-Befehle und Beispiele sowie mehr.
- [Zu einem Projekt beitragen (von GitHub)](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project)
  - : Das Forken von Projekten ist unverzichtbar, wenn Sie zu fremdem Code beitragen möchten. Dieser Leitfaden erklärt, wie das funktioniert.
- [Über Pull Requests (von GitHub)](https://docs.github.com/en/pull-requests/reference/pull-requests)
  - : Ein nützlicher Leitfaden zum Verwalten von Pull Requests. Mit diesen Anfragen schlagen Sie Codeänderungen für das Repository einer anderen Person vor, damit diese sie überprüfen und möglicherweise in die Haupt-Codebasis übernehmen kann.
- [Über Issues (von GitHub)](https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues)
  - : Issues sind wie ein Forum für Ihr GitHub-Projekt, in dem Personen Fragen stellen und Probleme melden können und Sie Aktualisierungen verwalten können (beispielsweise Personen zum Beheben von Issues zuweisen, das Issue präzisieren oder Personen mitteilen, dass etwas behoben wurde). Dieser Artikel erklärt Ihnen alles Wissenswerte über Issues.

> [!NOTE]
> Wenn Sie tiefer in Git einsteigen, werden Sie feststellen, dass leicht etwas schiefgehen kann, sobald Sie kompliziertere Befehle verwenden. Keine Sorge: Selbst professionelle Webentwickler finden Git manchmal verwirrend und lösen Probleme häufig, indem sie im Web nach Lösungen suchen oder Websites wie [Flight rules for Git](https://github.com/k88hudson/git-flight-rules) und [Dangit, git!](https://dangitgit.com/) konsultieren.

> [!NOTE]
> Scrimbas [Intro to Git](https://scrimba.com/intro-to-git-c0l4grs2sa) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine praktische Einführung in die Verwendung von Git und GitHub.

## Siehe auch

- Weitere nützliche Themen in der GitHub-Dokumentation umfassen:
  - [Den GitHub-Flow verstehen](https://docs.github.com/en/get-started/using-github/github-flow)
  - [Merge-Konflikte beheben](https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests)
  - [Dateien mit .gitignore ignorieren](https://docs.github.com/en/get-started/git-basics/ignoring-files)
  - [Authentifizierung bei GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github)
  - [Markdown meistern](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) (das Textformat, das Sie in PRs, Issue-Kommentaren und `.md`-Dateien verwenden).
  - [Erste Schritte mit GitHub Pages](https://docs.github.com/en/pages/quickstart) (wie Sie Demos und Websites auf GitHub veröffentlichen).
- [Liste der Git-Befehle](https://git-scm.com/docs)
- [Git-Branching lernen](https://learngitbranching.js.org/)
- [Flight rules for Git](https://github.com/k88hudson/git-flight-rules) (eine sehr nützliche Sammlung von Möglichkeiten, bestimmte Dinge in Git zu erreichen, einschließlich der Korrektur von Fehlern).
- [Dangit, git!](https://dangitgit.com/) (eine weitere nützliche Sammlung, speziell zu Möglichkeiten, Fehler zu korrigieren).

{{PreviousMenu("Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core")}}
