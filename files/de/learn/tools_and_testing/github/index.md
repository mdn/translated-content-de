---
title: Git und GitHub
slug: Learn/Tools_and_testing/GitHub
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}

Alle Entwickler:innen werden eine Art von **Versionskontrollsystem** (**VCS**) verwenden, ein Werkzeug, das es ihnen ermöglicht, mit anderen Entwickler:innen an einem Projekt zu arbeiten, ohne Gefahr zu laufen, die Arbeit der anderen zu überschreiben, und das es erlaubt, zu früheren Versionen des Codebases zurückzukehren, falls später ein Problem entdeckt wird. Das populärste VCS (zumindest unter Webentwickler:innen) ist **Git**, zusammen mit **GitHub**, einer Seite, die Hosting für Ihre Repositories bereitstellt und mehrere Werkzeuge für die Arbeit mit ihnen bietet. Dieses Modul soll Ihnen das notwendige Wissen über beide vermitteln.

## Überblick

VCSs sind für die Softwareentwicklung unerlässlich:

- Es ist selten, dass Sie an einem Projekt ganz alleine arbeiten, und sobald Sie anfangen, mit anderen zu arbeiten, besteht die Gefahr, dass Sie in Konflikt mit der Arbeit der anderen geraten – das ist der Fall, wenn beide versuchen, das gleiche Stück Code zur gleichen Zeit zu aktualisieren. Sie müssen irgendeinen Mechanismus haben, um solche Vorfälle zu steuern und um den Verlust von Arbeit zu vermeiden.
- Wenn Sie an einem Projekt alleine oder mit anderen arbeiten, möchten Sie in der Lage sein, den Code an einem zentralen Ort zu sichern, damit er nicht verloren geht, falls Ihr Computer kaputtgeht.
- Sie werden auch in der Lage sein wollen, zu früheren Versionen zurückzukehren, falls später ein Problem entdeckt wird. Vielleicht haben Sie bereits damit begonnen, dies in Ihrer eigenen Arbeit zu tun, indem Sie verschiedene Versionen der gleichen Datei erstellen, z. B. `myCode.js`, `myCode_v2.js`, `myCode_v3.js`, `myCode_final.js`, `myCode_really_really_final.js`, usw., aber dies ist sehr fehleranfällig und unzuverlässig.
- Unterschiedliche Teammitglieder möchten häufig ihre eigenen separaten Versionen des Codes erstellen (in Git als **Branches** bezeichnet), in dieser Version an einem neuen Feature arbeiten und diese dann auf kontrollierte Weise (bei GitHub nutzen wir **Pull Requests**) mit der Master-Version zusammenführen, wenn sie fertig sind.

