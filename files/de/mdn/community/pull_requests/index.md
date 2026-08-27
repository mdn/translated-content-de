---
title: Einreichung und Überprüfung von Pull Requests
slug: MDN/Community/Pull_requests
l10n:
  sourceCommit: b3cd597b58940518a7712487ce94efc0881cb549
---

Dieses Dokument beschreibt, wie Mitwirkende Änderungen an den MDN Web Docs vornehmen und wie diese Änderungen überprüft und auf der Website veröffentlicht werden.
Inhaltsänderungen an den MDN Web Docs umfassen:

- **Tägliche Verbesserungen** für die Dokumentation von APIs, CSS-Eigenschaften, Plattform-Updates und Inhaltserweiterungen.
  Dies wird in der Regel von den Mitarbeitern der MDN Web Docs, die für Mozilla, Google, Open Web Docs und Samsung arbeiten, sowie von ehrenamtlichen Helfern aus der Gemeinschaft vorgenommen.
- **Kleine Korrekturen** und kleinere Updates zur Behebung von Tippfehlern, grammatikalischen Problemen und technischen Ungenauigkeiten auf der Website.
  Diese Probleme werden in der Regel von Lesern der MDN Web Docs entdeckt.
- **Inhalts-Bugfixes**, die in der Regel von Freiwilligen vorgenommen werden, um [Probleme im `mdn/content` Repository](https://github.com/mdn/content/issues) zu schließen.

Unabhängig davon, wie Inhaltsänderungen vorgenommen werden, werden sie als Pull Requests auf GitHub eingereicht.
Die Inhaltsänderungen durchlaufen folgende Phasen, bevor sie auf den MDN Web Docs veröffentlicht werden:

1. **Einreichung von Änderungen:** Als Autor eines Pull Requests reichen Sie Änderungen ein, indem Sie einen Pull Request eröffnen.
   Siehe die Abschnitte [Bevor Sie beginnen](#bevor_sie_beginnen), [Einen Pull Request öffnen](#einen_pull_request_öffnen) und [Nachdem Sie einen Pull Request eröffnet haben](#nachdem_sie_einen_pull_request_geöffnet_haben) um mehr über unsere Prozesse zu erfahren.
2. **Überprüfung von Änderungen:** Ihre Änderungen werden von Mitgliedern und ehrenamtlichen Helfern der MDN überprüft.
   Weitere Details finden Sie im Abschnitt [Pull Request Überprüfungsprozess](#pull_request_überprüfungsprozess).
3. **Ansicht der veröffentlichten Änderungen:** Aktualisierte Inhalte auf `mdn/content` werden innerhalb eines Tages nach dem Zusammenfügen durch einen Website-Neuaufbau veröffentlicht, der einmal alle 24 Stunden erfolgt.

## Einreichen von Änderungen

### Werte und Beteiligung

Wir möchten, dass die MDN Web Docs eine einladende, freundliche Gemeinschaft sind, auf die wir alle stolz sein können.
Alle Teilnehmer müssen unsere [Richtlinien für die Beteiligung der Community](/de/docs/MDN/Community/Community_Participation_Guidelines) befolgen, die auf den [Richtlinien für die Beteiligung der Mozilla Community](https://www.mozilla.org/en-US/about/governance/policies/participation/) basieren.
Seien Sie höflich und konstruktiv, wenn Sie Pull Requests eröffnen, Überprüfungskommentare schreiben oder mit dem Autor des Pull Requests oder anderen Mitgliedern der Community interagieren.
Wenn Sie oder jemand anderes Verhaltensweisen erlebt hat, die potenziell illegal sind oder bei Ihnen ein Gefühl der Unsicherheit, des Unwillkommenseins oder Unbehagens auslösen, ermutigen wir Sie, [es zu melden](/de/docs/MDN/Community/Community_Participation_Guidelines#reporting_process).

### Bevor Sie beginnen

Bevor Sie mit der Arbeit an MDN beginnen, lesen Sie bitte die unten aufgeführten Empfehlungen und Richtlinien.

**Pull Requests müssen ein bestehendes Problem lösen oder teilweise beheben.**
Der Grund für diese Einschränkung ist, dass wir vermeiden wollen, dass Sie an einer Aufgabe arbeiten, an der möglicherweise bereits jemand anderes arbeitet.
Durchsuchen Sie die Issues und Pull Requests im [MDN Repository](https://github.com/orgs/mdn/repositories), zu dem Sie beitragen möchten, und überprüfen Sie, dass die Aufgabe, an der Sie arbeiten möchten, nicht bereits in Arbeit ist.
Wenn Sie zu dem MDN-Projekt beitragen möchten, finden Sie sich in einer der folgenden Situationen:

- **Wenn Sie zum Projekt beitragen möchten**, können Sie Aufgaben unter 'Issues' in einem der [MDN GitHub Repositories](https://github.com/orgs/mdn/repositories) (zum Beispiel, [`mdn/content` Issues](https://github.com/mdn/content/issues)) und in unseren [öffentlichen GitHub-Projektboards](https://github.com/orgs/mdn/projects) finden.
  Stellen Sie sicher, dass das Issue nicht jemandem zugewiesen ist und noch niemand einen Pull Request für die Aufgabe eröffnet hat.
  Mit dem Label `good first issue` gekennzeichnete Issues sind ein guter Ausgangspunkt.

- **Wenn Sie ein Problem auf MDN gefunden haben**, sollten Sie zunächst ein Issue eröffnen.
  **Issues benötigen eine Antwort von den Betreuern, bevor Sie mit der Arbeit beginnen**, damit Sie wissen, dass das durch einen Pull Request angesprochene Problem gültig ist und Ihr Pull Request akzeptiert wird.
  Weitere Informationen zu Issues finden Sie auf unseren [Community-Seiten für GitHub-Issues](https://github.com/mdn/mdn/issues/new?labels=proposal%2Cneeds+triage&template=content-or-feature-suggestion.yml&title=Enter+your+proposal+here).

- **Wenn Sie neuen Inhalt oder eine neue Funktion vorschlagen möchten**, reichen Sie einen Vorschlag über die 'Neue Inhalt- oder Funktionsvorschlag'-[GitHub Issue Vorlage](https://github.com/mdn/mdn/issues/new/choose) ein.

Wenn Sie nicht sicher sind, wo Sie anfangen sollen, wenden Sie sich an uns auf [dem Discord-Server](/discord) und bitten Sie um Feedback.

### Einen Pull Request öffnen

Wenn Sie bereit sind, einen Pull Request zu öffnen, halten Sie sich an folgende Richtlinien:

- **Pull Requests sollten kurz und auf ein Issue fokussiert sein:** Wenn möglich, gruppieren Sie verwandte Änderungen in mehrere, kleine Pull Requests.
  Wenn ein Pull Request zu groß wird, kann der Reviewer ihn schließen und Sie bitten, Pull Requests für jeden logischen Satz von Änderungen einzureichen, die zusammengehören.
- **Fügen Sie eine Beschreibung der Änderungen hinzu:** Geben Sie so viel Kontext und Begründung für den Pull Request wie möglich an.
- **Fügen Sie den Link zum Issue hinzu, das Sie schließen:** Fügen Sie in der Pull Request-Beschreibung 'Fixes' hinzu, wenn es das Issue vollständig löst, oder 'Relates to', wenn es ein verwandtes Issue ist.
  Weitere Informationen zum Verlinken von Issues in Pull Requests finden Sie in den [GitHub-Dokumenten](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword).
- **Hinzufügen von 'depends on'** mit einem Link zu einer Abhängigkeit, wenn es Pull Requests gibt, die zuerst zusammengeführt werden müssen (z.B. Codebeispiele in anderen Repositories).
- **Begleiten Sie Änderungen an Codebeispielen mit Inhaltsänderungen:** Dies ist wichtig, um sicherzustellen, dass aktualisierte Beispiele korrekt bereitgestellt werden.
  Wenn Sie Inhaltsänderungen vornehmen, die sich darauf auswirken, wie Beispiele verwendet werden, sollten auch die zugehörigen Codebeispiele aktualisiert werden.
- **Fügen Sie einen Reviewer hinzu:** Sie können einen Reviewer hinzufügen, wie z. B. ein Teammitglied oder einen Themenverantwortlichen, wenn Sie bereits wissen, wer Ihren Pull Request überprüfen sollte.
- **Machen Sie keine nur grammatikalischen Änderungen:**
  Die MDN Web Docs enthalten technische Dokumentation; Sie sollten keine Stiländerungen des Prosa vorschlagen, es sei denn, die Grammatik ist fehlerhaft.
- **Fügen Sie nicht unnötig Zeilenumbrüche hinzu oder entfernen Sie sie** auf Seiten, die einem bestimmten Formatierungsstil folgen.

### Nachdem Sie einen Pull Request geöffnet haben

- **Behandeln Sie CI-Fehler** von den automatisierten Tests, die als GitHub Actions ausgeführt werden (siehe `.github/workflows`).
  Wenn einer oder mehrere dieser Tests fehlschlagen, liegt es in Ihrer Verantwortung, sie zu lösen.
  Wenn Sie nicht wissen, wie Sie die zugrunde liegenden Probleme lösen können, bitten Sie um Hilfe.
- **Konflikte mit dem Hauptzweig auflösen;** Sie sind verantwortlich dafür, diese zu beheben.
  Sie können dies tun, indem Sie den `mdn/main` Branch in Ihren Branch zusammenführen.
  Weitere Informationen finden Sie in der GitHub-Dokumentation zur [Aktualisierung Ihres Branchs](https://docs.github.com/en/pull-requests/proposing-changes-to-your-work-with-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch#about-keeping-your-pull-request-in-sync).
- **Seien Sie auf Feedback vorbereitet.**
  Das bedeutet, dass Sie bereit sind, Änderungen am Pull Request basierend auf der Überprüfung vorzunehmen.
  Wenn eine Überprüfung stattfindet und die Änderungen nicht vorgenommen werden, kann der Pull Request geschlossen werden.
- **Seien Sie geduldig während des Überprüfungsprozesses.**
  Die MDN-Organisation erhält eine große Anzahl von Pull Requests, und das Team benötigt möglicherweise Zeit, um Ihre Beiträge zu überprüfen.
- **Öffnen Sie keine geschlossenen Pull Requests erneut.**
  Wenn Sie einen neuen Pull Request erstellen müssen, kann er auf den geschlossenen Bezug nehmen.

## Pull Request Überprüfungsprozess

Reviewer werden automatisch zugewiesen, wenn Sie einen Pull Request eröffnen, basierend auf einer `CODEOWNERS`-Datei. Wenn es jedoch eine bestimmte Person gibt, von der Sie eine Überprüfung anfordern möchten, können Sie manuell eine [Überprüfung anfordern](https://docs.github.com/en/pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review).
Wir verwenden auch Auto-Labeling auf Pull Requests, um sie besser zu verwalten.
Betreuer können Pull Requests weiter triagieren und bei Bedarf zusätzliche Labels wie `needs-info` oder `on-hold` basierend auf dem Kontext hinzufügen.

Wenn Sie einen Pull Request überprüfen möchten, aber nicht als Reviewer gelistet sind, können Sie sich selbst als einen hinzufügen.
Es ist höflich, zuerst mit den bestehenden Reviewern zu klären, indem Sie im Pull Request kommentieren, dass Sie beabsichtigen, eine Überprüfung zu beginnen.

### Reviewer und Beauftragte

Das MDN Web Docs-Team verwendet Reviewer und Beauftragte, um den Status von Pull Requests zu verfolgen.

- **Reviewer** sind Personen, die die Änderungen im Pull Request bewerten und dem Autor Feedback geben.
- **Beauftragte** sind Personen, die dafür verantwortlich sind, dass der Pull Request nicht blockiert wird.
  Nicht alle Pull Requests haben Beauftragte, aber wenn sie es tun, sind sie dafür verantwortlich, dass der Pull Request voranschreitet.
  Ein Beauftragter hilft dabei, die Arbeit zu einem Abschluss zu bringen, indem er entweder zusammenfügt, schließt oder selbst entblockierende Arbeiten übernimmt.

Ein Pull Request Reviewer oder Beauftragter ist für das Zusammenführen der Änderungen verantwortlich.

Bevor Sie mit einer Überprüfung beginnen, überprüfen Sie die Pull Request-Beschreibung, um sicherzustellen, dass niemand bestimmtes ihn überprüfen sollte.
Stellen Sie sicher, dass alle Aufgaben der kontinuierlichen Integration (CI) erfolgreich abgeschlossen wurden und dass keine Merge-Konflikte vorliegen.

Wenn irgendwelche Aufgaben fehlschlagen oder Merge-Konflikte bestehen, kommunizieren Sie dies dem Autor; es liegt in seiner Verantwortung, diese zu beheben.
Sie können den Autor als **Beauftragten** festlegen, um anzuzeigen, dass ein Pull Request seine Aufmerksamkeit benötigt, bevor eine Überprüfung beginnen kann.
Lassen Sie dem Autor die Möglichkeit, um Hilfe zu bitten, insbesondere neuen Mitwirkenden am Projekt.

### Überprüfung eines Pull Requests

Wenn es um die Änderungen in einem Pull Request geht, müssen Inhalt und Prosa dem [MDN Schreibstil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide) entsprechen und Beispieldateien dem [Code-Stil-Leitfaden](/de/docs/MDN/Writing_guidelines/Code_style_guide).

Bei der Überprüfung eines Pull Requests sollten Sie:

- **Einen Kommentar** zum Pull Request hinzufügen, um den Autor wissen zu lassen, dass Sie den Pull Request zur Kenntnis genommen haben und mit der Überprüfung beginnen werden.
  Dies soll Fälle vermeiden, in denen jemand anderes gleichzeitig unnötigerweise beginnt, den Pull Request zu überprüfen.
- **Den Umfang der Überprüfung** auf die Änderungen im Pull Request beschränken.
  Erstellen Sie ein Folgeissue oder einen Pull Request, um andere nicht durch den Pull Request abgedeckte Verbesserungen anzugehen.
- **Um Hilfe bitten** und das Tag `review-help-needed` hinzufügen, wenn Sie technische Unterstützung bei der Überprüfung benötigen.
- **Pull Requests mit nicht zusammenhängenden Änderungen schließen**, wenn er zu komplex ist oder mehrere nicht zusammenhängende Änderungen enthält.
  Bitten Sie in solchen Fällen den Autor des Pull Request, ihre Änderungen in kleineren Abschnitten einzureichen.
- **Lastenausgleich anfordern**, wenn Ihre Kapazitäten erschöpft sind und Sie keine Bandbreite für die Überprüfung haben.
  Markieren Sie das `@core-yari-content` Team und fragen Sie, ob jemand anderes einspringen kann.
- **Nicht zusammenführen, es sei denn 'depends on'** Pull Requests sind zuerst zusammengeführt.
- **Keine Pull Requests zusammenführen, die fehlschlagende Tests haben.**
  Es ist gute [Open-Source-Etikette](/de/docs/MDN/Community/Open_source_etiquette), den `main` Branch stabil zu halten, um Störungen für Mitwirkende, Betreuer und automatisierte Prozesse zu vermeiden.
  Ein instabiler `main` Branch blockiert alle anderen Pull Requests und macht es schwierig für andere, Beiträge zu überprüfen und zusammenzuführen.
  Darüber hinaus erhalten Mitwirkende, die Repositories beobachten, ein hohes Aufkommen an Benachrichtigungen, und unnötiger Lärm durch fehlschlagende Tests kann frustrierend sein.
  Wenn Sie nicht sicher sind, wie man die fehlschlagenden Tests behebt, [bitten Sie um Hilfe](/de/docs/MDN/Community/Communication_channels) oder weisen Sie den Pull Request jemand anderem zu.

Wenn ein Pull Request gut aussieht, abgesehen von kleinen Tippfehlern oder anderen kleineren Problemen, können Sie das Problem direkt beheben.
Sie können dies tun, vorausgesetzt, der Pull Request [wurde eingerichtet, um Änderungen zuzulassen](https://docs.github.com/en/pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork).
Es wird empfohlen, [Kommentare mit Vorschlägen](https://docs.github.com/en/pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request) zur Behebung kleinerer Probleme zu verwenden, da diese in einem Rutsch gesammelt und übernommen werden können.

Wenn Sie Ihre Überprüfung einreichen, haben Sie drei Optionen, **genehmigen**, **kommentieren** oder **Änderungen anfordern**.
Die folgenden Abschnitte erklären, wann jede Option zu verwenden ist.

### Änderungen anfordern

Verwenden Sie die Option „Änderungen anfordern“, wenn das von Ihnen bereitgestellte Feedback _bearbeitet_ werden muss, bevor der Pull Request vom Reviewer genehmigt und zusammengeführt werden kann.

#### Kommentar

Verwenden Sie die Kommentaroption, wenn Ihr Feedback nicht kritisch ist und keine erneute Überprüfung erfordert.
Kurz gesagt, Sie vertrauen darauf, dass der Autor und andere Reviewer gutes Urteilsvermögen einsetzen.

#### Genehmigen

Verwenden Sie die Genehmigungsoption, wenn alles gut aussieht und aus Ihrer Sicht bereit ist, zusammengeführt zu werden.
Nach Einreichung Ihrer Überprüfung können Sie den Pull Request sicher zusammenführen, wenn es keine anderen Reviewer oder ausstehenden Überprüfungskommentare zu bearbeiten gibt.

#### Was tun, wenn Sie feststecken

Wenn Sie eine Inhaltsänderung nicht verstehen oder das Gefühl haben, dass sie zu groß und komplex ist, um damit umzugehen, geraten Sie nicht in Panik!
Ein guter Ausgangspunkt ist, den Autor des Pull Request um Informationen zu bitten, die helfen.

Es ist selten, dass Sie aufgefordert werden, eine große, komplexe Inhaltsänderung ohne Vorwarnung zu überprüfen.
Wenn dies jedoch passiert, sollte die Pull Request-Beschreibung auf ein Issue verweisen, das die Hintergrundinformationen erklärt.

Wenn Sie sich dennoch unsicher sind oder den Eindruck haben, dass der Inhalt verdächtig ist, wenden Sie sich an das MDN Web Docs-Team und bitten Sie um Unterstützung.

### Richtlinien für Reaktionszeiten für Autoren und Reviewer

Dieser Abschnitt enthält Details zu den erwarteten Reaktionszeiten, während Sie auf Überprüfungskommentare reagieren, wenn Sie Autor eines Pull Request sind, und während Sie Pull Requests überprüfen, wenn Sie ein Reviewer sind.

- **Überprüfung**:
  Der Pull Request Reviewer sollte in der Lage sein, die Änderungen in 2 Wochen oder weniger zu überprüfen.
  Innerhalb von 2 Wochen nach dem Öffnen eines Pull Request kann der Reviewer:
  - Einen Kommentar hinterlassen, wann er mit der Überprüfung des Pull Request beginnen kann
  - Um technische oder ressourcenbezogene Hilfe bitten
- **Bearbeitung angeforderter Änderungen:**
  Der Autor des Pull Request sollte in der Lage sein, innerhalb von 4 Wochen oder weniger auf die Kommentare zu antworten oder diese zu beheben.
  Wenn der Autor des Pull Request nicht in der Lage ist, innerhalb dieser Zeit auf die Überprüfungskommentare zu reagieren oder diese zu beheben, kann der Reviewer eine der folgenden Maßnahmen ergreifen:
  - Die Änderungen übernehmen und den Pull Request zusammenführen
  - Den Pull Request schließen

### Externe Reviewer

Einige Pull Requests im MDN Content-Repo beziehen sich auf spezifische Arbeiten von Browseranbietern oder Organisationen mit festgelegten Autoren und Reviewern.
Der Autor wird in solchen Fällen den Benutzernamen des Reviewers in einer Zeile am Ende der Pull Request-Beschreibung einfügen, zum Beispiel:

```md
reviewer: @jpmedley
```

Wenn Sie eine Überprüfungsanfrage erhalten haben und mit einem anderen Rezensenten überschrieben wurden, wie oben beschrieben, überprüfen Sie die Änderungen nicht.
Sobald der im Beschreibungstext erwähnte Rezensent die Änderungen genehmigt hat, wird er eine Genehmigung anfordern, die von den `CODEOWNERS` erforderlich ist.

## Leseliste

Reviewern wird empfohlen, die folgenden Artikel zu lesen, um Hilfe bei häufigen Aufgaben zu erhalten:

- [Die Kunst des Schließens](https://blog.jessfraz.com/post/the-art-of-closing/) erklärt, wie man einen nicht abgeschlossenen oder abgelehnten Pull Request schließt
- [Code Review Richtlinien für den Reviewer](https://phauer.com/2018/code-review-guidelines/#code-reviews-guidelines-for-the-reviewer) bietet Beispiele für gutes und schlechtes Feedback
- [Wie man einen Code überprüft](https://google.github.io/eng-practices/review/reviewer/) auf google.github.io/eng-practices
