---
title: Versionskontrolle
slug: Learn_web_development/Core/Version_control
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{PreviousMenu("Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core")}}

Versionskontrollwerkzeuge (oft als **Version Control Systems** oder **VCS** bezeichnet) sind ein wesentlicher Bestandteil moderner Arbeitsabläufe, um Codebasen zu sichern und gemeinsam daran zu arbeiten. Dieses Modul führt Sie durch die Grundlagen der Versionskontrolle mit Git und GitHub.

## Überblick

Versionskontrollwerkzeuge sind unerlässlich für die Softwareentwicklung:

- Es ist selten, dass Sie vollständig alleine an einem Projekt arbeiten, und sobald Sie beginnen, mit anderen zusammenzuarbeiten, besteht das Risiko, dass Sie sich in die Quere kommen — das ist der Fall, wenn beide versuchen, gleichzeitig denselben Code zu aktualisieren. Sie benötigen einen Mechanismus, um solche Vorkommnisse zu verwalten und Verlust von Arbeit zu vermeiden.
- Wenn Sie alleine oder im Team an einem Projekt arbeiten, möchten Sie den Code an einem zentralen Ort sichern, damit er nicht verloren geht, falls Ihr Computer ausfällt.
- Sie möchten auch in der Lage sein, zu früheren Versionen zurückzukehren, wenn später ein Problem entdeckt wird. Möglicherweise haben Sie bereits begonnen, dies in Ihrer eigenen Arbeit zu tun, indem Sie verschiedene Versionen derselben Datei erstellen, z. B. `myCode.js`, `myCode_v2.js`, `myCode_v3.js`, `myCode_final.js`, `myCode_really_really_final.js` usw., aber das ist wirklich fehleranfällig und unzuverlässig.
- Verschiedene Teammitglieder möchten häufig eigene Versionen des Codes erstellen (in Git **Branches** genannt), an einem neuen Feature in dieser Version arbeiten und dann in kontrollierter Weise (in GitHub verwenden wir **Pull Requests**) mit der Master-Version zusammenführen, wenn sie fertig sind.

