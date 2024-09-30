---
title: Richtlinien für die Einreichung und Überprüfung von Pull Requests
slug: MDN/Community/Pull_requests
l10n:
  sourceCommit: a966a8b4eade72a13de8a688c13f2d5056321f02
---

{{MDNSidebar}}

Dieses Dokument beschreibt, wie Mitwirkende Änderungen an den MDN Web Docs vornehmen und wie diese Änderungen überprüft und auf der Website veröffentlicht werden.
Inhaltsänderungen an den MDN Web Docs umfassen:

- **Tagtägliche Verbesserungen** der Dokumentation von APIs, CSS-Eigenschaften, Plattform-Updates und Inhaltsergänzungen. Dies wird normalerweise von Mitarbeitern der MDN Web Docs durchgeführt, die für Mozilla, Google, Open Web Docs, Samsung arbeiten, aber auch von Community-Freiwilligen.
- **Kleine Korrekturen** und kleinere Updates der Website, um Tippfehler, grammatikalische Probleme und technische Ungenauigkeiten zu beheben. Diese Probleme werden normalerweise von Lesern der MDN Web Docs gefunden.
- **Behebungen von Inhaltsfehlern**, die normalerweise von Freiwilligen durchgeführt werden, um [Issues im `mdn/content`-Repository](https://github.com/mdn/content/issues) zu schließen.

Unabhängig davon, wie Inhaltsänderungen vorgenommen werden, werden sie als Pull Requests auf GitHub eingereicht. Die Inhaltsänderungen durchlaufen die folgenden Phasen, bevor sie auf den MDN Web Docs veröffentlicht werden:

1. **Änderungen einreichen:** Als Autor eines Pull Requests reichen Sie Änderungen ein, indem Sie einen Pull Request öffnen. Weitere Informationen zu unseren Prozessen finden Sie in den Abschnitten [Bevor Sie beginnen](#bevor_sie_beginnen), [Einen Pull Request öffnen](#einen_pull_request_öffnen) und [Nachdem Sie einen Pull Request geöffnet haben](#nachdem_sie_einen_pull_request_geöffnet_haben).
2. **Änderungen überprüfen:** Ihre Änderungen werden von MDN-Mitgliedern und Freiwilligen überprüft. Weitere Details finden Sie im Abschnitt [Pull Request Überprüfungsprozess](#pull_request_überprüfungsprozess).
3. **Veröffentlichte Änderungen ansehen:** Inhalte, die in `mdn/content` aktualisiert wurden, werden innerhalb eines Tages nach dem Zusammenführen durch einen Website-Neuaufbau einmal alle 24 Stunden live geschaltet.

## Änderungen einreichen

### Werte und Teilnahme

Wir möchten, dass die MDN Web Docs eine einladende, freundliche Gemeinschaft sind, auf die wir alle stolz sein können. Alle Teilnehmer müssen unserem [Verhaltenskodex](https://github.com/mdn/content/blob/main/CODE_OF_CONDUCT.md) folgen, das bedeutet das Einhalten der [Mozilla Community Participation Guidelines](https://www.mozilla.org/en-US/about/governance/policies/participation/). Seien Sie höflich und konstruktiv beim Öffnen von Pull Requests, beim Schreiben von Überprüfungskommentaren und beim Interagieren mit dem Autor eines Pull Requests oder anderen Community-Mitgliedern. Wenn Sie oder jemand anderes Verhalten erlebt haben, das potenziell illegal ist oder Sie sich unsicher, unwillkommen oder unwohl fühlen lässt, ermutigen wir Sie, [dies zu melden](https://www.mozilla.org/en-US/about/governance/policies/participation/reporting/).

### Bevor Sie beginnen

Bevor Sie mit der Arbeit an den MDN beginnen, gehen Sie bitte die unten aufgeführten Empfehlungen und Richtlinien durch.

**Pull Requests müssen ein bestehendes Issue lösen oder teilweise beheben.** Der Grund für diese Einschränkung ist, zu vermeiden, dass Sie an einer Aufgabe arbeiten, an der möglicherweise bereits jemand anderes arbeitet. Suchen Sie in den Issues und Pull Requests im [MDN-Repository](https://github.com/orgs/mdn/repositories), zu dem Sie beitragen möchten, und bestätigen Sie, dass die Arbeit, die Sie beginnen möchten, nicht bereits bearbeitet wird. Wenn Sie zum MDN-Projekt beitragen möchten, befinden Sie sich in einer der folgenden Situationen:

- **Wenn Sie zum Projekt beitragen möchten**, finden Sie Aufgaben unter 'Issues' in einem der [MDN-GitHub-Repositories](https://github.com/orgs/mdn/repositories) (zum Beispiel, [`mdn/content`-Issues](https://github.com/mdn/content/issues)) und in unseren [öffentlichen GitHub-Projektboards](https://github.com/orgs/mdn/projects). Stellen Sie sicher, dass das Issue niemanden zugewiesen ist und niemand bereits einen Pull Request für die Aufgabe geöffnet hat. Issues mit dem Label `good first issue` sind ein guter Startpunkt.

- **Wenn Sie ein Problem auf MDN gefunden haben**, sollten Sie zuerst ein Issue eröffnen. **Issues benötigen eine Rückmeldung von den Wartenden, bevor Sie mit der Arbeit beginnen**, damit Sie wissen, dass das durch einen Pull Request adressierte Problem gültig ist und Ihr Pull Request akzeptiert wird. Weitere Informationen zu Issues finden Sie auf unseren [Community-Seiten für GitHub-Issues](https://github.com/mdn/mdn/issues/new?labels=proposal%2Cneeds+triage&template=content-or-feature-suggestion.yml&title=Enter+your+proposal+here).

- **Wenn Sie neue Inhalte oder ein neues Feature vorschlagen möchten**, reichen Sie einen Vorschlag durch die 'Neuer Inhalts- oder Featurevorschlag'-[GitHub-Issue-Vorlage](https://github.com/mdn/mdn/issues/new/choose) ein.

Wenn Sie nicht sicher sind, wo Sie anfangen sollen, erreichen Sie uns auf [dem Discord-Server](/discord) und fragen Sie nach Feedback.

### Einen Pull Request öffnen

Wenn Sie bereit sind, einen Pull Request zu öffnen, befolgen Sie folgende Richtlinien:

- **Pull Requests sollten kurz und auf ein Issue fokussiert sein:** Falls möglich, gruppieren Sie zusammengehörige Änderungen in mehrere kleine Pull Requests. Wenn ein Pull Request zu groß wird, kann der Prüfer ihn schließen und Sie bitten, Pull Requests für jede logische Sammlung zusammengehörender Änderungen einzureichen.
- **Fügen Sie eine Beschreibung der Änderungen hinzu:** Geben Sie so viel Kontext und Begründung für den Pull Request wie möglich an.
- **Fügen Sie den Link zum gelösten Issue hinzu:** In der Pull Request-Beschreibung, verwenden Sie 'Fixes', wenn das Problem vollständig gelöst wird, oder 'Relates to', wenn es ein verwandtes Problem ist. Weitere Informationen zu Verknüpfungen von Issues in Pull Requests finden Sie in den [GitHub-Dokumenten](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword).
- **Fügen Sie 'abhängig von'** mit einem Link zu einer Abhängigkeit hinzu, wenn es Pull Requests gibt, die zuerst zusammengeführt werden müssen (zum Beispiel Codebeispiele in anderen Repositories).
- **Begleiten Sie Codebeispieländerungen mit Inhaltsänderungen:** Dies ist wichtig, um sicherzustellen, dass aktualisierte Beispiele korrekt bereitgestellt werden. Wenn Sie Inhaltsänderungen vornehmen, die die Anwendung der Beispiele beeinflussen, sollten die zugehörigen Codebeispiele ebenfalls aktualisiert werden.
- **Fügen Sie einen Reviewer hinzu:** Sie können einen Reviewer hinzufügen, wie ein Teammitglied oder einen Themeninhaber, wenn Sie bereits wissen, wer Ihren Pull Request überprüfen sollte.
- **Machen Sie keine Änderungen nur an der Grammatik:** Die MDN Web Docs enthalten technische Dokumentation; Sie sollten keine stilistischen Prosa-Änderungen vorschlagen, außer wenn die Grammatik falsch ist.
- **Fügen Sie nicht unnötigerweise Zeilenumbrüche hinzu oder entfernen sie** auf Seiten, die einem bestimmten Formatierungsstil folgen.
- **Aktivieren Sie nicht das automatische Zusammenführen.**

### Nachdem Sie einen Pull Request geöffnet haben

- **Bearbeiten Sie CI-Fehler** aus den automatisierten Tests, die als GitHub-Aktionen ausgeführt werden (siehe `.github/workflows`). Wenn einer oder mehrere dieser Tests fehlschlagen, liegt es in Ihrer Verantwortung, sie zu lösen. Wenn Sie nicht wissen, wie Sie die zugrunde liegenden Probleme lösen sollen, bitten Sie um Hilfe.
- **Lösen Sie Mergekonflikte** mit dem Hauptbranch; Sie sind dafür verantwortlich, diese zu lösen. Sie können dies tun, indem Sie den `mdn/main`-Branch in Ihren Branch mergen. Weitere Informationen finden Sie in der GitHub-Dokumentation zum [Aktualisieren Ihres Branches](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch#about-keeping-your-pull-request-in-sync).
- **Seien Sie reaktionsfähig gegenüber Feedback.** Das bedeutet, dass Sie bereit sein müssen, Änderungen am Pull Request basierend auf der Überprüfung vorzunehmen. Wenn eine Überprüfung stattfindet und die Änderungen nicht vorgenommen werden, kann der Pull Request geschlossen werden.
- **Haben Sie Geduld während des Überprüfungsprozesses.** Die Organisation MDN erhält ein großes Volumen an Pull Requests und das Team benötigt möglicherweise Zeit, um Ihre Beiträge zu überprüfen.
- **Öffnen Sie keine geschlossenen Pull Requests wieder.** Wenn Sie einen neuen Pull Request erstellen müssen, kann er auf den geschlossenen verweisen.

## Pull Request Überprüfungsprozess

Reviewer werden automatisch zugewiesen, wenn Sie einen Pull Request basierend auf einer `CODEOWNERS`-Datei öffnen, aber wenn es eine bestimmte Person gibt, von der Sie eine Überprüfung anfordern möchten, können Sie [manuell eine Überprüfung anfordern](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review).
Wir verwenden auch automatische Beschriftungen auf Pull Requests, um uns bei der Priorisierung zu helfen. Wartende können Pull Requests weiter priorisieren und zusätzliche Labels wie `needs-info` oder `on-hold` hinzufügen, wenn nötig basierend auf dem Kontext.

Wenn Sie einen Pull Request überprüfen möchten, aber nicht als Reviewer aufgeführt sind, können Sie sich selbst als Reviewer hinzufügen.
Es ist höflich, zuerst mit den bestehenden Reviewern abzustimmen, indem Sie in dem Pull Request kommentieren, dass Sie beabsichtigen, eine Überprüfung zu starten.

### Reviewer und Zuweisungen

Das MDN Web Docs-Team verwendet Reviewer und Zuweisungen, um den Status von Pull Requests zu verfolgen.

- **Reviewer** sind Personen, die die Änderungen im Pull Request bewerten und dem Autor Feedback geben.
- **Zuweisungen** sind Personen, die dafür verantwortlich sind sicherzustellen, dass der Pull Request nicht blockiert wird.
  Nicht alle Pull Requests haben Zuweisungen, aber wenn sie es tun, sind sie dafür verantwortlich sicherzustellen, dass der Pull Request voranschreitet.
  Ein Zuweiser hilft, die Arbeit zu einem Abschluss zu bringen, entweder durch Zusammenführung, Schließung oder indem sie selbst die nicht blockierenden Arbeiten übernehmen.

Ein Pull Request-Reviewer oder -Zuweiser ist verantwortlich dafür, die Änderungen zusammenzuführen.

Bevor Sie mit einer Überprüfung beginnen, überprüfen Sie die Pull Request-Beschreibung, um sicherzustellen, dass niemand Spezifisches sie überprüfen sollte. Stellen Sie sicher, dass alle kontinuierlichen Integrationsaufgaben (CI) erfolgreich abgeschlossen wurden und dass keine Mergekonflikte vorliegen.

Wenn eine Aufgabe fehlschlägt oder es Mergekonflikte gibt, kommunizieren Sie dies dem Autor; es liegt in seiner Verantwortung, diese zu beheben. Sie können den Autor als **Zuweiser** festlegen, um anzuzeigen, dass ein Pull Request seine Aufmerksamkeit benötigt, bevor eine Überprüfung beginnen kann. Lassen Sie dem Autor die Türe offen, um um Hilfe zu bitten, besonders neuen Mitwirkenden des Projekts.

### Einen Pull Request überprüfen

Wenn es um die Änderungen in einem Pull Request geht, müssen Inhalt und Prosa den [MDN Schreibstil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide) befolgen und Beispielcode muss dem [Code-Stil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide) entsprechen.

Wenn Sie einen Pull Request überprüfen, sollten Sie:

- **Einen Kommentar** zum Pull Request hinzufügen, um den Autor wissen zu lassen, dass Sie den Pull Request zur Kenntnis genommen haben und die Überprüfung starten werden. Dies ist, um Fälle zu vermeiden, in denen jemand anderes unnötigerweise zur gleichen Zeit mit der Überprüfung des Pull Requests beginnt.
- **Den Überprüfungsumfang auf die Änderungen im Pull Request beschränken.** Öffnen Sie ein Folge-Issue oder einen Pull Request, um andere Verbesserungen anzusprechen, die nicht durch den Pull Request abgedeckt sind.
- **Um Hilfe bitten** und das Label `review-help-needed` hinzufügen, wenn Sie technische Unterstützung bei der Überprüfung benötigen.
- **Schließen Sie Pull Requests mit nicht verwandten Änderungen**, wenn es zu komplex ist oder mehrere nicht zusammenhängende Änderungen enthält. In solchen Fällen bitten Sie den Autor des Pull Requests, seine Änderungen in kleineren Schritten einzureichen.
- **Fordern Sie eine Lastverteilung an**, wenn Ihr Aufgabenblatt voll ist und Sie nicht die Kapazität für die Überprüfung haben. Markieren Sie das `@core-yari-content`-Team und fragen Sie, ob jemand anderes einspringen kann.
- **Mergen Sie nicht, solange 'abhängig von'-Pull Requests nicht zuerst zusammengeführt werden.**
- **Mergen Sie keine Pull Requests, die fehlschlagende Tests haben.** Es ist eine gute [Open Source-Etikette](/de/docs/MDN/Community/Open_source_etiquette), den `main`-Branch stabil zu halten, um Störungen für Mitwirkende, Wartende und für automatisierte Prozesse zu vermeiden. Ein instabiler `main`-Branch blockiert alle anderen Pull Requests und macht es schwierig für andere, Überprüfungen durchzuführen und Beiträge zusammenzuführen. Darüber hinaus erhalten Mitwirkende, die Repositories beobachten, hohe Mengen an Benachrichtigungen und unnötiger Lärm, der durch fehlschlagende Tests verursacht wird, kann frustrierend sein. Wenn Sie nicht wissen, wie Sie die fehlschlagenden Tests beheben können, [bitten Sie um Hilfe](/de/docs/MDN/Community/Communication_channels) oder weisen Sie den Pull Request jemand anderem zu.

Wenn ein Pull Request abgesehen von kleinen Tippfehlern oder anderen kleineren Problemen gut aussieht, möchten Sie das Problem möglicherweise direkt beheben. Sie können dies tun, vorausgesetzt der Pull Request [wurde so eingerichtet, dass Änderungen erlaubt sind](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork). Es wird empfohlen, [Kommentare mit Vorschlägen](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request) zu verwenden, um kleinere Probleme zu beheben, da sie gebündelt und in einem Schwung eingebracht werden können.

Wenn Sie Ihre Überprüfung einreichen, haben Sie drei Optionen, **genehmigen**, **kommentieren**, oder **Änderungen anfordern**. Die folgenden Abschnitte erklären, wann jede Option zu verwenden ist.

### Änderungen anfordern

Verwenden Sie die Option "Änderungen anfordern", wenn das Feedback, das Sie gegeben haben, _durch den Autor bearbeitet und von dem Reviewer erneut überprüft_ werden muss, bevor der Pull Request genehmigt und zusammengeführt werden kann.

#### Kommentieren

Verwenden Sie die Kommentar-Option, wenn Ihr Feedback nicht kritisch ist und keine erneute Überprüfung erfordert wird. Kurz gesagt, Sie vertrauen dem Autor und den anderen Reviewern, gutes Urteilsvermögen zu nutzen.

#### Genehmigen

Verwenden Sie die Genehmigungsoption, wenn alles gut aussieht und aus Ihrer Sicht bereit ist, zusammengeführt zu werden. Nachdem Sie Ihre Überprüfung eingereicht haben, können Sie den Pull Request sicher zusammenführen, wenn es keine anderen Reviewer oder ausstehenden Überprüfungskommentare zu bearbeiten gibt.

#### Was tun, wenn Sie steckenbleiben

Wenn Sie eine Änderung des Inhalts nicht verstehen oder der Meinung sind, dass sie zu groß und komplex für Sie ist, keine Panik! Ein guter Anfang wäre, den Pull Request-Autor um Informationen zu bitten, die helfen.

Es ist selten, dass Sie ohne Vorwarnung verpflichtet sind, eine große, komplexe Inhaltsänderung zu prüfen. Falls dies jedoch passiert, sollte die Pull Request-Beschreibung auf ein Issue verlinken, das die Hintergrundinformationen erklärt.

Wenn Sie sich immer noch nicht sicher sind oder denken, dass der Inhalt verdächtig ist, wenden Sie sich an das MDN Web Docs-Team und fragen Sie um Hilfe.

### Richtlinien für Bearbeitungszeiten für Autoren und Reviewer

Dieser Abschnitt bietet Einzelheiten zu den erwarteten Bearbeitungszeiten beim Reagieren auf Überprüfungskommentare, wenn Sie Autor eines Pull Requests sind, und beim Überprüfen von Pull Requests, wenn Sie ein Reviewer sind.

- **Überprüfung:** Der Pull Request-Reviewer sollte in der Lage sein, die Änderungen innerhalb von 2 Wochen oder weniger zu überprüfen. In den 2 Wochen nach Öffnen eines Pull Requests kann der Reviewer:
  - Einen Kommentar hinterlassen, wann sie mit der Überprüfung des Pull Requests beginnen können
  - Um technische oder Ressourcenhilfe bitten
- **Forderungen nach Änderungen bearbeiten:** Der Autor des Pull Requests sollte in der Lage sein, auf die Kommentare zu reagieren oder sie innerhalb von 4 Wochen oder weniger zu beheben. Wenn der Pull Request-Autor nicht in der Lage ist, auf die Kommentare zu reagieren oder sie in dieser Zeit zu beheben, kann der Reviewer eine der folgenden Maßnahmen ergreifen:
  - Die Änderungen übernehmen und den Pull Request zusammenführen
  - Den Pull Request schließen

### Externe Reviewer

Einige Pull Requests im MDN-Content-Repo beziehen sich auf bestimmte Arbeiten von Browserherstellern oder Organisationen mit festgelegten Autoren und Reviewern. In diesen Fällen wird der Autor den Benutzernamen des Reviewers in einer Zeile am Ende der Pull Request-Beschreibung einfügen, zum Beispiel:

```md
reviewer: @jpmedley
```

Wenn Sie eine Überprüfungsanfrage erhalten und Sie von einem anderen Reviewer in der oben beschriebenen Weise überstimmt wurden, überprüfen Sie die Änderungen nicht. Sobald der im Beschreibungstext genannte Reviewer die Änderungen genehmigt hat, werden sie eine Genehmigung anfordern, die von den `CODEOWNERS` benötigt wird.

## Leseliste

Reviewer werden ermutigt, die folgenden Artikel für Hilfe bei häufigen Aufgaben zu lesen:

- [Die Kunst des Schließens](https://blog.jessfraz.com/post/the-art-of-closing/) erklärt, wie man eine unfertige oder abgelehnte Pull Request schließt
- [Freundlichkeit und Code Reviews: Verbesserungen der Art und Weise, wie wir Feedback geben](https://product.voxmedia.com/2018/8/21/17549400/kindness-and-code-reviews-improving-the-way-we-give-feedback) gibt nützliche Hinweise, um Feedback zu geben
- [Code Review Guidelines for the Reviewer](https://phauer.com/2018/code-review-guidelines/#code-reviews-guidelines-for-the-reviewer) bietet Beispiele für gutes und schlechtes Feedback
