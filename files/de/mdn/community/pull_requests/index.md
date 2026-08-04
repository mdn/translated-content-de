---
title: Einreichung und Überprüfung von Pull Requests
slug: MDN/Community/Pull_requests
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

Dieses Dokument beschreibt, wie Mitwirkende Änderungen an MDN Web Docs vornehmen und wie diese Änderungen überprüft und auf der Website veröffentlicht werden.
Inhaltsänderungen an MDN Web Docs umfassen:

- **Alltägliche Verbesserungen** für die Dokumentation von APIs, CSS-Eigenschaften, Plattform-Updates und Inhaltsergänzungen.
  Dies wird normalerweise von Mitarbeitern von MDN Web Docs durchgeführt, die für Mozilla, Google, Open Web Docs, Samsung arbeiten, aber auch von ehrenamtlichen Mitgliedern der Gemeinschaft.
- **Kleine Korrekturen** und kleinere Aktualisierungen der Website zur Behebung von Tippfehlern, grammatikalischen Problemen und technischen Ungenauigkeiten.
  Diese Probleme werden in der Regel von Lesern von MDN Web Docs gefunden.
- **Fehlerbehebungen von Inhalten**, die in der Regel von Freiwilligen durchgeführt werden, um [Probleme im `mdn/content`-Repository](https://github.com/mdn/content/issues) zu schließen.

Unabhängig davon, wie die Änderungen vorgenommen werden, werden sie als Pull Requests auf GitHub eingereicht.
Die Änderungen durchlaufen die folgenden Phasen, bevor sie auf MDN Web Docs veröffentlicht werden:

1. **Einreichen von Änderungen:** Als Autor eines Pull Requests reichen Sie Änderungen ein, indem Sie einen Pull Request öffnen.
   Siehe die Abschnitte [Bevor Sie anfangen](#bevor_sie_anfangen), [Einen Pull Request öffnen](#einen_pull_request_öffnen) und [Nachdem Sie einen Pull Request geöffnet haben](#nachdem_sie_einen_pull_request_geöffnet_haben), um mehr über unsere Prozesse zu erfahren.
2. **Überprüfen der Änderungen:** Ihre Änderungen werden von Mitgliedern von MDN und Freiwilligen überprüft.
   Weitere Informationen finden Sie im Abschnitt [Pull Request Überprüfungsprozess](#pull_request_überprüfungsprozess).
3. **Anzeigen veröffentlichter Änderungen:** Aktualisierte Inhalte auf `mdn/content` gehen innerhalb eines Tages nach dem Zusammenführen live durch einen einmal alle 24 Stunden durchgeführten Site-Neuaufbau.

## Änderungen einreichen

### Werte und Beteiligung

Wir möchten, dass MDN Web Docs eine einladende, freundliche Gemeinschaft ist, auf die wir alle stolz sein können.
Alle Teilnehmer müssen unsere [Community-Teilnahme-Richtlinien](/de/docs/MDN/Community/Community_Participation_Guidelines) befolgen, die sich aus [Mozillas Community-Teilnahme-Richtlinien](https://www.mozilla.org/en-US/about/governance/policies/participation/) ableiten.
Seien Sie höflich und konstruktiv, wenn Sie Pull Requests öffnen, Kommentare zur Überprüfung schreiben und mit dem Autor des Pull Requests oder anderen Mitgliedern der Gemeinschaft interagieren.
Wenn Sie oder jemand anderes Verhalten erfahren hat, das potenziell illegal ist oder Sie sich unsicher, unwillkommen oder unwohl fühlt, ermutigen wir Sie, [es zu melden](/de/docs/MDN/Community/Community_Participation_Guidelines#reporting_process).

### Bevor Sie anfangen

Bevor Sie mit der Arbeit an MDN beginnen, lesen Sie bitte die unten aufgeführten Empfehlungen und Richtlinien durch.

**Pull Requests müssen ein bestehendes Problem lösen oder teilweise beheben.**
Der Grund für diese Einschränkung ist, zu vermeiden, dass Sie mit einer Aufgabe beginnen, an der möglicherweise bereits jemand anders arbeitet.
Durchsuchen Sie die Probleme und Pull Requests in dem [MDN-Repository](https://github.com/orgs/mdn/repositories), zu dem Sie beitragen möchten, und bestätigen Sie, dass die Arbeit, die Sie beginnen möchten, nicht bereits erledigt wird.
Wenn Sie zum MDN-Projekt beitragen möchten, befinden Sie sich in einer der folgenden Situationen:

- **Wenn Sie zum Projekt beitragen möchten**, finden Sie Aufgaben unter "Issues" in einem der [MDN GitHub-Repositories](https://github.com/orgs/mdn/repositories) (zum Beispiel, [`mdn/content`-Probleme](https://github.com/mdn/content/issues)) und unseren [öffentlichen GitHub-Projektboards](https://github.com/orgs/mdn/projects).
  Stellen Sie sicher, dass das Problem niemandem zugewiesen ist und niemand bereits einen Pull Request für die Aufgabe geöffnet hat.
  Probleme mit dem Label `good first issue` sind ein guter Ausgangspunkt.

- **Wenn Sie ein Problem auf MDN gefunden haben**, sollten Sie zuerst ein Problem öffnen.
  **Probleme benötigen eine Antwort von den Wartenden, bevor Sie mit der Arbeit beginnen**, um sicherzustellen, dass das durch einen Pull Request behobene Problem gültig ist und dass Ihr Pull Request akzeptiert wird.
  Weitere Informationen zu Problemen finden Sie auf unseren [Community-Seiten zu GitHub-Problemen](https://github.com/mdn/mdn/issues/new?labels=proposal%2Cneeds+triage&template=content-or-feature-suggestion.yml&title=Enter+your+proposal+here).

- **Wenn Sie neuen Inhalt oder eine neue Funktion vorschlagen möchten**, reichen Sie einen Vorschlag über die "Neuer Inhalt oder Funktionsvorschlag" [GitHub-Issue-Vorlage](https://github.com/mdn/mdn/issues/new/choose) ein.

Wenn Sie nicht sicher sind, wo Sie anfangen sollen, treten Sie mit uns auf [dem Discord-Server](/discord) in Kontakt und fragen Sie nach Feedback.

### Einen Pull Request öffnen

Wenn Sie bereit sind, einen Pull Request zu öffnen, befolgen Sie diese Richtlinien:

- **Pull Requests sollten kurz und auf ein Problem fokussiert sein:** Falls möglich, gruppieren Sie zusammenhängende Änderungen in mehrere, kleine Pull Requests.
  Wenn ein Pull Request zu groß wird, kann der Prüfer ihn schließen und Sie bitten, Pull Requests für jede logische Änderungssammlung, die zusammengehört, einzureichen.
- **Fügen Sie eine Beschreibung der Änderungen hinzu:** Geben Sie so viel Kontext und Begründung für den Pull Request wie möglich an.
- **Fügen Sie den Link zum gelösten Problem hinzu:** Geben Sie in der Pull Request-Beschreibung 'Fixes' an, wenn das Problem vollständig behoben ist, oder 'Relates to', wenn es sich um ein verwandtes Problem handelt.
  Weitere Informationen zum Verlinken von Issues in Pull Requests finden Sie in den [GitHub-Dokumenten](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword).
- **Fügen Sie 'depends on'** mit einem Link zu einer Abhängigkeit hinzu, wenn es Pull Requests gibt, die zuerst zusammengeführt werden müssen (z. B. Codebeispiele in anderen Repositories).
- **Begleiten Sie Änderungen an Codebeispielen mit Inhaltsänderungen:** Dies ist wichtig, um sicherzustellen, dass aktualisierte Beispiele korrekt bereitgestellt werden.
  Wenn Sie Inhaltsänderungen vornehmen, die sich auf die Verwendung von Beispielinhalten auswirken, sollten die entsprechenden Codebeispiele ebenfalls aktualisiert werden.
- **Fügen Sie einen Prüfer hinzu:** Sie können einen Prüfer, wie ein Teammitglied oder einen Themeninhaber, hinzufügen, falls Sie bereits wissen, wer Ihren Pull Request überprüfen soll.
- **Machen Sie keine Änderungen nur an der Grammatik:**
  MDN Web Docs enthält technische Dokumentationen; Sie sollten keine Änderungen am Stil der Prosa vorschlagen, es sei denn, die Grammatik ist falsch.
- **Fügen Sie nicht unnötig Zeilenumbrüche hinzu oder entfernen Sie sie** auf Seiten, die einem bestimmten Formatierungsstil folgen.

### Nachdem Sie einen Pull Request geöffnet haben

- **Behandeln Sie CI-Fehler** von den automatisierten Tests, die als GitHub-Aktionen laufen (siehe `.github/workflows`).
  Wenn einer oder mehrere dieser Tests fehlschlagen, liegt es in Ihrer Verantwortung, diese zu beheben.
  Wenn Sie nicht wissen, wie Sie die zugrunde liegenden Probleme lösen sollen, bitten Sie um Hilfe.
- **Lösen Sie Merge-Konflikte** mit dem Hauptzweig; es liegt in Ihrer Verantwortung, diese zu lösen.
  Sie können dies tun, indem Sie den `mdn/main`-Zweig in Ihren Zweig zusammenführen.
  Weitere Informationen finden Sie in der GitHub-Dokumentation zum [Aktualisieren Ihres Zweigs](https://docs.github.com/en/pull-requests/proposing-changes-to-your-work-with-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch#about-keeping-your-pull-request-in-sync).
- **Seien Sie reaktionsschnell auf Feedback.**
  Dies bedeutet, bereit zu sein, Änderungen an dem Pull Request basierend auf der Überprüfung vorzunehmen.
  Wenn eine Überprüfung stattfindet und die Änderungen nicht vorgenommen werden, kann der Pull Request geschlossen werden.
- **Seien Sie geduldig während des Überprüfungsprozesses.**
  Die MDN-Organisation erhält eine große Anzahl von Pull Requests, und das Team kann Zeit benötigen, um Ihre Beiträge zu überprüfen.
- **Öffnen Sie geschlossene Pull Requests nicht erneut.**
  Wenn Sie einen neuen Pull Request erstellen müssen, kann dieser auf den geschlossenen verweisen.

## Pull Request Überprüfungsprozess

Prüfer werden automatisch zugewiesen, wenn Sie einen Pull Request basierend auf einer `CODEOWNERS`-Datei öffnen. Wenn es jedoch eine bestimmte Person gibt, von der Sie eine Überprüfung anfordern möchten, können Sie [manuell eine Überprüfung anfordern](https://docs.github.com/en/pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review).
Wir verwenden auch auto-labeling auf Pull Requests, um uns bei der Zuordnung zu helfen.
Wartende können Pull Requests weiter kategorisieren und zusätzliche Label wie `needs-info` oder `on-hold` hinzufügen, falls erforderlich basierend auf dem Kontext.

Wenn Sie einen Pull Request überprüfen möchten, aber nicht als Prüfer aufgeführt sind, können Sie sich selbst als Prüfer hinzufügen.
Es ist höflich, zunächst bei den vorhandenen Prüfern nachzufragen, indem Sie in den Pull Request kommentieren, dass Sie beabsichtigen, eine Überprüfung zu starten.

### Prüfer und Bevollmächtigte

Das MDN Web Docs-Team verwendet Prüfer und Bevollmächtigte, um den Status von Pull Requests zu verfolgen.

- **Prüfer** sind Personen, die die Änderungen im Pull Request bewerten und dem Autor Rückmeldung geben.
- **Bevollmächtigte** sind Personen, die dafür verantwortlich sind, sicherzustellen, dass der Pull Request nicht blockiert ist.
  Nicht alle Pull Requests haben Bevollmächtigte, aber wenn ja, sind sie dafür verantwortlich, sicherzustellen, dass der Pull Request voranschreitet.
  Ein Bevollmächtigter hilft dabei, die Arbeit zu einem Abschluss zu bringen, entweder durch Zusammenführen, Schließen oder indem er selbst nicht blockierende Arbeiten durchführt.

Ein Pull Request Prüfer oder Bevollmächtigter ist dafür verantwortlich, die Änderungen zusammenzuführen.

Bevor Sie mit einer Überprüfung beginnen, überprüfen Sie die Pull Request-Beschreibung, um sicherzustellen, dass niemand Bestimmtes die Überprüfung durchführen sollte.
Stellen Sie sicher, dass alle kontinuierlichen Integrationsaufgaben (CI) erfolgreich abgeschlossen wurden und dass es keine Merge-Konflikte gibt.

Wenn Aufgaben fehlschlagen oder es Merge-Konflikte gibt, kommunizieren Sie dies dem Autor; es ist deren Verantwortung, diese zu adressieren.
Sie können den Autor als **Bevollmächtigten** setzen, um anzuzeigen, dass ein Pull Request ihre Aufmerksamkeit benötigt, bevor eine Überprüfung beginnen kann.
Lassen Sie dem Autor, insbesondere neuen Mitwirkenden am Projekt, die Möglichkeit, um Hilfe zu bitten.

### Einen Pull Request überprüfen

Wenn es um die Änderungen in einem Pull Request geht, müssen die Inhalte und Prosatexte dem [MDN Writing style guide](/de/docs/MDN/Writing_guidelines/Writing_style_guide) und Beispielcode dem [code style guide](/de/docs/MDN/Writing_guidelines/Code_style_guide) entsprechen.

Bei der Überprüfung eines Pull Requests sollten Sie:

- **Einen Kommentar hinzufügen** zum Pull Request, um dem Autor mitzuteilen, dass Sie sich des Pull Requests bewusst sind und die Überprüfung starten werden.
  Dies soll vermeiden, dass jemand anderes zur gleichen Zeit unnötig mit der Überprüfung des Pull Requests beginnt.
- **Den Überprüfungsumfang auf die Änderungen im Pull Request beschränken.**
  Eröffnen Sie ein Folgeproblem oder einen Pull Request, um andere Verbesserungen zu adressieren, die nicht vom Pull Request abgedeckt werden.
- **Um Hilfe bitten** und das Label `review-help-needed` hinzufügen, wenn Sie technische Unterstützung bei der Überprüfung benötigen.
- **Pull Requests mit nicht zusammenhängenden Änderungen schließen**, wenn sie zu komplex sind oder mehrere nicht zusammenhängende Änderungen enthalten.
  In solchen Fällen bitten Sie den Autor des Pull Requests, ihre Änderungen in kleineren Teilen einzureichen.
- **Lastenausgleich anfordern**, wenn Ihre Kapazität voll ist und Sie keine Ressourcen für die Überprüfung haben.
  Taggen Sie das `@core-yari-content`-Team und bitten Sie, ob jemand anderes einspringen kann.
- **Nicht zusammenführen, es sei denn 'depends on'** Pull Requests sind zuerst zusammengeführt.
- **Keine Pull Requests zusammenführen, die fehlgeschlagene Tests haben.**
  Es ist eine gute [open source Etiquette](/de/docs/MDN/Community/Open_source_etiquette), den `main`-Zweig stabil zu halten, um Unterbrechungen für Mitwirkende, Betreuer und automatisierte Prozesse zu vermeiden.
  Ein instabiler `main`-Zweig blockiert alle anderen Pull Requests und erschwert anderen die Überprüfung und Zusammenführung von Beiträgen.
  Darüber hinaus erhalten Mitwirkende, die Repositories beobachten, ein hohes Maß an Benachrichtigungen, und unnötiger Lärm, der durch fehlgeschlagene Tests verursacht wird, kann frustrierend sein.
  Wenn Sie nicht sicher sind, wie Sie die fehlgeschlagenen Tests beheben können, [bitten Sie um Hilfe](/de/docs/MDN/Community/Communication_channels) oder weisen Sie den Pull Request jemand anderem zu.

Wenn ein Pull Request abgesehen von kleinen Tippfehlern oder anderen kleineren Problemen gut aussieht, möchten Sie möglicherweise das Problem direkt beheben.
Sie können dies tun, vorausgesetzt der Pull Request [wurde so eingerichtet, dass Änderungen erlaubt sind](https://docs.github.com/en/pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork).
Es wird empfohlen, [Kommentare mit Vorschlägen](https://docs.github.com/en/pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request) zu verwenden, um kleinere Probleme zu beheben, da diese gesammelt und auf einmal committet werden können.

Bei der Einreichung Ihrer Überprüfung haben Sie drei Optionen: **genehmigen**, **kommentieren** oder **Änderungen anfordern**.
Die folgenden Abschnitte erklären, wann jede Option verwendet wird.

### Änderungen anfordern

Verwenden Sie die Option Änderungen anfordern, wenn das von Ihnen bereitgestellte Feedback vom Autor übernommen und von dem Prüfer erneut überprüft werden muss, bevor der Pull Request genehmigt und zusammengemischt werden kann.

#### Kommentar

Verwenden Sie die Kommentaroption, wenn Ihr Feedback nicht kritisch ist und keine erneute Überprüfung erfordert.
Kurz gesagt, Sie vertrauen darauf, dass der Autor und andere Prüfer ein gutes Urteilsvermögen verwenden.

#### Genehmigen

Verwenden Sie die Genehmigungsoption, wenn alles gut aussieht und aus Ihrer Perspektive bereit zur Zusammenführung ist.
Nachdem Sie Ihre Überprüfung eingereicht haben, können Sie den Pull Request sicher zusammenführen, wenn keine anderen Prüfer oder ausstehende Überprüfungskommentare zu berücksichtigen sind.

#### Was tun, wenn Sie nicht weiterkommen

Wenn Sie eine Inhaltsänderung nicht verstehen oder der Meinung sind, dass sie zu groß und komplex ist, um sie zu bewältigen, geraten Sie nicht in Panik!
Ein guter Ausgangspunkt besteht darin, den Autor des Pull Requests um Informationen zu bitten, die helfen.

Es ist selten, dass Sie aufgefordert werden, eine große, komplexe Inhaltsänderung ohne Warnung zu überprüfen.
Sollte dies jedoch geschehen, sollte die Pull Request-Beschreibung auf ein Problem verlinken, das die Hintergrundinformationen erklärt.

Wenn Sie sich immer noch nicht sicher sind oder denken, dass der Inhalt verdächtig ist, wenden Sie sich an das MDN Web Docs-Team und bitten Sie um Hilfe.

### Richtlinien für Reaktionszeiten für Autoren und Prüfer

Dieser Abschnitt bietet Details zu den erwarteten Antwortzeiten während des Antwortens auf Überprüfungskommentare, wenn Sie ein Pull Request-Autor sind, und während des Überprüfens von Pull Requests, wenn Sie ein Prüfer sind.

- **Überprüfung**:
  Der Pull Request Prüfer sollte in der Lage sein, die Änderungen in 2 Wochen oder weniger zu überprüfen.
  Innerhalb der 2 Wochen, nachdem ein Pull Request geöffnet wurde, kann der Prüfer:
  - Einen Kommentar zu hinterlassen, wann sie mit der Überprüfung des Pull Requests beginnen können
  - Technische Unterstützung oder Ressourcenhilfe anfordern
- **Angeforderte Änderungen berücksichtigen:**
  Der Pull Request-Autor sollte in der Lage sein, auf die Kommentare zu antworten oder die Kommentare in 4 Wochen oder weniger zu beheben.
  Wenn der Pull Request-Autor nicht in der Lage ist, auf die Kommentare zur Überprüfung in dieser Zeit zu antworten oder sie zu beheben, kann der Prüfer eines der folgenden tun:
  - Die Änderungen committen und den Pull Request zusammenführen
  - Den Pull Request schließen

### Externe Prüfer

Einige Pull Requests im MDN Content-Repo betreffen bestimmte Arbeiten von Browseranbietern oder Organisationen mit definierten Autoren und Prüfern.
Der Autor wird in diesen Fällen den Benutzernamen des Prüfers in einer Zeile am unteren Rand der Pull Request-Beschreibung hinzufügen, zum Beispiel:

```md
reviewer: @jpmedley
```

Wenn Sie eine Prüfungsanfrage erhalten und mit einem anderen Prüfer wie oben beschrieben überschrieben wurden, überprüfen Sie die Änderungen nicht.
Sobald der im Beschreibungstext genannte Prüfer die Änderungen genehmigt hat, wird eine Genehmigung von den `CODEOWNERS` erforderlich sein.

## Leseliste

Prüfer werden ermutigt, die folgenden Artikel zu lesen, um Unterstützung bei häufigen Aufgaben zu erhalten:

- [The Art of Closing](https://blog.jessfraz.com/post/the-art-of-closing/) erklärt, wie man einen unvollendeten oder abgelehnten Pull Request schließt
- [Code Review Guidelines for the Reviewer](https://phauer.com/2018/code-review-guidelines/#code-reviews-guidelines-for-the-reviewer) bietet Beispiele für gutes und schlechtes Feedback
- [How to do a code review](https://google.github.io/eng-practices/review/reviewer/) auf google.github.io/eng-practices