Versionskontrollwerkzeuge erfüllen die oben genannten Anforderungen. [Git](https://git-scm.com/) ist ein Beispiel für ein Versionskontrollwerkzeug, und [GitHub](https://github.com/) ist eine Website + Infrastruktur, die einen Git-Server bereitstellt, zusammen mit einer Reihe wirklich nützlicher Werkzeuge zur Arbeit mit Git-Repositories, sowohl individuell als auch im Team, wie z. B. das Melden von Problemen mit dem Code, Überprüfungstools, Projektmanagementfunktionen wie das Zuweisen von Aufgaben und Statusmeldungen und mehr.

> [!NOTE]
> Git ist eigentlich ein _verteiltes_ Versionskontrollwerkzeug, was bedeutet, dass eine vollständige Kopie des Repositories, das die Codebasis enthält, auf Ihrem Computer (und dem aller anderen) erstellt wird. Sie nehmen Änderungen an Ihrer eigenen Kopie vor und senden diese Änderungen dann zurück an den Server, wo ein Administrator entscheidet, ob Ihre Änderungen mit der Master-Kopie zusammengeführt werden.

## Voraussetzungen

Um Git und GitHub zu verwenden, benötigen Sie:

- Einen Desktop-Computer mit installiertem Git (siehe die [Git-Downloadseite](https://git-scm.com/downloads)).
- Ein Werkzeug zur Verwendung von Git. Abhängig davon, wie Sie arbeiten möchten, könnten Sie einen [Git GUI-Client](https://git-scm.com/downloads/guis/) verwenden (wir empfehlen [GitHub Desktop](https://desktop.github.com/download/), [SourceTree](https://www.sourcetreeapp.com/) oder [Git Kraken](https://www.gitkraken.com/)) oder einfach ein Terminal nutzen. Tatsächlich ist es wahrscheinlich nützlich, zumindest die Grundlagen der Git-Terminalbefehle zu lernen, selbst wenn Sie eine GUI verwenden möchten.
- Ein [GitHub-Konto](https://github.com/signup). Wenn Sie noch keines haben, registrieren Sie sich jetzt mit dem angegebenen Link.

Was die erforderlichen Kenntnisse betrifft, müssen Sie nichts über Webentwicklung, Git/GitHub oder Versionskontrolle wissen, um mit diesem Modul zu beginnen. Es wird jedoch empfohlen, dass Sie über einige Programmierkenntnisse verfügen, sodass Sie eine angemessene Computerkompetenz haben und etwas Code haben, um ihn in Ihren Repositories zu speichern!

Es ist auch vorzuziehen, dass Sie einige grundlegende Terminalkenntnisse haben, z. B. das Navigieren zwischen Verzeichnissen und das Erstellen von Dateien. Sie können alle Grundlagen in unserem [Command line crash course](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) finden.

> [!NOTE]
> GitHub ist nicht die einzige Seite/Toolset, die Sie mit Git verwenden können. Es gibt andere Alternativen wie [GitLab](https://about.gitlab.com/), die Sie ausprobieren können, und Sie könnten auch versuchen, Ihren eigenen Git-Server einzurichten und diesen anstelle von GitHub zu verwenden. In diesem Kurs bleiben wir bei GitHub, um einen einzigen funktionierenden Weg anzubieten.

## Lernziele

- Warum Versionskontrollsysteme notwendig sind.
- Der Unterschied zwischen Git und Websites wie GitHub und GitLab.
- Verstehen, dass Websites wie GitHub und GitLab Teamarbeit und Zusammenarbeit ermöglichen, die mit nur plain Git nicht so einfach sind.
- Grundkonfiguration — Installation von Git, Anmeldung für ein Konto auf Ihrer gewählten Social-Coding-Seite.
- Umgang mit Sicherheitsanforderungen, wie SSH/GPG-Schlüsseln.
- Ein Repository erstellen und Änderungen daran vornehmen.
- Beiträge zu Repositories anderer: forken, einen neuen Branch erstellen, einen PR erstellen und den Überprüfungsfluss steuern.
- Gute Haushaltsführung:
  - Lokale Repositories regelmäßig aktualisieren, damit sie mit ihren Remote-Gegenstücken synchron sind.
  - Verwenden von `.gitignore`, um alles auszuschließen, das Sie nicht einchecken möchten.
  - Löschen von Branches, die Sie abgeschlossen haben.
- Umgang mit Merge-Konflikten.

## Leitfäden

Beachten Sie, dass die unten stehenden Links Sie zu Ressourcen auf externen Seiten führen. Schließlich streben wir an, einen eigenen dedizierten Git/GitHub-Kurs zu haben, aber vorerst werden Ihnen diese helfen, sich mit dem Thema vertraut zu machen.

- [Hello, World (von GitHub)](https://docs.github.com/en/get-started/start-your-journey/hello-world)
  - : Dies ist ein guter Ausgangspunkt – dieser praktische Leitfaden bringt Sie dazu, sofort mit GitHub zu arbeiten und die Grundlagen von Git zu lernen, wie das Erstellen von Repositories und Branches, das Erstellen von Commits und das Öffnen und Zusammenführen von Pull Requests.
- [Git Handbook (von GitHub)](https://docs.github.com/en/get-started/using-git/about-git)
  - : Dieses Git-Handbuch geht etwas tiefer und erklärt, was ein Versionskontrollwerkzeug ist, was ein Repository ist, wie das grundlegende GitHub-Modell funktioniert, Git-Befehle und Beispiele und mehr.
- [Projekte forken (von GitHub)](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project)
  - : Projekte zu forken ist unerlässlich, wenn Sie zu jemand anderem Code beitragen möchten. Dieser Leitfaden erklärt wie.
- [Über Pull Requests (von GitHub)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
  - : Ein nützlicher Leitfaden zum Verwalten von Pull Requests, der Art und Weise, wie Ihre vorgeschlagenen Codeänderungen an die Repositories von Personen zur Prüfung gesendet werden.
- [Mastering issues (von GitHub)](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues)
  - : Issues sind wie ein Forum für Ihr GitHub-Projekt, in dem Personen Fragen stellen und Probleme melden können, und Sie können Updates verwalten (zum Beispiel Personen zuweisen, um Probleme zu beheben, das Problem klären, Leuten mitteilen, dass Dinge behoben wurden). Dieser Artikel erklärt, was Sie über Issues wissen müssen.

> [!NOTE]
> Es gibt **viel mehr**, was Sie mit Git und GitHub tun können, aber wir glauben, dass das Obige das Minimum darstellt, das Sie wissen müssen, um Git effektiv zu verwenden. Wenn Sie tiefer in Git eintauchen, werden Sie erkennen, dass es leicht ist, Fehler zu machen, wenn Sie anfangen, kompliziertere Befehle zu nutzen. Keine Sorge, selbst professionelle Webentwickler finden Git manchmal verwirrend und lösen Probleme oft, indem sie nach Lösungen im Internet suchen oder Seiten wie [Flight rules for Git](https://github.com/k88hudson/git-flight-rules) und [Dangit, git!](https://dangitgit.com/) konsultieren.

## Siehe auch

- [Den GitHub-Flow verstehen](https://docs.github.com/en/get-started/using-github/github-flow)
- [Git-Befehlsliste](https://git-scm.com/docs)
- [Mastering markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) (das Textformat, das Sie in PR, Issue-Kommentaren und `.md`-Dateien verwenden).
- [Erste Schritte mit GitHub Pages](https://docs.github.com/en/pages/quickstart) (wie man Demos und Websites auf GitHub veröffentlicht).
- [Learn Git branching](https://learngitbranching.js.org/)
- [Flight rules for Git](https://github.com/k88hudson/git-flight-rules) (ein sehr nützliches Kompendium von Möglichkeiten, bestimmte Dinge in Git zu erreichen, einschließlich der Korrektur, wenn Sie etwas falsch gemacht haben).
- [Dangit, git!](https://dangitgit.com/) (ein weiteres nützliches Kompendium, speziell für Möglichkeiten zur Behebung von Fehlern).

{{PreviousMenu("Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core")}}