VCSs bieten Werkzeuge, um die oben genannten Bedürfnisse zu erfüllen. [Git](https://git-scm.com/) ist ein Beispiel für ein VCS, und [GitHub](https://github.com/) ist eine Website + Infrastruktur, die einen Git-Server sowie eine Reihe von wirklich nützlichen Tools zur Arbeit mit Git-Repositories individuell oder im Team bietet, wie z. B. das Melden von Problemen mit dem Code, Überprüfungswerkzeuge, Projektmanagement-Funktionen wie das Zuweisen von Aufgaben und Aufgabenstatus und mehr.

> [!NOTE]
> Git ist tatsächlich ein _verteiltes_ Versionskontrollsystem, was bedeutet, dass eine vollständige Kopie des Repositories, das das Codebase enthält, auf Ihrem Computer (und dem aller anderen) erstellt wird. Sie nehmen Änderungen an Ihrer eigenen Kopie vor und senden diese Änderungen dann zurück zum Server, wo ein:e Administrator:in entscheidet, ob Ihre Änderungen mit der Master-Kopie zusammengeführt werden.

## Voraussetzungen

Um Git und GitHub zu nutzen, benötigen Sie:

- Einen Desktop-Computer mit installiertem Git (siehe die [Git-Download-Seite](https://git-scm.com/downloads)).
- Ein Werkzeug zur Nutzung von Git. Je nachdem, wie Sie arbeiten möchten, können Sie einen [Git-GUI-Client](https://git-scm.com/downloads/guis/) verwenden (wir empfehlen GitHub Desktop, SourceTree oder Git Kraken) oder einfach ein Terminal-Fenster verwenden. Tatsächlich ist es wahrscheinlich nützlich für Sie, zumindest die Grundlagen der Git-Terminalbefehle zu kennen, auch wenn Sie vorhaben, eine GUI zu verwenden.
- Ein [GitHub-Konto](https://github.com/signup). Falls Sie noch keines haben, melden Sie sich jetzt über den bereitgestellten Link an.

In Bezug auf das erforderliche Wissen müssen Sie nichts über Webentwicklung, Git/GitHub oder VCSs wissen, um dieses Modul zu beginnen. Es wird jedoch empfohlen, dass Sie etwas Programmierkenntnisse haben, um über eine angemessene Computerkompetenz zu verfügen und einige Codes in Ihren Repositories zu speichern!

Es ist auch vorzuziehen, dass Sie über grundlegende Terminalkenntnisse verfügen, z. B. Verzeichnisse wechseln, Dateien erstellen und das System `PATH` ändern.

> [!NOTE]
> GitHub ist nicht die einzige Seite/Werkzeugsammlung, die Sie mit Git verwenden können. Es gibt Alternativen wie [GitLab](https://about.gitlab.com/), die Sie probieren könnten, und Sie könnten auch versuchen, Ihren eigenen Git-Server aufzusetzen und ihn anstelle von GitHub zu verwenden. Wir haben in diesem Kurs nur bei GitHub geblieben, um eine einzige funktionierende Möglichkeit zu bieten.

## Leitfäden

Beachten Sie, dass die untenstehenden Links Sie zu Ressourcen auf externen Websites führen. Letztendlich streben wir an, unseren eigenen dedizierten Git/GitHub-Kurs zu haben, aber momentan werden Ihnen diese helfen, das Thema zu verstehen.

- [Hallo, Welt (von GitHub)](https://docs.github.com/en/get-started/start-your-journey/hello-world)
  - : Dies ist ein guter Ausgangspunkt – dieser praktische Leitfaden bringt Sie zu einem schnellen Einstieg in die Nutzung von GitHub und lehrt Sie die Grundlagen von Git, wie das Erstellen von Repositories und Branches, das Erstellen von Commits und das Öffnen und Zusammenführen von Pull Requests.
- [Git-Handbuch (von GitHub)](https://docs.github.com/en/get-started/using-git/about-git)
  - : Dieses Git-Handbuch geht etwas tiefer und erklärt, was ein VCS ist, was ein Repository ist, wie das grundlegende GitHub-Modell funktioniert, Git-Befehle und Beispiele und mehr.
- [Projekte forken (von GitHub)](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project)
  - : Projekte zu forken ist essenziell, wenn Sie zum Code eines anderen beitragen möchten. Dieser Leitfaden erklärt, wie.
- [Über Pull Requests (von GitHub)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
  - : Ein nützlicher Leitfaden zum Verwalten von Pull Requests, der Weg, wie Ihre vorgeschlagenen Codeänderungen zu Repositories anderer Personen zur Überprüfung gelangen.
- [Probleme meistern (von GitHub)](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues)
  - : Probleme sind wie ein Forum für Ihr GitHub-Projekt, wo Menschen Fragen stellen und Probleme melden können, und Sie Updates verwalten können (zum Beispiel Leute zur Behebung von Problemen zuweisen, das Problem klären, die Leute wissen lassen, dass die Probleme behoben sind). Dieser Artikel sagt Ihnen, was Sie über Probleme wissen müssen.

> [!NOTE]
> Es gibt **viel mehr**, was Sie mit Git und GitHub tun können, aber wir denken, dass das Obige das Minimum darstellt, das Sie wissen müssen, um Git effektiv zu nutzen. Wenn Sie tiefer in Git eintauchen, werden Sie feststellen, dass es leicht ist, Fehler zu machen, wenn Sie anfangen, kompliziertere Befehle zu verwenden. Keine Sorge, auch professionelle Webentwickler:innen finden Git manchmal verwirrend und lösen Probleme oft, indem sie im Internet nach Lösungen suchen oder Seiten wie [Flight rules for Git](https://github.com/k88hudson/git-flight-rules) und [Dangit, git!](https://dangitgit.com/) konsultieren.

## Siehe auch

- [Verständnis des GitHub-Workflows](https://docs.github.com/en/get-started/using-github/github-flow)
- [Git-Befehlsliste](https://git-scm.com/docs)
- [Markdown meistern](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) (das Textformat, das Sie in PR-, Problemkommentaren und `.md`-Dateien verwenden).
- [Erste Schritte mit GitHub Pages](https://docs.github.com/en/pages/quickstart) (wie man Demos und Websites auf GitHub veröffentlicht).
- [Lernen Git-Branching](https://learngitbranching.js.org/)
- [Flight rules for Git](https://github.com/k88hudson/git-flight-rules) (ein sehr nützliches Kompendium von Wegen, spezifische Dinge in Git zu erreichen, einschließlich wie man Dinge korrigiert, wenn man einen Fehler gemacht hat).
- [Dangit, git!](https://dangitgit.com/) (ein weiteres nützliches Kompendium, insbesondere von Wegen, um Dinge zu korrigieren, wenn Sie einen Fehler gemacht haben).
