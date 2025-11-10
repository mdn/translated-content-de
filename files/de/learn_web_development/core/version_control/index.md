---
title: Versionskontrolle
slug: Learn_web_development/Core/Version_control
l10n:
  sourceCommit: 57bc2729e3963907c0b54158ae1a31318a2ebbd1
---

{{PreviousMenu("Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core")}}

Versionskontrollwerkzeuge (oft **Versionskontrollsysteme** oder **VCS** genannt) sind ein wesentlicher Bestandteil moderner Codierungs-Workflows – zum Sichern von Code, zur Zusammenarbeit an Codebasen und zum Zurücksetzen auf frühere Versionen, falls erforderlich.

[Git](https://git-scm.com/) ist ein Beispiel für ein Versionskontrollwerkzeug. [GitHub](https://github.com/) hingegen ist eine Website und Infrastruktur, die einen Git-Server sowie eine Reihe nützlicher Werkzeuge für die Arbeit mit Git-Repositories bereitstellt, sowohl individuell als auch im Team. GitHub ermöglicht es Ihnen, Probleme mit dem Code zu melden, Code gemeinsam zu überprüfen und bietet Projektmanagementfunktionen wie das Priorisieren von Problemen, das Zuweisen von Aufgaben, das Planen von Projekten und mehr.

Dieses Modul führt Sie durch die Grundlagen der Versionskontrolle mit Git und GitHub.

## Voraussetzungen

- Ein Desktop-Computer mit darauf installiertem Git (siehe die [Git-Downloadseite](https://git-scm.com/downloads/)).
- Ein Werkzeug zur Nutzung von Git. Je nachdem, wie Sie gerne arbeiten, könnten Sie verwenden:
  - Einen [Git GUI-Client](https://git-scm.com/downloads/guis/) (wir empfehlen [GitHub Desktop](https://desktop.github.com/download/), [SourceTree](https://www.sourcetreeapp.com/) oder [Git Kraken](https://www.gitkraken.com/)).
  - Ein Befehlszeilen-/Terminalfenster (schauen Sie sich unser [Crashkurs zur Befehlszeile](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) für eine Einführung an).
- Ein [GitHub-Account](https://github.com/signup). Wenn Sie noch keinen haben, melden Sie sich jetzt über den bereitgestellten Link an.

## Leitfäden

- [Über GitHub und Git (von GitHub)](https://docs.github.com/en/get-started/start-your-journey/about-github-and-git)
  - : Dies umfasst, was Git und GitHub sind, wie sie zusammenarbeiten und wie Sie starten können.
- [Hallo, Welt (von GitHub)](https://docs.github.com/en/get-started/start-your-journey/hello-world)
  - : Dieser praktische Leitfaden führt direkt in die Nutzung von GitHub ein und vermittelt die Grundlagen von Git, wie das Erstellen von Repositories und Branches, das Erstellen von Commits und das Öffnen und Zusammenführen von Pull Requests.
- [Git verwenden (von GitHub)](https://docs.github.com/en/get-started/using-git)
  - : Das Git-Handbuch geht etwas tiefer ins Detail und erklärt, was ein Versionskontrollwerkzeug ist, was ein Repository ist, wie das grundlegende GitHub-Modell funktioniert, Git-Befehle und Beispiele und mehr.
- [Zu einem Projekt beitragen (von GitHub)](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project)
  - : Das Forken von Projekten ist wichtig, wenn Sie zu jemandes anderem Code beitragen möchten. Dieser Leitfaden erklärt, wie das geht.
- [Über Pull Requests (von GitHub)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
  - : Ein nützlicher Leitfaden zur Verwaltung von Pull Requests. Diese Anfragen sind, wie Sie Codeänderungen in jemandes anderem Repository vorschlagen, damit sie sie überprüfen und möglicherweise in die Hauptcodebasis integrieren können.
- [Über Issues (von GitHub)](https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues)
  - : Issues sind wie ein Forum für Ihr GitHub-Projekt, in dem Leute Fragen stellen und Probleme melden können, und Sie können Updates verwalten (zum Beispiel Personen zuweisen, um Probleme zu beheben, das Problem klären, Leute wissen lassen, dass Dinge behoben sind). Dieser Artikel erklärt, was Sie über Issues wissen müssen.

> [!NOTE]
> Wenn Sie tiefer in Git einsteigen, werden Sie feststellen, dass es leicht schiefgehen kann, wenn Sie beginnen, kompliziertere Befehle zu verwenden. Keine Sorge, selbst professionelle Webentwickler finden Git manchmal verwirrend und lösen Probleme oft, indem sie nach Lösungen im Internet suchen oder Seiten wie [Flight rules for Git](https://github.com/k88hudson/git-flight-rules) und [Dangit, git!](https://dangitgit.com/) konsultieren.

> [!NOTE]
> Scrimbas [Einführung in Git](https://scrimba.com/intro-to-git-c0l4grs2sa) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine praktische Einführung in die Nutzung von Git und GitHub.

## Siehe auch

- Andere nützliche Themen, die in GitHub-Dokumenten behandelt werden, sind:
  - [Den GitHub-Flow verstehen](https://docs.github.com/en/get-started/using-github/github-flow)
  - [Zusammenführungskonflikte lösen](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts)
  - [Dateien mit .gitignore ignorieren](https://docs.github.com/en/get-started/git-basics/ignoring-files)
  - [Authentifizierung bei GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github)
  - [Markdown meistern](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) (das Textformat, in dem Sie in PR, Issue-Kommentaren und `.md`-Dateien schreiben).
  - [Erste Schritte mit GitHub Pages](https://docs.github.com/en/pages/quickstart) (wie man Demos und Websites auf GitHub veröffentlicht).
- [Git-Befehlsliste](https://git-scm.com/docs)
- [Git-Branching lernen](https://learngitbranching.js.org/)
- [Flight rules for Git](https://github.com/k88hudson/git-flight-rules) (ein sehr nützliches Kompendium von Wegen, um spezifische Dinge in Git zu erreichen, einschließlich wie man Dinge korrigiert, wenn etwas schiefgelaufen ist).
- [Dangit, git!](https://dangitgit.com/) (ein weiteres nützliches Kompendium, speziell mit Wegen, um Dinge zu korrigieren, wenn etwas schiefgelaufen ist).

{{PreviousMenu("Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core")}}
