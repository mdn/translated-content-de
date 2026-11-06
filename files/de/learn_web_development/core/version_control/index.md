---
title: Versionskontrolle
slug: Learn_web_development/Core/Version_control
l10n:
  sourceCommit: 2a563c927890794b513523649ccfbbe48d336465
---

{{PreviousMenu("Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core")}}

Werkzeuge zur Versionskontrolle (oft **Versionskontrollsysteme** oder **VCS** genannt) sind ein wesentlicher Bestandteil moderner Arbeitsabläufe bei der Softwareentwicklung: Sie dienen dazu, Code zu sichern, gemeinsam an Codebasen zu arbeiten und bei Bedarf zu früheren Versionen zurückzukehren.

[Git](https://git-scm.com/) ist ein Beispiel für ein Werkzeug zur Versionskontrolle. [GitHub](https://github.com/) hingegen ist eine Website und Infrastruktur, die einen Git-Server sowie eine Reihe nützlicher Werkzeuge für die Arbeit mit Git-Repositories bereitstellt – sowohl für Einzelpersonen als auch für Teams. Auf GitHub können Sie Probleme mit dem Code melden, Code gemeinsam überprüfen und Projektmanagementfunktionen nutzen, etwa um Issues zu sichten und einzuordnen, Aufgaben zuzuweisen und Projekte zu planen.

Dieses Modul führt Sie anhand von Git und GitHub durch die Grundlagen der Versionskontrolle.

## Voraussetzungen

- Ein Desktop-Computer, auf dem Git installiert ist (siehe die [Git-Downloadseite](https://git-scm.com/downloads/)).
- Ein Werkzeug, mit dem Sie Git verwenden können. Je nachdem, wie Sie arbeiten möchten, können Sie Folgendes verwenden:
  - Einen [Git-GUI-Client](https://git-scm.com/downloads/guis/) (wir empfehlen [GitHub Desktop](https://desktop.github.com/download/), [SourceTree](https://www.sourcetreeapp.com/) oder [Git Kraken](https://www.gitkraken.com/)).
  - Eine Befehlszeile beziehungsweise ein Terminalfenster (eine Einführung finden Sie in unserem [Schnellkurs zur Befehlszeile](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line)).
- Ein [GitHub-Konto](https://github.com/signup). Falls Sie noch keines haben, registrieren Sie sich über den angegebenen Link.

## Leitfäden

- [Was ist GitHub? (von GitHub)](https://docs.github.com/en/get-started/start-your-journey/what-is-github)
  - : Hier erfahren Sie, was Git und GitHub sind, wie sie zusammenarbeiten und wie Sie loslegen.
- [Hello, World (von GitHub)](https://docs.github.com/en/get-started/using-github/hello-world)
  - : Dieser praxisorientierte Leitfaden führt Sie direkt in die Verwendung von GitHub ein. Sie lernen Git-Grundlagen kennen, etwa das Erstellen von Repositories und Branches, das Erstellen von Commits sowie das Öffnen und Mergen von Pull Requests.
- [Git verwenden (von GitHub)](https://docs.github.com/en/get-started/using-git)
  - : Das Git-Handbuch geht etwas mehr ins Detail: Es erklärt, was ein Werkzeug zur Versionskontrolle und was ein Repository ist, wie das grundlegende GitHub-Modell funktioniert, und behandelt Git-Befehle, Beispiele und mehr.
- [Zu einem Projekt beitragen (von GitHub)](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project)
  - : Wenn Sie zum Code anderer beitragen möchten, ist das Forken von Projekten unerlässlich. Dieser Leitfaden erklärt, wie das geht.
- [Über Pull Requests (von GitHub)](https://docs.github.com/en/pull-requests/reference/pull-requests)
  - : Ein nützlicher Leitfaden zum Verwalten von Pull Requests. Mit solchen Anfragen schlagen Sie Änderungen am Code eines fremden Repositories vor, damit dessen Verantwortliche sie überprüfen und gegebenenfalls in die Haupt-Codebasis mergen können.
- [Über Issues (von GitHub)](https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues)
  - : Issues sind wie ein Forum für Ihr GitHub-Projekt: Andere können Fragen stellen und Probleme melden, während Sie die Bearbeitung verwalten können – beispielsweise Personen mit der Behebung beauftragen, Probleme näher erläutern oder mitteilen, dass sie behoben wurden. Dieser Artikel erklärt, was Sie über Issues wissen müssen.
- [Ihre Website veröffentlichen > Welchen Ansatz empfehlen wir?](/de/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website#what_approach_would_we_recommend)
  - : Eine Schritt-für-Schritt-Anleitung zur Veröffentlichung einer einfachen Website mit GitHub Pages, mit Links zur passenden GitHub-Dokumentation.

> [!NOTE]
> Wenn Sie sich eingehender mit Git beschäftigen, werden Sie feststellen, dass bei komplizierteren Befehlen leicht Fehler passieren können. Keine Sorge: Auch erfahrene Webentwickler finden Git manchmal verwirrend. Häufig lösen sie Probleme, indem sie im Web nach Lösungen suchen oder Seiten wie [Flight rules for Git](https://github.com/k88hudson/git-flight-rules) und [Dangit, git!](https://dangitgit.com/) zurate ziehen.

> [!NOTE]
> Scrimbas [Einführung in Git](https://scrimba.com/intro-to-git-c0l4grs2sa) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine praxisorientierte Einführung in die Verwendung von Git und GitHub.

## Siehe auch

- Weitere nützliche Themen in der GitHub-Dokumentation:
  - [Den GitHub-Workflow verstehen](https://docs.github.com/en/get-started/using-github/github-flow)
  - [Merge-Konflikte beheben](https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests)
  - [Dateien mit .gitignore ignorieren](https://docs.github.com/en/get-started/git-basics/ignoring-files)
  - [Authentifizierung bei GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github)
  - [Markdown beherrschen](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) (das Textformat, in dem Sie Pull Requests, Issue-Kommentare und `.md`-Dateien verfassen).
- [Liste der Git-Befehle](https://git-scm.com/docs)
- [Git-Branches kennenlernen](https://learngitbranching.js.org/)
- [Flight rules for Git](https://github.com/k88hudson/git-flight-rules) (eine sehr nützliche Sammlung von Anleitungen für bestimmte Aufgaben in Git, einschließlich der Behebung von Fehlern).
- [Dangit, git!](https://dangitgit.com/) (eine weitere nützliche Sammlung, die sich speziell mit der Behebung von Fehlern befasst).

{{PreviousMenu("Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core")}}
