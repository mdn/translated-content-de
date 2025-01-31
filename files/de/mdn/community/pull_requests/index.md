---
title: Einreichung und Überprüfung von Pull Requests
slug: MDN/Community/Pull_requests
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

Dieses Dokument beschreibt, wie Mitwirkende Änderungen an MDN Web Docs vornehmen und wie diese Änderungen überprüft und auf der Website veröffentlicht werden.
Inhaltsänderungen an MDN Web Docs umfassen:

- **Tägliche Verbesserungen** für die Dokumentation von APIs, CSS-Eigenschaften, Plattformaktualisierungen und Inhaltserweiterungen.
  Dies wird normalerweise von MDN Web Docs-Mitarbeitern durchgeführt, die für Mozilla, Google, Open Web Docs, Samsung arbeiten, aber auch von Freiwilligen aus der Gemeinschaft.
- **Kleine Korrekturen** und kleine Aktualisierungen der Website zur Behebung von Tippfehlern, grammatikalischen Fehlern und technischen Ungenauigkeiten.
  Diese Probleme werden normalerweise von den Lesern der MDN Web Docs gefunden.
- **Fehlerbehebungen von Inhalten**, die normalerweise von Freiwilligen durchgeführt werden, um [Probleme im `mdn/content` Repository](https://github.com/mdn/content/issues) zu schließen.

Unabhängig davon, wie Inhaltsänderungen durchgeführt werden, werden sie als Pull Requests auf GitHub eingereicht.
Die Inhaltsänderungen durchlaufen die folgenden Schritte, bevor sie auf MDN Web Docs veröffentlicht werden:

1. **Einreichen von Änderungen:** Als Autor des Pull Requests reichen Sie Änderungen ein, indem Sie einen Pull Request öffnen.
   Lesen Sie die Abschnitte [Bevor Sie beginnen](#bevor_sie_beginnen), [Öffnen eines Pull Requests](#öffnen_eines_pull_requests) und [Nachdem Sie einen Pull Request geöffnet haben](#nachdem_sie_einen_pull_request_geöffnet_haben), um mehr über unsere Prozesse zu erfahren.
2. **Überprüfung der Änderungen:** Ihre Änderungen werden von MDN-Mitgliedern und Freiwilligen überprüft.
   Weitere Details finden Sie im Abschnitt [Pull-Request-Überprüfungsprozess](#pull-request-überprüfungsprozess).
3. **Ansicht veröffentlichter Änderungen:** Inhalte, die auf `mdn/content` aktualisiert werden, gehen innerhalb eines Tages nach dem Zusammenführen durch einen einmal alle 24 Stunden durchgeführten Seitenneubau live.

## Einreichen von Änderungen

### Werte und Teilnahme

Wir möchten, dass die MDN Web Docs eine einladende, freundliche Gemeinschaft sind, auf die wir alle stolz sein können.
Alle Teilnehmer müssen unseren [Verhaltenskodex](https://github.com/mdn/content/blob/main/CODE_OF_CONDUCT.md) befolgen, was bedeutet, den [Mozilla Community Participation Guidelines](https://www.mozilla.org/en-US/about/governance/policies/participation/) zu folgen.
Seien Sie höflich und konstruktiv, wenn Sie Pull Requests eröffnen, Review-Kommentare schreiben und mit dem Author des Pull Requests oder anderen Mitgliedern der Gemeinschaft interagieren.
Wenn Sie oder jemand anderes ein Verhalten erlebt hat, das potenziell illegal ist oder Sie sich unsicher, unwillkommen oder unwohl fühlen lässt, ermutigen wir Sie, es zu [melden](https://www.mozilla.org/en-US/about/governance/policies/participation/reporting/).

### Bevor Sie beginnen

Bevor Sie die Arbeit an MDN beginnen, gehen Sie bitte die unten aufgeführten Empfehlungen und Richtlinien durch.

**Pull Requests müssen ein bestehendes Problem lösen oder teilweise beheben.**
Der Grund für diese Einschränkung ist, zu vermeiden, dass Sie an einer Aufgabe arbeiten, die möglicherweise bereits von jemand anderem bearbeitet wird.
Durchsuchen Sie die Probleme und Pull Requests in dem [MDN-Repository](https://github.com/orgs/mdn/repositories), zu dem Sie beitragen möchten, und bestätigen Sie, dass an der Arbeit, die Sie beginnen möchten, nicht bereits gearbeitet wird.
Wenn Sie einen Beitrag zum MDN-Projekt leisten möchten, befinden Sie sich in einer der folgenden Situationen:

- **Wenn Sie zum Projekt beitragen möchten**, können Sie Aufgaben unter 'Issues' in einem der [MDN GitHub Repositories](https://github.com/orgs/mdn/repositories) (zum Beispiel, [`mdn/content` issues](https://github.com/mdn/content/issues)) und unseren [öffentlichen GitHub-Projektboards](https://github.com/orgs/mdn/projects) finden.
  Stellen Sie sicher, dass das Problem niemandem zugewiesen ist und dass noch niemand einen Pull Request für die Aufgabe erstellt hat.
  Probleme, die mit `good first issue` gekennzeichnet sind, sind ein guter Ausgangspunkt.

- **Wenn Sie ein Problem auf MDN gefunden haben**, sollten Sie zuerst ein Problem eröffnen.
  **Probleme benötigen eine Antwort von den Betreuern, bevor Sie mit der Arbeit beginnen** damit Sie wissen, dass ein Problem, das ein Pull Request adressiert, gültig ist und Ihr Pull Request akzeptiert wird.
  Weitere Informationen zu Problemen finden Sie auf unseren [Community-Seiten für GitHub-Probleme](https://github.com/mdn/mdn/issues/new?labels=proposal%2Cneeds+triage&template=content-or-feature-suggestion.yml&title=Enter+your+proposal+here).

- **Wenn Sie neuen Inhalt oder ein neues Feature vorschlagen möchten**, reichen Sie einen Vorschlag über die 'Neue Inhalt- oder Funktionsvorschlags'-[GitHub-Issue-Vorlage](https://github.com/mdn/mdn/issues/new/choose) ein.

Wenn Sie sich nicht sicher sind, wo Sie beginnen sollen, erreichen Sie uns [auf dem Discord-Server](/discord) und bitten Sie um Feedback.

### Öffnen eines Pull Requests

Wenn Sie bereit sind, einen Pull Request zu öffnen, befolgen Sie diese Richtlinien:

- **Pull Requests sollten kurz und auf ein Thema fokussiert sein:** Gruppieren Sie, wenn möglich, zusammenhängende Änderungssets in mehrere, kleine Pull Requests.
  Wenn ein Pull Request zu groß wird, kann der Rezensent ihn schließen und Sie darum bitten, Pull Requests für jeden logischen Satz von Änderungen einzureichen, die zusammengehören.
- **Fügen Sie eine Beschreibung der Änderungen hinzu:** Geben Sie so viel Kontext und Begründung für den Pull Request wie möglich.
- **Fügen Sie den Link zum Problem hinzu, das Sie schließen:** Geben Sie in der Beschreibung des Pull Requests 'Fixes' an, wenn das Problem vollständig gelöst wird, oder 'Relates to', wenn es sich um ein verwandtes Problem handelt.
  Weitere Informationen zum Verlinken von Problemen in Pull Requests finden Sie in den [GitHub-Dokumentationen](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword).
- **Fügen Sie 'abhängig von'** mit einem Link zu einer Abhängigkeit hinzu, wenn es Pull Requests gibt, die zuerst zusammengeführt werden müssen (z. B. Codebeispiele in anderen Repositories).
- **Begleiten Sie Codebeispieländerungen mit Inhaltsänderungen:** Dies ist wichtig, damit aktualisierte Beispiele korrekt bereitgestellt werden.
  Wenn Sie Inhaltsänderungen vornehmen, die beeinflussen, wie Beispiele verwendet werden, sollten auch die zugehörigen Codebeispiele aktualisiert werden.
- **Fügen Sie einen Gutachter hinzu:** Sie können einen Reviewer hinzufügen, wie z. B. ein Teammitglied oder einen Themenverantwortlichen, wenn Sie bereits wissen, wer Ihren Pull Request überprüfen soll.
- **Machen Sie keine Veränderungen, die nur die Grammatik betreffen:**
  MDN Web Docs enthalten technische Dokumentation; Sie sollten keine Vorschläge zur Prosa-Stiländerung machen, es sei denn, die Grammatik ist falsch.
- **Fügen Sie nicht unnötig Zeilenumbrüche hinzu oder entfernen Sie sie** auf Seiten, die einem bestimmten Formatierungsstil folgen.

### Nachdem Sie einen Pull Request geöffnet haben

- **Behandeln Sie CI-Fehler** aus den automatisierten Tests, die als GitHub-Aktionen ausgeführt werden (siehe `.github/workflows`).
  Wenn einer oder mehrere dieser Tests fehlschlagen, liegt es in Ihrer Verantwortung, sie zu lösen.
  Wenn Sie nicht wissen, wie Sie die zugrunde liegenden Probleme lösen können, fragen Sie nach Hilfe.
- **Lösen Sie Merge-Konflikte** mit dem Haupt-Branch; Sie sind verantwortlich für deren Lösung.
  Sie können dies tun, indem Sie den `mdn/main`-Branch in Ihren Branch zusammenführen.
  Weitere Informationen finden Sie in der GitHub-Dokumentation zum [Auf dem neuesten Stand halten Ihres Branches](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch#about-keeping-your-pull-request-in-sync).
- **Seien Sie offen für Feedback.**
  Das bedeutet, bereit zu sein, Änderungen am Pull Request auf der Grundlage der Rezension vorzunehmen.
  Wenn eine Rezension stattfindet und die Änderungen nicht vorgenommen werden, kann der Pull Request geschlossen werden.
- **Seien Sie geduldig während des Überprüfungsprozesses.**
  Die MDN-Organisation erhält eine große Menge an Pull Requests, und das Team benötigt möglicherweise Zeit, um Ihre Beiträge zu überprüfen.
- **Öffnen Sie geschlossene Pull Requests nicht erneut.**
  Wenn Sie einen neuen Pull Request erstellen müssen, kann er auf den geschlossenen Bezug nehmen.

## Pull-Request-Überprüfungsprozess

Reviewer werden automatisch zugewiesen, wenn Sie einen Pull Request basierend auf einer `CODEOWNERS`-Datei öffnen, aber wenn es eine bestimmte Person gibt, von der Sie eine Überprüfung anfordern möchten, können Sie [manuell eine Überprüfung anfordern](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review).
Wir verwenden auch eine automatische Kennzeichnung von Pull Requests, um uns bei der Priorisierung zu helfen.
Betreuer können Pull Requests weiter triagieren und alle zusätzlichen Labels, wie `needs-info` oder `on-hold`, hinzufügen, wenn dies kontextabhängig notwendig ist.

Wenn Sie einen Pull Request überprüfen möchten, aber nicht als Gutachter aufgeführt sind, können Sie sich selbst als solchen hinzufügen.
Es ist höflich, mit den bestehenden Rezensenten zu klären, indem Sie im Pull Request kommentieren, dass Sie beabsichtigen, eine Rezension zu starten.

### Rezensenten und Zuweisungen

Das MDN Web Docs-Team verwendet Rezensenten und Zuweisungen, um den Status von Pull Requests zu verfolgen.

- **Rezensenten** sind Personen, die die Änderungen im Pull Request bewerten und dem Autor Feedback geben.
- **Zuweisungen** sind Personen, die dafür verantwortlich sind, sicherzustellen, dass der Pull Request nicht blockiert wird.
  Nicht alle Pull Requests haben Zuweisungen, aber wenn sie welche haben, sind sie dafür verantwortlich, sicherzustellen, dass der Pull Request voranschreitet.
  Ein Zuweisungsberechtigter hilft dabei, die Arbeit zu einem Abschluss zu bringen, entweder durch Zusammenführen, Schließen oder indem er selbst die blockierende Arbeit übernimmt.

Ein Pull Request-Reviewer oder Zuweisungsberechtigter ist verantwortlich für das Zusammenführen der Änderungen.

Bevor Sie mit einer Überprüfung beginnen, überprüfen Sie die Beschreibungen des Pull Requests, um sicherzustellen, dass niemand Bestimmtes es überprüfen sollte.
Stellen Sie sicher, dass alle kontinuierlichen Integrationsaufgaben (CI) erfolgreich abgeschlossen wurden und dass keine Zusammenführungskonflikte bestehen.

Wenn Aufgaben fehlschlagen oder Zusammenführungskonflikte bestehen, kommunizieren Sie dies dem Autor; es liegt in seiner Verantwortung, diese zu beheben.
Sie können den Autor als **Zuweisungsberechtigten** festlegen, um anzuzeigen, dass ein Pull Request seine Aufmerksamkeit benötigt, bevor eine Überprüfung beginnen kann.
Lassen Sie dem Autor die Möglichkeit offen, um Hilfe zu bitten, insbesondere neuen Mitwirkenden des Projekts.

### Überprüfung eines Pull Requests

Was die Änderungen in einem Pull Request betrifft, müssen Inhalt und Prosa dem [MDN-Schreibstil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide) entsprechen und Beispielcode muss dem [Code-Stil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide) folgen.

Wenn Sie einen Pull Request überprüfen, sollten Sie:

- **Einen Kommentar** zum Pull Request hinzufügen, um den Autor wissen zu lassen, dass Sie den Pull Request zur Kenntnis genommen haben und mit der Überprüfung beginnen werden.
  Dies ist wichtig, um zu vermeiden, dass jemand anderes die Überprüfung des Pull Requests gleichzeitig unnötigerweise beginnt.
- **Den Umfang der Überprüfung** nur auf die Änderungen im Pull Request beschränken.
  Öffnen Sie einen Folge-Issue oder Pull Request, um andere Verbesserungen zu adressieren, die nicht durch den Pull Request abgedeckt werden.
- **Um Hilfe bitten** und das `review-help-needed` Label hinzufügen, wenn Sie technische Unterstützung bei der Überprüfung benötigen.
- **Pull Requests mit nicht zugehörigen Änderungen schließen** wenn es zu komplex ist oder mehrere nicht zusammenhängende Änderungen enthält.
  In solchen Fällen bitten Sie den Pull Request-Autor, seine Änderungen in kleineren Teilen einzureichen.
- **Lastausgleich anfordern**, wenn Ihr Terminkalender voll ist und Sie keine Kapazitäten für die Überprüfung haben.
  Taggen Sie das `@core-yari-content`-Team und fragen Sie, ob jemand anderes einspringen kann.
- **Nicht zusammenführen, es sei denn 'abhängig von'** Pull Requests wurden zuerst zusammengeführt.
- **Keine Pull Requests zusammenführen, die fehlschlagende Tests haben.**
  Es ist ein guter [Open Source-Etikette](/de/docs/MDN/Community/Open_source_etiquette), den `main`-Branch stabil zu halten, um Störungen für Mitwirkende, Betreuer und automatisierte Prozesse zu vermeiden.
  Ein instabiler `main`-Branch blockiert alle anderen Pull Requests und erschwert es anderen, Beiträge zu überprüfen und zusammenzuführen.
  Darüber hinaus erhalten Mitwirkende, die Repositories beobachten, eine große Menge an Benachrichtigungen, und unnötiger Lärm, verursacht durch fehlschlagende Tests, kann frustrierend sein.
  Wenn Sie nicht wissen, wie Sie die fehlschlagenden Tests beheben, [fragen Sie nach Hilfe](/de/docs/MDN/Community/Communication_channels) oder weisen Sie den Pull Request jemandem anderen zu.

Wenn ein Pull Request gut aussieht, abgesehen von kleinen Tippfehlern oder anderen geringfügigen Problemen, können Sie das Problem möglicherweise direkt beheben.
Sie können dies tun, sofern der Pull Request [so eingerichtet ist, dass Änderungen zugelassen werden](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork).
Es empfiehlt sich, [Kommentare mit Vorschlägen](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request) zu verwenden, um geringfügige Probleme zu beheben, da sie gebündelt und auf einmal committtet werden können.

Bei der Einreichung Ihrer Überprüfung haben Sie drei Optionen: **Genehmigen**, **Kommentar**, oder **Änderungen anfordern**.
Die folgenden Abschnitte erklären, wann jede Option zu verwenden ist.

### Änderungen anfordern

Verwenden Sie die Option "Änderungen anfordern", wenn das von Ihnen bereitgestellte Feedback _behandelt_ werden muss, bevor der Pull Request genehmigt und zusammengemerged werden kann.

#### Kommentar

Verwenden Sie die Option "Kommentar", wenn Ihr Feedback nicht kritisch ist und keine erneute Überprüfung erfordert.
Kurz gesagt, Sie vertrauen darauf, dass der Autor und andere Gutachter ein gutes Urteil treffen.

#### Genehmigen

Verwenden Sie die Option "Genehmigen", wenn alles gut aussieht und Ihrer Meinung nach bereit ist, um zusammengeführt zu werden.
Nachdem Sie Ihre Rezension eingereicht haben, können Sie den Pull Request sicher zusammenführen, falls es keine anderen Rezensenten oder zu behandelnde Überprüfungskommentare gibt.

#### Was tun, wenn Sie feststecken

Wenn Sie eine Inhaltsänderung nicht verstehen oder das Gefühl haben, dass sie zu groß und komplex ist, um damit umzugehen, geraten Sie nicht in Panik!
Ein guter Ausgangspunkt ist, den Autor des Pull Requests um Informationen zu bitten, die helfen.

Es ist selten, dass Sie ohne Vorwarnung eine große, komplexe Inhaltsänderung überprüfen müssen.
Wenn dies jedoch passiert, sollte die Beschreibung des Pull Requests auf ein Problem verlinken, das die Hintergrundinformationen erklärt.

Wenn Sie sich immer noch nicht sicher sind oder glauben, dass der Inhalt verdächtig ist, wenden Sie sich an das MDN Web Docs-Team und bitten Sie um Hilfe.

### Richtlinien für Antwortzeiten für Autoren und Rezensenten

Dieser Abschnitt bietet Details zu den erwarteten Antwortzeiten beim Reagieren auf Überprüfungskommentare, wenn Sie ein Pull Request-Autor sind, und beim Überprüfen von Pull Requests, wenn Sie ein Rezensent sind.

- **Überprüfung**:
  Der Pull Request-Reviewer sollte in der Lage sein, die Änderungen in 2 Wochen oder weniger zu überprüfen.
  In den 2 Wochen nach der Öffnung eines Pull Requests kann der Reviewer:
  - Einen Kommentar hinterlassen, wann er mit der Überprüfung des Pull Requests beginnen kann
  - Um technische oder Ressourcenhilfe bitten
- **Angeforderte Änderungen ansprechen:**
  Der Pull Request-Autor sollte in der Lage sein, auf die Kommentare zu antworten oder diese innerhalb von 4 Wochen oder weniger zu beheben.
  Wenn der Pull Request-Autor innerhalb dieser Zeit nicht auf die Überprüfungskommentare antworten oder diese beheben kann, kann der Reviewer eine der folgenden Maßnahmen ergreifen:
  - Die Änderungen committen und den Pull Request zusammenführen
  - Den Pull Request schließen

### Externe Gutachter

Einige Pull Requests im MDN-Content-Repo beziehen sich auf spezifische Arbeiten von Browser-Anbietern oder Organisationen mit definierten Autoren und Rezensenten.
Der Autor wird in diesen Fällen den Benutzernamen des Rezensenten in einer Zeile am Ende der Beschreibung des Pull Requests aufnehmen, beispielsweise:

```md
reviewer: @jpmedley
```

Wenn Sie eine Überprüfungsanfrage erhalten und Sie mit einem anderen Rezensenten in der oben beschriebenen Weise überschrieben wurden, überprüfen Sie die Änderungen nicht.
Sobald der in der Beschreibung genannte Rezensent die Änderungen genehmigt hat, wird er um eine Genehmigung durch den `CODEOWNERS` bitten.

## Leseliste

Rezensenten werden ermutigt, die folgenden Artikel zu lesen, um Hilfe bei allgemeinen Aufgaben zu erhalten:

- [The Art of Closing](https://blog.jessfraz.com/post/the-art-of-closing/) erklärt, wie man einen unvollendeten oder abgelehnten Pull Request schließt
- [Kindness and Code Reviews: Improving the Way We Give Feedback](https://product.voxmedia.com/2018/8/21/17549400/kindness-and-code-reviews-improving-the-way-we-give-feedback) gibt nützliche Hinweise zur Feedback-Abgabe
- [Code Review Guidelines for the Reviewer](https://phauer.com/2018/code-review-guidelines/#code-reviews-guidelines-for-the-reviewer) bietet Beispiele für gutes und schlechtes Feedback
- [How to do a code review](https://google.github.io/eng-practices/review/reviewer/) auf google.github.io/eng-practices
