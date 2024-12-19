---
title: Versionskontrolle
slug: Learn_web_development/Core/Version_control
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenu("Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core")}}

Versionskontrollwerkzeuge sind ein wesentlicher Bestandteil moderner Arbeitsabläufe zum Sichern und Zusammenarbeiten an Codebasen. Dieses Modul führt Sie durch die Grundlagen der Versionskontrolle mit Git und GitHub.

## Übersicht

VCSes sind für die Softwareentwicklung unerlässlich:

- Es ist selten, dass Sie vollständig allein an einem Projekt arbeiten. Sobald Sie mit anderen Menschen zusammenarbeiten, besteht die Gefahr, dass Sie sich gegenseitig in die Quere kommen – zum Beispiel, wenn beide gleichzeitig dasselbe Stück Code aktualisieren wollen. Sie benötigen eine Art Mechanismus, um solche Vorkommnisse zu verwalten und den Verlust von Arbeitsergebnissen zu vermeiden.
- Wenn Sie an einem Projekt allein oder mit anderen arbeiten, möchten Sie den Code an einem zentralen Ort sichern, damit er nicht verloren geht, falls Ihr Computer kaputtgeht.
- Sie möchten auch in der Lage sein, zu früheren Versionen zurückzukehren, wenn später ein Problem entdeckt wird. Vielleicht haben Sie angefangen, dies in Ihrer eigenen Arbeit zu tun, indem Sie verschiedene Versionen derselben Datei erstellen, z. B. `myCode.js`, `myCode_v2.js`, `myCode_v3.js`, `myCode_final.js`, `myCode_really_really_final.js` usw., aber das ist wirklich fehleranfällig und unzuverlässig.
- Verschiedene Teammitglieder möchten häufig ihre eigenen separaten Versionen des Codes erstellen (in Git als **Branches** bezeichnet), an einem neuen Feature in dieser Version arbeiten und es dann auf kontrollierte Weise (in GitHub verwenden wir **Pull Requests**) mit der Master-Version zusammenführen, wenn sie fertig sind.

