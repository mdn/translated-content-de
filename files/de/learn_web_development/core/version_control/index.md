---
title: Versionskontrolle
slug: Learn_web_development/Core/Version_control
l10n:
  sourceCommit: d50a52075711e21da27bce5ee24f6334b56cf0f3
---

{{PreviousMenu("Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core")}}

Werkzeuge zur Versionskontrolle (oft **Versionskontrollsysteme** oder **VCS** genannt) sind ein wesentlicher Bestandteil moderner Arbeitsabläufe bei der Softwareentwicklung. Sie dienen dazu, Code zu sichern, gemeinsam an Codebasen zu arbeiten und bei Bedarf zu früheren Versionen zurückzukehren.

[Git](https://git-scm.com/) ist ein Beispiel für ein Werkzeug zur Versionskontrolle. [GitHub](https://github.com/) hingegen ist eine Website und Infrastruktur, die einen Git-Server sowie zahlreiche nützliche Werkzeuge für die Arbeit mit Git-Repositories bereitstellt – sowohl für Einzelpersonen als auch für Teams. Auf GitHub können Sie Probleme mit dem Code melden und Code gemeinsam überprüfen. Außerdem bietet GitHub Funktionen für das Projektmanagement, etwa zum Sichten von Issues, Zuweisen von Aufgaben und Planen von Projekten.

Dieses Modul führt Sie anhand von Git und GitHub durch die Grundlagen der Versionskontrolle.

## Voraussetzungen

- Ein Desktop-Computer, auf dem Git installiert ist (siehe die [Git-Downloadseite](https://git-scm.com/downloads/)).
- Ein Werkzeug zur Nutzung von Git. Je nachdem, wie Sie arbeiten möchten, können Sie Folgendes verwenden:
  - Einen [Git-GUI-Client](https://git-scm.com/downloads/guis/) (wir empfehlen [GitHub Desktop](https://desktop.github.com/download/), [SourceTree](https://www.sourcetreeapp.com/) oder [Git Kraken](https://gitkraken.com/)).
  - Eine Kommandozeile oder ein Terminalfenster (eine Einführung finden Sie in unserem [Schnellkurs zur Kommandozeile](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line)).
- Ein [GitHub-Konto](https://github.com/signup). Falls Sie noch keines haben, registrieren Sie sich über den angegebenen Link.

## Leitfäden

- [Was ist GitHub? (von GitHub)](https://docs.github.com/en/get-started/start-your-journey/what-is-github)
  - : Hier erfahren Sie, was Git und GitHub sind, wie sie zusammenarbeiten und wie Sie beginnen können.
- [Hello, World (von GitHub)](https://docs.github.com/en/get-started/using-github/hello-world)
  - : Dieser praktische Leitfaden führt Sie direkt in die Nutzung von GitHub ein und vermittelt Git-Grundlagen wie das Erstellen von Repositories und Branches, das Anlegen von Commits sowie das Öffnen und Zusammenführen von Pull Requests.
- [Git verwenden (von GitHub)](https://docs.github.com/en/get-started/using-git)
  - : Das Git-Handbuch geht etwas mehr ins Detail: Es erklärt, was ein Werkzeug zur Versionskontrolle und ein Repository sind, wie das grundlegende GitHub-Modell funktioniert, und behandelt Git-Befehle, Beispiele und weitere Themen.
- [Zu einem Projekt beitragen (von GitHub)](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project)
  - : Wenn Sie zum Code einer anderen Person beitragen möchten, ist es wichtig, das Projekt zu forken. Dieser Leitfaden erklärt, wie das geht.
- [Über Pull Requests (von GitHub)](https://docs.github.com/en/pull-requests/reference/pull-requests)
  - : Ein nützlicher Leitfaden zum Verwalten von Pull Requests. Mit ihnen schlagen Sie Änderungen am Code eines fremden Repositories vor, damit dessen Verantwortliche die Änderungen prüfen und gegebenenfalls in die Hauptcodebasis übernehmen können.
- [Über Issues (von GitHub)](https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues)
  - : Issues sind eine Art Forum für Ihr GitHub-Projekt: Andere können Fragen stellen und Probleme melden, während Sie die Bearbeitung koordinieren können – beispielsweise indem Sie Personen mit der Behebung beauftragen, ein Problem genauer beschreiben oder mitteilen, dass es behoben wurde. Dieser Artikel erklärt, was Sie über Issues wissen müssen.
- [Ihre Website veröffentlichen > Welchen Ansatz empfehlen wir?](/de/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website#what_approach_would_we_recommend)
  - : Eine Schritt-für-Schritt-Anleitung zur Veröffentlichung einer einfachen Website mit GitHub Pages, mit Links zur passenden GitHub-Dokumentation.

> [!NOTE]
> Wenn Sie sich eingehender mit Git beschäftigen, werden Sie feststellen, dass bei der Verwendung komplexerer Befehle leicht etwas schiefgehen kann. Keine Sorge: Selbst erfahrene Webentwickler finden Git manchmal verwirrend. Häufig lösen sie Probleme, indem sie im Web nach Lösungen suchen oder Seiten wie [Flight rules for Git](https://github.com/k88hudson/git-flight-rules) und [Dangit, git!](https://dangitgit.com/) zurate ziehen.

> [!NOTE]
> Scrimbas [Einführung in Git](https://scrimba.com/intro-to-git-c0l4grs2sa) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine praktische Einführung in die Nutzung von Git und GitHub.

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
