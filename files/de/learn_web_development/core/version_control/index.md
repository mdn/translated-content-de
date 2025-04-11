---
title: Versionskontrolle
slug: Learn_web_development/Core/Version_control
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenu("Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core")}}

Versionskontrollwerkzeuge (oft als **Version Control Systems** oder **VCS** bezeichnet) sind ein wesentlicher Bestandteil moderner Arbeitsabläufe, um Codebasen zu sichern und zusammenzuarbeiten. Dieses Modul führt Sie durch die Grundlagen der Versionskontrolle mit Git und GitHub.

## Überblick

Versionskontrollwerkzeuge sind für die Softwareentwicklung unerlässlich:

- Es ist selten, dass Sie an einem Projekt ganz alleine arbeiten, und sobald Sie mit anderen Personen zusammenarbeiten, besteht die Gefahr, dass Sie in Konflikt mit deren Arbeit geraten – das passiert, wenn beide versuchen, denselben Code zur gleichen Zeit zu aktualisieren. Sie benötigen einen Mechanismus, um diese Vorfälle zu verwalten und den Verlust von Arbeitsergebnissen zu vermeiden.
- Wenn Sie an einem Projekt alleine oder mit anderen arbeiten, möchten Sie den Code zentral sichern, sodass er nicht verloren geht, falls Ihr Computer kaputtgeht.
- Sie möchten auch in der Lage sein, auf frühere Versionen zurückzugehen, falls später ein Problem entdeckt wird. Möglicherweise haben Sie damit begonnen, indem Sie verschiedene Versionen derselben Datei erstellt haben, z.B. `myCode.js`, `myCode_v2.js`, `myCode_v3.js`, `myCode_final.js`, `myCode_really_really_final.js`, usw., aber das ist wirklich fehleranfällig und unzuverlässig.
- Unterschiedliche Teammitglieder möchten häufig ihre eigenen separaten Versionen des Codes erstellen (in Git als **Branches** bezeichnet), an einem neuen Feature in dieser Version arbeiten und es dann auf kontrollierte Weise (in GitHub verwenden wir **Pull Requests**) mit der Hauptversion zusammenführen, wenn sie damit fertig sind.

