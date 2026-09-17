---
title: Einreichen und Überprüfen von Pull Requests
slug: MDN/Community/Pull_requests
l10n:
  sourceCommit: 03e93e0948768ea78474e77a53795698ebca5836
---

Dieses Dokument beschreibt, wie Mitwirkende Änderungen an MDN Web Docs vornehmen, wie die Änderungen überprüft werden und wie sie auf der Website veröffentlicht werden.
Inhaltsänderungen an MDN Web Docs umfassen:

- **Alltägliche Verbesserungen** der Dokumentation von APIs, CSS-Eigenschaften, Plattformaktualisierungen und Inhaltsergänzungen.
  Dies wird üblicherweise von MDN-Web-Docs-Mitarbeitenden bei Mozilla, Google, Open Web Docs und Samsung, aber auch von Freiwilligen aus der Community durchgeführt.
- **Kleinere Korrekturen** und kleine Aktualisierungen der Website zur Behebung von Tippfehlern, grammatikalischen Problemen und technischen Ungenauigkeiten.
  Diese Probleme werden üblicherweise von Lesenden von MDN Web Docs gefunden.
- **Behebungen von Inhaltsfehlern**, die üblicherweise von Freiwilligen vorgenommen werden, um [Issues im Repository `mdn/content`](https://github.com/mdn/content/issues) zu schließen.

Unabhängig davon, wie Inhaltsänderungen vorgenommen werden, werden sie als Pull Requests auf GitHub eingereicht.
Inhaltsänderungen durchlaufen die folgenden Phasen, bevor sie auf MDN Web Docs veröffentlicht werden:

1. **Änderungen einreichen:** Als Autor eines Pull Requests reichen Sie Änderungen ein, indem Sie einen Pull Request öffnen.
   Weitere Informationen über unsere Prozesse finden Sie in den Abschnitten [Bevor Sie beginnen](#bevor_sie_beginnen), [Einen Pull Request öffnen](#einen_pull_request_öffnen) und [Nachdem Sie einen Pull Request geöffnet haben](#nachdem_sie_einen_pull_request_geöffnet_haben).
2. **Änderungen überprüfen:** Ihre Änderungen werden von MDN-Mitgliedern und Freiwilligen überprüft.
   Weitere Details finden Sie im Abschnitt [Prozess zur Überprüfung von Pull Requests](#prozess_zur_überprüfung_von_pull_requests).
3. **Veröffentlichte Änderungen ansehen:** In `mdn/content` aktualisierte Inhalte werden innerhalb eines Tages nach dem Zusammenführen durch einen Website-Neuaufbau, der alle 24 Stunden erfolgt, veröffentlicht.

## Änderungen einreichen

### Werte und Teilnahme

Wir möchten, dass MDN Web Docs eine einladende, freundliche Community ist, auf die wir alle stolz sein können.
Alle Teilnehmenden müssen unsere [Richtlinien zur Teilnahme an der Community](/de/docs/MDN/Community/Community_Participation_Guidelines) befolgen, die von [Mozillas Community Participation Guidelines](https://www.mozilla.org/en-US/about/governance/policies/participation/) abgeleitet sind.
Seien Sie beim Öffnen von Pull Requests, Schreiben von Review-Kommentaren und bei der Interaktion mit dem Autor des Pull Requests oder anderen Community-Mitgliedern höflich und konstruktiv.
Wenn Sie oder jemand anderes ein Verhalten erlebt haben, das möglicherweise rechtswidrig ist oder bei dem Sie sich unsicher, unwillkommen oder unwohl fühlen, empfehlen wir Ihnen, [es zu melden](/de/docs/MDN/Community/Community_Participation_Guidelines#reporting_process).

### Bevor Sie beginnen

Bevor Sie mit der Arbeit an MDN beginnen, lesen Sie bitte die unten aufgeführten Empfehlungen und Richtlinien.

**Pull Requests müssen ein bestehendes Issue lösen oder teilweise beheben.**
Der Grund für diese Einschränkung ist, zu vermeiden, dass Sie mit einer Aufgabe beginnen, an der möglicherweise bereits jemand anderes arbeitet.
Durchsuchen Sie die Issues und Pull Requests in dem [MDN-Repository](https://github.com/orgs/mdn/repositories), zu dem Sie beitragen möchten, und bestätigen Sie, dass die Arbeit, die Sie beginnen möchten, nicht bereits durchgeführt wird.
Wenn Sie zum MDN-Projekt beitragen möchten, befinden Sie sich in einer der folgenden Situationen:

- **Wenn Sie zum Projekt beitragen möchten**, finden Sie Aufgaben unter „Issues“ in jedem der [MDN-GitHub-Repositories](https://github.com/orgs/mdn/repositories) (zum Beispiel [Issues für `mdn/content`](https://github.com/mdn/content/issues)) und auf unseren [öffentlichen GitHub-Projektboards](https://github.com/orgs/mdn/projects).
  Stellen Sie sicher, dass das Issue niemandem zugewiesen ist und noch niemand einen Pull Request für die Aufgabe geöffnet hat.
  Issues mit dem Label `good first issue` sind ein guter Ausgangspunkt.

- **Wenn Sie ein Problem auf MDN gefunden haben**, sollten Sie zuerst ein Issue öffnen.
  **Issues benötigen eine Rückmeldung von Maintainers, bevor Sie mit der Arbeit beginnen**, damit Sie wissen, dass ein durch einen Pull Request behandeltes Problem gültig ist und Ihr Pull Request akzeptiert wird.
  Weitere Informationen zu Issues finden Sie auf unseren [Community-Seiten für GitHub-Issues](https://github.com/mdn/mdn/issues/new?labels=proposal%2Cneeds+triage&template=content-or-feature-suggestion.yml&title=Enter+your+proposal+here).

- **Wenn Sie neue Inhalte oder eine neue Funktion vorschlagen möchten**, reichen Sie einen Vorschlag über die GitHub-Issue-Vorlage „New content or feature suggestion“ ein ([GitHub issue template](https://github.com/mdn/mdn/issues/new/choose)).

Wenn Sie nicht sicher sind, wo Sie anfangen sollen, kontaktieren Sie uns auf [dem Discord-Server](/discord) und bitten Sie um Feedback.

### Einen Pull Request öffnen

Wenn Sie bereit sind, einen Pull Request zu öffnen, befolgen Sie diese Richtlinien:

- **Pull Requests sollten kurz sein und sich auf ein Issue konzentrieren:** Gruppieren Sie zusammengehörige Änderungen nach Möglichkeit in mehrere kleine Pull Requests.
  Wenn ein Pull Request zu groß wird, kann der Reviewer ihn schließen und Sie bitten, Pull Requests für jede logisch zusammengehörige Gruppe von Änderungen einzureichen.
- **Fügen Sie eine Beschreibung der Änderungen hinzu:** Geben Sie so viel Kontext und Begründung für den Pull Request wie möglich an.
- **Fügen Sie den Link zu dem Issue hinzu, das Sie schließen:** Fügen Sie in der Beschreibung des Pull Requests „Fixes“ hinzu, wenn das Issue vollständig gelöst wird, oder „Relates to“, wenn es sich um ein verwandtes Issue handelt.
  Weitere Informationen zum Verknüpfen von Issues in Pull Requests finden Sie in der [GitHub-Dokumentation](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword).
- **Fügen Sie „depends on“** zusammen mit einem Link zu einer Abhängigkeit hinzu, wenn Pull Requests zuerst zusammengeführt werden müssen (z. B. Codebeispiele in anderen Repositories).
- **Begleiten Sie Änderungen an Codebeispielen mit Inhaltsänderungen:** Dies ist wichtig, um sicherzustellen, dass aktualisierte Beispiele korrekt bereitgestellt werden.
  Wenn Sie Inhaltsänderungen vornehmen, die sich darauf auswirken, wie Beispiele verwendet werden, sollten die zugehörigen Codebeispiele ebenfalls aktualisiert werden.
- **Fügen Sie einen Reviewer hinzu:** Sie können einen Reviewer, beispielsweise ein Teammitglied oder einen Themenverantwortlichen, hinzufügen, wenn Sie bereits wissen, wer Ihren Pull Request überprüfen sollte.
- **Nehmen Sie keine Änderungen nur an der Grammatik vor:**
  MDN Web Docs enthält technische Dokumentation; Sie sollten keine Änderungen am Prosa-Stil vorschlagen, außer wenn die Grammatik fehlerhaft ist.
- **Fügen Sie auf Seiten, die einem bestimmten Formatierungsstil folgen, nicht unnötig Zeilenumbrüche hinzu oder entfernen Sie diese nicht.**

### Nachdem Sie einen Pull Request geöffnet haben

- **Beheben Sie CI-Fehler** aus den automatisierten Tests, die als GitHub Actions ausgeführt werden (siehe `.github/workflows`).
  Wenn einer oder mehrere dieser Tests fehlschlagen, liegt es in Ihrer Verantwortung, zu versuchen, sie zu beheben.
  Wenn Sie nicht wissen, wie Sie die zugrunde liegenden Probleme beheben können, bitten Sie um Hilfe.
- **Lösen Sie Merge-Konflikte** mit dem `main`-Branch; Sie sind für deren Behebung verantwortlich.
  Sie können dies tun, indem Sie den Branch `mdn/main` in Ihren Branch mergen.
  Weitere Informationen finden Sie in der GitHub-Dokumentation zum [Aktualisieren Ihres Branches](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch#about-keeping-your-pull-request-in-sync).
- **Reagieren Sie auf Feedback.**
  Das bedeutet, dass Sie darauf vorbereitet sein müssen, den Pull Request auf Grundlage des Reviews zu ändern.
  Wenn ein Review erfolgt und die Änderungen nicht vorgenommen werden, kann der Pull Request geschlossen werden.
- **Seien Sie während des Review-Prozesses geduldig.**
  Die MDN-Organisation erhält eine große Anzahl von Pull Requests, und das Team benötigt möglicherweise Zeit, um Ihre Beiträge zu überprüfen.
- **Öffnen Sie geschlossene Pull Requests nicht erneut.**
  Wenn Sie einen neuen Pull Request erstellen müssen, kann dieser auf den geschlossenen verweisen.

## Prozess zur Überprüfung von Pull Requests

Reviewer werden beim Öffnen eines Pull Requests automatisch anhand einer `CODEOWNERS`-Datei zugewiesen. Wenn Sie jedoch eine bestimmte Person um ein Review bitten möchten, können Sie [manuell ein Review anfordern](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/requesting-a-pull-request-review).
Wir verwenden außerdem automatische Label-Zuweisung für Pull Requests, um deren Triage zu erleichtern.
Maintainers können Pull Requests weiter priorisieren und bei Bedarf je nach Kontext zusätzliche Labels wie `needs-info` oder `on-hold` hinzufügen.

Wenn Sie einen Pull Request überprüfen möchten, aber nicht als Reviewer aufgeführt sind, können Sie sich selbst hinzufügen.
Es ist höflich, zunächst bei bestehenden Reviewern nachzufragen, indem Sie im Pull Request kommentieren, dass Sie beabsichtigen, ein Review zu beginnen.

### Reviewer und Zugewiesene

Das MDN-Web-Docs-Team verwendet Reviewer und Zugewiesene, um den Status von Pull Requests zu verfolgen.

- **Reviewer** sind Personen, die die Änderungen in einem Pull Request bewerten und dem Autor Feedback geben.
- **Zugewiesene** sind Personen, die dafür verantwortlich sind sicherzustellen, dass der Pull Request nicht blockiert ist.
  Nicht alle Pull Requests haben Zugewiesene, aber wenn sie welche haben, sind diese dafür verantwortlich sicherzustellen, dass der Pull Request vorankommt.
  Ein Zugewiesener hilft dabei, die Arbeit zum Abschluss zu bringen, indem er sie zusammenführt, schließt oder selbst Maßnahmen zur Aufhebung der Blockierung ergreift.

Ein Reviewer oder Zugewiesener eines Pull Requests ist für das Zusammenführen der Änderungen verantwortlich.

Bevor Sie mit einem Review beginnen, prüfen Sie die Beschreibung des Pull Requests, um sicherzustellen, dass keine bestimmte Person ihn überprüfen soll.
Stellen Sie sicher, dass alle Aufgaben der kontinuierlichen Integration (CI) erfolgreich abgeschlossen wurden und keine Merge-Konflikte vorliegen.

Falls Aufgaben fehlschlagen oder Merge-Konflikte vorliegen, teilen Sie dies dem Autor mit; es liegt in seiner Verantwortung, diese zu beheben.
Sie können den Autor als **Zugewiesenen** festlegen, um anzuzeigen, dass ein Pull Request seine Aufmerksamkeit benötigt, bevor ein Review beginnen kann.
Lassen Sie dem Autor die Möglichkeit, um Hilfe zu bitten, insbesondere neuen Mitwirkenden am Projekt.

### Einen Pull Request überprüfen

Die Inhalte und Prosa eines Pull Requests müssen dem [MDN-Leitfaden zum Schreibstil](/de/docs/MDN/Writing_guidelines/Writing_style_guide) entsprechen, und Beispielcode muss dem [Leitfaden zum Code-Stil](/de/docs/MDN/Writing_guidelines/Code_style_guide) folgen.

Wenn Sie einen Pull Request überprüfen, sollten Sie:

- **Einen Kommentar hinzufügen**, um den Autor wissen zu lassen, dass Sie den Pull Request wahrgenommen haben und mit dem Review beginnen werden.
  Dadurch werden Fälle vermieden, in denen jemand anderes gleichzeitig unnötigerweise mit der Überprüfung des Pull Requests beginnt.
- **Den Umfang des Reviews** ausschließlich auf die Änderungen im Pull Request beschränken.
  Öffnen Sie ein Folge-Issue oder einen Folge-Pull-Request, um andere Verbesserungen zu behandeln, die nicht vom Pull Request abgedeckt werden.
- **Um Hilfe bitten** und das Label `review-help-needed` hinzufügen, wenn Sie technische Unterstützung bei dem Review benötigen.
- **Pull Requests mit nicht zusammenhängenden Änderungen schließen**, wenn sie zu komplex sind oder mehrere nicht zusammenhängende Änderungen enthalten.
  Bitten Sie in solchen Fällen den Autor des Pull Requests, seine Änderungen in kleineren Einheiten einzureichen.
- **Um Lastverteilung bitten**, wenn Sie ausgelastet sind und keine Kapazitäten für das Review haben.
  Markieren Sie das Team `@core-yari-content` und fragen Sie, ob jemand anderes einspringen kann.
- **Nicht mergen, bevor Pull Requests mit „depends on“** zuerst zusammengeführt wurden.
- **Keine Pull Requests mergen, deren Tests fehlschlagen.**
  Es ist gute [Open-Source-Etikette](/de/docs/MDN/Community/Open_source_etiquette), den `main`-Branch stabil zu halten, um Unterbrechungen für Mitwirkende, Maintainers und automatisierte Prozesse zu vermeiden.
  Ein instabiler `main`-Branch blockiert alle anderen Pull Requests und erschwert es anderen, Beiträge zu überprüfen und zusammenzuführen.
  Darüber hinaus erhalten Mitwirkende, die Repositories beobachten, eine große Menge an Benachrichtigungen, und unnötiges Rauschen durch fehlgeschlagene Tests kann frustrierend sein.
  Wenn Sie nicht sicher sind, wie fehlgeschlagene Tests behoben werden können, [bitten Sie um Hilfe](/de/docs/MDN/Community/Communication_channels) oder weisen Sie den Pull Request jemand anderem zu.

Wenn ein Pull Request abgesehen von kleinen Tippfehlern oder anderen geringfügigen Problemen gut aussieht, möchten Sie das Problem möglicherweise direkt beheben.
Sie können dies tun, sofern der Pull Request [so eingerichtet wurde, dass Änderungen erlaubt sind](https://docs.github.com/en/pull-requests/how-tos/work-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork).
Für die Behebung kleiner Probleme wird empfohlen, [Kommentare mit Vorschlägen](https://docs.github.com/en/pull-requests/how-tos/review-pull-requests/commenting-on-a-pull-request#adding-comments-to-a-pull-request) zu verwenden, da sie gebündelt und in einem Schritt committet werden können.

Beim Einreichen Ihres Reviews haben Sie drei Optionen: **approve**, **comment** oder **request changes**.
In den folgenden Abschnitten wird erklärt, wann die jeweilige Option verwendet werden sollte.

### Änderungen anfordern

Verwenden Sie die Option „request changes“, wenn das von Ihnen gegebene Feedback vom Autor _bearbeitet_ und anschließend vom Reviewer erneut überprüft werden _muss_, bevor der Pull Request genehmigt und zusammengeführt werden kann.

#### Kommentieren

Verwenden Sie die Option „comment“, wenn Ihr Feedback nicht kritisch ist und kein erneutes Review erfordert.
Kurz gesagt: Sie vertrauen darauf, dass der Autor und andere Reviewer gutes Urteilsvermögen anwenden.

#### Genehmigen

Verwenden Sie die Option „approve“, wenn aus Ihrer Sicht alles gut aussieht und zum Zusammenführen bereit ist.
Nach dem Einreichen Ihres Reviews können Sie den Pull Request bedenkenlos zusammenführen, wenn es keine anderen Reviewer oder noch offene Review-Kommentare gibt, die behandelt werden müssen.

#### Was tun, wenn Sie nicht weiterkommen?

Wenn Sie eine Inhaltsänderung nicht verstehen oder sie Ihnen zu groß und komplex erscheint, geraten Sie nicht in Panik!
Ein guter erster Schritt besteht darin, den Autor des Pull Requests um Informationen zu bitten.

Es ist selten, dass Sie ohne Vorwarnung einen großen, komplexen Inhalt ändern überprüfen müssen.
Sollte dies dennoch vorkommen, sollte die Beschreibung des Pull Requests auf ein Issue verlinken, das die Hintergrundinformationen erläutert.

Wenn Sie weiterhin unsicher sind oder den Inhalt verdächtig finden, wenden Sie sich an das MDN-Web-Docs-Team und bitten Sie um Hilfe.

### Richtlinien für Bearbeitungszeiten für Autoren und Reviewer

Dieser Abschnitt enthält Details zu den erwarteten Bearbeitungszeiten beim Reagieren auf Review-Kommentare, wenn Sie Autor eines Pull Requests sind, und beim Überprüfen von Pull Requests, wenn Sie Reviewer sind.

- **Überprüfen**:
  Der Reviewer eines Pull Requests sollte die Änderungen innerhalb von höchstens 2 Wochen überprüfen können.
  In den 2 Wochen nach dem Öffnen eines Pull Requests kann der Reviewer:
  - Einen Kommentar dazu hinterlassen, wann er mit dem Review beginnen kann.
  - Um technische oder ressourcenbezogene Hilfe bitten.
- **Angeforderte Änderungen bearbeiten:**
  Der Autor eines Pull Requests sollte innerhalb von höchstens 4 Wochen auf die Kommentare reagieren oder sie beheben können.
  Wenn der Autor des Pull Requests innerhalb dieser Zeit nicht reagieren oder die Review-Kommentare nicht beheben kann, kann der Reviewer eine der folgenden Maßnahmen ergreifen:
  - Die Änderungen committen und den Pull Request mergen.
  - Den Pull Request schließen.

### Externe Reviewer

Einige Pull Requests im MDN-Content-Repository beziehen sich auf spezifische Arbeiten von Browser-Anbietern oder Organisationen mit festgelegten Autoren und Reviewern.
In diesen Fällen fügt der Autor den Benutzernamen des Reviewers in einer Zeile am Ende der Beschreibung des Pull Requests hinzu, zum Beispiel:

```md
reviewer: @jpmedley
```

Wenn Sie eine Review-Anfrage erhalten und Sie auf die oben beschriebene Weise durch einen anderen Reviewer überschrieben wurden, überprüfen Sie die Änderungen nicht.
Sobald der in der Beschreibung genannte Reviewer die Änderungen genehmigt hat, wird er eine von den `CODEOWNERS` erforderliche Genehmigung anfordern.

## Leseliste

Reviewern wird empfohlen, die folgenden Artikel zu lesen, um Hilfe bei häufigen Aufgaben zu erhalten:

- [The Art of Closing](https://blog.jessfraz.com/post/the-art-of-closing/) erläutert, wie ein unvollständiger oder abgelehnter Pull Request geschlossen wird.
- [Code Review Guidelines for the Reviewer](https://phauer.com/2018/code-review-guidelines/#code-reviews-guidelines-for-the-reviewer) enthält Beispiele für gutes und schlechtes Feedback.
- [How to do a code review](https://google.github.io/eng-practices/review/reviewer/) auf google.github.io/eng-practices
