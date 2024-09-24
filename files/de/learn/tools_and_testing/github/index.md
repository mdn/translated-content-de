---
title: Git und GitHub
slug: Learn/Tools_and_testing/GitHub
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}

Alle Entwickler werden eine Art von **Versionskontrollsystem** (**VCS**) verwenden, ein Werkzeug, das es ihnen ermöglicht, mit anderen Entwicklern an einem Projekt zusammenzuarbeiten, ohne die Gefahr, die Arbeit der anderen zu überschreiben, und auf frühere Versionen des Codes zurückzugreifen, falls später ein Problem entdeckt wird. Das beliebteste VCS (zumindest unter Webentwicklern) ist **Git**, zusammen mit **GitHub**, einer Website, die Hosting für Ihre Repositories sowie verschiedene Werkzeuge für die Arbeit mit diesen bietet. Dieses Modul zielt darauf ab, Ihnen alles Notwendige über beide zu lehren.

## Überblick

Versionskontrollsysteme sind unerlässlich für die Softwareentwicklung:

- Es ist selten, dass man völlig alleine an einem Projekt arbeitet, und sobald man beginnt, mit anderen Personen zusammenzuarbeiten, besteht die Gefahr, sich gegenseitig in die Quere zu kommen – das passiert, wenn zwei Personen versuchen, gleichzeitig dieselbe Codepassage zu aktualisieren. Sie müssen eine Art Mechanismus zur Verwaltung dieser Vorkommnisse haben und helfen, Arbeitsverluste zu vermeiden.
- Wenn Sie alleine oder mit anderen an einem Projekt arbeiten, möchten Sie den Code an einem zentralen Ort sichern, sodass er nicht verloren geht, wenn Ihr Computer kaputt geht.
- Sie möchten auch in der Lage sein, auf frühere Versionen zurückzugreifen, wenn später ein Problem entdeckt wird. Vielleicht haben Sie damit begonnen, dies in Ihrer eigenen Arbeit zu tun, indem Sie verschiedene Versionen derselben Datei erstellen, z. B. `myCode.js`, `myCode_v2.js`, `myCode_v3.js`, `myCode_final.js`, `myCode_really_really_final.js`, etc., aber das ist wirklich fehleranfällig und unzuverlässig.
- Verschiedene Teammitglieder werden häufig ihre eigenen getrennten Versionen des Codes erstellen wollen (genannt **Branches** in Git), an einem neuen Feature in dieser Version arbeiten und dann auf kontrollierte Weise (in GitHub verwenden wir **Pull Requests**) mit der Masterversion zusammenführen, wenn sie damit fertig sind.

