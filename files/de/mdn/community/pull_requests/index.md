---
title: Einreichung und Überprüfung von Pull-Requests
slug: MDN/Community/Pull_requests
l10n:
  sourceCommit: 20cff31570e35c6da44ddd84158fcebd9f4f42d9
---

Dieses Dokument beschreibt, wie Mitwirkende Änderungen an den MDN Web Docs vornehmen und wie die Änderungen überprüft und auf der Website veröffentlicht werden. Inhaltsänderungen an den MDN Web Docs umfassen:

- **Tägliche Verbesserungen** für die Dokumentation von APIs, CSS-Eigenschaften, Plattformaktualisierungen und Inhaltserweiterungen. Dies wird in der Regel von Mitarbeitern der MDN Web Docs, die für Mozilla, Google, Open Web Docs, Samsung arbeiten, sowie von Community-Freiwilligen durchgeführt.
- **Kleine Korrekturen** und Aktualisierungen der Website zur Behebung von Tippfehlern, grammatikalischen Problemen und technischen Ungenauigkeiten. Diese Probleme werden meist von Lesern der MDN Web Docs festgestellt.
- **Inhaltsfehlerbehebungen**, die normalerweise von Freiwilligen durchgeführt werden, um [Probleme im `mdn/content`-Repository](https://github.com/mdn/content/issues) zu schließen.

Unabhängig davon, wie Inhaltsänderungen vorgenommen werden, werden sie als Pull-Requests auf GitHub eingereicht. Die Inhaltsänderungen durchlaufen die folgenden Phasen, bevor sie auf den MDN Web Docs veröffentlicht werden:

1. **Einreichen von Änderungen:** Als Autor eines Pull-Requests reichen Sie Änderungen ein, indem Sie einen Pull-Request eröffnen. Siehe die Abschnitte [Bevor Sie beginnen](#bevor_sie_beginnen), [Einen Pull-Request öffnen](#einen_pull-request_öffnen) und [Nachdem Sie einen Pull-Request geöffnet haben](#nachdem_sie_einen_pull-request_geöffnet_haben), um mehr über unsere Prozesse zu erfahren.
2. **Überprüfen von Änderungen:** Ihre Änderungen werden von MDN-Mitgliedern und Freiwilligen überprüft. Details finden Sie im Abschnitt [Pull-Request-Überprüfungsprozess](#pull-request-überprüfungsprozess).
3. **Anzeigen veröffentlichter Änderungen:** Inhalte, die im `mdn/content` aktualisiert werden, gehen innerhalb eines Tages nach dem Zusammenführen durch einen Website-Wiederaufbau, der alle 24 Stunden erfolgt, live.

## Einreichen von Änderungen

### Werte und Teilnahme

Wir möchten, dass die MDN Web Docs eine einladende, freundliche Community sind, auf die wir alle stolz sein können. Alle Teilnehmer müssen unseren [Richtlinien für die Community-Teilnahme](/de/docs/MDN/Community/Community_Participation_Guidelines) folgen, die von den [Richtlinien für die Community-Teilnahme von Mozilla](https://www.mozilla.org/en-US/about/governance/policies/participation/) abgeleitet sind. Seien Sie höflich und konstruktiv, wenn Sie Pull-Requests öffnen, Überprüfungskommentare schreiben und mit dem Autor des Pull-Requests oder anderen Community-Mitgliedern interagieren. Wenn Sie oder jemand anderes Verhalten erlebt haben, das möglicherweise illegal ist oder Sie unsicher, unwillkommen oder unwohl fühlen lässt, ermutigen wir Sie, [es zu melden](/de/docs/MDN/Community/Community_Participation_Guidelines#reporting_process).

### Bevor Sie beginnen

Bevor Sie mit der Arbeit an MDN beginnen, gehen Sie bitte die unten aufgeführten Empfehlungen und Richtlinien durch.

**Pull-Requests müssen ein bestehendes Problem lösen oder teilweise beheben.** Der Grund für diese Einschränkung ist zu vermeiden, dass Sie mit einer Art von Aufgabe beginnen, an der möglicherweise bereits jemand anderes arbeitet. Durchsuchen Sie die Probleme und Pull-Requests im [MDN-Repository](https://github.com/orgs/mdn/repositories), zu dem Sie beitragen möchten, und bestätigen Sie, dass die Arbeit, die Sie beginnen möchten, nicht bereits bearbeitet wird. Wenn Sie zum MDN-Projekt beitragen möchten, befinden Sie sich in einer der folgenden Situationen:

- **Wenn Sie einen Beitrag zum Projekt leisten möchten**, finden Sie Aufgaben unter "Issues" in einem der [MDN GitHub Repositories](https://github.com/orgs/mdn/repositories) (zum Beispiel, [`mdn/content` Issues](https://github.com/mdn/content/issues)) und unsere [öffentlichen GitHub-Projektbretter](https://github.com/orgs/mdn/projects). Stellen Sie sicher, dass das Thema niemandem zugewiesen ist und niemand bereits einen Pull-Request für die Aufgabe geöffnet hat. Mit `good first issue` gekennzeichnete Themen sind ein guter Ausgangspunkt.

- **Wenn Sie ein Problem auf MDN gefunden haben**, sollten Sie zuerst ein Issue eröffnen. **Issues benötigen eine Antwort von den Betreuern, bevor Sie mit der Arbeit beginnen**, damit Sie wissen, dass ein Problem, das durch einen Pull-Request angesprochen wird, gültig ist und dass Ihr Pull-Request angenommen wird. Weitere Informationen zu Issues finden Sie auf unseren [Community-Seiten für GitHub-Probleme](https://github.com/mdn/mdn/issues/new?labels=proposal%2Cneeds+triage&template=content-or-feature-suggestion.yml&title=Enter+your+proposal+here).

- **Wenn Sie neue Inhalte oder ein neues Feature vorschlagen möchten**, reichen Sie einen Vorschlag über die 'Neuer Inhalt oder Feature-Vorschlag' [GitHub-Issue-Vorlage](https://github.com/mdn/mdn/issues/new/choose) ein.

Wenn Sie sich nicht sicher sind, wo Sie anfangen sollen, kontaktieren Sie uns auf [dem Discord-Server](/discord) und bitten Sie um Feedback.

### Einen Pull-Request öffnen

Wenn Sie bereit sind, einen Pull-Request zu öffnen, folgen Sie diesen Richtlinien:

- **Pull-Requests sollten kurz und auf ein Thema fokussiert sein:** Wenn möglich, gruppieren Sie verwandte Änderungen in mehrere kleine Pull-Requests. Wenn ein Pull-Request zu groß wird, kann der Prüfer ihn schließen und Sie bitten, Pull-Requests für jede logische Änderungseinheit einzureichen, die zusammen gehört.
- **Fügen Sie eine Beschreibung der Änderungen hinzu:** Geben Sie so viel Kontext und Begründung wie möglich für den Pull-Request an.
- **Fügen Sie den Link zu dem Problem hinzu, das Sie schließen:** Fügen Sie in der Pull-Request-Beschreibung "Fixes" hinzu, wenn es das Problem vollständig löst, oder "Relates to", wenn es sich um ein verwandtes Problem handelt. Weitere Informationen zum Verknüpfen von Issues in Pull-Requests finden Sie in den [GitHub-Dokumenten](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword).
- **Fügen Sie 'depends on'** mit einem Link zu einer Abhängigkeit hinzu, wenn es Pull-Requests gibt, die zuerst zusammengeführt werden müssen (z. B. Codebeispiele in anderen Repositories).
- **Begleiten Sie Änderungen an Codebeispielen mit Inhaltsänderungen:** Dies ist wichtig, um sicherzustellen, dass aktualisierte Beispiele korrekt bereitgestellt werden. Wenn Sie Inhaltsänderungen vornehmen, die beeinflussen, wie Beispiele verwendet werden, sollten auch die zugehörigen Codebeispiele aktualisiert werden.
- **Fügen Sie einen Prüfer hinzu:** Sie können einen Prüfer hinzufügen, z. B. ein Teammitglied oder einen Themenverantwortlichen, wenn Sie bereits wissen, wer Ihren Pull-Request überprüfen sollte.
- **Machen Sie keine reinen Grammatikänderungen:** MDN Web Docs enthalten technische Dokumentation; Sie sollten keine Änderungen des Prosastils vorschlagen, außer wenn die Grammatik falsch ist.
- **Fügen Sie nicht unnötig Zeilenumbrüche hinzu oder entfernen Sie sie** auf Seiten, die einem bestimmten Formatierungsstil folgen.

### Nachdem Sie einen Pull-Request geöffnet haben

- **Handhaben Sie CI-Fehler** aus den automatisierten Tests, die als GitHub-Actions ausgeführt werden (siehe `.github/workflows`). Wenn einer oder mehrere dieser Tests fehlschlagen, liegt es in Ihrer Verantwortung, zu versuchen, sie zu lösen. Wenn Sie nicht wissen, wie Sie die zugrunde liegenden Probleme lösen können, fragen Sie um Hilfe.
- **Lösen Sie Merge-Konflikte** mit der Hauptzweigstelle; Sie sind dafür verantwortlich, diese zu lösen. Sie können dies tun, indem Sie den `mdn/main`-Zweig in Ihren Zweig mergen. Weitere Informationen finden Sie in der GitHub-Dokumentation zur [Aktualisierung Ihres Zweigs](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch#about-keeping-your-pull-request-in-sync).
- **Seien Sie reaktionsschnell auf Feedback:** Das bedeutet, dass Sie bereit sein müssen, Änderungen am Pull-Request basierend auf der Überprüfung vorzunehmen. Wenn eine Überprüfung stattfindet und die Änderungen nicht vorgenommen werden, kann der Pull-Request geschlossen werden.
- **Seien Sie geduldig während des Überprüfungsprozesses:** Die MDN-Organisation erhält eine große Anzahl von Pull-Requests und das Team benötigt möglicherweise Zeit, um Ihre Beiträge zu überprüfen.
- **Öffnen Sie keine geschlossenen Pull-Requests erneut:** Wenn Sie einen neuen Pull-Request erstellen müssen, kann er den geschlossenen referenzieren.

## Pull-Request-Überprüfungsprozess

Reviewer werden automatisch zugewiesen, wenn Sie einen Pull-Request öffnen, basierend auf einer `CODEOWNERS`-Datei, aber wenn es eine spezifische Person gibt, von der Sie eine Überprüfung anfordern möchten, können Sie [manuell eine Überprüfung anfordern](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review). Wir verwenden auch Auto-Labeling für Pull-Requests, um uns bei der Sichtung zu helfen. Betreuer können Pull-Requests weiter triagieren und zusätzliche Labels hinzufügen, wie `needs-info` oder `on-hold`, falls erforderlich, basierend auf dem Kontext.

Wenn Sie einen Pull-Request überprüfen möchten, aber nicht als Prüfer aufgeführt sind, können Sie sich selbst als solchen hinzufügen. Es ist höflich, zuerst bei bestehenden Prüfern nachzufragen, indem Sie im Pull-Request kommentieren, dass Sie beabsichtigen, eine Überprüfung zu beginnen.

### Prüfer und Beauftragte

Das MDN Web Docs Team verwendet Prüfer und Beauftragte, um den Status von Pull-Requests zu verfolgen.

- **Prüfer** sind Personen, die die Änderungen im Pull-Request bewerten und Feedback für den Autor bereitstellen.
- **Beauftragte** sind Personen, die dafür verantwortlich sind, sicherzustellen, dass der Pull-Request nicht blockiert wird. Nicht alle Pull-Requests haben Beauftragte, aber wenn sie es tun, sind diese dafür verantwortlich, dass der Pull-Request vorankommt. Ein Beauftragter hilft, die Arbeit zu einem Abschluss zu bringen, sei es durch Zusammenführung, Schließung oder selbst entblockende Arbeit.

Ein Prüfer oder Beauftragter eines Pull-Requests ist dafür verantwortlich, die Änderungen zusammenzuführen.

Bevor Sie mit einer Überprüfung beginnen, überprüfen Sie die Pull-Request-Beschreibung, um sicherzustellen, dass keine spezielle Person ihn überprüfen sollte. Stellen Sie sicher, dass alle kontinuierlichen Integrationsaufgaben (CI) erfolgreich abgeschlossen wurden und dass es keine Konflikte beim Mergen gibt.

Wenn eine Aufgabe fehlschlägt oder es zu Merge-Konflikten kommt, kommunizieren Sie dies dem Autor; es liegt in seiner Verantwortung, diese zu beheben. Sie können den Autor als **Beauftragten** setzen, um anzuzeigen, dass ein Pull-Request vor seiner Überprüfung die Aufmerksamkeit des Autors benötigt. Lassen Sie dem Autor die Tür offen, um Hilfe zu erbitten, insbesondere für neue Mitwirkende am Projekt.

### Einen Pull-Request überprüfen

Wenn es um die Änderungen in einem Pull-Request geht, müssen Inhalte und Prosa dem [MDN Schreibstil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide) entsprechen und Codebeispiele müssen dem [Code-Stil-Leitfaden](/de/docs/MDN/Writing_guidelines/Code_style_guide) folgen.

Wenn Sie einen Pull-Request überprüfen, sollten Sie:

- **Fügen Sie einen Kommentar hinzu** zum Pull-Request, um dem Autor mitzuteilen, dass Sie sich des Pull-Requests bewusst sind und mit der Überprüfung beginnen werden. Dies ist, um zu vermeiden, dass jemand anderes gleichzeitig unnötigerweise mit der Überprüfung des Pull-Requests beginnt.
- **Beschränken Sie den Umfang der Überprüfung** nur auf die Änderungen im Pull-Request. Öffnen Sie ein Folge-Problem oder einen Pull-Request, um andere Verbesserungen anzugehen, die nicht durch den Pull-Request abgedeckt sind.
- **Bitten Sie um Hilfe** und fügen Sie das `review-help-needed` Label hinzu, wenn Sie technische Unterstützung für die Überprüfung benötigen.
- **Schließen Sie Pull-Requests mit nicht verwandten Änderungen**, wenn sie zu komplex oder mehrere nicht zusammenhängende Änderungen enthalten. In solchen Fällen bitten Sie den Autor des Pull-Requests, seine Änderungen in kleineren Teilen einzureichen.
- **Fordern Sie eine Lastverteilung an**, wenn Sie ausgelastet sind und keine Kapazität für die Überprüfung haben. Markieren Sie das `@core-yari-content` Team und bitten Sie, ob jemand anderes einspringen kann.
- **Führen Sie keine Zusammenführung durch, es sei denn, dass 'depends on'** Pull-Requests zuerst zusammengeführt werden.
- **Führen Sie keine Pull-Requests zusammen, bei denen Tests fehlschlagen.** Es ist eine gute [Open-Source-Etikette](/de/docs/MDN/Community/Open_source_etiquette), den `main`-Zweig stabil zu halten, um Störungen für Mitwirkende, Betreuer und für automatisierte Prozesse zu vermeiden. Ein instabiler `main`-Zweig blockiert alle anderen Pull-Requests und macht es schwierig für andere, Beiträge zu überprüfen und zusammenzuführen. Darüber hinaus erhalten Mitwirkende, die Repositories beobachten, große Mengen an Benachrichtigungen, und unnötiger Lärm durch fehlgeschlagene Tests kann frustrierend sein. Wenn Sie nicht sicher sind, wie die fehlgeschlagenen Tests zu beheben sind, [bitten Sie um Hilfe](/de/docs/MDN/Community/Communication_channels) oder weisen Sie den Pull-Request jemand anderem zu.

Wenn ein Pull-Request bis auf kleine Tippfehler oder andere kleinere Probleme gut aussieht, können Sie das Problem direkt beheben. Sie können dies tun, vorausgesetzt, der Pull-Request [ist so eingerichtet, dass Änderungen erlaubt sind](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork). Es wird empfohlen, [Kommentare mit Vorschlägen](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request) für die Behebung kleiner Probleme zu verwenden, da diese gebündelt und in einem Rutsch bestätigt werden können.

Wenn Sie Ihre Überprüfung einreichen, haben Sie drei Möglichkeiten: **genehmigen**, **kommentieren** oder **Änderungen anfordern**. Die folgenden Abschnitte erklären, wann welche Option verwendet werden sollte.

### Änderungen anfordern

Verwenden Sie die Option zur Anforderung von Änderungen, wenn das Feedback, das Sie gegeben haben, _beantwortet_ werden muss, bevor der Pull-Request genehmigt und zusammengeführt werden kann.

#### Kommentar

Verwenden Sie die Kommentaroption, wenn Ihr Feedback nicht kritisch ist und keine erneute Überprüfung erforderlich ist. Kurz gesagt, Sie vertrauen darauf, dass der Autor und andere Prüfer guten Urteilsvermögen verwenden.

#### Genehmigen

Verwenden Sie die Genehmigungsoption, wenn alles gut aussieht und aus Ihrer Sicht bereit für die Zusammenführung ist. Nach dem Einreichen Ihrer Überprüfung können Sie den Pull-Request sicher zusammenführen, wenn es keine weiteren Prüfer oder offenen Überprüfungskommentare zu klären gibt.

#### Was tun, wenn Sie feststecken?

Wenn Sie eine Inhaltsänderung nicht verstehen oder fühlen, dass sie zu groß und komplex ist, keine Panik! Ein guter Einstiegspunkt ist das Einholen von Informationen vom Autor des Pull-Requests, um zu helfen.

Es ist selten, dass Sie ohne Vorwarnung mit einer großen, komplexen Inhaltsänderung umgehen müssen. Wenn dies jedoch geschieht, sollte die Pull-Request-Beschreibung auf ein Problem verweisen, das die Hintergrundinformationen erklärt.

Wenn Sie sich immer noch nicht sicher sind oder denken, dass die Inhalte verdächtig sind, wenden Sie sich an das MDN Web Docs Team und bitten Sie um Hilfe.

### Richtlinien für Bearbeitungszeiten für Autoren und Prüfer

Dieser Abschnitt enthält Einzelheiten zu den erwarteten Bearbeitungszeiten beim Beantworten von Überprüfungskommentaren, wenn Sie ein Pull-Request-Autor sind, und beim Überprüfen von Pull-Requests, wenn Sie ein Prüfer sind.

- **Überprüfung**:
  Der Pull-Request-Prüfer sollte in der Lage sein, die Änderungen in 2 Wochen oder weniger zu überprüfen. In den 2 Wochen, nachdem ein Pull-Request geöffnet wurde, kann der Prüfer:
  - Einen Kommentar hinterlassen, wann er mit der Überprüfung des Pull-Requests beginnen kann
  - Um technische oder ressourcenbezogene Hilfe bitten
- **Behebung der angeforderten Änderungen:**
  Der Pull-Request-Autor sollte in der Lage sein, die Kommentare innerhalb von 4 Wochen oder weniger zu beantworten oder zu beheben. Wenn der Pull-Request-Autor nicht in der Lage ist, die Überprüfungskommentare in dieser Zeit zu beantworten oder zu beheben, kann der Prüfer eine der folgenden Aktionen durchführen:
  - Die Änderungen bestätigen und den Pull-Request zusammenführen
  - Den Pull-Request schließen

### Externe Prüfer

Einige Pull-Requests im MDN-Content-Repo beziehen sich auf spezifische Arbeiten von Browseranbietern oder Organisationen mit definierten Autoren und Prüfern. Der Autor wird in diesen Fällen den Benutzernamen des Prüfers in einer Zeile am Ende der Pull-Request-Beschreibung einfügen, zum Beispiel:

```md
reviewer: @jpmedley
```

Wenn Sie eine Überprüfungsanfrage erhalten und ein anderer Prüfer in der oben beschriebenen Weise überschrieben wurde, überprüfen Sie die Änderungen nicht. Sobald der im Beschreibungstext erwähnte Prüfer die Änderungen genehmigt hat, wird er um eine Genehmigung durch den `CODEOWNERS` bitten.

## Lektüre

Prüfer sind ermutigt, die folgenden Artikel zu lesen, um Hilfe bei gängigen Aufgaben zu erhalten:

- [The Art of Closing](https://blog.jessfraz.com/post/the-art-of-closing/) erklärt, wie man einen unvollendeten oder abgelehnten Pull-Request schließt
- [Kindness and Code Reviews: Improving the Way We Give Feedback](https://product.voxmedia.com/2018/8/21/17549400/kindness-and-code-reviews-improving-the-way-we-give-feedback) gibt nützliche Hinweise zum Geben von Feedback
- [Code Review Guidelines for the Reviewer](https://phauer.com/2018/code-review-guidelines/#code-reviews-guidelines-for-the-reviewer) bietet Beispiele für gutes und schlechtes Feedback
- [How to do a code review](https://google.github.io/eng-practices/review/reviewer/) auf google.github.io/eng-practices
