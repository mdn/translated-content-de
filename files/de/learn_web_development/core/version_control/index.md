---
title: Versionskontrolle
slug: Learn_web_development/Core/Version_control
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

{{PreviousMenu("Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core")}}

Versionskontrollwerkzeuge (oft als **Versionskontrollsysteme** oder **VCS** bezeichnet) sind ein wesentlicher Bestandteil moderner Kodierungsabläufe – zum Sichern von Code, zur Zusammenarbeit an Codebasen und um bei Bedarf zu früheren Versionen zurückzukehren.

[Git](https://git-scm.com/) ist ein Beispiel für ein Versionskontrollwerkzeug. [GitHub](https://github.com/) hingegen ist eine Website und Infrastruktur, die einen Git-Server sowie eine Reihe nützlicher Werkzeuge für die Arbeit mit Git-Repositorien bereitstellt, sowohl einzeln als auch im Team. GitHub ermöglicht es Ihnen, Probleme mit dem Code zu melden, Code gemeinsam zu überprüfen und bietet Projektmanagementfunktionen wie die Sortierung von Problemen, die Zuweisung von Aufgaben, die Planung von Projekten und mehr.

Dieses Modul führt Sie durch die Grundlagen der Versionskontrolle mit Git und GitHub.

## Voraussetzungen

- Ein Desktop-Computer mit installiertem Git (siehe die [Git-Download-Seite](https://git-scm.com/downloads/)).
- Ein Werkzeug zur Nutzung von Git. Abhängig davon, wie Sie arbeiten möchten, könnten Sie verwenden:
  - Einen [Git GUI-Client](https://git-scm.com/downloads/guis/) (wir würden [GitHub Desktop](https://desktop.github.com/download/), [SourceTree](https://www.sourcetreeapp.com/) oder [Git Kraken](https://www.gitkraken.com/) empfehlen).
  - Ein Befehlszeilen-/Terminalfenster (schauen Sie sich unseren [Befehlszeilen-Crashkurs](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) für eine Einführung an).
- Ein [GitHub-Konto](https://github.com/signup). Falls Sie noch keins haben, melden Sie sich jetzt über den bereitgestellten Link an.

## Leitfäden

- [Was ist GitHub? (von GitHub)](https://docs.github.com/en/get-started/start-your-journey/what-is-github)
  - : Dies behandelt, was Git und GitHub sind, wie sie zusammenarbeiten und wie man beginnt.
- [Hallo, Welt (von GitHub)](https://docs.github.com/en/get-started/using-github/hello-world)
  - : Dieser praktische Leitfaden führt direkt in die Nutzung von GitHub ein, lehrt die Grundlagen von Git wie das Erstellen von Repositorien und Branches, das Erstellen von Commits und das Öffnen und Zusammenführen von Pull Requests.
- [Git verwenden (von GitHub)](https://docs.github.com/en/get-started/using-git)
  - : Das Git-Handbuch geht etwas tiefer und erklärt, was ein Versionskontrollwerkzeug ist, was ein Repository ist, wie das grundlegende GitHub-Modell funktioniert, Git-Befehle und Beispiele und mehr.
- [Zu einem Projekt beitragen (von GitHub)](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project)
  - : Forken von Projekten ist essenziell, wenn Sie zu jemand anderem Code beitragen möchten. Dieser Leitfaden erklärt, wie.
- [Über Pull Requests (von GitHub)](https://docs.github.com/en/pull-requests/reference/pull-requests)
  - : Ein nützlicher Leitfaden zum Verwalten von Pull Requests. Diese Anfragen sind, wie Sie Codeänderungen im Repository einer anderen Person vorschlagen, damit sie diese überprüfen und eventuell in den Haupt-Codebestand aufnehmen können.
- [Über Issues (von GitHub)](https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues)
  - : Issues sind wie ein Forum für Ihr GitHub-Projekt, in dem Menschen Fragen stellen und Probleme melden können, und Sie können Updates verwalten (z.B. Personen zur Behebung von Problemen zuweisen, das Problem klären, die Leute wissen lassen, dass Dinge behoben sind). Dieser Artikel erklärt, was Sie über Issues wissen müssen.

> [!NOTE]
> Wenn Sie tiefer in Git einsteigen, werden Sie feststellen, dass es leicht schiefgehen kann, wenn Sie anfangen, kompliziertere Befehle zu verwenden. Keine Sorge, selbst professionelle Webentwickler finden Git manchmal verwirrend und lösen oft Probleme, indem sie Lösungen im Web suchen oder Seiten wie [Flight rules for Git](https://github.com/k88hudson/git-flight-rules) und [Dangit, git!](https://dangitgit.com/) konsultieren.

> [!NOTE]
> Scrimba's [Einführung in Git](https://scrimba.com/intro-to-git-c0l4grs2sa) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine praktische Einführung zu Git und GitHub.

## Siehe auch

- Andere nützliche Themen, die in der GitHub-Dokumentation behandelt werden, sind:
  - [Den GitHub-Flow verstehen](https://docs.github.com/en/get-started/using-github/github-flow)
  - [Merge-Konflikte lösen](https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests)
  - [Dateien mit .gitignore ignorieren](https://docs.github.com/en/get-started/git-basics/ignoring-files)
  - [Authentifizierung bei GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github)
  - [Markdown meistern](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) (das Textformat, in dem Sie in PR-, Issue-Kommentaren und `.md`-Dateien schreiben).
  - [Erste Schritte mit GitHub Pages](https://docs.github.com/en/pages/quickstart) (wie man Demos und Websites auf GitHub veröffentlicht).
- [Git-Befehlsliste](https://git-scm.com/docs)
- [Git-Branching lernen](https://learngitbranching.js.org/)
- [Flight rules for Git](https://github.com/k88hudson/git-flight-rules) (ein sehr nützliches Kompendium von Möglichkeiten, bestimmte Dinge in Git zu erreichen, einschließlich wie man Dinge korrigiert, wenn man sich verirrt hat).
- [Dangit, git!](https://dangitgit.com/) (ein weiteres nützliches Kompendium, insbesondere von Möglichkeiten, Dinge zu korrigieren, wenn man sich verirrt hat).

{{PreviousMenu("Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core")}}
