---
title: Versionskontrolle
slug: Learn_web_development/Core/Version_control
l10n:
  sourceCommit: 1dc2c39b38fcfe047ea29d33a3d97c01b2791539
---

{{PreviousMenu("Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core")}}

Werkzeuge zur Versionskontrolle (oft **Versionskontrollsysteme** oder **VCS** genannt) sind ein wesentlicher Bestandteil moderner Arbeitsabläufe beim Programmieren. Sie dienen dazu, Code zu sichern, gemeinsam an Codebasen zu arbeiten und bei Bedarf zu früheren Versionen zurückzukehren.

[Git](https://git-scm.com/) ist ein Beispiel für ein Werkzeug zur Versionskontrolle. [GitHub](https://github.com/) hingegen ist eine Website und Infrastruktur, die einen Git-Server sowie eine Reihe nützlicher Werkzeuge für die Arbeit mit Git-Repositories bereitstellt – sowohl für Einzelpersonen als auch für Teams. Auf GitHub können Sie Probleme mit dem Code melden, Code gemeinsam überprüfen und Projektmanagementfunktionen nutzen, etwa um Issues zu sichten und zu priorisieren, Aufgaben zuzuweisen und Projekte zu planen.

Dieses Modul führt Sie anhand von Git und GitHub durch die Grundlagen der Versionskontrolle.

## Voraussetzungen

- Ein Desktop-Computer, auf dem Git installiert ist (siehe die [Git-Downloadseite](https://git-scm.com/downloads/)).
- Ein Werkzeug, mit dem Sie Git verwenden können. Je nach bevorzugter Arbeitsweise können Sie Folgendes nutzen:
  - Einen [Git-GUI-Client](https://git-scm.com/downloads/guis/) (wir empfehlen [GitHub Desktop](https://desktop.github.com/download/), [Sourcetree](https://www.sourcetreeapp.com/) oder [GitKraken](https://www.gitkraken.com/)).
  - Eine Befehlszeile oder ein Terminalfenster (eine Einführung finden Sie in unserem [Befehlszeilen-Crashkurs](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line)).
- Ein [GitHub-Konto](https://github.com/signup). Wenn Sie noch keines haben, registrieren Sie sich jetzt über den angegebenen Link.

## Leitfäden

- [Was ist GitHub? (von GitHub)](https://docs.github.com/en/get-started/start-your-journey/what-is-github)
  - : Hier erfahren Sie, was Git und GitHub sind, wie sie zusammenarbeiten und wie Sie beginnen können.
- [Hello, World (von GitHub)](https://docs.github.com/en/get-started/using-github/hello-world)
  - : Dieser praxisorientierte Leitfaden führt Sie direkt in die Nutzung von GitHub ein und vermittelt Git-Grundlagen wie das Erstellen von Repositories und Branches, das Anlegen von Commits sowie das Öffnen und Zusammenführen von Pull Requests.
- [Git verwenden (von GitHub)](https://docs.github.com/en/get-started/using-git)
  - : Das Git-Handbuch geht etwas mehr ins Detail. Es erklärt unter anderem, was ein Werkzeug zur Versionskontrolle und ein Repository sind, wie das grundlegende GitHub-Modell funktioniert, und zeigt Git-Befehle und Beispiele.
- [Zu einem Projekt beitragen (von GitHub)](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project)
  - : Wenn Sie zum Code einer anderen Person beitragen möchten, ist es wichtig, Projekte zu forken. Dieser Leitfaden erklärt, wie das geht.
- [Über Pull Requests (von GitHub)](https://docs.github.com/en/pull-requests/reference/pull-requests)
  - : Ein nützlicher Leitfaden zum Umgang mit Pull Requests. Mit ihnen schlagen Sie Änderungen am Code im Repository einer anderen Person vor, damit diese die Änderungen überprüfen und möglicherweise in die Hauptcodebasis übernehmen kann.
- [Über Issues (von GitHub)](https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues)
  - : Issues sind wie ein Forum für Ihr GitHub-Projekt: Andere können Fragen stellen und Probleme melden, während Sie deren Bearbeitung organisieren können – beispielsweise Personen mit der Behebung beauftragen, ein Problem genauer beschreiben oder mitteilen, dass es behoben wurde. Dieser Artikel vermittelt Ihnen das Wichtigste über Issues.
- [Ihre Website veröffentlichen > Welchen Ansatz empfehlen wir?](/de/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website#what_approach_would_we_recommend)
  - : Eine Schritt-für-Schritt-Anleitung zum Veröffentlichen einer einfachen Website mit GitHub Pages, einschließlich Links zur passenden GitHub-Dokumentation.

> [!NOTE]
> Wenn Sie sich eingehender mit Git beschäftigen, werden Sie feststellen, dass bei komplexeren Befehlen leicht etwas schiefgehen kann. Keine Sorge: Selbst professionelle Webentwickler finden Git manchmal verwirrend und lösen Probleme häufig, indem sie im Web nach Lösungen suchen oder Websites wie [Flight rules for Git](https://github.com/k88hudson/git-flight-rules) und [Dangit, git!](https://dangitgit.com/) zurate ziehen.

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
- [Git-Branching lernen](https://learngitbranching.js.org/)
- [Flight rules for Git](https://github.com/k88hudson/git-flight-rules) (eine sehr nützliche Sammlung von Vorgehensweisen für bestimmte Aufgaben in Git, einschließlich der Korrektur von Fehlern).
- [Dangit, git!](https://dangitgit.com/) (eine weitere nützliche Sammlung, die sich speziell mit der Korrektur von Fehlern befasst).

{{PreviousMenu("Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core")}}
