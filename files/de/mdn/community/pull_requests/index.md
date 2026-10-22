---
title: Einreichen und Prüfen von Pull Requests
slug: MDN/Community/Pull_requests
l10n:
  sourceCommit: c9c2a211595d962118504b599debbf39d6aaad3f
---

Dieses Dokument beschreibt, wie Mitwirkende Änderungen an MDN Web Docs vornehmen, wie diese geprüft werden und wie sie auf der Website veröffentlicht werden.
Inhaltsänderungen an MDN Web Docs umfassen:

- **Laufende Verbesserungen** an der Dokumentation von APIs, CSS-Eigenschaften und Plattformaktualisierungen sowie Ergänzungen von Inhalten.
  Diese Arbeiten werden in der Regel von Mitarbeitenden von MDN Web Docs bei Mozilla, Google, Open Web Docs und Samsung, aber auch von Freiwilligen aus der Community durchgeführt.
- **Kleinere Korrekturen** und Aktualisierungen der Website, etwa zur Behebung von Tippfehlern, grammatikalischen Fehlern und technischen Ungenauigkeiten.
  Diese Probleme werden meist von Leserinnen und Lesern der MDN Web Docs entdeckt.
- **Behebungen von Inhaltsfehlern**, die meist von Freiwilligen vorgenommen werden, um [Issues im Repository `mdn/content`](https://github.com/mdn/content/issues) zu schließen.

Unabhängig von der Art der Inhaltsänderung wird sie als Pull Request auf GitHub eingereicht.
Bevor Änderungen auf MDN Web Docs veröffentlicht werden, durchlaufen sie folgende Phasen:

1. **Änderungen einreichen:** Als Verfasserin oder Verfasser reichen Sie Ihre Änderungen ein, indem Sie einen Pull Request öffnen.
   Weitere Informationen zu unseren Abläufen finden Sie in den Abschnitten [Bevor Sie beginnen](#bevor_sie_beginnen), [Einen Pull Request öffnen](#einen_pull_request_öffnen) und [Nach dem Öffnen eines Pull Requests](#nach_dem_öffnen_eines_pull_requests).
2. **Änderungen prüfen:** Ihre Änderungen werden von MDN-Mitgliedern und Freiwilligen geprüft.
   Weitere Informationen finden Sie im Abschnitt [Prüfprozess für Pull Requests](#prüfprozess_für_pull_requests).
3. **Veröffentlichte Änderungen ansehen:** Inhaltsänderungen in `mdn/content` werden nach dem Zusammenführen innerhalb eines Tages veröffentlicht, wenn die Website neu erstellt wird. Dies geschieht alle 24 Stunden.

## Änderungen einreichen

### Werte und Mitwirkung

Wir möchten, dass MDN Web Docs eine einladende, freundliche Community ist, auf die wir alle stolz sein können.
Alle Beteiligten müssen unsere [Richtlinien für die Teilnahme an der Community](/de/docs/MDN/Community/Community_Participation_Guidelines) befolgen, die auf den [Richtlinien von Mozilla für die Teilnahme an der Community](https://www.mozilla.org/en-US/about/governance/policies/participation/) basieren.
Seien Sie höflich und konstruktiv, wenn Sie Pull Requests öffnen, Kommentare zu Reviews schreiben oder mit den Verfassenden eines Pull Requests und anderen Mitgliedern der Community interagieren.
Wenn Sie oder jemand anderes ein Verhalten erlebt haben, das möglicherweise rechtswidrig ist oder dazu führt, dass Sie sich unsicher, unerwünscht oder unwohl fühlen, ermutigen wir Sie, [es zu melden](/de/docs/MDN/Community/Community_Participation_Guidelines#reporting_process).

### Bevor Sie beginnen

Bevor Sie mit der Arbeit an MDN beginnen, lesen Sie bitte die folgenden Empfehlungen und Richtlinien.

**Pull Requests müssen ein bestehendes Issue vollständig oder teilweise beheben.**
Diese Einschränkung soll verhindern, dass Sie eine Aufgabe beginnen, an der möglicherweise bereits jemand anderes arbeitet.
Durchsuchen Sie die Issues und Pull Requests in dem [MDN-Repository](https://github.com/orgs/mdn/repositories), zu dem Sie beitragen möchten, und vergewissern Sie sich, dass noch niemand an Ihrer geplanten Aufgabe arbeitet.
Wenn Sie zum MDN-Projekt beitragen möchten, befinden Sie sich in einer der folgenden Situationen:

- **Wenn Sie zum Projekt beitragen möchten**, finden Sie Aufgaben unter „Issues“ in den [MDN-GitHub-Repositories](https://github.com/orgs/mdn/repositories) (beispielsweise unter den [Issues von `mdn/content`](https://github.com/mdn/content/issues)) und auf unseren [öffentlichen GitHub-Projektboards](https://github.com/orgs/mdn/projects).
  Achten Sie darauf, dass das Issue niemandem zugewiesen ist und noch niemand einen Pull Request für die Aufgabe geöffnet hat.
  Issues mit dem Label `good first issue` sind ein guter Einstieg.

- **Wenn Sie ein Problem auf MDN gefunden haben**, sollten Sie zuerst ein Issue öffnen.
  **Bevor Sie mit der Arbeit beginnen, müssen die Maintainer auf das Issue antworten.** So wissen Sie, dass das Problem, das Sie mit einem Pull Request beheben möchten, berechtigt ist und Ihr Pull Request angenommen werden kann.
  Weitere Informationen zu Issues finden Sie auf unseren [Community-Seiten zu GitHub-Issues](https://github.com/mdn/mdn/issues/new?labels=proposal%2Cneeds+triage&template=content-or-feature-suggestion.yml&title=Enter+your+proposal+here).

- **Wenn Sie neue Inhalte oder eine neue Funktion vorschlagen möchten**, reichen Sie Ihren Vorschlag über die [GitHub-Issue-Vorlage](https://github.com/mdn/mdn/issues/new/choose) „New content or feature suggestion“ ein.

Wenn Sie nicht sicher sind, wo Sie anfangen sollen, melden Sie sich auf [dem Discord-Server](/discord) und bitten Sie um Rückmeldung.

### Einen Pull Request öffnen

Wenn Sie bereit sind, einen Pull Request zu öffnen, beachten Sie die folgenden Richtlinien:

- **Prüfen Sie Ihre Änderungen, bevor Sie einen Pull Request öffnen:** Jeder Pull Request muss vor dem Öffnen von einem Menschen geprüft werden. Das gilt auch für Pull Requests, die automatisierte Werkzeuge in Ihrem Namen erstellt haben.
  Stellen Sie sicher, dass Sie jede Änderung verstehen und jeglichen Code getestet haben.
- **Halten Sie Pull Requests kurz und beschränken Sie sie auf ein Issue:** Teilen Sie zusammengehörige Änderungen nach Möglichkeit in mehrere kleine Pull Requests auf.
  Wenn ein Pull Request zu umfangreich wird, kann die prüfende Person ihn schließen und Sie bitten, für jede logisch zusammengehörige Gruppe von Änderungen einen eigenen Pull Request einzureichen.
- **Beschreiben Sie die Änderungen:** Erläutern Sie in eigenen Worten, was Sie geändert haben und warum.
- **Verlinken Sie das Issue, das Sie schließen:** Fügen Sie der Beschreibung des Pull Requests „Fixes“ hinzu, wenn er das Issue vollständig behebt, oder „Relates to“, wenn er sich auf ein verwandtes Issue bezieht.
  Weitere Informationen zum Verknüpfen von Issues mit Pull Requests finden Sie in der [GitHub-Dokumentation](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword).
- **Fügen Sie „depends on“ hinzu**, zusammen mit einem Link zur Abhängigkeit, wenn zuerst andere Pull Requests zusammengeführt werden müssen (beispielsweise Codebeispiele in anderen Repositories).
- **Begleiten Sie Änderungen an Codebeispielen mit Inhaltsänderungen:** Dadurch wird sichergestellt, dass aktualisierte Beispiele korrekt bereitgestellt werden.
  Wenn Ihre Inhaltsänderungen beeinflussen, wie Beispiele verwendet werden, sollten Sie auch die zugehörigen Codebeispiele aktualisieren.
- **Fügen Sie eine prüfende Person hinzu:** Wenn Sie bereits wissen, wer Ihren Pull Request prüfen sollte, können Sie diese Person hinzufügen, beispielsweise ein Teammitglied oder eine für das Thema verantwortliche Person.
- **Nehmen Sie keine Änderungen vor, die ausschließlich den Schreibstil betreffen:**
  MDN Web Docs enthält technische Dokumentation. Schlagen Sie keine stilistischen Änderungen am Text vor, es sei denn, die Grammatik ist fehlerhaft.
- **Fügen Sie Zeilenumbrüche auf Seiten mit einem bestimmten Formatierungsstil nicht unnötig hinzu und entfernen Sie solche nicht unnötig.**

Wir behalten uns vor, Pull Requests zu schließen, die diesen Richtlinien nicht entsprechen.

### Nach dem Öffnen eines Pull Requests

- **Beheben Sie CI-Fehler** aus den automatisierten Tests, die als GitHub Actions ausgeführt werden (siehe `.github/workflows`).
  Wenn einer oder mehrere dieser Tests fehlschlagen, liegt es in Ihrer Verantwortung, zu versuchen, die Fehler zu beheben.
  Wenn Sie nicht wissen, wie Sie die zugrunde liegenden Probleme beheben können, bitten Sie um Hilfe.
- **Beheben Sie Merge-Konflikte** mit dem Hauptbranch; Sie sind dafür verantwortlich.
  Dazu können Sie den Branch `mdn/main` in Ihren Branch zusammenführen.
  Weitere Informationen finden Sie in der GitHub-Dokumentation dazu, [wie Sie Ihren Branch auf dem aktuellen Stand halten](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch#about-keeping-your-pull-request-in-sync).
- **Reagieren Sie auf Feedback.**
  Seien Sie darauf vorbereitet, Ihren Pull Request aufgrund des Reviews zu ändern.
  Wenn ein Review stattfindet und die Änderungen nicht vorgenommen werden, kann der Pull Request geschlossen werden.
- **Haben Sie während des Prüfprozesses Geduld.**
  Die MDN-Organisation erhält viele Pull Requests, und das Team benötigt möglicherweise Zeit, um Ihren Beitrag zu prüfen.
- **Öffnen Sie geschlossene Pull Requests nicht erneut.**
  Wenn Sie einen neuen Pull Request erstellen müssen, können Sie darin auf den geschlossenen verweisen.

## Prüfprozess für Pull Requests

Wenn Sie einen Pull Request öffnen, werden anhand einer `CODEOWNERS`-Datei automatisch prüfende Personen zugewiesen. Wenn Sie eine bestimmte Person um ein Review bitten möchten, können Sie jedoch auch [manuell ein Review anfordern](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/requesting-a-pull-request-review).
Außerdem werden Pull Requests automatisch mit Labels versehen, um ihre Sichtung zu erleichtern.
Maintainer können Pull Requests weiter sichten und je nach Kontext bei Bedarf zusätzliche Labels wie `needs-info` oder `on-hold` hinzufügen.

Wenn Sie einen Pull Request prüfen möchten, aber nicht als prüfende Person eingetragen sind, können Sie sich selbst hinzufügen.
Es ist höflich, zuvor die bereits eingetragenen prüfenden Personen zu informieren, indem Sie im Pull Request kommentieren, dass Sie ein Review beginnen möchten.

### Prüfende und zugewiesene Personen

Das MDN-Web-Docs-Team verwendet prüfende und zugewiesene Personen, um den Status von Pull Requests nachzuverfolgen.

- **Prüfende Personen** bewerten die Änderungen in einem Pull Request und geben den Verfassenden Feedback.
- **Zugewiesene Personen** sind dafür verantwortlich, dass die Bearbeitung des Pull Requests nicht blockiert wird.
  Nicht jedem Pull Request ist eine Person zugewiesen. Wenn dies jedoch der Fall ist, sorgt sie dafür, dass der Pull Request vorankommt.
  Sie hilft dabei, die Arbeit abzuschließen: indem sie den Pull Request zusammenführt oder schließt oder selbst Hindernisse beseitigt.

Eine prüfende oder zugewiesene Person ist dafür verantwortlich, die Änderungen eines Pull Requests zusammenzuführen.

Prüfen Sie vor Beginn eines Reviews die Beschreibung des Pull Requests, um festzustellen, ob eine bestimmte Person ihn prüfen soll.
Stellen Sie sicher, dass alle Aufgaben der kontinuierlichen Integration (CI) erfolgreich abgeschlossen wurden und keine Merge-Konflikte vorliegen.

Wenn Aufgaben fehlschlagen oder Merge-Konflikte vorliegen, teilen Sie dies den Verfassenden mit; die Behebung liegt in ihrer Verantwortung.
Sie können die verfassende Person als **zugewiesene Person** eintragen, um anzuzeigen, dass der Pull Request ihre Aufmerksamkeit benötigt, bevor ein Review beginnen kann.
Geben Sie ihr die Möglichkeit, um Hilfe zu bitten, insbesondere wenn sie neu zum Projekt beiträgt.

### Einen Pull Request prüfen

Die Inhalte und der Text eines Pull Requests müssen dem [MDN-Leitfaden zum Schreibstil](/de/docs/MDN/Writing_guidelines/Writing_style_guide) entsprechen. Beispielcode muss dem [Leitfaden zum Codestil](/de/docs/MDN/Writing_guidelines/Code_style_guide) folgen.

Wenn Sie einen Pull Request prüfen, sollten Sie:

- **Einen Kommentar hinzufügen**, um den Verfassenden mitzuteilen, dass Sie den Pull Request gesehen haben und mit dem Review beginnen werden.
  So vermeiden Sie, dass jemand anderes unnötigerweise zur gleichen Zeit mit der Prüfung beginnt.
- **Den Umfang des Reviews** auf die Änderungen im Pull Request beschränken.
  Öffnen Sie ein Folge-Issue oder einen weiteren Pull Request für Verbesserungen, die nicht Gegenstand des Pull Requests sind.
- **Um Hilfe bitten** und das Label `review-help-needed` hinzufügen, wenn Sie technische Unterstützung beim Review benötigen.
- **Pull Requests mit nicht zusammenhängenden Änderungen schließen**, wenn die Prüfung zu komplex ist oder sie mehrere nicht zusammenhängende Änderungen enthalten.
  Bitten Sie die Verfassenden in solchen Fällen, ihre Änderungen in kleineren Einheiten einzureichen.
- **Um eine Umverteilung der Arbeit bitten**, wenn Sie ausgelastet sind und keine Kapazität für das Review haben.
  Erwähnen Sie das Team `@core-yari-content` und fragen Sie, ob jemand anderes die Prüfung übernehmen kann.
- **Pull Requests erst zusammenführen, wenn die mit „depends on“ angegebenen Pull Requests zusammengeführt wurden.**
- **Pull Requests mit fehlgeschlagenen Tests nicht zusammenführen.**
  Zur [guten Umgangsform in Open-Source-Projekten](/de/docs/MDN/Community/Open_source_etiquette) gehört es, den Branch `main` stabil zu halten, damit Mitwirkende, Maintainer und automatisierte Prozesse nicht beeinträchtigt werden.
  Ein instabiler Branch `main` blockiert alle anderen Pull Requests und erschwert es anderen, Beiträge zu prüfen und zusammenzuführen.
  Darüber hinaus erhalten Mitwirkende, die Repositories beobachten, viele Benachrichtigungen. Unnötige Benachrichtigungen durch fehlgeschlagene Tests können frustrierend sein.
  Wenn Sie nicht wissen, wie Sie fehlgeschlagene Tests beheben können, [bitten Sie um Hilfe](/de/docs/MDN/Community/Communication_channels) oder weisen Sie den Pull Request jemand anderem zu.

Wenn ein Pull Request bis auf kleine Tippfehler oder andere geringfügige Probleme gut aussieht, können Sie das Problem direkt beheben.
Das ist möglich, sofern der Pull Request [so eingerichtet wurde, dass Änderungen zugelassen sind](https://docs.github.com/en/pull-requests/how-tos/work-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork).
Für die Behebung kleinerer Probleme empfiehlt es sich, [Kommentare mit Änderungsvorschlägen](https://docs.github.com/en/pull-requests/how-tos/review-pull-requests/commenting-on-a-pull-request#adding-comments-to-a-pull-request) zu verwenden. Diese können gesammelt und in einem Schritt übernommen werden.

Wenn Sie Ihr Review einreichen, haben Sie drei Optionen: **genehmigen**, **kommentieren** oder **Änderungen anfordern**.
Die folgenden Abschnitte erläutern, wann Sie welche Option verwenden sollten.

### Änderungen anfordern

Verwenden Sie die Option zum Anfordern von Änderungen, wenn Ihr Feedback von den Verfassenden _berücksichtigt werden muss_ und die prüfende Person die Änderungen anschließend erneut prüfen muss, bevor der Pull Request genehmigt und zusammengeführt werden kann.

#### Kommentieren

Verwenden Sie die Kommentaroption, wenn Ihr Feedback nicht kritisch ist und keine erneute Prüfung erfordert.
Kurz gesagt: Sie vertrauen darauf, dass die Verfassenden und die anderen prüfenden Personen eine gute Entscheidung treffen.

#### Genehmigen

Verwenden Sie die Genehmigungsoption, wenn aus Ihrer Sicht alles gut aussieht und der Pull Request zusammengeführt werden kann.
Nach dem Einreichen Ihres Reviews können Sie den Pull Request zusammenführen, sofern keine weiteren prüfenden Personen oder noch zu bearbeitenden Review-Kommentare vorhanden sind.

#### Was tun, wenn Sie nicht weiterkommen?

Wenn Sie eine Inhaltsänderung nicht verstehen oder sie Ihnen zu umfangreich und komplex erscheint, geraten Sie nicht in Panik!
Ein guter erster Schritt ist, die Verfassenden des Pull Requests um weitere Informationen zu bitten.

Es kommt selten vor, dass Sie ohne Vorwarnung eine umfangreiche, komplexe Inhaltsänderung prüfen müssen.
Falls dies doch geschieht, sollte die Beschreibung des Pull Requests auf ein Issue verweisen, das die Hintergründe erläutert.

Wenn Sie weiterhin unsicher sind oder die Inhalte für verdächtig halten, wenden Sie sich an das MDN-Web-Docs-Team und bitten Sie um Hilfe.

### Richtlinien für die Reaktionszeiten von Verfassenden und prüfenden Personen

Dieser Abschnitt beschreibt die erwarteten Reaktionszeiten für Verfassende von Pull Requests bei der Beantwortung von Review-Kommentaren sowie für prüfende Personen bei der Prüfung von Pull Requests.

- **Prüfung:**
  Die prüfende Person sollte die Änderungen innerhalb von höchstens zwei Wochen prüfen können.
  Innerhalb der ersten zwei Wochen nach dem Öffnen eines Pull Requests kann sie:
  - Einen Kommentar hinterlassen, wann sie mit der Prüfung beginnen kann
  - Um technische Unterstützung oder zusätzliche Ressourcen bitten
- **Angeforderte Änderungen bearbeiten:**
  Die Verfassenden eines Pull Requests sollten innerhalb von höchstens vier Wochen auf Kommentare antworten oder die entsprechenden Probleme beheben können.
  Wenn sie in diesem Zeitraum nicht antworten oder die Review-Kommentare nicht bearbeiten können, kann die prüfende Person eine der folgenden Maßnahmen ergreifen:
  - Die Änderungen selbst übernehmen und den Pull Request zusammenführen
  - Den Pull Request schließen

### Externe prüfende Personen

Einige Pull Requests im MDN-Content-Repository betreffen bestimmte Arbeiten von Browserherstellern oder Organisationen, für die Verfassende und prüfende Personen festgelegt sind.
In diesen Fällen fügen die Verfassenden den Benutzernamen der prüfenden Person in einer Zeile am Ende der Pull-Request-Beschreibung hinzu, beispielsweise:

```md
reviewer: @jpmedley
```

Wenn Sie eine Review-Anfrage erhalten, aber auf die oben beschriebene Weise durch eine andere prüfende Person ersetzt wurden, prüfen Sie die Änderungen nicht.
Sobald die in der Beschreibung genannte Person die Änderungen genehmigt hat, wird sie um die gemäß `CODEOWNERS` erforderliche Genehmigung bitten.

## Leseliste

Prüfenden Personen empfehlen wir die folgenden Artikel als Hilfe bei häufigen Aufgaben:

- [Die Kunst des Schließens](https://blog.jessfraz.com/post/the-art-of-closing/) erklärt, wie Sie einen unvollendeten oder abgelehnten Pull Request schließen.
- [Richtlinien für Code-Reviews aus Sicht der prüfenden Person](https://phauer.com/2018/code-review-guidelines/#code-reviews-guidelines-for-the-reviewer) bietet Beispiele für gutes und schlechtes Feedback.
- [Wie man ein Code-Review durchführt](https://google.github.io/eng-practices/review/reviewer/) auf google.github.io/eng-practices