VCSes bieten Werkzeuge, um die oben genannten Bedürfnisse zu erfüllen. [Git](https://git-scm.com/) ist ein Beispiel für ein VCS, und [GitHub](https://github.com/) ist eine Website + Infrastruktur, die einen Git-Server sowie eine Reihe wirklich nützlicher Werkzeuge für die Arbeit mit Git-Repositories einzeln oder in Teams bereitstellt, wie z.B. das Melden von Problemen im Code, Überprüfungstools, Projektmanagementfunktionen wie Zuweisen von Aufgaben und Aufgabenstatus und mehr.

> [!NOTE]
> Git ist tatsächlich ein _verteiltes_ Versionskontrollsystem, was bedeutet, dass eine vollständige Kopie des Repositories mit dem Code auf Ihrem Computer (und auf dem von allen anderen) erstellt wird. Sie nehmen Änderungen an Ihrer eigenen Kopie vor und schieben diese Änderungen dann zurück auf den Server, wo ein Administrator entscheidet, ob Ihre Änderungen mit der Hauptkopie zusammengeführt werden.

## Voraussetzungen

Um Git und GitHub zu verwenden, benötigen Sie:

- Einen Desktop-Computer mit installiertem Git (siehe die [Git-Downloads-Seite](https://git-scm.com/downloads)).
- Ein Tool zum Verwenden von Git. Je nachdem, wie Sie arbeiten möchten, könnten Sie einen [Git GUI Client](https://git-scm.com/downloads/guis/) verwenden (wir empfehlen GitHub Desktop, SourceTree oder Git Kraken) oder einfach mit einem Terminal arbeiten. Tatsächlich ist es wahrscheinlich nützlich, zumindest die Grundlagen der Git-Terminalbefehle zu kennen, auch wenn Sie vorhaben, eine GUI zu verwenden.
- Ein [GitHub-Konto](https://github.com/signup). Wenn Sie noch keines haben, melden Sie sich jetzt über den bereitgestellten Link an.

Was das erforderliche Wissen betrifft, müssen Sie nichts über Webentwicklung, Git/GitHub oder VCSes wissen, um mit diesem Modul zu beginnen. Es wird jedoch empfohlen, dass Sie etwas Programmierung beherrschen, um über eine angemessene Computerkompetenz zu verfügen und etwas Code zur Speicherung in Ihren Repositories zu haben.

Es ist auch wünschenswert, dass Sie grundlegende Terminal-Kenntnisse haben, z. B. zwischen Verzeichnissen wechseln, Dateien erstellen und das System-PATH ändern.

> [!NOTE]
> GitHub ist nicht die einzige Website/Toolset, die Sie mit Git nutzen können. Es gibt andere Alternativen wie [GitLab](https://about.gitlab.com/), die Sie ausprobieren könnten, und Sie könnten auch versuchen, Ihren eigenen Git-Server einzurichten und ihn anstelle von GitHub zu verwenden. Wir haben uns in diesem Kurs nur auf GitHub konzentriert, um eine einheitliche Methode zu bieten, die funktioniert.

## Lernziele

- Warum Versionskontrollsysteme notwendig sind.
- Der Unterschied zwischen Git und Websites wie GitHub und GitLab.
- Verstehen, dass Websites wie GitHub und GitLab Teamarbeit und Zusammenarbeit ermöglichen, die nur mit normalem Git nicht so einfach ist.
- Grundlegende Einrichtung – Installation von Git, Anmeldung für ein Konto auf Ihrer gewählten sozialen Coding-Website.
- Umgang mit Sicherheitsanforderungen, wie SSH/GPG-Schlüsseln.
- Ein Repository erstellen und Änderungen dorthin schieben.
- Zu Repos anderer beitragen: Forking, einen neuen Branch erstellen, einen PR erstellen und den Überprüfungsablauf.
- Gute Haushaltsführung:
  - Lokale Repos regelmäßig aktualisieren, damit sie mit ihren entfernten Gegenstücken synchronisiert sind.
  - `.gitignore` verwenden, um all das Zeug zu ignorieren, das Sie nicht einfügen möchten.
  - Branches löschen, die Sie abgeschlossen haben.
- Umgang mit Merge-Konflikten.

## Leitfäden

Beachten Sie, dass die folgenden Links Sie zu Ressourcen auf externen Websites führen. Letztendlich planen wir, unseren eigenen dedizierten Git/GitHub-Kurs anzubieten, aber vorerst werden diese Ihnen helfen, das Thema zu verstehen.

- [Hello, World (von GitHub)](https://docs.github.com/en/get-started/start-your-journey/hello-world)
  - : Dies ist ein guter Ausgangspunkt – dieser praktische Leitfaden bringt Sie direkt dazu, GitHub zu verwenden, die Grundlagen von Git zu erlernen, wie das Erstellen von Repositories und Branches, das Erstellen von Commits und das Öffnen und Zusammenführen von Pull Requests.
- [Git-Handbuch (von GitHub)](https://docs.github.com/en/get-started/using-git/about-git)
  - : Dieses Git-Handbuch geht etwas tiefer und erklärt, was ein VCS ist, was ein Repository ist, wie das grundlegende GitHub-Modell funktioniert, Git-Befehle und Beispiele und mehr.
- [Projekte Forken (von GitHub)](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project)
  - : Projekte zu forken ist notwendig, wenn Sie zum Code von jemand anderem beitragen möchten. Dieser Leitfaden erklärt, wie es geht.
- [Über Pull Requests (von GitHub)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
  - : Ein nützlicher Leitfaden zum Verwalten von Pull Requests, der Art und Weise, wie Ihre vorgeschlagenen Codeänderungen zur Prüfung an die Repositories anderer gesendet werden.
- [Mastering Issues (von GitHub)](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues)
  - : Issues sind wie ein Forum für Ihr GitHub-Projekt, in dem Menschen Fragen stellen und Probleme melden können, und Sie können Updates verwalten (z. B. Leute zuweisen, um Probleme zu beheben, das Problem klären, Leute wissen lassen, dass Dinge behoben sind). Dieser Artikel sagt Ihnen, was Sie über Issues wissen müssen.

> [!NOTE]
> Es gibt **viel mehr**, was Sie mit Git und GitHub machen können, aber wir glauben, dass das oben Genannte das Minimum darstellt, das Sie wissen müssen, um Git effektiv zu nutzen. Wenn Sie tiefer in Git einsteigen, werden Sie feststellen, dass es leicht ist, Fehler zu machen, wenn Sie anfangen, kompliziertere Befehle zu verwenden. Keine Sorge, selbst professionelle Webentwickler finden Git manchmal verwirrend und lösen Probleme oft, indem sie nach Lösungen im Internet suchen oder Seiten wie [Flugregeln für Git](https://github.com/k88hudson/git-flight-rules) und [Verdammt, git!](https://dangitgit.com/) konsultieren.

## Siehe auch

- [Das GitHub-Flow verstehen](https://docs.github.com/en/get-started/using-github/github-flow)
- [Git-Befehlsliste](https://git-scm.com/docs)
- [Mastering Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) (das Textformat, das Sie in PRs, Issue-Kommentaren und `.md` Dateien verwenden).
- [Erste Schritte mit GitHub Pages](https://docs.github.com/en/pages/quickstart) (wie Sie Demos und Websites auf GitHub veröffentlichen).
- [Git Branching lernen](https://learngitbranching.js.org/)
- [Flugregeln für Git](https://github.com/k88hudson/git-flight-rules) (ein sehr nützliches Kompendium von Möglichkeiten, spezifische Dinge in Git zu erreichen, einschließlich der Korrektur von Fehlern, wenn Sie etwas falsch gemacht haben).
- [Verdammt, git!](https://dangitgit.com/) (ein weiteres nützliches Kompendium, speziell darüber, wie man Dinge korrigiert, wenn man Fehler gemacht hat).

{{PreviousMenu("Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core")}}
