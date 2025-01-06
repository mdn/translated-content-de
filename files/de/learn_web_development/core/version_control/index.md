---
title: Versionskontrolle
slug: Learn_web_development/Core/Version_control
l10n:
  sourceCommit: 34e4f9a1e1d492f79d5b87709539df9b571419cc
---

{{LearnSidebar}}

{{PreviousMenu("Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core")}}

Versionskontrollwerkzeuge (oft als **Versionskontrollsysteme** oder **VCS** bezeichnet) sind ein wesentlicher Bestandteil moderner Arbeitsabläufe, um Codebasen zu sichern und an ihnen zusammenzuarbeiten. Dieses Modul führt Sie durch die Grundlagen der Versionskontrolle mit Git und GitHub.

## Übersicht

Versionskontrollwerkzeuge sind für die Softwareentwicklung unerlässlich:

- Es ist selten, dass Sie an einem Projekt ganz allein arbeiten, und sobald Sie mit anderen Menschen zusammenarbeiten, laufen Sie Gefahr, einander in die Quere zu kommen – dies geschieht, wenn beide versuchen, dieselbe Code-Stelle gleichzeitig zu aktualisieren. Sie benötigen eine Art Mechanismus, um solche Vorkommnisse zu verwalten und den Verlust von Arbeit zu vermeiden.
- Wenn Sie an einem Projekt allein oder mit anderen arbeiten, möchten Sie den Code an einem zentralen Ort sichern, damit er nicht verloren geht, falls Ihr Computer kaputtgeht.
- Sie möchten auch zu früheren Versionen zurückkehren können, wenn später ein Problem entdeckt wird. Möglicherweise haben Sie damit begonnen, dies in Ihrer eigenen Arbeit zu tun, indem Sie verschiedene Versionen derselben Datei erstellen, z. B. `myCode.js`, `myCode_v2.js`, `myCode_v3.js`, `myCode_final.js`, `myCode_really_really_final.js` usw., aber dies ist wirklich fehleranfällig und unzuverlässig.
- Verschiedene Teammitglieder möchten häufig ihre eigenen separaten Versionen des Codes erstellen (im Git als **Branches** bezeichnet), an einem neuen Feature in dieser Version arbeiten und dann in kontrollierter Weise (bei GitHub nutzen wir **Pull Requests**) mit der Hauptversion zusammenführen, wenn sie damit fertig sind.

