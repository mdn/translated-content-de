---
title: Übermittlung und Überprüfung von Pull-Requests
slug: MDN/Community/Pull_requests
l10n:
  sourceCommit: f8ef875113a7d3e9952f41de68be1e3a3a1e6988
---

Dieses Dokument beschreibt, wie Mitwirkende Änderungen an den MDN Web Docs vornehmen und wie diese Änderungen überprüft und auf der Website veröffentlicht werden.
Inhaltsänderungen an den MDN Web Docs umfassen:

- **Tägliche Verbesserungen** zur Dokumentation von APIs, CSS-Eigenschaften, Plattform-Updates und Inhaltsergänzungen.
  Dies wird in der Regel von Mitarbeitern der MDN Web Docs von Mozilla, Google, Open Web Docs, Samsung, aber auch von Community-Freiwilligen durchgeführt.
- **Kleine Korrekturen** und kleine Updates auf der Seite zur Behebung von Tippfehlern, grammatikalischen Problemen und technischen Ungenauigkeiten.
  Diese Probleme werden normalerweise von Lesern der MDN Web Docs gefunden.
- **Content-Bugfixes**, die in der Regel von Freiwilligen durchgeführt werden, um [Probleme im `mdn/content`-Repository](https://github.com/mdn/content/issues) zu schließen.

Unabhängig davon, wie Inhaltsänderungen vorgenommen werden, werden sie als Pull-Requests auf GitHub eingereicht.
Die Inhaltsänderungen durchlaufen die folgenden Phasen, bevor sie auf den MDN Web Docs veröffentlicht werden:

1. **Übermittlung von Änderungen:** Als Autor eines Pull-Requests übermitteln Sie Änderungen, indem Sie einen Pull-Request öffnen.
   Siehe die Abschnitte [Bevor Sie anfangen](#bevor_sie_anfangen), [Einen Pull-Request öffnen](#einen_pull-request_öffnen) und [Nachdem Sie einen Pull-Request geöffnet haben](#nachdem_sie_einen_pull-request_geöffnet_haben), um mehr über unsere Prozesse zu erfahren.
2. **Überprüfung von Änderungen:** Ihre Änderungen werden von MDN-Mitgliedern und Freiwilligen überprüft.
   Weitere Details finden Sie im Abschnitt [Pull-Request-Überprüfungsprozess](#pull-request-überprüfungsprozess).
3. **Anzeigen veröffentlichter Änderungen:** Aktualisierter Inhalt auf `mdn/content` wird innerhalb eines Tages nach dem Zusammenführen durch einen täglichen Website-Neuaufbau live geschaltet.

## Übermittlung von Änderungen

### Werte und Teilnahme

Wir möchten, dass die MDN Web Docs eine einladende, freundliche Gemeinschaft sind, auf die wir alle stolz sein können.
Alle Teilnehmer müssen unsere [Richtlinien zur Beteiligung an der Gemeinschaft](/de/docs/MDN/Community/Community_Participation_Guidelines) befolgen, die von [Mozillas Richtlinien zur Beteiligung an der Gemeinschaft](https://www.mozilla.org/en-US/about/governance/policies/participation/) abgeleitet sind.
Seien Sie höflich und konstruktiv, wenn Sie Pull-Requests öffnen, Überprüfungskommentare schreiben und mit dem Autor des Pull-Requests oder anderen Mitgliedern der Gemeinschaft interagieren.
Wenn Sie oder jemand anderes ein Verhalten erlebt, das möglicherweise illegal ist oder Sie sich unsicher, unwillkommen oder unwohl fühlen lässt, ermutigen wir Sie, es zu [melden](/de/docs/MDN/Community/Community_Participation_Guidelines#reporting_process).

### Bevor Sie anfangen

Bevor Sie mit der Arbeit an MDN beginnen, sollten Sie die unten aufgeführten Empfehlungen und Richtlinien durchgehen.

**Pull-Requests müssen ein bestehendes Problem lösen oder teilweise lösen.**
Der Grund, warum wir diese Einschränkung haben, ist, dass wir vermeiden möchten, dass Sie mit einer Aufgabe beginnen, an der möglicherweise bereits jemand anderes arbeitet.
Suchen Sie nach Problemen und Pull-Requests im [MDN-Repository](https://github.com/orgs/mdn/repositories), zu dem Sie beitragen möchten, und bestätigen Sie, dass an der Arbeit, die Sie beginnen möchten, noch nicht gearbeitet wird.
Wenn Sie beabsichtigen, zum MDN-Projekt beizutragen, befinden Sie sich in einer der folgenden Situationen:

- **Wenn Sie zum Projekt beitragen möchten**, können Sie Aufgaben unter "Issues" in einem der [MDN-GitHub-Repositories](https://github.com/orgs/mdn/repositories) (zum Beispiel [`mdn/content`-Issues](https://github.com/mdn/content/issues)) und unseren [öffentlichen GitHub-Projekttafeln](https://github.com/orgs/mdn/projects) finden.
  Stellen Sie sicher, dass das Problem niemandem zugewiesen ist und niemand bereits einen Pull-Request für die Aufgabe geöffnet hat.
  Mit dem Label `good first issue` gekennzeichnete Probleme sind ein guter Ausgangspunkt.

- **Wenn Sie ein Problem auf MDN gefunden haben**, sollten Sie zuerst ein Issue öffnen.
  **Issues benötigen eine Rückmeldung von den Betreuern, bevor Sie mit der Arbeit beginnen**, damit Sie wissen, dass ein Problem, das durch einen Pull-Request angesprochen wird, gültig ist und dass Ihr Pull-Request akzeptiert wird.
  Weitere Informationen zu Issues finden Sie auf unseren [Community-Seiten für GitHub-Issues](https://github.com/mdn/mdn/issues/new?labels=proposal%2Cneeds+triage&template=content-or-feature-suggestion.yml&title=Enter+your+proposal+here).

- **Wenn Sie neue Inhalte oder ein neues Feature vorschlagen möchten**, reichen Sie einen Vorschlag über die Vorlage "Neuer Inhalt oder Feature-Vorschlag" für GitHub-Issues ein.

Wenn Sie sich nicht sicher sind, wo Sie anfangen sollen, treten Sie unserem [Discord-Server](/discord) bei und fragen Sie nach Feedback.

### Einen Pull-Request öffnen

Wenn Sie bereit sind, einen Pull-Request zu öffnen, folgen Sie diesen Richtlinien:

- **Pull-Requests sollten kurz und auf ein Problem fokussiert sein:** Gruppieren Sie nach Möglichkeit zusammenhängende Änderungen in mehrere, kleine Pull-Requests.
  Wenn ein Pull-Request zu groß wird, kann der Prüfer ihn schließen und Sie bitten, Pull-Requests für jede logische Gruppe von Änderungen zu senden, die zusammengehören.
- **Fügen Sie eine Beschreibung der Änderungen hinzu:** Stellen Sie so viel Kontext und Begründung für den Pull-Request wie möglich bereit.
- **Fügen Sie den Link zum Problem hinzu, das Sie schließen:** In der Pull-Request-Beschreibung fügen Sie 'Fixes' hinzu, wenn es das Problem vollständig löst, oder 'Relates to', wenn es ein verwandtes Problem ist.
  Weitere Informationen zum Verlinken von Issues in Pull-Requests finden Sie in den [GitHub-Dokumenten](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword).
- **Fügen Sie 'depends on'** mit einem Link zu einer Abhängigkeit hinzu, wenn es Pull-Requests gibt, die zuerst zusammengeführt werden müssen (z. B. Codebeispiele in anderen Repositories).
- **Begleiten Sie Änderungen an Codebeispielen mit Inhaltsänderungen:** Dies ist wichtig, um sicherzustellen, dass aktualisierte Beispiele korrekt bereitgestellt werden.
  Wenn Sie Inhaltsänderungen vornehmen, die beeinflussen, wie Beispiele verwendet werden, sollten die zugehörigen Codebeispiele ebenfalls aktualisiert werden.
- **Fügen Sie einen Prüfer hinzu:** Sie können einen Prüfer, wie ein Teammitglied oder einen Themenverantwortlichen, hinzufügen, wenn Sie bereits wissen, wer Ihren Pull-Request überprüfen sollte.
- **Machen Sie keine Änderungen nur zur Grammatik:**
  Die MDN Web Docs enthalten technische Dokumentation; Sie sollten keine Änderungen am Prosa-Stil vorschlagen, außer wenn die Grammatik falsch ist.
- **Fügen Sie keine Zeilenumbrüche unnötig hinzu oder entfernen Sie sie** auf Seiten, die einem bestimmten Formatierungsstil folgen.

### Nachdem Sie einen Pull-Request geöffnet haben

- **Behandeln Sie CI-Fehler** der automatisierten Tests, die als GitHub-Actions ausgeführt werden (siehe `.github/workflows`).
  Wenn ein oder mehrere dieser Tests fehlschlagen, liegt es in Ihrer Verantwortung, zu versuchen, sie zu lösen.
  Wenn Sie nicht wissen, wie Sie die zugrunde liegenden Probleme lösen können, fragen Sie nach Hilfe.
- **Lösen Sie Merge-Konflikte** mit dem Hauptzweig; Sie sind dafür verantwortlich, diese zu lösen.
  Sie können dies tun, indem Sie den `mdn/main`-Zweig in Ihren Zweig zusammenführen.
  Weitere Informationen finden Sie in den GitHub-Dokumentationen zum [Aktuell halten Ihres Zweiges](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch#about-keeping-your-pull-request-in-sync).
- **Seien Sie reaktionsfähig auf Feedback.**
  Dies bedeutet, dass Sie bereit sein sollten, Änderungen am Pull-Request basierend auf der Überprüfung vorzunehmen.
  Wenn eine Überprüfung stattfindet und die Änderungen nicht vorgenommen werden, kann der Pull-Request geschlossen werden.
- **Seien Sie geduldig während des Überprüfungsprozesses.**
  Die MDN-Organisation erhält eine große Menge an Pull-Requests und das Team benötigt möglicherweise Zeit, um Ihre Beiträge zu überprüfen.
- **Öffnen Sie keine geschlossenen Pull-Requests erneut.**
  Wenn Sie einen neuen Pull-Request erstellen müssen, kann er auf den geschlossenen Bezug nehmen.

## Pull-Request-Überprüfungsprozess

Prüfer werden automatisch zugewiesen, wenn Sie einen Pull-Request basierend auf einer `CODEOWNERS`-Datei öffnen, aber wenn es eine bestimmte Person gibt, von der Sie eine Überprüfung anfordern möchten, können Sie [manuell eine Überprüfung anfordern](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review).
Wir verwenden auch automatische Etikettierung auf Pull-Requests, um bei der Kategorisierung zu helfen.
Betreuer können Pull-Requests weiter klassifizieren und alle zusätzlichen Etiketten hinzufügen, wie `needs-info` oder `on-hold`, wenn dies basierend auf dem Kontext erforderlich ist.

Wenn Sie einen Pull-Request überprüfen möchten, aber nicht als Prüfer aufgeführt sind, können Sie sich selbst als solcher hinzufügen.
Es ist höflich, zuerst bei den vorhandenen Prüfern nachzusehen, indem Sie einen Kommentar im Pull-Request hinterlassen, dass Sie beabsichtigen, mit der Überprüfung zu beginnen.

### Prüfer und Zuweisungen

Das MDN Web Docs-Team verwendet Prüfer und Zuweisungen, um den Status von Pull-Requests zu verfolgen.

- **Prüfer** sind Personen, die die Änderungen im Pull-Request bewerten und dem Autor Feedback geben.
- **Zuweisungen** sind Personen, die sicherstellen, dass der Pull-Request nicht blockiert wird.
  Nicht alle Pull-Requests haben Zuweisungen, aber wenn sie es tun, sind sie dafür verantwortlich, dass der Pull-Request voranschreitet.
  Ein Zuweisungsbeauftragter hilft, die Arbeit zu einem Abschluss zu bringen, entweder durch Zusammenführen, Schließen oder durch das selbstständige Entfernen von Blockaden.

Ein Prüfer oder Zuweisungsbeauftragter für einen Pull-Request ist verantwortlich für das Zusammenführen der Änderungen.

Bevor Sie mit einer Überprüfung beginnen, überprüfen Sie die Beschreibung des Pull-Requests, um sicherzustellen, dass keine bestimmte Person ihn überprüfen sollte.
Stellen Sie sicher, dass alle Aufgaben der kontinuierlichen Integration (CI) erfolgreich abgeschlossen sind und dass keine Merge-Konflikte vorliegen.

Wenn eine Aufgabe fehlschlägt oder es Merge-Konflikte gibt, kommunizieren Sie dies dem Autor; es liegt in seiner Verantwortung, diese zu beheben.
Sie können den Autor als **Zuweisungsbeauftragten** festlegen, um anzuzeigen, dass ein Pull-Request vor einer Überprüfung seine Aufmerksamkeit erfordert.
Lassen Sie dem Autor die Möglichkeit, um Hilfe zu bitten, insbesondere neuen Mitwirkenden an dem Projekt.

### Überprüfung eines Pull-Requests

Wenn es um die Änderungen in einem Pull-Request geht, müssen Inhalt und Prosa dem [MDN-Stil-Leitfaden für das Schreiben](/de/docs/MDN/Writing_guidelines/Writing_style_guide) folgen und Beispielcode dem [Code-Stil-Leitfaden](/de/docs/MDN/Writing_guidelines/Code_style_guide).

Wenn Sie einen Pull-Request überprüfen, sollten Sie:

- **Fügen Sie einen Kommentar** im Pull-Request hinzu, um den Autor wissen zu lassen, dass Sie sich des Pull-Requests bewusst sind und mit der Überprüfung beginnen werden.
  Dies soll verhindern, dass jemand anderes gleichzeitig unnötigerweise mit der Überprüfung beginnt.
- **Begrenzen Sie den Umfang der Überprüfung** nur auf die Änderungen im Pull-Request.
  Öffnen Sie ein Folge-Issue oder einen Pull-Request, um andere Verbesserungen, die durch den Pull-Request nicht abgedeckt werden, zu adressieren.
- **Fragen Sie nach Hilfe** und fügen Sie das Label `review-help-needed` hinzu, wenn Sie technische Unterstützung bei der Überprüfung benötigen.
- **Schließen Sie Pull-Requests mit nicht zusammenhängenden Änderungen**, wenn sie zu komplex sind oder mehrere nicht verwandte Änderungen enthalten.
  Bitten Sie in solchen Fällen den Autor des Pull-Requests, seine Änderungen in kleineren Teilen einzureichen.
- **Fordern Sie eine Lastenverteilung an**, wenn Ihre Kapazitäten erschöpft sind und Sie keine Bandbreite für die Überprüfung haben.
  Markieren Sie das `@core-yari-content`-Team und fragen Sie, ob jemand anderes einspringen kann.
- **Führen Sie keine 'depends on'-Pull-Requests zusammen**, bevor diese zusammengeführt wurden.
- **Führen Sie keine Pull-Requests zusammen, die fehlerhafte Tests haben.**
  Es ist [open source Etikette](/de/docs/MDN/Community/Open_source_etiquette), den `main`-Zweig stabil zu halten, um Störungen für Mitwirkende, Betreuer und automatisierte Prozesse zu vermeiden.
  Ein instabiler `main`-Zweig blockiert alle anderen Pull-Requests und erschwert es anderen, Beiträge zu überprüfen und zusammenzuführen.
  Darüber hinaus erhalten Mitwirkende, die Repositories beobachten, eine große Menge an Benachrichtigungen, und unnötiger Lärm durch fehlerhafte Tests kann frustrierend sein.
  Wenn Sie sich nicht sicher sind, wie Sie fehlerhafte Tests beheben sollen, [fragen Sie nach Hilfe](/de/docs/MDN/Community/Communication_channels) oder weisen Sie den Pull-Request jemand anderem zu.

Wenn ein Pull-Request abgesehen von kleinen Tippfehlern oder anderen kleineren Problemen gut aussieht, können Sie das Problem direkt beheben.
Sie können dies tun, sofern der Pull-Request [für Änderungen eingerichtet wurde](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork), um Änderungen zuzulassen.
Es wird empfohlen, [Kommentare mit Vorschlägen](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request) zu verwenden, um kleinere Probleme zu beheben, da sie gebündelt und in einem Rutsch übernommen werden können.

Wenn Sie Ihre Überprüfung einreichen, haben Sie drei Optionen: **Genehmigen**, **Kommentieren** oder **Änderungen anfordern**.
Die folgenden Abschnitte erklären, wann welche Option verwendet werden sollte.

### Änderungen anfordern

Verwenden Sie die Option "Änderungen anfordern", wenn das Feedback, das Sie gegeben haben, vom Autor **angesprochen** und von dem Prüfer **erneut überprüft** werden muss, bevor der Pull-Request genehmigt und zusammengeführt werden kann.

#### Kommentieren

Verwenden Sie die Option "Kommentieren", wenn Ihr Feedback nicht kritisch ist und keine erneute Überprüfung erfordert.
Kurz gesagt, Sie vertrauen dem Autor und anderen Prüfern auf ihr gutes Urteilsvermögen.

#### Genehmigen

Verwenden Sie die Option "Genehmigen", wenn alles aus Ihrer Sicht gut aussieht und bereit ist, zusammengeführt zu werden.
Nachdem Sie Ihre Überprüfung eingereicht haben, können Sie den Pull-Request sicher zusammenführen, wenn es keine anderen Prüfer oder ausstehenden Überprüfungskommentare gibt, die adressiert werden müssen.

#### Was tun, wenn Sie stecken bleiben

Wenn Sie eine Inhaltsänderung nicht verstehen oder das Gefühl haben, dass sie zu groß und komplex ist, um sie zu handhaben, keine Panik!
Ein guter Ausgangspunkt ist, Informationen vom Autor des Pull-Requests zu erbeten, die Ihnen helfen könnten.

Es ist selten, dass Sie darum gebeten werden, eine große, komplexe Inhaltsänderung ohne Vorwarnung zu überprüfen.
Wenn dies jedoch passiert, sollte die Pull-Request-Beschreibung auf ein Issue verlinken, das die Hintergrundinformationen erklärt.

Wenn Sie sich immer noch nicht sicher sind oder wenn Sie den Inhalt verdächtig finden, wenden Sie sich an das MDN Web Docs-Team und fragen Sie um Hilfe.

### Richtlinien für Bearbeitungszeiten für Autoren und Prüfer

Dieser Abschnitt bietet Details zu den erwarteten Bearbeitungszeiten beim Beantworten von Überprüfungskommentaren, wenn Sie ein Autor eines Pull-Requests sind, und beim Überprüfen von Pull-Requests, wenn Sie ein Prüfer sind.

- **Überprüfung**:
  Der Prüfer eines Pull-Requests sollte in der Lage sein, die Änderungen innerhalb von 2 Wochen oder weniger zu überprüfen.
  In den 2 Wochen, nachdem ein Pull-Request geöffnet wurde, kann der Prüfer:
  - Einen Kommentar hinterlassen, wann er mit der Überprüfung des Pull-Requests beginnen kann
  - Technische oder Ressourcenerleichterung erbitten
- **Bearbeitung der angeforderten Änderungen:**
  Der Autor des Pull-Requests sollte in der Lage sein, die Kommentare innerhalb von 4 Wochen oder weniger zu beantworten oder zu beheben.
  Wenn der Autor des Pull-Requests nicht in der Lage ist, die Überprüfungskommentare in dieser Zeit zu beantworten oder zu beheben, kann der Prüfer eine der folgenden Maßnahmen ergreifen:
  - Die Änderungen übernehmen und den Pull-Request zusammenführen
  - Den Pull-Request schließen

### Externe Prüfer

Einige Pull-Requests im MDN-Content-Repo betreffen spezifische Arbeiten von Browser-Herstellern oder Organisationen mit definierten Autoren und Prüfern.
Der Autor wird in diesen Fällen den Benutzernamen des Prüfers in einer Zeile am Ende der Beschreibung des Pull-Requests einfügen, beispielsweise:

```md
reviewer: @jpmedley
```

Wenn Sie eine Überprüfungsanfrage erhalten und Sie von einem anderen Prüfer in der oben beschriebenen Weise ersetzt wurden, überprüfen Sie die Änderungen nicht.
Sobald der in der Beschreibung erwähnte Prüfer die Änderungen genehmigt hat, wird er eine Genehmigung durch die `CODEOWNERS` anfordern.

## Leseliste

Prüfer werden ermutigt, die folgenden Artikel zu lesen, um bei häufigen Aufgaben zu helfen:

- [The Art of Closing](https://blog.jessfraz.com/post/the-art-of-closing/), erklärt, wie man einen unfertigen oder abgelehnten Pull-Request schließt
- [Code Review Guidelines for the Reviewer](https://phauer.com/2018/code-review-guidelines/#code-reviews-guidelines-for-the-reviewer), bietet Beispiele für gutes und schlechtes Feedback
- [How to do a code review](https://google.github.io/eng-practices/review/reviewer/) auf google.github.io/eng-practices