Versionskontrollsysteme bieten Werkzeuge, um die oben genannten Anforderungen zu erfüllen. [Git](https://git-scm.com/) ist ein Beispiel für ein Versionskontrollsystem, und [GitHub](https://github.com/) ist eine Website + Infrastruktur, die einen Git-Server sowie eine Reihe wirklich nützlicher Werkzeuge für die Arbeit mit Git-Repositories einzeln oder im Team bietet, wie z. B. das Melden von Problemen mit dem Code, Überprüfungstools, Projektmanagementfunktionen wie Aufgaben zuweisen und Aufgabenstatus und mehr.

> [!NOTE]
> Git ist tatsächlich ein _verteiltes_ Versionskontrollsystem, was bedeutet, dass eine vollständige Kopie des Repositories, das den Code enthält, auf Ihrem Computer (und den Computern aller anderen) erstellt wird. Sie nehmen Änderungen an Ihrer eigenen Kopie vor und übertragen diese Änderungen dann wieder auf den Server, wo ein Administrator entscheidet, ob Ihre Änderungen mit der Hauptkopie zusammengeführt werden.

## Voraussetzungen

Um Git und GitHub zu verwenden, benötigen Sie:

- Einen Desktop-Computer mit installiertem Git (siehe die [Git-Downloads-Seite](https://git-scm.com/downloads)).
- Ein Tool zur Verwendung von Git. Je nachdem, wie Sie arbeiten möchten, könnten Sie einen [Git-GUI-Client](https://git-scm.com/downloads/guis/) verwenden (wir empfehlen GitHub Desktop, SourceTree oder Git Kraken) oder einfach ein Terminalfenster verwenden. Tatsächlich ist es wahrscheinlich nützlich, zumindest die Grundlagen der Git-Terminalbefehle zu kennen, auch wenn Sie beabsichtigen, eine GUI zu verwenden.
- Ein [GitHub-Konto](https://github.com/signup). Wenn Sie noch keines haben, melden Sie sich jetzt mit dem bereitgestellten Link an.

In Bezug auf das erforderliche Vorwissen müssen Sie nichts über Webentwicklung, Git/GitHub oder Versionskontrollsysteme wissen, um mit diesem Modul zu beginnen. Es wird jedoch empfohlen, dass Sie ein wenig programmieren können, damit Sie eine angemessene Computerkenntnis besitzen und etwas Code, den Sie in Ihren Repositories speichern können!

Es ist auch bevorzugt, dass Sie ein grundlegendes Terminalwissen haben, beispielsweise das Wechseln zwischen Verzeichnissen, das Erstellen von Dateien und das Ändern des System-`PATH`.

> [!NOTE]
> GitHub ist nicht das einzige Werkzeug/Service, das Sie mit Git verwenden können. Es gibt andere Alternativen wie [GitLab](https://about.gitlab.com/), die Sie ausprobieren könnten, und Sie könnten auch versuchen, Ihren eigenen Git-Server einzurichten und anstelle von GitHub zu verwenden. Wir haben uns in diesem Kurs nur auf GitHub beschränkt, um eine einzelne funktionierende Methode bereitzustellen.

## Anleitungen

Beachten Sie, dass die untenstehenden Links Sie zu Ressourcen auf externen Websites führen. Letztendlich streben wir an, einen eigenen dedizierten Git/GitHub-Kurs zu haben, aber vorerst werden diese Ihnen helfen, sich mit dem Thema vertraut zu machen.

- [Hello, World (von GitHub)](https://docs.github.com/en/get-started/start-your-journey/hello-world)
  - : Dies ist ein guter Ausgangspunkt – dieses praktische Handbuch führt Sie direkt in die Verwendung von GitHub ein, indem es die Grundlagen von Git lehrt, wie das Erstellen von Repositories und Branches, das Erstellen von Commits und das Öffnen und Zusammenführen von Pull Requests.
- [Git-Handbuch (von GitHub)](https://docs.github.com/en/get-started/using-git/about-git)
  - : Dieses Git-Handbuch geht etwas mehr ins Detail und erklärt, was ein Versionskontrollsystem ist, was ein Repository ist, wie das grundlegende GitHub-Modell funktioniert, Git-Befehle und Beispiele sowie mehr.
- [Projekte forken (von GitHub)](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project)
  - : Das Forken von Projekten ist unerlässlich, wenn Sie zu jemandes anderem Code beitragen möchten. Diese Anleitung erklärt, wie das geht.
- [Über Pull Requests (von GitHub)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
  - : Ein nützlicher Leitfaden zur Verwaltung von Pull Requests, der Art und Weise, wie Ihre vorgeschlagenen Codeänderungen zur Prüfung an die Repositories von Personen gesendet werden.
- [Mastering issues (von GitHub)](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues)
  - : Probleme sind wie ein Forum für Ihr GitHub-Projekt, in dem Menschen Fragen stellen und Probleme melden können, und Sie können Updates verwalten (zum Beispiel Personen zur Behebung von Problemen zuweisen, das Problem klären, Menschen informieren, dass Dinge behoben sind). Dieser Artikel sagt Ihnen, was Sie über Probleme wissen müssen.

> [!NOTE]
> Es gibt **viel mehr**, das Sie mit Git und GitHub tun können, aber wir glauben, dass das Obige das absolute Minimum darstellt, das Sie wissen müssen, um Git effektiv zu nutzen. Wenn Sie tiefer in Git einsteigen, werden Sie feststellen, dass es leicht ist, Fehler zu machen, wenn Sie beginnen, kompliziertere Befehle zu verwenden. Keine Sorge, auch professionelle Webentwickler finden Git manchmal verwirrend und lösen Probleme oft, indem sie nach Lösungen im Web suchen oder Seiten wie [Flight rules for Git](https://github.com/k88hudson/git-flight-rules) und [Dangit, git!](https://dangitgit.com/) konsultieren.

## Siehe auch

- [Verständnis des GitHub-Flows](https://docs.github.com/en/get-started/using-github/github-flow)
- [Git-Befehlsliste](https://git-scm.com/docs)
- [Beherrschung von Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) (das Textformat, in dem Sie auf PR-, Problemkommentaren und `.md`-Dateien schreiben).
- [Erste Schritte mit GitHub Pages](https://docs.github.com/en/pages/quickstart) (wie man Demos und Websites auf GitHub veröffentlicht).
- [Lernen Sie Git-Branching](https://learngitbranching.js.org/)
- [Flight rules for Git](https://github.com/k88hudson/git-flight-rules) (ein sehr nützliches Kompendium von Möglichkeiten, bestimmte Dinge in Git zu erreichen, einschließlich wie man Dinge korrigiert, wenn man etwas falsch gemacht hat).
- [Dangit, git!](https://dangitgit.com/) (ein weiteres nützliches Kompendium, insbesondere von Möglichkeiten, Dinge zu korrigieren, wenn man etwas falsch gemacht hat).