Versionskontrollwerkzeuge erfüllen die oben genannten Bedürfnisse. [Git](https://git-scm.com/) ist ein Beispiel für ein Versionskontrollwerkzeug, und [GitHub](https://github.com/) ist eine Website + Infrastruktur, die einen Git-Server sowie eine Reihe wirklich nützlicher Werkzeuge für die Arbeit mit Git-Repositories einzeln oder im Team bereitstellt, wie z. B. das Melden von Problemen im Code, Überprüfungstools, Projektmanagement-Funktionen wie das Zuweisen von Aufgaben und Aufgabenstatus und mehr.

> [!NOTE]
> Git ist tatsächlich ein _verteiltes_ Versionskontrollwerkzeug, was bedeutet, dass eine vollständige Kopie des Repositorys mit der Codebasis auf Ihrem Computer (und dem aller anderen) erstellt wird. Sie nehmen Änderungen an Ihrer eigenen Kopie vor und übertragen diese Änderungen dann zurück auf den Server, wo ein Administrator entscheidet, ob Ihre Änderungen mit der Hauptkopie zusammengeführt werden.

## Voraussetzungen

Um Git und GitHub zu verwenden, benötigen Sie:

- Einen Desktop-Computer mit installiertem Git (siehe die [Git-Download-Seite](https://git-scm.com/downloads)).
- Ein Werkzeug, um Git zu verwenden. Abhängig davon, wie Sie gerne arbeiten, könnten Sie einen [Git GUI-Client](https://git-scm.com/downloads/guis/) verwenden (wir empfehlen [GitHub Desktop](https://desktop.github.com/download/), [SourceTree](https://www.sourcetreeapp.com/) oder [Git Kraken](https://www.gitkraken.com/)) oder einfach ein Terminalfenster verwenden. Tatsächlich ist es wahrscheinlich nützlich für Sie, zumindest die Grundlagen der Git-Terminalbefehle kennenzulernen, auch wenn Sie eine GUI verwenden möchten.
- Ein [GitHub-Konto](https://github.com/signup). Wenn Sie noch keins haben, melden Sie sich jetzt mit dem bereitgestellten Link an.

In Bezug auf das erforderliche Wissen brauchen Sie nichts über Webentwicklung, Git/GitHub oder Versionskontrolle zu wissen, um mit diesem Modul zu beginnen. Es wird jedoch empfohlen, dass Sie einige Programmierkenntnisse haben, damit Sie über eine angemessene Computerkompetenz verfügen und etwas Code haben, den Sie in Ihren Repositories speichern können!

Es ist auch vorzuziehen, dass Sie einige grundlegende Terminalkenntnisse haben, so zum Beispiel das Wechseln zwischen Verzeichnissen und das Erstellen von Dateien. Sie finden alle Grundlagen in unserem [Einführungskurs zur Befehlszeile](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line).

> [!NOTE]
> GitHub ist nicht die einzige Seite/Toolset, die Sie mit Git verwenden können. Es gibt andere Alternativen wie [GitLab](https://about.gitlab.com/), die Sie ausprobieren könnten, und Sie könnten auch versuchen, Ihren eigenen Git-Server einzurichten und diesen anstelle von GitHub zu verwenden. Wir haben uns in diesem Kurs nur auf GitHub beschränkt, um einen einzigen Weg zu bieten, der funktioniert.

## Lernziele

- Warum Versionskontrollsysteme notwendig sind.
- Der Unterschied zwischen Git und Websites wie GitHub und GitLab.
- Verstehen, dass Websites wie GitHub und GitLab Teamarbeit und Zusammenarbeit ermöglichen, die mit einfachem Git nicht so leicht möglich sind.
- Grundlegende Einrichtung – Git installieren, ein Konto für Ihre gewählte soziale Codierungsseite einrichten.
- Sicherheitsanforderungen handhaben, wie SSH/GPG-Schlüssel.
- Ein Repository erstellen und Änderungen hochladen.
- Zu den Repositories anderer beitragen: forken, einen neuen Branch erstellen, einen PR erstellen und den Überprüfungsfluss.
- Gute Haushaltsführung:
  - Lokale Repositories regelmäßig aktualisieren, damit sie mit ihren Remote-Gegenstücken synchron sind.
  - `.gitignore` verwenden, um all das Zeug zu ignorieren, das Sie nicht committen möchten.
  - Branches löschen, die Sie fertiggestellt haben.
- Umgang mit Merge-Konflikten.

## Leitfäden

Beachten Sie, dass die unten stehenden Links Sie zu Ressourcen auf externen Websites führen. Letztendlich streben wir an, unseren eigenen dedizierten Git/GitHub-Kurs zu haben, aber vorerst werden diese Ihnen helfen, das Thema in den Griff zu bekommen.

- [Hallo, Welt (von GitHub)](https://docs.github.com/en/get-started/start-your-journey/hello-world)
  - : Dies ist ein guter Startpunkt – dieser praktische Leitfaden bringt Sie direkt zur Nutzung von GitHub, indem Sie die Grundlagen von Git lernen, wie das Erstellen von Repositories und Branches, das Erstellen von Commits und das Öffnen und Zusammenführen von Pull Requests.
- [Git-Handbuch (von GitHub)](https://docs.github.com/en/get-started/using-git/about-git)
  - : Dieses Git-Handbuch geht etwas mehr in die Tiefe, erklärt, was ein Versionskontrollwerkzeug ist, was ein Repository ist, wie das grundlegende GitHub-Modell funktioniert, Git-Befehle und Beispiele und mehr.
- [Projekte forken (von GitHub)](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project)
  - : Projekte forken ist wesentlich, wenn Sie zum Code eines anderen beitragen möchten. Dieser Leitfaden erklärt, wie.
- [Über Pull Requests (von GitHub)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
  - : Ein nützlicher Leitfaden zum Umgang mit Pull Requests, dem Weg, wie Ihre vorgeschlagenen Codeänderungen zur Überprüfung in die Repositories von anderen eingereicht werden.
- [Umgang mit Problemen (von GitHub)](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues)
  - : Probleme sind wie ein Forum für Ihr GitHub-Projekt, in dem Menschen Fragen stellen und Probleme melden können, und Sie können Updates verwalten (zum Beispiel Menschen zuweisen, Probleme zu beheben, das Problem zu klären, die Leute wissen zu lassen, dass Dinge behoben sind). Dieser Artikel erklärt, was Sie über Probleme wissen müssen.

> [!NOTE]
> Es gibt **viel mehr**, das Sie mit Git und GitHub machen können, aber wir fühlen, dass das oben Genannte das Minimum ist, das Sie wissen müssen, um Git effektiv zu nutzen. Wenn Sie tiefer in Git eintauchen, werden Sie anfangen zu realisieren, dass es leicht ist, schiefzulaufen, wenn Sie anfangen, kompliziertere Befehle zu verwenden. Keine Sorge, auch professionelle Webentwickler finden Git manchmal verwirrend und lösen Probleme oft, indem sie nach Lösungen im Web suchen oder Websites wie [Flugregeln für Git](https://github.com/k88hudson/git-flight-rules) und [Dangit, git!](https://dangitgit.com/) konsultieren.

## Siehe auch

- [Den GitHub-Flow verstehen](https://docs.github.com/en/get-started/using-github/github-flow)
- [Git-Befehlsliste](https://git-scm.com/docs)
- [Markdown meistern](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) (das Textformat, das Sie in PR-, Problemkommentaren und `.md`-Dateien schreiben).
- [Erste Schritte mit GitHub Pages](https://docs.github.com/en/pages/quickstart) (wie man Demos und Websites auf GitHub veröffentlicht).
- [Git-Branching lernen](https://learngitbranching.js.org/)
- [Flugregeln für Git](https://github.com/k88hudson/git-flight-rules) (ein sehr nützliches Kompendium von Möglichkeiten, bestimmte Dinge in Git zu erreichen, einschließlich wie man Dinge korrigiert, wenn Sie falsch gelaufen sind).
- [Dangit, git!](https://dangitgit.com/) (ein weiteres nützliches Kompendium, speziell von Möglichkeiten, Dinge zu korrigieren, wenn sie falsch gelaufen sind).

{{PreviousMenu("Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core")}}
