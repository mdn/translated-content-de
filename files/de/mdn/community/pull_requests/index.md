---
title: Einreichung und Überprüfung von Pull Requests
slug: MDN/Community/Pull_requests
l10n:
  sourceCommit: a90c5bb64149b34db5a004b479d3195490d1c5f5
---

Dieses Dokument beschreibt, wie Mitwirkende Änderungen an den MDN Web Docs vornehmen und wie diese Änderungen überprüft und auf die Website übernommen werden.
Inhaltliche Änderungen der MDN Web Docs umfassen:

- **Tägliche Verbesserungen** der Dokumentation von APIs, CSS-Eigenschaften, Plattform-Updates und Inhaltsergänzungen.
  Dies wird in der Regel von den MDN Web Docs Mitarbeitern, die für Mozilla, Google, Open Web Docs, Samsung arbeiten, durchgeführt, aber auch von Gemeinschafts-Freiwilligen.
- **Kleine Korrekturen** und Aktualisierungen der Website, um Tippfehler, grammatikalische Probleme und technische Ungenauigkeiten zu beheben.
  Diese Probleme werden normalerweise von den Lesern der MDN Web Docs gefunden.
- **Inhaltsbugfixes**, die in der Regel von Freiwilligen durchgeführt werden, um [Probleme im `mdn/content` Repository](https://github.com/mdn/content/issues) zu schließen.

Unabhängig davon, wie inhaltliche Änderungen vorgenommen werden, werden sie als Pull Requests auf GitHub eingereicht.
Die inhaltlichen Änderungen durchlaufen die folgenden Phasen, bevor sie auf den MDN Web Docs veröffentlicht werden:

1. **Änderungen einreichen:** Als Autor eines Pull Requests reichen Sie Änderungen ein, indem Sie einen Pull Request eröffnen.
   Siehe die Abschnitte [Bevor Sie anfangen](#bevor_sie_anfangen), [Einen Pull Request öffnen](#einen_pull_request_öffnen) und [Nachdem Sie einen Pull Request geöffnet haben](#nachdem_sie_einen_pull_request_geöffnet_haben), um mehr über unsere Prozesse zu erfahren.
2. **Änderungen überprüfen:** Ihre Änderungen werden von MDN-Mitgliedern und Freiwilligen überprüft.
   Siehe den Abschnitt [Pull-Request-Überprüfungsprozess](#pull-request-überprüfungsprozess) für weitere Details.
3. **Veröffentlichte Änderungen anzeigen:** Aktualisierte Inhalte im `mdn/content` werden innerhalb eines Tages nach dem Mergen durch einen Seitenneubau, der alle 24 Stunden stattfindet, live geschaltet.

## Einreichung von Änderungen

### Werte und Teilnahme

Wir möchten, dass MDN Web Docs eine einladende, freundliche Gemeinschaft ist, auf die wir alle stolz sein können.
Alle Teilnehmer müssen unseren [Community-Teilnahmerichtlinien](/de/docs/MDN/Community/Community_Participation_Guidelines) folgen, die von den [Mozilla Community Participation Guidelines](https://www.mozilla.org/en-US/about/governance/policies/participation/) abgeleitet sind.
Seien Sie höflich und konstruktiv, wenn Sie Pull Requests eröffnen, Überprüfungskommentare schreiben und mit dem Autor des Pull Requests oder anderen Mitgliedern der Community interagieren.
Wenn Sie oder jemand anderes ein Verhalten erlebt hat, das potenziell illegal ist oder Sie unsicher, unwillkommen oder unwohl fühlen lässt, ermutigen wir Sie, es zu [melden](/de/docs/MDN/Community/Community_Participation_Guidelines#how_to_report).

### Bevor Sie anfangen

Bevor Sie mit der Arbeit an MDN beginnen, sollten Sie die unten aufgeführten Empfehlungen und Richtlinien durchgehen.

**Pull Requests müssen ein bestehendes Problem lösen oder teilweise beheben.**
Der Grund für diese Einschränkung ist, dass wir vermeiden möchten, dass Sie mit einer Aufgabe beginnen, an der möglicherweise bereits jemand anderes arbeitet.
Durchsuchen Sie die Issues und Pull Requests im [MDN-Repository](https://github.com/orgs/mdn/repositories), zu dem Sie beitragen möchten, und bestätigen Sie, dass die Arbeit, die Sie beginnen möchten, nicht bereits bearbeitet wird.
Wenn Sie beabsichtigen, zum MDN-Projekt beizutragen, werden Sie sich in einer der folgenden Situationen wiederfinden:

- **Wenn Sie zum Projekt beitragen möchten**, können Sie Aufgaben unter 'Issues' in einem der [MDN-GitHub-Repositories](https://github.com/orgs/mdn/repositories) finden (zum Beispiel in den [`mdn/content` Issues](https://github.com/mdn/content/issues)) und in unseren [öffentlichen GitHub-Projektboards](https://github.com/orgs/mdn/projects).
  Stellen Sie sicher, dass das Issue niemandem zugewiesen ist und niemand bereits einen Pull Request für die Aufgabe eröffnet hat.
  Mit `good first issue` gekennzeichnete Issues sind ein guter Ausgangspunkt.

- **Wenn Sie ein Problem auf MDN gefunden haben**, sollten Sie zuerst ein Issue eröffnen.
  **Issues benötigen eine Antwort von den Betreuern, bevor Sie mit der Arbeit beginnen**, damit Sie wissen, dass ein durch einen Pull Request angesprochenes Problem gültig ist und Ihr Pull Request akzeptiert wird.
  Weitere Informationen zu Issues finden Sie auf unseren [Communities-Seiten für GitHub-Issues](https://github.com/mdn/mdn/issues/new?labels=proposal%2Cneeds+triage&template=content-or-feature-suggestion.yml&title=Enter+your+proposal+here).

- **Wenn Sie neuen Inhalt oder eine neue Funktion vorschlagen möchten**, reichen Sie einen Vorschlag durch die Vorlage 'Neuer Inhalt oder Funktionsvorschlag' [GitHub-Issue-Vorlage](https://github.com/mdn/mdn/issues/new/choose) ein.

Wenn Sie sich nicht sicher sind, wo Sie anfangen sollen, kontaktieren Sie uns auf [dem Discord-Server](/discord) und bitten Sie um Feedback.

### Einen Pull Request öffnen

Wenn Sie bereit sind, einen Pull Request zu öffnen, befolgen Sie diese Richtlinien:

- **Pull Requests sollten kurz und auf ein Problem fokussiert sein:** Wenn möglich, gruppieren Sie zusammengehörige Änderungssets in mehrere, kleine Pull Requests.
  Wenn ein Pull Request zu groß wird, kann der Prüfer ihn schließen und von Ihnen verlangen, Pull Requests für jeden logischen Satz von zusammengehörigen Änderungen einzureichen.
- **Fügen Sie eine Beschreibung der Änderungen hinzu:** Geben Sie so viel Kontext und Begründung für den Pull Request wie möglich an.
- **Fügen Sie den Link zu dem Issue hinzu, das Sie schließen:** Fügen Sie in der Beschreibung des Pull Requests 'Fixes' hinzu, wenn es das Problem vollständig löst, oder 'Relates to', wenn es sich um ein verwandtes Problem handelt.
  Weitere Informationen zum Verlinken von Issues in Pull Requests finden Sie in den [GitHub-Dokumenten](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword).
- **Fügen Sie 'depends on'** mit einem Link zu einer Abhängigkeit hinzu, wenn es Pull Requests gibt, die zuerst gemergt werden müssen (z. B. Codebeispiele in anderen Repositories).
- **Begleiten Sie Änderungen an Codebeispielen mit Inhaltsänderungen:** Dies ist wichtig, um sicherzustellen, dass aktualisierte Beispiele korrekt bereitgestellt werden.
  Wenn Sie Inhaltsänderungen vornehmen, die die Nutzung von Beispielen betreffen, sollten die zugehörigen Codebeispiele ebenfalls aktualisiert werden.
- **Fügen Sie einen Prüfer hinzu:** Sie können einen Prüfer, wie ein Teammitglied oder einen Themenverantwortlichen, hinzufügen, wenn Sie bereits wissen, wer Ihren Pull Request überprüfen sollte.
- **Nehmen Sie keine reinen Grammatikänderungen vor:**
  MDN Web Docs enthält technische Dokumentation; Sie sollten keine Änderungen des Prosastils vorschlagen, es sei denn, die Grammatik ist falsch.
- **Fügen Sie nicht unnötigerweise Zeilenumbrüche hinzu oder entfernen Sie diese nicht** auf Seiten, die einem bestimmten Formatierungsstil folgen.

### Nachdem Sie einen Pull Request geöffnet haben

- **Gehen Sie mit CI-Fehlern um**, die von den automatisierten Tests, die als GitHub Actions ausgeführt werden (siehe `.github/workflows`), gemeldet werden.
  Wenn einer oder mehrere dieser Tests fehlschlagen, liegt es in Ihrer Verantwortung, sie zu lösen.
  Wenn Sie nicht wissen, wie Sie die zugrunde liegenden Probleme lösen können, bitten Sie um Hilfe.
- **Lösen Sie Merge-Konflikte** mit dem Hauptbranch; Sie sind dafür verantwortlich, diese zu lösen.
  Sie können dies tun, indem Sie den `mdn/main` Branch in Ihren Branch mergen.
  Weitere Informationen finden Sie in der GitHub-Dokumentation zum [aktuellen Stand Ihres Branches halten](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch#about-keeping-your-pull-request-in-sync).
- **Seien Sie reaktionsschnell auf Feedback.**
  Das bedeutet, dass Sie bereit sein sollten, Änderungen am Pull Request basierend auf der Überprüfung vorzunehmen.
  Wenn eine Überprüfung stattfindet und die Änderungen nicht vorgenommen werden, kann der Pull Request geschlossen werden.
- **Seien Sie geduldig während des Überprüfungsprozesses.**
  Die MDN-Organisation erhält eine große Menge an Pull Requests, und das Team benötigt möglicherweise Zeit, um Ihre Beiträge zu überprüfen.
- **Öffnen Sie geschlossene Pull Requests nicht erneut.**
  Wenn Sie einen neuen Pull Request erstellen müssen, kann er sich auf den geschlossenen beziehen.

## Pull-Request-Überprüfungsprozess

Prüfer werden automatisch zugewiesen, wenn Sie einen Pull Request basierend auf einer `CODEOWNERS`-Datei öffnen, aber wenn es eine bestimmte Person gibt, von der Sie eine Überprüfung anfordern möchten, können Sie [manuell eine Überprüfung anfordern](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review).
Wir verwenden auch automatische Kennzeichnung von Pull Requests, um uns bei der Priorisierung zu helfen.
Betreuer können Pull Requests weiter priorisieren und zusätzliche Labels wie `needs-info` oder `on-hold` hinzufügen, falls erforderlich und basierend auf dem Kontext.

Wenn Sie einen Pull Request überprüfen möchten, aber nicht als Prüfer aufgeführt sind, können Sie sich selbst als Prüfer hinzufügen.
Es ist höflich, zuerst bei den bestehenden Prüfern nachzufragen, indem Sie in den Pull Request kommentieren, dass Sie beabsichtigen, eine Überprüfung zu starten.

### Prüfer und Beauftragte

Das MDN Web Docs Team verwendet Prüfer und Beauftragte, um den Status von Pull Requests zu verfolgen.

- **Prüfer** sind Personen, die die Änderungen im Pull Request bewerten und Feedback für den Autor bereitstellen.
- **Beauftragte** sind Personen, die verantwortlich sind, sicherzustellen, dass der Pull Request nicht blockiert wird.
  Nicht alle Pull Requests haben Beauftragte, aber wenn sie es tun, sind sie dafür verantwortlich, sicherzustellen, dass der Pull Request Fortschritte macht.
  Ein Beauftragter hilft, die Arbeit zu einem Abschluss zu bringen, entweder durch Mergen, Schließen oder durch Ausführung von Arbeiten zur Aufhebung der Blockierung selbst.

Ein Pull-Request-Prüfer oder Beauftragter ist verantwortlich für das Mergen der Änderungen.

Bevor Sie mit einer Überprüfung beginnen, überprüfen Sie die Beschreibung des Pull Requests, um sicherzustellen, dass niemand spezifisches ihn überprüfen sollte.
Stellen Sie sicher, dass alle kontinuierlichen Integrationsaufgaben (CI) erfolgreich abgeschlossen wurden und dass keine Merge-Konflikte vorhanden sind.

Wenn Aufgaben fehlschlagen oder Merge-Konflikte bestehen, teilen Sie dies dem Autor mit; es liegt in seiner Verantwortung, diese anzugehen.
Sie können den Autor als **Beauftragten** setzen, um anzuzeigen, dass ein Pull Request ihre Aufmerksamkeit benötigt, bevor eine Überprüfung starten kann.
Lassen Sie dem Autor die Möglichkeit, um Hilfe zu bitten, insbesondere neuen Mitwirkenden am Projekt.

### Überprüfung eines Pull Requests

Bezüglich der Änderungen in einem Pull Request müssen Inhalte und Prosa dem [MDN-Schreibstil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide) und Beispielcode dem [Code-Stil-Leitfaden](/de/docs/MDN/Writing_guidelines/Code_style_guide) entsprechen.

Wenn Sie einen Pull Request überprüfen, sollten Sie:

- **Einen Kommentar hinzufügen** zum Pull Request, um dem Autor mitzuteilen, dass Sie sich des Pull Requests bewusst sind und mit der Überprüfung beginnen.
  Dies soll Fälle vermeiden, in denen jemand anderes gleichzeitig mit der Überprüfung des Pull Requests beginnt, ohne dass es notwendig ist.
- **Den Umfang der Überprüfung** auf die Änderungen im Pull Request beschränken.
  Öffnen Sie ein Folge-Issue oder Pull Request, um weitere Verbesserungen anzugehen, die nicht durch den Pull Request abgedeckt werden.
- **Um Hilfe bitten** und das Label `review-help-needed` hinzufügen, wenn Sie technische Unterstützung bei der Überprüfung benötigen.
- **Pull Requests mit unzusammenhängenden Änderungen schließen**, falls es zu komplex ist oder mehrere unzusammenhängende Änderungen enthält.
  In solchen Fällen bitten Sie den Pull Request-Autor, ihre Änderungen in kleineren Teilen einzureichen.
- **Lastenausgleich anfordern**, wenn Sie ausgelastet sind und keine Kapazitäten für die Überprüfung haben.
  Markieren Sie das `@core-yari-content` Team und bitten Sie, ob jemand anderes einspringen kann.
- **Nicht mergen, solange 'depends on'** Pull Requests nicht zuerst gemergt werden.
- **Keine Pull Requests mergen, die fehlerhafte Tests aufweisen.**
  Es ist guter [Open-Source-Etikette](/de/docs/MDN/Community/Open_source_etiquette), den `main` Branch stabil zu halten, um Unterbrechungen für Mitwirkende, Betreuer und automatisierte Prozesse zu vermeiden.
  Ein instabiler `main` Branch blockiert alle anderen Pull Requests und erschwert es anderen, Beiträge zu überprüfen und zu mergen.
  Darüber hinaus erhalten Mitwirkende, die Repositories beobachten, große Mengen an Benachrichtigungen, und unnötige Geräusche, die durch fehlerhafte Tests verursacht werden, können frustrierend sein.
  Wenn Sie nicht sicher sind, wie Sie die fehlerhaften Tests beheben können, [bitten Sie um Hilfe](/de/docs/MDN/Community/Communication_channels) oder weisen Sie den Pull Request jemand anderem zu.

Wenn ein Pull Request abgesehen von kleinen Tippfehlern oder anderen kleineren Problemen gut aussieht, können Sie das Problem direkt beheben.
Sie können dies tun, vorausgesetzt, dass der Pull Request [zum Zulassen von Änderungen eingerichtet wurde](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork).
Es wird empfohlen, [Kommentare mit Vorschlägen](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request) für die Behebung kleiner Probleme zu verwenden, da diese in einem Rutsch zusammengeführt und übernommen werden können.

Wenn Sie Ihre Überprüfung einreichen, haben Sie drei Optionen: **genehmigen**, **kommentieren** oder **Änderungen anfordern**.
Die folgenden Abschnitte erklären, wann welche Option zu verwenden ist.

### Änderungen anfordern

Verwenden Sie die Option "Änderungen anfordern", wenn das von Ihnen gegebene Feedback _von_ dem Autor angesprochen und vom Prüfer erneut überprüft werden _muss_, bevor der Pull Request genehmigt und gemergt werden kann.

#### Kommentieren

Verwenden Sie die Kommentaroption, wenn Ihr Feedback nicht kritisch ist und keine erneute Überprüfung erfordert.
Kurz gesagt, Sie vertrauen dem Autor und anderen Prüfern, dass sie gutes Urteilsvermögen walten lassen.

#### Genehmigen

Verwenden Sie die Genehmigungsoption, wenn alles gut aussieht und bereit zum Mergen aus Ihrer Perspektive ist.
Nach dem Einreichen Ihrer Überprüfung können Sie den Pull Request sicher mergen, wenn es keine anderen Prüfer oder ausstehenden Überprüfungskommentare gibt, die angesprochen werden müssen.

#### Was tun, wenn Sie feststecken

Wenn Sie eine Inhaltsänderung nicht verstehen oder das Gefühl haben, dass sie zu groß und komplex für Sie ist, geraten Sie nicht in Panik!
Ein guter Anfang ist, Informationen vom Pull Request-Autor anzufordern, um Ihnen zu helfen.

Es ist selten, dass Sie gezwungen sind, eine große, komplexe Inhaltsänderung ohne Vorwarnung zu überprüfen.
Sollte dies jedoch der Fall sein, sollte die Pull Request-Beschreibung auf ein Issue verweisen, das die Hintergrundinformationen erklärt.

Wenn Sie sich immer noch unsicher sind oder die Inhalte verdächtig erscheinen, wenden Sie sich an das MDN Web Docs Team und bitten Sie um Hilfe.

### Richtlinien für Bearbeitungszeiten für Autoren und Prüfer

Dieser Abschnitt liefert Details zu den erwarteten Bearbeitungszeiten beim Beantworten von Überprüfungskommentaren, wenn Sie ein Pull Request-Autor sind, und beim Überprüfen von Pull Requests, wenn Sie ein Prüfer sind.

- **Überprüfen:**
  Der Pull Request-Prüfer sollte in der Lage sein, die Änderungen innerhalb von 2 Wochen oder weniger zu überprüfen.
  In den 2 Wochen nach Öffnen des Pull Requests kann der Prüfer:
  - Einen Kommentar hinterlassen, wann er mit der Überprüfung des Pull Requests beginnen kann
  - Um technische oder ressourcenbezogene Hilfe bitten
- **Angeforderte Änderungen bearbeiten:**
  Der Pull Request-Autor sollte in der Lage sein, die Kommentare innerhalb von 4 Wochen oder weniger zu beantworten oder zu beheben.
  Wenn der Pull Request-Autor nicht in der Lage ist, die Überprüfungskommentare in dieser Zeit zu beantworten oder zu beheben, kann der Prüfer eine der folgenden Maßnahmen ergreifen:
  - Die Änderungen übernehmen und den Pull Request mergen
  - Den Pull Request schließen

### Externe Prüfer

Einige Pull Requests im MDN Content-Repository beziehen sich auf spezifische Arbeiten von Browseranbietern oder Organisationen mit definierten Autoren und Prüfern.
Der Autor wird in diesen Fällen den Benutzernamen des Prüfers in einer Zeile am Ende der Beschreibung des Pull Requests angeben, zum Beispiel:

```md
reviewer: @jpmedley
```

Wenn Sie eine Überprüfungsanfrage erhalten und Sie mit einem anderen Prüfer auf die oben beschriebene Weise überschrieben wurden, überprüfen Sie die Änderungen nicht.
Sobald der in der Beschreibung erwähnte Prüfer die Änderungen genehmigt hat, wird er eine Genehmigung vom `CODEOWNERS` einholen.

## Leseliste

Prüfer werden ermutigt, die folgenden Artikel zu lesen, um Hilfe bei häufigen Aufgaben zu erhalten:

- [The Art of Closing](https://blog.jessfraz.com/post/the-art-of-closing/) erklärt, wie man einen unfertigen oder abgelehnten Pull Request schließt
- [Kindness and Code Reviews: Improving the Way We Give Feedback](https://product.voxmedia.com/2018/8/21/17549400/kindness-and-code-reviews-improving-the-way-we-give-feedback) gibt nützliche Tipps zur Rückmeldung
- [Code Review Guidelines for the Reviewer](https://phauer.com/2018/code-review-guidelines/#code-reviews-guidelines-for-the-reviewer) liefert Beispiele für gutes und schlechtes Feedback
- [How to do a code review](https://google.github.io/eng-practices/review/reviewer/) auf google.github.io/eng-practices