Versionskontrollwerkzeuge erfüllen die oben genannten Bedürfnisse. [Git](https://git-scm.com/) ist ein Beispiel für ein Versionskontrollwerkzeug, und [GitHub](https://github.com/) ist eine Website + Infrastruktur, die einen Git-Server sowie eine Reihe wirklich nützlicher Werkzeuge für die Arbeit mit Git-Repositories anbietet, sei es individuell oder im Team. Dazu gehören das Melden von Problemen mit dem Code, Überprüfungswerkzeuge, Projektmanagement-Funktionen wie die Zuweisung von Aufgaben und Aufgabenstatus und mehr.

> [!NOTE]
> Git ist tatsächlich ein _verteiltes_ Versionskontrollwerkzeug, was bedeutet, dass eine vollständige Kopie des Repositorys, das die Codebasis enthält, auf Ihrem Computer (und jedem anderen) erstellt wird. Sie nehmen Änderungen an Ihrer eigenen Kopie vor und pushen diese Änderungen dann zurück auf den Server, wo ein Administrator entscheidet, ob Ihre Änderungen mit der Hauptkopie zusammengeführt werden sollen.

## Voraussetzungen

Um Git und GitHub zu nutzen, benötigen Sie:

- Einen Desktop-Computer mit installiertem Git (sehen Sie sich die [Git-Downloads-Seite](https://git-scm.com/downloads) an).
- Ein Werkzeug, um Git zu verwenden. Je nachdem, wie Sie arbeiten möchten, könnten Sie einen [Git GUI-Client](https://git-scm.com/downloads/guis/) verwenden (wir empfehlen [GitHub Desktop](https://desktop.github.com/download/), [SourceTree](https://www.sourcetreeapp.com/) oder [Git Kraken](https://www.gitkraken.com/)) oder einfach ein Terminalfenster verwenden. Tatsächlich ist es wahrscheinlich nützlich, zumindest die Grundlagen der Git-Terminalbefehle zu kennen, selbst wenn Sie eine GUI verwenden möchten.
- Ein [GitHub-Konto](https://github.com/signup). Falls Sie noch keines haben, melden Sie sich jetzt mit dem bereitgestellten Link an.

In Bezug auf das erforderliche Wissen müssen Sie nichts über Webentwicklung, Git/GitHub oder Versionskontrolle wissen, um mit diesem Modul zu beginnen. Es wird jedoch empfohlen, dass Sie etwas Programmierung können, damit Sie über eine angemessene Computerkenntnis verfügen und etwas Code haben, um ihn in Ihren Repositories zu speichern!

Es ist auch vorzuziehen, dass Sie über grundlegende Terminalkenntnisse verfügen, zum Beispiel, wie man zwischen Verzeichnissen navigiert und Dateien erstellt. Sie können alle Grundlagen in unserem [Crashkurs zur Kommandozeile](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) finden.

> [!NOTE]
> GitHub ist nicht die einzige Seite / Toolset, die Sie mit Git verwenden können. Es gibt andere Alternativen wie [GitLab](https://about.gitlab.com/), die Sie ausprobieren könnten, und Sie könnten auch versuchen, Ihren eigenen Git-Server einzurichten und anstelle von GitHub zu verwenden. Wir bleiben in diesem Kurs nur bei GitHub, um eine einzige funktionierende Methode anzubieten.

## Lernziele

- Warum Versionskontrollsysteme notwendig sind.
- Der Unterschied zwischen Git und Websites wie GitHub und GitLab.
- Verstehen, dass Websites wie GitHub und GitLab Teamarbeit und Zusammenarbeit erleichtern, die mit einfachem Git nicht so leicht möglich sind.
- Grundlegende Einrichtung - Git installieren, ein Konto für Ihre ausgewählte soziale Codierungsseite erstellen.
- Sicherheitsanforderungen handhaben, wie z.B. SSH/GPG-Schlüssel.
- Ein Repo erstellen und Änderungen daran pushen.
- Zu anderen Repos beitragen: Forking, einen neuen Branch erstellen, einen PR erstellen und Überprüfungsabläufe.
- Gute Haushaltsführung:
  - Regelmäßige Aktualisierung lokaler Repos, damit sie mit ihren entfernten Gegenstücken synchron sind.
  - Verwenden von `.gitignore`, um alle Dinge zu ignorieren, die Sie nicht einreichen möchten.
  - Löschen von Branches, die Sie fertiggestellt haben.
- Umgang mit Merge-Konflikten.

## Leitfäden

Beachten Sie, dass die unten stehenden Links Sie zu Ressourcen auf externen Websites führen. Schließlich möchten wir unseren eigenen dedizierten Git/GitHub-Kurs haben, aber vorerst helfen Ihnen diese dabei, sich mit dem Thema vertraut zu machen.

- [Hello, World (von GitHub)](https://docs.github.com/en/get-started/start-your-journey/hello-world)
  - : Dies ist ein guter Ausgangspunkt — dieser praktische Leitfaden führt Sie direkt in die Nutzung von GitHub ein und lehrt die Grundlagen von Git wie das Erstellen von Repositories und Branches, das Erstellen von Commits und das Öffnen und Zusammenführen von Pull Requests.
- [Git-Handbuch (von GitHub)](https://docs.github.com/en/get-started/using-git/about-git)
  - : Dieses Git-Handbuch geht etwas tiefer und erklärt, was ein Versionskontrollwerkzeug ist, was ein Repository ist, wie das grundlegende GitHub-Modell funktioniert, Git-Befehle und Beispiele und mehr.
- [Projekte forken (von GitHub)](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project)
  - : Forken von Projekten ist entscheidend, wenn Sie zu jemand anderem Code beitragen möchten. Dieser Leitfaden erklärt, wie es geht.
- [Über Pull Requests (von GitHub)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
  - : Ein nützlicher Leitfaden zum Verwalten von Pull Requests, der Art und Weise, wie Ihre vorgeschlagenen Codeänderungen in die Repositories anderer zur Prüfung eingereicht werden.
- [Issues meistern (von GitHub)](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues)
  - : Issues sind wie ein Forum für Ihr GitHub-Projekt, wo Menschen Fragen stellen und Probleme melden können, und Sie können Updates verwalten (z.B. Personen zur Behebung von Problemen zuweisen, das Problem klären, bekanntgeben, dass Dinge behoben sind). Dieser Artikel sagt Ihnen, was Sie über Issues wissen müssen.

> [!NOTE]
> Es gibt **viel mehr**, was Sie mit Git und GitHub tun können, aber wir glauben, dass das oben Genannte das Minimum darstellt, das Sie wissen müssen, um Git effektiv zu nutzen. Wenn Sie tiefer in Git eintauchen, werden Sie feststellen, dass es leicht ist, Fehler zu machen, wenn Sie beginnen, kompliziertere Befehle zu verwenden. Keine Sorge, selbst professionelle Webentwickler finden Git manchmal verwirrend und lösen Probleme oft durch das Suchen nach Lösungen im Web oder durch Konsultation von Seiten wie [Flight rules for Git](https://github.com/k88hudson/git-flight-rules) und [Dangit, git!](https://dangitgit.com/)

## Siehe auch

- [Verstehen des GitHub-Flows](https://docs.github.com/en/get-started/using-github/github-flow)
- [Git-Befehlsübersicht](https://git-scm.com/docs)
- [Markdown meistern](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) (das Textformat, in dem Sie auf PR, Issue-Kommentare und `.md`-Dateien schreiben).
- [Erste Schritte mit GitHub Pages](https://docs.github.com/en/pages/quickstart) (wie Sie Demos und Websites auf GitHub veröffentlichen).
- [Learn Git branching](https://learngitbranching.js.org/)
- [Flight rules for Git](https://github.com/k88hudson/git-flight-rules) (ein sehr nützliches Kompendium von Möglichkeiten, bestimmte Dinge mit Git zu erreichen, einschließlich der Korrektur von Dingen, wenn Sie Fehler gemacht haben).
- [Dangit, git!](https://dangitgit.com/) (ein weiteres nützliches Kompendium, insbesondere mit Möglichkeiten zur Korrektur von Dingen, wenn Sie Fehler gemacht haben).

{{PreviousMenu("Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core")}}
