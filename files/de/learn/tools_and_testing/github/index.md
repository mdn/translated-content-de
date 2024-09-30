---
title: Git und GitHub
slug: Learn/Tools_and_testing/GitHub
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}

Alle Entwickler werden ein **Versionskontrollsystem** (**VCS**) verwenden, ein Werkzeug, das ihnen ermöglicht, mit anderen Entwicklern an einem Projekt zusammenzuarbeiten, ohne die Gefahr, dass sie die Arbeit der anderen überschreiben, und um zu früheren Versionen des Codes zurückzukehren, wenn später ein Problem festgestellt wird. Das beliebteste VCS (zumindest unter Webentwicklern) ist **Git**, zusammen mit **GitHub**, einer Website, die Hosting für Ihre Repositories und mehrere Werkzeuge zur Arbeit mit ihnen bietet. Dieses Modul zielt darauf ab, Ihnen das notwendige Wissen über beide zu vermitteln.

## Übersicht

VCSes sind für die Softwareentwicklung unerlässlich:

- Es ist selten, dass Sie ganz alleine an einem Projekt arbeiten, und sobald Sie anfangen, mit anderen Leuten zusammenzuarbeiten, besteht das Risiko, dass Ihre Arbeiten in Konflikt geraten — das passiert, wenn Sie beide versuchen, denselben Codeabschnitt zur gleichen Zeit zu aktualisieren. Sie müssen einen Mechanismus haben, um solche Vorkommnisse zu verwalten und den Verlust von Arbeit zu vermeiden.
- Wenn Sie alleine oder mit anderen an einem Projekt arbeiten, möchten Sie den Code an einem zentralen Ort sichern, damit er nicht verloren geht, falls Ihr Computer kaputtgeht.
- Sie möchten auch in der Lage sein, auf frühere Versionen zurückzugreifen, wenn später ein Problem entdeckt wird. Vielleicht haben Sie bereits damit begonnen, verschiedene Versionen derselben Datei zu erstellen, z. B. `myCode.js`, `myCode_v2.js`, `myCode_v3.js`, `myCode_final.js`, `myCode_really_really_final.js`, etc., aber das ist sehr fehleranfällig und unzuverlässig.
- Verschiedene Teammitglieder möchten häufig ihre eigenen separaten Versionen des Codes erstellen (in Git als **Branches** bezeichnet), in dieser Version an einem neuen Feature arbeiten und es dann in kontrollierter Weise mit der Master-Version zusammenführen (in GitHub verwenden wir **Pull Requests**), wenn sie damit fertig sind.

VCSes stellen Werkzeuge zur Verfügung, um diese Bedürfnisse zu erfüllen. [Git](https://git-scm.com/) ist ein Beispiel für ein VCS, und [GitHub](https://github.com/) ist eine Website + Infrastruktur, die einen Git-Server und eine Anzahl wirklich nützlicher Werkzeuge für die Arbeit mit Git-Repositories einzeln oder im Team bereitstellt, z. B. zum Melden von Problemen mit dem Code, Überprüfungstools, Projektmanagement-Funktionen wie die Zuweisung von Aufgaben und Aufgabenstatus und mehr.

> [!NOTE]
> Git ist tatsächlich ein _verteiltes_ Versionskontrollsystem, was bedeutet, dass eine vollständige Kopie des Repositories mit dem Code auf Ihrem Computer (und auf jedem anderen) erstellt wird. Sie nehmen Änderungen an Ihrer eigenen Kopie vor und übertragen diese Änderungen dann zurück auf den Server, wo ein Administrator entscheidet, ob Ihre Änderungen mit der Master-Kopie zusammengeführt werden.

## Voraussetzungen

Um Git und GitHub zu verwenden, benötigen Sie:

- Einen Desktop-Computer mit installiertem Git (siehe die [Git-Download-Seite](https://git-scm.com/downloads)).
- Ein Werkzeug, um Git zu verwenden. Abhängig davon, wie Sie gerne arbeiten, könnten Sie einen [Git GUI-Client](https://git-scm.com/downloads/guis/) verwenden (wir empfehlen GitHub Desktop, SourceTree oder Git Kraken) oder einfach ein Terminalfenster benutzen. Tatsächlich ist es wahrscheinlich nützlich, wenn Sie zumindest die Grundlagen der Git-Terminalbefehle kennen, selbst wenn Sie eine GUI verwenden möchten.
- Ein [GitHub-Konto](https://github.com/signup). Wenn Sie noch keines haben, melden Sie sich jetzt über den bereitgestellten Link an.

In Bezug auf Vorkenntnisse müssen Sie nichts über Webentwicklung, Git/GitHub oder VCSes wissen, um mit diesem Modul zu beginnen. Es wird jedoch empfohlen, dass Sie ein wenig programmieren können, damit Sie eine angemessene Computerkenntnis haben und etwas Code, den Sie in Ihren Repositories speichern können!

Es ist auch vorzuziehen, dass Sie über grundlegende Terminalkenntnisse verfügen, zum Beispiel zum Navigieren zwischen Verzeichnissen, Erstellen von Dateien und Ändern des Systems `PATH`.

> [!NOTE]
> GitHub ist nicht die einzige Website/das einzige Werkzeugset, das Sie mit Git verwenden können. Es gibt andere Alternativen wie [GitLab](https://about.gitlab.com/), die Sie ausprobieren könnten, und Sie könnten auch versuchen, Ihren eigenen Git-Server einzurichten und ihn anstelle von GitHub zu verwenden. In diesem Kurs haben wir uns nur auf GitHub beschränkt, um eine einzige Möglichkeit bereitzustellen, die funktioniert.

## Leitfäden

Bitte beachten Sie, dass die untenstehenden Links Sie zu Ressourcen auf externen Websites führen. Schließlich streben wir an, unseren eigenen dedizierten Git/GitHub-Kurs zu haben, aber vorerst werden Ihnen diese helfen, sich in das Thema einzuarbeiten.

- [Hello, World (von GitHub)](https://docs.github.com/en/get-started/start-your-journey/hello-world)
  - : Dies ist ein guter Ausgangspunkt — dieser praktische Leitfaden bringt Sie dazu, sofort mit der Nutzung von GitHub zu beginnen, wobei Sie die Grundlagen von Git wie das Erstellen von Repositories und Branches, das Erstellen von Commits und das Öffnen und Zusammenführen von Pull Requests lernen.
- [Git-Handbuch (von GitHub)](https://docs.github.com/en/get-started/using-git/about-git)
  - : Dieses Git-Handbuch geht etwas tiefer, indem es erklärt, was ein VCS ist, was ein Repository ist, wie das grundlegende GitHub-Modell funktioniert, Git-Befehle und Beispiele und mehr.
- [Projekte forken (von GitHub)](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project)
  - : Projekte zu forken ist essentiell, wenn Sie zum Code eines anderen beitragen möchten. Dieser Leitfaden erklärt wie.
- [Über Pull Requests (von GitHub)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
  - : Ein nützlicher Leitfaden zum Verwalten von Pull Requests, der Art und Weise, wie Ihre vorgeschlagenen Codeänderungen zur Betrachtung in die Repositories anderer Menschen geliefert werden.
- [Probleme meistern (von GitHub)](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues)
  - : Probleme sind wie ein Forum für Ihr GitHub-Projekt, wo Leute Fragen stellen und Probleme melden können, und Sie können Updates verwalten (zum Beispiel Leute zuweisen, um Probleme zu beheben, das Problem klären, Leute darüber informieren, dass Dinge behoben sind). Dieser Artikel sagt Ihnen, was Sie über Probleme wissen müssen.

> [!NOTE]
> Es gibt **viel mehr**, das Sie mit Git und GitHub tun können, aber wir glauben, dass die obigen Informationen das Minimum darstellen, das Sie wissen müssen, um Git effektiv zu verwenden. Wenn Sie tiefer in Git eintauchen, werden Sie anfangen zu erkennen, dass es leicht schiefgehen kann, wenn Sie beginnen, kompliziertere Befehle zu verwenden. Keine Sorge, selbst professionelle Webentwickler finden Git manchmal verwirrend und lösen Probleme oft, indem sie nach Lösungen im Web suchen oder sich an Seiten wie [Flight rules for Git](https://github.com/k88hudson/git-flight-rules) und [Dangit, git!](https://dangitgit.com/) wenden.

## Siehe auch

- [Den GitHub-Flow verstehen](https://docs.github.com/en/get-started/using-github/github-flow)
- [Liste der Git-Befehle](https://git-scm.com/docs)
- [Markdown meistern](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) (das Textformat, in dem Sie in PR-, Problemkommentaren und `.md`-Dateien schreiben).
- [Erste Schritte mit GitHub Pages](https://docs.github.com/en/pages/quickstart) (wie man Demos und Websites auf GitHub veröffentlicht).
- [Git-Verzweigungen lernen](https://learngitbranching.js.org/)
- [Flight rules for Git](https://github.com/k88hudson/git-flight-rules) (eine sehr nützliche Zusammenstellung von Möglichkeiten, bestimmte Dinge in Git zu erreichen, einschließlich wie man Dinge korrigiert, wenn man Fehler gemacht hat).
- [Dangit, git!](https://dangitgit.com/) (eine weitere nützliche Zusammenstellung, speziell von Wegen zur Korrektur, wenn etwas schiefgelaufen ist).
